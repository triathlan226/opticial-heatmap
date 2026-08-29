window.HEATMAP_META = {
  "title": "光通訊 / CPO 供應鏈熱力圖",
  "subtitle": "六大環節、跨市場上市公司、同公司可重複出現在多個供應鏈位置。",
  "lastUpdated": "2026-08-29",
  "dateRange": "2026-08-20 → 2026-08-28",
  "totalTiles": 126,
  "totalCompanies": 97,
  "quoteSymbolsUpdated": 97,
  "quoteSymbolsFailed": 0,
  "priceStatusCounts": {
    "ok": 126
  },
  "topGainer": {
    "ticker": "4908.TWO",
    "name": "前鼎",
    "change": 24.18
  },
  "topLoser": {
    "ticker": "300502.SZ",
    "name": "新易盛",
    "change": -9.73
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
    "change": 2.06,
    "tags": [
      "ASIC",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 371.5400085449219,
    "referenceClose": 364.0299987792969,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "asic",
    "sub": "GPU / Network ASIC",
    "role": "GPU, NVLink, Spectrum-X ecosystem",
    "change": 5.13,
    "tags": [
      "GPU",
      "networking"
    ],
    "priceStatus": "ok",
    "latestClose": 227.97999572753906,
    "referenceClose": 216.85000610351562,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "asic",
    "sub": "DSP / PAM4",
    "role": "Optical DSP, custom silicon, DCI chips",
    "change": -3.81,
    "tags": [
      "DSP",
      "custom silicon"
    ],
    "priceStatus": "ok",
    "latestClose": 241.4499969482422,
    "referenceClose": 251.00999450683594,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "CRDO",
    "quoteSymbol": "CRDO",
    "name": "Credo",
    "market": "US",
    "segment": "asic",
    "sub": "Retimer / DSP",
    "role": "High-speed connectivity and optical DSP",
    "change": 3.84,
    "tags": [
      "DSP",
      "retimer"
    ],
    "priceStatus": "ok",
    "latestClose": 240.24000549316406,
    "referenceClose": 231.35000610351562,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "ALAB",
    "quoteSymbol": "ALAB",
    "name": "Astera Labs",
    "market": "US",
    "segment": "asic",
    "sub": "PCIe / CXL",
    "role": "AI data-center connectivity silicon",
    "change": 4.67,
    "tags": [
      "retimer",
      "CXL"
    ],
    "priceStatus": "ok",
    "latestClose": 304.0899963378906,
    "referenceClose": 290.5199890136719,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Laser drivers, TIAs, high-speed analog",
    "change": 4.12,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 277.1499938964844,
    "referenceClose": 266.17999267578125,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "SMTC",
    "quoteSymbol": "SMTC",
    "name": "Semtech",
    "market": "US",
    "segment": "asic",
    "sub": "Signal IC",
    "role": "Signal integrity and optical analog ICs",
    "change": 14.05,
    "tags": [
      "signal"
    ],
    "priceStatus": "ok",
    "latestClose": 142.42999267578125,
    "referenceClose": 124.87999725341797,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "asic",
    "sub": "Network silicon",
    "role": "Silicon One and Acacia optical stack",
    "change": 2.34,
    "tags": [
      "switch",
      "acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 112.1500015258789,
    "referenceClose": 109.58999633789062,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "asic",
    "sub": "Coherent DSP",
    "role": "WaveLogic coherent DSP and systems",
    "change": 1.88,
    "tags": [
      "coherent",
      "DSP"
    ],
    "priceStatus": "ok",
    "latestClose": 399.8500061035156,
    "referenceClose": 392.4800109863281,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "AMD",
    "quoteSymbol": "AMD",
    "name": "AMD",
    "market": "US",
    "segment": "asic",
    "sub": "AI accelerator",
    "role": "AI accelerators and adaptive compute",
    "change": 1.54,
    "tags": [
      "accelerator"
    ],
    "priceStatus": "ok",
    "latestClose": 476.6700134277344,
    "referenceClose": 469.4599914550781,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "asic",
    "sub": "Foundry / I/O",
    "role": "Foundry, Ethernet, historical silicon photonics",
    "change": -0.04,
    "tags": [
      "foundry",
      "ethernet"
    ],
    "priceStatus": "ok",
    "latestClose": 92.08999633789062,
    "referenceClose": 92.12999725341797,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "QCOM",
    "quoteSymbol": "QCOM",
    "name": "Qualcomm",
    "market": "US",
    "segment": "asic",
    "sub": "Connectivity IC",
    "role": "High-speed connectivity and edge AI silicon",
    "change": 2.51,
    "tags": [
      "connectivity"
    ],
    "priceStatus": "ok",
    "latestClose": 164.77999877929688,
    "referenceClose": 160.74000549316406,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "3661.TW",
    "quoteSymbol": "3661.TW",
    "name": "世芯-KY",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "Advanced-node custom ASIC design service",
    "change": 9.86,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 4065.0,
    "referenceClose": 3700.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "3443.TW",
    "quoteSymbol": "3443.TW",
    "name": "創意",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "GUC ASIC design and implementation",
    "change": 7.41,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 6015.0,
    "referenceClose": 5600.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "2454.TW",
    "quoteSymbol": "2454.TW",
    "name": "聯發科",
    "market": "TW",
    "segment": "asic",
    "sub": "Connectivity SoC",
    "role": "Networking, SerDes and edge AI chip exposure",
    "change": 5.15,
    "tags": [
      "SoC"
    ],
    "priceStatus": "ok",
    "latestClose": 3985.0,
    "referenceClose": 3790.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "5274.TWO",
    "quoteSymbol": "5274.TWO",
    "name": "信驊",
    "market": "TW",
    "segment": "asic",
    "sub": "BMC",
    "role": "Server management silicon",
    "change": 1.82,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 15630.0,
    "referenceClose": 15350.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "688536.SH",
    "quoteSymbol": "688536.SS",
    "name": "思瑞浦",
    "market": "CN",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Analog and signal-chain ICs",
    "change": -0.81,
    "tags": [
      "analog"
    ],
    "priceStatus": "ok",
    "latestClose": 308.79998779296875,
    "referenceClose": 311.3299865722656,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "asic",
    "sub": "Laser driver link",
    "role": "Optical chip supplier with upstream exposure",
    "change": -3.07,
    "tags": [
      "optical chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1538.3499755859375,
    "referenceClose": 1587.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "2330.TW",
    "quoteSymbol": "2330.TW",
    "name": "台積電",
    "market": "TW",
    "segment": "sipic",
    "sub": "Foundry",
    "role": "Advanced-node and packaging platform for CPO ecosystem",
    "change": 0.41,
    "tags": [
      "foundry",
      "CoWoS"
    ],
    "priceStatus": "ok",
    "latestClose": 2420.0,
    "referenceClose": 2410.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "AVGO",
    "quoteSymbol": "AVGO",
    "name": "Broadcom",
    "market": "US",
    "segment": "sipic",
    "sub": "Co-packaged optics",
    "role": "CPO roadmap and switch silicon integration",
    "change": 2.06,
    "tags": [
      "CPO",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 371.5400085449219,
    "referenceClose": 364.0299987792969,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical I/O ecosystem",
    "role": "AI cluster architecture drives optical I/O demand",
    "change": 5.13,
    "tags": [
      "AI",
      "optical I/O"
    ],
    "priceStatus": "ok",
    "latestClose": 227.97999572753906,
    "referenceClose": 216.85000610351562,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical platform",
    "role": "DSP plus silicon photonics partnership ecosystem",
    "change": -3.81,
    "tags": [
      "DSP",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 241.4499969482422,
    "referenceClose": 251.00999450683594,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "sipic",
    "sub": "Silicon photonics",
    "role": "Integrated silicon photonics and foundry capabilities",
    "change": -0.04,
    "tags": [
      "SiPh",
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 92.08999633789062,
    "referenceClose": 92.12999725341797,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Lasers, transceivers and optical engine building blocks",
    "change": 1.85,
    "tags": [
      "laser",
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 295.3900146484375,
    "referenceClose": 290.0299987792969,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Datacom lasers and optical components",
    "change": 8.74,
    "tags": [
      "laser",
      "datacom"
    ],
    "priceStatus": "ok",
    "latestClose": 956.1400146484375,
    "referenceClose": 879.280029296875,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "STM",
    "quoteSymbol": "STM",
    "name": "STMicro",
    "market": "EU",
    "segment": "sipic",
    "sub": "Photonics platform",
    "role": "Photonics and advanced semiconductor platform exposure",
    "change": 2.84,
    "tags": [
      "photonics"
    ],
    "priceStatus": "ok",
    "latestClose": 51.34000015258789,
    "referenceClose": 49.91999816894531,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "GFS",
    "quoteSymbol": "GFS",
    "name": "GlobalFoundries",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Silicon photonics and specialty process platform",
    "change": -2.09,
    "tags": [
      "foundry",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 46.34000015258789,
    "referenceClose": 47.33000183105469,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "TSEM",
    "quoteSymbol": "TSEM",
    "name": "Tower Semiconductor",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Analog, photonics and specialty manufacturing",
    "change": -1.76,
    "tags": [
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 219.85000610351562,
    "referenceClose": 223.77999877929688,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "sipic",
    "sub": "Optical systems",
    "role": "Photonic service engines and coherent optics",
    "change": 4.33,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 10.59000015258789,
    "referenceClose": 10.149999618530273,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "sipic",
    "sub": "Acacia optics",
    "role": "Coherent modules and optical interconnect roadmap",
    "change": 2.34,
    "tags": [
      "Acacia",
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 112.1500015258789,
    "referenceClose": 109.58999633789062,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "sipic",
    "sub": "Coherent optics",
    "role": "Coherent optical engine and network platforms",
    "change": 1.88,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 399.8500061035156,
    "referenceClose": 392.4800109863281,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "POET",
    "quoteSymbol": "POET",
    "name": "POET Technologies",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical interposer",
    "role": "Optical interposer platform for transceivers",
    "change": -0.97,
    "tags": [
      "interposer"
    ],
    "priceStatus": "ok",
    "latestClose": 8.1899995803833,
    "referenceClose": 8.270000457763672,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "LWLG",
    "quoteSymbol": "LWLG",
    "name": "Lightwave Logic",
    "market": "US",
    "segment": "sipic",
    "sub": "EO polymer",
    "role": "Electro-optic polymer material platform",
    "change": -3.77,
    "tags": [
      "material"
    ],
    "priceStatus": "ok",
    "latestClose": 5.869999885559082,
    "referenceClose": 6.099999904632568,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "4966.TWO",
    "quoteSymbol": "4966.TWO",
    "name": "譜瑞-KY",
    "market": "TW",
    "segment": "sipic",
    "sub": "High-speed interface",
    "role": "High-speed interface ICs and data transmission",
    "change": 3.18,
    "tags": [
      "interface"
    ],
    "priceStatus": "ok",
    "latestClose": 584.0,
    "referenceClose": 566.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "6789.TW",
    "quoteSymbol": "6789.TW",
    "name": "采鈺",
    "market": "TW",
    "segment": "sipic",
    "sub": "Optical process",
    "role": "Optical semiconductor process and sensor platform",
    "change": 8.73,
    "tags": [
      "process"
    ],
    "priceStatus": "ok",
    "latestClose": 461.0,
    "referenceClose": 424.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "688313.SH",
    "quoteSymbol": "688313.SS",
    "name": "仕佳光子",
    "market": "CN",
    "segment": "sipic",
    "sub": "PLC / optical chip",
    "role": "PLC splitter, AWG and optical chip supplier",
    "change": -1.84,
    "tags": [
      "PLC",
      "chip"
    ],
    "priceStatus": "ok",
    "latestClose": 155.10000610351562,
    "referenceClose": 158.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "laser",
    "sub": "Laser / InP",
    "role": "InP lasers, VCSELs, coherent and datacom components",
    "change": 1.85,
    "tags": [
      "InP",
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 295.3900146484375,
    "referenceClose": 290.0299987792969,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "laser",
    "sub": "Datacom laser",
    "role": "EML, DFB and high-speed datacom laser supply",
    "change": 8.74,
    "tags": [
      "EML",
      "DFB"
    ],
    "priceStatus": "ok",
    "latestClose": 956.1400146484375,
    "referenceClose": 879.280029296875,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "laser",
    "sub": "Laser driver / TIA",
    "role": "Laser drivers, TIAs and analog front-end",
    "change": 4.12,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 277.1499938964844,
    "referenceClose": 266.17999267578125,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "IPGP",
    "quoteSymbol": "IPGP",
    "name": "IPG Photonics",
    "market": "US",
    "segment": "laser",
    "sub": "Fiber laser",
    "role": "Laser technology and optical components",
    "change": 3.79,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 77.25,
    "referenceClose": 74.43000030517578,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "AXTI",
    "quoteSymbol": "AXTI",
    "name": "AXT",
    "market": "US",
    "segment": "laser",
    "sub": "Substrate",
    "role": "Compound semiconductor substrates",
    "change": -8.48,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 66.91999816894531,
    "referenceClose": 73.12000274658203,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "IQE.L",
    "quoteSymbol": "IQE.L",
    "name": "IQE",
    "market": "EU",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "Compound semiconductor epitaxy wafers",
    "change": 11.67,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 48.79999923706055,
    "referenceClose": 43.70000076293945,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Compound semiconductor and optical components",
    "change": 0.07,
    "tags": [
      "InP",
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 2180.0,
    "referenceClose": 2178.5,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "6503.T",
    "quoteSymbol": "6503.T",
    "name": "三菱電機",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Optical devices, lasers and industrial electronics",
    "change": 0.82,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 5648.0,
    "referenceClose": 5602.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "6965.T",
    "quoteSymbol": "6965.T",
    "name": "浜松光子",
    "market": "JP",
    "segment": "laser",
    "sub": "Photonics",
    "role": "Photodetectors, optoelectronics and photonics devices",
    "change": -0.99,
    "tags": [
      "detector"
    ],
    "priceStatus": "ok",
    "latestClose": 2343.5,
    "referenceClose": 2367.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "AMS.SW",
    "quoteSymbol": "AMS.SW",
    "name": "ams OSRAM",
    "market": "EU",
    "segment": "laser",
    "sub": "Emitter",
    "role": "Emitters, sensors and photonics devices",
    "change": 4.79,
    "tags": [
      "emitter"
    ],
    "priceStatus": "ok",
    "latestClose": 18.15999984741211,
    "referenceClose": 17.329999923706055,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "3105.TWO",
    "quoteSymbol": "3105.TWO",
    "name": "穩懋",
    "market": "TW",
    "segment": "laser",
    "sub": "GaAs foundry",
    "role": "GaAs foundry with photonics-adjacent capabilities",
    "change": 17.69,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 439.0,
    "referenceClose": 373.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "3081.TWO",
    "quoteSymbol": "3081.TWO",
    "name": "聯亞",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "III-V epitaxy wafers for optical communications",
    "change": 13.18,
    "tags": [
      "epi",
      "III-V"
    ],
    "priceStatus": "ok",
    "latestClose": 3305.0,
    "referenceClose": 2920.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "2455.TW",
    "quoteSymbol": "2455.TW",
    "name": "全新",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "GaAs/InP epitaxy and compound semiconductor materials",
    "change": 6.9,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 434.0,
    "referenceClose": 406.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "8086.TWO",
    "quoteSymbol": "8086.TWO",
    "name": "宏捷科",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "GaAs foundry and compound semiconductor devices",
    "change": 6.33,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 117.5,
    "referenceClose": 110.5,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "4991.TWO",
    "quoteSymbol": "4991.TWO",
    "name": "環宇-KY",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "Compound semiconductor and optical device exposure",
    "change": 8.11,
    "tags": [
      "compound"
    ],
    "priceStatus": "ok",
    "latestClose": 520.0,
    "referenceClose": 481.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "laser",
    "sub": "Optical component",
    "role": "Optical communication components and modules",
    "change": 5.72,
    "tags": [
      "optical"
    ],
    "priceStatus": "ok",
    "latestClose": 610.0,
    "referenceClose": 577.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser chip",
    "role": "Optical communication laser chips",
    "change": -3.07,
    "tags": [
      "laser chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1538.3499755859375,
    "referenceClose": 1587.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser / module",
    "role": "Laser equipment and optical communication products",
    "change": -3.61,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 102.93000030517578,
    "referenceClose": 106.77999877929688,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "APH",
    "quoteSymbol": "APH",
    "name": "Amphenol",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "High-speed interconnect and optical connector ecosystem",
    "change": 5.4,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 161.3800048828125,
    "referenceClose": 153.11000061035156,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "GLW",
    "quoteSymbol": "GLW",
    "name": "Corning",
    "market": "US",
    "segment": "component",
    "sub": "Fiber / glass",
    "role": "Optical fiber, glass and datacenter cabling",
    "change": 0.89,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 152.8000030517578,
    "referenceClose": 151.4499969482422,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "TEL",
    "quoteSymbol": "TEL",
    "name": "TE Connectivity",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "Connectors, cable assemblies and sensors",
    "change": 1.23,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 203.0,
    "referenceClose": 200.5399932861328,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers, modulators and optical subassemblies",
    "change": 1.85,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 295.3900146484375,
    "referenceClose": 290.0299987792969,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers and optical communication components",
    "change": 8.74,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 956.1400146484375,
    "referenceClose": 879.280029296875,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "component",
    "sub": "Manufacturing",
    "role": "Precision optical manufacturing and assembly",
    "change": -2.73,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 432.7099914550781,
    "referenceClose": 444.8699951171875,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "3711.TW",
    "quoteSymbol": "3711.TW",
    "name": "日月光投控",
    "market": "TW",
    "segment": "component",
    "sub": "Advanced packaging",
    "role": "Semiconductor packaging and system-in-package",
    "change": 5.79,
    "tags": [
      "packaging"
    ],
    "priceStatus": "ok",
    "latestClose": 621.0,
    "referenceClose": 587.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "2449.TW",
    "quoteSymbol": "2449.TW",
    "name": "京元電",
    "market": "TW",
    "segment": "component",
    "sub": "Test",
    "role": "IC testing services for high-speed chips",
    "change": 16.38,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 270.0,
    "referenceClose": 232.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "6515.TW",
    "quoteSymbol": "6515.TW",
    "name": "穎崴",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card / socket",
    "role": "High-speed test interface and sockets",
    "change": -2.34,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 6250.0,
    "referenceClose": 6400.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "6223.TWO",
    "quoteSymbol": "6223.TWO",
    "name": "旺矽",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card",
    "role": "Probe cards and testing interface",
    "change": -7.96,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 5030.0,
    "referenceClose": 5465.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "3037.TW",
    "quoteSymbol": "3037.TW",
    "name": "欣興",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and advanced PCB",
    "change": 2.3,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1110.0,
    "referenceClose": 1085.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "3189.TW",
    "quoteSymbol": "3189.TW",
    "name": "景碩",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate supplier",
    "change": 10.85,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 899.0,
    "referenceClose": 811.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "8046.TW",
    "quoteSymbol": "8046.TW",
    "name": "南電",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and PCB",
    "change": 9.25,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1240.0,
    "referenceClose": 1135.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "2383.TW",
    "quoteSymbol": "2383.TW",
    "name": "台光電",
    "market": "TW",
    "segment": "component",
    "sub": "Copper clad laminate",
    "role": "High-speed CCL for AI servers and switches",
    "change": -3.35,
    "tags": [
      "CCL"
    ],
    "priceStatus": "ok",
    "latestClose": 5490.0,
    "referenceClose": 5680.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "component",
    "sub": "Connector / RF",
    "role": "Connectors and optical communication components",
    "change": 5.9,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 1615.0,
    "referenceClose": 1525.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "3363.TWO",
    "quoteSymbol": "3363.TWO",
    "name": "上詮",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber optic components and passive devices",
    "change": 16.83,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 701.0,
    "referenceClose": 600.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "component",
    "sub": "Optical subassembly",
    "role": "Optical communication subassemblies and packaging",
    "change": 15.24,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 635.0,
    "referenceClose": 551.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "6451.TW",
    "quoteSymbol": "6451.TW",
    "name": "訊芯-KY",
    "market": "TW",
    "segment": "component",
    "sub": "SiP / optical packaging",
    "role": "System-in-package and optical communication assembly",
    "change": 8.49,
    "tags": [
      "SiP"
    ],
    "priceStatus": "ok",
    "latestClose": 453.5,
    "referenceClose": 418.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber arrays, splitters and optical passive components",
    "change": -3.7,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 754.0,
    "referenceClose": 783.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical communication component supplier",
    "change": 5.85,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 86.9000015258789,
    "referenceClose": 82.0999984741211,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive components and precision parts",
    "change": -3.48,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 263.5799865722656,
    "referenceClose": 273.0799865722656,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "300548.SZ",
    "quoteSymbol": "300548.SZ",
    "name": "博創科技",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive and active components",
    "change": 7.84,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 212.89999389648438,
    "referenceClose": 197.4199981689453,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "601869.SH",
    "quoteSymbol": "601869.SS",
    "name": "長飛光纖",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber",
    "role": "Optical fiber and cable",
    "change": 16.16,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 422.3599853515625,
    "referenceClose": 363.6000061035156,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "600487.SH",
    "quoteSymbol": "600487.SS",
    "name": "亨通光電",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber cable and optical network products",
    "change": 10.49,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 68.69999694824219,
    "referenceClose": 62.18000030517578,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "5801.T",
    "quoteSymbol": "5801.T",
    "name": "古河電工",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Optical fiber, cable and network materials",
    "change": 2.23,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 3903.0,
    "referenceClose": 3818.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "5803.T",
    "quoteSymbol": "5803.T",
    "name": "藤倉",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber, cable and optical interconnect products",
    "change": 1.14,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 5340.0,
    "referenceClose": 5280.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "4062.T",
    "quoteSymbol": "4062.T",
    "name": "Ibiden",
    "market": "JP",
    "segment": "component",
    "sub": "Substrate",
    "role": "Advanced IC substrates",
    "change": 5.13,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 20175.0,
    "referenceClose": 19190.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom and telecom optical transceivers",
    "change": 1.85,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 295.3900146484375,
    "referenceClose": 290.0299987792969,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "module",
    "sub": "Laser / module",
    "role": "Laser engines and optical module supply",
    "change": 8.74,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 956.1400146484375,
    "referenceClose": 879.280029296875,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "module",
    "sub": "Optical manufacturing",
    "role": "Optical module contract manufacturing",
    "change": -2.73,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 432.7099914550781,
    "referenceClose": 444.8699951171875,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "module",
    "sub": "Coherent module",
    "role": "Coherent optical modules and transport platforms",
    "change": 1.88,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 399.8500061035156,
    "referenceClose": 392.4800109863281,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "module",
    "sub": "Acacia module",
    "role": "Acacia coherent optics and pluggable modules",
    "change": 2.34,
    "tags": [
      "Acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 112.1500015258789,
    "referenceClose": 109.58999633789062,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "module",
    "sub": "Optical module",
    "role": "Coherent optics and network system modules",
    "change": 4.33,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 10.59000015258789,
    "referenceClose": 10.149999618530273,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical communication modules and components",
    "change": 5.72,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 610.0,
    "referenceClose": 577.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "4977.TW",
    "quoteSymbol": "4977.TW",
    "name": "眾達-KY",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical transceiver supplier",
    "change": 14.29,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 172.0,
    "referenceClose": 150.5,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver component",
    "role": "Optical communication and connector products",
    "change": 5.9,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1615.0,
    "referenceClose": 1525.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "module",
    "sub": "OSA",
    "role": "Optical subassemblies for transceivers",
    "change": 15.24,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 635.0,
    "referenceClose": 551.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "module",
    "sub": "Passive optical",
    "role": "Fiber components used in modules",
    "change": -3.7,
    "tags": [
      "passive"
    ],
    "priceStatus": "ok",
    "latestClose": 754.0,
    "referenceClose": 783.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module exposure",
    "change": 5.85,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 86.9000015258789,
    "referenceClose": 82.0999984741211,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "4908.TWO",
    "quoteSymbol": "4908.TWO",
    "name": "前鼎",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module and equipment",
    "change": 24.18,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 190.0,
    "referenceClose": 153.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "300308.SZ",
    "quoteSymbol": "300308.SZ",
    "name": "中際旭創",
    "market": "CN",
    "segment": "module",
    "sub": "800G / 1.6T",
    "role": "High-speed optical transceiver leader",
    "change": -8.98,
    "tags": [
      "800G",
      "1.6T"
    ],
    "priceStatus": "ok",
    "latestClose": 858.3499755859375,
    "referenceClose": 943.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "300502.SZ",
    "quoteSymbol": "300502.SZ",
    "name": "新易盛",
    "market": "CN",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom optical transceivers",
    "change": -9.73,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 399.0,
    "referenceClose": 442.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "002281.SZ",
    "quoteSymbol": "002281.SZ",
    "name": "光迅科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical devices and modules",
    "change": -2.78,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 173.61000061035156,
    "referenceClose": 178.5800018310547,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "603083.SH",
    "quoteSymbol": "603083.SS",
    "name": "劍橋科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical modules and broadband equipment",
    "change": 6.27,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 192.30999755859375,
    "referenceClose": 180.97000122070312,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical engine parts",
    "role": "High-speed module precision components",
    "change": -3.48,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 263.5799865722656,
    "referenceClose": 273.0799865722656,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "688205.SH",
    "quoteSymbol": "688205.SS",
    "name": "德科立",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical transceiver modules",
    "change": 10.57,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 176.1999969482422,
    "referenceClose": 159.36000061035156,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication and laser products",
    "change": -3.61,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 102.93000030517578,
    "referenceClose": 106.77999877929688,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical network",
    "role": "Optical network systems and modules",
    "change": 1.18,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 41.18000030517578,
    "referenceClose": 40.70000076293945,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "module",
    "sub": "Optical device",
    "role": "Optical components and communication devices",
    "change": 0.07,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 2180.0,
    "referenceClose": 2178.5,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "ANET",
    "quoteSymbol": "ANET",
    "name": "Arista Networks",
    "market": "US",
    "segment": "system",
    "sub": "AI switch",
    "role": "AI datacenter Ethernet switches",
    "change": 9.44,
    "tags": [
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 201.08999633789062,
    "referenceClose": 183.75,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "system",
    "sub": "Switch / router",
    "role": "Enterprise and cloud networking systems",
    "change": 2.34,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 112.1500015258789,
    "referenceClose": 109.58999633789062,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "HPE",
    "quoteSymbol": "HPE",
    "name": "HPE",
    "market": "US",
    "segment": "system",
    "sub": "Server / networking",
    "role": "AI servers, networking and cloud infrastructure",
    "change": 2.87,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 54.40999984741211,
    "referenceClose": 52.88999938964844,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "DELL",
    "quoteSymbol": "DELL",
    "name": "Dell",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and enterprise infrastructure",
    "change": 8.62,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 472.260009765625,
    "referenceClose": 434.7799987792969,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "SMCI",
    "quoteSymbol": "SMCI",
    "name": "Supermicro",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server platforms and rack-scale systems",
    "change": 5.37,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 38.459999084472656,
    "referenceClose": 36.5,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "CLS",
    "quoteSymbol": "CLS",
    "name": "Celestica",
    "market": "US",
    "segment": "system",
    "sub": "ODM / EMS",
    "role": "Cloud hardware and networking manufacturing",
    "change": 5.09,
    "tags": [
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 317.3800048828125,
    "referenceClose": 302.0,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "JBL",
    "quoteSymbol": "JBL",
    "name": "Jabil",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing for networking systems",
    "change": -1.4,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 312.2200012207031,
    "referenceClose": 316.6499938964844,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "FLEX",
    "quoteSymbol": "FLEX",
    "name": "Flex",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing and cloud hardware",
    "change": 4.51,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 115.30000305175781,
    "referenceClose": 110.31999969482422,
    "priceDate": "2026-08-27",
    "referenceDate": "2026-08-20"
  },
  {
    "ticker": "2345.TW",
    "quoteSymbol": "2345.TW",
    "name": "智邦",
    "market": "TW",
    "segment": "system",
    "sub": "Switch ODM",
    "role": "White-box switch and cloud networking ODM",
    "change": 4.42,
    "tags": [
      "switch",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 2125.0,
    "referenceClose": 2035.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "2382.TW",
    "quoteSymbol": "2382.TW",
    "name": "廣達",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and cloud infrastructure ODM",
    "change": 3.42,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 332.5,
    "referenceClose": 321.5,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "6669.TW",
    "quoteSymbol": "6669.TW",
    "name": "緯穎",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "Cloud datacenter server ODM",
    "change": 15.11,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 7200.0,
    "referenceClose": 6255.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "2317.TW",
    "quoteSymbol": "2317.TW",
    "name": "鴻海",
    "market": "TW",
    "segment": "system",
    "sub": "EMS / server",
    "role": "AI server and system assembly",
    "change": 3.06,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 253.0,
    "referenceClose": 245.5,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "2308.TW",
    "quoteSymbol": "2308.TW",
    "name": "台達電",
    "market": "TW",
    "segment": "system",
    "sub": "Power / thermal",
    "role": "Power, thermal and datacenter infrastructure",
    "change": 4.57,
    "tags": [
      "power",
      "thermal"
    ],
    "priceStatus": "ok",
    "latestClose": 1830.0,
    "referenceClose": 1750.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "3706.TW",
    "quoteSymbol": "3706.TW",
    "name": "神達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and datacenter system integration",
    "change": 2.33,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 92.0999984741211,
    "referenceClose": 90.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "3231.TW",
    "quoteSymbol": "3231.TW",
    "name": "緯創",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and system integration",
    "change": 1.42,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 178.0,
    "referenceClose": 175.5,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "2356.TW",
    "quoteSymbol": "2356.TW",
    "name": "英業達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and cloud equipment manufacturing",
    "change": -1.22,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 64.9000015258789,
    "referenceClose": 65.69999694824219,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "3380.TW",
    "quoteSymbol": "3380.TW",
    "name": "明泰",
    "market": "TW",
    "segment": "system",
    "sub": "Networking",
    "role": "Networking products and broadband equipment",
    "change": 2.18,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 28.149999618530273,
    "referenceClose": 27.549999237060547,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "6285.TW",
    "quoteSymbol": "6285.TW",
    "name": "啟碁",
    "market": "TW",
    "segment": "system",
    "sub": "Network device",
    "role": "Wireless and networking equipment",
    "change": 4.88,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 247.0,
    "referenceClose": 235.5,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "system",
    "sub": "Optical systems",
    "role": "Optical communication and laser systems",
    "change": -3.61,
    "tags": [
      "system"
    ],
    "priceStatus": "ok",
    "latestClose": 102.93000030517578,
    "referenceClose": 106.77999877929688,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "system",
    "sub": "Optical network",
    "role": "Optical transmission and network equipment",
    "change": 1.18,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 41.18000030517578,
    "referenceClose": 40.70000076293945,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "000063.SZ",
    "quoteSymbol": "000063.SZ",
    "name": "中興通訊",
    "market": "CN",
    "segment": "system",
    "sub": "Telecom equipment",
    "role": "Telecom and datacenter network equipment",
    "change": -0.44,
    "tags": [
      "telecom"
    ],
    "priceStatus": "ok",
    "latestClose": 33.630001068115234,
    "referenceClose": 33.779998779296875,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "6701.T",
    "quoteSymbol": "6701.T",
    "name": "NEC",
    "market": "JP",
    "segment": "system",
    "sub": "Network systems",
    "role": "Telecom, submarine and network systems",
    "change": 5.41,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 4908.0,
    "referenceClose": 4656.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  },
  {
    "ticker": "6702.T",
    "quoteSymbol": "6702.T",
    "name": "Fujitsu",
    "market": "JP",
    "segment": "system",
    "sub": "ICT systems",
    "role": "ICT infrastructure and network systems",
    "change": 7.08,
    "tags": [
      "ICT"
    ],
    "priceStatus": "ok",
    "latestClose": 3904.0,
    "referenceClose": 3646.0,
    "priceDate": "2026-08-28",
    "referenceDate": "2026-08-21"
  }
];

