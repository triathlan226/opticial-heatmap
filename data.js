window.HEATMAP_META = {
  "title": "光通訊 / CPO 供應鏈熱力圖",
  "subtitle": "六大環節、跨市場上市公司、同公司可重複出現在多個供應鏈位置。",
  "lastUpdated": "2026-09-05",
  "dateRange": "2026-08-28 → 2026-09-04",
  "totalTiles": 126,
  "totalCompanies": 97,
  "quoteSymbolsUpdated": 97,
  "quoteSymbolsFailed": 0,
  "priceStatusCounts": {
    "ok": 126
  },
  "topGainer": {
    "ticker": "2455.TW",
    "name": "全新",
    "change": 21.66
  },
  "topLoser": {
    "ticker": "CRDO",
    "name": "Credo",
    "change": -26.72
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
    "change": -2.95,
    "tags": [
      "ASIC",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 357.8999938964844,
    "referenceClose": 368.7900085449219,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "asic",
    "sub": "GPU / Network ASIC",
    "role": "GPU, NVLink, Spectrum-X ecosystem",
    "change": 5.89,
    "tags": [
      "GPU",
      "networking"
    ],
    "priceStatus": "ok",
    "latestClose": 230.36000061035156,
    "referenceClose": 217.5500030517578,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "asic",
    "sub": "DSP / PAM4",
    "role": "Optical DSP, custom silicon, DCI chips",
    "change": 3.2,
    "tags": [
      "DSP",
      "custom silicon"
    ],
    "priceStatus": "ok",
    "latestClose": 223.5500030517578,
    "referenceClose": 216.6199951171875,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "CRDO",
    "quoteSymbol": "CRDO",
    "name": "Credo",
    "market": "US",
    "segment": "asic",
    "sub": "Retimer / DSP",
    "role": "High-speed connectivity and optical DSP",
    "change": -26.72,
    "tags": [
      "DSP",
      "retimer"
    ],
    "priceStatus": "ok",
    "latestClose": 170.57000732421875,
    "referenceClose": 232.75,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "ALAB",
    "quoteSymbol": "ALAB",
    "name": "Astera Labs",
    "market": "US",
    "segment": "asic",
    "sub": "PCIe / CXL",
    "role": "AI data-center connectivity silicon",
    "change": 7.23,
    "tags": [
      "retimer",
      "CXL"
    ],
    "priceStatus": "ok",
    "latestClose": 310.3999938964844,
    "referenceClose": 289.4700012207031,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Laser drivers, TIAs, high-speed analog",
    "change": 1.39,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 268.95001220703125,
    "referenceClose": 265.2699890136719,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "SMTC",
    "quoteSymbol": "SMTC",
    "name": "Semtech",
    "market": "US",
    "segment": "asic",
    "sub": "Signal IC",
    "role": "Signal integrity and optical analog ICs",
    "change": 12.75,
    "tags": [
      "signal"
    ],
    "priceStatus": "ok",
    "latestClose": 147.88999938964844,
    "referenceClose": 131.1699981689453,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "asic",
    "sub": "Network silicon",
    "role": "Silicon One and Acacia optical stack",
    "change": -0.66,
    "tags": [
      "switch",
      "acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 109.19999694824219,
    "referenceClose": 109.93000030517578,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "asic",
    "sub": "Coherent DSP",
    "role": "WaveLogic coherent DSP and systems",
    "change": -15.18,
    "tags": [
      "coherent",
      "DSP"
    ],
    "priceStatus": "ok",
    "latestClose": 321.0,
    "referenceClose": 378.44000244140625,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "AMD",
    "quoteSymbol": "AMD",
    "name": "AMD",
    "market": "US",
    "segment": "asic",
    "sub": "AI accelerator",
    "role": "AI accelerators and adaptive compute",
    "change": 2.58,
    "tags": [
      "accelerator"
    ],
    "priceStatus": "ok",
    "latestClose": 477.57000732421875,
    "referenceClose": 465.5799865722656,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "asic",
    "sub": "Foundry / I/O",
    "role": "Foundry, Ethernet, historical silicon photonics",
    "change": 7.08,
    "tags": [
      "foundry",
      "ethernet"
    ],
    "priceStatus": "ok",
    "latestClose": 95.80000305175781,
    "referenceClose": 89.47000122070312,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "QCOM",
    "quoteSymbol": "QCOM",
    "name": "Qualcomm",
    "market": "US",
    "segment": "asic",
    "sub": "Connectivity IC",
    "role": "High-speed connectivity and edge AI silicon",
    "change": 2.77,
    "tags": [
      "connectivity"
    ],
    "priceStatus": "ok",
    "latestClose": 168.74000549316406,
    "referenceClose": 164.19000244140625,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "3661.TW",
    "quoteSymbol": "3661.TW",
    "name": "世芯-KY",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "Advanced-node custom ASIC design service",
    "change": 3.81,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 4220.0,
    "referenceClose": 4065.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "3443.TW",
    "quoteSymbol": "3443.TW",
    "name": "創意",
    "market": "TW",
    "segment": "asic",
    "sub": "ASIC design",
    "role": "GUC ASIC design and implementation",
    "change": -3.41,
    "tags": [
      "ASIC",
      "design"
    ],
    "priceStatus": "ok",
    "latestClose": 5810.0,
    "referenceClose": 6015.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "2454.TW",
    "quoteSymbol": "2454.TW",
    "name": "聯發科",
    "market": "TW",
    "segment": "asic",
    "sub": "Connectivity SoC",
    "role": "Networking, SerDes and edge AI chip exposure",
    "change": 10.79,
    "tags": [
      "SoC"
    ],
    "priceStatus": "ok",
    "latestClose": 4415.0,
    "referenceClose": 3985.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "5274.TWO",
    "quoteSymbol": "5274.TWO",
    "name": "信驊",
    "market": "TW",
    "segment": "asic",
    "sub": "BMC",
    "role": "Server management silicon",
    "change": 11.77,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 17470.0,
    "referenceClose": 15630.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "688536.SH",
    "quoteSymbol": "688536.SS",
    "name": "思瑞浦",
    "market": "CN",
    "segment": "asic",
    "sub": "Analog IC",
    "role": "Analog and signal-chain ICs",
    "change": -5.15,
    "tags": [
      "analog"
    ],
    "priceStatus": "ok",
    "latestClose": 292.8999938964844,
    "referenceClose": 308.79998779296875,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "asic",
    "sub": "Laser driver link",
    "role": "Optical chip supplier with upstream exposure",
    "change": -4.7,
    "tags": [
      "optical chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1466.0,
    "referenceClose": 1538.3499755859375,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "2330.TW",
    "quoteSymbol": "2330.TW",
    "name": "台積電",
    "market": "TW",
    "segment": "sipic",
    "sub": "Foundry",
    "role": "Advanced-node and packaging platform for CPO ecosystem",
    "change": -0.41,
    "tags": [
      "foundry",
      "CoWoS"
    ],
    "priceStatus": "ok",
    "latestClose": 2410.0,
    "referenceClose": 2420.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "AVGO",
    "quoteSymbol": "AVGO",
    "name": "Broadcom",
    "market": "US",
    "segment": "sipic",
    "sub": "Co-packaged optics",
    "role": "CPO roadmap and switch silicon integration",
    "change": -2.95,
    "tags": [
      "CPO",
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 357.8999938964844,
    "referenceClose": 368.7900085449219,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "NVDA",
    "quoteSymbol": "NVDA",
    "name": "NVIDIA",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical I/O ecosystem",
    "role": "AI cluster architecture drives optical I/O demand",
    "change": 5.89,
    "tags": [
      "AI",
      "optical I/O"
    ],
    "priceStatus": "ok",
    "latestClose": 230.36000061035156,
    "referenceClose": 217.5500030517578,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "MRVL",
    "quoteSymbol": "MRVL",
    "name": "Marvell",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical platform",
    "role": "DSP plus silicon photonics partnership ecosystem",
    "change": 3.2,
    "tags": [
      "DSP",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 223.5500030517578,
    "referenceClose": 216.6199951171875,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "INTC",
    "quoteSymbol": "INTC",
    "name": "Intel",
    "market": "US",
    "segment": "sipic",
    "sub": "Silicon photonics",
    "role": "Integrated silicon photonics and foundry capabilities",
    "change": 7.08,
    "tags": [
      "SiPh",
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 95.80000305175781,
    "referenceClose": 89.47000122070312,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Lasers, transceivers and optical engine building blocks",
    "change": 0.95,
    "tags": [
      "laser",
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 281.8599853515625,
    "referenceClose": 279.20001220703125,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical engine",
    "role": "Datacom lasers and optical components",
    "change": -1.54,
    "tags": [
      "laser",
      "datacom"
    ],
    "priceStatus": "ok",
    "latestClose": 881.2550048828125,
    "referenceClose": 895.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "STM",
    "quoteSymbol": "STM",
    "name": "STMicro",
    "market": "EU",
    "segment": "sipic",
    "sub": "Photonics platform",
    "role": "Photonics and advanced semiconductor platform exposure",
    "change": 5.79,
    "tags": [
      "photonics"
    ],
    "priceStatus": "ok",
    "latestClose": 52.2400016784668,
    "referenceClose": 49.380001068115234,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "GFS",
    "quoteSymbol": "GFS",
    "name": "GlobalFoundries",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Silicon photonics and specialty process platform",
    "change": 1.01,
    "tags": [
      "foundry",
      "SiPh"
    ],
    "priceStatus": "ok",
    "latestClose": 45.209999084472656,
    "referenceClose": 44.7599983215332,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "TSEM",
    "quoteSymbol": "TSEM",
    "name": "Tower Semiconductor",
    "market": "US",
    "segment": "sipic",
    "sub": "Specialty foundry",
    "role": "Analog, photonics and specialty manufacturing",
    "change": 6.89,
    "tags": [
      "foundry"
    ],
    "priceStatus": "ok",
    "latestClose": 222.33999633789062,
    "referenceClose": 208.00999450683594,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "sipic",
    "sub": "Optical systems",
    "role": "Photonic service engines and coherent optics",
    "change": -1.76,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 10.029999732971191,
    "referenceClose": 10.210000038146973,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "sipic",
    "sub": "Acacia optics",
    "role": "Coherent modules and optical interconnect roadmap",
    "change": -0.66,
    "tags": [
      "Acacia",
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 109.19999694824219,
    "referenceClose": 109.93000030517578,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "sipic",
    "sub": "Coherent optics",
    "role": "Coherent optical engine and network platforms",
    "change": -15.18,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 321.0,
    "referenceClose": 378.44000244140625,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "POET",
    "quoteSymbol": "POET",
    "name": "POET Technologies",
    "market": "US",
    "segment": "sipic",
    "sub": "Optical interposer",
    "role": "Optical interposer platform for transceivers",
    "change": 5.6,
    "tags": [
      "interposer"
    ],
    "priceStatus": "ok",
    "latestClose": 7.920000076293945,
    "referenceClose": 7.5,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "LWLG",
    "quoteSymbol": "LWLG",
    "name": "Lightwave Logic",
    "market": "US",
    "segment": "sipic",
    "sub": "EO polymer",
    "role": "Electro-optic polymer material platform",
    "change": -2.55,
    "tags": [
      "material"
    ],
    "priceStatus": "ok",
    "latestClose": 5.349999904632568,
    "referenceClose": 5.489999771118164,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "4966.TWO",
    "quoteSymbol": "4966.TWO",
    "name": "譜瑞-KY",
    "market": "TW",
    "segment": "sipic",
    "sub": "High-speed interface",
    "role": "High-speed interface ICs and data transmission",
    "change": -2.57,
    "tags": [
      "interface"
    ],
    "priceStatus": "ok",
    "latestClose": 569.0,
    "referenceClose": 584.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "6789.TW",
    "quoteSymbol": "6789.TW",
    "name": "采鈺",
    "market": "TW",
    "segment": "sipic",
    "sub": "Optical process",
    "role": "Optical semiconductor process and sensor platform",
    "change": 1.52,
    "tags": [
      "process"
    ],
    "priceStatus": "ok",
    "latestClose": 468.0,
    "referenceClose": 461.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "688313.SH",
    "quoteSymbol": "688313.SS",
    "name": "仕佳光子",
    "market": "CN",
    "segment": "sipic",
    "sub": "PLC / optical chip",
    "role": "PLC splitter, AWG and optical chip supplier",
    "change": -8.69,
    "tags": [
      "PLC",
      "chip"
    ],
    "priceStatus": "ok",
    "latestClose": 141.6199951171875,
    "referenceClose": 155.10000610351562,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "laser",
    "sub": "Laser / InP",
    "role": "InP lasers, VCSELs, coherent and datacom components",
    "change": 0.95,
    "tags": [
      "InP",
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 281.8599853515625,
    "referenceClose": 279.20001220703125,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "laser",
    "sub": "Datacom laser",
    "role": "EML, DFB and high-speed datacom laser supply",
    "change": -1.54,
    "tags": [
      "EML",
      "DFB"
    ],
    "priceStatus": "ok",
    "latestClose": 881.2550048828125,
    "referenceClose": 895.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "MTSI",
    "quoteSymbol": "MTSI",
    "name": "MACOM",
    "market": "US",
    "segment": "laser",
    "sub": "Laser driver / TIA",
    "role": "Laser drivers, TIAs and analog front-end",
    "change": 1.39,
    "tags": [
      "driver",
      "TIA"
    ],
    "priceStatus": "ok",
    "latestClose": 268.95001220703125,
    "referenceClose": 265.2699890136719,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "IPGP",
    "quoteSymbol": "IPGP",
    "name": "IPG Photonics",
    "market": "US",
    "segment": "laser",
    "sub": "Fiber laser",
    "role": "Laser technology and optical components",
    "change": 1.92,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 78.0,
    "referenceClose": 76.52999877929688,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "AXTI",
    "quoteSymbol": "AXTI",
    "name": "AXT",
    "market": "US",
    "segment": "laser",
    "sub": "Substrate",
    "role": "Compound semiconductor substrates",
    "change": 5.13,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 61.63999938964844,
    "referenceClose": 58.630001068115234,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "IQE.L",
    "quoteSymbol": "IQE.L",
    "name": "IQE",
    "market": "EU",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "Compound semiconductor epitaxy wafers",
    "change": -1.56,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 47.45000076293945,
    "referenceClose": 48.20000076293945,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Compound semiconductor and optical components",
    "change": -2.16,
    "tags": [
      "InP",
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 2133.0,
    "referenceClose": 2180.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "6503.T",
    "quoteSymbol": "6503.T",
    "name": "三菱電機",
    "market": "JP",
    "segment": "laser",
    "sub": "Optical device",
    "role": "Optical devices, lasers and industrial electronics",
    "change": -7.08,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 5248.0,
    "referenceClose": 5648.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "6965.T",
    "quoteSymbol": "6965.T",
    "name": "浜松光子",
    "market": "JP",
    "segment": "laser",
    "sub": "Photonics",
    "role": "Photodetectors, optoelectronics and photonics devices",
    "change": -1.92,
    "tags": [
      "detector"
    ],
    "priceStatus": "ok",
    "latestClose": 2298.5,
    "referenceClose": 2343.5,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "AMS.SW",
    "quoteSymbol": "AMS.SW",
    "name": "ams OSRAM",
    "market": "EU",
    "segment": "laser",
    "sub": "Emitter",
    "role": "Emitters, sensors and photonics devices",
    "change": -0.39,
    "tags": [
      "emitter"
    ],
    "priceStatus": "ok",
    "latestClose": 18.09000015258789,
    "referenceClose": 18.15999984741211,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "3105.TWO",
    "quoteSymbol": "3105.TWO",
    "name": "穩懋",
    "market": "TW",
    "segment": "laser",
    "sub": "GaAs foundry",
    "role": "GaAs foundry with photonics-adjacent capabilities",
    "change": 2.39,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 449.5,
    "referenceClose": 439.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "3081.TWO",
    "quoteSymbol": "3081.TWO",
    "name": "聯亞",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "III-V epitaxy wafers for optical communications",
    "change": -4.08,
    "tags": [
      "epi",
      "III-V"
    ],
    "priceStatus": "ok",
    "latestClose": 3170.0,
    "referenceClose": 3305.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "2455.TW",
    "quoteSymbol": "2455.TW",
    "name": "全新",
    "market": "TW",
    "segment": "laser",
    "sub": "Epitaxy",
    "role": "GaAs/InP epitaxy and compound semiconductor materials",
    "change": 21.66,
    "tags": [
      "epi"
    ],
    "priceStatus": "ok",
    "latestClose": 528.0,
    "referenceClose": 434.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "8086.TWO",
    "quoteSymbol": "8086.TWO",
    "name": "宏捷科",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "GaAs foundry and compound semiconductor devices",
    "change": -4.26,
    "tags": [
      "GaAs"
    ],
    "priceStatus": "ok",
    "latestClose": 112.5,
    "referenceClose": 117.5,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "4991.TWO",
    "quoteSymbol": "4991.TWO",
    "name": "環宇-KY",
    "market": "TW",
    "segment": "laser",
    "sub": "Compound semiconductor",
    "role": "Compound semiconductor and optical device exposure",
    "change": -4.42,
    "tags": [
      "compound"
    ],
    "priceStatus": "ok",
    "latestClose": 497.0,
    "referenceClose": 520.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "laser",
    "sub": "Optical component",
    "role": "Optical communication components and modules",
    "change": 3.11,
    "tags": [
      "optical"
    ],
    "priceStatus": "ok",
    "latestClose": 629.0,
    "referenceClose": 610.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "688498.SH",
    "quoteSymbol": "688498.SS",
    "name": "源傑科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser chip",
    "role": "Optical communication laser chips",
    "change": -4.7,
    "tags": [
      "laser chip"
    ],
    "priceStatus": "ok",
    "latestClose": 1466.0,
    "referenceClose": 1538.3499755859375,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "laser",
    "sub": "Laser / module",
    "role": "Laser equipment and optical communication products",
    "change": -7.12,
    "tags": [
      "laser"
    ],
    "priceStatus": "ok",
    "latestClose": 95.5999984741211,
    "referenceClose": 102.93000030517578,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "APH",
    "quoteSymbol": "APH",
    "name": "Amphenol",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "High-speed interconnect and optical connector ecosystem",
    "change": 4.96,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 82.77999877929688,
    "referenceClose": 78.87000274658203,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "GLW",
    "quoteSymbol": "GLW",
    "name": "Corning",
    "market": "US",
    "segment": "component",
    "sub": "Fiber / glass",
    "role": "Optical fiber, glass and datacenter cabling",
    "change": 3.57,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 154.3000030517578,
    "referenceClose": 148.97999572753906,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "TEL",
    "quoteSymbol": "TEL",
    "name": "TE Connectivity",
    "market": "US",
    "segment": "component",
    "sub": "Connector",
    "role": "Connectors, cable assemblies and sensors",
    "change": 2.96,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 208.64999389648438,
    "referenceClose": 202.66000366210938,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers, modulators and optical subassemblies",
    "change": 0.95,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 281.8599853515625,
    "referenceClose": 279.20001220703125,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "component",
    "sub": "Optical component",
    "role": "Lasers and optical communication components",
    "change": -1.54,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 881.2550048828125,
    "referenceClose": 895.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "component",
    "sub": "Manufacturing",
    "role": "Precision optical manufacturing and assembly",
    "change": -1.68,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 407.3999938964844,
    "referenceClose": 414.3599853515625,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "3711.TW",
    "quoteSymbol": "3711.TW",
    "name": "日月光投控",
    "market": "TW",
    "segment": "component",
    "sub": "Advanced packaging",
    "role": "Semiconductor packaging and system-in-package",
    "change": -5.31,
    "tags": [
      "packaging"
    ],
    "priceStatus": "ok",
    "latestClose": 588.0,
    "referenceClose": 621.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "2449.TW",
    "quoteSymbol": "2449.TW",
    "name": "京元電",
    "market": "TW",
    "segment": "component",
    "sub": "Test",
    "role": "IC testing services for high-speed chips",
    "change": -2.96,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 262.0,
    "referenceClose": 270.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "6515.TW",
    "quoteSymbol": "6515.TW",
    "name": "穎崴",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card / socket",
    "role": "High-speed test interface and sockets",
    "change": 13.2,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 7075.0,
    "referenceClose": 6250.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "6223.TWO",
    "quoteSymbol": "6223.TWO",
    "name": "旺矽",
    "market": "TW",
    "segment": "component",
    "sub": "Probe card",
    "role": "Probe cards and testing interface",
    "change": 2.49,
    "tags": [
      "test"
    ],
    "priceStatus": "ok",
    "latestClose": 5155.0,
    "referenceClose": 5030.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "3037.TW",
    "quoteSymbol": "3037.TW",
    "name": "欣興",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and advanced PCB",
    "change": -18.74,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 902.0,
    "referenceClose": 1110.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "3189.TW",
    "quoteSymbol": "3189.TW",
    "name": "景碩",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate supplier",
    "change": -8.9,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 819.0,
    "referenceClose": 899.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "8046.TW",
    "quoteSymbol": "8046.TW",
    "name": "南電",
    "market": "TW",
    "segment": "component",
    "sub": "Substrate",
    "role": "IC substrate and PCB",
    "change": -14.92,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 1055.0,
    "referenceClose": 1240.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "2383.TW",
    "quoteSymbol": "2383.TW",
    "name": "台光電",
    "market": "TW",
    "segment": "component",
    "sub": "Copper clad laminate",
    "role": "High-speed CCL for AI servers and switches",
    "change": -1.37,
    "tags": [
      "CCL"
    ],
    "priceStatus": "ok",
    "latestClose": 5415.0,
    "referenceClose": 5490.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "component",
    "sub": "Connector / RF",
    "role": "Connectors and optical communication components",
    "change": 8.67,
    "tags": [
      "connector"
    ],
    "priceStatus": "ok",
    "latestClose": 1755.0,
    "referenceClose": 1615.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "3363.TWO",
    "quoteSymbol": "3363.TWO",
    "name": "上詮",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber optic components and passive devices",
    "change": 4.85,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 735.0,
    "referenceClose": 701.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "component",
    "sub": "Optical subassembly",
    "role": "Optical communication subassemblies and packaging",
    "change": -8.66,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 580.0,
    "referenceClose": 635.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "6451.TW",
    "quoteSymbol": "6451.TW",
    "name": "訊芯-KY",
    "market": "TW",
    "segment": "component",
    "sub": "SiP / optical packaging",
    "role": "System-in-package and optical communication assembly",
    "change": -0.99,
    "tags": [
      "SiP"
    ],
    "priceStatus": "ok",
    "latestClose": 449.0,
    "referenceClose": 453.5,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "component",
    "sub": "Fiber component",
    "role": "Fiber arrays, splitters and optical passive components",
    "change": 2.79,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 775.0,
    "referenceClose": 754.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical communication component supplier",
    "change": 13.0,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 98.19999694824219,
    "referenceClose": 86.9000015258789,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive components and precision parts",
    "change": -5.65,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 248.6999969482422,
    "referenceClose": 263.5799865722656,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "300548.SZ",
    "quoteSymbol": "300548.SZ",
    "name": "博創科技",
    "market": "CN",
    "segment": "component",
    "sub": "Optical component",
    "role": "Optical passive and active components",
    "change": -8.98,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 193.77999877929688,
    "referenceClose": 212.89999389648438,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "601869.SH",
    "quoteSymbol": "601869.SS",
    "name": "長飛光纖",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber",
    "role": "Optical fiber and cable",
    "change": -10.31,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 378.79998779296875,
    "referenceClose": 422.3599853515625,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "600487.SH",
    "quoteSymbol": "600487.SS",
    "name": "亨通光電",
    "market": "CN",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber cable and optical network products",
    "change": -9.43,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 62.220001220703125,
    "referenceClose": 68.69999694824219,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "5801.T",
    "quoteSymbol": "5801.T",
    "name": "古河電工",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Optical fiber, cable and network materials",
    "change": -1.51,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 3844.0,
    "referenceClose": 3903.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "5803.T",
    "quoteSymbol": "5803.T",
    "name": "藤倉",
    "market": "JP",
    "segment": "component",
    "sub": "Fiber / cable",
    "role": "Fiber, cable and optical interconnect products",
    "change": -5.37,
    "tags": [
      "fiber"
    ],
    "priceStatus": "ok",
    "latestClose": 5053.0,
    "referenceClose": 5340.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "4062.T",
    "quoteSymbol": "4062.T",
    "name": "Ibiden",
    "market": "JP",
    "segment": "component",
    "sub": "Substrate",
    "role": "Advanced IC substrates",
    "change": 1.49,
    "tags": [
      "substrate"
    ],
    "priceStatus": "ok",
    "latestClose": 20475.0,
    "referenceClose": 20175.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "COHR",
    "quoteSymbol": "COHR",
    "name": "Coherent",
    "market": "US",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom and telecom optical transceivers",
    "change": 0.95,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 281.8599853515625,
    "referenceClose": 279.20001220703125,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "LITE",
    "quoteSymbol": "LITE",
    "name": "Lumentum",
    "market": "US",
    "segment": "module",
    "sub": "Laser / module",
    "role": "Laser engines and optical module supply",
    "change": -1.54,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 881.2550048828125,
    "referenceClose": 895.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "FN",
    "quoteSymbol": "FN",
    "name": "Fabrinet",
    "market": "US",
    "segment": "module",
    "sub": "Optical manufacturing",
    "role": "Optical module contract manufacturing",
    "change": -1.68,
    "tags": [
      "manufacturing"
    ],
    "priceStatus": "ok",
    "latestClose": 407.3999938964844,
    "referenceClose": 414.3599853515625,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "CIEN",
    "quoteSymbol": "CIEN",
    "name": "Ciena",
    "market": "US",
    "segment": "module",
    "sub": "Coherent module",
    "role": "Coherent optical modules and transport platforms",
    "change": -15.18,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 321.0,
    "referenceClose": 378.44000244140625,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "module",
    "sub": "Acacia module",
    "role": "Acacia coherent optics and pluggable modules",
    "change": -0.66,
    "tags": [
      "Acacia"
    ],
    "priceStatus": "ok",
    "latestClose": 109.19999694824219,
    "referenceClose": 109.93000030517578,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "NOK",
    "quoteSymbol": "NOK",
    "name": "Nokia",
    "market": "EU",
    "segment": "module",
    "sub": "Optical module",
    "role": "Coherent optics and network system modules",
    "change": -1.76,
    "tags": [
      "coherent"
    ],
    "priceStatus": "ok",
    "latestClose": 10.029999732971191,
    "referenceClose": 10.210000038146973,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "4979.TWO",
    "quoteSymbol": "4979.TWO",
    "name": "華星光",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical communication modules and components",
    "change": 3.11,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 629.0,
    "referenceClose": 610.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "4977.TW",
    "quoteSymbol": "4977.TW",
    "name": "眾達-KY",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Optical transceiver supplier",
    "change": 10.85,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 185.0,
    "referenceClose": 166.88600158691406,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "6442.TW",
    "quoteSymbol": "6442.TW",
    "name": "光聖",
    "market": "TW",
    "segment": "module",
    "sub": "Transceiver component",
    "role": "Optical communication and connector products",
    "change": 8.67,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 1755.0,
    "referenceClose": 1615.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "3450.TW",
    "quoteSymbol": "3450.TW",
    "name": "聯鈞",
    "market": "TW",
    "segment": "module",
    "sub": "OSA",
    "role": "Optical subassemblies for transceivers",
    "change": -8.66,
    "tags": [
      "OSA"
    ],
    "priceStatus": "ok",
    "latestClose": 580.0,
    "referenceClose": 635.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "3163.TWO",
    "quoteSymbol": "3163.TWO",
    "name": "波若威",
    "market": "TW",
    "segment": "module",
    "sub": "Passive optical",
    "role": "Fiber components used in modules",
    "change": 2.79,
    "tags": [
      "passive"
    ],
    "priceStatus": "ok",
    "latestClose": 775.0,
    "referenceClose": 754.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "6530.TWO",
    "quoteSymbol": "6530.TWO",
    "name": "創威",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module exposure",
    "change": 13.0,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 98.19999694824219,
    "referenceClose": 86.9000015258789,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "4908.TWO",
    "quoteSymbol": "4908.TWO",
    "name": "前鼎",
    "market": "TW",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication module and equipment",
    "change": 18.16,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 224.5,
    "referenceClose": 190.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "300308.SZ",
    "quoteSymbol": "300308.SZ",
    "name": "中際旭創",
    "market": "CN",
    "segment": "module",
    "sub": "800G / 1.6T",
    "role": "High-speed optical transceiver leader",
    "change": -5.17,
    "tags": [
      "800G",
      "1.6T"
    ],
    "priceStatus": "ok",
    "latestClose": 814.0,
    "referenceClose": 858.3499755859375,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "300502.SZ",
    "quoteSymbol": "300502.SZ",
    "name": "新易盛",
    "market": "CN",
    "segment": "module",
    "sub": "Transceiver",
    "role": "Datacom optical transceivers",
    "change": -3.26,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 386.0,
    "referenceClose": 399.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "002281.SZ",
    "quoteSymbol": "002281.SZ",
    "name": "光迅科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical devices and modules",
    "change": -3.4,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 167.6999969482422,
    "referenceClose": 173.61000061035156,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "603083.SH",
    "quoteSymbol": "603083.SS",
    "name": "劍橋科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical modules and broadband equipment",
    "change": -2.05,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 188.3699951171875,
    "referenceClose": 192.30999755859375,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "300394.SZ",
    "quoteSymbol": "300394.SZ",
    "name": "天孚通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical engine parts",
    "role": "High-speed module precision components",
    "change": -5.65,
    "tags": [
      "component"
    ],
    "priceStatus": "ok",
    "latestClose": 248.6999969482422,
    "referenceClose": 263.5799865722656,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "688205.SH",
    "quoteSymbol": "688205.SS",
    "name": "德科立",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical transceiver modules",
    "change": 10.1,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 194.0,
    "referenceClose": 176.1999969482422,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "module",
    "sub": "Optical module",
    "role": "Optical communication and laser products",
    "change": -7.12,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 95.5999984741211,
    "referenceClose": 102.93000030517578,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "module",
    "sub": "Optical network",
    "role": "Optical network systems and modules",
    "change": -8.21,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 37.79999923706055,
    "referenceClose": 41.18000030517578,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "5802.T",
    "quoteSymbol": "5802.T",
    "name": "住友電工",
    "market": "JP",
    "segment": "module",
    "sub": "Optical device",
    "role": "Optical components and communication devices",
    "change": -2.16,
    "tags": [
      "module"
    ],
    "priceStatus": "ok",
    "latestClose": 2133.0,
    "referenceClose": 2180.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "ANET",
    "quoteSymbol": "ANET",
    "name": "Arista Networks",
    "market": "US",
    "segment": "system",
    "sub": "AI switch",
    "role": "AI datacenter Ethernet switches",
    "change": -0.82,
    "tags": [
      "switch"
    ],
    "priceStatus": "ok",
    "latestClose": 193.77999877929688,
    "referenceClose": 195.3800048828125,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "CSCO",
    "quoteSymbol": "CSCO",
    "name": "Cisco",
    "market": "US",
    "segment": "system",
    "sub": "Switch / router",
    "role": "Enterprise and cloud networking systems",
    "change": -0.66,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 109.19999694824219,
    "referenceClose": 109.93000030517578,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "HPE",
    "quoteSymbol": "HPE",
    "name": "HPE",
    "market": "US",
    "segment": "system",
    "sub": "Server / networking",
    "role": "AI servers, networking and cloud infrastructure",
    "change": -0.59,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 52.0,
    "referenceClose": 52.310001373291016,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "DELL",
    "quoteSymbol": "DELL",
    "name": "Dell",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and enterprise infrastructure",
    "change": 14.88,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 524.1400146484375,
    "referenceClose": 456.239990234375,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "SMCI",
    "quoteSymbol": "SMCI",
    "name": "Supermicro",
    "market": "US",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server platforms and rack-scale systems",
    "change": 6.77,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 39.59000015258789,
    "referenceClose": 37.08000183105469,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "CLS",
    "quoteSymbol": "CLS",
    "name": "Celestica",
    "market": "US",
    "segment": "system",
    "sub": "ODM / EMS",
    "role": "Cloud hardware and networking manufacturing",
    "change": 4.57,
    "tags": [
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 312.3500061035156,
    "referenceClose": 298.70001220703125,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "JBL",
    "quoteSymbol": "JBL",
    "name": "Jabil",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing for networking systems",
    "change": 3.03,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 310.57000732421875,
    "referenceClose": 301.45001220703125,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "FLEX",
    "quoteSymbol": "FLEX",
    "name": "Flex",
    "market": "US",
    "segment": "system",
    "sub": "EMS",
    "role": "Electronics manufacturing and cloud hardware",
    "change": -0.9,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 109.51000213623047,
    "referenceClose": 110.5,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "2345.TW",
    "quoteSymbol": "2345.TW",
    "name": "智邦",
    "market": "TW",
    "segment": "system",
    "sub": "Switch ODM",
    "role": "White-box switch and cloud networking ODM",
    "change": -1.18,
    "tags": [
      "switch",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 2100.0,
    "referenceClose": 2125.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "2382.TW",
    "quoteSymbol": "2382.TW",
    "name": "廣達",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and cloud infrastructure ODM",
    "change": 3.76,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 345.0,
    "referenceClose": 332.5,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "6669.TW",
    "quoteSymbol": "6669.TW",
    "name": "緯穎",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "Cloud datacenter server ODM",
    "change": 6.26,
    "tags": [
      "server",
      "ODM"
    ],
    "priceStatus": "ok",
    "latestClose": 2565.0,
    "referenceClose": 2413.84375,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "2317.TW",
    "quoteSymbol": "2317.TW",
    "name": "鴻海",
    "market": "TW",
    "segment": "system",
    "sub": "EMS / server",
    "role": "AI server and system assembly",
    "change": 1.19,
    "tags": [
      "EMS"
    ],
    "priceStatus": "ok",
    "latestClose": 256.0,
    "referenceClose": 253.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "2308.TW",
    "quoteSymbol": "2308.TW",
    "name": "台達電",
    "market": "TW",
    "segment": "system",
    "sub": "Power / thermal",
    "role": "Power, thermal and datacenter infrastructure",
    "change": -0.27,
    "tags": [
      "power",
      "thermal"
    ],
    "priceStatus": "ok",
    "latestClose": 1825.0,
    "referenceClose": 1830.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "3706.TW",
    "quoteSymbol": "3706.TW",
    "name": "神達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and datacenter system integration",
    "change": 0.43,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 92.5,
    "referenceClose": 92.0999984741211,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "3231.TW",
    "quoteSymbol": "3231.TW",
    "name": "緯創",
    "market": "TW",
    "segment": "system",
    "sub": "AI server",
    "role": "AI server and system integration",
    "change": 11.24,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 198.0,
    "referenceClose": 178.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "2356.TW",
    "quoteSymbol": "2356.TW",
    "name": "英業達",
    "market": "TW",
    "segment": "system",
    "sub": "Server",
    "role": "Server and cloud equipment manufacturing",
    "change": 4.01,
    "tags": [
      "server"
    ],
    "priceStatus": "ok",
    "latestClose": 67.5,
    "referenceClose": 64.9000015258789,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "3380.TW",
    "quoteSymbol": "3380.TW",
    "name": "明泰",
    "market": "TW",
    "segment": "system",
    "sub": "Networking",
    "role": "Networking products and broadband equipment",
    "change": 6.57,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 30.0,
    "referenceClose": 28.149999618530273,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "6285.TW",
    "quoteSymbol": "6285.TW",
    "name": "啟碁",
    "market": "TW",
    "segment": "system",
    "sub": "Network device",
    "role": "Wireless and networking equipment",
    "change": -1.42,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 243.5,
    "referenceClose": 247.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "000988.SZ",
    "quoteSymbol": "000988.SZ",
    "name": "華工科技",
    "market": "CN",
    "segment": "system",
    "sub": "Optical systems",
    "role": "Optical communication and laser systems",
    "change": -7.12,
    "tags": [
      "system"
    ],
    "priceStatus": "ok",
    "latestClose": 95.5999984741211,
    "referenceClose": 102.93000030517578,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "600498.SH",
    "quoteSymbol": "600498.SS",
    "name": "烽火通信",
    "market": "CN",
    "segment": "system",
    "sub": "Optical network",
    "role": "Optical transmission and network equipment",
    "change": -8.21,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 37.79999923706055,
    "referenceClose": 41.18000030517578,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "000063.SZ",
    "quoteSymbol": "000063.SZ",
    "name": "中興通訊",
    "market": "CN",
    "segment": "system",
    "sub": "Telecom equipment",
    "role": "Telecom and datacenter network equipment",
    "change": -1.67,
    "tags": [
      "telecom"
    ],
    "priceStatus": "ok",
    "latestClose": 33.06999969482422,
    "referenceClose": 33.630001068115234,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "6701.T",
    "quoteSymbol": "6701.T",
    "name": "NEC",
    "market": "JP",
    "segment": "system",
    "sub": "Network systems",
    "role": "Telecom, submarine and network systems",
    "change": -1.63,
    "tags": [
      "network"
    ],
    "priceStatus": "ok",
    "latestClose": 4828.0,
    "referenceClose": 4908.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  },
  {
    "ticker": "6702.T",
    "quoteSymbol": "6702.T",
    "name": "Fujitsu",
    "market": "JP",
    "segment": "system",
    "sub": "ICT systems",
    "role": "ICT infrastructure and network systems",
    "change": -0.1,
    "tags": [
      "ICT"
    ],
    "priceStatus": "ok",
    "latestClose": 3900.0,
    "referenceClose": 3904.0,
    "priceDate": "2026-09-04",
    "referenceDate": "2026-08-28"
  }
];

