window.HEATMAP_META = {
  "title": "光通訊 / CPO 供應鏈熱力圖",
  "subtitle": "六大環節、跨市場上市公司、同公司可重複出現在多個供應鏈位置。",
  "lastUpdated": "2026-09-19",
  "dateRange": "2026-09-09 → 2026-09-18",
  "totalTiles": 126,
  "totalCompanies": 97,
  "quoteSymbolsUpdated": 97,
  "quoteSymbolsFailed": 0,
  "priceStatusCounts": {
    "ok": 126
  },
  "topGainer": {
    "ticker": "688536.SH",
    "name": "思瑞浦",
    "change": 18.92
  },
  "topLoser": {
    "ticker": "AMS.SW",
    "name": "ams OSRAM",
    "change": -11.14
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
    "change": -1.21,
    "tags": [
      "ASIC",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 357.6099853515625,
    "referenceClose": 361.989990234375,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "asic",
    "sub": "GPU / Network ASIC",
    "role": "GPU, NVLink, Spectrum-X ecosystem",
    "change": 1.82,
    "tags": [
      "GPU",
      "networking"
    ],
    "priceStatus": "ok",
    "latestClose": 222.27000427246094,
    "referenceClose": 218.2899932861328,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "asic",
    "sub": "DSP / PAM4",
    "role": "Optical DSP, custom silicon, DCI chips",
    "change": 3.45,
    "tags": [
      "DSP",
      "custom silicon"
    ],
    "priceStatus": "ok",
    "latestClose": 244.25,
    "referenceClose": 236.10000610351562,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "CRDO",
    "quoteSymbol": "CRDO",
    "name": "Credo",
    "market": "US",
    "segment": "asic",
    "sub": "Retimer / DSP",
    "role": "High-speed connectivity and optical DSP",
    "change": 7.94,
    "tags": [
      "DSP",
      "retimer"
    ],
    "priceStatus": "ok",
    "latestClose": 175.88999938964844,
    "referenceClose": 162.9499969482422,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "ALAB",
    "quoteSymbol": "ALAB",
    "name": "Astera Labs",
    "market": "US",
    "segment": "asic",
    "sub": "PCIe / CXL",
    "role": "AI data-center connectivity silicon",
    "change": 4.13,
    "tags": [
      "retimer",
      "CXL"
    ],
    "priceStatus": "ok",
    "latestClose": 303.25,
    "referenceClose": 291.2200012207031,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Laser drivers, TIAs, high-speed analog",
    "change": 0.35,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 275.8599853515625,
    "referenceClose": 274.8999938964844,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "SMTC",
    "quoteSymbol": "SMTC",
    "name": "Semtech",
    "market": "US",
    "segment": "asic",
    "sub": "Signal IC",
    "role": "Signal integrity and optical analog ICs",
    "change": 10.62,
    "tags": [
      "signal"
    ],
    "priceStatus": "ok",
    "latestClose": 185.0,
    "referenceClose": 167.24000549316406,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "asic",
    "sub": "Network silicon",
    "role": "Silicon One and Acacia optical stack",
    "change": -2.34,
    "tags": [
      "switch",
      "acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 109.51000213623047,
    "referenceClose": 112.12999725341797,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "asic",
    "sub": "Coherent DSP",
    "role": "WaveLogic coherent DSP and systems",
    "change": -0.21,
    "tags": [
      "coherent",
      "DSP"
    ],
    "priceStatus": "ok",
    "latestClose": 348.79998779296875,
    "referenceClose": 349.5400085449219,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "AMD",
    "quoteSymbol": "AMD",
    "name": "AMD",
    "market": "US",
    "segment": "asic",
    "sub": "AI accelerator",
    "role": "AI accelerators and adaptive compute",
    "change": 8.46,
    "tags": [
      "accelerator"
    ],
    "priceStatus": "ok",
    "latestClose": 559.8200073242188,
    "referenceClose": 516.1300048828125,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "asic",
    "sub": "Foundry / I/O",
    "role": "Foundry, Ethernet, historical silicon photonics",
    "change": 5.5,
    "tags": [
      "foundry",
      "ethernet"
    ],
    "priceStatus": "ok",
    "latestClose": 108.5999984741211,
    "referenceClose": 102.94000244140625,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "QCOM",
    "quoteSymbol": "QCOM",
    "name": "Qualcomm",
    "market": "US",
    "segment": "asic",
    "sub": "Connectivity IC",
    "role": "High-speed connectivity and edge AI silicon",
    "change": -2.34,
    "tags": [
      "connectivity"
    ],
    "priceStatus": "ok",
    "latestClose": 177.72000122070312,
    "referenceClose": 181.97000122070312,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "3661.TW",
    "quoteSymbol": "3661.TW",
    "name": "世芯-KY",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "Advanced-node custom ASIC design service",
    "change": -3.01,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 3540.0,
    "referenceClose": 3650.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "3443.TW",
    "quoteSymbol": "3443.TW",
    "name": "創意",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "GUC ASIC design and implementation",
    "change": 16.83,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 7150.0,
    "referenceClose": 6120.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "2454.TW",
    "quoteSymbol": "2454.TW",
    "name": "聯發科",
    "market": "TW",
    "segment": "asic",
    "sub": "Connectivity SoC",
    "role": "Networking, SerDes and edge AI chip exposure",
    "change": 2.73,
    "tags": [
      "SoC"
    ],
    "priceStatus": "ok",
    "latestClose": 4710.0,
    "referenceClose": 4585.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "5274.TWO",
    "quoteSymbol": "5274.TWO",
    "name": "信驊",
    "market": "TW",
    "segment": "asic",
    "sub": "BMC",
    "role": "Server management silicon",
    "change": 7.86,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 19290.0,
    "referenceClose": 17885.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "688536.SH",
    "quoteSymbol": "688536.SS",
    "name": "思瑞浦",
    "market": "CN",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Analog and signal-chain ICs",
    "change": 18.92,
    "tags": [
      "analog"
    ],
    "priceStatus": "ok",
    "latestClose": 353.20001220703125,
    "referenceClose": 297.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "asic",
    "sub": "Laser driver link",
    "role": "Optical chip supplier with upstream exposure",
    "change": 7.88,
    "tags": [
      "optical chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1835.0,
    "referenceClose": 1701.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "2330.TW",
    "quoteSymbol": "2330.TW",
    "name": "台積電",
    "market": "TW",
    "segment": "sipic",
    "sub": "Foundry",
    "role": "Advanced-node and packaging platform for CPO ecosystem",
    "change": 2.07,
    "tags": [
      "foundry",
      "CoWoS"
    ],
    "priceStatus": "ok",
    "latestClose": 2460.0,
    "referenceClose": 2410.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "AVGO",
    "quoteSymbol": "AVGO",
    "name": "Broadcom",
    "market": "US",
    "segment": "sipic",
    "sub": "Co-packaged optics",
    "role": "CPO roadmap and switch silicon integration",
    "change": -1.21,
    "tags": [
      "CPO",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 357.6099853515625,
    "referenceClose": 361.989990234375,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical I/O ecosystem",
    "role": "AI cluster architecture drives optical I/O demand",
    "change": 1.82,
    "tags": [
      "AI",
      "optical I/O"
    ],
    "priceStatus": "ok",
    "latestClose": 222.27000427246094,
    "referenceClose": 218.2899932861328,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical platform",
    "role": "DSP plus silicon photonics partnership ecosystem",
    "change": 3.45,
    "tags": [
      "DSP",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 244.25,
    "referenceClose": 236.10000610351562,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "sipic",
    "sub": "Silicon photonics",
    "role": "Integrated silicon photonics and foundry capabilities",
    "change": 5.5,
    "tags": [
      "SiPh",
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 108.5999984741211,
    "referenceClose": 102.94000244140625,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Lasers, transceivers and optical engine building blocks",
    "change": 3.93,
    "tags": [
      "laser",
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 317.3599853515625,
    "referenceClose": 305.3699951171875,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Datacom lasers and optical components",
    "change": 0.42,
    "tags": [
      "laser",
      "datacom"
    ],
    "priceStatus": "ok",
    "latestClose": 930.9099731445312,
    "referenceClose": 927.030029296875,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "STM",
    "quoteSymbol": "STM",
    "name": "STMicro",
    "market": "EU",
    "segment": "sipic",
    "sub": "Photonics platform",
    "role": "Photonics and advanced semiconductor platform exposure",
    "change": -2.58,
    "tags": [
      "photonics"
    ],
    "priceStatus": "ok",
    "latestClose": 50.18000030517578,
    "referenceClose": 51.5099983215332,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "GFS",
    "quoteSymbol": "GFS",
    "name": "GlobalFoundries",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Silicon photonics and specialty process platform",
    "change": 1.85,
    "tags": [
      "foundry",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 47.81999969482422,
    "referenceClose": 46.95000076293945,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "TSEM",
    "quoteSymbol": "TSEM",
    "name": "Tower Semiconductor",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Analog, photonics and specialty manufacturing",
    "change": 5.71,
    "tags": [
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 223.60000610351562,
    "referenceClose": 211.52000427246094,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "sipic",
    "sub": "Optical systems",
    "role": "Photonic service engines and coherent optics",
    "change": -4.04,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 10.680000305175781,
    "referenceClose": 11.130000114440918,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "sipic",
    "sub": "Acacia optics",
    "role": "Coherent modules and optical interconnect roadmap",
    "change": -2.34,
    "tags": [
      "Acacia",
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 109.51000213623047,
    "referenceClose": 112.12999725341797,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "sipic",
    "sub": "Coherent optics",
    "role": "Coherent optical engine and network platforms",
    "change": -0.21,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 348.79998779296875,
    "referenceClose": 349.5400085449219,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "POET",
    "quoteSymbol": "POET",
    "name": "POET Technologies",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical interposer",
    "role": "Optical interposer platform for transceivers",
    "change": -1.89,
    "tags": [
      "interposer"
    ],
    "priceStatus": "ok",
    "latestClose": 7.800000190734863,
    "referenceClose": 7.949999809265137,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "LWLG",
    "quoteSymbol": "LWLG",
    "name": "Lightwave Logic",
    "market": "US",
    "segment": "sipic",
    "sub": "EO polymer",
    "role": "Electro-optic polymer material platform",
    "change": -2.49,
    "tags": [
      "material"
    ],
    "priceStatus": "ok",
    "latestClose": 5.099999904632568,
    "referenceClose": 5.230000019073486,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "4966.TWO",
    "quoteSymbol": "4966.TWO",
    "name": "譜瑞-KY",
    "market": "TW",
    "segment": "sipic",
    "sub": "High-speed interface",
    "role": "High-speed interface ICs and data transmission",
    "change": 7.58,
    "tags": [
      "interface"
    ],
    "priceStatus": "ok",
    "latestClose": 568.0,
    "referenceClose": 528.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "6789.TW",
    "quoteSymbol": "6789.TW",
    "name": "采鈺",
    "market": "TW",
    "segment": "sipic",
    "sub": "Optical process",
    "role": "Optical semiconductor process and sensor platform",
    "change": 3.03,
    "tags": [
      "process"
    ],
    "priceStatus": "ok",
    "latestClose": 459.5,
    "referenceClose": 446.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "688313.SH",
    "quoteSymbol": "688313.SS",
    "name": "仕佳光子",
    "market": "CN",
    "segment": "sipic",
    "sub": "PLC / optical chip",
    "role": "PLC splitter, AWG and optical chip supplier",
    "change": 14.73,
    "tags": [
      "PLC",
      "chip"
    ],
    "priceStatus": "ok",
    "latestClose": 170.3800048828125,
    "referenceClose": 148.5,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "laser",
    "sub": "Laser / InP",
    "role": "InP lasers, VCSELs, coherent and datacom components",
    "change": 3.93,
    "tags": [
      "InP",
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 317.3599853515625,
    "referenceClose": 305.3699951171875,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "laser",
    "sub": "Datacom laser",
    "role": "EML, DFB and high-speed datacom laser supply",
    "change": 0.42,
    "tags": [
      "EML",
      "DFB"
    ],
    "priceStatus": "ok",
    "latestClose": 930.9099731445312,
    "referenceClose": 927.030029296875,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "laser",
    "sub": "Laser driver / TIA",
    "role": "Laser drivers, TIAs and analog front-end",
    "change": 0.35,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 275.8599853515625,
    "referenceClose": 274.8999938964844,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "IPGP",
    "quoteSymbol": "IPGP",
    "name": "IPG Photonics",
    "market": "US",
    "segment": "laser",
    "sub": "Fiber laser",
    "role": "Laser technology and optical components",
    "change": -4.3,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 76.55000305175781,
    "referenceClose": 79.98999786376953,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "AXTI",
    "quoteSymbol": "AXTI",
    "name": "AXT",
    "market": "US",
    "segment": "laser",
    "sub": "Substrate",
    "role": "Compound semiconductor substrates",
    "change": 8.12,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 70.02999877929688,
    "referenceClose": 64.7699966430664,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "IQE.L",
    "quoteSymbol": "IQE.L",
    "name": "IQE",
    "market": "EU",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "Compound semiconductor epitaxy wafers",
    "change": -3.94,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 42.70000076293945,
    "referenceClose": 44.45000076293945,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Compound semiconductor and optical components",
    "change": 0.14,
    "tags": [
      "InP",
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 2080.5,
    "referenceClose": 2077.5,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "6503.T",
    "quoteSymbol": "6503.T",
    "name": "三菱電機",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Optical devices, lasers and industrial electronics",
    "change": 1.97,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 5126.0,
    "referenceClose": 5027.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "6965.T",
    "quoteSymbol": "6965.T",
    "name": "浜松光子",
    "market": "JP",
    "segment": "laser",
    "sub": "Photonics",
    "role": "Photodetectors, optoelectronics and photonics devices",
    "change": 2.44,
    "tags": [
      "detector"
    ],
    "priceStatus": "ok",
    "latestClose": 2246.5,
    "referenceClose": 2193.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "AMS.SW",
    "quoteSymbol": "AMS.SW",
    "name": "ams OSRAM",
    "market": "EU",
    "segment": "laser",
    "sub": "Emitter",
    "role": "Emitters, sensors and photonics devices",
    "change": -11.14,
    "tags": [
      "emitter"
    ],
    "priceStatus": "ok",
    "latestClose": 16.43000030517578,
    "referenceClose": 18.489999771118164,
    "priceDate": "2026-09-16",
    "referenceDate": "2026-09-09"
  },
  {
    "ticker": "3105.TWO",
    "quoteSymbol": "3105.TWO",
    "name": "穩懋",
    "market": "TW",
    "segment": "laser",
    "sub": "GaAs foundry",
    "role": "GaAs foundry with photonics-adjacent capabilities",
    "change": 14.29,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 500.0,
    "referenceClose": 437.5,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "3081.TWO",
    "quoteSymbol": "3081.TWO",
    "name": "聯亞",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "III-V epitaxy wafers for optical communications",
    "change": 2.49,
    "tags": [
      "epi",
      "III-V"
    ],
    "priceStatus": "ok",
    "latestClose": 2880.0,
    "referenceClose": 2810.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "2455.TW",
    "quoteSymbol": "2455.TW",
    "name": "全新",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "GaAs/InP epitaxy and compound semiconductor materials",
    "change": 7.96,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 556.0,
    "referenceClose": 515.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "8086.TWO",
    "quoteSymbol": "8086.TWO",
    "name": "宏捷科",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "GaAs foundry and compound semiconductor devices",
    "change": 4.72,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 111.0,
    "referenceClose": 106.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "4991.TWO",
    "quoteSymbol": "4991.TWO",
    "name": "環宇-KY",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "Compound semiconductor and optical device exposure",
    "change": 5.69,
    "tags": [
      "compound"
    ],
    "priceStatus": "ok",
    "latestClose": 474.0,
    "referenceClose": 448.5,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "laser",
    "sub": "Optical component",
    "role": "Optical communication components and modules",
    "change": 15.07,
    "tags": [
      "optical"
    ],
    "priceStatus": "ok",
    "latestClose": 611.0,
    "referenceClose": 531.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser chip",
    "role": "Optical communication laser chips",
    "change": 7.88,
    "tags": [
      "laser chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1835.0,
    "referenceClose": 1701.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser / module",
    "role": "Laser equipment and optical communication products",
    "change": 3.77,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 107.80000305175781,
    "referenceClose": 103.87999725341797,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "APH",
    "quoteSymbol": "APH",
    "name": "Amphenol",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "High-speed interconnect and optical connector ecosystem",
    "change": -7.59,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 77.55000305175781,
    "referenceClose": 83.91999816894531,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "GLW",
    "quoteSymbol": "GLW",
    "name": "Corning",
    "market": "US",
    "segment": "component",
    "sub": "Fiber / glass",
    "role": "Optical fiber, glass and datacenter cabling",
    "change": -9.78,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 150.1300048828125,
    "referenceClose": 166.39999389648438,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "TEL",
    "quoteSymbol": "TEL",
    "name": "TE Connectivity",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "Connectors, cable assemblies and sensors",
    "change": -3.09,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 205.4199981689453,
    "referenceClose": 211.9600067138672,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers, modulators and optical subassemblies",
    "change": 3.93,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 317.3599853515625,
    "referenceClose": 305.3699951171875,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers and optical communication components",
    "change": 0.42,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 930.9099731445312,
    "referenceClose": 927.030029296875,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "component",
    "sub": "Manufacturing",
    "role": "Precision optical manufacturing and assembly",
    "change": -6.28,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 388.54998779296875,
    "referenceClose": 414.5799865722656,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "3711.TW",
    "quoteSymbol": "3711.TW",
    "name": "日月光投控",
    "market": "TW",
    "segment": "component",
    "sub": "Advanced packaging",
    "role": "Semiconductor packaging and system-in-package",
    "change": 3.24,
    "tags": [
      "packaging"
    ],
    "priceStatus": "ok",
    "latestClose": 638.0,
    "referenceClose": 618.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "2449.TW",
    "quoteSymbol": "2449.TW",
    "name": "京元電",
    "market": "TW",
    "segment": "component",
    "sub": "Test",
    "role": "IC testing services for high-speed chips",
    "change": 10.84,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 291.5,
    "referenceClose": 263.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "6515.TW",
    "quoteSymbol": "6515.TW",
    "name": "穎崴",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card / socket",
    "role": "High-speed test interface and sockets",
    "change": -6.6,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 6435.0,
    "referenceClose": 6890.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "6223.TWO",
    "quoteSymbol": "6223.TWO",
    "name": "旺矽",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card",
    "role": "Probe cards and testing interface",
    "change": 3.2,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 5800.0,
    "referenceClose": 5620.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "3037.TW",
    "quoteSymbol": "3037.TW",
    "name": "欣興",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and advanced PCB",
    "change": 0.41,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 981.0,
    "referenceClose": 977.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "3189.TW",
    "quoteSymbol": "3189.TW",
    "name": "景碩",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate supplier",
    "change": 1.22,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 832.0,
    "referenceClose": 822.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "8046.TW",
    "quoteSymbol": "8046.TW",
    "name": "南電",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and PCB",
    "change": 1.85,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1100.0,
    "referenceClose": 1080.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "2383.TW",
    "quoteSymbol": "2383.TW",
    "name": "台光電",
    "market": "TW",
    "segment": "component",
    "sub": "Copper clad laminate",
    "role": "High-speed CCL for AI servers and switches",
    "change": -8.85,
    "tags": [
      "CCL"
    ],
    "priceStatus": "ok",
    "latestClose": 4890.0,
    "referenceClose": 5365.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "component",
    "sub": "Connector / RF",
    "role": "Connectors and optical communication components",
    "change": -5.69,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 1575.0,
    "referenceClose": 1670.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "3363.TWO",
    "quoteSymbol": "3363.TWO",
    "name": "上詮",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber optic components and passive devices",
    "change": 0.29,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 683.0,
    "referenceClose": 681.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "component",
    "sub": "Optical subassembly",
    "role": "Optical communication subassemblies and packaging",
    "change": 5.08,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 538.0,
    "referenceClose": 512.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "6451.TW",
    "quoteSymbol": "6451.TW",
    "name": "訊芯-KY",
    "market": "TW",
    "segment": "component",
    "sub": "SiP / optical packaging",
    "role": "System-in-package and optical communication assembly",
    "change": 8.3,
    "tags": [
      "SiP"
    ],
    "priceStatus": "ok",
    "latestClose": 443.5,
    "referenceClose": 409.5,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber arrays, splitters and optical passive components",
    "change": -0.75,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 665.0,
    "referenceClose": 670.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical communication component supplier",
    "change": 8.3,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 100.5,
    "referenceClose": 92.80000305175781,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive components and precision parts",
    "change": 8.67,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 284.6600036621094,
    "referenceClose": 261.9599914550781,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "300548.SZ",
    "quoteSymbol": "300548.SZ",
    "name": "博創科技",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive and active components",
    "change": 14.9,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 238.8000030517578,
    "referenceClose": 207.83999633789062,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "601869.SH",
    "quoteSymbol": "601869.SS",
    "name": "長飛光纖",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber",
    "role": "Optical fiber and cable",
    "change": -4.01,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 454.989990234375,
    "referenceClose": 473.989990234375,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "600487.SH",
    "quoteSymbol": "600487.SS",
    "name": "亨通光電",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber cable and optical network products",
    "change": 6.51,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 69.48999786376953,
    "referenceClose": 65.23999786376953,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "5801.T",
    "quoteSymbol": "5801.T",
    "name": "古河電工",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Optical fiber, cable and network materials",
    "change": -2.01,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 3901.0,
    "referenceClose": 3981.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "5803.T",
    "quoteSymbol": "5803.T",
    "name": "藤倉",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber, cable and optical interconnect products",
    "change": -0.6,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 4952.0,
    "referenceClose": 4982.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "4062.T",
    "quoteSymbol": "4062.T",
    "name": "Ibiden",
    "market": "JP",
    "segment": "component",
    "sub": "Substrate",
    "role": "Advanced IC substrates",
    "change": -0.03,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 19555.0,
    "referenceClose": 19560.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom and telecom optical transceivers",
    "change": 3.93,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 317.3599853515625,
    "referenceClose": 305.3699951171875,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "module",
    "sub": "Laser / module",
    "role": "Laser engines and optical module supply",
    "change": 0.42,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 930.9099731445312,
    "referenceClose": 927.030029296875,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "module",
    "sub": "Optical manufacturing",
    "role": "Optical module contract manufacturing",
    "change": -6.28,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 388.54998779296875,
    "referenceClose": 414.5799865722656,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "module",
    "sub": "Coherent module",
    "role": "Coherent optical modules and transport platforms",
    "change": -0.21,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 348.79998779296875,
    "referenceClose": 349.5400085449219,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "module",
    "sub": "Acacia module",
    "role": "Acacia coherent optics and pluggable modules",
    "change": -2.34,
    "tags": [
      "Acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 109.51000213623047,
    "referenceClose": 112.12999725341797,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "module",
    "sub": "Optical module",
    "role": "Coherent optics and network system modules",
    "change": -4.04,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 10.680000305175781,
    "referenceClose": 11.130000114440918,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical communication modules and components",
    "change": 15.07,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 611.0,
    "referenceClose": 531.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "4977.TW",
    "quoteSymbol": "4977.TW",
    "name": "眾達-KY",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical transceiver supplier",
    "change": 0.0,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 175.0,
    "referenceClose": 175.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver component",
    "role": "Optical communication and connector products",
    "change": -5.69,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1575.0,
    "referenceClose": 1670.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "module",
    "sub": "OSA",
    "role": "Optical subassemblies for transceivers",
    "change": 5.08,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 538.0,
    "referenceClose": 512.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "module",
    "sub": "Passive optical",
    "role": "Fiber components used in modules",
    "change": -0.75,
    "tags": [
      "passive"
    ],
    "priceStatus": "ok",
    "latestClose": 665.0,
    "referenceClose": 670.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module exposure",
    "change": 8.3,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 100.5,
    "referenceClose": 92.80000305175781,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "4908.TWO",
    "quoteSymbol": "4908.TWO",
    "name": "前鼎",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module and equipment",
    "change": 2.53,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 243.5,
    "referenceClose": 237.5,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "300308.SZ",
    "quoteSymbol": "300308.SZ",
    "name": "中際旭創",
    "market": "CN",
    "segment": "module",
    "sub": "800G / 1.6T",
    "role": "High-speed optical transceiver leader",
    "change": 0.05,
    "tags": [
      "800G",
      "1.6T"
    ],
    "priceStatus": "ok",
    "latestClose": 926.4299926757812,
    "referenceClose": 926.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "300502.SZ",
    "quoteSymbol": "300502.SZ",
    "name": "新易盛",
    "market": "CN",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom optical transceivers",
    "change": 5.2,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 445.0,
    "referenceClose": 423.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "002281.SZ",
    "quoteSymbol": "002281.SZ",
    "name": "光迅科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical devices and modules",
    "change": 10.17,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 195.39999389648438,
    "referenceClose": 177.36000061035156,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "603083.SH",
    "quoteSymbol": "603083.SS",
    "name": "劍橋科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical modules and broadband equipment",
    "change": 1.57,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 227.97999572753906,
    "referenceClose": 224.4600067138672,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical engine parts",
    "role": "High-speed module precision components",
    "change": 8.67,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 284.6600036621094,
    "referenceClose": 261.9599914550781,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "688205.SH",
    "quoteSymbol": "688205.SS",
    "name": "德科立",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical transceiver modules",
    "change": 0.44,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 219.85000610351562,
    "referenceClose": 218.88999938964844,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication and laser products",
    "change": 3.77,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 107.80000305175781,
    "referenceClose": 103.87999725341797,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical network",
    "role": "Optical network systems and modules",
    "change": 7.95,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 43.9900016784668,
    "referenceClose": 40.75,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "module",
    "sub": "Optical device",
    "role": "Optical components and communication devices",
    "change": 0.14,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 2080.5,
    "referenceClose": 2077.5,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "ANET",
    "quoteSymbol": "ANET",
    "name": "Arista Networks",
    "market": "US",
    "segment": "system",
    "sub": "AI switch",
    "role": "AI datacenter Ethernet switches",
    "change": -0.1,
    "tags": [
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 199.38999938964844,
    "referenceClose": 199.58999633789062,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "system",
    "sub": "Switch / router",
    "role": "Enterprise and cloud networking systems",
    "change": -2.34,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 109.51000213623047,
    "referenceClose": 112.12999725341797,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "HPE",
    "quoteSymbol": "HPE",
    "name": "HPE",
    "market": "US",
    "segment": "system",
    "sub": "Server / networking",
    "role": "AI servers, networking and cloud infrastructure",
    "change": -2.14,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 60.7599983215332,
    "referenceClose": 62.09000015258789,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "DELL",
    "quoteSymbol": "DELL",
    "name": "Dell",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and enterprise infrastructure",
    "change": 0.14,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 568.0599975585938,
    "referenceClose": 567.2899780273438,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "SMCI",
    "quoteSymbol": "SMCI",
    "name": "Supermicro",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server platforms and rack-scale systems",
    "change": -2.52,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 39.09000015258789,
    "referenceClose": 40.099998474121094,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "CLS",
    "quoteSymbol": "CLS",
    "name": "Celestica",
    "market": "US",
    "segment": "system",
    "sub": "ODM / EMS",
    "role": "Cloud hardware and networking manufacturing",
    "change": -4.02,
    "tags": [
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 332.6300048828125,
    "referenceClose": 346.54998779296875,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "JBL",
    "quoteSymbol": "JBL",
    "name": "Jabil",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing for networking systems",
    "change": -5.82,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 299.57000732421875,
    "referenceClose": 318.0799865722656,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "FLEX",
    "quoteSymbol": "FLEX",
    "name": "Flex",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing and cloud hardware",
    "change": -6.28,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 108.51000213623047,
    "referenceClose": 115.77999877929688,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "2345.TW",
    "quoteSymbol": "2345.TW",
    "name": "智邦",
    "market": "TW",
    "segment": "system",
    "sub": "Switch ODM",
    "role": "White-box switch and cloud networking ODM",
    "change": -1.59,
    "tags": [
      "switch",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 1855.0,
    "referenceClose": 1885.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "2382.TW",
    "quoteSymbol": "2382.TW",
    "name": "廣達",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and cloud infrastructure ODM",
    "change": 1.93,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 343.0,
    "referenceClose": 336.5,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "6669.TW",
    "quoteSymbol": "6669.TW",
    "name": "緯穎",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "Cloud datacenter server ODM",
    "change": -7.36,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 2140.0,
    "referenceClose": 2310.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "2317.TW",
    "quoteSymbol": "2317.TW",
    "name": "鴻海",
    "market": "TW",
    "segment": "system",
    "sub": "EMS / server",
    "role": "AI server and system assembly",
    "change": 1.01,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 250.5,
    "referenceClose": 248.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "2308.TW",
    "quoteSymbol": "2308.TW",
    "name": "台達電",
    "market": "TW",
    "segment": "system",
    "sub": "Power / thermal",
    "role": "Power, thermal and datacenter infrastructure",
    "change": 7.1,
    "tags": [
      "power",
      "thermal"
    ],
    "priceStatus": "ok",
    "latestClose": 1735.0,
    "referenceClose": 1620.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "3706.TW",
    "quoteSymbol": "3706.TW",
    "name": "神達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and datacenter system integration",
    "change": 0.5,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 80.5,
    "referenceClose": 80.0999984741211,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "3231.TW",
    "quoteSymbol": "3231.TW",
    "name": "緯創",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and system integration",
    "change": 0.54,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 186.5,
    "referenceClose": 185.5,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "2356.TW",
    "quoteSymbol": "2356.TW",
    "name": "英業達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and cloud equipment manufacturing",
    "change": -0.48,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 61.70000076293945,
    "referenceClose": 62.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "3380.TW",
    "quoteSymbol": "3380.TW",
    "name": "明泰",
    "market": "TW",
    "segment": "system",
    "sub": "Networking",
    "role": "Networking products and broadband equipment",
    "change": -1.95,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 30.149999618530273,
    "referenceClose": 30.75,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "6285.TW",
    "quoteSymbol": "6285.TW",
    "name": "啟碁",
    "market": "TW",
    "segment": "system",
    "sub": "Network device",
    "role": "Wireless and networking equipment",
    "change": 2.25,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 227.5,
    "referenceClose": 222.5,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "system",
    "sub": "Optical systems",
    "role": "Optical communication and laser systems",
    "change": 3.77,
    "tags": [
      "system"
    ],
    "priceStatus": "ok",
    "latestClose": 107.80000305175781,
    "referenceClose": 103.87999725341797,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "system",
    "sub": "Optical network",
    "role": "Optical transmission and network equipment",
    "change": 7.95,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 43.9900016784668,
    "referenceClose": 40.75,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "000063.SZ",
    "quoteSymbol": "000063.SZ",
    "name": "中興通訊",
    "market": "CN",
    "segment": "system",
    "sub": "Telecom equipment",
    "role": "Telecom and datacenter network equipment",
    "change": 0.84,
    "tags": [
      "telecom"
    ],
    "priceStatus": "ok",
    "latestClose": 32.439998626708984,
    "referenceClose": 32.16999816894531,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "6701.T",
    "quoteSymbol": "6701.T",
    "name": "NEC",
    "market": "JP",
    "segment": "system",
    "sub": "Network systems",
    "role": "Telecom, submarine and network systems",
    "change": 6.08,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 4812.0,
    "referenceClose": 4536.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  },
  {
    "ticker": "6702.T",
    "quoteSymbol": "6702.T",
    "name": "Fujitsu",
    "market": "JP",
    "segment": "system",
    "sub": "ICT systems",
    "role": "ICT infrastructure and network systems",
    "change": 6.13,
    "tags": [
      "ICT"
    ],
    "priceStatus": "ok",
    "latestClose": 3979.0,
    "referenceClose": 3749.0,
    "priceDate": "2026-09-18",
    "referenceDate": "2026-09-11"
  }
];

