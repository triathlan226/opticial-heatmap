window.HEATMAP_META = {
  "title": "光通訊 / CPO 供應鏈熱力圖",
  "subtitle": "六大環節、跨市場上市公司、同公司可重複出現在多個供應鏈位置。",
  "lastUpdated": "2026-11-07",
  "dateRange": "2026-10-30 → 2026-11-06",
  "totalTiles": 126,
  "totalCompanies": 97,
  "quoteSymbolsUpdated": 97,
  "quoteSymbolsFailed": 0,
  "priceStatusCounts": {
    "ok": 126
  },
  "topGainer": {
    "ticker": "600498.SH",
    "name": "烽火通信",
    "change": 3.13
  },
  "topLoser": {
    "ticker": "LITE",
    "name": "Lumentum",
    "change": -35.94
  },
  "dataNote": "來源：Google Sheet / remote CSV；已更新 97 個報價代號的週漲跌。"
};

window.SUPPLY_CHAIN_SEGMENTS = [
  {
    "id": "asic",
    "title": "ASIC / DSP",
    "eyebrow": "Compute & SerDes",
    "description": "AI ASIC、交換晶片、DSP、SerDes 與高速互連晶片"
  },
  {
    "id": "sipic",
    "title": "矽光子 / PIC",
    "eyebrow": "SiPh & Optical Engine",
    "description": "矽光子 IC、PIC、光引擎、晶圓代工與共同封裝光學"
  },
  {
    "id": "laser",
    "title": "雷射 / 磊晶",
    "eyebrow": "Laser & Epitaxy",
    "description": "InP/GaAs 磊晶、EML/DFB/CW 雷射、化合物半導體"
  },
  {
    "id": "component",
    "title": "元件 / 封裝",
    "eyebrow": "Components & Packaging",
    "description": "TOSA/ROSA、連接器、光纖、封裝、測試與載板"
  },
  {
    "id": "module",
    "title": "光模組",
    "eyebrow": "Transceiver & AOC",
    "description": "800G/1.6T 光模組、AOC、光收發器與整合模組"
  },
  {
    "id": "system",
    "title": "網通系統",
    "eyebrow": "Switch & ODM",
    "description": "交換器、路由器、AI 伺服器、系統組裝與雲端設備"
  }
];

