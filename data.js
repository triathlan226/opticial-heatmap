window.HEATMAP_META = {
  "title": "光通訊 / CPO 供應鏈熱力圖",
  "subtitle": "六大環節、跨市場上市公司、同公司可重複出現在多個供應鏈位置。",
  "lastUpdated": "2026-05-30",
  "dateRange": "2026-05-22 → 2026-05-29",
  "totalTiles": 126,
  "totalCompanies": 97,
  "quoteSymbolsUpdated": 97,
  "quoteSymbolsFailed": 0,
  "priceStatusCounts": {
    "ok": 126
  },
  "topGainer": {
    "ticker": "DELL",
    "name": "Dell",
    "change": 42.59
  },
  "topLoser": {
    "ticker": "AXTI",
    "name": "AXT",
    "change": -26.75
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
    "change": 7.88,
    "tags": [
      "ASIC",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 446.7699890136719,
    "referenceClose": 414.1400146484375,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "asic",
    "sub": "GPU / Network ASIC",
    "role": "GPU, NVLink, Spectrum-X ecosystem",
    "change": -1.95,
    "tags": [
      "GPU",
      "networking"
    ],
    "priceStatus": "ok",
    "latestClose": 211.13999938964844,
    "referenceClose": 215.3300018310547,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "asic",
    "sub": "DSP / PAM4",
    "role": "Optical DSP, custom silicon, DCI chips",
    "change": 4.42,
    "tags": [
      "DSP",
      "custom silicon"
    ],
    "priceStatus": "ok",
    "latestClose": 205.0,
    "referenceClose": 196.3300018310547,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "CRDO",
    "quoteSymbol": "CRDO",
    "name": "Credo",
    "market": "US",
    "segment": "asic",
    "sub": "Retimer / DSP",
    "role": "High-speed connectivity and optical DSP",
    "change": 8.07,
    "tags": [
      "DSP",
      "retimer"
    ],
    "priceStatus": "ok",
    "latestClose": 236.02999877929688,
    "referenceClose": 218.41000366210938,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "ALAB",
    "quoteSymbol": "ALAB",
    "name": "Astera Labs",
    "market": "US",
    "segment": "asic",
    "sub": "PCIe / CXL",
    "role": "AI data-center connectivity silicon",
    "change": 11.72,
    "tags": [
      "retimer",
      "CXL"
    ],
    "priceStatus": "ok",
    "latestClose": 342.8500061035156,
    "referenceClose": 306.8800048828125,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Laser drivers, TIAs, high-speed analog",
    "change": -5.53,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 364.6400146484375,
    "referenceClose": 385.9800109863281,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "SMTC",
    "quoteSymbol": "SMTC",
    "name": "Semtech",
    "market": "US",
    "segment": "asic",
    "sub": "Signal IC",
    "role": "Signal integrity and optical analog ICs",
    "change": -2.7,
    "tags": [
      "signal"
    ],
    "priceStatus": "ok",
    "latestClose": 152.5399932861328,
    "referenceClose": 156.77999877929688,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "asic",
    "sub": "Network silicon",
    "role": "Silicon One and Acacia optical stack",
    "change": 0.01,
    "tags": [
      "switch",
      "acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 120.41999816894531,
    "referenceClose": 120.41000366210938,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "asic",
    "sub": "Coherent DSP",
    "role": "WaveLogic coherent DSP and systems",
    "change": -0.6,
    "tags": [
      "coherent",
      "DSP"
    ],
    "priceStatus": "ok",
    "latestClose": 580.22998046875,
    "referenceClose": 583.739990234375,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "AMD",
    "quoteSymbol": "AMD",
    "name": "AMD",
    "market": "US",
    "segment": "asic",
    "sub": "AI accelerator",
    "role": "AI accelerators and adaptive compute",
    "change": 10.39,
    "tags": [
      "accelerator"
    ],
    "priceStatus": "ok",
    "latestClose": 516.0999755859375,
    "referenceClose": 467.510009765625,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "asic",
    "sub": "Foundry / I/O",
    "role": "Foundry, Ethernet, historical silicon photonics",
    "change": -4.31,
    "tags": [
      "foundry",
      "ethernet"
    ],
    "priceStatus": "ok",
    "latestClose": 114.68000030517578,
    "referenceClose": 119.83999633789062,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "QCOM",
    "quoteSymbol": "QCOM",
    "name": "Qualcomm",
    "market": "US",
    "segment": "asic",
    "sub": "Connectivity IC",
    "role": "High-speed connectivity and edge AI silicon",
    "change": 5.4,
    "tags": [
      "connectivity"
    ],
    "priceStatus": "ok",
    "latestClose": 251.02000427246094,
    "referenceClose": 238.16000366210938,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "3661.TW",
    "quoteSymbol": "3661.TW",
    "name": "世芯-KY",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "Advanced-node custom ASIC design service",
    "change": -9.81,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 4415.0,
    "referenceClose": 4895.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "3443.TW",
    "quoteSymbol": "3443.TW",
    "name": "創意",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "GUC ASIC design and implementation",
    "change": -9.14,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 4670.0,
    "referenceClose": 5140.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "2454.TW",
    "quoteSymbol": "2454.TW",
    "name": "聯發科",
    "market": "TW",
    "segment": "asic",
    "sub": "Connectivity SoC",
    "role": "Networking, SerDes and edge AI chip exposure",
    "change": 11.66,
    "tags": [
      "SoC"
    ],
    "priceStatus": "ok",
    "latestClose": 4310.0,
    "referenceClose": 3860.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "5274.TWO",
    "quoteSymbol": "5274.TWO",
    "name": "信驊",
    "market": "TW",
    "segment": "asic",
    "sub": "BMC",
    "role": "Server management silicon",
    "change": 6.58,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 18950.0,
    "referenceClose": 17780.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "688536.SH",
    "quoteSymbol": "688536.SS",
    "name": "思瑞浦",
    "market": "CN",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Analog and signal-chain ICs",
    "change": 3.35,
    "tags": [
      "analog"
    ],
    "priceStatus": "ok",
    "latestClose": 309.010009765625,
    "referenceClose": 298.989990234375,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "asic",
    "sub": "Laser driver link",
    "role": "Optical chip supplier with upstream exposure",
    "change": 6.23,
    "tags": [
      "optical chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1132.7900390625,
    "referenceClose": 1066.4000244140625,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "2330.TW",
    "quoteSymbol": "2330.TW",
    "name": "台積電",
    "market": "TW",
    "segment": "sipic",
    "sub": "Foundry",
    "role": "Advanced-node and packaging platform for CPO ecosystem",
    "change": 4.43,
    "tags": [
      "foundry",
      "CoWoS"
    ],
    "priceStatus": "ok",
    "latestClose": 2355.0,
    "referenceClose": 2255.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "AVGO",
    "quoteSymbol": "AVGO",
    "name": "Broadcom",
    "market": "US",
    "segment": "sipic",
    "sub": "Co-packaged optics",
    "role": "CPO roadmap and switch silicon integration",
    "change": 7.88,
    "tags": [
      "CPO",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 446.7699890136719,
    "referenceClose": 414.1400146484375,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical I/O ecosystem",
    "role": "AI cluster architecture drives optical I/O demand",
    "change": -1.95,
    "tags": [
      "AI",
      "optical I/O"
    ],
    "priceStatus": "ok",
    "latestClose": 211.13999938964844,
    "referenceClose": 215.3300018310547,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical platform",
    "role": "DSP plus silicon photonics partnership ecosystem",
    "change": 4.42,
    "tags": [
      "DSP",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 205.0,
    "referenceClose": 196.3300018310547,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "sipic",
    "sub": "Silicon photonics",
    "role": "Integrated silicon photonics and foundry capabilities",
    "change": -4.31,
    "tags": [
      "SiPh",
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 114.68000030517578,
    "referenceClose": 119.83999633789062,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Lasers, transceivers and optical engine building blocks",
    "change": -4.26,
    "tags": [
      "laser",
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 361.4700012207031,
    "referenceClose": 377.57000732421875,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Datacom lasers and optical components",
    "change": -9.71,
    "tags": [
      "laser",
      "datacom"
    ],
    "priceStatus": "ok",
    "latestClose": 854.9600219726562,
    "referenceClose": 946.9000244140625,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "STM",
    "quoteSymbol": "STM",
    "name": "STMicro",
    "market": "EU",
    "segment": "sipic",
    "sub": "Photonics platform",
    "role": "Photonics and advanced semiconductor platform exposure",
    "change": 3.66,
    "tags": [
      "photonics"
    ],
    "priceStatus": "ok",
    "latestClose": 69.30999755859375,
    "referenceClose": 66.86000061035156,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "GFS",
    "quoteSymbol": "GFS",
    "name": "GlobalFoundries",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Silicon photonics and specialty process platform",
    "change": -6.62,
    "tags": [
      "foundry",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 79.97000122070312,
    "referenceClose": 85.63999938964844,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "TSEM",
    "quoteSymbol": "TSEM",
    "name": "Tower Semiconductor",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Analog, photonics and specialty manufacturing",
    "change": -9.95,
    "tags": [
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 255.22999572753906,
    "referenceClose": 283.42999267578125,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "sipic",
    "sub": "Optical systems",
    "role": "Photonic service engines and coherent optics",
    "change": -4.07,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 14.84000015258789,
    "referenceClose": 15.470000267028809,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "sipic",
    "sub": "Acacia optics",
    "role": "Coherent modules and optical interconnect roadmap",
    "change": 0.01,
    "tags": [
      "Acacia",
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 120.41999816894531,
    "referenceClose": 120.41000366210938,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "sipic",
    "sub": "Coherent optics",
    "role": "Coherent optical engine and network platforms",
    "change": -0.6,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 580.22998046875,
    "referenceClose": 583.739990234375,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "POET",
    "quoteSymbol": "POET",
    "name": "POET Technologies",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical interposer",
    "role": "Optical interposer platform for transceivers",
    "change": -15.76,
    "tags": [
      "interposer"
    ],
    "priceStatus": "ok",
    "latestClose": 12.289999961853027,
    "referenceClose": 14.59000015258789,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "LWLG",
    "quoteSymbol": "LWLG",
    "name": "Lightwave Logic",
    "market": "US",
    "segment": "sipic",
    "sub": "EO polymer",
    "role": "Electro-optic polymer material platform",
    "change": -15.49,
    "tags": [
      "material"
    ],
    "priceStatus": "ok",
    "latestClose": 10.859999656677246,
    "referenceClose": 12.850000381469727,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "4966.TWO",
    "quoteSymbol": "4966.TWO",
    "name": "譜瑞-KY",
    "market": "TW",
    "segment": "sipic",
    "sub": "High-speed interface",
    "role": "High-speed interface ICs and data transmission",
    "change": 4.91,
    "tags": [
      "interface"
    ],
    "priceStatus": "ok",
    "latestClose": 834.0,
    "referenceClose": 795.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "6789.TW",
    "quoteSymbol": "6789.TW",
    "name": "采鈺",
    "market": "TW",
    "segment": "sipic",
    "sub": "Optical process",
    "role": "Optical semiconductor process and sensor platform",
    "change": -5.4,
    "tags": [
      "process"
    ],
    "priceStatus": "ok",
    "latestClose": 526.0,
    "referenceClose": 556.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "688313.SH",
    "quoteSymbol": "688313.SS",
    "name": "仕佳光子",
    "market": "CN",
    "segment": "sipic",
    "sub": "PLC / optical chip",
    "role": "PLC splitter, AWG and optical chip supplier",
    "change": -6.89,
    "tags": [
      "PLC",
      "chip"
    ],
    "priceStatus": "ok",
    "latestClose": 162.69000244140625,
    "referenceClose": 174.72000122070312,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "laser",
    "sub": "Laser / InP",
    "role": "InP lasers, VCSELs, coherent and datacom components",
    "change": -4.26,
    "tags": [
      "InP",
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 361.4700012207031,
    "referenceClose": 377.57000732421875,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "laser",
    "sub": "Datacom laser",
    "role": "EML, DFB and high-speed datacom laser supply",
    "change": -9.71,
    "tags": [
      "EML",
      "DFB"
    ],
    "priceStatus": "ok",
    "latestClose": 854.9600219726562,
    "referenceClose": 946.9000244140625,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "laser",
    "sub": "Laser driver / TIA",
    "role": "Laser drivers, TIAs and analog front-end",
    "change": -5.53,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 364.6400146484375,
    "referenceClose": 385.9800109863281,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "IPGP",
    "quoteSymbol": "IPGP",
    "name": "IPG Photonics",
    "market": "US",
    "segment": "laser",
    "sub": "Fiber laser",
    "role": "Laser technology and optical components",
    "change": -3.76,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 114.5199966430664,
    "referenceClose": 119.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "AXTI",
    "quoteSymbol": "AXTI",
    "name": "AXT",
    "market": "US",
    "segment": "laser",
    "sub": "Substrate",
    "role": "Compound semiconductor substrates",
    "change": -26.75,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 103.16000366210938,
    "referenceClose": 140.8300018310547,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "IQE.L",
    "quoteSymbol": "IQE.L",
    "name": "IQE",
    "market": "EU",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "Compound semiconductor epitaxy wafers",
    "change": 3.83,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 47.5,
    "referenceClose": 45.75,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Compound semiconductor and optical components",
    "change": 6.47,
    "tags": [
      "InP",
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 12585.0,
    "referenceClose": 11820.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "6503.T",
    "quoteSymbol": "6503.T",
    "name": "三菱電機",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Optical devices, lasers and industrial electronics",
    "change": 4.08,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 6558.0,
    "referenceClose": 6301.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "6965.T",
    "quoteSymbol": "6965.T",
    "name": "浜松光子",
    "market": "JP",
    "segment": "laser",
    "sub": "Photonics",
    "role": "Photodetectors, optoelectronics and photonics devices",
    "change": -1.63,
    "tags": [
      "detector"
    ],
    "priceStatus": "ok",
    "latestClose": 2863.0,
    "referenceClose": 2910.5,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "AMS.SW",
    "quoteSymbol": "AMS.SW",
    "name": "ams OSRAM",
    "market": "EU",
    "segment": "laser",
    "sub": "Emitter",
    "role": "Emitters, sensors and photonics devices",
    "change": -12.43,
    "tags": [
      "emitter"
    ],
    "priceStatus": "ok",
    "latestClose": 20.139999389648438,
    "referenceClose": 23.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "3105.TWO",
    "quoteSymbol": "3105.TWO",
    "name": "穩懋",
    "market": "TW",
    "segment": "laser",
    "sub": "GaAs foundry",
    "role": "GaAs foundry with photonics-adjacent capabilities",
    "change": -0.75,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 527.0,
    "referenceClose": 531.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "3081.TWO",
    "quoteSymbol": "3081.TWO",
    "name": "聯亞",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "III-V epitaxy wafers for optical communications",
    "change": -3.51,
    "tags": [
      "epi",
      "III-V"
    ],
    "priceStatus": "ok",
    "latestClose": 2615.0,
    "referenceClose": 2710.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "2455.TW",
    "quoteSymbol": "2455.TW",
    "name": "全新",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "GaAs/InP epitaxy and compound semiconductor materials",
    "change": -0.71,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 422.0,
    "referenceClose": 425.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "8086.TWO",
    "quoteSymbol": "8086.TWO",
    "name": "宏捷科",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "GaAs foundry and compound semiconductor devices",
    "change": 5.96,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 169.0,
    "referenceClose": 159.5,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "4991.TWO",
    "quoteSymbol": "4991.TWO",
    "name": "環宇-KY",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "Compound semiconductor and optical device exposure",
    "change": -10.32,
    "tags": [
      "compound"
    ],
    "priceStatus": "ok",
    "latestClose": 730.0,
    "referenceClose": 814.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "laser",
    "sub": "Optical component",
    "role": "Optical communication components and modules",
    "change": -0.95,
    "tags": [
      "optical"
    ],
    "priceStatus": "ok",
    "latestClose": 624.0,
    "referenceClose": 630.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser chip",
    "role": "Optical communication laser chips",
    "change": 6.23,
    "tags": [
      "laser chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1132.7900390625,
    "referenceClose": 1066.4000244140625,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser / module",
    "role": "Laser equipment and optical communication products",
    "change": -2.81,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 151.9199981689453,
    "referenceClose": 156.30999755859375,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "APH",
    "quoteSymbol": "APH",
    "name": "Amphenol",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "High-speed interconnect and optical connector ecosystem",
    "change": 12.65,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 148.75999450683594,
    "referenceClose": 132.05999755859375,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "GLW",
    "quoteSymbol": "GLW",
    "name": "Corning",
    "market": "US",
    "segment": "component",
    "sub": "Fiber / glass",
    "role": "Optical fiber, glass and datacenter cabling",
    "change": -6.64,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 181.16000366210938,
    "referenceClose": 194.0500030517578,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "TEL",
    "quoteSymbol": "TEL",
    "name": "TE Connectivity",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "Connectors, cable assemblies and sensors",
    "change": 5.24,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 213.41000366210938,
    "referenceClose": 202.77999877929688,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers, modulators and optical subassemblies",
    "change": -4.26,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 361.4700012207031,
    "referenceClose": 377.57000732421875,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers and optical communication components",
    "change": -9.71,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 854.9600219726562,
    "referenceClose": 946.9000244140625,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "component",
    "sub": "Manufacturing",
    "role": "Precision optical manufacturing and assembly",
    "change": -7.06,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 654.1599731445312,
    "referenceClose": 703.8599853515625,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "3711.TW",
    "quoteSymbol": "3711.TW",
    "name": "日月光投控",
    "market": "TW",
    "segment": "component",
    "sub": "Advanced packaging",
    "role": "Semiconductor packaging and system-in-package",
    "change": 8.91,
    "tags": [
      "packaging"
    ],
    "priceStatus": "ok",
    "latestClose": 611.0,
    "referenceClose": 561.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "2449.TW",
    "quoteSymbol": "2449.TW",
    "name": "京元電",
    "market": "TW",
    "segment": "component",
    "sub": "Test",
    "role": "IC testing services for high-speed chips",
    "change": 10.98,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 328.5,
    "referenceClose": 296.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "6515.TW",
    "quoteSymbol": "6515.TW",
    "name": "穎崴",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card / socket",
    "role": "High-speed test interface and sockets",
    "change": -0.4,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 8665.0,
    "referenceClose": 8700.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "6223.TWO",
    "quoteSymbol": "6223.TWO",
    "name": "旺矽",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card",
    "role": "Probe cards and testing interface",
    "change": -1.24,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 5960.0,
    "referenceClose": 6035.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "3037.TW",
    "quoteSymbol": "3037.TW",
    "name": "欣興",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and advanced PCB",
    "change": 8.76,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1055.0,
    "referenceClose": 970.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "3189.TW",
    "quoteSymbol": "3189.TW",
    "name": "景碩",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate supplier",
    "change": 19.7,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 729.0,
    "referenceClose": 609.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "8046.TW",
    "quoteSymbol": "8046.TW",
    "name": "南電",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and PCB",
    "change": -9.21,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 848.0,
    "referenceClose": 934.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "2383.TW",
    "quoteSymbol": "2383.TW",
    "name": "台光電",
    "market": "TW",
    "segment": "component",
    "sub": "Copper clad laminate",
    "role": "High-speed CCL for AI servers and switches",
    "change": 2.3,
    "tags": [
      "CCL"
    ],
    "priceStatus": "ok",
    "latestClose": 5120.0,
    "referenceClose": 5005.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "component",
    "sub": "Connector / RF",
    "role": "Connectors and optical communication components",
    "change": -1.6,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 1845.0,
    "referenceClose": 1875.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "3363.TWO",
    "quoteSymbol": "3363.TWO",
    "name": "上詮",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber optic components and passive devices",
    "change": -6.46,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 797.0,
    "referenceClose": 852.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "component",
    "sub": "Optical subassembly",
    "role": "Optical communication subassemblies and packaging",
    "change": 6.75,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 490.5,
    "referenceClose": 459.5,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "6451.TW",
    "quoteSymbol": "6451.TW",
    "name": "訊芯-KY",
    "market": "TW",
    "segment": "component",
    "sub": "SiP / optical packaging",
    "role": "System-in-package and optical communication assembly",
    "change": 8.78,
    "tags": [
      "SiP"
    ],
    "priceStatus": "ok",
    "latestClose": 570.0,
    "referenceClose": 524.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber arrays, splitters and optical passive components",
    "change": -10.04,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 1030.0,
    "referenceClose": 1145.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical communication component supplier",
    "change": -3.59,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 107.5,
    "referenceClose": 111.5,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive components and precision parts",
    "change": 22.2,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 455.20001220703125,
    "referenceClose": 372.5,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "300548.SZ",
    "quoteSymbol": "300548.SZ",
    "name": "博創科技",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive and active components",
    "change": 3.71,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 249.2100067138672,
    "referenceClose": 240.3000030517578,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "601869.SH",
    "quoteSymbol": "601869.SS",
    "name": "長飛光纖",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber",
    "role": "Optical fiber and cable",
    "change": 3.64,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 402.80999755859375,
    "referenceClose": 388.6600036621094,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "600487.SH",
    "quoteSymbol": "600487.SS",
    "name": "亨通光電",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber cable and optical network products",
    "change": 5.57,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 77.12000274658203,
    "referenceClose": 73.05000305175781,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "5801.T",
    "quoteSymbol": "5801.T",
    "name": "古河電工",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Optical fiber, cable and network materials",
    "change": -2.96,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 52060.0,
    "referenceClose": 53650.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "5803.T",
    "quoteSymbol": "5803.T",
    "name": "藤倉",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber, cable and optical interconnect products",
    "change": -1.63,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 4771.0,
    "referenceClose": 4850.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "4062.T",
    "quoteSymbol": "4062.T",
    "name": "Ibiden",
    "market": "JP",
    "segment": "component",
    "sub": "Substrate",
    "role": "Advanced IC substrates",
    "change": 19.48,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 23000.0,
    "referenceClose": 19250.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom and telecom optical transceivers",
    "change": -4.26,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 361.4700012207031,
    "referenceClose": 377.57000732421875,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "module",
    "sub": "Laser / module",
    "role": "Laser engines and optical module supply",
    "change": -9.71,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 854.9600219726562,
    "referenceClose": 946.9000244140625,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "module",
    "sub": "Optical manufacturing",
    "role": "Optical module contract manufacturing",
    "change": -7.06,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 654.1599731445312,
    "referenceClose": 703.8599853515625,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "module",
    "sub": "Coherent module",
    "role": "Coherent optical modules and transport platforms",
    "change": -0.6,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 580.22998046875,
    "referenceClose": 583.739990234375,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "module",
    "sub": "Acacia module",
    "role": "Acacia coherent optics and pluggable modules",
    "change": 0.01,
    "tags": [
      "Acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 120.41999816894531,
    "referenceClose": 120.41000366210938,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "module",
    "sub": "Optical module",
    "role": "Coherent optics and network system modules",
    "change": -4.07,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 14.84000015258789,
    "referenceClose": 15.470000267028809,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical communication modules and components",
    "change": -0.95,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 624.0,
    "referenceClose": 630.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "4977.TW",
    "quoteSymbol": "4977.TW",
    "name": "眾達-KY",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical transceiver supplier",
    "change": -4.1,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 210.5,
    "referenceClose": 219.5,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver component",
    "role": "Optical communication and connector products",
    "change": -1.6,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1845.0,
    "referenceClose": 1875.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "module",
    "sub": "OSA",
    "role": "Optical subassemblies for transceivers",
    "change": 6.75,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 490.5,
    "referenceClose": 459.5,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "module",
    "sub": "Passive optical",
    "role": "Fiber components used in modules",
    "change": -10.04,
    "tags": [
      "passive"
    ],
    "priceStatus": "ok",
    "latestClose": 1030.0,
    "referenceClose": 1145.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module exposure",
    "change": -3.59,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 107.5,
    "referenceClose": 111.5,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "4908.TWO",
    "quoteSymbol": "4908.TWO",
    "name": "前鼎",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module and equipment",
    "change": -12.73,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 233.0,
    "referenceClose": 267.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "300308.SZ",
    "quoteSymbol": "300308.SZ",
    "name": "中際旭創",
    "market": "CN",
    "segment": "module",
    "sub": "800G / 1.6T",
    "role": "High-speed optical transceiver leader",
    "change": 11.87,
    "tags": [
      "800G",
      "1.6T"
    ],
    "priceStatus": "ok",
    "latestClose": 1161.1600341796875,
    "referenceClose": 1037.97998046875,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "300502.SZ",
    "quoteSymbol": "300502.SZ",
    "name": "新易盛",
    "market": "CN",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom optical transceivers",
    "change": 16.43,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 706.4500122070312,
    "referenceClose": 606.77001953125,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "002281.SZ",
    "quoteSymbol": "002281.SZ",
    "name": "光迅科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical devices and modules",
    "change": -5.52,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 203.9499969482422,
    "referenceClose": 215.8699951171875,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "603083.SH",
    "quoteSymbol": "603083.SS",
    "name": "劍橋科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical modules and broadband equipment",
    "change": 9.32,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 207.6999969482422,
    "referenceClose": 190.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical engine parts",
    "role": "High-speed module precision components",
    "change": 22.2,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 455.20001220703125,
    "referenceClose": 372.5,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "688205.SH",
    "quoteSymbol": "688205.SS",
    "name": "德科立",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical transceiver modules",
    "change": -7.55,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 237.41000366210938,
    "referenceClose": 256.79998779296875,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication and laser products",
    "change": -2.81,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 151.9199981689453,
    "referenceClose": 156.30999755859375,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical network",
    "role": "Optical network systems and modules",
    "change": -5.91,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 51.88999938964844,
    "referenceClose": 55.150001525878906,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "module",
    "sub": "Optical device",
    "role": "Optical components and communication devices",
    "change": 6.47,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 12585.0,
    "referenceClose": 11820.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "ANET",
    "quoteSymbol": "ANET",
    "name": "Arista Networks",
    "market": "US",
    "segment": "system",
    "sub": "AI switch",
    "role": "AI datacenter Ethernet switches",
    "change": 3.53,
    "tags": [
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 159.47000122070312,
    "referenceClose": 154.02999877929688,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "system",
    "sub": "Switch / router",
    "role": "Enterprise and cloud networking systems",
    "change": 0.01,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 120.41999816894531,
    "referenceClose": 120.41000366210938,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "HPE",
    "quoteSymbol": "HPE",
    "name": "HPE",
    "market": "US",
    "segment": "system",
    "sub": "Server / networking",
    "role": "AI servers, networking and cloud infrastructure",
    "change": 14.53,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 43.040000915527344,
    "referenceClose": 37.58000183105469,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "DELL",
    "quoteSymbol": "DELL",
    "name": "Dell",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and enterprise infrastructure",
    "change": 42.59,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 420.9100036621094,
    "referenceClose": 295.19000244140625,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "SMCI",
    "quoteSymbol": "SMCI",
    "name": "Supermicro",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server platforms and rack-scale systems",
    "change": 29.54,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 46.09000015258789,
    "referenceClose": 35.58000183105469,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "CLS",
    "quoteSymbol": "CLS",
    "name": "Celestica",
    "market": "US",
    "segment": "system",
    "sub": "ODM / EMS",
    "role": "Cloud hardware and networking manufacturing",
    "change": 4.91,
    "tags": [
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 385.3900146484375,
    "referenceClose": 367.3699951171875,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "JBL",
    "quoteSymbol": "JBL",
    "name": "Jabil",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing for networking systems",
    "change": 0.06,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 364.55999755859375,
    "referenceClose": 364.3500061035156,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "FLEX",
    "quoteSymbol": "FLEX",
    "name": "Flex",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing and cloud hardware",
    "change": 13.82,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 150.77999877929688,
    "referenceClose": 132.47000122070312,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "2345.TW",
    "quoteSymbol": "2345.TW",
    "name": "智邦",
    "market": "TW",
    "segment": "system",
    "sub": "Switch ODM",
    "role": "White-box switch and cloud networking ODM",
    "change": -1.62,
    "tags": [
      "switch",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 2430.0,
    "referenceClose": 2470.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "2382.TW",
    "quoteSymbol": "2382.TW",
    "name": "廣達",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and cloud infrastructure ODM",
    "change": 7.28,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 339.0,
    "referenceClose": 316.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "6669.TW",
    "quoteSymbol": "6669.TW",
    "name": "緯穎",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "Cloud datacenter server ODM",
    "change": -1.45,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 5445.0,
    "referenceClose": 5525.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "2317.TW",
    "quoteSymbol": "2317.TW",
    "name": "鴻海",
    "market": "TW",
    "segment": "system",
    "sub": "EMS / server",
    "role": "AI server and system assembly",
    "change": 15.6,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 289.0,
    "referenceClose": 250.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "2308.TW",
    "quoteSymbol": "2308.TW",
    "name": "台達電",
    "market": "TW",
    "segment": "system",
    "sub": "Power / thermal",
    "role": "Power, thermal and datacenter infrastructure",
    "change": 16.71,
    "tags": [
      "power",
      "thermal"
    ],
    "priceStatus": "ok",
    "latestClose": 2445.0,
    "referenceClose": 2095.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "3706.TW",
    "quoteSymbol": "3706.TW",
    "name": "神達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and datacenter system integration",
    "change": 1.14,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 88.80000305175781,
    "referenceClose": 87.80000305175781,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "3231.TW",
    "quoteSymbol": "3231.TW",
    "name": "緯創",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and system integration",
    "change": 9.69,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 158.5,
    "referenceClose": 144.5,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "2356.TW",
    "quoteSymbol": "2356.TW",
    "name": "英業達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and cloud equipment manufacturing",
    "change": 17.98,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 70.19999694824219,
    "referenceClose": 59.5,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "3380.TW",
    "quoteSymbol": "3380.TW",
    "name": "明泰",
    "market": "TW",
    "segment": "system",
    "sub": "Networking",
    "role": "Networking products and broadband equipment",
    "change": 13.03,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 38.599998474121094,
    "referenceClose": 34.150001525878906,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "6285.TW",
    "quoteSymbol": "6285.TW",
    "name": "啟碁",
    "market": "TW",
    "segment": "system",
    "sub": "Network device",
    "role": "Wireless and networking equipment",
    "change": 7.77,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 319.0,
    "referenceClose": 296.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "system",
    "sub": "Optical systems",
    "role": "Optical communication and laser systems",
    "change": -2.81,
    "tags": [
      "system"
    ],
    "priceStatus": "ok",
    "latestClose": 151.9199981689453,
    "referenceClose": 156.30999755859375,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "system",
    "sub": "Optical network",
    "role": "Optical transmission and network equipment",
    "change": -5.91,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 51.88999938964844,
    "referenceClose": 55.150001525878906,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "000063.SZ",
    "quoteSymbol": "000063.SZ",
    "name": "中興通訊",
    "market": "CN",
    "segment": "system",
    "sub": "Telecom equipment",
    "role": "Telecom and datacenter network equipment",
    "change": 3.03,
    "tags": [
      "telecom"
    ],
    "priceStatus": "ok",
    "latestClose": 36.720001220703125,
    "referenceClose": 35.63999938964844,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "6701.T",
    "quoteSymbol": "6701.T",
    "name": "NEC",
    "market": "JP",
    "segment": "system",
    "sub": "Network systems",
    "role": "Telecom, submarine and network systems",
    "change": -0.05,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 4103.0,
    "referenceClose": 4105.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  },
  {
    "ticker": "6702.T",
    "quoteSymbol": "6702.T",
    "name": "Fujitsu",
    "market": "JP",
    "segment": "system",
    "sub": "ICT systems",
    "role": "ICT infrastructure and network systems",
    "change": 1.84,
    "tags": [
      "ICT"
    ],
    "priceStatus": "ok",
    "latestClose": 3368.0,
    "referenceClose": 3307.0,
    "priceDate": "2026-05-29",
    "referenceDate": "2026-05-22"
  }
];

