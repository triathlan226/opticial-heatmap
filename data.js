window.HEATMAP_META = {
  "title": "光通訊 / CPO 供應鏈熱力圖",
  "subtitle": "六大環節、跨市場上市公司、同公司可重複出現在多個供應鏈位置。",
  "lastUpdated": "2026-09-26",
  "dateRange": "2026-09-17 → 2026-09-25",
  "totalTiles": 126,
  "totalCompanies": 97,
  "quoteSymbolsUpdated": 97,
  "quoteSymbolsFailed": 0,
  "priceStatusCounts": {
    "ok": 126
  },
  "topGainer": {
    "ticker": "3443.TW",
    "name": "創意",
    "change": 31.15
  },
  "topLoser": {
    "ticker": "4908.TWO",
    "name": "前鼎",
    "change": -11.76
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
    "change": -1.34,
    "tags": [
      "ASIC",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 352.80999755859375,
    "referenceClose": 357.6099853515625,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "asic",
    "sub": "GPU / Network ASIC",
    "role": "GPU, NVLink, Spectrum-X ecosystem",
    "change": 1.26,
    "tags": [
      "GPU",
      "networking"
    ],
    "priceStatus": "ok",
    "latestClose": 225.07000732421875,
    "referenceClose": 222.27000427246094,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "asic",
    "sub": "DSP / PAM4",
    "role": "Optical DSP, custom silicon, DCI chips",
    "change": 7.24,
    "tags": [
      "DSP",
      "custom silicon"
    ],
    "priceStatus": "ok",
    "latestClose": 261.94000244140625,
    "referenceClose": 244.25,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "CRDO",
    "quoteSymbol": "CRDO",
    "name": "Credo",
    "market": "US",
    "segment": "asic",
    "sub": "Retimer / DSP",
    "role": "High-speed connectivity and optical DSP",
    "change": 19.94,
    "tags": [
      "DSP",
      "retimer"
    ],
    "priceStatus": "ok",
    "latestClose": 210.97000122070312,
    "referenceClose": 175.88999938964844,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "ALAB",
    "quoteSymbol": "ALAB",
    "name": "Astera Labs",
    "market": "US",
    "segment": "asic",
    "sub": "PCIe / CXL",
    "role": "AI data-center connectivity silicon",
    "change": 20.24,
    "tags": [
      "retimer",
      "CXL"
    ],
    "priceStatus": "ok",
    "latestClose": 364.6199951171875,
    "referenceClose": 303.25,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Laser drivers, TIAs, high-speed analog",
    "change": 3.52,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 285.57000732421875,
    "referenceClose": 275.8599853515625,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "SMTC",
    "quoteSymbol": "SMTC",
    "name": "Semtech",
    "market": "US",
    "segment": "asic",
    "sub": "Signal IC",
    "role": "Signal integrity and optical analog ICs",
    "change": -1.46,
    "tags": [
      "signal"
    ],
    "priceStatus": "ok",
    "latestClose": 182.3000030517578,
    "referenceClose": 185.0,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "asic",
    "sub": "Network silicon",
    "role": "Silicon One and Acacia optical stack",
    "change": -2.57,
    "tags": [
      "switch",
      "acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 106.69999694824219,
    "referenceClose": 109.51000213623047,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "asic",
    "sub": "Coherent DSP",
    "role": "WaveLogic coherent DSP and systems",
    "change": 2.33,
    "tags": [
      "coherent",
      "DSP"
    ],
    "priceStatus": "ok",
    "latestClose": 356.9100036621094,
    "referenceClose": 348.79998779296875,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "AMD",
    "quoteSymbol": "AMD",
    "name": "AMD",
    "market": "US",
    "segment": "asic",
    "sub": "AI accelerator",
    "role": "AI accelerators and adaptive compute",
    "change": 12.65,
    "tags": [
      "accelerator"
    ],
    "priceStatus": "ok",
    "latestClose": 630.6300048828125,
    "referenceClose": 559.8200073242188,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "asic",
    "sub": "Foundry / I/O",
    "role": "Foundry, Ethernet, historical silicon photonics",
    "change": 13.26,
    "tags": [
      "foundry",
      "ethernet"
    ],
    "priceStatus": "ok",
    "latestClose": 123.0,
    "referenceClose": 108.5999984741211,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "QCOM",
    "quoteSymbol": "QCOM",
    "name": "Qualcomm",
    "market": "US",
    "segment": "asic",
    "sub": "Connectivity IC",
    "role": "High-speed connectivity and edge AI silicon",
    "change": 13.65,
    "tags": [
      "connectivity"
    ],
    "priceStatus": "ok",
    "latestClose": 201.97000122070312,
    "referenceClose": 177.72000122070312,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "3661.TW",
    "quoteSymbol": "3661.TW",
    "name": "世芯-KY",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "Advanced-node custom ASIC design service",
    "change": 14.42,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 3770.0,
    "referenceClose": 3295.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "3443.TW",
    "quoteSymbol": "3443.TW",
    "name": "創意",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "GUC ASIC design and implementation",
    "change": 31.15,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 8525.0,
    "referenceClose": 6500.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "2454.TW",
    "quoteSymbol": "2454.TW",
    "name": "聯發科",
    "market": "TW",
    "segment": "asic",
    "sub": "Connectivity SoC",
    "role": "Networking, SerDes and edge AI chip exposure",
    "change": 17.44,
    "tags": [
      "SoC"
    ],
    "priceStatus": "ok",
    "latestClose": 5285.0,
    "referenceClose": 4500.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "5274.TWO",
    "quoteSymbol": "5274.TWO",
    "name": "信驊",
    "market": "TW",
    "segment": "asic",
    "sub": "BMC",
    "role": "Server management silicon",
    "change": 8.54,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 19835.0,
    "referenceClose": 18275.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "688536.SH",
    "quoteSymbol": "688536.SS",
    "name": "思瑞浦",
    "market": "CN",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Analog and signal-chain ICs",
    "change": 4.89,
    "tags": [
      "analog"
    ],
    "priceStatus": "ok",
    "latestClose": 346.80999755859375,
    "referenceClose": 330.6499938964844,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "asic",
    "sub": "Laser driver link",
    "role": "Optical chip supplier with upstream exposure",
    "change": -4.74,
    "tags": [
      "optical chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1700.030029296875,
    "referenceClose": 1784.6600341796875,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "2330.TW",
    "quoteSymbol": "2330.TW",
    "name": "台積電",
    "market": "TW",
    "segment": "sipic",
    "sub": "Foundry",
    "role": "Advanced-node and packaging platform for CPO ecosystem",
    "change": 2.06,
    "tags": [
      "foundry",
      "CoWoS"
    ],
    "priceStatus": "ok",
    "latestClose": 2475.0,
    "referenceClose": 2425.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "AVGO",
    "quoteSymbol": "AVGO",
    "name": "Broadcom",
    "market": "US",
    "segment": "sipic",
    "sub": "Co-packaged optics",
    "role": "CPO roadmap and switch silicon integration",
    "change": -1.34,
    "tags": [
      "CPO",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 352.80999755859375,
    "referenceClose": 357.6099853515625,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical I/O ecosystem",
    "role": "AI cluster architecture drives optical I/O demand",
    "change": 1.26,
    "tags": [
      "AI",
      "optical I/O"
    ],
    "priceStatus": "ok",
    "latestClose": 225.07000732421875,
    "referenceClose": 222.27000427246094,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical platform",
    "role": "DSP plus silicon photonics partnership ecosystem",
    "change": 7.24,
    "tags": [
      "DSP",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 261.94000244140625,
    "referenceClose": 244.25,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "sipic",
    "sub": "Silicon photonics",
    "role": "Integrated silicon photonics and foundry capabilities",
    "change": 13.26,
    "tags": [
      "SiPh",
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 123.0,
    "referenceClose": 108.5999984741211,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Lasers, transceivers and optical engine building blocks",
    "change": -6.78,
    "tags": [
      "laser",
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 295.8299865722656,
    "referenceClose": 317.3599853515625,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Datacom lasers and optical components",
    "change": 1.15,
    "tags": [
      "laser",
      "datacom"
    ],
    "priceStatus": "ok",
    "latestClose": 941.6500244140625,
    "referenceClose": 930.9099731445312,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "STM",
    "quoteSymbol": "STM",
    "name": "STMicro",
    "market": "EU",
    "segment": "sipic",
    "sub": "Photonics platform",
    "role": "Photonics and advanced semiconductor platform exposure",
    "change": 3.49,
    "tags": [
      "photonics"
    ],
    "priceStatus": "ok",
    "latestClose": 51.93000030517578,
    "referenceClose": 50.18000030517578,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "GFS",
    "quoteSymbol": "GFS",
    "name": "GlobalFoundries",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Silicon photonics and specialty process platform",
    "change": 2.47,
    "tags": [
      "foundry",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 49.0,
    "referenceClose": 47.81999969482422,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "TSEM",
    "quoteSymbol": "TSEM",
    "name": "Tower Semiconductor",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Analog, photonics and specialty manufacturing",
    "change": 3.07,
    "tags": [
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 230.47000122070312,
    "referenceClose": 223.60000610351562,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "sipic",
    "sub": "Optical systems",
    "role": "Photonic service engines and coherent optics",
    "change": -2.72,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 10.390000343322754,
    "referenceClose": 10.680000305175781,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "sipic",
    "sub": "Acacia optics",
    "role": "Coherent modules and optical interconnect roadmap",
    "change": -2.57,
    "tags": [
      "Acacia",
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 106.69999694824219,
    "referenceClose": 109.51000213623047,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "sipic",
    "sub": "Coherent optics",
    "role": "Coherent optical engine and network platforms",
    "change": 2.33,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 356.9100036621094,
    "referenceClose": 348.79998779296875,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "POET",
    "quoteSymbol": "POET",
    "name": "POET Technologies",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical interposer",
    "role": "Optical interposer platform for transceivers",
    "change": -0.38,
    "tags": [
      "interposer"
    ],
    "priceStatus": "ok",
    "latestClose": 7.769999980926514,
    "referenceClose": 7.800000190734863,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "LWLG",
    "quoteSymbol": "LWLG",
    "name": "Lightwave Logic",
    "market": "US",
    "segment": "sipic",
    "sub": "EO polymer",
    "role": "Electro-optic polymer material platform",
    "change": 4.12,
    "tags": [
      "material"
    ],
    "priceStatus": "ok",
    "latestClose": 5.309999942779541,
    "referenceClose": 5.099999904632568,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "4966.TWO",
    "quoteSymbol": "4966.TWO",
    "name": "譜瑞-KY",
    "market": "TW",
    "segment": "sipic",
    "sub": "High-speed interface",
    "role": "High-speed interface ICs and data transmission",
    "change": 2.88,
    "tags": [
      "interface"
    ],
    "priceStatus": "ok",
    "latestClose": 572.0,
    "referenceClose": 556.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "6789.TW",
    "quoteSymbol": "6789.TW",
    "name": "采鈺",
    "market": "TW",
    "segment": "sipic",
    "sub": "Optical process",
    "role": "Optical semiconductor process and sensor platform",
    "change": 7.38,
    "tags": [
      "process"
    ],
    "priceStatus": "ok",
    "latestClose": 465.5,
    "referenceClose": 433.5,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "688313.SH",
    "quoteSymbol": "688313.SS",
    "name": "仕佳光子",
    "market": "CN",
    "segment": "sipic",
    "sub": "PLC / optical chip",
    "role": "PLC splitter, AWG and optical chip supplier",
    "change": -2.05,
    "tags": [
      "PLC",
      "chip"
    ],
    "priceStatus": "ok",
    "latestClose": 157.3000030517578,
    "referenceClose": 160.60000610351562,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "laser",
    "sub": "Laser / InP",
    "role": "InP lasers, VCSELs, coherent and datacom components",
    "change": -6.78,
    "tags": [
      "InP",
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 295.8299865722656,
    "referenceClose": 317.3599853515625,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "laser",
    "sub": "Datacom laser",
    "role": "EML, DFB and high-speed datacom laser supply",
    "change": 1.15,
    "tags": [
      "EML",
      "DFB"
    ],
    "priceStatus": "ok",
    "latestClose": 941.6500244140625,
    "referenceClose": 930.9099731445312,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "laser",
    "sub": "Laser driver / TIA",
    "role": "Laser drivers, TIAs and analog front-end",
    "change": 3.52,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 285.57000732421875,
    "referenceClose": 275.8599853515625,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "IPGP",
    "quoteSymbol": "IPGP",
    "name": "IPG Photonics",
    "market": "US",
    "segment": "laser",
    "sub": "Fiber laser",
    "role": "Laser technology and optical components",
    "change": 2.05,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 78.12000274658203,
    "referenceClose": 76.55000305175781,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "AXTI",
    "quoteSymbol": "AXTI",
    "name": "AXT",
    "market": "US",
    "segment": "laser",
    "sub": "Substrate",
    "role": "Compound semiconductor substrates",
    "change": 12.72,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 78.94000244140625,
    "referenceClose": 70.02999877929688,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "IQE.L",
    "quoteSymbol": "IQE.L",
    "name": "IQE",
    "market": "EU",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "Compound semiconductor epitaxy wafers",
    "change": 8.67,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 46.400001525878906,
    "referenceClose": 42.70000076293945,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Compound semiconductor and optical components",
    "change": 6.27,
    "tags": [
      "InP",
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 2211.0,
    "referenceClose": 2080.5,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "6503.T",
    "quoteSymbol": "6503.T",
    "name": "三菱電機",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Optical devices, lasers and industrial electronics",
    "change": 2.2,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 5239.0,
    "referenceClose": 5126.0,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "6965.T",
    "quoteSymbol": "6965.T",
    "name": "浜松光子",
    "market": "JP",
    "segment": "laser",
    "sub": "Photonics",
    "role": "Photodetectors, optoelectronics and photonics devices",
    "change": 4.27,
    "tags": [
      "detector"
    ],
    "priceStatus": "ok",
    "latestClose": 2342.5,
    "referenceClose": 2246.5,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "AMS.SW",
    "quoteSymbol": "AMS.SW",
    "name": "ams OSRAM",
    "market": "EU",
    "segment": "laser",
    "sub": "Emitter",
    "role": "Emitters, sensors and photonics devices",
    "change": 17.0,
    "tags": [
      "emitter"
    ],
    "priceStatus": "ok",
    "latestClose": 20.100000381469727,
    "referenceClose": 17.18000030517578,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "3105.TWO",
    "quoteSymbol": "3105.TWO",
    "name": "穩懋",
    "market": "TW",
    "segment": "laser",
    "sub": "GaAs foundry",
    "role": "GaAs foundry with photonics-adjacent capabilities",
    "change": 6.58,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 502.0,
    "referenceClose": 471.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "3081.TWO",
    "quoteSymbol": "3081.TWO",
    "name": "聯亞",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "III-V epitaxy wafers for optical communications",
    "change": -0.74,
    "tags": [
      "epi",
      "III-V"
    ],
    "priceStatus": "ok",
    "latestClose": 2700.0,
    "referenceClose": 2720.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "2455.TW",
    "quoteSymbol": "2455.TW",
    "name": "全新",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "GaAs/InP epitaxy and compound semiconductor materials",
    "change": 3.75,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 554.0,
    "referenceClose": 534.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "8086.TWO",
    "quoteSymbol": "8086.TWO",
    "name": "宏捷科",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "GaAs foundry and compound semiconductor devices",
    "change": 2.31,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 110.5,
    "referenceClose": 108.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "4991.TWO",
    "quoteSymbol": "4991.TWO",
    "name": "環宇-KY",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "Compound semiconductor and optical device exposure",
    "change": 7.54,
    "tags": [
      "compound"
    ],
    "priceStatus": "ok",
    "latestClose": 463.5,
    "referenceClose": 431.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "laser",
    "sub": "Optical component",
    "role": "Optical communication components and modules",
    "change": 1.26,
    "tags": [
      "optical"
    ],
    "priceStatus": "ok",
    "latestClose": 563.0,
    "referenceClose": 556.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser chip",
    "role": "Optical communication laser chips",
    "change": -4.74,
    "tags": [
      "laser chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1700.030029296875,
    "referenceClose": 1784.6600341796875,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser / module",
    "role": "Laser equipment and optical communication products",
    "change": -2.72,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 102.9000015258789,
    "referenceClose": 105.77999877929688,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "APH",
    "quoteSymbol": "APH",
    "name": "Amphenol",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "High-speed interconnect and optical connector ecosystem",
    "change": 8.43,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 84.08999633789062,
    "referenceClose": 77.55000305175781,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "GLW",
    "quoteSymbol": "GLW",
    "name": "Corning",
    "market": "US",
    "segment": "component",
    "sub": "Fiber / glass",
    "role": "Optical fiber, glass and datacenter cabling",
    "change": 4.4,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 156.74000549316406,
    "referenceClose": 150.1300048828125,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "TEL",
    "quoteSymbol": "TEL",
    "name": "TE Connectivity",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "Connectors, cable assemblies and sensors",
    "change": 6.41,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 218.58999633789062,
    "referenceClose": 205.4199981689453,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers, modulators and optical subassemblies",
    "change": -6.78,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 295.8299865722656,
    "referenceClose": 317.3599853515625,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers and optical communication components",
    "change": 1.15,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 941.6500244140625,
    "referenceClose": 930.9099731445312,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "component",
    "sub": "Manufacturing",
    "role": "Precision optical manufacturing and assembly",
    "change": 7.42,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 417.3900146484375,
    "referenceClose": 388.54998779296875,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "3711.TW",
    "quoteSymbol": "3711.TW",
    "name": "日月光投控",
    "market": "TW",
    "segment": "component",
    "sub": "Advanced packaging",
    "role": "Semiconductor packaging and system-in-package",
    "change": 13.84,
    "tags": [
      "packaging"
    ],
    "priceStatus": "ok",
    "latestClose": 699.0,
    "referenceClose": 614.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "2449.TW",
    "quoteSymbol": "2449.TW",
    "name": "京元電",
    "market": "TW",
    "segment": "component",
    "sub": "Test",
    "role": "IC testing services for high-speed chips",
    "change": 17.36,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 311.0,
    "referenceClose": 265.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "6515.TW",
    "quoteSymbol": "6515.TW",
    "name": "穎崴",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card / socket",
    "role": "High-speed test interface and sockets",
    "change": -4.41,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 5850.0,
    "referenceClose": 6120.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "6223.TWO",
    "quoteSymbol": "6223.TWO",
    "name": "旺矽",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card",
    "role": "Probe cards and testing interface",
    "change": -1.55,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 5415.0,
    "referenceClose": 5500.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "3037.TW",
    "quoteSymbol": "3037.TW",
    "name": "欣興",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and advanced PCB",
    "change": 26.06,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1185.0,
    "referenceClose": 940.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "3189.TW",
    "quoteSymbol": "3189.TW",
    "name": "景碩",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate supplier",
    "change": 19.5,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 962.0,
    "referenceClose": 805.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "8046.TW",
    "quoteSymbol": "8046.TW",
    "name": "南電",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and PCB",
    "change": 16.43,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1240.0,
    "referenceClose": 1065.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "2383.TW",
    "quoteSymbol": "2383.TW",
    "name": "台光電",
    "market": "TW",
    "segment": "component",
    "sub": "Copper clad laminate",
    "role": "High-speed CCL for AI servers and switches",
    "change": 7.56,
    "tags": [
      "CCL"
    ],
    "priceStatus": "ok",
    "latestClose": 5050.0,
    "referenceClose": 4695.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "component",
    "sub": "Connector / RF",
    "role": "Connectors and optical communication components",
    "change": 1.32,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 1530.0,
    "referenceClose": 1510.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "3363.TWO",
    "quoteSymbol": "3363.TWO",
    "name": "上詮",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber optic components and passive devices",
    "change": -0.46,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 652.0,
    "referenceClose": 655.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "component",
    "sub": "Optical subassembly",
    "role": "Optical communication subassemblies and packaging",
    "change": -2.29,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 513.0,
    "referenceClose": 525.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "6451.TW",
    "quoteSymbol": "6451.TW",
    "name": "訊芯-KY",
    "market": "TW",
    "segment": "component",
    "sub": "SiP / optical packaging",
    "role": "System-in-package and optical communication assembly",
    "change": -1.67,
    "tags": [
      "SiP"
    ],
    "priceStatus": "ok",
    "latestClose": 412.0,
    "referenceClose": 419.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber arrays, splitters and optical passive components",
    "change": 0.15,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 653.0,
    "referenceClose": 652.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical communication component supplier",
    "change": 0.3,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 100.0,
    "referenceClose": 99.69999694824219,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive components and precision parts",
    "change": -3.5,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 267.92999267578125,
    "referenceClose": 277.6499938964844,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "300548.SZ",
    "quoteSymbol": "300548.SZ",
    "name": "博創科技",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive and active components",
    "change": -0.16,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 231.02000427246094,
    "referenceClose": 231.38999938964844,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "601869.SH",
    "quoteSymbol": "601869.SS",
    "name": "長飛光纖",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber",
    "role": "Optical fiber and cable",
    "change": -6.22,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 438.0,
    "referenceClose": 467.0299987792969,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "600487.SH",
    "quoteSymbol": "600487.SS",
    "name": "亨通光電",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber cable and optical network products",
    "change": -1.62,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 67.37999725341797,
    "referenceClose": 68.48999786376953,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "5801.T",
    "quoteSymbol": "5801.T",
    "name": "古河電工",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Optical fiber, cable and network materials",
    "change": -1.92,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 3826.0,
    "referenceClose": 3901.0,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "5803.T",
    "quoteSymbol": "5803.T",
    "name": "藤倉",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber, cable and optical interconnect products",
    "change": 0.69,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 4986.0,
    "referenceClose": 4952.0,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "4062.T",
    "quoteSymbol": "4062.T",
    "name": "Ibiden",
    "market": "JP",
    "segment": "component",
    "sub": "Substrate",
    "role": "Advanced IC substrates",
    "change": 19.38,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 23345.0,
    "referenceClose": 19555.0,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom and telecom optical transceivers",
    "change": -6.78,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 295.8299865722656,
    "referenceClose": 317.3599853515625,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "module",
    "sub": "Laser / module",
    "role": "Laser engines and optical module supply",
    "change": 1.15,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 941.6500244140625,
    "referenceClose": 930.9099731445312,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "module",
    "sub": "Optical manufacturing",
    "role": "Optical module contract manufacturing",
    "change": 7.42,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 417.3900146484375,
    "referenceClose": 388.54998779296875,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "module",
    "sub": "Coherent module",
    "role": "Coherent optical modules and transport platforms",
    "change": 2.33,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 356.9100036621094,
    "referenceClose": 348.79998779296875,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "module",
    "sub": "Acacia module",
    "role": "Acacia coherent optics and pluggable modules",
    "change": -2.57,
    "tags": [
      "Acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 106.69999694824219,
    "referenceClose": 109.51000213623047,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "module",
    "sub": "Optical module",
    "role": "Coherent optics and network system modules",
    "change": -2.72,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 10.390000343322754,
    "referenceClose": 10.680000305175781,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical communication modules and components",
    "change": 1.26,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 563.0,
    "referenceClose": 556.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "4977.TW",
    "quoteSymbol": "4977.TW",
    "name": "眾達-KY",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical transceiver supplier",
    "change": -2.6,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 168.5,
    "referenceClose": 173.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver component",
    "role": "Optical communication and connector products",
    "change": 1.32,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1530.0,
    "referenceClose": 1510.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "module",
    "sub": "OSA",
    "role": "Optical subassemblies for transceivers",
    "change": -2.29,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 513.0,
    "referenceClose": 525.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "module",
    "sub": "Passive optical",
    "role": "Fiber components used in modules",
    "change": 0.15,
    "tags": [
      "passive"
    ],
    "priceStatus": "ok",
    "latestClose": 653.0,
    "referenceClose": 652.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module exposure",
    "change": 0.3,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 100.0,
    "referenceClose": 99.69999694824219,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "4908.TWO",
    "quoteSymbol": "4908.TWO",
    "name": "前鼎",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module and equipment",
    "change": -11.76,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 210.0,
    "referenceClose": 238.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "300308.SZ",
    "quoteSymbol": "300308.SZ",
    "name": "中際旭創",
    "market": "CN",
    "segment": "module",
    "sub": "800G / 1.6T",
    "role": "High-speed optical transceiver leader",
    "change": -0.02,
    "tags": [
      "800G",
      "1.6T"
    ],
    "priceStatus": "ok",
    "latestClose": 895.8599853515625,
    "referenceClose": 896.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "300502.SZ",
    "quoteSymbol": "300502.SZ",
    "name": "新易盛",
    "market": "CN",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom optical transceivers",
    "change": 2.51,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 435.0,
    "referenceClose": 424.3399963378906,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "002281.SZ",
    "quoteSymbol": "002281.SZ",
    "name": "光迅科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical devices and modules",
    "change": -4.83,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 181.99000549316406,
    "referenceClose": 191.22000122070312,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "603083.SH",
    "quoteSymbol": "603083.SS",
    "name": "劍橋科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical modules and broadband equipment",
    "change": -4.29,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 209.6300048828125,
    "referenceClose": 219.02999877929688,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical engine parts",
    "role": "High-speed module precision components",
    "change": -3.5,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 267.92999267578125,
    "referenceClose": 277.6499938964844,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "688205.SH",
    "quoteSymbol": "688205.SS",
    "name": "德科立",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical transceiver modules",
    "change": -1.6,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 210.67999267578125,
    "referenceClose": 214.10000610351562,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication and laser products",
    "change": -2.72,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 102.9000015258789,
    "referenceClose": 105.77999877929688,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical network",
    "role": "Optical network systems and modules",
    "change": -5.39,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 41.08000183105469,
    "referenceClose": 43.41999816894531,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "module",
    "sub": "Optical device",
    "role": "Optical components and communication devices",
    "change": 6.27,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 2211.0,
    "referenceClose": 2080.5,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "ANET",
    "quoteSymbol": "ANET",
    "name": "Arista Networks",
    "market": "US",
    "segment": "system",
    "sub": "AI switch",
    "role": "AI datacenter Ethernet switches",
    "change": 3.59,
    "tags": [
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 206.5500030517578,
    "referenceClose": 199.38999938964844,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "system",
    "sub": "Switch / router",
    "role": "Enterprise and cloud networking systems",
    "change": -2.57,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 106.69999694824219,
    "referenceClose": 109.51000213623047,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "HPE",
    "quoteSymbol": "HPE",
    "name": "HPE",
    "market": "US",
    "segment": "system",
    "sub": "Server / networking",
    "role": "AI servers, networking and cloud infrastructure",
    "change": 3.59,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 62.939998626708984,
    "referenceClose": 60.7599983215332,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "DELL",
    "quoteSymbol": "DELL",
    "name": "Dell",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and enterprise infrastructure",
    "change": -0.91,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 562.8900146484375,
    "referenceClose": 568.0599975585938,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "SMCI",
    "quoteSymbol": "SMCI",
    "name": "Supermicro",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server platforms and rack-scale systems",
    "change": 10.67,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 43.2599983215332,
    "referenceClose": 39.09000015258789,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "CLS",
    "quoteSymbol": "CLS",
    "name": "Celestica",
    "market": "US",
    "segment": "system",
    "sub": "ODM / EMS",
    "role": "Cloud hardware and networking manufacturing",
    "change": 9.86,
    "tags": [
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 365.44000244140625,
    "referenceClose": 332.6300048828125,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "JBL",
    "quoteSymbol": "JBL",
    "name": "Jabil",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing for networking systems",
    "change": 5.73,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 316.739990234375,
    "referenceClose": 299.57000732421875,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "FLEX",
    "quoteSymbol": "FLEX",
    "name": "Flex",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing and cloud hardware",
    "change": 5.69,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 114.68000030517578,
    "referenceClose": 108.51000213623047,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "2345.TW",
    "quoteSymbol": "2345.TW",
    "name": "智邦",
    "market": "TW",
    "segment": "system",
    "sub": "Switch ODM",
    "role": "White-box switch and cloud networking ODM",
    "change": 5.28,
    "tags": [
      "switch",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 1895.0,
    "referenceClose": 1800.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "2382.TW",
    "quoteSymbol": "2382.TW",
    "name": "廣達",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and cloud infrastructure ODM",
    "change": -1.6,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 338.5,
    "referenceClose": 344.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "6669.TW",
    "quoteSymbol": "6669.TW",
    "name": "緯穎",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "Cloud datacenter server ODM",
    "change": -0.94,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 2115.0,
    "referenceClose": 2135.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "2317.TW",
    "quoteSymbol": "2317.TW",
    "name": "鴻海",
    "market": "TW",
    "segment": "system",
    "sub": "EMS / server",
    "role": "AI server and system assembly",
    "change": 0.0,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 250.5,
    "referenceClose": 250.5,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "2308.TW",
    "quoteSymbol": "2308.TW",
    "name": "台達電",
    "market": "TW",
    "segment": "system",
    "sub": "Power / thermal",
    "role": "Power, thermal and datacenter infrastructure",
    "change": 13.35,
    "tags": [
      "power",
      "thermal"
    ],
    "priceStatus": "ok",
    "latestClose": 1910.0,
    "referenceClose": 1685.0,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "3706.TW",
    "quoteSymbol": "3706.TW",
    "name": "神達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and datacenter system integration",
    "change": -2.48,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 78.5,
    "referenceClose": 80.5,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "3231.TW",
    "quoteSymbol": "3231.TW",
    "name": "緯創",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and system integration",
    "change": -1.07,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 184.5,
    "referenceClose": 186.5,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "2356.TW",
    "quoteSymbol": "2356.TW",
    "name": "英業達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and cloud equipment manufacturing",
    "change": -2.6,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 59.900001525878906,
    "referenceClose": 61.5,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "3380.TW",
    "quoteSymbol": "3380.TW",
    "name": "明泰",
    "market": "TW",
    "segment": "system",
    "sub": "Networking",
    "role": "Networking products and broadband equipment",
    "change": 4.12,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 31.600000381469727,
    "referenceClose": 30.350000381469727,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "6285.TW",
    "quoteSymbol": "6285.TW",
    "name": "啟碁",
    "market": "TW",
    "segment": "system",
    "sub": "Network device",
    "role": "Wireless and networking equipment",
    "change": 5.08,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 238.0,
    "referenceClose": 226.5,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "system",
    "sub": "Optical systems",
    "role": "Optical communication and laser systems",
    "change": -2.72,
    "tags": [
      "system"
    ],
    "priceStatus": "ok",
    "latestClose": 102.9000015258789,
    "referenceClose": 105.77999877929688,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "system",
    "sub": "Optical network",
    "role": "Optical transmission and network equipment",
    "change": -5.39,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 41.08000183105469,
    "referenceClose": 43.41999816894531,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "000063.SZ",
    "quoteSymbol": "000063.SZ",
    "name": "中興通訊",
    "market": "CN",
    "segment": "system",
    "sub": "Telecom equipment",
    "role": "Telecom and datacenter network equipment",
    "change": 0.16,
    "tags": [
      "telecom"
    ],
    "priceStatus": "ok",
    "latestClose": 31.920000076293945,
    "referenceClose": 31.8700008392334,
    "priceDate": "2026-09-24",
    "referenceDate": "2026-09-17"
  },
  {
    "ticker": "6701.T",
    "quoteSymbol": "6701.T",
    "name": "NEC",
    "market": "JP",
    "segment": "system",
    "sub": "Network systems",
    "role": "Telecom, submarine and network systems",
    "change": 0.06,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 4815.0,
    "referenceClose": 4812.0,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  },
  {
    "ticker": "6702.T",
    "quoteSymbol": "6702.T",
    "name": "Fujitsu",
    "market": "JP",
    "segment": "system",
    "sub": "ICT systems",
    "role": "ICT infrastructure and network systems",
    "change": 1.23,
    "tags": [
      "ICT"
    ],
    "priceStatus": "ok",
    "latestClose": 4028.0,
    "referenceClose": 3979.0,
    "priceDate": "2026-09-25",
    "referenceDate": "2026-09-18"
  }
];

