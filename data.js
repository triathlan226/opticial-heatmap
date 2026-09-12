window.HEATMAP_META = {
  "title": "光通訊 / CPO 供應鏈熱力圖",
  "subtitle": "六大環節、跨市場上市公司、同公司可重複出現在多個供應鏈位置。",
  "lastUpdated": "2026-09-12",
  "dateRange": "2026-09-04 → 2026-09-11",
  "totalTiles": 126,
  "totalCompanies": 97,
  "quoteSymbolsUpdated": 97,
  "quoteSymbolsFailed": 0,
  "priceStatusCounts": {
    "ok": 126
  },
  "topGainer": {
    "ticker": "601869.SH",
    "name": "長飛光纖",
    "change": 25.13
  },
  "topLoser": {
    "ticker": "4979.TWO",
    "name": "華星光",
    "change": -15.58
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
    "change": 1.14,
    "tags": [
      "ASIC",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 361.989990234375,
    "referenceClose": 357.8999938964844,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "asic",
    "sub": "GPU / Network ASIC",
    "role": "GPU, NVLink, Spectrum-X ecosystem",
    "change": -5.24,
    "tags": [
      "GPU",
      "networking"
    ],
    "priceStatus": "ok",
    "latestClose": 218.2899932861328,
    "referenceClose": 230.36000061035156,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "asic",
    "sub": "DSP / PAM4",
    "role": "Optical DSP, custom silicon, DCI chips",
    "change": 5.61,
    "tags": [
      "DSP",
      "custom silicon"
    ],
    "priceStatus": "ok",
    "latestClose": 236.10000610351562,
    "referenceClose": 223.5500030517578,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "CRDO",
    "quoteSymbol": "CRDO",
    "name": "Credo",
    "market": "US",
    "segment": "asic",
    "sub": "Retimer / DSP",
    "role": "High-speed connectivity and optical DSP",
    "change": -4.47,
    "tags": [
      "DSP",
      "retimer"
    ],
    "priceStatus": "ok",
    "latestClose": 162.9499969482422,
    "referenceClose": 170.57000732421875,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "ALAB",
    "quoteSymbol": "ALAB",
    "name": "Astera Labs",
    "market": "US",
    "segment": "asic",
    "sub": "PCIe / CXL",
    "role": "AI data-center connectivity silicon",
    "change": -6.18,
    "tags": [
      "retimer",
      "CXL"
    ],
    "priceStatus": "ok",
    "latestClose": 291.2200012207031,
    "referenceClose": 310.3999938964844,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Laser drivers, TIAs, high-speed analog",
    "change": 2.21,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 274.8999938964844,
    "referenceClose": 268.95001220703125,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "SMTC",
    "quoteSymbol": "SMTC",
    "name": "Semtech",
    "market": "US",
    "segment": "asic",
    "sub": "Signal IC",
    "role": "Signal integrity and optical analog ICs",
    "change": 13.08,
    "tags": [
      "signal"
    ],
    "priceStatus": "ok",
    "latestClose": 167.24000549316406,
    "referenceClose": 147.88999938964844,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "asic",
    "sub": "Network silicon",
    "role": "Silicon One and Acacia optical stack",
    "change": 2.68,
    "tags": [
      "switch",
      "acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 112.12999725341797,
    "referenceClose": 109.19999694824219,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "asic",
    "sub": "Coherent DSP",
    "role": "WaveLogic coherent DSP and systems",
    "change": 8.89,
    "tags": [
      "coherent",
      "DSP"
    ],
    "priceStatus": "ok",
    "latestClose": 349.5400085449219,
    "referenceClose": 321.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "AMD",
    "quoteSymbol": "AMD",
    "name": "AMD",
    "market": "US",
    "segment": "asic",
    "sub": "AI accelerator",
    "role": "AI accelerators and adaptive compute",
    "change": 8.07,
    "tags": [
      "accelerator"
    ],
    "priceStatus": "ok",
    "latestClose": 516.1300048828125,
    "referenceClose": 477.57000732421875,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "asic",
    "sub": "Foundry / I/O",
    "role": "Foundry, Ethernet, historical silicon photonics",
    "change": 7.45,
    "tags": [
      "foundry",
      "ethernet"
    ],
    "priceStatus": "ok",
    "latestClose": 102.94000244140625,
    "referenceClose": 95.80000305175781,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "QCOM",
    "quoteSymbol": "QCOM",
    "name": "Qualcomm",
    "market": "US",
    "segment": "asic",
    "sub": "Connectivity IC",
    "role": "High-speed connectivity and edge AI silicon",
    "change": 7.84,
    "tags": [
      "connectivity"
    ],
    "priceStatus": "ok",
    "latestClose": 181.97000122070312,
    "referenceClose": 168.74000549316406,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "3661.TW",
    "quoteSymbol": "3661.TW",
    "name": "世芯-KY",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "Advanced-node custom ASIC design service",
    "change": -13.51,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 3650.0,
    "referenceClose": 4220.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "3443.TW",
    "quoteSymbol": "3443.TW",
    "name": "創意",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "GUC ASIC design and implementation",
    "change": 5.34,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 6120.0,
    "referenceClose": 5810.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "2454.TW",
    "quoteSymbol": "2454.TW",
    "name": "聯發科",
    "market": "TW",
    "segment": "asic",
    "sub": "Connectivity SoC",
    "role": "Networking, SerDes and edge AI chip exposure",
    "change": 3.85,
    "tags": [
      "SoC"
    ],
    "priceStatus": "ok",
    "latestClose": 4585.0,
    "referenceClose": 4415.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "5274.TWO",
    "quoteSymbol": "5274.TWO",
    "name": "信驊",
    "market": "TW",
    "segment": "asic",
    "sub": "BMC",
    "role": "Server management silicon",
    "change": 2.38,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 17885.0,
    "referenceClose": 17470.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "688536.SH",
    "quoteSymbol": "688536.SS",
    "name": "思瑞浦",
    "market": "CN",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Analog and signal-chain ICs",
    "change": 1.4,
    "tags": [
      "analog"
    ],
    "priceStatus": "ok",
    "latestClose": 297.0,
    "referenceClose": 292.8999938964844,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "asic",
    "sub": "Laser driver link",
    "role": "Optical chip supplier with upstream exposure",
    "change": 16.03,
    "tags": [
      "optical chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1701.0,
    "referenceClose": 1466.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "2330.TW",
    "quoteSymbol": "2330.TW",
    "name": "台積電",
    "market": "TW",
    "segment": "sipic",
    "sub": "Foundry",
    "role": "Advanced-node and packaging platform for CPO ecosystem",
    "change": 0.0,
    "tags": [
      "foundry",
      "CoWoS"
    ],
    "priceStatus": "ok",
    "latestClose": 2410.0,
    "referenceClose": 2410.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "AVGO",
    "quoteSymbol": "AVGO",
    "name": "Broadcom",
    "market": "US",
    "segment": "sipic",
    "sub": "Co-packaged optics",
    "role": "CPO roadmap and switch silicon integration",
    "change": 1.14,
    "tags": [
      "CPO",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 361.989990234375,
    "referenceClose": 357.8999938964844,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical I/O ecosystem",
    "role": "AI cluster architecture drives optical I/O demand",
    "change": -5.24,
    "tags": [
      "AI",
      "optical I/O"
    ],
    "priceStatus": "ok",
    "latestClose": 218.2899932861328,
    "referenceClose": 230.36000061035156,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical platform",
    "role": "DSP plus silicon photonics partnership ecosystem",
    "change": 5.61,
    "tags": [
      "DSP",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 236.10000610351562,
    "referenceClose": 223.5500030517578,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "sipic",
    "sub": "Silicon photonics",
    "role": "Integrated silicon photonics and foundry capabilities",
    "change": 7.45,
    "tags": [
      "SiPh",
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 102.94000244140625,
    "referenceClose": 95.80000305175781,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Lasers, transceivers and optical engine building blocks",
    "change": 8.34,
    "tags": [
      "laser",
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 305.3699951171875,
    "referenceClose": 281.8599853515625,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Datacom lasers and optical components",
    "change": 5.19,
    "tags": [
      "laser",
      "datacom"
    ],
    "priceStatus": "ok",
    "latestClose": 927.030029296875,
    "referenceClose": 881.2550048828125,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "STM",
    "quoteSymbol": "STM",
    "name": "STMicro",
    "market": "EU",
    "segment": "sipic",
    "sub": "Photonics platform",
    "role": "Photonics and advanced semiconductor platform exposure",
    "change": -1.4,
    "tags": [
      "photonics"
    ],
    "priceStatus": "ok",
    "latestClose": 51.5099983215332,
    "referenceClose": 52.2400016784668,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "GFS",
    "quoteSymbol": "GFS",
    "name": "GlobalFoundries",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Silicon photonics and specialty process platform",
    "change": 3.85,
    "tags": [
      "foundry",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 46.95000076293945,
    "referenceClose": 45.209999084472656,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "TSEM",
    "quoteSymbol": "TSEM",
    "name": "Tower Semiconductor",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Analog, photonics and specialty manufacturing",
    "change": -4.87,
    "tags": [
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 211.52000427246094,
    "referenceClose": 222.33999633789062,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "sipic",
    "sub": "Optical systems",
    "role": "Photonic service engines and coherent optics",
    "change": 10.97,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 11.130000114440918,
    "referenceClose": 10.029999732971191,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "sipic",
    "sub": "Acacia optics",
    "role": "Coherent modules and optical interconnect roadmap",
    "change": 2.68,
    "tags": [
      "Acacia",
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 112.12999725341797,
    "referenceClose": 109.19999694824219,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "sipic",
    "sub": "Coherent optics",
    "role": "Coherent optical engine and network platforms",
    "change": 8.89,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 349.5400085449219,
    "referenceClose": 321.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "POET",
    "quoteSymbol": "POET",
    "name": "POET Technologies",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical interposer",
    "role": "Optical interposer platform for transceivers",
    "change": 0.38,
    "tags": [
      "interposer"
    ],
    "priceStatus": "ok",
    "latestClose": 7.949999809265137,
    "referenceClose": 7.920000076293945,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "LWLG",
    "quoteSymbol": "LWLG",
    "name": "Lightwave Logic",
    "market": "US",
    "segment": "sipic",
    "sub": "EO polymer",
    "role": "Electro-optic polymer material platform",
    "change": -2.24,
    "tags": [
      "material"
    ],
    "priceStatus": "ok",
    "latestClose": 5.230000019073486,
    "referenceClose": 5.349999904632568,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "4966.TWO",
    "quoteSymbol": "4966.TWO",
    "name": "譜瑞-KY",
    "market": "TW",
    "segment": "sipic",
    "sub": "High-speed interface",
    "role": "High-speed interface ICs and data transmission",
    "change": -7.21,
    "tags": [
      "interface"
    ],
    "priceStatus": "ok",
    "latestClose": 528.0,
    "referenceClose": 569.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "6789.TW",
    "quoteSymbol": "6789.TW",
    "name": "采鈺",
    "market": "TW",
    "segment": "sipic",
    "sub": "Optical process",
    "role": "Optical semiconductor process and sensor platform",
    "change": -4.7,
    "tags": [
      "process"
    ],
    "priceStatus": "ok",
    "latestClose": 446.0,
    "referenceClose": 468.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "688313.SH",
    "quoteSymbol": "688313.SS",
    "name": "仕佳光子",
    "market": "CN",
    "segment": "sipic",
    "sub": "PLC / optical chip",
    "role": "PLC splitter, AWG and optical chip supplier",
    "change": 4.86,
    "tags": [
      "PLC",
      "chip"
    ],
    "priceStatus": "ok",
    "latestClose": 148.5,
    "referenceClose": 141.6199951171875,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "laser",
    "sub": "Laser / InP",
    "role": "InP lasers, VCSELs, coherent and datacom components",
    "change": 8.34,
    "tags": [
      "InP",
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 305.3699951171875,
    "referenceClose": 281.8599853515625,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "laser",
    "sub": "Datacom laser",
    "role": "EML, DFB and high-speed datacom laser supply",
    "change": 5.19,
    "tags": [
      "EML",
      "DFB"
    ],
    "priceStatus": "ok",
    "latestClose": 927.030029296875,
    "referenceClose": 881.2550048828125,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "laser",
    "sub": "Laser driver / TIA",
    "role": "Laser drivers, TIAs and analog front-end",
    "change": 2.21,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 274.8999938964844,
    "referenceClose": 268.95001220703125,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "IPGP",
    "quoteSymbol": "IPGP",
    "name": "IPG Photonics",
    "market": "US",
    "segment": "laser",
    "sub": "Fiber laser",
    "role": "Laser technology and optical components",
    "change": 2.55,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 79.98999786376953,
    "referenceClose": 78.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "AXTI",
    "quoteSymbol": "AXTI",
    "name": "AXT",
    "market": "US",
    "segment": "laser",
    "sub": "Substrate",
    "role": "Compound semiconductor substrates",
    "change": 5.08,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 64.7699966430664,
    "referenceClose": 61.63999938964844,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "IQE.L",
    "quoteSymbol": "IQE.L",
    "name": "IQE",
    "market": "EU",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "Compound semiconductor epitaxy wafers",
    "change": -6.32,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 44.45000076293945,
    "referenceClose": 47.45000076293945,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Compound semiconductor and optical components",
    "change": -2.6,
    "tags": [
      "InP",
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 2077.5,
    "referenceClose": 2133.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "6503.T",
    "quoteSymbol": "6503.T",
    "name": "三菱電機",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Optical devices, lasers and industrial electronics",
    "change": -4.21,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 5027.0,
    "referenceClose": 5248.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "6965.T",
    "quoteSymbol": "6965.T",
    "name": "浜松光子",
    "market": "JP",
    "segment": "laser",
    "sub": "Photonics",
    "role": "Photodetectors, optoelectronics and photonics devices",
    "change": -4.59,
    "tags": [
      "detector"
    ],
    "priceStatus": "ok",
    "latestClose": 2193.0,
    "referenceClose": 2298.5,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "AMS.SW",
    "quoteSymbol": "AMS.SW",
    "name": "ams OSRAM",
    "market": "EU",
    "segment": "laser",
    "sub": "Emitter",
    "role": "Emitters, sensors and photonics devices",
    "change": 0.88,
    "tags": [
      "emitter"
    ],
    "priceStatus": "ok",
    "latestClose": 18.25,
    "referenceClose": 18.09000015258789,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "3105.TWO",
    "quoteSymbol": "3105.TWO",
    "name": "穩懋",
    "market": "TW",
    "segment": "laser",
    "sub": "GaAs foundry",
    "role": "GaAs foundry with photonics-adjacent capabilities",
    "change": -2.67,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 437.5,
    "referenceClose": 449.5,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "3081.TWO",
    "quoteSymbol": "3081.TWO",
    "name": "聯亞",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "III-V epitaxy wafers for optical communications",
    "change": -11.36,
    "tags": [
      "epi",
      "III-V"
    ],
    "priceStatus": "ok",
    "latestClose": 2810.0,
    "referenceClose": 3170.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "2455.TW",
    "quoteSymbol": "2455.TW",
    "name": "全新",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "GaAs/InP epitaxy and compound semiconductor materials",
    "change": -2.46,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 515.0,
    "referenceClose": 528.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "8086.TWO",
    "quoteSymbol": "8086.TWO",
    "name": "宏捷科",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "GaAs foundry and compound semiconductor devices",
    "change": -5.78,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 106.0,
    "referenceClose": 112.5,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "4991.TWO",
    "quoteSymbol": "4991.TWO",
    "name": "環宇-KY",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "Compound semiconductor and optical device exposure",
    "change": -9.76,
    "tags": [
      "compound"
    ],
    "priceStatus": "ok",
    "latestClose": 448.5,
    "referenceClose": 497.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "laser",
    "sub": "Optical component",
    "role": "Optical communication components and modules",
    "change": -15.58,
    "tags": [
      "optical"
    ],
    "priceStatus": "ok",
    "latestClose": 531.0,
    "referenceClose": 629.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser chip",
    "role": "Optical communication laser chips",
    "change": 16.03,
    "tags": [
      "laser chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1701.0,
    "referenceClose": 1466.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser / module",
    "role": "Laser equipment and optical communication products",
    "change": 8.66,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 103.87999725341797,
    "referenceClose": 95.5999984741211,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "APH",
    "quoteSymbol": "APH",
    "name": "Amphenol",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "High-speed interconnect and optical connector ecosystem",
    "change": 1.38,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 83.91999816894531,
    "referenceClose": 82.77999877929688,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "GLW",
    "quoteSymbol": "GLW",
    "name": "Corning",
    "market": "US",
    "segment": "component",
    "sub": "Fiber / glass",
    "role": "Optical fiber, glass and datacenter cabling",
    "change": 7.84,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 166.39999389648438,
    "referenceClose": 154.3000030517578,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "TEL",
    "quoteSymbol": "TEL",
    "name": "TE Connectivity",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "Connectors, cable assemblies and sensors",
    "change": 1.59,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 211.9600067138672,
    "referenceClose": 208.64999389648438,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers, modulators and optical subassemblies",
    "change": 8.34,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 305.3699951171875,
    "referenceClose": 281.8599853515625,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers and optical communication components",
    "change": 5.19,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 927.030029296875,
    "referenceClose": 881.2550048828125,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "component",
    "sub": "Manufacturing",
    "role": "Precision optical manufacturing and assembly",
    "change": 1.76,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 414.5799865722656,
    "referenceClose": 407.3999938964844,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "3711.TW",
    "quoteSymbol": "3711.TW",
    "name": "日月光投控",
    "market": "TW",
    "segment": "component",
    "sub": "Advanced packaging",
    "role": "Semiconductor packaging and system-in-package",
    "change": 5.1,
    "tags": [
      "packaging"
    ],
    "priceStatus": "ok",
    "latestClose": 618.0,
    "referenceClose": 588.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "2449.TW",
    "quoteSymbol": "2449.TW",
    "name": "京元電",
    "market": "TW",
    "segment": "component",
    "sub": "Test",
    "role": "IC testing services for high-speed chips",
    "change": 0.38,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 263.0,
    "referenceClose": 262.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "6515.TW",
    "quoteSymbol": "6515.TW",
    "name": "穎崴",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card / socket",
    "role": "High-speed test interface and sockets",
    "change": -2.61,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 6890.0,
    "referenceClose": 7075.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "6223.TWO",
    "quoteSymbol": "6223.TWO",
    "name": "旺矽",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card",
    "role": "Probe cards and testing interface",
    "change": 9.02,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 5620.0,
    "referenceClose": 5155.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "3037.TW",
    "quoteSymbol": "3037.TW",
    "name": "欣興",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and advanced PCB",
    "change": 8.31,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 977.0,
    "referenceClose": 902.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "3189.TW",
    "quoteSymbol": "3189.TW",
    "name": "景碩",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate supplier",
    "change": 0.37,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 822.0,
    "referenceClose": 819.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "8046.TW",
    "quoteSymbol": "8046.TW",
    "name": "南電",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and PCB",
    "change": 2.37,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1080.0,
    "referenceClose": 1055.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "2383.TW",
    "quoteSymbol": "2383.TW",
    "name": "台光電",
    "market": "TW",
    "segment": "component",
    "sub": "Copper clad laminate",
    "role": "High-speed CCL for AI servers and switches",
    "change": -0.92,
    "tags": [
      "CCL"
    ],
    "priceStatus": "ok",
    "latestClose": 5365.0,
    "referenceClose": 5415.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "component",
    "sub": "Connector / RF",
    "role": "Connectors and optical communication components",
    "change": -4.84,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 1670.0,
    "referenceClose": 1755.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "3363.TWO",
    "quoteSymbol": "3363.TWO",
    "name": "上詮",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber optic components and passive devices",
    "change": -7.35,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 681.0,
    "referenceClose": 735.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "component",
    "sub": "Optical subassembly",
    "role": "Optical communication subassemblies and packaging",
    "change": -11.72,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 512.0,
    "referenceClose": 580.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "6451.TW",
    "quoteSymbol": "6451.TW",
    "name": "訊芯-KY",
    "market": "TW",
    "segment": "component",
    "sub": "SiP / optical packaging",
    "role": "System-in-package and optical communication assembly",
    "change": -8.8,
    "tags": [
      "SiP"
    ],
    "priceStatus": "ok",
    "latestClose": 409.5,
    "referenceClose": 449.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber arrays, splitters and optical passive components",
    "change": -13.55,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 670.0,
    "referenceClose": 775.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical communication component supplier",
    "change": -5.5,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 92.80000305175781,
    "referenceClose": 98.19999694824219,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive components and precision parts",
    "change": 5.33,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 261.9599914550781,
    "referenceClose": 248.6999969482422,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "300548.SZ",
    "quoteSymbol": "300548.SZ",
    "name": "博創科技",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive and active components",
    "change": 7.26,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 207.83999633789062,
    "referenceClose": 193.77999877929688,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "601869.SH",
    "quoteSymbol": "601869.SS",
    "name": "長飛光纖",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber",
    "role": "Optical fiber and cable",
    "change": 25.13,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 473.989990234375,
    "referenceClose": 378.79998779296875,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "600487.SH",
    "quoteSymbol": "600487.SS",
    "name": "亨通光電",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber cable and optical network products",
    "change": 4.85,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 65.23999786376953,
    "referenceClose": 62.220001220703125,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "5801.T",
    "quoteSymbol": "5801.T",
    "name": "古河電工",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Optical fiber, cable and network materials",
    "change": 3.56,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 3981.0,
    "referenceClose": 3844.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "5803.T",
    "quoteSymbol": "5803.T",
    "name": "藤倉",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber, cable and optical interconnect products",
    "change": -1.41,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 4982.0,
    "referenceClose": 5053.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "4062.T",
    "quoteSymbol": "4062.T",
    "name": "Ibiden",
    "market": "JP",
    "segment": "component",
    "sub": "Substrate",
    "role": "Advanced IC substrates",
    "change": -4.47,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 19560.0,
    "referenceClose": 20475.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom and telecom optical transceivers",
    "change": 8.34,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 305.3699951171875,
    "referenceClose": 281.8599853515625,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "module",
    "sub": "Laser / module",
    "role": "Laser engines and optical module supply",
    "change": 5.19,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 927.030029296875,
    "referenceClose": 881.2550048828125,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "module",
    "sub": "Optical manufacturing",
    "role": "Optical module contract manufacturing",
    "change": 1.76,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 414.5799865722656,
    "referenceClose": 407.3999938964844,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "module",
    "sub": "Coherent module",
    "role": "Coherent optical modules and transport platforms",
    "change": 8.89,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 349.5400085449219,
    "referenceClose": 321.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "module",
    "sub": "Acacia module",
    "role": "Acacia coherent optics and pluggable modules",
    "change": 2.68,
    "tags": [
      "Acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 112.12999725341797,
    "referenceClose": 109.19999694824219,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "module",
    "sub": "Optical module",
    "role": "Coherent optics and network system modules",
    "change": 10.97,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 11.130000114440918,
    "referenceClose": 10.029999732971191,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical communication modules and components",
    "change": -15.58,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 531.0,
    "referenceClose": 629.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "4977.TW",
    "quoteSymbol": "4977.TW",
    "name": "眾達-KY",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical transceiver supplier",
    "change": -5.41,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 175.0,
    "referenceClose": 185.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver component",
    "role": "Optical communication and connector products",
    "change": -4.84,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1670.0,
    "referenceClose": 1755.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "module",
    "sub": "OSA",
    "role": "Optical subassemblies for transceivers",
    "change": -11.72,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 512.0,
    "referenceClose": 580.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "module",
    "sub": "Passive optical",
    "role": "Fiber components used in modules",
    "change": -13.55,
    "tags": [
      "passive"
    ],
    "priceStatus": "ok",
    "latestClose": 670.0,
    "referenceClose": 775.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module exposure",
    "change": -5.5,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 92.80000305175781,
    "referenceClose": 98.19999694824219,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "4908.TWO",
    "quoteSymbol": "4908.TWO",
    "name": "前鼎",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module and equipment",
    "change": 5.79,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 237.5,
    "referenceClose": 224.5,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "300308.SZ",
    "quoteSymbol": "300308.SZ",
    "name": "中際旭創",
    "market": "CN",
    "segment": "module",
    "sub": "800G / 1.6T",
    "role": "High-speed optical transceiver leader",
    "change": 13.76,
    "tags": [
      "800G",
      "1.6T"
    ],
    "priceStatus": "ok",
    "latestClose": 926.0,
    "referenceClose": 814.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "300502.SZ",
    "quoteSymbol": "300502.SZ",
    "name": "新易盛",
    "market": "CN",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom optical transceivers",
    "change": 9.59,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 423.0,
    "referenceClose": 386.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "002281.SZ",
    "quoteSymbol": "002281.SZ",
    "name": "光迅科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical devices and modules",
    "change": 5.76,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 177.36000061035156,
    "referenceClose": 167.6999969482422,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "603083.SH",
    "quoteSymbol": "603083.SS",
    "name": "劍橋科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical modules and broadband equipment",
    "change": 19.16,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 224.4600067138672,
    "referenceClose": 188.3699951171875,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical engine parts",
    "role": "High-speed module precision components",
    "change": 5.33,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 261.9599914550781,
    "referenceClose": 248.6999969482422,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "688205.SH",
    "quoteSymbol": "688205.SS",
    "name": "德科立",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical transceiver modules",
    "change": 12.83,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 218.88999938964844,
    "referenceClose": 194.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication and laser products",
    "change": 8.66,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 103.87999725341797,
    "referenceClose": 95.5999984741211,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical network",
    "role": "Optical network systems and modules",
    "change": 7.8,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 40.75,
    "referenceClose": 37.79999923706055,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "module",
    "sub": "Optical device",
    "role": "Optical components and communication devices",
    "change": -2.6,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 2077.5,
    "referenceClose": 2133.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "ANET",
    "quoteSymbol": "ANET",
    "name": "Arista Networks",
    "market": "US",
    "segment": "system",
    "sub": "AI switch",
    "role": "AI datacenter Ethernet switches",
    "change": 3.0,
    "tags": [
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 199.58999633789062,
    "referenceClose": 193.77999877929688,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "system",
    "sub": "Switch / router",
    "role": "Enterprise and cloud networking systems",
    "change": 2.68,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 112.12999725341797,
    "referenceClose": 109.19999694824219,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "HPE",
    "quoteSymbol": "HPE",
    "name": "HPE",
    "market": "US",
    "segment": "system",
    "sub": "Server / networking",
    "role": "AI servers, networking and cloud infrastructure",
    "change": 19.4,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 62.09000015258789,
    "referenceClose": 52.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "DELL",
    "quoteSymbol": "DELL",
    "name": "Dell",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and enterprise infrastructure",
    "change": 8.23,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 567.2899780273438,
    "referenceClose": 524.1400146484375,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "SMCI",
    "quoteSymbol": "SMCI",
    "name": "Supermicro",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server platforms and rack-scale systems",
    "change": 1.29,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 40.099998474121094,
    "referenceClose": 39.59000015258789,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "CLS",
    "quoteSymbol": "CLS",
    "name": "Celestica",
    "market": "US",
    "segment": "system",
    "sub": "ODM / EMS",
    "role": "Cloud hardware and networking manufacturing",
    "change": 10.95,
    "tags": [
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 346.54998779296875,
    "referenceClose": 312.3500061035156,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "JBL",
    "quoteSymbol": "JBL",
    "name": "Jabil",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing for networking systems",
    "change": 2.42,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 318.0799865722656,
    "referenceClose": 310.57000732421875,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "FLEX",
    "quoteSymbol": "FLEX",
    "name": "Flex",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing and cloud hardware",
    "change": 5.73,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 115.77999877929688,
    "referenceClose": 109.51000213623047,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "2345.TW",
    "quoteSymbol": "2345.TW",
    "name": "智邦",
    "market": "TW",
    "segment": "system",
    "sub": "Switch ODM",
    "role": "White-box switch and cloud networking ODM",
    "change": -10.24,
    "tags": [
      "switch",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 1885.0,
    "referenceClose": 2100.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "2382.TW",
    "quoteSymbol": "2382.TW",
    "name": "廣達",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and cloud infrastructure ODM",
    "change": -2.46,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 336.5,
    "referenceClose": 345.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "6669.TW",
    "quoteSymbol": "6669.TW",
    "name": "緯穎",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "Cloud datacenter server ODM",
    "change": -9.94,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 2310.0,
    "referenceClose": 2565.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "2317.TW",
    "quoteSymbol": "2317.TW",
    "name": "鴻海",
    "market": "TW",
    "segment": "system",
    "sub": "EMS / server",
    "role": "AI server and system assembly",
    "change": -3.12,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 248.0,
    "referenceClose": 256.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "2308.TW",
    "quoteSymbol": "2308.TW",
    "name": "台達電",
    "market": "TW",
    "segment": "system",
    "sub": "Power / thermal",
    "role": "Power, thermal and datacenter infrastructure",
    "change": -11.23,
    "tags": [
      "power",
      "thermal"
    ],
    "priceStatus": "ok",
    "latestClose": 1620.0,
    "referenceClose": 1825.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "3706.TW",
    "quoteSymbol": "3706.TW",
    "name": "神達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and datacenter system integration",
    "change": -4.75,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 80.0999984741211,
    "referenceClose": 84.09091186523438,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "3231.TW",
    "quoteSymbol": "3231.TW",
    "name": "緯創",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and system integration",
    "change": -6.31,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 185.5,
    "referenceClose": 198.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "2356.TW",
    "quoteSymbol": "2356.TW",
    "name": "英業達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and cloud equipment manufacturing",
    "change": -8.15,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 62.0,
    "referenceClose": 67.5,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "3380.TW",
    "quoteSymbol": "3380.TW",
    "name": "明泰",
    "market": "TW",
    "segment": "system",
    "sub": "Networking",
    "role": "Networking products and broadband equipment",
    "change": 2.5,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 30.75,
    "referenceClose": 30.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "6285.TW",
    "quoteSymbol": "6285.TW",
    "name": "啟碁",
    "market": "TW",
    "segment": "system",
    "sub": "Network device",
    "role": "Wireless and networking equipment",
    "change": -8.62,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 222.5,
    "referenceClose": 243.5,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "system",
    "sub": "Optical systems",
    "role": "Optical communication and laser systems",
    "change": 8.66,
    "tags": [
      "system"
    ],
    "priceStatus": "ok",
    "latestClose": 103.87999725341797,
    "referenceClose": 95.5999984741211,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "system",
    "sub": "Optical network",
    "role": "Optical transmission and network equipment",
    "change": 7.8,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 40.75,
    "referenceClose": 37.79999923706055,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "000063.SZ",
    "quoteSymbol": "000063.SZ",
    "name": "中興通訊",
    "market": "CN",
    "segment": "system",
    "sub": "Telecom equipment",
    "role": "Telecom and datacenter network equipment",
    "change": -2.72,
    "tags": [
      "telecom"
    ],
    "priceStatus": "ok",
    "latestClose": 32.16999816894531,
    "referenceClose": 33.06999969482422,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "6701.T",
    "quoteSymbol": "6701.T",
    "name": "NEC",
    "market": "JP",
    "segment": "system",
    "sub": "Network systems",
    "role": "Telecom, submarine and network systems",
    "change": -6.05,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 4536.0,
    "referenceClose": 4828.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  },
  {
    "ticker": "6702.T",
    "quoteSymbol": "6702.T",
    "name": "Fujitsu",
    "market": "JP",
    "segment": "system",
    "sub": "ICT systems",
    "role": "ICT infrastructure and network systems",
    "change": -3.87,
    "tags": [
      "ICT"
    ],
    "priceStatus": "ok",
    "latestClose": 3749.0,
    "referenceClose": 3900.0,
    "priceDate": "2026-09-11",
    "referenceDate": "2026-09-04"
  }
];

