window.HEATMAP_META = {
  "title": "光通訊 / CPO 供應鏈熱力圖",
  "subtitle": "六大環節、跨市場上市公司、同公司可重複出現在多個供應鏈位置。",
  "lastUpdated": "2026-06-13",
  "dateRange": "2026-06-05 → 2026-06-12",
  "totalTiles": 126,
  "totalCompanies": 97,
  "quoteSymbolsUpdated": 97,
  "quoteSymbolsFailed": 0,
  "priceStatusCounts": {
    "ok": 126
  },
  "topGainer": {
    "ticker": "INTC",
    "name": "Intel",
    "change": 25.61
  },
  "topLoser": {
    "ticker": "SMCI",
    "name": "Supermicro",
    "change": -26.85
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
    "change": -0.95,
    "tags": [
      "ASIC",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 382.07000732421875,
    "referenceClose": 385.7300109863281,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "asic",
    "sub": "GPU / Network ASIC",
    "role": "GPU, NVLink, Spectrum-X ecosystem",
    "change": 0.04,
    "tags": [
      "GPU",
      "networking"
    ],
    "priceStatus": "ok",
    "latestClose": 205.19000244140625,
    "referenceClose": 205.10000610351562,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "asic",
    "sub": "DSP / PAM4",
    "role": "Optical DSP, custom silicon, DCI chips",
    "change": 6.16,
    "tags": [
      "DSP",
      "custom silicon"
    ],
    "priceStatus": "ok",
    "latestClose": 279.70001220703125,
    "referenceClose": 263.4700012207031,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "CRDO",
    "quoteSymbol": "CRDO",
    "name": "Credo",
    "market": "US",
    "segment": "asic",
    "sub": "Retimer / DSP",
    "role": "High-speed connectivity and optical DSP",
    "change": 21.23,
    "tags": [
      "DSP",
      "retimer"
    ],
    "priceStatus": "ok",
    "latestClose": 250.80999755859375,
    "referenceClose": 206.88999938964844,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "ALAB",
    "quoteSymbol": "ALAB",
    "name": "Astera Labs",
    "market": "US",
    "segment": "asic",
    "sub": "PCIe / CXL",
    "role": "AI data-center connectivity silicon",
    "change": 15.8,
    "tags": [
      "retimer",
      "CXL"
    ],
    "priceStatus": "ok",
    "latestClose": 367.1499938964844,
    "referenceClose": 317.05999755859375,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Laser drivers, TIAs, high-speed analog",
    "change": 9.98,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 379.8699951171875,
    "referenceClose": 345.3999938964844,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "SMTC",
    "quoteSymbol": "SMTC",
    "name": "Semtech",
    "market": "US",
    "segment": "asic",
    "sub": "Signal IC",
    "role": "Signal integrity and optical analog ICs",
    "change": 10.39,
    "tags": [
      "signal"
    ],
    "priceStatus": "ok",
    "latestClose": 166.7100067138672,
    "referenceClose": 151.02000427246094,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "asic",
    "sub": "Network silicon",
    "role": "Silicon One and Acacia optical stack",
    "change": -0.44,
    "tags": [
      "switch",
      "acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 121.0999984741211,
    "referenceClose": 121.63999938964844,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "asic",
    "sub": "Coherent DSP",
    "role": "WaveLogic coherent DSP and systems",
    "change": -8.65,
    "tags": [
      "coherent",
      "DSP"
    ],
    "priceStatus": "ok",
    "latestClose": 445.9800109863281,
    "referenceClose": 488.2099914550781,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "AMD",
    "quoteSymbol": "AMD",
    "name": "AMD",
    "market": "US",
    "segment": "asic",
    "sub": "AI accelerator",
    "role": "AI accelerators and adaptive compute",
    "change": 9.69,
    "tags": [
      "accelerator"
    ],
    "priceStatus": "ok",
    "latestClose": 511.57000732421875,
    "referenceClose": 466.3800048828125,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "asic",
    "sub": "Foundry / I/O",
    "role": "Foundry, Ethernet, historical silicon photonics",
    "change": 25.61,
    "tags": [
      "foundry",
      "ethernet"
    ],
    "priceStatus": "ok",
    "latestClose": 124.56999969482422,
    "referenceClose": 99.16999816894531,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "QCOM",
    "quoteSymbol": "QCOM",
    "name": "Qualcomm",
    "market": "US",
    "segment": "asic",
    "sub": "Connectivity IC",
    "role": "High-speed connectivity and edge AI silicon",
    "change": -1.95,
    "tags": [
      "connectivity"
    ],
    "priceStatus": "ok",
    "latestClose": 211.72000122070312,
    "referenceClose": 215.94000244140625,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "3661.TW",
    "quoteSymbol": "3661.TW",
    "name": "世芯-KY",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "Advanced-node custom ASIC design service",
    "change": -4.2,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 4105.0,
    "referenceClose": 4285.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "3443.TW",
    "quoteSymbol": "3443.TW",
    "name": "創意",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "GUC ASIC design and implementation",
    "change": -0.68,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 4380.0,
    "referenceClose": 4410.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "2454.TW",
    "quoteSymbol": "2454.TW",
    "name": "聯發科",
    "market": "TW",
    "segment": "asic",
    "sub": "Connectivity SoC",
    "role": "Networking, SerDes and edge AI chip exposure",
    "change": -2.79,
    "tags": [
      "SoC"
    ],
    "priceStatus": "ok",
    "latestClose": 4180.0,
    "referenceClose": 4300.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "5274.TWO",
    "quoteSymbol": "5274.TWO",
    "name": "信驊",
    "market": "TW",
    "segment": "asic",
    "sub": "BMC",
    "role": "Server management silicon",
    "change": 5.37,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 18445.0,
    "referenceClose": 17505.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "688536.SH",
    "quoteSymbol": "688536.SS",
    "name": "思瑞浦",
    "market": "CN",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Analog and signal-chain ICs",
    "change": 5.58,
    "tags": [
      "analog"
    ],
    "priceStatus": "ok",
    "latestClose": 309.3599853515625,
    "referenceClose": 293.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "asic",
    "sub": "Laser driver link",
    "role": "Optical chip supplier with upstream exposure",
    "change": 6.0,
    "tags": [
      "optical chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1400.010009765625,
    "referenceClose": 1320.719970703125,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "2330.TW",
    "quoteSymbol": "2330.TW",
    "name": "台積電",
    "market": "TW",
    "segment": "sipic",
    "sub": "Foundry",
    "role": "Advanced-node and packaging platform for CPO ecosystem",
    "change": -2.33,
    "tags": [
      "foundry",
      "CoWoS"
    ],
    "priceStatus": "ok",
    "latestClose": 2310.0,
    "referenceClose": 2365.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "AVGO",
    "quoteSymbol": "AVGO",
    "name": "Broadcom",
    "market": "US",
    "segment": "sipic",
    "sub": "Co-packaged optics",
    "role": "CPO roadmap and switch silicon integration",
    "change": -0.95,
    "tags": [
      "CPO",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 382.07000732421875,
    "referenceClose": 385.7300109863281,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical I/O ecosystem",
    "role": "AI cluster architecture drives optical I/O demand",
    "change": 0.04,
    "tags": [
      "AI",
      "optical I/O"
    ],
    "priceStatus": "ok",
    "latestClose": 205.19000244140625,
    "referenceClose": 205.10000610351562,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical platform",
    "role": "DSP plus silicon photonics partnership ecosystem",
    "change": 6.16,
    "tags": [
      "DSP",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 279.70001220703125,
    "referenceClose": 263.4700012207031,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "sipic",
    "sub": "Silicon photonics",
    "role": "Integrated silicon photonics and foundry capabilities",
    "change": 25.61,
    "tags": [
      "SiPh",
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 124.56999969482422,
    "referenceClose": 99.16999816894531,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Lasers, transceivers and optical engine building blocks",
    "change": 2.13,
    "tags": [
      "laser",
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 385.0299987792969,
    "referenceClose": 376.989990234375,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Datacom lasers and optical components",
    "change": 6.7,
    "tags": [
      "laser",
      "datacom"
    ],
    "priceStatus": "ok",
    "latestClose": 921.5599975585938,
    "referenceClose": 863.6599731445312,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "STM",
    "quoteSymbol": "STM",
    "name": "STMicro",
    "market": "EU",
    "segment": "sipic",
    "sub": "Photonics platform",
    "role": "Photonics and advanced semiconductor platform exposure",
    "change": 9.3,
    "tags": [
      "photonics"
    ],
    "priceStatus": "ok",
    "latestClose": 77.30000305175781,
    "referenceClose": 70.72000122070312,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "GFS",
    "quoteSymbol": "GFS",
    "name": "GlobalFoundries",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Silicon photonics and specialty process platform",
    "change": 7.75,
    "tags": [
      "foundry",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 81.37999725341797,
    "referenceClose": 75.52999877929688,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "TSEM",
    "quoteSymbol": "TSEM",
    "name": "Tower Semiconductor",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Analog, photonics and specialty manufacturing",
    "change": 11.65,
    "tags": [
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 262.9200134277344,
    "referenceClose": 235.47999572753906,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "sipic",
    "sub": "Optical systems",
    "role": "Photonic service engines and coherent optics",
    "change": 2.92,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 14.800000190734863,
    "referenceClose": 14.380000114440918,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "sipic",
    "sub": "Acacia optics",
    "role": "Coherent modules and optical interconnect roadmap",
    "change": -0.44,
    "tags": [
      "Acacia",
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 121.0999984741211,
    "referenceClose": 121.63999938964844,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "sipic",
    "sub": "Coherent optics",
    "role": "Coherent optical engine and network platforms",
    "change": -8.65,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 445.9800109863281,
    "referenceClose": 488.2099914550781,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "POET",
    "quoteSymbol": "POET",
    "name": "POET Technologies",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical interposer",
    "role": "Optical interposer platform for transceivers",
    "change": 5.65,
    "tags": [
      "interposer"
    ],
    "priceStatus": "ok",
    "latestClose": 12.529999732971191,
    "referenceClose": 11.859999656677246,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "LWLG",
    "quoteSymbol": "LWLG",
    "name": "Lightwave Logic",
    "market": "US",
    "segment": "sipic",
    "sub": "EO polymer",
    "role": "Electro-optic polymer material platform",
    "change": -5.42,
    "tags": [
      "material"
    ],
    "priceStatus": "ok",
    "latestClose": 9.59000015258789,
    "referenceClose": 10.140000343322754,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "4966.TWO",
    "quoteSymbol": "4966.TWO",
    "name": "譜瑞-KY",
    "market": "TW",
    "segment": "sipic",
    "sub": "High-speed interface",
    "role": "High-speed interface ICs and data transmission",
    "change": -8.29,
    "tags": [
      "interface"
    ],
    "priceStatus": "ok",
    "latestClose": 675.0,
    "referenceClose": 736.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "6789.TW",
    "quoteSymbol": "6789.TW",
    "name": "采鈺",
    "market": "TW",
    "segment": "sipic",
    "sub": "Optical process",
    "role": "Optical semiconductor process and sensor platform",
    "change": -6.14,
    "tags": [
      "process"
    ],
    "priceStatus": "ok",
    "latestClose": 481.5,
    "referenceClose": 513.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "688313.SH",
    "quoteSymbol": "688313.SS",
    "name": "仕佳光子",
    "market": "CN",
    "segment": "sipic",
    "sub": "PLC / optical chip",
    "role": "PLC splitter, AWG and optical chip supplier",
    "change": -4.92,
    "tags": [
      "PLC",
      "chip"
    ],
    "priceStatus": "ok",
    "latestClose": 149.07000732421875,
    "referenceClose": 156.7899932861328,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "laser",
    "sub": "Laser / InP",
    "role": "InP lasers, VCSELs, coherent and datacom components",
    "change": 2.13,
    "tags": [
      "InP",
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 385.0299987792969,
    "referenceClose": 376.989990234375,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "laser",
    "sub": "Datacom laser",
    "role": "EML, DFB and high-speed datacom laser supply",
    "change": 6.7,
    "tags": [
      "EML",
      "DFB"
    ],
    "priceStatus": "ok",
    "latestClose": 921.5599975585938,
    "referenceClose": 863.6599731445312,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "laser",
    "sub": "Laser driver / TIA",
    "role": "Laser drivers, TIAs and analog front-end",
    "change": 9.98,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 379.8699951171875,
    "referenceClose": 345.3999938964844,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "IPGP",
    "quoteSymbol": "IPGP",
    "name": "IPG Photonics",
    "market": "US",
    "segment": "laser",
    "sub": "Fiber laser",
    "role": "Laser technology and optical components",
    "change": 6.78,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 114.6500015258789,
    "referenceClose": 107.37000274658203,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "AXTI",
    "quoteSymbol": "AXTI",
    "name": "AXT",
    "market": "US",
    "segment": "laser",
    "sub": "Substrate",
    "role": "Compound semiconductor substrates",
    "change": 9.14,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 97.18000030517578,
    "referenceClose": 89.04000091552734,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "IQE.L",
    "quoteSymbol": "IQE.L",
    "name": "IQE",
    "market": "EU",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "Compound semiconductor epitaxy wafers",
    "change": 2.78,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 46.25,
    "referenceClose": 45.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Compound semiconductor and optical components",
    "change": -15.68,
    "tags": [
      "InP",
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 10970.0,
    "referenceClose": 13010.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "6503.T",
    "quoteSymbol": "6503.T",
    "name": "三菱電機",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Optical devices, lasers and industrial electronics",
    "change": -7.8,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 5545.0,
    "referenceClose": 6014.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "6965.T",
    "quoteSymbol": "6965.T",
    "name": "浜松光子",
    "market": "JP",
    "segment": "laser",
    "sub": "Photonics",
    "role": "Photodetectors, optoelectronics and photonics devices",
    "change": -12.87,
    "tags": [
      "detector"
    ],
    "priceStatus": "ok",
    "latestClose": 2495.5,
    "referenceClose": 2864.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "AMS.SW",
    "quoteSymbol": "AMS.SW",
    "name": "ams OSRAM",
    "market": "EU",
    "segment": "laser",
    "sub": "Emitter",
    "role": "Emitters, sensors and photonics devices",
    "change": 6.5,
    "tags": [
      "emitter"
    ],
    "priceStatus": "ok",
    "latestClose": 18.350000381469727,
    "referenceClose": 17.229999542236328,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "3105.TWO",
    "quoteSymbol": "3105.TWO",
    "name": "穩懋",
    "market": "TW",
    "segment": "laser",
    "sub": "GaAs foundry",
    "role": "GaAs foundry with photonics-adjacent capabilities",
    "change": 4.45,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 505.0,
    "referenceClose": 483.5,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "3081.TWO",
    "quoteSymbol": "3081.TWO",
    "name": "聯亞",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "III-V epitaxy wafers for optical communications",
    "change": -17.33,
    "tags": [
      "epi",
      "III-V"
    ],
    "priceStatus": "ok",
    "latestClose": 2195.0,
    "referenceClose": 2655.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "2455.TW",
    "quoteSymbol": "2455.TW",
    "name": "全新",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "GaAs/InP epitaxy and compound semiconductor materials",
    "change": -11.78,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 352.0,
    "referenceClose": 399.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "8086.TWO",
    "quoteSymbol": "8086.TWO",
    "name": "宏捷科",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "GaAs foundry and compound semiconductor devices",
    "change": -3.21,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 151.0,
    "referenceClose": 156.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "4991.TWO",
    "quoteSymbol": "4991.TWO",
    "name": "環宇-KY",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "Compound semiconductor and optical device exposure",
    "change": -15.29,
    "tags": [
      "compound"
    ],
    "priceStatus": "ok",
    "latestClose": 554.0,
    "referenceClose": 654.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "laser",
    "sub": "Optical component",
    "role": "Optical communication components and modules",
    "change": -15.94,
    "tags": [
      "optical"
    ],
    "priceStatus": "ok",
    "latestClose": 501.0,
    "referenceClose": 596.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser chip",
    "role": "Optical communication laser chips",
    "change": 6.0,
    "tags": [
      "laser chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1400.010009765625,
    "referenceClose": 1320.719970703125,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser / module",
    "role": "Laser equipment and optical communication products",
    "change": -3.94,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 151.00999450683594,
    "referenceClose": 157.1999969482422,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "APH",
    "quoteSymbol": "APH",
    "name": "Amphenol",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "High-speed interconnect and optical connector ecosystem",
    "change": 10.8,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 153.8000030517578,
    "referenceClose": 138.80999755859375,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "GLW",
    "quoteSymbol": "GLW",
    "name": "Corning",
    "market": "US",
    "segment": "component",
    "sub": "Fiber / glass",
    "role": "Optical fiber, glass and datacenter cabling",
    "change": 0.91,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 179.1999969482422,
    "referenceClose": 177.5800018310547,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "TEL",
    "quoteSymbol": "TEL",
    "name": "TE Connectivity",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "Connectors, cable assemblies and sensors",
    "change": -1.07,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 210.3800048828125,
    "referenceClose": 212.64999389648438,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers, modulators and optical subassemblies",
    "change": 2.13,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 385.0299987792969,
    "referenceClose": 376.989990234375,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers and optical communication components",
    "change": 6.7,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 921.5599975585938,
    "referenceClose": 863.6599731445312,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "component",
    "sub": "Manufacturing",
    "role": "Precision optical manufacturing and assembly",
    "change": -1.65,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 611.010009765625,
    "referenceClose": 621.25,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "3711.TW",
    "quoteSymbol": "3711.TW",
    "name": "日月光投控",
    "market": "TW",
    "segment": "component",
    "sub": "Advanced packaging",
    "role": "Semiconductor packaging and system-in-package",
    "change": 2.25,
    "tags": [
      "packaging"
    ],
    "priceStatus": "ok",
    "latestClose": 590.0,
    "referenceClose": 577.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "2449.TW",
    "quoteSymbol": "2449.TW",
    "name": "京元電",
    "market": "TW",
    "segment": "component",
    "sub": "Test",
    "role": "IC testing services for high-speed chips",
    "change": -8.89,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 282.0,
    "referenceClose": 309.5,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "6515.TW",
    "quoteSymbol": "6515.TW",
    "name": "穎崴",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card / socket",
    "role": "High-speed test interface and sockets",
    "change": 13.83,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 9590.0,
    "referenceClose": 8425.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "6223.TWO",
    "quoteSymbol": "6223.TWO",
    "name": "旺矽",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card",
    "role": "Probe cards and testing interface",
    "change": 12.49,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 6485.0,
    "referenceClose": 5765.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "3037.TW",
    "quoteSymbol": "3037.TW",
    "name": "欣興",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and advanced PCB",
    "change": -3.32,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 902.0,
    "referenceClose": 933.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "3189.TW",
    "quoteSymbol": "3189.TW",
    "name": "景碩",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate supplier",
    "change": -14.33,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 610.0,
    "referenceClose": 712.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "8046.TW",
    "quoteSymbol": "8046.TW",
    "name": "南電",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and PCB",
    "change": -3.08,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 819.0,
    "referenceClose": 845.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "2383.TW",
    "quoteSymbol": "2383.TW",
    "name": "台光電",
    "market": "TW",
    "segment": "component",
    "sub": "Copper clad laminate",
    "role": "High-speed CCL for AI servers and switches",
    "change": -1.13,
    "tags": [
      "CCL"
    ],
    "priceStatus": "ok",
    "latestClose": 4830.0,
    "referenceClose": 4885.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "component",
    "sub": "Connector / RF",
    "role": "Connectors and optical communication components",
    "change": -9.73,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 1855.0,
    "referenceClose": 2055.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "3363.TWO",
    "quoteSymbol": "3363.TWO",
    "name": "上詮",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber optic components and passive devices",
    "change": -18.83,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 737.0,
    "referenceClose": 908.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "component",
    "sub": "Optical subassembly",
    "role": "Optical communication subassemblies and packaging",
    "change": -7.98,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 461.0,
    "referenceClose": 501.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "6451.TW",
    "quoteSymbol": "6451.TW",
    "name": "訊芯-KY",
    "market": "TW",
    "segment": "component",
    "sub": "SiP / optical packaging",
    "role": "System-in-package and optical communication assembly",
    "change": -24.62,
    "tags": [
      "SiP"
    ],
    "priceStatus": "ok",
    "latestClose": 502.0,
    "referenceClose": 666.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber arrays, splitters and optical passive components",
    "change": -15.69,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 860.0,
    "referenceClose": 1020.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical communication component supplier",
    "change": -11.14,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 97.30000305175781,
    "referenceClose": 109.5,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive components and precision parts",
    "change": -13.93,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 280.95001220703125,
    "referenceClose": 326.4285583496094,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "300548.SZ",
    "quoteSymbol": "300548.SZ",
    "name": "博創科技",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive and active components",
    "change": 2.3,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 224.02999877929688,
    "referenceClose": 219.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "601869.SH",
    "quoteSymbol": "601869.SS",
    "name": "長飛光纖",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber",
    "role": "Optical fiber and cable",
    "change": -1.17,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 436.5,
    "referenceClose": 441.6700134277344,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "600487.SH",
    "quoteSymbol": "600487.SS",
    "name": "亨通光電",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber cable and optical network products",
    "change": 0.92,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 97.0,
    "referenceClose": 96.12000274658203,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "5801.T",
    "quoteSymbol": "5801.T",
    "name": "古河電工",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Optical fiber, cable and network materials",
    "change": -14.19,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 42090.0,
    "referenceClose": 49050.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "5803.T",
    "quoteSymbol": "5803.T",
    "name": "藤倉",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber, cable and optical interconnect products",
    "change": -10.34,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 4256.0,
    "referenceClose": 4747.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "4062.T",
    "quoteSymbol": "4062.T",
    "name": "Ibiden",
    "market": "JP",
    "segment": "component",
    "sub": "Substrate",
    "role": "Advanced IC substrates",
    "change": 1.84,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 19105.0,
    "referenceClose": 18760.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom and telecom optical transceivers",
    "change": 2.13,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 385.0299987792969,
    "referenceClose": 376.989990234375,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "module",
    "sub": "Laser / module",
    "role": "Laser engines and optical module supply",
    "change": 6.7,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 921.5599975585938,
    "referenceClose": 863.6599731445312,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "module",
    "sub": "Optical manufacturing",
    "role": "Optical module contract manufacturing",
    "change": -1.65,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 611.010009765625,
    "referenceClose": 621.25,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "module",
    "sub": "Coherent module",
    "role": "Coherent optical modules and transport platforms",
    "change": -8.65,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 445.9800109863281,
    "referenceClose": 488.2099914550781,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "module",
    "sub": "Acacia module",
    "role": "Acacia coherent optics and pluggable modules",
    "change": -0.44,
    "tags": [
      "Acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 121.0999984741211,
    "referenceClose": 121.63999938964844,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "module",
    "sub": "Optical module",
    "role": "Coherent optics and network system modules",
    "change": 2.92,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 14.800000190734863,
    "referenceClose": 14.380000114440918,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical communication modules and components",
    "change": -15.94,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 501.0,
    "referenceClose": 596.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "4977.TW",
    "quoteSymbol": "4977.TW",
    "name": "眾達-KY",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical transceiver supplier",
    "change": -9.98,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 180.5,
    "referenceClose": 200.5,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver component",
    "role": "Optical communication and connector products",
    "change": -9.73,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1855.0,
    "referenceClose": 2055.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "module",
    "sub": "OSA",
    "role": "Optical subassemblies for transceivers",
    "change": -7.98,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 461.0,
    "referenceClose": 501.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "module",
    "sub": "Passive optical",
    "role": "Fiber components used in modules",
    "change": -15.69,
    "tags": [
      "passive"
    ],
    "priceStatus": "ok",
    "latestClose": 860.0,
    "referenceClose": 1020.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module exposure",
    "change": -11.14,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 97.30000305175781,
    "referenceClose": 109.5,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "4908.TWO",
    "quoteSymbol": "4908.TWO",
    "name": "前鼎",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module and equipment",
    "change": -12.14,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 199.0,
    "referenceClose": 226.5,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "300308.SZ",
    "quoteSymbol": "300308.SZ",
    "name": "中際旭創",
    "market": "CN",
    "segment": "module",
    "sub": "800G / 1.6T",
    "role": "High-speed optical transceiver leader",
    "change": -2.63,
    "tags": [
      "800G",
      "1.6T"
    ],
    "priceStatus": "ok",
    "latestClose": 1149.0,
    "referenceClose": 1179.989990234375,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "300502.SZ",
    "quoteSymbol": "300502.SZ",
    "name": "新易盛",
    "market": "CN",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom optical transceivers",
    "change": -5.21,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 506.4599914550781,
    "referenceClose": 534.2857055664062,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "002281.SZ",
    "quoteSymbol": "002281.SZ",
    "name": "光迅科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical devices and modules",
    "change": -9.94,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 204.97000122070312,
    "referenceClose": 227.5800018310547,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "603083.SH",
    "quoteSymbol": "603083.SS",
    "name": "劍橋科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical modules and broadband equipment",
    "change": -4.7,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 182.99000549316406,
    "referenceClose": 192.02000427246094,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical engine parts",
    "role": "High-speed module precision components",
    "change": -13.93,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 280.95001220703125,
    "referenceClose": 326.4285583496094,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "688205.SH",
    "quoteSymbol": "688205.SS",
    "name": "德科立",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical transceiver modules",
    "change": -2.96,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 220.0,
    "referenceClose": 226.6999969482422,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication and laser products",
    "change": -3.94,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 151.00999450683594,
    "referenceClose": 157.1999969482422,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical network",
    "role": "Optical network systems and modules",
    "change": 11.77,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 63.130001068115234,
    "referenceClose": 56.47999954223633,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "module",
    "sub": "Optical device",
    "role": "Optical components and communication devices",
    "change": -15.68,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 10970.0,
    "referenceClose": 13010.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "ANET",
    "quoteSymbol": "ANET",
    "name": "Arista Networks",
    "market": "US",
    "segment": "system",
    "sub": "AI switch",
    "role": "AI datacenter Ethernet switches",
    "change": 5.81,
    "tags": [
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 163.24000549316406,
    "referenceClose": 154.27000427246094,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "system",
    "sub": "Switch / router",
    "role": "Enterprise and cloud networking systems",
    "change": -0.44,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 121.0999984741211,
    "referenceClose": 121.63999938964844,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "HPE",
    "quoteSymbol": "HPE",
    "name": "HPE",
    "market": "US",
    "segment": "system",
    "sub": "Server / networking",
    "role": "AI servers, networking and cloud infrastructure",
    "change": -2.09,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 48.16999816894531,
    "referenceClose": 49.20000076293945,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "DELL",
    "quoteSymbol": "DELL",
    "name": "Dell",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and enterprise infrastructure",
    "change": 0.3,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 395.57000732421875,
    "referenceClose": 394.3900146484375,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "SMCI",
    "quoteSymbol": "SMCI",
    "name": "Supermicro",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server platforms and rack-scale systems",
    "change": -26.85,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 30.459999084472656,
    "referenceClose": 41.63999938964844,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "CLS",
    "quoteSymbol": "CLS",
    "name": "Celestica",
    "market": "US",
    "segment": "system",
    "sub": "ODM / EMS",
    "role": "Cloud hardware and networking manufacturing",
    "change": 5.76,
    "tags": [
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 393.1199951171875,
    "referenceClose": 371.7099914550781,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "JBL",
    "quoteSymbol": "JBL",
    "name": "Jabil",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing for networking systems",
    "change": 8.94,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 384.82000732421875,
    "referenceClose": 353.239990234375,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "FLEX",
    "quoteSymbol": "FLEX",
    "name": "Flex",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing and cloud hardware",
    "change": -1.45,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 149.7100067138672,
    "referenceClose": 151.9199981689453,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "2345.TW",
    "quoteSymbol": "2345.TW",
    "name": "智邦",
    "market": "TW",
    "segment": "system",
    "sub": "Switch ODM",
    "role": "White-box switch and cloud networking ODM",
    "change": -6.22,
    "tags": [
      "switch",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 2335.0,
    "referenceClose": 2490.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "2382.TW",
    "quoteSymbol": "2382.TW",
    "name": "廣達",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and cloud infrastructure ODM",
    "change": -4.74,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 372.0,
    "referenceClose": 390.5,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "6669.TW",
    "quoteSymbol": "6669.TW",
    "name": "緯穎",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "Cloud datacenter server ODM",
    "change": -14.31,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 4850.0,
    "referenceClose": 5660.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "2317.TW",
    "quoteSymbol": "2317.TW",
    "name": "鴻海",
    "market": "TW",
    "segment": "system",
    "sub": "EMS / server",
    "role": "AI server and system assembly",
    "change": -8.44,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 260.5,
    "referenceClose": 284.5,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "2308.TW",
    "quoteSymbol": "2308.TW",
    "name": "台達電",
    "market": "TW",
    "segment": "system",
    "sub": "Power / thermal",
    "role": "Power, thermal and datacenter infrastructure",
    "change": -3.7,
    "tags": [
      "power",
      "thermal"
    ],
    "priceStatus": "ok",
    "latestClose": 2215.0,
    "referenceClose": 2300.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "3706.TW",
    "quoteSymbol": "3706.TW",
    "name": "神達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and datacenter system integration",
    "change": -7.47,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 85.5,
    "referenceClose": 92.4000015258789,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "3231.TW",
    "quoteSymbol": "3231.TW",
    "name": "緯創",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and system integration",
    "change": -8.77,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 156.0,
    "referenceClose": 171.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "2356.TW",
    "quoteSymbol": "2356.TW",
    "name": "英業達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and cloud equipment manufacturing",
    "change": -13.8,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 66.19999694824219,
    "referenceClose": 76.80000305175781,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "3380.TW",
    "quoteSymbol": "3380.TW",
    "name": "明泰",
    "market": "TW",
    "segment": "system",
    "sub": "Networking",
    "role": "Networking products and broadband equipment",
    "change": -9.6,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 33.900001525878906,
    "referenceClose": 37.5,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "6285.TW",
    "quoteSymbol": "6285.TW",
    "name": "啟碁",
    "market": "TW",
    "segment": "system",
    "sub": "Network device",
    "role": "Wireless and networking equipment",
    "change": -7.53,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 270.0,
    "referenceClose": 292.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "system",
    "sub": "Optical systems",
    "role": "Optical communication and laser systems",
    "change": -3.94,
    "tags": [
      "system"
    ],
    "priceStatus": "ok",
    "latestClose": 151.00999450683594,
    "referenceClose": 157.1999969482422,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "system",
    "sub": "Optical network",
    "role": "Optical transmission and network equipment",
    "change": 11.77,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 63.130001068115234,
    "referenceClose": 56.47999954223633,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "000063.SZ",
    "quoteSymbol": "000063.SZ",
    "name": "中興通訊",
    "market": "CN",
    "segment": "system",
    "sub": "Telecom equipment",
    "role": "Telecom and datacenter network equipment",
    "change": -7.1,
    "tags": [
      "telecom"
    ],
    "priceStatus": "ok",
    "latestClose": 36.349998474121094,
    "referenceClose": 39.130001068115234,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "6701.T",
    "quoteSymbol": "6701.T",
    "name": "NEC",
    "market": "JP",
    "segment": "system",
    "sub": "Network systems",
    "role": "Telecom, submarine and network systems",
    "change": -8.79,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 3879.0,
    "referenceClose": 4253.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  },
  {
    "ticker": "6702.T",
    "quoteSymbol": "6702.T",
    "name": "Fujitsu",
    "market": "JP",
    "segment": "system",
    "sub": "ICT systems",
    "role": "ICT infrastructure and network systems",
    "change": -9.22,
    "tags": [
      "ICT"
    ],
    "priceStatus": "ok",
    "latestClose": 3260.0,
    "referenceClose": 3591.0,
    "priceDate": "2026-06-12",
    "referenceDate": "2026-06-05"
  }
];

