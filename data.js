window.HEATMAP_META = {
  "title": "光通訊 / CPO 供應鏈熱力圖",
  "subtitle": "六大環節、跨市場上市公司、同公司可重複出現在多個供應鏈位置。",
  "lastUpdated": "2026-07-04",
  "dateRange": "2026-06-25 → 2026-07-03",
  "totalTiles": 126,
  "totalCompanies": 97,
  "quoteSymbolsUpdated": 97,
  "quoteSymbolsFailed": 0,
  "priceStatusCounts": {
    "ok": 126
  },
  "topGainer": {
    "ticker": "6669.TW",
    "name": "緯穎",
    "change": 23.01
  },
  "topLoser": {
    "ticker": "300394.SZ",
    "name": "天孚通信",
    "change": -21.35
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
    "change": -4.87,
    "tags": [
      "ASIC",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 360.45001220703125,
    "referenceClose": 378.9100036621094,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "asic",
    "sub": "GPU / Network ASIC",
    "role": "GPU, NVLink, Spectrum-X ecosystem",
    "change": -0.46,
    "tags": [
      "GPU",
      "networking"
    ],
    "priceStatus": "ok",
    "latestClose": 194.8300018310547,
    "referenceClose": 195.74000549316406,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "asic",
    "sub": "DSP / PAM4",
    "role": "Optical DSP, custom silicon, DCI chips",
    "change": -12.79,
    "tags": [
      "DSP",
      "custom silicon"
    ],
    "priceStatus": "ok",
    "latestClose": 245.2899932861328,
    "referenceClose": 281.260009765625,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "CRDO",
    "quoteSymbol": "CRDO",
    "name": "Credo",
    "market": "US",
    "segment": "asic",
    "sub": "Retimer / DSP",
    "role": "High-speed connectivity and optical DSP",
    "change": -9.75,
    "tags": [
      "DSP",
      "retimer"
    ],
    "priceStatus": "ok",
    "latestClose": 241.91000366210938,
    "referenceClose": 268.0299987792969,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "ALAB",
    "quoteSymbol": "ALAB",
    "name": "Astera Labs",
    "market": "US",
    "segment": "asic",
    "sub": "PCIe / CXL",
    "role": "AI data-center connectivity silicon",
    "change": 2.12,
    "tags": [
      "retimer",
      "CXL"
    ],
    "priceStatus": "ok",
    "latestClose": 406.4200134277344,
    "referenceClose": 398.0,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Laser drivers, TIAs, high-speed analog",
    "change": -17.41,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 322.260009765625,
    "referenceClose": 390.19000244140625,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "SMTC",
    "quoteSymbol": "SMTC",
    "name": "Semtech",
    "market": "US",
    "segment": "asic",
    "sub": "Signal IC",
    "role": "Signal integrity and optical analog ICs",
    "change": -16.64,
    "tags": [
      "signal"
    ],
    "priceStatus": "ok",
    "latestClose": 135.27000427246094,
    "referenceClose": 162.27000427246094,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "asic",
    "sub": "Network silicon",
    "role": "Silicon One and Acacia optical stack",
    "change": -5.28,
    "tags": [
      "switch",
      "acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 112.69000244140625,
    "referenceClose": 118.97000122070312,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "asic",
    "sub": "Coherent DSP",
    "role": "WaveLogic coherent DSP and systems",
    "change": -12.84,
    "tags": [
      "coherent",
      "DSP"
    ],
    "priceStatus": "ok",
    "latestClose": 422.4599914550781,
    "referenceClose": 484.69000244140625,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "AMD",
    "quoteSymbol": "AMD",
    "name": "AMD",
    "market": "US",
    "segment": "asic",
    "sub": "AI accelerator",
    "role": "AI accelerators and adaptive compute",
    "change": -2.77,
    "tags": [
      "accelerator"
    ],
    "priceStatus": "ok",
    "latestClose": 517.8200073242188,
    "referenceClose": 532.5700073242188,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "asic",
    "sub": "Foundry / I/O",
    "role": "Foundry, Ethernet, historical silicon photonics",
    "change": -9.42,
    "tags": [
      "foundry",
      "ethernet"
    ],
    "priceStatus": "ok",
    "latestClose": 120.3499984741211,
    "referenceClose": 132.8699951171875,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "QCOM",
    "quoteSymbol": "QCOM",
    "name": "Qualcomm",
    "market": "US",
    "segment": "asic",
    "sub": "Connectivity IC",
    "role": "High-speed connectivity and edge AI silicon",
    "change": -13.98,
    "tags": [
      "connectivity"
    ],
    "priceStatus": "ok",
    "latestClose": 176.25,
    "referenceClose": 204.89999389648438,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "3661.TW",
    "quoteSymbol": "3661.TW",
    "name": "世芯-KY",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "Advanced-node custom ASIC design service",
    "change": 20.16,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 4650.0,
    "referenceClose": 3870.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "3443.TW",
    "quoteSymbol": "3443.TW",
    "name": "創意",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "GUC ASIC design and implementation",
    "change": 14.03,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 5040.0,
    "referenceClose": 4420.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "2454.TW",
    "quoteSymbol": "2454.TW",
    "name": "聯發科",
    "market": "TW",
    "segment": "asic",
    "sub": "Connectivity SoC",
    "role": "Networking, SerDes and edge AI chip exposure",
    "change": 8.12,
    "tags": [
      "SoC"
    ],
    "priceStatus": "ok",
    "latestClose": 4195.0,
    "referenceClose": 3880.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "5274.TWO",
    "quoteSymbol": "5274.TWO",
    "name": "信驊",
    "market": "TW",
    "segment": "asic",
    "sub": "BMC",
    "role": "Server management silicon",
    "change": 10.57,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 17265.0,
    "referenceClose": 15615.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "688536.SH",
    "quoteSymbol": "688536.SS",
    "name": "思瑞浦",
    "market": "CN",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Analog and signal-chain ICs",
    "change": -3.74,
    "tags": [
      "analog"
    ],
    "priceStatus": "ok",
    "latestClose": 332.1199951171875,
    "referenceClose": 345.010009765625,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "asic",
    "sub": "Laser driver link",
    "role": "Optical chip supplier with upstream exposure",
    "change": -6.62,
    "tags": [
      "optical chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1659.22998046875,
    "referenceClose": 1776.9100341796875,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "2330.TW",
    "quoteSymbol": "2330.TW",
    "name": "台積電",
    "market": "TW",
    "segment": "sipic",
    "sub": "Foundry",
    "role": "Advanced-node and packaging platform for CPO ecosystem",
    "change": 4.49,
    "tags": [
      "foundry",
      "CoWoS"
    ],
    "priceStatus": "ok",
    "latestClose": 2445.0,
    "referenceClose": 2340.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "AVGO",
    "quoteSymbol": "AVGO",
    "name": "Broadcom",
    "market": "US",
    "segment": "sipic",
    "sub": "Co-packaged optics",
    "role": "CPO roadmap and switch silicon integration",
    "change": -4.87,
    "tags": [
      "CPO",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 360.45001220703125,
    "referenceClose": 378.9100036621094,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical I/O ecosystem",
    "role": "AI cluster architecture drives optical I/O demand",
    "change": -0.46,
    "tags": [
      "AI",
      "optical I/O"
    ],
    "priceStatus": "ok",
    "latestClose": 194.8300018310547,
    "referenceClose": 195.74000549316406,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical platform",
    "role": "DSP plus silicon photonics partnership ecosystem",
    "change": -12.79,
    "tags": [
      "DSP",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 245.2899932861328,
    "referenceClose": 281.260009765625,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "sipic",
    "sub": "Silicon photonics",
    "role": "Integrated silicon photonics and foundry capabilities",
    "change": -9.42,
    "tags": [
      "SiPh",
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 120.3499984741211,
    "referenceClose": 132.8699951171875,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Lasers, transceivers and optical engine building blocks",
    "change": -18.14,
    "tags": [
      "laser",
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 333.3599853515625,
    "referenceClose": 407.25,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Datacom lasers and optical components",
    "change": -15.51,
    "tags": [
      "laser",
      "datacom"
    ],
    "priceStatus": "ok",
    "latestClose": 728.3200073242188,
    "referenceClose": 861.969970703125,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "STM",
    "quoteSymbol": "STM",
    "name": "STMicro",
    "market": "EU",
    "segment": "sipic",
    "sub": "Photonics platform",
    "role": "Photonics and advanced semiconductor platform exposure",
    "change": -8.72,
    "tags": [
      "photonics"
    ],
    "priceStatus": "ok",
    "latestClose": 68.3499984741211,
    "referenceClose": 74.87999725341797,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "GFS",
    "quoteSymbol": "GFS",
    "name": "GlobalFoundries",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Silicon photonics and specialty process platform",
    "change": -18.9,
    "tags": [
      "foundry",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 69.83999633789062,
    "referenceClose": 86.12000274658203,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "TSEM",
    "quoteSymbol": "TSEM",
    "name": "Tower Semiconductor",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Analog, photonics and specialty manufacturing",
    "change": -18.83,
    "tags": [
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 219.0500030517578,
    "referenceClose": 269.8800048828125,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "sipic",
    "sub": "Optical systems",
    "role": "Photonic service engines and coherent optics",
    "change": -13.66,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 12.069999694824219,
    "referenceClose": 13.979999542236328,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "sipic",
    "sub": "Acacia optics",
    "role": "Coherent modules and optical interconnect roadmap",
    "change": -5.28,
    "tags": [
      "Acacia",
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 112.69000244140625,
    "referenceClose": 118.97000122070312,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "sipic",
    "sub": "Coherent optics",
    "role": "Coherent optical engine and network platforms",
    "change": -12.84,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 422.4599914550781,
    "referenceClose": 484.69000244140625,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "POET",
    "quoteSymbol": "POET",
    "name": "POET Technologies",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical interposer",
    "role": "Optical interposer platform for transceivers",
    "change": -13.52,
    "tags": [
      "interposer"
    ],
    "priceStatus": "ok",
    "latestClose": 8.760000228881836,
    "referenceClose": 10.130000114440918,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "LWLG",
    "quoteSymbol": "LWLG",
    "name": "Lightwave Logic",
    "market": "US",
    "segment": "sipic",
    "sub": "EO polymer",
    "role": "Electro-optic polymer material platform",
    "change": -9.68,
    "tags": [
      "material"
    ],
    "priceStatus": "ok",
    "latestClose": 7.369999885559082,
    "referenceClose": 8.15999984741211,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "4966.TWO",
    "quoteSymbol": "4966.TWO",
    "name": "譜瑞-KY",
    "market": "TW",
    "segment": "sipic",
    "sub": "High-speed interface",
    "role": "High-speed interface ICs and data transmission",
    "change": 7.57,
    "tags": [
      "interface"
    ],
    "priceStatus": "ok",
    "latestClose": 654.0,
    "referenceClose": 608.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "6789.TW",
    "quoteSymbol": "6789.TW",
    "name": "采鈺",
    "market": "TW",
    "segment": "sipic",
    "sub": "Optical process",
    "role": "Optical semiconductor process and sensor platform",
    "change": 7.32,
    "tags": [
      "process"
    ],
    "priceStatus": "ok",
    "latestClose": 528.0,
    "referenceClose": 492.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "688313.SH",
    "quoteSymbol": "688313.SS",
    "name": "仕佳光子",
    "market": "CN",
    "segment": "sipic",
    "sub": "PLC / optical chip",
    "role": "PLC splitter, AWG and optical chip supplier",
    "change": -11.76,
    "tags": [
      "PLC",
      "chip"
    ],
    "priceStatus": "ok",
    "latestClose": 158.57000732421875,
    "referenceClose": 179.6999969482422,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "laser",
    "sub": "Laser / InP",
    "role": "InP lasers, VCSELs, coherent and datacom components",
    "change": -18.14,
    "tags": [
      "InP",
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 333.3599853515625,
    "referenceClose": 407.25,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "laser",
    "sub": "Datacom laser",
    "role": "EML, DFB and high-speed datacom laser supply",
    "change": -15.51,
    "tags": [
      "EML",
      "DFB"
    ],
    "priceStatus": "ok",
    "latestClose": 728.3200073242188,
    "referenceClose": 861.969970703125,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "laser",
    "sub": "Laser driver / TIA",
    "role": "Laser drivers, TIAs and analog front-end",
    "change": -17.41,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 322.260009765625,
    "referenceClose": 390.19000244140625,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "IPGP",
    "quoteSymbol": "IPGP",
    "name": "IPG Photonics",
    "market": "US",
    "segment": "laser",
    "sub": "Fiber laser",
    "role": "Laser technology and optical components",
    "change": -4.5,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 105.2699966430664,
    "referenceClose": 110.2300033569336,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "AXTI",
    "quoteSymbol": "AXTI",
    "name": "AXT",
    "market": "US",
    "segment": "laser",
    "sub": "Substrate",
    "role": "Compound semiconductor substrates",
    "change": -18.01,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 56.619998931884766,
    "referenceClose": 69.05999755859375,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "IQE.L",
    "quoteSymbol": "IQE.L",
    "name": "IQE",
    "market": "EU",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "Compound semiconductor epitaxy wafers",
    "change": -4.17,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 44.849998474121094,
    "referenceClose": 46.79999923706055,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Compound semiconductor and optical components",
    "change": -10.72,
    "tags": [
      "InP",
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 2664.0,
    "referenceClose": 2983.75,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "6503.T",
    "quoteSymbol": "6503.T",
    "name": "三菱電機",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Optical devices, lasers and industrial electronics",
    "change": 1.47,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 5944.0,
    "referenceClose": 5858.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "6965.T",
    "quoteSymbol": "6965.T",
    "name": "浜松光子",
    "market": "JP",
    "segment": "laser",
    "sub": "Photonics",
    "role": "Photodetectors, optoelectronics and photonics devices",
    "change": 1.68,
    "tags": [
      "detector"
    ],
    "priceStatus": "ok",
    "latestClose": 2669.0,
    "referenceClose": 2625.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "AMS.SW",
    "quoteSymbol": "AMS.SW",
    "name": "ams OSRAM",
    "market": "EU",
    "segment": "laser",
    "sub": "Emitter",
    "role": "Emitters, sensors and photonics devices",
    "change": 15.22,
    "tags": [
      "emitter"
    ],
    "priceStatus": "ok",
    "latestClose": 20.059999465942383,
    "referenceClose": 17.40999984741211,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "3105.TWO",
    "quoteSymbol": "3105.TWO",
    "name": "穩懋",
    "market": "TW",
    "segment": "laser",
    "sub": "GaAs foundry",
    "role": "GaAs foundry with photonics-adjacent capabilities",
    "change": -3.07,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 411.0,
    "referenceClose": 424.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "3081.TWO",
    "quoteSymbol": "3081.TWO",
    "name": "聯亞",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "III-V epitaxy wafers for optical communications",
    "change": 3.19,
    "tags": [
      "epi",
      "III-V"
    ],
    "priceStatus": "ok",
    "latestClose": 2100.0,
    "referenceClose": 2035.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "2455.TW",
    "quoteSymbol": "2455.TW",
    "name": "全新",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "GaAs/InP epitaxy and compound semiconductor materials",
    "change": 2.87,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 358.0,
    "referenceClose": 348.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "8086.TWO",
    "quoteSymbol": "8086.TWO",
    "name": "宏捷科",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "GaAs foundry and compound semiconductor devices",
    "change": 2.13,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 144.0,
    "referenceClose": 141.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "4991.TWO",
    "quoteSymbol": "4991.TWO",
    "name": "環宇-KY",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "Compound semiconductor and optical device exposure",
    "change": 14.0,
    "tags": [
      "compound"
    ],
    "priceStatus": "ok",
    "latestClose": 578.0,
    "referenceClose": 507.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "laser",
    "sub": "Optical component",
    "role": "Optical communication components and modules",
    "change": 2.07,
    "tags": [
      "optical"
    ],
    "priceStatus": "ok",
    "latestClose": 468.5,
    "referenceClose": 459.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser chip",
    "role": "Optical communication laser chips",
    "change": -6.62,
    "tags": [
      "laser chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1659.22998046875,
    "referenceClose": 1776.9100341796875,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser / module",
    "role": "Laser equipment and optical communication products",
    "change": -4.34,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 153.9499969482422,
    "referenceClose": 160.94000244140625,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "APH",
    "quoteSymbol": "APH",
    "name": "Amphenol",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "High-speed interconnect and optical connector ecosystem",
    "change": -0.34,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 164.58999633789062,
    "referenceClose": 165.14999389648438,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "GLW",
    "quoteSymbol": "GLW",
    "name": "Corning",
    "market": "US",
    "segment": "component",
    "sub": "Fiber / glass",
    "role": "Optical fiber, glass and datacenter cabling",
    "change": -13.69,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 196.7899932861328,
    "referenceClose": 228.00999450683594,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "TEL",
    "quoteSymbol": "TEL",
    "name": "TE Connectivity",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "Connectors, cable assemblies and sensors",
    "change": -1.31,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 197.44000244140625,
    "referenceClose": 200.07000732421875,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers, modulators and optical subassemblies",
    "change": -18.14,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 333.3599853515625,
    "referenceClose": 407.25,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers and optical communication components",
    "change": -15.51,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 728.3200073242188,
    "referenceClose": 861.969970703125,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "component",
    "sub": "Manufacturing",
    "role": "Precision optical manufacturing and assembly",
    "change": -12.01,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 499.6099853515625,
    "referenceClose": 567.7899780273438,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "3711.TW",
    "quoteSymbol": "3711.TW",
    "name": "日月光投控",
    "market": "TW",
    "segment": "component",
    "sub": "Advanced packaging",
    "role": "Semiconductor packaging and system-in-package",
    "change": 7.91,
    "tags": [
      "packaging"
    ],
    "priceStatus": "ok",
    "latestClose": 682.0,
    "referenceClose": 632.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "2449.TW",
    "quoteSymbol": "2449.TW",
    "name": "京元電",
    "market": "TW",
    "segment": "component",
    "sub": "Test",
    "role": "IC testing services for high-speed chips",
    "change": 8.77,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 335.0,
    "referenceClose": 308.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "6515.TW",
    "quoteSymbol": "6515.TW",
    "name": "穎崴",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card / socket",
    "role": "High-speed test interface and sockets",
    "change": 20.88,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 9900.0,
    "referenceClose": 8190.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "6223.TWO",
    "quoteSymbol": "6223.TWO",
    "name": "旺矽",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card",
    "role": "Probe cards and testing interface",
    "change": 13.54,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 7380.0,
    "referenceClose": 6500.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "3037.TW",
    "quoteSymbol": "3037.TW",
    "name": "欣興",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and advanced PCB",
    "change": -0.62,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 969.0,
    "referenceClose": 975.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "3189.TW",
    "quoteSymbol": "3189.TW",
    "name": "景碩",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate supplier",
    "change": 4.52,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 833.0,
    "referenceClose": 797.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "8046.TW",
    "quoteSymbol": "8046.TW",
    "name": "南電",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and PCB",
    "change": 5.33,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1185.0,
    "referenceClose": 1125.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "2383.TW",
    "quoteSymbol": "2383.TW",
    "name": "台光電",
    "market": "TW",
    "segment": "component",
    "sub": "Copper clad laminate",
    "role": "High-speed CCL for AI servers and switches",
    "change": 15.7,
    "tags": [
      "CCL"
    ],
    "priceStatus": "ok",
    "latestClose": 6080.0,
    "referenceClose": 5255.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "component",
    "sub": "Connector / RF",
    "role": "Connectors and optical communication components",
    "change": -2.38,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 1640.0,
    "referenceClose": 1680.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "3363.TWO",
    "quoteSymbol": "3363.TWO",
    "name": "上詮",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber optic components and passive devices",
    "change": 1.04,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 581.0,
    "referenceClose": 575.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "component",
    "sub": "Optical subassembly",
    "role": "Optical communication subassemblies and packaging",
    "change": 0.0,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 530.0,
    "referenceClose": 530.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "6451.TW",
    "quoteSymbol": "6451.TW",
    "name": "訊芯-KY",
    "market": "TW",
    "segment": "component",
    "sub": "SiP / optical packaging",
    "role": "System-in-package and optical communication assembly",
    "change": -9.2,
    "tags": [
      "SiP"
    ],
    "priceStatus": "ok",
    "latestClose": 543.0,
    "referenceClose": 598.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber arrays, splitters and optical passive components",
    "change": 13.61,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 818.0,
    "referenceClose": 720.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical communication component supplier",
    "change": 3.78,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 87.80000305175781,
    "referenceClose": 84.5999984741211,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive components and precision parts",
    "change": -21.35,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 250.10000610351562,
    "referenceClose": 318.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "300548.SZ",
    "quoteSymbol": "300548.SZ",
    "name": "博創科技",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive and active components",
    "change": -15.85,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 221.00999450683594,
    "referenceClose": 262.6499938964844,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "601869.SH",
    "quoteSymbol": "601869.SS",
    "name": "長飛光纖",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber",
    "role": "Optical fiber and cable",
    "change": -12.51,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 475.0799865722656,
    "referenceClose": 543.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "600487.SH",
    "quoteSymbol": "600487.SS",
    "name": "亨通光電",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber cable and optical network products",
    "change": -19.3,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 89.41999816894531,
    "referenceClose": 110.80999755859375,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "5801.T",
    "quoteSymbol": "5801.T",
    "name": "古河電工",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Optical fiber, cable and network materials",
    "change": -11.66,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 4000.0,
    "referenceClose": 4528.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "5803.T",
    "quoteSymbol": "5803.T",
    "name": "藤倉",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber, cable and optical interconnect products",
    "change": -12.61,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 5358.0,
    "referenceClose": 6131.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "4062.T",
    "quoteSymbol": "4062.T",
    "name": "Ibiden",
    "market": "JP",
    "segment": "component",
    "sub": "Substrate",
    "role": "Advanced IC substrates",
    "change": -2.73,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 23345.0,
    "referenceClose": 24000.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom and telecom optical transceivers",
    "change": -18.14,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 333.3599853515625,
    "referenceClose": 407.25,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "module",
    "sub": "Laser / module",
    "role": "Laser engines and optical module supply",
    "change": -15.51,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 728.3200073242188,
    "referenceClose": 861.969970703125,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "module",
    "sub": "Optical manufacturing",
    "role": "Optical module contract manufacturing",
    "change": -12.01,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 499.6099853515625,
    "referenceClose": 567.7899780273438,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "module",
    "sub": "Coherent module",
    "role": "Coherent optical modules and transport platforms",
    "change": -12.84,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 422.4599914550781,
    "referenceClose": 484.69000244140625,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "module",
    "sub": "Acacia module",
    "role": "Acacia coherent optics and pluggable modules",
    "change": -5.28,
    "tags": [
      "Acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 112.69000244140625,
    "referenceClose": 118.97000122070312,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "module",
    "sub": "Optical module",
    "role": "Coherent optics and network system modules",
    "change": -13.66,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 12.069999694824219,
    "referenceClose": 13.979999542236328,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical communication modules and components",
    "change": 2.07,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 468.5,
    "referenceClose": 459.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "4977.TW",
    "quoteSymbol": "4977.TW",
    "name": "眾達-KY",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical transceiver supplier",
    "change": -1.52,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 162.0,
    "referenceClose": 164.5,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver component",
    "role": "Optical communication and connector products",
    "change": -2.38,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1640.0,
    "referenceClose": 1680.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "module",
    "sub": "OSA",
    "role": "Optical subassemblies for transceivers",
    "change": 0.0,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 530.0,
    "referenceClose": 530.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "module",
    "sub": "Passive optical",
    "role": "Fiber components used in modules",
    "change": 13.61,
    "tags": [
      "passive"
    ],
    "priceStatus": "ok",
    "latestClose": 818.0,
    "referenceClose": 720.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module exposure",
    "change": 3.78,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 87.80000305175781,
    "referenceClose": 84.5999984741211,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "4908.TWO",
    "quoteSymbol": "4908.TWO",
    "name": "前鼎",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module and equipment",
    "change": -2.16,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 181.0,
    "referenceClose": 185.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "300308.SZ",
    "quoteSymbol": "300308.SZ",
    "name": "中際旭創",
    "market": "CN",
    "segment": "module",
    "sub": "800G / 1.6T",
    "role": "High-speed optical transceiver leader",
    "change": -11.0,
    "tags": [
      "800G",
      "1.6T"
    ],
    "priceStatus": "ok",
    "latestClose": 1116.0,
    "referenceClose": 1253.8900146484375,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "300502.SZ",
    "quoteSymbol": "300502.SZ",
    "name": "新易盛",
    "market": "CN",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom optical transceivers",
    "change": -7.07,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 526.0,
    "referenceClose": 566.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "002281.SZ",
    "quoteSymbol": "002281.SZ",
    "name": "光迅科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical devices and modules",
    "change": -9.57,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 217.3300018310547,
    "referenceClose": 240.33999633789062,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "603083.SH",
    "quoteSymbol": "603083.SS",
    "name": "劍橋科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical modules and broadband equipment",
    "change": -14.86,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 209.3699951171875,
    "referenceClose": 245.9199981689453,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical engine parts",
    "role": "High-speed module precision components",
    "change": -21.35,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 250.10000610351562,
    "referenceClose": 318.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "688205.SH",
    "quoteSymbol": "688205.SS",
    "name": "德科立",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical transceiver modules",
    "change": -15.4,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 178.10000610351562,
    "referenceClose": 210.52000427246094,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication and laser products",
    "change": -4.34,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 153.9499969482422,
    "referenceClose": 160.94000244140625,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical network",
    "role": "Optical network systems and modules",
    "change": -18.77,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 61.90999984741211,
    "referenceClose": 76.22000122070312,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "module",
    "sub": "Optical device",
    "role": "Optical components and communication devices",
    "change": -10.72,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 2664.0,
    "referenceClose": 2983.75,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "ANET",
    "quoteSymbol": "ANET",
    "name": "Arista Networks",
    "market": "US",
    "segment": "system",
    "sub": "AI switch",
    "role": "AI datacenter Ethernet switches",
    "change": -3.3,
    "tags": [
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 159.99000549316406,
    "referenceClose": 165.4499969482422,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "system",
    "sub": "Switch / router",
    "role": "Enterprise and cloud networking systems",
    "change": -5.28,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 112.69000244140625,
    "referenceClose": 118.97000122070312,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "HPE",
    "quoteSymbol": "HPE",
    "name": "HPE",
    "market": "US",
    "segment": "system",
    "sub": "Server / networking",
    "role": "AI servers, networking and cloud infrastructure",
    "change": -11.75,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 41.22999954223633,
    "referenceClose": 46.720001220703125,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "DELL",
    "quoteSymbol": "DELL",
    "name": "Dell",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and enterprise infrastructure",
    "change": -3.7,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 394.32000732421875,
    "referenceClose": 409.45001220703125,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "SMCI",
    "quoteSymbol": "SMCI",
    "name": "Supermicro",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server platforms and rack-scale systems",
    "change": -14.08,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 27.219999313354492,
    "referenceClose": 31.68000030517578,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "CLS",
    "quoteSymbol": "CLS",
    "name": "Celestica",
    "market": "US",
    "segment": "system",
    "sub": "ODM / EMS",
    "role": "Cloud hardware and networking manufacturing",
    "change": -6.97,
    "tags": [
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 336.2099914550781,
    "referenceClose": 361.3999938964844,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "JBL",
    "quoteSymbol": "JBL",
    "name": "Jabil",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing for networking systems",
    "change": -8.9,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 341.29998779296875,
    "referenceClose": 374.6400146484375,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "FLEX",
    "quoteSymbol": "FLEX",
    "name": "Flex",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing and cloud hardware",
    "change": -15.14,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 136.86000061035156,
    "referenceClose": 161.27999877929688,
    "priceDate": "2026-07-02",
    "referenceDate": "2026-06-25"
  },
  {
    "ticker": "2345.TW",
    "quoteSymbol": "2345.TW",
    "name": "智邦",
    "market": "TW",
    "segment": "system",
    "sub": "Switch ODM",
    "role": "White-box switch and cloud networking ODM",
    "change": 14.92,
    "tags": [
      "switch",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 2735.0,
    "referenceClose": 2380.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "2382.TW",
    "quoteSymbol": "2382.TW",
    "name": "廣達",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and cloud infrastructure ODM",
    "change": 4.14,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 377.0,
    "referenceClose": 362.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "6669.TW",
    "quoteSymbol": "6669.TW",
    "name": "緯穎",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "Cloud datacenter server ODM",
    "change": 23.01,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 5265.0,
    "referenceClose": 4280.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "2317.TW",
    "quoteSymbol": "2317.TW",
    "name": "鴻海",
    "market": "TW",
    "segment": "system",
    "sub": "EMS / server",
    "role": "AI server and system assembly",
    "change": -3.22,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 240.5,
    "referenceClose": 248.5,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "2308.TW",
    "quoteSymbol": "2308.TW",
    "name": "台達電",
    "market": "TW",
    "segment": "system",
    "sub": "Power / thermal",
    "role": "Power, thermal and datacenter infrastructure",
    "change": 14.64,
    "tags": [
      "power",
      "thermal"
    ],
    "priceStatus": "ok",
    "latestClose": 2075.0,
    "referenceClose": 1810.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "3706.TW",
    "quoteSymbol": "3706.TW",
    "name": "神達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and datacenter system integration",
    "change": 8.98,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 91.0,
    "referenceClose": 83.5,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "3231.TW",
    "quoteSymbol": "3231.TW",
    "name": "緯創",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and system integration",
    "change": 3.92,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 159.0,
    "referenceClose": 153.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "2356.TW",
    "quoteSymbol": "2356.TW",
    "name": "英業達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and cloud equipment manufacturing",
    "change": 6.79,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 67.5999984741211,
    "referenceClose": 63.29999923706055,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "3380.TW",
    "quoteSymbol": "3380.TW",
    "name": "明泰",
    "market": "TW",
    "segment": "system",
    "sub": "Networking",
    "role": "Networking products and broadband equipment",
    "change": 14.29,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 36.0,
    "referenceClose": 31.5,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "6285.TW",
    "quoteSymbol": "6285.TW",
    "name": "啟碁",
    "market": "TW",
    "segment": "system",
    "sub": "Network device",
    "role": "Wireless and networking equipment",
    "change": 9.32,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 258.0,
    "referenceClose": 236.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "system",
    "sub": "Optical systems",
    "role": "Optical communication and laser systems",
    "change": -4.34,
    "tags": [
      "system"
    ],
    "priceStatus": "ok",
    "latestClose": 153.9499969482422,
    "referenceClose": 160.94000244140625,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "system",
    "sub": "Optical network",
    "role": "Optical transmission and network equipment",
    "change": -18.77,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 61.90999984741211,
    "referenceClose": 76.22000122070312,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "000063.SZ",
    "quoteSymbol": "000063.SZ",
    "name": "中興通訊",
    "market": "CN",
    "segment": "system",
    "sub": "Telecom equipment",
    "role": "Telecom and datacenter network equipment",
    "change": 1.99,
    "tags": [
      "telecom"
    ],
    "priceStatus": "ok",
    "latestClose": 36.380001068115234,
    "referenceClose": 35.66999816894531,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "6701.T",
    "quoteSymbol": "6701.T",
    "name": "NEC",
    "market": "JP",
    "segment": "system",
    "sub": "Network systems",
    "role": "Telecom, submarine and network systems",
    "change": 9.83,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 4168.0,
    "referenceClose": 3795.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  },
  {
    "ticker": "6702.T",
    "quoteSymbol": "6702.T",
    "name": "Fujitsu",
    "market": "JP",
    "segment": "system",
    "sub": "ICT systems",
    "role": "ICT infrastructure and network systems",
    "change": 3.97,
    "tags": [
      "ICT"
    ],
    "priceStatus": "ok",
    "latestClose": 3326.0,
    "referenceClose": 3199.0,
    "priceDate": "2026-07-03",
    "referenceDate": "2026-06-26"
  }
];

