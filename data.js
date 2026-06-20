window.HEATMAP_META = {
  "title": "光通訊 / CPO 供應鏈熱力圖",
  "subtitle": "六大環節、跨市場上市公司、同公司可重複出現在多個供應鏈位置。",
  "lastUpdated": "2026-06-20",
  "dateRange": "2026-06-11 → 2026-06-19",
  "totalTiles": 126,
  "totalCompanies": 97,
  "quoteSymbolsUpdated": 97,
  "quoteSymbolsFailed": 0,
  "priceStatusCounts": {
    "ok": 126
  },
  "topGainer": {
    "ticker": "2455.TW",
    "name": "全新",
    "change": 30.0
  },
  "topLoser": {
    "ticker": "LITE",
    "name": "Lumentum",
    "change": -4.45
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
    "change": 6.69,
    "tags": [
      "ASIC",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 411.3500061035156,
    "referenceClose": 385.57000732421875,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "asic",
    "sub": "GPU / Network ASIC",
    "role": "GPU, NVLink, Spectrum-X ecosystem",
    "change": 2.84,
    "tags": [
      "GPU",
      "networking"
    ],
    "priceStatus": "ok",
    "latestClose": 210.69000244140625,
    "referenceClose": 204.8699951171875,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "asic",
    "sub": "DSP / PAM4",
    "role": "Optical DSP, custom silicon, DCI chips",
    "change": 10.64,
    "tags": [
      "DSP",
      "custom silicon"
    ],
    "priceStatus": "ok",
    "latestClose": 310.5799865722656,
    "referenceClose": 280.7099914550781,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "CRDO",
    "quoteSymbol": "CRDO",
    "name": "Credo",
    "market": "US",
    "segment": "asic",
    "sub": "Retimer / DSP",
    "role": "High-speed connectivity and optical DSP",
    "change": 2.67,
    "tags": [
      "DSP",
      "retimer"
    ],
    "priceStatus": "ok",
    "latestClose": 271.8299865722656,
    "referenceClose": 264.760009765625,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "ALAB",
    "quoteSymbol": "ALAB",
    "name": "Astera Labs",
    "market": "US",
    "segment": "asic",
    "sub": "PCIe / CXL",
    "role": "AI data-center connectivity silicon",
    "change": 13.5,
    "tags": [
      "retimer",
      "CXL"
    ],
    "priceStatus": "ok",
    "latestClose": 417.07000732421875,
    "referenceClose": 367.4700012207031,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Laser drivers, TIAs, high-speed analog",
    "change": 4.44,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 391.4100036621094,
    "referenceClose": 374.760009765625,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "SMTC",
    "quoteSymbol": "SMTC",
    "name": "Semtech",
    "market": "US",
    "segment": "asic",
    "sub": "Signal IC",
    "role": "Signal integrity and optical analog ICs",
    "change": -3.26,
    "tags": [
      "signal"
    ],
    "priceStatus": "ok",
    "latestClose": 158.22999572753906,
    "referenceClose": 163.57000732421875,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "asic",
    "sub": "Network silicon",
    "role": "Silicon One and Acacia optical stack",
    "change": -1.88,
    "tags": [
      "switch",
      "acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 119.54000091552734,
    "referenceClose": 121.83000183105469,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "asic",
    "sub": "Coherent DSP",
    "role": "WaveLogic coherent DSP and systems",
    "change": -3.82,
    "tags": [
      "coherent",
      "DSP"
    ],
    "priceStatus": "ok",
    "latestClose": 428.2200012207031,
    "referenceClose": 445.2200012207031,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "AMD",
    "quoteSymbol": "AMD",
    "name": "AMD",
    "market": "US",
    "segment": "asic",
    "sub": "AI accelerator",
    "role": "AI accelerators and adaptive compute",
    "change": 10.02,
    "tags": [
      "accelerator"
    ],
    "priceStatus": "ok",
    "latestClose": 537.3699951171875,
    "referenceClose": 488.45001220703125,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "asic",
    "sub": "Foundry / I/O",
    "role": "Foundry, Ethernet, historical silicon photonics",
    "change": 14.56,
    "tags": [
      "foundry",
      "ethernet"
    ],
    "priceStatus": "ok",
    "latestClose": 133.99000549316406,
    "referenceClose": 116.95999908447266,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "QCOM",
    "quoteSymbol": "QCOM",
    "name": "Qualcomm",
    "market": "US",
    "segment": "asic",
    "sub": "Connectivity IC",
    "role": "High-speed connectivity and edge AI silicon",
    "change": 11.41,
    "tags": [
      "connectivity"
    ],
    "priceStatus": "ok",
    "latestClose": 226.11000061035156,
    "referenceClose": 202.9600067138672,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "3661.TW",
    "quoteSymbol": "3661.TW",
    "name": "世芯-KY",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "Advanced-node custom ASIC design service",
    "change": 7.88,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 4380.0,
    "referenceClose": 4060.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "3443.TW",
    "quoteSymbol": "3443.TW",
    "name": "創意",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "GUC ASIC design and implementation",
    "change": 18.39,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 4860.0,
    "referenceClose": 4105.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "2454.TW",
    "quoteSymbol": "2454.TW",
    "name": "聯發科",
    "market": "TW",
    "segment": "asic",
    "sub": "Connectivity SoC",
    "role": "Networking, SerDes and edge AI chip exposure",
    "change": 7.47,
    "tags": [
      "SoC"
    ],
    "priceStatus": "ok",
    "latestClose": 4390.0,
    "referenceClose": 4085.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "5274.TWO",
    "quoteSymbol": "5274.TWO",
    "name": "信驊",
    "market": "TW",
    "segment": "asic",
    "sub": "BMC",
    "role": "Server management silicon",
    "change": 7.73,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 18960.0,
    "referenceClose": 17600.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "688536.SH",
    "quoteSymbol": "688536.SS",
    "name": "思瑞浦",
    "market": "CN",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Analog and signal-chain ICs",
    "change": 20.55,
    "tags": [
      "analog"
    ],
    "priceStatus": "ok",
    "latestClose": 341.0,
    "referenceClose": 282.8699951171875,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "asic",
    "sub": "Laser driver link",
    "role": "Optical chip supplier with upstream exposure",
    "change": 15.25,
    "tags": [
      "optical chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1673.3599853515625,
    "referenceClose": 1452.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "2330.TW",
    "quoteSymbol": "2330.TW",
    "name": "台積電",
    "market": "TW",
    "segment": "sipic",
    "sub": "Foundry",
    "role": "Advanced-node and packaging platform for CPO ecosystem",
    "change": 7.11,
    "tags": [
      "foundry",
      "CoWoS"
    ],
    "priceStatus": "ok",
    "latestClose": 2410.0,
    "referenceClose": 2250.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "AVGO",
    "quoteSymbol": "AVGO",
    "name": "Broadcom",
    "market": "US",
    "segment": "sipic",
    "sub": "Co-packaged optics",
    "role": "CPO roadmap and switch silicon integration",
    "change": 6.69,
    "tags": [
      "CPO",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 411.3500061035156,
    "referenceClose": 385.57000732421875,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical I/O ecosystem",
    "role": "AI cluster architecture drives optical I/O demand",
    "change": 2.84,
    "tags": [
      "AI",
      "optical I/O"
    ],
    "priceStatus": "ok",
    "latestClose": 210.69000244140625,
    "referenceClose": 204.8699951171875,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical platform",
    "role": "DSP plus silicon photonics partnership ecosystem",
    "change": 10.64,
    "tags": [
      "DSP",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 310.5799865722656,
    "referenceClose": 280.7099914550781,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "sipic",
    "sub": "Silicon photonics",
    "role": "Integrated silicon photonics and foundry capabilities",
    "change": 14.56,
    "tags": [
      "SiPh",
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 133.99000549316406,
    "referenceClose": 116.95999908447266,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Lasers, transceivers and optical engine building blocks",
    "change": 7.15,
    "tags": [
      "laser",
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 389.57000732421875,
    "referenceClose": 363.5799865722656,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Datacom lasers and optical components",
    "change": -4.45,
    "tags": [
      "laser",
      "datacom"
    ],
    "priceStatus": "ok",
    "latestClose": 850.0,
    "referenceClose": 889.5900268554688,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "STM",
    "quoteSymbol": "STM",
    "name": "STMicro",
    "market": "EU",
    "segment": "sipic",
    "sub": "Photonics platform",
    "role": "Photonics and advanced semiconductor platform exposure",
    "change": 0.35,
    "tags": [
      "photonics"
    ],
    "priceStatus": "ok",
    "latestClose": 78.38999938964844,
    "referenceClose": 78.12000274658203,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "GFS",
    "quoteSymbol": "GFS",
    "name": "GlobalFoundries",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Silicon photonics and specialty process platform",
    "change": 6.3,
    "tags": [
      "foundry",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 85.83000183105469,
    "referenceClose": 80.73999786376953,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "TSEM",
    "quoteSymbol": "TSEM",
    "name": "Tower Semiconductor",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Analog, photonics and specialty manufacturing",
    "change": 10.99,
    "tags": [
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 286.739990234375,
    "referenceClose": 258.3399963378906,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "sipic",
    "sub": "Optical systems",
    "role": "Photonic service engines and coherent optics",
    "change": -4.26,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 13.489999771118164,
    "referenceClose": 14.09000015258789,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "sipic",
    "sub": "Acacia optics",
    "role": "Coherent modules and optical interconnect roadmap",
    "change": -1.88,
    "tags": [
      "Acacia",
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 119.54000091552734,
    "referenceClose": 121.83000183105469,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "sipic",
    "sub": "Coherent optics",
    "role": "Coherent optical engine and network platforms",
    "change": -3.82,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 428.2200012207031,
    "referenceClose": 445.2200012207031,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "POET",
    "quoteSymbol": "POET",
    "name": "POET Technologies",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical interposer",
    "role": "Optical interposer platform for transceivers",
    "change": 8.0,
    "tags": [
      "interposer"
    ],
    "priceStatus": "ok",
    "latestClose": 12.149999618530273,
    "referenceClose": 11.25,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "LWLG",
    "quoteSymbol": "LWLG",
    "name": "Lightwave Logic",
    "market": "US",
    "segment": "sipic",
    "sub": "EO polymer",
    "role": "Electro-optic polymer material platform",
    "change": -2.59,
    "tags": [
      "material"
    ],
    "priceStatus": "ok",
    "latestClose": 9.779999732971191,
    "referenceClose": 10.039999961853027,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "4966.TWO",
    "quoteSymbol": "4966.TWO",
    "name": "譜瑞-KY",
    "market": "TW",
    "segment": "sipic",
    "sub": "High-speed interface",
    "role": "High-speed interface ICs and data transmission",
    "change": 5.48,
    "tags": [
      "interface"
    ],
    "priceStatus": "ok",
    "latestClose": 693.0,
    "referenceClose": 657.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "6789.TW",
    "quoteSymbol": "6789.TW",
    "name": "采鈺",
    "market": "TW",
    "segment": "sipic",
    "sub": "Optical process",
    "role": "Optical semiconductor process and sensor platform",
    "change": 19.34,
    "tags": [
      "process"
    ],
    "priceStatus": "ok",
    "latestClose": 543.0,
    "referenceClose": 455.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "688313.SH",
    "quoteSymbol": "688313.SS",
    "name": "仕佳光子",
    "market": "CN",
    "segment": "sipic",
    "sub": "PLC / optical chip",
    "role": "PLC splitter, AWG and optical chip supplier",
    "change": 15.8,
    "tags": [
      "PLC",
      "chip"
    ],
    "priceStatus": "ok",
    "latestClose": 175.44000244140625,
    "referenceClose": 151.5,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "laser",
    "sub": "Laser / InP",
    "role": "InP lasers, VCSELs, coherent and datacom components",
    "change": 7.15,
    "tags": [
      "InP",
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 389.57000732421875,
    "referenceClose": 363.5799865722656,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "laser",
    "sub": "Datacom laser",
    "role": "EML, DFB and high-speed datacom laser supply",
    "change": -4.45,
    "tags": [
      "EML",
      "DFB"
    ],
    "priceStatus": "ok",
    "latestClose": 850.0,
    "referenceClose": 889.5900268554688,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "laser",
    "sub": "Laser driver / TIA",
    "role": "Laser drivers, TIAs and analog front-end",
    "change": 4.44,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 391.4100036621094,
    "referenceClose": 374.760009765625,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "IPGP",
    "quoteSymbol": "IPGP",
    "name": "IPG Photonics",
    "market": "US",
    "segment": "laser",
    "sub": "Fiber laser",
    "role": "Laser technology and optical components",
    "change": 6.13,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 118.01000213623047,
    "referenceClose": 111.19000244140625,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "AXTI",
    "quoteSymbol": "AXTI",
    "name": "AXT",
    "market": "US",
    "segment": "laser",
    "sub": "Substrate",
    "role": "Compound semiconductor substrates",
    "change": -4.27,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 84.56999969482422,
    "referenceClose": 88.33999633789062,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "IQE.L",
    "quoteSymbol": "IQE.L",
    "name": "IQE",
    "market": "EU",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "Compound semiconductor epitaxy wafers",
    "change": 9.84,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 50.79999923706055,
    "referenceClose": 46.25,
    "priceDate": "2026-06-19",
    "referenceDate": "2026-06-12"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Compound semiconductor and optical components",
    "change": 22.93,
    "tags": [
      "InP",
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 13485.0,
    "referenceClose": 10970.0,
    "priceDate": "2026-06-19",
    "referenceDate": "2026-06-12"
  },
  {
    "ticker": "6503.T",
    "quoteSymbol": "6503.T",
    "name": "三菱電機",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Optical devices, lasers and industrial electronics",
    "change": 9.13,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 6051.0,
    "referenceClose": 5545.0,
    "priceDate": "2026-06-19",
    "referenceDate": "2026-06-12"
  },
  {
    "ticker": "6965.T",
    "quoteSymbol": "6965.T",
    "name": "浜松光子",
    "market": "JP",
    "segment": "laser",
    "sub": "Photonics",
    "role": "Photodetectors, optoelectronics and photonics devices",
    "change": 12.1,
    "tags": [
      "detector"
    ],
    "priceStatus": "ok",
    "latestClose": 2797.5,
    "referenceClose": 2495.5,
    "priceDate": "2026-06-19",
    "referenceDate": "2026-06-12"
  },
  {
    "ticker": "AMS.SW",
    "quoteSymbol": "AMS.SW",
    "name": "ams OSRAM",
    "market": "EU",
    "segment": "laser",
    "sub": "Emitter",
    "role": "Emitters, sensors and photonics devices",
    "change": 3.54,
    "tags": [
      "emitter"
    ],
    "priceStatus": "ok",
    "latestClose": 19.0,
    "referenceClose": 18.350000381469727,
    "priceDate": "2026-06-19",
    "referenceDate": "2026-06-12"
  },
  {
    "ticker": "3105.TWO",
    "quoteSymbol": "3105.TWO",
    "name": "穩懋",
    "market": "TW",
    "segment": "laser",
    "sub": "GaAs foundry",
    "role": "GaAs foundry with photonics-adjacent capabilities",
    "change": 9.66,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 528.0,
    "referenceClose": 481.5,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "3081.TWO",
    "quoteSymbol": "3081.TWO",
    "name": "聯亞",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "III-V epitaxy wafers for optical communications",
    "change": 12.7,
    "tags": [
      "epi",
      "III-V"
    ],
    "priceStatus": "ok",
    "latestClose": 2440.0,
    "referenceClose": 2165.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "2455.TW",
    "quoteSymbol": "2455.TW",
    "name": "全新",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "GaAs/InP epitaxy and compound semiconductor materials",
    "change": 30.0,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 416.0,
    "referenceClose": 320.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "8086.TWO",
    "quoteSymbol": "8086.TWO",
    "name": "宏捷科",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "GaAs foundry and compound semiconductor devices",
    "change": 14.09,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 166.0,
    "referenceClose": 145.5,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "4991.TWO",
    "quoteSymbol": "4991.TWO",
    "name": "環宇-KY",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "Compound semiconductor and optical device exposure",
    "change": 6.79,
    "tags": [
      "compound"
    ],
    "priceStatus": "ok",
    "latestClose": 566.0,
    "referenceClose": 530.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "laser",
    "sub": "Optical component",
    "role": "Optical communication components and modules",
    "change": 19.87,
    "tags": [
      "optical"
    ],
    "priceStatus": "ok",
    "latestClose": 567.0,
    "referenceClose": 473.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser chip",
    "role": "Optical communication laser chips",
    "change": 15.25,
    "tags": [
      "laser chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1673.3599853515625,
    "referenceClose": 1452.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser / module",
    "role": "Laser equipment and optical communication products",
    "change": 17.97,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 177.5500030517578,
    "referenceClose": 150.5,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "APH",
    "quoteSymbol": "APH",
    "name": "Amphenol",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "High-speed interconnect and optical connector ecosystem",
    "change": 7.54,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 163.9600067138672,
    "referenceClose": 152.4600067138672,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "GLW",
    "quoteSymbol": "GLW",
    "name": "Corning",
    "market": "US",
    "segment": "component",
    "sub": "Fiber / glass",
    "role": "Optical fiber, glass and datacenter cabling",
    "change": 10.4,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 194.9199981689453,
    "referenceClose": 176.5500030517578,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "TEL",
    "quoteSymbol": "TEL",
    "name": "TE Connectivity",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "Connectors, cable assemblies and sensors",
    "change": 4.77,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 217.63999938964844,
    "referenceClose": 207.74000549316406,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers, modulators and optical subassemblies",
    "change": 7.15,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 389.57000732421875,
    "referenceClose": 363.5799865722656,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers and optical communication components",
    "change": -4.45,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 850.0,
    "referenceClose": 889.5900268554688,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "component",
    "sub": "Manufacturing",
    "role": "Precision optical manufacturing and assembly",
    "change": -1.46,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 573.760009765625,
    "referenceClose": 582.239990234375,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "3711.TW",
    "quoteSymbol": "3711.TW",
    "name": "日月光投控",
    "market": "TW",
    "segment": "component",
    "sub": "Advanced packaging",
    "role": "Semiconductor packaging and system-in-package",
    "change": 12.68,
    "tags": [
      "packaging"
    ],
    "priceStatus": "ok",
    "latestClose": 613.0,
    "referenceClose": 544.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "2449.TW",
    "quoteSymbol": "2449.TW",
    "name": "京元電",
    "market": "TW",
    "segment": "component",
    "sub": "Test",
    "role": "IC testing services for high-speed chips",
    "change": 13.42,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 308.5,
    "referenceClose": 272.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "6515.TW",
    "quoteSymbol": "6515.TW",
    "name": "穎崴",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card / socket",
    "role": "High-speed test interface and sockets",
    "change": 8.37,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 9450.0,
    "referenceClose": 8720.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "6223.TWO",
    "quoteSymbol": "6223.TWO",
    "name": "旺矽",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card",
    "role": "Probe cards and testing interface",
    "change": 5.34,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 6415.0,
    "referenceClose": 6090.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "3037.TW",
    "quoteSymbol": "3037.TW",
    "name": "欣興",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and advanced PCB",
    "change": 13.35,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 968.0,
    "referenceClose": 854.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "3189.TW",
    "quoteSymbol": "3189.TW",
    "name": "景碩",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate supplier",
    "change": 16.96,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 724.0,
    "referenceClose": 619.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "8046.TW",
    "quoteSymbol": "8046.TW",
    "name": "南電",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and PCB",
    "change": 8.3,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 874.0,
    "referenceClose": 807.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "2383.TW",
    "quoteSymbol": "2383.TW",
    "name": "台光電",
    "market": "TW",
    "segment": "component",
    "sub": "Copper clad laminate",
    "role": "High-speed CCL for AI servers and switches",
    "change": 9.91,
    "tags": [
      "CCL"
    ],
    "priceStatus": "ok",
    "latestClose": 5600.0,
    "referenceClose": 5095.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "component",
    "sub": "Connector / RF",
    "role": "Connectors and optical communication components",
    "change": 6.87,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 1945.0,
    "referenceClose": 1820.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "3363.TWO",
    "quoteSymbol": "3363.TWO",
    "name": "上詮",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber optic components and passive devices",
    "change": -2.2,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 712.0,
    "referenceClose": 728.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "component",
    "sub": "Optical subassembly",
    "role": "Optical communication subassemblies and packaging",
    "change": 24.86,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 565.0,
    "referenceClose": 452.5,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "6451.TW",
    "quoteSymbol": "6451.TW",
    "name": "訊芯-KY",
    "market": "TW",
    "segment": "component",
    "sub": "SiP / optical packaging",
    "role": "System-in-package and optical communication assembly",
    "change": 12.31,
    "tags": [
      "SiP"
    ],
    "priceStatus": "ok",
    "latestClose": 561.0,
    "referenceClose": 499.5,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber arrays, splitters and optical passive components",
    "change": 5.93,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 893.0,
    "referenceClose": 843.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical communication component supplier",
    "change": 3.05,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 97.9000015258789,
    "referenceClose": 95.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive components and precision parts",
    "change": 14.3,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 336.6000061035156,
    "referenceClose": 294.5,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "300548.SZ",
    "quoteSymbol": "300548.SZ",
    "name": "博創科技",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive and active components",
    "change": 25.33,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 281.989990234375,
    "referenceClose": 225.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "601869.SH",
    "quoteSymbol": "601869.SS",
    "name": "長飛光纖",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber",
    "role": "Optical fiber and cable",
    "change": 6.56,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 471.54998779296875,
    "referenceClose": 442.510009765625,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "600487.SH",
    "quoteSymbol": "600487.SS",
    "name": "亨通光電",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber cable and optical network products",
    "change": 8.41,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 111.01000213623047,
    "referenceClose": 102.4000015258789,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "5801.T",
    "quoteSymbol": "5801.T",
    "name": "古河電工",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Optical fiber, cable and network materials",
    "change": 26.78,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 53360.0,
    "referenceClose": 42090.0,
    "priceDate": "2026-06-19",
    "referenceDate": "2026-06-12"
  },
  {
    "ticker": "5803.T",
    "quoteSymbol": "5803.T",
    "name": "藤倉",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber, cable and optical interconnect products",
    "change": 21.26,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 5161.0,
    "referenceClose": 4256.0,
    "priceDate": "2026-06-19",
    "referenceDate": "2026-06-12"
  },
  {
    "ticker": "4062.T",
    "quoteSymbol": "4062.T",
    "name": "Ibiden",
    "market": "JP",
    "segment": "component",
    "sub": "Substrate",
    "role": "Advanced IC substrates",
    "change": 28.55,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 24560.0,
    "referenceClose": 19105.0,
    "priceDate": "2026-06-19",
    "referenceDate": "2026-06-12"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom and telecom optical transceivers",
    "change": 7.15,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 389.57000732421875,
    "referenceClose": 363.5799865722656,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "module",
    "sub": "Laser / module",
    "role": "Laser engines and optical module supply",
    "change": -4.45,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 850.0,
    "referenceClose": 889.5900268554688,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "module",
    "sub": "Optical manufacturing",
    "role": "Optical module contract manufacturing",
    "change": -1.46,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 573.760009765625,
    "referenceClose": 582.239990234375,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "module",
    "sub": "Coherent module",
    "role": "Coherent optical modules and transport platforms",
    "change": -3.82,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 428.2200012207031,
    "referenceClose": 445.2200012207031,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "module",
    "sub": "Acacia module",
    "role": "Acacia coherent optics and pluggable modules",
    "change": -1.88,
    "tags": [
      "Acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 119.54000091552734,
    "referenceClose": 121.83000183105469,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "module",
    "sub": "Optical module",
    "role": "Coherent optics and network system modules",
    "change": -4.26,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 13.489999771118164,
    "referenceClose": 14.09000015258789,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical communication modules and components",
    "change": 19.87,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 567.0,
    "referenceClose": 473.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "4977.TW",
    "quoteSymbol": "4977.TW",
    "name": "眾達-KY",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical transceiver supplier",
    "change": 6.34,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 184.5,
    "referenceClose": 173.5,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver component",
    "role": "Optical communication and connector products",
    "change": 6.87,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1945.0,
    "referenceClose": 1820.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "module",
    "sub": "OSA",
    "role": "Optical subassemblies for transceivers",
    "change": 24.86,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 565.0,
    "referenceClose": 452.5,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "module",
    "sub": "Passive optical",
    "role": "Fiber components used in modules",
    "change": 5.93,
    "tags": [
      "passive"
    ],
    "priceStatus": "ok",
    "latestClose": 893.0,
    "referenceClose": 843.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module exposure",
    "change": 3.05,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 97.9000015258789,
    "referenceClose": 95.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "4908.TWO",
    "quoteSymbol": "4908.TWO",
    "name": "前鼎",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module and equipment",
    "change": 10.13,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 212.0,
    "referenceClose": 192.5,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "300308.SZ",
    "quoteSymbol": "300308.SZ",
    "name": "中際旭創",
    "market": "CN",
    "segment": "module",
    "sub": "800G / 1.6T",
    "role": "High-speed optical transceiver leader",
    "change": 21.7,
    "tags": [
      "800G",
      "1.6T"
    ],
    "priceStatus": "ok",
    "latestClose": 1367.8800048828125,
    "referenceClose": 1124.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "300502.SZ",
    "quoteSymbol": "300502.SZ",
    "name": "新易盛",
    "market": "CN",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom optical transceivers",
    "change": 10.55,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 581.47998046875,
    "referenceClose": 526.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "002281.SZ",
    "quoteSymbol": "002281.SZ",
    "name": "光迅科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical devices and modules",
    "change": 29.6,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 266.20001220703125,
    "referenceClose": 205.39999389648438,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "603083.SH",
    "quoteSymbol": "603083.SS",
    "name": "劍橋科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical modules and broadband equipment",
    "change": 25.4,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 214.5399932861328,
    "referenceClose": 171.0800018310547,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical engine parts",
    "role": "High-speed module precision components",
    "change": 14.3,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 336.6000061035156,
    "referenceClose": 294.5,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "688205.SH",
    "quoteSymbol": "688205.SS",
    "name": "德科立",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical transceiver modules",
    "change": 6.78,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 252.39999389648438,
    "referenceClose": 236.3699951171875,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication and laser products",
    "change": 17.97,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 177.5500030517578,
    "referenceClose": 150.5,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical network",
    "role": "Optical network systems and modules",
    "change": 23.48,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 75.30999755859375,
    "referenceClose": 60.9900016784668,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "module",
    "sub": "Optical device",
    "role": "Optical components and communication devices",
    "change": 22.93,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 13485.0,
    "referenceClose": 10970.0,
    "priceDate": "2026-06-19",
    "referenceDate": "2026-06-12"
  },
  {
    "ticker": "ANET",
    "quoteSymbol": "ANET",
    "name": "Arista Networks",
    "market": "US",
    "segment": "system",
    "sub": "AI switch",
    "role": "AI datacenter Ethernet switches",
    "change": 8.48,
    "tags": [
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 169.6699981689453,
    "referenceClose": 156.39999389648438,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "system",
    "sub": "Switch / router",
    "role": "Enterprise and cloud networking systems",
    "change": -1.88,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 119.54000091552734,
    "referenceClose": 121.83000183105469,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "HPE",
    "quoteSymbol": "HPE",
    "name": "HPE",
    "market": "US",
    "segment": "system",
    "sub": "Server / networking",
    "role": "AI servers, networking and cloud infrastructure",
    "change": 1.3,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 47.40999984741211,
    "referenceClose": 46.79999923706055,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "DELL",
    "quoteSymbol": "DELL",
    "name": "Dell",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and enterprise infrastructure",
    "change": 4.61,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 409.5,
    "referenceClose": 391.45001220703125,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "SMCI",
    "quoteSymbol": "SMCI",
    "name": "Supermicro",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server platforms and rack-scale systems",
    "change": -4.1,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 30.65999984741211,
    "referenceClose": 31.969999313354492,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "CLS",
    "quoteSymbol": "CLS",
    "name": "Celestica",
    "market": "US",
    "segment": "system",
    "sub": "ODM / EMS",
    "role": "Cloud hardware and networking manufacturing",
    "change": -3.45,
    "tags": [
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 372.54998779296875,
    "referenceClose": 385.8599853515625,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "JBL",
    "quoteSymbol": "JBL",
    "name": "Jabil",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing for networking systems",
    "change": -1.33,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 371.8800048828125,
    "referenceClose": 376.8900146484375,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "FLEX",
    "quoteSymbol": "FLEX",
    "name": "Flex",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing and cloud hardware",
    "change": -2.88,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 147.61000061035156,
    "referenceClose": 151.99000549316406,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "2345.TW",
    "quoteSymbol": "2345.TW",
    "name": "智邦",
    "market": "TW",
    "segment": "system",
    "sub": "Switch ODM",
    "role": "White-box switch and cloud networking ODM",
    "change": 7.03,
    "tags": [
      "switch",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 2435.0,
    "referenceClose": 2275.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "2382.TW",
    "quoteSymbol": "2382.TW",
    "name": "廣達",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and cloud infrastructure ODM",
    "change": 1.62,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 376.0,
    "referenceClose": 370.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "6669.TW",
    "quoteSymbol": "6669.TW",
    "name": "緯穎",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "Cloud datacenter server ODM",
    "change": 4.69,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 1710.0,
    "referenceClose": 1633.3333740234375,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "2317.TW",
    "quoteSymbol": "2317.TW",
    "name": "鴻海",
    "market": "TW",
    "segment": "system",
    "sub": "EMS / server",
    "role": "AI server and system assembly",
    "change": 3.87,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 268.5,
    "referenceClose": 258.5,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "2308.TW",
    "quoteSymbol": "2308.TW",
    "name": "台達電",
    "market": "TW",
    "segment": "system",
    "sub": "Power / thermal",
    "role": "Power, thermal and datacenter infrastructure",
    "change": -0.46,
    "tags": [
      "power",
      "thermal"
    ],
    "priceStatus": "ok",
    "latestClose": 2150.0,
    "referenceClose": 2160.0,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "3706.TW",
    "quoteSymbol": "3706.TW",
    "name": "神達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and datacenter system integration",
    "change": 0.46,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 86.9000015258789,
    "referenceClose": 86.5,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "3231.TW",
    "quoteSymbol": "3231.TW",
    "name": "緯創",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and system integration",
    "change": 5.9,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 161.5,
    "referenceClose": 152.5,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "2356.TW",
    "quoteSymbol": "2356.TW",
    "name": "英業達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and cloud equipment manufacturing",
    "change": 3.52,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 67.69999694824219,
    "referenceClose": 65.4000015258789,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "3380.TW",
    "quoteSymbol": "3380.TW",
    "name": "明泰",
    "market": "TW",
    "segment": "system",
    "sub": "Networking",
    "role": "Networking products and broadband equipment",
    "change": 2.34,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 34.95000076293945,
    "referenceClose": 34.150001525878906,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "6285.TW",
    "quoteSymbol": "6285.TW",
    "name": "啟碁",
    "market": "TW",
    "segment": "system",
    "sub": "Network device",
    "role": "Wireless and networking equipment",
    "change": 0.55,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 274.0,
    "referenceClose": 272.5,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "system",
    "sub": "Optical systems",
    "role": "Optical communication and laser systems",
    "change": 17.97,
    "tags": [
      "system"
    ],
    "priceStatus": "ok",
    "latestClose": 177.5500030517578,
    "referenceClose": 150.5,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "system",
    "sub": "Optical network",
    "role": "Optical transmission and network equipment",
    "change": 23.48,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 75.30999755859375,
    "referenceClose": 60.9900016784668,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "000063.SZ",
    "quoteSymbol": "000063.SZ",
    "name": "中興通訊",
    "market": "CN",
    "segment": "system",
    "sub": "Telecom equipment",
    "role": "Telecom and datacenter network equipment",
    "change": 0.21,
    "tags": [
      "telecom"
    ],
    "priceStatus": "ok",
    "latestClose": 37.88999938964844,
    "referenceClose": 37.810001373291016,
    "priceDate": "2026-06-18",
    "referenceDate": "2026-06-11"
  },
  {
    "ticker": "6701.T",
    "quoteSymbol": "6701.T",
    "name": "NEC",
    "market": "JP",
    "segment": "system",
    "sub": "Network systems",
    "role": "Telecom, submarine and network systems",
    "change": -3.17,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 3756.0,
    "referenceClose": 3879.0,
    "priceDate": "2026-06-19",
    "referenceDate": "2026-06-12"
  },
  {
    "ticker": "6702.T",
    "quoteSymbol": "6702.T",
    "name": "Fujitsu",
    "market": "JP",
    "segment": "system",
    "sub": "ICT systems",
    "role": "ICT infrastructure and network systems",
    "change": -1.5,
    "tags": [
      "ICT"
    ],
    "priceStatus": "ok",
    "latestClose": 3211.0,
    "referenceClose": 3260.0,
    "priceDate": "2026-06-19",
    "referenceDate": "2026-06-12"
  }
];

