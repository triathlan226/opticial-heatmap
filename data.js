window.HEATMAP_META = {
  "title": "光通訊 / CPO 供應鏈熱力圖",
  "subtitle": "六大環節、跨市場上市公司、同公司可重複出現在多個供應鏈位置。",
  "lastUpdated": "2026-06-06",
  "dateRange": "2026-05-29 → 2026-06-05",
  "totalTiles": 126,
  "totalCompanies": 97,
  "quoteSymbolsUpdated": 97,
  "quoteSymbolsFailed": 0,
  "priceStatusCounts": {
    "ok": 126
  },
  "topGainer": {
    "ticker": "MRVL",
    "name": "Marvell",
    "change": 28.52
  },
  "topLoser": {
    "ticker": "4062.T",
    "name": "Ibiden",
    "change": -18.43
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
    "change": -13.66,
    "tags": [
      "ASIC",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 385.7300109863281,
    "referenceClose": 446.7699890136719,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "asic",
    "sub": "GPU / Network ASIC",
    "role": "GPU, NVLink, Spectrum-X ecosystem",
    "change": -2.86,
    "tags": [
      "GPU",
      "networking"
    ],
    "priceStatus": "ok",
    "latestClose": 205.10000610351562,
    "referenceClose": 211.13999938964844,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "asic",
    "sub": "DSP / PAM4",
    "role": "Optical DSP, custom silicon, DCI chips",
    "change": 28.52,
    "tags": [
      "DSP",
      "custom silicon"
    ],
    "priceStatus": "ok",
    "latestClose": 263.4700012207031,
    "referenceClose": 205.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "CRDO",
    "quoteSymbol": "CRDO",
    "name": "Credo",
    "market": "US",
    "segment": "asic",
    "sub": "Retimer / DSP",
    "role": "High-speed connectivity and optical DSP",
    "change": -12.35,
    "tags": [
      "DSP",
      "retimer"
    ],
    "priceStatus": "ok",
    "latestClose": 206.88999938964844,
    "referenceClose": 236.02999877929688,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "ALAB",
    "quoteSymbol": "ALAB",
    "name": "Astera Labs",
    "market": "US",
    "segment": "asic",
    "sub": "PCIe / CXL",
    "role": "AI data-center connectivity silicon",
    "change": -7.52,
    "tags": [
      "retimer",
      "CXL"
    ],
    "priceStatus": "ok",
    "latestClose": 317.05999755859375,
    "referenceClose": 342.8500061035156,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Laser drivers, TIAs, high-speed analog",
    "change": -5.28,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 345.3999938964844,
    "referenceClose": 364.6400146484375,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "SMTC",
    "quoteSymbol": "SMTC",
    "name": "Semtech",
    "market": "US",
    "segment": "asic",
    "sub": "Signal IC",
    "role": "Signal integrity and optical analog ICs",
    "change": -1.0,
    "tags": [
      "signal"
    ],
    "priceStatus": "ok",
    "latestClose": 151.02000427246094,
    "referenceClose": 152.5399932861328,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "asic",
    "sub": "Network silicon",
    "role": "Silicon One and Acacia optical stack",
    "change": 1.01,
    "tags": [
      "switch",
      "acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 121.63999938964844,
    "referenceClose": 120.41999816894531,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "asic",
    "sub": "Coherent DSP",
    "role": "WaveLogic coherent DSP and systems",
    "change": -15.86,
    "tags": [
      "coherent",
      "DSP"
    ],
    "priceStatus": "ok",
    "latestClose": 488.2099914550781,
    "referenceClose": 580.22998046875,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "AMD",
    "quoteSymbol": "AMD",
    "name": "AMD",
    "market": "US",
    "segment": "asic",
    "sub": "AI accelerator",
    "role": "AI accelerators and adaptive compute",
    "change": -9.63,
    "tags": [
      "accelerator"
    ],
    "priceStatus": "ok",
    "latestClose": 466.3800048828125,
    "referenceClose": 516.0999755859375,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "asic",
    "sub": "Foundry / I/O",
    "role": "Foundry, Ethernet, historical silicon photonics",
    "change": -13.52,
    "tags": [
      "foundry",
      "ethernet"
    ],
    "priceStatus": "ok",
    "latestClose": 99.16999816894531,
    "referenceClose": 114.68000030517578,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "QCOM",
    "quoteSymbol": "QCOM",
    "name": "Qualcomm",
    "market": "US",
    "segment": "asic",
    "sub": "Connectivity IC",
    "role": "High-speed connectivity and edge AI silicon",
    "change": -13.97,
    "tags": [
      "connectivity"
    ],
    "priceStatus": "ok",
    "latestClose": 215.94000244140625,
    "referenceClose": 251.02000427246094,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "3661.TW",
    "quoteSymbol": "3661.TW",
    "name": "世芯-KY",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "Advanced-node custom ASIC design service",
    "change": -2.94,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 4285.0,
    "referenceClose": 4415.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "3443.TW",
    "quoteSymbol": "3443.TW",
    "name": "創意",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "GUC ASIC design and implementation",
    "change": -5.57,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 4410.0,
    "referenceClose": 4670.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "2454.TW",
    "quoteSymbol": "2454.TW",
    "name": "聯發科",
    "market": "TW",
    "segment": "asic",
    "sub": "Connectivity SoC",
    "role": "Networking, SerDes and edge AI chip exposure",
    "change": -0.23,
    "tags": [
      "SoC"
    ],
    "priceStatus": "ok",
    "latestClose": 4300.0,
    "referenceClose": 4310.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "5274.TWO",
    "quoteSymbol": "5274.TWO",
    "name": "信驊",
    "market": "TW",
    "segment": "asic",
    "sub": "BMC",
    "role": "Server management silicon",
    "change": -7.63,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 17505.0,
    "referenceClose": 18950.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "688536.SH",
    "quoteSymbol": "688536.SS",
    "name": "思瑞浦",
    "market": "CN",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Analog and signal-chain ICs",
    "change": -5.18,
    "tags": [
      "analog"
    ],
    "priceStatus": "ok",
    "latestClose": 293.0,
    "referenceClose": 309.010009765625,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "asic",
    "sub": "Laser driver link",
    "role": "Optical chip supplier with upstream exposure",
    "change": 16.59,
    "tags": [
      "optical chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1320.719970703125,
    "referenceClose": 1132.7900390625,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "2330.TW",
    "quoteSymbol": "2330.TW",
    "name": "台積電",
    "market": "TW",
    "segment": "sipic",
    "sub": "Foundry",
    "role": "Advanced-node and packaging platform for CPO ecosystem",
    "change": 0.42,
    "tags": [
      "foundry",
      "CoWoS"
    ],
    "priceStatus": "ok",
    "latestClose": 2365.0,
    "referenceClose": 2355.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "AVGO",
    "quoteSymbol": "AVGO",
    "name": "Broadcom",
    "market": "US",
    "segment": "sipic",
    "sub": "Co-packaged optics",
    "role": "CPO roadmap and switch silicon integration",
    "change": -13.66,
    "tags": [
      "CPO",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 385.7300109863281,
    "referenceClose": 446.7699890136719,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical I/O ecosystem",
    "role": "AI cluster architecture drives optical I/O demand",
    "change": -2.86,
    "tags": [
      "AI",
      "optical I/O"
    ],
    "priceStatus": "ok",
    "latestClose": 205.10000610351562,
    "referenceClose": 211.13999938964844,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical platform",
    "role": "DSP plus silicon photonics partnership ecosystem",
    "change": 28.52,
    "tags": [
      "DSP",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 263.4700012207031,
    "referenceClose": 205.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "sipic",
    "sub": "Silicon photonics",
    "role": "Integrated silicon photonics and foundry capabilities",
    "change": -13.52,
    "tags": [
      "SiPh",
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 99.16999816894531,
    "referenceClose": 114.68000030517578,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Lasers, transceivers and optical engine building blocks",
    "change": 4.29,
    "tags": [
      "laser",
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 376.989990234375,
    "referenceClose": 361.4700012207031,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Datacom lasers and optical components",
    "change": 1.02,
    "tags": [
      "laser",
      "datacom"
    ],
    "priceStatus": "ok",
    "latestClose": 863.6599731445312,
    "referenceClose": 854.9600219726562,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "STM",
    "quoteSymbol": "STM",
    "name": "STMicro",
    "market": "EU",
    "segment": "sipic",
    "sub": "Photonics platform",
    "role": "Photonics and advanced semiconductor platform exposure",
    "change": 2.03,
    "tags": [
      "photonics"
    ],
    "priceStatus": "ok",
    "latestClose": 70.72000122070312,
    "referenceClose": 69.30999755859375,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "GFS",
    "quoteSymbol": "GFS",
    "name": "GlobalFoundries",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Silicon photonics and specialty process platform",
    "change": -5.55,
    "tags": [
      "foundry",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 75.52999877929688,
    "referenceClose": 79.97000122070312,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "TSEM",
    "quoteSymbol": "TSEM",
    "name": "Tower Semiconductor",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Analog, photonics and specialty manufacturing",
    "change": -7.74,
    "tags": [
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 235.47999572753906,
    "referenceClose": 255.22999572753906,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "sipic",
    "sub": "Optical systems",
    "role": "Photonic service engines and coherent optics",
    "change": -3.1,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 14.380000114440918,
    "referenceClose": 14.84000015258789,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "sipic",
    "sub": "Acacia optics",
    "role": "Coherent modules and optical interconnect roadmap",
    "change": 1.01,
    "tags": [
      "Acacia",
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 121.63999938964844,
    "referenceClose": 120.41999816894531,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "sipic",
    "sub": "Coherent optics",
    "role": "Coherent optical engine and network platforms",
    "change": -15.86,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 488.2099914550781,
    "referenceClose": 580.22998046875,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "POET",
    "quoteSymbol": "POET",
    "name": "POET Technologies",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical interposer",
    "role": "Optical interposer platform for transceivers",
    "change": -3.5,
    "tags": [
      "interposer"
    ],
    "priceStatus": "ok",
    "latestClose": 11.859999656677246,
    "referenceClose": 12.289999961853027,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "LWLG",
    "quoteSymbol": "LWLG",
    "name": "Lightwave Logic",
    "market": "US",
    "segment": "sipic",
    "sub": "EO polymer",
    "role": "Electro-optic polymer material platform",
    "change": -6.63,
    "tags": [
      "material"
    ],
    "priceStatus": "ok",
    "latestClose": 10.140000343322754,
    "referenceClose": 10.859999656677246,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "4966.TWO",
    "quoteSymbol": "4966.TWO",
    "name": "譜瑞-KY",
    "market": "TW",
    "segment": "sipic",
    "sub": "High-speed interface",
    "role": "High-speed interface ICs and data transmission",
    "change": -11.75,
    "tags": [
      "interface"
    ],
    "priceStatus": "ok",
    "latestClose": 736.0,
    "referenceClose": 834.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "6789.TW",
    "quoteSymbol": "6789.TW",
    "name": "采鈺",
    "market": "TW",
    "segment": "sipic",
    "sub": "Optical process",
    "role": "Optical semiconductor process and sensor platform",
    "change": -2.47,
    "tags": [
      "process"
    ],
    "priceStatus": "ok",
    "latestClose": 513.0,
    "referenceClose": 526.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "688313.SH",
    "quoteSymbol": "688313.SS",
    "name": "仕佳光子",
    "market": "CN",
    "segment": "sipic",
    "sub": "PLC / optical chip",
    "role": "PLC splitter, AWG and optical chip supplier",
    "change": -3.63,
    "tags": [
      "PLC",
      "chip"
    ],
    "priceStatus": "ok",
    "latestClose": 156.7899932861328,
    "referenceClose": 162.69000244140625,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "laser",
    "sub": "Laser / InP",
    "role": "InP lasers, VCSELs, coherent and datacom components",
    "change": 4.29,
    "tags": [
      "InP",
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 376.989990234375,
    "referenceClose": 361.4700012207031,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "laser",
    "sub": "Datacom laser",
    "role": "EML, DFB and high-speed datacom laser supply",
    "change": 1.02,
    "tags": [
      "EML",
      "DFB"
    ],
    "priceStatus": "ok",
    "latestClose": 863.6599731445312,
    "referenceClose": 854.9600219726562,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "laser",
    "sub": "Laser driver / TIA",
    "role": "Laser drivers, TIAs and analog front-end",
    "change": -5.28,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 345.3999938964844,
    "referenceClose": 364.6400146484375,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "IPGP",
    "quoteSymbol": "IPGP",
    "name": "IPG Photonics",
    "market": "US",
    "segment": "laser",
    "sub": "Fiber laser",
    "role": "Laser technology and optical components",
    "change": -6.24,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 107.37000274658203,
    "referenceClose": 114.5199966430664,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "AXTI",
    "quoteSymbol": "AXTI",
    "name": "AXT",
    "market": "US",
    "segment": "laser",
    "sub": "Substrate",
    "role": "Compound semiconductor substrates",
    "change": -13.69,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 89.04000091552734,
    "referenceClose": 103.16000366210938,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "IQE.L",
    "quoteSymbol": "IQE.L",
    "name": "IQE",
    "market": "EU",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "Compound semiconductor epitaxy wafers",
    "change": -5.26,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 45.0,
    "referenceClose": 47.5,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Compound semiconductor and optical components",
    "change": 3.38,
    "tags": [
      "InP",
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 13010.0,
    "referenceClose": 12585.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "6503.T",
    "quoteSymbol": "6503.T",
    "name": "三菱電機",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Optical devices, lasers and industrial electronics",
    "change": -8.3,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 6014.0,
    "referenceClose": 6558.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "6965.T",
    "quoteSymbol": "6965.T",
    "name": "浜松光子",
    "market": "JP",
    "segment": "laser",
    "sub": "Photonics",
    "role": "Photodetectors, optoelectronics and photonics devices",
    "change": 0.03,
    "tags": [
      "detector"
    ],
    "priceStatus": "ok",
    "latestClose": 2864.0,
    "referenceClose": 2863.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "AMS.SW",
    "quoteSymbol": "AMS.SW",
    "name": "ams OSRAM",
    "market": "EU",
    "segment": "laser",
    "sub": "Emitter",
    "role": "Emitters, sensors and photonics devices",
    "change": -14.45,
    "tags": [
      "emitter"
    ],
    "priceStatus": "ok",
    "latestClose": 17.229999542236328,
    "referenceClose": 20.139999389648438,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "3105.TWO",
    "quoteSymbol": "3105.TWO",
    "name": "穩懋",
    "market": "TW",
    "segment": "laser",
    "sub": "GaAs foundry",
    "role": "GaAs foundry with photonics-adjacent capabilities",
    "change": -8.25,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 483.5,
    "referenceClose": 527.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "3081.TWO",
    "quoteSymbol": "3081.TWO",
    "name": "聯亞",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "III-V epitaxy wafers for optical communications",
    "change": 1.53,
    "tags": [
      "epi",
      "III-V"
    ],
    "priceStatus": "ok",
    "latestClose": 2655.0,
    "referenceClose": 2615.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "2455.TW",
    "quoteSymbol": "2455.TW",
    "name": "全新",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "GaAs/InP epitaxy and compound semiconductor materials",
    "change": -5.45,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 399.0,
    "referenceClose": 422.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "8086.TWO",
    "quoteSymbol": "8086.TWO",
    "name": "宏捷科",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "GaAs foundry and compound semiconductor devices",
    "change": -7.69,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 156.0,
    "referenceClose": 169.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "4991.TWO",
    "quoteSymbol": "4991.TWO",
    "name": "環宇-KY",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "Compound semiconductor and optical device exposure",
    "change": -10.41,
    "tags": [
      "compound"
    ],
    "priceStatus": "ok",
    "latestClose": 654.0,
    "referenceClose": 730.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "laser",
    "sub": "Optical component",
    "role": "Optical communication components and modules",
    "change": -4.49,
    "tags": [
      "optical"
    ],
    "priceStatus": "ok",
    "latestClose": 596.0,
    "referenceClose": 624.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser chip",
    "role": "Optical communication laser chips",
    "change": 16.59,
    "tags": [
      "laser chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1320.719970703125,
    "referenceClose": 1132.7900390625,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser / module",
    "role": "Laser equipment and optical communication products",
    "change": 3.48,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 157.1999969482422,
    "referenceClose": 151.9199981689453,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "APH",
    "quoteSymbol": "APH",
    "name": "Amphenol",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "High-speed interconnect and optical connector ecosystem",
    "change": -6.69,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 138.80999755859375,
    "referenceClose": 148.75999450683594,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "GLW",
    "quoteSymbol": "GLW",
    "name": "Corning",
    "market": "US",
    "segment": "component",
    "sub": "Fiber / glass",
    "role": "Optical fiber, glass and datacenter cabling",
    "change": -1.98,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 177.5800018310547,
    "referenceClose": 181.16000366210938,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "TEL",
    "quoteSymbol": "TEL",
    "name": "TE Connectivity",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "Connectors, cable assemblies and sensors",
    "change": -0.36,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 212.64999389648438,
    "referenceClose": 213.41000366210938,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers, modulators and optical subassemblies",
    "change": 4.29,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 376.989990234375,
    "referenceClose": 361.4700012207031,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers and optical communication components",
    "change": 1.02,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 863.6599731445312,
    "referenceClose": 854.9600219726562,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "component",
    "sub": "Manufacturing",
    "role": "Precision optical manufacturing and assembly",
    "change": -5.03,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 621.25,
    "referenceClose": 654.1599731445312,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "3711.TW",
    "quoteSymbol": "3711.TW",
    "name": "日月光投控",
    "market": "TW",
    "segment": "component",
    "sub": "Advanced packaging",
    "role": "Semiconductor packaging and system-in-package",
    "change": -5.56,
    "tags": [
      "packaging"
    ],
    "priceStatus": "ok",
    "latestClose": 577.0,
    "referenceClose": 611.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "2449.TW",
    "quoteSymbol": "2449.TW",
    "name": "京元電",
    "market": "TW",
    "segment": "component",
    "sub": "Test",
    "role": "IC testing services for high-speed chips",
    "change": -5.78,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 309.5,
    "referenceClose": 328.5,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "6515.TW",
    "quoteSymbol": "6515.TW",
    "name": "穎崴",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card / socket",
    "role": "High-speed test interface and sockets",
    "change": -2.77,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 8425.0,
    "referenceClose": 8665.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "6223.TWO",
    "quoteSymbol": "6223.TWO",
    "name": "旺矽",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card",
    "role": "Probe cards and testing interface",
    "change": -3.27,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 5765.0,
    "referenceClose": 5960.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "3037.TW",
    "quoteSymbol": "3037.TW",
    "name": "欣興",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and advanced PCB",
    "change": -11.56,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 933.0,
    "referenceClose": 1055.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "3189.TW",
    "quoteSymbol": "3189.TW",
    "name": "景碩",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate supplier",
    "change": -2.33,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 712.0,
    "referenceClose": 729.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "8046.TW",
    "quoteSymbol": "8046.TW",
    "name": "南電",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and PCB",
    "change": -0.35,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 845.0,
    "referenceClose": 848.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "2383.TW",
    "quoteSymbol": "2383.TW",
    "name": "台光電",
    "market": "TW",
    "segment": "component",
    "sub": "Copper clad laminate",
    "role": "High-speed CCL for AI servers and switches",
    "change": -4.59,
    "tags": [
      "CCL"
    ],
    "priceStatus": "ok",
    "latestClose": 4885.0,
    "referenceClose": 5120.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "component",
    "sub": "Connector / RF",
    "role": "Connectors and optical communication components",
    "change": 11.38,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 2055.0,
    "referenceClose": 1845.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "3363.TWO",
    "quoteSymbol": "3363.TWO",
    "name": "上詮",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber optic components and passive devices",
    "change": 13.93,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 908.0,
    "referenceClose": 797.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "component",
    "sub": "Optical subassembly",
    "role": "Optical communication subassemblies and packaging",
    "change": 2.14,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 501.0,
    "referenceClose": 490.5,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "6451.TW",
    "quoteSymbol": "6451.TW",
    "name": "訊芯-KY",
    "market": "TW",
    "segment": "component",
    "sub": "SiP / optical packaging",
    "role": "System-in-package and optical communication assembly",
    "change": 16.84,
    "tags": [
      "SiP"
    ],
    "priceStatus": "ok",
    "latestClose": 666.0,
    "referenceClose": 570.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber arrays, splitters and optical passive components",
    "change": -0.97,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 1020.0,
    "referenceClose": 1030.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical communication component supplier",
    "change": 1.86,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 109.5,
    "referenceClose": 107.5,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive components and precision parts",
    "change": 0.4,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 457.0,
    "referenceClose": 455.20001220703125,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "300548.SZ",
    "quoteSymbol": "300548.SZ",
    "name": "博創科技",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive and active components",
    "change": -12.12,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 219.0,
    "referenceClose": 249.2100067138672,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "601869.SH",
    "quoteSymbol": "601869.SS",
    "name": "長飛光纖",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber",
    "role": "Optical fiber and cable",
    "change": 9.65,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 441.6700134277344,
    "referenceClose": 402.80999755859375,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "600487.SH",
    "quoteSymbol": "600487.SS",
    "name": "亨通光電",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber cable and optical network products",
    "change": 24.64,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 96.12000274658203,
    "referenceClose": 77.12000274658203,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "5801.T",
    "quoteSymbol": "5801.T",
    "name": "古河電工",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Optical fiber, cable and network materials",
    "change": -5.78,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 49050.0,
    "referenceClose": 52060.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "5803.T",
    "quoteSymbol": "5803.T",
    "name": "藤倉",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber, cable and optical interconnect products",
    "change": -0.5,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 4747.0,
    "referenceClose": 4771.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "4062.T",
    "quoteSymbol": "4062.T",
    "name": "Ibiden",
    "market": "JP",
    "segment": "component",
    "sub": "Substrate",
    "role": "Advanced IC substrates",
    "change": -18.43,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 18760.0,
    "referenceClose": 23000.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom and telecom optical transceivers",
    "change": 4.29,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 376.989990234375,
    "referenceClose": 361.4700012207031,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "module",
    "sub": "Laser / module",
    "role": "Laser engines and optical module supply",
    "change": 1.02,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 863.6599731445312,
    "referenceClose": 854.9600219726562,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "module",
    "sub": "Optical manufacturing",
    "role": "Optical module contract manufacturing",
    "change": -5.03,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 621.25,
    "referenceClose": 654.1599731445312,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "module",
    "sub": "Coherent module",
    "role": "Coherent optical modules and transport platforms",
    "change": -15.86,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 488.2099914550781,
    "referenceClose": 580.22998046875,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "module",
    "sub": "Acacia module",
    "role": "Acacia coherent optics and pluggable modules",
    "change": 1.01,
    "tags": [
      "Acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 121.63999938964844,
    "referenceClose": 120.41999816894531,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "module",
    "sub": "Optical module",
    "role": "Coherent optics and network system modules",
    "change": -3.1,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 14.380000114440918,
    "referenceClose": 14.84000015258789,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical communication modules and components",
    "change": -4.49,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 596.0,
    "referenceClose": 624.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "4977.TW",
    "quoteSymbol": "4977.TW",
    "name": "眾達-KY",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical transceiver supplier",
    "change": -4.75,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 200.5,
    "referenceClose": 210.5,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver component",
    "role": "Optical communication and connector products",
    "change": 11.38,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 2055.0,
    "referenceClose": 1845.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "module",
    "sub": "OSA",
    "role": "Optical subassemblies for transceivers",
    "change": 2.14,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 501.0,
    "referenceClose": 490.5,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "module",
    "sub": "Passive optical",
    "role": "Fiber components used in modules",
    "change": -0.97,
    "tags": [
      "passive"
    ],
    "priceStatus": "ok",
    "latestClose": 1020.0,
    "referenceClose": 1030.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module exposure",
    "change": 1.86,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 109.5,
    "referenceClose": 107.5,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "4908.TWO",
    "quoteSymbol": "4908.TWO",
    "name": "前鼎",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module and equipment",
    "change": -2.79,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 226.5,
    "referenceClose": 233.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "300308.SZ",
    "quoteSymbol": "300308.SZ",
    "name": "中際旭創",
    "market": "CN",
    "segment": "module",
    "sub": "800G / 1.6T",
    "role": "High-speed optical transceiver leader",
    "change": 1.62,
    "tags": [
      "800G",
      "1.6T"
    ],
    "priceStatus": "ok",
    "latestClose": 1179.989990234375,
    "referenceClose": 1161.1600341796875,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "300502.SZ",
    "quoteSymbol": "300502.SZ",
    "name": "新易盛",
    "market": "CN",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom optical transceivers",
    "change": 5.88,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 748.0,
    "referenceClose": 706.4500122070312,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "002281.SZ",
    "quoteSymbol": "002281.SZ",
    "name": "光迅科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical devices and modules",
    "change": 11.59,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 227.5800018310547,
    "referenceClose": 203.9499969482422,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "603083.SH",
    "quoteSymbol": "603083.SS",
    "name": "劍橋科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical modules and broadband equipment",
    "change": -7.55,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 192.02000427246094,
    "referenceClose": 207.6999969482422,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical engine parts",
    "role": "High-speed module precision components",
    "change": 0.4,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 457.0,
    "referenceClose": 455.20001220703125,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "688205.SH",
    "quoteSymbol": "688205.SS",
    "name": "德科立",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical transceiver modules",
    "change": -4.51,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 226.6999969482422,
    "referenceClose": 237.41000366210938,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication and laser products",
    "change": 3.48,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 157.1999969482422,
    "referenceClose": 151.9199981689453,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical network",
    "role": "Optical network systems and modules",
    "change": 8.85,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 56.47999954223633,
    "referenceClose": 51.88999938964844,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "module",
    "sub": "Optical device",
    "role": "Optical components and communication devices",
    "change": 3.38,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 13010.0,
    "referenceClose": 12585.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "ANET",
    "quoteSymbol": "ANET",
    "name": "Arista Networks",
    "market": "US",
    "segment": "system",
    "sub": "AI switch",
    "role": "AI datacenter Ethernet switches",
    "change": -3.26,
    "tags": [
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 154.27000427246094,
    "referenceClose": 159.47000122070312,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "system",
    "sub": "Switch / router",
    "role": "Enterprise and cloud networking systems",
    "change": 1.01,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 121.63999938964844,
    "referenceClose": 120.41999816894531,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "HPE",
    "quoteSymbol": "HPE",
    "name": "HPE",
    "market": "US",
    "segment": "system",
    "sub": "Server / networking",
    "role": "AI servers, networking and cloud infrastructure",
    "change": 14.31,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 49.20000076293945,
    "referenceClose": 43.040000915527344,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "DELL",
    "quoteSymbol": "DELL",
    "name": "Dell",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and enterprise infrastructure",
    "change": -6.3,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 394.3900146484375,
    "referenceClose": 420.9100036621094,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "SMCI",
    "quoteSymbol": "SMCI",
    "name": "Supermicro",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server platforms and rack-scale systems",
    "change": -9.65,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 41.63999938964844,
    "referenceClose": 46.09000015258789,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "CLS",
    "quoteSymbol": "CLS",
    "name": "Celestica",
    "market": "US",
    "segment": "system",
    "sub": "ODM / EMS",
    "role": "Cloud hardware and networking manufacturing",
    "change": -3.55,
    "tags": [
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 371.7099914550781,
    "referenceClose": 385.3900146484375,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "JBL",
    "quoteSymbol": "JBL",
    "name": "Jabil",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing for networking systems",
    "change": -3.11,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 353.239990234375,
    "referenceClose": 364.55999755859375,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "FLEX",
    "quoteSymbol": "FLEX",
    "name": "Flex",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing and cloud hardware",
    "change": 0.76,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 151.9199981689453,
    "referenceClose": 150.77999877929688,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "2345.TW",
    "quoteSymbol": "2345.TW",
    "name": "智邦",
    "market": "TW",
    "segment": "system",
    "sub": "Switch ODM",
    "role": "White-box switch and cloud networking ODM",
    "change": 2.47,
    "tags": [
      "switch",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 2490.0,
    "referenceClose": 2430.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "2382.TW",
    "quoteSymbol": "2382.TW",
    "name": "廣達",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and cloud infrastructure ODM",
    "change": 15.19,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 390.5,
    "referenceClose": 339.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "6669.TW",
    "quoteSymbol": "6669.TW",
    "name": "緯穎",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "Cloud datacenter server ODM",
    "change": 3.95,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 5660.0,
    "referenceClose": 5445.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "2317.TW",
    "quoteSymbol": "2317.TW",
    "name": "鴻海",
    "market": "TW",
    "segment": "system",
    "sub": "EMS / server",
    "role": "AI server and system assembly",
    "change": -1.56,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 284.5,
    "referenceClose": 289.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "2308.TW",
    "quoteSymbol": "2308.TW",
    "name": "台達電",
    "market": "TW",
    "segment": "system",
    "sub": "Power / thermal",
    "role": "Power, thermal and datacenter infrastructure",
    "change": -5.93,
    "tags": [
      "power",
      "thermal"
    ],
    "priceStatus": "ok",
    "latestClose": 2300.0,
    "referenceClose": 2445.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "3706.TW",
    "quoteSymbol": "3706.TW",
    "name": "神達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and datacenter system integration",
    "change": 4.05,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 92.4000015258789,
    "referenceClose": 88.80000305175781,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "3231.TW",
    "quoteSymbol": "3231.TW",
    "name": "緯創",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and system integration",
    "change": 7.89,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 171.0,
    "referenceClose": 158.5,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "2356.TW",
    "quoteSymbol": "2356.TW",
    "name": "英業達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and cloud equipment manufacturing",
    "change": 9.4,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 76.80000305175781,
    "referenceClose": 70.19999694824219,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "3380.TW",
    "quoteSymbol": "3380.TW",
    "name": "明泰",
    "market": "TW",
    "segment": "system",
    "sub": "Networking",
    "role": "Networking products and broadband equipment",
    "change": -2.85,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 37.5,
    "referenceClose": 38.599998474121094,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "6285.TW",
    "quoteSymbol": "6285.TW",
    "name": "啟碁",
    "market": "TW",
    "segment": "system",
    "sub": "Network device",
    "role": "Wireless and networking equipment",
    "change": -8.46,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 292.0,
    "referenceClose": 319.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "system",
    "sub": "Optical systems",
    "role": "Optical communication and laser systems",
    "change": 3.48,
    "tags": [
      "system"
    ],
    "priceStatus": "ok",
    "latestClose": 157.1999969482422,
    "referenceClose": 151.9199981689453,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "system",
    "sub": "Optical network",
    "role": "Optical transmission and network equipment",
    "change": 8.85,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 56.47999954223633,
    "referenceClose": 51.88999938964844,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "000063.SZ",
    "quoteSymbol": "000063.SZ",
    "name": "中興通訊",
    "market": "CN",
    "segment": "system",
    "sub": "Telecom equipment",
    "role": "Telecom and datacenter network equipment",
    "change": 6.56,
    "tags": [
      "telecom"
    ],
    "priceStatus": "ok",
    "latestClose": 39.130001068115234,
    "referenceClose": 36.720001220703125,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "6701.T",
    "quoteSymbol": "6701.T",
    "name": "NEC",
    "market": "JP",
    "segment": "system",
    "sub": "Network systems",
    "role": "Telecom, submarine and network systems",
    "change": 3.66,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 4253.0,
    "referenceClose": 4103.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  },
  {
    "ticker": "6702.T",
    "quoteSymbol": "6702.T",
    "name": "Fujitsu",
    "market": "JP",
    "segment": "system",
    "sub": "ICT systems",
    "role": "ICT infrastructure and network systems",
    "change": 6.62,
    "tags": [
      "ICT"
    ],
    "priceStatus": "ok",
    "latestClose": 3591.0,
    "referenceClose": 3368.0,
    "priceDate": "2026-06-05",
    "referenceDate": "2026-05-29"
  }
];

