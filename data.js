window.HEATMAP_META = {
  "title": "光通訊 / CPO 供應鏈熱力圖",
  "subtitle": "六大環節、跨市場上市公司、同公司可重複出現在多個供應鏈位置。",
  "lastUpdated": "2026-10-03",
  "dateRange": "2026-09-23 → 2026-10-02",
  "totalTiles": 126,
  "totalCompanies": 97,
  "quoteSymbolsUpdated": 97,
  "quoteSymbolsFailed": 0,
  "priceStatusCounts": {
    "ok": 126
  },
  "topGainer": {
    "ticker": "AMS.SW",
    "name": "ams OSRAM",
    "change": 23.48
  },
  "topLoser": {
    "ticker": "600487.SH",
    "name": "亨通光電",
    "change": -21.56
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
    "change": 0.66,
    "tags": [
      "ASIC",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 355.1400146484375,
    "referenceClose": 352.80999755859375,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "asic",
    "sub": "GPU / Network ASIC",
    "role": "GPU, NVLink, Spectrum-X ecosystem",
    "change": 3.95,
    "tags": [
      "GPU",
      "networking"
    ],
    "priceStatus": "ok",
    "latestClose": 233.9499969482422,
    "referenceClose": 225.07000732421875,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "asic",
    "sub": "DSP / PAM4",
    "role": "Optical DSP, custom silicon, DCI chips",
    "change": 3.95,
    "tags": [
      "DSP",
      "custom silicon"
    ],
    "priceStatus": "ok",
    "latestClose": 272.2900085449219,
    "referenceClose": 261.94000244140625,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "CRDO",
    "quoteSymbol": "CRDO",
    "name": "Credo",
    "market": "US",
    "segment": "asic",
    "sub": "Retimer / DSP",
    "role": "High-speed connectivity and optical DSP",
    "change": 3.64,
    "tags": [
      "DSP",
      "retimer"
    ],
    "priceStatus": "ok",
    "latestClose": 218.63999938964844,
    "referenceClose": 210.97000122070312,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "ALAB",
    "quoteSymbol": "ALAB",
    "name": "Astera Labs",
    "market": "US",
    "segment": "asic",
    "sub": "PCIe / CXL",
    "role": "AI data-center connectivity silicon",
    "change": -3.92,
    "tags": [
      "retimer",
      "CXL"
    ],
    "priceStatus": "ok",
    "latestClose": 350.3299865722656,
    "referenceClose": 364.6199951171875,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Laser drivers, TIAs, high-speed analog",
    "change": 12.62,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 321.6000061035156,
    "referenceClose": 285.57000732421875,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "SMTC",
    "quoteSymbol": "SMTC",
    "name": "Semtech",
    "market": "US",
    "segment": "asic",
    "sub": "Signal IC",
    "role": "Signal integrity and optical analog ICs",
    "change": 6.9,
    "tags": [
      "signal"
    ],
    "priceStatus": "ok",
    "latestClose": 194.8800048828125,
    "referenceClose": 182.3000030517578,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "asic",
    "sub": "Network silicon",
    "role": "Silicon One and Acacia optical stack",
    "change": 5.15,
    "tags": [
      "switch",
      "acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 112.19999694824219,
    "referenceClose": 106.69999694824219,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "asic",
    "sub": "Coherent DSP",
    "role": "WaveLogic coherent DSP and systems",
    "change": 9.65,
    "tags": [
      "coherent",
      "DSP"
    ],
    "priceStatus": "ok",
    "latestClose": 391.3399963378906,
    "referenceClose": 356.9100036621094,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "AMD",
    "quoteSymbol": "AMD",
    "name": "AMD",
    "market": "US",
    "segment": "asic",
    "sub": "AI accelerator",
    "role": "AI accelerators and adaptive compute",
    "change": 0.52,
    "tags": [
      "accelerator"
    ],
    "priceStatus": "ok",
    "latestClose": 633.9099731445312,
    "referenceClose": 630.6300048828125,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "asic",
    "sub": "Foundry / I/O",
    "role": "Foundry, Ethernet, historical silicon photonics",
    "change": -2.98,
    "tags": [
      "foundry",
      "ethernet"
    ],
    "priceStatus": "ok",
    "latestClose": 119.33000183105469,
    "referenceClose": 123.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "QCOM",
    "quoteSymbol": "QCOM",
    "name": "Qualcomm",
    "market": "US",
    "segment": "asic",
    "sub": "Connectivity IC",
    "role": "High-speed connectivity and edge AI silicon",
    "change": -8.47,
    "tags": [
      "connectivity"
    ],
    "priceStatus": "ok",
    "latestClose": 184.8699951171875,
    "referenceClose": 201.97000122070312,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "3661.TW",
    "quoteSymbol": "3661.TW",
    "name": "世芯-KY",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "Advanced-node custom ASIC design service",
    "change": 1.06,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 3810.0,
    "referenceClose": 3770.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "3443.TW",
    "quoteSymbol": "3443.TW",
    "name": "創意",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "GUC ASIC design and implementation",
    "change": -7.33,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 7900.0,
    "referenceClose": 8525.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "2454.TW",
    "quoteSymbol": "2454.TW",
    "name": "聯發科",
    "market": "TW",
    "segment": "asic",
    "sub": "Connectivity SoC",
    "role": "Networking, SerDes and edge AI chip exposure",
    "change": -6.34,
    "tags": [
      "SoC"
    ],
    "priceStatus": "ok",
    "latestClose": 4950.0,
    "referenceClose": 5285.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "5274.TWO",
    "quoteSymbol": "5274.TWO",
    "name": "信驊",
    "market": "TW",
    "segment": "asic",
    "sub": "BMC",
    "role": "Server management silicon",
    "change": -5.02,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 18840.0,
    "referenceClose": 19835.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "688536.SH",
    "quoteSymbol": "688536.SS",
    "name": "思瑞浦",
    "market": "CN",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Analog and signal-chain ICs",
    "change": -8.65,
    "tags": [
      "analog"
    ],
    "priceStatus": "ok",
    "latestClose": 327.0,
    "referenceClose": 357.9700012207031,
    "priceDate": "2026-09-30",
    "referenceDate": "2026-09-23"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "asic",
    "sub": "Laser driver link",
    "role": "Optical chip supplier with upstream exposure",
    "change": -7.03,
    "tags": [
      "optical chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1613.0,
    "referenceClose": 1734.97998046875,
    "priceDate": "2026-09-30",
    "referenceDate": "2026-09-23"
  },
  {
    "ticker": "2330.TW",
    "quoteSymbol": "2330.TW",
    "name": "台積電",
    "market": "TW",
    "segment": "sipic",
    "sub": "Foundry",
    "role": "Advanced-node and packaging platform for CPO ecosystem",
    "change": 1.01,
    "tags": [
      "foundry",
      "CoWoS"
    ],
    "priceStatus": "ok",
    "latestClose": 2500.0,
    "referenceClose": 2475.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "AVGO",
    "quoteSymbol": "AVGO",
    "name": "Broadcom",
    "market": "US",
    "segment": "sipic",
    "sub": "Co-packaged optics",
    "role": "CPO roadmap and switch silicon integration",
    "change": 0.66,
    "tags": [
      "CPO",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 355.1400146484375,
    "referenceClose": 352.80999755859375,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical I/O ecosystem",
    "role": "AI cluster architecture drives optical I/O demand",
    "change": 3.95,
    "tags": [
      "AI",
      "optical I/O"
    ],
    "priceStatus": "ok",
    "latestClose": 233.9499969482422,
    "referenceClose": 225.07000732421875,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical platform",
    "role": "DSP plus silicon photonics partnership ecosystem",
    "change": 3.95,
    "tags": [
      "DSP",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 272.2900085449219,
    "referenceClose": 261.94000244140625,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "sipic",
    "sub": "Silicon photonics",
    "role": "Integrated silicon photonics and foundry capabilities",
    "change": -2.98,
    "tags": [
      "SiPh",
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 119.33000183105469,
    "referenceClose": 123.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Lasers, transceivers and optical engine building blocks",
    "change": 13.93,
    "tags": [
      "laser",
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 337.0400085449219,
    "referenceClose": 295.8299865722656,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Datacom lasers and optical components",
    "change": 15.27,
    "tags": [
      "laser",
      "datacom"
    ],
    "priceStatus": "ok",
    "latestClose": 1085.4200439453125,
    "referenceClose": 941.6500244140625,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "STM",
    "quoteSymbol": "STM",
    "name": "STMicro",
    "market": "EU",
    "segment": "sipic",
    "sub": "Photonics platform",
    "role": "Photonics and advanced semiconductor platform exposure",
    "change": 10.26,
    "tags": [
      "photonics"
    ],
    "priceStatus": "ok",
    "latestClose": 57.2599983215332,
    "referenceClose": 51.93000030517578,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "GFS",
    "quoteSymbol": "GFS",
    "name": "GlobalFoundries",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Silicon photonics and specialty process platform",
    "change": 2.39,
    "tags": [
      "foundry",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 50.16999816894531,
    "referenceClose": 49.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "TSEM",
    "quoteSymbol": "TSEM",
    "name": "Tower Semiconductor",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Analog, photonics and specialty manufacturing",
    "change": 4.51,
    "tags": [
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 240.86000061035156,
    "referenceClose": 230.47000122070312,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "sipic",
    "sub": "Optical systems",
    "role": "Photonic service engines and coherent optics",
    "change": 2.02,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 10.600000381469727,
    "referenceClose": 10.390000343322754,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "sipic",
    "sub": "Acacia optics",
    "role": "Coherent modules and optical interconnect roadmap",
    "change": 5.15,
    "tags": [
      "Acacia",
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 112.19999694824219,
    "referenceClose": 106.69999694824219,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "sipic",
    "sub": "Coherent optics",
    "role": "Coherent optical engine and network platforms",
    "change": 9.65,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 391.3399963378906,
    "referenceClose": 356.9100036621094,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "POET",
    "quoteSymbol": "POET",
    "name": "POET Technologies",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical interposer",
    "role": "Optical interposer platform for transceivers",
    "change": 0.26,
    "tags": [
      "interposer"
    ],
    "priceStatus": "ok",
    "latestClose": 7.789999961853027,
    "referenceClose": 7.769999980926514,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "LWLG",
    "quoteSymbol": "LWLG",
    "name": "Lightwave Logic",
    "market": "US",
    "segment": "sipic",
    "sub": "EO polymer",
    "role": "Electro-optic polymer material platform",
    "change": 7.34,
    "tags": [
      "material"
    ],
    "priceStatus": "ok",
    "latestClose": 5.699999809265137,
    "referenceClose": 5.309999942779541,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "4966.TWO",
    "quoteSymbol": "4966.TWO",
    "name": "譜瑞-KY",
    "market": "TW",
    "segment": "sipic",
    "sub": "High-speed interface",
    "role": "High-speed interface ICs and data transmission",
    "change": 0.35,
    "tags": [
      "interface"
    ],
    "priceStatus": "ok",
    "latestClose": 574.0,
    "referenceClose": 572.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "6789.TW",
    "quoteSymbol": "6789.TW",
    "name": "采鈺",
    "market": "TW",
    "segment": "sipic",
    "sub": "Optical process",
    "role": "Optical semiconductor process and sensor platform",
    "change": 5.37,
    "tags": [
      "process"
    ],
    "priceStatus": "ok",
    "latestClose": 490.5,
    "referenceClose": 465.5,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "688313.SH",
    "quoteSymbol": "688313.SS",
    "name": "仕佳光子",
    "market": "CN",
    "segment": "sipic",
    "sub": "PLC / optical chip",
    "role": "PLC splitter, AWG and optical chip supplier",
    "change": -5.62,
    "tags": [
      "PLC",
      "chip"
    ],
    "priceStatus": "ok",
    "latestClose": 154.47999572753906,
    "referenceClose": 163.67999267578125,
    "priceDate": "2026-09-30",
    "referenceDate": "2026-09-23"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "laser",
    "sub": "Laser / InP",
    "role": "InP lasers, VCSELs, coherent and datacom components",
    "change": 13.93,
    "tags": [
      "InP",
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 337.0400085449219,
    "referenceClose": 295.8299865722656,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "laser",
    "sub": "Datacom laser",
    "role": "EML, DFB and high-speed datacom laser supply",
    "change": 15.27,
    "tags": [
      "EML",
      "DFB"
    ],
    "priceStatus": "ok",
    "latestClose": 1085.4200439453125,
    "referenceClose": 941.6500244140625,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "laser",
    "sub": "Laser driver / TIA",
    "role": "Laser drivers, TIAs and analog front-end",
    "change": 12.62,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 321.6000061035156,
    "referenceClose": 285.57000732421875,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "IPGP",
    "quoteSymbol": "IPGP",
    "name": "IPG Photonics",
    "market": "US",
    "segment": "laser",
    "sub": "Fiber laser",
    "role": "Laser technology and optical components",
    "change": 7.59,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 84.05000305175781,
    "referenceClose": 78.12000274658203,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "AXTI",
    "quoteSymbol": "AXTI",
    "name": "AXT",
    "market": "US",
    "segment": "laser",
    "sub": "Substrate",
    "role": "Compound semiconductor substrates",
    "change": 8.78,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 85.87000274658203,
    "referenceClose": 78.94000244140625,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "IQE.L",
    "quoteSymbol": "IQE.L",
    "name": "IQE",
    "market": "EU",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "Compound semiconductor epitaxy wafers",
    "change": 18.1,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 54.79999923706055,
    "referenceClose": 46.400001525878906,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Compound semiconductor and optical components",
    "change": 10.9,
    "tags": [
      "InP",
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 2452.0,
    "referenceClose": 2211.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "6503.T",
    "quoteSymbol": "6503.T",
    "name": "三菱電機",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Optical devices, lasers and industrial electronics",
    "change": 0.48,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 5264.0,
    "referenceClose": 5239.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "6965.T",
    "quoteSymbol": "6965.T",
    "name": "浜松光子",
    "market": "JP",
    "segment": "laser",
    "sub": "Photonics",
    "role": "Photodetectors, optoelectronics and photonics devices",
    "change": 1.99,
    "tags": [
      "detector"
    ],
    "priceStatus": "ok",
    "latestClose": 2389.0,
    "referenceClose": 2342.5,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "AMS.SW",
    "quoteSymbol": "AMS.SW",
    "name": "ams OSRAM",
    "market": "EU",
    "segment": "laser",
    "sub": "Emitter",
    "role": "Emitters, sensors and photonics devices",
    "change": 23.48,
    "tags": [
      "emitter"
    ],
    "priceStatus": "ok",
    "latestClose": 24.81999969482422,
    "referenceClose": 20.100000381469727,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "3105.TWO",
    "quoteSymbol": "3105.TWO",
    "name": "穩懋",
    "market": "TW",
    "segment": "laser",
    "sub": "GaAs foundry",
    "role": "GaAs foundry with photonics-adjacent capabilities",
    "change": 17.73,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 591.0,
    "referenceClose": 502.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "3081.TWO",
    "quoteSymbol": "3081.TWO",
    "name": "聯亞",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "III-V epitaxy wafers for optical communications",
    "change": 8.33,
    "tags": [
      "epi",
      "III-V"
    ],
    "priceStatus": "ok",
    "latestClose": 2925.0,
    "referenceClose": 2700.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "2455.TW",
    "quoteSymbol": "2455.TW",
    "name": "全新",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "GaAs/InP epitaxy and compound semiconductor materials",
    "change": 4.69,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 580.0,
    "referenceClose": 554.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "8086.TWO",
    "quoteSymbol": "8086.TWO",
    "name": "宏捷科",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "GaAs foundry and compound semiconductor devices",
    "change": 8.6,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 120.0,
    "referenceClose": 110.5,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "4991.TWO",
    "quoteSymbol": "4991.TWO",
    "name": "環宇-KY",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "Compound semiconductor and optical device exposure",
    "change": 15.21,
    "tags": [
      "compound"
    ],
    "priceStatus": "ok",
    "latestClose": 534.0,
    "referenceClose": 463.5,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "laser",
    "sub": "Optical component",
    "role": "Optical communication components and modules",
    "change": 3.91,
    "tags": [
      "optical"
    ],
    "priceStatus": "ok",
    "latestClose": 585.0,
    "referenceClose": 563.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser chip",
    "role": "Optical communication laser chips",
    "change": -7.03,
    "tags": [
      "laser chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1613.0,
    "referenceClose": 1734.97998046875,
    "priceDate": "2026-09-30",
    "referenceDate": "2026-09-23"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser / module",
    "role": "Laser equipment and optical communication products",
    "change": -13.02,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 92.25,
    "referenceClose": 106.05999755859375,
    "priceDate": "2026-09-30",
    "referenceDate": "2026-09-23"
  },
  {
    "ticker": "APH",
    "quoteSymbol": "APH",
    "name": "Amphenol",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "High-speed interconnect and optical connector ecosystem",
    "change": 3.41,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 86.95999908447266,
    "referenceClose": 84.08999633789062,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "GLW",
    "quoteSymbol": "GLW",
    "name": "Corning",
    "market": "US",
    "segment": "component",
    "sub": "Fiber / glass",
    "role": "Optical fiber, glass and datacenter cabling",
    "change": 4.75,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 164.19000244140625,
    "referenceClose": 156.74000549316406,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "TEL",
    "quoteSymbol": "TEL",
    "name": "TE Connectivity",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "Connectors, cable assemblies and sensors",
    "change": 0.81,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 220.36000061035156,
    "referenceClose": 218.58999633789062,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers, modulators and optical subassemblies",
    "change": 13.93,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 337.0400085449219,
    "referenceClose": 295.8299865722656,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers and optical communication components",
    "change": 15.27,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 1085.4200439453125,
    "referenceClose": 941.6500244140625,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "component",
    "sub": "Manufacturing",
    "role": "Precision optical manufacturing and assembly",
    "change": 11.09,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 463.69000244140625,
    "referenceClose": 417.3900146484375,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "3711.TW",
    "quoteSymbol": "3711.TW",
    "name": "日月光投控",
    "market": "TW",
    "segment": "component",
    "sub": "Advanced packaging",
    "role": "Semiconductor packaging and system-in-package",
    "change": 2.0,
    "tags": [
      "packaging"
    ],
    "priceStatus": "ok",
    "latestClose": 713.0,
    "referenceClose": 699.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "2449.TW",
    "quoteSymbol": "2449.TW",
    "name": "京元電",
    "market": "TW",
    "segment": "component",
    "sub": "Test",
    "role": "IC testing services for high-speed chips",
    "change": -4.98,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 295.5,
    "referenceClose": 311.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "6515.TW",
    "quoteSymbol": "6515.TW",
    "name": "穎崴",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card / socket",
    "role": "High-speed test interface and sockets",
    "change": 3.76,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 6070.0,
    "referenceClose": 5850.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "6223.TWO",
    "quoteSymbol": "6223.TWO",
    "name": "旺矽",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card",
    "role": "Probe cards and testing interface",
    "change": -1.94,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 5310.0,
    "referenceClose": 5415.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "3037.TW",
    "quoteSymbol": "3037.TW",
    "name": "欣興",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and advanced PCB",
    "change": 10.13,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1305.0,
    "referenceClose": 1185.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "3189.TW",
    "quoteSymbol": "3189.TW",
    "name": "景碩",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate supplier",
    "change": 9.15,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1050.0,
    "referenceClose": 962.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "8046.TW",
    "quoteSymbol": "8046.TW",
    "name": "南電",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and PCB",
    "change": 17.74,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1460.0,
    "referenceClose": 1240.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "2383.TW",
    "quoteSymbol": "2383.TW",
    "name": "台光電",
    "market": "TW",
    "segment": "component",
    "sub": "Copper clad laminate",
    "role": "High-speed CCL for AI servers and switches",
    "change": 2.67,
    "tags": [
      "CCL"
    ],
    "priceStatus": "ok",
    "latestClose": 5185.0,
    "referenceClose": 5050.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "component",
    "sub": "Connector / RF",
    "role": "Connectors and optical communication components",
    "change": 6.21,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 1625.0,
    "referenceClose": 1530.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "3363.TWO",
    "quoteSymbol": "3363.TWO",
    "name": "上詮",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber optic components and passive devices",
    "change": 2.91,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 671.0,
    "referenceClose": 652.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "component",
    "sub": "Optical subassembly",
    "role": "Optical communication subassemblies and packaging",
    "change": 5.85,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 543.0,
    "referenceClose": 513.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "6451.TW",
    "quoteSymbol": "6451.TW",
    "name": "訊芯-KY",
    "market": "TW",
    "segment": "component",
    "sub": "SiP / optical packaging",
    "role": "System-in-package and optical communication assembly",
    "change": 4.13,
    "tags": [
      "SiP"
    ],
    "priceStatus": "ok",
    "latestClose": 429.0,
    "referenceClose": 412.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber arrays, splitters and optical passive components",
    "change": 9.19,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 713.0,
    "referenceClose": 653.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical communication component supplier",
    "change": 0.5,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 100.5,
    "referenceClose": 100.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive components and precision parts",
    "change": -5.31,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 260.7699890136719,
    "referenceClose": 275.3999938964844,
    "priceDate": "2026-09-30",
    "referenceDate": "2026-09-23"
  },
  {
    "ticker": "300548.SZ",
    "quoteSymbol": "300548.SZ",
    "name": "博創科技",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive and active components",
    "change": -8.02,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 219.8300018310547,
    "referenceClose": 239.0,
    "priceDate": "2026-09-30",
    "referenceDate": "2026-09-23"
  },
  {
    "ticker": "601869.SH",
    "quoteSymbol": "601869.SS",
    "name": "長飛光纖",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber",
    "role": "Optical fiber and cable",
    "change": -10.21,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 411.1600036621094,
    "referenceClose": 457.8900146484375,
    "priceDate": "2026-09-30",
    "referenceDate": "2026-09-23"
  },
  {
    "ticker": "600487.SH",
    "quoteSymbol": "600487.SS",
    "name": "亨通光電",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber cable and optical network products",
    "change": -21.56,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 54.86000061035156,
    "referenceClose": 69.94000244140625,
    "priceDate": "2026-09-30",
    "referenceDate": "2026-09-23"
  },
  {
    "ticker": "5801.T",
    "quoteSymbol": "5801.T",
    "name": "古河電工",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Optical fiber, cable and network materials",
    "change": 15.76,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 4429.0,
    "referenceClose": 3826.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "5803.T",
    "quoteSymbol": "5803.T",
    "name": "藤倉",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber, cable and optical interconnect products",
    "change": 12.27,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 5598.0,
    "referenceClose": 4986.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "4062.T",
    "quoteSymbol": "4062.T",
    "name": "Ibiden",
    "market": "JP",
    "segment": "component",
    "sub": "Substrate",
    "role": "Advanced IC substrates",
    "change": 3.66,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 12100.0,
    "referenceClose": 11672.5,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom and telecom optical transceivers",
    "change": 13.93,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 337.0400085449219,
    "referenceClose": 295.8299865722656,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "module",
    "sub": "Laser / module",
    "role": "Laser engines and optical module supply",
    "change": 15.27,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1085.4200439453125,
    "referenceClose": 941.6500244140625,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "module",
    "sub": "Optical manufacturing",
    "role": "Optical module contract manufacturing",
    "change": 11.09,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 463.69000244140625,
    "referenceClose": 417.3900146484375,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "module",
    "sub": "Coherent module",
    "role": "Coherent optical modules and transport platforms",
    "change": 9.65,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 391.3399963378906,
    "referenceClose": 356.9100036621094,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "module",
    "sub": "Acacia module",
    "role": "Acacia coherent optics and pluggable modules",
    "change": 5.15,
    "tags": [
      "Acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 112.19999694824219,
    "referenceClose": 106.69999694824219,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "module",
    "sub": "Optical module",
    "role": "Coherent optics and network system modules",
    "change": 2.02,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 10.600000381469727,
    "referenceClose": 10.390000343322754,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical communication modules and components",
    "change": 3.91,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 585.0,
    "referenceClose": 563.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "4977.TW",
    "quoteSymbol": "4977.TW",
    "name": "眾達-KY",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical transceiver supplier",
    "change": 4.15,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 175.5,
    "referenceClose": 168.5,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver component",
    "role": "Optical communication and connector products",
    "change": 6.21,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1625.0,
    "referenceClose": 1530.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "module",
    "sub": "OSA",
    "role": "Optical subassemblies for transceivers",
    "change": 5.85,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 543.0,
    "referenceClose": 513.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "module",
    "sub": "Passive optical",
    "role": "Fiber components used in modules",
    "change": 9.19,
    "tags": [
      "passive"
    ],
    "priceStatus": "ok",
    "latestClose": 713.0,
    "referenceClose": 653.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module exposure",
    "change": 0.5,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 100.5,
    "referenceClose": 100.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "4908.TWO",
    "quoteSymbol": "4908.TWO",
    "name": "前鼎",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module and equipment",
    "change": 6.9,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 224.5,
    "referenceClose": 210.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "300308.SZ",
    "quoteSymbol": "300308.SZ",
    "name": "中際旭創",
    "market": "CN",
    "segment": "module",
    "sub": "800G / 1.6T",
    "role": "High-speed optical transceiver leader",
    "change": -12.36,
    "tags": [
      "800G",
      "1.6T"
    ],
    "priceStatus": "ok",
    "latestClose": 808.4400024414062,
    "referenceClose": 922.5,
    "priceDate": "2026-09-30",
    "referenceDate": "2026-09-23"
  },
  {
    "ticker": "300502.SZ",
    "quoteSymbol": "300502.SZ",
    "name": "新易盛",
    "market": "CN",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom optical transceivers",
    "change": -13.79,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 389.0,
    "referenceClose": 451.20001220703125,
    "priceDate": "2026-09-30",
    "referenceDate": "2026-09-23"
  },
  {
    "ticker": "002281.SZ",
    "quoteSymbol": "002281.SZ",
    "name": "光迅科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical devices and modules",
    "change": -13.22,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 164.8800048828125,
    "referenceClose": 190.0,
    "priceDate": "2026-09-30",
    "referenceDate": "2026-09-23"
  },
  {
    "ticker": "603083.SH",
    "quoteSymbol": "603083.SS",
    "name": "劍橋科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical modules and broadband equipment",
    "change": -5.83,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 205.4499969482422,
    "referenceClose": 218.1699981689453,
    "priceDate": "2026-09-30",
    "referenceDate": "2026-09-23"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical engine parts",
    "role": "High-speed module precision components",
    "change": -5.31,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 260.7699890136719,
    "referenceClose": 275.3999938964844,
    "priceDate": "2026-09-30",
    "referenceDate": "2026-09-23"
  },
  {
    "ticker": "688205.SH",
    "quoteSymbol": "688205.SS",
    "name": "德科立",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical transceiver modules",
    "change": -9.0,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 209.0,
    "referenceClose": 229.66000366210938,
    "priceDate": "2026-09-30",
    "referenceDate": "2026-09-23"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication and laser products",
    "change": -13.02,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 92.25,
    "referenceClose": 106.05999755859375,
    "priceDate": "2026-09-30",
    "referenceDate": "2026-09-23"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical network",
    "role": "Optical network systems and modules",
    "change": -16.08,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 35.70000076293945,
    "referenceClose": 42.540000915527344,
    "priceDate": "2026-09-30",
    "referenceDate": "2026-09-23"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "module",
    "sub": "Optical device",
    "role": "Optical components and communication devices",
    "change": 10.9,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 2452.0,
    "referenceClose": 2211.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "ANET",
    "quoteSymbol": "ANET",
    "name": "Arista Networks",
    "market": "US",
    "segment": "system",
    "sub": "AI switch",
    "role": "AI datacenter Ethernet switches",
    "change": 0.39,
    "tags": [
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 207.35000610351562,
    "referenceClose": 206.5500030517578,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "system",
    "sub": "Switch / router",
    "role": "Enterprise and cloud networking systems",
    "change": 5.15,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 112.19999694824219,
    "referenceClose": 106.69999694824219,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "HPE",
    "quoteSymbol": "HPE",
    "name": "HPE",
    "market": "US",
    "segment": "system",
    "sub": "Server / networking",
    "role": "AI servers, networking and cloud infrastructure",
    "change": 10.15,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 69.33000183105469,
    "referenceClose": 62.939998626708984,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "DELL",
    "quoteSymbol": "DELL",
    "name": "Dell",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and enterprise infrastructure",
    "change": -0.07,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 562.52001953125,
    "referenceClose": 562.8900146484375,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "SMCI",
    "quoteSymbol": "SMCI",
    "name": "Supermicro",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server platforms and rack-scale systems",
    "change": 0.99,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 43.689998626708984,
    "referenceClose": 43.2599983215332,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "CLS",
    "quoteSymbol": "CLS",
    "name": "Celestica",
    "market": "US",
    "segment": "system",
    "sub": "ODM / EMS",
    "role": "Cloud hardware and networking manufacturing",
    "change": 5.99,
    "tags": [
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 387.32000732421875,
    "referenceClose": 365.44000244140625,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "JBL",
    "quoteSymbol": "JBL",
    "name": "Jabil",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing for networking systems",
    "change": -3.89,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 304.4100036621094,
    "referenceClose": 316.739990234375,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "FLEX",
    "quoteSymbol": "FLEX",
    "name": "Flex",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing and cloud hardware",
    "change": 1.68,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 116.61000061035156,
    "referenceClose": 114.68000030517578,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "2345.TW",
    "quoteSymbol": "2345.TW",
    "name": "智邦",
    "market": "TW",
    "segment": "system",
    "sub": "Switch ODM",
    "role": "White-box switch and cloud networking ODM",
    "change": 3.69,
    "tags": [
      "switch",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 1965.0,
    "referenceClose": 1895.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "2382.TW",
    "quoteSymbol": "2382.TW",
    "name": "廣達",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and cloud infrastructure ODM",
    "change": -1.92,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 332.0,
    "referenceClose": 338.5,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "6669.TW",
    "quoteSymbol": "6669.TW",
    "name": "緯穎",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "Cloud datacenter server ODM",
    "change": -1.42,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 2085.0,
    "referenceClose": 2115.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "2317.TW",
    "quoteSymbol": "2317.TW",
    "name": "鴻海",
    "market": "TW",
    "segment": "system",
    "sub": "EMS / server",
    "role": "AI server and system assembly",
    "change": 0.2,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 251.0,
    "referenceClose": 250.5,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "2308.TW",
    "quoteSymbol": "2308.TW",
    "name": "台達電",
    "market": "TW",
    "segment": "system",
    "sub": "Power / thermal",
    "role": "Power, thermal and datacenter infrastructure",
    "change": -1.31,
    "tags": [
      "power",
      "thermal"
    ],
    "priceStatus": "ok",
    "latestClose": 1885.0,
    "referenceClose": 1910.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "3706.TW",
    "quoteSymbol": "3706.TW",
    "name": "神達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and datacenter system integration",
    "change": 3.57,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 81.30000305175781,
    "referenceClose": 78.5,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "3231.TW",
    "quoteSymbol": "3231.TW",
    "name": "緯創",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and system integration",
    "change": 1.08,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 186.5,
    "referenceClose": 184.5,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "2356.TW",
    "quoteSymbol": "2356.TW",
    "name": "英業達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and cloud equipment manufacturing",
    "change": -1.5,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 59.0,
    "referenceClose": 59.900001525878906,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "3380.TW",
    "quoteSymbol": "3380.TW",
    "name": "明泰",
    "market": "TW",
    "segment": "system",
    "sub": "Networking",
    "role": "Networking products and broadband equipment",
    "change": 1.11,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 31.950000762939453,
    "referenceClose": 31.600000381469727,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "6285.TW",
    "quoteSymbol": "6285.TW",
    "name": "啟碁",
    "market": "TW",
    "segment": "system",
    "sub": "Network device",
    "role": "Wireless and networking equipment",
    "change": 0.0,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 238.0,
    "referenceClose": 238.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-24"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "system",
    "sub": "Optical systems",
    "role": "Optical communication and laser systems",
    "change": -13.02,
    "tags": [
      "system"
    ],
    "priceStatus": "ok",
    "latestClose": 92.25,
    "referenceClose": 106.05999755859375,
    "priceDate": "2026-09-30",
    "referenceDate": "2026-09-23"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "system",
    "sub": "Optical network",
    "role": "Optical transmission and network equipment",
    "change": -16.08,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 35.70000076293945,
    "referenceClose": 42.540000915527344,
    "priceDate": "2026-09-30",
    "referenceDate": "2026-09-23"
  },
  {
    "ticker": "000063.SZ",
    "quoteSymbol": "000063.SZ",
    "name": "中興通訊",
    "market": "CN",
    "segment": "system",
    "sub": "Telecom equipment",
    "role": "Telecom and datacenter network equipment",
    "change": -5.27,
    "tags": [
      "telecom"
    ],
    "priceStatus": "ok",
    "latestClose": 30.579999923706055,
    "referenceClose": 32.279998779296875,
    "priceDate": "2026-09-30",
    "referenceDate": "2026-09-23"
  },
  {
    "ticker": "6701.T",
    "quoteSymbol": "6701.T",
    "name": "NEC",
    "market": "JP",
    "segment": "system",
    "sub": "Network systems",
    "role": "Telecom, submarine and network systems",
    "change": 2.04,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 4913.0,
    "referenceClose": 4815.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  },
  {
    "ticker": "6702.T",
    "quoteSymbol": "6702.T",
    "name": "Fujitsu",
    "market": "JP",
    "segment": "system",
    "sub": "ICT systems",
    "role": "ICT infrastructure and network systems",
    "change": 1.02,
    "tags": [
      "ICT"
    ],
    "priceStatus": "ok",
    "latestClose": 4069.0,
    "referenceClose": 4028.0,
    "priceDate": "2026-10-02",
    "referenceDate": "2026-09-25"
  }
];

