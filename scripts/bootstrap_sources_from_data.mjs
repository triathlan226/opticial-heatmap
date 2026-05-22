import fs from "node:fs/promises";
import path from "node:path";
import vm from "node:vm";

const root = path.resolve(import.meta.dirname, "..");
const dataJsPath = path.join(root, "data.js");
const dataDir = path.join(root, "data");

const source = await fs.readFile(dataJsPath, "utf8");
const context = { window: {} };
vm.createContext(context);
vm.runInContext(source, context, { filename: "data.js" });

await fs.mkdir(dataDir, { recursive: true });

const segmentRows = context.window.SUPPLY_CHAIN_SEGMENTS.map((segment) => ({
  id: segment.id,
  title: segment.title,
  eyebrow: segment.eyebrow,
  description: segment.description
}));

const companyRows = context.window.HEATMAP_COMPANIES.map((company) => ({
  segment: company.segment,
  ticker: company.ticker,
  quote_symbol: "",
  name: company.name,
  market: company.market,
  sub: company.sub,
  role: company.role,
  tags: (company.tags || []).join("|"),
  manual_change: Number(company.change).toFixed(2)
}));

await fs.writeFile(
  path.join(dataDir, "segments.csv"),
  toCsv(segmentRows, ["id", "title", "eyebrow", "description"]),
  "utf8"
);

await fs.writeFile(
  path.join(dataDir, "companies.csv"),
  toCsv(companyRows, [
    "segment",
    "ticker",
    "quote_symbol",
    "name",
    "market",
    "sub",
    "role",
    "tags",
    "manual_change"
  ]),
  "utf8"
);

console.log(`Wrote ${segmentRows.length} segments and ${companyRows.length} company rows.`);

function toCsv(rows, fields) {
  const lines = [fields.join(",")];
  for (const row of rows) {
    lines.push(fields.map((field) => escapeCsv(row[field] ?? "")).join(","));
  }
  return `${lines.join("\n")}\n`;
}

function escapeCsv(value) {
  const text = String(value);
  if (/[",\n\r]/.test(text)) {
    return `"${text.replace(/"/g, '""')}"`;
  }
  return text;
}
