# 光通訊 / CPO 供應鏈熱力圖 MVP

這是靜態前端版本，直接打開 `index.html` 即可使用。

## 檔案

- `index.html`：頁面結構
- `styles.css`：版面與熱力圖樣式
- `app.js`：搜尋、篩選、排序、高亮與統計
- `data/companies.csv`：公司與供應鏈位置來源資料
- `data/segments.csv`：六大供應鏈環節
- `data.js`：由腳本產生的前端快取資料
- `scripts/update_heatmap_data.py`：從 CSV/Google Sheet 讀取資料並更新週漲跌

## 本機更新

使用本機 CSV：

```powershell
python scripts/update_heatmap_data.py
```

使用 Google Sheet 或遠端 CSV：

```powershell
$env:SOURCE_CSV_URL="https://docs.google.com/spreadsheets/d/.../edit#gid=0"
python scripts/update_heatmap_data.py
```

不抓行情、只用 `manual_change`：

```powershell
python scripts/update_heatmap_data.py --skip-prices
```

## 每週自動更新

`.github/workflows/update-heatmap.yml` 已設定每週六 10:00 UTC 執行一次。若要用 Google Sheet 當來源，在 GitHub repository secret 新增：

```text
HEATMAP_SOURCE_CSV_URL=https://docs.google.com/spreadsheets/d/.../edit#gid=0
```

若沒有設定 secret，排程會使用 repo 內的 `data/companies.csv`。

## 報價來源

更新腳本使用 Yahoo Finance chart endpoint 抓最近一個交易日與約一週前交易日的收盤價，計算週漲跌。抓不到報價時會沿用 `manual_change`，並在 `data/price_update_report.json` 留下錯誤原因。
