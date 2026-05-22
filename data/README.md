# Data Source

`companies.csv` is the editable source of truth for the heatmap.

Required columns:

- `segment`: one of the IDs in `segments.csv`
- `ticker`: display ticker
- `quote_symbol`: optional Yahoo Finance symbol override
- `name`: company name
- `market`: `TW`, `US`, `CN`, `JP`, or `EU`
- `sub`: short category shown on the tile
- `role`: detail text
- `tags`: optional tags separated by `|`
- `manual_change`: fallback weekly percent change when a quote cannot be fetched

## Google Sheet

Create a sheet with the same columns as `companies.csv`, then publish or share it so the CSV export URL is public.

Set the URL as:

```text
SOURCE_CSV_URL=https://docs.google.com/spreadsheets/d/.../edit#gid=0
```

The updater converts normal Google Sheet links to CSV export links automatically.
