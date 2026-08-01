window.HEATMAP_META = {
  "title": "光通訊 / CPO 供應鏈熱力圖",
  "subtitle": "六大環節、跨市場上市公司、同公司可重複出現在多個供應鏈位置。",
  "lastUpdated": "2026-08-01",
  "dateRange": "2026-07-24 → 2026-07-31",
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
    "change": 27.95
  },
  "topLoser": {
    "ticker": "6451.TW",
    "name": "訊芯-KY",
    "change": -22.06
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
    "change": 1.93,
    "tags": [
      "ASIC",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 389.2799987792969,
    "referenceClose": 381.9200134277344,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "asic",
    "sub": "GPU / Network ASIC",
    "role": "GPU, NVLink, Spectrum-X ecosystem",
    "change": -2.94,
    "tags": [
      "GPU",
      "networking"
    ],
    "priceStatus": "ok",
    "latestClose": 200.75,
    "referenceClose": 206.83999633789062,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "asic",
    "sub": "DSP / PAM4",
    "role": "Optical DSP, custom silicon, DCI chips",
    "change": -3.43,
    "tags": [
      "DSP",
      "custom silicon"
    ],
    "priceStatus": "ok",
    "latestClose": 187.55999755859375,
    "referenceClose": 194.22999572753906,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "CRDO",
    "quoteSymbol": "CRDO",
    "name": "Credo",
    "market": "US",
    "segment": "asic",
    "sub": "Retimer / DSP",
    "role": "High-speed connectivity and optical DSP",
    "change": -2.89,
    "tags": [
      "DSP",
      "retimer"
    ],
    "priceStatus": "ok",
    "latestClose": 206.99000549316406,
    "referenceClose": 213.14999389648438,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "ALAB",
    "quoteSymbol": "ALAB",
    "name": "Astera Labs",
    "market": "US",
    "segment": "asic",
    "sub": "PCIe / CXL",
    "role": "AI data-center connectivity silicon",
    "change": 6.74,
    "tags": [
      "retimer",
      "CXL"
    ],
    "priceStatus": "ok",
    "latestClose": 311.2300109863281,
    "referenceClose": 291.5799865722656,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Laser drivers, TIAs, high-speed analog",
    "change": -5.82,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 251.44000244140625,
    "referenceClose": 266.989990234375,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "SMTC",
    "quoteSymbol": "SMTC",
    "name": "Semtech",
    "market": "US",
    "segment": "asic",
    "sub": "Signal IC",
    "role": "Signal integrity and optical analog ICs",
    "change": -6.43,
    "tags": [
      "signal"
    ],
    "priceStatus": "ok",
    "latestClose": 117.81999969482422,
    "referenceClose": 125.91999816894531,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "asic",
    "sub": "Network silicon",
    "role": "Silicon One and Acacia optical stack",
    "change": 1.59,
    "tags": [
      "switch",
      "acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 115.98999786376953,
    "referenceClose": 114.16999816894531,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "asic",
    "sub": "Coherent DSP",
    "role": "WaveLogic coherent DSP and systems",
    "change": -3.56,
    "tags": [
      "coherent",
      "DSP"
    ],
    "priceStatus": "ok",
    "latestClose": 377.04998779296875,
    "referenceClose": 390.9599914550781,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "AMD",
    "quoteSymbol": "AMD",
    "name": "AMD",
    "market": "US",
    "segment": "asic",
    "sub": "AI accelerator",
    "role": "AI accelerators and adaptive compute",
    "change": -8.77,
    "tags": [
      "accelerator"
    ],
    "priceStatus": "ok",
    "latestClose": 476.1499938964844,
    "referenceClose": 521.9500122070312,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "asic",
    "sub": "Foundry / I/O",
    "role": "Foundry, Ethernet, historical silicon photonics",
    "change": -2.3,
    "tags": [
      "foundry",
      "ethernet"
    ],
    "priceStatus": "ok",
    "latestClose": 90.19999694824219,
    "referenceClose": 92.31999969482422,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "QCOM",
    "quoteSymbol": "QCOM",
    "name": "Qualcomm",
    "market": "US",
    "segment": "asic",
    "sub": "Connectivity IC",
    "role": "High-speed connectivity and edge AI silicon",
    "change": -11.59,
    "tags": [
      "connectivity"
    ],
    "priceStatus": "ok",
    "latestClose": 147.61000061035156,
    "referenceClose": 166.97000122070312,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "3661.TW",
    "quoteSymbol": "3661.TW",
    "name": "世芯-KY",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "Advanced-node custom ASIC design service",
    "change": -10.13,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 3060.0,
    "referenceClose": 3405.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "3443.TW",
    "quoteSymbol": "3443.TW",
    "name": "創意",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "GUC ASIC design and implementation",
    "change": -6.51,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 3805.0,
    "referenceClose": 4070.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "2454.TW",
    "quoteSymbol": "2454.TW",
    "name": "聯發科",
    "market": "TW",
    "segment": "asic",
    "sub": "Connectivity SoC",
    "role": "Networking, SerDes and edge AI chip exposure",
    "change": -5.2,
    "tags": [
      "SoC"
    ],
    "priceStatus": "ok",
    "latestClose": 3555.0,
    "referenceClose": 3750.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "5274.TWO",
    "quoteSymbol": "5274.TWO",
    "name": "信驊",
    "market": "TW",
    "segment": "asic",
    "sub": "BMC",
    "role": "Server management silicon",
    "change": -1.39,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 14525.0,
    "referenceClose": 14730.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "688536.SH",
    "quoteSymbol": "688536.SS",
    "name": "思瑞浦",
    "market": "CN",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Analog and signal-chain ICs",
    "change": -8.72,
    "tags": [
      "analog"
    ],
    "priceStatus": "ok",
    "latestClose": 223.0,
    "referenceClose": 244.3000030517578,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "asic",
    "sub": "Laser driver link",
    "role": "Optical chip supplier with upstream exposure",
    "change": -21.43,
    "tags": [
      "optical chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1092.0999755859375,
    "referenceClose": 1390.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "2330.TW",
    "quoteSymbol": "2330.TW",
    "name": "台積電",
    "market": "TW",
    "segment": "sipic",
    "sub": "Foundry",
    "role": "Advanced-node and packaging platform for CPO ecosystem",
    "change": 3.19,
    "tags": [
      "foundry",
      "CoWoS"
    ],
    "priceStatus": "ok",
    "latestClose": 2425.0,
    "referenceClose": 2350.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "AVGO",
    "quoteSymbol": "AVGO",
    "name": "Broadcom",
    "market": "US",
    "segment": "sipic",
    "sub": "Co-packaged optics",
    "role": "CPO roadmap and switch silicon integration",
    "change": 1.93,
    "tags": [
      "CPO",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 389.2799987792969,
    "referenceClose": 381.9200134277344,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical I/O ecosystem",
    "role": "AI cluster architecture drives optical I/O demand",
    "change": -2.94,
    "tags": [
      "AI",
      "optical I/O"
    ],
    "priceStatus": "ok",
    "latestClose": 200.75,
    "referenceClose": 206.83999633789062,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical platform",
    "role": "DSP plus silicon photonics partnership ecosystem",
    "change": -3.43,
    "tags": [
      "DSP",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 187.55999755859375,
    "referenceClose": 194.22999572753906,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "sipic",
    "sub": "Silicon photonics",
    "role": "Integrated silicon photonics and foundry capabilities",
    "change": -2.3,
    "tags": [
      "SiPh",
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 90.19999694824219,
    "referenceClose": 92.31999969482422,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Lasers, transceivers and optical engine building blocks",
    "change": -6.91,
    "tags": [
      "laser",
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 262.8900146484375,
    "referenceClose": 282.3900146484375,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Datacom lasers and optical components",
    "change": -6.43,
    "tags": [
      "laser",
      "datacom"
    ],
    "priceStatus": "ok",
    "latestClose": 713.9400024414062,
    "referenceClose": 762.989990234375,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "STM",
    "quoteSymbol": "STM",
    "name": "STMicro",
    "market": "EU",
    "segment": "sipic",
    "sub": "Photonics platform",
    "role": "Photonics and advanced semiconductor platform exposure",
    "change": 1.65,
    "tags": [
      "photonics"
    ],
    "priceStatus": "ok",
    "latestClose": 52.38999938964844,
    "referenceClose": 51.540000915527344,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "GFS",
    "quoteSymbol": "GFS",
    "name": "GlobalFoundries",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Silicon photonics and specialty process platform",
    "change": -6.61,
    "tags": [
      "foundry",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 49.9900016784668,
    "referenceClose": 53.529998779296875,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "TSEM",
    "quoteSymbol": "TSEM",
    "name": "Tower Semiconductor",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Analog, photonics and specialty manufacturing",
    "change": -5.87,
    "tags": [
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 219.6699981689453,
    "referenceClose": 233.3699951171875,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "sipic",
    "sub": "Optical systems",
    "role": "Photonic service engines and coherent optics",
    "change": 0.44,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 9.140000343322754,
    "referenceClose": 9.100000381469727,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "sipic",
    "sub": "Acacia optics",
    "role": "Coherent modules and optical interconnect roadmap",
    "change": 1.59,
    "tags": [
      "Acacia",
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 115.98999786376953,
    "referenceClose": 114.16999816894531,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "sipic",
    "sub": "Coherent optics",
    "role": "Coherent optical engine and network platforms",
    "change": -3.56,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 377.04998779296875,
    "referenceClose": 390.9599914550781,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "POET",
    "quoteSymbol": "POET",
    "name": "POET Technologies",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical interposer",
    "role": "Optical interposer platform for transceivers",
    "change": 1.45,
    "tags": [
      "interposer"
    ],
    "priceStatus": "ok",
    "latestClose": 6.989999771118164,
    "referenceClose": 6.889999866485596,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "LWLG",
    "quoteSymbol": "LWLG",
    "name": "Lightwave Logic",
    "market": "US",
    "segment": "sipic",
    "sub": "EO polymer",
    "role": "Electro-optic polymer material platform",
    "change": 6.78,
    "tags": [
      "material"
    ],
    "priceStatus": "ok",
    "latestClose": 6.460000038146973,
    "referenceClose": 6.050000190734863,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "4966.TWO",
    "quoteSymbol": "4966.TWO",
    "name": "譜瑞-KY",
    "market": "TW",
    "segment": "sipic",
    "sub": "High-speed interface",
    "role": "High-speed interface ICs and data transmission",
    "change": -8.02,
    "tags": [
      "interface"
    ],
    "priceStatus": "ok",
    "latestClose": 562.0,
    "referenceClose": 611.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "6789.TW",
    "quoteSymbol": "6789.TW",
    "name": "采鈺",
    "market": "TW",
    "segment": "sipic",
    "sub": "Optical process",
    "role": "Optical semiconductor process and sensor platform",
    "change": -9.89,
    "tags": [
      "process"
    ],
    "priceStatus": "ok",
    "latestClose": 423.5,
    "referenceClose": 470.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "688313.SH",
    "quoteSymbol": "688313.SS",
    "name": "仕佳光子",
    "market": "CN",
    "segment": "sipic",
    "sub": "PLC / optical chip",
    "role": "PLC splitter, AWG and optical chip supplier",
    "change": -19.3,
    "tags": [
      "PLC",
      "chip"
    ],
    "priceStatus": "ok",
    "latestClose": 90.04000091552734,
    "referenceClose": 111.58000183105469,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "laser",
    "sub": "Laser / InP",
    "role": "InP lasers, VCSELs, coherent and datacom components",
    "change": -6.91,
    "tags": [
      "InP",
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 262.8900146484375,
    "referenceClose": 282.3900146484375,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "laser",
    "sub": "Datacom laser",
    "role": "EML, DFB and high-speed datacom laser supply",
    "change": -6.43,
    "tags": [
      "EML",
      "DFB"
    ],
    "priceStatus": "ok",
    "latestClose": 713.9400024414062,
    "referenceClose": 762.989990234375,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "laser",
    "sub": "Laser driver / TIA",
    "role": "Laser drivers, TIAs and analog front-end",
    "change": -5.82,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 251.44000244140625,
    "referenceClose": 266.989990234375,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "IPGP",
    "quoteSymbol": "IPGP",
    "name": "IPG Photonics",
    "market": "US",
    "segment": "laser",
    "sub": "Fiber laser",
    "role": "Laser technology and optical components",
    "change": -7.24,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 85.05999755859375,
    "referenceClose": 91.69999694824219,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "AXTI",
    "quoteSymbol": "AXTI",
    "name": "AXT",
    "market": "US",
    "segment": "laser",
    "sub": "Substrate",
    "role": "Compound semiconductor substrates",
    "change": 27.95,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 60.43000030517578,
    "referenceClose": 47.22999954223633,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "IQE.L",
    "quoteSymbol": "IQE.L",
    "name": "IQE",
    "market": "EU",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "Compound semiconductor epitaxy wafers",
    "change": -19.96,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 39.099998474121094,
    "referenceClose": 48.849998474121094,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Compound semiconductor and optical components",
    "change": -11.54,
    "tags": [
      "InP",
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 2184.0,
    "referenceClose": 2469.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "6503.T",
    "quoteSymbol": "6503.T",
    "name": "三菱電機",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Optical devices, lasers and industrial electronics",
    "change": 4.64,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 5912.0,
    "referenceClose": 5650.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "6965.T",
    "quoteSymbol": "6965.T",
    "name": "浜松光子",
    "market": "JP",
    "segment": "laser",
    "sub": "Photonics",
    "role": "Photodetectors, optoelectronics and photonics devices",
    "change": -1.57,
    "tags": [
      "detector"
    ],
    "priceStatus": "ok",
    "latestClose": 2323.0,
    "referenceClose": 2360.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "AMS.SW",
    "quoteSymbol": "AMS.SW",
    "name": "ams OSRAM",
    "market": "EU",
    "segment": "laser",
    "sub": "Emitter",
    "role": "Emitters, sensors and photonics devices",
    "change": -4.2,
    "tags": [
      "emitter"
    ],
    "priceStatus": "ok",
    "latestClose": 15.949999809265137,
    "referenceClose": 16.649999618530273,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "3105.TWO",
    "quoteSymbol": "3105.TWO",
    "name": "穩懋",
    "market": "TW",
    "segment": "laser",
    "sub": "GaAs foundry",
    "role": "GaAs foundry with photonics-adjacent capabilities",
    "change": -13.76,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 294.5,
    "referenceClose": 341.5,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "3081.TWO",
    "quoteSymbol": "3081.TWO",
    "name": "聯亞",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "III-V epitaxy wafers for optical communications",
    "change": -7.39,
    "tags": [
      "epi",
      "III-V"
    ],
    "priceStatus": "ok",
    "latestClose": 1630.0,
    "referenceClose": 1760.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "2455.TW",
    "quoteSymbol": "2455.TW",
    "name": "全新",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "GaAs/InP epitaxy and compound semiconductor materials",
    "change": -12.31,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 292.0,
    "referenceClose": 333.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "8086.TWO",
    "quoteSymbol": "8086.TWO",
    "name": "宏捷科",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "GaAs foundry and compound semiconductor devices",
    "change": -7.17,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 110.0,
    "referenceClose": 118.5,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "4991.TWO",
    "quoteSymbol": "4991.TWO",
    "name": "環宇-KY",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "Compound semiconductor and optical device exposure",
    "change": -15.35,
    "tags": [
      "compound"
    ],
    "priceStatus": "ok",
    "latestClose": 353.0,
    "referenceClose": 417.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "laser",
    "sub": "Optical component",
    "role": "Optical communication components and modules",
    "change": -13.25,
    "tags": [
      "optical"
    ],
    "priceStatus": "ok",
    "latestClose": 370.0,
    "referenceClose": 426.5,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser chip",
    "role": "Optical communication laser chips",
    "change": -21.43,
    "tags": [
      "laser chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1092.0999755859375,
    "referenceClose": 1390.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser / module",
    "role": "Laser equipment and optical communication products",
    "change": -11.85,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 95.37000274658203,
    "referenceClose": 108.19000244140625,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "APH",
    "quoteSymbol": "APH",
    "name": "Amphenol",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "High-speed interconnect and optical connector ecosystem",
    "change": 5.26,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 160.6999969482422,
    "referenceClose": 152.6699981689453,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "GLW",
    "quoteSymbol": "GLW",
    "name": "Corning",
    "market": "US",
    "segment": "component",
    "sub": "Fiber / glass",
    "role": "Optical fiber, glass and datacenter cabling",
    "change": -5.73,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 138.25,
    "referenceClose": 146.64999389648438,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "TEL",
    "quoteSymbol": "TEL",
    "name": "TE Connectivity",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "Connectors, cable assemblies and sensors",
    "change": 1.36,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 205.69000244140625,
    "referenceClose": 202.94000244140625,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers, modulators and optical subassemblies",
    "change": -6.91,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 262.8900146484375,
    "referenceClose": 282.3900146484375,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers and optical communication components",
    "change": -6.43,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 713.9400024414062,
    "referenceClose": 762.989990234375,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "component",
    "sub": "Manufacturing",
    "role": "Precision optical manufacturing and assembly",
    "change": -8.54,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 435.4100036621094,
    "referenceClose": 476.0400085449219,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "3711.TW",
    "quoteSymbol": "3711.TW",
    "name": "日月光投控",
    "market": "TW",
    "segment": "component",
    "sub": "Advanced packaging",
    "role": "Semiconductor packaging and system-in-package",
    "change": -9.46,
    "tags": [
      "packaging"
    ],
    "priceStatus": "ok",
    "latestClose": 555.0,
    "referenceClose": 613.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "2449.TW",
    "quoteSymbol": "2449.TW",
    "name": "京元電",
    "market": "TW",
    "segment": "component",
    "sub": "Test",
    "role": "IC testing services for high-speed chips",
    "change": -13.4,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 223.5,
    "referenceClose": 258.0952453613281,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "6515.TW",
    "quoteSymbol": "6515.TW",
    "name": "穎崴",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card / socket",
    "role": "High-speed test interface and sockets",
    "change": -7.63,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 5815.0,
    "referenceClose": 6295.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "6223.TWO",
    "quoteSymbol": "6223.TWO",
    "name": "旺矽",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card",
    "role": "Probe cards and testing interface",
    "change": -7.45,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 5280.0,
    "referenceClose": 5705.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "3037.TW",
    "quoteSymbol": "3037.TW",
    "name": "欣興",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and advanced PCB",
    "change": -6.2,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 787.0,
    "referenceClose": 839.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "3189.TW",
    "quoteSymbol": "3189.TW",
    "name": "景碩",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate supplier",
    "change": -10.69,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 635.0,
    "referenceClose": 711.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "8046.TW",
    "quoteSymbol": "8046.TW",
    "name": "南電",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and PCB",
    "change": -17.12,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 920.0,
    "referenceClose": 1110.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "2383.TW",
    "quoteSymbol": "2383.TW",
    "name": "台光電",
    "market": "TW",
    "segment": "component",
    "sub": "Copper clad laminate",
    "role": "High-speed CCL for AI servers and switches",
    "change": -0.21,
    "tags": [
      "CCL"
    ],
    "priceStatus": "ok",
    "latestClose": 4745.0,
    "referenceClose": 4755.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "component",
    "sub": "Connector / RF",
    "role": "Connectors and optical communication components",
    "change": -12.83,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 1155.0,
    "referenceClose": 1325.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "3363.TWO",
    "quoteSymbol": "3363.TWO",
    "name": "上詮",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber optic components and passive devices",
    "change": -17.44,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 480.5,
    "referenceClose": 582.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "component",
    "sub": "Optical subassembly",
    "role": "Optical communication subassemblies and packaging",
    "change": -12.88,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 372.0,
    "referenceClose": 427.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "6451.TW",
    "quoteSymbol": "6451.TW",
    "name": "訊芯-KY",
    "market": "TW",
    "segment": "component",
    "sub": "SiP / optical packaging",
    "role": "System-in-package and optical communication assembly",
    "change": -22.06,
    "tags": [
      "SiP"
    ],
    "priceStatus": "ok",
    "latestClose": 341.0,
    "referenceClose": 437.5,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber arrays, splitters and optical passive components",
    "change": -9.33,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 544.0,
    "referenceClose": 600.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical communication component supplier",
    "change": -6.76,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 67.5999984741211,
    "referenceClose": 72.5,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive components and precision parts",
    "change": -15.93,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 171.00999450683594,
    "referenceClose": 203.41000366210938,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "300548.SZ",
    "quoteSymbol": "300548.SZ",
    "name": "博創科技",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive and active components",
    "change": -13.81,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 140.5,
    "referenceClose": 163.00999450683594,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "601869.SH",
    "quoteSymbol": "601869.SS",
    "name": "長飛光纖",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber",
    "role": "Optical fiber and cable",
    "change": -18.14,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 271.5,
    "referenceClose": 331.6499938964844,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "600487.SH",
    "quoteSymbol": "600487.SS",
    "name": "亨通光電",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber cable and optical network products",
    "change": -9.19,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 47.61000061035156,
    "referenceClose": 52.43000030517578,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "5801.T",
    "quoteSymbol": "5801.T",
    "name": "古河電工",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Optical fiber, cable and network materials",
    "change": -7.17,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 3145.0,
    "referenceClose": 3388.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "5803.T",
    "quoteSymbol": "5803.T",
    "name": "藤倉",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber, cable and optical interconnect products",
    "change": -9.17,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 4172.0,
    "referenceClose": 4593.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "4062.T",
    "quoteSymbol": "4062.T",
    "name": "Ibiden",
    "market": "JP",
    "segment": "component",
    "sub": "Substrate",
    "role": "Advanced IC substrates",
    "change": -4.15,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 16650.0,
    "referenceClose": 17370.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom and telecom optical transceivers",
    "change": -6.91,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 262.8900146484375,
    "referenceClose": 282.3900146484375,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "module",
    "sub": "Laser / module",
    "role": "Laser engines and optical module supply",
    "change": -6.43,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 713.9400024414062,
    "referenceClose": 762.989990234375,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "module",
    "sub": "Optical manufacturing",
    "role": "Optical module contract manufacturing",
    "change": -8.54,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 435.4100036621094,
    "referenceClose": 476.0400085449219,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "module",
    "sub": "Coherent module",
    "role": "Coherent optical modules and transport platforms",
    "change": -3.56,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 377.04998779296875,
    "referenceClose": 390.9599914550781,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "module",
    "sub": "Acacia module",
    "role": "Acacia coherent optics and pluggable modules",
    "change": 1.59,
    "tags": [
      "Acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 115.98999786376953,
    "referenceClose": 114.16999816894531,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "module",
    "sub": "Optical module",
    "role": "Coherent optics and network system modules",
    "change": 0.44,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 9.140000343322754,
    "referenceClose": 9.100000381469727,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical communication modules and components",
    "change": -13.25,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 370.0,
    "referenceClose": 426.5,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "4977.TW",
    "quoteSymbol": "4977.TW",
    "name": "眾達-KY",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical transceiver supplier",
    "change": -15.83,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 117.0,
    "referenceClose": 139.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver component",
    "role": "Optical communication and connector products",
    "change": -12.83,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1155.0,
    "referenceClose": 1325.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "module",
    "sub": "OSA",
    "role": "Optical subassemblies for transceivers",
    "change": -12.88,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 372.0,
    "referenceClose": 427.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "module",
    "sub": "Passive optical",
    "role": "Fiber components used in modules",
    "change": -9.33,
    "tags": [
      "passive"
    ],
    "priceStatus": "ok",
    "latestClose": 544.0,
    "referenceClose": 600.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module exposure",
    "change": -6.76,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 67.5999984741211,
    "referenceClose": 72.5,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "4908.TWO",
    "quoteSymbol": "4908.TWO",
    "name": "前鼎",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module and equipment",
    "change": -6.05,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 132.0,
    "referenceClose": 140.5,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "300308.SZ",
    "quoteSymbol": "300308.SZ",
    "name": "中際旭創",
    "market": "CN",
    "segment": "module",
    "sub": "800G / 1.6T",
    "role": "High-speed optical transceiver leader",
    "change": -13.81,
    "tags": [
      "800G",
      "1.6T"
    ],
    "priceStatus": "ok",
    "latestClose": 902.010009765625,
    "referenceClose": 1046.510009765625,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "300502.SZ",
    "quoteSymbol": "300502.SZ",
    "name": "新易盛",
    "market": "CN",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom optical transceivers",
    "change": -16.81,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 396.010009765625,
    "referenceClose": 476.0199890136719,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "002281.SZ",
    "quoteSymbol": "002281.SZ",
    "name": "光迅科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical devices and modules",
    "change": -13.46,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 161.64999389648438,
    "referenceClose": 186.8000030517578,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "603083.SH",
    "quoteSymbol": "603083.SS",
    "name": "劍橋科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical modules and broadband equipment",
    "change": -21.91,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 130.25,
    "referenceClose": 166.8000030517578,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical engine parts",
    "role": "High-speed module precision components",
    "change": -15.93,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 171.00999450683594,
    "referenceClose": 203.41000366210938,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "688205.SH",
    "quoteSymbol": "688205.SS",
    "name": "德科立",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical transceiver modules",
    "change": -10.1,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 115.61000061035156,
    "referenceClose": 128.60000610351562,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication and laser products",
    "change": -11.85,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 95.37000274658203,
    "referenceClose": 108.19000244140625,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical network",
    "role": "Optical network systems and modules",
    "change": -8.99,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 33.09000015258789,
    "referenceClose": 36.36000061035156,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "module",
    "sub": "Optical device",
    "role": "Optical components and communication devices",
    "change": -11.54,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 2184.0,
    "referenceClose": 2469.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "ANET",
    "quoteSymbol": "ANET",
    "name": "Arista Networks",
    "market": "US",
    "segment": "system",
    "sub": "AI switch",
    "role": "AI datacenter Ethernet switches",
    "change": 3.66,
    "tags": [
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 180.35000610351562,
    "referenceClose": 173.99000549316406,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "system",
    "sub": "Switch / router",
    "role": "Enterprise and cloud networking systems",
    "change": 1.59,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 115.98999786376953,
    "referenceClose": 114.16999816894531,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "HPE",
    "quoteSymbol": "HPE",
    "name": "HPE",
    "market": "US",
    "segment": "system",
    "sub": "Server / networking",
    "role": "AI servers, networking and cloud infrastructure",
    "change": 0.44,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 47.900001525878906,
    "referenceClose": 47.689998626708984,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "DELL",
    "quoteSymbol": "DELL",
    "name": "Dell",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and enterprise infrastructure",
    "change": -7.34,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 405.3699951171875,
    "referenceClose": 437.5,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "SMCI",
    "quoteSymbol": "SMCI",
    "name": "Supermicro",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server platforms and rack-scale systems",
    "change": -5.65,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 28.399999618530273,
    "referenceClose": 30.100000381469727,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "CLS",
    "quoteSymbol": "CLS",
    "name": "Celestica",
    "market": "US",
    "segment": "system",
    "sub": "ODM / EMS",
    "role": "Cloud hardware and networking manufacturing",
    "change": 8.57,
    "tags": [
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 331.44000244140625,
    "referenceClose": 305.2799987792969,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "JBL",
    "quoteSymbol": "JBL",
    "name": "Jabil",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing for networking systems",
    "change": 0.79,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 315.04998779296875,
    "referenceClose": 312.5899963378906,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "FLEX",
    "quoteSymbol": "FLEX",
    "name": "Flex",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing and cloud hardware",
    "change": -4.02,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 113.75,
    "referenceClose": 118.51000213623047,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "2345.TW",
    "quoteSymbol": "2345.TW",
    "name": "智邦",
    "market": "TW",
    "segment": "system",
    "sub": "Switch ODM",
    "role": "White-box switch and cloud networking ODM",
    "change": -4.28,
    "tags": [
      "switch",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 2125.0,
    "referenceClose": 2220.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "2382.TW",
    "quoteSymbol": "2382.TW",
    "name": "廣達",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and cloud infrastructure ODM",
    "change": -11.13,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 291.5,
    "referenceClose": 328.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "6669.TW",
    "quoteSymbol": "6669.TW",
    "name": "緯穎",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "Cloud datacenter server ODM",
    "change": -5.93,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 5390.0,
    "referenceClose": 5730.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "2317.TW",
    "quoteSymbol": "2317.TW",
    "name": "鴻海",
    "market": "TW",
    "segment": "system",
    "sub": "EMS / server",
    "role": "AI server and system assembly",
    "change": -0.79,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 250.5,
    "referenceClose": 252.5,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "2308.TW",
    "quoteSymbol": "2308.TW",
    "name": "台達電",
    "market": "TW",
    "segment": "system",
    "sub": "Power / thermal",
    "role": "Power, thermal and datacenter infrastructure",
    "change": -8.12,
    "tags": [
      "power",
      "thermal"
    ],
    "priceStatus": "ok",
    "latestClose": 1640.0,
    "referenceClose": 1785.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "3706.TW",
    "quoteSymbol": "3706.TW",
    "name": "神達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and datacenter system integration",
    "change": -4.27,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 87.4000015258789,
    "referenceClose": 91.30000305175781,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "3231.TW",
    "quoteSymbol": "3231.TW",
    "name": "緯創",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and system integration",
    "change": -1.68,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 176.0,
    "referenceClose": 179.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "2356.TW",
    "quoteSymbol": "2356.TW",
    "name": "英業達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and cloud equipment manufacturing",
    "change": -4.19,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 61.79999923706055,
    "referenceClose": 64.5,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "3380.TW",
    "quoteSymbol": "3380.TW",
    "name": "明泰",
    "market": "TW",
    "segment": "system",
    "sub": "Networking",
    "role": "Networking products and broadband equipment",
    "change": -7.89,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 27.450000762939453,
    "referenceClose": 29.799999237060547,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "6285.TW",
    "quoteSymbol": "6285.TW",
    "name": "啟碁",
    "market": "TW",
    "segment": "system",
    "sub": "Network device",
    "role": "Wireless and networking equipment",
    "change": -11.02,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 222.0,
    "referenceClose": 249.5,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "system",
    "sub": "Optical systems",
    "role": "Optical communication and laser systems",
    "change": -11.85,
    "tags": [
      "system"
    ],
    "priceStatus": "ok",
    "latestClose": 95.37000274658203,
    "referenceClose": 108.19000244140625,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "system",
    "sub": "Optical network",
    "role": "Optical transmission and network equipment",
    "change": -8.99,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 33.09000015258789,
    "referenceClose": 36.36000061035156,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "000063.SZ",
    "quoteSymbol": "000063.SZ",
    "name": "中興通訊",
    "market": "CN",
    "segment": "system",
    "sub": "Telecom equipment",
    "role": "Telecom and datacenter network equipment",
    "change": -3.4,
    "tags": [
      "telecom"
    ],
    "priceStatus": "ok",
    "latestClose": 33.810001373291016,
    "referenceClose": 35.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "6701.T",
    "quoteSymbol": "6701.T",
    "name": "NEC",
    "market": "JP",
    "segment": "system",
    "sub": "Network systems",
    "role": "Telecom, submarine and network systems",
    "change": 11.56,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 4740.0,
    "referenceClose": 4249.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  },
  {
    "ticker": "6702.T",
    "quoteSymbol": "6702.T",
    "name": "Fujitsu",
    "market": "JP",
    "segment": "system",
    "sub": "ICT systems",
    "role": "ICT infrastructure and network systems",
    "change": 11.59,
    "tags": [
      "ICT"
    ],
    "priceStatus": "ok",
    "latestClose": 3659.0,
    "referenceClose": 3279.0,
    "priceDate": "2026-07-31",
    "referenceDate": "2026-07-24"
  }
];

