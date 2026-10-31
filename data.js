window.HEATMAP_META = {
  "title": "光通訊 / CPO 供應鏈熱力圖",
  "subtitle": "六大環節、跨市場上市公司、同公司可重複出現在多個供應鏈位置。",
  "lastUpdated": "2026-10-31",
  "dateRange": "2026-10-23 → 2026-10-30",
  "totalTiles": 126,
  "totalCompanies": 97,
  "quoteSymbolsUpdated": 97,
  "quoteSymbolsFailed": 0,
  "priceStatusCounts": {
    "ok": 126
  },
  "topGainer": {
    "ticker": "3105.TWO",
    "name": "穩懋",
    "change": 18.93
  },
  "topLoser": {
    "ticker": "688205.SH",
    "name": "德科立",
    "change": -26.67
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
    "change": 1.37,
    "tags": [
      "ASIC",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 326.0799865722656,
    "referenceClose": 321.67999267578125,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "asic",
    "sub": "GPU / Network ASIC",
    "role": "GPU, NVLink, Spectrum-X ecosystem",
    "change": -3.0,
    "tags": [
      "GPU",
      "networking"
    ],
    "priceStatus": "ok",
    "latestClose": 204.63999938964844,
    "referenceClose": 210.9600067138672,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "asic",
    "sub": "DSP / PAM4",
    "role": "Optical DSP, custom silicon, DCI chips",
    "change": -14.05,
    "tags": [
      "DSP",
      "custom silicon"
    ],
    "priceStatus": "ok",
    "latestClose": 196.39999389648438,
    "referenceClose": 228.50999450683594,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "CRDO",
    "quoteSymbol": "CRDO",
    "name": "Credo",
    "market": "US",
    "segment": "asic",
    "sub": "Retimer / DSP",
    "role": "High-speed connectivity and optical DSP",
    "change": 2.51,
    "tags": [
      "DSP",
      "retimer"
    ],
    "priceStatus": "ok",
    "latestClose": 150.99000549316406,
    "referenceClose": 147.2899932861328,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "ALAB",
    "quoteSymbol": "ALAB",
    "name": "Astera Labs",
    "market": "US",
    "segment": "asic",
    "sub": "PCIe / CXL",
    "role": "AI data-center connectivity silicon",
    "change": 0.6,
    "tags": [
      "retimer",
      "CXL"
    ],
    "priceStatus": "ok",
    "latestClose": 258.70001220703125,
    "referenceClose": 257.1600036621094,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Laser drivers, TIAs, high-speed analog",
    "change": -0.78,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 234.38999938964844,
    "referenceClose": 236.24000549316406,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "SMTC",
    "quoteSymbol": "SMTC",
    "name": "Semtech",
    "market": "US",
    "segment": "asic",
    "sub": "Signal IC",
    "role": "Signal integrity and optical analog ICs",
    "change": -3.5,
    "tags": [
      "signal"
    ],
    "priceStatus": "ok",
    "latestClose": 127.37999725341797,
    "referenceClose": 132.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "asic",
    "sub": "Network silicon",
    "role": "Silicon One and Acacia optical stack",
    "change": -1.87,
    "tags": [
      "switch",
      "acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 104.51000213623047,
    "referenceClose": 106.5,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "asic",
    "sub": "Coherent DSP",
    "role": "WaveLogic coherent DSP and systems",
    "change": 0.14,
    "tags": [
      "coherent",
      "DSP"
    ],
    "priceStatus": "ok",
    "latestClose": 320.7200012207031,
    "referenceClose": 320.260009765625,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "AMD",
    "quoteSymbol": "AMD",
    "name": "AMD",
    "market": "US",
    "segment": "asic",
    "sub": "AI accelerator",
    "role": "AI accelerators and adaptive compute",
    "change": -2.32,
    "tags": [
      "accelerator"
    ],
    "priceStatus": "ok",
    "latestClose": 504.79998779296875,
    "referenceClose": 516.7899780273438,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "asic",
    "sub": "Foundry / I/O",
    "role": "Foundry, Ethernet, historical silicon photonics",
    "change": -24.38,
    "tags": [
      "foundry",
      "ethernet"
    ],
    "priceStatus": "ok",
    "latestClose": 65.76000213623047,
    "referenceClose": 86.95999908447266,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "QCOM",
    "quoteSymbol": "QCOM",
    "name": "Qualcomm",
    "market": "US",
    "segment": "asic",
    "sub": "Connectivity IC",
    "role": "High-speed connectivity and edge AI silicon",
    "change": -6.32,
    "tags": [
      "connectivity"
    ],
    "priceStatus": "ok",
    "latestClose": 164.7899932861328,
    "referenceClose": 175.91000366210938,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "3661.TW",
    "quoteSymbol": "3661.TW",
    "name": "世芯-KY",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "Advanced-node custom ASIC design service",
    "change": -2.0,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 3425.0,
    "referenceClose": 3495.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "3443.TW",
    "quoteSymbol": "3443.TW",
    "name": "創意",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "GUC ASIC design and implementation",
    "change": 0.66,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 7635.0,
    "referenceClose": 7585.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "2454.TW",
    "quoteSymbol": "2454.TW",
    "name": "聯發科",
    "market": "TW",
    "segment": "asic",
    "sub": "Connectivity SoC",
    "role": "Networking, SerDes and edge AI chip exposure",
    "change": -2.37,
    "tags": [
      "SoC"
    ],
    "priceStatus": "ok",
    "latestClose": 3915.0,
    "referenceClose": 4010.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "5274.TWO",
    "quoteSymbol": "5274.TWO",
    "name": "信驊",
    "market": "TW",
    "segment": "asic",
    "sub": "BMC",
    "role": "Server management silicon",
    "change": -0.25,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 15970.0,
    "referenceClose": 16010.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "688536.SH",
    "quoteSymbol": "688536.SS",
    "name": "思瑞浦",
    "market": "CN",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Analog and signal-chain ICs",
    "change": 0.8,
    "tags": [
      "analog"
    ],
    "priceStatus": "ok",
    "latestClose": 270.0,
    "referenceClose": 267.8699951171875,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "asic",
    "sub": "Laser driver link",
    "role": "Optical chip supplier with upstream exposure",
    "change": -25.53,
    "tags": [
      "optical chip"
    ],
    "priceStatus": "ok",
    "latestClose": 688.989990234375,
    "referenceClose": 925.1500244140625,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "2330.TW",
    "quoteSymbol": "2330.TW",
    "name": "台積電",
    "market": "TW",
    "segment": "sipic",
    "sub": "Foundry",
    "role": "Advanced-node and packaging platform for CPO ecosystem",
    "change": -0.63,
    "tags": [
      "foundry",
      "CoWoS"
    ],
    "priceStatus": "ok",
    "latestClose": 2370.0,
    "referenceClose": 2385.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "AVGO",
    "quoteSymbol": "AVGO",
    "name": "Broadcom",
    "market": "US",
    "segment": "sipic",
    "sub": "Co-packaged optics",
    "role": "CPO roadmap and switch silicon integration",
    "change": 1.37,
    "tags": [
      "CPO",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 326.0799865722656,
    "referenceClose": 321.67999267578125,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical I/O ecosystem",
    "role": "AI cluster architecture drives optical I/O demand",
    "change": -3.0,
    "tags": [
      "AI",
      "optical I/O"
    ],
    "priceStatus": "ok",
    "latestClose": 204.63999938964844,
    "referenceClose": 210.9600067138672,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical platform",
    "role": "DSP plus silicon photonics partnership ecosystem",
    "change": -14.05,
    "tags": [
      "DSP",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 196.39999389648438,
    "referenceClose": 228.50999450683594,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "sipic",
    "sub": "Silicon photonics",
    "role": "Integrated silicon photonics and foundry capabilities",
    "change": -24.38,
    "tags": [
      "SiPh",
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 65.76000213623047,
    "referenceClose": 86.95999908447266,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Lasers, transceivers and optical engine building blocks",
    "change": 0.49,
    "tags": [
      "laser",
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 210.32000732421875,
    "referenceClose": 209.2899932861328,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Datacom lasers and optical components",
    "change": 11.18,
    "tags": [
      "laser",
      "datacom"
    ],
    "priceStatus": "ok",
    "latestClose": 840.7000122070312,
    "referenceClose": 756.1699829101562,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "STM",
    "quoteSymbol": "STM",
    "name": "STMicro",
    "market": "EU",
    "segment": "sipic",
    "sub": "Photonics platform",
    "role": "Photonics and advanced semiconductor platform exposure",
    "change": 6.18,
    "tags": [
      "photonics"
    ],
    "priceStatus": "ok",
    "latestClose": 46.7400016784668,
    "referenceClose": 44.02000045776367,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "GFS",
    "quoteSymbol": "GFS",
    "name": "GlobalFoundries",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Silicon photonics and specialty process platform",
    "change": -5.61,
    "tags": [
      "foundry",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 41.900001525878906,
    "referenceClose": 44.38999938964844,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "TSEM",
    "quoteSymbol": "TSEM",
    "name": "Tower Semiconductor",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Analog, photonics and specialty manufacturing",
    "change": -0.64,
    "tags": [
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 166.47999572753906,
    "referenceClose": 167.55999755859375,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "sipic",
    "sub": "Optical systems",
    "role": "Photonic service engines and coherent optics",
    "change": 5.16,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 8.5600004196167,
    "referenceClose": 8.140000343322754,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "sipic",
    "sub": "Acacia optics",
    "role": "Coherent modules and optical interconnect roadmap",
    "change": -1.87,
    "tags": [
      "Acacia",
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 104.51000213623047,
    "referenceClose": 106.5,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "sipic",
    "sub": "Coherent optics",
    "role": "Coherent optical engine and network platforms",
    "change": 0.14,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 320.7200012207031,
    "referenceClose": 320.260009765625,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "POET",
    "quoteSymbol": "POET",
    "name": "POET Technologies",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical interposer",
    "role": "Optical interposer platform for transceivers",
    "change": -4.76,
    "tags": [
      "interposer"
    ],
    "priceStatus": "ok",
    "latestClose": 5.199999809265137,
    "referenceClose": 5.460000038146973,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "LWLG",
    "quoteSymbol": "LWLG",
    "name": "Lightwave Logic",
    "market": "US",
    "segment": "sipic",
    "sub": "EO polymer",
    "role": "Electro-optic polymer material platform",
    "change": 18.45,
    "tags": [
      "material"
    ],
    "priceStatus": "ok",
    "latestClose": 4.75,
    "referenceClose": 4.010000228881836,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "4966.TWO",
    "quoteSymbol": "4966.TWO",
    "name": "譜瑞-KY",
    "market": "TW",
    "segment": "sipic",
    "sub": "High-speed interface",
    "role": "High-speed interface ICs and data transmission",
    "change": -8.3,
    "tags": [
      "interface"
    ],
    "priceStatus": "ok",
    "latestClose": 469.5,
    "referenceClose": 512.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "6789.TW",
    "quoteSymbol": "6789.TW",
    "name": "采鈺",
    "market": "TW",
    "segment": "sipic",
    "sub": "Optical process",
    "role": "Optical semiconductor process and sensor platform",
    "change": -6.16,
    "tags": [
      "process"
    ],
    "priceStatus": "ok",
    "latestClose": 411.0,
    "referenceClose": 438.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "688313.SH",
    "quoteSymbol": "688313.SS",
    "name": "仕佳光子",
    "market": "CN",
    "segment": "sipic",
    "sub": "PLC / optical chip",
    "role": "PLC splitter, AWG and optical chip supplier",
    "change": -18.83,
    "tags": [
      "PLC",
      "chip"
    ],
    "priceStatus": "ok",
    "latestClose": 92.52999877929688,
    "referenceClose": 114.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "laser",
    "sub": "Laser / InP",
    "role": "InP lasers, VCSELs, coherent and datacom components",
    "change": 0.49,
    "tags": [
      "InP",
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 210.32000732421875,
    "referenceClose": 209.2899932861328,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "laser",
    "sub": "Datacom laser",
    "role": "EML, DFB and high-speed datacom laser supply",
    "change": 11.18,
    "tags": [
      "EML",
      "DFB"
    ],
    "priceStatus": "ok",
    "latestClose": 840.7000122070312,
    "referenceClose": 756.1699829101562,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "laser",
    "sub": "Laser driver / TIA",
    "role": "Laser drivers, TIAs and analog front-end",
    "change": -0.78,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 234.38999938964844,
    "referenceClose": 236.24000549316406,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "IPGP",
    "quoteSymbol": "IPGP",
    "name": "IPG Photonics",
    "market": "US",
    "segment": "laser",
    "sub": "Fiber laser",
    "role": "Laser technology and optical components",
    "change": 2.14,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 72.58999633789062,
    "referenceClose": 71.06999969482422,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "AXTI",
    "quoteSymbol": "AXTI",
    "name": "AXT",
    "market": "US",
    "segment": "laser",
    "sub": "Substrate",
    "role": "Compound semiconductor substrates",
    "change": 5.72,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 55.060001373291016,
    "referenceClose": 52.08000183105469,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "IQE.L",
    "quoteSymbol": "IQE.L",
    "name": "IQE",
    "market": "EU",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "Compound semiconductor epitaxy wafers",
    "change": -2.55,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 34.45000076293945,
    "referenceClose": 35.349998474121094,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Compound semiconductor and optical components",
    "change": -3.41,
    "tags": [
      "InP",
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 1770.0,
    "referenceClose": 1832.5,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "6503.T",
    "quoteSymbol": "6503.T",
    "name": "三菱電機",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Optical devices, lasers and industrial electronics",
    "change": -2.73,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 4640.0,
    "referenceClose": 4770.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "6965.T",
    "quoteSymbol": "6965.T",
    "name": "浜松光子",
    "market": "JP",
    "segment": "laser",
    "sub": "Photonics",
    "role": "Photodetectors, optoelectronics and photonics devices",
    "change": 3.74,
    "tags": [
      "detector"
    ],
    "priceStatus": "ok",
    "latestClose": 2151.5,
    "referenceClose": 2074.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "AMS.SW",
    "quoteSymbol": "AMS.SW",
    "name": "ams OSRAM",
    "market": "EU",
    "segment": "laser",
    "sub": "Emitter",
    "role": "Emitters, sensors and photonics devices",
    "change": 5.32,
    "tags": [
      "emitter"
    ],
    "priceStatus": "ok",
    "latestClose": 18.610000610351562,
    "referenceClose": 17.670000076293945,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "3105.TWO",
    "quoteSymbol": "3105.TWO",
    "name": "穩懋",
    "market": "TW",
    "segment": "laser",
    "sub": "GaAs foundry",
    "role": "GaAs foundry with photonics-adjacent capabilities",
    "change": 18.93,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 578.0,
    "referenceClose": 486.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "3081.TWO",
    "quoteSymbol": "3081.TWO",
    "name": "聯亞",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "III-V epitaxy wafers for optical communications",
    "change": -0.21,
    "tags": [
      "epi",
      "III-V"
    ],
    "priceStatus": "ok",
    "latestClose": 2370.0,
    "referenceClose": 2375.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "2455.TW",
    "quoteSymbol": "2455.TW",
    "name": "全新",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "GaAs/InP epitaxy and compound semiconductor materials",
    "change": -4.28,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 447.0,
    "referenceClose": 467.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "8086.TWO",
    "quoteSymbol": "8086.TWO",
    "name": "宏捷科",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "GaAs foundry and compound semiconductor devices",
    "change": -5.39,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 114.0,
    "referenceClose": 120.5,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "4991.TWO",
    "quoteSymbol": "4991.TWO",
    "name": "環宇-KY",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "Compound semiconductor and optical device exposure",
    "change": -6.51,
    "tags": [
      "compound"
    ],
    "priceStatus": "ok",
    "latestClose": 388.0,
    "referenceClose": 415.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "laser",
    "sub": "Optical component",
    "role": "Optical communication components and modules",
    "change": -0.67,
    "tags": [
      "optical"
    ],
    "priceStatus": "ok",
    "latestClose": 447.0,
    "referenceClose": 450.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser chip",
    "role": "Optical communication laser chips",
    "change": -25.53,
    "tags": [
      "laser chip"
    ],
    "priceStatus": "ok",
    "latestClose": 688.989990234375,
    "referenceClose": 925.1500244140625,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser / module",
    "role": "Laser equipment and optical communication products",
    "change": -16.67,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 62.150001525878906,
    "referenceClose": 74.58000183105469,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "APH",
    "quoteSymbol": "APH",
    "name": "Amphenol",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "High-speed interconnect and optical connector ecosystem",
    "change": 7.03,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 79.30000305175781,
    "referenceClose": 74.08999633789062,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "GLW",
    "quoteSymbol": "GLW",
    "name": "Corning",
    "market": "US",
    "segment": "component",
    "sub": "Fiber / glass",
    "role": "Optical fiber, glass and datacenter cabling",
    "change": -0.31,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 123.30999755859375,
    "referenceClose": 123.69000244140625,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "TEL",
    "quoteSymbol": "TEL",
    "name": "TE Connectivity",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "Connectors, cable assemblies and sensors",
    "change": 2.39,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 213.02999877929688,
    "referenceClose": 208.0500030517578,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers, modulators and optical subassemblies",
    "change": 0.49,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 210.32000732421875,
    "referenceClose": 209.2899932861328,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers and optical communication components",
    "change": 11.18,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 840.7000122070312,
    "referenceClose": 756.1699829101562,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "component",
    "sub": "Manufacturing",
    "role": "Precision optical manufacturing and assembly",
    "change": 3.92,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 327.2900085449219,
    "referenceClose": 314.94000244140625,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "3711.TW",
    "quoteSymbol": "3711.TW",
    "name": "日月光投控",
    "market": "TW",
    "segment": "component",
    "sub": "Advanced packaging",
    "role": "Semiconductor packaging and system-in-package",
    "change": 2.14,
    "tags": [
      "packaging"
    ],
    "priceStatus": "ok",
    "latestClose": 668.0,
    "referenceClose": 654.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "2449.TW",
    "quoteSymbol": "2449.TW",
    "name": "京元電",
    "market": "TW",
    "segment": "component",
    "sub": "Test",
    "role": "IC testing services for high-speed chips",
    "change": -3.43,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 253.5,
    "referenceClose": 262.5,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "6515.TW",
    "quoteSymbol": "6515.TW",
    "name": "穎崴",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card / socket",
    "role": "High-speed test interface and sockets",
    "change": -4.8,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 4565.0,
    "referenceClose": 4795.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "6223.TWO",
    "quoteSymbol": "6223.TWO",
    "name": "旺矽",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card",
    "role": "Probe cards and testing interface",
    "change": -5.73,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 4610.0,
    "referenceClose": 4890.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "3037.TW",
    "quoteSymbol": "3037.TW",
    "name": "欣興",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and advanced PCB",
    "change": -8.85,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 989.0,
    "referenceClose": 1085.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "3189.TW",
    "quoteSymbol": "3189.TW",
    "name": "景碩",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate supplier",
    "change": -5.48,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 932.0,
    "referenceClose": 986.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "8046.TW",
    "quoteSymbol": "8046.TW",
    "name": "南電",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and PCB",
    "change": -5.93,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1190.0,
    "referenceClose": 1265.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "2383.TW",
    "quoteSymbol": "2383.TW",
    "name": "台光電",
    "market": "TW",
    "segment": "component",
    "sub": "Copper clad laminate",
    "role": "High-speed CCL for AI servers and switches",
    "change": -7.79,
    "tags": [
      "CCL"
    ],
    "priceStatus": "ok",
    "latestClose": 4675.0,
    "referenceClose": 5070.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "component",
    "sub": "Connector / RF",
    "role": "Connectors and optical communication components",
    "change": -12.77,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 1230.0,
    "referenceClose": 1410.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "3363.TWO",
    "quoteSymbol": "3363.TWO",
    "name": "上詮",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber optic components and passive devices",
    "change": -6.23,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 474.5,
    "referenceClose": 506.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "component",
    "sub": "Optical subassembly",
    "role": "Optical communication subassemblies and packaging",
    "change": -3.54,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 409.0,
    "referenceClose": 424.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "6451.TW",
    "quoteSymbol": "6451.TW",
    "name": "訊芯-KY",
    "market": "TW",
    "segment": "component",
    "sub": "SiP / optical packaging",
    "role": "System-in-package and optical communication assembly",
    "change": -6.27,
    "tags": [
      "SiP"
    ],
    "priceStatus": "ok",
    "latestClose": 329.0,
    "referenceClose": 351.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber arrays, splitters and optical passive components",
    "change": -7.79,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 509.0,
    "referenceClose": 552.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical communication component supplier",
    "change": -5.63,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 82.0999984741211,
    "referenceClose": 87.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive components and precision parts",
    "change": -26.3,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 148.0,
    "referenceClose": 200.80999755859375,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "300548.SZ",
    "quoteSymbol": "300548.SZ",
    "name": "博創科技",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive and active components",
    "change": -24.89,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 126.08000183105469,
    "referenceClose": 167.86000061035156,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "601869.SH",
    "quoteSymbol": "601869.SS",
    "name": "長飛光纖",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber",
    "role": "Optical fiber and cable",
    "change": -21.65,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 252.8800048828125,
    "referenceClose": 322.75,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "600487.SH",
    "quoteSymbol": "600487.SS",
    "name": "亨通光電",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber cable and optical network products",
    "change": -18.92,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 42.41999816894531,
    "referenceClose": 52.31999969482422,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "5801.T",
    "quoteSymbol": "5801.T",
    "name": "古河電工",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Optical fiber, cable and network materials",
    "change": -3.06,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 2806.0,
    "referenceClose": 2894.5,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "5803.T",
    "quoteSymbol": "5803.T",
    "name": "藤倉",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber, cable and optical interconnect products",
    "change": -2.95,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 3918.0,
    "referenceClose": 4037.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "4062.T",
    "quoteSymbol": "4062.T",
    "name": "Ibiden",
    "market": "JP",
    "segment": "component",
    "sub": "Substrate",
    "role": "Advanced IC substrates",
    "change": -1.8,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 8359.0,
    "referenceClose": 8512.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom and telecom optical transceivers",
    "change": 0.49,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 210.32000732421875,
    "referenceClose": 209.2899932861328,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "module",
    "sub": "Laser / module",
    "role": "Laser engines and optical module supply",
    "change": 11.18,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 840.7000122070312,
    "referenceClose": 756.1699829101562,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "module",
    "sub": "Optical manufacturing",
    "role": "Optical module contract manufacturing",
    "change": 3.92,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 327.2900085449219,
    "referenceClose": 314.94000244140625,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "module",
    "sub": "Coherent module",
    "role": "Coherent optical modules and transport platforms",
    "change": 0.14,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 320.7200012207031,
    "referenceClose": 320.260009765625,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "module",
    "sub": "Acacia module",
    "role": "Acacia coherent optics and pluggable modules",
    "change": -1.87,
    "tags": [
      "Acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 104.51000213623047,
    "referenceClose": 106.5,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "module",
    "sub": "Optical module",
    "role": "Coherent optics and network system modules",
    "change": 5.16,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 8.5600004196167,
    "referenceClose": 8.140000343322754,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical communication modules and components",
    "change": -0.67,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 447.0,
    "referenceClose": 450.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "4977.TW",
    "quoteSymbol": "4977.TW",
    "name": "眾達-KY",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical transceiver supplier",
    "change": 4.85,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 173.0,
    "referenceClose": 165.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver component",
    "role": "Optical communication and connector products",
    "change": -12.77,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1230.0,
    "referenceClose": 1410.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "module",
    "sub": "OSA",
    "role": "Optical subassemblies for transceivers",
    "change": -3.54,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 409.0,
    "referenceClose": 424.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "module",
    "sub": "Passive optical",
    "role": "Fiber components used in modules",
    "change": -7.79,
    "tags": [
      "passive"
    ],
    "priceStatus": "ok",
    "latestClose": 509.0,
    "referenceClose": 552.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module exposure",
    "change": -5.63,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 82.0999984741211,
    "referenceClose": 87.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "4908.TWO",
    "quoteSymbol": "4908.TWO",
    "name": "前鼎",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module and equipment",
    "change": -8.38,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 180.5,
    "referenceClose": 197.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "300308.SZ",
    "quoteSymbol": "300308.SZ",
    "name": "中際旭創",
    "market": "CN",
    "segment": "module",
    "sub": "800G / 1.6T",
    "role": "High-speed optical transceiver leader",
    "change": -9.73,
    "tags": [
      "800G",
      "1.6T"
    ],
    "priceStatus": "ok",
    "latestClose": 553.0,
    "referenceClose": 612.6300048828125,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "300502.SZ",
    "quoteSymbol": "300502.SZ",
    "name": "新易盛",
    "market": "CN",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom optical transceivers",
    "change": -24.9,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 196.0,
    "referenceClose": 261.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "002281.SZ",
    "quoteSymbol": "002281.SZ",
    "name": "光迅科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical devices and modules",
    "change": -20.24,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 102.5999984741211,
    "referenceClose": 128.6300048828125,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "603083.SH",
    "quoteSymbol": "603083.SS",
    "name": "劍橋科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical modules and broadband equipment",
    "change": -20.95,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 125.19999694824219,
    "referenceClose": 158.3800048828125,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical engine parts",
    "role": "High-speed module precision components",
    "change": -26.3,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 148.0,
    "referenceClose": 200.80999755859375,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "688205.SH",
    "quoteSymbol": "688205.SS",
    "name": "德科立",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical transceiver modules",
    "change": -26.67,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 102.51000213623047,
    "referenceClose": 139.7899932861328,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication and laser products",
    "change": -16.67,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 62.150001525878906,
    "referenceClose": 74.58000183105469,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical network",
    "role": "Optical network systems and modules",
    "change": -13.63,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 26.18000030517578,
    "referenceClose": 30.309999465942383,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "module",
    "sub": "Optical device",
    "role": "Optical components and communication devices",
    "change": -3.41,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1770.0,
    "referenceClose": 1832.5,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "ANET",
    "quoteSymbol": "ANET",
    "name": "Arista Networks",
    "market": "US",
    "segment": "system",
    "sub": "AI switch",
    "role": "AI datacenter Ethernet switches",
    "change": -2.04,
    "tags": [
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 168.86000061035156,
    "referenceClose": 172.3699951171875,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "system",
    "sub": "Switch / router",
    "role": "Enterprise and cloud networking systems",
    "change": -1.87,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 104.51000213623047,
    "referenceClose": 106.5,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "HPE",
    "quoteSymbol": "HPE",
    "name": "HPE",
    "market": "US",
    "segment": "system",
    "sub": "Server / networking",
    "role": "AI servers, networking and cloud infrastructure",
    "change": -2.82,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 55.09000015258789,
    "referenceClose": 56.689998626708984,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "DELL",
    "quoteSymbol": "DELL",
    "name": "Dell",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and enterprise infrastructure",
    "change": -7.04,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 424.29998779296875,
    "referenceClose": 456.44000244140625,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "SMCI",
    "quoteSymbol": "SMCI",
    "name": "Supermicro",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server platforms and rack-scale systems",
    "change": 0.03,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 32.95000076293945,
    "referenceClose": 32.939998626708984,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "CLS",
    "quoteSymbol": "CLS",
    "name": "Celestica",
    "market": "US",
    "segment": "system",
    "sub": "ODM / EMS",
    "role": "Cloud hardware and networking manufacturing",
    "change": 2.12,
    "tags": [
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 265.5299987792969,
    "referenceClose": 260.010009765625,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "JBL",
    "quoteSymbol": "JBL",
    "name": "Jabil",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing for networking systems",
    "change": -0.46,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 272.7200012207031,
    "referenceClose": 273.9700012207031,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "FLEX",
    "quoteSymbol": "FLEX",
    "name": "Flex",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing and cloud hardware",
    "change": 12.97,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 86.4800033569336,
    "referenceClose": 76.55000305175781,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "2345.TW",
    "quoteSymbol": "2345.TW",
    "name": "智邦",
    "market": "TW",
    "segment": "system",
    "sub": "Switch ODM",
    "role": "White-box switch and cloud networking ODM",
    "change": -9.01,
    "tags": [
      "switch",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 1615.0,
    "referenceClose": 1775.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "2382.TW",
    "quoteSymbol": "2382.TW",
    "name": "廣達",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and cloud infrastructure ODM",
    "change": -1.24,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 318.0,
    "referenceClose": 322.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "6669.TW",
    "quoteSymbol": "6669.TW",
    "name": "緯穎",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "Cloud datacenter server ODM",
    "change": -1.63,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 1810.0,
    "referenceClose": 1840.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "2317.TW",
    "quoteSymbol": "2317.TW",
    "name": "鴻海",
    "market": "TW",
    "segment": "system",
    "sub": "EMS / server",
    "role": "AI server and system assembly",
    "change": 0.2,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 245.5,
    "referenceClose": 245.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "2308.TW",
    "quoteSymbol": "2308.TW",
    "name": "台達電",
    "market": "TW",
    "segment": "system",
    "sub": "Power / thermal",
    "role": "Power, thermal and datacenter infrastructure",
    "change": -14.42,
    "tags": [
      "power",
      "thermal"
    ],
    "priceStatus": "ok",
    "latestClose": 1335.0,
    "referenceClose": 1560.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "3706.TW",
    "quoteSymbol": "3706.TW",
    "name": "神達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and datacenter system integration",
    "change": -4.6,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 76.80000305175781,
    "referenceClose": 80.5,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "3231.TW",
    "quoteSymbol": "3231.TW",
    "name": "緯創",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and system integration",
    "change": -3.42,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 183.5,
    "referenceClose": 190.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "2356.TW",
    "quoteSymbol": "2356.TW",
    "name": "英業達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and cloud equipment manufacturing",
    "change": -1.65,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 59.5,
    "referenceClose": 60.5,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "3380.TW",
    "quoteSymbol": "3380.TW",
    "name": "明泰",
    "market": "TW",
    "segment": "system",
    "sub": "Networking",
    "role": "Networking products and broadband equipment",
    "change": -5.25,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 30.700000762939453,
    "referenceClose": 32.400001525878906,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "6285.TW",
    "quoteSymbol": "6285.TW",
    "name": "啟碁",
    "market": "TW",
    "segment": "system",
    "sub": "Network device",
    "role": "Wireless and networking equipment",
    "change": -7.39,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 213.0,
    "referenceClose": 230.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "system",
    "sub": "Optical systems",
    "role": "Optical communication and laser systems",
    "change": -16.67,
    "tags": [
      "system"
    ],
    "priceStatus": "ok",
    "latestClose": 62.150001525878906,
    "referenceClose": 74.58000183105469,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "system",
    "sub": "Optical network",
    "role": "Optical transmission and network equipment",
    "change": -13.63,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 26.18000030517578,
    "referenceClose": 30.309999465942383,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "000063.SZ",
    "quoteSymbol": "000063.SZ",
    "name": "中興通訊",
    "market": "CN",
    "segment": "system",
    "sub": "Telecom equipment",
    "role": "Telecom and datacenter network equipment",
    "change": -2.84,
    "tags": [
      "telecom"
    ],
    "priceStatus": "ok",
    "latestClose": 27.360000610351562,
    "referenceClose": 28.15999984741211,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "6701.T",
    "quoteSymbol": "6701.T",
    "name": "NEC",
    "market": "JP",
    "segment": "system",
    "sub": "Network systems",
    "role": "Telecom, submarine and network systems",
    "change": -10.02,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 4850.0,
    "referenceClose": 5390.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  },
  {
    "ticker": "6702.T",
    "quoteSymbol": "6702.T",
    "name": "Fujitsu",
    "market": "JP",
    "segment": "system",
    "sub": "ICT systems",
    "role": "ICT infrastructure and network systems",
    "change": -19.1,
    "tags": [
      "ICT"
    ],
    "priceStatus": "ok",
    "latestClose": 3622.0,
    "referenceClose": 4477.0,
    "priceDate": "2026-10-30",
    "referenceDate": "2026-10-23"
  }
];

