window.HEATMAP_META = {
  "title": "光通訊 / CPO 供應鏈熱力圖",
  "subtitle": "六大環節、跨市場上市公司、同公司可重複出現在多個供應鏈位置。",
  "lastUpdated": "2026-08-15",
  "dateRange": "2026-08-07 → 2026-08-14",
  "totalTiles": 126,
  "totalCompanies": 97,
  "quoteSymbolsUpdated": 97,
  "quoteSymbolsFailed": 0,
  "priceStatusCounts": {
    "ok": 126
  },
  "topGainer": {
    "ticker": "SMCI",
    "name": "Supermicro",
    "change": 27.98
  },
  "topLoser": {
    "ticker": "COHR",
    "name": "Coherent",
    "change": -14.06
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
    "change": -8.13,
    "tags": [
      "ASIC",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 392.989990234375,
    "referenceClose": 427.760009765625,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "asic",
    "sub": "GPU / Network ASIC",
    "role": "GPU, NVLink, Spectrum-X ecosystem",
    "change": 0.54,
    "tags": [
      "GPU",
      "networking"
    ],
    "priceStatus": "ok",
    "latestClose": 225.16000366210938,
    "referenceClose": 223.9600067138672,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "asic",
    "sub": "DSP / PAM4",
    "role": "Optical DSP, custom silicon, DCI chips",
    "change": 1.51,
    "tags": [
      "DSP",
      "custom silicon"
    ],
    "priceStatus": "ok",
    "latestClose": 222.02000427246094,
    "referenceClose": 218.72000122070312,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "CRDO",
    "quoteSymbol": "CRDO",
    "name": "Credo",
    "market": "US",
    "segment": "asic",
    "sub": "Retimer / DSP",
    "role": "High-speed connectivity and optical DSP",
    "change": 4.01,
    "tags": [
      "DSP",
      "retimer"
    ],
    "priceStatus": "ok",
    "latestClose": 259.8999938964844,
    "referenceClose": 249.88999938964844,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "ALAB",
    "quoteSymbol": "ALAB",
    "name": "Astera Labs",
    "market": "US",
    "segment": "asic",
    "sub": "PCIe / CXL",
    "role": "AI data-center connectivity silicon",
    "change": -3.76,
    "tags": [
      "retimer",
      "CXL"
    ],
    "priceStatus": "ok",
    "latestClose": 321.6099853515625,
    "referenceClose": 334.1700134277344,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Laser drivers, TIAs, high-speed analog",
    "change": 1.81,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 316.44000244140625,
    "referenceClose": 310.82000732421875,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "SMTC",
    "quoteSymbol": "SMTC",
    "name": "Semtech",
    "market": "US",
    "segment": "asic",
    "sub": "Signal IC",
    "role": "Signal integrity and optical analog ICs",
    "change": 0.67,
    "tags": [
      "signal"
    ],
    "priceStatus": "ok",
    "latestClose": 140.35000610351562,
    "referenceClose": 139.4199981689453,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "asic",
    "sub": "Network silicon",
    "role": "Silicon One and Acacia optical stack",
    "change": -8.03,
    "tags": [
      "switch",
      "acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 111.68000030517578,
    "referenceClose": 121.43000030517578,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "asic",
    "sub": "Coherent DSP",
    "role": "WaveLogic coherent DSP and systems",
    "change": 3.97,
    "tags": [
      "coherent",
      "DSP"
    ],
    "priceStatus": "ok",
    "latestClose": 428.7699890136719,
    "referenceClose": 412.3900146484375,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "AMD",
    "quoteSymbol": "AMD",
    "name": "AMD",
    "market": "US",
    "segment": "asic",
    "sub": "AI accelerator",
    "role": "AI accelerators and adaptive compute",
    "change": 6.42,
    "tags": [
      "accelerator"
    ],
    "priceStatus": "ok",
    "latestClose": 514.3900146484375,
    "referenceClose": 483.3599853515625,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "asic",
    "sub": "Foundry / I/O",
    "role": "Foundry, Ethernet, historical silicon photonics",
    "change": 0.84,
    "tags": [
      "foundry",
      "ethernet"
    ],
    "priceStatus": "ok",
    "latestClose": 102.5,
    "referenceClose": 101.6500015258789,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "QCOM",
    "quoteSymbol": "QCOM",
    "name": "Qualcomm",
    "market": "US",
    "segment": "asic",
    "sub": "Connectivity IC",
    "role": "High-speed connectivity and edge AI silicon",
    "change": -1.23,
    "tags": [
      "connectivity"
    ],
    "priceStatus": "ok",
    "latestClose": 165.7899932861328,
    "referenceClose": 167.86000061035156,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "3661.TW",
    "quoteSymbol": "3661.TW",
    "name": "世芯-KY",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "Advanced-node custom ASIC design service",
    "change": 13.32,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 4210.0,
    "referenceClose": 3715.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "3443.TW",
    "quoteSymbol": "3443.TW",
    "name": "創意",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "GUC ASIC design and implementation",
    "change": 20.24,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 5465.0,
    "referenceClose": 4545.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "2454.TW",
    "quoteSymbol": "2454.TW",
    "name": "聯發科",
    "market": "TW",
    "segment": "asic",
    "sub": "Connectivity SoC",
    "role": "Networking, SerDes and edge AI chip exposure",
    "change": 7.95,
    "tags": [
      "SoC"
    ],
    "priceStatus": "ok",
    "latestClose": 4210.0,
    "referenceClose": 3900.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "5274.TWO",
    "quoteSymbol": "5274.TWO",
    "name": "信驊",
    "market": "TW",
    "segment": "asic",
    "sub": "BMC",
    "role": "Server management silicon",
    "change": 8.23,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 17690.0,
    "referenceClose": 16345.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "688536.SH",
    "quoteSymbol": "688536.SS",
    "name": "思瑞浦",
    "market": "CN",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Analog and signal-chain ICs",
    "change": 9.04,
    "tags": [
      "analog"
    ],
    "priceStatus": "ok",
    "latestClose": 274.5,
    "referenceClose": 251.75,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "asic",
    "sub": "Laser driver link",
    "role": "Optical chip supplier with upstream exposure",
    "change": 12.06,
    "tags": [
      "optical chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1519.0,
    "referenceClose": 1355.5,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "2330.TW",
    "quoteSymbol": "2330.TW",
    "name": "台積電",
    "market": "TW",
    "segment": "sipic",
    "sub": "Foundry",
    "role": "Advanced-node and packaging platform for CPO ecosystem",
    "change": 1.05,
    "tags": [
      "foundry",
      "CoWoS"
    ],
    "priceStatus": "ok",
    "latestClose": 2395.0,
    "referenceClose": 2370.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "AVGO",
    "quoteSymbol": "AVGO",
    "name": "Broadcom",
    "market": "US",
    "segment": "sipic",
    "sub": "Co-packaged optics",
    "role": "CPO roadmap and switch silicon integration",
    "change": -8.13,
    "tags": [
      "CPO",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 392.989990234375,
    "referenceClose": 427.760009765625,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical I/O ecosystem",
    "role": "AI cluster architecture drives optical I/O demand",
    "change": 0.54,
    "tags": [
      "AI",
      "optical I/O"
    ],
    "priceStatus": "ok",
    "latestClose": 225.16000366210938,
    "referenceClose": 223.9600067138672,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical platform",
    "role": "DSP plus silicon photonics partnership ecosystem",
    "change": 1.51,
    "tags": [
      "DSP",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 222.02000427246094,
    "referenceClose": 218.72000122070312,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "sipic",
    "sub": "Silicon photonics",
    "role": "Integrated silicon photonics and foundry capabilities",
    "change": 0.84,
    "tags": [
      "SiPh",
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 102.5,
    "referenceClose": 101.6500015258789,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Lasers, transceivers and optical engine building blocks",
    "change": -14.06,
    "tags": [
      "laser",
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 325.8299865722656,
    "referenceClose": 379.1300048828125,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Datacom lasers and optical components",
    "change": 4.04,
    "tags": [
      "laser",
      "datacom"
    ],
    "priceStatus": "ok",
    "latestClose": 926.1400146484375,
    "referenceClose": 890.1699829101562,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "STM",
    "quoteSymbol": "STM",
    "name": "STMicro",
    "market": "EU",
    "segment": "sipic",
    "sub": "Photonics platform",
    "role": "Photonics and advanced semiconductor platform exposure",
    "change": -3.23,
    "tags": [
      "photonics"
    ],
    "priceStatus": "ok",
    "latestClose": 54.290000915527344,
    "referenceClose": 56.099998474121094,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "GFS",
    "quoteSymbol": "GFS",
    "name": "GlobalFoundries",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Silicon photonics and specialty process platform",
    "change": 1.21,
    "tags": [
      "foundry",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 54.58000183105469,
    "referenceClose": 53.93000030517578,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "TSEM",
    "quoteSymbol": "TSEM",
    "name": "Tower Semiconductor",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Analog, photonics and specialty manufacturing",
    "change": 5.14,
    "tags": [
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 265.4800109863281,
    "referenceClose": 252.49000549316406,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "sipic",
    "sub": "Optical systems",
    "role": "Photonic service engines and coherent optics",
    "change": 14.96,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 10.760000228881836,
    "referenceClose": 9.359999656677246,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "sipic",
    "sub": "Acacia optics",
    "role": "Coherent modules and optical interconnect roadmap",
    "change": -8.03,
    "tags": [
      "Acacia",
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 111.68000030517578,
    "referenceClose": 121.43000030517578,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "sipic",
    "sub": "Coherent optics",
    "role": "Coherent optical engine and network platforms",
    "change": 3.97,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 428.7699890136719,
    "referenceClose": 412.3900146484375,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "POET",
    "quoteSymbol": "POET",
    "name": "POET Technologies",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical interposer",
    "role": "Optical interposer platform for transceivers",
    "change": 7.52,
    "tags": [
      "interposer"
    ],
    "priceStatus": "ok",
    "latestClose": 9.579999923706055,
    "referenceClose": 8.90999984741211,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "LWLG",
    "quoteSymbol": "LWLG",
    "name": "Lightwave Logic",
    "market": "US",
    "segment": "sipic",
    "sub": "EO polymer",
    "role": "Electro-optic polymer material platform",
    "change": -6.66,
    "tags": [
      "material"
    ],
    "priceStatus": "ok",
    "latestClose": 7.570000171661377,
    "referenceClose": 8.109999656677246,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "4966.TWO",
    "quoteSymbol": "4966.TWO",
    "name": "譜瑞-KY",
    "market": "TW",
    "segment": "sipic",
    "sub": "High-speed interface",
    "role": "High-speed interface ICs and data transmission",
    "change": -4.68,
    "tags": [
      "interface"
    ],
    "priceStatus": "ok",
    "latestClose": 570.0,
    "referenceClose": 598.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "6789.TW",
    "quoteSymbol": "6789.TW",
    "name": "采鈺",
    "market": "TW",
    "segment": "sipic",
    "sub": "Optical process",
    "role": "Optical semiconductor process and sensor platform",
    "change": 6.12,
    "tags": [
      "process"
    ],
    "priceStatus": "ok",
    "latestClose": 442.5,
    "referenceClose": 417.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "688313.SH",
    "quoteSymbol": "688313.SS",
    "name": "仕佳光子",
    "market": "CN",
    "segment": "sipic",
    "sub": "PLC / optical chip",
    "role": "PLC splitter, AWG and optical chip supplier",
    "change": 10.23,
    "tags": [
      "PLC",
      "chip"
    ],
    "priceStatus": "ok",
    "latestClose": 140.75999450683594,
    "referenceClose": 127.69999694824219,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "laser",
    "sub": "Laser / InP",
    "role": "InP lasers, VCSELs, coherent and datacom components",
    "change": -14.06,
    "tags": [
      "InP",
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 325.8299865722656,
    "referenceClose": 379.1300048828125,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "laser",
    "sub": "Datacom laser",
    "role": "EML, DFB and high-speed datacom laser supply",
    "change": 4.04,
    "tags": [
      "EML",
      "DFB"
    ],
    "priceStatus": "ok",
    "latestClose": 926.1400146484375,
    "referenceClose": 890.1699829101562,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "laser",
    "sub": "Laser driver / TIA",
    "role": "Laser drivers, TIAs and analog front-end",
    "change": 1.81,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 316.44000244140625,
    "referenceClose": 310.82000732421875,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "IPGP",
    "quoteSymbol": "IPGP",
    "name": "IPG Photonics",
    "market": "US",
    "segment": "laser",
    "sub": "Fiber laser",
    "role": "Laser technology and optical components",
    "change": -4.92,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 85.79000091552734,
    "referenceClose": 90.2300033569336,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "AXTI",
    "quoteSymbol": "AXTI",
    "name": "AXT",
    "market": "US",
    "segment": "laser",
    "sub": "Substrate",
    "role": "Compound semiconductor substrates",
    "change": -7.83,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 81.63999938964844,
    "referenceClose": 88.58000183105469,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "IQE.L",
    "quoteSymbol": "IQE.L",
    "name": "IQE",
    "market": "EU",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "Compound semiconductor epitaxy wafers",
    "change": -0.96,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 46.54999923706055,
    "referenceClose": 47.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Compound semiconductor and optical components",
    "change": 12.05,
    "tags": [
      "InP",
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 2386.0,
    "referenceClose": 2129.5,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "6503.T",
    "quoteSymbol": "6503.T",
    "name": "三菱電機",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Optical devices, lasers and industrial electronics",
    "change": 5.61,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 6153.0,
    "referenceClose": 5826.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "6965.T",
    "quoteSymbol": "6965.T",
    "name": "浜松光子",
    "market": "JP",
    "segment": "laser",
    "sub": "Photonics",
    "role": "Photodetectors, optoelectronics and photonics devices",
    "change": 10.31,
    "tags": [
      "detector"
    ],
    "priceStatus": "ok",
    "latestClose": 2562.0,
    "referenceClose": 2322.5,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "AMS.SW",
    "quoteSymbol": "AMS.SW",
    "name": "ams OSRAM",
    "market": "EU",
    "segment": "laser",
    "sub": "Emitter",
    "role": "Emitters, sensors and photonics devices",
    "change": 4.82,
    "tags": [
      "emitter"
    ],
    "priceStatus": "ok",
    "latestClose": 18.93000030517578,
    "referenceClose": 18.059999465942383,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "3105.TWO",
    "quoteSymbol": "3105.TWO",
    "name": "穩懋",
    "market": "TW",
    "segment": "laser",
    "sub": "GaAs foundry",
    "role": "GaAs foundry with photonics-adjacent capabilities",
    "change": 3.28,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 378.0,
    "referenceClose": 366.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "3081.TWO",
    "quoteSymbol": "3081.TWO",
    "name": "聯亞",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "III-V epitaxy wafers for optical communications",
    "change": 10.2,
    "tags": [
      "epi",
      "III-V"
    ],
    "priceStatus": "ok",
    "latestClose": 2540.0,
    "referenceClose": 2305.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "2455.TW",
    "quoteSymbol": "2455.TW",
    "name": "全新",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "GaAs/InP epitaxy and compound semiconductor materials",
    "change": 4.26,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 379.5,
    "referenceClose": 364.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "8086.TWO",
    "quoteSymbol": "8086.TWO",
    "name": "宏捷科",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "GaAs foundry and compound semiconductor devices",
    "change": 2.24,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 114.0,
    "referenceClose": 111.5,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "4991.TWO",
    "quoteSymbol": "4991.TWO",
    "name": "環宇-KY",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "Compound semiconductor and optical device exposure",
    "change": -1.08,
    "tags": [
      "compound"
    ],
    "priceStatus": "ok",
    "latestClose": 460.0,
    "referenceClose": 465.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "laser",
    "sub": "Optical component",
    "role": "Optical communication components and modules",
    "change": 6.97,
    "tags": [
      "optical"
    ],
    "priceStatus": "ok",
    "latestClose": 522.0,
    "referenceClose": 488.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser chip",
    "role": "Optical communication laser chips",
    "change": 12.06,
    "tags": [
      "laser chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1519.0,
    "referenceClose": 1355.5,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser / module",
    "role": "Laser equipment and optical communication products",
    "change": 2.99,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 109.79000091552734,
    "referenceClose": 106.5999984741211,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "APH",
    "quoteSymbol": "APH",
    "name": "Amphenol",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "High-speed interconnect and optical connector ecosystem",
    "change": -1.22,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 167.11000061035156,
    "referenceClose": 169.17999267578125,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "GLW",
    "quoteSymbol": "GLW",
    "name": "Corning",
    "market": "US",
    "segment": "component",
    "sub": "Fiber / glass",
    "role": "Optical fiber, glass and datacenter cabling",
    "change": 0.19,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 165.99000549316406,
    "referenceClose": 165.67999267578125,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "TEL",
    "quoteSymbol": "TEL",
    "name": "TE Connectivity",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "Connectors, cable assemblies and sensors",
    "change": -0.05,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 216.22999572753906,
    "referenceClose": 216.3300018310547,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers, modulators and optical subassemblies",
    "change": -14.06,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 325.8299865722656,
    "referenceClose": 379.1300048828125,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers and optical communication components",
    "change": 4.04,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 926.1400146484375,
    "referenceClose": 890.1699829101562,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "component",
    "sub": "Manufacturing",
    "role": "Precision optical manufacturing and assembly",
    "change": 1.39,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 570.219970703125,
    "referenceClose": 562.3800048828125,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "3711.TW",
    "quoteSymbol": "3711.TW",
    "name": "日月光投控",
    "market": "TW",
    "segment": "component",
    "sub": "Advanced packaging",
    "role": "Semiconductor packaging and system-in-package",
    "change": 5.3,
    "tags": [
      "packaging"
    ],
    "priceStatus": "ok",
    "latestClose": 616.0,
    "referenceClose": 585.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "2449.TW",
    "quoteSymbol": "2449.TW",
    "name": "京元電",
    "market": "TW",
    "segment": "component",
    "sub": "Test",
    "role": "IC testing services for high-speed chips",
    "change": 2.07,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 247.0,
    "referenceClose": 242.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "6515.TW",
    "quoteSymbol": "6515.TW",
    "name": "穎崴",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card / socket",
    "role": "High-speed test interface and sockets",
    "change": -0.15,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 6750.0,
    "referenceClose": 6760.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "6223.TWO",
    "quoteSymbol": "6223.TWO",
    "name": "旺矽",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card",
    "role": "Probe cards and testing interface",
    "change": 5.57,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 6440.0,
    "referenceClose": 6100.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "3037.TW",
    "quoteSymbol": "3037.TW",
    "name": "欣興",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and advanced PCB",
    "change": 6.81,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1020.0,
    "referenceClose": 955.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "3189.TW",
    "quoteSymbol": "3189.TW",
    "name": "景碩",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate supplier",
    "change": 4.74,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 862.0,
    "referenceClose": 823.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "8046.TW",
    "quoteSymbol": "8046.TW",
    "name": "南電",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and PCB",
    "change": 20.83,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1305.0,
    "referenceClose": 1080.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "2383.TW",
    "quoteSymbol": "2383.TW",
    "name": "台光電",
    "market": "TW",
    "segment": "component",
    "sub": "Copper clad laminate",
    "role": "High-speed CCL for AI servers and switches",
    "change": 17.65,
    "tags": [
      "CCL"
    ],
    "priceStatus": "ok",
    "latestClose": 6165.0,
    "referenceClose": 5240.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "component",
    "sub": "Connector / RF",
    "role": "Connectors and optical communication components",
    "change": 17.74,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 1560.0,
    "referenceClose": 1325.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "3363.TWO",
    "quoteSymbol": "3363.TWO",
    "name": "上詮",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber optic components and passive devices",
    "change": 0.69,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 586.0,
    "referenceClose": 582.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "component",
    "sub": "Optical subassembly",
    "role": "Optical communication subassemblies and packaging",
    "change": 6.92,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 510.0,
    "referenceClose": 477.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "6451.TW",
    "quoteSymbol": "6451.TW",
    "name": "訊芯-KY",
    "market": "TW",
    "segment": "component",
    "sub": "SiP / optical packaging",
    "role": "System-in-package and optical communication assembly",
    "change": 1.07,
    "tags": [
      "SiP"
    ],
    "priceStatus": "ok",
    "latestClose": 425.5,
    "referenceClose": 421.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber arrays, splitters and optical passive components",
    "change": 4.62,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 702.0,
    "referenceClose": 671.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical communication component supplier",
    "change": 11.33,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 83.5,
    "referenceClose": 75.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive components and precision parts",
    "change": 16.05,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 267.7099914550781,
    "referenceClose": 230.67999267578125,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "300548.SZ",
    "quoteSymbol": "300548.SZ",
    "name": "博創科技",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive and active components",
    "change": 9.96,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 194.6699981689453,
    "referenceClose": 177.0399932861328,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "601869.SH",
    "quoteSymbol": "601869.SS",
    "name": "長飛光纖",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber",
    "role": "Optical fiber and cable",
    "change": 4.87,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 355.17999267578125,
    "referenceClose": 338.69000244140625,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "600487.SH",
    "quoteSymbol": "600487.SS",
    "name": "亨通光電",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber cable and optical network products",
    "change": 5.81,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 62.97999954223633,
    "referenceClose": 59.52000045776367,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "5801.T",
    "quoteSymbol": "5801.T",
    "name": "古河電工",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Optical fiber, cable and network materials",
    "change": 5.21,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 4057.0,
    "referenceClose": 3856.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "5803.T",
    "quoteSymbol": "5803.T",
    "name": "藤倉",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber, cable and optical interconnect products",
    "change": 9.26,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 5665.0,
    "referenceClose": 5185.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "4062.T",
    "quoteSymbol": "4062.T",
    "name": "Ibiden",
    "market": "JP",
    "segment": "component",
    "sub": "Substrate",
    "role": "Advanced IC substrates",
    "change": 8.77,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 20785.0,
    "referenceClose": 19110.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom and telecom optical transceivers",
    "change": -14.06,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 325.8299865722656,
    "referenceClose": 379.1300048828125,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "module",
    "sub": "Laser / module",
    "role": "Laser engines and optical module supply",
    "change": 4.04,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 926.1400146484375,
    "referenceClose": 890.1699829101562,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "module",
    "sub": "Optical manufacturing",
    "role": "Optical module contract manufacturing",
    "change": 1.39,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 570.219970703125,
    "referenceClose": 562.3800048828125,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "module",
    "sub": "Coherent module",
    "role": "Coherent optical modules and transport platforms",
    "change": 3.97,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 428.7699890136719,
    "referenceClose": 412.3900146484375,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "module",
    "sub": "Acacia module",
    "role": "Acacia coherent optics and pluggable modules",
    "change": -8.03,
    "tags": [
      "Acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 111.68000030517578,
    "referenceClose": 121.43000030517578,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "module",
    "sub": "Optical module",
    "role": "Coherent optics and network system modules",
    "change": 14.96,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 10.760000228881836,
    "referenceClose": 9.359999656677246,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical communication modules and components",
    "change": 6.97,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 522.0,
    "referenceClose": 488.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "4977.TW",
    "quoteSymbol": "4977.TW",
    "name": "眾達-KY",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical transceiver supplier",
    "change": 7.87,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 144.0,
    "referenceClose": 133.5,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver component",
    "role": "Optical communication and connector products",
    "change": 17.74,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1560.0,
    "referenceClose": 1325.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "module",
    "sub": "OSA",
    "role": "Optical subassemblies for transceivers",
    "change": 6.92,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 510.0,
    "referenceClose": 477.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "module",
    "sub": "Passive optical",
    "role": "Fiber components used in modules",
    "change": 4.62,
    "tags": [
      "passive"
    ],
    "priceStatus": "ok",
    "latestClose": 702.0,
    "referenceClose": 671.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module exposure",
    "change": 11.33,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 83.5,
    "referenceClose": 75.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "4908.TWO",
    "quoteSymbol": "4908.TWO",
    "name": "前鼎",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module and equipment",
    "change": 8.01,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 155.0,
    "referenceClose": 143.5,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "300308.SZ",
    "quoteSymbol": "300308.SZ",
    "name": "中際旭創",
    "market": "CN",
    "segment": "module",
    "sub": "800G / 1.6T",
    "role": "High-speed optical transceiver leader",
    "change": 2.51,
    "tags": [
      "800G",
      "1.6T"
    ],
    "priceStatus": "ok",
    "latestClose": 943.0,
    "referenceClose": 919.8699951171875,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "300502.SZ",
    "quoteSymbol": "300502.SZ",
    "name": "新易盛",
    "market": "CN",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom optical transceivers",
    "change": 6.44,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 448.0799865722656,
    "referenceClose": 420.95001220703125,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "002281.SZ",
    "quoteSymbol": "002281.SZ",
    "name": "光迅科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical devices and modules",
    "change": -0.79,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 191.52000427246094,
    "referenceClose": 193.0399932861328,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "603083.SH",
    "quoteSymbol": "603083.SS",
    "name": "劍橋科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical modules and broadband equipment",
    "change": 20.11,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 185.89999389648438,
    "referenceClose": 154.77999877929688,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical engine parts",
    "role": "High-speed module precision components",
    "change": 16.05,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 267.7099914550781,
    "referenceClose": 230.67999267578125,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "688205.SH",
    "quoteSymbol": "688205.SS",
    "name": "德科立",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical transceiver modules",
    "change": 12.1,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 158.52000427246094,
    "referenceClose": 141.41000366210938,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication and laser products",
    "change": 2.99,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 109.79000091552734,
    "referenceClose": 106.5999984741211,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical network",
    "role": "Optical network systems and modules",
    "change": 4.31,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 40.900001525878906,
    "referenceClose": 39.209999084472656,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "module",
    "sub": "Optical device",
    "role": "Optical components and communication devices",
    "change": 12.05,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 2386.0,
    "referenceClose": 2129.5,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "ANET",
    "quoteSymbol": "ANET",
    "name": "Arista Networks",
    "market": "US",
    "segment": "system",
    "sub": "AI switch",
    "role": "AI datacenter Ethernet switches",
    "change": 5.38,
    "tags": [
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 198.82000732421875,
    "referenceClose": 188.6699981689453,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "system",
    "sub": "Switch / router",
    "role": "Enterprise and cloud networking systems",
    "change": -8.03,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 111.68000030517578,
    "referenceClose": 121.43000030517578,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "HPE",
    "quoteSymbol": "HPE",
    "name": "HPE",
    "market": "US",
    "segment": "system",
    "sub": "Server / networking",
    "role": "AI servers, networking and cloud infrastructure",
    "change": 10.32,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 58.709999084472656,
    "referenceClose": 53.220001220703125,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "DELL",
    "quoteSymbol": "DELL",
    "name": "Dell",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and enterprise infrastructure",
    "change": 8.16,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 490.80999755859375,
    "referenceClose": 453.7699890136719,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "SMCI",
    "quoteSymbol": "SMCI",
    "name": "Supermicro",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server platforms and rack-scale systems",
    "change": 27.98,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 39.84000015258789,
    "referenceClose": 31.1299991607666,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "CLS",
    "quoteSymbol": "CLS",
    "name": "Celestica",
    "market": "US",
    "segment": "system",
    "sub": "ODM / EMS",
    "role": "Cloud hardware and networking manufacturing",
    "change": 5.42,
    "tags": [
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 335.04998779296875,
    "referenceClose": 317.8299865722656,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "JBL",
    "quoteSymbol": "JBL",
    "name": "Jabil",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing for networking systems",
    "change": 6.41,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 363.1000061035156,
    "referenceClose": 341.2200012207031,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "FLEX",
    "quoteSymbol": "FLEX",
    "name": "Flex",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing and cloud hardware",
    "change": 3.96,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 126.16000366210938,
    "referenceClose": 121.3499984741211,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "2345.TW",
    "quoteSymbol": "2345.TW",
    "name": "智邦",
    "market": "TW",
    "segment": "system",
    "sub": "Switch ODM",
    "role": "White-box switch and cloud networking ODM",
    "change": 3.84,
    "tags": [
      "switch",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 2300.0,
    "referenceClose": 2215.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "2382.TW",
    "quoteSymbol": "2382.TW",
    "name": "廣達",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and cloud infrastructure ODM",
    "change": 9.9,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 327.5,
    "referenceClose": 298.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "6669.TW",
    "quoteSymbol": "6669.TW",
    "name": "緯穎",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "Cloud datacenter server ODM",
    "change": 5.49,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 6435.0,
    "referenceClose": 6100.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "2317.TW",
    "quoteSymbol": "2317.TW",
    "name": "鴻海",
    "market": "TW",
    "segment": "system",
    "sub": "EMS / server",
    "role": "AI server and system assembly",
    "change": -0.19,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 259.5,
    "referenceClose": 260.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "2308.TW",
    "quoteSymbol": "2308.TW",
    "name": "台達電",
    "market": "TW",
    "segment": "system",
    "sub": "Power / thermal",
    "role": "Power, thermal and datacenter infrastructure",
    "change": 14.24,
    "tags": [
      "power",
      "thermal"
    ],
    "priceStatus": "ok",
    "latestClose": 1885.0,
    "referenceClose": 1650.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "3706.TW",
    "quoteSymbol": "3706.TW",
    "name": "神達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and datacenter system integration",
    "change": 1.09,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 92.69999694824219,
    "referenceClose": 91.69999694824219,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "3231.TW",
    "quoteSymbol": "3231.TW",
    "name": "緯創",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and system integration",
    "change": 5.45,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 193.5,
    "referenceClose": 183.5,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "2356.TW",
    "quoteSymbol": "2356.TW",
    "name": "英業達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and cloud equipment manufacturing",
    "change": 9.22,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 69.9000015258789,
    "referenceClose": 64.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "3380.TW",
    "quoteSymbol": "3380.TW",
    "name": "明泰",
    "market": "TW",
    "segment": "system",
    "sub": "Networking",
    "role": "Networking products and broadband equipment",
    "change": -0.54,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 27.799999237060547,
    "referenceClose": 27.950000762939453,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "6285.TW",
    "quoteSymbol": "6285.TW",
    "name": "啟碁",
    "market": "TW",
    "segment": "system",
    "sub": "Network device",
    "role": "Wireless and networking equipment",
    "change": 5.15,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 245.0,
    "referenceClose": 233.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "system",
    "sub": "Optical systems",
    "role": "Optical communication and laser systems",
    "change": 2.99,
    "tags": [
      "system"
    ],
    "priceStatus": "ok",
    "latestClose": 109.79000091552734,
    "referenceClose": 106.5999984741211,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "system",
    "sub": "Optical network",
    "role": "Optical transmission and network equipment",
    "change": 4.31,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 40.900001525878906,
    "referenceClose": 39.209999084472656,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "000063.SZ",
    "quoteSymbol": "000063.SZ",
    "name": "中興通訊",
    "market": "CN",
    "segment": "system",
    "sub": "Telecom equipment",
    "role": "Telecom and datacenter network equipment",
    "change": 1.01,
    "tags": [
      "telecom"
    ],
    "priceStatus": "ok",
    "latestClose": 35.04999923706055,
    "referenceClose": 34.70000076293945,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "6701.T",
    "quoteSymbol": "6701.T",
    "name": "NEC",
    "market": "JP",
    "segment": "system",
    "sub": "Network systems",
    "role": "Telecom, submarine and network systems",
    "change": 6.29,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 5168.0,
    "referenceClose": 4862.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  },
  {
    "ticker": "6702.T",
    "quoteSymbol": "6702.T",
    "name": "Fujitsu",
    "market": "JP",
    "segment": "system",
    "sub": "ICT systems",
    "role": "ICT infrastructure and network systems",
    "change": 4.52,
    "tags": [
      "ICT"
    ],
    "priceStatus": "ok",
    "latestClose": 3841.0,
    "referenceClose": 3675.0,
    "priceDate": "2026-08-14",
    "referenceDate": "2026-08-07"
  }
];

