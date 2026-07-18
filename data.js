window.HEATMAP_META = {
  "title": "光通訊 / CPO 供應鏈熱力圖",
  "subtitle": "六大環節、跨市場上市公司、同公司可重複出現在多個供應鏈位置。",
  "lastUpdated": "2026-07-18",
  "dateRange": "2026-07-10 → 2026-07-17",
  "totalTiles": 126,
  "totalCompanies": 97,
  "quoteSymbolsUpdated": 97,
  "quoteSymbolsFailed": 0,
  "priceStatusCounts": {
    "ok": 126
  },
  "topGainer": {
    "ticker": "TSEM",
    "name": "Tower Semiconductor",
    "change": 5.1
  },
  "topLoser": {
    "ticker": "600498.SH",
    "name": "烽火通信",
    "change": -30.37
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
    "change": -7.29,
    "tags": [
      "ASIC",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 370.8299865722656,
    "referenceClose": 399.9700012207031,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "asic",
    "sub": "GPU / Network ASIC",
    "role": "GPU, NVLink, Spectrum-X ecosystem",
    "change": -3.86,
    "tags": [
      "GPU",
      "networking"
    ],
    "priceStatus": "ok",
    "latestClose": 202.80999755859375,
    "referenceClose": 210.9600067138672,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "asic",
    "sub": "DSP / PAM4",
    "role": "Optical DSP, custom silicon, DCI chips",
    "change": -19.99,
    "tags": [
      "DSP",
      "custom silicon"
    ],
    "priceStatus": "ok",
    "latestClose": 188.67999267578125,
    "referenceClose": 235.80999755859375,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "CRDO",
    "quoteSymbol": "CRDO",
    "name": "Credo",
    "market": "US",
    "segment": "asic",
    "sub": "Retimer / DSP",
    "role": "High-speed connectivity and optical DSP",
    "change": -21.38,
    "tags": [
      "DSP",
      "retimer"
    ],
    "priceStatus": "ok",
    "latestClose": 202.67999267578125,
    "referenceClose": 257.7900085449219,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "ALAB",
    "quoteSymbol": "ALAB",
    "name": "Astera Labs",
    "market": "US",
    "segment": "asic",
    "sub": "PCIe / CXL",
    "role": "AI data-center connectivity silicon",
    "change": -26.48,
    "tags": [
      "retimer",
      "CXL"
    ],
    "priceStatus": "ok",
    "latestClose": 303.6199951171875,
    "referenceClose": 412.9700012207031,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Laser drivers, TIAs, high-speed analog",
    "change": -13.34,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 267.3599853515625,
    "referenceClose": 308.5199890136719,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "SMTC",
    "quoteSymbol": "SMTC",
    "name": "Semtech",
    "market": "US",
    "segment": "asic",
    "sub": "Signal IC",
    "role": "Signal integrity and optical analog ICs",
    "change": -8.21,
    "tags": [
      "signal"
    ],
    "priceStatus": "ok",
    "latestClose": 124.95999908447266,
    "referenceClose": 136.1300048828125,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "asic",
    "sub": "Network silicon",
    "role": "Silicon One and Acacia optical stack",
    "change": -7.72,
    "tags": [
      "switch",
      "acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 111.94000244140625,
    "referenceClose": 121.30999755859375,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "asic",
    "sub": "Coherent DSP",
    "role": "WaveLogic coherent DSP and systems",
    "change": -18.73,
    "tags": [
      "coherent",
      "DSP"
    ],
    "priceStatus": "ok",
    "latestClose": 374.4100036621094,
    "referenceClose": 460.7200012207031,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "AMD",
    "quoteSymbol": "AMD",
    "name": "AMD",
    "market": "US",
    "segment": "asic",
    "sub": "AI accelerator",
    "role": "AI accelerators and adaptive compute",
    "change": -11.14,
    "tags": [
      "accelerator"
    ],
    "priceStatus": "ok",
    "latestClose": 495.760009765625,
    "referenceClose": 557.8900146484375,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "asic",
    "sub": "Foundry / I/O",
    "role": "Foundry, Ethernet, historical silicon photonics",
    "change": -13.47,
    "tags": [
      "foundry",
      "ethernet"
    ],
    "priceStatus": "ok",
    "latestClose": 95.04000091552734,
    "referenceClose": 109.83999633789062,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "QCOM",
    "quoteSymbol": "QCOM",
    "name": "Qualcomm",
    "market": "US",
    "segment": "asic",
    "sub": "Connectivity IC",
    "role": "High-speed connectivity and edge AI silicon",
    "change": -9.19,
    "tags": [
      "connectivity"
    ],
    "priceStatus": "ok",
    "latestClose": 171.77999877929688,
    "referenceClose": 189.16000366210938,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "3661.TW",
    "quoteSymbol": "3661.TW",
    "name": "世芯-KY",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "Advanced-node custom ASIC design service",
    "change": -17.34,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 3480.0,
    "referenceClose": 4210.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "3443.TW",
    "quoteSymbol": "3443.TW",
    "name": "創意",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "GUC ASIC design and implementation",
    "change": -11.64,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 3835.0,
    "referenceClose": 4340.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "2454.TW",
    "quoteSymbol": "2454.TW",
    "name": "聯發科",
    "market": "TW",
    "segment": "asic",
    "sub": "Connectivity SoC",
    "role": "Networking, SerDes and edge AI chip exposure",
    "change": -14.14,
    "tags": [
      "SoC"
    ],
    "priceStatus": "ok",
    "latestClose": 3370.0,
    "referenceClose": 3925.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "5274.TWO",
    "quoteSymbol": "5274.TWO",
    "name": "信驊",
    "market": "TW",
    "segment": "asic",
    "sub": "BMC",
    "role": "Server management silicon",
    "change": -5.23,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 12950.0,
    "referenceClose": 13665.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "688536.SH",
    "quoteSymbol": "688536.SS",
    "name": "思瑞浦",
    "market": "CN",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Analog and signal-chain ICs",
    "change": -21.66,
    "tags": [
      "analog"
    ],
    "priceStatus": "ok",
    "latestClose": 242.0800018310547,
    "referenceClose": 309.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "asic",
    "sub": "Laser driver link",
    "role": "Optical chip supplier with upstream exposure",
    "change": 2.92,
    "tags": [
      "optical chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1656.0,
    "referenceClose": 1609.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "2330.TW",
    "quoteSymbol": "2330.TW",
    "name": "台積電",
    "market": "TW",
    "segment": "sipic",
    "sub": "Foundry",
    "role": "Advanced-node and packaging platform for CPO ecosystem",
    "change": -5.18,
    "tags": [
      "foundry",
      "CoWoS"
    ],
    "priceStatus": "ok",
    "latestClose": 2290.0,
    "referenceClose": 2415.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "AVGO",
    "quoteSymbol": "AVGO",
    "name": "Broadcom",
    "market": "US",
    "segment": "sipic",
    "sub": "Co-packaged optics",
    "role": "CPO roadmap and switch silicon integration",
    "change": -7.29,
    "tags": [
      "CPO",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 370.8299865722656,
    "referenceClose": 399.9700012207031,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical I/O ecosystem",
    "role": "AI cluster architecture drives optical I/O demand",
    "change": -3.86,
    "tags": [
      "AI",
      "optical I/O"
    ],
    "priceStatus": "ok",
    "latestClose": 202.80999755859375,
    "referenceClose": 210.9600067138672,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical platform",
    "role": "DSP plus silicon photonics partnership ecosystem",
    "change": -19.99,
    "tags": [
      "DSP",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 188.67999267578125,
    "referenceClose": 235.80999755859375,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "sipic",
    "sub": "Silicon photonics",
    "role": "Integrated silicon photonics and foundry capabilities",
    "change": -13.47,
    "tags": [
      "SiPh",
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 95.04000091552734,
    "referenceClose": 109.83999633789062,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Lasers, transceivers and optical engine building blocks",
    "change": -14.45,
    "tags": [
      "laser",
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 277.6000061035156,
    "referenceClose": 324.5,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Datacom lasers and optical components",
    "change": -8.63,
    "tags": [
      "laser",
      "datacom"
    ],
    "priceStatus": "ok",
    "latestClose": 732.8200073242188,
    "referenceClose": 802.010009765625,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "STM",
    "quoteSymbol": "STM",
    "name": "STMicro",
    "market": "EU",
    "segment": "sipic",
    "sub": "Photonics platform",
    "role": "Photonics and advanced semiconductor platform exposure",
    "change": -13.15,
    "tags": [
      "photonics"
    ],
    "priceStatus": "ok",
    "latestClose": 62.060001373291016,
    "referenceClose": 71.45999908447266,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "GFS",
    "quoteSymbol": "GFS",
    "name": "GlobalFoundries",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Silicon photonics and specialty process platform",
    "change": -16.66,
    "tags": [
      "foundry",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 57.47999954223633,
    "referenceClose": 68.97000122070312,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "TSEM",
    "quoteSymbol": "TSEM",
    "name": "Tower Semiconductor",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Analog, photonics and specialty manufacturing",
    "change": 5.1,
    "tags": [
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 234.10000610351562,
    "referenceClose": 222.75,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "sipic",
    "sub": "Optical systems",
    "role": "Photonic service engines and coherent optics",
    "change": -18.65,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 10.119999885559082,
    "referenceClose": 12.4399995803833,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "sipic",
    "sub": "Acacia optics",
    "role": "Coherent modules and optical interconnect roadmap",
    "change": -7.72,
    "tags": [
      "Acacia",
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 111.94000244140625,
    "referenceClose": 121.30999755859375,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "sipic",
    "sub": "Coherent optics",
    "role": "Coherent optical engine and network platforms",
    "change": -18.73,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 374.4100036621094,
    "referenceClose": 460.7200012207031,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "POET",
    "quoteSymbol": "POET",
    "name": "POET Technologies",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical interposer",
    "role": "Optical interposer platform for transceivers",
    "change": -11.07,
    "tags": [
      "interposer"
    ],
    "priceStatus": "ok",
    "latestClose": 7.389999866485596,
    "referenceClose": 8.3100004196167,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "LWLG",
    "quoteSymbol": "LWLG",
    "name": "Lightwave Logic",
    "market": "US",
    "segment": "sipic",
    "sub": "EO polymer",
    "role": "Electro-optic polymer material platform",
    "change": -8.78,
    "tags": [
      "material"
    ],
    "priceStatus": "ok",
    "latestClose": 6.230000019073486,
    "referenceClose": 6.829999923706055,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "4966.TWO",
    "quoteSymbol": "4966.TWO",
    "name": "譜瑞-KY",
    "market": "TW",
    "segment": "sipic",
    "sub": "High-speed interface",
    "role": "High-speed interface ICs and data transmission",
    "change": -10.69,
    "tags": [
      "interface"
    ],
    "priceStatus": "ok",
    "latestClose": 585.0,
    "referenceClose": 655.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "6789.TW",
    "quoteSymbol": "6789.TW",
    "name": "采鈺",
    "market": "TW",
    "segment": "sipic",
    "sub": "Optical process",
    "role": "Optical semiconductor process and sensor platform",
    "change": -8.06,
    "tags": [
      "process"
    ],
    "priceStatus": "ok",
    "latestClose": 473.5,
    "referenceClose": 515.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "688313.SH",
    "quoteSymbol": "688313.SS",
    "name": "仕佳光子",
    "market": "CN",
    "segment": "sipic",
    "sub": "PLC / optical chip",
    "role": "PLC splitter, AWG and optical chip supplier",
    "change": -20.08,
    "tags": [
      "PLC",
      "chip"
    ],
    "priceStatus": "ok",
    "latestClose": 117.98999786376953,
    "referenceClose": 147.6300048828125,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "laser",
    "sub": "Laser / InP",
    "role": "InP lasers, VCSELs, coherent and datacom components",
    "change": -14.45,
    "tags": [
      "InP",
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 277.6000061035156,
    "referenceClose": 324.5,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "laser",
    "sub": "Datacom laser",
    "role": "EML, DFB and high-speed datacom laser supply",
    "change": -8.63,
    "tags": [
      "EML",
      "DFB"
    ],
    "priceStatus": "ok",
    "latestClose": 732.8200073242188,
    "referenceClose": 802.010009765625,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "laser",
    "sub": "Laser driver / TIA",
    "role": "Laser drivers, TIAs and analog front-end",
    "change": -13.34,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 267.3599853515625,
    "referenceClose": 308.5199890136719,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "IPGP",
    "quoteSymbol": "IPGP",
    "name": "IPG Photonics",
    "market": "US",
    "segment": "laser",
    "sub": "Fiber laser",
    "role": "Laser technology and optical components",
    "change": -3.16,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 104.33000183105469,
    "referenceClose": 107.7300033569336,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "AXTI",
    "quoteSymbol": "AXTI",
    "name": "AXT",
    "market": "US",
    "segment": "laser",
    "sub": "Substrate",
    "role": "Compound semiconductor substrates",
    "change": -19.84,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 45.86000061035156,
    "referenceClose": 57.209999084472656,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "IQE.L",
    "quoteSymbol": "IQE.L",
    "name": "IQE",
    "market": "EU",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "Compound semiconductor epitaxy wafers",
    "change": -4.77,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 36.900001525878906,
    "referenceClose": 38.75,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Compound semiconductor and optical components",
    "change": -12.9,
    "tags": [
      "InP",
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 2249.0,
    "referenceClose": 2582.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "6503.T",
    "quoteSymbol": "6503.T",
    "name": "三菱電機",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Optical devices, lasers and industrial electronics",
    "change": -7.84,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 5370.0,
    "referenceClose": 5827.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "6965.T",
    "quoteSymbol": "6965.T",
    "name": "浜松光子",
    "market": "JP",
    "segment": "laser",
    "sub": "Photonics",
    "role": "Photodetectors, optoelectronics and photonics devices",
    "change": -8.23,
    "tags": [
      "detector"
    ],
    "priceStatus": "ok",
    "latestClose": 2302.0,
    "referenceClose": 2508.5,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "AMS.SW",
    "quoteSymbol": "AMS.SW",
    "name": "ams OSRAM",
    "market": "EU",
    "segment": "laser",
    "sub": "Emitter",
    "role": "Emitters, sensors and photonics devices",
    "change": -19.53,
    "tags": [
      "emitter"
    ],
    "priceStatus": "ok",
    "latestClose": 15.079999923706055,
    "referenceClose": 18.739999771118164,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "3105.TWO",
    "quoteSymbol": "3105.TWO",
    "name": "穩懋",
    "market": "TW",
    "segment": "laser",
    "sub": "GaAs foundry",
    "role": "GaAs foundry with photonics-adjacent capabilities",
    "change": -18.1,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 332.5,
    "referenceClose": 406.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "3081.TWO",
    "quoteSymbol": "3081.TWO",
    "name": "聯亞",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "III-V epitaxy wafers for optical communications",
    "change": -18.8,
    "tags": [
      "epi",
      "III-V"
    ],
    "priceStatus": "ok",
    "latestClose": 1480.0,
    "referenceClose": 1822.727294921875,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "2455.TW",
    "quoteSymbol": "2455.TW",
    "name": "全新",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "GaAs/InP epitaxy and compound semiconductor materials",
    "change": -14.67,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 282.0,
    "referenceClose": 330.5,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "8086.TWO",
    "quoteSymbol": "8086.TWO",
    "name": "宏捷科",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "GaAs foundry and compound semiconductor devices",
    "change": -12.87,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 118.5,
    "referenceClose": 136.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "4991.TWO",
    "quoteSymbol": "4991.TWO",
    "name": "環宇-KY",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "Compound semiconductor and optical device exposure",
    "change": -21.99,
    "tags": [
      "compound"
    ],
    "priceStatus": "ok",
    "latestClose": 360.0,
    "referenceClose": 461.5,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "laser",
    "sub": "Optical component",
    "role": "Optical communication components and modules",
    "change": -17.69,
    "tags": [
      "optical"
    ],
    "priceStatus": "ok",
    "latestClose": 356.0,
    "referenceClose": 432.5,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser chip",
    "role": "Optical communication laser chips",
    "change": 2.92,
    "tags": [
      "laser chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1656.0,
    "referenceClose": 1609.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser / module",
    "role": "Laser equipment and optical communication products",
    "change": -25.59,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 117.62000274658203,
    "referenceClose": 158.07000732421875,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "APH",
    "quoteSymbol": "APH",
    "name": "Amphenol",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "High-speed interconnect and optical connector ecosystem",
    "change": -4.94,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 151.1999969482422,
    "referenceClose": 159.05999755859375,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "GLW",
    "quoteSymbol": "GLW",
    "name": "Corning",
    "market": "US",
    "segment": "component",
    "sub": "Fiber / glass",
    "role": "Optical fiber, glass and datacenter cabling",
    "change": -19.01,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 154.61000061035156,
    "referenceClose": 190.88999938964844,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "TEL",
    "quoteSymbol": "TEL",
    "name": "TE Connectivity",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "Connectors, cable assemblies and sensors",
    "change": 1.47,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 203.30999755859375,
    "referenceClose": 200.36000061035156,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers, modulators and optical subassemblies",
    "change": -14.45,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 277.6000061035156,
    "referenceClose": 324.5,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers and optical communication components",
    "change": -8.63,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 732.8200073242188,
    "referenceClose": 802.010009765625,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "component",
    "sub": "Manufacturing",
    "role": "Precision optical manufacturing and assembly",
    "change": 1.54,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 478.3900146484375,
    "referenceClose": 471.1300048828125,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "3711.TW",
    "quoteSymbol": "3711.TW",
    "name": "日月光投控",
    "market": "TW",
    "segment": "component",
    "sub": "Advanced packaging",
    "role": "Semiconductor packaging and system-in-package",
    "change": -9.31,
    "tags": [
      "packaging"
    ],
    "priceStatus": "ok",
    "latestClose": 614.0,
    "referenceClose": 677.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "2449.TW",
    "quoteSymbol": "2449.TW",
    "name": "京元電",
    "market": "TW",
    "segment": "component",
    "sub": "Test",
    "role": "IC testing services for high-speed chips",
    "change": -7.13,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 286.5,
    "referenceClose": 308.5,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "6515.TW",
    "quoteSymbol": "6515.TW",
    "name": "穎崴",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card / socket",
    "role": "High-speed test interface and sockets",
    "change": -22.02,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 6055.0,
    "referenceClose": 7765.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "6223.TWO",
    "quoteSymbol": "6223.TWO",
    "name": "旺矽",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card",
    "role": "Probe cards and testing interface",
    "change": -20.9,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 5600.0,
    "referenceClose": 7080.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "3037.TW",
    "quoteSymbol": "3037.TW",
    "name": "欣興",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and advanced PCB",
    "change": -9.26,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 794.0,
    "referenceClose": 875.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "3189.TW",
    "quoteSymbol": "3189.TW",
    "name": "景碩",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate supplier",
    "change": -12.83,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 693.0,
    "referenceClose": 795.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "8046.TW",
    "quoteSymbol": "8046.TW",
    "name": "南電",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and PCB",
    "change": -5.35,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1150.0,
    "referenceClose": 1215.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "2383.TW",
    "quoteSymbol": "2383.TW",
    "name": "台光電",
    "market": "TW",
    "segment": "component",
    "sub": "Copper clad laminate",
    "role": "High-speed CCL for AI servers and switches",
    "change": -15.11,
    "tags": [
      "CCL"
    ],
    "priceStatus": "ok",
    "latestClose": 4495.0,
    "referenceClose": 5295.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "component",
    "sub": "Connector / RF",
    "role": "Connectors and optical communication components",
    "change": -12.16,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 1300.0,
    "referenceClose": 1480.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "3363.TWO",
    "quoteSymbol": "3363.TWO",
    "name": "上詮",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber optic components and passive devices",
    "change": -17.11,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 504.0,
    "referenceClose": 608.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "component",
    "sub": "Optical subassembly",
    "role": "Optical communication subassemblies and packaging",
    "change": -13.94,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 432.0,
    "referenceClose": 502.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "6451.TW",
    "quoteSymbol": "6451.TW",
    "name": "訊芯-KY",
    "market": "TW",
    "segment": "component",
    "sub": "SiP / optical packaging",
    "role": "System-in-package and optical communication assembly",
    "change": -17.08,
    "tags": [
      "SiP"
    ],
    "priceStatus": "ok",
    "latestClose": 429.5,
    "referenceClose": 518.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber arrays, splitters and optical passive components",
    "change": -12.6,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 652.0,
    "referenceClose": 746.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical communication component supplier",
    "change": -16.87,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 69.0,
    "referenceClose": 83.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive components and precision parts",
    "change": -22.04,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 211.3699951171875,
    "referenceClose": 271.1199951171875,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "300548.SZ",
    "quoteSymbol": "300548.SZ",
    "name": "博創科技",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive and active components",
    "change": -25.06,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 166.2100067138672,
    "referenceClose": 221.7899932861328,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "601869.SH",
    "quoteSymbol": "601869.SS",
    "name": "長飛光纖",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber",
    "role": "Optical fiber and cable",
    "change": -12.88,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 361.57000732421875,
    "referenceClose": 415.0299987792969,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "600487.SH",
    "quoteSymbol": "600487.SS",
    "name": "亨通光電",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber cable and optical network products",
    "change": -24.94,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 58.38999938964844,
    "referenceClose": 77.79000091552734,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "5801.T",
    "quoteSymbol": "5801.T",
    "name": "古河電工",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Optical fiber, cable and network materials",
    "change": -12.43,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 3262.0,
    "referenceClose": 3725.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "5803.T",
    "quoteSymbol": "5803.T",
    "name": "藤倉",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber, cable and optical interconnect products",
    "change": -13.16,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 4472.0,
    "referenceClose": 5150.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "4062.T",
    "quoteSymbol": "4062.T",
    "name": "Ibiden",
    "market": "JP",
    "segment": "component",
    "sub": "Substrate",
    "role": "Advanced IC substrates",
    "change": -22.73,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 15685.0,
    "referenceClose": 20300.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom and telecom optical transceivers",
    "change": -14.45,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 277.6000061035156,
    "referenceClose": 324.5,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "module",
    "sub": "Laser / module",
    "role": "Laser engines and optical module supply",
    "change": -8.63,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 732.8200073242188,
    "referenceClose": 802.010009765625,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "module",
    "sub": "Optical manufacturing",
    "role": "Optical module contract manufacturing",
    "change": 1.54,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 478.3900146484375,
    "referenceClose": 471.1300048828125,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "module",
    "sub": "Coherent module",
    "role": "Coherent optical modules and transport platforms",
    "change": -18.73,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 374.4100036621094,
    "referenceClose": 460.7200012207031,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "module",
    "sub": "Acacia module",
    "role": "Acacia coherent optics and pluggable modules",
    "change": -7.72,
    "tags": [
      "Acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 111.94000244140625,
    "referenceClose": 121.30999755859375,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "module",
    "sub": "Optical module",
    "role": "Coherent optics and network system modules",
    "change": -18.65,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 10.119999885559082,
    "referenceClose": 12.4399995803833,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical communication modules and components",
    "change": -17.69,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 356.0,
    "referenceClose": 432.5,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "4977.TW",
    "quoteSymbol": "4977.TW",
    "name": "眾達-KY",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical transceiver supplier",
    "change": -14.75,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 130.0,
    "referenceClose": 152.5,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver component",
    "role": "Optical communication and connector products",
    "change": -12.16,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1300.0,
    "referenceClose": 1480.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "module",
    "sub": "OSA",
    "role": "Optical subassemblies for transceivers",
    "change": -13.94,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 432.0,
    "referenceClose": 502.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "module",
    "sub": "Passive optical",
    "role": "Fiber components used in modules",
    "change": -12.6,
    "tags": [
      "passive"
    ],
    "priceStatus": "ok",
    "latestClose": 652.0,
    "referenceClose": 746.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module exposure",
    "change": -16.87,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 69.0,
    "referenceClose": 83.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "4908.TWO",
    "quoteSymbol": "4908.TWO",
    "name": "前鼎",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module and equipment",
    "change": -15.85,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 138.0,
    "referenceClose": 164.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "300308.SZ",
    "quoteSymbol": "300308.SZ",
    "name": "中際旭創",
    "market": "CN",
    "segment": "module",
    "sub": "800G / 1.6T",
    "role": "High-speed optical transceiver leader",
    "change": -10.47,
    "tags": [
      "800G",
      "1.6T"
    ],
    "priceStatus": "ok",
    "latestClose": 979.4600219726562,
    "referenceClose": 1093.97998046875,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "300502.SZ",
    "quoteSymbol": "300502.SZ",
    "name": "新易盛",
    "market": "CN",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom optical transceivers",
    "change": -7.68,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 482.8800048828125,
    "referenceClose": 523.0499877929688,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "002281.SZ",
    "quoteSymbol": "002281.SZ",
    "name": "光迅科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical devices and modules",
    "change": -18.85,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 189.4499969482422,
    "referenceClose": 233.4499969482422,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "603083.SH",
    "quoteSymbol": "603083.SS",
    "name": "劍橋科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical modules and broadband equipment",
    "change": -11.53,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 176.1300048828125,
    "referenceClose": 199.08999633789062,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical engine parts",
    "role": "High-speed module precision components",
    "change": -22.04,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 211.3699951171875,
    "referenceClose": 271.1199951171875,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "688205.SH",
    "quoteSymbol": "688205.SS",
    "name": "德科立",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical transceiver modules",
    "change": -20.52,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 134.8800048828125,
    "referenceClose": 169.6999969482422,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication and laser products",
    "change": -25.59,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 117.62000274658203,
    "referenceClose": 158.07000732421875,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical network",
    "role": "Optical network systems and modules",
    "change": -30.37,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 39.599998474121094,
    "referenceClose": 56.869998931884766,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "module",
    "sub": "Optical device",
    "role": "Optical components and communication devices",
    "change": -12.9,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 2249.0,
    "referenceClose": 2582.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "ANET",
    "quoteSymbol": "ANET",
    "name": "Arista Networks",
    "market": "US",
    "segment": "system",
    "sub": "AI switch",
    "role": "AI datacenter Ethernet switches",
    "change": -9.81,
    "tags": [
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 168.61000061035156,
    "referenceClose": 186.9600067138672,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "system",
    "sub": "Switch / router",
    "role": "Enterprise and cloud networking systems",
    "change": -7.72,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 111.94000244140625,
    "referenceClose": 121.30999755859375,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "HPE",
    "quoteSymbol": "HPE",
    "name": "HPE",
    "market": "US",
    "segment": "system",
    "sub": "Server / networking",
    "role": "AI servers, networking and cloud infrastructure",
    "change": -5.6,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 45.81999969482422,
    "referenceClose": 48.540000915527344,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "DELL",
    "quoteSymbol": "DELL",
    "name": "Dell",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and enterprise infrastructure",
    "change": -8.88,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 396.3399963378906,
    "referenceClose": 434.9700012207031,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "SMCI",
    "quoteSymbol": "SMCI",
    "name": "Supermicro",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server platforms and rack-scale systems",
    "change": -14.59,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 24.18000030517578,
    "referenceClose": 28.309999465942383,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "CLS",
    "quoteSymbol": "CLS",
    "name": "Celestica",
    "market": "US",
    "segment": "system",
    "sub": "ODM / EMS",
    "role": "Cloud hardware and networking manufacturing",
    "change": -16.26,
    "tags": [
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 301.3399963378906,
    "referenceClose": 359.8500061035156,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "JBL",
    "quoteSymbol": "JBL",
    "name": "Jabil",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing for networking systems",
    "change": -8.86,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 301.010009765625,
    "referenceClose": 330.2900085449219,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "FLEX",
    "quoteSymbol": "FLEX",
    "name": "Flex",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing and cloud hardware",
    "change": -12.19,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 119.25,
    "referenceClose": 135.8000030517578,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "2345.TW",
    "quoteSymbol": "2345.TW",
    "name": "智邦",
    "market": "TW",
    "segment": "system",
    "sub": "Switch ODM",
    "role": "White-box switch and cloud networking ODM",
    "change": -15.38,
    "tags": [
      "switch",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 2090.0,
    "referenceClose": 2470.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "2382.TW",
    "quoteSymbol": "2382.TW",
    "name": "廣達",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and cloud infrastructure ODM",
    "change": -12.85,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 325.5,
    "referenceClose": 373.5,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "6669.TW",
    "quoteSymbol": "6669.TW",
    "name": "緯穎",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "Cloud datacenter server ODM",
    "change": -8.33,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 4620.0,
    "referenceClose": 5040.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "2317.TW",
    "quoteSymbol": "2317.TW",
    "name": "鴻海",
    "market": "TW",
    "segment": "system",
    "sub": "EMS / server",
    "role": "AI server and system assembly",
    "change": -1.47,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 234.0,
    "referenceClose": 237.5,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "2308.TW",
    "quoteSymbol": "2308.TW",
    "name": "台達電",
    "market": "TW",
    "segment": "system",
    "sub": "Power / thermal",
    "role": "Power, thermal and datacenter infrastructure",
    "change": -7.45,
    "tags": [
      "power",
      "thermal"
    ],
    "priceStatus": "ok",
    "latestClose": 1740.0,
    "referenceClose": 1880.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "3706.TW",
    "quoteSymbol": "3706.TW",
    "name": "神達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and datacenter system integration",
    "change": -0.45,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 88.30000305175781,
    "referenceClose": 88.69999694824219,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "3231.TW",
    "quoteSymbol": "3231.TW",
    "name": "緯創",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and system integration",
    "change": -3.81,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 139.0,
    "referenceClose": 144.5,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "2356.TW",
    "quoteSymbol": "2356.TW",
    "name": "英業達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and cloud equipment manufacturing",
    "change": -16.19,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 58.5,
    "referenceClose": 69.80000305175781,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "3380.TW",
    "quoteSymbol": "3380.TW",
    "name": "明泰",
    "market": "TW",
    "segment": "system",
    "sub": "Networking",
    "role": "Networking products and broadband equipment",
    "change": -11.7,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 29.799999237060547,
    "referenceClose": 33.75,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "6285.TW",
    "quoteSymbol": "6285.TW",
    "name": "啟碁",
    "market": "TW",
    "segment": "system",
    "sub": "Network device",
    "role": "Wireless and networking equipment",
    "change": -9.98,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 234.5,
    "referenceClose": 260.5,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "system",
    "sub": "Optical systems",
    "role": "Optical communication and laser systems",
    "change": -25.59,
    "tags": [
      "system"
    ],
    "priceStatus": "ok",
    "latestClose": 117.62000274658203,
    "referenceClose": 158.07000732421875,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "system",
    "sub": "Optical network",
    "role": "Optical transmission and network equipment",
    "change": -30.37,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 39.599998474121094,
    "referenceClose": 56.869998931884766,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "000063.SZ",
    "quoteSymbol": "000063.SZ",
    "name": "中興通訊",
    "market": "CN",
    "segment": "system",
    "sub": "Telecom equipment",
    "role": "Telecom and datacenter network equipment",
    "change": -11.18,
    "tags": [
      "telecom"
    ],
    "priceStatus": "ok",
    "latestClose": 36.0,
    "referenceClose": 40.529998779296875,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "6701.T",
    "quoteSymbol": "6701.T",
    "name": "NEC",
    "market": "JP",
    "segment": "system",
    "sub": "Network systems",
    "role": "Telecom, submarine and network systems",
    "change": 0.48,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 4354.0,
    "referenceClose": 4333.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  },
  {
    "ticker": "6702.T",
    "quoteSymbol": "6702.T",
    "name": "Fujitsu",
    "market": "JP",
    "segment": "system",
    "sub": "ICT systems",
    "role": "ICT infrastructure and network systems",
    "change": -1.46,
    "tags": [
      "ICT"
    ],
    "priceStatus": "ok",
    "latestClose": 3298.0,
    "referenceClose": 3347.0,
    "priceDate": "2026-07-17",
    "referenceDate": "2026-07-10"
  }
];

