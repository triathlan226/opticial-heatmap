const segments = window.SUPPLY_CHAIN_SEGMENTS;
const companies = window.HEATMAP_COMPANIES.map((item, index) => ({
  ...item,
  id: `${item.ticker}-${item.segment}-${index}`
}));

const state = {
  search: "",
  market: "all",
  segment: "all",
  sort: "chain",
  selectedTicker: ""
};

const marketLabels = {
  TW: "台",
  US: "美",
  CN: "中",
  JP: "日",
  EU: "歐"
};

const segmentIndex = new Map(segments.map((segment, index) => [segment.id, index]));
const segmentById = new Map(segments.map((segment) => [segment.id, segment]));

const pageTitle = document.querySelector("#pageTitle");
const pageSubtitle = document.querySelector("#pageSubtitle");
const lastUpdated = document.querySelector("#lastUpdated");
const dataNote = document.querySelector("#dataNote");
const searchInput = document.querySelector("#searchInput");
const marketFilter = document.querySelector("#marketFilter");
const segmentFilter = document.querySelector("#segmentFilter");
const sortMode = document.querySelector("#sortMode");
const resetButton = document.querySelector("#resetButton");
const heatmapGrid = document.querySelector("#heatmapGrid");
const detailTitle = document.querySelector("#detailTitle");
const detailCopy = document.querySelector("#detailCopy");
const detailList = document.querySelector("#detailList");
const statCells = document.querySelector("#statCells");
const statCompanies = document.querySelector("#statCompanies");
const statAdvancers = document.querySelector("#statAdvancers");
const statAverage = document.querySelector("#statAverage");

function init() {
  pageTitle.textContent = window.HEATMAP_META.title;
  pageSubtitle.textContent = window.HEATMAP_META.subtitle;
  lastUpdated.textContent = window.HEATMAP_META.lastUpdated;
  dataNote.textContent = window.HEATMAP_META.dataNote;

  for (const segment of segments) {
    const option = document.createElement("option");
    option.value = segment.id;
    option.textContent = segment.title;
    segmentFilter.append(option);
  }

  searchInput.addEventListener("input", (event) => {
    state.search = event.target.value.trim().toLowerCase();
    render();
  });

  marketFilter.addEventListener("change", (event) => {
    state.market = event.target.value;
    render();
  });

  segmentFilter.addEventListener("change", (event) => {
    state.segment = event.target.value;
    render();
  });

  sortMode.addEventListener("change", (event) => {
    state.sort = event.target.value;
    render();
  });

  resetButton.addEventListener("click", () => {
    state.search = "";
    state.market = "all";
    state.segment = "all";
    state.sort = "chain";
    state.selectedTicker = "";
    searchInput.value = "";
    marketFilter.value = "all";
    segmentFilter.value = "all";
    sortMode.value = "chain";
    render();
  });

  render();
}

function getFilteredCompanies() {
  return companies
    .filter((company) => state.market === "all" || company.market === state.market)
    .filter((company) => state.segment === "all" || company.segment === state.segment)
    .filter((company) => {
      if (!state.search) return true;
      const text = [
        company.ticker,
        company.name,
        company.sub,
        company.role,
        company.market,
        company.tags.join(" ")
      ].join(" ").toLowerCase();
      return text.includes(state.search);
    })
    .sort(compareCompanies);
}

function compareCompanies(a, b) {
  if (state.sort === "gain") return b.change - a.change || a.ticker.localeCompare(b.ticker);
  if (state.sort === "loss") return a.change - b.change || a.ticker.localeCompare(b.ticker);
  if (state.sort === "ticker") return a.ticker.localeCompare(b.ticker);
  return segmentIndex.get(a.segment) - segmentIndex.get(b.segment) || a.ticker.localeCompare(b.ticker);
}

function render() {
  const filtered = getFilteredCompanies();
  renderStats(filtered);
  renderHeatmap(filtered);
  renderDetails(filtered);
}

function renderStats(items) {
  const unique = new Set(items.map((item) => item.ticker));
  const advancers = items.filter((item) => item.change > 0).length;
  const average = items.length ? items.reduce((sum, item) => sum + item.change, 0) / items.length : 0;

  statCells.textContent = String(items.length);
  statCompanies.textContent = String(unique.size);
  statAdvancers.textContent = items.length ? `${Math.round((advancers / items.length) * 100)}%` : "0%";
  statAverage.textContent = formatPercent(average);
  statAverage.className = average >= 0 ? "isPositive" : "isNegative";
}

