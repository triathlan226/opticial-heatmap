window.HEATMAP_META = {
  "title": "光通訊 / CPO 供應鏈熱力圖",
  "subtitle": "六大環節、跨市場上市公司、同公司可重複出現在多個供應鏈位置。",
  "lastUpdated": "2026-07-11",
  "dateRange": "2026-07-02 → 2026-07-10",
  "totalTiles": 126,
  "totalCompanies": 97,
  "quoteSymbolsUpdated": 97,
  "quoteSymbolsFailed": 0,
  "priceStatusCounts": {
    "ok": 126
  },
  "topGainer": {
    "ticker": "HPE",
    "name": "HPE",
    "change": 17.73
  },
  "topLoser": {
    "ticker": "6515.TW",
    "name": "穎崴",
    "change": -21.57
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
    "change": 10.96,
    "tags": [
      "ASIC",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 399.9700012207031,
    "referenceClose": 360.45001220703125,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "asic",
    "sub": "GPU / Network ASIC",
    "role": "GPU, NVLink, Spectrum-X ecosystem",
    "change": 8.28,
    "tags": [
      "GPU",
      "networking"
    ],
    "priceStatus": "ok",
    "latestClose": 210.9600067138672,
    "referenceClose": 194.8300018310547,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "asic",
    "sub": "DSP / PAM4",
    "role": "Optical DSP, custom silicon, DCI chips",
    "change": -3.86,
    "tags": [
      "DSP",
      "custom silicon"
    ],
    "priceStatus": "ok",
    "latestClose": 235.80999755859375,
    "referenceClose": 245.2899932861328,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "CRDO",
    "quoteSymbol": "CRDO",
    "name": "Credo",
    "market": "US",
    "segment": "asic",
    "sub": "Retimer / DSP",
    "role": "High-speed connectivity and optical DSP",
    "change": 6.56,
    "tags": [
      "DSP",
      "retimer"
    ],
    "priceStatus": "ok",
    "latestClose": 257.7900085449219,
    "referenceClose": 241.91000366210938,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "ALAB",
    "quoteSymbol": "ALAB",
    "name": "Astera Labs",
    "market": "US",
    "segment": "asic",
    "sub": "PCIe / CXL",
    "role": "AI data-center connectivity silicon",
    "change": 1.61,
    "tags": [
      "retimer",
      "CXL"
    ],
    "priceStatus": "ok",
    "latestClose": 412.9700012207031,
    "referenceClose": 406.4200134277344,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Laser drivers, TIAs, high-speed analog",
    "change": -4.26,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 308.5199890136719,
    "referenceClose": 322.260009765625,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "SMTC",
    "quoteSymbol": "SMTC",
    "name": "Semtech",
    "market": "US",
    "segment": "asic",
    "sub": "Signal IC",
    "role": "Signal integrity and optical analog ICs",
    "change": 0.64,
    "tags": [
      "signal"
    ],
    "priceStatus": "ok",
    "latestClose": 136.1300048828125,
    "referenceClose": 135.27000427246094,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "asic",
    "sub": "Network silicon",
    "role": "Silicon One and Acacia optical stack",
    "change": 7.65,
    "tags": [
      "switch",
      "acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 121.30999755859375,
    "referenceClose": 112.69000244140625,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "asic",
    "sub": "Coherent DSP",
    "role": "WaveLogic coherent DSP and systems",
    "change": 9.06,
    "tags": [
      "coherent",
      "DSP"
    ],
    "priceStatus": "ok",
    "latestClose": 460.7200012207031,
    "referenceClose": 422.4599914550781,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "AMD",
    "quoteSymbol": "AMD",
    "name": "AMD",
    "market": "US",
    "segment": "asic",
    "sub": "AI accelerator",
    "role": "AI accelerators and adaptive compute",
    "change": 7.74,
    "tags": [
      "accelerator"
    ],
    "priceStatus": "ok",
    "latestClose": 557.8900146484375,
    "referenceClose": 517.8200073242188,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "asic",
    "sub": "Foundry / I/O",
    "role": "Foundry, Ethernet, historical silicon photonics",
    "change": -8.73,
    "tags": [
      "foundry",
      "ethernet"
    ],
    "priceStatus": "ok",
    "latestClose": 109.83999633789062,
    "referenceClose": 120.3499984741211,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "QCOM",
    "quoteSymbol": "QCOM",
    "name": "Qualcomm",
    "market": "US",
    "segment": "asic",
    "sub": "Connectivity IC",
    "role": "High-speed connectivity and edge AI silicon",
    "change": 7.32,
    "tags": [
      "connectivity"
    ],
    "priceStatus": "ok",
    "latestClose": 189.16000366210938,
    "referenceClose": 176.25,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "3661.TW",
    "quoteSymbol": "3661.TW",
    "name": "世芯-KY",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "Advanced-node custom ASIC design service",
    "change": -9.46,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 4210.0,
    "referenceClose": 4650.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "3443.TW",
    "quoteSymbol": "3443.TW",
    "name": "創意",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "GUC ASIC design and implementation",
    "change": -13.89,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 4340.0,
    "referenceClose": 5040.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "2454.TW",
    "quoteSymbol": "2454.TW",
    "name": "聯發科",
    "market": "TW",
    "segment": "asic",
    "sub": "Connectivity SoC",
    "role": "Networking, SerDes and edge AI chip exposure",
    "change": -6.44,
    "tags": [
      "SoC"
    ],
    "priceStatus": "ok",
    "latestClose": 3925.0,
    "referenceClose": 4195.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "5274.TWO",
    "quoteSymbol": "5274.TWO",
    "name": "信驊",
    "market": "TW",
    "segment": "asic",
    "sub": "BMC",
    "role": "Server management silicon",
    "change": -12.94,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 13665.0,
    "referenceClose": 15695.4541015625,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "688536.SH",
    "quoteSymbol": "688536.SS",
    "name": "思瑞浦",
    "market": "CN",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Analog and signal-chain ICs",
    "change": -6.96,
    "tags": [
      "analog"
    ],
    "priceStatus": "ok",
    "latestClose": 309.0,
    "referenceClose": 332.1199951171875,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "asic",
    "sub": "Laser driver link",
    "role": "Optical chip supplier with upstream exposure",
    "change": -3.03,
    "tags": [
      "optical chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1609.0,
    "referenceClose": 1659.22998046875,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "2330.TW",
    "quoteSymbol": "2330.TW",
    "name": "台積電",
    "market": "TW",
    "segment": "sipic",
    "sub": "Foundry",
    "role": "Advanced-node and packaging platform for CPO ecosystem",
    "change": -1.23,
    "tags": [
      "foundry",
      "CoWoS"
    ],
    "priceStatus": "ok",
    "latestClose": 2415.0,
    "referenceClose": 2445.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "AVGO",
    "quoteSymbol": "AVGO",
    "name": "Broadcom",
    "market": "US",
    "segment": "sipic",
    "sub": "Co-packaged optics",
    "role": "CPO roadmap and switch silicon integration",
    "change": 10.96,
    "tags": [
      "CPO",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 399.9700012207031,
    "referenceClose": 360.45001220703125,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical I/O ecosystem",
    "role": "AI cluster architecture drives optical I/O demand",
    "change": 8.28,
    "tags": [
      "AI",
      "optical I/O"
    ],
    "priceStatus": "ok",
    "latestClose": 210.9600067138672,
    "referenceClose": 194.8300018310547,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical platform",
    "role": "DSP plus silicon photonics partnership ecosystem",
    "change": -3.86,
    "tags": [
      "DSP",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 235.80999755859375,
    "referenceClose": 245.2899932861328,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "sipic",
    "sub": "Silicon photonics",
    "role": "Integrated silicon photonics and foundry capabilities",
    "change": -8.73,
    "tags": [
      "SiPh",
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 109.83999633789062,
    "referenceClose": 120.3499984741211,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Lasers, transceivers and optical engine building blocks",
    "change": -2.66,
    "tags": [
      "laser",
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 324.5,
    "referenceClose": 333.3599853515625,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Datacom lasers and optical components",
    "change": 10.12,
    "tags": [
      "laser",
      "datacom"
    ],
    "priceStatus": "ok",
    "latestClose": 802.010009765625,
    "referenceClose": 728.3200073242188,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "STM",
    "quoteSymbol": "STM",
    "name": "STMicro",
    "market": "EU",
    "segment": "sipic",
    "sub": "Photonics platform",
    "role": "Photonics and advanced semiconductor platform exposure",
    "change": 4.55,
    "tags": [
      "photonics"
    ],
    "priceStatus": "ok",
    "latestClose": 71.45999908447266,
    "referenceClose": 68.3499984741211,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "GFS",
    "quoteSymbol": "GFS",
    "name": "GlobalFoundries",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Silicon photonics and specialty process platform",
    "change": -1.25,
    "tags": [
      "foundry",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 68.97000122070312,
    "referenceClose": 69.83999633789062,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "TSEM",
    "quoteSymbol": "TSEM",
    "name": "Tower Semiconductor",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Analog, photonics and specialty manufacturing",
    "change": 1.69,
    "tags": [
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 222.75,
    "referenceClose": 219.0500030517578,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "sipic",
    "sub": "Optical systems",
    "role": "Photonic service engines and coherent optics",
    "change": 3.07,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 12.4399995803833,
    "referenceClose": 12.069999694824219,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "sipic",
    "sub": "Acacia optics",
    "role": "Coherent modules and optical interconnect roadmap",
    "change": 7.65,
    "tags": [
      "Acacia",
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 121.30999755859375,
    "referenceClose": 112.69000244140625,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "sipic",
    "sub": "Coherent optics",
    "role": "Coherent optical engine and network platforms",
    "change": 9.06,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 460.7200012207031,
    "referenceClose": 422.4599914550781,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "POET",
    "quoteSymbol": "POET",
    "name": "POET Technologies",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical interposer",
    "role": "Optical interposer platform for transceivers",
    "change": -5.14,
    "tags": [
      "interposer"
    ],
    "priceStatus": "ok",
    "latestClose": 8.3100004196167,
    "referenceClose": 8.760000228881836,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "LWLG",
    "quoteSymbol": "LWLG",
    "name": "Lightwave Logic",
    "market": "US",
    "segment": "sipic",
    "sub": "EO polymer",
    "role": "Electro-optic polymer material platform",
    "change": -7.33,
    "tags": [
      "material"
    ],
    "priceStatus": "ok",
    "latestClose": 6.829999923706055,
    "referenceClose": 7.369999885559082,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "4966.TWO",
    "quoteSymbol": "4966.TWO",
    "name": "譜瑞-KY",
    "market": "TW",
    "segment": "sipic",
    "sub": "High-speed interface",
    "role": "High-speed interface ICs and data transmission",
    "change": 0.15,
    "tags": [
      "interface"
    ],
    "priceStatus": "ok",
    "latestClose": 655.0,
    "referenceClose": 654.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "6789.TW",
    "quoteSymbol": "6789.TW",
    "name": "采鈺",
    "market": "TW",
    "segment": "sipic",
    "sub": "Optical process",
    "role": "Optical semiconductor process and sensor platform",
    "change": -2.46,
    "tags": [
      "process"
    ],
    "priceStatus": "ok",
    "latestClose": 515.0,
    "referenceClose": 528.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "688313.SH",
    "quoteSymbol": "688313.SS",
    "name": "仕佳光子",
    "market": "CN",
    "segment": "sipic",
    "sub": "PLC / optical chip",
    "role": "PLC splitter, AWG and optical chip supplier",
    "change": -6.9,
    "tags": [
      "PLC",
      "chip"
    ],
    "priceStatus": "ok",
    "latestClose": 147.6300048828125,
    "referenceClose": 158.57000732421875,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "laser",
    "sub": "Laser / InP",
    "role": "InP lasers, VCSELs, coherent and datacom components",
    "change": -2.66,
    "tags": [
      "InP",
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 324.5,
    "referenceClose": 333.3599853515625,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "laser",
    "sub": "Datacom laser",
    "role": "EML, DFB and high-speed datacom laser supply",
    "change": 10.12,
    "tags": [
      "EML",
      "DFB"
    ],
    "priceStatus": "ok",
    "latestClose": 802.010009765625,
    "referenceClose": 728.3200073242188,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "laser",
    "sub": "Laser driver / TIA",
    "role": "Laser drivers, TIAs and analog front-end",
    "change": -4.26,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 308.5199890136719,
    "referenceClose": 322.260009765625,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "IPGP",
    "quoteSymbol": "IPGP",
    "name": "IPG Photonics",
    "market": "US",
    "segment": "laser",
    "sub": "Fiber laser",
    "role": "Laser technology and optical components",
    "change": 2.34,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 107.7300033569336,
    "referenceClose": 105.2699966430664,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "AXTI",
    "quoteSymbol": "AXTI",
    "name": "AXT",
    "market": "US",
    "segment": "laser",
    "sub": "Substrate",
    "role": "Compound semiconductor substrates",
    "change": 1.04,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 57.209999084472656,
    "referenceClose": 56.619998931884766,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "IQE.L",
    "quoteSymbol": "IQE.L",
    "name": "IQE",
    "market": "EU",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "Compound semiconductor epitaxy wafers",
    "change": -13.6,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 38.75,
    "referenceClose": 44.849998474121094,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Compound semiconductor and optical components",
    "change": -3.08,
    "tags": [
      "InP",
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 2582.0,
    "referenceClose": 2664.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "6503.T",
    "quoteSymbol": "6503.T",
    "name": "三菱電機",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Optical devices, lasers and industrial electronics",
    "change": -1.97,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 5827.0,
    "referenceClose": 5944.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "6965.T",
    "quoteSymbol": "6965.T",
    "name": "浜松光子",
    "market": "JP",
    "segment": "laser",
    "sub": "Photonics",
    "role": "Photodetectors, optoelectronics and photonics devices",
    "change": -6.01,
    "tags": [
      "detector"
    ],
    "priceStatus": "ok",
    "latestClose": 2508.5,
    "referenceClose": 2669.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "AMS.SW",
    "quoteSymbol": "AMS.SW",
    "name": "ams OSRAM",
    "market": "EU",
    "segment": "laser",
    "sub": "Emitter",
    "role": "Emitters, sensors and photonics devices",
    "change": -6.58,
    "tags": [
      "emitter"
    ],
    "priceStatus": "ok",
    "latestClose": 18.739999771118164,
    "referenceClose": 20.059999465942383,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "3105.TWO",
    "quoteSymbol": "3105.TWO",
    "name": "穩懋",
    "market": "TW",
    "segment": "laser",
    "sub": "GaAs foundry",
    "role": "GaAs foundry with photonics-adjacent capabilities",
    "change": -1.22,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 406.0,
    "referenceClose": 411.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "3081.TWO",
    "quoteSymbol": "3081.TWO",
    "name": "聯亞",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "III-V epitaxy wafers for optical communications",
    "change": -4.52,
    "tags": [
      "epi",
      "III-V"
    ],
    "priceStatus": "ok",
    "latestClose": 2005.0,
    "referenceClose": 2100.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "2455.TW",
    "quoteSymbol": "2455.TW",
    "name": "全新",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "GaAs/InP epitaxy and compound semiconductor materials",
    "change": -7.68,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 330.5,
    "referenceClose": 358.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "8086.TWO",
    "quoteSymbol": "8086.TWO",
    "name": "宏捷科",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "GaAs foundry and compound semiconductor devices",
    "change": -5.56,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 136.0,
    "referenceClose": 144.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "4991.TWO",
    "quoteSymbol": "4991.TWO",
    "name": "環宇-KY",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "Compound semiconductor and optical device exposure",
    "change": -20.16,
    "tags": [
      "compound"
    ],
    "priceStatus": "ok",
    "latestClose": 461.5,
    "referenceClose": 578.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "laser",
    "sub": "Optical component",
    "role": "Optical communication components and modules",
    "change": -7.68,
    "tags": [
      "optical"
    ],
    "priceStatus": "ok",
    "latestClose": 432.5,
    "referenceClose": 468.5,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser chip",
    "role": "Optical communication laser chips",
    "change": -3.03,
    "tags": [
      "laser chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1609.0,
    "referenceClose": 1659.22998046875,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser / module",
    "role": "Laser equipment and optical communication products",
    "change": 2.68,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 158.07000732421875,
    "referenceClose": 153.9499969482422,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "APH",
    "quoteSymbol": "APH",
    "name": "Amphenol",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "High-speed interconnect and optical connector ecosystem",
    "change": -3.36,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 159.05999755859375,
    "referenceClose": 164.58999633789062,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "GLW",
    "quoteSymbol": "GLW",
    "name": "Corning",
    "market": "US",
    "segment": "component",
    "sub": "Fiber / glass",
    "role": "Optical fiber, glass and datacenter cabling",
    "change": -3.0,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 190.88999938964844,
    "referenceClose": 196.7899932861328,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "TEL",
    "quoteSymbol": "TEL",
    "name": "TE Connectivity",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "Connectors, cable assemblies and sensors",
    "change": 1.48,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 200.36000061035156,
    "referenceClose": 197.44000244140625,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers, modulators and optical subassemblies",
    "change": -2.66,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 324.5,
    "referenceClose": 333.3599853515625,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers and optical communication components",
    "change": 10.12,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 802.010009765625,
    "referenceClose": 728.3200073242188,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "component",
    "sub": "Manufacturing",
    "role": "Precision optical manufacturing and assembly",
    "change": -5.7,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 471.1300048828125,
    "referenceClose": 499.6099853515625,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "3711.TW",
    "quoteSymbol": "3711.TW",
    "name": "日月光投控",
    "market": "TW",
    "segment": "component",
    "sub": "Advanced packaging",
    "role": "Semiconductor packaging and system-in-package",
    "change": -0.73,
    "tags": [
      "packaging"
    ],
    "priceStatus": "ok",
    "latestClose": 677.0,
    "referenceClose": 682.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "2449.TW",
    "quoteSymbol": "2449.TW",
    "name": "京元電",
    "market": "TW",
    "segment": "component",
    "sub": "Test",
    "role": "IC testing services for high-speed chips",
    "change": -7.91,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 308.5,
    "referenceClose": 335.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "6515.TW",
    "quoteSymbol": "6515.TW",
    "name": "穎崴",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card / socket",
    "role": "High-speed test interface and sockets",
    "change": -21.57,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 7765.0,
    "referenceClose": 9900.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "6223.TWO",
    "quoteSymbol": "6223.TWO",
    "name": "旺矽",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card",
    "role": "Probe cards and testing interface",
    "change": -4.07,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 7080.0,
    "referenceClose": 7380.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "3037.TW",
    "quoteSymbol": "3037.TW",
    "name": "欣興",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and advanced PCB",
    "change": -9.7,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 875.0,
    "referenceClose": 969.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "3189.TW",
    "quoteSymbol": "3189.TW",
    "name": "景碩",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate supplier",
    "change": -4.56,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 795.0,
    "referenceClose": 833.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "8046.TW",
    "quoteSymbol": "8046.TW",
    "name": "南電",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and PCB",
    "change": 2.53,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1215.0,
    "referenceClose": 1185.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "2383.TW",
    "quoteSymbol": "2383.TW",
    "name": "台光電",
    "market": "TW",
    "segment": "component",
    "sub": "Copper clad laminate",
    "role": "High-speed CCL for AI servers and switches",
    "change": -12.91,
    "tags": [
      "CCL"
    ],
    "priceStatus": "ok",
    "latestClose": 5295.0,
    "referenceClose": 6080.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "component",
    "sub": "Connector / RF",
    "role": "Connectors and optical communication components",
    "change": -9.76,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 1480.0,
    "referenceClose": 1640.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "3363.TWO",
    "quoteSymbol": "3363.TWO",
    "name": "上詮",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber optic components and passive devices",
    "change": 4.65,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 608.0,
    "referenceClose": 581.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "component",
    "sub": "Optical subassembly",
    "role": "Optical communication subassemblies and packaging",
    "change": -5.28,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 502.0,
    "referenceClose": 530.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "6451.TW",
    "quoteSymbol": "6451.TW",
    "name": "訊芯-KY",
    "market": "TW",
    "segment": "component",
    "sub": "SiP / optical packaging",
    "role": "System-in-package and optical communication assembly",
    "change": -4.6,
    "tags": [
      "SiP"
    ],
    "priceStatus": "ok",
    "latestClose": 518.0,
    "referenceClose": 543.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber arrays, splitters and optical passive components",
    "change": -8.8,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 746.0,
    "referenceClose": 818.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical communication component supplier",
    "change": -5.47,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 83.0,
    "referenceClose": 87.80000305175781,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive components and precision parts",
    "change": 8.4,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 271.1199951171875,
    "referenceClose": 250.10000610351562,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "300548.SZ",
    "quoteSymbol": "300548.SZ",
    "name": "博創科技",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive and active components",
    "change": 0.35,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 221.7899932861328,
    "referenceClose": 221.00999450683594,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "601869.SH",
    "quoteSymbol": "601869.SS",
    "name": "長飛光纖",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber",
    "role": "Optical fiber and cable",
    "change": -12.64,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 415.0299987792969,
    "referenceClose": 475.0799865722656,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "600487.SH",
    "quoteSymbol": "600487.SS",
    "name": "亨通光電",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber cable and optical network products",
    "change": -13.01,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 77.79000091552734,
    "referenceClose": 89.41999816894531,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "5801.T",
    "quoteSymbol": "5801.T",
    "name": "古河電工",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Optical fiber, cable and network materials",
    "change": -6.88,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 3725.0,
    "referenceClose": 4000.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "5803.T",
    "quoteSymbol": "5803.T",
    "name": "藤倉",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber, cable and optical interconnect products",
    "change": -3.88,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 5150.0,
    "referenceClose": 5358.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "4062.T",
    "quoteSymbol": "4062.T",
    "name": "Ibiden",
    "market": "JP",
    "segment": "component",
    "sub": "Substrate",
    "role": "Advanced IC substrates",
    "change": -13.04,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 20300.0,
    "referenceClose": 23345.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom and telecom optical transceivers",
    "change": -2.66,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 324.5,
    "referenceClose": 333.3599853515625,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "module",
    "sub": "Laser / module",
    "role": "Laser engines and optical module supply",
    "change": 10.12,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 802.010009765625,
    "referenceClose": 728.3200073242188,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "module",
    "sub": "Optical manufacturing",
    "role": "Optical module contract manufacturing",
    "change": -5.7,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 471.1300048828125,
    "referenceClose": 499.6099853515625,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "module",
    "sub": "Coherent module",
    "role": "Coherent optical modules and transport platforms",
    "change": 9.06,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 460.7200012207031,
    "referenceClose": 422.4599914550781,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "module",
    "sub": "Acacia module",
    "role": "Acacia coherent optics and pluggable modules",
    "change": 7.65,
    "tags": [
      "Acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 121.30999755859375,
    "referenceClose": 112.69000244140625,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "module",
    "sub": "Optical module",
    "role": "Coherent optics and network system modules",
    "change": 3.07,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 12.4399995803833,
    "referenceClose": 12.069999694824219,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical communication modules and components",
    "change": -7.68,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 432.5,
    "referenceClose": 468.5,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "4977.TW",
    "quoteSymbol": "4977.TW",
    "name": "眾達-KY",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical transceiver supplier",
    "change": -5.86,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 152.5,
    "referenceClose": 162.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver component",
    "role": "Optical communication and connector products",
    "change": -9.76,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1480.0,
    "referenceClose": 1640.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "module",
    "sub": "OSA",
    "role": "Optical subassemblies for transceivers",
    "change": -5.28,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 502.0,
    "referenceClose": 530.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "module",
    "sub": "Passive optical",
    "role": "Fiber components used in modules",
    "change": -8.8,
    "tags": [
      "passive"
    ],
    "priceStatus": "ok",
    "latestClose": 746.0,
    "referenceClose": 818.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module exposure",
    "change": -5.47,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 83.0,
    "referenceClose": 87.80000305175781,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "4908.TWO",
    "quoteSymbol": "4908.TWO",
    "name": "前鼎",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module and equipment",
    "change": -9.39,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 164.0,
    "referenceClose": 181.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "300308.SZ",
    "quoteSymbol": "300308.SZ",
    "name": "中際旭創",
    "market": "CN",
    "segment": "module",
    "sub": "800G / 1.6T",
    "role": "High-speed optical transceiver leader",
    "change": -1.97,
    "tags": [
      "800G",
      "1.6T"
    ],
    "priceStatus": "ok",
    "latestClose": 1093.97998046875,
    "referenceClose": 1116.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "300502.SZ",
    "quoteSymbol": "300502.SZ",
    "name": "新易盛",
    "market": "CN",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom optical transceivers",
    "change": -0.56,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 523.0499877929688,
    "referenceClose": 526.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "002281.SZ",
    "quoteSymbol": "002281.SZ",
    "name": "光迅科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical devices and modules",
    "change": 7.42,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 233.4499969482422,
    "referenceClose": 217.3300018310547,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "603083.SH",
    "quoteSymbol": "603083.SS",
    "name": "劍橋科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical modules and broadband equipment",
    "change": -4.91,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 199.08999633789062,
    "referenceClose": 209.3699951171875,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical engine parts",
    "role": "High-speed module precision components",
    "change": 8.4,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 271.1199951171875,
    "referenceClose": 250.10000610351562,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "688205.SH",
    "quoteSymbol": "688205.SS",
    "name": "德科立",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical transceiver modules",
    "change": -4.72,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 169.6999969482422,
    "referenceClose": 178.10000610351562,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication and laser products",
    "change": 2.68,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 158.07000732421875,
    "referenceClose": 153.9499969482422,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical network",
    "role": "Optical network systems and modules",
    "change": -8.14,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 56.869998931884766,
    "referenceClose": 61.90999984741211,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "module",
    "sub": "Optical device",
    "role": "Optical components and communication devices",
    "change": -3.08,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 2582.0,
    "referenceClose": 2664.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "ANET",
    "quoteSymbol": "ANET",
    "name": "Arista Networks",
    "market": "US",
    "segment": "system",
    "sub": "AI switch",
    "role": "AI datacenter Ethernet switches",
    "change": 16.86,
    "tags": [
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 186.9600067138672,
    "referenceClose": 159.99000549316406,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "system",
    "sub": "Switch / router",
    "role": "Enterprise and cloud networking systems",
    "change": 7.65,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 121.30999755859375,
    "referenceClose": 112.69000244140625,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "HPE",
    "quoteSymbol": "HPE",
    "name": "HPE",
    "market": "US",
    "segment": "system",
    "sub": "Server / networking",
    "role": "AI servers, networking and cloud infrastructure",
    "change": 17.73,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 48.540000915527344,
    "referenceClose": 41.22999954223633,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "DELL",
    "quoteSymbol": "DELL",
    "name": "Dell",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and enterprise infrastructure",
    "change": 10.31,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 434.9700012207031,
    "referenceClose": 394.32000732421875,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "SMCI",
    "quoteSymbol": "SMCI",
    "name": "Supermicro",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server platforms and rack-scale systems",
    "change": 4.0,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 28.309999465942383,
    "referenceClose": 27.219999313354492,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "CLS",
    "quoteSymbol": "CLS",
    "name": "Celestica",
    "market": "US",
    "segment": "system",
    "sub": "ODM / EMS",
    "role": "Cloud hardware and networking manufacturing",
    "change": 7.03,
    "tags": [
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 359.8500061035156,
    "referenceClose": 336.2099914550781,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "JBL",
    "quoteSymbol": "JBL",
    "name": "Jabil",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing for networking systems",
    "change": -3.23,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 330.2900085449219,
    "referenceClose": 341.29998779296875,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "FLEX",
    "quoteSymbol": "FLEX",
    "name": "Flex",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing and cloud hardware",
    "change": -0.77,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 135.8000030517578,
    "referenceClose": 136.86000061035156,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-02"
  },
  {
    "ticker": "2345.TW",
    "quoteSymbol": "2345.TW",
    "name": "智邦",
    "market": "TW",
    "segment": "system",
    "sub": "Switch ODM",
    "role": "White-box switch and cloud networking ODM",
    "change": -9.69,
    "tags": [
      "switch",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 2470.0,
    "referenceClose": 2735.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "2382.TW",
    "quoteSymbol": "2382.TW",
    "name": "廣達",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and cloud infrastructure ODM",
    "change": -0.93,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 373.5,
    "referenceClose": 377.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "6669.TW",
    "quoteSymbol": "6669.TW",
    "name": "緯穎",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "Cloud datacenter server ODM",
    "change": -4.27,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 5040.0,
    "referenceClose": 5265.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "2317.TW",
    "quoteSymbol": "2317.TW",
    "name": "鴻海",
    "market": "TW",
    "segment": "system",
    "sub": "EMS / server",
    "role": "AI server and system assembly",
    "change": -1.25,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 237.5,
    "referenceClose": 240.5,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "2308.TW",
    "quoteSymbol": "2308.TW",
    "name": "台達電",
    "market": "TW",
    "segment": "system",
    "sub": "Power / thermal",
    "role": "Power, thermal and datacenter infrastructure",
    "change": -9.4,
    "tags": [
      "power",
      "thermal"
    ],
    "priceStatus": "ok",
    "latestClose": 1880.0,
    "referenceClose": 2075.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "3706.TW",
    "quoteSymbol": "3706.TW",
    "name": "神達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and datacenter system integration",
    "change": -2.53,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 88.69999694824219,
    "referenceClose": 91.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "3231.TW",
    "quoteSymbol": "3231.TW",
    "name": "緯創",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and system integration",
    "change": -9.12,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 144.5,
    "referenceClose": 159.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "2356.TW",
    "quoteSymbol": "2356.TW",
    "name": "英業達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and cloud equipment manufacturing",
    "change": 3.25,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 69.80000305175781,
    "referenceClose": 67.5999984741211,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "3380.TW",
    "quoteSymbol": "3380.TW",
    "name": "明泰",
    "market": "TW",
    "segment": "system",
    "sub": "Networking",
    "role": "Networking products and broadband equipment",
    "change": -6.25,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 33.75,
    "referenceClose": 36.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "6285.TW",
    "quoteSymbol": "6285.TW",
    "name": "啟碁",
    "market": "TW",
    "segment": "system",
    "sub": "Network device",
    "role": "Wireless and networking equipment",
    "change": 0.97,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 260.5,
    "referenceClose": 258.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "system",
    "sub": "Optical systems",
    "role": "Optical communication and laser systems",
    "change": 2.68,
    "tags": [
      "system"
    ],
    "priceStatus": "ok",
    "latestClose": 158.07000732421875,
    "referenceClose": 153.9499969482422,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "system",
    "sub": "Optical network",
    "role": "Optical transmission and network equipment",
    "change": -8.14,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 56.869998931884766,
    "referenceClose": 61.90999984741211,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "000063.SZ",
    "quoteSymbol": "000063.SZ",
    "name": "中興通訊",
    "market": "CN",
    "segment": "system",
    "sub": "Telecom equipment",
    "role": "Telecom and datacenter network equipment",
    "change": 11.41,
    "tags": [
      "telecom"
    ],
    "priceStatus": "ok",
    "latestClose": 40.529998779296875,
    "referenceClose": 36.380001068115234,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "6701.T",
    "quoteSymbol": "6701.T",
    "name": "NEC",
    "market": "JP",
    "segment": "system",
    "sub": "Network systems",
    "role": "Telecom, submarine and network systems",
    "change": 3.96,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 4333.0,
    "referenceClose": 4168.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  },
  {
    "ticker": "6702.T",
    "quoteSymbol": "6702.T",
    "name": "Fujitsu",
    "market": "JP",
    "segment": "system",
    "sub": "ICT systems",
    "role": "ICT infrastructure and network systems",
    "change": 0.63,
    "tags": [
      "ICT"
    ],
    "priceStatus": "ok",
    "latestClose": 3347.0,
    "referenceClose": 3326.0,
    "priceDate": "2026-07-10",
    "referenceDate": "2026-07-03"
  }
];