window.HEATMAP_COMPANIES = [
  {
    "ticker": "AVGO",
    "quoteSymbol": "AVGO",
    "name": "Broadcom",
    "market": "US",
    "segment": "asic",
    "sub": "Switch ASIC",
    "role": "Tomahawk / Jericho switch silicon",
    "change": -9.93,
    "tags": [
      "ASIC",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 293.69000244140625,
    "referenceClose": 326.0799865722656,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "asic",
    "sub": "GPU / Network ASIC",
    "role": "GPU, NVLink, Spectrum-X ecosystem",
    "change": -8.8,
    "tags": [
      "GPU",
      "networking"
    ],
    "priceStatus": "ok",
    "latestClose": 186.63999938964844,
    "referenceClose": 204.63999938964844,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "asic",
    "sub": "DSP / PAM4",
    "role": "Optical DSP, custom silicon, DCI chips",
    "change": -28.11,
    "tags": [
      "DSP",
      "custom silicon"
    ],
    "priceStatus": "ok",
    "latestClose": 141.1999969482422,
    "referenceClose": 196.39999389648438,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "CRDO",
    "quoteSymbol": "CRDO",
    "name": "Credo",
    "market": "US",
    "segment": "asic",
    "sub": "Retimer / DSP",
    "role": "High-speed connectivity and optical DSP",
    "change": -20.19,
    "tags": [
      "DSP",
      "retimer"
    ],
    "priceStatus": "ok",
    "latestClose": 120.51000213623047,
    "referenceClose": 150.99000549316406,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "ALAB",
    "quoteSymbol": "ALAB",
    "name": "Astera Labs",
    "market": "US",
    "segment": "asic",
    "sub": "PCIe / CXL",
    "role": "AI data-center connectivity silicon",
    "change": -26.28,
    "tags": [
      "retimer",
      "CXL"
    ],
    "priceStatus": "ok",
    "latestClose": 190.7100067138672,
    "referenceClose": 258.70001220703125,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Laser drivers, TIAs, high-speed analog",
    "change": -9.99,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 210.97999572753906,
    "referenceClose": 234.38999938964844,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "SMTC",
    "quoteSymbol": "SMTC",
    "name": "Semtech",
    "market": "US",
    "segment": "asic",
    "sub": "Signal IC",
    "role": "Signal integrity and optical analog ICs",
    "change": -18.97,
    "tags": [
      "signal"
    ],
    "priceStatus": "ok",
    "latestClose": 103.20999908447266,
    "referenceClose": 127.37999725341797,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "asic",
    "sub": "Network silicon",
    "role": "Silicon One and Acacia optical stack",
    "change": -10.2,
    "tags": [
      "switch",
      "acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 93.8499984741211,
    "referenceClose": 104.51000213623047,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "asic",
    "sub": "Coherent DSP",
    "role": "WaveLogic coherent DSP and systems",
    "change": -24.11,
    "tags": [
      "coherent",
      "DSP"
    ],
    "priceStatus": "ok",
    "latestClose": 243.38999938964844,
    "referenceClose": 320.7200012207031,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "AMD",
    "quoteSymbol": "AMD",
    "name": "AMD",
    "market": "US",
    "segment": "asic",
    "sub": "AI accelerator",
    "role": "AI accelerators and adaptive compute",
    "change": -11.05,
    "tags": [
      "accelerator"
    ],
    "priceStatus": "ok",
    "latestClose": 449.0400085449219,
    "referenceClose": 504.79998779296875,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "asic",
    "sub": "Foundry / I/O",
    "role": "Foundry, Ethernet, historical silicon photonics",
    "change": -14.42,
    "tags": [
      "foundry",
      "ethernet"
    ],
    "priceStatus": "ok",
    "latestClose": 56.279998779296875,
    "referenceClose": 65.76000213623047,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "QCOM",
    "quoteSymbol": "QCOM",
    "name": "Qualcomm",
    "market": "US",
    "segment": "asic",
    "sub": "Connectivity IC",
    "role": "High-speed connectivity and edge AI silicon",
    "change": 0.38,
    "tags": [
      "connectivity"
    ],
    "priceStatus": "ok",
    "latestClose": 165.41000366210938,
    "referenceClose": 164.7899932861328,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "3661.TW",
    "quoteSymbol": "3661.TW",
    "name": "世芯-KY",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "Advanced-node custom ASIC design service",
    "change": -17.37,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 2830.0,
    "referenceClose": 3425.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "3443.TW",
    "quoteSymbol": "3443.TW",
    "name": "創意",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "GUC ASIC design and implementation",
    "change": -18.73,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 6205.0,
    "referenceClose": 7635.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "2454.TW",
    "quoteSymbol": "2454.TW",
    "name": "聯發科",
    "market": "TW",
    "segment": "asic",
    "sub": "Connectivity SoC",
    "role": "Networking, SerDes and edge AI chip exposure",
    "change": -13.41,
    "tags": [
      "SoC"
    ],
    "priceStatus": "ok",
    "latestClose": 3390.0,
    "referenceClose": 3915.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "5274.TWO",
    "quoteSymbol": "5274.TWO",
    "name": "信驊",
    "market": "TW",
    "segment": "asic",
    "sub": "BMC",
    "role": "Server management silicon",
    "change": -28.77,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 11375.0,
    "referenceClose": 15970.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "688536.SH",
    "quoteSymbol": "688536.SS",
    "name": "思瑞浦",
    "market": "CN",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Analog and signal-chain ICs",
    "change": -5.93,
    "tags": [
      "analog"
    ],
    "priceStatus": "ok",
    "latestClose": 253.97999572753906,
    "referenceClose": 270.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "asic",
    "sub": "Laser driver link",
    "role": "Optical chip supplier with upstream exposure",
    "change": -13.08,
    "tags": [
      "optical chip"
    ],
    "priceStatus": "ok",
    "latestClose": 598.9000244140625,
    "referenceClose": 688.989990234375,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "2330.TW",
    "quoteSymbol": "2330.TW",
    "name": "台積電",
    "market": "TW",
    "segment": "sipic",
    "sub": "Foundry",
    "role": "Advanced-node and packaging platform for CPO ecosystem",
    "change": -9.92,
    "tags": [
      "foundry",
      "CoWoS"
    ],
    "priceStatus": "ok",
    "latestClose": 2135.0,
    "referenceClose": 2370.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "AVGO",
    "quoteSymbol": "AVGO",
    "name": "Broadcom",
    "market": "US",
    "segment": "sipic",
    "sub": "Co-packaged optics",
    "role": "CPO roadmap and switch silicon integration",
    "change": -9.93,
    "tags": [
      "CPO",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 293.69000244140625,
    "referenceClose": 326.0799865722656,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical I/O ecosystem",
    "role": "AI cluster architecture drives optical I/O demand",
    "change": -8.8,
    "tags": [
      "AI",
      "optical I/O"
    ],
    "priceStatus": "ok",
    "latestClose": 186.63999938964844,
    "referenceClose": 204.63999938964844,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical platform",
    "role": "DSP plus silicon photonics partnership ecosystem",
    "change": -28.11,
    "tags": [
      "DSP",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 141.1999969482422,
    "referenceClose": 196.39999389648438,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "sipic",
    "sub": "Silicon photonics",
    "role": "Integrated silicon photonics and foundry capabilities",
    "change": -14.42,
    "tags": [
      "SiPh",
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 56.279998779296875,
    "referenceClose": 65.76000213623047,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Lasers, transceivers and optical engine building blocks",
    "change": -8.33,
    "tags": [
      "laser",
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 192.80999755859375,
    "referenceClose": 210.32000732421875,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Datacom lasers and optical components",
    "change": -35.94,
    "tags": [
      "laser",
      "datacom"
    ],
    "priceStatus": "ok",
    "latestClose": 538.5900268554688,
    "referenceClose": 840.7000122070312,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "STM",
    "quoteSymbol": "STM",
    "name": "STMicro",
    "market": "EU",
    "segment": "sipic",
    "sub": "Photonics platform",
    "role": "Photonics and advanced semiconductor platform exposure",
    "change": -10.74,
    "tags": [
      "photonics"
    ],
    "priceStatus": "ok",
    "latestClose": 41.720001220703125,
    "referenceClose": 46.7400016784668,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "GFS",
    "quoteSymbol": "GFS",
    "name": "GlobalFoundries",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Silicon photonics and specialty process platform",
    "change": -7.83,
    "tags": [
      "foundry",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 38.619998931884766,
    "referenceClose": 41.900001525878906,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "TSEM",
    "quoteSymbol": "TSEM",
    "name": "Tower Semiconductor",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Analog, photonics and specialty manufacturing",
    "change": -17.5,
    "tags": [
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 137.33999633789062,
    "referenceClose": 166.47999572753906,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "sipic",
    "sub": "Optical systems",
    "role": "Photonic service engines and coherent optics",
    "change": -10.51,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 7.659999847412109,
    "referenceClose": 8.5600004196167,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "sipic",
    "sub": "Acacia optics",
    "role": "Coherent modules and optical interconnect roadmap",
    "change": -10.2,
    "tags": [
      "Acacia",
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 93.8499984741211,
    "referenceClose": 104.51000213623047,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "sipic",
    "sub": "Coherent optics",
    "role": "Coherent optical engine and network platforms",
    "change": -24.11,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 243.38999938964844,
    "referenceClose": 320.7200012207031,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "POET",
    "quoteSymbol": "POET",
    "name": "POET Technologies",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical interposer",
    "role": "Optical interposer platform for transceivers",
    "change": -2.5,
    "tags": [
      "interposer"
    ],
    "priceStatus": "ok",
    "latestClose": 5.070000171661377,
    "referenceClose": 5.199999809265137,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "LWLG",
    "quoteSymbol": "LWLG",
    "name": "Lightwave Logic",
    "market": "US",
    "segment": "sipic",
    "sub": "EO polymer",
    "role": "Electro-optic polymer material platform",
    "change": -8.0,
    "tags": [
      "material"
    ],
    "priceStatus": "ok",
    "latestClose": 4.369999885559082,
    "referenceClose": 4.75,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "4966.TWO",
    "quoteSymbol": "4966.TWO",
    "name": "譜瑞-KY",
    "market": "TW",
    "segment": "sipic",
    "sub": "High-speed interface",
    "role": "High-speed interface ICs and data transmission",
    "change": -17.89,
    "tags": [
      "interface"
    ],
    "priceStatus": "ok",
    "latestClose": 385.5,
    "referenceClose": 469.5,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "6789.TW",
    "quoteSymbol": "6789.TW",
    "name": "采鈺",
    "market": "TW",
    "segment": "sipic",
    "sub": "Optical process",
    "role": "Optical semiconductor process and sensor platform",
    "change": -20.07,
    "tags": [
      "process"
    ],
    "priceStatus": "ok",
    "latestClose": 328.5,
    "referenceClose": 411.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "688313.SH",
    "quoteSymbol": "688313.SS",
    "name": "仕佳光子",
    "market": "CN",
    "segment": "sipic",
    "sub": "PLC / optical chip",
    "role": "PLC splitter, AWG and optical chip supplier",
    "change": -8.78,
    "tags": [
      "PLC",
      "chip"
    ],
    "priceStatus": "ok",
    "latestClose": 84.41000366210938,
    "referenceClose": 92.52999877929688,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "laser",
    "sub": "Laser / InP",
    "role": "InP lasers, VCSELs, coherent and datacom components",
    "change": -8.33,
    "tags": [
      "InP",
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 192.80999755859375,
    "referenceClose": 210.32000732421875,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "laser",
    "sub": "Datacom laser",
    "role": "EML, DFB and high-speed datacom laser supply",
    "change": -35.94,
    "tags": [
      "EML",
      "DFB"
    ],
    "priceStatus": "ok",
    "latestClose": 538.5900268554688,
    "referenceClose": 840.7000122070312,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "laser",
    "sub": "Laser driver / TIA",
    "role": "Laser drivers, TIAs and analog front-end",
    "change": -9.99,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 210.97999572753906,
    "referenceClose": 234.38999938964844,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "IPGP",
    "quoteSymbol": "IPGP",
    "name": "IPG Photonics",
    "market": "US",
    "segment": "laser",
    "sub": "Fiber laser",
    "role": "Laser technology and optical components",
    "change": -10.03,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 65.30999755859375,
    "referenceClose": 72.58999633789062,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "AXTI",
    "quoteSymbol": "AXTI",
    "name": "AXT",
    "market": "US",
    "segment": "laser",
    "sub": "Substrate",
    "role": "Compound semiconductor substrates",
    "change": -29.39,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 38.880001068115234,
    "referenceClose": 55.060001373291016,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "IQE.L",
    "quoteSymbol": "IQE.L",
    "name": "IQE",
    "market": "EU",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "Compound semiconductor epitaxy wafers",
    "change": -16.69,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 28.700000762939453,
    "referenceClose": 34.45000076293945,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Compound semiconductor and optical components",
    "change": -23.16,
    "tags": [
      "InP",
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 1360.0,
    "referenceClose": 1770.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "6503.T",
    "quoteSymbol": "6503.T",
    "name": "三菱電機",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Optical devices, lasers and industrial electronics",
    "change": -3.08,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 4497.0,
    "referenceClose": 4640.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "6965.T",
    "quoteSymbol": "6965.T",
    "name": "浜松光子",
    "market": "JP",
    "segment": "laser",
    "sub": "Photonics",
    "role": "Photodetectors, optoelectronics and photonics devices",
    "change": -12.55,
    "tags": [
      "detector"
    ],
    "priceStatus": "ok",
    "latestClose": 1881.5,
    "referenceClose": 2151.5,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "AMS.SW",
    "quoteSymbol": "AMS.SW",
    "name": "ams OSRAM",
    "market": "EU",
    "segment": "laser",
    "sub": "Emitter",
    "role": "Emitters, sensors and photonics devices",
    "change": -21.06,
    "tags": [
      "emitter"
    ],
    "priceStatus": "ok",
    "latestClose": 14.6899995803833,
    "referenceClose": 18.610000610351562,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "3105.TWO",
    "quoteSymbol": "3105.TWO",
    "name": "穩懋",
    "market": "TW",
    "segment": "laser",
    "sub": "GaAs foundry",
    "role": "GaAs foundry with photonics-adjacent capabilities",
    "change": -29.76,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 406.0,
    "referenceClose": 578.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "3081.TWO",
    "quoteSymbol": "3081.TWO",
    "name": "聯亞",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "III-V epitaxy wafers for optical communications",
    "change": -26.16,
    "tags": [
      "epi",
      "III-V"
    ],
    "priceStatus": "ok",
    "latestClose": 1750.0,
    "referenceClose": 2370.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "2455.TW",
    "quoteSymbol": "2455.TW",
    "name": "全新",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "GaAs/InP epitaxy and compound semiconductor materials",
    "change": -28.64,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 319.0,
    "referenceClose": 447.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "8086.TWO",
    "quoteSymbol": "8086.TWO",
    "name": "宏捷科",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "GaAs foundry and compound semiconductor devices",
    "change": -20.79,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 90.30000305175781,
    "referenceClose": 114.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "4991.TWO",
    "quoteSymbol": "4991.TWO",
    "name": "環宇-KY",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "Compound semiconductor and optical device exposure",
    "change": -25.0,
    "tags": [
      "compound"
    ],
    "priceStatus": "ok",
    "latestClose": 291.0,
    "referenceClose": 388.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "laser",
    "sub": "Optical component",
    "role": "Optical communication components and modules",
    "change": -29.08,
    "tags": [
      "optical"
    ],
    "priceStatus": "ok",
    "latestClose": 317.0,
    "referenceClose": 447.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser chip",
    "role": "Optical communication laser chips",
    "change": -13.08,
    "tags": [
      "laser chip"
    ],
    "priceStatus": "ok",
    "latestClose": 598.9000244140625,
    "referenceClose": 688.989990234375,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser / module",
    "role": "Laser equipment and optical communication products",
    "change": 1.79,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 63.2599983215332,
    "referenceClose": 62.150001525878906,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "APH",
    "quoteSymbol": "APH",
    "name": "Amphenol",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "High-speed interconnect and optical connector ecosystem",
    "change": -5.94,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 74.58999633789062,
    "referenceClose": 79.30000305175781,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "GLW",
    "quoteSymbol": "GLW",
    "name": "Corning",
    "market": "US",
    "segment": "component",
    "sub": "Fiber / glass",
    "role": "Optical fiber, glass and datacenter cabling",
    "change": -13.93,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 106.12999725341797,
    "referenceClose": 123.30999755859375,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "TEL",
    "quoteSymbol": "TEL",
    "name": "TE Connectivity",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "Connectors, cable assemblies and sensors",
    "change": -2.83,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 207.00999450683594,
    "referenceClose": 213.02999877929688,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers, modulators and optical subassemblies",
    "change": -8.33,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 192.80999755859375,
    "referenceClose": 210.32000732421875,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers and optical communication components",
    "change": -35.94,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 538.5900268554688,
    "referenceClose": 840.7000122070312,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "component",
    "sub": "Manufacturing",
    "role": "Precision optical manufacturing and assembly",
    "change": -0.05,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 327.1300048828125,
    "referenceClose": 327.2900085449219,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "3711.TW",
    "quoteSymbol": "3711.TW",
    "name": "日月光投控",
    "market": "TW",
    "segment": "component",
    "sub": "Advanced packaging",
    "role": "Semiconductor packaging and system-in-package",
    "change": -21.11,
    "tags": [
      "packaging"
    ],
    "priceStatus": "ok",
    "latestClose": 527.0,
    "referenceClose": 668.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "2449.TW",
    "quoteSymbol": "2449.TW",
    "name": "京元電",
    "market": "TW",
    "segment": "component",
    "sub": "Test",
    "role": "IC testing services for high-speed chips",
    "change": -18.74,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 206.0,
    "referenceClose": 253.5,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "6515.TW",
    "quoteSymbol": "6515.TW",
    "name": "穎崴",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card / socket",
    "role": "High-speed test interface and sockets",
    "change": -27.82,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 3295.0,
    "referenceClose": 4565.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "6223.TWO",
    "quoteSymbol": "6223.TWO",
    "name": "旺矽",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card",
    "role": "Probe cards and testing interface",
    "change": -25.27,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 3445.0,
    "referenceClose": 4610.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "3037.TW",
    "quoteSymbol": "3037.TW",
    "name": "欣興",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and advanced PCB",
    "change": -26.49,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 727.0,
    "referenceClose": 989.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "3189.TW",
    "quoteSymbol": "3189.TW",
    "name": "景碩",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate supplier",
    "change": -28.0,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 671.0,
    "referenceClose": 932.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "8046.TW",
    "quoteSymbol": "8046.TW",
    "name": "南電",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and PCB",
    "change": -26.47,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 875.0,
    "referenceClose": 1190.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "2383.TW",
    "quoteSymbol": "2383.TW",
    "name": "台光電",
    "market": "TW",
    "segment": "component",
    "sub": "Copper clad laminate",
    "role": "High-speed CCL for AI servers and switches",
    "change": -18.29,
    "tags": [
      "CCL"
    ],
    "priceStatus": "ok",
    "latestClose": 3820.0,
    "referenceClose": 4675.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "component",
    "sub": "Connector / RF",
    "role": "Connectors and optical communication components",
    "change": -18.29,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 1005.0,
    "referenceClose": 1230.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "3363.TWO",
    "quoteSymbol": "3363.TWO",
    "name": "上詮",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber optic components and passive devices",
    "change": -24.03,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 360.5,
    "referenceClose": 474.5,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "component",
    "sub": "Optical subassembly",
    "role": "Optical communication subassemblies and packaging",
    "change": -24.45,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 309.0,
    "referenceClose": 409.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "6451.TW",
    "quoteSymbol": "6451.TW",
    "name": "訊芯-KY",
    "market": "TW",
    "segment": "component",
    "sub": "SiP / optical packaging",
    "role": "System-in-package and optical communication assembly",
    "change": -26.14,
    "tags": [
      "SiP"
    ],
    "priceStatus": "ok",
    "latestClose": 243.0,
    "referenceClose": 329.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber arrays, splitters and optical passive components",
    "change": -22.4,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 395.0,
    "referenceClose": 509.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical communication component supplier",
    "change": -19.24,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 66.30000305175781,
    "referenceClose": 82.0999984741211,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive components and precision parts",
    "change": -17.57,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 122.0,
    "referenceClose": 148.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "300548.SZ",
    "quoteSymbol": "300548.SZ",
    "name": "博創科技",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive and active components",
    "change": -15.93,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 106.0,
    "referenceClose": 126.08000183105469,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "601869.SH",
    "quoteSymbol": "601869.SS",
    "name": "長飛光纖",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber",
    "role": "Optical fiber and cable",
    "change": -5.09,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 240.0,
    "referenceClose": 252.8800048828125,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "600487.SH",
    "quoteSymbol": "600487.SS",
    "name": "亨通光電",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber cable and optical network products",
    "change": -3.58,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 40.900001525878906,
    "referenceClose": 42.41999816894531,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "5801.T",
    "quoteSymbol": "5801.T",
    "name": "古河電工",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Optical fiber, cable and network materials",
    "change": -30.15,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 1960.0,
    "referenceClose": 2806.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "5803.T",
    "quoteSymbol": "5803.T",
    "name": "藤倉",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber, cable and optical interconnect products",
    "change": -24.4,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 2962.0,
    "referenceClose": 3918.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "4062.T",
    "quoteSymbol": "4062.T",
    "name": "Ibiden",
    "market": "JP",
    "segment": "component",
    "sub": "Substrate",
    "role": "Advanced IC substrates",
    "change": -26.46,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 6147.0,
    "referenceClose": 8359.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom and telecom optical transceivers",
    "change": -8.33,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 192.80999755859375,
    "referenceClose": 210.32000732421875,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "module",
    "sub": "Laser / module",
    "role": "Laser engines and optical module supply",
    "change": -35.94,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 538.5900268554688,
    "referenceClose": 840.7000122070312,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "module",
    "sub": "Optical manufacturing",
    "role": "Optical module contract manufacturing",
    "change": -0.05,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 327.1300048828125,
    "referenceClose": 327.2900085449219,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "module",
    "sub": "Coherent module",
    "role": "Coherent optical modules and transport platforms",
    "change": -24.11,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 243.38999938964844,
    "referenceClose": 320.7200012207031,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "module",
    "sub": "Acacia module",
    "role": "Acacia coherent optics and pluggable modules",
    "change": -10.2,
    "tags": [
      "Acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 93.8499984741211,
    "referenceClose": 104.51000213623047,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "module",
    "sub": "Optical module",
    "role": "Coherent optics and network system modules",
    "change": -10.51,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 7.659999847412109,
    "referenceClose": 8.5600004196167,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical communication modules and components",
    "change": -29.08,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 317.0,
    "referenceClose": 447.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "4977.TW",
    "quoteSymbol": "4977.TW",
    "name": "眾達-KY",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical transceiver supplier",
    "change": -4.62,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 165.0,
    "referenceClose": 173.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver component",
    "role": "Optical communication and connector products",
    "change": -18.29,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1005.0,
    "referenceClose": 1230.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "module",
    "sub": "OSA",
    "role": "Optical subassemblies for transceivers",
    "change": -24.45,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 309.0,
    "referenceClose": 409.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "module",
    "sub": "Passive optical",
    "role": "Fiber components used in modules",
    "change": -22.4,
    "tags": [
      "passive"
    ],
    "priceStatus": "ok",
    "latestClose": 395.0,
    "referenceClose": 509.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module exposure",
    "change": -19.24,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 66.30000305175781,
    "referenceClose": 82.0999984741211,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "4908.TWO",
    "quoteSymbol": "4908.TWO",
    "name": "前鼎",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module and equipment",
    "change": -20.22,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 144.0,
    "referenceClose": 180.5,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "300308.SZ",
    "quoteSymbol": "300308.SZ",
    "name": "中際旭創",
    "market": "CN",
    "segment": "module",
    "sub": "800G / 1.6T",
    "role": "High-speed optical transceiver leader",
    "change": -18.99,
    "tags": [
      "800G",
      "1.6T"
    ],
    "priceStatus": "ok",
    "latestClose": 448.0,
    "referenceClose": 553.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "300502.SZ",
    "quoteSymbol": "300502.SZ",
    "name": "新易盛",
    "market": "CN",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom optical transceivers",
    "change": -12.19,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 172.10000610351562,
    "referenceClose": 196.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "002281.SZ",
    "quoteSymbol": "002281.SZ",
    "name": "光迅科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical devices and modules",
    "change": -11.01,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 91.30000305175781,
    "referenceClose": 102.5999984741211,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "603083.SH",
    "quoteSymbol": "603083.SS",
    "name": "劍橋科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical modules and broadband equipment",
    "change": -16.29,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 104.80999755859375,
    "referenceClose": 125.19999694824219,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical engine parts",
    "role": "High-speed module precision components",
    "change": -17.57,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 122.0,
    "referenceClose": 148.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "688205.SH",
    "quoteSymbol": "688205.SS",
    "name": "德科立",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical transceiver modules",
    "change": -10.09,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 92.16999816894531,
    "referenceClose": 102.51000213623047,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication and laser products",
    "change": 1.79,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 63.2599983215332,
    "referenceClose": 62.150001525878906,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical network",
    "role": "Optical network systems and modules",
    "change": 3.13,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 27.0,
    "referenceClose": 26.18000030517578,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "module",
    "sub": "Optical device",
    "role": "Optical components and communication devices",
    "change": -23.16,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1360.0,
    "referenceClose": 1770.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "ANET",
    "quoteSymbol": "ANET",
    "name": "Arista Networks",
    "market": "US",
    "segment": "system",
    "sub": "AI switch",
    "role": "AI datacenter Ethernet switches",
    "change": 1.15,
    "tags": [
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 170.8000030517578,
    "referenceClose": 168.86000061035156,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "system",
    "sub": "Switch / router",
    "role": "Enterprise and cloud networking systems",
    "change": -10.2,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 93.8499984741211,
    "referenceClose": 104.51000213623047,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "HPE",
    "quoteSymbol": "HPE",
    "name": "HPE",
    "market": "US",
    "segment": "system",
    "sub": "Server / networking",
    "role": "AI servers, networking and cloud infrastructure",
    "change": -18.73,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 44.77000045776367,
    "referenceClose": 55.09000015258789,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "DELL",
    "quoteSymbol": "DELL",
    "name": "Dell",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and enterprise infrastructure",
    "change": -22.57,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 328.5299987792969,
    "referenceClose": 424.29998779296875,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "SMCI",
    "quoteSymbol": "SMCI",
    "name": "Supermicro",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server platforms and rack-scale systems",
    "change": -12.72,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 28.760000228881836,
    "referenceClose": 32.95000076293945,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "CLS",
    "quoteSymbol": "CLS",
    "name": "Celestica",
    "market": "US",
    "segment": "system",
    "sub": "ODM / EMS",
    "role": "Cloud hardware and networking manufacturing",
    "change": -22.16,
    "tags": [
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 206.67999267578125,
    "referenceClose": 265.5299987792969,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "JBL",
    "quoteSymbol": "JBL",
    "name": "Jabil",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing for networking systems",
    "change": -12.33,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 239.08999633789062,
    "referenceClose": 272.7200012207031,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "FLEX",
    "quoteSymbol": "FLEX",
    "name": "Flex",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing and cloud hardware",
    "change": -19.31,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 69.77999877929688,
    "referenceClose": 86.4800033569336,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "2345.TW",
    "quoteSymbol": "2345.TW",
    "name": "智邦",
    "market": "TW",
    "segment": "system",
    "sub": "Switch ODM",
    "role": "White-box switch and cloud networking ODM",
    "change": -20.74,
    "tags": [
      "switch",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 1280.0,
    "referenceClose": 1615.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "2382.TW",
    "quoteSymbol": "2382.TW",
    "name": "廣達",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and cloud infrastructure ODM",
    "change": -8.65,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 290.5,
    "referenceClose": 318.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "6669.TW",
    "quoteSymbol": "6669.TW",
    "name": "緯穎",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "Cloud datacenter server ODM",
    "change": -14.09,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 1555.0,
    "referenceClose": 1810.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "2317.TW",
    "quoteSymbol": "2317.TW",
    "name": "鴻海",
    "market": "TW",
    "segment": "system",
    "sub": "EMS / server",
    "role": "AI server and system assembly",
    "change": -8.55,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 224.5,
    "referenceClose": 245.5,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "2308.TW",
    "quoteSymbol": "2308.TW",
    "name": "台達電",
    "market": "TW",
    "segment": "system",
    "sub": "Power / thermal",
    "role": "Power, thermal and datacenter infrastructure",
    "change": -20.97,
    "tags": [
      "power",
      "thermal"
    ],
    "priceStatus": "ok",
    "latestClose": 1055.0,
    "referenceClose": 1335.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "3706.TW",
    "quoteSymbol": "3706.TW",
    "name": "神達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and datacenter system integration",
    "change": -11.46,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 68.0,
    "referenceClose": 76.80000305175781,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "3231.TW",
    "quoteSymbol": "3231.TW",
    "name": "緯創",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and system integration",
    "change": -12.81,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 160.0,
    "referenceClose": 183.5,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "2356.TW",
    "quoteSymbol": "2356.TW",
    "name": "英業達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and cloud equipment manufacturing",
    "change": -11.6,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 52.599998474121094,
    "referenceClose": 59.5,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "3380.TW",
    "quoteSymbol": "3380.TW",
    "name": "明泰",
    "market": "TW",
    "segment": "system",
    "sub": "Networking",
    "role": "Networking products and broadband equipment",
    "change": -13.19,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 26.649999618530273,
    "referenceClose": 30.700000762939453,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "6285.TW",
    "quoteSymbol": "6285.TW",
    "name": "啟碁",
    "market": "TW",
    "segment": "system",
    "sub": "Network device",
    "role": "Wireless and networking equipment",
    "change": -22.77,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 164.5,
    "referenceClose": 213.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "system",
    "sub": "Optical systems",
    "role": "Optical communication and laser systems",
    "change": 1.79,
    "tags": [
      "system"
    ],
    "priceStatus": "ok",
    "latestClose": 63.2599983215332,
    "referenceClose": 62.150001525878906,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "system",
    "sub": "Optical network",
    "role": "Optical transmission and network equipment",
    "change": 3.13,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 27.0,
    "referenceClose": 26.18000030517578,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "000063.SZ",
    "quoteSymbol": "000063.SZ",
    "name": "中興通訊",
    "market": "CN",
    "segment": "system",
    "sub": "Telecom equipment",
    "role": "Telecom and datacenter network equipment",
    "change": 3.07,
    "tags": [
      "telecom"
    ],
    "priceStatus": "ok",
    "latestClose": 28.200000762939453,
    "referenceClose": 27.360000610351562,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "6701.T",
    "quoteSymbol": "6701.T",
    "name": "NEC",
    "market": "JP",
    "segment": "system",
    "sub": "Network systems",
    "role": "Telecom, submarine and network systems",
    "change": -10.99,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 4317.0,
    "referenceClose": 4850.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  },
  {
    "ticker": "6702.T",
    "quoteSymbol": "6702.T",
    "name": "Fujitsu",
    "market": "JP",
    "segment": "system",
    "sub": "ICT systems",
    "role": "ICT infrastructure and network systems",
    "change": -11.15,
    "tags": [
      "ICT"
    ],
    "priceStatus": "ok",
    "latestClose": 3218.0,
    "referenceClose": 3622.0,
    "priceDate": "2026-11-06",
    "referenceDate": "2026-10-30"
  }
];

