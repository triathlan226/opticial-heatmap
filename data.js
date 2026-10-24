window.HEATMAP_META = {
  "title": "光通訊 / CPO 供應鏈熱力圖",
  "subtitle": "六大環節、跨市場上市公司、同公司可重複出現在多個供應鏈位置。",
  "lastUpdated": "2026-10-24",
  "dateRange": "2026-10-16 → 2026-10-23",
  "totalTiles": 126,
  "totalCompanies": 97,
  "quoteSymbolsUpdated": 97,
  "quoteSymbolsFailed": 0,
  "priceStatusCounts": {
    "ok": 126
  },
  "topGainer": {
    "ticker": "600487.SH",
    "name": "亨通光電",
    "change": 14.54
  },
  "topLoser": {
    "ticker": "FLEX",
    "name": "Flex",
    "change": -15.38
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
    "change": -2.15,
    "tags": [
      "ASIC",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 321.67999267578125,
    "referenceClose": 328.75,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "asic",
    "sub": "GPU / Network ASIC",
    "role": "GPU, NVLink, Spectrum-X ecosystem",
    "change": -1.48,
    "tags": [
      "GPU",
      "networking"
    ],
    "priceStatus": "ok",
    "latestClose": 210.9600067138672,
    "referenceClose": 214.1300048828125,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "asic",
    "sub": "DSP / PAM4",
    "role": "Optical DSP, custom silicon, DCI chips",
    "change": 0.3,
    "tags": [
      "DSP",
      "custom silicon"
    ],
    "priceStatus": "ok",
    "latestClose": 228.50999450683594,
    "referenceClose": 227.8300018310547,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "CRDO",
    "quoteSymbol": "CRDO",
    "name": "Credo",
    "market": "US",
    "segment": "asic",
    "sub": "Retimer / DSP",
    "role": "High-speed connectivity and optical DSP",
    "change": -13.21,
    "tags": [
      "DSP",
      "retimer"
    ],
    "priceStatus": "ok",
    "latestClose": 147.2899932861328,
    "referenceClose": 169.6999969482422,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "ALAB",
    "quoteSymbol": "ALAB",
    "name": "Astera Labs",
    "market": "US",
    "segment": "asic",
    "sub": "PCIe / CXL",
    "role": "AI data-center connectivity silicon",
    "change": -10.03,
    "tags": [
      "retimer",
      "CXL"
    ],
    "priceStatus": "ok",
    "latestClose": 257.1600036621094,
    "referenceClose": 285.82000732421875,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Laser drivers, TIAs, high-speed analog",
    "change": -9.91,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 236.24000549316406,
    "referenceClose": 262.239990234375,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "SMTC",
    "quoteSymbol": "SMTC",
    "name": "Semtech",
    "market": "US",
    "segment": "asic",
    "sub": "Signal IC",
    "role": "Signal integrity and optical analog ICs",
    "change": -3.46,
    "tags": [
      "signal"
    ],
    "priceStatus": "ok",
    "latestClose": 132.0,
    "referenceClose": 136.72999572753906,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "asic",
    "sub": "Network silicon",
    "role": "Silicon One and Acacia optical stack",
    "change": -0.83,
    "tags": [
      "switch",
      "acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 106.5,
    "referenceClose": 107.38999938964844,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "asic",
    "sub": "Coherent DSP",
    "role": "WaveLogic coherent DSP and systems",
    "change": -3.75,
    "tags": [
      "coherent",
      "DSP"
    ],
    "priceStatus": "ok",
    "latestClose": 320.260009765625,
    "referenceClose": 332.7300109863281,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "AMD",
    "quoteSymbol": "AMD",
    "name": "AMD",
    "market": "US",
    "segment": "asic",
    "sub": "AI accelerator",
    "role": "AI accelerators and adaptive compute",
    "change": -2.26,
    "tags": [
      "accelerator"
    ],
    "priceStatus": "ok",
    "latestClose": 516.7899780273438,
    "referenceClose": 528.75,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "asic",
    "sub": "Foundry / I/O",
    "role": "Foundry, Ethernet, historical silicon photonics",
    "change": -3.22,
    "tags": [
      "foundry",
      "ethernet"
    ],
    "priceStatus": "ok",
    "latestClose": 86.95999908447266,
    "referenceClose": 89.8499984741211,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "QCOM",
    "quoteSymbol": "QCOM",
    "name": "Qualcomm",
    "market": "US",
    "segment": "asic",
    "sub": "Connectivity IC",
    "role": "High-speed connectivity and edge AI silicon",
    "change": 2.21,
    "tags": [
      "connectivity"
    ],
    "priceStatus": "ok",
    "latestClose": 175.91000366210938,
    "referenceClose": 172.11000061035156,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "3661.TW",
    "quoteSymbol": "3661.TW",
    "name": "世芯-KY",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "Advanced-node custom ASIC design service",
    "change": -5.16,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 3495.0,
    "referenceClose": 3685.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "3443.TW",
    "quoteSymbol": "3443.TW",
    "name": "創意",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "GUC ASIC design and implementation",
    "change": 1.4,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 7585.0,
    "referenceClose": 7480.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "2454.TW",
    "quoteSymbol": "2454.TW",
    "name": "聯發科",
    "market": "TW",
    "segment": "asic",
    "sub": "Connectivity SoC",
    "role": "Networking, SerDes and edge AI chip exposure",
    "change": -5.65,
    "tags": [
      "SoC"
    ],
    "priceStatus": "ok",
    "latestClose": 4010.0,
    "referenceClose": 4250.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "5274.TWO",
    "quoteSymbol": "5274.TWO",
    "name": "信驊",
    "market": "TW",
    "segment": "asic",
    "sub": "BMC",
    "role": "Server management silicon",
    "change": -2.85,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 16010.0,
    "referenceClose": 16480.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "688536.SH",
    "quoteSymbol": "688536.SS",
    "name": "思瑞浦",
    "market": "CN",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Analog and signal-chain ICs",
    "change": -0.95,
    "tags": [
      "analog"
    ],
    "priceStatus": "ok",
    "latestClose": 267.8699951171875,
    "referenceClose": 270.42999267578125,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "asic",
    "sub": "Laser driver link",
    "role": "Optical chip supplier with upstream exposure",
    "change": -10.06,
    "tags": [
      "optical chip"
    ],
    "priceStatus": "ok",
    "latestClose": 925.1500244140625,
    "referenceClose": 1028.5799560546875,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "2330.TW",
    "quoteSymbol": "2330.TW",
    "name": "台積電",
    "market": "TW",
    "segment": "sipic",
    "sub": "Foundry",
    "role": "Advanced-node and packaging platform for CPO ecosystem",
    "change": -1.45,
    "tags": [
      "foundry",
      "CoWoS"
    ],
    "priceStatus": "ok",
    "latestClose": 2385.0,
    "referenceClose": 2420.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "AVGO",
    "quoteSymbol": "AVGO",
    "name": "Broadcom",
    "market": "US",
    "segment": "sipic",
    "sub": "Co-packaged optics",
    "role": "CPO roadmap and switch silicon integration",
    "change": -2.15,
    "tags": [
      "CPO",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 321.67999267578125,
    "referenceClose": 328.75,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical I/O ecosystem",
    "role": "AI cluster architecture drives optical I/O demand",
    "change": -1.48,
    "tags": [
      "AI",
      "optical I/O"
    ],
    "priceStatus": "ok",
    "latestClose": 210.9600067138672,
    "referenceClose": 214.1300048828125,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical platform",
    "role": "DSP plus silicon photonics partnership ecosystem",
    "change": 0.3,
    "tags": [
      "DSP",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 228.50999450683594,
    "referenceClose": 227.8300018310547,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "sipic",
    "sub": "Silicon photonics",
    "role": "Integrated silicon photonics and foundry capabilities",
    "change": -3.22,
    "tags": [
      "SiPh",
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 86.95999908447266,
    "referenceClose": 89.8499984741211,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Lasers, transceivers and optical engine building blocks",
    "change": -10.14,
    "tags": [
      "laser",
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 209.2899932861328,
    "referenceClose": 232.89999389648438,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Datacom lasers and optical components",
    "change": -8.25,
    "tags": [
      "laser",
      "datacom"
    ],
    "priceStatus": "ok",
    "latestClose": 756.1699829101562,
    "referenceClose": 824.1300048828125,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "STM",
    "quoteSymbol": "STM",
    "name": "STMicro",
    "market": "EU",
    "segment": "sipic",
    "sub": "Photonics platform",
    "role": "Photonics and advanced semiconductor platform exposure",
    "change": -3.02,
    "tags": [
      "photonics"
    ],
    "priceStatus": "ok",
    "latestClose": 44.02000045776367,
    "referenceClose": 45.38999938964844,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "GFS",
    "quoteSymbol": "GFS",
    "name": "GlobalFoundries",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Silicon photonics and specialty process platform",
    "change": -4.91,
    "tags": [
      "foundry",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 44.38999938964844,
    "referenceClose": 46.68000030517578,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "TSEM",
    "quoteSymbol": "TSEM",
    "name": "Tower Semiconductor",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Analog, photonics and specialty manufacturing",
    "change": -14.33,
    "tags": [
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 167.55999755859375,
    "referenceClose": 195.5800018310547,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "sipic",
    "sub": "Optical systems",
    "role": "Photonic service engines and coherent optics",
    "change": -10.94,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 8.140000343322754,
    "referenceClose": 9.140000343322754,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "sipic",
    "sub": "Acacia optics",
    "role": "Coherent modules and optical interconnect roadmap",
    "change": -0.83,
    "tags": [
      "Acacia",
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 106.5,
    "referenceClose": 107.38999938964844,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "sipic",
    "sub": "Coherent optics",
    "role": "Coherent optical engine and network platforms",
    "change": -3.75,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 320.260009765625,
    "referenceClose": 332.7300109863281,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "POET",
    "quoteSymbol": "POET",
    "name": "POET Technologies",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical interposer",
    "role": "Optical interposer platform for transceivers",
    "change": 0.55,
    "tags": [
      "interposer"
    ],
    "priceStatus": "ok",
    "latestClose": 5.460000038146973,
    "referenceClose": 5.429999828338623,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "LWLG",
    "quoteSymbol": "LWLG",
    "name": "Lightwave Logic",
    "market": "US",
    "segment": "sipic",
    "sub": "EO polymer",
    "role": "Electro-optic polymer material platform",
    "change": 1.01,
    "tags": [
      "material"
    ],
    "priceStatus": "ok",
    "latestClose": 4.010000228881836,
    "referenceClose": 3.9700000286102295,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "4966.TWO",
    "quoteSymbol": "4966.TWO",
    "name": "譜瑞-KY",
    "market": "TW",
    "segment": "sipic",
    "sub": "High-speed interface",
    "role": "High-speed interface ICs and data transmission",
    "change": -5.19,
    "tags": [
      "interface"
    ],
    "priceStatus": "ok",
    "latestClose": 512.0,
    "referenceClose": 540.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "6789.TW",
    "quoteSymbol": "6789.TW",
    "name": "采鈺",
    "market": "TW",
    "segment": "sipic",
    "sub": "Optical process",
    "role": "Optical semiconductor process and sensor platform",
    "change": 0.0,
    "tags": [
      "process"
    ],
    "priceStatus": "ok",
    "latestClose": 438.0,
    "referenceClose": 438.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "688313.SH",
    "quoteSymbol": "688313.SS",
    "name": "仕佳光子",
    "market": "CN",
    "segment": "sipic",
    "sub": "PLC / optical chip",
    "role": "PLC splitter, AWG and optical chip supplier",
    "change": 1.41,
    "tags": [
      "PLC",
      "chip"
    ],
    "priceStatus": "ok",
    "latestClose": 114.0,
    "referenceClose": 112.41000366210938,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "laser",
    "sub": "Laser / InP",
    "role": "InP lasers, VCSELs, coherent and datacom components",
    "change": -10.14,
    "tags": [
      "InP",
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 209.2899932861328,
    "referenceClose": 232.89999389648438,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "laser",
    "sub": "Datacom laser",
    "role": "EML, DFB and high-speed datacom laser supply",
    "change": -8.25,
    "tags": [
      "EML",
      "DFB"
    ],
    "priceStatus": "ok",
    "latestClose": 756.1699829101562,
    "referenceClose": 824.1300048828125,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "laser",
    "sub": "Laser driver / TIA",
    "role": "Laser drivers, TIAs and analog front-end",
    "change": -9.91,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 236.24000549316406,
    "referenceClose": 262.239990234375,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "IPGP",
    "quoteSymbol": "IPGP",
    "name": "IPG Photonics",
    "market": "US",
    "segment": "laser",
    "sub": "Fiber laser",
    "role": "Laser technology and optical components",
    "change": 0.08,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 71.06999969482422,
    "referenceClose": 71.01000213623047,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "AXTI",
    "quoteSymbol": "AXTI",
    "name": "AXT",
    "market": "US",
    "segment": "laser",
    "sub": "Substrate",
    "role": "Compound semiconductor substrates",
    "change": 1.19,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 52.08000183105469,
    "referenceClose": 51.470001220703125,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "IQE.L",
    "quoteSymbol": "IQE.L",
    "name": "IQE",
    "market": "EU",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "Compound semiconductor epitaxy wafers",
    "change": -10.96,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 35.349998474121094,
    "referenceClose": 39.70000076293945,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Compound semiconductor and optical components",
    "change": -13.6,
    "tags": [
      "InP",
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 1832.5,
    "referenceClose": 2121.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "6503.T",
    "quoteSymbol": "6503.T",
    "name": "三菱電機",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Optical devices, lasers and industrial electronics",
    "change": -4.7,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 4770.0,
    "referenceClose": 5005.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "6965.T",
    "quoteSymbol": "6965.T",
    "name": "浜松光子",
    "market": "JP",
    "segment": "laser",
    "sub": "Photonics",
    "role": "Photodetectors, optoelectronics and photonics devices",
    "change": -5.79,
    "tags": [
      "detector"
    ],
    "priceStatus": "ok",
    "latestClose": 2074.0,
    "referenceClose": 2201.5,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "AMS.SW",
    "quoteSymbol": "AMS.SW",
    "name": "ams OSRAM",
    "market": "EU",
    "segment": "laser",
    "sub": "Emitter",
    "role": "Emitters, sensors and photonics devices",
    "change": -0.9,
    "tags": [
      "emitter"
    ],
    "priceStatus": "ok",
    "latestClose": 17.670000076293945,
    "referenceClose": 17.829999923706055,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "3105.TWO",
    "quoteSymbol": "3105.TWO",
    "name": "穩懋",
    "market": "TW",
    "segment": "laser",
    "sub": "GaAs foundry",
    "role": "GaAs foundry with photonics-adjacent capabilities",
    "change": -2.99,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 486.0,
    "referenceClose": 501.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "3081.TWO",
    "quoteSymbol": "3081.TWO",
    "name": "聯亞",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "III-V epitaxy wafers for optical communications",
    "change": -6.68,
    "tags": [
      "epi",
      "III-V"
    ],
    "priceStatus": "ok",
    "latestClose": 2375.0,
    "referenceClose": 2545.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "2455.TW",
    "quoteSymbol": "2455.TW",
    "name": "全新",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "GaAs/InP epitaxy and compound semiconductor materials",
    "change": -5.27,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 467.0,
    "referenceClose": 493.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "8086.TWO",
    "quoteSymbol": "8086.TWO",
    "name": "宏捷科",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "GaAs foundry and compound semiconductor devices",
    "change": -8.02,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 120.5,
    "referenceClose": 131.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "4991.TWO",
    "quoteSymbol": "4991.TWO",
    "name": "環宇-KY",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "Compound semiconductor and optical device exposure",
    "change": -6.32,
    "tags": [
      "compound"
    ],
    "priceStatus": "ok",
    "latestClose": 415.0,
    "referenceClose": 443.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "laser",
    "sub": "Optical component",
    "role": "Optical communication components and modules",
    "change": -13.46,
    "tags": [
      "optical"
    ],
    "priceStatus": "ok",
    "latestClose": 450.0,
    "referenceClose": 520.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser chip",
    "role": "Optical communication laser chips",
    "change": -10.06,
    "tags": [
      "laser chip"
    ],
    "priceStatus": "ok",
    "latestClose": 925.1500244140625,
    "referenceClose": 1028.5799560546875,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser / module",
    "role": "Laser equipment and optical communication products",
    "change": -1.48,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 74.58000183105469,
    "referenceClose": 75.69999694824219,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "APH",
    "quoteSymbol": "APH",
    "name": "Amphenol",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "High-speed interconnect and optical connector ecosystem",
    "change": -6.63,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 74.08999633789062,
    "referenceClose": 79.3499984741211,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "GLW",
    "quoteSymbol": "GLW",
    "name": "Corning",
    "market": "US",
    "segment": "component",
    "sub": "Fiber / glass",
    "role": "Optical fiber, glass and datacenter cabling",
    "change": -6.3,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 123.69000244140625,
    "referenceClose": 132.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "TEL",
    "quoteSymbol": "TEL",
    "name": "TE Connectivity",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "Connectors, cable assemblies and sensors",
    "change": -2.16,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 208.0500030517578,
    "referenceClose": 212.63999938964844,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers, modulators and optical subassemblies",
    "change": -10.14,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 209.2899932861328,
    "referenceClose": 232.89999389648438,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers and optical communication components",
    "change": -8.25,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 756.1699829101562,
    "referenceClose": 824.1300048828125,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "component",
    "sub": "Manufacturing",
    "role": "Precision optical manufacturing and assembly",
    "change": -13.36,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 314.94000244140625,
    "referenceClose": 363.510009765625,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "3711.TW",
    "quoteSymbol": "3711.TW",
    "name": "日月光投控",
    "market": "TW",
    "segment": "component",
    "sub": "Advanced packaging",
    "role": "Semiconductor packaging and system-in-package",
    "change": -2.53,
    "tags": [
      "packaging"
    ],
    "priceStatus": "ok",
    "latestClose": 654.0,
    "referenceClose": 671.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "2449.TW",
    "quoteSymbol": "2449.TW",
    "name": "京元電",
    "market": "TW",
    "segment": "component",
    "sub": "Test",
    "role": "IC testing services for high-speed chips",
    "change": -4.55,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 262.5,
    "referenceClose": 275.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "6515.TW",
    "quoteSymbol": "6515.TW",
    "name": "穎崴",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card / socket",
    "role": "High-speed test interface and sockets",
    "change": -7.07,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 4795.0,
    "referenceClose": 5160.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "6223.TWO",
    "quoteSymbol": "6223.TWO",
    "name": "旺矽",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card",
    "role": "Probe cards and testing interface",
    "change": -6.05,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 4890.0,
    "referenceClose": 5205.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "3037.TW",
    "quoteSymbol": "3037.TW",
    "name": "欣興",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and advanced PCB",
    "change": -0.46,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1085.0,
    "referenceClose": 1090.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "3189.TW",
    "quoteSymbol": "3189.TW",
    "name": "景碩",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate supplier",
    "change": -1.4,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 986.0,
    "referenceClose": 1000.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "8046.TW",
    "quoteSymbol": "8046.TW",
    "name": "南電",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and PCB",
    "change": -6.64,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1265.0,
    "referenceClose": 1355.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "2383.TW",
    "quoteSymbol": "2383.TW",
    "name": "台光電",
    "market": "TW",
    "segment": "component",
    "sub": "Copper clad laminate",
    "role": "High-speed CCL for AI servers and switches",
    "change": -1.84,
    "tags": [
      "CCL"
    ],
    "priceStatus": "ok",
    "latestClose": 5070.0,
    "referenceClose": 5165.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "component",
    "sub": "Connector / RF",
    "role": "Connectors and optical communication components",
    "change": -6.31,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 1410.0,
    "referenceClose": 1505.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "3363.TWO",
    "quoteSymbol": "3363.TWO",
    "name": "上詮",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber optic components and passive devices",
    "change": -4.71,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 506.0,
    "referenceClose": 531.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "component",
    "sub": "Optical subassembly",
    "role": "Optical communication subassemblies and packaging",
    "change": -7.22,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 424.0,
    "referenceClose": 457.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "6451.TW",
    "quoteSymbol": "6451.TW",
    "name": "訊芯-KY",
    "market": "TW",
    "segment": "component",
    "sub": "SiP / optical packaging",
    "role": "System-in-package and optical communication assembly",
    "change": -3.57,
    "tags": [
      "SiP"
    ],
    "priceStatus": "ok",
    "latestClose": 351.0,
    "referenceClose": 364.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber arrays, splitters and optical passive components",
    "change": -6.28,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 552.0,
    "referenceClose": 589.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical communication component supplier",
    "change": -6.75,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 87.0,
    "referenceClose": 93.30000305175781,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive components and precision parts",
    "change": -5.63,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 200.80999755859375,
    "referenceClose": 212.8000030517578,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "300548.SZ",
    "quoteSymbol": "300548.SZ",
    "name": "博創科技",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive and active components",
    "change": -3.02,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 167.86000061035156,
    "referenceClose": 173.08999633789062,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "601869.SH",
    "quoteSymbol": "601869.SS",
    "name": "長飛光纖",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber",
    "role": "Optical fiber and cable",
    "change": -2.64,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 322.75,
    "referenceClose": 331.5,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "600487.SH",
    "quoteSymbol": "600487.SS",
    "name": "亨通光電",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber cable and optical network products",
    "change": 14.54,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 52.31999969482422,
    "referenceClose": 45.68000030517578,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "5801.T",
    "quoteSymbol": "5801.T",
    "name": "古河電工",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Optical fiber, cable and network materials",
    "change": -14.01,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 2894.5,
    "referenceClose": 3366.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "5803.T",
    "quoteSymbol": "5803.T",
    "name": "藤倉",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber, cable and optical interconnect products",
    "change": -10.35,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 4037.0,
    "referenceClose": 4503.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "4062.T",
    "quoteSymbol": "4062.T",
    "name": "Ibiden",
    "market": "JP",
    "segment": "component",
    "sub": "Substrate",
    "role": "Advanced IC substrates",
    "change": -12.82,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 8512.0,
    "referenceClose": 9764.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom and telecom optical transceivers",
    "change": -10.14,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 209.2899932861328,
    "referenceClose": 232.89999389648438,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "module",
    "sub": "Laser / module",
    "role": "Laser engines and optical module supply",
    "change": -8.25,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 756.1699829101562,
    "referenceClose": 824.1300048828125,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "module",
    "sub": "Optical manufacturing",
    "role": "Optical module contract manufacturing",
    "change": -13.36,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 314.94000244140625,
    "referenceClose": 363.510009765625,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "module",
    "sub": "Coherent module",
    "role": "Coherent optical modules and transport platforms",
    "change": -3.75,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 320.260009765625,
    "referenceClose": 332.7300109863281,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "module",
    "sub": "Acacia module",
    "role": "Acacia coherent optics and pluggable modules",
    "change": -0.83,
    "tags": [
      "Acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 106.5,
    "referenceClose": 107.38999938964844,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "module",
    "sub": "Optical module",
    "role": "Coherent optics and network system modules",
    "change": -10.94,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 8.140000343322754,
    "referenceClose": 9.140000343322754,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical communication modules and components",
    "change": -13.46,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 450.0,
    "referenceClose": 520.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "4977.TW",
    "quoteSymbol": "4977.TW",
    "name": "眾達-KY",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical transceiver supplier",
    "change": -10.33,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 165.0,
    "referenceClose": 184.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver component",
    "role": "Optical communication and connector products",
    "change": -6.31,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1410.0,
    "referenceClose": 1505.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "module",
    "sub": "OSA",
    "role": "Optical subassemblies for transceivers",
    "change": -7.22,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 424.0,
    "referenceClose": 457.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "module",
    "sub": "Passive optical",
    "role": "Fiber components used in modules",
    "change": -6.28,
    "tags": [
      "passive"
    ],
    "priceStatus": "ok",
    "latestClose": 552.0,
    "referenceClose": 589.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module exposure",
    "change": -6.75,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 87.0,
    "referenceClose": 93.30000305175781,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "4908.TWO",
    "quoteSymbol": "4908.TWO",
    "name": "前鼎",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module and equipment",
    "change": -7.73,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 197.0,
    "referenceClose": 213.5,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "300308.SZ",
    "quoteSymbol": "300308.SZ",
    "name": "中際旭創",
    "market": "CN",
    "segment": "module",
    "sub": "800G / 1.6T",
    "role": "High-speed optical transceiver leader",
    "change": -8.56,
    "tags": [
      "800G",
      "1.6T"
    ],
    "priceStatus": "ok",
    "latestClose": 612.6300048828125,
    "referenceClose": 670.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "300502.SZ",
    "quoteSymbol": "300502.SZ",
    "name": "新易盛",
    "market": "CN",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom optical transceivers",
    "change": -14.96,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 261.0,
    "referenceClose": 306.9100036621094,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "002281.SZ",
    "quoteSymbol": "002281.SZ",
    "name": "光迅科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical devices and modules",
    "change": -3.83,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 128.6300048828125,
    "referenceClose": 133.75,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "603083.SH",
    "quoteSymbol": "603083.SS",
    "name": "劍橋科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical modules and broadband equipment",
    "change": -6.01,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 158.3800048828125,
    "referenceClose": 168.50999450683594,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical engine parts",
    "role": "High-speed module precision components",
    "change": -5.63,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 200.80999755859375,
    "referenceClose": 212.8000030517578,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "688205.SH",
    "quoteSymbol": "688205.SS",
    "name": "德科立",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical transceiver modules",
    "change": -7.42,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 139.7899932861328,
    "referenceClose": 151.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication and laser products",
    "change": -1.48,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 74.58000183105469,
    "referenceClose": 75.69999694824219,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical network",
    "role": "Optical network systems and modules",
    "change": 2.85,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 30.309999465942383,
    "referenceClose": 29.469999313354492,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "module",
    "sub": "Optical device",
    "role": "Optical components and communication devices",
    "change": -13.6,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1832.5,
    "referenceClose": 2121.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "ANET",
    "quoteSymbol": "ANET",
    "name": "Arista Networks",
    "market": "US",
    "segment": "system",
    "sub": "AI switch",
    "role": "AI datacenter Ethernet switches",
    "change": -2.6,
    "tags": [
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 172.3699951171875,
    "referenceClose": 176.97999572753906,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "system",
    "sub": "Switch / router",
    "role": "Enterprise and cloud networking systems",
    "change": -0.83,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 106.5,
    "referenceClose": 107.38999938964844,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "HPE",
    "quoteSymbol": "HPE",
    "name": "HPE",
    "market": "US",
    "segment": "system",
    "sub": "Server / networking",
    "role": "AI servers, networking and cloud infrastructure",
    "change": 2.83,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 56.689998626708984,
    "referenceClose": 55.130001068115234,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "DELL",
    "quoteSymbol": "DELL",
    "name": "Dell",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and enterprise infrastructure",
    "change": 1.05,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 456.44000244140625,
    "referenceClose": 451.7099914550781,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "SMCI",
    "quoteSymbol": "SMCI",
    "name": "Supermicro",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server platforms and rack-scale systems",
    "change": 4.14,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 32.939998626708984,
    "referenceClose": 31.6299991607666,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "CLS",
    "quoteSymbol": "CLS",
    "name": "Celestica",
    "market": "US",
    "segment": "system",
    "sub": "ODM / EMS",
    "role": "Cloud hardware and networking manufacturing",
    "change": -14.42,
    "tags": [
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 260.010009765625,
    "referenceClose": 303.80999755859375,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "JBL",
    "quoteSymbol": "JBL",
    "name": "Jabil",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing for networking systems",
    "change": -1.54,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 273.9700012207031,
    "referenceClose": 278.25,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "FLEX",
    "quoteSymbol": "FLEX",
    "name": "Flex",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing and cloud hardware",
    "change": -15.38,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 76.55000305175781,
    "referenceClose": 90.45999908447266,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "2345.TW",
    "quoteSymbol": "2345.TW",
    "name": "智邦",
    "market": "TW",
    "segment": "system",
    "sub": "Switch ODM",
    "role": "White-box switch and cloud networking ODM",
    "change": -10.35,
    "tags": [
      "switch",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 1775.0,
    "referenceClose": 1980.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "2382.TW",
    "quoteSymbol": "2382.TW",
    "name": "廣達",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and cloud infrastructure ODM",
    "change": 0.0,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 322.0,
    "referenceClose": 322.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "6669.TW",
    "quoteSymbol": "6669.TW",
    "name": "緯穎",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "Cloud datacenter server ODM",
    "change": -0.27,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 1840.0,
    "referenceClose": 1845.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "2317.TW",
    "quoteSymbol": "2317.TW",
    "name": "鴻海",
    "market": "TW",
    "segment": "system",
    "sub": "EMS / server",
    "role": "AI server and system assembly",
    "change": 0.41,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 245.0,
    "referenceClose": 244.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "2308.TW",
    "quoteSymbol": "2308.TW",
    "name": "台達電",
    "market": "TW",
    "segment": "system",
    "sub": "Power / thermal",
    "role": "Power, thermal and datacenter infrastructure",
    "change": -4.59,
    "tags": [
      "power",
      "thermal"
    ],
    "priceStatus": "ok",
    "latestClose": 1560.0,
    "referenceClose": 1635.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "3706.TW",
    "quoteSymbol": "3706.TW",
    "name": "神達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and datacenter system integration",
    "change": -1.11,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 80.5,
    "referenceClose": 81.4000015258789,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "3231.TW",
    "quoteSymbol": "3231.TW",
    "name": "緯創",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and system integration",
    "change": 4.11,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 190.0,
    "referenceClose": 182.5,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "2356.TW",
    "quoteSymbol": "2356.TW",
    "name": "英業達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and cloud equipment manufacturing",
    "change": 2.54,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 60.5,
    "referenceClose": 59.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "3380.TW",
    "quoteSymbol": "3380.TW",
    "name": "明泰",
    "market": "TW",
    "segment": "system",
    "sub": "Networking",
    "role": "Networking products and broadband equipment",
    "change": 0.78,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 32.400001525878906,
    "referenceClose": 32.150001525878906,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "6285.TW",
    "quoteSymbol": "6285.TW",
    "name": "啟碁",
    "market": "TW",
    "segment": "system",
    "sub": "Network device",
    "role": "Wireless and networking equipment",
    "change": -9.8,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 230.0,
    "referenceClose": 255.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "system",
    "sub": "Optical systems",
    "role": "Optical communication and laser systems",
    "change": -1.48,
    "tags": [
      "system"
    ],
    "priceStatus": "ok",
    "latestClose": 74.58000183105469,
    "referenceClose": 75.69999694824219,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "system",
    "sub": "Optical network",
    "role": "Optical transmission and network equipment",
    "change": 2.85,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 30.309999465942383,
    "referenceClose": 29.469999313354492,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "000063.SZ",
    "quoteSymbol": "000063.SZ",
    "name": "中興通訊",
    "market": "CN",
    "segment": "system",
    "sub": "Telecom equipment",
    "role": "Telecom and datacenter network equipment",
    "change": 3.91,
    "tags": [
      "telecom"
    ],
    "priceStatus": "ok",
    "latestClose": 28.15999984741211,
    "referenceClose": 27.100000381469727,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "6701.T",
    "quoteSymbol": "6701.T",
    "name": "NEC",
    "market": "JP",
    "segment": "system",
    "sub": "Network systems",
    "role": "Telecom, submarine and network systems",
    "change": 0.0,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 5390.0,
    "referenceClose": 5390.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  },
  {
    "ticker": "6702.T",
    "quoteSymbol": "6702.T",
    "name": "Fujitsu",
    "market": "JP",
    "segment": "system",
    "sub": "ICT systems",
    "role": "ICT infrastructure and network systems",
    "change": 1.22,
    "tags": [
      "ICT"
    ],
    "priceStatus": "ok",
    "latestClose": 4477.0,
    "referenceClose": 4423.0,
    "priceDate": "2026-10-23",
    "referenceDate": "2026-10-16"
  }
];

