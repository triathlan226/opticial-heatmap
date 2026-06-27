window.HEATMAP_META = {
  "title": "光通訊 / CPO 供應鏈熱力圖",
  "subtitle": "六大環節、跨市場上市公司、同公司可重複出現在多個供應鏈位置。",
  "lastUpdated": "2026-06-27",
  "dateRange": "2026-06-18 → 2026-06-26",
  "totalTiles": 126,
  "totalCompanies": 97,
  "quoteSymbolsUpdated": 97,
  "quoteSymbolsFailed": 0,
  "priceStatusCounts": {
    "ok": 126
  },
  "topGainer": {
    "ticker": "8046.TW",
    "name": "南電",
    "change": 28.72
  },
  "topLoser": {
    "ticker": "POET",
    "name": "POET Technologies",
    "change": -22.3
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
    "change": -11.26,
    "tags": [
      "ASIC",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 365.0199890136719,
    "referenceClose": 411.3500061035156,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "asic",
    "sub": "GPU / Network ASIC",
    "role": "GPU, NVLink, Spectrum-X ecosystem",
    "change": -8.62,
    "tags": [
      "GPU",
      "networking"
    ],
    "priceStatus": "ok",
    "latestClose": 192.52999877929688,
    "referenceClose": 210.69000244140625,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "asic",
    "sub": "DSP / PAM4",
    "role": "Optical DSP, custom silicon, DCI chips",
    "change": -14.11,
    "tags": [
      "DSP",
      "custom silicon"
    ],
    "priceStatus": "ok",
    "latestClose": 266.7699890136719,
    "referenceClose": 310.5799865722656,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "CRDO",
    "quoteSymbol": "CRDO",
    "name": "Credo",
    "market": "US",
    "segment": "asic",
    "sub": "Retimer / DSP",
    "role": "High-speed connectivity and optical DSP",
    "change": -12.45,
    "tags": [
      "DSP",
      "retimer"
    ],
    "priceStatus": "ok",
    "latestClose": 238.0,
    "referenceClose": 271.8299865722656,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "ALAB",
    "quoteSymbol": "ALAB",
    "name": "Astera Labs",
    "market": "US",
    "segment": "asic",
    "sub": "PCIe / CXL",
    "role": "AI data-center connectivity silicon",
    "change": -6.07,
    "tags": [
      "retimer",
      "CXL"
    ],
    "priceStatus": "ok",
    "latestClose": 391.739990234375,
    "referenceClose": 417.07000732421875,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Laser drivers, TIAs, high-speed analog",
    "change": -5.68,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 369.17999267578125,
    "referenceClose": 391.4100036621094,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "SMTC",
    "quoteSymbol": "SMTC",
    "name": "Semtech",
    "market": "US",
    "segment": "asic",
    "sub": "Signal IC",
    "role": "Signal integrity and optical analog ICs",
    "change": -5.36,
    "tags": [
      "signal"
    ],
    "priceStatus": "ok",
    "latestClose": 149.75,
    "referenceClose": 158.22999572753906,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "asic",
    "sub": "Network silicon",
    "role": "Silicon One and Acacia optical stack",
    "change": -4.83,
    "tags": [
      "switch",
      "acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 113.7699966430664,
    "referenceClose": 119.54000091552734,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "asic",
    "sub": "Coherent DSP",
    "role": "WaveLogic coherent DSP and systems",
    "change": 13.19,
    "tags": [
      "coherent",
      "DSP"
    ],
    "priceStatus": "ok",
    "latestClose": 484.69000244140625,
    "referenceClose": 428.2200012207031,
    "priceDate": "2026-06-25",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "AMD",
    "quoteSymbol": "AMD",
    "name": "AMD",
    "market": "US",
    "segment": "asic",
    "sub": "AI accelerator",
    "role": "AI accelerators and adaptive compute",
    "change": -2.94,
    "tags": [
      "accelerator"
    ],
    "priceStatus": "ok",
    "latestClose": 521.5800170898438,
    "referenceClose": 537.3699951171875,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "asic",
    "sub": "Foundry / I/O",
    "role": "Foundry, Ethernet, historical silicon photonics",
    "change": -4.23,
    "tags": [
      "foundry",
      "ethernet"
    ],
    "priceStatus": "ok",
    "latestClose": 128.32000732421875,
    "referenceClose": 133.99000549316406,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "QCOM",
    "quoteSymbol": "QCOM",
    "name": "Qualcomm",
    "market": "US",
    "segment": "asic",
    "sub": "Connectivity IC",
    "role": "High-speed connectivity and edge AI silicon",
    "change": -16.24,
    "tags": [
      "connectivity"
    ],
    "priceStatus": "ok",
    "latestClose": 189.38999938964844,
    "referenceClose": 226.11000061035156,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "3661.TW",
    "quoteSymbol": "3661.TW",
    "name": "世芯-KY",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "Advanced-node custom ASIC design service",
    "change": -11.64,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 3870.0,
    "referenceClose": 4380.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "3443.TW",
    "quoteSymbol": "3443.TW",
    "name": "創意",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "GUC ASIC design and implementation",
    "change": -9.05,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 4420.0,
    "referenceClose": 4860.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "2454.TW",
    "quoteSymbol": "2454.TW",
    "name": "聯發科",
    "market": "TW",
    "segment": "asic",
    "sub": "Connectivity SoC",
    "role": "Networking, SerDes and edge AI chip exposure",
    "change": -11.62,
    "tags": [
      "SoC"
    ],
    "priceStatus": "ok",
    "latestClose": 3880.0,
    "referenceClose": 4390.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "5274.TWO",
    "quoteSymbol": "5274.TWO",
    "name": "信驊",
    "market": "TW",
    "segment": "asic",
    "sub": "BMC",
    "role": "Server management silicon",
    "change": -17.64,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 15615.0,
    "referenceClose": 18960.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "688536.SH",
    "quoteSymbol": "688536.SS",
    "name": "思瑞浦",
    "market": "CN",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Analog and signal-chain ICs",
    "change": 1.18,
    "tags": [
      "analog"
    ],
    "priceStatus": "ok",
    "latestClose": 345.010009765625,
    "referenceClose": 341.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "asic",
    "sub": "Laser driver link",
    "role": "Optical chip supplier with upstream exposure",
    "change": 6.19,
    "tags": [
      "optical chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1776.9100341796875,
    "referenceClose": 1673.3599853515625,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "2330.TW",
    "quoteSymbol": "2330.TW",
    "name": "台積電",
    "market": "TW",
    "segment": "sipic",
    "sub": "Foundry",
    "role": "Advanced-node and packaging platform for CPO ecosystem",
    "change": -2.9,
    "tags": [
      "foundry",
      "CoWoS"
    ],
    "priceStatus": "ok",
    "latestClose": 2340.0,
    "referenceClose": 2410.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "AVGO",
    "quoteSymbol": "AVGO",
    "name": "Broadcom",
    "market": "US",
    "segment": "sipic",
    "sub": "Co-packaged optics",
    "role": "CPO roadmap and switch silicon integration",
    "change": -11.26,
    "tags": [
      "CPO",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 365.0199890136719,
    "referenceClose": 411.3500061035156,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical I/O ecosystem",
    "role": "AI cluster architecture drives optical I/O demand",
    "change": -8.62,
    "tags": [
      "AI",
      "optical I/O"
    ],
    "priceStatus": "ok",
    "latestClose": 192.52999877929688,
    "referenceClose": 210.69000244140625,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical platform",
    "role": "DSP plus silicon photonics partnership ecosystem",
    "change": -14.11,
    "tags": [
      "DSP",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 266.7699890136719,
    "referenceClose": 310.5799865722656,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "sipic",
    "sub": "Silicon photonics",
    "role": "Integrated silicon photonics and foundry capabilities",
    "change": -4.23,
    "tags": [
      "SiPh",
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 128.32000732421875,
    "referenceClose": 133.99000549316406,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Lasers, transceivers and optical engine building blocks",
    "change": -2.31,
    "tags": [
      "laser",
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 380.55999755859375,
    "referenceClose": 389.57000732421875,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Datacom lasers and optical components",
    "change": -3.88,
    "tags": [
      "laser",
      "datacom"
    ],
    "priceStatus": "ok",
    "latestClose": 816.97998046875,
    "referenceClose": 850.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "STM",
    "quoteSymbol": "STM",
    "name": "STMicro",
    "market": "EU",
    "segment": "sipic",
    "sub": "Photonics platform",
    "role": "Photonics and advanced semiconductor platform exposure",
    "change": -8.89,
    "tags": [
      "photonics"
    ],
    "priceStatus": "ok",
    "latestClose": 71.41999816894531,
    "referenceClose": 78.38999938964844,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "GFS",
    "quoteSymbol": "GFS",
    "name": "GlobalFoundries",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Silicon photonics and specialty process platform",
    "change": -7.05,
    "tags": [
      "foundry",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 79.77999877929688,
    "referenceClose": 85.83000183105469,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "TSEM",
    "quoteSymbol": "TSEM",
    "name": "Tower Semiconductor",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Analog, photonics and specialty manufacturing",
    "change": -12.84,
    "tags": [
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 249.91000366210938,
    "referenceClose": 286.739990234375,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "sipic",
    "sub": "Optical systems",
    "role": "Photonic service engines and coherent optics",
    "change": -3.56,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 13.010000228881836,
    "referenceClose": 13.489999771118164,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "sipic",
    "sub": "Acacia optics",
    "role": "Coherent modules and optical interconnect roadmap",
    "change": -4.83,
    "tags": [
      "Acacia",
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 113.7699966430664,
    "referenceClose": 119.54000091552734,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "sipic",
    "sub": "Coherent optics",
    "role": "Coherent optical engine and network platforms",
    "change": 13.19,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 484.69000244140625,
    "referenceClose": 428.2200012207031,
    "priceDate": "2026-06-25",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "POET",
    "quoteSymbol": "POET",
    "name": "POET Technologies",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical interposer",
    "role": "Optical interposer platform for transceivers",
    "change": -22.3,
    "tags": [
      "interposer"
    ],
    "priceStatus": "ok",
    "latestClose": 9.4399995803833,
    "referenceClose": 12.149999618530273,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "LWLG",
    "quoteSymbol": "LWLG",
    "name": "Lightwave Logic",
    "market": "US",
    "segment": "sipic",
    "sub": "EO polymer",
    "role": "Electro-optic polymer material platform",
    "change": -19.33,
    "tags": [
      "material"
    ],
    "priceStatus": "ok",
    "latestClose": 7.889999866485596,
    "referenceClose": 9.779999732971191,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "4966.TWO",
    "quoteSymbol": "4966.TWO",
    "name": "譜瑞-KY",
    "market": "TW",
    "segment": "sipic",
    "sub": "High-speed interface",
    "role": "High-speed interface ICs and data transmission",
    "change": -12.27,
    "tags": [
      "interface"
    ],
    "priceStatus": "ok",
    "latestClose": 608.0,
    "referenceClose": 693.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "6789.TW",
    "quoteSymbol": "6789.TW",
    "name": "采鈺",
    "market": "TW",
    "segment": "sipic",
    "sub": "Optical process",
    "role": "Optical semiconductor process and sensor platform",
    "change": -9.39,
    "tags": [
      "process"
    ],
    "priceStatus": "ok",
    "latestClose": 492.0,
    "referenceClose": 543.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "688313.SH",
    "quoteSymbol": "688313.SS",
    "name": "仕佳光子",
    "market": "CN",
    "segment": "sipic",
    "sub": "PLC / optical chip",
    "role": "PLC splitter, AWG and optical chip supplier",
    "change": 2.43,
    "tags": [
      "PLC",
      "chip"
    ],
    "priceStatus": "ok",
    "latestClose": 179.6999969482422,
    "referenceClose": 175.44000244140625,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "laser",
    "sub": "Laser / InP",
    "role": "InP lasers, VCSELs, coherent and datacom components",
    "change": -2.31,
    "tags": [
      "InP",
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 380.55999755859375,
    "referenceClose": 389.57000732421875,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "laser",
    "sub": "Datacom laser",
    "role": "EML, DFB and high-speed datacom laser supply",
    "change": -3.88,
    "tags": [
      "EML",
      "DFB"
    ],
    "priceStatus": "ok",
    "latestClose": 816.97998046875,
    "referenceClose": 850.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "laser",
    "sub": "Laser driver / TIA",
    "role": "Laser drivers, TIAs and analog front-end",
    "change": -5.68,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 369.17999267578125,
    "referenceClose": 391.4100036621094,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "IPGP",
    "quoteSymbol": "IPGP",
    "name": "IPG Photonics",
    "market": "US",
    "segment": "laser",
    "sub": "Fiber laser",
    "role": "Laser technology and optical components",
    "change": -9.17,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 107.19000244140625,
    "referenceClose": 118.01000213623047,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "AXTI",
    "quoteSymbol": "AXTI",
    "name": "AXT",
    "market": "US",
    "segment": "laser",
    "sub": "Substrate",
    "role": "Compound semiconductor substrates",
    "change": -17.05,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 70.1500015258789,
    "referenceClose": 84.56999969482422,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "IQE.L",
    "quoteSymbol": "IQE.L",
    "name": "IQE",
    "market": "EU",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "Compound semiconductor epitaxy wafers",
    "change": -7.87,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 46.79999923706055,
    "referenceClose": 50.79999923706055,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-19"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Compound semiconductor and optical components",
    "change": -11.49,
    "tags": [
      "InP",
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 2983.75,
    "referenceClose": 3371.25,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-19"
  },
  {
    "ticker": "6503.T",
    "quoteSymbol": "6503.T",
    "name": "三菱電機",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Optical devices, lasers and industrial electronics",
    "change": -3.19,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 5858.0,
    "referenceClose": 6051.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-19"
  },
  {
    "ticker": "6965.T",
    "quoteSymbol": "6965.T",
    "name": "浜松光子",
    "market": "JP",
    "segment": "laser",
    "sub": "Photonics",
    "role": "Photodetectors, optoelectronics and photonics devices",
    "change": -6.17,
    "tags": [
      "detector"
    ],
    "priceStatus": "ok",
    "latestClose": 2625.0,
    "referenceClose": 2797.5,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-19"
  },
  {
    "ticker": "AMS.SW",
    "quoteSymbol": "AMS.SW",
    "name": "ams OSRAM",
    "market": "EU",
    "segment": "laser",
    "sub": "Emitter",
    "role": "Emitters, sensors and photonics devices",
    "change": -8.37,
    "tags": [
      "emitter"
    ],
    "priceStatus": "ok",
    "latestClose": 17.40999984741211,
    "referenceClose": 19.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-19"
  },
  {
    "ticker": "3105.TWO",
    "quoteSymbol": "3105.TWO",
    "name": "穩懋",
    "market": "TW",
    "segment": "laser",
    "sub": "GaAs foundry",
    "role": "GaAs foundry with photonics-adjacent capabilities",
    "change": -19.7,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 424.0,
    "referenceClose": 528.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "3081.TWO",
    "quoteSymbol": "3081.TWO",
    "name": "聯亞",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "III-V epitaxy wafers for optical communications",
    "change": -16.6,
    "tags": [
      "epi",
      "III-V"
    ],
    "priceStatus": "ok",
    "latestClose": 2035.0,
    "referenceClose": 2440.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "2455.TW",
    "quoteSymbol": "2455.TW",
    "name": "全新",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "GaAs/InP epitaxy and compound semiconductor materials",
    "change": -16.35,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 348.0,
    "referenceClose": 416.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "8086.TWO",
    "quoteSymbol": "8086.TWO",
    "name": "宏捷科",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "GaAs foundry and compound semiconductor devices",
    "change": -15.06,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 141.0,
    "referenceClose": 166.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "4991.TWO",
    "quoteSymbol": "4991.TWO",
    "name": "環宇-KY",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "Compound semiconductor and optical device exposure",
    "change": -10.42,
    "tags": [
      "compound"
    ],
    "priceStatus": "ok",
    "latestClose": 507.0,
    "referenceClose": 566.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "laser",
    "sub": "Optical component",
    "role": "Optical communication components and modules",
    "change": -19.05,
    "tags": [
      "optical"
    ],
    "priceStatus": "ok",
    "latestClose": 459.0,
    "referenceClose": 567.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser chip",
    "role": "Optical communication laser chips",
    "change": 6.19,
    "tags": [
      "laser chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1776.9100341796875,
    "referenceClose": 1673.3599853515625,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser / module",
    "role": "Laser equipment and optical communication products",
    "change": -9.36,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 160.94000244140625,
    "referenceClose": 177.5500030517578,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "APH",
    "quoteSymbol": "APH",
    "name": "Amphenol",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "High-speed interconnect and optical connector ecosystem",
    "change": -0.15,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 163.72000122070312,
    "referenceClose": 163.9600067138672,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "GLW",
    "quoteSymbol": "GLW",
    "name": "Corning",
    "market": "US",
    "segment": "component",
    "sub": "Fiber / glass",
    "role": "Optical fiber, glass and datacenter cabling",
    "change": 13.41,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 221.0500030517578,
    "referenceClose": 194.9199981689453,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "TEL",
    "quoteSymbol": "TEL",
    "name": "TE Connectivity",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "Connectors, cable assemblies and sensors",
    "change": -9.14,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 197.74000549316406,
    "referenceClose": 217.63999938964844,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers, modulators and optical subassemblies",
    "change": -2.31,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 380.55999755859375,
    "referenceClose": 389.57000732421875,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers and optical communication components",
    "change": -3.88,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 816.97998046875,
    "referenceClose": 850.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "component",
    "sub": "Manufacturing",
    "role": "Precision optical manufacturing and assembly",
    "change": -8.53,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 524.7899780273438,
    "referenceClose": 573.760009765625,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "3711.TW",
    "quoteSymbol": "3711.TW",
    "name": "日月光投控",
    "market": "TW",
    "segment": "component",
    "sub": "Advanced packaging",
    "role": "Semiconductor packaging and system-in-package",
    "change": 3.1,
    "tags": [
      "packaging"
    ],
    "priceStatus": "ok",
    "latestClose": 632.0,
    "referenceClose": 613.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "2449.TW",
    "quoteSymbol": "2449.TW",
    "name": "京元電",
    "market": "TW",
    "segment": "component",
    "sub": "Test",
    "role": "IC testing services for high-speed chips",
    "change": -0.16,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 308.0,
    "referenceClose": 308.5,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "6515.TW",
    "quoteSymbol": "6515.TW",
    "name": "穎崴",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card / socket",
    "role": "High-speed test interface and sockets",
    "change": -13.33,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 8190.0,
    "referenceClose": 9450.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "6223.TWO",
    "quoteSymbol": "6223.TWO",
    "name": "旺矽",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card",
    "role": "Probe cards and testing interface",
    "change": 1.32,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 6500.0,
    "referenceClose": 6415.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "3037.TW",
    "quoteSymbol": "3037.TW",
    "name": "欣興",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and advanced PCB",
    "change": 0.72,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 975.0,
    "referenceClose": 968.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "3189.TW",
    "quoteSymbol": "3189.TW",
    "name": "景碩",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate supplier",
    "change": 10.08,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 797.0,
    "referenceClose": 724.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "8046.TW",
    "quoteSymbol": "8046.TW",
    "name": "南電",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and PCB",
    "change": 28.72,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1125.0,
    "referenceClose": 874.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "2383.TW",
    "quoteSymbol": "2383.TW",
    "name": "台光電",
    "market": "TW",
    "segment": "component",
    "sub": "Copper clad laminate",
    "role": "High-speed CCL for AI servers and switches",
    "change": -6.16,
    "tags": [
      "CCL"
    ],
    "priceStatus": "ok",
    "latestClose": 5255.0,
    "referenceClose": 5600.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "component",
    "sub": "Connector / RF",
    "role": "Connectors and optical communication components",
    "change": -13.62,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 1680.0,
    "referenceClose": 1945.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "3363.TWO",
    "quoteSymbol": "3363.TWO",
    "name": "上詮",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber optic components and passive devices",
    "change": -19.24,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 575.0,
    "referenceClose": 712.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "component",
    "sub": "Optical subassembly",
    "role": "Optical communication subassemblies and packaging",
    "change": -6.19,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 530.0,
    "referenceClose": 565.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "6451.TW",
    "quoteSymbol": "6451.TW",
    "name": "訊芯-KY",
    "market": "TW",
    "segment": "component",
    "sub": "SiP / optical packaging",
    "role": "System-in-package and optical communication assembly",
    "change": 6.6,
    "tags": [
      "SiP"
    ],
    "priceStatus": "ok",
    "latestClose": 598.0,
    "referenceClose": 561.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber arrays, splitters and optical passive components",
    "change": -19.37,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 720.0,
    "referenceClose": 893.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical communication component supplier",
    "change": -13.59,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 84.5999984741211,
    "referenceClose": 97.9000015258789,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive components and precision parts",
    "change": -5.53,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 318.0,
    "referenceClose": 336.6000061035156,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "300548.SZ",
    "quoteSymbol": "300548.SZ",
    "name": "博創科技",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive and active components",
    "change": -6.86,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 262.6499938964844,
    "referenceClose": 281.989990234375,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "601869.SH",
    "quoteSymbol": "601869.SS",
    "name": "長飛光纖",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber",
    "role": "Optical fiber and cable",
    "change": 15.15,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 543.0,
    "referenceClose": 471.54998779296875,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "600487.SH",
    "quoteSymbol": "600487.SS",
    "name": "亨通光電",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber cable and optical network products",
    "change": -0.18,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 110.80999755859375,
    "referenceClose": 111.01000213623047,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "5801.T",
    "quoteSymbol": "5801.T",
    "name": "古河電工",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Optical fiber, cable and network materials",
    "change": -15.14,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 4528.0,
    "referenceClose": 5336.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-19"
  },
  {
    "ticker": "5803.T",
    "quoteSymbol": "5803.T",
    "name": "藤倉",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber, cable and optical interconnect products",
    "change": 18.79,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 6131.0,
    "referenceClose": 5161.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-19"
  },
  {
    "ticker": "4062.T",
    "quoteSymbol": "4062.T",
    "name": "Ibiden",
    "market": "JP",
    "segment": "component",
    "sub": "Substrate",
    "role": "Advanced IC substrates",
    "change": -2.28,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 24000.0,
    "referenceClose": 24560.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-19"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom and telecom optical transceivers",
    "change": -2.31,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 380.55999755859375,
    "referenceClose": 389.57000732421875,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "module",
    "sub": "Laser / module",
    "role": "Laser engines and optical module supply",
    "change": -3.88,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 816.97998046875,
    "referenceClose": 850.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "module",
    "sub": "Optical manufacturing",
    "role": "Optical module contract manufacturing",
    "change": -8.53,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 524.7899780273438,
    "referenceClose": 573.760009765625,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "module",
    "sub": "Coherent module",
    "role": "Coherent optical modules and transport platforms",
    "change": 13.19,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 484.69000244140625,
    "referenceClose": 428.2200012207031,
    "priceDate": "2026-06-25",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "module",
    "sub": "Acacia module",
    "role": "Acacia coherent optics and pluggable modules",
    "change": -4.83,
    "tags": [
      "Acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 113.7699966430664,
    "referenceClose": 119.54000091552734,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "module",
    "sub": "Optical module",
    "role": "Coherent optics and network system modules",
    "change": -3.56,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 13.010000228881836,
    "referenceClose": 13.489999771118164,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical communication modules and components",
    "change": -19.05,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 459.0,
    "referenceClose": 567.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "4977.TW",
    "quoteSymbol": "4977.TW",
    "name": "眾達-KY",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical transceiver supplier",
    "change": -10.84,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 164.5,
    "referenceClose": 184.5,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver component",
    "role": "Optical communication and connector products",
    "change": -13.62,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1680.0,
    "referenceClose": 1945.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "module",
    "sub": "OSA",
    "role": "Optical subassemblies for transceivers",
    "change": -6.19,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 530.0,
    "referenceClose": 565.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "module",
    "sub": "Passive optical",
    "role": "Fiber components used in modules",
    "change": -19.37,
    "tags": [
      "passive"
    ],
    "priceStatus": "ok",
    "latestClose": 720.0,
    "referenceClose": 893.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module exposure",
    "change": -13.59,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 84.5999984741211,
    "referenceClose": 97.9000015258789,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "4908.TWO",
    "quoteSymbol": "4908.TWO",
    "name": "前鼎",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module and equipment",
    "change": -12.74,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 185.0,
    "referenceClose": 212.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "300308.SZ",
    "quoteSymbol": "300308.SZ",
    "name": "中際旭創",
    "market": "CN",
    "segment": "module",
    "sub": "800G / 1.6T",
    "role": "High-speed optical transceiver leader",
    "change": -8.33,
    "tags": [
      "800G",
      "1.6T"
    ],
    "priceStatus": "ok",
    "latestClose": 1253.8900146484375,
    "referenceClose": 1367.8800048828125,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "300502.SZ",
    "quoteSymbol": "300502.SZ",
    "name": "新易盛",
    "market": "CN",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom optical transceivers",
    "change": -2.66,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 566.0,
    "referenceClose": 581.47998046875,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "002281.SZ",
    "quoteSymbol": "002281.SZ",
    "name": "光迅科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical devices and modules",
    "change": -9.71,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 240.33999633789062,
    "referenceClose": 266.20001220703125,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "603083.SH",
    "quoteSymbol": "603083.SS",
    "name": "劍橋科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical modules and broadband equipment",
    "change": 14.63,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 245.9199981689453,
    "referenceClose": 214.5399932861328,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical engine parts",
    "role": "High-speed module precision components",
    "change": -5.53,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 318.0,
    "referenceClose": 336.6000061035156,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "688205.SH",
    "quoteSymbol": "688205.SS",
    "name": "德科立",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical transceiver modules",
    "change": -16.59,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 210.52000427246094,
    "referenceClose": 252.39999389648438,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication and laser products",
    "change": -9.36,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 160.94000244140625,
    "referenceClose": 177.5500030517578,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical network",
    "role": "Optical network systems and modules",
    "change": 1.21,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 76.22000122070312,
    "referenceClose": 75.30999755859375,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "module",
    "sub": "Optical device",
    "role": "Optical components and communication devices",
    "change": -11.49,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 2983.75,
    "referenceClose": 3371.25,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-19"
  },
  {
    "ticker": "ANET",
    "quoteSymbol": "ANET",
    "name": "Arista Networks",
    "market": "US",
    "segment": "system",
    "sub": "AI switch",
    "role": "AI datacenter Ethernet switches",
    "change": -7.11,
    "tags": [
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 157.60000610351562,
    "referenceClose": 169.6699981689453,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "system",
    "sub": "Switch / router",
    "role": "Enterprise and cloud networking systems",
    "change": -4.83,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 113.7699966430664,
    "referenceClose": 119.54000091552734,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "HPE",
    "quoteSymbol": "HPE",
    "name": "HPE",
    "market": "US",
    "segment": "system",
    "sub": "Server / networking",
    "role": "AI servers, networking and cloud infrastructure",
    "change": -7.8,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 43.709999084472656,
    "referenceClose": 47.40999984741211,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "DELL",
    "quoteSymbol": "DELL",
    "name": "Dell",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and enterprise infrastructure",
    "change": -2.44,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 399.489990234375,
    "referenceClose": 409.5,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "SMCI",
    "quoteSymbol": "SMCI",
    "name": "Supermicro",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server platforms and rack-scale systems",
    "change": -0.1,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 30.6299991607666,
    "referenceClose": 30.65999984741211,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "CLS",
    "quoteSymbol": "CLS",
    "name": "Celestica",
    "market": "US",
    "segment": "system",
    "sub": "ODM / EMS",
    "role": "Cloud hardware and networking manufacturing",
    "change": -9.4,
    "tags": [
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 337.5299987792969,
    "referenceClose": 372.54998779296875,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "JBL",
    "quoteSymbol": "JBL",
    "name": "Jabil",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing for networking systems",
    "change": -3.57,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 358.6000061035156,
    "referenceClose": 371.8800048828125,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
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
    "latestClose": 146.6999969482422,
    "referenceClose": 147.61000061035156,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "2345.TW",
    "quoteSymbol": "2345.TW",
    "name": "智邦",
    "market": "TW",
    "segment": "system",
    "sub": "Switch ODM",
    "role": "White-box switch and cloud networking ODM",
    "change": -2.26,
    "tags": [
      "switch",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 2380.0,
    "referenceClose": 2435.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "2382.TW",
    "quoteSymbol": "2382.TW",
    "name": "廣達",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and cloud infrastructure ODM",
    "change": -3.72,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 362.0,
    "referenceClose": 376.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "6669.TW",
    "quoteSymbol": "6669.TW",
    "name": "緯穎",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "Cloud datacenter server ODM",
    "change": -16.57,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 4280.0,
    "referenceClose": 5130.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "2317.TW",
    "quoteSymbol": "2317.TW",
    "name": "鴻海",
    "market": "TW",
    "segment": "system",
    "sub": "EMS / server",
    "role": "AI server and system assembly",
    "change": -7.45,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 248.5,
    "referenceClose": 268.5,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "2308.TW",
    "quoteSymbol": "2308.TW",
    "name": "台達電",
    "market": "TW",
    "segment": "system",
    "sub": "Power / thermal",
    "role": "Power, thermal and datacenter infrastructure",
    "change": -15.81,
    "tags": [
      "power",
      "thermal"
    ],
    "priceStatus": "ok",
    "latestClose": 1810.0,
    "referenceClose": 2150.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "3706.TW",
    "quoteSymbol": "3706.TW",
    "name": "神達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and datacenter system integration",
    "change": -3.91,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 83.5,
    "referenceClose": 86.9000015258789,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "3231.TW",
    "quoteSymbol": "3231.TW",
    "name": "緯創",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and system integration",
    "change": -5.26,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 153.0,
    "referenceClose": 161.5,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "2356.TW",
    "quoteSymbol": "2356.TW",
    "name": "英業達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and cloud equipment manufacturing",
    "change": -6.5,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 63.29999923706055,
    "referenceClose": 67.69999694824219,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "3380.TW",
    "quoteSymbol": "3380.TW",
    "name": "明泰",
    "market": "TW",
    "segment": "system",
    "sub": "Networking",
    "role": "Networking products and broadband equipment",
    "change": -9.87,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 31.5,
    "referenceClose": 34.95000076293945,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "6285.TW",
    "quoteSymbol": "6285.TW",
    "name": "啟碁",
    "market": "TW",
    "segment": "system",
    "sub": "Network device",
    "role": "Wireless and networking equipment",
    "change": -13.87,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 236.0,
    "referenceClose": 274.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "system",
    "sub": "Optical systems",
    "role": "Optical communication and laser systems",
    "change": -9.36,
    "tags": [
      "system"
    ],
    "priceStatus": "ok",
    "latestClose": 160.94000244140625,
    "referenceClose": 177.5500030517578,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "system",
    "sub": "Optical network",
    "role": "Optical transmission and network equipment",
    "change": 1.21,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 76.22000122070312,
    "referenceClose": 75.30999755859375,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "000063.SZ",
    "quoteSymbol": "000063.SZ",
    "name": "中興通訊",
    "market": "CN",
    "segment": "system",
    "sub": "Telecom equipment",
    "role": "Telecom and datacenter network equipment",
    "change": -5.86,
    "tags": [
      "telecom"
    ],
    "priceStatus": "ok",
    "latestClose": 35.66999816894531,
    "referenceClose": 37.88999938964844,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-18"
  },
  {
    "ticker": "6701.T",
    "quoteSymbol": "6701.T",
    "name": "NEC",
    "market": "JP",
    "segment": "system",
    "sub": "Network systems",
    "role": "Telecom, submarine and network systems",
    "change": 1.04,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 3795.0,
    "referenceClose": 3756.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-19"
  },
  {
    "ticker": "6702.T",
    "quoteSymbol": "6702.T",
    "name": "Fujitsu",
    "market": "JP",
    "segment": "system",
    "sub": "ICT systems",
    "role": "ICT infrastructure and network systems",
    "change": -0.37,
    "tags": [
      "ICT"
    ],
    "priceStatus": "ok",
    "latestClose": 3199.0,
    "referenceClose": 3211.0,
    "priceDate": "2026-06-26",
    "referenceDate": "2026-06-19"
  }
];

