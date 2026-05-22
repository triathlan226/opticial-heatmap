#!/usr/bin/env python3
from __future__ import annotations

import argparse
import csv
import datetime as dt
import io
import json
import math
import os
import re
import sys
import time
import urllib.parse
import urllib.request
from pathlib import Path


DEFAULT_META = {
    "title": "光通訊 / CPO 供應鏈熱力圖",
    "subtitle": "六大環節、跨市場上市公司、同公司可重複出現在多個供應鏈位置。",
}


def main() -> int:
    args = parse_args()
    root = Path(__file__).resolve().parents[1]
    companies_path = (root / args.companies).resolve()
    segments_path = (root / args.segments).resolve()
    output_path = (root / args.output).resolve()
    report_path = (root / args.report).resolve() if args.report else None

    source_url = args.source_url or os.getenv("SOURCE_CSV_URL") or os.getenv("HEATMAP_SOURCE_CSV_URL")
    source_label = "Google Sheet / remote CSV" if source_url else str(companies_path.relative_to(root))

    segments = read_csv_path(segments_path)
    company_rows = read_csv_url(source_url) if source_url else read_csv_path(companies_path)

    validate_segments(segments)
    validate_companies(company_rows, {row["id"] for row in segments})

    quote_updates = {}
    errors = {}
    if not args.skip_prices:
        symbols = sorted({normalize_quote_symbol(row.get("ticker", ""), row.get("quote_symbol", "")) for row in company_rows})
        for index, symbol in enumerate(symbols, start=1):
            try:
                quote_updates[symbol] = fetch_yahoo_week_change(symbol, timeout=args.timeout)
                print(f"[{index}/{len(symbols)}] {symbol}: {quote_updates[symbol]['change']:.2f}%")
            except Exception as exc:  # noqa: BLE001 - keep updater resilient for mixed-market watchlists.
                errors[symbol] = str(exc)
                print(f"[{index}/{len(symbols)}] {symbol}: {exc}", file=sys.stderr)
            if args.sleep > 0 and index < len(symbols):
                time.sleep(args.sleep)

    companies = build_company_payload(company_rows, quote_updates, errors, args.skip_prices)
    today = dt.date.today().isoformat()
    summary = build_summary_meta(companies, quote_updates, errors)
    meta = {
        **DEFAULT_META,
        "lastUpdated": today,
        **summary,
        "dataNote": build_note(source_label, args.skip_prices, len(quote_updates), len(errors)),
    }

    write_data_js(output_path, meta, segments, companies)
    if report_path:
        report_path.parent.mkdir(parents=True, exist_ok=True)
        report = {
            "updated_at": dt.datetime.now(dt.timezone.utc).isoformat(),
            "source": source_label,
            "rows": len(company_rows),
            "quote_symbols_updated": len(quote_updates),
            "quote_symbols_failed": len(errors),
            "date_range": summary.get("dateRange"),
            "price_status_counts": summary.get("priceStatusCounts"),
            "errors": errors,
        }
        report_path.write_text(json.dumps(report, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")

    if errors and args.fail_on_price_errors:
        return 2
    return 0


def parse_args() -> argparse.Namespace:
    parser = argparse.ArgumentParser(description="Build heatmap data.js from CSV/Google Sheet and weekly prices.")
    parser.add_argument("--companies", default="data/companies.csv", help="Local fallback company CSV path.")
    parser.add_argument("--segments", default="data/segments.csv", help="Segment CSV path.")
    parser.add_argument("--source-url", default="", help="Public CSV or Google Sheet URL. Env fallback: SOURCE_CSV_URL.")
    parser.add_argument("--output", default="data.js", help="Output JavaScript path.")
    parser.add_argument("--report", default="data/price_update_report.json", help="Optional update report JSON path.")
    parser.add_argument("--skip-prices", action="store_true", help="Use manual_change values from CSV without network calls.")
    parser.add_argument("--fail-on-price-errors", action="store_true", help="Exit non-zero when any quote fails.")
    parser.add_argument("--sleep", type=float, default=0.12, help="Delay between quote requests.")
    parser.add_argument("--timeout", type=float, default=15.0, help="HTTP timeout per quote request.")
    return parser.parse_args()


def read_csv_path(path: Path) -> list[dict[str, str]]:
    if not path.exists():
        raise FileNotFoundError(f"CSV not found: {path}")
    return read_csv_text(path.read_text(encoding="utf-8-sig"))


def read_csv_url(url: str) -> list[dict[str, str]]:
    csv_url = normalize_google_sheet_url(url)
    request = urllib.request.Request(csv_url, headers={"User-Agent": "Mozilla/5.0 heatmap-updater"})
    with urllib.request.urlopen(request, timeout=30) as response:
        charset = response.headers.get_content_charset() or "utf-8"
        text = response.read().decode(charset)
    return read_csv_text(text)


def read_csv_text(text: str) -> list[dict[str, str]]:
    reader = csv.DictReader(io.StringIO(text))
    return [{key: (value or "").strip() for key, value in row.items()} for row in reader]


def normalize_google_sheet_url(url: str) -> str:
    if "docs.google.com/spreadsheets" not in url:
        return url
    if "format=csv" in url or "output=csv" in url:
        return url

    match = re.search(r"/spreadsheets/d/([^/]+)", url)
    if not match:
        return url

    parsed = urllib.parse.urlparse(url)
    query = urllib.parse.parse_qs(parsed.query)
    fragment = urllib.parse.parse_qs(parsed.fragment)
    gid = query.get("gid", fragment.get("gid", ["0"]))[0]
    sheet_id = match.group(1)
    return f"https://docs.google.com/spreadsheets/d/{sheet_id}/export?format=csv&gid={gid}"


def validate_segments(rows: list[dict[str, str]]) -> None:
    required = {"id", "title", "eyebrow", "description"}
    for index, row in enumerate(rows, start=2):
        missing = [field for field in required if not row.get(field)]
        if missing:
            raise ValueError(f"segments.csv row {index} missing: {', '.join(missing)}")


def validate_companies(rows: list[dict[str, str]], segment_ids: set[str]) -> None:
    required = {"segment", "ticker", "name", "market", "sub", "role"}
    for index, row in enumerate(rows, start=2):
        missing = [field for field in required if not row.get(field)]
        if missing:
            raise ValueError(f"companies.csv row {index} missing: {', '.join(missing)}")
        if row["segment"] not in segment_ids:
            raise ValueError(f"companies.csv row {index} unknown segment: {row['segment']}")


def normalize_quote_symbol(ticker: str, quote_symbol: str) -> str:
    symbol = (quote_symbol or ticker).strip()
    if symbol.endswith(".SH"):
        return f"{symbol[:-3]}.SS"
    return symbol


def fetch_yahoo_week_change(symbol: str, timeout: float) -> dict[str, float | str]:
    encoded = urllib.parse.quote(symbol, safe="")
    url = f"https://query1.finance.yahoo.com/v8/finance/chart/{encoded}?range=1mo&interval=1d"
    request = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0 heatmap-updater"})
    with urllib.request.urlopen(request, timeout=timeout) as response:
        payload = json.loads(response.read().decode("utf-8"))

    chart = payload.get("chart", {})
    if chart.get("error"):
        raise RuntimeError(chart["error"].get("description") or "Yahoo chart error")
    result = (chart.get("result") or [None])[0]
    if not result:
        raise RuntimeError("No chart result")

    timestamps = result.get("timestamp") or []
    closes = (((result.get("indicators") or {}).get("quote") or [{}])[0]).get("close") or []
    points = [
        (int(ts), float(close))
        for ts, close in zip(timestamps, closes)
        if close is not None and math.isfinite(float(close)) and float(close) > 0
    ]
    if len(points) < 2:
        raise RuntimeError("Not enough close prices")

    latest_ts, latest_close = points[-1]
    target_ts = latest_ts - 7 * 24 * 60 * 60
    candidates = [point for point in points[:-1] if point[0] <= target_ts]
    reference_ts, reference_close = candidates[-1] if candidates else points[max(0, len(points) - 6)]
    if reference_close <= 0:
        raise RuntimeError("Invalid reference close")

    change = (latest_close / reference_close - 1) * 100
    return {
        "change": round(change, 4),
        "latest_close": latest_close,
        "reference_close": reference_close,
        "latest_date": dt.datetime.fromtimestamp(latest_ts, dt.timezone.utc).date().isoformat(),
        "reference_date": dt.datetime.fromtimestamp(reference_ts, dt.timezone.utc).date().isoformat(),
    }


def build_company_payload(
    rows: list[dict[str, str]],
    quote_updates: dict[str, dict[str, float | str]],
    errors: dict[str, str],
    skip_prices: bool,
) -> list[dict[str, object]]:
    payload = []
    for row in rows:
        quote_symbol = normalize_quote_symbol(row["ticker"], row.get("quote_symbol", ""))
        manual_change = parse_float(row.get("manual_change", ""), default=0.0)
        update = quote_updates.get(quote_symbol)
        price_status = "manual" if skip_prices else "error"
        change = manual_change

        item: dict[str, object] = {
            "ticker": row["ticker"],
            "quoteSymbol": quote_symbol,
            "name": row["name"],
            "market": row["market"],
            "segment": row["segment"],
            "sub": row["sub"],
            "role": row["role"],
            "change": round(change, 2),
            "tags": split_tags(row.get("tags", "")),
            "priceStatus": price_status,
        }

        if update:
            change = float(update["change"])
            item.update(
                {
                    "change": round(change, 2),
                    "priceStatus": "ok",
                    "latestClose": update["latest_close"],
                    "referenceClose": update["reference_close"],
                    "priceDate": update["latest_date"],
                    "referenceDate": update["reference_date"],
                }
            )
        elif quote_symbol in errors:
            item["priceError"] = errors[quote_symbol]

        payload.append(item)
    return payload


def parse_float(value: str, default: float) -> float:
    try:
        return float(value)
    except (TypeError, ValueError):
        return default


def split_tags(value: str) -> list[str]:
    return [tag.strip() for tag in re.split(r"[|;]", value or "") if tag.strip()]


def build_summary_meta(
    companies: list[dict[str, object]],
    quote_updates: dict[str, dict[str, float | str]],
    errors: dict[str, str],
) -> dict[str, object]:
    counts: dict[str, int] = {}
    for company in companies:
        status = str(company.get("priceStatus", "unknown"))
        counts[status] = counts.get(status, 0) + 1

    dated = [company for company in companies if company.get("referenceDate") and company.get("priceDate")]
    if dated:
        references = [str(company["referenceDate"]) for company in dated]
        latest = [str(company["priceDate"]) for company in dated]
        date_range = f"{min(references)} → {max(latest)}"
    else:
        date_range = ""

    ranked = [company for company in companies if isinstance(company.get("change"), (int, float))]
    top_gainer = max(ranked, key=lambda item: float(item["change"])) if ranked else None
    top_loser = min(ranked, key=lambda item: float(item["change"])) if ranked else None

    return {
        "dateRange": date_range,
        "totalTiles": len(companies),
        "totalCompanies": len({str(company.get("ticker")) for company in companies if company.get("ticker")}),
        "quoteSymbolsUpdated": len(quote_updates),
        "quoteSymbolsFailed": len(errors),
        "priceStatusCounts": counts,
        "topGainer": summarize_rank(top_gainer),
        "topLoser": summarize_rank(top_loser),
    }


def summarize_rank(company: dict[str, object] | None) -> dict[str, object] | None:
    if not company:
        return None
    return {
        "ticker": company.get("ticker"),
        "name": company.get("name"),
        "change": company.get("change"),
    }


def build_note(source_label: str, skip_prices: bool, updated: int, failed: int) -> str:
    if skip_prices:
        return f"來源：{source_label}；目前使用 CSV manual_change，未抓行情。"
    if failed:
        return f"來源：{source_label}；已更新 {updated} 個報價代號，{failed} 個沿用 manual_change。"
    return f"來源：{source_label}；已更新 {updated} 個報價代號的週漲跌。"


def write_data_js(path: Path, meta: dict[str, str], segments: list[dict[str, str]], companies: list[dict[str, object]]) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    text = "\n\n".join(
        [
            f"window.HEATMAP_META = {json.dumps(meta, ensure_ascii=False, indent=2)};",
            f"window.SUPPLY_CHAIN_SEGMENTS = {json.dumps(segments, ensure_ascii=False, indent=2)};",
            f"window.HEATMAP_COMPANIES = {json.dumps(companies, ensure_ascii=False, indent=2)};",
            "",
        ]
    )
    path.write_text(text, encoding="utf-8")


if __name__ == "__main__":
    raise SystemExit(main())
