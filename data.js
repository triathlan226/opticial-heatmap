window.HEATMAP_META = {
  "title": "光通訊 / CPO 供應鏈熱力圖",
  "subtitle": "六大環節、跨市場上市公司、同公司可重複出現在多個供應鏈位置。",
  "lastUpdated": "2026-10-17",
  "dateRange": "2026-10-08 → 2026-10-16",
  "totalTiles": 126,
  "totalCompanies": 97,
  "quoteSymbolsUpdated": 97,
  "quoteSymbolsFailed": 0,
  "priceStatusCounts": {
    "ok": 126
  },
  "topGainer": {
    "ticker": "4977.TW",
    "name": "眾達-KY",
    "change": 6.67
  },
  "topLoser": {
    "ticker": "SMTC",
    "name": "Semtech",
    "change": -27.0
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
    "change": -9.07,
    "tags": [
      "ASIC",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 328.75,
    "referenceClose": 361.5400085449219,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "asic",
    "sub": "GPU / Network ASIC",
    "role": "GPU, NVLink, Spectrum-X ecosystem",
    "change": -6.61,
    "tags": [
      "GPU",
      "networking"
    ],
    "priceStatus": "ok",
    "latestClose": 214.1300048828125,
    "referenceClose": 229.27999877929688,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "asic",
    "sub": "DSP / PAM4",
    "role": "Optical DSP, custom silicon, DCI chips",
    "change": -17.24,
    "tags": [
      "DSP",
      "custom silicon"
    ],
    "priceStatus": "ok",
    "latestClose": 227.8300018310547,
    "referenceClose": 275.2799987792969,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "CRDO",
    "quoteSymbol": "CRDO",
    "name": "Credo",
    "market": "US",
    "segment": "asic",
    "sub": "Retimer / DSP",
    "role": "High-speed connectivity and optical DSP",
    "change": -21.63,
    "tags": [
      "DSP",
      "retimer"
    ],
    "priceStatus": "ok",
    "latestClose": 169.6999969482422,
    "referenceClose": 216.5500030517578,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "ALAB",
    "quoteSymbol": "ALAB",
    "name": "Astera Labs",
    "market": "US",
    "segment": "asic",
    "sub": "PCIe / CXL",
    "role": "AI data-center connectivity silicon",
    "change": -16.48,
    "tags": [
      "retimer",
      "CXL"
    ],
    "priceStatus": "ok",
    "latestClose": 285.82000732421875,
    "referenceClose": 342.2099914550781,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Laser drivers, TIAs, high-speed analog",
    "change": -20.55,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 262.239990234375,
    "referenceClose": 330.05999755859375,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "SMTC",
    "quoteSymbol": "SMTC",
    "name": "Semtech",
    "market": "US",
    "segment": "asic",
    "sub": "Signal IC",
    "role": "Signal integrity and optical analog ICs",
    "change": -27.0,
    "tags": [
      "signal"
    ],
    "priceStatus": "ok",
    "latestClose": 136.72999572753906,
    "referenceClose": 187.3000030517578,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "asic",
    "sub": "Network silicon",
    "role": "Silicon One and Acacia optical stack",
    "change": -9.29,
    "tags": [
      "switch",
      "acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 107.38999938964844,
    "referenceClose": 118.38999938964844,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "asic",
    "sub": "Coherent DSP",
    "role": "WaveLogic coherent DSP and systems",
    "change": -26.02,
    "tags": [
      "coherent",
      "DSP"
    ],
    "priceStatus": "ok",
    "latestClose": 332.7300109863281,
    "referenceClose": 449.7699890136719,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "AMD",
    "quoteSymbol": "AMD",
    "name": "AMD",
    "market": "US",
    "segment": "asic",
    "sub": "AI accelerator",
    "role": "AI accelerators and adaptive compute",
    "change": -13.05,
    "tags": [
      "accelerator"
    ],
    "priceStatus": "ok",
    "latestClose": 528.75,
    "referenceClose": 608.0999755859375,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "asic",
    "sub": "Foundry / I/O",
    "role": "Foundry, Ethernet, historical silicon photonics",
    "change": -14.18,
    "tags": [
      "foundry",
      "ethernet"
    ],
    "priceStatus": "ok",
    "latestClose": 89.8499984741211,
    "referenceClose": 104.69999694824219,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "QCOM",
    "quoteSymbol": "QCOM",
    "name": "Qualcomm",
    "market": "US",
    "segment": "asic",
    "sub": "Connectivity IC",
    "role": "High-speed connectivity and edge AI silicon",
    "change": -1.93,
    "tags": [
      "connectivity"
    ],
    "priceStatus": "ok",
    "latestClose": 172.11000061035156,
    "referenceClose": 175.5,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "3661.TW",
    "quoteSymbol": "3661.TW",
    "name": "世芯-KY",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "Advanced-node custom ASIC design service",
    "change": -15.19,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 3685.0,
    "referenceClose": 4345.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "3443.TW",
    "quoteSymbol": "3443.TW",
    "name": "創意",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "GUC ASIC design and implementation",
    "change": -10.53,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 7480.0,
    "referenceClose": 8360.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "2454.TW",
    "quoteSymbol": "2454.TW",
    "name": "聯發科",
    "market": "TW",
    "segment": "asic",
    "sub": "Connectivity SoC",
    "role": "Networking, SerDes and edge AI chip exposure",
    "change": -9.38,
    "tags": [
      "SoC"
    ],
    "priceStatus": "ok",
    "latestClose": 4250.0,
    "referenceClose": 4690.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "5274.TWO",
    "quoteSymbol": "5274.TWO",
    "name": "信驊",
    "market": "TW",
    "segment": "asic",
    "sub": "BMC",
    "role": "Server management silicon",
    "change": -5.75,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 16480.0,
    "referenceClose": 17485.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "688536.SH",
    "quoteSymbol": "688536.SS",
    "name": "思瑞浦",
    "market": "CN",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Analog and signal-chain ICs",
    "change": -5.56,
    "tags": [
      "analog"
    ],
    "priceStatus": "ok",
    "latestClose": 270.42999267578125,
    "referenceClose": 286.3599853515625,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "asic",
    "sub": "Laser driver link",
    "role": "Optical chip supplier with upstream exposure",
    "change": -14.71,
    "tags": [
      "optical chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1028.5799560546875,
    "referenceClose": 1206.010009765625,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "2330.TW",
    "quoteSymbol": "2330.TW",
    "name": "台積電",
    "market": "TW",
    "segment": "sipic",
    "sub": "Foundry",
    "role": "Advanced-node and packaging platform for CPO ecosystem",
    "change": -5.1,
    "tags": [
      "foundry",
      "CoWoS"
    ],
    "priceStatus": "ok",
    "latestClose": 2420.0,
    "referenceClose": 2550.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "AVGO",
    "quoteSymbol": "AVGO",
    "name": "Broadcom",
    "market": "US",
    "segment": "sipic",
    "sub": "Co-packaged optics",
    "role": "CPO roadmap and switch silicon integration",
    "change": -9.07,
    "tags": [
      "CPO",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 328.75,
    "referenceClose": 361.5400085449219,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical I/O ecosystem",
    "role": "AI cluster architecture drives optical I/O demand",
    "change": -6.61,
    "tags": [
      "AI",
      "optical I/O"
    ],
    "priceStatus": "ok",
    "latestClose": 214.1300048828125,
    "referenceClose": 229.27999877929688,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical platform",
    "role": "DSP plus silicon photonics partnership ecosystem",
    "change": -17.24,
    "tags": [
      "DSP",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 227.8300018310547,
    "referenceClose": 275.2799987792969,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "sipic",
    "sub": "Silicon photonics",
    "role": "Integrated silicon photonics and foundry capabilities",
    "change": -14.18,
    "tags": [
      "SiPh",
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 89.8499984741211,
    "referenceClose": 104.69999694824219,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Lasers, transceivers and optical engine building blocks",
    "change": -25.5,
    "tags": [
      "laser",
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 232.89999389648438,
    "referenceClose": 312.6199951171875,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Datacom lasers and optical components",
    "change": -25.31,
    "tags": [
      "laser",
      "datacom"
    ],
    "priceStatus": "ok",
    "latestClose": 824.1300048828125,
    "referenceClose": 1103.35498046875,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "STM",
    "quoteSymbol": "STM",
    "name": "STMicro",
    "market": "EU",
    "segment": "sipic",
    "sub": "Photonics platform",
    "role": "Photonics and advanced semiconductor platform exposure",
    "change": -12.81,
    "tags": [
      "photonics"
    ],
    "priceStatus": "ok",
    "latestClose": 45.38999938964844,
    "referenceClose": 52.060001373291016,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "GFS",
    "quoteSymbol": "GFS",
    "name": "GlobalFoundries",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Silicon photonics and specialty process platform",
    "change": -3.23,
    "tags": [
      "foundry",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 46.68000030517578,
    "referenceClose": 48.2400016784668,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "TSEM",
    "quoteSymbol": "TSEM",
    "name": "Tower Semiconductor",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Analog, photonics and specialty manufacturing",
    "change": -14.49,
    "tags": [
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 195.5800018310547,
    "referenceClose": 228.7100067138672,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "sipic",
    "sub": "Optical systems",
    "role": "Photonic service engines and coherent optics",
    "change": -11.78,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 9.140000343322754,
    "referenceClose": 10.359999656677246,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "sipic",
    "sub": "Acacia optics",
    "role": "Coherent modules and optical interconnect roadmap",
    "change": -9.29,
    "tags": [
      "Acacia",
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 107.38999938964844,
    "referenceClose": 118.38999938964844,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "sipic",
    "sub": "Coherent optics",
    "role": "Coherent optical engine and network platforms",
    "change": -26.02,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 332.7300109863281,
    "referenceClose": 449.7699890136719,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "POET",
    "quoteSymbol": "POET",
    "name": "POET Technologies",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical interposer",
    "role": "Optical interposer platform for transceivers",
    "change": -22.09,
    "tags": [
      "interposer"
    ],
    "priceStatus": "ok",
    "latestClose": 5.429999828338623,
    "referenceClose": 6.96999979019165,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "LWLG",
    "quoteSymbol": "LWLG",
    "name": "Lightwave Logic",
    "market": "US",
    "segment": "sipic",
    "sub": "EO polymer",
    "role": "Electro-optic polymer material platform",
    "change": -20.12,
    "tags": [
      "material"
    ],
    "priceStatus": "ok",
    "latestClose": 3.9700000286102295,
    "referenceClose": 4.96999979019165,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "4966.TWO",
    "quoteSymbol": "4966.TWO",
    "name": "譜瑞-KY",
    "market": "TW",
    "segment": "sipic",
    "sub": "High-speed interface",
    "role": "High-speed interface ICs and data transmission",
    "change": -3.23,
    "tags": [
      "interface"
    ],
    "priceStatus": "ok",
    "latestClose": 540.0,
    "referenceClose": 558.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "6789.TW",
    "quoteSymbol": "6789.TW",
    "name": "采鈺",
    "market": "TW",
    "segment": "sipic",
    "sub": "Optical process",
    "role": "Optical semiconductor process and sensor platform",
    "change": -8.94,
    "tags": [
      "process"
    ],
    "priceStatus": "ok",
    "latestClose": 438.0,
    "referenceClose": 481.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "688313.SH",
    "quoteSymbol": "688313.SS",
    "name": "仕佳光子",
    "market": "CN",
    "segment": "sipic",
    "sub": "PLC / optical chip",
    "role": "PLC splitter, AWG and optical chip supplier",
    "change": -14.82,
    "tags": [
      "PLC",
      "chip"
    ],
    "priceStatus": "ok",
    "latestClose": 112.41000366210938,
    "referenceClose": 131.97000122070312,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "laser",
    "sub": "Laser / InP",
    "role": "InP lasers, VCSELs, coherent and datacom components",
    "change": -25.5,
    "tags": [
      "InP",
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 232.89999389648438,
    "referenceClose": 312.6199951171875,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "laser",
    "sub": "Datacom laser",
    "role": "EML, DFB and high-speed datacom laser supply",
    "change": -25.31,
    "tags": [
      "EML",
      "DFB"
    ],
    "priceStatus": "ok",
    "latestClose": 824.1300048828125,
    "referenceClose": 1103.35498046875,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "laser",
    "sub": "Laser driver / TIA",
    "role": "Laser drivers, TIAs and analog front-end",
    "change": -20.55,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 262.239990234375,
    "referenceClose": 330.05999755859375,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "IPGP",
    "quoteSymbol": "IPGP",
    "name": "IPG Photonics",
    "market": "US",
    "segment": "laser",
    "sub": "Fiber laser",
    "role": "Laser technology and optical components",
    "change": -9.28,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 71.01000213623047,
    "referenceClose": 78.2699966430664,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "AXTI",
    "quoteSymbol": "AXTI",
    "name": "AXT",
    "market": "US",
    "segment": "laser",
    "sub": "Substrate",
    "role": "Compound semiconductor substrates",
    "change": -24.82,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 51.470001220703125,
    "referenceClose": 68.45999908447266,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "IQE.L",
    "quoteSymbol": "IQE.L",
    "name": "IQE",
    "market": "EU",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "Compound semiconductor epitaxy wafers",
    "change": -20.28,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 39.70000076293945,
    "referenceClose": 49.79999923706055,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Compound semiconductor and optical components",
    "change": -10.15,
    "tags": [
      "InP",
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 2121.0,
    "referenceClose": 2360.5,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "6503.T",
    "quoteSymbol": "6503.T",
    "name": "三菱電機",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Optical devices, lasers and industrial electronics",
    "change": -2.68,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 5005.0,
    "referenceClose": 5143.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "6965.T",
    "quoteSymbol": "6965.T",
    "name": "浜松光子",
    "market": "JP",
    "segment": "laser",
    "sub": "Photonics",
    "role": "Photodetectors, optoelectronics and photonics devices",
    "change": -8.42,
    "tags": [
      "detector"
    ],
    "priceStatus": "ok",
    "latestClose": 2201.5,
    "referenceClose": 2404.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "AMS.SW",
    "quoteSymbol": "AMS.SW",
    "name": "ams OSRAM",
    "market": "EU",
    "segment": "laser",
    "sub": "Emitter",
    "role": "Emitters, sensors and photonics devices",
    "change": -15.5,
    "tags": [
      "emitter"
    ],
    "priceStatus": "ok",
    "latestClose": 17.829999923706055,
    "referenceClose": 21.100000381469727,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "3105.TWO",
    "quoteSymbol": "3105.TWO",
    "name": "穩懋",
    "market": "TW",
    "segment": "laser",
    "sub": "GaAs foundry",
    "role": "GaAs foundry with photonics-adjacent capabilities",
    "change": -13.77,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 501.0,
    "referenceClose": 581.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "3081.TWO",
    "quoteSymbol": "3081.TWO",
    "name": "聯亞",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "III-V epitaxy wafers for optical communications",
    "change": -14.02,
    "tags": [
      "epi",
      "III-V"
    ],
    "priceStatus": "ok",
    "latestClose": 2545.0,
    "referenceClose": 2960.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "2455.TW",
    "quoteSymbol": "2455.TW",
    "name": "全新",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "GaAs/InP epitaxy and compound semiconductor materials",
    "change": -11.65,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 493.0,
    "referenceClose": 558.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "8086.TWO",
    "quoteSymbol": "8086.TWO",
    "name": "宏捷科",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "GaAs foundry and compound semiconductor devices",
    "change": -14.94,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 131.0,
    "referenceClose": 154.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "4991.TWO",
    "quoteSymbol": "4991.TWO",
    "name": "環宇-KY",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "Compound semiconductor and optical device exposure",
    "change": -13.31,
    "tags": [
      "compound"
    ],
    "priceStatus": "ok",
    "latestClose": 443.0,
    "referenceClose": 511.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "laser",
    "sub": "Optical component",
    "role": "Optical communication components and modules",
    "change": -7.96,
    "tags": [
      "optical"
    ],
    "priceStatus": "ok",
    "latestClose": 520.0,
    "referenceClose": 565.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser chip",
    "role": "Optical communication laser chips",
    "change": -14.71,
    "tags": [
      "laser chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1028.5799560546875,
    "referenceClose": 1206.010009765625,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser / module",
    "role": "Laser equipment and optical communication products",
    "change": -11.95,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 75.69999694824219,
    "referenceClose": 85.97000122070312,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "APH",
    "quoteSymbol": "APH",
    "name": "Amphenol",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "High-speed interconnect and optical connector ecosystem",
    "change": -9.04,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 79.3499984741211,
    "referenceClose": 87.23999786376953,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "GLW",
    "quoteSymbol": "GLW",
    "name": "Corning",
    "market": "US",
    "segment": "component",
    "sub": "Fiber / glass",
    "role": "Optical fiber, glass and datacenter cabling",
    "change": -15.75,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 132.0,
    "referenceClose": 156.67999267578125,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "TEL",
    "quoteSymbol": "TEL",
    "name": "TE Connectivity",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "Connectors, cable assemblies and sensors",
    "change": -2.59,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 212.63999938964844,
    "referenceClose": 218.2899932861328,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers, modulators and optical subassemblies",
    "change": -25.5,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 232.89999389648438,
    "referenceClose": 312.6199951171875,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers and optical communication components",
    "change": -25.31,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 824.1300048828125,
    "referenceClose": 1103.35498046875,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "component",
    "sub": "Manufacturing",
    "role": "Precision optical manufacturing and assembly",
    "change": -25.25,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 363.510009765625,
    "referenceClose": 486.2799987792969,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "3711.TW",
    "quoteSymbol": "3711.TW",
    "name": "日月光投控",
    "market": "TW",
    "segment": "component",
    "sub": "Advanced packaging",
    "role": "Semiconductor packaging and system-in-package",
    "change": -9.81,
    "tags": [
      "packaging"
    ],
    "priceStatus": "ok",
    "latestClose": 671.0,
    "referenceClose": 744.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "2449.TW",
    "quoteSymbol": "2449.TW",
    "name": "京元電",
    "market": "TW",
    "segment": "component",
    "sub": "Test",
    "role": "IC testing services for high-speed chips",
    "change": -9.69,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 275.0,
    "referenceClose": 304.5,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "6515.TW",
    "quoteSymbol": "6515.TW",
    "name": "穎崴",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card / socket",
    "role": "High-speed test interface and sockets",
    "change": -8.1,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 5160.0,
    "referenceClose": 5615.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "6223.TWO",
    "quoteSymbol": "6223.TWO",
    "name": "旺矽",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card",
    "role": "Probe cards and testing interface",
    "change": -6.64,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 5205.0,
    "referenceClose": 5575.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "3037.TW",
    "quoteSymbol": "3037.TW",
    "name": "欣興",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and advanced PCB",
    "change": -14.17,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1090.0,
    "referenceClose": 1270.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "3189.TW",
    "quoteSymbol": "3189.TW",
    "name": "景碩",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate supplier",
    "change": -6.98,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1000.0,
    "referenceClose": 1075.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "8046.TW",
    "quoteSymbol": "8046.TW",
    "name": "南電",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and PCB",
    "change": -8.14,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1355.0,
    "referenceClose": 1475.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "2383.TW",
    "quoteSymbol": "2383.TW",
    "name": "台光電",
    "market": "TW",
    "segment": "component",
    "sub": "Copper clad laminate",
    "role": "High-speed CCL for AI servers and switches",
    "change": -13.92,
    "tags": [
      "CCL"
    ],
    "priceStatus": "ok",
    "latestClose": 5165.0,
    "referenceClose": 6000.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "component",
    "sub": "Connector / RF",
    "role": "Connectors and optical communication components",
    "change": -15.69,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 1505.0,
    "referenceClose": 1785.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "3363.TWO",
    "quoteSymbol": "3363.TWO",
    "name": "上詮",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber optic components and passive devices",
    "change": -20.39,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 531.0,
    "referenceClose": 667.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "component",
    "sub": "Optical subassembly",
    "role": "Optical communication subassemblies and packaging",
    "change": -12.45,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 457.0,
    "referenceClose": 522.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "6451.TW",
    "quoteSymbol": "6451.TW",
    "name": "訊芯-KY",
    "market": "TW",
    "segment": "component",
    "sub": "SiP / optical packaging",
    "role": "System-in-package and optical communication assembly",
    "change": -13.44,
    "tags": [
      "SiP"
    ],
    "priceStatus": "ok",
    "latestClose": 364.0,
    "referenceClose": 420.5,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber arrays, splitters and optical passive components",
    "change": -14.51,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 589.0,
    "referenceClose": 689.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical communication component supplier",
    "change": -2.91,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 93.30000305175781,
    "referenceClose": 96.0999984741211,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive components and precision parts",
    "change": -9.46,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 212.8000030517578,
    "referenceClose": 235.0399932861328,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "300548.SZ",
    "quoteSymbol": "300548.SZ",
    "name": "博創科技",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive and active components",
    "change": -8.94,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 173.08999633789062,
    "referenceClose": 190.0800018310547,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "601869.SH",
    "quoteSymbol": "601869.SS",
    "name": "長飛光纖",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber",
    "role": "Optical fiber and cable",
    "change": -14.53,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 331.5,
    "referenceClose": 387.8699951171875,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "600487.SH",
    "quoteSymbol": "600487.SS",
    "name": "亨通光電",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber cable and optical network products",
    "change": -13.73,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 45.68000030517578,
    "referenceClose": 52.95000076293945,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "5801.T",
    "quoteSymbol": "5801.T",
    "name": "古河電工",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Optical fiber, cable and network materials",
    "change": -17.82,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 3366.0,
    "referenceClose": 4096.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "5803.T",
    "quoteSymbol": "5803.T",
    "name": "藤倉",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber, cable and optical interconnect products",
    "change": -16.81,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 4503.0,
    "referenceClose": 5413.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "4062.T",
    "quoteSymbol": "4062.T",
    "name": "Ibiden",
    "market": "JP",
    "segment": "component",
    "sub": "Substrate",
    "role": "Advanced IC substrates",
    "change": -15.21,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 9764.0,
    "referenceClose": 11515.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom and telecom optical transceivers",
    "change": -25.5,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 232.89999389648438,
    "referenceClose": 312.6199951171875,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "module",
    "sub": "Laser / module",
    "role": "Laser engines and optical module supply",
    "change": -25.31,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 824.1300048828125,
    "referenceClose": 1103.35498046875,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "module",
    "sub": "Optical manufacturing",
    "role": "Optical module contract manufacturing",
    "change": -25.25,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 363.510009765625,
    "referenceClose": 486.2799987792969,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "module",
    "sub": "Coherent module",
    "role": "Coherent optical modules and transport platforms",
    "change": -26.02,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 332.7300109863281,
    "referenceClose": 449.7699890136719,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "module",
    "sub": "Acacia module",
    "role": "Acacia coherent optics and pluggable modules",
    "change": -9.29,
    "tags": [
      "Acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 107.38999938964844,
    "referenceClose": 118.38999938964844,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "module",
    "sub": "Optical module",
    "role": "Coherent optics and network system modules",
    "change": -11.78,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 9.140000343322754,
    "referenceClose": 10.359999656677246,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical communication modules and components",
    "change": -7.96,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 520.0,
    "referenceClose": 565.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "4977.TW",
    "quoteSymbol": "4977.TW",
    "name": "眾達-KY",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical transceiver supplier",
    "change": 6.67,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 184.0,
    "referenceClose": 172.5,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver component",
    "role": "Optical communication and connector products",
    "change": -15.69,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1505.0,
    "referenceClose": 1785.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "module",
    "sub": "OSA",
    "role": "Optical subassemblies for transceivers",
    "change": -12.45,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 457.0,
    "referenceClose": 522.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "module",
    "sub": "Passive optical",
    "role": "Fiber components used in modules",
    "change": -14.51,
    "tags": [
      "passive"
    ],
    "priceStatus": "ok",
    "latestClose": 589.0,
    "referenceClose": 689.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module exposure",
    "change": -2.91,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 93.30000305175781,
    "referenceClose": 96.0999984741211,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "4908.TWO",
    "quoteSymbol": "4908.TWO",
    "name": "前鼎",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module and equipment",
    "change": -12.32,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 213.5,
    "referenceClose": 243.5,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "300308.SZ",
    "quoteSymbol": "300308.SZ",
    "name": "中際旭創",
    "market": "CN",
    "segment": "module",
    "sub": "800G / 1.6T",
    "role": "High-speed optical transceiver leader",
    "change": -13.58,
    "tags": [
      "800G",
      "1.6T"
    ],
    "priceStatus": "ok",
    "latestClose": 670.0,
    "referenceClose": 775.2899780273438,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "300502.SZ",
    "quoteSymbol": "300502.SZ",
    "name": "新易盛",
    "market": "CN",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom optical transceivers",
    "change": -17.1,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 306.9100036621094,
    "referenceClose": 370.20001220703125,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "002281.SZ",
    "quoteSymbol": "002281.SZ",
    "name": "光迅科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical devices and modules",
    "change": -10.06,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 133.75,
    "referenceClose": 148.7100067138672,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "603083.SH",
    "quoteSymbol": "603083.SS",
    "name": "劍橋科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical modules and broadband equipment",
    "change": -12.69,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 168.50999450683594,
    "referenceClose": 193.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical engine parts",
    "role": "High-speed module precision components",
    "change": -9.46,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 212.8000030517578,
    "referenceClose": 235.0399932861328,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "688205.SH",
    "quoteSymbol": "688205.SS",
    "name": "德科立",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical transceiver modules",
    "change": -17.76,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 151.0,
    "referenceClose": 183.61000061035156,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication and laser products",
    "change": -11.95,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 75.69999694824219,
    "referenceClose": 85.97000122070312,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical network",
    "role": "Optical network systems and modules",
    "change": -12.42,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 29.469999313354492,
    "referenceClose": 33.650001525878906,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "module",
    "sub": "Optical device",
    "role": "Optical components and communication devices",
    "change": -10.15,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 2121.0,
    "referenceClose": 2360.5,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "ANET",
    "quoteSymbol": "ANET",
    "name": "Arista Networks",
    "market": "US",
    "segment": "system",
    "sub": "AI switch",
    "role": "AI datacenter Ethernet switches",
    "change": -18.34,
    "tags": [
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 176.97999572753906,
    "referenceClose": 216.74000549316406,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "system",
    "sub": "Switch / router",
    "role": "Enterprise and cloud networking systems",
    "change": -9.29,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 107.38999938964844,
    "referenceClose": 118.38999938964844,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "HPE",
    "quoteSymbol": "HPE",
    "name": "HPE",
    "market": "US",
    "segment": "system",
    "sub": "Server / networking",
    "role": "AI servers, networking and cloud infrastructure",
    "change": -24.95,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 55.130001068115234,
    "referenceClose": 73.45999908447266,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "DELL",
    "quoteSymbol": "DELL",
    "name": "Dell",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and enterprise infrastructure",
    "change": -22.92,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 451.7099914550781,
    "referenceClose": 586.0599975585938,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "SMCI",
    "quoteSymbol": "SMCI",
    "name": "Supermicro",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server platforms and rack-scale systems",
    "change": -24.44,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 31.6299991607666,
    "referenceClose": 41.86000061035156,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "CLS",
    "quoteSymbol": "CLS",
    "name": "Celestica",
    "market": "US",
    "segment": "system",
    "sub": "ODM / EMS",
    "role": "Cloud hardware and networking manufacturing",
    "change": -16.11,
    "tags": [
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 303.80999755859375,
    "referenceClose": 362.1600036621094,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "JBL",
    "quoteSymbol": "JBL",
    "name": "Jabil",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing for networking systems",
    "change": -9.15,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 278.25,
    "referenceClose": 306.2799987792969,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "FLEX",
    "quoteSymbol": "FLEX",
    "name": "Flex",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing and cloud hardware",
    "change": -24.51,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 90.45999908447266,
    "referenceClose": 119.83000183105469,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "2345.TW",
    "quoteSymbol": "2345.TW",
    "name": "智邦",
    "market": "TW",
    "segment": "system",
    "sub": "Switch ODM",
    "role": "White-box switch and cloud networking ODM",
    "change": -4.35,
    "tags": [
      "switch",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 1980.0,
    "referenceClose": 2070.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "2382.TW",
    "quoteSymbol": "2382.TW",
    "name": "廣達",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and cloud infrastructure ODM",
    "change": -1.08,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 322.0,
    "referenceClose": 325.5,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "6669.TW",
    "quoteSymbol": "6669.TW",
    "name": "緯穎",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "Cloud datacenter server ODM",
    "change": -17.63,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 1845.0,
    "referenceClose": 2240.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "2317.TW",
    "quoteSymbol": "2317.TW",
    "name": "鴻海",
    "market": "TW",
    "segment": "system",
    "sub": "EMS / server",
    "role": "AI server and system assembly",
    "change": -2.01,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 244.0,
    "referenceClose": 249.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "2308.TW",
    "quoteSymbol": "2308.TW",
    "name": "台達電",
    "market": "TW",
    "segment": "system",
    "sub": "Power / thermal",
    "role": "Power, thermal and datacenter infrastructure",
    "change": -16.79,
    "tags": [
      "power",
      "thermal"
    ],
    "priceStatus": "ok",
    "latestClose": 1635.0,
    "referenceClose": 1965.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "3706.TW",
    "quoteSymbol": "3706.TW",
    "name": "神達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and datacenter system integration",
    "change": 0.99,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 81.4000015258789,
    "referenceClose": 80.5999984741211,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "3231.TW",
    "quoteSymbol": "3231.TW",
    "name": "緯創",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and system integration",
    "change": -3.18,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 182.5,
    "referenceClose": 188.5,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "2356.TW",
    "quoteSymbol": "2356.TW",
    "name": "英業達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and cloud equipment manufacturing",
    "change": 2.61,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 59.0,
    "referenceClose": 57.5,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "3380.TW",
    "quoteSymbol": "3380.TW",
    "name": "明泰",
    "market": "TW",
    "segment": "system",
    "sub": "Networking",
    "role": "Networking products and broadband equipment",
    "change": 6.11,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 32.150001525878906,
    "referenceClose": 30.299999237060547,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "6285.TW",
    "quoteSymbol": "6285.TW",
    "name": "啟碁",
    "market": "TW",
    "segment": "system",
    "sub": "Network device",
    "role": "Wireless and networking equipment",
    "change": -0.58,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 255.0,
    "referenceClose": 256.5,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-08"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "system",
    "sub": "Optical systems",
    "role": "Optical communication and laser systems",
    "change": -11.95,
    "tags": [
      "system"
    ],
    "priceStatus": "ok",
    "latestClose": 75.69999694824219,
    "referenceClose": 85.97000122070312,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "system",
    "sub": "Optical network",
    "role": "Optical transmission and network equipment",
    "change": -12.42,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 29.469999313354492,
    "referenceClose": 33.650001525878906,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "000063.SZ",
    "quoteSymbol": "000063.SZ",
    "name": "中興通訊",
    "market": "CN",
    "segment": "system",
    "sub": "Telecom equipment",
    "role": "Telecom and datacenter network equipment",
    "change": -6.65,
    "tags": [
      "telecom"
    ],
    "priceStatus": "ok",
    "latestClose": 27.100000381469727,
    "referenceClose": 29.030000686645508,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "6701.T",
    "quoteSymbol": "6701.T",
    "name": "NEC",
    "market": "JP",
    "segment": "system",
    "sub": "Network systems",
    "role": "Telecom, submarine and network systems",
    "change": 3.0,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 5390.0,
    "referenceClose": 5233.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  },
  {
    "ticker": "6702.T",
    "quoteSymbol": "6702.T",
    "name": "Fujitsu",
    "market": "JP",
    "segment": "system",
    "sub": "ICT systems",
    "role": "ICT infrastructure and network systems",
    "change": 4.07,
    "tags": [
      "ICT"
    ],
    "priceStatus": "ok",
    "latestClose": 4423.0,
    "referenceClose": 4250.0,
    "priceDate": "2026-10-16",
    "referenceDate": "2026-10-09"
  }
];

