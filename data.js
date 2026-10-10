window.HEATMAP_META = {
  "title": "光通訊 / CPO 供應鏈熱力圖",
  "subtitle": "六大環節、跨市場上市公司、同公司可重複出現在多個供應鏈位置。",
  "lastUpdated": "2026-10-10",
  "dateRange": "2026-09-30 → 2026-10-09",
  "totalTiles": 126,
  "totalCompanies": 97,
  "quoteSymbolsUpdated": 97,
  "quoteSymbolsFailed": 0,
  "priceStatusCounts": {
    "ok": 126
  },
  "topGainer": {
    "ticker": "8086.TWO",
    "name": "宏捷科",
    "change": 33.91
  },
  "topLoser": {
    "ticker": "688498.SH",
    "name": "源傑科技",
    "change": -25.23
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
    "change": 1.8,
    "tags": [
      "ASIC",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 361.5400085449219,
    "referenceClose": 355.1400146484375,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "asic",
    "sub": "GPU / Network ASIC",
    "role": "GPU, NVLink, Spectrum-X ecosystem",
    "change": -2.0,
    "tags": [
      "GPU",
      "networking"
    ],
    "priceStatus": "ok",
    "latestClose": 229.27999877929688,
    "referenceClose": 233.9499969482422,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "asic",
    "sub": "DSP / PAM4",
    "role": "Optical DSP, custom silicon, DCI chips",
    "change": 1.1,
    "tags": [
      "DSP",
      "custom silicon"
    ],
    "priceStatus": "ok",
    "latestClose": 275.2799987792969,
    "referenceClose": 272.2900085449219,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "CRDO",
    "quoteSymbol": "CRDO",
    "name": "Credo",
    "market": "US",
    "segment": "asic",
    "sub": "Retimer / DSP",
    "role": "High-speed connectivity and optical DSP",
    "change": -0.96,
    "tags": [
      "DSP",
      "retimer"
    ],
    "priceStatus": "ok",
    "latestClose": 216.5500030517578,
    "referenceClose": 218.63999938964844,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "ALAB",
    "quoteSymbol": "ALAB",
    "name": "Astera Labs",
    "market": "US",
    "segment": "asic",
    "sub": "PCIe / CXL",
    "role": "AI data-center connectivity silicon",
    "change": -2.32,
    "tags": [
      "retimer",
      "CXL"
    ],
    "priceStatus": "ok",
    "latestClose": 342.2099914550781,
    "referenceClose": 350.3299865722656,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Laser drivers, TIAs, high-speed analog",
    "change": 2.63,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 330.05999755859375,
    "referenceClose": 321.6000061035156,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "SMTC",
    "quoteSymbol": "SMTC",
    "name": "Semtech",
    "market": "US",
    "segment": "asic",
    "sub": "Signal IC",
    "role": "Signal integrity and optical analog ICs",
    "change": -3.89,
    "tags": [
      "signal"
    ],
    "priceStatus": "ok",
    "latestClose": 187.3000030517578,
    "referenceClose": 194.8800048828125,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "asic",
    "sub": "Network silicon",
    "role": "Silicon One and Acacia optical stack",
    "change": 5.52,
    "tags": [
      "switch",
      "acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 118.38999938964844,
    "referenceClose": 112.19999694824219,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "asic",
    "sub": "Coherent DSP",
    "role": "WaveLogic coherent DSP and systems",
    "change": 14.93,
    "tags": [
      "coherent",
      "DSP"
    ],
    "priceStatus": "ok",
    "latestClose": 449.7699890136719,
    "referenceClose": 391.3399963378906,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "AMD",
    "quoteSymbol": "AMD",
    "name": "AMD",
    "market": "US",
    "segment": "asic",
    "sub": "AI accelerator",
    "role": "AI accelerators and adaptive compute",
    "change": -4.07,
    "tags": [
      "accelerator"
    ],
    "priceStatus": "ok",
    "latestClose": 608.0999755859375,
    "referenceClose": 633.9099731445312,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "asic",
    "sub": "Foundry / I/O",
    "role": "Foundry, Ethernet, historical silicon photonics",
    "change": -12.26,
    "tags": [
      "foundry",
      "ethernet"
    ],
    "priceStatus": "ok",
    "latestClose": 104.69999694824219,
    "referenceClose": 119.33000183105469,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "QCOM",
    "quoteSymbol": "QCOM",
    "name": "Qualcomm",
    "market": "US",
    "segment": "asic",
    "sub": "Connectivity IC",
    "role": "High-speed connectivity and edge AI silicon",
    "change": -5.07,
    "tags": [
      "connectivity"
    ],
    "priceStatus": "ok",
    "latestClose": 175.5,
    "referenceClose": 184.8699951171875,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "3661.TW",
    "quoteSymbol": "3661.TW",
    "name": "世芯-KY",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "Advanced-node custom ASIC design service",
    "change": 15.4,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 4345.0,
    "referenceClose": 3765.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "3443.TW",
    "quoteSymbol": "3443.TW",
    "name": "創意",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "GUC ASIC design and implementation",
    "change": 5.82,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 8360.0,
    "referenceClose": 7900.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "2454.TW",
    "quoteSymbol": "2454.TW",
    "name": "聯發科",
    "market": "TW",
    "segment": "asic",
    "sub": "Connectivity SoC",
    "role": "Networking, SerDes and edge AI chip exposure",
    "change": -5.82,
    "tags": [
      "SoC"
    ],
    "priceStatus": "ok",
    "latestClose": 4690.0,
    "referenceClose": 4980.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "5274.TWO",
    "quoteSymbol": "5274.TWO",
    "name": "信驊",
    "market": "TW",
    "segment": "asic",
    "sub": "BMC",
    "role": "Server management silicon",
    "change": -8.17,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 17485.0,
    "referenceClose": 19040.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "688536.SH",
    "quoteSymbol": "688536.SS",
    "name": "思瑞浦",
    "market": "CN",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Analog and signal-chain ICs",
    "change": -12.43,
    "tags": [
      "analog"
    ],
    "priceStatus": "ok",
    "latestClose": 286.3599853515625,
    "referenceClose": 327.0,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-09-30"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "asic",
    "sub": "Laser driver link",
    "role": "Optical chip supplier with upstream exposure",
    "change": -25.23,
    "tags": [
      "optical chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1206.010009765625,
    "referenceClose": 1613.0,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-09-30"
  },
  {
    "ticker": "2330.TW",
    "quoteSymbol": "2330.TW",
    "name": "台積電",
    "market": "TW",
    "segment": "sipic",
    "sub": "Foundry",
    "role": "Advanced-node and packaging platform for CPO ecosystem",
    "change": 1.59,
    "tags": [
      "foundry",
      "CoWoS"
    ],
    "priceStatus": "ok",
    "latestClose": 2550.0,
    "referenceClose": 2510.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "AVGO",
    "quoteSymbol": "AVGO",
    "name": "Broadcom",
    "market": "US",
    "segment": "sipic",
    "sub": "Co-packaged optics",
    "role": "CPO roadmap and switch silicon integration",
    "change": 1.8,
    "tags": [
      "CPO",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 361.5400085449219,
    "referenceClose": 355.1400146484375,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical I/O ecosystem",
    "role": "AI cluster architecture drives optical I/O demand",
    "change": -2.0,
    "tags": [
      "AI",
      "optical I/O"
    ],
    "priceStatus": "ok",
    "latestClose": 229.27999877929688,
    "referenceClose": 233.9499969482422,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical platform",
    "role": "DSP plus silicon photonics partnership ecosystem",
    "change": 1.1,
    "tags": [
      "DSP",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 275.2799987792969,
    "referenceClose": 272.2900085449219,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "sipic",
    "sub": "Silicon photonics",
    "role": "Integrated silicon photonics and foundry capabilities",
    "change": -12.26,
    "tags": [
      "SiPh",
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 104.69999694824219,
    "referenceClose": 119.33000183105469,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Lasers, transceivers and optical engine building blocks",
    "change": -7.25,
    "tags": [
      "laser",
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 312.6199951171875,
    "referenceClose": 337.0400085449219,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Datacom lasers and optical components",
    "change": 1.65,
    "tags": [
      "laser",
      "datacom"
    ],
    "priceStatus": "ok",
    "latestClose": 1103.35498046875,
    "referenceClose": 1085.4200439453125,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "STM",
    "quoteSymbol": "STM",
    "name": "STMicro",
    "market": "EU",
    "segment": "sipic",
    "sub": "Photonics platform",
    "role": "Photonics and advanced semiconductor platform exposure",
    "change": -9.08,
    "tags": [
      "photonics"
    ],
    "priceStatus": "ok",
    "latestClose": 52.060001373291016,
    "referenceClose": 57.2599983215332,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "GFS",
    "quoteSymbol": "GFS",
    "name": "GlobalFoundries",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Silicon photonics and specialty process platform",
    "change": -3.85,
    "tags": [
      "foundry",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 48.2400016784668,
    "referenceClose": 50.16999816894531,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "TSEM",
    "quoteSymbol": "TSEM",
    "name": "Tower Semiconductor",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Analog, photonics and specialty manufacturing",
    "change": -5.04,
    "tags": [
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 228.7100067138672,
    "referenceClose": 240.86000061035156,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "sipic",
    "sub": "Optical systems",
    "role": "Photonic service engines and coherent optics",
    "change": -2.26,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 10.359999656677246,
    "referenceClose": 10.600000381469727,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "sipic",
    "sub": "Acacia optics",
    "role": "Coherent modules and optical interconnect roadmap",
    "change": 5.52,
    "tags": [
      "Acacia",
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 118.38999938964844,
    "referenceClose": 112.19999694824219,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "sipic",
    "sub": "Coherent optics",
    "role": "Coherent optical engine and network platforms",
    "change": 14.93,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 449.7699890136719,
    "referenceClose": 391.3399963378906,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "POET",
    "quoteSymbol": "POET",
    "name": "POET Technologies",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical interposer",
    "role": "Optical interposer platform for transceivers",
    "change": -10.53,
    "tags": [
      "interposer"
    ],
    "priceStatus": "ok",
    "latestClose": 6.96999979019165,
    "referenceClose": 7.789999961853027,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "LWLG",
    "quoteSymbol": "LWLG",
    "name": "Lightwave Logic",
    "market": "US",
    "segment": "sipic",
    "sub": "EO polymer",
    "role": "Electro-optic polymer material platform",
    "change": -12.81,
    "tags": [
      "material"
    ],
    "priceStatus": "ok",
    "latestClose": 4.96999979019165,
    "referenceClose": 5.699999809265137,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "4966.TWO",
    "quoteSymbol": "4966.TWO",
    "name": "譜瑞-KY",
    "market": "TW",
    "segment": "sipic",
    "sub": "High-speed interface",
    "role": "High-speed interface ICs and data transmission",
    "change": -2.45,
    "tags": [
      "interface"
    ],
    "priceStatus": "ok",
    "latestClose": 558.0,
    "referenceClose": 572.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "6789.TW",
    "quoteSymbol": "6789.TW",
    "name": "采鈺",
    "market": "TW",
    "segment": "sipic",
    "sub": "Optical process",
    "role": "Optical semiconductor process and sensor platform",
    "change": -1.64,
    "tags": [
      "process"
    ],
    "priceStatus": "ok",
    "latestClose": 481.0,
    "referenceClose": 489.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "688313.SH",
    "quoteSymbol": "688313.SS",
    "name": "仕佳光子",
    "market": "CN",
    "segment": "sipic",
    "sub": "PLC / optical chip",
    "role": "PLC splitter, AWG and optical chip supplier",
    "change": -14.57,
    "tags": [
      "PLC",
      "chip"
    ],
    "priceStatus": "ok",
    "latestClose": 131.97000122070312,
    "referenceClose": 154.47999572753906,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-09-30"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "laser",
    "sub": "Laser / InP",
    "role": "InP lasers, VCSELs, coherent and datacom components",
    "change": -7.25,
    "tags": [
      "InP",
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 312.6199951171875,
    "referenceClose": 337.0400085449219,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "laser",
    "sub": "Datacom laser",
    "role": "EML, DFB and high-speed datacom laser supply",
    "change": 1.65,
    "tags": [
      "EML",
      "DFB"
    ],
    "priceStatus": "ok",
    "latestClose": 1103.35498046875,
    "referenceClose": 1085.4200439453125,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "laser",
    "sub": "Laser driver / TIA",
    "role": "Laser drivers, TIAs and analog front-end",
    "change": 2.63,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 330.05999755859375,
    "referenceClose": 321.6000061035156,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "IPGP",
    "quoteSymbol": "IPGP",
    "name": "IPG Photonics",
    "market": "US",
    "segment": "laser",
    "sub": "Fiber laser",
    "role": "Laser technology and optical components",
    "change": -6.88,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 78.2699966430664,
    "referenceClose": 84.05000305175781,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "AXTI",
    "quoteSymbol": "AXTI",
    "name": "AXT",
    "market": "US",
    "segment": "laser",
    "sub": "Substrate",
    "role": "Compound semiconductor substrates",
    "change": -20.27,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 68.45999908447266,
    "referenceClose": 85.87000274658203,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "IQE.L",
    "quoteSymbol": "IQE.L",
    "name": "IQE",
    "market": "EU",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "Compound semiconductor epitaxy wafers",
    "change": -9.12,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 49.79999923706055,
    "referenceClose": 54.79999923706055,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Compound semiconductor and optical components",
    "change": -3.73,
    "tags": [
      "InP",
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 2360.5,
    "referenceClose": 2452.0,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "6503.T",
    "quoteSymbol": "6503.T",
    "name": "三菱電機",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Optical devices, lasers and industrial electronics",
    "change": -2.3,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 5143.0,
    "referenceClose": 5264.0,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "6965.T",
    "quoteSymbol": "6965.T",
    "name": "浜松光子",
    "market": "JP",
    "segment": "laser",
    "sub": "Photonics",
    "role": "Photodetectors, optoelectronics and photonics devices",
    "change": 0.63,
    "tags": [
      "detector"
    ],
    "priceStatus": "ok",
    "latestClose": 2404.0,
    "referenceClose": 2389.0,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "AMS.SW",
    "quoteSymbol": "AMS.SW",
    "name": "ams OSRAM",
    "market": "EU",
    "segment": "laser",
    "sub": "Emitter",
    "role": "Emitters, sensors and photonics devices",
    "change": -14.99,
    "tags": [
      "emitter"
    ],
    "priceStatus": "ok",
    "latestClose": 21.100000381469727,
    "referenceClose": 24.81999969482422,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "3105.TWO",
    "quoteSymbol": "3105.TWO",
    "name": "穩懋",
    "market": "TW",
    "segment": "laser",
    "sub": "GaAs foundry",
    "role": "GaAs foundry with photonics-adjacent capabilities",
    "change": 7.99,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 581.0,
    "referenceClose": 538.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "3081.TWO",
    "quoteSymbol": "3081.TWO",
    "name": "聯亞",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "III-V epitaxy wafers for optical communications",
    "change": 11.28,
    "tags": [
      "epi",
      "III-V"
    ],
    "priceStatus": "ok",
    "latestClose": 2960.0,
    "referenceClose": 2660.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "2455.TW",
    "quoteSymbol": "2455.TW",
    "name": "全新",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "GaAs/InP epitaxy and compound semiconductor materials",
    "change": 2.2,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 558.0,
    "referenceClose": 546.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "8086.TWO",
    "quoteSymbol": "8086.TWO",
    "name": "宏捷科",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "GaAs foundry and compound semiconductor devices",
    "change": 33.91,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 154.0,
    "referenceClose": 115.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "4991.TWO",
    "quoteSymbol": "4991.TWO",
    "name": "環宇-KY",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "Compound semiconductor and optical device exposure",
    "change": 5.25,
    "tags": [
      "compound"
    ],
    "priceStatus": "ok",
    "latestClose": 511.0,
    "referenceClose": 485.5,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "laser",
    "sub": "Optical component",
    "role": "Optical communication components and modules",
    "change": 1.44,
    "tags": [
      "optical"
    ],
    "priceStatus": "ok",
    "latestClose": 565.0,
    "referenceClose": 557.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser chip",
    "role": "Optical communication laser chips",
    "change": -25.23,
    "tags": [
      "laser chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1206.010009765625,
    "referenceClose": 1613.0,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-09-30"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser / module",
    "role": "Laser equipment and optical communication products",
    "change": -6.81,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 85.97000122070312,
    "referenceClose": 92.25,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-09-30"
  },
  {
    "ticker": "APH",
    "quoteSymbol": "APH",
    "name": "Amphenol",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "High-speed interconnect and optical connector ecosystem",
    "change": 0.32,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 87.23999786376953,
    "referenceClose": 86.95999908447266,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "GLW",
    "quoteSymbol": "GLW",
    "name": "Corning",
    "market": "US",
    "segment": "component",
    "sub": "Fiber / glass",
    "role": "Optical fiber, glass and datacenter cabling",
    "change": -4.57,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 156.67999267578125,
    "referenceClose": 164.19000244140625,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "TEL",
    "quoteSymbol": "TEL",
    "name": "TE Connectivity",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "Connectors, cable assemblies and sensors",
    "change": -0.94,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 218.2899932861328,
    "referenceClose": 220.36000061035156,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers, modulators and optical subassemblies",
    "change": -7.25,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 312.6199951171875,
    "referenceClose": 337.0400085449219,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers and optical communication components",
    "change": 1.65,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 1103.35498046875,
    "referenceClose": 1085.4200439453125,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "component",
    "sub": "Manufacturing",
    "role": "Precision optical manufacturing and assembly",
    "change": 4.87,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 486.2799987792969,
    "referenceClose": 463.69000244140625,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "3711.TW",
    "quoteSymbol": "3711.TW",
    "name": "日月光投控",
    "market": "TW",
    "segment": "component",
    "sub": "Advanced packaging",
    "role": "Semiconductor packaging and system-in-package",
    "change": 4.79,
    "tags": [
      "packaging"
    ],
    "priceStatus": "ok",
    "latestClose": 744.0,
    "referenceClose": 710.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "2449.TW",
    "quoteSymbol": "2449.TW",
    "name": "京元電",
    "market": "TW",
    "segment": "component",
    "sub": "Test",
    "role": "IC testing services for high-speed chips",
    "change": 2.87,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 304.5,
    "referenceClose": 296.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "6515.TW",
    "quoteSymbol": "6515.TW",
    "name": "穎崴",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card / socket",
    "role": "High-speed test interface and sockets",
    "change": -2.69,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 5615.0,
    "referenceClose": 5770.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "6223.TWO",
    "quoteSymbol": "6223.TWO",
    "name": "旺矽",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card",
    "role": "Probe cards and testing interface",
    "change": 10.84,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 5575.0,
    "referenceClose": 5030.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "3037.TW",
    "quoteSymbol": "3037.TW",
    "name": "欣興",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and advanced PCB",
    "change": 4.53,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1270.0,
    "referenceClose": 1215.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "3189.TW",
    "quoteSymbol": "3189.TW",
    "name": "景碩",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate supplier",
    "change": 6.44,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1075.0,
    "referenceClose": 1010.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "8046.TW",
    "quoteSymbol": "8046.TW",
    "name": "南電",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and PCB",
    "change": 3.87,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1475.0,
    "referenceClose": 1420.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "2383.TW",
    "quoteSymbol": "2383.TW",
    "name": "台光電",
    "market": "TW",
    "segment": "component",
    "sub": "Copper clad laminate",
    "role": "High-speed CCL for AI servers and switches",
    "change": 20.6,
    "tags": [
      "CCL"
    ],
    "priceStatus": "ok",
    "latestClose": 6000.0,
    "referenceClose": 4975.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "component",
    "sub": "Connector / RF",
    "role": "Connectors and optical communication components",
    "change": 20.61,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 1785.0,
    "referenceClose": 1480.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "3363.TWO",
    "quoteSymbol": "3363.TWO",
    "name": "上詮",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber optic components and passive devices",
    "change": 4.06,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 667.0,
    "referenceClose": 641.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "component",
    "sub": "Optical subassembly",
    "role": "Optical communication subassemblies and packaging",
    "change": 1.36,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 522.0,
    "referenceClose": 515.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "6451.TW",
    "quoteSymbol": "6451.TW",
    "name": "訊芯-KY",
    "market": "TW",
    "segment": "component",
    "sub": "SiP / optical packaging",
    "role": "System-in-package and optical communication assembly",
    "change": 1.82,
    "tags": [
      "SiP"
    ],
    "priceStatus": "ok",
    "latestClose": 420.5,
    "referenceClose": 413.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber arrays, splitters and optical passive components",
    "change": 5.84,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 689.0,
    "referenceClose": 651.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical communication component supplier",
    "change": -5.78,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 96.0999984741211,
    "referenceClose": 102.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive components and precision parts",
    "change": -9.87,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 235.0399932861328,
    "referenceClose": 260.7699890136719,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-09-30"
  },
  {
    "ticker": "300548.SZ",
    "quoteSymbol": "300548.SZ",
    "name": "博創科技",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive and active components",
    "change": -13.53,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 190.0800018310547,
    "referenceClose": 219.8300018310547,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-09-30"
  },
  {
    "ticker": "601869.SH",
    "quoteSymbol": "601869.SS",
    "name": "長飛光纖",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber",
    "role": "Optical fiber and cable",
    "change": -5.66,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 387.8699951171875,
    "referenceClose": 411.1600036621094,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-09-30"
  },
  {
    "ticker": "600487.SH",
    "quoteSymbol": "600487.SS",
    "name": "亨通光電",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber cable and optical network products",
    "change": -3.48,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 52.95000076293945,
    "referenceClose": 54.86000061035156,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-09-30"
  },
  {
    "ticker": "5801.T",
    "quoteSymbol": "5801.T",
    "name": "古河電工",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Optical fiber, cable and network materials",
    "change": -7.52,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 4096.0,
    "referenceClose": 4429.0,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "5803.T",
    "quoteSymbol": "5803.T",
    "name": "藤倉",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber, cable and optical interconnect products",
    "change": -3.3,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 5413.0,
    "referenceClose": 5598.0,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "4062.T",
    "quoteSymbol": "4062.T",
    "name": "Ibiden",
    "market": "JP",
    "segment": "component",
    "sub": "Substrate",
    "role": "Advanced IC substrates",
    "change": -4.83,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 11515.0,
    "referenceClose": 12100.0,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom and telecom optical transceivers",
    "change": -7.25,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 312.6199951171875,
    "referenceClose": 337.0400085449219,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "module",
    "sub": "Laser / module",
    "role": "Laser engines and optical module supply",
    "change": 1.65,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1103.35498046875,
    "referenceClose": 1085.4200439453125,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "module",
    "sub": "Optical manufacturing",
    "role": "Optical module contract manufacturing",
    "change": 4.87,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 486.2799987792969,
    "referenceClose": 463.69000244140625,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "module",
    "sub": "Coherent module",
    "role": "Coherent optical modules and transport platforms",
    "change": 14.93,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 449.7699890136719,
    "referenceClose": 391.3399963378906,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "module",
    "sub": "Acacia module",
    "role": "Acacia coherent optics and pluggable modules",
    "change": 5.52,
    "tags": [
      "Acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 118.38999938964844,
    "referenceClose": 112.19999694824219,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "module",
    "sub": "Optical module",
    "role": "Coherent optics and network system modules",
    "change": -2.26,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 10.359999656677246,
    "referenceClose": 10.600000381469727,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical communication modules and components",
    "change": 1.44,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 565.0,
    "referenceClose": 557.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "4977.TW",
    "quoteSymbol": "4977.TW",
    "name": "眾達-KY",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical transceiver supplier",
    "change": 1.17,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 172.5,
    "referenceClose": 170.5,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver component",
    "role": "Optical communication and connector products",
    "change": 20.61,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1785.0,
    "referenceClose": 1480.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "module",
    "sub": "OSA",
    "role": "Optical subassemblies for transceivers",
    "change": 1.36,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 522.0,
    "referenceClose": 515.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "module",
    "sub": "Passive optical",
    "role": "Fiber components used in modules",
    "change": 5.84,
    "tags": [
      "passive"
    ],
    "priceStatus": "ok",
    "latestClose": 689.0,
    "referenceClose": 651.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module exposure",
    "change": -5.78,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 96.0999984741211,
    "referenceClose": 102.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "4908.TWO",
    "quoteSymbol": "4908.TWO",
    "name": "前鼎",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module and equipment",
    "change": 19.07,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 243.5,
    "referenceClose": 204.5,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "300308.SZ",
    "quoteSymbol": "300308.SZ",
    "name": "中際旭創",
    "market": "CN",
    "segment": "module",
    "sub": "800G / 1.6T",
    "role": "High-speed optical transceiver leader",
    "change": -4.1,
    "tags": [
      "800G",
      "1.6T"
    ],
    "priceStatus": "ok",
    "latestClose": 775.2899780273438,
    "referenceClose": 808.4400024414062,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-09-30"
  },
  {
    "ticker": "300502.SZ",
    "quoteSymbol": "300502.SZ",
    "name": "新易盛",
    "market": "CN",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom optical transceivers",
    "change": -4.83,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 370.20001220703125,
    "referenceClose": 389.0,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-09-30"
  },
  {
    "ticker": "002281.SZ",
    "quoteSymbol": "002281.SZ",
    "name": "光迅科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical devices and modules",
    "change": -9.81,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 148.7100067138672,
    "referenceClose": 164.8800048828125,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-09-30"
  },
  {
    "ticker": "603083.SH",
    "quoteSymbol": "603083.SS",
    "name": "劍橋科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical modules and broadband equipment",
    "change": -6.06,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 193.0,
    "referenceClose": 205.4499969482422,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-09-30"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical engine parts",
    "role": "High-speed module precision components",
    "change": -9.87,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 235.0399932861328,
    "referenceClose": 260.7699890136719,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-09-30"
  },
  {
    "ticker": "688205.SH",
    "quoteSymbol": "688205.SS",
    "name": "德科立",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical transceiver modules",
    "change": -12.15,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 183.61000061035156,
    "referenceClose": 209.0,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-09-30"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication and laser products",
    "change": -6.81,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 85.97000122070312,
    "referenceClose": 92.25,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-09-30"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical network",
    "role": "Optical network systems and modules",
    "change": -5.74,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 33.650001525878906,
    "referenceClose": 35.70000076293945,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-09-30"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "module",
    "sub": "Optical device",
    "role": "Optical components and communication devices",
    "change": -3.73,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 2360.5,
    "referenceClose": 2452.0,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "ANET",
    "quoteSymbol": "ANET",
    "name": "Arista Networks",
    "market": "US",
    "segment": "system",
    "sub": "AI switch",
    "role": "AI datacenter Ethernet switches",
    "change": 4.53,
    "tags": [
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 216.74000549316406,
    "referenceClose": 207.35000610351562,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "system",
    "sub": "Switch / router",
    "role": "Enterprise and cloud networking systems",
    "change": 5.52,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 118.38999938964844,
    "referenceClose": 112.19999694824219,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "HPE",
    "quoteSymbol": "HPE",
    "name": "HPE",
    "market": "US",
    "segment": "system",
    "sub": "Server / networking",
    "role": "AI servers, networking and cloud infrastructure",
    "change": 5.96,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 73.45999908447266,
    "referenceClose": 69.33000183105469,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "DELL",
    "quoteSymbol": "DELL",
    "name": "Dell",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and enterprise infrastructure",
    "change": 4.18,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 586.0599975585938,
    "referenceClose": 562.52001953125,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "SMCI",
    "quoteSymbol": "SMCI",
    "name": "Supermicro",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server platforms and rack-scale systems",
    "change": -4.19,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 41.86000061035156,
    "referenceClose": 43.689998626708984,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "CLS",
    "quoteSymbol": "CLS",
    "name": "Celestica",
    "market": "US",
    "segment": "system",
    "sub": "ODM / EMS",
    "role": "Cloud hardware and networking manufacturing",
    "change": -6.5,
    "tags": [
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 362.1600036621094,
    "referenceClose": 387.32000732421875,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "JBL",
    "quoteSymbol": "JBL",
    "name": "Jabil",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing for networking systems",
    "change": 0.61,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 306.2799987792969,
    "referenceClose": 304.4100036621094,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "FLEX",
    "quoteSymbol": "FLEX",
    "name": "Flex",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing and cloud hardware",
    "change": 2.76,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 119.83000183105469,
    "referenceClose": 116.61000061035156,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "2345.TW",
    "quoteSymbol": "2345.TW",
    "name": "智邦",
    "market": "TW",
    "segment": "system",
    "sub": "Switch ODM",
    "role": "White-box switch and cloud networking ODM",
    "change": 8.95,
    "tags": [
      "switch",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 2070.0,
    "referenceClose": 1900.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "2382.TW",
    "quoteSymbol": "2382.TW",
    "name": "廣達",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and cloud infrastructure ODM",
    "change": -2.54,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 325.5,
    "referenceClose": 334.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "6669.TW",
    "quoteSymbol": "6669.TW",
    "name": "緯穎",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "Cloud datacenter server ODM",
    "change": 6.16,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 2240.0,
    "referenceClose": 2110.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "2317.TW",
    "quoteSymbol": "2317.TW",
    "name": "鴻海",
    "market": "TW",
    "segment": "system",
    "sub": "EMS / server",
    "role": "AI server and system assembly",
    "change": -1.97,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 249.0,
    "referenceClose": 254.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "2308.TW",
    "quoteSymbol": "2308.TW",
    "name": "台達電",
    "market": "TW",
    "segment": "system",
    "sub": "Power / thermal",
    "role": "Power, thermal and datacenter infrastructure",
    "change": 3.15,
    "tags": [
      "power",
      "thermal"
    ],
    "priceStatus": "ok",
    "latestClose": 1965.0,
    "referenceClose": 1905.0,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "3706.TW",
    "quoteSymbol": "3706.TW",
    "name": "神達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and datacenter system integration",
    "change": -1.83,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 80.5999984741211,
    "referenceClose": 82.0999984741211,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "3231.TW",
    "quoteSymbol": "3231.TW",
    "name": "緯創",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and system integration",
    "change": -1.05,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 188.5,
    "referenceClose": 190.5,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "2356.TW",
    "quoteSymbol": "2356.TW",
    "name": "英業達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and cloud equipment manufacturing",
    "change": -3.69,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 57.5,
    "referenceClose": 59.70000076293945,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "3380.TW",
    "quoteSymbol": "3380.TW",
    "name": "明泰",
    "market": "TW",
    "segment": "system",
    "sub": "Networking",
    "role": "Networking products and broadband equipment",
    "change": -3.19,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 30.299999237060547,
    "referenceClose": 31.299999237060547,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "6285.TW",
    "quoteSymbol": "6285.TW",
    "name": "啟碁",
    "market": "TW",
    "segment": "system",
    "sub": "Network device",
    "role": "Wireless and networking equipment",
    "change": 8.92,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 256.5,
    "referenceClose": 235.5,
    "priceDate": "2026-10-08",
    "referenceDate": "2026-10-01"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "system",
    "sub": "Optical systems",
    "role": "Optical communication and laser systems",
    "change": -6.81,
    "tags": [
      "system"
    ],
    "priceStatus": "ok",
    "latestClose": 85.97000122070312,
    "referenceClose": 92.25,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-09-30"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "system",
    "sub": "Optical network",
    "role": "Optical transmission and network equipment",
    "change": -5.74,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 33.650001525878906,
    "referenceClose": 35.70000076293945,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-09-30"
  },
  {
    "ticker": "000063.SZ",
    "quoteSymbol": "000063.SZ",
    "name": "中興通訊",
    "market": "CN",
    "segment": "system",
    "sub": "Telecom equipment",
    "role": "Telecom and datacenter network equipment",
    "change": -5.07,
    "tags": [
      "telecom"
    ],
    "priceStatus": "ok",
    "latestClose": 29.030000686645508,
    "referenceClose": 30.579999923706055,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-09-30"
  },
  {
    "ticker": "6701.T",
    "quoteSymbol": "6701.T",
    "name": "NEC",
    "market": "JP",
    "segment": "system",
    "sub": "Network systems",
    "role": "Telecom, submarine and network systems",
    "change": 6.51,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 5233.0,
    "referenceClose": 4913.0,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  },
  {
    "ticker": "6702.T",
    "quoteSymbol": "6702.T",
    "name": "Fujitsu",
    "market": "JP",
    "segment": "system",
    "sub": "ICT systems",
    "role": "ICT infrastructure and network systems",
    "change": 4.45,
    "tags": [
      "ICT"
    ],
    "priceStatus": "ok",
    "latestClose": 4250.0,
    "referenceClose": 4069.0,
    "priceDate": "2026-10-09",
    "referenceDate": "2026-10-02"
  }
];

