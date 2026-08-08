window.HEATMAP_META = {
  "title": "光通訊 / CPO 供應鏈熱力圖",
  "subtitle": "六大環節、跨市場上市公司、同公司可重複出現在多個供應鏈位置。",
  "lastUpdated": "2026-08-08",
  "dateRange": "2026-07-31 → 2026-08-07",
  "totalTiles": 126,
  "totalCompanies": 97,
  "quoteSymbolsUpdated": 97,
  "quoteSymbolsFailed": 0,
  "priceStatusCounts": {
    "ok": 126
  },
  "topGainer": {
    "ticker": "AXTI",
    "name": "AXT",
    "change": 46.58
  },
  "topLoser": {
    "ticker": "CLS",
    "name": "Celestica",
    "change": -4.11
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
    "change": 9.88,
    "tags": [
      "ASIC",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 427.760009765625,
    "referenceClose": 389.2799987792969,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "asic",
    "sub": "GPU / Network ASIC",
    "role": "GPU, NVLink, Spectrum-X ecosystem",
    "change": 11.56,
    "tags": [
      "GPU",
      "networking"
    ],
    "priceStatus": "ok",
    "latestClose": 223.9600067138672,
    "referenceClose": 200.75,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "asic",
    "sub": "DSP / PAM4",
    "role": "Optical DSP, custom silicon, DCI chips",
    "change": 16.61,
    "tags": [
      "DSP",
      "custom silicon"
    ],
    "priceStatus": "ok",
    "latestClose": 218.72000122070312,
    "referenceClose": 187.55999755859375,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "CRDO",
    "quoteSymbol": "CRDO",
    "name": "Credo",
    "market": "US",
    "segment": "asic",
    "sub": "Retimer / DSP",
    "role": "High-speed connectivity and optical DSP",
    "change": 20.73,
    "tags": [
      "DSP",
      "retimer"
    ],
    "priceStatus": "ok",
    "latestClose": 249.88999938964844,
    "referenceClose": 206.99000549316406,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "ALAB",
    "quoteSymbol": "ALAB",
    "name": "Astera Labs",
    "market": "US",
    "segment": "asic",
    "sub": "PCIe / CXL",
    "role": "AI data-center connectivity silicon",
    "change": 7.37,
    "tags": [
      "retimer",
      "CXL"
    ],
    "priceStatus": "ok",
    "latestClose": 334.1700134277344,
    "referenceClose": 311.2300109863281,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Laser drivers, TIAs, high-speed analog",
    "change": 23.62,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 310.82000732421875,
    "referenceClose": 251.44000244140625,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "SMTC",
    "quoteSymbol": "SMTC",
    "name": "Semtech",
    "market": "US",
    "segment": "asic",
    "sub": "Signal IC",
    "role": "Signal integrity and optical analog ICs",
    "change": 18.33,
    "tags": [
      "signal"
    ],
    "priceStatus": "ok",
    "latestClose": 139.4199981689453,
    "referenceClose": 117.81999969482422,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "asic",
    "sub": "Network silicon",
    "role": "Silicon One and Acacia optical stack",
    "change": 4.69,
    "tags": [
      "switch",
      "acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 121.43000030517578,
    "referenceClose": 115.98999786376953,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "asic",
    "sub": "Coherent DSP",
    "role": "WaveLogic coherent DSP and systems",
    "change": 9.37,
    "tags": [
      "coherent",
      "DSP"
    ],
    "priceStatus": "ok",
    "latestClose": 412.3900146484375,
    "referenceClose": 377.04998779296875,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "AMD",
    "quoteSymbol": "AMD",
    "name": "AMD",
    "market": "US",
    "segment": "asic",
    "sub": "AI accelerator",
    "role": "AI accelerators and adaptive compute",
    "change": 1.51,
    "tags": [
      "accelerator"
    ],
    "priceStatus": "ok",
    "latestClose": 483.3599853515625,
    "referenceClose": 476.1499938964844,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "asic",
    "sub": "Foundry / I/O",
    "role": "Foundry, Ethernet, historical silicon photonics",
    "change": 12.69,
    "tags": [
      "foundry",
      "ethernet"
    ],
    "priceStatus": "ok",
    "latestClose": 101.6500015258789,
    "referenceClose": 90.19999694824219,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "QCOM",
    "quoteSymbol": "QCOM",
    "name": "Qualcomm",
    "market": "US",
    "segment": "asic",
    "sub": "Connectivity IC",
    "role": "High-speed connectivity and edge AI silicon",
    "change": 13.72,
    "tags": [
      "connectivity"
    ],
    "priceStatus": "ok",
    "latestClose": 167.86000061035156,
    "referenceClose": 147.61000061035156,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "3661.TW",
    "quoteSymbol": "3661.TW",
    "name": "世芯-KY",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "Advanced-node custom ASIC design service",
    "change": 21.41,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 3715.0,
    "referenceClose": 3060.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "3443.TW",
    "quoteSymbol": "3443.TW",
    "name": "創意",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "GUC ASIC design and implementation",
    "change": 19.45,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 4545.0,
    "referenceClose": 3805.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "2454.TW",
    "quoteSymbol": "2454.TW",
    "name": "聯發科",
    "market": "TW",
    "segment": "asic",
    "sub": "Connectivity SoC",
    "role": "Networking, SerDes and edge AI chip exposure",
    "change": 9.7,
    "tags": [
      "SoC"
    ],
    "priceStatus": "ok",
    "latestClose": 3900.0,
    "referenceClose": 3555.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "5274.TWO",
    "quoteSymbol": "5274.TWO",
    "name": "信驊",
    "market": "TW",
    "segment": "asic",
    "sub": "BMC",
    "role": "Server management silicon",
    "change": 12.53,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 16345.0,
    "referenceClose": 14525.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "688536.SH",
    "quoteSymbol": "688536.SS",
    "name": "思瑞浦",
    "market": "CN",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Analog and signal-chain ICs",
    "change": 12.89,
    "tags": [
      "analog"
    ],
    "priceStatus": "ok",
    "latestClose": 251.75,
    "referenceClose": 223.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "asic",
    "sub": "Laser driver link",
    "role": "Optical chip supplier with upstream exposure",
    "change": 24.12,
    "tags": [
      "optical chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1355.5,
    "referenceClose": 1092.0999755859375,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "2330.TW",
    "quoteSymbol": "2330.TW",
    "name": "台積電",
    "market": "TW",
    "segment": "sipic",
    "sub": "Foundry",
    "role": "Advanced-node and packaging platform for CPO ecosystem",
    "change": -2.27,
    "tags": [
      "foundry",
      "CoWoS"
    ],
    "priceStatus": "ok",
    "latestClose": 2370.0,
    "referenceClose": 2425.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "AVGO",
    "quoteSymbol": "AVGO",
    "name": "Broadcom",
    "market": "US",
    "segment": "sipic",
    "sub": "Co-packaged optics",
    "role": "CPO roadmap and switch silicon integration",
    "change": 9.88,
    "tags": [
      "CPO",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 427.760009765625,
    "referenceClose": 389.2799987792969,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical I/O ecosystem",
    "role": "AI cluster architecture drives optical I/O demand",
    "change": 11.56,
    "tags": [
      "AI",
      "optical I/O"
    ],
    "priceStatus": "ok",
    "latestClose": 223.9600067138672,
    "referenceClose": 200.75,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical platform",
    "role": "DSP plus silicon photonics partnership ecosystem",
    "change": 16.61,
    "tags": [
      "DSP",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 218.72000122070312,
    "referenceClose": 187.55999755859375,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "sipic",
    "sub": "Silicon photonics",
    "role": "Integrated silicon photonics and foundry capabilities",
    "change": 12.69,
    "tags": [
      "SiPh",
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 101.6500015258789,
    "referenceClose": 90.19999694824219,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Lasers, transceivers and optical engine building blocks",
    "change": 44.22,
    "tags": [
      "laser",
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 379.1300048828125,
    "referenceClose": 262.8900146484375,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Datacom lasers and optical components",
    "change": 24.68,
    "tags": [
      "laser",
      "datacom"
    ],
    "priceStatus": "ok",
    "latestClose": 890.1699829101562,
    "referenceClose": 713.9400024414062,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "STM",
    "quoteSymbol": "STM",
    "name": "STMicro",
    "market": "EU",
    "segment": "sipic",
    "sub": "Photonics platform",
    "role": "Photonics and advanced semiconductor platform exposure",
    "change": 7.08,
    "tags": [
      "photonics"
    ],
    "priceStatus": "ok",
    "latestClose": 56.099998474121094,
    "referenceClose": 52.38999938964844,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "GFS",
    "quoteSymbol": "GFS",
    "name": "GlobalFoundries",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Silicon photonics and specialty process platform",
    "change": 7.88,
    "tags": [
      "foundry",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 53.93000030517578,
    "referenceClose": 49.9900016784668,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "TSEM",
    "quoteSymbol": "TSEM",
    "name": "Tower Semiconductor",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Analog, photonics and specialty manufacturing",
    "change": 14.94,
    "tags": [
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 252.49000549316406,
    "referenceClose": 219.6699981689453,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "sipic",
    "sub": "Optical systems",
    "role": "Photonic service engines and coherent optics",
    "change": 2.41,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 9.359999656677246,
    "referenceClose": 9.140000343322754,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "sipic",
    "sub": "Acacia optics",
    "role": "Coherent modules and optical interconnect roadmap",
    "change": 4.69,
    "tags": [
      "Acacia",
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 121.43000030517578,
    "referenceClose": 115.98999786376953,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "sipic",
    "sub": "Coherent optics",
    "role": "Coherent optical engine and network platforms",
    "change": 9.37,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 412.3900146484375,
    "referenceClose": 377.04998779296875,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "POET",
    "quoteSymbol": "POET",
    "name": "POET Technologies",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical interposer",
    "role": "Optical interposer platform for transceivers",
    "change": 27.47,
    "tags": [
      "interposer"
    ],
    "priceStatus": "ok",
    "latestClose": 8.90999984741211,
    "referenceClose": 6.989999771118164,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "LWLG",
    "quoteSymbol": "LWLG",
    "name": "Lightwave Logic",
    "market": "US",
    "segment": "sipic",
    "sub": "EO polymer",
    "role": "Electro-optic polymer material platform",
    "change": 25.54,
    "tags": [
      "material"
    ],
    "priceStatus": "ok",
    "latestClose": 8.109999656677246,
    "referenceClose": 6.460000038146973,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "4966.TWO",
    "quoteSymbol": "4966.TWO",
    "name": "譜瑞-KY",
    "market": "TW",
    "segment": "sipic",
    "sub": "High-speed interface",
    "role": "High-speed interface ICs and data transmission",
    "change": 6.41,
    "tags": [
      "interface"
    ],
    "priceStatus": "ok",
    "latestClose": 598.0,
    "referenceClose": 562.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "6789.TW",
    "quoteSymbol": "6789.TW",
    "name": "采鈺",
    "market": "TW",
    "segment": "sipic",
    "sub": "Optical process",
    "role": "Optical semiconductor process and sensor platform",
    "change": -1.53,
    "tags": [
      "process"
    ],
    "priceStatus": "ok",
    "latestClose": 417.0,
    "referenceClose": 423.5,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "688313.SH",
    "quoteSymbol": "688313.SS",
    "name": "仕佳光子",
    "market": "CN",
    "segment": "sipic",
    "sub": "PLC / optical chip",
    "role": "PLC splitter, AWG and optical chip supplier",
    "change": 41.83,
    "tags": [
      "PLC",
      "chip"
    ],
    "priceStatus": "ok",
    "latestClose": 127.69999694824219,
    "referenceClose": 90.04000091552734,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "laser",
    "sub": "Laser / InP",
    "role": "InP lasers, VCSELs, coherent and datacom components",
    "change": 44.22,
    "tags": [
      "InP",
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 379.1300048828125,
    "referenceClose": 262.8900146484375,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "laser",
    "sub": "Datacom laser",
    "role": "EML, DFB and high-speed datacom laser supply",
    "change": 24.68,
    "tags": [
      "EML",
      "DFB"
    ],
    "priceStatus": "ok",
    "latestClose": 890.1699829101562,
    "referenceClose": 713.9400024414062,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "laser",
    "sub": "Laser driver / TIA",
    "role": "Laser drivers, TIAs and analog front-end",
    "change": 23.62,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 310.82000732421875,
    "referenceClose": 251.44000244140625,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "IPGP",
    "quoteSymbol": "IPGP",
    "name": "IPG Photonics",
    "market": "US",
    "segment": "laser",
    "sub": "Fiber laser",
    "role": "Laser technology and optical components",
    "change": 6.08,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 90.2300033569336,
    "referenceClose": 85.05999755859375,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "AXTI",
    "quoteSymbol": "AXTI",
    "name": "AXT",
    "market": "US",
    "segment": "laser",
    "sub": "Substrate",
    "role": "Compound semiconductor substrates",
    "change": 46.58,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 88.58000183105469,
    "referenceClose": 60.43000030517578,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "IQE.L",
    "quoteSymbol": "IQE.L",
    "name": "IQE",
    "market": "EU",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "Compound semiconductor epitaxy wafers",
    "change": 20.2,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 47.0,
    "referenceClose": 39.099998474121094,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Compound semiconductor and optical components",
    "change": -2.5,
    "tags": [
      "InP",
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 2129.5,
    "referenceClose": 2184.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "6503.T",
    "quoteSymbol": "6503.T",
    "name": "三菱電機",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Optical devices, lasers and industrial electronics",
    "change": -1.45,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 5826.0,
    "referenceClose": 5912.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "6965.T",
    "quoteSymbol": "6965.T",
    "name": "浜松光子",
    "market": "JP",
    "segment": "laser",
    "sub": "Photonics",
    "role": "Photodetectors, optoelectronics and photonics devices",
    "change": -0.02,
    "tags": [
      "detector"
    ],
    "priceStatus": "ok",
    "latestClose": 2322.5,
    "referenceClose": 2323.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "AMS.SW",
    "quoteSymbol": "AMS.SW",
    "name": "ams OSRAM",
    "market": "EU",
    "segment": "laser",
    "sub": "Emitter",
    "role": "Emitters, sensors and photonics devices",
    "change": 13.23,
    "tags": [
      "emitter"
    ],
    "priceStatus": "ok",
    "latestClose": 18.059999465942383,
    "referenceClose": 15.949999809265137,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "3105.TWO",
    "quoteSymbol": "3105.TWO",
    "name": "穩懋",
    "market": "TW",
    "segment": "laser",
    "sub": "GaAs foundry",
    "role": "GaAs foundry with photonics-adjacent capabilities",
    "change": 24.28,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 366.0,
    "referenceClose": 294.5,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "3081.TWO",
    "quoteSymbol": "3081.TWO",
    "name": "聯亞",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "III-V epitaxy wafers for optical communications",
    "change": 41.41,
    "tags": [
      "epi",
      "III-V"
    ],
    "priceStatus": "ok",
    "latestClose": 2305.0,
    "referenceClose": 1630.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "2455.TW",
    "quoteSymbol": "2455.TW",
    "name": "全新",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "GaAs/InP epitaxy and compound semiconductor materials",
    "change": 24.66,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 364.0,
    "referenceClose": 292.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "8086.TWO",
    "quoteSymbol": "8086.TWO",
    "name": "宏捷科",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "GaAs foundry and compound semiconductor devices",
    "change": 1.36,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 111.5,
    "referenceClose": 110.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "4991.TWO",
    "quoteSymbol": "4991.TWO",
    "name": "環宇-KY",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "Compound semiconductor and optical device exposure",
    "change": 31.73,
    "tags": [
      "compound"
    ],
    "priceStatus": "ok",
    "latestClose": 465.0,
    "referenceClose": 353.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "laser",
    "sub": "Optical component",
    "role": "Optical communication components and modules",
    "change": 31.89,
    "tags": [
      "optical"
    ],
    "priceStatus": "ok",
    "latestClose": 488.0,
    "referenceClose": 370.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser chip",
    "role": "Optical communication laser chips",
    "change": 24.12,
    "tags": [
      "laser chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1355.5,
    "referenceClose": 1092.0999755859375,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser / module",
    "role": "Laser equipment and optical communication products",
    "change": 11.78,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 106.5999984741211,
    "referenceClose": 95.37000274658203,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "APH",
    "quoteSymbol": "APH",
    "name": "Amphenol",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "High-speed interconnect and optical connector ecosystem",
    "change": 5.28,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 169.17999267578125,
    "referenceClose": 160.6999969482422,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "GLW",
    "quoteSymbol": "GLW",
    "name": "Corning",
    "market": "US",
    "segment": "component",
    "sub": "Fiber / glass",
    "role": "Optical fiber, glass and datacenter cabling",
    "change": 19.84,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 165.67999267578125,
    "referenceClose": 138.25,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "TEL",
    "quoteSymbol": "TEL",
    "name": "TE Connectivity",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "Connectors, cable assemblies and sensors",
    "change": 5.17,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 216.3300018310547,
    "referenceClose": 205.69000244140625,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers, modulators and optical subassemblies",
    "change": 44.22,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 379.1300048828125,
    "referenceClose": 262.8900146484375,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers and optical communication components",
    "change": 24.68,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 890.1699829101562,
    "referenceClose": 713.9400024414062,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "component",
    "sub": "Manufacturing",
    "role": "Precision optical manufacturing and assembly",
    "change": 29.16,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 562.3800048828125,
    "referenceClose": 435.4100036621094,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "3711.TW",
    "quoteSymbol": "3711.TW",
    "name": "日月光投控",
    "market": "TW",
    "segment": "component",
    "sub": "Advanced packaging",
    "role": "Semiconductor packaging and system-in-package",
    "change": 5.41,
    "tags": [
      "packaging"
    ],
    "priceStatus": "ok",
    "latestClose": 585.0,
    "referenceClose": 555.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "2449.TW",
    "quoteSymbol": "2449.TW",
    "name": "京元電",
    "market": "TW",
    "segment": "component",
    "sub": "Test",
    "role": "IC testing services for high-speed chips",
    "change": 8.28,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 242.0,
    "referenceClose": 223.5,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "6515.TW",
    "quoteSymbol": "6515.TW",
    "name": "穎崴",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card / socket",
    "role": "High-speed test interface and sockets",
    "change": 16.25,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 6760.0,
    "referenceClose": 5815.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "6223.TWO",
    "quoteSymbol": "6223.TWO",
    "name": "旺矽",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card",
    "role": "Probe cards and testing interface",
    "change": 15.53,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 6100.0,
    "referenceClose": 5280.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "3037.TW",
    "quoteSymbol": "3037.TW",
    "name": "欣興",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and advanced PCB",
    "change": 21.35,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 955.0,
    "referenceClose": 787.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "3189.TW",
    "quoteSymbol": "3189.TW",
    "name": "景碩",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate supplier",
    "change": 29.61,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 823.0,
    "referenceClose": 635.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "8046.TW",
    "quoteSymbol": "8046.TW",
    "name": "南電",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and PCB",
    "change": 17.39,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1080.0,
    "referenceClose": 920.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "2383.TW",
    "quoteSymbol": "2383.TW",
    "name": "台光電",
    "market": "TW",
    "segment": "component",
    "sub": "Copper clad laminate",
    "role": "High-speed CCL for AI servers and switches",
    "change": 10.43,
    "tags": [
      "CCL"
    ],
    "priceStatus": "ok",
    "latestClose": 5240.0,
    "referenceClose": 4745.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "component",
    "sub": "Connector / RF",
    "role": "Connectors and optical communication components",
    "change": 14.72,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 1325.0,
    "referenceClose": 1155.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "3363.TWO",
    "quoteSymbol": "3363.TWO",
    "name": "上詮",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber optic components and passive devices",
    "change": 21.12,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 582.0,
    "referenceClose": 480.5,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "component",
    "sub": "Optical subassembly",
    "role": "Optical communication subassemblies and packaging",
    "change": 28.23,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 477.0,
    "referenceClose": 372.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "6451.TW",
    "quoteSymbol": "6451.TW",
    "name": "訊芯-KY",
    "market": "TW",
    "segment": "component",
    "sub": "SiP / optical packaging",
    "role": "System-in-package and optical communication assembly",
    "change": 23.46,
    "tags": [
      "SiP"
    ],
    "priceStatus": "ok",
    "latestClose": 421.0,
    "referenceClose": 341.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber arrays, splitters and optical passive components",
    "change": 23.35,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 671.0,
    "referenceClose": 544.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical communication component supplier",
    "change": 10.95,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 75.0,
    "referenceClose": 67.5999984741211,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive components and precision parts",
    "change": 34.89,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 230.67999267578125,
    "referenceClose": 171.00999450683594,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "300548.SZ",
    "quoteSymbol": "300548.SZ",
    "name": "博創科技",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive and active components",
    "change": 26.01,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 177.0399932861328,
    "referenceClose": 140.5,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "601869.SH",
    "quoteSymbol": "601869.SS",
    "name": "長飛光纖",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber",
    "role": "Optical fiber and cable",
    "change": 24.75,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 338.69000244140625,
    "referenceClose": 271.5,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "600487.SH",
    "quoteSymbol": "600487.SS",
    "name": "亨通光電",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber cable and optical network products",
    "change": 25.02,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 59.52000045776367,
    "referenceClose": 47.61000061035156,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "5801.T",
    "quoteSymbol": "5801.T",
    "name": "古河電工",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Optical fiber, cable and network materials",
    "change": 22.61,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 3856.0,
    "referenceClose": 3145.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "5803.T",
    "quoteSymbol": "5803.T",
    "name": "藤倉",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber, cable and optical interconnect products",
    "change": 24.28,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 5185.0,
    "referenceClose": 4172.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "4062.T",
    "quoteSymbol": "4062.T",
    "name": "Ibiden",
    "market": "JP",
    "segment": "component",
    "sub": "Substrate",
    "role": "Advanced IC substrates",
    "change": 14.77,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 19110.0,
    "referenceClose": 16650.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom and telecom optical transceivers",
    "change": 44.22,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 379.1300048828125,
    "referenceClose": 262.8900146484375,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "module",
    "sub": "Laser / module",
    "role": "Laser engines and optical module supply",
    "change": 24.68,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 890.1699829101562,
    "referenceClose": 713.9400024414062,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "module",
    "sub": "Optical manufacturing",
    "role": "Optical module contract manufacturing",
    "change": 29.16,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 562.3800048828125,
    "referenceClose": 435.4100036621094,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "module",
    "sub": "Coherent module",
    "role": "Coherent optical modules and transport platforms",
    "change": 9.37,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 412.3900146484375,
    "referenceClose": 377.04998779296875,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "module",
    "sub": "Acacia module",
    "role": "Acacia coherent optics and pluggable modules",
    "change": 4.69,
    "tags": [
      "Acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 121.43000030517578,
    "referenceClose": 115.98999786376953,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "module",
    "sub": "Optical module",
    "role": "Coherent optics and network system modules",
    "change": 2.41,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 9.359999656677246,
    "referenceClose": 9.140000343322754,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical communication modules and components",
    "change": 31.89,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 488.0,
    "referenceClose": 370.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "4977.TW",
    "quoteSymbol": "4977.TW",
    "name": "眾達-KY",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical transceiver supplier",
    "change": 14.1,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 133.5,
    "referenceClose": 117.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver component",
    "role": "Optical communication and connector products",
    "change": 14.72,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1325.0,
    "referenceClose": 1155.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "module",
    "sub": "OSA",
    "role": "Optical subassemblies for transceivers",
    "change": 28.23,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 477.0,
    "referenceClose": 372.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "module",
    "sub": "Passive optical",
    "role": "Fiber components used in modules",
    "change": 23.35,
    "tags": [
      "passive"
    ],
    "priceStatus": "ok",
    "latestClose": 671.0,
    "referenceClose": 544.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module exposure",
    "change": 10.95,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 75.0,
    "referenceClose": 67.5999984741211,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "4908.TWO",
    "quoteSymbol": "4908.TWO",
    "name": "前鼎",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module and equipment",
    "change": 8.71,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 143.5,
    "referenceClose": 132.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "300308.SZ",
    "quoteSymbol": "300308.SZ",
    "name": "中際旭創",
    "market": "CN",
    "segment": "module",
    "sub": "800G / 1.6T",
    "role": "High-speed optical transceiver leader",
    "change": 1.98,
    "tags": [
      "800G",
      "1.6T"
    ],
    "priceStatus": "ok",
    "latestClose": 919.8699951171875,
    "referenceClose": 902.010009765625,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "300502.SZ",
    "quoteSymbol": "300502.SZ",
    "name": "新易盛",
    "market": "CN",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom optical transceivers",
    "change": 6.3,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 420.95001220703125,
    "referenceClose": 396.010009765625,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "002281.SZ",
    "quoteSymbol": "002281.SZ",
    "name": "光迅科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical devices and modules",
    "change": 19.42,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 193.0399932861328,
    "referenceClose": 161.64999389648438,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "603083.SH",
    "quoteSymbol": "603083.SS",
    "name": "劍橋科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical modules and broadband equipment",
    "change": 18.83,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 154.77999877929688,
    "referenceClose": 130.25,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical engine parts",
    "role": "High-speed module precision components",
    "change": 34.89,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 230.67999267578125,
    "referenceClose": 171.00999450683594,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "688205.SH",
    "quoteSymbol": "688205.SS",
    "name": "德科立",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical transceiver modules",
    "change": 22.32,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 141.41000366210938,
    "referenceClose": 115.61000061035156,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication and laser products",
    "change": 11.78,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 106.5999984741211,
    "referenceClose": 95.37000274658203,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical network",
    "role": "Optical network systems and modules",
    "change": 18.5,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 39.209999084472656,
    "referenceClose": 33.09000015258789,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "module",
    "sub": "Optical device",
    "role": "Optical components and communication devices",
    "change": -2.5,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 2129.5,
    "referenceClose": 2184.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "ANET",
    "quoteSymbol": "ANET",
    "name": "Arista Networks",
    "market": "US",
    "segment": "system",
    "sub": "AI switch",
    "role": "AI datacenter Ethernet switches",
    "change": 4.61,
    "tags": [
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 188.6699981689453,
    "referenceClose": 180.35000610351562,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "system",
    "sub": "Switch / router",
    "role": "Enterprise and cloud networking systems",
    "change": 4.69,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 121.43000030517578,
    "referenceClose": 115.98999786376953,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "HPE",
    "quoteSymbol": "HPE",
    "name": "HPE",
    "market": "US",
    "segment": "system",
    "sub": "Server / networking",
    "role": "AI servers, networking and cloud infrastructure",
    "change": 11.11,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 53.220001220703125,
    "referenceClose": 47.900001525878906,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "DELL",
    "quoteSymbol": "DELL",
    "name": "Dell",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and enterprise infrastructure",
    "change": 11.94,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 453.7699890136719,
    "referenceClose": 405.3699951171875,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "SMCI",
    "quoteSymbol": "SMCI",
    "name": "Supermicro",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server platforms and rack-scale systems",
    "change": 9.61,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 31.1299991607666,
    "referenceClose": 28.399999618530273,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "CLS",
    "quoteSymbol": "CLS",
    "name": "Celestica",
    "market": "US",
    "segment": "system",
    "sub": "ODM / EMS",
    "role": "Cloud hardware and networking manufacturing",
    "change": -4.11,
    "tags": [
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 317.8299865722656,
    "referenceClose": 331.44000244140625,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "JBL",
    "quoteSymbol": "JBL",
    "name": "Jabil",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing for networking systems",
    "change": 8.31,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 341.2200012207031,
    "referenceClose": 315.04998779296875,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "FLEX",
    "quoteSymbol": "FLEX",
    "name": "Flex",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing and cloud hardware",
    "change": 6.68,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 121.3499984741211,
    "referenceClose": 113.75,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "2345.TW",
    "quoteSymbol": "2345.TW",
    "name": "智邦",
    "market": "TW",
    "segment": "system",
    "sub": "Switch ODM",
    "role": "White-box switch and cloud networking ODM",
    "change": 4.24,
    "tags": [
      "switch",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 2215.0,
    "referenceClose": 2125.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "2382.TW",
    "quoteSymbol": "2382.TW",
    "name": "廣達",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and cloud infrastructure ODM",
    "change": 2.23,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 298.0,
    "referenceClose": 291.5,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "6669.TW",
    "quoteSymbol": "6669.TW",
    "name": "緯穎",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "Cloud datacenter server ODM",
    "change": 13.17,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 6100.0,
    "referenceClose": 5390.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "2317.TW",
    "quoteSymbol": "2317.TW",
    "name": "鴻海",
    "market": "TW",
    "segment": "system",
    "sub": "EMS / server",
    "role": "AI server and system assembly",
    "change": 3.79,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 260.0,
    "referenceClose": 250.5,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "2308.TW",
    "quoteSymbol": "2308.TW",
    "name": "台達電",
    "market": "TW",
    "segment": "system",
    "sub": "Power / thermal",
    "role": "Power, thermal and datacenter infrastructure",
    "change": 0.61,
    "tags": [
      "power",
      "thermal"
    ],
    "priceStatus": "ok",
    "latestClose": 1650.0,
    "referenceClose": 1640.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "3706.TW",
    "quoteSymbol": "3706.TW",
    "name": "神達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and datacenter system integration",
    "change": 4.92,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 91.69999694824219,
    "referenceClose": 87.4000015258789,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "3231.TW",
    "quoteSymbol": "3231.TW",
    "name": "緯創",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and system integration",
    "change": 4.26,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 183.5,
    "referenceClose": 176.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "2356.TW",
    "quoteSymbol": "2356.TW",
    "name": "英業達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and cloud equipment manufacturing",
    "change": 3.56,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 64.0,
    "referenceClose": 61.79999923706055,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "3380.TW",
    "quoteSymbol": "3380.TW",
    "name": "明泰",
    "market": "TW",
    "segment": "system",
    "sub": "Networking",
    "role": "Networking products and broadband equipment",
    "change": 1.82,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 27.950000762939453,
    "referenceClose": 27.450000762939453,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "6285.TW",
    "quoteSymbol": "6285.TW",
    "name": "啟碁",
    "market": "TW",
    "segment": "system",
    "sub": "Network device",
    "role": "Wireless and networking equipment",
    "change": 4.96,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 233.0,
    "referenceClose": 222.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "system",
    "sub": "Optical systems",
    "role": "Optical communication and laser systems",
    "change": 11.78,
    "tags": [
      "system"
    ],
    "priceStatus": "ok",
    "latestClose": 106.5999984741211,
    "referenceClose": 95.37000274658203,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "system",
    "sub": "Optical network",
    "role": "Optical transmission and network equipment",
    "change": 18.5,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 39.209999084472656,
    "referenceClose": 33.09000015258789,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "000063.SZ",
    "quoteSymbol": "000063.SZ",
    "name": "中興通訊",
    "market": "CN",
    "segment": "system",
    "sub": "Telecom equipment",
    "role": "Telecom and datacenter network equipment",
    "change": 2.63,
    "tags": [
      "telecom"
    ],
    "priceStatus": "ok",
    "latestClose": 34.70000076293945,
    "referenceClose": 33.810001373291016,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "6701.T",
    "quoteSymbol": "6701.T",
    "name": "NEC",
    "market": "JP",
    "segment": "system",
    "sub": "Network systems",
    "role": "Telecom, submarine and network systems",
    "change": 2.57,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 4862.0,
    "referenceClose": 4740.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  },
  {
    "ticker": "6702.T",
    "quoteSymbol": "6702.T",
    "name": "Fujitsu",
    "market": "JP",
    "segment": "system",
    "sub": "ICT systems",
    "role": "ICT infrastructure and network systems",
    "change": 0.44,
    "tags": [
      "ICT"
    ],
    "priceStatus": "ok",
    "latestClose": 3675.0,
    "referenceClose": 3659.0,
    "priceDate": "2026-08-07",
    "referenceDate": "2026-07-31"
  }
];

