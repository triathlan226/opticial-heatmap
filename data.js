window.HEATMAP_META = {
  "title": "光通訊 / CPO 供應鏈熱力圖",
  "subtitle": "六大環節、跨市場上市公司、同公司可重複出現在多個供應鏈位置。",
  "lastUpdated": "2026-08-22",
  "dateRange": "2026-08-13 → 2026-08-21",
  "totalTiles": 126,
  "totalCompanies": 97,
  "quoteSymbolsUpdated": 97,
  "quoteSymbolsFailed": 0,
  "priceStatusCounts": {
    "ok": 126
  },
  "topGainer": {
    "ticker": "3081.TWO",
    "name": "聯亞",
    "change": 14.96
  },
  "topLoser": {
    "ticker": "FN",
    "name": "Fabrinet",
    "change": -23.42
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
    "change": -6.24,
    "tags": [
      "ASIC",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 368.45001220703125,
    "referenceClose": 392.989990234375,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "asic",
    "sub": "GPU / Network ASIC",
    "role": "GPU, NVLink, Spectrum-X ecosystem",
    "change": -4.64,
    "tags": [
      "GPU",
      "networking"
    ],
    "priceStatus": "ok",
    "latestClose": 214.72000122070312,
    "referenceClose": 225.16000366210938,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "asic",
    "sub": "DSP / PAM4",
    "role": "Optical DSP, custom silicon, DCI chips",
    "change": 6.77,
    "tags": [
      "DSP",
      "custom silicon"
    ],
    "priceStatus": "ok",
    "latestClose": 237.0399932861328,
    "referenceClose": 222.02000427246094,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "CRDO",
    "quoteSymbol": "CRDO",
    "name": "Credo",
    "market": "US",
    "segment": "asic",
    "sub": "Retimer / DSP",
    "role": "High-speed connectivity and optical DSP",
    "change": -11.29,
    "tags": [
      "DSP",
      "retimer"
    ],
    "priceStatus": "ok",
    "latestClose": 230.57000732421875,
    "referenceClose": 259.8999938964844,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "ALAB",
    "quoteSymbol": "ALAB",
    "name": "Astera Labs",
    "market": "US",
    "segment": "asic",
    "sub": "PCIe / CXL",
    "role": "AI data-center connectivity silicon",
    "change": -11.39,
    "tags": [
      "retimer",
      "CXL"
    ],
    "priceStatus": "ok",
    "latestClose": 284.9700012207031,
    "referenceClose": 321.6099853515625,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Laser drivers, TIAs, high-speed analog",
    "change": -15.75,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 266.6099853515625,
    "referenceClose": 316.44000244140625,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "SMTC",
    "quoteSymbol": "SMTC",
    "name": "Semtech",
    "market": "US",
    "segment": "asic",
    "sub": "Signal IC",
    "role": "Signal integrity and optical analog ICs",
    "change": -11.59,
    "tags": [
      "signal"
    ],
    "priceStatus": "ok",
    "latestClose": 124.08999633789062,
    "referenceClose": 140.35000610351562,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "asic",
    "sub": "Network silicon",
    "role": "Silicon One and Acacia optical stack",
    "change": -0.57,
    "tags": [
      "switch",
      "acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 111.04000091552734,
    "referenceClose": 111.68000030517578,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "asic",
    "sub": "Coherent DSP",
    "role": "WaveLogic coherent DSP and systems",
    "change": -7.69,
    "tags": [
      "coherent",
      "DSP"
    ],
    "priceStatus": "ok",
    "latestClose": 395.7900085449219,
    "referenceClose": 428.7699890136719,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "AMD",
    "quoteSymbol": "AMD",
    "name": "AMD",
    "market": "US",
    "segment": "asic",
    "sub": "AI accelerator",
    "role": "AI accelerators and adaptive compute",
    "change": -8.0,
    "tags": [
      "accelerator"
    ],
    "priceStatus": "ok",
    "latestClose": 473.25,
    "referenceClose": 514.3900146484375,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "asic",
    "sub": "Foundry / I/O",
    "role": "Foundry, Ethernet, historical silicon photonics",
    "change": -12.13,
    "tags": [
      "foundry",
      "ethernet"
    ],
    "priceStatus": "ok",
    "latestClose": 90.06999969482422,
    "referenceClose": 102.5,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "QCOM",
    "quoteSymbol": "QCOM",
    "name": "Qualcomm",
    "market": "US",
    "segment": "asic",
    "sub": "Connectivity IC",
    "role": "High-speed connectivity and edge AI silicon",
    "change": -3.04,
    "tags": [
      "connectivity"
    ],
    "priceStatus": "ok",
    "latestClose": 160.75,
    "referenceClose": 165.7899932861328,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "3661.TW",
    "quoteSymbol": "3661.TW",
    "name": "世芯-KY",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "Advanced-node custom ASIC design service",
    "change": -12.11,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 3700.0,
    "referenceClose": 4210.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "3443.TW",
    "quoteSymbol": "3443.TW",
    "name": "創意",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "GUC ASIC design and implementation",
    "change": 2.47,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 5600.0,
    "referenceClose": 5465.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "2454.TW",
    "quoteSymbol": "2454.TW",
    "name": "聯發科",
    "market": "TW",
    "segment": "asic",
    "sub": "Connectivity SoC",
    "role": "Networking, SerDes and edge AI chip exposure",
    "change": -9.98,
    "tags": [
      "SoC"
    ],
    "priceStatus": "ok",
    "latestClose": 3790.0,
    "referenceClose": 4210.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "5274.TWO",
    "quoteSymbol": "5274.TWO",
    "name": "信驊",
    "market": "TW",
    "segment": "asic",
    "sub": "BMC",
    "role": "Server management silicon",
    "change": -13.23,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 15350.0,
    "referenceClose": 17690.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "688536.SH",
    "quoteSymbol": "688536.SS",
    "name": "思瑞浦",
    "market": "CN",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Analog and signal-chain ICs",
    "change": 13.42,
    "tags": [
      "analog"
    ],
    "priceStatus": "ok",
    "latestClose": 311.3299865722656,
    "referenceClose": 274.5,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "asic",
    "sub": "Laser driver link",
    "role": "Optical chip supplier with upstream exposure",
    "change": 4.48,
    "tags": [
      "optical chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1587.0,
    "referenceClose": 1519.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "2330.TW",
    "quoteSymbol": "2330.TW",
    "name": "台積電",
    "market": "TW",
    "segment": "sipic",
    "sub": "Foundry",
    "role": "Advanced-node and packaging platform for CPO ecosystem",
    "change": 0.63,
    "tags": [
      "foundry",
      "CoWoS"
    ],
    "priceStatus": "ok",
    "latestClose": 2410.0,
    "referenceClose": 2395.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "AVGO",
    "quoteSymbol": "AVGO",
    "name": "Broadcom",
    "market": "US",
    "segment": "sipic",
    "sub": "Co-packaged optics",
    "role": "CPO roadmap and switch silicon integration",
    "change": -6.24,
    "tags": [
      "CPO",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 368.45001220703125,
    "referenceClose": 392.989990234375,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical I/O ecosystem",
    "role": "AI cluster architecture drives optical I/O demand",
    "change": -4.64,
    "tags": [
      "AI",
      "optical I/O"
    ],
    "priceStatus": "ok",
    "latestClose": 214.72000122070312,
    "referenceClose": 225.16000366210938,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical platform",
    "role": "DSP plus silicon photonics partnership ecosystem",
    "change": 6.77,
    "tags": [
      "DSP",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 237.0399932861328,
    "referenceClose": 222.02000427246094,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "sipic",
    "sub": "Silicon photonics",
    "role": "Integrated silicon photonics and foundry capabilities",
    "change": -12.13,
    "tags": [
      "SiPh",
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 90.06999969482422,
    "referenceClose": 102.5,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Lasers, transceivers and optical engine building blocks",
    "change": -11.14,
    "tags": [
      "laser",
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 289.5199890136719,
    "referenceClose": 325.8299865722656,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Datacom lasers and optical components",
    "change": -6.42,
    "tags": [
      "laser",
      "datacom"
    ],
    "priceStatus": "ok",
    "latestClose": 866.7100219726562,
    "referenceClose": 926.1400146484375,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "STM",
    "quoteSymbol": "STM",
    "name": "STMicro",
    "market": "EU",
    "segment": "sipic",
    "sub": "Photonics platform",
    "role": "Photonics and advanced semiconductor platform exposure",
    "change": -6.87,
    "tags": [
      "photonics"
    ],
    "priceStatus": "ok",
    "latestClose": 50.560001373291016,
    "referenceClose": 54.290000915527344,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "GFS",
    "quoteSymbol": "GFS",
    "name": "GlobalFoundries",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Silicon photonics and specialty process platform",
    "change": -11.96,
    "tags": [
      "foundry",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 48.04999923706055,
    "referenceClose": 54.58000183105469,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "TSEM",
    "quoteSymbol": "TSEM",
    "name": "Tower Semiconductor",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Analog, photonics and specialty manufacturing",
    "change": -16.16,
    "tags": [
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 222.58999633789062,
    "referenceClose": 265.4800109863281,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "sipic",
    "sub": "Optical systems",
    "role": "Photonic service engines and coherent optics",
    "change": -5.11,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 10.210000038146973,
    "referenceClose": 10.760000228881836,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "sipic",
    "sub": "Acacia optics",
    "role": "Coherent modules and optical interconnect roadmap",
    "change": -0.57,
    "tags": [
      "Acacia",
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 111.04000091552734,
    "referenceClose": 111.68000030517578,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "sipic",
    "sub": "Coherent optics",
    "role": "Coherent optical engine and network platforms",
    "change": -7.69,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 395.7900085449219,
    "referenceClose": 428.7699890136719,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "POET",
    "quoteSymbol": "POET",
    "name": "POET Technologies",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical interposer",
    "role": "Optical interposer platform for transceivers",
    "change": -13.88,
    "tags": [
      "interposer"
    ],
    "priceStatus": "ok",
    "latestClose": 8.25,
    "referenceClose": 9.579999923706055,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "LWLG",
    "quoteSymbol": "LWLG",
    "name": "Lightwave Logic",
    "market": "US",
    "segment": "sipic",
    "sub": "EO polymer",
    "role": "Electro-optic polymer material platform",
    "change": -18.23,
    "tags": [
      "material"
    ],
    "priceStatus": "ok",
    "latestClose": 6.190000057220459,
    "referenceClose": 7.570000171661377,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "4966.TWO",
    "quoteSymbol": "4966.TWO",
    "name": "譜瑞-KY",
    "market": "TW",
    "segment": "sipic",
    "sub": "High-speed interface",
    "role": "High-speed interface ICs and data transmission",
    "change": -0.7,
    "tags": [
      "interface"
    ],
    "priceStatus": "ok",
    "latestClose": 566.0,
    "referenceClose": 570.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "6789.TW",
    "quoteSymbol": "6789.TW",
    "name": "采鈺",
    "market": "TW",
    "segment": "sipic",
    "sub": "Optical process",
    "role": "Optical semiconductor process and sensor platform",
    "change": -4.18,
    "tags": [
      "process"
    ],
    "priceStatus": "ok",
    "latestClose": 424.0,
    "referenceClose": 442.5,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "688313.SH",
    "quoteSymbol": "688313.SS",
    "name": "仕佳光子",
    "market": "CN",
    "segment": "sipic",
    "sub": "PLC / optical chip",
    "role": "PLC splitter, AWG and optical chip supplier",
    "change": 12.25,
    "tags": [
      "PLC",
      "chip"
    ],
    "priceStatus": "ok",
    "latestClose": 158.0,
    "referenceClose": 140.75999450683594,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "laser",
    "sub": "Laser / InP",
    "role": "InP lasers, VCSELs, coherent and datacom components",
    "change": -11.14,
    "tags": [
      "InP",
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 289.5199890136719,
    "referenceClose": 325.8299865722656,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "laser",
    "sub": "Datacom laser",
    "role": "EML, DFB and high-speed datacom laser supply",
    "change": -6.42,
    "tags": [
      "EML",
      "DFB"
    ],
    "priceStatus": "ok",
    "latestClose": 866.7100219726562,
    "referenceClose": 926.1400146484375,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "laser",
    "sub": "Laser driver / TIA",
    "role": "Laser drivers, TIAs and analog front-end",
    "change": -15.75,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 266.6099853515625,
    "referenceClose": 316.44000244140625,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "IPGP",
    "quoteSymbol": "IPGP",
    "name": "IPG Photonics",
    "market": "US",
    "segment": "laser",
    "sub": "Fiber laser",
    "role": "Laser technology and optical components",
    "change": -14.61,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 73.26000213623047,
    "referenceClose": 85.79000091552734,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "AXTI",
    "quoteSymbol": "AXTI",
    "name": "AXT",
    "market": "US",
    "segment": "laser",
    "sub": "Substrate",
    "role": "Compound semiconductor substrates",
    "change": -13.35,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 70.73999786376953,
    "referenceClose": 81.63999938964844,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "IQE.L",
    "quoteSymbol": "IQE.L",
    "name": "IQE",
    "market": "EU",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "Compound semiconductor epitaxy wafers",
    "change": -13.12,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 43.70000076293945,
    "referenceClose": 50.29999923706055,
    "priceDate": "2026-08-20",
    "referenceDate": "2026-08-13"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Compound semiconductor and optical components",
    "change": -8.7,
    "tags": [
      "InP",
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 2178.5,
    "referenceClose": 2386.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "6503.T",
    "quoteSymbol": "6503.T",
    "name": "三菱電機",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Optical devices, lasers and industrial electronics",
    "change": -8.96,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 5602.0,
    "referenceClose": 6153.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "6965.T",
    "quoteSymbol": "6965.T",
    "name": "浜松光子",
    "market": "JP",
    "segment": "laser",
    "sub": "Photonics",
    "role": "Photodetectors, optoelectronics and photonics devices",
    "change": -7.61,
    "tags": [
      "detector"
    ],
    "priceStatus": "ok",
    "latestClose": 2367.0,
    "referenceClose": 2562.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "AMS.SW",
    "quoteSymbol": "AMS.SW",
    "name": "ams OSRAM",
    "market": "EU",
    "segment": "laser",
    "sub": "Emitter",
    "role": "Emitters, sensors and photonics devices",
    "change": -11.49,
    "tags": [
      "emitter"
    ],
    "priceStatus": "ok",
    "latestClose": 17.329999923706055,
    "referenceClose": 19.579999923706055,
    "priceDate": "2026-08-20",
    "referenceDate": "2026-08-13"
  },
  {
    "ticker": "3105.TWO",
    "quoteSymbol": "3105.TWO",
    "name": "穩懋",
    "market": "TW",
    "segment": "laser",
    "sub": "GaAs foundry",
    "role": "GaAs foundry with photonics-adjacent capabilities",
    "change": -1.32,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 373.0,
    "referenceClose": 378.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "3081.TWO",
    "quoteSymbol": "3081.TWO",
    "name": "聯亞",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "III-V epitaxy wafers for optical communications",
    "change": 14.96,
    "tags": [
      "epi",
      "III-V"
    ],
    "priceStatus": "ok",
    "latestClose": 2920.0,
    "referenceClose": 2540.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "2455.TW",
    "quoteSymbol": "2455.TW",
    "name": "全新",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "GaAs/InP epitaxy and compound semiconductor materials",
    "change": 6.98,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 406.0,
    "referenceClose": 379.5,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "8086.TWO",
    "quoteSymbol": "8086.TWO",
    "name": "宏捷科",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "GaAs foundry and compound semiconductor devices",
    "change": -3.07,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 110.5,
    "referenceClose": 114.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "4991.TWO",
    "quoteSymbol": "4991.TWO",
    "name": "環宇-KY",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "Compound semiconductor and optical device exposure",
    "change": 4.57,
    "tags": [
      "compound"
    ],
    "priceStatus": "ok",
    "latestClose": 481.0,
    "referenceClose": 460.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "laser",
    "sub": "Optical component",
    "role": "Optical communication components and modules",
    "change": 10.54,
    "tags": [
      "optical"
    ],
    "priceStatus": "ok",
    "latestClose": 577.0,
    "referenceClose": 522.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser chip",
    "role": "Optical communication laser chips",
    "change": 4.48,
    "tags": [
      "laser chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1587.0,
    "referenceClose": 1519.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser / module",
    "role": "Laser equipment and optical communication products",
    "change": -2.74,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 106.77999877929688,
    "referenceClose": 109.79000091552734,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "APH",
    "quoteSymbol": "APH",
    "name": "Amphenol",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "High-speed interconnect and optical connector ecosystem",
    "change": -6.04,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 157.00999450683594,
    "referenceClose": 167.11000061035156,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "GLW",
    "quoteSymbol": "GLW",
    "name": "Corning",
    "market": "US",
    "segment": "component",
    "sub": "Fiber / glass",
    "role": "Optical fiber, glass and datacenter cabling",
    "change": -9.73,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 149.83999633789062,
    "referenceClose": 165.99000549316406,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "TEL",
    "quoteSymbol": "TEL",
    "name": "TE Connectivity",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "Connectors, cable assemblies and sensors",
    "change": -5.88,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 203.52000427246094,
    "referenceClose": 216.22999572753906,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers, modulators and optical subassemblies",
    "change": -11.14,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 289.5199890136719,
    "referenceClose": 325.8299865722656,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers and optical communication components",
    "change": -6.42,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 866.7100219726562,
    "referenceClose": 926.1400146484375,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "component",
    "sub": "Manufacturing",
    "role": "Precision optical manufacturing and assembly",
    "change": -23.42,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 436.6700134277344,
    "referenceClose": 570.219970703125,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "3711.TW",
    "quoteSymbol": "3711.TW",
    "name": "日月光投控",
    "market": "TW",
    "segment": "component",
    "sub": "Advanced packaging",
    "role": "Semiconductor packaging and system-in-package",
    "change": -4.71,
    "tags": [
      "packaging"
    ],
    "priceStatus": "ok",
    "latestClose": 587.0,
    "referenceClose": 616.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "2449.TW",
    "quoteSymbol": "2449.TW",
    "name": "京元電",
    "market": "TW",
    "segment": "component",
    "sub": "Test",
    "role": "IC testing services for high-speed chips",
    "change": -6.07,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 232.0,
    "referenceClose": 247.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "6515.TW",
    "quoteSymbol": "6515.TW",
    "name": "穎崴",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card / socket",
    "role": "High-speed test interface and sockets",
    "change": -5.19,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 6400.0,
    "referenceClose": 6750.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "6223.TWO",
    "quoteSymbol": "6223.TWO",
    "name": "旺矽",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card",
    "role": "Probe cards and testing interface",
    "change": -15.14,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 5465.0,
    "referenceClose": 6440.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "3037.TW",
    "quoteSymbol": "3037.TW",
    "name": "欣興",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and advanced PCB",
    "change": 6.37,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1085.0,
    "referenceClose": 1020.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "3189.TW",
    "quoteSymbol": "3189.TW",
    "name": "景碩",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate supplier",
    "change": -5.92,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 811.0,
    "referenceClose": 862.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "8046.TW",
    "quoteSymbol": "8046.TW",
    "name": "南電",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and PCB",
    "change": -13.03,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1135.0,
    "referenceClose": 1305.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "2383.TW",
    "quoteSymbol": "2383.TW",
    "name": "台光電",
    "market": "TW",
    "segment": "component",
    "sub": "Copper clad laminate",
    "role": "High-speed CCL for AI servers and switches",
    "change": -7.87,
    "tags": [
      "CCL"
    ],
    "priceStatus": "ok",
    "latestClose": 5680.0,
    "referenceClose": 6165.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "component",
    "sub": "Connector / RF",
    "role": "Connectors and optical communication components",
    "change": -2.24,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 1525.0,
    "referenceClose": 1560.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "3363.TWO",
    "quoteSymbol": "3363.TWO",
    "name": "上詮",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber optic components and passive devices",
    "change": 2.39,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 600.0,
    "referenceClose": 586.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "component",
    "sub": "Optical subassembly",
    "role": "Optical communication subassemblies and packaging",
    "change": 8.04,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 551.0,
    "referenceClose": 510.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "6451.TW",
    "quoteSymbol": "6451.TW",
    "name": "訊芯-KY",
    "market": "TW",
    "segment": "component",
    "sub": "SiP / optical packaging",
    "role": "System-in-package and optical communication assembly",
    "change": -1.76,
    "tags": [
      "SiP"
    ],
    "priceStatus": "ok",
    "latestClose": 418.0,
    "referenceClose": 425.5,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber arrays, splitters and optical passive components",
    "change": 11.54,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 783.0,
    "referenceClose": 702.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical communication component supplier",
    "change": -1.68,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 82.0999984741211,
    "referenceClose": 83.5,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive components and precision parts",
    "change": 2.01,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 273.0799865722656,
    "referenceClose": 267.7099914550781,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "300548.SZ",
    "quoteSymbol": "300548.SZ",
    "name": "博創科技",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive and active components",
    "change": 1.41,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 197.4199981689453,
    "referenceClose": 194.6699981689453,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "601869.SH",
    "quoteSymbol": "601869.SS",
    "name": "長飛光纖",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber",
    "role": "Optical fiber and cable",
    "change": 2.37,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 363.6000061035156,
    "referenceClose": 355.17999267578125,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "600487.SH",
    "quoteSymbol": "600487.SS",
    "name": "亨通光電",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber cable and optical network products",
    "change": -1.27,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 62.18000030517578,
    "referenceClose": 62.97999954223633,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "5801.T",
    "quoteSymbol": "5801.T",
    "name": "古河電工",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Optical fiber, cable and network materials",
    "change": -5.89,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 3818.0,
    "referenceClose": 4057.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "5803.T",
    "quoteSymbol": "5803.T",
    "name": "藤倉",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber, cable and optical interconnect products",
    "change": -6.8,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 5280.0,
    "referenceClose": 5665.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "4062.T",
    "quoteSymbol": "4062.T",
    "name": "Ibiden",
    "market": "JP",
    "segment": "component",
    "sub": "Substrate",
    "role": "Advanced IC substrates",
    "change": -7.67,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 19190.0,
    "referenceClose": 20785.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom and telecom optical transceivers",
    "change": -11.14,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 289.5199890136719,
    "referenceClose": 325.8299865722656,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "module",
    "sub": "Laser / module",
    "role": "Laser engines and optical module supply",
    "change": -6.42,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 866.7100219726562,
    "referenceClose": 926.1400146484375,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "module",
    "sub": "Optical manufacturing",
    "role": "Optical module contract manufacturing",
    "change": -23.42,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 436.6700134277344,
    "referenceClose": 570.219970703125,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "module",
    "sub": "Coherent module",
    "role": "Coherent optical modules and transport platforms",
    "change": -7.69,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 395.7900085449219,
    "referenceClose": 428.7699890136719,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "module",
    "sub": "Acacia module",
    "role": "Acacia coherent optics and pluggable modules",
    "change": -0.57,
    "tags": [
      "Acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 111.04000091552734,
    "referenceClose": 111.68000030517578,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "module",
    "sub": "Optical module",
    "role": "Coherent optics and network system modules",
    "change": -5.11,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 10.210000038146973,
    "referenceClose": 10.760000228881836,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical communication modules and components",
    "change": 10.54,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 577.0,
    "referenceClose": 522.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "4977.TW",
    "quoteSymbol": "4977.TW",
    "name": "眾達-KY",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical transceiver supplier",
    "change": 4.51,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 150.5,
    "referenceClose": 144.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver component",
    "role": "Optical communication and connector products",
    "change": -2.24,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1525.0,
    "referenceClose": 1560.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "module",
    "sub": "OSA",
    "role": "Optical subassemblies for transceivers",
    "change": 8.04,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 551.0,
    "referenceClose": 510.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "module",
    "sub": "Passive optical",
    "role": "Fiber components used in modules",
    "change": 11.54,
    "tags": [
      "passive"
    ],
    "priceStatus": "ok",
    "latestClose": 783.0,
    "referenceClose": 702.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module exposure",
    "change": -1.68,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 82.0999984741211,
    "referenceClose": 83.5,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "4908.TWO",
    "quoteSymbol": "4908.TWO",
    "name": "前鼎",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module and equipment",
    "change": -1.29,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 153.0,
    "referenceClose": 155.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "300308.SZ",
    "quoteSymbol": "300308.SZ",
    "name": "中際旭創",
    "market": "CN",
    "segment": "module",
    "sub": "800G / 1.6T",
    "role": "High-speed optical transceiver leader",
    "change": 0.0,
    "tags": [
      "800G",
      "1.6T"
    ],
    "priceStatus": "ok",
    "latestClose": 943.0,
    "referenceClose": 943.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "300502.SZ",
    "quoteSymbol": "300502.SZ",
    "name": "新易盛",
    "market": "CN",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom optical transceivers",
    "change": -1.36,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 442.0,
    "referenceClose": 448.0799865722656,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "002281.SZ",
    "quoteSymbol": "002281.SZ",
    "name": "光迅科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical devices and modules",
    "change": -6.76,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 178.5800018310547,
    "referenceClose": 191.52000427246094,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "603083.SH",
    "quoteSymbol": "603083.SS",
    "name": "劍橋科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical modules and broadband equipment",
    "change": -2.65,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 180.97000122070312,
    "referenceClose": 185.89999389648438,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical engine parts",
    "role": "High-speed module precision components",
    "change": 2.01,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 273.0799865722656,
    "referenceClose": 267.7099914550781,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "688205.SH",
    "quoteSymbol": "688205.SS",
    "name": "德科立",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical transceiver modules",
    "change": 0.53,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 159.36000061035156,
    "referenceClose": 158.52000427246094,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication and laser products",
    "change": -2.74,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 106.77999877929688,
    "referenceClose": 109.79000091552734,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical network",
    "role": "Optical network systems and modules",
    "change": -0.49,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 40.70000076293945,
    "referenceClose": 40.900001525878906,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "module",
    "sub": "Optical device",
    "role": "Optical components and communication devices",
    "change": -8.7,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 2178.5,
    "referenceClose": 2386.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "ANET",
    "quoteSymbol": "ANET",
    "name": "Arista Networks",
    "market": "US",
    "segment": "system",
    "sub": "AI switch",
    "role": "AI datacenter Ethernet switches",
    "change": -5.12,
    "tags": [
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 188.64999389648438,
    "referenceClose": 198.82000732421875,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "system",
    "sub": "Switch / router",
    "role": "Enterprise and cloud networking systems",
    "change": -0.57,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 111.04000091552734,
    "referenceClose": 111.68000030517578,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "HPE",
    "quoteSymbol": "HPE",
    "name": "HPE",
    "market": "US",
    "segment": "system",
    "sub": "Server / networking",
    "role": "AI servers, networking and cloud infrastructure",
    "change": -8.96,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 53.45000076293945,
    "referenceClose": 58.709999084472656,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "DELL",
    "quoteSymbol": "DELL",
    "name": "Dell",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and enterprise infrastructure",
    "change": -9.93,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 442.0799865722656,
    "referenceClose": 490.80999755859375,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "SMCI",
    "quoteSymbol": "SMCI",
    "name": "Supermicro",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server platforms and rack-scale systems",
    "change": -6.53,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 37.2400016784668,
    "referenceClose": 39.84000015258789,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "CLS",
    "quoteSymbol": "CLS",
    "name": "Celestica",
    "market": "US",
    "segment": "system",
    "sub": "ODM / EMS",
    "role": "Cloud hardware and networking manufacturing",
    "change": -11.49,
    "tags": [
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 296.54998779296875,
    "referenceClose": 335.04998779296875,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "JBL",
    "quoteSymbol": "JBL",
    "name": "Jabil",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing for networking systems",
    "change": -13.74,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 313.2099914550781,
    "referenceClose": 363.1000061035156,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "FLEX",
    "quoteSymbol": "FLEX",
    "name": "Flex",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing and cloud hardware",
    "change": -12.45,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 110.44999694824219,
    "referenceClose": 126.16000366210938,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "2345.TW",
    "quoteSymbol": "2345.TW",
    "name": "智邦",
    "market": "TW",
    "segment": "system",
    "sub": "Switch ODM",
    "role": "White-box switch and cloud networking ODM",
    "change": -11.52,
    "tags": [
      "switch",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 2035.0,
    "referenceClose": 2300.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "2382.TW",
    "quoteSymbol": "2382.TW",
    "name": "廣達",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and cloud infrastructure ODM",
    "change": -1.83,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 321.5,
    "referenceClose": 327.5,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "6669.TW",
    "quoteSymbol": "6669.TW",
    "name": "緯穎",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "Cloud datacenter server ODM",
    "change": -2.8,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 6255.0,
    "referenceClose": 6435.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "2317.TW",
    "quoteSymbol": "2317.TW",
    "name": "鴻海",
    "market": "TW",
    "segment": "system",
    "sub": "EMS / server",
    "role": "AI server and system assembly",
    "change": -5.39,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 245.5,
    "referenceClose": 259.5,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "2308.TW",
    "quoteSymbol": "2308.TW",
    "name": "台達電",
    "market": "TW",
    "segment": "system",
    "sub": "Power / thermal",
    "role": "Power, thermal and datacenter infrastructure",
    "change": -7.16,
    "tags": [
      "power",
      "thermal"
    ],
    "priceStatus": "ok",
    "latestClose": 1750.0,
    "referenceClose": 1885.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "3706.TW",
    "quoteSymbol": "3706.TW",
    "name": "神達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and datacenter system integration",
    "change": -2.91,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 90.0,
    "referenceClose": 92.69999694824219,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "3231.TW",
    "quoteSymbol": "3231.TW",
    "name": "緯創",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and system integration",
    "change": -9.3,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 175.5,
    "referenceClose": 193.5,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "2356.TW",
    "quoteSymbol": "2356.TW",
    "name": "英業達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and cloud equipment manufacturing",
    "change": -6.01,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 65.69999694824219,
    "referenceClose": 69.9000015258789,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "3380.TW",
    "quoteSymbol": "3380.TW",
    "name": "明泰",
    "market": "TW",
    "segment": "system",
    "sub": "Networking",
    "role": "Networking products and broadband equipment",
    "change": -0.9,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 27.549999237060547,
    "referenceClose": 27.799999237060547,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "6285.TW",
    "quoteSymbol": "6285.TW",
    "name": "啟碁",
    "market": "TW",
    "segment": "system",
    "sub": "Network device",
    "role": "Wireless and networking equipment",
    "change": -3.88,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 235.5,
    "referenceClose": 245.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "system",
    "sub": "Optical systems",
    "role": "Optical communication and laser systems",
    "change": -2.74,
    "tags": [
      "system"
    ],
    "priceStatus": "ok",
    "latestClose": 106.77999877929688,
    "referenceClose": 109.79000091552734,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "system",
    "sub": "Optical network",
    "role": "Optical transmission and network equipment",
    "change": -0.49,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 40.70000076293945,
    "referenceClose": 40.900001525878906,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "000063.SZ",
    "quoteSymbol": "000063.SZ",
    "name": "中興通訊",
    "market": "CN",
    "segment": "system",
    "sub": "Telecom equipment",
    "role": "Telecom and datacenter network equipment",
    "change": -3.62,
    "tags": [
      "telecom"
    ],
    "priceStatus": "ok",
    "latestClose": 33.779998779296875,
    "referenceClose": 35.04999923706055,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "6701.T",
    "quoteSymbol": "6701.T",
    "name": "NEC",
    "market": "JP",
    "segment": "system",
    "sub": "Network systems",
    "role": "Telecom, submarine and network systems",
    "change": -9.91,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 4656.0,
    "referenceClose": 5168.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  },
  {
    "ticker": "6702.T",
    "quoteSymbol": "6702.T",
    "name": "Fujitsu",
    "market": "JP",
    "segment": "system",
    "sub": "ICT systems",
    "role": "ICT infrastructure and network systems",
    "change": -5.08,
    "tags": [
      "ICT"
    ],
    "priceStatus": "ok",
    "latestClose": 3646.0,
    "referenceClose": 3841.0,
    "priceDate": "2026-08-21",
    "referenceDate": "2026-08-14"
  }
];

