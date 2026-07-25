window.HEATMAP_META = {
  "title": "光通訊 / CPO 供應鏈熱力圖",
  "subtitle": "六大環節、跨市場上市公司、同公司可重複出現在多個供應鏈位置。",
  "lastUpdated": "2026-07-25",
  "dateRange": "2026-07-17 → 2026-07-24",
  "totalTiles": 126,
  "totalCompanies": 97,
  "quoteSymbolsUpdated": 97,
  "quoteSymbolsFailed": 0,
  "priceStatusCounts": {
    "ok": 126
  },
  "topGainer": {
    "ticker": "IQE.L",
    "name": "IQE",
    "change": 32.38
  },
  "topLoser": {
    "ticker": "STM",
    "name": "STMicro",
    "change": -16.95
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
    "change": 2.99,
    "tags": [
      "ASIC",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 381.9200134277344,
    "referenceClose": 370.8299865722656,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "asic",
    "sub": "GPU / Network ASIC",
    "role": "GPU, NVLink, Spectrum-X ecosystem",
    "change": 1.99,
    "tags": [
      "GPU",
      "networking"
    ],
    "priceStatus": "ok",
    "latestClose": 206.83999633789062,
    "referenceClose": 202.80999755859375,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "asic",
    "sub": "DSP / PAM4",
    "role": "Optical DSP, custom silicon, DCI chips",
    "change": 2.94,
    "tags": [
      "DSP",
      "custom silicon"
    ],
    "priceStatus": "ok",
    "latestClose": 194.22999572753906,
    "referenceClose": 188.67999267578125,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "CRDO",
    "quoteSymbol": "CRDO",
    "name": "Credo",
    "market": "US",
    "segment": "asic",
    "sub": "Retimer / DSP",
    "role": "High-speed connectivity and optical DSP",
    "change": 5.17,
    "tags": [
      "DSP",
      "retimer"
    ],
    "priceStatus": "ok",
    "latestClose": 213.14999389648438,
    "referenceClose": 202.67999267578125,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "ALAB",
    "quoteSymbol": "ALAB",
    "name": "Astera Labs",
    "market": "US",
    "segment": "asic",
    "sub": "PCIe / CXL",
    "role": "AI data-center connectivity silicon",
    "change": -3.97,
    "tags": [
      "retimer",
      "CXL"
    ],
    "priceStatus": "ok",
    "latestClose": 291.5799865722656,
    "referenceClose": 303.6199951171875,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Laser drivers, TIAs, high-speed analog",
    "change": -0.14,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 266.989990234375,
    "referenceClose": 267.3599853515625,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "SMTC",
    "quoteSymbol": "SMTC",
    "name": "Semtech",
    "market": "US",
    "segment": "asic",
    "sub": "Signal IC",
    "role": "Signal integrity and optical analog ICs",
    "change": 0.77,
    "tags": [
      "signal"
    ],
    "priceStatus": "ok",
    "latestClose": 125.91999816894531,
    "referenceClose": 124.95999908447266,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "asic",
    "sub": "Network silicon",
    "role": "Silicon One and Acacia optical stack",
    "change": 1.99,
    "tags": [
      "switch",
      "acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 114.16999816894531,
    "referenceClose": 111.94000244140625,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "asic",
    "sub": "Coherent DSP",
    "role": "WaveLogic coherent DSP and systems",
    "change": 4.42,
    "tags": [
      "coherent",
      "DSP"
    ],
    "priceStatus": "ok",
    "latestClose": 390.9599914550781,
    "referenceClose": 374.4100036621094,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "AMD",
    "quoteSymbol": "AMD",
    "name": "AMD",
    "market": "US",
    "segment": "asic",
    "sub": "AI accelerator",
    "role": "AI accelerators and adaptive compute",
    "change": 5.28,
    "tags": [
      "accelerator"
    ],
    "priceStatus": "ok",
    "latestClose": 521.9500122070312,
    "referenceClose": 495.760009765625,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "asic",
    "sub": "Foundry / I/O",
    "role": "Foundry, Ethernet, historical silicon photonics",
    "change": -2.86,
    "tags": [
      "foundry",
      "ethernet"
    ],
    "priceStatus": "ok",
    "latestClose": 92.31999969482422,
    "referenceClose": 95.04000091552734,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "QCOM",
    "quoteSymbol": "QCOM",
    "name": "Qualcomm",
    "market": "US",
    "segment": "asic",
    "sub": "Connectivity IC",
    "role": "High-speed connectivity and edge AI silicon",
    "change": -2.8,
    "tags": [
      "connectivity"
    ],
    "priceStatus": "ok",
    "latestClose": 166.97000122070312,
    "referenceClose": 171.77999877929688,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "3661.TW",
    "quoteSymbol": "3661.TW",
    "name": "世芯-KY",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "Advanced-node custom ASIC design service",
    "change": -2.16,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 3405.0,
    "referenceClose": 3480.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "3443.TW",
    "quoteSymbol": "3443.TW",
    "name": "創意",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "GUC ASIC design and implementation",
    "change": 6.13,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 4070.0,
    "referenceClose": 3835.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "2454.TW",
    "quoteSymbol": "2454.TW",
    "name": "聯發科",
    "market": "TW",
    "segment": "asic",
    "sub": "Connectivity SoC",
    "role": "Networking, SerDes and edge AI chip exposure",
    "change": 11.28,
    "tags": [
      "SoC"
    ],
    "priceStatus": "ok",
    "latestClose": 3750.0,
    "referenceClose": 3370.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "5274.TWO",
    "quoteSymbol": "5274.TWO",
    "name": "信驊",
    "market": "TW",
    "segment": "asic",
    "sub": "BMC",
    "role": "Server management silicon",
    "change": 13.75,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 14730.0,
    "referenceClose": 12950.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "688536.SH",
    "quoteSymbol": "688536.SS",
    "name": "思瑞浦",
    "market": "CN",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Analog and signal-chain ICs",
    "change": 0.92,
    "tags": [
      "analog"
    ],
    "priceStatus": "ok",
    "latestClose": 244.3000030517578,
    "referenceClose": 242.0800018310547,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "asic",
    "sub": "Laser driver link",
    "role": "Optical chip supplier with upstream exposure",
    "change": -16.06,
    "tags": [
      "optical chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1390.0,
    "referenceClose": 1656.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "2330.TW",
    "quoteSymbol": "2330.TW",
    "name": "台積電",
    "market": "TW",
    "segment": "sipic",
    "sub": "Foundry",
    "role": "Advanced-node and packaging platform for CPO ecosystem",
    "change": 2.62,
    "tags": [
      "foundry",
      "CoWoS"
    ],
    "priceStatus": "ok",
    "latestClose": 2350.0,
    "referenceClose": 2290.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "AVGO",
    "quoteSymbol": "AVGO",
    "name": "Broadcom",
    "market": "US",
    "segment": "sipic",
    "sub": "Co-packaged optics",
    "role": "CPO roadmap and switch silicon integration",
    "change": 2.99,
    "tags": [
      "CPO",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 381.9200134277344,
    "referenceClose": 370.8299865722656,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical I/O ecosystem",
    "role": "AI cluster architecture drives optical I/O demand",
    "change": 1.99,
    "tags": [
      "AI",
      "optical I/O"
    ],
    "priceStatus": "ok",
    "latestClose": 206.83999633789062,
    "referenceClose": 202.80999755859375,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical platform",
    "role": "DSP plus silicon photonics partnership ecosystem",
    "change": 2.94,
    "tags": [
      "DSP",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 194.22999572753906,
    "referenceClose": 188.67999267578125,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "sipic",
    "sub": "Silicon photonics",
    "role": "Integrated silicon photonics and foundry capabilities",
    "change": -2.86,
    "tags": [
      "SiPh",
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 92.31999969482422,
    "referenceClose": 95.04000091552734,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Lasers, transceivers and optical engine building blocks",
    "change": 1.73,
    "tags": [
      "laser",
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 282.3900146484375,
    "referenceClose": 277.6000061035156,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Datacom lasers and optical components",
    "change": 4.12,
    "tags": [
      "laser",
      "datacom"
    ],
    "priceStatus": "ok",
    "latestClose": 762.989990234375,
    "referenceClose": 732.8200073242188,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "STM",
    "quoteSymbol": "STM",
    "name": "STMicro",
    "market": "EU",
    "segment": "sipic",
    "sub": "Photonics platform",
    "role": "Photonics and advanced semiconductor platform exposure",
    "change": -16.95,
    "tags": [
      "photonics"
    ],
    "priceStatus": "ok",
    "latestClose": 51.540000915527344,
    "referenceClose": 62.060001373291016,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "GFS",
    "quoteSymbol": "GFS",
    "name": "GlobalFoundries",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Silicon photonics and specialty process platform",
    "change": -6.87,
    "tags": [
      "foundry",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 53.529998779296875,
    "referenceClose": 57.47999954223633,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "TSEM",
    "quoteSymbol": "TSEM",
    "name": "Tower Semiconductor",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Analog, photonics and specialty manufacturing",
    "change": -0.31,
    "tags": [
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 233.3699951171875,
    "referenceClose": 234.10000610351562,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "sipic",
    "sub": "Optical systems",
    "role": "Photonic service engines and coherent optics",
    "change": -10.08,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 9.100000381469727,
    "referenceClose": 10.119999885559082,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "sipic",
    "sub": "Acacia optics",
    "role": "Coherent modules and optical interconnect roadmap",
    "change": 1.99,
    "tags": [
      "Acacia",
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 114.16999816894531,
    "referenceClose": 111.94000244140625,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "sipic",
    "sub": "Coherent optics",
    "role": "Coherent optical engine and network platforms",
    "change": 4.42,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 390.9599914550781,
    "referenceClose": 374.4100036621094,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "POET",
    "quoteSymbol": "POET",
    "name": "POET Technologies",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical interposer",
    "role": "Optical interposer platform for transceivers",
    "change": -6.77,
    "tags": [
      "interposer"
    ],
    "priceStatus": "ok",
    "latestClose": 6.889999866485596,
    "referenceClose": 7.389999866485596,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "LWLG",
    "quoteSymbol": "LWLG",
    "name": "Lightwave Logic",
    "market": "US",
    "segment": "sipic",
    "sub": "EO polymer",
    "role": "Electro-optic polymer material platform",
    "change": -2.89,
    "tags": [
      "material"
    ],
    "priceStatus": "ok",
    "latestClose": 6.050000190734863,
    "referenceClose": 6.230000019073486,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "4966.TWO",
    "quoteSymbol": "4966.TWO",
    "name": "譜瑞-KY",
    "market": "TW",
    "segment": "sipic",
    "sub": "High-speed interface",
    "role": "High-speed interface ICs and data transmission",
    "change": 4.44,
    "tags": [
      "interface"
    ],
    "priceStatus": "ok",
    "latestClose": 611.0,
    "referenceClose": 585.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "6789.TW",
    "quoteSymbol": "6789.TW",
    "name": "采鈺",
    "market": "TW",
    "segment": "sipic",
    "sub": "Optical process",
    "role": "Optical semiconductor process and sensor platform",
    "change": -0.74,
    "tags": [
      "process"
    ],
    "priceStatus": "ok",
    "latestClose": 470.0,
    "referenceClose": 473.5,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "688313.SH",
    "quoteSymbol": "688313.SS",
    "name": "仕佳光子",
    "market": "CN",
    "segment": "sipic",
    "sub": "PLC / optical chip",
    "role": "PLC splitter, AWG and optical chip supplier",
    "change": -5.43,
    "tags": [
      "PLC",
      "chip"
    ],
    "priceStatus": "ok",
    "latestClose": 111.58000183105469,
    "referenceClose": 117.98999786376953,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "laser",
    "sub": "Laser / InP",
    "role": "InP lasers, VCSELs, coherent and datacom components",
    "change": 1.73,
    "tags": [
      "InP",
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 282.3900146484375,
    "referenceClose": 277.6000061035156,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "laser",
    "sub": "Datacom laser",
    "role": "EML, DFB and high-speed datacom laser supply",
    "change": 4.12,
    "tags": [
      "EML",
      "DFB"
    ],
    "priceStatus": "ok",
    "latestClose": 762.989990234375,
    "referenceClose": 732.8200073242188,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "laser",
    "sub": "Laser driver / TIA",
    "role": "Laser drivers, TIAs and analog front-end",
    "change": -0.14,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 266.989990234375,
    "referenceClose": 267.3599853515625,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "IPGP",
    "quoteSymbol": "IPGP",
    "name": "IPG Photonics",
    "market": "US",
    "segment": "laser",
    "sub": "Fiber laser",
    "role": "Laser technology and optical components",
    "change": -12.11,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 91.69999694824219,
    "referenceClose": 104.33000183105469,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "AXTI",
    "quoteSymbol": "AXTI",
    "name": "AXT",
    "market": "US",
    "segment": "laser",
    "sub": "Substrate",
    "role": "Compound semiconductor substrates",
    "change": 2.99,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 47.22999954223633,
    "referenceClose": 45.86000061035156,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "IQE.L",
    "quoteSymbol": "IQE.L",
    "name": "IQE",
    "market": "EU",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "Compound semiconductor epitaxy wafers",
    "change": 32.38,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 48.849998474121094,
    "referenceClose": 36.900001525878906,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Compound semiconductor and optical components",
    "change": 9.78,
    "tags": [
      "InP",
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 2469.0,
    "referenceClose": 2249.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "6503.T",
    "quoteSymbol": "6503.T",
    "name": "三菱電機",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Optical devices, lasers and industrial electronics",
    "change": 5.21,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 5650.0,
    "referenceClose": 5370.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "6965.T",
    "quoteSymbol": "6965.T",
    "name": "浜松光子",
    "market": "JP",
    "segment": "laser",
    "sub": "Photonics",
    "role": "Photodetectors, optoelectronics and photonics devices",
    "change": 2.52,
    "tags": [
      "detector"
    ],
    "priceStatus": "ok",
    "latestClose": 2360.0,
    "referenceClose": 2302.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "AMS.SW",
    "quoteSymbol": "AMS.SW",
    "name": "ams OSRAM",
    "market": "EU",
    "segment": "laser",
    "sub": "Emitter",
    "role": "Emitters, sensors and photonics devices",
    "change": 10.41,
    "tags": [
      "emitter"
    ],
    "priceStatus": "ok",
    "latestClose": 16.649999618530273,
    "referenceClose": 15.079999923706055,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "3105.TWO",
    "quoteSymbol": "3105.TWO",
    "name": "穩懋",
    "market": "TW",
    "segment": "laser",
    "sub": "GaAs foundry",
    "role": "GaAs foundry with photonics-adjacent capabilities",
    "change": 2.71,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 341.5,
    "referenceClose": 332.5,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "3081.TWO",
    "quoteSymbol": "3081.TWO",
    "name": "聯亞",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "III-V epitaxy wafers for optical communications",
    "change": 18.92,
    "tags": [
      "epi",
      "III-V"
    ],
    "priceStatus": "ok",
    "latestClose": 1760.0,
    "referenceClose": 1480.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "2455.TW",
    "quoteSymbol": "2455.TW",
    "name": "全新",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "GaAs/InP epitaxy and compound semiconductor materials",
    "change": 18.09,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 333.0,
    "referenceClose": 282.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "8086.TWO",
    "quoteSymbol": "8086.TWO",
    "name": "宏捷科",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "GaAs foundry and compound semiconductor devices",
    "change": 0.0,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 118.5,
    "referenceClose": 118.5,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "4991.TWO",
    "quoteSymbol": "4991.TWO",
    "name": "環宇-KY",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "Compound semiconductor and optical device exposure",
    "change": 15.83,
    "tags": [
      "compound"
    ],
    "priceStatus": "ok",
    "latestClose": 417.0,
    "referenceClose": 360.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "laser",
    "sub": "Optical component",
    "role": "Optical communication components and modules",
    "change": 19.8,
    "tags": [
      "optical"
    ],
    "priceStatus": "ok",
    "latestClose": 426.5,
    "referenceClose": 356.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser chip",
    "role": "Optical communication laser chips",
    "change": -16.06,
    "tags": [
      "laser chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1390.0,
    "referenceClose": 1656.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser / module",
    "role": "Laser equipment and optical communication products",
    "change": -8.02,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 108.19000244140625,
    "referenceClose": 117.62000274658203,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "APH",
    "quoteSymbol": "APH",
    "name": "Amphenol",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "High-speed interconnect and optical connector ecosystem",
    "change": 0.97,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 152.6699981689453,
    "referenceClose": 151.1999969482422,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "GLW",
    "quoteSymbol": "GLW",
    "name": "Corning",
    "market": "US",
    "segment": "component",
    "sub": "Fiber / glass",
    "role": "Optical fiber, glass and datacenter cabling",
    "change": -5.15,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 146.64999389648438,
    "referenceClose": 154.61000061035156,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "TEL",
    "quoteSymbol": "TEL",
    "name": "TE Connectivity",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "Connectors, cable assemblies and sensors",
    "change": -0.18,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 202.94000244140625,
    "referenceClose": 203.30999755859375,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers, modulators and optical subassemblies",
    "change": 1.73,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 282.3900146484375,
    "referenceClose": 277.6000061035156,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers and optical communication components",
    "change": 4.12,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 762.989990234375,
    "referenceClose": 732.8200073242188,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "component",
    "sub": "Manufacturing",
    "role": "Precision optical manufacturing and assembly",
    "change": -0.49,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 476.0400085449219,
    "referenceClose": 478.3900146484375,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "3711.TW",
    "quoteSymbol": "3711.TW",
    "name": "日月光投控",
    "market": "TW",
    "segment": "component",
    "sub": "Advanced packaging",
    "role": "Semiconductor packaging and system-in-package",
    "change": -0.16,
    "tags": [
      "packaging"
    ],
    "priceStatus": "ok",
    "latestClose": 613.0,
    "referenceClose": 614.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "2449.TW",
    "quoteSymbol": "2449.TW",
    "name": "京元電",
    "market": "TW",
    "segment": "component",
    "sub": "Test",
    "role": "IC testing services for high-speed chips",
    "change": -5.41,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 271.0,
    "referenceClose": 286.5,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "6515.TW",
    "quoteSymbol": "6515.TW",
    "name": "穎崴",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card / socket",
    "role": "High-speed test interface and sockets",
    "change": 3.96,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 6295.0,
    "referenceClose": 6055.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "6223.TWO",
    "quoteSymbol": "6223.TWO",
    "name": "旺矽",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card",
    "role": "Probe cards and testing interface",
    "change": 1.88,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 5705.0,
    "referenceClose": 5600.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "3037.TW",
    "quoteSymbol": "3037.TW",
    "name": "欣興",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and advanced PCB",
    "change": 5.67,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 839.0,
    "referenceClose": 794.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "3189.TW",
    "quoteSymbol": "3189.TW",
    "name": "景碩",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate supplier",
    "change": 2.6,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 711.0,
    "referenceClose": 693.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "8046.TW",
    "quoteSymbol": "8046.TW",
    "name": "南電",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and PCB",
    "change": -3.48,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1110.0,
    "referenceClose": 1150.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "2383.TW",
    "quoteSymbol": "2383.TW",
    "name": "台光電",
    "market": "TW",
    "segment": "component",
    "sub": "Copper clad laminate",
    "role": "High-speed CCL for AI servers and switches",
    "change": 5.78,
    "tags": [
      "CCL"
    ],
    "priceStatus": "ok",
    "latestClose": 4755.0,
    "referenceClose": 4495.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "component",
    "sub": "Connector / RF",
    "role": "Connectors and optical communication components",
    "change": 1.92,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 1325.0,
    "referenceClose": 1300.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "3363.TWO",
    "quoteSymbol": "3363.TWO",
    "name": "上詮",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber optic components and passive devices",
    "change": 15.48,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 582.0,
    "referenceClose": 504.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "component",
    "sub": "Optical subassembly",
    "role": "Optical communication subassemblies and packaging",
    "change": -1.16,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 427.0,
    "referenceClose": 432.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "6451.TW",
    "quoteSymbol": "6451.TW",
    "name": "訊芯-KY",
    "market": "TW",
    "segment": "component",
    "sub": "SiP / optical packaging",
    "role": "System-in-package and optical communication assembly",
    "change": 1.86,
    "tags": [
      "SiP"
    ],
    "priceStatus": "ok",
    "latestClose": 437.5,
    "referenceClose": 429.5,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber arrays, splitters and optical passive components",
    "change": 8.13,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 705.0,
    "referenceClose": 652.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical communication component supplier",
    "change": 5.07,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 72.5,
    "referenceClose": 69.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive components and precision parts",
    "change": -3.77,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 203.41000366210938,
    "referenceClose": 211.3699951171875,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "300548.SZ",
    "quoteSymbol": "300548.SZ",
    "name": "博創科技",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive and active components",
    "change": -1.93,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 163.00999450683594,
    "referenceClose": 166.2100067138672,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "601869.SH",
    "quoteSymbol": "601869.SS",
    "name": "長飛光纖",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber",
    "role": "Optical fiber and cable",
    "change": -8.28,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 331.6499938964844,
    "referenceClose": 361.57000732421875,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "600487.SH",
    "quoteSymbol": "600487.SS",
    "name": "亨通光電",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber cable and optical network products",
    "change": -10.21,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 52.43000030517578,
    "referenceClose": 58.38999938964844,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "5801.T",
    "quoteSymbol": "5801.T",
    "name": "古河電工",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Optical fiber, cable and network materials",
    "change": 3.86,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 3388.0,
    "referenceClose": 3262.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "5803.T",
    "quoteSymbol": "5803.T",
    "name": "藤倉",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber, cable and optical interconnect products",
    "change": 2.71,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 4593.0,
    "referenceClose": 4472.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "4062.T",
    "quoteSymbol": "4062.T",
    "name": "Ibiden",
    "market": "JP",
    "segment": "component",
    "sub": "Substrate",
    "role": "Advanced IC substrates",
    "change": 10.74,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 17370.0,
    "referenceClose": 15685.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom and telecom optical transceivers",
    "change": 1.73,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 282.3900146484375,
    "referenceClose": 277.6000061035156,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "module",
    "sub": "Laser / module",
    "role": "Laser engines and optical module supply",
    "change": 4.12,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 762.989990234375,
    "referenceClose": 732.8200073242188,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "module",
    "sub": "Optical manufacturing",
    "role": "Optical module contract manufacturing",
    "change": -0.49,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 476.0400085449219,
    "referenceClose": 478.3900146484375,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "module",
    "sub": "Coherent module",
    "role": "Coherent optical modules and transport platforms",
    "change": 4.42,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 390.9599914550781,
    "referenceClose": 374.4100036621094,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "module",
    "sub": "Acacia module",
    "role": "Acacia coherent optics and pluggable modules",
    "change": 1.99,
    "tags": [
      "Acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 114.16999816894531,
    "referenceClose": 111.94000244140625,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "module",
    "sub": "Optical module",
    "role": "Coherent optics and network system modules",
    "change": -10.08,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 9.100000381469727,
    "referenceClose": 10.119999885559082,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical communication modules and components",
    "change": 19.8,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 426.5,
    "referenceClose": 356.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "4977.TW",
    "quoteSymbol": "4977.TW",
    "name": "眾達-KY",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical transceiver supplier",
    "change": 6.92,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 139.0,
    "referenceClose": 130.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver component",
    "role": "Optical communication and connector products",
    "change": 1.92,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1325.0,
    "referenceClose": 1300.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "module",
    "sub": "OSA",
    "role": "Optical subassemblies for transceivers",
    "change": -1.16,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 427.0,
    "referenceClose": 432.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "module",
    "sub": "Passive optical",
    "role": "Fiber components used in modules",
    "change": 8.13,
    "tags": [
      "passive"
    ],
    "priceStatus": "ok",
    "latestClose": 705.0,
    "referenceClose": 652.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module exposure",
    "change": 5.07,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 72.5,
    "referenceClose": 69.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "4908.TWO",
    "quoteSymbol": "4908.TWO",
    "name": "前鼎",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module and equipment",
    "change": 1.81,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 140.5,
    "referenceClose": 138.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "300308.SZ",
    "quoteSymbol": "300308.SZ",
    "name": "中際旭創",
    "market": "CN",
    "segment": "module",
    "sub": "800G / 1.6T",
    "role": "High-speed optical transceiver leader",
    "change": 6.85,
    "tags": [
      "800G",
      "1.6T"
    ],
    "priceStatus": "ok",
    "latestClose": 1046.510009765625,
    "referenceClose": 979.4600219726562,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "300502.SZ",
    "quoteSymbol": "300502.SZ",
    "name": "新易盛",
    "market": "CN",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom optical transceivers",
    "change": -1.42,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 476.0199890136719,
    "referenceClose": 482.8800048828125,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "002281.SZ",
    "quoteSymbol": "002281.SZ",
    "name": "光迅科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical devices and modules",
    "change": -1.4,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 186.8000030517578,
    "referenceClose": 189.4499969482422,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "603083.SH",
    "quoteSymbol": "603083.SS",
    "name": "劍橋科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical modules and broadband equipment",
    "change": -5.3,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 166.8000030517578,
    "referenceClose": 176.1300048828125,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical engine parts",
    "role": "High-speed module precision components",
    "change": -3.77,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 203.41000366210938,
    "referenceClose": 211.3699951171875,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "688205.SH",
    "quoteSymbol": "688205.SS",
    "name": "德科立",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical transceiver modules",
    "change": -4.66,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 128.60000610351562,
    "referenceClose": 134.8800048828125,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication and laser products",
    "change": -8.02,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 108.19000244140625,
    "referenceClose": 117.62000274658203,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical network",
    "role": "Optical network systems and modules",
    "change": -8.18,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 36.36000061035156,
    "referenceClose": 39.599998474121094,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "module",
    "sub": "Optical device",
    "role": "Optical components and communication devices",
    "change": 9.78,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 2469.0,
    "referenceClose": 2249.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "ANET",
    "quoteSymbol": "ANET",
    "name": "Arista Networks",
    "market": "US",
    "segment": "system",
    "sub": "AI switch",
    "role": "AI datacenter Ethernet switches",
    "change": 3.19,
    "tags": [
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 173.99000549316406,
    "referenceClose": 168.61000061035156,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "system",
    "sub": "Switch / router",
    "role": "Enterprise and cloud networking systems",
    "change": 1.99,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 114.16999816894531,
    "referenceClose": 111.94000244140625,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "HPE",
    "quoteSymbol": "HPE",
    "name": "HPE",
    "market": "US",
    "segment": "system",
    "sub": "Server / networking",
    "role": "AI servers, networking and cloud infrastructure",
    "change": 4.08,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 47.689998626708984,
    "referenceClose": 45.81999969482422,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "DELL",
    "quoteSymbol": "DELL",
    "name": "Dell",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and enterprise infrastructure",
    "change": 10.38,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 437.5,
    "referenceClose": 396.3399963378906,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "SMCI",
    "quoteSymbol": "SMCI",
    "name": "Supermicro",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server platforms and rack-scale systems",
    "change": 24.48,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 30.100000381469727,
    "referenceClose": 24.18000030517578,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "CLS",
    "quoteSymbol": "CLS",
    "name": "Celestica",
    "market": "US",
    "segment": "system",
    "sub": "ODM / EMS",
    "role": "Cloud hardware and networking manufacturing",
    "change": 1.31,
    "tags": [
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 305.2799987792969,
    "referenceClose": 301.3399963378906,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "JBL",
    "quoteSymbol": "JBL",
    "name": "Jabil",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing for networking systems",
    "change": 3.85,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 312.5899963378906,
    "referenceClose": 301.010009765625,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "FLEX",
    "quoteSymbol": "FLEX",
    "name": "Flex",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing and cloud hardware",
    "change": -0.62,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 118.51000213623047,
    "referenceClose": 119.25,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "2345.TW",
    "quoteSymbol": "2345.TW",
    "name": "智邦",
    "market": "TW",
    "segment": "system",
    "sub": "Switch ODM",
    "role": "White-box switch and cloud networking ODM",
    "change": 6.22,
    "tags": [
      "switch",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 2220.0,
    "referenceClose": 2090.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "2382.TW",
    "quoteSymbol": "2382.TW",
    "name": "廣達",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and cloud infrastructure ODM",
    "change": 0.77,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 328.0,
    "referenceClose": 325.5,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "6669.TW",
    "quoteSymbol": "6669.TW",
    "name": "緯穎",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "Cloud datacenter server ODM",
    "change": 24.03,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 5730.0,
    "referenceClose": 4620.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "2317.TW",
    "quoteSymbol": "2317.TW",
    "name": "鴻海",
    "market": "TW",
    "segment": "system",
    "sub": "EMS / server",
    "role": "AI server and system assembly",
    "change": 7.91,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 252.5,
    "referenceClose": 234.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "2308.TW",
    "quoteSymbol": "2308.TW",
    "name": "台達電",
    "market": "TW",
    "segment": "system",
    "sub": "Power / thermal",
    "role": "Power, thermal and datacenter infrastructure",
    "change": 2.59,
    "tags": [
      "power",
      "thermal"
    ],
    "priceStatus": "ok",
    "latestClose": 1785.0,
    "referenceClose": 1740.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "3706.TW",
    "quoteSymbol": "3706.TW",
    "name": "神達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and datacenter system integration",
    "change": 3.4,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 91.30000305175781,
    "referenceClose": 88.30000305175781,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "3231.TW",
    "quoteSymbol": "3231.TW",
    "name": "緯創",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and system integration",
    "change": 28.78,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 179.0,
    "referenceClose": 139.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "2356.TW",
    "quoteSymbol": "2356.TW",
    "name": "英業達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and cloud equipment manufacturing",
    "change": 10.26,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 64.5,
    "referenceClose": 58.5,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "3380.TW",
    "quoteSymbol": "3380.TW",
    "name": "明泰",
    "market": "TW",
    "segment": "system",
    "sub": "Networking",
    "role": "Networking products and broadband equipment",
    "change": 0.0,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 29.799999237060547,
    "referenceClose": 29.799999237060547,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "6285.TW",
    "quoteSymbol": "6285.TW",
    "name": "啟碁",
    "market": "TW",
    "segment": "system",
    "sub": "Network device",
    "role": "Wireless and networking equipment",
    "change": 6.4,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 249.5,
    "referenceClose": 234.5,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "system",
    "sub": "Optical systems",
    "role": "Optical communication and laser systems",
    "change": -8.02,
    "tags": [
      "system"
    ],
    "priceStatus": "ok",
    "latestClose": 108.19000244140625,
    "referenceClose": 117.62000274658203,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "system",
    "sub": "Optical network",
    "role": "Optical transmission and network equipment",
    "change": -8.18,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 36.36000061035156,
    "referenceClose": 39.599998474121094,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "000063.SZ",
    "quoteSymbol": "000063.SZ",
    "name": "中興通訊",
    "market": "CN",
    "segment": "system",
    "sub": "Telecom equipment",
    "role": "Telecom and datacenter network equipment",
    "change": -2.78,
    "tags": [
      "telecom"
    ],
    "priceStatus": "ok",
    "latestClose": 35.0,
    "referenceClose": 36.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "6701.T",
    "quoteSymbol": "6701.T",
    "name": "NEC",
    "market": "JP",
    "segment": "system",
    "sub": "Network systems",
    "role": "Telecom, submarine and network systems",
    "change": -2.41,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 4249.0,
    "referenceClose": 4354.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  },
  {
    "ticker": "6702.T",
    "quoteSymbol": "6702.T",
    "name": "Fujitsu",
    "market": "JP",
    "segment": "system",
    "sub": "ICT systems",
    "role": "ICT infrastructure and network systems",
    "change": -0.58,
    "tags": [
      "ICT"
    ],
    "priceStatus": "ok",
    "latestClose": 3279.0,
    "referenceClose": 3298.0,
    "priceDate": "2026-07-24",
    "referenceDate": "2026-07-17"
  }
];