function renderHeatmap(items) {
  heatmapGrid.innerHTML = "";

  const visibleSegments = state.segment === "all"
    ? segments
    : segments.filter((segment) => segment.id === state.segment);

  for (const segment of visibleSegments) {
    const section = document.createElement("article");
    section.className = "segmentColumn";

    const header = document.createElement("header");
    header.className = "segmentHeader";
    header.innerHTML = `
      <span>${segment.eyebrow}</span>
      <h2>${segment.title}</h2>
      <p>${segment.description}</p>
    `;

    const cells = document.createElement("div");
    cells.className = "cellStack";

    const segmentItems = items.filter((item) => item.segment === segment.id);
    if (!segmentItems.length) {
      const empty = document.createElement("div");
      empty.className = "emptyState";
      empty.textContent = "沒有符合篩選的公司";
      cells.append(empty);
    } else {
      for (const company of segmentItems) {
        cells.append(createTile(company));
      }
    }

    section.append(header, cells);
    heatmapGrid.append(section);
  }
}

function createTile(company) {
  const tile = document.createElement("button");
  const palette = getHeatColor(company.change);
  const isSelected = state.selectedTicker && state.selectedTicker === company.ticker;
  const isDimmed = state.selectedTicker && state.selectedTicker !== company.ticker;

  tile.type = "button";
  tile.className = [
    "heatTile",
    company.change >= 0 ? "heatTile--up" : "heatTile--down",
    isSelected ? "isSelected" : "",
    isDimmed ? "isDimmed" : ""
  ].filter(Boolean).join(" ");
  tile.style.background = palette.background;
  tile.style.color = palette.color;
  tile.title = `${company.name} ${company.ticker} | ${company.sub} | ${formatPercent(company.change)}`;
  tile.setAttribute("aria-label", tile.title);
  tile.innerHTML = `
    <span class="heatTile__top">
      <strong>${company.ticker}</strong>
      <em>${formatPercent(company.change)}</em>
    </span>
    <span class="heatTile__name">${company.name}</span>
    <span class="heatTile__bottom">
      <span>${company.sub}</span>
      <i>${marketLabels[company.market] || company.market}</i>
    </span>
  `;

  tile.addEventListener("click", () => {
    state.selectedTicker = state.selectedTicker === company.ticker ? "" : company.ticker;
    render();
  });

  return tile;
}

function renderDetails(filteredItems) {
  detailList.innerHTML = "";

  if (state.selectedTicker) {
    const appearances = companies
      .filter((item) => item.ticker === state.selectedTicker)
      .sort((a, b) => segmentIndex.get(a.segment) - segmentIndex.get(b.segment));
    const first = appearances[0];

    detailTitle.textContent = `${first.name} (${first.ticker})`;
    detailCopy.textContent = `${marketLabels[first.market] || first.market}股，出現在 ${appearances.length} 個供應鏈位置。點同一格可取消高亮。`;
    appearances.forEach((item) => detailList.append(createDetailItem(item)));
    return;
  }

  const leaders = [...filteredItems]
    .sort((a, b) => Math.abs(b.change) - Math.abs(a.change))
    .slice(0, 8);

  detailTitle.textContent = "點一家公司，看它在哪些環節卡位";
  detailCopy.textContent = leaders.length
    ? "目前先列出波動最大的幾個格子。"
    : "沒有符合條件的資料。";

  leaders.forEach((item) => detailList.append(createDetailItem(item)));
}

function createDetailItem(item) {
  const segment = segmentById.get(item.segment);
  const row = document.createElement("div");
  row.className = "detailItem";
  row.innerHTML = `
    <div>
      <strong>${segment.title}</strong>
      <span>${item.sub}</span>
      <p>${item.role}</p>
    </div>
    <em class="${item.change >= 0 ? "isPositive" : "isNegative"}">${formatPercent(item.change)}</em>
  `;
  return row;
}

function getHeatColor(value) {
  const cap = 10;
  const intensity = Math.min(Math.abs(value) / cap, 1);

  if (value >= 0) {
    const r = 255 - Math.round(84 * intensity);
    const g = 241 - Math.round(205 * intensity);
    const b = 242 - Math.round(186 * intensity);
    return {
      background: `rgb(${r}, ${g}, ${b})`,
      color: intensity > 0.55 ? "#fff7f7" : "#4b1018"
    };
  }

  const r = 236 - Math.round(203 * intensity);
  const g = 253 - Math.round(124 * intensity);
  const b = 245 - Math.round(178 * intensity);
  return {
    background: `rgb(${r}, ${g}, ${b})`,
    color: intensity > 0.55 ? "#f1fff7" : "#06371f"
  };
}

function formatPercent(value) {
  const sign = value > 0 ? "+" : "";
  return `${sign}${value.toFixed(1)}%`;
}

init();
