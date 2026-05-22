window.HEATMAP_META = {
  "title": "光通訊 / CPO 供應鏈熱力圖",
  "subtitle": "六大環節、跨市場上市公司、同公司可重複出現在多個供應鏈位置。",
  "lastUpdated": "2026-05-22",
  "dateRange": "2026-05-14 → 2026-05-22",
  "totalTiles": 126,
  "totalCompanies": 97,
  "quoteSymbolsUpdated": 97,
  "quoteSymbolsFailed": 0,
  "priceStatusCounts": {
    "ok": 126
  },
  "topGainer": {
    "ticker": "ALAB",
    "name": "Astera Labs",
    "change": 30.27
  },
  "topLoser": {
    "ticker": "POET",
    "name": "POET Technologies",
    "change": -27.95
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
    "change": -5.73,
    "tags": [
      "ASIC",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 414.57000732421875,
    "referenceClose": 439.7900085449219,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "asic",
    "sub": "GPU / Network ASIC",
    "role": "GPU, NVLink, Spectrum-X ecosystem",
    "change": -6.88,
    "tags": [
      "GPU",
      "networking"
    ],
    "priceStatus": "ok",
    "latestClose": 219.50999450683594,
    "referenceClose": 235.74000549316406,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "asic",
    "sub": "DSP / PAM4",
    "role": "Optical DSP, custom silicon, DCI chips",
    "change": 4.44,
    "tags": [
      "DSP",
      "custom silicon"
    ],
    "priceStatus": "ok",
    "latestClose": 190.69000244140625,
    "referenceClose": 182.5800018310547,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "CRDO",
    "quoteSymbol": "CRDO",
    "name": "Credo",
    "market": "US",
    "segment": "asic",
    "sub": "Retimer / DSP",
    "role": "High-speed connectivity and optical DSP",
    "change": 4.8,
    "tags": [
      "DSP",
      "retimer"
    ],
    "priceStatus": "ok",
    "latestClose": 193.38999938964844,
    "referenceClose": 184.5399932861328,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "ALAB",
    "quoteSymbol": "ALAB",
    "name": "Astera Labs",
    "market": "US",
    "segment": "asic",
    "sub": "PCIe / CXL",
    "role": "AI data-center connectivity silicon",
    "change": 30.27,
    "tags": [
      "retimer",
      "CXL"
    ],
    "priceStatus": "ok",
    "latestClose": 297.8399963378906,
    "referenceClose": 228.63999938964844,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Laser drivers, TIAs, high-speed analog",
    "change": -0.81,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 380.45001220703125,
    "referenceClose": 383.55999755859375,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "SMTC",
    "quoteSymbol": "SMTC",
    "name": "Semtech",
    "market": "US",
    "segment": "asic",
    "sub": "Signal IC",
    "role": "Signal integrity and optical analog ICs",
    "change": 3.8,
    "tags": [
      "signal"
    ],
    "priceStatus": "ok",
    "latestClose": 146.52999877929688,
    "referenceClose": 141.16000366210938,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "asic",
    "sub": "Network silicon",
    "role": "Silicon One and Acacia optical stack",
    "change": 2.31,
    "tags": [
      "switch",
      "acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 118.19999694824219,
    "referenceClose": 115.52999877929688,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "asic",
    "sub": "Coherent DSP",
    "role": "WaveLogic coherent DSP and systems",
    "change": -0.73,
    "tags": [
      "coherent",
      "DSP"
    ],
    "priceStatus": "ok",
    "latestClose": 587.22998046875,
    "referenceClose": 591.5700073242188,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "AMD",
    "quoteSymbol": "AMD",
    "name": "AMD",
    "market": "US",
    "segment": "asic",
    "sub": "AI accelerator",
    "role": "AI accelerators and adaptive compute",
    "change": -0.02,
    "tags": [
      "accelerator"
    ],
    "priceStatus": "ok",
    "latestClose": 449.5899963378906,
    "referenceClose": 449.70001220703125,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "asic",
    "sub": "Foundry / I/O",
    "role": "Foundry, Ethernet, historical silicon photonics",
    "change": 2.22,
    "tags": [
      "foundry",
      "ethernet"
    ],
    "priceStatus": "ok",
    "latestClose": 118.5,
    "referenceClose": 115.93000030517578,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "QCOM",
    "quoteSymbol": "QCOM",
    "name": "Qualcomm",
    "market": "US",
    "segment": "asic",
    "sub": "Connectivity IC",
    "role": "High-speed connectivity and edge AI silicon",
    "change": 6.66,
    "tags": [
      "connectivity"
    ],
    "priceStatus": "ok",
    "latestClose": 213.41000366210938,
    "referenceClose": 200.0800018310547,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "3661.TW",
    "quoteSymbol": "3661.TW",
    "name": "世芯-KY",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "Advanced-node custom ASIC design service",
    "change": 6.3,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 4895.0,
    "referenceClose": 4605.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "3443.TW",
    "quoteSymbol": "3443.TW",
    "name": "創意",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "GUC ASIC design and implementation",
    "change": 6.09,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 5140.0,
    "referenceClose": 4845.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "2454.TW",
    "quoteSymbol": "2454.TW",
    "name": "聯發科",
    "market": "TW",
    "segment": "asic",
    "sub": "Connectivity SoC",
    "role": "Networking, SerDes and edge AI chip exposure",
    "change": 18.4,
    "tags": [
      "SoC"
    ],
    "priceStatus": "ok",
    "latestClose": 3860.0,
    "referenceClose": 3260.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "5274.TWO",
    "quoteSymbol": "5274.TWO",
    "name": "信驊",
    "market": "TW",
    "segment": "asic",
    "sub": "BMC",
    "role": "Server management silicon",
    "change": 3.4,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 17780.0,
    "referenceClose": 17195.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "688536.SH",
    "quoteSymbol": "688536.SS",
    "name": "思瑞浦",
    "market": "CN",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Analog and signal-chain ICs",
    "change": 0.87,
    "tags": [
      "analog"
    ],
    "priceStatus": "ok",
    "latestClose": 298.989990234375,
    "referenceClose": 296.3999938964844,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "asic",
    "sub": "Laser driver link",
    "role": "Optical chip supplier with upstream exposure",
    "change": -0.82,
    "tags": [
      "optical chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1066.4000244140625,
    "referenceClose": 1075.17236328125,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "2330.TW",
    "quoteSymbol": "2330.TW",
    "name": "台積電",
    "market": "TW",
    "segment": "sipic",
    "sub": "Foundry",
    "role": "Advanced-node and packaging platform for CPO ecosystem",
    "change": -0.44,
    "tags": [
      "foundry",
      "CoWoS"
    ],
    "priceStatus": "ok",
    "latestClose": 2255.0,
    "referenceClose": 2265.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "AVGO",
    "quoteSymbol": "AVGO",
    "name": "Broadcom",
    "market": "US",
    "segment": "sipic",
    "sub": "Co-packaged optics",
    "role": "CPO roadmap and switch silicon integration",
    "change": -5.73,
    "tags": [
      "CPO",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 414.57000732421875,
    "referenceClose": 439.7900085449219,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical I/O ecosystem",
    "role": "AI cluster architecture drives optical I/O demand",
    "change": -6.88,
    "tags": [
      "AI",
      "optical I/O"
    ],
    "priceStatus": "ok",
    "latestClose": 219.50999450683594,
    "referenceClose": 235.74000549316406,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical platform",
    "role": "DSP plus silicon photonics partnership ecosystem",
    "change": 4.44,
    "tags": [
      "DSP",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 190.69000244140625,
    "referenceClose": 182.5800018310547,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "sipic",
    "sub": "Silicon photonics",
    "role": "Integrated silicon photonics and foundry capabilities",
    "change": 2.22,
    "tags": [
      "SiPh",
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 118.5,
    "referenceClose": 115.93000030517578,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Lasers, transceivers and optical engine building blocks",
    "change": -6.65,
    "tags": [
      "laser",
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 378.0,
    "referenceClose": 404.94000244140625,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Datacom lasers and optical components",
    "change": -3.72,
    "tags": [
      "laser",
      "datacom"
    ],
    "priceStatus": "ok",
    "latestClose": 964.5,
    "referenceClose": 1001.8099975585938,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "STM",
    "quoteSymbol": "STM",
    "name": "STMicro",
    "market": "EU",
    "segment": "sipic",
    "sub": "Photonics platform",
    "role": "Photonics and advanced semiconductor platform exposure",
    "change": 1.99,
    "tags": [
      "photonics"
    ],
    "priceStatus": "ok",
    "latestClose": 65.66000366210938,
    "referenceClose": 64.37999725341797,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "GFS",
    "quoteSymbol": "GFS",
    "name": "GlobalFoundries",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Silicon photonics and specialty process platform",
    "change": 10.17,
    "tags": [
      "foundry",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 81.3499984741211,
    "referenceClose": 73.83999633789062,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "TSEM",
    "quoteSymbol": "TSEM",
    "name": "Tower Semiconductor",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Analog, photonics and specialty manufacturing",
    "change": -0.6,
    "tags": [
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 279.010009765625,
    "referenceClose": 280.69000244140625,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "sipic",
    "sub": "Optical systems",
    "role": "Photonic service engines and coherent optics",
    "change": -1.94,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 14.180000305175781,
    "referenceClose": 14.460000038146973,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "sipic",
    "sub": "Acacia optics",
    "role": "Coherent modules and optical interconnect roadmap",
    "change": 2.31,
    "tags": [
      "Acacia",
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 118.19999694824219,
    "referenceClose": 115.52999877929688,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "sipic",
    "sub": "Coherent optics",
    "role": "Coherent optical engine and network platforms",
    "change": -0.73,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 587.22998046875,
    "referenceClose": 591.5700073242188,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "POET",
    "quoteSymbol": "POET",
    "name": "POET Technologies",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical interposer",
    "role": "Optical interposer platform for transceivers",
    "change": -27.95,
    "tags": [
      "interposer"
    ],
    "priceStatus": "ok",
    "latestClose": 14.819999694824219,
    "referenceClose": 20.56999969482422,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "LWLG",
    "quoteSymbol": "LWLG",
    "name": "Lightwave Logic",
    "market": "US",
    "segment": "sipic",
    "sub": "EO polymer",
    "role": "Electro-optic polymer material platform",
    "change": -11.79,
    "tags": [
      "material"
    ],
    "priceStatus": "ok",
    "latestClose": 13.170000076293945,
    "referenceClose": 14.930000305175781,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "4966.TWO",
    "quoteSymbol": "4966.TWO",
    "name": "譜瑞-KY",
    "market": "TW",
    "segment": "sipic",
    "sub": "High-speed interface",
    "role": "High-speed interface ICs and data transmission",
    "change": -0.62,
    "tags": [
      "interface"
    ],
    "priceStatus": "ok",
    "latestClose": 795.0,
    "referenceClose": 800.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "6789.TW",
    "quoteSymbol": "6789.TW",
    "name": "采鈺",
    "market": "TW",
    "segment": "sipic",
    "sub": "Optical process",
    "role": "Optical semiconductor process and sensor platform",
    "change": -5.28,
    "tags": [
      "process"
    ],
    "priceStatus": "ok",
    "latestClose": 556.0,
    "referenceClose": 587.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "688313.SH",
    "quoteSymbol": "688313.SS",
    "name": "仕佳光子",
    "market": "CN",
    "segment": "sipic",
    "sub": "PLC / optical chip",
    "role": "PLC splitter, AWG and optical chip supplier",
    "change": -0.5,
    "tags": [
      "PLC",
      "chip"
    ],
    "priceStatus": "ok",
    "latestClose": 174.72000122070312,
    "referenceClose": 175.60000610351562,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "laser",
    "sub": "Laser / InP",
    "role": "InP lasers, VCSELs, coherent and datacom components",
    "change": -6.65,
    "tags": [
      "InP",
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 378.0,
    "referenceClose": 404.94000244140625,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "laser",
    "sub": "Datacom laser",
    "role": "EML, DFB and high-speed datacom laser supply",
    "change": -3.72,
    "tags": [
      "EML",
      "DFB"
    ],
    "priceStatus": "ok",
    "latestClose": 964.5,
    "referenceClose": 1001.8099975585938,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "laser",
    "sub": "Laser driver / TIA",
    "role": "Laser drivers, TIAs and analog front-end",
    "change": -0.81,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 380.45001220703125,
    "referenceClose": 383.55999755859375,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "IPGP",
    "quoteSymbol": "IPGP",
    "name": "IPG Photonics",
    "market": "US",
    "segment": "laser",
    "sub": "Fiber laser",
    "role": "Laser technology and optical components",
    "change": 14.67,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 120.5199966430664,
    "referenceClose": 105.0999984741211,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "AXTI",
    "quoteSymbol": "AXTI",
    "name": "AXT",
    "market": "US",
    "segment": "laser",
    "sub": "Substrate",
    "role": "Compound semiconductor substrates",
    "change": 5.25,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 121.0199966430664,
    "referenceClose": 114.9800033569336,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "IQE.L",
    "quoteSymbol": "IQE.L",
    "name": "IQE",
    "market": "EU",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "Compound semiconductor epitaxy wafers",
    "change": -5.65,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 43.400001525878906,
    "referenceClose": 46.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Compound semiconductor and optical components",
    "change": 7.65,
    "tags": [
      "InP",
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 11820.0,
    "referenceClose": 10980.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "6503.T",
    "quoteSymbol": "6503.T",
    "name": "三菱電機",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Optical devices, lasers and industrial electronics",
    "change": -1.79,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 6301.0,
    "referenceClose": 6416.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "6965.T",
    "quoteSymbol": "6965.T",
    "name": "浜松光子",
    "market": "JP",
    "segment": "laser",
    "sub": "Photonics",
    "role": "Photodetectors, optoelectronics and photonics devices",
    "change": 9.54,
    "tags": [
      "detector"
    ],
    "priceStatus": "ok",
    "latestClose": 2910.5,
    "referenceClose": 2657.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "AMS.SW",
    "quoteSymbol": "AMS.SW",
    "name": "ams OSRAM",
    "market": "EU",
    "segment": "laser",
    "sub": "Emitter",
    "role": "Emitters, sensors and photonics devices",
    "change": 19.03,
    "tags": [
      "emitter"
    ],
    "priceStatus": "ok",
    "latestClose": 21.700000762939453,
    "referenceClose": 18.229999542236328,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "3105.TWO",
    "quoteSymbol": "3105.TWO",
    "name": "穩懋",
    "market": "TW",
    "segment": "laser",
    "sub": "GaAs foundry",
    "role": "GaAs foundry with photonics-adjacent capabilities",
    "change": 15.81,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 531.0,
    "referenceClose": 458.5,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "3081.TWO",
    "quoteSymbol": "3081.TWO",
    "name": "聯亞",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "III-V epitaxy wafers for optical communications",
    "change": 2.07,
    "tags": [
      "epi",
      "III-V"
    ],
    "priceStatus": "ok",
    "latestClose": 2710.0,
    "referenceClose": 2655.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "2455.TW",
    "quoteSymbol": "2455.TW",
    "name": "全新",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "GaAs/InP epitaxy and compound semiconductor materials",
    "change": 18.55,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 425.0,
    "referenceClose": 358.5,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "8086.TWO",
    "quoteSymbol": "8086.TWO",
    "name": "宏捷科",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "GaAs foundry and compound semiconductor devices",
    "change": 6.33,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 159.5,
    "referenceClose": 150.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "4991.TWO",
    "quoteSymbol": "4991.TWO",
    "name": "環宇-KY",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "Compound semiconductor and optical device exposure",
    "change": 26.79,
    "tags": [
      "compound"
    ],
    "priceStatus": "ok",
    "latestClose": 814.0,
    "referenceClose": 642.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "laser",
    "sub": "Optical component",
    "role": "Optical communication components and modules",
    "change": 18.64,
    "tags": [
      "optical"
    ],
    "priceStatus": "ok",
    "latestClose": 630.0,
    "referenceClose": 531.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser chip",
    "role": "Optical communication laser chips",
    "change": -0.82,
    "tags": [
      "laser chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1066.4000244140625,
    "referenceClose": 1075.17236328125,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser / module",
    "role": "Laser equipment and optical communication products",
    "change": 16.67,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 156.30999755859375,
    "referenceClose": 133.97999572753906,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "APH",
    "quoteSymbol": "APH",
    "name": "Amphenol",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "High-speed interconnect and optical connector ecosystem",
    "change": -3.35,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 124.86000061035156,
    "referenceClose": 129.19000244140625,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "GLW",
    "quoteSymbol": "GLW",
    "name": "Corning",
    "market": "US",
    "segment": "component",
    "sub": "Fiber / glass",
    "role": "Optical fiber, glass and datacenter cabling",
    "change": -7.87,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 191.88999938964844,
    "referenceClose": 208.27999877929688,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "TEL",
    "quoteSymbol": "TEL",
    "name": "TE Connectivity",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "Connectors, cable assemblies and sensors",
    "change": -1.99,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 202.57000732421875,
    "referenceClose": 206.69000244140625,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers, modulators and optical subassemblies",
    "change": -6.65,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 378.0,
    "referenceClose": 404.94000244140625,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers and optical communication components",
    "change": -3.72,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 964.5,
    "referenceClose": 1001.8099975585938,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "component",
    "sub": "Manufacturing",
    "role": "Precision optical manufacturing and assembly",
    "change": -5.79,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 703.27001953125,
    "referenceClose": 746.469970703125,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "3711.TW",
    "quoteSymbol": "3711.TW",
    "name": "日月光投控",
    "market": "TW",
    "segment": "component",
    "sub": "Advanced packaging",
    "role": "Semiconductor packaging and system-in-package",
    "change": 2.56,
    "tags": [
      "packaging"
    ],
    "priceStatus": "ok",
    "latestClose": 561.0,
    "referenceClose": 547.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "2449.TW",
    "quoteSymbol": "2449.TW",
    "name": "京元電",
    "market": "TW",
    "segment": "component",
    "sub": "Test",
    "role": "IC testing services for high-speed chips",
    "change": -1.17,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 296.0,
    "referenceClose": 299.5,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "6515.TW",
    "quoteSymbol": "6515.TW",
    "name": "穎崴",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card / socket",
    "role": "High-speed test interface and sockets",
    "change": -11.04,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 8700.0,
    "referenceClose": 9780.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "6223.TWO",
    "quoteSymbol": "6223.TWO",
    "name": "旺矽",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card",
    "role": "Probe cards and testing interface",
    "change": 2.37,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 6035.0,
    "referenceClose": 5895.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "3037.TW",
    "quoteSymbol": "3037.TW",
    "name": "欣興",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and advanced PCB",
    "change": 18.15,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 970.0,
    "referenceClose": 821.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "3189.TW",
    "quoteSymbol": "3189.TW",
    "name": "景碩",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate supplier",
    "change": 25.31,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 609.0,
    "referenceClose": 486.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "8046.TW",
    "quoteSymbol": "8046.TW",
    "name": "南電",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and PCB",
    "change": 18.83,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 934.0,
    "referenceClose": 786.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "2383.TW",
    "quoteSymbol": "2383.TW",
    "name": "台光電",
    "market": "TW",
    "segment": "component",
    "sub": "Copper clad laminate",
    "role": "High-speed CCL for AI servers and switches",
    "change": 8.45,
    "tags": [
      "CCL"
    ],
    "priceStatus": "ok",
    "latestClose": 5005.0,
    "referenceClose": 4615.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "component",
    "sub": "Connector / RF",
    "role": "Connectors and optical communication components",
    "change": 7.76,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 1875.0,
    "referenceClose": 1740.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "3363.TWO",
    "quoteSymbol": "3363.TWO",
    "name": "上詮",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber optic components and passive devices",
    "change": 1.31,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 852.0,
    "referenceClose": 841.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "component",
    "sub": "Optical subassembly",
    "role": "Optical communication subassemblies and packaging",
    "change": 16.18,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 459.5,
    "referenceClose": 395.5,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "6451.TW",
    "quoteSymbol": "6451.TW",
    "name": "訊芯-KY",
    "market": "TW",
    "segment": "component",
    "sub": "SiP / optical packaging",
    "role": "System-in-package and optical communication assembly",
    "change": -9.19,
    "tags": [
      "SiP"
    ],
    "priceStatus": "ok",
    "latestClose": 524.0,
    "referenceClose": 577.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber arrays, splitters and optical passive components",
    "change": 20.53,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 1145.0,
    "referenceClose": 950.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical communication component supplier",
    "change": 2.29,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 111.5,
    "referenceClose": 109.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive components and precision parts",
    "change": -6.87,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 372.5,
    "referenceClose": 399.989990234375,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "300548.SZ",
    "quoteSymbol": "300548.SZ",
    "name": "博創科技",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive and active components",
    "change": -4.42,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 240.3000030517578,
    "referenceClose": 251.39999389648438,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "601869.SH",
    "quoteSymbol": "601869.SS",
    "name": "長飛光纖",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber",
    "role": "Optical fiber and cable",
    "change": 3.79,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 388.6600036621094,
    "referenceClose": 374.45001220703125,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "600487.SH",
    "quoteSymbol": "600487.SS",
    "name": "亨通光電",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber cable and optical network products",
    "change": 4.66,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 73.05000305175781,
    "referenceClose": 69.80000305175781,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "5801.T",
    "quoteSymbol": "5801.T",
    "name": "古河電工",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Optical fiber, cable and network materials",
    "change": -1.52,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 53650.0,
    "referenceClose": 54480.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "5803.T",
    "quoteSymbol": "5803.T",
    "name": "藤倉",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber, cable and optical interconnect products",
    "change": -16.65,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 4850.0,
    "referenceClose": 5819.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "4062.T",
    "quoteSymbol": "4062.T",
    "name": "Ibiden",
    "market": "JP",
    "segment": "component",
    "sub": "Substrate",
    "role": "Advanced IC substrates",
    "change": 22.92,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 19250.0,
    "referenceClose": 15660.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom and telecom optical transceivers",
    "change": -6.65,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 378.0,
    "referenceClose": 404.94000244140625,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "module",
    "sub": "Laser / module",
    "role": "Laser engines and optical module supply",
    "change": -3.72,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 964.5,
    "referenceClose": 1001.8099975585938,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "module",
    "sub": "Optical manufacturing",
    "role": "Optical module contract manufacturing",
    "change": -5.79,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 703.27001953125,
    "referenceClose": 746.469970703125,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "module",
    "sub": "Coherent module",
    "role": "Coherent optical modules and transport platforms",
    "change": -0.73,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 587.22998046875,
    "referenceClose": 591.5700073242188,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "module",
    "sub": "Acacia module",
    "role": "Acacia coherent optics and pluggable modules",
    "change": 2.31,
    "tags": [
      "Acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 118.19999694824219,
    "referenceClose": 115.52999877929688,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "module",
    "sub": "Optical module",
    "role": "Coherent optics and network system modules",
    "change": -1.94,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 14.180000305175781,
    "referenceClose": 14.460000038146973,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical communication modules and components",
    "change": 18.64,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 630.0,
    "referenceClose": 531.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "4977.TW",
    "quoteSymbol": "4977.TW",
    "name": "眾達-KY",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical transceiver supplier",
    "change": -3.09,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 219.5,
    "referenceClose": 226.5,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver component",
    "role": "Optical communication and connector products",
    "change": 7.76,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1875.0,
    "referenceClose": 1740.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "module",
    "sub": "OSA",
    "role": "Optical subassemblies for transceivers",
    "change": 16.18,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 459.5,
    "referenceClose": 395.5,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "module",
    "sub": "Passive optical",
    "role": "Fiber components used in modules",
    "change": 20.53,
    "tags": [
      "passive"
    ],
    "priceStatus": "ok",
    "latestClose": 1145.0,
    "referenceClose": 950.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module exposure",
    "change": 2.29,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 111.5,
    "referenceClose": 109.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "4908.TWO",
    "quoteSymbol": "4908.TWO",
    "name": "前鼎",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module and equipment",
    "change": 10.1,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 267.0,
    "referenceClose": 242.5,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "300308.SZ",
    "quoteSymbol": "300308.SZ",
    "name": "中際旭創",
    "market": "CN",
    "segment": "module",
    "sub": "800G / 1.6T",
    "role": "High-speed optical transceiver leader",
    "change": -1.13,
    "tags": [
      "800G",
      "1.6T"
    ],
    "priceStatus": "ok",
    "latestClose": 1037.97998046875,
    "referenceClose": 1049.8699951171875,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "300502.SZ",
    "quoteSymbol": "300502.SZ",
    "name": "新易盛",
    "market": "CN",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom optical transceivers",
    "change": -0.54,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 606.77001953125,
    "referenceClose": 610.0499877929688,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "002281.SZ",
    "quoteSymbol": "002281.SZ",
    "name": "光迅科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical devices and modules",
    "change": 9.86,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 215.8699951171875,
    "referenceClose": 196.49000549316406,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "603083.SH",
    "quoteSymbol": "603083.SS",
    "name": "劍橋科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical modules and broadband equipment",
    "change": 1.0,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 190.0,
    "referenceClose": 188.1199951171875,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical engine parts",
    "role": "High-speed module precision components",
    "change": -6.87,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 372.5,
    "referenceClose": 399.989990234375,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "688205.SH",
    "quoteSymbol": "688205.SS",
    "name": "德科立",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical transceiver modules",
    "change": -3.46,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 256.79998779296875,
    "referenceClose": 266.010009765625,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication and laser products",
    "change": 16.67,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 156.30999755859375,
    "referenceClose": 133.97999572753906,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical network",
    "role": "Optical network systems and modules",
    "change": 1.58,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 55.150001525878906,
    "referenceClose": 54.290000915527344,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "module",
    "sub": "Optical device",
    "role": "Optical components and communication devices",
    "change": 7.65,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 11820.0,
    "referenceClose": 10980.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "ANET",
    "quoteSymbol": "ANET",
    "name": "Arista Networks",
    "market": "US",
    "segment": "system",
    "sub": "AI switch",
    "role": "AI datacenter Ethernet switches",
    "change": 0.53,
    "tags": [
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 148.58999633789062,
    "referenceClose": 147.80999755859375,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "system",
    "sub": "Switch / router",
    "role": "Enterprise and cloud networking systems",
    "change": 2.31,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 118.19999694824219,
    "referenceClose": 115.52999877929688,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "HPE",
    "quoteSymbol": "HPE",
    "name": "HPE",
    "market": "US",
    "segment": "system",
    "sub": "Server / networking",
    "role": "AI servers, networking and cloud infrastructure",
    "change": -0.47,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 33.970001220703125,
    "referenceClose": 34.130001068115234,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "DELL",
    "quoteSymbol": "DELL",
    "name": "Dell",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and enterprise infrastructure",
    "change": 1.98,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 252.8000030517578,
    "referenceClose": 247.88999938964844,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "SMCI",
    "quoteSymbol": "SMCI",
    "name": "Supermicro",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server platforms and rack-scale systems",
    "change": 1.3,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 33.459999084472656,
    "referenceClose": 33.029998779296875,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "CLS",
    "quoteSymbol": "CLS",
    "name": "Celestica",
    "market": "US",
    "segment": "system",
    "sub": "ODM / EMS",
    "role": "Cloud hardware and networking manufacturing",
    "change": -7.03,
    "tags": [
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 354.7699890136719,
    "referenceClose": 381.5899963378906,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "JBL",
    "quoteSymbol": "JBL",
    "name": "Jabil",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing for networking systems",
    "change": 0.58,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 356.4100036621094,
    "referenceClose": 354.3399963378906,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "FLEX",
    "quoteSymbol": "FLEX",
    "name": "Flex",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing and cloud hardware",
    "change": -8.73,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 131.07000732421875,
    "referenceClose": 143.60000610351562,
    "priceDate": "2026-05-21",
    "referenceDate": "2026-05-14"
  },
  {
    "ticker": "2345.TW",
    "quoteSymbol": "2345.TW",
    "name": "智邦",
    "market": "TW",
    "segment": "system",
    "sub": "Switch ODM",
    "role": "White-box switch and cloud networking ODM",
    "change": -1.4,
    "tags": [
      "switch",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 2470.0,
    "referenceClose": 2505.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "2382.TW",
    "quoteSymbol": "2382.TW",
    "name": "廣達",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and cloud infrastructure ODM",
    "change": 3.27,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 316.0,
    "referenceClose": 306.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "6669.TW",
    "quoteSymbol": "6669.TW",
    "name": "緯穎",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "Cloud datacenter server ODM",
    "change": 8.02,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 5525.0,
    "referenceClose": 5115.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "2317.TW",
    "quoteSymbol": "2317.TW",
    "name": "鴻海",
    "market": "TW",
    "segment": "system",
    "sub": "EMS / server",
    "role": "AI server and system assembly",
    "change": 0.6,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 250.0,
    "referenceClose": 248.5,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "2308.TW",
    "quoteSymbol": "2308.TW",
    "name": "台達電",
    "market": "TW",
    "segment": "system",
    "sub": "Power / thermal",
    "role": "Power, thermal and datacenter infrastructure",
    "change": 0.96,
    "tags": [
      "power",
      "thermal"
    ],
    "priceStatus": "ok",
    "latestClose": 2095.0,
    "referenceClose": 2075.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "3706.TW",
    "quoteSymbol": "3706.TW",
    "name": "神達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and datacenter system integration",
    "change": 9.89,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 87.80000305175781,
    "referenceClose": 79.9000015258789,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "3231.TW",
    "quoteSymbol": "3231.TW",
    "name": "緯創",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and system integration",
    "change": 6.64,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 144.5,
    "referenceClose": 135.5,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "2356.TW",
    "quoteSymbol": "2356.TW",
    "name": "英業達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and cloud equipment manufacturing",
    "change": 13.98,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 59.5,
    "referenceClose": 52.20000076293945,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "3380.TW",
    "quoteSymbol": "3380.TW",
    "name": "明泰",
    "market": "TW",
    "segment": "system",
    "sub": "Networking",
    "role": "Networking products and broadband equipment",
    "change": 10.16,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 34.150001525878906,
    "referenceClose": 31.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "6285.TW",
    "quoteSymbol": "6285.TW",
    "name": "啟碁",
    "market": "TW",
    "segment": "system",
    "sub": "Network device",
    "role": "Wireless and networking equipment",
    "change": 13.85,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 296.0,
    "referenceClose": 260.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "system",
    "sub": "Optical systems",
    "role": "Optical communication and laser systems",
    "change": 16.67,
    "tags": [
      "system"
    ],
    "priceStatus": "ok",
    "latestClose": 156.30999755859375,
    "referenceClose": 133.97999572753906,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "system",
    "sub": "Optical network",
    "role": "Optical transmission and network equipment",
    "change": 1.58,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 55.150001525878906,
    "referenceClose": 54.290000915527344,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "000063.SZ",
    "quoteSymbol": "000063.SZ",
    "name": "中興通訊",
    "market": "CN",
    "segment": "system",
    "sub": "Telecom equipment",
    "role": "Telecom and datacenter network equipment",
    "change": -2.91,
    "tags": [
      "telecom"
    ],
    "priceStatus": "ok",
    "latestClose": 35.63999938964844,
    "referenceClose": 36.709999084472656,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "6701.T",
    "quoteSymbol": "6701.T",
    "name": "NEC",
    "market": "JP",
    "segment": "system",
    "sub": "Network systems",
    "role": "Telecom, submarine and network systems",
    "change": 2.52,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 4105.0,
    "referenceClose": 4004.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  },
  {
    "ticker": "6702.T",
    "quoteSymbol": "6702.T",
    "name": "Fujitsu",
    "market": "JP",
    "segment": "system",
    "sub": "ICT systems",
    "role": "ICT infrastructure and network systems",
    "change": 2.8,
    "tags": [
      "ICT"
    ],
    "priceStatus": "ok",
    "latestClose": 3307.0,
    "referenceClose": 3217.0,
    "priceDate": "2026-05-22",
    "referenceDate": "2026-05-15"
  }
];

