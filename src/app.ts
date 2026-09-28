
// LEGADO: este arquivo era o app antigo em TypeScript manipulando o DOM direto.
// O app atual usa React em src/PortfolioApp.tsx e os dados foram separados em src/data.ts.
// Mantenha este arquivo apenas como referencia do prototipo original.

interface AssetSummary {
  assetId: string; assetClass: string; code: string; subtype?: string | null; issuerOrFund?: string | null; paper?: string | null;
  firstSeen: string; lastSeen: string; observations: number; status: string; appliedValue?: number | null; grossValue?: number | null;
  redemptionValue?: number | null; pnlGross?: number | null; pnlMin?: number | null; pnlMax?: number | null; qualityNote?: string | null;
}
interface HistoryPoint { date: string; appliedValue?: number | null; grossValue?: number | null; redemptionValue?: number | null; pnlGross?: number | null; pnlChange?: number | null; statusPoint?: string | null; }

const ASSETS: AssetSummary[] = [
  {
    "assetId": "FUND|G5CREAVE",
    "assetClass": "Fundo",
    "code": "G5CREAVE",
    "subtype": "Outros Fundos",
    "issuerOrFund": "G5CREDITOS A VENC",
    "paper": null,
    "firstSeen": "2020-07-28",
    "lastSeen": "2026-09-22",
    "observations": 1544,
    "status": "Em carteira no último arquivo",
    "appliedValue": null,
    "grossValue": 40873123.83,
    "redemptionValue": null,
    "pnlGross": -473403.2364622813,
    "pnlMin": -2754122.4812818463,
    "pnlMax": 155805.68574700912,
    "qualityNote": "Sem custo histórico no relatório; P&L é acumulado desde a primeira observação disponível e exclui mudanças de quantidade"
  },
  {
    "assetId": "FUND|G5CRVENC",
    "assetClass": "Fundo",
    "code": "G5CRVENC",
    "subtype": "Outros Fundos",
    "issuerOrFund": "G5 CREDITOS VENCID",
    "paper": null,
    "firstSeen": "2020-11-18",
    "lastSeen": "2026-09-22",
    "observations": 1466,
    "status": "Em carteira no último arquivo",
    "appliedValue": null,
    "grossValue": 6978608.2,
    "redemptionValue": null,
    "pnlGross": 8.89307967521836,
    "pnlMin": -2596.97488645342,
    "pnlMax": 8.89307967521836,
    "qualityNote": "Sem custo histórico no relatório; P&L é acumulado desde a primeira observação disponível e exclui mudanças de quantidade"
  },
  {
    "assetId": "RF|C285318",
    "assetClass": "Renda Fixa",
    "code": "C285318",
    "subtype": "CCBPX",
    "issuerOrFund": "GRANDTOW",
    "paper": "430690-CCB",
    "firstSeen": "2025-07-21",
    "lastSeen": "2026-09-22",
    "observations": 297,
    "status": "Em carteira no último arquivo",
    "appliedValue": 5404743.42,
    "grossValue": 5482981.8,
    "redemptionValue": 0.0,
    "pnlGross": 78238.37999999989,
    "pnlMin": 0.0,
    "pnlMax": 541346.4100000001,
    "qualityNote": "P&L atual por MTM versus valor aplicado"
  },
  {
    "assetId": "RF|C425245",
    "assetClass": "Renda Fixa",
    "code": "C425245",
    "subtype": "DIR",
    "issuerOrFund": "GARANTIZ",
    "paper": "467808-DIR",
    "firstSeen": "2026-06-09",
    "lastSeen": "2026-09-22",
    "observations": 75,
    "status": "Em carteira no último arquivo",
    "appliedValue": 1178022.22,
    "grossValue": 809857.97,
    "redemptionValue": 0.0,
    "pnlGross": -368164.25,
    "pnlMin": -369588.17999999993,
    "pnlMax": 19385.12000000011,
    "qualityNote": "P&L atual por MTM versus valor aplicado"
  },
  {
    "assetId": "RF|B941738",
    "assetClass": "Renda Fixa",
    "code": "B941738",
    "subtype": "CCAJU",
    "issuerOrFund": "ADELIGOM",
    "paper": "352412-ACA",
    "firstSeen": "2023-01-13",
    "lastSeen": "2026-09-22",
    "observations": 924,
    "status": "Em carteira no último arquivo",
    "appliedValue": 493956.44,
    "grossValue": 608799.99,
    "redemptionValue": 0.0,
    "pnlGross": 114843.55,
    "pnlMin": -28334.14000000001,
    "pnlMax": 180776.00999999995,
    "qualityNote": "P&L atual por MTM versus valor aplicado"
  },
  {
    "assetId": "RF|C275730",
    "assetClass": "Renda Fixa",
    "code": "C275730",
    "subtype": "CCBPX",
    "issuerOrFund": "CONDMANG",
    "paper": "428646-CCB",
    "firstSeen": "2025-06-26",
    "lastSeen": "2026-09-22",
    "observations": 314,
    "status": "Em carteira no último arquivo",
    "appliedValue": 620776.26,
    "grossValue": 508037.31,
    "redemptionValue": 0.0,
    "pnlGross": -112738.95,
    "pnlMin": -118446.66999999998,
    "pnlMax": 2903.219999999972,
    "qualityNote": "P&L atual por MTM versus valor aplicado"
  },
  {
    "assetId": "RF|C332534",
    "assetClass": "Renda Fixa",
    "code": "C332534",
    "subtype": "CCBPX",
    "issuerOrFund": "GARANTIZ",
    "paper": "441983-CCB",
    "firstSeen": "2025-11-11",
    "lastSeen": "2026-09-22",
    "observations": 216,
    "status": "Em carteira no último arquivo",
    "appliedValue": 1184781.24,
    "grossValue": 434657.33,
    "redemptionValue": 0.0,
    "pnlGross": -750123.9099999999,
    "pnlMin": -752432.35,
    "pnlMax": 12361.01000000001,
    "qualityNote": "P&L atual por MTM versus valor aplicado"
  },
  {
    "assetId": "RF|C128557",
    "assetClass": "Renda Fixa",
    "code": "C128557",
    "subtype": "DIR",
    "issuerOrFund": "SOCOLSAL",
    "paper": "393886-CES",
    "firstSeen": "2024-06-27",
    "lastSeen": "2026-09-22",
    "observations": 563,
    "status": "Em carteira no último arquivo",
    "appliedValue": 307674.54,
    "grossValue": 409884.71,
    "redemptionValue": 0.0,
    "pnlGross": 102210.17000000004,
    "pnlMin": 0.0,
    "pnlMax": 102210.17000000004,
    "qualityNote": "P&L atual por MTM versus valor aplicado"
  },
  {
    "assetId": "RF|C201500",
    "assetClass": "Renda Fixa",
    "code": "C201500",
    "subtype": "DIR",
    "issuerOrFund": "METALIAL",
    "paper": "411474-DIR",
    "firstSeen": "2024-12-24",
    "lastSeen": "2026-09-22",
    "observations": 437,
    "status": "Em carteira no último arquivo",
    "appliedValue": 302406.35,
    "grossValue": 383973.81,
    "redemptionValue": 0.0,
    "pnlGross": 81567.46000000002,
    "pnlMin": 0.0,
    "pnlMax": 81567.46000000002,
    "qualityNote": "P&L atual por MTM versus valor aplicado"
  },
  {
    "assetId": "RF|C200211",
    "assetClass": "Renda Fixa",
    "code": "C200211",
    "subtype": "CCBPX",
    "issuerOrFund": "SERINGUE",
    "paper": "411177-CCB",
    "firstSeen": "2024-12-20",
    "lastSeen": "2026-09-22",
    "observations": 439,
    "status": "Em carteira no último arquivo",
    "appliedValue": 441801.51,
    "grossValue": 362975.48,
    "redemptionValue": 0.0,
    "pnlGross": -78826.03000000003,
    "pnlMin": -81404.97999999998,
    "pnlMax": 17185.79999999999,
    "qualityNote": "P&L atual por MTM versus valor aplicado"
  },
  {
    "assetId": "RF|C129152",
    "assetClass": "Renda Fixa",
    "code": "C129152",
    "subtype": "CCBPX",
    "issuerOrFund": "CDEDJEQU",
    "paper": "394158-CCB",
    "firstSeen": "2024-06-28",
    "lastSeen": "2026-09-22",
    "observations": 562,
    "status": "Em carteira no último arquivo",
    "appliedValue": 644777.34,
    "grossValue": 335767.21,
    "redemptionValue": 0.0,
    "pnlGross": -309010.12999999995,
    "pnlMin": -309689.74999999994,
    "pnlMax": 5838.040000000037,
    "qualityNote": "P&L atual por MTM versus valor aplicado"
  },
  {
    "assetId": "RF|B941739",
    "assetClass": "Renda Fixa",
    "code": "B941739",
    "subtype": "CCAJU",
    "issuerOrFund": "MANUSILV",
    "paper": "352413-ACA",
    "firstSeen": "2023-01-13",
    "lastSeen": "2026-09-22",
    "observations": 924,
    "status": "Em carteira no último arquivo",
    "appliedValue": 194672.44,
    "grossValue": 309357.63,
    "redemptionValue": 0.0,
    "pnlGross": 114685.19,
    "pnlMin": 0.0,
    "pnlMax": 114685.19,
    "qualityNote": "P&L atual por MTM versus valor aplicado"
  }
];
const HISTORY: Record<string, HistoryPoint[]> = {
  "FUND|G5CREAVE": [
    {
      "date": "2020-07-28",
      "appliedValue": null,
      "grossValue": 182983.12,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Entrada/1ª observação"
    },
    {
      "date": "2020-08-11",
      "appliedValue": null,
      "grossValue": 218312.4,
      "redemptionValue": null,
      "pnlGross": 846.1341918485024,
      "pnlChange": 135.32822919508726,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2020-08-24",
      "appliedValue": null,
      "grossValue": 242452.56,
      "redemptionValue": null,
      "pnlGross": 1676.2458071450933,
      "pnlChange": 150.27081156359256,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2020-09-08",
      "appliedValue": null,
      "grossValue": 243963.19,
      "redemptionValue": null,
      "pnlGross": 3186.8748046591118,
      "pnlChange": 151.25931708159962,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2020-09-22",
      "appliedValue": null,
      "grossValue": 285503.99,
      "redemptionValue": null,
      "pnlGross": 3996.8356996250895,
      "pnlChange": 177.47858940288336,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2020-10-06",
      "appliedValue": null,
      "grossValue": 287286.81,
      "redemptionValue": null,
      "pnlGross": 5779.658145044803,
      "pnlChange": 178.6296657677098,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2020-10-20",
      "appliedValue": null,
      "grossValue": 382047.7,
      "redemptionValue": null,
      "pnlGross": 4555.147248929297,
      "pnlChange": 238.3176290460053,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2020-11-04",
      "appliedValue": null,
      "grossValue": 384437.97,
      "redemptionValue": null,
      "pnlGross": 6945.419994938324,
      "pnlChange": 239.72251110904344,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2020-11-18",
      "appliedValue": null,
      "grossValue": 1490027.86,
      "redemptionValue": null,
      "pnlGross": -5264.487107310433,
      "pnlChange": -494.8280128091379,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2020-12-01",
      "appliedValue": null,
      "grossValue": 1513426.58,
      "redemptionValue": null,
      "pnlGross": 2680.9046443164,
      "pnlChange": 953.8025710598534,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2020-12-15",
      "appliedValue": null,
      "grossValue": 1506887.61,
      "redemptionValue": null,
      "pnlGross": 9643.635529209729,
      "pnlChange": 950.678056140164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2020-12-30",
      "appliedValue": null,
      "grossValue": 1580078.67,
      "redemptionValue": null,
      "pnlGross": 15702.355546351817,
      "pnlChange": 997.8347803024736,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-01-13",
      "appliedValue": null,
      "grossValue": 1543829.18,
      "redemptionValue": null,
      "pnlGross": 20465.68618459392,
      "pnlChange": 19.801558837768173,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-01-27",
      "appliedValue": null,
      "grossValue": 1539639.39,
      "redemptionValue": null,
      "pnlGross": 27936.90490720204,
      "pnlChange": 972.547960218712,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-02-10",
      "appliedValue": null,
      "grossValue": 1520905.9,
      "redemptionValue": null,
      "pnlGross": 35748.950326458384,
      "pnlChange": 961.2884568378224,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-02-26",
      "appliedValue": null,
      "grossValue": 1565334.39,
      "redemptionValue": null,
      "pnlGross": 42271.61754684311,
      "pnlChange": 988.9942232479434,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-03-11",
      "appliedValue": null,
      "grossValue": 1563366.05,
      "redemptionValue": null,
      "pnlGross": 48346.95511130598,
      "pnlChange": -61.22636426403302,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-03-25",
      "appliedValue": null,
      "grossValue": 1929102.93,
      "redemptionValue": null,
      "pnlGross": 42813.50469731753,
      "pnlChange": 1211.041597829348,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-04-09",
      "appliedValue": null,
      "grossValue": 2077009.86,
      "redemptionValue": null,
      "pnlGross": 49516.76330051509,
      "pnlChange": 1302.549601702898,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-04-23",
      "appliedValue": null,
      "grossValue": 2016613.81,
      "redemptionValue": null,
      "pnlGross": 57386.90419970752,
      "pnlChange": 1263.9867663244663,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-05-07",
      "appliedValue": null,
      "grossValue": 2071259.32,
      "redemptionValue": null,
      "pnlGross": 66817.14103342613,
      "pnlChange": 1297.666557643642,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-05-21",
      "appliedValue": null,
      "grossValue": 1039720.71,
      "redemptionValue": null,
      "pnlGross": 16269.444615200078,
      "pnlChange": 643.7461695731782,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-06-04",
      "appliedValue": null,
      "grossValue": 1031910.97,
      "redemptionValue": null,
      "pnlGross": 20654.82912607576,
      "pnlChange": 249.88523986396584,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-06-18",
      "appliedValue": null,
      "grossValue": 1161005.0,
      "redemptionValue": null,
      "pnlGross": 21552.244517188497,
      "pnlChange": 718.5075781385085,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-07-02",
      "appliedValue": null,
      "grossValue": 1082130.88,
      "redemptionValue": null,
      "pnlGross": 23547.63069585378,
      "pnlChange": 667.9909317809692,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-07-16",
      "appliedValue": null,
      "grossValue": 1179037.82,
      "redemptionValue": null,
      "pnlGross": 25096.48013100412,
      "pnlChange": 727.3702311756277,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-07-29",
      "appliedValue": null,
      "grossValue": 1148758.19,
      "redemptionValue": null,
      "pnlGross": 29526.416519774262,
      "pnlChange": 708.57531140897,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-08-12",
      "appliedValue": null,
      "grossValue": 1268639.37,
      "redemptionValue": null,
      "pnlGross": 29441.67294217357,
      "pnlChange": -2662.777983145702,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-08-26",
      "appliedValue": null,
      "grossValue": 1326309.3,
      "redemptionValue": null,
      "pnlGross": 34583.47201538809,
      "pnlChange": 818.7787502699349,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-09-09",
      "appliedValue": null,
      "grossValue": 1443337.12,
      "redemptionValue": null,
      "pnlGross": 35067.83351623669,
      "pnlChange": 619.7181831229052,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-09-23",
      "appliedValue": null,
      "grossValue": 1256242.07,
      "redemptionValue": null,
      "pnlGross": 8501.08049083254,
      "pnlChange": 780.7823828480841,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-10-07",
      "appliedValue": null,
      "grossValue": 1212457.52,
      "redemptionValue": null,
      "pnlGross": 13126.14935843378,
      "pnlChange": 796.7879907576832,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-10-22",
      "appliedValue": null,
      "grossValue": 1583830.11,
      "redemptionValue": null,
      "pnlGross": 9152.73368837805,
      "pnlChange": 867.476622896858,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-11-05",
      "appliedValue": null,
      "grossValue": 1352468.4,
      "redemptionValue": null,
      "pnlGross": 20313.678560236676,
      "pnlChange": 843.1909048051474,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-11-22",
      "appliedValue": null,
      "grossValue": 1342193.93,
      "redemptionValue": null,
      "pnlGross": 16306.273208089327,
      "pnlChange": 836.480031573373,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-12-06",
      "appliedValue": null,
      "grossValue": 1588041.16,
      "redemptionValue": null,
      "pnlGross": 16698.679063993215,
      "pnlChange": 86.89663169771393,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-12-17",
      "appliedValue": null,
      "grossValue": 1636153.85,
      "redemptionValue": null,
      "pnlGross": 12712.186637224922,
      "pnlChange": 1022.7841679400284,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-12-31",
      "appliedValue": null,
      "grossValue": 1655951.44,
      "redemptionValue": null,
      "pnlGross": 22110.792359261523,
      "pnlChange": 1034.3368493143305,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-01-14",
      "appliedValue": null,
      "grossValue": 1705610.8,
      "redemptionValue": null,
      "pnlGross": 19256.73214929462,
      "pnlChange": 968.4250753594512,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-01-27",
      "appliedValue": null,
      "grossValue": 1730173.06,
      "redemptionValue": null,
      "pnlGross": 20855.929437375664,
      "pnlChange": 1084.5858903295612,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-02-10",
      "appliedValue": null,
      "grossValue": 1333787.02,
      "redemptionValue": null,
      "pnlGross": 16400.230219737892,
      "pnlChange": -496.22102155760206,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-02-24",
      "appliedValue": null,
      "grossValue": 1380154.49,
      "redemptionValue": null,
      "pnlGross": 12809.916838773855,
      "pnlChange": -932.3682063508354,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-03-14",
      "appliedValue": null,
      "grossValue": 1956654.53,
      "redemptionValue": null,
      "pnlGross": 825.5320590462643,
      "pnlChange": -1682.4422293317252,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-03-25",
      "appliedValue": null,
      "grossValue": 1849206.32,
      "redemptionValue": null,
      "pnlGross": 11653.434611895764,
      "pnlChange": 1921.6685198677476,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-04-08",
      "appliedValue": null,
      "grossValue": 2119008.45,
      "redemptionValue": null,
      "pnlGross": 12739.048026681025,
      "pnlChange": 1131.6284717093913,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-04-26",
      "appliedValue": null,
      "grossValue": 2541177.78,
      "redemptionValue": null,
      "pnlGross": 12340.255843983712,
      "pnlChange": 807.3765900572174,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-05-09",
      "appliedValue": null,
      "grossValue": 2694694.6,
      "redemptionValue": null,
      "pnlGross": 18323.272693645937,
      "pnlChange": -2789.995381213688,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-05-23",
      "appliedValue": null,
      "grossValue": 2657642.74,
      "redemptionValue": null,
      "pnlGross": 11721.584928951985,
      "pnlChange": -503.0709829526717,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-06-06",
      "appliedValue": null,
      "grossValue": 2645984.19,
      "redemptionValue": null,
      "pnlGross": 22206.436410269653,
      "pnlChange": 8.248271385080239,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-06-21",
      "appliedValue": null,
      "grossValue": 2958535.37,
      "redemptionValue": null,
      "pnlGross": 19713.61900971143,
      "pnlChange": -84.15094302481901,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-07-04",
      "appliedValue": null,
      "grossValue": 2986375.99,
      "redemptionValue": null,
      "pnlGross": 32345.73499836231,
      "pnlChange": 319.9454447707157,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-07-18",
      "appliedValue": null,
      "grossValue": 3129773.61,
      "redemptionValue": null,
      "pnlGross": 22731.65546275825,
      "pnlChange": -582.6085978652595,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-08-01",
      "appliedValue": null,
      "grossValue": 2971810.92,
      "redemptionValue": null,
      "pnlGross": 39271.949249034304,
      "pnlChange": 1158.270561422231,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-08-12",
      "appliedValue": null,
      "grossValue": 3184908.92,
      "redemptionValue": null,
      "pnlGross": 36267.54195702059,
      "pnlChange": -8039.271295997064,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-08-26",
      "appliedValue": null,
      "grossValue": 3363847.87,
      "redemptionValue": null,
      "pnlGross": 40752.01170217084,
      "pnlChange": -1303.931768786436,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-09-12",
      "appliedValue": null,
      "grossValue": 2875893.24,
      "redemptionValue": null,
      "pnlGross": 30471.09564525619,
      "pnlChange": -78.00621112664419,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-09-23",
      "appliedValue": null,
      "grossValue": 3683519.97,
      "redemptionValue": null,
      "pnlGross": 23300.876832919897,
      "pnlChange": 1599.511705238658,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-10-07",
      "appliedValue": null,
      "grossValue": 3333638.64,
      "redemptionValue": null,
      "pnlGross": 33916.364713195435,
      "pnlChange": 3640.989886317004,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-10-24",
      "appliedValue": null,
      "grossValue": 3697170.63,
      "redemptionValue": null,
      "pnlGross": 21461.23440147406,
      "pnlChange": 673.5393777858966,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-11-08",
      "appliedValue": null,
      "grossValue": 3511705.14,
      "redemptionValue": null,
      "pnlGross": 29993.449031083,
      "pnlChange": 2496.908886067626,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-11-22",
      "appliedValue": null,
      "grossValue": 4455138.25,
      "redemptionValue": null,
      "pnlGross": 8743.799842580473,
      "pnlChange": 2251.690848503912,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-12-06",
      "appliedValue": null,
      "grossValue": 4237606.19,
      "redemptionValue": null,
      "pnlGross": 31424.2236046027,
      "pnlChange": -2051.1005825054567,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-12-20",
      "appliedValue": null,
      "grossValue": 4724137.36,
      "redemptionValue": null,
      "pnlGross": 18399.57782254233,
      "pnlChange": 2964.242591909266,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-01-02",
      "appliedValue": null,
      "grossValue": 4670166.77,
      "redemptionValue": null,
      "pnlGross": 36787.629661664,
      "pnlChange": 1733.8658827583083,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-01-16",
      "appliedValue": null,
      "grossValue": 4185896.21,
      "redemptionValue": null,
      "pnlGross": 45294.67952125982,
      "pnlChange": -534.0895764172981,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-01-30",
      "appliedValue": null,
      "grossValue": 5071925.18,
      "redemptionValue": null,
      "pnlGross": 42766.2916083244,
      "pnlChange": 4727.446514605145,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-02-10",
      "appliedValue": null,
      "grossValue": 4767879.32,
      "redemptionValue": null,
      "pnlGross": 61488.65116137973,
      "pnlChange": 1162.7959928710102,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-02-28",
      "appliedValue": null,
      "grossValue": 5372236.98,
      "redemptionValue": null,
      "pnlGross": 48347.43811114179,
      "pnlChange": 3364.326633552882,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-03-14",
      "appliedValue": null,
      "grossValue": 4935202.95,
      "redemptionValue": null,
      "pnlGross": 59913.372021763134,
      "pnlChange": 3477.362273519783,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-03-28",
      "appliedValue": null,
      "grossValue": 5740755.66,
      "redemptionValue": null,
      "pnlGross": 48864.7119327855,
      "pnlChange": 2900.753484775777,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-04-11",
      "appliedValue": null,
      "grossValue": 5613847.71,
      "redemptionValue": null,
      "pnlGross": 71666.85602461618,
      "pnlChange": 3574.811679698736,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-04-26",
      "appliedValue": null,
      "grossValue": 5903017.4,
      "redemptionValue": null,
      "pnlGross": 45763.08923404367,
      "pnlChange": -6194.955827465969,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-05-11",
      "appliedValue": null,
      "grossValue": 5551952.15,
      "redemptionValue": null,
      "pnlGross": 67183.44715960464,
      "pnlChange": 2437.783553894793,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-05-24",
      "appliedValue": null,
      "grossValue": 6382267.41,
      "redemptionValue": null,
      "pnlGross": 32801.419913349775,
      "pnlChange": 4728.099821608691,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-06-07",
      "appliedValue": null,
      "grossValue": 6450665.87,
      "redemptionValue": null,
      "pnlGross": 52427.61981750208,
      "pnlChange": 3159.2744862361164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-06-23",
      "appliedValue": null,
      "grossValue": 6701999.32,
      "redemptionValue": null,
      "pnlGross": 42100.234210922594,
      "pnlChange": 3402.9651416228403,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-07-07",
      "appliedValue": null,
      "grossValue": 6978403.71,
      "redemptionValue": null,
      "pnlGross": 66306.84765724215,
      "pnlChange": -3175.077459013627,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-07-20",
      "appliedValue": null,
      "grossValue": 6990352.0,
      "redemptionValue": null,
      "pnlGross": 31721.78927930968,
      "pnlChange": 9390.67264337195,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-08-03",
      "appliedValue": null,
      "grossValue": 6875240.04,
      "redemptionValue": null,
      "pnlGross": 70639.17620463502,
      "pnlChange": 8740.393035428666,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-08-17",
      "appliedValue": null,
      "grossValue": 7940683.66,
      "redemptionValue": null,
      "pnlGross": 32142.692733632084,
      "pnlChange": 87.16121209385709,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-08-30",
      "appliedValue": null,
      "grossValue": 6926654.45,
      "redemptionValue": null,
      "pnlGross": 74772.80444016286,
      "pnlChange": 9778.117750073328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-09-14",
      "appliedValue": null,
      "grossValue": 7493865.25,
      "redemptionValue": null,
      "pnlGross": 37458.909361687794,
      "pnlChange": -31099.443801707544,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-09-28",
      "appliedValue": null,
      "grossValue": 7041993.65,
      "redemptionValue": null,
      "pnlGross": 86334.90424578484,
      "pnlChange": 4489.474573566008,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-10-11",
      "appliedValue": null,
      "grossValue": 6227024.75,
      "redemptionValue": null,
      "pnlGross": 79671.24672981405,
      "pnlChange": -7942.670058495084,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-10-26",
      "appliedValue": null,
      "grossValue": 7238581.88,
      "redemptionValue": null,
      "pnlGross": 77265.5397903181,
      "pnlChange": 8388.706426310966,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-11-10",
      "appliedValue": null,
      "grossValue": 6322603.2,
      "redemptionValue": null,
      "pnlGross": 83285.55566941934,
      "pnlChange": 3773.15509623776,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-11-27",
      "appliedValue": null,
      "grossValue": 7769288.31,
      "redemptionValue": null,
      "pnlGross": 65296.729282898144,
      "pnlChange": 903.5619001026032,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-12-08",
      "appliedValue": null,
      "grossValue": 7146231.63,
      "redemptionValue": null,
      "pnlGross": 102569.99290813532,
      "pnlChange": -609.1851869076181,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-12-22",
      "appliedValue": null,
      "grossValue": 8024475.83,
      "redemptionValue": null,
      "pnlGross": 80858.20266433594,
      "pnlChange": 8580.79607245894,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-01-09",
      "appliedValue": null,
      "grossValue": 6847125.83,
      "redemptionValue": null,
      "pnlGross": 100747.9930483712,
      "pnlChange": 5205.30984664426,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-01-22",
      "appliedValue": null,
      "grossValue": 8524835.37,
      "redemptionValue": null,
      "pnlGross": 77260.60763663136,
      "pnlChange": 3934.793822157577,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-02-05",
      "appliedValue": null,
      "grossValue": 7011029.8,
      "redemptionValue": null,
      "pnlGross": 122191.5041887465,
      "pnlChange": 685.6975126179674,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-02-21",
      "appliedValue": null,
      "grossValue": 7949076.07,
      "redemptionValue": null,
      "pnlGross": 86448.93627124406,
      "pnlChange": 10464.608894190302,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-03-06",
      "appliedValue": null,
      "grossValue": 7773432.59,
      "redemptionValue": null,
      "pnlGross": 119903.91467600776,
      "pnlChange": -8376.790891415634,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-03-19",
      "appliedValue": null,
      "grossValue": 8734753.34,
      "redemptionValue": null,
      "pnlGross": 83324.9020311375,
      "pnlChange": 2424.259518959272,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-04-03",
      "appliedValue": null,
      "grossValue": 7791117.54,
      "redemptionValue": null,
      "pnlGross": 145317.3499823313,
      "pnlChange": 1688.9826925190375,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-04-17",
      "appliedValue": null,
      "grossValue": 9009160.84,
      "redemptionValue": null,
      "pnlGross": 88311.59388336881,
      "pnlChange": 2566.4536516063445,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-04-30",
      "appliedValue": null,
      "grossValue": 8306726.61,
      "redemptionValue": null,
      "pnlGross": 141960.33834959936,
      "pnlChange": 3443.8411280283026,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-05-15",
      "appliedValue": null,
      "grossValue": 9086630.22,
      "redemptionValue": null,
      "pnlGross": 87895.34117141244,
      "pnlChange": -5207.899365064995,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-05-29",
      "appliedValue": null,
      "grossValue": 8604251.12,
      "redemptionValue": null,
      "pnlGross": 139538.76766426404,
      "pnlChange": 5424.966193356456,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-06-12",
      "appliedValue": null,
      "grossValue": 7589972.88,
      "redemptionValue": null,
      "pnlGross": -121114.585664971,
      "pnlChange": 4100.894321447047,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-06-26",
      "appliedValue": null,
      "grossValue": 9269428.28,
      "redemptionValue": null,
      "pnlGross": -763583.9016718041,
      "pnlChange": -6257.915108402155,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-07-10",
      "appliedValue": null,
      "grossValue": 8153130.56,
      "redemptionValue": null,
      "pnlGross": -947631.0843941768,
      "pnlChange": -178892.73009282432,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-07-24",
      "appliedValue": null,
      "grossValue": 9534026.14,
      "redemptionValue": null,
      "pnlGross": -1334599.583205222,
      "pnlChange": 1195.6150534408655,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-08-06",
      "appliedValue": null,
      "grossValue": 9529451.84,
      "redemptionValue": null,
      "pnlGross": -1371321.3512974652,
      "pnlChange": -17701.49431258017,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-08-20",
      "appliedValue": null,
      "grossValue": 10310611.29,
      "redemptionValue": null,
      "pnlGross": -1782762.2908527623,
      "pnlChange": -9055.307795043816,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-09-03",
      "appliedValue": null,
      "grossValue": 9665407.43,
      "redemptionValue": null,
      "pnlGross": -1767227.032734256,
      "pnlChange": -6593.728074574623,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-09-16",
      "appliedValue": null,
      "grossValue": 11724119.47,
      "redemptionValue": null,
      "pnlGross": -2202376.5651350883,
      "pnlChange": -25095.822437774383,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-09-30",
      "appliedValue": null,
      "grossValue": 12196114.04,
      "redemptionValue": null,
      "pnlGross": -2183611.1925955387,
      "pnlChange": 20936.736386748536,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-10-14",
      "appliedValue": null,
      "grossValue": 10247656.22,
      "redemptionValue": null,
      "pnlGross": -2378928.8638662864,
      "pnlChange": -20222.244165347907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-10-25",
      "appliedValue": null,
      "grossValue": 11637908.41,
      "redemptionValue": null,
      "pnlGross": -2428327.0226336303,
      "pnlChange": 5256.069204046041,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-11-08",
      "appliedValue": null,
      "grossValue": 11262203.24,
      "redemptionValue": null,
      "pnlGross": -2461994.718446161,
      "pnlChange": -15325.051768443798,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-11-26",
      "appliedValue": null,
      "grossValue": 12067491.84,
      "redemptionValue": null,
      "pnlGross": -2735622.316395166,
      "pnlChange": 9100.515533726346,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-12-10",
      "appliedValue": null,
      "grossValue": 11468124.88,
      "redemptionValue": null,
      "pnlGross": -2670098.0800912576,
      "pnlChange": 6120.994159143549,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-12-23",
      "appliedValue": null,
      "grossValue": 14159549.32,
      "redemptionValue": null,
      "pnlGross": -2709124.491092488,
      "pnlChange": 5995.270765414042,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-08",
      "appliedValue": null,
      "grossValue": 12848082.4,
      "redemptionValue": null,
      "pnlGross": -2612724.598669121,
      "pnlChange": 5267.589009017255,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-22",
      "appliedValue": null,
      "grossValue": 15409077.97,
      "redemptionValue": null,
      "pnlGross": -2641436.117641449,
      "pnlChange": 7449.366522626325,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-05",
      "appliedValue": null,
      "grossValue": 14215131.53,
      "redemptionValue": null,
      "pnlGross": -2536195.6913125915,
      "pnlChange": 26217.211914719526,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-19",
      "appliedValue": null,
      "grossValue": 17110151.6,
      "redemptionValue": null,
      "pnlGross": -2593223.526417681,
      "pnlChange": 9136.165037931907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-07",
      "appliedValue": null,
      "grossValue": 15686202.99,
      "redemptionValue": null,
      "pnlGross": -2467893.027943629,
      "pnlChange": 21870.250419089047,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-21",
      "appliedValue": null,
      "grossValue": 17717801.1,
      "redemptionValue": null,
      "pnlGross": -2502266.083971382,
      "pnlChange": 5358.418223947709,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-03",
      "appliedValue": null,
      "grossValue": 16795833.37,
      "redemptionValue": null,
      "pnlGross": -2382902.597873629,
      "pnlChange": 8130.991351477098,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-17",
      "appliedValue": null,
      "grossValue": 18517154.79,
      "redemptionValue": null,
      "pnlGross": -2407092.197456864,
      "pnlChange": 7393.944328696877,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-06",
      "appliedValue": null,
      "grossValue": 18280264.52,
      "redemptionValue": null,
      "pnlGross": -2314551.7525797165,
      "pnlChange": 8216.896780756957,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-19",
      "appliedValue": null,
      "grossValue": 20653986.26,
      "redemptionValue": null,
      "pnlGross": -2378141.7046156544,
      "pnlChange": 2050.360120151394,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-02",
      "appliedValue": null,
      "grossValue": 19490150.59,
      "redemptionValue": null,
      "pnlGross": -2231575.580102436,
      "pnlChange": 22788.917539063543,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-16",
      "appliedValue": null,
      "grossValue": 21321569.3,
      "redemptionValue": null,
      "pnlGross": -2265822.041508551,
      "pnlChange": -20326.701666662284,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-30",
      "appliedValue": null,
      "grossValue": 20996367.17,
      "redemptionValue": null,
      "pnlGross": -2160083.045522113,
      "pnlChange": 19219.668550037037,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-14",
      "appliedValue": null,
      "grossValue": 21167039.29,
      "redemptionValue": null,
      "pnlGross": -2085259.2188538825,
      "pnlChange": -32116.18342587896,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-28",
      "appliedValue": null,
      "grossValue": 22529259.57,
      "redemptionValue": null,
      "pnlGross": -2069752.5214661767,
      "pnlChange": 12022.601647421612,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-11",
      "appliedValue": null,
      "grossValue": 22464286.31,
      "redemptionValue": null,
      "pnlGross": -1968478.3141722688,
      "pnlChange": 3359.706005999679,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-22",
      "appliedValue": null,
      "grossValue": 24644322.82,
      "redemptionValue": null,
      "pnlGross": -2024122.153701033,
      "pnlChange": 11586.184009573895,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-05",
      "appliedValue": null,
      "grossValue": 23539813.32,
      "redemptionValue": null,
      "pnlGross": -1838876.6061355004,
      "pnlChange": 11030.653877709585,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-19",
      "appliedValue": null,
      "grossValue": 26668977.19,
      "redemptionValue": null,
      "pnlGross": -1961146.2039514163,
      "pnlChange": 4371.078788692933,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-02",
      "appliedValue": null,
      "grossValue": 25312609.3,
      "redemptionValue": null,
      "pnlGross": -1757378.212078994,
      "pnlChange": 8047.385799254099,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-16",
      "appliedValue": null,
      "grossValue": 28010103.74,
      "redemptionValue": null,
      "pnlGross": -1870752.5902684217,
      "pnlChange": -18609.47641328729,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-30",
      "appliedValue": null,
      "grossValue": 26753922.66,
      "redemptionValue": null,
      "pnlGross": -1648478.7837667435,
      "pnlChange": 11083.124661664164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-13",
      "appliedValue": null,
      "grossValue": 28187253.76,
      "redemptionValue": null,
      "pnlGross": -1665418.7799991546,
      "pnlChange": -137557.20566751432,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-27",
      "appliedValue": null,
      "grossValue": 29104625.05,
      "redemptionValue": null,
      "pnlGross": -1643123.3019561998,
      "pnlChange": -6230.034426099253,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-11",
      "appliedValue": null,
      "grossValue": 27855195.22,
      "redemptionValue": null,
      "pnlGross": -1421137.540452839,
      "pnlChange": 14691.894768891265,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-26",
      "appliedValue": null,
      "grossValue": 30287735.75,
      "redemptionValue": null,
      "pnlGross": -1543279.5571839637,
      "pnlChange": 11695.540645514364,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-09",
      "appliedValue": null,
      "grossValue": 29267501.2,
      "redemptionValue": null,
      "pnlGross": -1335995.0502429,
      "pnlChange": 72375.19446241374,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-23",
      "appliedValue": null,
      "grossValue": 31291468.85,
      "redemptionValue": null,
      "pnlGross": -1398020.0010356298,
      "pnlChange": 10502.440952301087,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-06",
      "appliedValue": null,
      "grossValue": 30152198.84,
      "redemptionValue": null,
      "pnlGross": -1151545.1699746954,
      "pnlChange": 13601.42697866741,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-23",
      "appliedValue": null,
      "grossValue": 32729886.98,
      "redemptionValue": null,
      "pnlGross": -1279125.949253959,
      "pnlChange": 1878.9740389388448,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-09",
      "appliedValue": null,
      "grossValue": 32163511.48,
      "redemptionValue": null,
      "pnlGross": -1091352.214745331,
      "pnlChange": 15656.294496982551,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-23",
      "appliedValue": null,
      "grossValue": 34156349.24,
      "redemptionValue": null,
      "pnlGross": -1175133.509068065,
      "pnlChange": 1997.9709461223292,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-07",
      "appliedValue": null,
      "grossValue": 33835972.88,
      "redemptionValue": null,
      "pnlGross": -968547.1508090072,
      "pnlChange": 18083.055112798567,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-20",
      "appliedValue": null,
      "grossValue": 35388485.98,
      "redemptionValue": null,
      "pnlGross": -1048395.6638336524,
      "pnlChange": 35816.42437777953,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-06",
      "appliedValue": null,
      "grossValue": 35404952.64,
      "redemptionValue": null,
      "pnlGross": -864390.7485430043,
      "pnlChange": 18925.75529896596,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-20",
      "appliedValue": null,
      "grossValue": 37024286.23,
      "redemptionValue": null,
      "pnlGross": -914515.5705804836,
      "pnlChange": -77826.8986514145,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-02",
      "appliedValue": null,
      "grossValue": 37355509.23,
      "redemptionValue": null,
      "pnlGross": -763579.5407944273,
      "pnlChange": 19980.95861792878,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-17",
      "appliedValue": null,
      "grossValue": 35755580.03,
      "redemptionValue": null,
      "pnlGross": -814941.6407740585,
      "pnlChange": -17225.12005659798,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-01",
      "appliedValue": null,
      "grossValue": 37468059.15,
      "redemptionValue": null,
      "pnlGross": -825950.036646786,
      "pnlChange": -133177.24701463338,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-14",
      "appliedValue": null,
      "grossValue": 37717007.39,
      "redemptionValue": null,
      "pnlGross": -700202.6370032134,
      "pnlChange": -59005.6401126744,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-28",
      "appliedValue": null,
      "grossValue": 38864584.1,
      "redemptionValue": null,
      "pnlGross": -708583.6143449682,
      "pnlChange": 20795.7021919042,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-11",
      "appliedValue": null,
      "grossValue": 38420921.31,
      "redemptionValue": null,
      "pnlGross": -489923.0294370296,
      "pnlChange": 86421.96441911792,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-25",
      "appliedValue": null,
      "grossValue": 40312722.77,
      "redemptionValue": null,
      "pnlGross": -552235.8253337414,
      "pnlChange": 11677.438973921897,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-08",
      "appliedValue": null,
      "grossValue": 38405992.5,
      "redemptionValue": null,
      "pnlGross": -301368.7618824635,
      "pnlChange": 55573.57799453042,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-22",
      "appliedValue": null,
      "grossValue": 40873123.83,
      "redemptionValue": null,
      "pnlGross": -473403.2364622813,
      "pnlChange": 13473.212365348352,
      "statusPoint": "Último dia observado"
    }
  ],
  "FUND|G5CRVENC": [
    {
      "date": "2020-11-18",
      "appliedValue": null,
      "grossValue": 23030.19,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Entrada/1ª observação"
    },
    {
      "date": "2020-12-01",
      "appliedValue": null,
      "grossValue": 27211.29,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2020-12-14",
      "appliedValue": null,
      "grossValue": 67318.63,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2020-12-29",
      "appliedValue": null,
      "grossValue": 95757.16,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-01-12",
      "appliedValue": null,
      "grossValue": 146530.94,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-01-25",
      "appliedValue": null,
      "grossValue": 195252.14,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-02-05",
      "appliedValue": null,
      "grossValue": 232040.31,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-02-22",
      "appliedValue": null,
      "grossValue": 256754.68,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-03-08",
      "appliedValue": null,
      "grossValue": 256754.68,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-03-19",
      "appliedValue": null,
      "grossValue": 299759.47,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-04-01",
      "appliedValue": null,
      "grossValue": 299759.47,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-04-15",
      "appliedValue": null,
      "grossValue": 368756.0,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-04-30",
      "appliedValue": null,
      "grossValue": 392305.66,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-05-13",
      "appliedValue": null,
      "grossValue": 1597226.44,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-05-26",
      "appliedValue": null,
      "grossValue": 1617081.86,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-06-09",
      "appliedValue": null,
      "grossValue": 1640978.7,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-06-22",
      "appliedValue": null,
      "grossValue": 1740208.62,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-07-06",
      "appliedValue": null,
      "grossValue": 1768512.12,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-07-19",
      "appliedValue": null,
      "grossValue": 1803008.6,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-07-30",
      "appliedValue": null,
      "grossValue": 1812093.33,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-08-12",
      "appliedValue": null,
      "grossValue": 1843858.88,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-08-25",
      "appliedValue": null,
      "grossValue": 1850385.66,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-09-09",
      "appliedValue": null,
      "grossValue": 1877244.53,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-09-22",
      "appliedValue": null,
      "grossValue": 2382211.15,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-10-05",
      "appliedValue": null,
      "grossValue": 2440948.63,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-10-19",
      "appliedValue": null,
      "grossValue": 2364855.33,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-11-03",
      "appliedValue": null,
      "grossValue": 2415643.33,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-11-17",
      "appliedValue": null,
      "grossValue": 2581740.28,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-11-30",
      "appliedValue": null,
      "grossValue": 2565738.6,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-12-13",
      "appliedValue": null,
      "grossValue": 2680026.42,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2021-12-24",
      "appliedValue": null,
      "grossValue": 2680026.42,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-01-07",
      "appliedValue": null,
      "grossValue": 2687167.0,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-01-20",
      "appliedValue": null,
      "grossValue": 2668140.9,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-02-02",
      "appliedValue": null,
      "grossValue": 1434368.84,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-02-15",
      "appliedValue": null,
      "grossValue": 464191.59,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-03-02",
      "appliedValue": null,
      "grossValue": 335148.19,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-03-16",
      "appliedValue": null,
      "grossValue": 397879.62,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-03-29",
      "appliedValue": null,
      "grossValue": 394797.11,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-04-11",
      "appliedValue": null,
      "grossValue": 477705.01,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-04-26",
      "appliedValue": null,
      "grossValue": 471385.0,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-05-10",
      "appliedValue": null,
      "grossValue": 549312.42,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-05-23",
      "appliedValue": null,
      "grossValue": 607496.38,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-06-03",
      "appliedValue": null,
      "grossValue": 672178.52,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-06-17",
      "appliedValue": null,
      "grossValue": 701230.76,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-06-30",
      "appliedValue": null,
      "grossValue": 699483.76,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-07-14",
      "appliedValue": null,
      "grossValue": 951621.38,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-07-27",
      "appliedValue": null,
      "grossValue": 926915.59,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-08-09",
      "appliedValue": null,
      "grossValue": 926087.07,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-08-22",
      "appliedValue": null,
      "grossValue": 979530.01,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-09-02",
      "appliedValue": null,
      "grossValue": 1384496.2,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-09-19",
      "appliedValue": null,
      "grossValue": 1514360.92,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-09-30",
      "appliedValue": null,
      "grossValue": 1652455.38,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-10-14",
      "appliedValue": null,
      "grossValue": 1902569.48,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-10-27",
      "appliedValue": null,
      "grossValue": 1961091.3,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-11-11",
      "appliedValue": null,
      "grossValue": 2198165.85,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-11-25",
      "appliedValue": null,
      "grossValue": 2319438.85,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-12-08",
      "appliedValue": null,
      "grossValue": 2255926.84,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2022-12-21",
      "appliedValue": null,
      "grossValue": 2122998.92,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-01-03",
      "appliedValue": null,
      "grossValue": 2170727.7,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-01-17",
      "appliedValue": null,
      "grossValue": 1838239.44,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-01-30",
      "appliedValue": null,
      "grossValue": 1888795.09,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-02-10",
      "appliedValue": null,
      "grossValue": 2017095.84,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-02-27",
      "appliedValue": null,
      "grossValue": 2358936.83,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-03-10",
      "appliedValue": null,
      "grossValue": 2407124.55,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-03-24",
      "appliedValue": null,
      "grossValue": 2786311.74,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-04-06",
      "appliedValue": null,
      "grossValue": 2952563.99,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-04-20",
      "appliedValue": null,
      "grossValue": 3317600.28,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-05-05",
      "appliedValue": null,
      "grossValue": 3414750.64,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-05-19",
      "appliedValue": null,
      "grossValue": 3825299.04,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-06-01",
      "appliedValue": null,
      "grossValue": 3804017.11,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-06-15",
      "appliedValue": null,
      "grossValue": 4385032.36,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-06-29",
      "appliedValue": null,
      "grossValue": 4450485.56,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-07-12",
      "appliedValue": null,
      "grossValue": 4891353.83,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-07-26",
      "appliedValue": null,
      "grossValue": 4940514.01,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-08-08",
      "appliedValue": null,
      "grossValue": 5067360.27,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-08-21",
      "appliedValue": null,
      "grossValue": 5436842.35,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-09-01",
      "appliedValue": null,
      "grossValue": 5369531.38,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-09-15",
      "appliedValue": null,
      "grossValue": 5874673.16,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-09-29",
      "appliedValue": null,
      "grossValue": 5881417.83,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-10-13",
      "appliedValue": null,
      "grossValue": 6056913.95,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-10-26",
      "appliedValue": null,
      "grossValue": 5993421.08,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-11-09",
      "appliedValue": null,
      "grossValue": 7150730.09,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-11-24",
      "appliedValue": null,
      "grossValue": 7277645.33,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-12-07",
      "appliedValue": null,
      "grossValue": 7290069.67,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-12-20",
      "appliedValue": null,
      "grossValue": 7749970.15,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-01-04",
      "appliedValue": null,
      "grossValue": 7926733.8,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-01-17",
      "appliedValue": null,
      "grossValue": 8249220.47,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-01-31",
      "appliedValue": null,
      "grossValue": 8270213.48,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-02-15",
      "appliedValue": null,
      "grossValue": 8807085.17,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-02-28",
      "appliedValue": null,
      "grossValue": 8566929.71,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-03-12",
      "appliedValue": null,
      "grossValue": 9219739.38,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-03-25",
      "appliedValue": null,
      "grossValue": 9181970.88,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-04-09",
      "appliedValue": null,
      "grossValue": 9359931.96,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-04-22",
      "appliedValue": null,
      "grossValue": 9834822.36,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-05-06",
      "appliedValue": null,
      "grossValue": 10035744.09,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-05-17",
      "appliedValue": null,
      "grossValue": 10615226.04,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-06-03",
      "appliedValue": null,
      "grossValue": 10721297.75,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-06-14",
      "appliedValue": null,
      "grossValue": 11539549.39,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-06-27",
      "appliedValue": null,
      "grossValue": 11182996.55,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-07-10",
      "appliedValue": null,
      "grossValue": 11973734.98,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-07-23",
      "appliedValue": null,
      "grossValue": 11906446.44,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-08-06",
      "appliedValue": null,
      "grossValue": 12124285.41,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-08-19",
      "appliedValue": null,
      "grossValue": 12805167.35,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-08-30",
      "appliedValue": null,
      "grossValue": 12716435.98,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-09-12",
      "appliedValue": null,
      "grossValue": 13576888.44,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-09-25",
      "appliedValue": null,
      "grossValue": 13593780.72,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-10-09",
      "appliedValue": null,
      "grossValue": 14275220.93,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-10-22",
      "appliedValue": null,
      "grossValue": 14037641.61,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-11-04",
      "appliedValue": null,
      "grossValue": 13695644.72,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-11-18",
      "appliedValue": null,
      "grossValue": 14346669.76,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-12-03",
      "appliedValue": null,
      "grossValue": 13940155.23,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-12-16",
      "appliedValue": null,
      "grossValue": 13839788.73,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-12-30",
      "appliedValue": null,
      "grossValue": 12778810.6,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-13",
      "appliedValue": null,
      "grossValue": 12699387.08,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-24",
      "appliedValue": null,
      "grossValue": 12615423.11,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-10",
      "appliedValue": null,
      "grossValue": 12518941.41,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-21",
      "appliedValue": null,
      "grossValue": 12186017.75,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-10",
      "appliedValue": null,
      "grossValue": 12104463.21,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-21",
      "appliedValue": null,
      "grossValue": 11838824.82,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-03",
      "appliedValue": null,
      "grossValue": 11776047.14,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-17",
      "appliedValue": null,
      "grossValue": 11626059.14,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-05",
      "appliedValue": null,
      "grossValue": 11384367.91,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-16",
      "appliedValue": null,
      "grossValue": 11216285.23,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-29",
      "appliedValue": null,
      "grossValue": 11139902.8,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-12",
      "appliedValue": null,
      "grossValue": 11032598.49,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-26",
      "appliedValue": null,
      "grossValue": 10816571.07,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-09",
      "appliedValue": null,
      "grossValue": 10602269.79,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-22",
      "appliedValue": null,
      "grossValue": 10370322.21,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-04",
      "appliedValue": null,
      "grossValue": 10304984.08,
      "redemptionValue": null,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-18",
      "appliedValue": null,
      "grossValue": 10094179.34,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-29",
      "appliedValue": null,
      "grossValue": 10000543.09,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-11",
      "appliedValue": null,
      "grossValue": 9940287.31,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-24",
      "appliedValue": null,
      "grossValue": 9874549.7,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-07",
      "appliedValue": null,
      "grossValue": 9632129.34,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-21",
      "appliedValue": null,
      "grossValue": 9513590.42,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-03",
      "appliedValue": null,
      "grossValue": 9472610.05,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-14",
      "appliedValue": null,
      "grossValue": 9250168.31,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-28",
      "appliedValue": null,
      "grossValue": 9221061.98,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-12",
      "appliedValue": null,
      "grossValue": 9176074.17,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-26",
      "appliedValue": null,
      "grossValue": 9126420.42,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-09",
      "appliedValue": null,
      "grossValue": 9042813.09,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-22",
      "appliedValue": null,
      "grossValue": 8993241.66,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-04",
      "appliedValue": null,
      "grossValue": 8962436.54,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-20",
      "appliedValue": null,
      "grossValue": 8885968.57,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-05",
      "appliedValue": null,
      "grossValue": 8824426.03,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-18",
      "appliedValue": null,
      "grossValue": 8756152.46,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-31",
      "appliedValue": null,
      "grossValue": 8689052.03,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-14",
      "appliedValue": null,
      "grossValue": 8621575.37,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-29",
      "appliedValue": null,
      "grossValue": 8491354.76,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-13",
      "appliedValue": null,
      "grossValue": 8376664.49,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-26",
      "appliedValue": null,
      "grossValue": 8233954.67,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-09",
      "appliedValue": null,
      "grossValue": 7667694.88,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-23",
      "appliedValue": null,
      "grossValue": 7594667.03,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-06",
      "appliedValue": null,
      "grossValue": 7573843.08,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-17",
      "appliedValue": null,
      "grossValue": 7496299.65,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-30",
      "appliedValue": null,
      "grossValue": 7432580.16,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-12",
      "appliedValue": null,
      "grossValue": 7398255.17,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-26",
      "appliedValue": null,
      "grossValue": 7336027.65,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-09",
      "appliedValue": null,
      "grossValue": 7150652.57,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-22",
      "appliedValue": null,
      "grossValue": 6978608.2,
      "redemptionValue": null,
      "pnlGross": 8.89307967521836,
      "pnlChange": 0.0,
      "statusPoint": "Último dia observado"
    }
  ],
  "RF|C285318": [
    {
      "date": "2025-07-21",
      "appliedValue": 5404743.42,
      "grossValue": 5404743.42,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": null,
      "statusPoint": "Entrada/1ª observação"
    },
    {
      "date": "2025-07-23",
      "appliedValue": 5404743.42,
      "grossValue": 5410177.84,
      "redemptionValue": 0.0,
      "pnlGross": 5434.4199999999255,
      "pnlChange": 2691.379999999888,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-25",
      "appliedValue": 5404743.42,
      "grossValue": 5415687.56,
      "redemptionValue": 0.0,
      "pnlGross": 10944.139999999665,
      "pnlChange": 2790.4599999999627,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-29",
      "appliedValue": 5404743.42,
      "grossValue": 5426653.86,
      "redemptionValue": 0.0,
      "pnlGross": 21910.44000000041,
      "pnlChange": 2743.6500000003725,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-30",
      "appliedValue": 5404743.42,
      "grossValue": 5429398.91,
      "redemptionValue": 0.0,
      "pnlGross": 24655.490000000224,
      "pnlChange": 2745.0499999998137,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-01",
      "appliedValue": 5404743.42,
      "grossValue": 5434893.16,
      "redemptionValue": 0.0,
      "pnlGross": 30149.740000000224,
      "pnlChange": 2747.820000000298,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-05",
      "appliedValue": 5404743.42,
      "grossValue": 5445898.35,
      "redemptionValue": 0.0,
      "pnlGross": 41154.9299999997,
      "pnlChange": 2753.379999999888,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-07",
      "appliedValue": 5404743.42,
      "grossValue": 5451409.3,
      "redemptionValue": 0.0,
      "pnlGross": 46665.87999999989,
      "pnlChange": 2756.169999999925,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-11",
      "appliedValue": 5404743.42,
      "grossValue": 5462447.94,
      "redemptionValue": 0.0,
      "pnlGross": 57704.52000000048,
      "pnlChange": 8281.070000000298,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-13",
      "appliedValue": 5404743.42,
      "grossValue": 5463920.68,
      "redemptionValue": 0.0,
      "pnlGross": 59177.25999999978,
      "pnlChange": 2586.3499999996275,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-15",
      "appliedValue": 5404743.42,
      "grossValue": 5469097.05,
      "redemptionValue": 0.0,
      "pnlGross": 64353.62999999989,
      "pnlChange": 2588.7999999998137,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-18",
      "appliedValue": 5404743.42,
      "grossValue": 5476870.79,
      "redemptionValue": 0.0,
      "pnlGross": 72127.37000000011,
      "pnlChange": 7773.740000000223,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-20",
      "appliedValue": 5404743.42,
      "grossValue": 5480716.54,
      "redemptionValue": 0.0,
      "pnlGross": 75973.12000000011,
      "pnlChange": 1923.2099999999627,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-22",
      "appliedValue": 5404743.42,
      "grossValue": 5484565.0,
      "redemptionValue": 0.0,
      "pnlGross": 79821.58000000007,
      "pnlChange": 1924.570000000298,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-26",
      "appliedValue": 5404743.42,
      "grossValue": 5492128.1,
      "redemptionValue": 0.0,
      "pnlGross": 87384.6799999997,
      "pnlChange": 1785.359999999404,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-28",
      "appliedValue": 5404743.42,
      "grossValue": 5495949.06,
      "redemptionValue": 0.0,
      "pnlGross": 91205.63999999966,
      "pnlChange": 1910.8199999993667,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-01",
      "appliedValue": 5404743.42,
      "grossValue": 5503598.96,
      "redemptionValue": 0.0,
      "pnlGross": 98855.54000000004,
      "pnlChange": 5738.429999999702,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-03",
      "appliedValue": 5404743.42,
      "grossValue": 5507427.9,
      "redemptionValue": 0.0,
      "pnlGross": 102684.48000000045,
      "pnlChange": 1914.800000000745,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-05",
      "appliedValue": 5404743.42,
      "grossValue": 5511259.51,
      "redemptionValue": 0.0,
      "pnlGross": 106516.08999999984,
      "pnlChange": 1916.1399999996647,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-08",
      "appliedValue": 5404743.42,
      "grossValue": 5517011.91,
      "redemptionValue": 0.0,
      "pnlGross": 112268.49000000022,
      "pnlChange": 5752.4000000003725,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-10",
      "appliedValue": 5404743.42,
      "grossValue": 5521670.46,
      "redemptionValue": 0.0,
      "pnlGross": 116927.04000000004,
      "pnlChange": 2739.7400000002235,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-12",
      "appliedValue": 5404743.42,
      "grossValue": 5525583.35,
      "redemptionValue": 0.0,
      "pnlGross": 120839.9299999997,
      "pnlChange": 1956.7900000000373,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-16",
      "appliedValue": 5404743.42,
      "grossValue": 5533417.47,
      "redemptionValue": 0.0,
      "pnlGross": 128674.0499999998,
      "pnlChange": 1959.5699999993667,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-18",
      "appliedValue": 5404743.42,
      "grossValue": 5537338.69,
      "redemptionValue": 0.0,
      "pnlGross": 132595.27000000048,
      "pnlChange": 1960.9500000001865,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-22",
      "appliedValue": 5404743.42,
      "grossValue": 5550475.88,
      "redemptionValue": 0.0,
      "pnlGross": 145732.45999999996,
      "pnlChange": 9855.80999999959,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-24",
      "appliedValue": 5404743.42,
      "grossValue": 5557056.15,
      "redemptionValue": 0.0,
      "pnlGross": 152312.73000000045,
      "pnlChange": 3291.1100000003357,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-25",
      "appliedValue": 5404743.42,
      "grossValue": 5559446.29,
      "redemptionValue": 0.0,
      "pnlGross": 154702.8700000001,
      "pnlChange": 2390.1399999996647,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-29",
      "appliedValue": 5404743.42,
      "grossValue": 5572118.8,
      "redemptionValue": 0.0,
      "pnlGross": 167375.3799999999,
      "pnlChange": 9507.089999999853,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-01",
      "appliedValue": 5404743.42,
      "grossValue": 5578465.89,
      "redemptionValue": 0.0,
      "pnlGross": 173722.46999999974,
      "pnlChange": 3174.449999999255,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-03",
      "appliedValue": 5404743.42,
      "grossValue": 5584820.2,
      "redemptionValue": 0.0,
      "pnlGross": 180076.78000000026,
      "pnlChange": 3178.060000000521,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-07",
      "appliedValue": 5404743.42,
      "grossValue": 5597550.56,
      "redemptionValue": 0.0,
      "pnlGross": 192807.1399999997,
      "pnlChange": 3185.30999999959,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-09",
      "appliedValue": 5404743.42,
      "grossValue": 5601585.4,
      "redemptionValue": 0.0,
      "pnlGross": 196841.98000000045,
      "pnlChange": 847.7200000006706,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-13",
      "appliedValue": 5404743.42,
      "grossValue": 5613907.11,
      "redemptionValue": 0.0,
      "pnlGross": 209163.6900000004,
      "pnlChange": 9243.820000000298,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-14",
      "appliedValue": 5404743.42,
      "grossValue": 5616991.78,
      "redemptionValue": 0.0,
      "pnlGross": 212248.36000000036,
      "pnlChange": 3084.669999999925,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-16",
      "appliedValue": 5404743.42,
      "grossValue": 5623166.19,
      "redemptionValue": 0.0,
      "pnlGross": 218422.77000000048,
      "pnlChange": 3088.060000000521,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-20",
      "appliedValue": 5404743.42,
      "grossValue": 5634499.14,
      "redemptionValue": 0.0,
      "pnlGross": 229755.7199999997,
      "pnlChange": 8243.199999999255,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-22",
      "appliedValue": 5404743.42,
      "grossValue": 5639655.61,
      "redemptionValue": 0.0,
      "pnlGross": 234912.1900000004,
      "pnlChange": 2578.8300000000745,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-24",
      "appliedValue": 5404743.42,
      "grossValue": 5644162.48,
      "redemptionValue": 0.0,
      "pnlGross": 239419.0600000005,
      "pnlChange": 1926.870000000112,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-28",
      "appliedValue": 5404743.42,
      "grossValue": 5654060.87,
      "redemptionValue": 0.0,
      "pnlGross": 249317.4500000002,
      "pnlChange": 2476.2199999997392,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-30",
      "appliedValue": 5404743.42,
      "grossValue": 5659016.57,
      "redemptionValue": 0.0,
      "pnlGross": 254273.1500000004,
      "pnlChange": 2478.390000000596,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-31",
      "appliedValue": 5404743.42,
      "grossValue": 5661496.05,
      "redemptionValue": 0.0,
      "pnlGross": 256752.6299999999,
      "pnlChange": 2479.479999999516,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-04",
      "appliedValue": 5404743.42,
      "grossValue": 5671424.84,
      "redemptionValue": 0.0,
      "pnlGross": 266681.4199999999,
      "pnlChange": 2483.8300000000745,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-06",
      "appliedValue": 5404743.42,
      "grossValue": 5676395.76,
      "redemptionValue": 0.0,
      "pnlGross": 271652.33999999985,
      "pnlChange": 2486.0099999997765,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-10",
      "appliedValue": 5404743.42,
      "grossValue": 5686350.67,
      "redemptionValue": 0.0,
      "pnlGross": 281607.25,
      "pnlChange": 7467.820000000298,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-12",
      "appliedValue": 5404743.42,
      "grossValue": 5688584.77,
      "redemptionValue": 0.0,
      "pnlGross": 283841.3499999996,
      "pnlChange": 2381.419999999925,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-14",
      "appliedValue": 5404743.42,
      "grossValue": 5693350.6,
      "redemptionValue": 0.0,
      "pnlGross": 288607.1799999997,
      "pnlChange": 2383.4099999992177,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-18",
      "appliedValue": 5404743.42,
      "grossValue": 5702894.25,
      "redemptionValue": 0.0,
      "pnlGross": 298150.8300000001,
      "pnlChange": 2387.410000000149,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-19",
      "appliedValue": 5404743.42,
      "grossValue": 5705554.01,
      "redemptionValue": 0.0,
      "pnlGross": 300810.58999999985,
      "pnlChange": 2659.7599999997765,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-24",
      "appliedValue": 5404743.42,
      "grossValue": 5718871.41,
      "redemptionValue": 0.0,
      "pnlGross": 314127.9900000002,
      "pnlChange": 7994.169999999925,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-26",
      "appliedValue": 5404743.42,
      "grossValue": 5723750.13,
      "redemptionValue": 0.0,
      "pnlGross": 319006.71,
      "pnlChange": 2211.5099999997765,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-28",
      "appliedValue": 5404743.42,
      "grossValue": 5728976.01,
      "redemptionValue": 0.0,
      "pnlGross": 324232.58999999985,
      "pnlChange": 2613.529999999329,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-02",
      "appliedValue": 5404743.42,
      "grossValue": 5739442.09,
      "redemptionValue": 0.0,
      "pnlGross": 334698.6699999999,
      "pnlChange": 2618.30999999959,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-04",
      "appliedValue": 5404743.42,
      "grossValue": 5744682.29,
      "redemptionValue": 0.0,
      "pnlGross": 339938.8700000001,
      "pnlChange": 2620.7000000001863,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-08",
      "appliedValue": 5404743.42,
      "grossValue": 5755177.06,
      "redemptionValue": 0.0,
      "pnlGross": 350433.63999999966,
      "pnlChange": 7872.86999999918,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-10",
      "appliedValue": 5404743.42,
      "grossValue": 5759588.43,
      "redemptionValue": 0.0,
      "pnlGross": 354845.0099999998,
      "pnlChange": 1784.679999999702,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-11",
      "appliedValue": 5404743.42,
      "grossValue": 5762178.79,
      "redemptionValue": 0.0,
      "pnlGross": 357435.3700000001,
      "pnlChange": 2590.3600000003357,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-15",
      "appliedValue": 5404743.42,
      "grossValue": 5772551.88,
      "redemptionValue": 0.0,
      "pnlGross": 367808.46,
      "pnlChange": 7781.570000000298,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-17",
      "appliedValue": 5404743.42,
      "grossValue": 5777745.42,
      "redemptionValue": 0.0,
      "pnlGross": 373002.0,
      "pnlChange": 2597.3600000003357,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-19",
      "appliedValue": 5404743.42,
      "grossValue": 5783397.42,
      "redemptionValue": 0.0,
      "pnlGross": 378654.0,
      "pnlChange": 3053.479999999516,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-23",
      "appliedValue": 5404743.42,
      "grossValue": 5794789.45,
      "redemptionValue": 0.0,
      "pnlGross": 390046.03000000026,
      "pnlChange": 2221.919999999925,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-26",
      "appliedValue": 5404743.42,
      "grossValue": 5803474.08,
      "redemptionValue": 0.0,
      "pnlGross": 398730.66000000015,
      "pnlChange": 5791.200000000186,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-30",
      "appliedValue": 5404743.42,
      "grossValue": 5815073.83,
      "redemptionValue": 0.0,
      "pnlGross": 410330.41000000015,
      "pnlChange": 2902.1100000003357,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-31",
      "appliedValue": 5404743.42,
      "grossValue": 5817977.39,
      "redemptionValue": 0.0,
      "pnlGross": 413233.9699999997,
      "pnlChange": 2903.55999999959,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-05",
      "appliedValue": 5404743.42,
      "grossValue": 5832516.94,
      "redemptionValue": 0.0,
      "pnlGross": 427773.5200000005,
      "pnlChange": 8728.090000000782,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-07",
      "appliedValue": 5404743.42,
      "grossValue": 5838342.93,
      "redemptionValue": 0.0,
      "pnlGross": 433599.5099999998,
      "pnlChange": 2913.7199999997392,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-09",
      "appliedValue": 5404743.42,
      "grossValue": 5843761.39,
      "redemptionValue": 0.0,
      "pnlGross": 439017.9699999997,
      "pnlChange": 2503.279999999329,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-13",
      "appliedValue": 5404743.42,
      "grossValue": 5855366.37,
      "redemptionValue": 0.0,
      "pnlGross": 450622.9500000002,
      "pnlChange": 2903.410000000149,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-15",
      "appliedValue": 5404743.42,
      "grossValue": 5861177.49,
      "redemptionValue": 0.0,
      "pnlGross": 456434.0700000003,
      "pnlChange": 2906.2800000002608,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-19",
      "appliedValue": 5404743.42,
      "grossValue": 5872873.69,
      "redemptionValue": 0.0,
      "pnlGross": 468130.2700000005,
      "pnlChange": 8788.47000000067,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-20",
      "appliedValue": 5404743.42,
      "grossValue": 5875843.89,
      "redemptionValue": 0.0,
      "pnlGross": 471100.4699999997,
      "pnlChange": 2970.199999999255,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-22",
      "appliedValue": 5404743.42,
      "grossValue": 5881788.79,
      "redemptionValue": 0.0,
      "pnlGross": 477045.3700000001,
      "pnlChange": 2973.2000000001863,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-26",
      "appliedValue": 5404743.42,
      "grossValue": 5893696.63,
      "redemptionValue": 0.0,
      "pnlGross": 488953.21,
      "pnlChange": 8933.139999999665,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-28",
      "appliedValue": 5404743.42,
      "grossValue": 5899090.65,
      "redemptionValue": 0.0,
      "pnlGross": 494347.2300000005,
      "pnlChange": 2925.0800000000745,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-30",
      "appliedValue": 5404743.42,
      "grossValue": 5904945.17,
      "redemptionValue": 0.0,
      "pnlGross": 500201.75,
      "pnlChange": 2927.9900000002235,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-03",
      "appliedValue": 5404743.42,
      "grossValue": 5916671.65,
      "redemptionValue": 0.0,
      "pnlGross": 511928.2300000005,
      "pnlChange": 2933.800000000745,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-05",
      "appliedValue": 5404743.42,
      "grossValue": 5922543.62,
      "redemptionValue": 0.0,
      "pnlGross": 517800.2000000002,
      "pnlChange": 2936.7199999997392,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-06",
      "appliedValue": 5404743.42,
      "grossValue": 5925481.79,
      "redemptionValue": 0.0,
      "pnlGross": 520738.3700000001,
      "pnlChange": 2938.169999999925,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-10",
      "appliedValue": 5404743.42,
      "grossValue": 5937249.05,
      "redemptionValue": 0.0,
      "pnlGross": 532505.6299999999,
      "pnlChange": 2944.0099999997765,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-12",
      "appliedValue": 5404743.42,
      "grossValue": 5943141.44,
      "redemptionValue": 0.0,
      "pnlGross": 538398.0200000005,
      "pnlChange": 2946.9300000006333,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-18",
      "appliedValue": 5404743.42,
      "grossValue": 5822868.43,
      "redemptionValue": 0.0,
      "pnlGross": 418125.0099999998,
      "pnlChange": -123221.40000000036,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-20",
      "appliedValue": 5404743.42,
      "grossValue": 5829277.74,
      "redemptionValue": 0.0,
      "pnlGross": 424534.3200000003,
      "pnlChange": 3205.5400000000373,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-24",
      "appliedValue": 5404743.42,
      "grossValue": 5842117.52,
      "redemptionValue": 0.0,
      "pnlGross": 437374.0999999996,
      "pnlChange": 3212.589999999851,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-26",
      "appliedValue": 5404743.42,
      "grossValue": 5848548.01,
      "redemptionValue": 0.0,
      "pnlGross": 443804.5899999999,
      "pnlChange": 3216.129999999888,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-02",
      "appliedValue": 5404743.42,
      "grossValue": 5866179.17,
      "redemptionValue": 0.0,
      "pnlGross": 461435.75,
      "pnlChange": 10857.790000000035,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-03",
      "appliedValue": 5404743.42,
      "grossValue": 5869802.91,
      "redemptionValue": 0.0,
      "pnlGross": 465059.4900000002,
      "pnlChange": 3623.740000000224,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-05",
      "appliedValue": 5404743.42,
      "grossValue": 5877057.1,
      "redemptionValue": 0.0,
      "pnlGross": 472313.6799999997,
      "pnlChange": 3628.2199999997392,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-09",
      "appliedValue": 5404743.42,
      "grossValue": 5891592.38,
      "redemptionValue": 0.0,
      "pnlGross": 486848.96,
      "pnlChange": 10904.830000000076,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-11",
      "appliedValue": 5404743.42,
      "grossValue": 5898873.5,
      "redemptionValue": 0.0,
      "pnlGross": 494130.0800000001,
      "pnlChange": 3641.679999999702,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-13",
      "appliedValue": 5404743.42,
      "grossValue": 5909055.85,
      "redemptionValue": 0.0,
      "pnlGross": 504312.4299999997,
      "pnlChange": 3773.6699999999255,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-17",
      "appliedValue": 5404743.42,
      "grossValue": 5924174.66,
      "redemptionValue": 0.0,
      "pnlGross": 519431.2400000002,
      "pnlChange": 3783.3300000000745,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-19",
      "appliedValue": 5404743.42,
      "grossValue": 5791825.27,
      "redemptionValue": 0.0,
      "pnlGross": 387081.8499999996,
      "pnlChange": 2816.0499999998137,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-20",
      "appliedValue": 5404743.42,
      "grossValue": 5794642.69,
      "redemptionValue": 0.0,
      "pnlGross": 389899.2700000005,
      "pnlChange": 2817.420000000857,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-24",
      "appliedValue": 5404743.42,
      "grossValue": 5805926.07,
      "redemptionValue": 0.0,
      "pnlGross": 401182.6500000004,
      "pnlChange": 2822.9000000003725,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-26",
      "appliedValue": 5404743.42,
      "grossValue": 5817697.36,
      "redemptionValue": 0.0,
      "pnlGross": 412953.9400000004,
      "pnlChange": 8947.010000000708,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-30",
      "appliedValue": 5404743.42,
      "grossValue": 5832094.7,
      "redemptionValue": 0.0,
      "pnlGross": 427351.28000000026,
      "pnlChange": 10801.339999999853,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-01",
      "appliedValue": 5404743.42,
      "grossValue": 5839306.72,
      "redemptionValue": 0.0,
      "pnlGross": 434563.2999999998,
      "pnlChange": 3607.120000000112,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-06",
      "appliedValue": 5404743.42,
      "grossValue": 5857375.83,
      "redemptionValue": 0.0,
      "pnlGross": 452632.41000000015,
      "pnlChange": 14459.75,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-08",
      "appliedValue": 5404743.42,
      "grossValue": 5864619.12,
      "redemptionValue": 0.0,
      "pnlGross": 459875.7000000002,
      "pnlChange": 3622.770000000484,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-09",
      "appliedValue": 5404743.42,
      "grossValue": 5868244.12,
      "redemptionValue": 0.0,
      "pnlGross": 463500.7000000002,
      "pnlChange": 3625.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-13",
      "appliedValue": 5404743.42,
      "grossValue": 5891093.97,
      "redemptionValue": 0.0,
      "pnlGross": 486350.5499999998,
      "pnlChange": 11870.290000000035,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-15",
      "appliedValue": 5404743.42,
      "grossValue": 5899020.81,
      "redemptionValue": 0.0,
      "pnlGross": 494277.38999999966,
      "pnlChange": 3964.75,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-17",
      "appliedValue": 5404743.42,
      "grossValue": 5906958.31,
      "redemptionValue": 0.0,
      "pnlGross": 502214.88999999966,
      "pnlChange": 3970.089999999851,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-22",
      "appliedValue": 5404743.42,
      "grossValue": 5785093.99,
      "redemptionValue": 0.0,
      "pnlGross": 380350.5700000003,
      "pnlChange": 7118.209999999963,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-24",
      "appliedValue": 5404743.42,
      "grossValue": 5792220.98,
      "redemptionValue": 0.0,
      "pnlGross": 387477.5600000005,
      "pnlChange": 3564.5900000007823,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-28",
      "appliedValue": 5404743.42,
      "grossValue": 5806309.06,
      "redemptionValue": 0.0,
      "pnlGross": 401565.63999999966,
      "pnlChange": 3381.129999999888,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-29",
      "appliedValue": 5404743.42,
      "grossValue": 5809865.28,
      "redemptionValue": 0.0,
      "pnlGross": 405121.86000000034,
      "pnlChange": 3556.2200000006706,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-04",
      "appliedValue": 5404743.42,
      "grossValue": 5827679.1,
      "redemptionValue": 0.0,
      "pnlGross": 422935.6799999997,
      "pnlChange": 14255.419999999924,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-06",
      "appliedValue": 5404743.42,
      "grossValue": 5834819.91,
      "redemptionValue": 0.0,
      "pnlGross": 430076.4900000002,
      "pnlChange": 3571.5,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-08",
      "appliedValue": 5404743.42,
      "grossValue": 5841969.47,
      "redemptionValue": 0.0,
      "pnlGross": 437226.0499999998,
      "pnlChange": 3575.870000000112,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-12",
      "appliedValue": 5404743.42,
      "grossValue": 5856294.89,
      "redemptionValue": 0.0,
      "pnlGross": 451551.4699999997,
      "pnlChange": 3584.649999999441,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-14",
      "appliedValue": 5404743.42,
      "grossValue": 5863470.76,
      "redemptionValue": 0.0,
      "pnlGross": 458727.3399999999,
      "pnlChange": 3589.029999999329,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-18",
      "appliedValue": 5404743.42,
      "grossValue": 5736735.78,
      "redemptionValue": 0.0,
      "pnlGross": 331992.36000000034,
      "pnlChange": -130326.21999999974,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-20",
      "appliedValue": 5404743.42,
      "grossValue": 5743056.42,
      "redemptionValue": 0.0,
      "pnlGross": 338313.0,
      "pnlChange": 3161.1899999994785,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-21",
      "appliedValue": 5404743.42,
      "grossValue": 5746219.35,
      "redemptionValue": 0.0,
      "pnlGross": 341475.9299999997,
      "pnlChange": 3162.929999999702,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-25",
      "appliedValue": 5404743.42,
      "grossValue": 5758888.5,
      "redemptionValue": 0.0,
      "pnlGross": 354145.0800000001,
      "pnlChange": 9504.480000000449,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-27",
      "appliedValue": 5404743.42,
      "grossValue": 5765233.55,
      "redemptionValue": 0.0,
      "pnlGross": 360490.1299999999,
      "pnlChange": 3173.399999999441,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-29",
      "appliedValue": 5404743.42,
      "grossValue": 5771585.59,
      "redemptionValue": 0.0,
      "pnlGross": 366842.1699999999,
      "pnlChange": 3176.899999999441,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-02",
      "appliedValue": 5404743.42,
      "grossValue": 5784310.66,
      "redemptionValue": 0.0,
      "pnlGross": 379567.2400000002,
      "pnlChange": 3183.890000000596,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-05",
      "appliedValue": 5404743.42,
      "grossValue": 5793872.88,
      "redemptionValue": 0.0,
      "pnlGross": 389129.46,
      "pnlChange": 6376.570000000298,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-09",
      "appliedValue": 5404743.42,
      "grossValue": 5809926.99,
      "redemptionValue": 0.0,
      "pnlGross": 405183.5700000003,
      "pnlChange": 6476.089999999851,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-10",
      "appliedValue": 5404743.42,
      "grossValue": 5813275.96,
      "redemptionValue": 0.0,
      "pnlGross": 408532.54,
      "pnlChange": 3348.9699999997392,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-12",
      "appliedValue": 5404743.42,
      "grossValue": 5819979.7,
      "redemptionValue": 0.0,
      "pnlGross": 415236.28000000026,
      "pnlChange": 3352.839999999851,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-16",
      "appliedValue": 5404743.42,
      "grossValue": 5833410.37,
      "redemptionValue": 0.0,
      "pnlGross": 428666.9500000002,
      "pnlChange": 3360.570000000298,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-18",
      "appliedValue": 5404743.42,
      "grossValue": 5698205.74,
      "redemptionValue": 0.0,
      "pnlGross": 293462.3200000003,
      "pnlChange": -138567.1299999999,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-22",
      "appliedValue": 5404743.42,
      "grossValue": 5709678.44,
      "redemptionValue": 0.0,
      "pnlGross": 304935.0200000005,
      "pnlChange": 8606.680000000633,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-24",
      "appliedValue": 5404743.42,
      "grossValue": 5715423.45,
      "redemptionValue": 0.0,
      "pnlGross": 310680.03000000026,
      "pnlChange": 2873.2199999997392,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-26",
      "appliedValue": 5404743.42,
      "grossValue": 5721174.24,
      "redemptionValue": 0.0,
      "pnlGross": 316430.8200000003,
      "pnlChange": 2876.120000000112,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-29",
      "appliedValue": 5404743.42,
      "grossValue": 5729811.28,
      "redemptionValue": 0.0,
      "pnlGross": 325067.86000000034,
      "pnlChange": 8637.040000000037,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-01",
      "appliedValue": 5404743.42,
      "grossValue": 5735576.54,
      "redemptionValue": 0.0,
      "pnlGross": 330833.1200000001,
      "pnlChange": 2883.3499999996275,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-03",
      "appliedValue": 5404743.42,
      "grossValue": 5741061.51,
      "redemptionValue": 0.0,
      "pnlGross": 336318.08999999985,
      "pnlChange": 2600.160000000149,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-07",
      "appliedValue": 5404743.42,
      "grossValue": 5752544.05,
      "redemptionValue": 0.0,
      "pnlGross": 347800.6299999999,
      "pnlChange": 2872.7900000000373,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-09",
      "appliedValue": 5404743.42,
      "grossValue": 5751462.36,
      "redemptionValue": 0.0,
      "pnlGross": 346718.9400000004,
      "pnlChange": -3955.9099999992177,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-13",
      "appliedValue": 5404743.42,
      "grossValue": 5761662.77,
      "redemptionValue": 0.0,
      "pnlGross": 356919.3499999996,
      "pnlChange": 7652.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-15",
      "appliedValue": 5404743.42,
      "grossValue": 5766769.76,
      "redemptionValue": 0.0,
      "pnlGross": 362026.3399999999,
      "pnlChange": 2554.05999999959,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-16",
      "appliedValue": 5404743.42,
      "grossValue": 5769324.95,
      "redemptionValue": 0.0,
      "pnlGross": 364581.53000000026,
      "pnlChange": 2555.19000000041,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-20",
      "appliedValue": 5404743.42,
      "grossValue": 5637617.94,
      "redemptionValue": 0.0,
      "pnlGross": 232874.52000000048,
      "pnlChange": -134263.32999999914,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-22",
      "appliedValue": 5404743.42,
      "grossValue": 5642849.91,
      "redemptionValue": 0.0,
      "pnlGross": 238106.49000000025,
      "pnlChange": 2616.589999999851,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-24",
      "appliedValue": 5404743.42,
      "grossValue": 5648086.74,
      "redemptionValue": 0.0,
      "pnlGross": 243343.3200000003,
      "pnlChange": 2619.0200000004843,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-28",
      "appliedValue": 5404743.42,
      "grossValue": 5655294.9,
      "redemptionValue": 0.0,
      "pnlGross": 250551.48000000045,
      "pnlChange": -656.1999999992549,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-30",
      "appliedValue": 5404743.42,
      "grossValue": 5659886.88,
      "redemptionValue": 0.0,
      "pnlGross": 255143.46,
      "pnlChange": 2296.4500000001863,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-03",
      "appliedValue": 5404743.42,
      "grossValue": 5669082.03,
      "redemptionValue": 0.0,
      "pnlGross": 264338.61000000034,
      "pnlChange": 6897.760000000708,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-04",
      "appliedValue": 5404743.42,
      "grossValue": 5671383.16,
      "redemptionValue": 0.0,
      "pnlGross": 266639.7400000002,
      "pnlChange": 2301.129999999888,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-06",
      "appliedValue": 5404743.42,
      "grossValue": 5675988.2,
      "redemptionValue": 0.0,
      "pnlGross": 271244.78000000026,
      "pnlChange": 2302.9900000002235,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-10",
      "appliedValue": 5404743.42,
      "grossValue": 5685209.51,
      "redemptionValue": 0.0,
      "pnlGross": 280466.08999999985,
      "pnlChange": 6917.379999999888,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-12",
      "appliedValue": 5404743.42,
      "grossValue": 5690743.02,
      "redemptionValue": 0.0,
      "pnlGross": 285999.5999999996,
      "pnlChange": 2345.649999999441,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-14",
      "appliedValue": 5404743.42,
      "grossValue": 5695437.23,
      "redemptionValue": 0.0,
      "pnlGross": 290693.8100000005,
      "pnlChange": 2347.5900000007823,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-18",
      "appliedValue": 5404743.42,
      "grossValue": 5562579.1,
      "redemptionValue": 0.0,
      "pnlGross": 157835.6799999997,
      "pnlChange": -139906.70999999996,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-20",
      "appliedValue": 5404743.42,
      "grossValue": 5566197.27,
      "redemptionValue": 0.0,
      "pnlGross": 161453.84999999963,
      "pnlChange": 1809.379999999888,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-24",
      "appliedValue": 5404743.42,
      "grossValue": 5573440.69,
      "redemptionValue": 0.0,
      "pnlGross": 168697.27000000048,
      "pnlChange": 5433.450000000186,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-25",
      "appliedValue": 5404743.42,
      "grossValue": 5575253.02,
      "redemptionValue": 0.0,
      "pnlGross": 170509.59999999963,
      "pnlChange": 1812.3299999991432,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-27",
      "appliedValue": 5404743.42,
      "grossValue": 5578879.44,
      "redemptionValue": 0.0,
      "pnlGross": 174136.02000000048,
      "pnlChange": 1813.510000000708,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-31",
      "appliedValue": 5404743.42,
      "grossValue": 5584261.11,
      "redemptionValue": 0.0,
      "pnlGross": 179517.6900000004,
      "pnlChange": 5011.030000000261,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-02",
      "appliedValue": 5404743.42,
      "grossValue": 5587604.3,
      "redemptionValue": 0.0,
      "pnlGross": 182860.8799999999,
      "pnlChange": 1671.8499999996277,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-04",
      "appliedValue": 5404743.42,
      "grossValue": 5590949.48,
      "redemptionValue": 0.0,
      "pnlGross": 186206.0600000005,
      "pnlChange": 1672.8400000007823,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-09",
      "appliedValue": 5404743.42,
      "grossValue": 5599321.22,
      "redemptionValue": 0.0,
      "pnlGross": 194577.7999999998,
      "pnlChange": 1675.3499999996277,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-11",
      "appliedValue": 5404743.42,
      "grossValue": 5600933.45,
      "redemptionValue": 0.0,
      "pnlGross": 196190.03000000023,
      "pnlChange": -63.62000000011176,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-14",
      "appliedValue": 5404743.42,
      "grossValue": 5605746.3,
      "redemptionValue": 0.0,
      "pnlGross": 201002.8799999999,
      "pnlChange": 4812.849999999628,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-16",
      "appliedValue": 5404743.42,
      "grossValue": 5608957.17,
      "redemptionValue": 0.0,
      "pnlGross": 204213.75,
      "pnlChange": 1605.660000000149,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-18",
      "appliedValue": 5404743.42,
      "grossValue": 5470366.92,
      "redemptionValue": 0.0,
      "pnlGross": 65623.5,
      "pnlChange": -140196.3700000001,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-22",
      "appliedValue": 5404743.42,
      "grossValue": 5482981.8,
      "redemptionValue": 0.0,
      "pnlGross": 78238.37999999989,
      "pnlChange": 3156.4399999994785,
      "statusPoint": "Último dia observado"
    }
  ],
  "RF|C425245": [
    {
      "date": "2026-06-09",
      "appliedValue": 1178022.22,
      "grossValue": 1178022.22,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": null,
      "statusPoint": "Entrada/1ª observação"
    },
    {
      "date": "2026-06-10",
      "appliedValue": 1178022.22,
      "grossValue": 1179097.15,
      "redemptionValue": 0.0,
      "pnlGross": 1074.9299999999348,
      "pnlChange": 1074.9299999999348,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-11",
      "appliedValue": 1178022.22,
      "grossValue": 1180173.05,
      "redemptionValue": 0.0,
      "pnlGross": 2150.8300000000745,
      "pnlChange": 1075.9000000001397,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-12",
      "appliedValue": 1178022.22,
      "grossValue": 1181249.94,
      "redemptionValue": 0.0,
      "pnlGross": 3227.719999999972,
      "pnlChange": 1076.8899999998976,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-15",
      "appliedValue": 1178022.22,
      "grossValue": 1182327.81,
      "redemptionValue": 0.0,
      "pnlGross": 4305.590000000084,
      "pnlChange": 1077.8700000001118,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-16",
      "appliedValue": 1178022.22,
      "grossValue": 1183406.67,
      "redemptionValue": 0.0,
      "pnlGross": 5384.449999999953,
      "pnlChange": 1078.8599999998696,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-17",
      "appliedValue": 1178022.22,
      "grossValue": 1184486.51,
      "redemptionValue": 0.0,
      "pnlGross": 6464.290000000037,
      "pnlChange": 1079.8400000000838,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-18",
      "appliedValue": 1178022.22,
      "grossValue": 1185567.33,
      "redemptionValue": 0.0,
      "pnlGross": 7545.110000000102,
      "pnlChange": 1080.8200000000652,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-19",
      "appliedValue": 1178022.22,
      "grossValue": 1186638.84,
      "redemptionValue": 0.0,
      "pnlGross": 8616.620000000112,
      "pnlChange": 1071.5100000000093,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-22",
      "appliedValue": 1178022.22,
      "grossValue": 1187711.32,
      "redemptionValue": 0.0,
      "pnlGross": 9689.100000000091,
      "pnlChange": 1072.4799999999814,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-23",
      "appliedValue": 1178022.22,
      "grossValue": 1188784.77,
      "redemptionValue": 0.0,
      "pnlGross": 10762.550000000048,
      "pnlChange": 1073.4499999999534,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-24",
      "appliedValue": 1178022.22,
      "grossValue": 1189859.18,
      "redemptionValue": 0.0,
      "pnlGross": 11836.959999999965,
      "pnlChange": 1074.4099999999162,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-25",
      "appliedValue": 1178022.22,
      "grossValue": 1190934.57,
      "redemptionValue": 0.0,
      "pnlGross": 12912.350000000091,
      "pnlChange": 1075.3900000001304,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-26",
      "appliedValue": 1178022.22,
      "grossValue": 1192010.93,
      "redemptionValue": 0.0,
      "pnlGross": 13988.709999999965,
      "pnlChange": 1076.3599999998696,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-29",
      "appliedValue": 1178022.22,
      "grossValue": 1193088.27,
      "redemptionValue": 0.0,
      "pnlGross": 15066.050000000048,
      "pnlChange": 1077.3400000000838,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-30",
      "appliedValue": 1178022.22,
      "grossValue": 1194166.57,
      "redemptionValue": 0.0,
      "pnlGross": 16144.350000000091,
      "pnlChange": 1078.3000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-01",
      "appliedValue": 1178022.22,
      "grossValue": 1195245.85,
      "redemptionValue": 0.0,
      "pnlGross": 17223.63000000012,
      "pnlChange": 1079.280000000028,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-02",
      "appliedValue": 1178022.22,
      "grossValue": 1196326.11,
      "redemptionValue": 0.0,
      "pnlGross": 18303.89000000013,
      "pnlChange": 1080.2600000000093,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-03",
      "appliedValue": 1178022.22,
      "grossValue": 1197407.34,
      "redemptionValue": 0.0,
      "pnlGross": 19385.12000000011,
      "pnlChange": 1081.2299999999814,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-06",
      "appliedValue": 1178022.22,
      "grossValue": 1132578.09,
      "redemptionValue": 0.0,
      "pnlGross": -45444.12999999989,
      "pnlChange": -64829.25,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-07",
      "appliedValue": 1178022.22,
      "grossValue": 1133601.33,
      "redemptionValue": 0.0,
      "pnlGross": -44420.8899999999,
      "pnlChange": 1023.2399999999908,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-08",
      "appliedValue": 1178022.22,
      "grossValue": 1071946.36,
      "redemptionValue": 0.0,
      "pnlGross": -106075.85999999988,
      "pnlChange": -61654.96999999997,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-09",
      "appliedValue": 1178022.22,
      "grossValue": 1072914.4,
      "redemptionValue": 0.0,
      "pnlGross": -105107.82000000008,
      "pnlChange": 968.0399999998044,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-10",
      "appliedValue": 1178022.22,
      "grossValue": 1020217.04,
      "redemptionValue": 0.0,
      "pnlGross": -157805.1799999999,
      "pnlChange": -52697.35999999987,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-13",
      "appliedValue": 1178022.22,
      "grossValue": 1021137.95,
      "redemptionValue": 0.0,
      "pnlGross": -156884.27000000002,
      "pnlChange": 920.9099999999162,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-14",
      "appliedValue": 1178022.22,
      "grossValue": 1022059.69,
      "redemptionValue": 0.0,
      "pnlGross": -155962.53000000003,
      "pnlChange": 921.7399999999908,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-15",
      "appliedValue": 1178022.22,
      "grossValue": 1022982.26,
      "redemptionValue": 0.0,
      "pnlGross": -155039.95999999996,
      "pnlChange": 922.5700000000652,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-16",
      "appliedValue": 1178022.22,
      "grossValue": 1020384.53,
      "redemptionValue": 0.0,
      "pnlGross": -157637.68999999994,
      "pnlChange": -2597.7299999999814,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-17",
      "appliedValue": 1178022.22,
      "grossValue": 1021305.56,
      "redemptionValue": 0.0,
      "pnlGross": -156716.65999999992,
      "pnlChange": 921.030000000028,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-20",
      "appliedValue": 1178022.22,
      "grossValue": 1001719.03,
      "redemptionValue": 0.0,
      "pnlGross": -176303.18999999994,
      "pnlChange": -19586.530000000028,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-21",
      "appliedValue": 1178022.22,
      "grossValue": 1002623.01,
      "redemptionValue": 0.0,
      "pnlGross": -175399.20999999996,
      "pnlChange": 903.9799999999814,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-22",
      "appliedValue": 1178022.22,
      "grossValue": 1003527.8,
      "redemptionValue": 0.0,
      "pnlGross": -174494.41999999993,
      "pnlChange": 904.7900000000373,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-23",
      "appliedValue": 1178022.22,
      "grossValue": 1004433.41,
      "redemptionValue": 0.0,
      "pnlGross": -173588.80999999994,
      "pnlChange": 905.609999999986,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-24",
      "appliedValue": 1178022.22,
      "grossValue": 961485.26,
      "redemptionValue": 0.0,
      "pnlGross": -216536.96,
      "pnlChange": -42948.15000000002,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-27",
      "appliedValue": 1178022.22,
      "grossValue": 962352.43,
      "redemptionValue": 0.0,
      "pnlGross": -215669.78999999992,
      "pnlChange": 867.1700000000419,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-28",
      "appliedValue": 1178022.22,
      "grossValue": 937828.18,
      "redemptionValue": 0.0,
      "pnlGross": -240194.03999999992,
      "pnlChange": -24524.25,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-29",
      "appliedValue": 1178022.22,
      "grossValue": 938673.7,
      "redemptionValue": 0.0,
      "pnlGross": -239348.52,
      "pnlChange": 845.5199999999022,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-30",
      "appliedValue": 1178022.22,
      "grossValue": 939519.98,
      "redemptionValue": 0.0,
      "pnlGross": -238502.24,
      "pnlChange": 846.2800000000279,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-31",
      "appliedValue": 1178022.22,
      "grossValue": 940367.03,
      "redemptionValue": 0.0,
      "pnlGross": -237655.18999999997,
      "pnlChange": 847.0500000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-03",
      "appliedValue": 1178022.22,
      "grossValue": 941214.84,
      "redemptionValue": 0.0,
      "pnlGross": -236807.38,
      "pnlChange": 847.8099999999395,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-04",
      "appliedValue": 1178022.22,
      "grossValue": 942063.41,
      "redemptionValue": 0.0,
      "pnlGross": -235958.80999999997,
      "pnlChange": 848.5700000000652,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-05",
      "appliedValue": 1178022.22,
      "grossValue": 942912.75,
      "redemptionValue": 0.0,
      "pnlGross": -235109.47,
      "pnlChange": 849.3399999999674,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-06",
      "appliedValue": 1178022.22,
      "grossValue": 943762.85,
      "redemptionValue": 0.0,
      "pnlGross": -234259.37,
      "pnlChange": 850.0999999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-07",
      "appliedValue": 1178022.22,
      "grossValue": 944605.5,
      "redemptionValue": 0.0,
      "pnlGross": -233416.72,
      "pnlChange": 842.6500000000233,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-10",
      "appliedValue": 1178022.22,
      "grossValue": 923587.62,
      "redemptionValue": 0.0,
      "pnlGross": -254434.6,
      "pnlChange": -21017.880000000005,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-11",
      "appliedValue": 1178022.22,
      "grossValue": 910068.85,
      "redemptionValue": 0.0,
      "pnlGross": -267953.37,
      "pnlChange": -13518.77000000002,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-12",
      "appliedValue": 1178022.22,
      "grossValue": 910880.85,
      "redemptionValue": 0.0,
      "pnlGross": -267141.37,
      "pnlChange": 812.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-13",
      "appliedValue": 1178022.22,
      "grossValue": 902147.37,
      "redemptionValue": 0.0,
      "pnlGross": -275874.85,
      "pnlChange": -8733.479999999981,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-14",
      "appliedValue": 1178022.22,
      "grossValue": 902952.14,
      "redemptionValue": 0.0,
      "pnlGross": -275070.08,
      "pnlChange": 804.7700000000186,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-17",
      "appliedValue": 1178022.22,
      "grossValue": 903757.63,
      "redemptionValue": 0.0,
      "pnlGross": -274264.59,
      "pnlChange": 805.4899999999907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-18",
      "appliedValue": 1178022.22,
      "grossValue": 887239.66,
      "redemptionValue": 0.0,
      "pnlGross": -290782.55999999994,
      "pnlChange": -16517.969999999972,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-19",
      "appliedValue": 1178022.22,
      "grossValue": 888030.82,
      "redemptionValue": 0.0,
      "pnlGross": -289991.4,
      "pnlChange": 791.1599999999162,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-20",
      "appliedValue": 1178022.22,
      "grossValue": 887535.6,
      "redemptionValue": 0.0,
      "pnlGross": -290486.62,
      "pnlChange": -495.21999999997206,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-21",
      "appliedValue": 1178022.22,
      "grossValue": 888327.0,
      "redemptionValue": 0.0,
      "pnlGross": -289695.22,
      "pnlChange": 791.4000000000233,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-24",
      "appliedValue": 1178022.22,
      "grossValue": 889107.04,
      "redemptionValue": 0.0,
      "pnlGross": -288915.17999999993,
      "pnlChange": 780.0400000000373,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-25",
      "appliedValue": 1178022.22,
      "grossValue": 871533.39,
      "redemptionValue": 0.0,
      "pnlGross": -306488.83,
      "pnlChange": -17573.650000000023,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-26",
      "appliedValue": 1178022.22,
      "grossValue": 872310.16,
      "redemptionValue": 0.0,
      "pnlGross": -305712.05999999994,
      "pnlChange": 776.7700000000186,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-27",
      "appliedValue": 1178022.22,
      "grossValue": 873087.62,
      "redemptionValue": 0.0,
      "pnlGross": -304934.6,
      "pnlChange": 777.4599999999627,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-28",
      "appliedValue": 1178022.22,
      "grossValue": 873865.78,
      "redemptionValue": 0.0,
      "pnlGross": -304156.43999999994,
      "pnlChange": 778.1600000000326,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-31",
      "appliedValue": 1178022.22,
      "grossValue": 874644.63,
      "redemptionValue": 0.0,
      "pnlGross": -303377.59,
      "pnlChange": 778.8499999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-01",
      "appliedValue": 1178022.22,
      "grossValue": 869386.76,
      "redemptionValue": 0.0,
      "pnlGross": -308635.46,
      "pnlChange": -5257.869999999995,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-02",
      "appliedValue": 1178022.22,
      "grossValue": 870161.49,
      "redemptionValue": 0.0,
      "pnlGross": -307860.73,
      "pnlChange": 774.7299999999814,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-03",
      "appliedValue": 1178022.22,
      "grossValue": 870936.9,
      "redemptionValue": 0.0,
      "pnlGross": -307085.31999999995,
      "pnlChange": 775.4100000000326,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-04",
      "appliedValue": 1178022.22,
      "grossValue": 871713.01,
      "redemptionValue": 0.0,
      "pnlGross": -306309.21,
      "pnlChange": 776.109999999986,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-08",
      "appliedValue": 1178022.22,
      "grossValue": 872489.8,
      "redemptionValue": 0.0,
      "pnlGross": -305532.4199999999,
      "pnlChange": 776.7900000000373,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-09",
      "appliedValue": 1178022.22,
      "grossValue": 873267.29,
      "redemptionValue": 0.0,
      "pnlGross": -304754.92999999993,
      "pnlChange": 777.4899999999907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-10",
      "appliedValue": 1178022.22,
      "grossValue": 845218.95,
      "redemptionValue": 0.0,
      "pnlGross": -332803.27,
      "pnlChange": -28048.340000000084,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-11",
      "appliedValue": 1178022.22,
      "grossValue": 845971.45,
      "redemptionValue": 0.0,
      "pnlGross": -332050.77,
      "pnlChange": 752.5,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-14",
      "appliedValue": 1178022.22,
      "grossValue": 814261.57,
      "redemptionValue": 0.0,
      "pnlGross": -363760.65,
      "pnlChange": -31709.880000000005,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-15",
      "appliedValue": 1178022.22,
      "grossValue": 814985.7,
      "redemptionValue": 0.0,
      "pnlGross": -363036.52,
      "pnlChange": 724.1300000000047,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-16",
      "appliedValue": 1178022.22,
      "grossValue": 815710.47,
      "redemptionValue": 0.0,
      "pnlGross": -362311.75,
      "pnlChange": 724.7700000000186,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-17",
      "appliedValue": 1178022.22,
      "grossValue": 816435.89,
      "redemptionValue": 0.0,
      "pnlGross": -361586.33,
      "pnlChange": 725.4200000000419,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-18",
      "appliedValue": 1178022.22,
      "grossValue": 808434.04,
      "redemptionValue": 0.0,
      "pnlGross": -369588.17999999993,
      "pnlChange": -8001.849999999977,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-21",
      "appliedValue": 1178022.22,
      "grossValue": 809145.69,
      "redemptionValue": 0.0,
      "pnlGross": -368876.53,
      "pnlChange": 711.6499999999069,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-22",
      "appliedValue": 1178022.22,
      "grossValue": 809857.97,
      "redemptionValue": 0.0,
      "pnlGross": -368164.25,
      "pnlChange": 712.2800000000279,
      "statusPoint": "Último dia observado"
    }
  ],
  "RF|B941738": [
    {
      "date": "2023-01-13",
      "appliedValue": 493956.44,
      "grossValue": 493956.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": null,
      "statusPoint": "Entrada/1ª observação"
    },
    {
      "date": "2023-01-23",
      "appliedValue": 493956.44,
      "grossValue": 493956.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-01-31",
      "appliedValue": 493956.44,
      "grossValue": 493956.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-02-07",
      "appliedValue": 493956.44,
      "grossValue": 493956.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-02-15",
      "appliedValue": 493956.44,
      "grossValue": 493956.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-02-27",
      "appliedValue": 493956.44,
      "grossValue": 493956.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-03-07",
      "appliedValue": 493956.44,
      "grossValue": 493956.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-03-15",
      "appliedValue": 493956.44,
      "grossValue": 493956.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-03-22",
      "appliedValue": 493956.44,
      "grossValue": 493956.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-03-30",
      "appliedValue": 493956.44,
      "grossValue": 493956.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-04-10",
      "appliedValue": 493956.44,
      "grossValue": 493956.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-04-18",
      "appliedValue": 493956.44,
      "grossValue": 493956.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-04-27",
      "appliedValue": 493956.44,
      "grossValue": 493956.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-05-05",
      "appliedValue": 493956.44,
      "grossValue": 493956.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-05-15",
      "appliedValue": 493956.44,
      "grossValue": 493956.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-05-23",
      "appliedValue": 493956.44,
      "grossValue": 493956.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-05-31",
      "appliedValue": 493956.44,
      "grossValue": 493956.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-06-09",
      "appliedValue": 493956.44,
      "grossValue": 493956.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-06-16",
      "appliedValue": 493956.44,
      "grossValue": 493956.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-06-27",
      "appliedValue": 493956.44,
      "grossValue": 493956.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-07-05",
      "appliedValue": 493956.44,
      "grossValue": 493956.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-07-13",
      "appliedValue": 493956.44,
      "grossValue": 493956.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-07-21",
      "appliedValue": 493956.44,
      "grossValue": 493956.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-07-31",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-08-07",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-08-15",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-08-23",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-08-31",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-09-11",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-09-18",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-09-26",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-10-04",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-10-13",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-10-23",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-10-30",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-11-08",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-11-17",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-11-27",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-12-05",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-12-12",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-12-20",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-12-29",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-01-09",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-01-17",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-01-24",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-02-01",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-02-09",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-02-21",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-02-29",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-03-07",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-03-15",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-03-25",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-04-03",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-04-11",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-04-18",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-04-26",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-05-07",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-05-15",
      "appliedValue": 493956.44,
      "grossValue": 489468.98,
      "redemptionValue": 0.0,
      "pnlGross": -4487.460000000021,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-05-23",
      "appliedValue": 493956.44,
      "grossValue": 602778.36,
      "redemptionValue": 0.0,
      "pnlGross": 108821.91999999998,
      "pnlChange": 137156.06,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-05-31",
      "appliedValue": 493956.44,
      "grossValue": 604157.71,
      "redemptionValue": 0.0,
      "pnlGross": 110201.26999999996,
      "pnlChange": 344.8399999999674,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-06-10",
      "appliedValue": 493956.44,
      "grossValue": 605881.91,
      "redemptionValue": 0.0,
      "pnlGross": 111925.47000000004,
      "pnlChange": 517.2600000000093,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-06-18",
      "appliedValue": 493956.44,
      "grossValue": 607261.26,
      "redemptionValue": 0.0,
      "pnlGross": 113304.82,
      "pnlChange": 172.4200000000419,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-06-26",
      "appliedValue": 493956.44,
      "grossValue": 608640.62,
      "redemptionValue": 0.0,
      "pnlGross": 114684.18,
      "pnlChange": 172.4200000000419,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-07-04",
      "appliedValue": 493956.44,
      "grossValue": 610019.97,
      "redemptionValue": 0.0,
      "pnlGross": 116063.52999999996,
      "pnlChange": 172.4199999999255,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-07-12",
      "appliedValue": 493956.44,
      "grossValue": 611399.33,
      "redemptionValue": 0.0,
      "pnlGross": 117442.88999999996,
      "pnlChange": 172.4199999999255,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-07-19",
      "appliedValue": 493956.44,
      "grossValue": 612606.26,
      "redemptionValue": 0.0,
      "pnlGross": 118649.82,
      "pnlChange": 172.4100000000326,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-07-29",
      "appliedValue": 493956.44,
      "grossValue": 614330.46,
      "redemptionValue": 0.0,
      "pnlGross": 120374.01999999996,
      "pnlChange": 517.2600000000093,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-08-06",
      "appliedValue": 493956.44,
      "grossValue": 615709.81,
      "redemptionValue": 0.0,
      "pnlGross": 121753.37000000004,
      "pnlChange": 172.4100000000326,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-08-14",
      "appliedValue": 493956.44,
      "grossValue": 617089.17,
      "redemptionValue": 0.0,
      "pnlGross": 123132.73000000004,
      "pnlChange": 172.4200000000419,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-08-22",
      "appliedValue": 493956.44,
      "grossValue": 618468.53,
      "redemptionValue": 0.0,
      "pnlGross": 124512.09000000004,
      "pnlChange": 172.4200000000419,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-08-29",
      "appliedValue": 493956.44,
      "grossValue": 619675.46,
      "redemptionValue": 0.0,
      "pnlGross": 125719.01999999996,
      "pnlChange": 172.4199999999255,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-09-06",
      "appliedValue": 493956.44,
      "grossValue": 620882.4,
      "redemptionValue": 0.0,
      "pnlGross": 126925.96000000002,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-09-16",
      "appliedValue": 493956.44,
      "grossValue": 622779.01,
      "redemptionValue": 0.0,
      "pnlGross": 128822.57,
      "pnlChange": 517.2600000000093,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-09-24",
      "appliedValue": 493956.44,
      "grossValue": 624158.37,
      "redemptionValue": 0.0,
      "pnlGross": 130201.93,
      "pnlChange": 172.4200000000419,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-10-02",
      "appliedValue": 493956.44,
      "grossValue": 625537.72,
      "redemptionValue": 0.0,
      "pnlGross": 131581.27999999997,
      "pnlChange": 172.4199999999255,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-10-09",
      "appliedValue": 493956.44,
      "grossValue": 626744.66,
      "redemptionValue": 0.0,
      "pnlGross": 132788.22000000003,
      "pnlChange": 172.4200000000419,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-10-17",
      "appliedValue": 493956.44,
      "grossValue": 628124.01,
      "redemptionValue": 0.0,
      "pnlGross": 134167.57,
      "pnlChange": 172.4100000000326,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-10-25",
      "appliedValue": 493956.44,
      "grossValue": 629503.37,
      "redemptionValue": 0.0,
      "pnlGross": 135546.93,
      "pnlChange": 172.4200000000419,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-11-04",
      "appliedValue": 493956.44,
      "grossValue": 631227.56,
      "redemptionValue": 0.0,
      "pnlGross": 137271.12000000005,
      "pnlChange": 517.25,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-11-12",
      "appliedValue": 493956.44,
      "grossValue": 632606.92,
      "redemptionValue": 0.0,
      "pnlGross": 138650.48000000004,
      "pnlChange": 172.4200000000419,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-11-21",
      "appliedValue": 493956.44,
      "grossValue": 634158.69,
      "redemptionValue": 0.0,
      "pnlGross": 140202.24999999994,
      "pnlChange": 344.8299999999581,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-11-29",
      "appliedValue": 493956.44,
      "grossValue": 635538.05,
      "redemptionValue": 0.0,
      "pnlGross": 141581.61000000004,
      "pnlChange": 172.4200000000419,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-12-09",
      "appliedValue": 493956.44,
      "grossValue": 637262.24,
      "redemptionValue": 0.0,
      "pnlGross": 143305.8,
      "pnlChange": 517.25,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-12-17",
      "appliedValue": 493956.44,
      "grossValue": 638641.6,
      "redemptionValue": 0.0,
      "pnlGross": 144685.15999999997,
      "pnlChange": 172.4199999999255,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-12-26",
      "appliedValue": 493956.44,
      "grossValue": 637567.76,
      "redemptionValue": 0.0,
      "pnlGross": 143611.32,
      "pnlChange": 344.8399999999674,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-03",
      "appliedValue": 493956.44,
      "grossValue": 638947.11,
      "redemptionValue": 0.0,
      "pnlGross": 144990.66999999998,
      "pnlChange": 172.4200000000419,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-13",
      "appliedValue": 493956.44,
      "grossValue": 670941.27,
      "redemptionValue": 0.0,
      "pnlGross": 176984.83000000002,
      "pnlChange": 541.5999999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-21",
      "appliedValue": 493956.44,
      "grossValue": 672385.53,
      "redemptionValue": 0.0,
      "pnlGross": 178429.09000000003,
      "pnlChange": 180.54000000003725,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-30",
      "appliedValue": 493956.44,
      "grossValue": 674010.32,
      "redemptionValue": 0.0,
      "pnlGross": 180053.87999999995,
      "pnlChange": 180.52999999991152,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-07",
      "appliedValue": 493956.44,
      "grossValue": 624283.75,
      "redemptionValue": 0.0,
      "pnlGross": 130327.31,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-14",
      "appliedValue": 493956.44,
      "grossValue": 625547.48,
      "redemptionValue": 0.0,
      "pnlGross": 131591.03999999998,
      "pnlChange": 180.54000000003725,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-24",
      "appliedValue": 493956.44,
      "grossValue": 627352.8,
      "redemptionValue": 0.0,
      "pnlGross": 133396.36000000004,
      "pnlChange": 541.6000000000931,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-06",
      "appliedValue": 493956.44,
      "grossValue": 629158.13,
      "redemptionValue": 0.0,
      "pnlGross": 135201.69,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-14",
      "appliedValue": 493956.44,
      "grossValue": 512236.84,
      "redemptionValue": 0.0,
      "pnlGross": 18280.400000000023,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-24",
      "appliedValue": 493956.44,
      "grossValue": 514042.16,
      "redemptionValue": 0.0,
      "pnlGross": 20085.71999999997,
      "pnlChange": 541.5899999999674,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-31",
      "appliedValue": 493956.44,
      "grossValue": 515305.89,
      "redemptionValue": 0.0,
      "pnlGross": 21349.45000000001,
      "pnlChange": 541.6000000000349,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-08",
      "appliedValue": 493956.44,
      "grossValue": 512759.19,
      "redemptionValue": 0.0,
      "pnlGross": 18802.75,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-16",
      "appliedValue": 493956.44,
      "grossValue": 514203.45,
      "redemptionValue": 0.0,
      "pnlGross": 20247.01000000001,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-28",
      "appliedValue": 493956.44,
      "grossValue": 516369.84,
      "redemptionValue": 0.0,
      "pnlGross": 22413.400000000023,
      "pnlChange": 541.6000000000349,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-07",
      "appliedValue": 493956.44,
      "grossValue": 517994.63,
      "redemptionValue": 0.0,
      "pnlGross": 24038.19,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-15",
      "appliedValue": 493956.44,
      "grossValue": 519438.9,
      "redemptionValue": 0.0,
      "pnlGross": 25482.46000000002,
      "pnlChange": 180.54000000003725,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-22",
      "appliedValue": 493956.44,
      "grossValue": 520702.62,
      "redemptionValue": 0.0,
      "pnlGross": 26746.179999999997,
      "pnlChange": 180.52999999996973,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-30",
      "appliedValue": 493956.44,
      "grossValue": 522146.88,
      "redemptionValue": 0.0,
      "pnlGross": 28190.44,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-09",
      "appliedValue": 493956.44,
      "grossValue": 523952.21,
      "redemptionValue": 0.0,
      "pnlGross": 29995.77000000002,
      "pnlChange": 541.6000000000349,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-17",
      "appliedValue": 493956.44,
      "grossValue": 525396.47,
      "redemptionValue": 0.0,
      "pnlGross": 31440.02999999997,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-26",
      "appliedValue": 493956.44,
      "grossValue": 527021.26,
      "redemptionValue": 0.0,
      "pnlGross": 33064.82000000001,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-03",
      "appliedValue": 493956.44,
      "grossValue": 528284.99,
      "redemptionValue": 0.0,
      "pnlGross": 34328.54999999999,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-11",
      "appliedValue": 493956.44,
      "grossValue": 529729.25,
      "redemptionValue": 0.0,
      "pnlGross": 35772.81,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-21",
      "appliedValue": 493956.44,
      "grossValue": 531534.57,
      "redemptionValue": 0.0,
      "pnlGross": 37578.12999999995,
      "pnlChange": 541.5899999999674,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-29",
      "appliedValue": 493956.44,
      "grossValue": 532978.84,
      "redemptionValue": 0.0,
      "pnlGross": 39022.399999999965,
      "pnlChange": 180.53999999992084,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-06",
      "appliedValue": 493956.44,
      "grossValue": 534423.1,
      "redemptionValue": 0.0,
      "pnlGross": 40466.65999999997,
      "pnlChange": 180.53999999992084,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-13",
      "appliedValue": 493956.44,
      "grossValue": 535686.82,
      "redemptionValue": 0.0,
      "pnlGross": 41730.37999999995,
      "pnlChange": 180.52999999991152,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-21",
      "appliedValue": 493956.44,
      "grossValue": 537131.08,
      "redemptionValue": 0.0,
      "pnlGross": 43174.63999999996,
      "pnlChange": 180.52999999991152,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-29",
      "appliedValue": 493956.44,
      "grossValue": 538575.34,
      "redemptionValue": 0.0,
      "pnlGross": 44618.899999999965,
      "pnlChange": 180.52999999991152,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-08",
      "appliedValue": 493956.44,
      "grossValue": 540380.67,
      "redemptionValue": 0.0,
      "pnlGross": 46424.23000000004,
      "pnlChange": 541.6000000000931,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-16",
      "appliedValue": 493956.44,
      "grossValue": 541824.93,
      "redemptionValue": 0.0,
      "pnlGross": 47868.49000000005,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-23",
      "appliedValue": 493956.44,
      "grossValue": 543088.66,
      "redemptionValue": 0.0,
      "pnlGross": 49132.22000000003,
      "pnlChange": 180.54000000003725,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-01",
      "appliedValue": 493956.44,
      "grossValue": 544532.92,
      "redemptionValue": 0.0,
      "pnlGross": 50576.48000000004,
      "pnlChange": 180.54000000003725,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-09",
      "appliedValue": 493956.44,
      "grossValue": 545977.18,
      "redemptionValue": 0.0,
      "pnlGross": 52020.74000000005,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-17",
      "appliedValue": 493956.44,
      "grossValue": 547421.44,
      "redemptionValue": 0.0,
      "pnlGross": 53464.99999999994,
      "pnlChange": 180.52999999991152,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-27",
      "appliedValue": 493956.44,
      "grossValue": 549226.76,
      "redemptionValue": 0.0,
      "pnlGross": 55270.32000000001,
      "pnlChange": 541.5899999999674,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-03",
      "appliedValue": 493956.44,
      "grossValue": 550490.49,
      "redemptionValue": 0.0,
      "pnlGross": 56534.04999999999,
      "pnlChange": 541.5999999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-11",
      "appliedValue": 493956.44,
      "grossValue": 551934.75,
      "redemptionValue": 0.0,
      "pnlGross": 57978.31,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-19",
      "appliedValue": 493956.44,
      "grossValue": 553379.01,
      "redemptionValue": 0.0,
      "pnlGross": 59422.57000000001,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-28",
      "appliedValue": 493956.44,
      "grossValue": 555003.8,
      "redemptionValue": 0.0,
      "pnlGross": 61047.36000000005,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-08",
      "appliedValue": 493956.44,
      "grossValue": 556809.13,
      "redemptionValue": 0.0,
      "pnlGross": 62852.69,
      "pnlChange": 541.5999999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-15",
      "appliedValue": 493956.44,
      "grossValue": 558070.35,
      "redemptionValue": 0.0,
      "pnlGross": 64113.90999999997,
      "pnlChange": 539.0899999999674,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-23",
      "appliedValue": 493956.44,
      "grossValue": 559514.61,
      "redemptionValue": 0.0,
      "pnlGross": 65558.16999999998,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-02",
      "appliedValue": 493956.44,
      "grossValue": 561319.93,
      "redemptionValue": 0.0,
      "pnlGross": 67363.49000000005,
      "pnlChange": 361.0600000000559,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-12",
      "appliedValue": 493956.44,
      "grossValue": 563125.26,
      "redemptionValue": 0.0,
      "pnlGross": 69168.82,
      "pnlChange": 541.5999999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-20",
      "appliedValue": 493956.44,
      "grossValue": 564569.52,
      "redemptionValue": 0.0,
      "pnlGross": 70613.08000000002,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-27",
      "appliedValue": 493956.44,
      "grossValue": 565833.25,
      "redemptionValue": 0.0,
      "pnlGross": 71876.81,
      "pnlChange": 180.54000000003725,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-04",
      "appliedValue": 493956.44,
      "grossValue": 567277.51,
      "redemptionValue": 0.0,
      "pnlGross": 73321.07,
      "pnlChange": 180.54000000003725,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-12",
      "appliedValue": 493956.44,
      "grossValue": 568721.77,
      "redemptionValue": 0.0,
      "pnlGross": 74765.33000000002,
      "pnlChange": 180.54000000003725,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-24",
      "appliedValue": 493956.44,
      "grossValue": 570888.16,
      "redemptionValue": 0.0,
      "pnlGross": 76931.72000000003,
      "pnlChange": 180.54000000003725,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-04",
      "appliedValue": 493956.44,
      "grossValue": 572332.42,
      "redemptionValue": 0.0,
      "pnlGross": 78375.98000000004,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-11",
      "appliedValue": 493956.44,
      "grossValue": 573596.15,
      "redemptionValue": 0.0,
      "pnlGross": 79639.71000000002,
      "pnlChange": 180.54000000003725,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-19",
      "appliedValue": 493956.44,
      "grossValue": 575040.41,
      "redemptionValue": 0.0,
      "pnlGross": 81083.97000000003,
      "pnlChange": 180.54000000003725,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-27",
      "appliedValue": 493956.44,
      "grossValue": 576484.67,
      "redemptionValue": 0.0,
      "pnlGross": 82528.23000000004,
      "pnlChange": 180.54000000003725,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-07",
      "appliedValue": 493956.44,
      "grossValue": 578470.52,
      "redemptionValue": 0.0,
      "pnlGross": 84514.08000000002,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-15",
      "appliedValue": 493956.44,
      "grossValue": 579914.78,
      "redemptionValue": 0.0,
      "pnlGross": 85958.34000000003,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-24",
      "appliedValue": 493956.44,
      "grossValue": 581539.58,
      "redemptionValue": 0.0,
      "pnlGross": 87583.13999999996,
      "pnlChange": 180.53999999992084,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-04",
      "appliedValue": 493956.44,
      "grossValue": 583344.9,
      "redemptionValue": 0.0,
      "pnlGross": 89388.46000000002,
      "pnlChange": 722.1300000000047,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-12",
      "appliedValue": 493956.44,
      "grossValue": 584789.16,
      "redemptionValue": 0.0,
      "pnlGross": 90832.72000000004,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-20",
      "appliedValue": 493956.44,
      "grossValue": 586233.42,
      "redemptionValue": 0.0,
      "pnlGross": 92276.98000000004,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-28",
      "appliedValue": 493956.44,
      "grossValue": 587677.68,
      "redemptionValue": 0.0,
      "pnlGross": 93721.24000000003,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-08",
      "appliedValue": 493956.44,
      "grossValue": 589663.54,
      "redemptionValue": 0.0,
      "pnlGross": 95707.10000000003,
      "pnlChange": 541.6000000000931,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-15",
      "appliedValue": 493956.44,
      "grossValue": 590927.27,
      "redemptionValue": 0.0,
      "pnlGross": 96970.83000000002,
      "pnlChange": 541.5999999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-23",
      "appliedValue": 493956.44,
      "grossValue": 592371.53,
      "redemptionValue": 0.0,
      "pnlGross": 98415.09000000004,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-01",
      "appliedValue": 493956.44,
      "grossValue": 593815.79,
      "redemptionValue": 0.0,
      "pnlGross": 99859.35000000003,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-09",
      "appliedValue": 493956.44,
      "grossValue": 595260.05,
      "redemptionValue": 0.0,
      "pnlGross": 101303.61000000004,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-17",
      "appliedValue": 493956.44,
      "grossValue": 596704.31,
      "redemptionValue": 0.0,
      "pnlGross": 102747.87000000004,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-24",
      "appliedValue": 493956.44,
      "grossValue": 597968.04,
      "redemptionValue": 0.0,
      "pnlGross": 104011.60000000003,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-03",
      "appliedValue": 493956.44,
      "grossValue": 599773.36,
      "redemptionValue": 0.0,
      "pnlGross": 105816.91999999998,
      "pnlChange": 541.5899999999674,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-11",
      "appliedValue": 493956.44,
      "grossValue": 601217.62,
      "redemptionValue": 0.0,
      "pnlGross": 107261.18,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-19",
      "appliedValue": 493956.44,
      "grossValue": 602661.88,
      "redemptionValue": 0.0,
      "pnlGross": 108705.44,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-27",
      "appliedValue": 493956.44,
      "grossValue": 604106.14,
      "redemptionValue": 0.0,
      "pnlGross": 110149.7,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-03",
      "appliedValue": 493956.44,
      "grossValue": 605369.87,
      "redemptionValue": 0.0,
      "pnlGross": 111413.43,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-14",
      "appliedValue": 493956.44,
      "grossValue": 607355.73,
      "redemptionValue": 0.0,
      "pnlGross": 113399.28999999998,
      "pnlChange": 541.5999999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-22",
      "appliedValue": 493956.44,
      "grossValue": 608799.99,
      "redemptionValue": 0.0,
      "pnlGross": 114843.55,
      "pnlChange": 180.53000000002797,
      "statusPoint": "Último dia observado"
    }
  ],
  "RF|C275730": [
    {
      "date": "2025-06-26",
      "appliedValue": 620776.26,
      "grossValue": 620776.26,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": null,
      "statusPoint": "Entrada/1ª observação"
    },
    {
      "date": "2025-06-30",
      "appliedValue": 620776.26,
      "grossValue": 621742.49,
      "redemptionValue": 0.0,
      "pnlGross": 966.2299999999814,
      "pnlChange": 724.8099999999395,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-02",
      "appliedValue": 620776.26,
      "grossValue": 622226.17,
      "redemptionValue": 0.0,
      "pnlGross": 1449.9100000000326,
      "pnlChange": 241.88000000000463,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-04",
      "appliedValue": 620776.26,
      "grossValue": 622710.23,
      "redemptionValue": 0.0,
      "pnlGross": 1933.969999999972,
      "pnlChange": 242.0699999999488,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-08",
      "appliedValue": 620776.26,
      "grossValue": 623679.48,
      "redemptionValue": 0.0,
      "pnlGross": 2903.219999999972,
      "pnlChange": 242.45999999996275,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-10",
      "appliedValue": 620776.26,
      "grossValue": 591339.98,
      "redemptionValue": 0.0,
      "pnlGross": -29436.280000000028,
      "pnlChange": 230.30999999993944,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-14",
      "appliedValue": 620776.26,
      "grossValue": 592262.15,
      "redemptionValue": 0.0,
      "pnlGross": -28514.109999999982,
      "pnlChange": 691.7600000000093,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-16",
      "appliedValue": 620776.26,
      "grossValue": 592723.78,
      "redemptionValue": 0.0,
      "pnlGross": -28052.47999999998,
      "pnlChange": 230.85999999998603,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-18",
      "appliedValue": 620776.26,
      "grossValue": 593185.76,
      "redemptionValue": 0.0,
      "pnlGross": -27590.5,
      "pnlChange": 231.04000000003725,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-22",
      "appliedValue": 620776.26,
      "grossValue": 594110.81,
      "redemptionValue": 0.0,
      "pnlGross": -26665.449999999957,
      "pnlChange": 231.40000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-24",
      "appliedValue": 620776.26,
      "grossValue": 594573.87,
      "redemptionValue": 0.0,
      "pnlGross": -26202.39000000001,
      "pnlChange": 231.5699999999488,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-28",
      "appliedValue": 620776.26,
      "grossValue": 581334.35,
      "redemptionValue": 0.0,
      "pnlGross": -39441.91000000003,
      "pnlChange": 679.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-30",
      "appliedValue": 620776.26,
      "grossValue": 581787.46,
      "redemptionValue": 0.0,
      "pnlGross": -38988.80000000005,
      "pnlChange": 226.59999999997672,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-01",
      "appliedValue": 620776.26,
      "grossValue": 582240.92,
      "redemptionValue": 0.0,
      "pnlGross": -38535.33999999997,
      "pnlChange": 226.78000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-05",
      "appliedValue": 620776.26,
      "grossValue": 583148.9,
      "redemptionValue": 0.0,
      "pnlGross": -37627.35999999999,
      "pnlChange": 227.13000000000463,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-07",
      "appliedValue": 620776.26,
      "grossValue": 583603.42,
      "redemptionValue": 0.0,
      "pnlGross": -37172.83999999997,
      "pnlChange": 227.31000000005588,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-08",
      "appliedValue": 620776.26,
      "grossValue": 583830.81,
      "redemptionValue": 0.0,
      "pnlGross": -36945.44999999995,
      "pnlChange": 227.390000000014,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-12",
      "appliedValue": 620776.26,
      "grossValue": 584741.27,
      "redemptionValue": 0.0,
      "pnlGross": -36034.98999999999,
      "pnlChange": 227.75,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-14",
      "appliedValue": 620776.26,
      "grossValue": 585197.03,
      "redemptionValue": 0.0,
      "pnlGross": -35579.22999999998,
      "pnlChange": 227.9200000000419,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-18",
      "appliedValue": 620776.26,
      "grossValue": 586109.62,
      "redemptionValue": 0.0,
      "pnlGross": -34666.640000000014,
      "pnlChange": 684.5699999999488,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-20",
      "appliedValue": 620776.26,
      "grossValue": 586566.45,
      "redemptionValue": 0.0,
      "pnlGross": -34209.810000000056,
      "pnlChange": 228.45999999996275,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-22",
      "appliedValue": 620776.26,
      "grossValue": 587023.64,
      "redemptionValue": 0.0,
      "pnlGross": -33752.619999999995,
      "pnlChange": 228.640000000014,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-26",
      "appliedValue": 620776.26,
      "grossValue": 573783.37,
      "redemptionValue": 0.0,
      "pnlGross": -46992.890000000014,
      "pnlChange": 223.47999999998137,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-28",
      "appliedValue": 620776.26,
      "grossValue": 574230.59,
      "redemptionValue": 0.0,
      "pnlGross": -46545.67000000004,
      "pnlChange": 223.65000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-01",
      "appliedValue": 620776.26,
      "grossValue": 575126.08,
      "redemptionValue": 0.0,
      "pnlGross": -45650.18000000005,
      "pnlChange": 671.7399999999907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-03",
      "appliedValue": 620776.26,
      "grossValue": 575574.35,
      "redemptionValue": 0.0,
      "pnlGross": -45201.91000000003,
      "pnlChange": 224.1799999999348,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-05",
      "appliedValue": 620776.26,
      "grossValue": 576022.97,
      "redemptionValue": 0.0,
      "pnlGross": -44753.29000000004,
      "pnlChange": 224.34999999997672,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-09",
      "appliedValue": 620776.26,
      "grossValue": 576921.25,
      "redemptionValue": 0.0,
      "pnlGross": -43855.01000000001,
      "pnlChange": 224.69999999995343,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-11",
      "appliedValue": 620776.26,
      "grossValue": 577370.92,
      "redemptionValue": 0.0,
      "pnlGross": -43405.33999999997,
      "pnlChange": 224.88000000000463,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-15",
      "appliedValue": 620776.26,
      "grossValue": 578271.3,
      "redemptionValue": 0.0,
      "pnlGross": -42504.95999999996,
      "pnlChange": 675.4200000000419,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-17",
      "appliedValue": 620776.26,
      "grossValue": 578722.02,
      "redemptionValue": 0.0,
      "pnlGross": -42054.23999999999,
      "pnlChange": 225.40000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-19",
      "appliedValue": 620776.26,
      "grossValue": 579173.09,
      "redemptionValue": 0.0,
      "pnlGross": -41603.17000000004,
      "pnlChange": 225.5799999999581,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-23",
      "appliedValue": 620776.26,
      "grossValue": 580076.29,
      "redemptionValue": 0.0,
      "pnlGross": -40699.96999999997,
      "pnlChange": 225.9300000000512,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-25",
      "appliedValue": 620776.26,
      "grossValue": 566378.23,
      "redemptionValue": 0.0,
      "pnlGross": -54398.03000000003,
      "pnlChange": -13924.080000000076,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-29",
      "appliedValue": 620776.26,
      "grossValue": 567261.47,
      "redemptionValue": 0.0,
      "pnlGross": -53514.79000000004,
      "pnlChange": 662.5599999999395,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-01",
      "appliedValue": 620776.26,
      "grossValue": 567703.61,
      "redemptionValue": 0.0,
      "pnlGross": -53072.65000000002,
      "pnlChange": 221.11999999999531,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-03",
      "appliedValue": 620776.26,
      "grossValue": 568146.09,
      "redemptionValue": 0.0,
      "pnlGross": -52630.17000000004,
      "pnlChange": 221.27999999991152,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-07",
      "appliedValue": 620776.26,
      "grossValue": 569032.09,
      "redemptionValue": 0.0,
      "pnlGross": -51744.17000000004,
      "pnlChange": 221.63000000000463,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-09",
      "appliedValue": 620776.26,
      "grossValue": 569475.61,
      "redemptionValue": 0.0,
      "pnlGross": -51300.65000000002,
      "pnlChange": 221.79999999993012,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-13",
      "appliedValue": 620776.26,
      "grossValue": 570363.68,
      "redemptionValue": 0.0,
      "pnlGross": -50412.57999999996,
      "pnlChange": 666.1800000000512,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-15",
      "appliedValue": 620776.26,
      "grossValue": 570808.24,
      "redemptionValue": 0.0,
      "pnlGross": -49968.02000000002,
      "pnlChange": 222.3199999999488,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-17",
      "appliedValue": 620776.26,
      "grossValue": 571253.14,
      "redemptionValue": 0.0,
      "pnlGross": -49523.12,
      "pnlChange": 222.5,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-21",
      "appliedValue": 620776.26,
      "grossValue": 572143.98,
      "redemptionValue": 0.0,
      "pnlGross": -48632.28000000003,
      "pnlChange": 222.8399999999674,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-23",
      "appliedValue": 620776.26,
      "grossValue": 572589.93,
      "redemptionValue": 0.0,
      "pnlGross": -48186.32999999996,
      "pnlChange": 223.02000000001863,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-27",
      "appliedValue": 620776.26,
      "grossValue": 559332.67,
      "redemptionValue": 0.0,
      "pnlGross": -61443.58999999997,
      "pnlChange": -13480.359999999986,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-29",
      "appliedValue": 620776.26,
      "grossValue": 559768.63,
      "redemptionValue": 0.0,
      "pnlGross": -61007.630000000005,
      "pnlChange": 218.03000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-31",
      "appliedValue": 620776.26,
      "grossValue": 560204.92,
      "redemptionValue": 0.0,
      "pnlGross": -60571.33999999997,
      "pnlChange": 218.1900000000605,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-04",
      "appliedValue": 620776.26,
      "grossValue": 561078.54,
      "redemptionValue": 0.0,
      "pnlGross": -59697.71999999997,
      "pnlChange": 218.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-05",
      "appliedValue": 620776.26,
      "grossValue": 561297.16,
      "redemptionValue": 0.0,
      "pnlGross": -59479.09999999998,
      "pnlChange": 218.61999999999531,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-07",
      "appliedValue": 620776.26,
      "grossValue": 561734.65,
      "redemptionValue": 0.0,
      "pnlGross": -59041.60999999999,
      "pnlChange": 218.79000000003725,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-11",
      "appliedValue": 620776.26,
      "grossValue": 562610.65,
      "redemptionValue": 0.0,
      "pnlGross": -58165.60999999999,
      "pnlChange": 219.13000000000463,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-13",
      "appliedValue": 620776.26,
      "grossValue": 563049.16,
      "redemptionValue": 0.0,
      "pnlGross": -57727.09999999998,
      "pnlChange": 219.30000000004657,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-17",
      "appliedValue": 620776.26,
      "grossValue": 563927.21,
      "redemptionValue": 0.0,
      "pnlGross": -56849.05000000005,
      "pnlChange": 658.6699999999255,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-19",
      "appliedValue": 620776.26,
      "grossValue": 564366.75,
      "redemptionValue": 0.0,
      "pnlGross": -56409.51000000001,
      "pnlChange": 219.81000000005588,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-24",
      "appliedValue": 620776.26,
      "grossValue": 565467.1,
      "redemptionValue": 0.0,
      "pnlGross": -55309.16000000003,
      "pnlChange": 660.4699999999721,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-26",
      "appliedValue": 620776.26,
      "grossValue": 551752.13,
      "redemptionValue": 0.0,
      "pnlGross": -69024.13,
      "pnlChange": 214.90000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-28",
      "appliedValue": 620776.26,
      "grossValue": 552182.18,
      "redemptionValue": 0.0,
      "pnlGross": -68594.07999999996,
      "pnlChange": 215.06000000005588,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-02",
      "appliedValue": 620776.26,
      "grossValue": 553043.29,
      "redemptionValue": 0.0,
      "pnlGross": -67732.96999999997,
      "pnlChange": 215.40000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-04",
      "appliedValue": 620776.26,
      "grossValue": 553474.34,
      "redemptionValue": 0.0,
      "pnlGross": -67301.92000000004,
      "pnlChange": 215.5699999999488,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-08",
      "appliedValue": 620776.26,
      "grossValue": 554337.46,
      "redemptionValue": 0.0,
      "pnlGross": -66438.80000000005,
      "pnlChange": 647.4599999999627,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-10",
      "appliedValue": 620776.26,
      "grossValue": 554769.53,
      "redemptionValue": 0.0,
      "pnlGross": -66006.72999999998,
      "pnlChange": 216.0800000000745,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-12",
      "appliedValue": 620776.26,
      "grossValue": 555201.93,
      "redemptionValue": 0.0,
      "pnlGross": -65574.32999999996,
      "pnlChange": 216.2400000001071,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-16",
      "appliedValue": 620776.26,
      "grossValue": 556067.74,
      "redemptionValue": 0.0,
      "pnlGross": -64708.52000000002,
      "pnlChange": 216.5799999999581,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-18",
      "appliedValue": 620776.26,
      "grossValue": 556501.16,
      "redemptionValue": 0.0,
      "pnlGross": -64275.09999999998,
      "pnlChange": 216.75,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-22",
      "appliedValue": 620776.26,
      "grossValue": 557369.0,
      "redemptionValue": 0.0,
      "pnlGross": -63407.26000000001,
      "pnlChange": 651.0100000000093,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-24",
      "appliedValue": 620776.26,
      "grossValue": 557803.43,
      "redemptionValue": 0.0,
      "pnlGross": -62972.82999999996,
      "pnlChange": 217.2600000000093,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-29",
      "appliedValue": 620776.26,
      "grossValue": 544724.24,
      "redemptionValue": 0.0,
      "pnlGross": -76052.02000000002,
      "pnlChange": 636.2399999999907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-31",
      "appliedValue": 620776.26,
      "grossValue": 545148.81,
      "redemptionValue": 0.0,
      "pnlGross": -75627.44999999995,
      "pnlChange": 212.3300000000745,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-05",
      "appliedValue": 620776.26,
      "grossValue": 546211.69,
      "redemptionValue": 0.0,
      "pnlGross": -74564.57000000007,
      "pnlChange": 637.9799999999814,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-07",
      "appliedValue": 620776.26,
      "grossValue": 546637.42,
      "redemptionValue": 0.0,
      "pnlGross": -74138.83999999997,
      "pnlChange": 212.9100000000326,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-09",
      "appliedValue": 620776.26,
      "grossValue": 547063.48,
      "redemptionValue": 0.0,
      "pnlGross": -73712.78000000003,
      "pnlChange": 213.0699999999488,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-13",
      "appliedValue": 620776.26,
      "grossValue": 547916.61,
      "redemptionValue": 0.0,
      "pnlGross": -72859.65000000002,
      "pnlChange": 213.4100000000326,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-15",
      "appliedValue": 620776.26,
      "grossValue": 548343.67,
      "redemptionValue": 0.0,
      "pnlGross": -72432.58999999997,
      "pnlChange": 213.5800000000745,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-19",
      "appliedValue": 620776.26,
      "grossValue": 549198.78,
      "redemptionValue": 0.0,
      "pnlGross": -71577.47999999998,
      "pnlChange": 641.4600000000792,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-21",
      "appliedValue": 620776.26,
      "grossValue": 549626.84,
      "redemptionValue": 0.0,
      "pnlGross": -71149.42000000004,
      "pnlChange": 214.0699999999488,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-23",
      "appliedValue": 620776.26,
      "grossValue": 550055.24,
      "redemptionValue": 0.0,
      "pnlGross": -70721.02000000002,
      "pnlChange": 214.2399999999907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-27",
      "appliedValue": 620776.26,
      "grossValue": 536757.32,
      "redemptionValue": 0.0,
      "pnlGross": -84018.94000000006,
      "pnlChange": 209.05999999993944,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-29",
      "appliedValue": 620776.26,
      "grossValue": 537175.68,
      "redemptionValue": 0.0,
      "pnlGross": -83600.57999999996,
      "pnlChange": 209.22000000008848,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-02",
      "appliedValue": 620776.26,
      "grossValue": 538013.39,
      "redemptionValue": 0.0,
      "pnlGross": -82762.87,
      "pnlChange": 628.4000000000233,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-04",
      "appliedValue": 620776.26,
      "grossValue": 538432.73,
      "redemptionValue": 0.0,
      "pnlGross": -82343.53000000003,
      "pnlChange": 209.70999999996275,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-05",
      "appliedValue": 620776.26,
      "grossValue": 538642.52,
      "redemptionValue": 0.0,
      "pnlGross": -82133.73999999999,
      "pnlChange": 209.79000000003725,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-09",
      "appliedValue": 620776.26,
      "grossValue": 539482.51,
      "redemptionValue": 0.0,
      "pnlGross": -81293.75,
      "pnlChange": 630.109999999986,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-11",
      "appliedValue": 620776.26,
      "grossValue": 539903.0,
      "redemptionValue": 0.0,
      "pnlGross": -80873.26000000001,
      "pnlChange": 210.29000000003725,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-13",
      "appliedValue": 620776.26,
      "grossValue": 540323.81,
      "redemptionValue": 0.0,
      "pnlGross": -80452.44999999995,
      "pnlChange": 210.45000000006985,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-19",
      "appliedValue": 620776.26,
      "grossValue": 541588.22,
      "redemptionValue": 0.0,
      "pnlGross": -79188.04000000004,
      "pnlChange": 210.9399999999441,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-23",
      "appliedValue": 620776.26,
      "grossValue": 542432.81,
      "redemptionValue": 0.0,
      "pnlGross": -78343.44999999995,
      "pnlChange": 633.5600000000559,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-25",
      "appliedValue": 620776.26,
      "grossValue": 528705.4,
      "redemptionValue": 0.0,
      "pnlGross": -92070.86,
      "pnlChange": -13938.76000000001,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-27",
      "appliedValue": 620776.26,
      "grossValue": 529117.49,
      "redemptionValue": 0.0,
      "pnlGross": -91658.77000000002,
      "pnlChange": 206.0799999999581,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-03",
      "appliedValue": 620776.26,
      "grossValue": 529942.63,
      "redemptionValue": 0.0,
      "pnlGross": -90833.63,
      "pnlChange": 206.4100000000326,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-05",
      "appliedValue": 620776.26,
      "grossValue": 530355.68,
      "redemptionValue": 0.0,
      "pnlGross": -90420.57999999996,
      "pnlChange": 206.5700000000652,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-09",
      "appliedValue": 620776.26,
      "grossValue": 531182.74,
      "redemptionValue": 0.0,
      "pnlGross": -89593.52000000002,
      "pnlChange": 620.4200000000419,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-11",
      "appliedValue": 620776.26,
      "grossValue": 531596.76,
      "redemptionValue": 0.0,
      "pnlGross": -89179.5,
      "pnlChange": 207.05000000004657,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-13",
      "appliedValue": 620776.26,
      "grossValue": 532011.1,
      "redemptionValue": 0.0,
      "pnlGross": -88765.16000000003,
      "pnlChange": 207.20999999996275,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-17",
      "appliedValue": 620776.26,
      "grossValue": 532840.75,
      "redemptionValue": 0.0,
      "pnlGross": -87935.51000000001,
      "pnlChange": 207.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-19",
      "appliedValue": 620776.26,
      "grossValue": 533256.06,
      "redemptionValue": 0.0,
      "pnlGross": -87520.19999999995,
      "pnlChange": 207.70000000006985,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-23",
      "appliedValue": 620776.26,
      "grossValue": 534087.65,
      "redemptionValue": 0.0,
      "pnlGross": -86688.60999999999,
      "pnlChange": 623.8100000000559,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-25",
      "appliedValue": 620776.26,
      "grossValue": 520353.74,
      "redemptionValue": 0.0,
      "pnlGross": -100422.52000000002,
      "pnlChange": -13942.01000000001,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-27",
      "appliedValue": 620776.26,
      "grossValue": 520759.32,
      "redemptionValue": 0.0,
      "pnlGross": -100016.94,
      "pnlChange": 202.8300000000163,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-31",
      "appliedValue": 620776.26,
      "grossValue": 521571.42,
      "redemptionValue": 0.0,
      "pnlGross": -99204.84000000004,
      "pnlChange": 203.13999999995576,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-02",
      "appliedValue": 620776.26,
      "grossValue": 521977.95,
      "redemptionValue": 0.0,
      "pnlGross": -98798.31,
      "pnlChange": 203.30999999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-07",
      "appliedValue": 620776.26,
      "grossValue": 522995.65,
      "redemptionValue": 0.0,
      "pnlGross": -97780.61,
      "pnlChange": 203.70000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-09",
      "appliedValue": 620776.26,
      "grossValue": 523403.28,
      "redemptionValue": 0.0,
      "pnlGross": -97372.97999999998,
      "pnlChange": 203.85000000003487,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-13",
      "appliedValue": 620776.26,
      "grossValue": 524219.51,
      "redemptionValue": 0.0,
      "pnlGross": -96556.75,
      "pnlChange": 612.2900000000373,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-15",
      "appliedValue": 620776.26,
      "grossValue": 524628.1,
      "redemptionValue": 0.0,
      "pnlGross": -96148.16000000005,
      "pnlChange": 204.3299999999581,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-17",
      "appliedValue": 620776.26,
      "grossValue": 525037.01,
      "redemptionValue": 0.0,
      "pnlGross": -95739.25,
      "pnlChange": 204.5,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-22",
      "appliedValue": 620776.26,
      "grossValue": 526060.67,
      "redemptionValue": 0.0,
      "pnlGross": -94715.58999999995,
      "pnlChange": 409.70000000006985,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-24",
      "appliedValue": 620776.26,
      "grossValue": 526470.7,
      "redemptionValue": 0.0,
      "pnlGross": -94305.56000000006,
      "pnlChange": 205.04999999993012,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-28",
      "appliedValue": 620776.26,
      "grossValue": 513136.0,
      "redemptionValue": 0.0,
      "pnlGross": -107640.26,
      "pnlChange": 199.84999999997672,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-30",
      "appliedValue": 620776.26,
      "grossValue": 513535.96,
      "redemptionValue": 0.0,
      "pnlGross": -107240.3,
      "pnlChange": 200.02000000001863,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-05",
      "appliedValue": 620776.26,
      "grossValue": 514537.2,
      "redemptionValue": 0.0,
      "pnlGross": -106239.06,
      "pnlChange": 200.4100000000326,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-07",
      "appliedValue": 620776.26,
      "grossValue": 514938.24,
      "redemptionValue": 0.0,
      "pnlGross": -105838.02000000002,
      "pnlChange": 200.55999999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-11",
      "appliedValue": 620776.26,
      "grossValue": 515741.27,
      "redemptionValue": 0.0,
      "pnlGross": -105034.99,
      "pnlChange": 602.390000000014,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-12",
      "appliedValue": 620776.26,
      "grossValue": 515942.22,
      "redemptionValue": 0.0,
      "pnlGross": -104834.04000000004,
      "pnlChange": 200.94999999995343,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-14",
      "appliedValue": 620776.26,
      "grossValue": 516344.36,
      "redemptionValue": 0.0,
      "pnlGross": -104431.90000000002,
      "pnlChange": 201.10999999998603,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-18",
      "appliedValue": 620776.26,
      "grossValue": 517149.57,
      "redemptionValue": 0.0,
      "pnlGross": -103626.69,
      "pnlChange": 604.0300000000279,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-20",
      "appliedValue": 620776.26,
      "grossValue": 517552.65,
      "redemptionValue": 0.0,
      "pnlGross": -103223.61,
      "pnlChange": 201.5800000000163,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-22",
      "appliedValue": 620776.26,
      "grossValue": 517956.05,
      "redemptionValue": 0.0,
      "pnlGross": -102820.21000000002,
      "pnlChange": 201.7399999999907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-26",
      "appliedValue": 620776.26,
      "grossValue": 504608.07,
      "redemptionValue": 0.0,
      "pnlGross": -116168.19,
      "pnlChange": 196.53000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-28",
      "appliedValue": 620776.26,
      "grossValue": 505001.38,
      "redemptionValue": 0.0,
      "pnlGross": -115774.88,
      "pnlChange": 196.69000000000236,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-01",
      "appliedValue": 620776.26,
      "grossValue": 505788.91,
      "redemptionValue": 0.0,
      "pnlGross": -114987.35000000003,
      "pnlChange": 590.7599999999511,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-03",
      "appliedValue": 620776.26,
      "grossValue": 506183.13,
      "redemptionValue": 0.0,
      "pnlGross": -114593.13,
      "pnlChange": 197.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-08",
      "appliedValue": 620776.26,
      "grossValue": 507170.04,
      "redemptionValue": 0.0,
      "pnlGross": -113606.22000000004,
      "pnlChange": 592.3800000000047,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-10",
      "appliedValue": 620776.26,
      "grossValue": 519804.38,
      "redemptionValue": 0.0,
      "pnlGross": -100971.88,
      "pnlChange": 975.6699999999836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-12",
      "appliedValue": 620776.26,
      "grossValue": 521761.22,
      "redemptionValue": 0.0,
      "pnlGross": -99015.04000000004,
      "pnlChange": 979.3399999999674,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-16",
      "appliedValue": 620776.26,
      "grossValue": 525697.04,
      "redemptionValue": 0.0,
      "pnlGross": -95079.21999999996,
      "pnlChange": 986.7299999999814,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-18",
      "appliedValue": 620776.26,
      "grossValue": 527676.06,
      "redemptionValue": 0.0,
      "pnlGross": -93100.19999999995,
      "pnlChange": 990.4400000000604,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-22",
      "appliedValue": 620776.26,
      "grossValue": 531656.5,
      "redemptionValue": 0.0,
      "pnlGross": -89119.76000000001,
      "pnlChange": 2988.1300000000047,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-24",
      "appliedValue": 620776.26,
      "grossValue": 533657.96,
      "redemptionValue": 0.0,
      "pnlGross": -87118.30000000005,
      "pnlChange": 1001.6699999999256,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-26",
      "appliedValue": 620776.26,
      "grossValue": 520045.32,
      "redemptionValue": 0.0,
      "pnlGross": -100730.94,
      "pnlChange": 202.5499999999884,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-30",
      "appliedValue": 620776.26,
      "grossValue": 520856.31,
      "redemptionValue": 0.0,
      "pnlGross": -99919.95,
      "pnlChange": 202.86999999999531,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-02",
      "appliedValue": 620776.26,
      "grossValue": 521262.27,
      "redemptionValue": 0.0,
      "pnlGross": -99513.99,
      "pnlChange": 203.02000000001863,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-06",
      "appliedValue": 620776.26,
      "grossValue": 522075.16,
      "redemptionValue": 0.0,
      "pnlGross": -98701.10000000003,
      "pnlChange": 609.7799999999697,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-08",
      "appliedValue": 620776.26,
      "grossValue": 522482.08,
      "redemptionValue": 0.0,
      "pnlGross": -98294.18,
      "pnlChange": 203.5,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-10",
      "appliedValue": 620776.26,
      "grossValue": 522889.32,
      "redemptionValue": 0.0,
      "pnlGross": -97886.94,
      "pnlChange": 203.6600000000326,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-14",
      "appliedValue": 620776.26,
      "grossValue": 523704.74,
      "redemptionValue": 0.0,
      "pnlGross": -97071.52000000002,
      "pnlChange": 203.97999999998137,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-16",
      "appliedValue": 620776.26,
      "grossValue": 524112.93,
      "redemptionValue": 0.0,
      "pnlGross": -96663.33000000002,
      "pnlChange": 204.140000000014,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-20",
      "appliedValue": 620776.26,
      "grossValue": 524930.26,
      "redemptionValue": 0.0,
      "pnlGross": -95846.0,
      "pnlChange": 613.1199999999953,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-22",
      "appliedValue": 620776.26,
      "grossValue": 525339.4,
      "redemptionValue": 0.0,
      "pnlGross": -95436.86,
      "pnlChange": 204.60999999998603,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-24",
      "appliedValue": 620776.26,
      "grossValue": 510937.53,
      "redemptionValue": 0.0,
      "pnlGross": -109838.72999999998,
      "pnlChange": -14606.569999999949,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-28",
      "appliedValue": 620776.26,
      "grossValue": 511734.38,
      "redemptionValue": 0.0,
      "pnlGross": -109041.88,
      "pnlChange": 199.3300000000163,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-30",
      "appliedValue": 620776.26,
      "grossValue": 512133.27,
      "redemptionValue": 0.0,
      "pnlGross": -108642.99,
      "pnlChange": 199.4899999999907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-03",
      "appliedValue": 620776.26,
      "grossValue": 512931.98,
      "redemptionValue": 0.0,
      "pnlGross": -107844.28000000004,
      "pnlChange": 599.1499999999651,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-05",
      "appliedValue": 620776.26,
      "grossValue": 513331.8,
      "redemptionValue": 0.0,
      "pnlGross": -107444.46000000002,
      "pnlChange": 199.95000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-07",
      "appliedValue": 620776.26,
      "grossValue": 513731.94,
      "redemptionValue": 0.0,
      "pnlGross": -107044.32,
      "pnlChange": 200.10999999998603,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-10",
      "appliedValue": 620776.26,
      "grossValue": 514332.73,
      "redemptionValue": 0.0,
      "pnlGross": -106443.53000000004,
      "pnlChange": 600.789999999979,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-12",
      "appliedValue": 620776.26,
      "grossValue": 514733.64,
      "redemptionValue": 0.0,
      "pnlGross": -106042.62,
      "pnlChange": 200.5,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-14",
      "appliedValue": 620776.26,
      "grossValue": 515134.87,
      "redemptionValue": 0.0,
      "pnlGross": -105641.39,
      "pnlChange": 200.65000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-18",
      "appliedValue": 620776.26,
      "grossValue": 515938.26,
      "redemptionValue": 0.0,
      "pnlGross": -104838.0,
      "pnlChange": 200.96000000002093,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-20",
      "appliedValue": 620776.26,
      "grossValue": 516340.43,
      "redemptionValue": 0.0,
      "pnlGross": -104435.83000000002,
      "pnlChange": 201.11999999999531,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-24",
      "appliedValue": 620776.26,
      "grossValue": 502329.59,
      "redemptionValue": 0.0,
      "pnlGross": -118446.66999999998,
      "pnlChange": -14212.03999999998,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-26",
      "appliedValue": 620776.26,
      "grossValue": 502721.16,
      "redemptionValue": 0.0,
      "pnlGross": -118055.10000000003,
      "pnlChange": 195.8299999999581,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-28",
      "appliedValue": 620776.26,
      "grossValue": 503113.03,
      "redemptionValue": 0.0,
      "pnlGross": -117663.22999999998,
      "pnlChange": 195.97000000003027,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-01",
      "appliedValue": 620776.26,
      "grossValue": 503897.7,
      "redemptionValue": 0.0,
      "pnlGross": -116878.56,
      "pnlChange": 196.28000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-03",
      "appliedValue": 620776.26,
      "grossValue": 504290.49,
      "redemptionValue": 0.0,
      "pnlGross": -116485.77000000002,
      "pnlChange": 196.44000000000236,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-08",
      "appliedValue": 620776.26,
      "grossValue": 505273.81,
      "redemptionValue": 0.0,
      "pnlGross": -115502.45,
      "pnlChange": 786.8099999999977,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-10",
      "appliedValue": 620776.26,
      "grossValue": 505667.67,
      "redemptionValue": 0.0,
      "pnlGross": -115108.59000000004,
      "pnlChange": 196.9699999999721,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-14",
      "appliedValue": 620776.26,
      "grossValue": 506456.32,
      "redemptionValue": 0.0,
      "pnlGross": -114319.94,
      "pnlChange": 591.6000000000349,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-16",
      "appliedValue": 620776.26,
      "grossValue": 506851.1,
      "redemptionValue": 0.0,
      "pnlGross": -113925.16000000005,
      "pnlChange": 197.42999999999304,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-18",
      "appliedValue": 620776.26,
      "grossValue": 507246.2,
      "redemptionValue": 0.0,
      "pnlGross": -113530.06,
      "pnlChange": 197.5900000000256,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-22",
      "appliedValue": 620776.26,
      "grossValue": 508037.31,
      "redemptionValue": 0.0,
      "pnlGross": -112738.95,
      "pnlChange": 197.890000000014,
      "statusPoint": "Último dia observado"
    }
  ],
  "RF|C332534": [
    {
      "date": "2025-11-11",
      "appliedValue": 1184781.24,
      "grossValue": 1184781.24,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": null,
      "statusPoint": "Entrada/1ª observação"
    },
    {
      "date": "2025-11-12",
      "appliedValue": 1184781.24,
      "grossValue": 1185225.06,
      "redemptionValue": 0.0,
      "pnlGross": 443.8200000000652,
      "pnlChange": 443.8200000000652,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-14",
      "appliedValue": 1184781.24,
      "grossValue": 1186113.21,
      "redemptionValue": 0.0,
      "pnlGross": 1331.969999999972,
      "pnlChange": 444.1599999999162,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-17",
      "appliedValue": 1184781.24,
      "grossValue": 1187446.67,
      "redemptionValue": 0.0,
      "pnlGross": 2665.429999999935,
      "pnlChange": 1333.4599999999627,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-18",
      "appliedValue": 1184781.24,
      "grossValue": 1187891.49,
      "redemptionValue": 0.0,
      "pnlGross": 3110.25,
      "pnlChange": 444.8200000000652,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-21",
      "appliedValue": 1184781.24,
      "grossValue": 1189226.96,
      "redemptionValue": 0.0,
      "pnlGross": 4445.719999999972,
      "pnlChange": 890.4799999999814,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-24",
      "appliedValue": 1184781.24,
      "grossValue": 1190563.92,
      "redemptionValue": 0.0,
      "pnlGross": 5782.679999999935,
      "pnlChange": 1336.9599999999627,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-25",
      "appliedValue": 1184781.24,
      "grossValue": 1191009.91,
      "redemptionValue": 0.0,
      "pnlGross": 6228.6699999999255,
      "pnlChange": 445.9899999999907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-27",
      "appliedValue": 1184781.24,
      "grossValue": 1191712.11,
      "redemptionValue": 0.0,
      "pnlGross": 6930.870000000112,
      "pnlChange": 434.37000000011176,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-28",
      "appliedValue": 1184781.24,
      "grossValue": 1192146.63,
      "redemptionValue": 0.0,
      "pnlGross": 7365.389999999898,
      "pnlChange": 434.5199999997858,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-02",
      "appliedValue": 1184781.24,
      "grossValue": 1193886.31,
      "redemptionValue": 0.0,
      "pnlGross": 9105.070000000063,
      "pnlChange": 435.160000000149,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-03",
      "appliedValue": 1184781.24,
      "grossValue": 1194321.62,
      "redemptionValue": 0.0,
      "pnlGross": 9540.38000000012,
      "pnlChange": 435.3100000000559,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-04",
      "appliedValue": 1184781.24,
      "grossValue": 1194757.1,
      "redemptionValue": 0.0,
      "pnlGross": 9975.860000000102,
      "pnlChange": 435.4799999999814,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-08",
      "appliedValue": 1184781.24,
      "grossValue": 1196500.58,
      "redemptionValue": 0.0,
      "pnlGross": 11719.340000000084,
      "pnlChange": 1307.8500000000931,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-09",
      "appliedValue": 1184781.24,
      "grossValue": 1196936.85,
      "redemptionValue": 0.0,
      "pnlGross": 12155.610000000102,
      "pnlChange": 436.2700000000186,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-10",
      "appliedValue": 1184781.24,
      "grossValue": 1197142.25,
      "redemptionValue": 0.0,
      "pnlGross": 12361.01000000001,
      "pnlChange": 205.39999999990687,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-12",
      "appliedValue": 1184781.24,
      "grossValue": 1111187.2,
      "redemptionValue": 0.0,
      "pnlGross": -73594.04000000004,
      "pnlChange": 484.780000000028,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-15",
      "appliedValue": 1184781.24,
      "grossValue": 1112642.81,
      "redemptionValue": 0.0,
      "pnlGross": -72138.42999999993,
      "pnlChange": 1455.6100000001024,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-16",
      "appliedValue": 1184781.24,
      "grossValue": 1113128.43,
      "redemptionValue": 0.0,
      "pnlGross": -71652.81000000006,
      "pnlChange": 485.6199999998789,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-18",
      "appliedValue": 1184781.24,
      "grossValue": 1114100.32,
      "redemptionValue": 0.0,
      "pnlGross": -70680.91999999993,
      "pnlChange": 486.05000000004657,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-19",
      "appliedValue": 1184781.24,
      "grossValue": 1114586.58,
      "redemptionValue": 0.0,
      "pnlGross": -70194.65999999992,
      "pnlChange": 486.2600000000093,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-22",
      "appliedValue": 1184781.24,
      "grossValue": 1116046.64,
      "redemptionValue": 0.0,
      "pnlGross": -68734.6000000001,
      "pnlChange": 1460.059999999823,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-24",
      "appliedValue": 1184781.24,
      "grossValue": 1116601.19,
      "redemptionValue": 0.0,
      "pnlGross": -68180.05000000005,
      "pnlChange": 454.8599999998696,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-26",
      "appliedValue": 1184781.24,
      "grossValue": 1117511.47,
      "redemptionValue": 0.0,
      "pnlGross": -67269.77000000002,
      "pnlChange": 910.280000000028,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-29",
      "appliedValue": 1184781.24,
      "grossValue": 1118878.28,
      "redemptionValue": 0.0,
      "pnlGross": -65902.95999999996,
      "pnlChange": 1366.810000000056,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-31",
      "appliedValue": 1184781.24,
      "grossValue": 1119790.42,
      "redemptionValue": 0.0,
      "pnlGross": -64990.82000000007,
      "pnlChange": 456.1599999999162,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-02",
      "appliedValue": 1184781.24,
      "grossValue": 1120703.3,
      "redemptionValue": 0.0,
      "pnlGross": -64077.93999999994,
      "pnlChange": 912.8800000001212,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-06",
      "appliedValue": 1184781.24,
      "grossValue": 1122531.29,
      "redemptionValue": 0.0,
      "pnlGross": -62249.94999999995,
      "pnlChange": 457.280000000028,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-07",
      "appliedValue": 1184781.24,
      "grossValue": 1122988.75,
      "redemptionValue": 0.0,
      "pnlGross": -61792.48999999999,
      "pnlChange": 457.4599999999628,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-08",
      "appliedValue": 1184781.24,
      "grossValue": 1123446.4,
      "redemptionValue": 0.0,
      "pnlGross": -61334.84000000008,
      "pnlChange": 457.64999999990687,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-12",
      "appliedValue": 1184781.24,
      "grossValue": 1038008.82,
      "redemptionValue": 0.0,
      "pnlGross": -146772.42000000004,
      "pnlChange": -85790.63,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-13",
      "appliedValue": 1184781.24,
      "grossValue": 1038438.52,
      "redemptionValue": 0.0,
      "pnlGross": -146342.71999999997,
      "pnlChange": 429.70000000006985,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-14",
      "appliedValue": 1184781.24,
      "grossValue": 1038868.39,
      "redemptionValue": 0.0,
      "pnlGross": -145912.84999999998,
      "pnlChange": 429.86999999999534,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-16",
      "appliedValue": 1184781.24,
      "grossValue": 1039728.67,
      "redemptionValue": 0.0,
      "pnlGross": -145052.56999999995,
      "pnlChange": 430.2300000000978,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-19",
      "appliedValue": 1184781.24,
      "grossValue": 1041020.42,
      "redemptionValue": 0.0,
      "pnlGross": -143760.81999999995,
      "pnlChange": 1291.75,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-20",
      "appliedValue": 1184781.24,
      "grossValue": 1041451.36,
      "redemptionValue": 0.0,
      "pnlGross": -143329.88,
      "pnlChange": 430.9399999999441,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-22",
      "appliedValue": 1184781.24,
      "grossValue": 1042313.78,
      "redemptionValue": 0.0,
      "pnlGross": -142467.45999999996,
      "pnlChange": 431.30000000004657,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-23",
      "appliedValue": 1184781.24,
      "grossValue": 1042745.26,
      "redemptionValue": 0.0,
      "pnlGross": -142035.97999999998,
      "pnlChange": 431.4799999999814,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-26",
      "appliedValue": 1184781.24,
      "grossValue": 1044040.76,
      "redemptionValue": 0.0,
      "pnlGross": -140740.47999999998,
      "pnlChange": 1295.5,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-28",
      "appliedValue": 1184781.24,
      "grossValue": 1044734.02,
      "redemptionValue": 0.0,
      "pnlGross": -140047.21999999997,
      "pnlChange": 422.2299999999814,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-29",
      "appliedValue": 1184781.24,
      "grossValue": 1045156.42,
      "redemptionValue": 0.0,
      "pnlGross": -139624.81999999995,
      "pnlChange": 422.4000000000233,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-30",
      "appliedValue": 1184781.24,
      "grossValue": 1045578.99,
      "redemptionValue": 0.0,
      "pnlGross": -139202.25,
      "pnlChange": 422.5699999999488,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-03",
      "appliedValue": 1184781.24,
      "grossValue": 1047270.98,
      "redemptionValue": 0.0,
      "pnlGross": -137510.26,
      "pnlChange": 423.25,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-04",
      "appliedValue": 1184781.24,
      "grossValue": 1047694.4,
      "redemptionValue": 0.0,
      "pnlGross": -137086.83999999997,
      "pnlChange": 423.4200000000419,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-05",
      "appliedValue": 1184781.24,
      "grossValue": 1048118.0,
      "redemptionValue": 0.0,
      "pnlGross": -136663.24,
      "pnlChange": 423.5999999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-09",
      "appliedValue": 1184781.24,
      "grossValue": 1049814.1,
      "redemptionValue": 0.0,
      "pnlGross": -134967.1399999999,
      "pnlChange": 1272.3300000000745,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-10",
      "appliedValue": 1184781.24,
      "grossValue": 1050238.55,
      "redemptionValue": 0.0,
      "pnlGross": -134542.68999999994,
      "pnlChange": 424.44999999995343,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-12",
      "appliedValue": 1184781.24,
      "grossValue": 967001.92,
      "redemptionValue": 0.0,
      "pnlGross": -217779.31999999995,
      "pnlChange": 443.0800000000745,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-13",
      "appliedValue": 1184781.24,
      "grossValue": 967445.21,
      "redemptionValue": 0.0,
      "pnlGross": -217336.03000000003,
      "pnlChange": 443.2899999999208,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-18",
      "appliedValue": 1184781.24,
      "grossValue": 969664.69,
      "redemptionValue": 0.0,
      "pnlGross": -215116.55000000005,
      "pnlChange": 2219.4799999999814,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-20",
      "appliedValue": 1184781.24,
      "grossValue": 970553.91,
      "redemptionValue": 0.0,
      "pnlGross": -214227.33,
      "pnlChange": 444.7200000000885,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-23",
      "appliedValue": 1184781.24,
      "grossValue": 971889.26,
      "redemptionValue": 0.0,
      "pnlGross": -212891.98,
      "pnlChange": 1335.3499999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-24",
      "appliedValue": 1184781.24,
      "grossValue": 972334.79,
      "redemptionValue": 0.0,
      "pnlGross": -212446.44999999995,
      "pnlChange": 445.530000000028,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-26",
      "appliedValue": 1184781.24,
      "grossValue": 973226.45,
      "redemptionValue": 0.0,
      "pnlGross": -211554.79000000004,
      "pnlChange": 445.9299999999348,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-27",
      "appliedValue": 1184781.24,
      "grossValue": 974724.56,
      "redemptionValue": 0.0,
      "pnlGross": -210056.67999999996,
      "pnlChange": 1498.1100000001024,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-02",
      "appliedValue": 1184781.24,
      "grossValue": 976263.3,
      "redemptionValue": 0.0,
      "pnlGross": -208517.93999999997,
      "pnlChange": 1538.7399999999907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-04",
      "appliedValue": 1184781.24,
      "grossValue": 977290.47,
      "redemptionValue": 0.0,
      "pnlGross": -207490.77,
      "pnlChange": 513.7199999999721,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-05",
      "appliedValue": 1184781.24,
      "grossValue": 977804.46,
      "redemptionValue": 0.0,
      "pnlGross": -206976.78000000003,
      "pnlChange": 513.9899999999907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-06",
      "appliedValue": 1184781.24,
      "grossValue": 978318.72,
      "redemptionValue": 0.0,
      "pnlGross": -206462.52,
      "pnlChange": 514.2600000000093,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-10",
      "appliedValue": 1184781.24,
      "grossValue": 980378.48,
      "redemptionValue": 0.0,
      "pnlGross": -204402.76,
      "pnlChange": 515.3499999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-11",
      "appliedValue": 1184781.24,
      "grossValue": 897566.9,
      "redemptionValue": 0.0,
      "pnlGross": -287214.34,
      "pnlChange": -82811.57999999996,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-12",
      "appliedValue": 1184781.24,
      "grossValue": 898456.46,
      "redemptionValue": 0.0,
      "pnlGross": -286324.78,
      "pnlChange": 889.5599999999395,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-16",
      "appliedValue": 1184781.24,
      "grossValue": 899875.65,
      "redemptionValue": 0.0,
      "pnlGross": -284905.59,
      "pnlChange": 1064.5999999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-17",
      "appliedValue": 1184781.24,
      "grossValue": 900230.79,
      "redemptionValue": 0.0,
      "pnlGross": -284550.44999999995,
      "pnlChange": 355.140000000014,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-19",
      "appliedValue": 1184781.24,
      "grossValue": 900941.51,
      "redemptionValue": 0.0,
      "pnlGross": -283839.73,
      "pnlChange": 355.4300000000512,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-20",
      "appliedValue": 1184781.24,
      "grossValue": 901297.07,
      "redemptionValue": 0.0,
      "pnlGross": -283484.17000000004,
      "pnlChange": 355.55999999993946,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-23",
      "appliedValue": 1184781.24,
      "grossValue": 902364.62,
      "redemptionValue": 0.0,
      "pnlGross": -282416.62,
      "pnlChange": 1067.5500000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-25",
      "appliedValue": 1184781.24,
      "grossValue": 903077.01,
      "redemptionValue": 0.0,
      "pnlGross": -281704.23,
      "pnlChange": 356.2700000000186,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-26",
      "appliedValue": 1184781.24,
      "grossValue": 905218.48,
      "redemptionValue": 0.0,
      "pnlGross": -279562.76,
      "pnlChange": 2141.469999999972,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-27",
      "appliedValue": 1184781.24,
      "grossValue": 905694.91,
      "redemptionValue": 0.0,
      "pnlGross": -279086.33,
      "pnlChange": 476.4300000000512,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-31",
      "appliedValue": 1184781.24,
      "grossValue": 907603.14,
      "redemptionValue": 0.0,
      "pnlGross": -277178.1,
      "pnlChange": 477.4400000000605,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-01",
      "appliedValue": 1184781.24,
      "grossValue": 908080.82,
      "redemptionValue": 0.0,
      "pnlGross": -276700.42000000004,
      "pnlChange": 477.6799999999348,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-02",
      "appliedValue": 1184781.24,
      "grossValue": 908558.76,
      "redemptionValue": 0.0,
      "pnlGross": -276222.48,
      "pnlChange": 477.9400000000605,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-07",
      "appliedValue": 1184781.24,
      "grossValue": 910952.22,
      "redemptionValue": 0.0,
      "pnlGross": -273829.02,
      "pnlChange": 479.1899999999441,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-08",
      "appliedValue": 1184781.24,
      "grossValue": 911431.67,
      "redemptionValue": 0.0,
      "pnlGross": -273349.56999999995,
      "pnlChange": 479.45000000006985,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-09",
      "appliedValue": 1184781.24,
      "grossValue": 911911.37,
      "redemptionValue": 0.0,
      "pnlGross": -272869.87,
      "pnlChange": 479.69999999995343,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-13",
      "appliedValue": 1184781.24,
      "grossValue": 829405.42,
      "redemptionValue": 0.0,
      "pnlGross": -355375.81999999995,
      "pnlChange": -84476.30999999994,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-14",
      "appliedValue": 1184781.24,
      "grossValue": 829840.02,
      "redemptionValue": 0.0,
      "pnlGross": -354941.22,
      "pnlChange": 434.5999999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-15",
      "appliedValue": 1184781.24,
      "grossValue": 830274.85,
      "redemptionValue": 0.0,
      "pnlGross": -354506.39,
      "pnlChange": 434.8299999999581,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-17",
      "appliedValue": 1184781.24,
      "grossValue": 831145.19,
      "redemptionValue": 0.0,
      "pnlGross": -353636.05000000005,
      "pnlChange": 435.2799999999115,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-20",
      "appliedValue": 1184781.24,
      "grossValue": 832452.41,
      "redemptionValue": 0.0,
      "pnlGross": -352328.83,
      "pnlChange": 1307.2200000000885,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-23",
      "appliedValue": 1184781.24,
      "grossValue": 833761.69,
      "redemptionValue": 0.0,
      "pnlGross": -351019.55000000005,
      "pnlChange": 436.64999999990687,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-24",
      "appliedValue": 1184781.24,
      "grossValue": 834198.57,
      "redemptionValue": 0.0,
      "pnlGross": -350582.67000000004,
      "pnlChange": 436.8800000000047,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-27",
      "appliedValue": 1184781.24,
      "grossValue": 835510.6,
      "redemptionValue": 0.0,
      "pnlGross": -349270.64,
      "pnlChange": 1312.030000000028,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-29",
      "appliedValue": 1184781.24,
      "grossValue": 836336.58,
      "redemptionValue": 0.0,
      "pnlGross": -348444.66000000003,
      "pnlChange": 435.2299999999814,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-30",
      "appliedValue": 1184781.24,
      "grossValue": 836772.05,
      "redemptionValue": 0.0,
      "pnlGross": -348009.18999999994,
      "pnlChange": 435.4700000000885,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-04",
      "appliedValue": 1184781.24,
      "grossValue": 838516.16,
      "redemptionValue": 0.0,
      "pnlGross": -346265.08,
      "pnlChange": 1744.109999999986,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-06",
      "appliedValue": 1184781.24,
      "grossValue": 839389.58,
      "redemptionValue": 0.0,
      "pnlGross": -345391.66000000003,
      "pnlChange": 436.8199999999488,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-07",
      "appliedValue": 1184781.24,
      "grossValue": 839826.64,
      "redemptionValue": 0.0,
      "pnlGross": -344954.6,
      "pnlChange": 437.0600000000559,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-08",
      "appliedValue": 1184781.24,
      "grossValue": 840263.92,
      "redemptionValue": 0.0,
      "pnlGross": -344517.31999999995,
      "pnlChange": 437.280000000028,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-12",
      "appliedValue": 1184781.24,
      "grossValue": 756504.34,
      "redemptionValue": 0.0,
      "pnlGross": -428276.9,
      "pnlChange": 347.03999999992084,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-13",
      "appliedValue": 1184781.24,
      "grossValue": 756851.53,
      "redemptionValue": 0.0,
      "pnlGross": -427929.71,
      "pnlChange": 347.19000000006054,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-14",
      "appliedValue": 1184781.24,
      "grossValue": 757198.89,
      "redemptionValue": 0.0,
      "pnlGross": -427582.35,
      "pnlChange": 347.35999999998603,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-18",
      "appliedValue": 1184781.24,
      "grossValue": 758589.9,
      "redemptionValue": 0.0,
      "pnlGross": -426191.34,
      "pnlChange": 1043.5,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-19",
      "appliedValue": 1184781.24,
      "grossValue": 758938.06,
      "redemptionValue": 0.0,
      "pnlGross": -425843.17999999993,
      "pnlChange": 348.1600000000326,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-20",
      "appliedValue": 1184781.24,
      "grossValue": 759286.37,
      "redemptionValue": 0.0,
      "pnlGross": -425494.87,
      "pnlChange": 348.30999999993946,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-22",
      "appliedValue": 1184781.24,
      "grossValue": 759983.48,
      "redemptionValue": 0.0,
      "pnlGross": -424797.76,
      "pnlChange": 348.640000000014,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-25",
      "appliedValue": 1184781.24,
      "grossValue": 761030.34,
      "redemptionValue": 0.0,
      "pnlGross": -423750.9,
      "pnlChange": 1046.859999999986,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-27",
      "appliedValue": 1184781.24,
      "grossValue": 761729.04,
      "redemptionValue": 0.0,
      "pnlGross": -423052.2,
      "pnlChange": 349.4300000000512,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-28",
      "appliedValue": 1184781.24,
      "grossValue": 762078.64,
      "redemptionValue": 0.0,
      "pnlGross": -422702.6,
      "pnlChange": 349.5999999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-29",
      "appliedValue": 1184781.24,
      "grossValue": 762428.39,
      "redemptionValue": 0.0,
      "pnlGross": -422352.85,
      "pnlChange": 349.75,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-02",
      "appliedValue": 1184781.24,
      "grossValue": 763829.01,
      "redemptionValue": 0.0,
      "pnlGross": -420952.23,
      "pnlChange": 350.390000000014,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-03",
      "appliedValue": 1184781.24,
      "grossValue": 764179.57,
      "redemptionValue": 0.0,
      "pnlGross": -420601.67,
      "pnlChange": 350.55999999993946,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-05",
      "appliedValue": 1184781.24,
      "grossValue": 764881.17,
      "redemptionValue": 0.0,
      "pnlGross": -419900.07,
      "pnlChange": 701.6000000000931,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-09",
      "appliedValue": 1184781.24,
      "grossValue": 766856.91,
      "redemptionValue": 0.0,
      "pnlGross": -417924.33,
      "pnlChange": 922.1300000000048,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-10",
      "appliedValue": 1184781.24,
      "grossValue": 767228.55,
      "redemptionValue": 0.0,
      "pnlGross": -417552.69,
      "pnlChange": 371.640000000014,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-11",
      "appliedValue": 1184781.24,
      "grossValue": 680089.83,
      "redemptionValue": 0.0,
      "pnlGross": -504691.41,
      "pnlChange": -87138.72000000009,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-15",
      "appliedValue": 1184781.24,
      "grossValue": 681209.07,
      "redemptionValue": 0.0,
      "pnlGross": -503572.17,
      "pnlChange": 839.5999999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-16",
      "appliedValue": 1184781.24,
      "grossValue": 681489.17,
      "redemptionValue": 0.0,
      "pnlGross": -503292.07,
      "pnlChange": 280.10000000009313,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-17",
      "appliedValue": 1184781.24,
      "grossValue": 681769.39,
      "redemptionValue": 0.0,
      "pnlGross": -503011.85,
      "pnlChange": 280.21999999997206,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-19",
      "appliedValue": 1184781.24,
      "grossValue": 682330.16,
      "redemptionValue": 0.0,
      "pnlGross": -502451.08,
      "pnlChange": 280.44000000006054,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-22",
      "appliedValue": 1184781.24,
      "grossValue": 683172.19,
      "redemptionValue": 0.0,
      "pnlGross": -501609.0500000001,
      "pnlChange": 842.0299999999115,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-23",
      "appliedValue": 1184781.24,
      "grossValue": 683453.1,
      "redemptionValue": 0.0,
      "pnlGross": -501328.14,
      "pnlChange": 280.9100000000326,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-25",
      "appliedValue": 1184781.24,
      "grossValue": 684015.26,
      "redemptionValue": 0.0,
      "pnlGross": -500765.98,
      "pnlChange": 281.140000000014,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-26",
      "appliedValue": 1184781.24,
      "grossValue": 684296.51,
      "redemptionValue": 0.0,
      "pnlGross": -500484.73,
      "pnlChange": 281.25,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-30",
      "appliedValue": 1184781.24,
      "grossValue": 685422.68,
      "redemptionValue": 0.0,
      "pnlGross": -499358.56,
      "pnlChange": 281.7200000000885,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-01",
      "appliedValue": 1184781.24,
      "grossValue": 685704.51,
      "redemptionValue": 0.0,
      "pnlGross": -499076.73,
      "pnlChange": 281.8299999999581,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-02",
      "appliedValue": 1184781.24,
      "grossValue": 685986.46,
      "redemptionValue": 0.0,
      "pnlGross": -498794.78,
      "pnlChange": 281.94999999995343,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-06",
      "appliedValue": 1184781.24,
      "grossValue": 687058.34,
      "redemptionValue": 0.0,
      "pnlGross": -497722.9,
      "pnlChange": 839.9699999999721,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-07",
      "appliedValue": 1184781.24,
      "grossValue": 687338.57,
      "redemptionValue": 0.0,
      "pnlGross": -497442.67,
      "pnlChange": 280.2299999999814,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-08",
      "appliedValue": 1184781.24,
      "grossValue": 687618.9,
      "redemptionValue": 0.0,
      "pnlGross": -497162.34,
      "pnlChange": 280.3300000000745,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-10",
      "appliedValue": 1184781.24,
      "grossValue": 687052.69,
      "redemptionValue": 0.0,
      "pnlGross": -497728.5500000001,
      "pnlChange": 241.27999999991152,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-13",
      "appliedValue": 1184781.24,
      "grossValue": 599883.97,
      "redemptionValue": 0.0,
      "pnlGross": -584897.27,
      "pnlChange": -87168.71999999997,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-14",
      "appliedValue": 1184781.24,
      "grossValue": 600107.21,
      "redemptionValue": 0.0,
      "pnlGross": -584674.03,
      "pnlChange": 223.2399999999907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-16",
      "appliedValue": 1184781.24,
      "grossValue": 600553.93,
      "redemptionValue": 0.0,
      "pnlGross": -584227.3099999999,
      "pnlChange": 223.40000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-17",
      "appliedValue": 1184781.24,
      "grossValue": 600777.41,
      "redemptionValue": 0.0,
      "pnlGross": -584003.83,
      "pnlChange": 223.47999999998137,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-20",
      "appliedValue": 1184781.24,
      "grossValue": 601448.37,
      "redemptionValue": 0.0,
      "pnlGross": -583332.87,
      "pnlChange": 670.9599999999627,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-22",
      "appliedValue": 1184781.24,
      "grossValue": 601896.09,
      "redemptionValue": 0.0,
      "pnlGross": -582885.15,
      "pnlChange": 223.90000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-23",
      "appliedValue": 1184781.24,
      "grossValue": 602120.07,
      "redemptionValue": 0.0,
      "pnlGross": -582661.17,
      "pnlChange": 223.97999999998137,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-24",
      "appliedValue": 1184781.24,
      "grossValue": 602344.14,
      "redemptionValue": 0.0,
      "pnlGross": -582437.1,
      "pnlChange": 224.0700000000652,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-28",
      "appliedValue": 1184781.24,
      "grossValue": 602646.91,
      "redemptionValue": 0.0,
      "pnlGross": -582134.33,
      "pnlChange": -369.9299999999348,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-29",
      "appliedValue": 1184781.24,
      "grossValue": 602836.22,
      "redemptionValue": 0.0,
      "pnlGross": -581945.02,
      "pnlChange": 189.30999999993944,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-30",
      "appliedValue": 1184781.24,
      "grossValue": 603025.59,
      "redemptionValue": 0.0,
      "pnlGross": -581755.65,
      "pnlChange": 189.36999999999531,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-03",
      "appliedValue": 1184781.24,
      "grossValue": 603783.66,
      "redemptionValue": 0.0,
      "pnlGross": -580997.58,
      "pnlChange": 568.640000000014,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-04",
      "appliedValue": 1184781.24,
      "grossValue": 603973.32,
      "redemptionValue": 0.0,
      "pnlGross": -580807.92,
      "pnlChange": 189.65999999991615,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-06",
      "appliedValue": 1184781.24,
      "grossValue": 604352.83,
      "redemptionValue": 0.0,
      "pnlGross": -580428.41,
      "pnlChange": 189.77999999991152,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-07",
      "appliedValue": 1184781.24,
      "grossValue": 604542.68,
      "redemptionValue": 0.0,
      "pnlGross": -580238.5599999999,
      "pnlChange": 189.85000000009316,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-10",
      "appliedValue": 1184781.24,
      "grossValue": 605112.57,
      "redemptionValue": 0.0,
      "pnlGross": -579668.67,
      "pnlChange": 569.8899999998976,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-12",
      "appliedValue": 1184781.24,
      "grossValue": 517552.25,
      "redemptionValue": 0.0,
      "pnlGross": -667228.99,
      "pnlChange": 120.76000000000931,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-13",
      "appliedValue": 1184781.24,
      "grossValue": 517673.05,
      "redemptionValue": 0.0,
      "pnlGross": -667108.19,
      "pnlChange": 120.80000000004657,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-14",
      "appliedValue": 1184781.24,
      "grossValue": 517793.88,
      "redemptionValue": 0.0,
      "pnlGross": -666987.36,
      "pnlChange": 120.82999999995808,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-18",
      "appliedValue": 1184781.24,
      "grossValue": 518277.46,
      "redemptionValue": 0.0,
      "pnlGross": -666503.78,
      "pnlChange": 120.93999999994412,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-19",
      "appliedValue": 1184781.24,
      "grossValue": 518398.43,
      "redemptionValue": 0.0,
      "pnlGross": -666382.81,
      "pnlChange": 120.96999999997206,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-20",
      "appliedValue": 1184781.24,
      "grossValue": 518519.42,
      "redemptionValue": 0.0,
      "pnlGross": -666261.8200000001,
      "pnlChange": 120.98999999999069,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-24",
      "appliedValue": 1184781.24,
      "grossValue": 519003.68,
      "redemptionValue": 0.0,
      "pnlGross": -665777.56,
      "pnlChange": 363.2399999999907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-25",
      "appliedValue": 1184781.24,
      "grossValue": 519124.82,
      "redemptionValue": 0.0,
      "pnlGross": -665656.4199999999,
      "pnlChange": 121.1400000001304,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-26",
      "appliedValue": 1184781.24,
      "grossValue": 519245.98,
      "redemptionValue": 0.0,
      "pnlGross": -665535.26,
      "pnlChange": 121.15999999991618,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-28",
      "appliedValue": 1184781.24,
      "grossValue": 519259.99,
      "redemptionValue": 0.0,
      "pnlGross": -665521.25,
      "pnlChange": -107.1799999999348,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-31",
      "appliedValue": 1184781.24,
      "grossValue": 519583.34,
      "redemptionValue": 0.0,
      "pnlGross": -665197.8999999999,
      "pnlChange": 323.35000000009313,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-01",
      "appliedValue": 1184781.24,
      "grossValue": 519691.17,
      "redemptionValue": 0.0,
      "pnlGross": -665090.0700000001,
      "pnlChange": 107.82999999984168,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-03",
      "appliedValue": 1184781.24,
      "grossValue": 519906.89,
      "redemptionValue": 0.0,
      "pnlGross": -664874.35,
      "pnlChange": 107.86999999999534,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-04",
      "appliedValue": 1184781.24,
      "grossValue": 520014.78,
      "redemptionValue": 0.0,
      "pnlGross": -664766.46,
      "pnlChange": 107.89000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-09",
      "appliedValue": 1184781.24,
      "grossValue": 520554.59,
      "redemptionValue": 0.0,
      "pnlGross": -664226.6499999999,
      "pnlChange": 108.01000000000931,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-10",
      "appliedValue": 1184781.24,
      "grossValue": 520662.62,
      "redemptionValue": 0.0,
      "pnlGross": -664118.62,
      "pnlChange": 108.02999999991152,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-11",
      "appliedValue": 1184781.24,
      "grossValue": 432348.89,
      "redemptionValue": 0.0,
      "pnlGross": -752432.35,
      "pnlChange": -88313.72999999998,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-15",
      "appliedValue": 1184781.24,
      "grossValue": 433186.9,
      "redemptionValue": 0.0,
      "pnlGross": -751594.34,
      "pnlChange": 209.6600000000326,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-16",
      "appliedValue": 1184781.24,
      "grossValue": 433396.66,
      "redemptionValue": 0.0,
      "pnlGross": -751384.5800000001,
      "pnlChange": 209.7599999998929,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-17",
      "appliedValue": 1184781.24,
      "grossValue": 433606.51,
      "redemptionValue": 0.0,
      "pnlGross": -751174.73,
      "pnlChange": 209.85000000009316,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-21",
      "appliedValue": 1184781.24,
      "grossValue": 434446.96,
      "redemptionValue": 0.0,
      "pnlGross": -750334.28,
      "pnlChange": 630.4899999999907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-22",
      "appliedValue": 1184781.24,
      "grossValue": 434657.33,
      "redemptionValue": 0.0,
      "pnlGross": -750123.9099999999,
      "pnlChange": 210.37000000011176,
      "statusPoint": "Último dia observado"
    }
  ],
  "RF|C128557": [
    {
      "date": "2024-06-27",
      "appliedValue": 307674.54,
      "grossValue": 307674.54,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": null,
      "statusPoint": "Entrada/1ª observação"
    },
    {
      "date": "2024-07-03",
      "appliedValue": 307674.54,
      "grossValue": 308289.89,
      "redemptionValue": 0.0,
      "pnlGross": 615.3500000000349,
      "pnlChange": 102.55999999999769,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-07-08",
      "appliedValue": 307674.54,
      "grossValue": 308802.68,
      "redemptionValue": 0.0,
      "pnlGross": 1128.140000000014,
      "pnlChange": 307.6699999999837,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-07-12",
      "appliedValue": 307674.54,
      "grossValue": 309212.91,
      "redemptionValue": 0.0,
      "pnlGross": 1538.3699999999951,
      "pnlChange": 102.55999999999769,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-07-17",
      "appliedValue": 307674.54,
      "grossValue": 309725.7,
      "redemptionValue": 0.0,
      "pnlGross": 2051.1600000000326,
      "pnlChange": 102.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-07-23",
      "appliedValue": 307674.54,
      "grossValue": 310341.05,
      "redemptionValue": 0.0,
      "pnlGross": 2666.5100000000093,
      "pnlChange": 102.55999999999769,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-07-26",
      "appliedValue": 307674.54,
      "grossValue": 310648.73,
      "redemptionValue": 0.0,
      "pnlGross": 2974.1900000000023,
      "pnlChange": 102.55999999999769,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-08-01",
      "appliedValue": 307674.54,
      "grossValue": 311264.08,
      "redemptionValue": 0.0,
      "pnlGross": 3589.5400000000373,
      "pnlChange": 102.55999999999769,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-08-06",
      "appliedValue": 307674.54,
      "grossValue": 311776.87,
      "redemptionValue": 0.0,
      "pnlGross": 4102.330000000016,
      "pnlChange": 102.55999999999769,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-08-12",
      "appliedValue": 307674.54,
      "grossValue": 312392.22,
      "redemptionValue": 0.0,
      "pnlGross": 4717.679999999993,
      "pnlChange": 307.679999999993,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-08-15",
      "appliedValue": 307674.54,
      "grossValue": 312699.89,
      "redemptionValue": 0.0,
      "pnlGross": 5025.350000000035,
      "pnlChange": 102.55999999999769,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-08-21",
      "appliedValue": 307674.54,
      "grossValue": 313315.24,
      "redemptionValue": 0.0,
      "pnlGross": 5640.700000000012,
      "pnlChange": 102.55999999999769,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-08-26",
      "appliedValue": 307674.54,
      "grossValue": 313828.03,
      "redemptionValue": 0.0,
      "pnlGross": 6153.490000000049,
      "pnlChange": 307.6700000000419,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-08-30",
      "appliedValue": 307674.54,
      "grossValue": 314238.26,
      "redemptionValue": 0.0,
      "pnlGross": 6563.72000000003,
      "pnlChange": 102.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-09-04",
      "appliedValue": 307674.54,
      "grossValue": 314751.05,
      "redemptionValue": 0.0,
      "pnlGross": 7076.510000000009,
      "pnlChange": 102.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-09-10",
      "appliedValue": 307674.54,
      "grossValue": 315366.4,
      "redemptionValue": 0.0,
      "pnlGross": 7691.860000000044,
      "pnlChange": 102.55000000004657,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-09-16",
      "appliedValue": 307674.54,
      "grossValue": 315981.75,
      "redemptionValue": 0.0,
      "pnlGross": 8307.210000000021,
      "pnlChange": 307.6699999999837,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-09-19",
      "appliedValue": 307674.54,
      "grossValue": 316289.43,
      "redemptionValue": 0.0,
      "pnlGross": 8614.890000000014,
      "pnlChange": 102.55999999999769,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-09-25",
      "appliedValue": 307674.54,
      "grossValue": 316904.78,
      "redemptionValue": 0.0,
      "pnlGross": 9230.240000000049,
      "pnlChange": 102.56000000005588,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-09-30",
      "appliedValue": 307674.54,
      "grossValue": 317417.57,
      "redemptionValue": 0.0,
      "pnlGross": 9743.030000000028,
      "pnlChange": 307.679999999993,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-10-04",
      "appliedValue": 307674.54,
      "grossValue": 317827.8,
      "redemptionValue": 0.0,
      "pnlGross": 10153.26000000001,
      "pnlChange": 102.55999999999769,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-10-09",
      "appliedValue": 307674.54,
      "grossValue": 318340.59,
      "redemptionValue": 0.0,
      "pnlGross": 10666.050000000048,
      "pnlChange": 102.55999999999769,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-10-15",
      "appliedValue": 307674.54,
      "grossValue": 318955.94,
      "redemptionValue": 0.0,
      "pnlGross": 11281.400000000023,
      "pnlChange": 102.55999999999769,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-10-18",
      "appliedValue": 307674.54,
      "grossValue": 319263.61,
      "redemptionValue": 0.0,
      "pnlGross": 11589.070000000009,
      "pnlChange": 102.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-10-24",
      "appliedValue": 307674.54,
      "grossValue": 319878.96,
      "redemptionValue": 0.0,
      "pnlGross": 12204.420000000042,
      "pnlChange": 102.55000000004657,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-10-29",
      "appliedValue": 307674.54,
      "grossValue": 320391.75,
      "redemptionValue": 0.0,
      "pnlGross": 12717.21000000002,
      "pnlChange": 102.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-11-04",
      "appliedValue": 307674.54,
      "grossValue": 321007.1,
      "redemptionValue": 0.0,
      "pnlGross": 13332.559999999998,
      "pnlChange": 307.6699999999837,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-11-07",
      "appliedValue": 307674.54,
      "grossValue": 321314.78,
      "redemptionValue": 0.0,
      "pnlGross": 13640.240000000049,
      "pnlChange": 102.56000000005588,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-11-13",
      "appliedValue": 307674.54,
      "grossValue": 321930.13,
      "redemptionValue": 0.0,
      "pnlGross": 14255.590000000026,
      "pnlChange": 102.55999999999769,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-11-21",
      "appliedValue": 307674.54,
      "grossValue": 322750.59,
      "redemptionValue": 0.0,
      "pnlGross": 15076.050000000048,
      "pnlChange": 205.11000000004424,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-11-26",
      "appliedValue": 307674.54,
      "grossValue": 323263.38,
      "redemptionValue": 0.0,
      "pnlGross": 15588.840000000026,
      "pnlChange": 102.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-12-02",
      "appliedValue": 307674.54,
      "grossValue": 323878.73,
      "redemptionValue": 0.0,
      "pnlGross": 16204.190000000002,
      "pnlChange": 307.6699999999837,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-12-05",
      "appliedValue": 307674.54,
      "grossValue": 324186.41,
      "redemptionValue": 0.0,
      "pnlGross": 16511.869999999995,
      "pnlChange": 102.55999999999769,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-12-11",
      "appliedValue": 307674.54,
      "grossValue": 324801.76,
      "redemptionValue": 0.0,
      "pnlGross": 17127.22000000003,
      "pnlChange": 102.55999999999769,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-12-16",
      "appliedValue": 307674.54,
      "grossValue": 325314.55,
      "redemptionValue": 0.0,
      "pnlGross": 17640.01000000001,
      "pnlChange": 307.679999999993,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-12-20",
      "appliedValue": 307674.54,
      "grossValue": 325724.78,
      "redemptionValue": 0.0,
      "pnlGross": 18050.24000000005,
      "pnlChange": 102.56000000005588,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-12-26",
      "appliedValue": 307674.54,
      "grossValue": 326340.13,
      "redemptionValue": 0.0,
      "pnlGross": 18665.590000000026,
      "pnlChange": 205.11999999999531,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-02",
      "appliedValue": 307674.54,
      "grossValue": 327058.04,
      "redemptionValue": 0.0,
      "pnlGross": 19383.5,
      "pnlChange": 205.11999999999531,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-07",
      "appliedValue": 307674.54,
      "grossValue": 342984.48,
      "redemptionValue": 0.0,
      "pnlGross": 35309.94,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-13",
      "appliedValue": 307674.54,
      "grossValue": 343628.78,
      "redemptionValue": 0.0,
      "pnlGross": 35954.24000000005,
      "pnlChange": 322.1500000000233,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-16",
      "appliedValue": 307674.54,
      "grossValue": 343950.94,
      "redemptionValue": 0.0,
      "pnlGross": 36276.40000000002,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-22",
      "appliedValue": 307674.54,
      "grossValue": 344595.24,
      "redemptionValue": 0.0,
      "pnlGross": 36920.70000000001,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-27",
      "appliedValue": 307674.54,
      "grossValue": 345132.16,
      "redemptionValue": 0.0,
      "pnlGross": 37457.62,
      "pnlChange": 322.1499999999651,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-03",
      "appliedValue": 307674.54,
      "grossValue": 345883.85,
      "redemptionValue": 0.0,
      "pnlGross": 38209.31,
      "pnlChange": 322.1499999999651,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-07",
      "appliedValue": 307674.54,
      "grossValue": 346313.38,
      "redemptionValue": 0.0,
      "pnlGross": 38638.840000000026,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-12",
      "appliedValue": 307674.54,
      "grossValue": 346850.3,
      "redemptionValue": 0.0,
      "pnlGross": 39175.76000000001,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-18",
      "appliedValue": 307674.54,
      "grossValue": 347494.61,
      "redemptionValue": 0.0,
      "pnlGross": 39820.07000000001,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-21",
      "appliedValue": 307674.54,
      "grossValue": 347816.76,
      "redemptionValue": 0.0,
      "pnlGross": 40142.22000000003,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-27",
      "appliedValue": 307674.54,
      "grossValue": 348461.06,
      "redemptionValue": 0.0,
      "pnlGross": 40786.52000000002,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-06",
      "appliedValue": 307674.54,
      "grossValue": 349212.75,
      "redemptionValue": 0.0,
      "pnlGross": 41538.21000000002,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-12",
      "appliedValue": 307674.54,
      "grossValue": 349857.06,
      "redemptionValue": 0.0,
      "pnlGross": 42182.52000000002,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-17",
      "appliedValue": 307674.54,
      "grossValue": 350393.98,
      "redemptionValue": 0.0,
      "pnlGross": 42719.44,
      "pnlChange": 322.1599999999744,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-21",
      "appliedValue": 307674.54,
      "grossValue": 350823.51,
      "redemptionValue": 0.0,
      "pnlGross": 43148.97000000003,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-26",
      "appliedValue": 307674.54,
      "grossValue": 351360.43,
      "redemptionValue": 0.0,
      "pnlGross": 43685.890000000014,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-01",
      "appliedValue": 307674.54,
      "grossValue": 352004.74,
      "redemptionValue": 0.0,
      "pnlGross": 44330.20000000001,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-04",
      "appliedValue": 307674.54,
      "grossValue": 352326.89,
      "redemptionValue": 0.0,
      "pnlGross": 44652.35000000004,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-10",
      "appliedValue": 307674.54,
      "grossValue": 352971.19,
      "redemptionValue": 0.0,
      "pnlGross": 45296.65000000002,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-15",
      "appliedValue": 307674.54,
      "grossValue": 353508.11,
      "redemptionValue": 0.0,
      "pnlGross": 45833.57000000001,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-23",
      "appliedValue": 307674.54,
      "grossValue": 354367.18,
      "redemptionValue": 0.0,
      "pnlGross": 46692.640000000014,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-29",
      "appliedValue": 307674.54,
      "grossValue": 355011.49,
      "redemptionValue": 0.0,
      "pnlGross": 47336.95000000001,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-05",
      "appliedValue": 307674.54,
      "grossValue": 355655.79,
      "redemptionValue": 0.0,
      "pnlGross": 47981.25,
      "pnlChange": 322.1499999999651,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-09",
      "appliedValue": 307674.54,
      "grossValue": 356085.33,
      "redemptionValue": 0.0,
      "pnlGross": 48410.79000000004,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-14",
      "appliedValue": 307674.54,
      "grossValue": 356622.25,
      "redemptionValue": 0.0,
      "pnlGross": 48947.71000000002,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-20",
      "appliedValue": 307674.54,
      "grossValue": 357266.55,
      "redemptionValue": 0.0,
      "pnlGross": 49592.01000000001,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-23",
      "appliedValue": 307674.54,
      "grossValue": 357588.7,
      "redemptionValue": 0.0,
      "pnlGross": 49914.16000000003,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-29",
      "appliedValue": 307674.54,
      "grossValue": 358233.01,
      "redemptionValue": 0.0,
      "pnlGross": 50558.47000000003,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-03",
      "appliedValue": 307674.54,
      "grossValue": 358769.93,
      "redemptionValue": 0.0,
      "pnlGross": 51095.390000000014,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-09",
      "appliedValue": 307674.54,
      "grossValue": 359414.23,
      "redemptionValue": 0.0,
      "pnlGross": 51739.69,
      "pnlChange": 322.1499999999651,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-12",
      "appliedValue": 307674.54,
      "grossValue": 359736.38,
      "redemptionValue": 0.0,
      "pnlGross": 52061.840000000026,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-18",
      "appliedValue": 307674.54,
      "grossValue": 360380.69,
      "redemptionValue": 0.0,
      "pnlGross": 52706.15000000002,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-24",
      "appliedValue": 307674.54,
      "grossValue": 361024.99,
      "redemptionValue": 0.0,
      "pnlGross": 53350.45000000001,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-30",
      "appliedValue": 307674.54,
      "grossValue": 361669.3,
      "redemptionValue": 0.0,
      "pnlGross": 53994.76000000001,
      "pnlChange": 322.1599999999744,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-03",
      "appliedValue": 307674.54,
      "grossValue": 361991.45,
      "redemptionValue": 0.0,
      "pnlGross": 54316.91000000003,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-09",
      "appliedValue": 307674.54,
      "grossValue": 362635.75,
      "redemptionValue": 0.0,
      "pnlGross": 54961.21000000002,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-15",
      "appliedValue": 307674.54,
      "grossValue": 363280.06,
      "redemptionValue": 0.0,
      "pnlGross": 55605.52000000002,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-18",
      "appliedValue": 307674.54,
      "grossValue": 363602.21,
      "redemptionValue": 0.0,
      "pnlGross": 55927.67000000004,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-24",
      "appliedValue": 307674.54,
      "grossValue": 364246.51,
      "redemptionValue": 0.0,
      "pnlGross": 56571.97000000003,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-29",
      "appliedValue": 307674.54,
      "grossValue": 364783.43,
      "redemptionValue": 0.0,
      "pnlGross": 57108.890000000014,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-04",
      "appliedValue": 307674.54,
      "grossValue": 365427.74,
      "redemptionValue": 0.0,
      "pnlGross": 57753.20000000001,
      "pnlChange": 322.1599999999744,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-07",
      "appliedValue": 307674.54,
      "grossValue": 365749.89,
      "redemptionValue": 0.0,
      "pnlGross": 58075.35000000004,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-13",
      "appliedValue": 307674.54,
      "grossValue": 366394.19,
      "redemptionValue": 0.0,
      "pnlGross": 58719.65000000002,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-18",
      "appliedValue": 307674.54,
      "grossValue": 366931.11,
      "redemptionValue": 0.0,
      "pnlGross": 59256.57000000001,
      "pnlChange": 322.1499999999651,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-22",
      "appliedValue": 307674.54,
      "grossValue": 367360.65,
      "redemptionValue": 0.0,
      "pnlGross": 59686.11000000005,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-27",
      "appliedValue": 307674.54,
      "grossValue": 367897.57,
      "redemptionValue": 0.0,
      "pnlGross": 60223.03000000003,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-02",
      "appliedValue": 307674.54,
      "grossValue": 368541.87,
      "redemptionValue": 0.0,
      "pnlGross": 60867.330000000016,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-05",
      "appliedValue": 307674.54,
      "grossValue": 368864.02,
      "redemptionValue": 0.0,
      "pnlGross": 61189.48000000004,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-11",
      "appliedValue": 307674.54,
      "grossValue": 369508.33,
      "redemptionValue": 0.0,
      "pnlGross": 61833.79000000004,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-17",
      "appliedValue": 307674.54,
      "grossValue": 370152.63,
      "redemptionValue": 0.0,
      "pnlGross": 62478.090000000026,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-22",
      "appliedValue": 307674.54,
      "grossValue": 370689.55,
      "redemptionValue": 0.0,
      "pnlGross": 63015.01000000001,
      "pnlChange": 322.1499999999651,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-26",
      "appliedValue": 307674.54,
      "grossValue": 371119.09,
      "redemptionValue": 0.0,
      "pnlGross": 63444.55000000005,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-01",
      "appliedValue": 307674.54,
      "grossValue": 371656.01,
      "redemptionValue": 0.0,
      "pnlGross": 63981.47000000003,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-07",
      "appliedValue": 307674.54,
      "grossValue": 372300.31,
      "redemptionValue": 0.0,
      "pnlGross": 64625.77000000002,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-10",
      "appliedValue": 307674.54,
      "grossValue": 372622.46,
      "redemptionValue": 0.0,
      "pnlGross": 64947.92000000004,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-16",
      "appliedValue": 307674.54,
      "grossValue": 373266.77,
      "redemptionValue": 0.0,
      "pnlGross": 65592.23000000004,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-21",
      "appliedValue": 307674.54,
      "grossValue": 373803.69,
      "redemptionValue": 0.0,
      "pnlGross": 66129.15000000002,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-27",
      "appliedValue": 307674.54,
      "grossValue": 374447.99,
      "redemptionValue": 0.0,
      "pnlGross": 66773.45000000001,
      "pnlChange": 322.1499999999651,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-30",
      "appliedValue": 307674.54,
      "grossValue": 374770.14,
      "redemptionValue": 0.0,
      "pnlGross": 67095.60000000003,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-05",
      "appliedValue": 307674.54,
      "grossValue": 375414.45,
      "redemptionValue": 0.0,
      "pnlGross": 67739.91000000003,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-10",
      "appliedValue": 307674.54,
      "grossValue": 375951.37,
      "redemptionValue": 0.0,
      "pnlGross": 68276.83000000002,
      "pnlChange": 322.1500000000233,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-14",
      "appliedValue": 307674.54,
      "grossValue": 376380.9,
      "redemptionValue": 0.0,
      "pnlGross": 68706.36000000004,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-19",
      "appliedValue": 307674.54,
      "grossValue": 376917.82,
      "redemptionValue": 0.0,
      "pnlGross": 69243.28000000003,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-26",
      "appliedValue": 307674.54,
      "grossValue": 377669.51,
      "redemptionValue": 0.0,
      "pnlGross": 69994.97000000003,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-02",
      "appliedValue": 307674.54,
      "grossValue": 378313.82,
      "redemptionValue": 0.0,
      "pnlGross": 70639.28000000003,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-05",
      "appliedValue": 307674.54,
      "grossValue": 378635.97,
      "redemptionValue": 0.0,
      "pnlGross": 70961.43,
      "pnlChange": 107.38999999995576,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-11",
      "appliedValue": 307674.54,
      "grossValue": 379280.27,
      "redemptionValue": 0.0,
      "pnlGross": 71605.73000000004,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-16",
      "appliedValue": 307674.54,
      "grossValue": 379817.19,
      "redemptionValue": 0.0,
      "pnlGross": 72142.65000000002,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-22",
      "appliedValue": 307674.54,
      "grossValue": 380461.5,
      "redemptionValue": 0.0,
      "pnlGross": 72786.96000000002,
      "pnlChange": 322.1599999999744,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-26",
      "appliedValue": 307674.54,
      "grossValue": 380891.03,
      "redemptionValue": 0.0,
      "pnlGross": 73216.49000000005,
      "pnlChange": 214.77000000001863,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-02",
      "appliedValue": 307674.54,
      "grossValue": 381642.72,
      "redemptionValue": 0.0,
      "pnlGross": 73968.18,
      "pnlChange": 214.7699999999604,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-07",
      "appliedValue": 307674.54,
      "grossValue": 382179.64,
      "redemptionValue": 0.0,
      "pnlGross": 74505.10000000003,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-13",
      "appliedValue": 307674.54,
      "grossValue": 382823.94,
      "redemptionValue": 0.0,
      "pnlGross": 75149.40000000002,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-16",
      "appliedValue": 307674.54,
      "grossValue": 383146.09,
      "redemptionValue": 0.0,
      "pnlGross": 75471.55000000005,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-22",
      "appliedValue": 307674.54,
      "grossValue": 383790.4,
      "redemptionValue": 0.0,
      "pnlGross": 76115.86000000004,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-27",
      "appliedValue": 307674.54,
      "grossValue": 384327.32,
      "redemptionValue": 0.0,
      "pnlGross": 76652.78000000003,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-02",
      "appliedValue": 307674.54,
      "grossValue": 384971.62,
      "redemptionValue": 0.0,
      "pnlGross": 77297.08000000002,
      "pnlChange": 322.1500000000233,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-05",
      "appliedValue": 307674.54,
      "grossValue": 385293.77,
      "redemptionValue": 0.0,
      "pnlGross": 77619.23000000004,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-11",
      "appliedValue": 307674.54,
      "grossValue": 385938.08,
      "redemptionValue": 0.0,
      "pnlGross": 78263.54000000004,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-19",
      "appliedValue": 307674.54,
      "grossValue": 386797.15,
      "redemptionValue": 0.0,
      "pnlGross": 79122.61000000004,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-24",
      "appliedValue": 307674.54,
      "grossValue": 387334.07,
      "redemptionValue": 0.0,
      "pnlGross": 79659.53000000003,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-02",
      "appliedValue": 307674.54,
      "grossValue": 387978.37,
      "redemptionValue": 0.0,
      "pnlGross": 80303.83000000002,
      "pnlChange": 322.1500000000233,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-05",
      "appliedValue": 307674.54,
      "grossValue": 388300.53,
      "redemptionValue": 0.0,
      "pnlGross": 80625.99000000005,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-11",
      "appliedValue": 307674.54,
      "grossValue": 388944.83,
      "redemptionValue": 0.0,
      "pnlGross": 81270.29000000004,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-16",
      "appliedValue": 307674.54,
      "grossValue": 389481.75,
      "redemptionValue": 0.0,
      "pnlGross": 81807.21000000002,
      "pnlChange": 322.1500000000233,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-20",
      "appliedValue": 307674.54,
      "grossValue": 389911.29,
      "redemptionValue": 0.0,
      "pnlGross": 82236.75,
      "pnlChange": 107.38999999995576,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-25",
      "appliedValue": 307674.54,
      "grossValue": 390448.21,
      "redemptionValue": 0.0,
      "pnlGross": 82773.67000000004,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-31",
      "appliedValue": 307674.54,
      "grossValue": 391092.51,
      "redemptionValue": 0.0,
      "pnlGross": 83417.97000000003,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-06",
      "appliedValue": 307674.54,
      "grossValue": 391736.81,
      "redemptionValue": 0.0,
      "pnlGross": 84062.27000000002,
      "pnlChange": 429.5299999999697,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-10",
      "appliedValue": 307674.54,
      "grossValue": 392166.35,
      "redemptionValue": 0.0,
      "pnlGross": 84491.81,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-15",
      "appliedValue": 307674.54,
      "grossValue": 392703.27,
      "redemptionValue": 0.0,
      "pnlGross": 85028.73000000004,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-22",
      "appliedValue": 307674.54,
      "grossValue": 393454.96,
      "redemptionValue": 0.0,
      "pnlGross": 85780.42000000004,
      "pnlChange": 214.77000000001863,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-27",
      "appliedValue": 307674.54,
      "grossValue": 393991.88,
      "redemptionValue": 0.0,
      "pnlGross": 86317.34000000003,
      "pnlChange": 322.1500000000233,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-04",
      "appliedValue": 307674.54,
      "grossValue": 394743.57,
      "redemptionValue": 0.0,
      "pnlGross": 87069.03000000003,
      "pnlChange": 429.5399999999791,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-08",
      "appliedValue": 307674.54,
      "grossValue": 395173.1,
      "redemptionValue": 0.0,
      "pnlGross": 87498.56,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-13",
      "appliedValue": 307674.54,
      "grossValue": 395710.02,
      "redemptionValue": 0.0,
      "pnlGross": 88035.48000000004,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-19",
      "appliedValue": 307674.54,
      "grossValue": 396354.33,
      "redemptionValue": 0.0,
      "pnlGross": 88679.79000000004,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-22",
      "appliedValue": 307674.54,
      "grossValue": 396676.48,
      "redemptionValue": 0.0,
      "pnlGross": 89001.94,
      "pnlChange": 107.38999999995576,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-28",
      "appliedValue": 307674.54,
      "grossValue": 397320.78,
      "redemptionValue": 0.0,
      "pnlGross": 89646.24000000005,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-02",
      "appliedValue": 307674.54,
      "grossValue": 397857.7,
      "redemptionValue": 0.0,
      "pnlGross": 90183.16000000005,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-09",
      "appliedValue": 307674.54,
      "grossValue": 398609.39,
      "redemptionValue": 0.0,
      "pnlGross": 90934.85000000003,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-12",
      "appliedValue": 307674.54,
      "grossValue": 398931.54,
      "redemptionValue": 0.0,
      "pnlGross": 91257.0,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-18",
      "appliedValue": 307674.54,
      "grossValue": 399575.85,
      "redemptionValue": 0.0,
      "pnlGross": 91901.31,
      "pnlChange": 107.38999999995576,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-23",
      "appliedValue": 307674.54,
      "grossValue": 400112.77,
      "redemptionValue": 0.0,
      "pnlGross": 92438.23000000004,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-29",
      "appliedValue": 307674.54,
      "grossValue": 400757.07,
      "redemptionValue": 0.0,
      "pnlGross": 93082.53000000004,
      "pnlChange": 322.1500000000233,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-02",
      "appliedValue": 307674.54,
      "grossValue": 401079.22,
      "redemptionValue": 0.0,
      "pnlGross": 93404.68,
      "pnlChange": 107.37999999994643,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-08",
      "appliedValue": 307674.54,
      "grossValue": 401723.53,
      "redemptionValue": 0.0,
      "pnlGross": 94048.99000000003,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-14",
      "appliedValue": 307674.54,
      "grossValue": 402367.83,
      "redemptionValue": 0.0,
      "pnlGross": 94693.29000000004,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-17",
      "appliedValue": 307674.54,
      "grossValue": 402689.98,
      "redemptionValue": 0.0,
      "pnlGross": 95015.44,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-23",
      "appliedValue": 307674.54,
      "grossValue": 403334.29,
      "redemptionValue": 0.0,
      "pnlGross": 95659.75,
      "pnlChange": 107.38999999995576,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-28",
      "appliedValue": 307674.54,
      "grossValue": 403871.21,
      "redemptionValue": 0.0,
      "pnlGross": 96196.67000000004,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-03",
      "appliedValue": 307674.54,
      "grossValue": 404515.51,
      "redemptionValue": 0.0,
      "pnlGross": 96840.97000000004,
      "pnlChange": 322.1500000000233,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-06",
      "appliedValue": 307674.54,
      "grossValue": 404837.66,
      "redemptionValue": 0.0,
      "pnlGross": 97163.12,
      "pnlChange": 107.37999999994643,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-12",
      "appliedValue": 307674.54,
      "grossValue": 405481.97,
      "redemptionValue": 0.0,
      "pnlGross": 97807.43,
      "pnlChange": 107.38999999995576,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-17",
      "appliedValue": 307674.54,
      "grossValue": 406018.89,
      "redemptionValue": 0.0,
      "pnlGross": 98344.35000000003,
      "pnlChange": 322.1600000000326,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-21",
      "appliedValue": 307674.54,
      "grossValue": 406448.42,
      "redemptionValue": 0.0,
      "pnlGross": 98773.88,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-26",
      "appliedValue": 307674.54,
      "grossValue": 406985.34,
      "redemptionValue": 0.0,
      "pnlGross": 99310.80000000005,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-01",
      "appliedValue": 307674.54,
      "grossValue": 407629.65,
      "redemptionValue": 0.0,
      "pnlGross": 99955.11000000004,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-04",
      "appliedValue": 307674.54,
      "grossValue": 407951.8,
      "redemptionValue": 0.0,
      "pnlGross": 100277.26,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-11",
      "appliedValue": 307674.54,
      "grossValue": 408703.49,
      "redemptionValue": 0.0,
      "pnlGross": 101028.95,
      "pnlChange": 107.39000000001396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-16",
      "appliedValue": 307674.54,
      "grossValue": 409240.41,
      "redemptionValue": 0.0,
      "pnlGross": 101565.87,
      "pnlChange": 107.38999999995576,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-22",
      "appliedValue": 307674.54,
      "grossValue": 409884.71,
      "redemptionValue": 0.0,
      "pnlGross": 102210.17000000004,
      "pnlChange": 107.38000000000466,
      "statusPoint": "Último dia observado"
    }
  ],
  "RF|C201500": [
    {
      "date": "2024-12-24",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": null,
      "statusPoint": "Entrada/1ª observação"
    },
    {
      "date": "2024-12-30",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-02",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-07",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-10",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-15",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-17",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-22",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-27",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-31",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-04",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-07",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-12",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-17",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-19",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-24",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-27",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-06",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-10",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-13",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-18",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-21",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-25",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-28",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-02",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-07",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-09",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-14",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-17",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-24",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-28",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-02",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-07",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-09",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-14",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-19",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-22",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-26",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-29",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-03",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-06",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-10",
      "appliedValue": 302406.35,
      "grossValue": 302406.35,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-13",
      "appliedValue": 302406.35,
      "grossValue": 334789.7,
      "redemptionValue": 0.0,
      "pnlGross": 32383.350000000035,
      "pnlChange": 32383.350000000035,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-18",
      "appliedValue": 302406.35,
      "grossValue": 335317.42,
      "redemptionValue": 0.0,
      "pnlGross": 32911.07000000001,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-24",
      "appliedValue": 302406.35,
      "grossValue": 335950.69,
      "redemptionValue": 0.0,
      "pnlGross": 33544.340000000026,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-26",
      "appliedValue": 302406.35,
      "grossValue": 336161.78,
      "redemptionValue": 0.0,
      "pnlGross": 33755.43000000005,
      "pnlChange": 105.54000000003724,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-01",
      "appliedValue": 302406.35,
      "grossValue": 336689.51,
      "redemptionValue": 0.0,
      "pnlGross": 34283.16000000003,
      "pnlChange": 105.54000000003724,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-04",
      "appliedValue": 302406.35,
      "grossValue": 337006.15,
      "redemptionValue": 0.0,
      "pnlGross": 34599.80000000005,
      "pnlChange": 105.55000000004657,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-09",
      "appliedValue": 302406.35,
      "grossValue": 337533.87,
      "redemptionValue": 0.0,
      "pnlGross": 35127.52000000002,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-11",
      "appliedValue": 302406.35,
      "grossValue": 337744.96,
      "redemptionValue": 0.0,
      "pnlGross": 35338.610000000044,
      "pnlChange": 105.54000000003724,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-16",
      "appliedValue": 302406.35,
      "grossValue": 338272.69,
      "redemptionValue": 0.0,
      "pnlGross": 35866.340000000026,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-21",
      "appliedValue": 302406.35,
      "grossValue": 338800.42,
      "redemptionValue": 0.0,
      "pnlGross": 36394.07000000001,
      "pnlChange": 316.63999999995576,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-24",
      "appliedValue": 302406.35,
      "grossValue": 339117.05,
      "redemptionValue": 0.0,
      "pnlGross": 36710.70000000001,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-28",
      "appliedValue": 302406.35,
      "grossValue": 339539.23,
      "redemptionValue": 0.0,
      "pnlGross": 37132.880000000005,
      "pnlChange": 316.63000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-31",
      "appliedValue": 302406.35,
      "grossValue": 339855.87,
      "redemptionValue": 0.0,
      "pnlGross": 37449.52000000002,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-05",
      "appliedValue": 302406.35,
      "grossValue": 340383.6,
      "redemptionValue": 0.0,
      "pnlGross": 37977.25,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-08",
      "appliedValue": 302406.35,
      "grossValue": 340700.23,
      "redemptionValue": 0.0,
      "pnlGross": 38293.880000000005,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-12",
      "appliedValue": 302406.35,
      "grossValue": 341122.41,
      "redemptionValue": 0.0,
      "pnlGross": 38716.06,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-15",
      "appliedValue": 302406.35,
      "grossValue": 341439.05,
      "redemptionValue": 0.0,
      "pnlGross": 39032.70000000001,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-20",
      "appliedValue": 302406.35,
      "grossValue": 341966.78,
      "redemptionValue": 0.0,
      "pnlGross": 39560.43000000005,
      "pnlChange": 105.55000000004657,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-25",
      "appliedValue": 302406.35,
      "grossValue": 342494.5,
      "redemptionValue": 0.0,
      "pnlGross": 40088.15000000002,
      "pnlChange": 316.63000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-27",
      "appliedValue": 302406.35,
      "grossValue": 342705.59,
      "redemptionValue": 0.0,
      "pnlGross": 40299.24000000005,
      "pnlChange": 105.54000000003724,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-01",
      "appliedValue": 302406.35,
      "grossValue": 343233.32,
      "redemptionValue": 0.0,
      "pnlGross": 40826.97000000003,
      "pnlChange": 316.640000000014,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-04",
      "appliedValue": 302406.35,
      "grossValue": 343549.96,
      "redemptionValue": 0.0,
      "pnlGross": 41143.61000000005,
      "pnlChange": 105.55000000004657,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-08",
      "appliedValue": 302406.35,
      "grossValue": 343972.14,
      "redemptionValue": 0.0,
      "pnlGross": 41565.79000000004,
      "pnlChange": 316.640000000014,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-11",
      "appliedValue": 302406.35,
      "grossValue": 344288.77,
      "redemptionValue": 0.0,
      "pnlGross": 41882.42000000004,
      "pnlChange": 105.54000000003724,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-16",
      "appliedValue": 302406.35,
      "grossValue": 344816.5,
      "redemptionValue": 0.0,
      "pnlGross": 42410.15000000002,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-19",
      "appliedValue": 302406.35,
      "grossValue": 345133.14,
      "redemptionValue": 0.0,
      "pnlGross": 42726.79000000004,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-23",
      "appliedValue": 302406.35,
      "grossValue": 345555.32,
      "redemptionValue": 0.0,
      "pnlGross": 43148.97000000003,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-26",
      "appliedValue": 302406.35,
      "grossValue": 345871.95,
      "redemptionValue": 0.0,
      "pnlGross": 43465.60000000004,
      "pnlChange": 105.54000000003724,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-01",
      "appliedValue": 302406.35,
      "grossValue": 346399.68,
      "redemptionValue": 0.0,
      "pnlGross": 43993.330000000016,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-06",
      "appliedValue": 302406.35,
      "grossValue": 346927.41,
      "redemptionValue": 0.0,
      "pnlGross": 44521.06,
      "pnlChange": 316.63999999995576,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-08",
      "appliedValue": 302406.35,
      "grossValue": 347138.5,
      "redemptionValue": 0.0,
      "pnlGross": 44732.15000000002,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-13",
      "appliedValue": 302406.35,
      "grossValue": 347666.22,
      "redemptionValue": 0.0,
      "pnlGross": 45259.87,
      "pnlChange": 316.62999999994645,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-16",
      "appliedValue": 302406.35,
      "grossValue": 347982.86,
      "redemptionValue": 0.0,
      "pnlGross": 45576.51000000001,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-21",
      "appliedValue": 302406.35,
      "grossValue": 348510.59,
      "redemptionValue": 0.0,
      "pnlGross": 46104.24000000005,
      "pnlChange": 105.55000000004657,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-23",
      "appliedValue": 302406.35,
      "grossValue": 348721.68,
      "redemptionValue": 0.0,
      "pnlGross": 46315.330000000016,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-28",
      "appliedValue": 302406.35,
      "grossValue": 349249.4,
      "redemptionValue": 0.0,
      "pnlGross": 46843.05000000005,
      "pnlChange": 105.54000000003724,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-31",
      "appliedValue": 302406.35,
      "grossValue": 349566.04,
      "redemptionValue": 0.0,
      "pnlGross": 47159.69,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-05",
      "appliedValue": 302406.35,
      "grossValue": 350093.76,
      "redemptionValue": 0.0,
      "pnlGross": 47687.41000000003,
      "pnlChange": 105.54000000003724,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-07",
      "appliedValue": 302406.35,
      "grossValue": 350304.86,
      "redemptionValue": 0.0,
      "pnlGross": 47898.51000000001,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-12",
      "appliedValue": 302406.35,
      "grossValue": 350832.58,
      "redemptionValue": 0.0,
      "pnlGross": 48426.23000000004,
      "pnlChange": 105.54000000003724,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-17",
      "appliedValue": 302406.35,
      "grossValue": 351360.31,
      "redemptionValue": 0.0,
      "pnlGross": 48953.96000000002,
      "pnlChange": 316.640000000014,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-21",
      "appliedValue": 302406.35,
      "grossValue": 351782.49,
      "redemptionValue": 0.0,
      "pnlGross": 49376.140000000014,
      "pnlChange": 211.0899999999674,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-25",
      "appliedValue": 302406.35,
      "grossValue": 352204.67,
      "redemptionValue": 0.0,
      "pnlGross": 49798.32000000001,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-28",
      "appliedValue": 302406.35,
      "grossValue": 352521.31,
      "redemptionValue": 0.0,
      "pnlGross": 50114.96000000002,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-03",
      "appliedValue": 302406.35,
      "grossValue": 353049.03,
      "redemptionValue": 0.0,
      "pnlGross": 50642.68000000005,
      "pnlChange": 105.54000000003724,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-08",
      "appliedValue": 302406.35,
      "grossValue": 353576.76,
      "redemptionValue": 0.0,
      "pnlGross": 51170.41000000003,
      "pnlChange": 316.640000000014,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-10",
      "appliedValue": 302406.35,
      "grossValue": 353787.85,
      "redemptionValue": 0.0,
      "pnlGross": 51381.5,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-15",
      "appliedValue": 302406.35,
      "grossValue": 354315.58,
      "redemptionValue": 0.0,
      "pnlGross": 51909.23000000004,
      "pnlChange": 316.640000000014,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-18",
      "appliedValue": 302406.35,
      "grossValue": 354632.21,
      "redemptionValue": 0.0,
      "pnlGross": 52225.86000000005,
      "pnlChange": 105.54000000003724,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-23",
      "appliedValue": 302406.35,
      "grossValue": 355159.94,
      "redemptionValue": 0.0,
      "pnlGross": 52753.590000000026,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-26",
      "appliedValue": 302406.35,
      "grossValue": 355476.57,
      "redemptionValue": 0.0,
      "pnlGross": 53070.22000000003,
      "pnlChange": 211.0900000000256,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-31",
      "appliedValue": 302406.35,
      "grossValue": 356004.3,
      "redemptionValue": 0.0,
      "pnlGross": 53597.95000000001,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-06",
      "appliedValue": 302406.35,
      "grossValue": 356637.57,
      "redemptionValue": 0.0,
      "pnlGross": 54231.22000000003,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-09",
      "appliedValue": 302406.35,
      "grossValue": 356954.21,
      "redemptionValue": 0.0,
      "pnlGross": 54547.86000000005,
      "pnlChange": 105.55000000004657,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-13",
      "appliedValue": 302406.35,
      "grossValue": 357376.39,
      "redemptionValue": 0.0,
      "pnlGross": 54970.04000000004,
      "pnlChange": 105.54000000003724,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-16",
      "appliedValue": 302406.35,
      "grossValue": 357693.03,
      "redemptionValue": 0.0,
      "pnlGross": 55286.68000000005,
      "pnlChange": 105.55000000004657,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-21",
      "appliedValue": 302406.35,
      "grossValue": 358220.75,
      "redemptionValue": 0.0,
      "pnlGross": 55814.40000000002,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-23",
      "appliedValue": 302406.35,
      "grossValue": 358431.84,
      "redemptionValue": 0.0,
      "pnlGross": 56025.49000000005,
      "pnlChange": 105.54000000003724,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-28",
      "appliedValue": 302406.35,
      "grossValue": 358959.57,
      "redemptionValue": 0.0,
      "pnlGross": 56553.22000000003,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-02",
      "appliedValue": 302406.35,
      "grossValue": 359487.3,
      "redemptionValue": 0.0,
      "pnlGross": 57080.95000000001,
      "pnlChange": 316.640000000014,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-05",
      "appliedValue": 302406.35,
      "grossValue": 359803.93,
      "redemptionValue": 0.0,
      "pnlGross": 57397.580000000016,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-09",
      "appliedValue": 302406.35,
      "grossValue": 360226.11,
      "redemptionValue": 0.0,
      "pnlGross": 57819.76000000001,
      "pnlChange": 316.63000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-12",
      "appliedValue": 302406.35,
      "grossValue": 360542.75,
      "redemptionValue": 0.0,
      "pnlGross": 58136.40000000002,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-19",
      "appliedValue": 302406.35,
      "grossValue": 361281.57,
      "redemptionValue": 0.0,
      "pnlGross": 58875.22000000003,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-24",
      "appliedValue": 302406.35,
      "grossValue": 361809.29,
      "redemptionValue": 0.0,
      "pnlGross": 59402.94,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-26",
      "appliedValue": 302406.35,
      "grossValue": 362020.38,
      "redemptionValue": 0.0,
      "pnlGross": 59614.03000000003,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-03",
      "appliedValue": 302406.35,
      "grossValue": 362548.11,
      "redemptionValue": 0.0,
      "pnlGross": 60141.76000000001,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-06",
      "appliedValue": 302406.35,
      "grossValue": 362864.75,
      "redemptionValue": 0.0,
      "pnlGross": 60458.40000000002,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-11",
      "appliedValue": 302406.35,
      "grossValue": 363392.47,
      "redemptionValue": 0.0,
      "pnlGross": 60986.12,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-13",
      "appliedValue": 302406.35,
      "grossValue": 363603.56,
      "redemptionValue": 0.0,
      "pnlGross": 61197.21000000002,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-18",
      "appliedValue": 302406.35,
      "grossValue": 364131.29,
      "redemptionValue": 0.0,
      "pnlGross": 61724.94,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-23",
      "appliedValue": 302406.35,
      "grossValue": 364659.02,
      "redemptionValue": 0.0,
      "pnlGross": 62252.67000000004,
      "pnlChange": 316.640000000014,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-26",
      "appliedValue": 302406.35,
      "grossValue": 364975.65,
      "redemptionValue": 0.0,
      "pnlGross": 62569.30000000005,
      "pnlChange": 105.54000000003724,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-30",
      "appliedValue": 302406.35,
      "grossValue": 365397.83,
      "redemptionValue": 0.0,
      "pnlGross": 62991.48000000004,
      "pnlChange": 316.63000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-02",
      "appliedValue": 302406.35,
      "grossValue": 365714.47,
      "redemptionValue": 0.0,
      "pnlGross": 63308.12,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-08",
      "appliedValue": 302406.35,
      "grossValue": 366347.74,
      "redemptionValue": 0.0,
      "pnlGross": 63941.390000000014,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-13",
      "appliedValue": 302406.35,
      "grossValue": 366875.47,
      "redemptionValue": 0.0,
      "pnlGross": 64469.12,
      "pnlChange": 316.63999999995576,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-15",
      "appliedValue": 302406.35,
      "grossValue": 367086.56,
      "redemptionValue": 0.0,
      "pnlGross": 64680.21000000002,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-20",
      "appliedValue": 302406.35,
      "grossValue": 367614.28,
      "redemptionValue": 0.0,
      "pnlGross": 65207.93000000005,
      "pnlChange": 316.63000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-24",
      "appliedValue": 302406.35,
      "grossValue": 368036.47,
      "redemptionValue": 0.0,
      "pnlGross": 65630.12,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-29",
      "appliedValue": 302406.35,
      "grossValue": 368564.19,
      "redemptionValue": 0.0,
      "pnlGross": 66157.84000000003,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-04",
      "appliedValue": 302406.35,
      "grossValue": 369091.92,
      "redemptionValue": 0.0,
      "pnlGross": 66685.57,
      "pnlChange": 422.179999999993,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-07",
      "appliedValue": 302406.35,
      "grossValue": 369408.55,
      "redemptionValue": 0.0,
      "pnlGross": 67002.20000000001,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-12",
      "appliedValue": 302406.35,
      "grossValue": 369936.28,
      "redemptionValue": 0.0,
      "pnlGross": 67529.93000000005,
      "pnlChange": 105.54000000003724,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-15",
      "appliedValue": 302406.35,
      "grossValue": 370252.92,
      "redemptionValue": 0.0,
      "pnlGross": 67846.57,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-19",
      "appliedValue": 302406.35,
      "grossValue": 370675.1,
      "redemptionValue": 0.0,
      "pnlGross": 68268.75,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-22",
      "appliedValue": 302406.35,
      "grossValue": 370991.73,
      "redemptionValue": 0.0,
      "pnlGross": 68585.38,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-27",
      "appliedValue": 302406.35,
      "grossValue": 371519.46,
      "redemptionValue": 0.0,
      "pnlGross": 69113.11000000004,
      "pnlChange": 105.54000000003724,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-29",
      "appliedValue": 302406.35,
      "grossValue": 371730.55,
      "redemptionValue": 0.0,
      "pnlGross": 69324.20000000001,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-03",
      "appliedValue": 302406.35,
      "grossValue": 372258.28,
      "redemptionValue": 0.0,
      "pnlGross": 69851.93000000005,
      "pnlChange": 105.55000000004657,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-09",
      "appliedValue": 302406.35,
      "grossValue": 372891.55,
      "redemptionValue": 0.0,
      "pnlGross": 70485.20000000001,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-12",
      "appliedValue": 302406.35,
      "grossValue": 373208.19,
      "redemptionValue": 0.0,
      "pnlGross": 70801.84000000003,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-16",
      "appliedValue": 302406.35,
      "grossValue": 373630.37,
      "redemptionValue": 0.0,
      "pnlGross": 71224.02000000002,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-19",
      "appliedValue": 302406.35,
      "grossValue": 373947.0,
      "redemptionValue": 0.0,
      "pnlGross": 71540.65000000002,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-24",
      "appliedValue": 302406.35,
      "grossValue": 374474.73,
      "redemptionValue": 0.0,
      "pnlGross": 72068.38,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-29",
      "appliedValue": 302406.35,
      "grossValue": 375002.46,
      "redemptionValue": 0.0,
      "pnlGross": 72596.11000000004,
      "pnlChange": 316.640000000014,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-01",
      "appliedValue": 302406.35,
      "grossValue": 375213.55,
      "redemptionValue": 0.0,
      "pnlGross": 72807.20000000001,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-06",
      "appliedValue": 302406.35,
      "grossValue": 375741.27,
      "redemptionValue": 0.0,
      "pnlGross": 73334.92000000004,
      "pnlChange": 316.63000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-09",
      "appliedValue": 302406.35,
      "grossValue": 376057.91,
      "redemptionValue": 0.0,
      "pnlGross": 73651.56,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-14",
      "appliedValue": 302406.35,
      "grossValue": 376585.64,
      "redemptionValue": 0.0,
      "pnlGross": 74179.29000000004,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-16",
      "appliedValue": 302406.35,
      "grossValue": 376796.73,
      "redemptionValue": 0.0,
      "pnlGross": 74390.38,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-21",
      "appliedValue": 302406.35,
      "grossValue": 377324.45,
      "redemptionValue": 0.0,
      "pnlGross": 74918.10000000003,
      "pnlChange": 105.54000000003724,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-24",
      "appliedValue": 302406.35,
      "grossValue": 377641.09,
      "redemptionValue": 0.0,
      "pnlGross": 75234.74000000005,
      "pnlChange": 105.55000000004657,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-29",
      "appliedValue": 302406.35,
      "grossValue": 378168.81,
      "redemptionValue": 0.0,
      "pnlGross": 75762.46000000002,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-31",
      "appliedValue": 302406.35,
      "grossValue": 378379.91,
      "redemptionValue": 0.0,
      "pnlGross": 75973.56,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-05",
      "appliedValue": 302406.35,
      "grossValue": 378907.63,
      "redemptionValue": 0.0,
      "pnlGross": 76501.28000000003,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-10",
      "appliedValue": 302406.35,
      "grossValue": 379435.36,
      "redemptionValue": 0.0,
      "pnlGross": 77029.01000000001,
      "pnlChange": 316.640000000014,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-13",
      "appliedValue": 302406.35,
      "grossValue": 379751.99,
      "redemptionValue": 0.0,
      "pnlGross": 77345.64000000001,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-17",
      "appliedValue": 302406.35,
      "grossValue": 380174.18,
      "redemptionValue": 0.0,
      "pnlGross": 77767.83000000002,
      "pnlChange": 316.640000000014,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-20",
      "appliedValue": 302406.35,
      "grossValue": 380490.81,
      "redemptionValue": 0.0,
      "pnlGross": 78084.46000000002,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-25",
      "appliedValue": 302406.35,
      "grossValue": 381018.54,
      "redemptionValue": 0.0,
      "pnlGross": 78612.19,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-28",
      "appliedValue": 302406.35,
      "grossValue": 381335.17,
      "redemptionValue": 0.0,
      "pnlGross": 78928.82,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-01",
      "appliedValue": 302406.35,
      "grossValue": 381757.36,
      "redemptionValue": 0.0,
      "pnlGross": 79351.01000000001,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-04",
      "appliedValue": 302406.35,
      "grossValue": 382073.99,
      "redemptionValue": 0.0,
      "pnlGross": 79667.64000000001,
      "pnlChange": 105.53999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-10",
      "appliedValue": 302406.35,
      "grossValue": 382707.26,
      "redemptionValue": 0.0,
      "pnlGross": 80300.91000000003,
      "pnlChange": 105.54000000003724,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-15",
      "appliedValue": 302406.35,
      "grossValue": 383234.99,
      "redemptionValue": 0.0,
      "pnlGross": 80828.64000000001,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-17",
      "appliedValue": 302406.35,
      "grossValue": 383446.08,
      "redemptionValue": 0.0,
      "pnlGross": 81039.73000000004,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-22",
      "appliedValue": 302406.35,
      "grossValue": 383973.81,
      "redemptionValue": 0.0,
      "pnlGross": 81567.46000000002,
      "pnlChange": 105.54999999998836,
      "statusPoint": "Último dia observado"
    }
  ],
  "RF|C200211": [
    {
      "date": "2024-12-20",
      "appliedValue": 441801.51,
      "grossValue": 441801.51,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": null,
      "statusPoint": "Entrada/1ª observação"
    },
    {
      "date": "2024-12-26",
      "appliedValue": 441801.51,
      "grossValue": 442852.83,
      "redemptionValue": 0.0,
      "pnlGross": 1051.320000000007,
      "pnlChange": 350.72000000003027,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-12-31",
      "appliedValue": 441801.51,
      "grossValue": 443730.85,
      "redemptionValue": 0.0,
      "pnlGross": 1929.3399999999676,
      "pnlChange": 175.75,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-03",
      "appliedValue": 441801.51,
      "grossValue": 444258.49,
      "redemptionValue": 0.0,
      "pnlGross": 2456.9799999999814,
      "pnlChange": 175.95000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-08",
      "appliedValue": 441801.51,
      "grossValue": 445139.29,
      "redemptionValue": 0.0,
      "pnlGross": 3337.7799999999697,
      "pnlChange": 176.29999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-13",
      "appliedValue": 441801.51,
      "grossValue": 446021.83,
      "redemptionValue": 0.0,
      "pnlGross": 4220.320000000007,
      "pnlChange": 529.7300000000396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-16",
      "appliedValue": 441801.51,
      "grossValue": 446552.2,
      "redemptionValue": 0.0,
      "pnlGross": 4750.690000000002,
      "pnlChange": 176.85999999998603,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-20",
      "appliedValue": 441801.51,
      "grossValue": 447260.34,
      "redemptionValue": 0.0,
      "pnlGross": 5458.830000000016,
      "pnlChange": 531.210000000021,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-23",
      "appliedValue": 441801.51,
      "grossValue": 447792.18,
      "redemptionValue": 0.0,
      "pnlGross": 5990.669999999984,
      "pnlChange": 177.34999999997672,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-29",
      "appliedValue": 441801.51,
      "grossValue": 448857.76,
      "redemptionValue": 0.0,
      "pnlGross": 7056.25,
      "pnlChange": 355.4799999999814,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-03",
      "appliedValue": 441801.51,
      "grossValue": 449747.67,
      "redemptionValue": 0.0,
      "pnlGross": 7946.159999999974,
      "pnlChange": 534.1599999999744,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-05",
      "appliedValue": 441801.51,
      "grossValue": 439522.51,
      "redemptionValue": 0.0,
      "pnlGross": -2279.0,
      "pnlChange": 174.0800000000163,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-10",
      "appliedValue": 441801.51,
      "grossValue": 440393.92,
      "redemptionValue": 0.0,
      "pnlGross": -1407.5900000000256,
      "pnlChange": 523.0599999999977,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-13",
      "appliedValue": 441801.51,
      "grossValue": 440917.59,
      "redemptionValue": 0.0,
      "pnlGross": -883.9199999999837,
      "pnlChange": 174.63000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-18",
      "appliedValue": 441801.51,
      "grossValue": 441791.77,
      "redemptionValue": 0.0,
      "pnlGross": -9.739999999990689,
      "pnlChange": 174.98000000003958,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-20",
      "appliedValue": 441801.51,
      "grossValue": 442141.92,
      "redemptionValue": 0.0,
      "pnlGross": 340.4099999999744,
      "pnlChange": 175.10999999998603,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-25",
      "appliedValue": 441801.51,
      "grossValue": 443018.53,
      "redemptionValue": 0.0,
      "pnlGross": 1217.0200000000186,
      "pnlChange": 175.46000000002095,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-28",
      "appliedValue": 441801.51,
      "grossValue": 443545.32,
      "redemptionValue": 0.0,
      "pnlGross": 1743.8099999999977,
      "pnlChange": 175.6699999999837,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-07",
      "appliedValue": 441801.51,
      "grossValue": 434301.36,
      "redemptionValue": 0.0,
      "pnlGross": -7500.150000000023,
      "pnlChange": 172.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-11",
      "appliedValue": 441801.51,
      "grossValue": 434990.07,
      "redemptionValue": 0.0,
      "pnlGross": -6811.440000000002,
      "pnlChange": 172.28000000002794,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-14",
      "appliedValue": 441801.51,
      "grossValue": 455365.28,
      "redemptionValue": 0.0,
      "pnlGross": 13563.77000000002,
      "pnlChange": 180.35000000003487,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-19",
      "appliedValue": 441801.51,
      "grossValue": 456268.1,
      "redemptionValue": 0.0,
      "pnlGross": 14466.589999999967,
      "pnlChange": 180.70999999996275,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-24",
      "appliedValue": 441801.51,
      "grossValue": 457172.71,
      "redemptionValue": 0.0,
      "pnlGross": 15371.200000000012,
      "pnlChange": 542.9800000000396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-26",
      "appliedValue": 441801.51,
      "grossValue": 457535.05,
      "redemptionValue": 0.0,
      "pnlGross": 15733.53999999998,
      "pnlChange": 181.20999999996275,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-31",
      "appliedValue": 441801.51,
      "grossValue": 458442.17,
      "redemptionValue": 0.0,
      "pnlGross": 16640.659999999974,
      "pnlChange": 544.4799999999814,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-03",
      "appliedValue": 441801.51,
      "grossValue": 458987.31,
      "redemptionValue": 0.0,
      "pnlGross": 17185.79999999999,
      "pnlChange": 181.77999999996973,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-08",
      "appliedValue": 441801.51,
      "grossValue": 448935.39,
      "redemptionValue": 0.0,
      "pnlGross": 7133.880000000005,
      "pnlChange": 177.80999999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-10",
      "appliedValue": 441801.51,
      "grossValue": 449291.2,
      "redemptionValue": 0.0,
      "pnlGross": 7489.690000000002,
      "pnlChange": 177.94000000000233,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-15",
      "appliedValue": 441801.51,
      "grossValue": 450181.98,
      "redemptionValue": 0.0,
      "pnlGross": 8380.469999999972,
      "pnlChange": 178.28999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-22",
      "appliedValue": 441801.51,
      "grossValue": 451432.04,
      "redemptionValue": 0.0,
      "pnlGross": 9630.52999999997,
      "pnlChange": 893.25,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-25",
      "appliedValue": 441801.51,
      "grossValue": 451968.84,
      "redemptionValue": 0.0,
      "pnlGross": 10167.330000000016,
      "pnlChange": 179.0100000000093,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-29",
      "appliedValue": 441801.51,
      "grossValue": 452685.57,
      "redemptionValue": 0.0,
      "pnlGross": 10884.059999999998,
      "pnlChange": 179.28999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-05",
      "appliedValue": 441801.51,
      "grossValue": 442818.22,
      "redemptionValue": 0.0,
      "pnlGross": 1016.7099999999627,
      "pnlChange": -10405.640000000014,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-08",
      "appliedValue": 441801.51,
      "grossValue": 443344.78,
      "redemptionValue": 0.0,
      "pnlGross": 1543.2700000000186,
      "pnlChange": 175.5900000000256,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-13",
      "appliedValue": 441801.51,
      "grossValue": 444223.76,
      "redemptionValue": 0.0,
      "pnlGross": 2422.25,
      "pnlChange": 175.92999999999302,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-15",
      "appliedValue": 441801.51,
      "grossValue": 444575.85,
      "redemptionValue": 0.0,
      "pnlGross": 2774.3399999999674,
      "pnlChange": 176.0799999999581,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-20",
      "appliedValue": 441801.51,
      "grossValue": 445457.28,
      "redemptionValue": 0.0,
      "pnlGross": 3655.7700000000186,
      "pnlChange": 176.43000000005122,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-23",
      "appliedValue": 441801.51,
      "grossValue": 445986.97,
      "redemptionValue": 0.0,
      "pnlGross": 4185.459999999963,
      "pnlChange": 176.62999999994645,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-28",
      "appliedValue": 441801.51,
      "grossValue": 446871.2,
      "redemptionValue": 0.0,
      "pnlGross": 5069.690000000002,
      "pnlChange": 176.9899999999907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-30",
      "appliedValue": 441801.51,
      "grossValue": 447225.38,
      "redemptionValue": 0.0,
      "pnlGross": 5423.869999999995,
      "pnlChange": 177.13000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-04",
      "appliedValue": 441801.51,
      "grossValue": 437167.49,
      "redemptionValue": 0.0,
      "pnlGross": -4634.020000000019,
      "pnlChange": -10767.090000000026,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-09",
      "appliedValue": 441801.51,
      "grossValue": 438034.23,
      "redemptionValue": 0.0,
      "pnlGross": -3767.280000000028,
      "pnlChange": 520.25,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-12",
      "appliedValue": 441801.51,
      "grossValue": 438555.1,
      "redemptionValue": 0.0,
      "pnlGross": -3246.4100000000326,
      "pnlChange": 173.69000000000233,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-16",
      "appliedValue": 441801.51,
      "grossValue": 439250.56,
      "redemptionValue": 0.0,
      "pnlGross": -2550.950000000012,
      "pnlChange": 521.7000000000116,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-20",
      "appliedValue": 441801.51,
      "grossValue": 439947.12,
      "redemptionValue": 0.0,
      "pnlGross": -1854.390000000014,
      "pnlChange": 348.4199999999837,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-25",
      "appliedValue": 441801.51,
      "grossValue": 440819.37,
      "redemptionValue": 0.0,
      "pnlGross": -982.140000000014,
      "pnlChange": 174.5899999999674,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-30",
      "appliedValue": 441801.51,
      "grossValue": 441693.35,
      "redemptionValue": 0.0,
      "pnlGross": -108.1600000000326,
      "pnlChange": 524.5999999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-02",
      "appliedValue": 441801.51,
      "grossValue": 442043.43,
      "redemptionValue": 0.0,
      "pnlGross": 241.9199999999837,
      "pnlChange": 175.0800000000163,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-07",
      "appliedValue": 441801.51,
      "grossValue": 431962.25,
      "redemptionValue": 0.0,
      "pnlGross": -9839.26000000001,
      "pnlChange": 513.039999999979,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-10",
      "appliedValue": 441801.51,
      "grossValue": 432475.9,
      "redemptionValue": 0.0,
      "pnlGross": -9325.609999999986,
      "pnlChange": 171.29000000003725,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-15",
      "appliedValue": 441801.51,
      "grossValue": 433333.34,
      "redemptionValue": 0.0,
      "pnlGross": -8468.169999999984,
      "pnlChange": 171.63000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-17",
      "appliedValue": 441801.51,
      "grossValue": 433676.79,
      "redemptionValue": 0.0,
      "pnlGross": -8124.72000000003,
      "pnlChange": 171.7599999999511,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-22",
      "appliedValue": 441801.51,
      "grossValue": 434536.61,
      "redemptionValue": 0.0,
      "pnlGross": -7264.900000000023,
      "pnlChange": 172.09999999997672,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-25",
      "appliedValue": 441801.51,
      "grossValue": 435053.32,
      "redemptionValue": 0.0,
      "pnlGross": -6748.190000000002,
      "pnlChange": 172.30999999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-30",
      "appliedValue": 441801.51,
      "grossValue": 435915.87,
      "redemptionValue": 0.0,
      "pnlGross": -5885.640000000014,
      "pnlChange": 172.65000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-04",
      "appliedValue": 441801.51,
      "grossValue": 425835.56,
      "redemptionValue": 0.0,
      "pnlGross": -15965.950000000012,
      "pnlChange": -10425.809999999998,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-06",
      "appliedValue": 441801.51,
      "grossValue": 426173.07,
      "redemptionValue": 0.0,
      "pnlGross": -15628.440000000002,
      "pnlChange": 168.78999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-11",
      "appliedValue": 441801.51,
      "grossValue": 427018.01,
      "redemptionValue": 0.0,
      "pnlGross": -14783.5,
      "pnlChange": 507.1699999999837,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-14",
      "appliedValue": 441801.51,
      "grossValue": 427525.78,
      "redemptionValue": 0.0,
      "pnlGross": -14275.72999999998,
      "pnlChange": 169.32000000000698,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-19",
      "appliedValue": 441801.51,
      "grossValue": 428373.4,
      "redemptionValue": 0.0,
      "pnlGross": -13428.109999999986,
      "pnlChange": 169.65000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-21",
      "appliedValue": 441801.51,
      "grossValue": 428712.93,
      "redemptionValue": 0.0,
      "pnlGross": -13088.580000000016,
      "pnlChange": 169.79999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-26",
      "appliedValue": 441801.51,
      "grossValue": 429562.9,
      "redemptionValue": 0.0,
      "pnlGross": -12238.609999999986,
      "pnlChange": 170.13000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-29",
      "appliedValue": 441801.51,
      "grossValue": 430073.7,
      "redemptionValue": 0.0,
      "pnlGross": -11727.809999999998,
      "pnlChange": 170.3300000000163,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-03",
      "appliedValue": 441801.51,
      "grossValue": 430926.38,
      "redemptionValue": 0.0,
      "pnlGross": -10875.130000000005,
      "pnlChange": 170.6699999999837,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-05",
      "appliedValue": 441801.51,
      "grossValue": 420319.01,
      "redemptionValue": 0.0,
      "pnlGross": -21482.5,
      "pnlChange": 166.47000000003027,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-10",
      "appliedValue": 441801.51,
      "grossValue": 421152.35,
      "redemptionValue": 0.0,
      "pnlGross": -20649.160000000036,
      "pnlChange": 166.79999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-15",
      "appliedValue": 441801.51,
      "grossValue": 421987.34,
      "redemptionValue": 0.0,
      "pnlGross": -19814.169999999984,
      "pnlChange": 501.1900000000023,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-18",
      "appliedValue": 441801.51,
      "grossValue": 422489.13,
      "redemptionValue": 0.0,
      "pnlGross": -19312.380000000005,
      "pnlChange": 167.3300000000163,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-22",
      "appliedValue": 441801.51,
      "grossValue": 423159.1,
      "redemptionValue": 0.0,
      "pnlGross": -18642.410000000036,
      "pnlChange": 502.5799999999581,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-25",
      "appliedValue": 441801.51,
      "grossValue": 423662.29,
      "redemptionValue": 0.0,
      "pnlGross": -18139.22000000003,
      "pnlChange": 167.79999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-30",
      "appliedValue": 441801.51,
      "grossValue": 424502.25,
      "redemptionValue": 0.0,
      "pnlGross": -17299.26000000001,
      "pnlChange": 168.13000000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-03",
      "appliedValue": 441801.51,
      "grossValue": 425007.03,
      "redemptionValue": 0.0,
      "pnlGross": -16794.47999999998,
      "pnlChange": 168.3300000000163,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-07",
      "appliedValue": 441801.51,
      "grossValue": 414732.09,
      "redemptionValue": 0.0,
      "pnlGross": -27069.419999999984,
      "pnlChange": 164.25,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-10",
      "appliedValue": 441801.51,
      "grossValue": 415225.25,
      "redemptionValue": 0.0,
      "pnlGross": -26576.26000000001,
      "pnlChange": 164.45000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-15",
      "appliedValue": 441801.51,
      "grossValue": 416048.49,
      "redemptionValue": 0.0,
      "pnlGross": -25753.02000000002,
      "pnlChange": 164.77999999996973,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-20",
      "appliedValue": 441801.51,
      "grossValue": 416873.36,
      "redemptionValue": 0.0,
      "pnlGross": -24928.150000000023,
      "pnlChange": 495.11999999999534,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-22",
      "appliedValue": 441801.51,
      "grossValue": 417203.77,
      "redemptionValue": 0.0,
      "pnlGross": -24597.73999999999,
      "pnlChange": 165.2399999999907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-27",
      "appliedValue": 441801.51,
      "grossValue": 418030.93,
      "redemptionValue": 0.0,
      "pnlGross": -23770.580000000016,
      "pnlChange": 496.5,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-30",
      "appliedValue": 441801.51,
      "grossValue": 418528.01,
      "redemptionValue": 0.0,
      "pnlGross": -23273.5,
      "pnlChange": 165.7600000000093,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-04",
      "appliedValue": 441801.51,
      "grossValue": 408413.23,
      "redemptionValue": 0.0,
      "pnlGross": -33388.28000000003,
      "pnlChange": -10778.48000000004,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-06",
      "appliedValue": 441801.51,
      "grossValue": 408736.93,
      "redemptionValue": 0.0,
      "pnlGross": -33064.580000000016,
      "pnlChange": 161.89000000001397,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-11",
      "appliedValue": 441801.51,
      "grossValue": 409547.3,
      "redemptionValue": 0.0,
      "pnlGross": -32254.21000000002,
      "pnlChange": 162.20000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-14",
      "appliedValue": 441801.51,
      "grossValue": 410034.3,
      "redemptionValue": 0.0,
      "pnlGross": -31767.21000000002,
      "pnlChange": 162.39999999996508,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-19",
      "appliedValue": 441801.51,
      "grossValue": 410847.24,
      "redemptionValue": 0.0,
      "pnlGross": -30954.27000000002,
      "pnlChange": 162.71999999997206,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-24",
      "appliedValue": 441801.51,
      "grossValue": 411661.8,
      "redemptionValue": 0.0,
      "pnlGross": -30139.71000000002,
      "pnlChange": 488.929999999993,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-27",
      "appliedValue": 441801.51,
      "grossValue": 412151.31,
      "redemptionValue": 0.0,
      "pnlGross": -29650.20000000001,
      "pnlChange": 163.2399999999907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-02",
      "appliedValue": 441801.51,
      "grossValue": 412968.45,
      "redemptionValue": 0.0,
      "pnlGross": -28833.06,
      "pnlChange": 163.55999999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-05",
      "appliedValue": 441801.51,
      "grossValue": 402510.61,
      "redemptionValue": 0.0,
      "pnlGross": -39290.90000000002,
      "pnlChange": 159.4199999999837,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-09",
      "appliedValue": 441801.51,
      "grossValue": 403148.9,
      "redemptionValue": 0.0,
      "pnlGross": -38652.60999999999,
      "pnlChange": 159.6600000000326,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-12",
      "appliedValue": 441801.51,
      "grossValue": 403628.29,
      "redemptionValue": 0.0,
      "pnlGross": -38173.22000000003,
      "pnlChange": 159.85999999998603,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-17",
      "appliedValue": 441801.51,
      "grossValue": 404428.54,
      "redemptionValue": 0.0,
      "pnlGross": -37372.97000000003,
      "pnlChange": 160.17999999999302,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-22",
      "appliedValue": 441801.51,
      "grossValue": 405230.37,
      "redemptionValue": 0.0,
      "pnlGross": -36571.140000000014,
      "pnlChange": 481.2899999999791,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-24",
      "appliedValue": 441801.51,
      "grossValue": 405551.55,
      "redemptionValue": 0.0,
      "pnlGross": -36249.96000000002,
      "pnlChange": 160.61999999999534,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-30",
      "appliedValue": 441801.51,
      "grossValue": 406516.61,
      "redemptionValue": 0.0,
      "pnlGross": -35284.90000000002,
      "pnlChange": 161.0100000000093,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-05",
      "appliedValue": 441801.51,
      "grossValue": 396539.39,
      "redemptionValue": 0.0,
      "pnlGross": -45262.12,
      "pnlChange": -10460.609999999986,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-08",
      "appliedValue": 441801.51,
      "grossValue": 397010.92,
      "redemptionValue": 0.0,
      "pnlGross": -44790.590000000026,
      "pnlChange": 157.2399999999907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-12",
      "appliedValue": 441801.51,
      "grossValue": 397640.5,
      "redemptionValue": 0.0,
      "pnlGross": -44161.01000000001,
      "pnlChange": 472.280000000028,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-15",
      "appliedValue": 441801.51,
      "grossValue": 398113.33,
      "redemptionValue": 0.0,
      "pnlGross": -43688.17999999999,
      "pnlChange": 157.6700000000419,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-20",
      "appliedValue": 441801.51,
      "grossValue": 398902.64,
      "redemptionValue": 0.0,
      "pnlGross": -42898.87,
      "pnlChange": 157.98000000003958,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-23",
      "appliedValue": 441801.51,
      "grossValue": 399376.98,
      "redemptionValue": 0.0,
      "pnlGross": -42424.53000000003,
      "pnlChange": 158.1699999999837,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-27",
      "appliedValue": 441801.51,
      "grossValue": 400010.31,
      "redemptionValue": 0.0,
      "pnlGross": -41791.20000000001,
      "pnlChange": 158.42999999999302,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-30",
      "appliedValue": 441801.51,
      "grossValue": 400485.96,
      "redemptionValue": 0.0,
      "pnlGross": -41315.54999999999,
      "pnlChange": 158.61000000004424,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-04",
      "appliedValue": 441801.51,
      "grossValue": 390335.41,
      "redemptionValue": 0.0,
      "pnlGross": -51466.10000000004,
      "pnlChange": -10785.640000000014,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-09",
      "appliedValue": 441801.51,
      "grossValue": 391109.3,
      "redemptionValue": 0.0,
      "pnlGross": -50692.21000000002,
      "pnlChange": 464.5199999999604,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-11",
      "appliedValue": 441801.51,
      "grossValue": 395694.76,
      "redemptionValue": 0.0,
      "pnlGross": -46106.75,
      "pnlChange": 770.1000000000349,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-18",
      "appliedValue": 441801.51,
      "grossValue": 401127.7,
      "redemptionValue": 0.0,
      "pnlGross": -40673.81,
      "pnlChange": 3888.2200000000303,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-23",
      "appliedValue": 441801.51,
      "grossValue": 405053.98,
      "redemptionValue": 0.0,
      "pnlGross": -36747.53000000003,
      "pnlChange": 2360.359999999986,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-26",
      "appliedValue": 441801.51,
      "grossValue": 407428.17,
      "redemptionValue": 0.0,
      "pnlGross": -34373.340000000026,
      "pnlChange": 792.9400000000023,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-03",
      "appliedValue": 441801.51,
      "grossValue": 411416.12,
      "redemptionValue": 0.0,
      "pnlGross": -30385.39000000001,
      "pnlChange": 800.7000000000116,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-05",
      "appliedValue": 441801.51,
      "grossValue": 400946.52,
      "redemptionValue": 0.0,
      "pnlGross": -40854.98999999999,
      "pnlChange": 158.79000000003725,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-10",
      "appliedValue": 441801.51,
      "grossValue": 401741.45,
      "redemptionValue": 0.0,
      "pnlGross": -40060.06,
      "pnlChange": 159.10999999998603,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-13",
      "appliedValue": 441801.51,
      "grossValue": 402219.17,
      "redemptionValue": 0.0,
      "pnlGross": -39582.340000000026,
      "pnlChange": 159.30999999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-18",
      "appliedValue": 441801.51,
      "grossValue": 403016.62,
      "redemptionValue": 0.0,
      "pnlGross": -38784.890000000014,
      "pnlChange": 159.61999999999534,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-20",
      "appliedValue": 441801.51,
      "grossValue": 403336.04,
      "redemptionValue": 0.0,
      "pnlGross": -38465.47000000003,
      "pnlChange": 159.7399999999907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-25",
      "appliedValue": 441801.51,
      "grossValue": 404135.71,
      "redemptionValue": 0.0,
      "pnlGross": -37665.79999999999,
      "pnlChange": 160.05999999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-30",
      "appliedValue": 441801.51,
      "grossValue": 404936.96,
      "redemptionValue": 0.0,
      "pnlGross": -36864.54999999999,
      "pnlChange": 480.9400000000023,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-02",
      "appliedValue": 441801.51,
      "grossValue": 405418.47,
      "redemptionValue": 0.0,
      "pnlGross": -36383.04000000004,
      "pnlChange": 160.56999999994878,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-07",
      "appliedValue": 441801.51,
      "grossValue": 394787.08,
      "redemptionValue": 0.0,
      "pnlGross": -47014.42999999999,
      "pnlChange": 156.36000000004424,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-10",
      "appliedValue": 441801.51,
      "grossValue": 395256.53,
      "redemptionValue": 0.0,
      "pnlGross": -46544.97999999998,
      "pnlChange": 156.55000000004657,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-15",
      "appliedValue": 441801.51,
      "grossValue": 396040.17,
      "redemptionValue": 0.0,
      "pnlGross": -45761.340000000026,
      "pnlChange": 156.84999999997672,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-20",
      "appliedValue": 441801.51,
      "grossValue": 396825.37,
      "redemptionValue": 0.0,
      "pnlGross": -44976.140000000014,
      "pnlChange": 471.2999999999884,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-23",
      "appliedValue": 441801.51,
      "grossValue": 397297.24,
      "redemptionValue": 0.0,
      "pnlGross": -44504.27000000002,
      "pnlChange": 157.34999999997672,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-28",
      "appliedValue": 441801.51,
      "grossValue": 398084.93,
      "redemptionValue": 0.0,
      "pnlGross": -43716.580000000016,
      "pnlChange": 157.6599999999744,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-04",
      "appliedValue": 441801.51,
      "grossValue": 387601.57,
      "redemptionValue": 0.0,
      "pnlGross": -54199.94,
      "pnlChange": -10798.880000000005,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-07",
      "appliedValue": 441801.51,
      "grossValue": 388062.47,
      "redemptionValue": 0.0,
      "pnlGross": -53739.04000000004,
      "pnlChange": 153.68999999994412,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-11",
      "appliedValue": 441801.51,
      "grossValue": 388677.86,
      "redemptionValue": 0.0,
      "pnlGross": -53123.65000000002,
      "pnlChange": 461.6300000000047,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-14",
      "appliedValue": 441801.51,
      "grossValue": 389140.04,
      "redemptionValue": 0.0,
      "pnlGross": -52661.47000000003,
      "pnlChange": 154.11999999999534,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-19",
      "appliedValue": 441801.51,
      "grossValue": 389911.56,
      "redemptionValue": 0.0,
      "pnlGross": -51889.95000000001,
      "pnlChange": 154.42999999999302,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-22",
      "appliedValue": 441801.51,
      "grossValue": 390375.2,
      "redemptionValue": 0.0,
      "pnlGross": -51426.31,
      "pnlChange": 154.60999999998603,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-26",
      "appliedValue": 441801.51,
      "grossValue": 390994.26,
      "redemptionValue": 0.0,
      "pnlGross": -50807.25,
      "pnlChange": 154.85999999998603,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-29",
      "appliedValue": 441801.51,
      "grossValue": 391459.19,
      "redemptionValue": 0.0,
      "pnlGross": -50342.32000000001,
      "pnlChange": 155.03999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-03",
      "appliedValue": 441801.51,
      "grossValue": 392235.31,
      "redemptionValue": 0.0,
      "pnlGross": -49566.20000000001,
      "pnlChange": 155.34999999997672,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-09",
      "appliedValue": 441801.51,
      "grossValue": 381719.9,
      "redemptionValue": 0.0,
      "pnlGross": -60081.60999999999,
      "pnlChange": 151.18000000005122,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-11",
      "appliedValue": 441801.51,
      "grossValue": 382022.45,
      "redemptionValue": 0.0,
      "pnlGross": -59779.06,
      "pnlChange": 151.30999999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-16",
      "appliedValue": 441801.51,
      "grossValue": 382779.86,
      "redemptionValue": 0.0,
      "pnlGross": -59021.65000000002,
      "pnlChange": 151.60999999998603,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-19",
      "appliedValue": 441801.51,
      "grossValue": 383235.02,
      "redemptionValue": 0.0,
      "pnlGross": -58566.48999999999,
      "pnlChange": 151.78000000002794,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-24",
      "appliedValue": 441801.51,
      "grossValue": 383994.83,
      "redemptionValue": 0.0,
      "pnlGross": -57806.67999999999,
      "pnlChange": 152.0800000000163,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-26",
      "appliedValue": 441801.51,
      "grossValue": 384299.18,
      "redemptionValue": 0.0,
      "pnlGross": -57502.330000000016,
      "pnlChange": 152.20000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-01",
      "appliedValue": 441801.51,
      "grossValue": 385061.1,
      "redemptionValue": 0.0,
      "pnlGross": -56740.41000000003,
      "pnlChange": 152.5,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-06",
      "appliedValue": 441801.51,
      "grossValue": 374393.88,
      "redemptionValue": 0.0,
      "pnlGross": -67407.63,
      "pnlChange": -10972.409999999974,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-09",
      "appliedValue": 441801.51,
      "grossValue": 374839.08,
      "redemptionValue": 0.0,
      "pnlGross": -66962.43,
      "pnlChange": 148.46000000002095,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-13",
      "appliedValue": 441801.51,
      "grossValue": 375433.49,
      "redemptionValue": 0.0,
      "pnlGross": -66368.02000000002,
      "pnlChange": 445.8999999999651,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-16",
      "appliedValue": 441801.51,
      "grossValue": 375879.92,
      "redemptionValue": 0.0,
      "pnlGross": -65921.59000000003,
      "pnlChange": 148.86999999999534,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-21",
      "appliedValue": 441801.51,
      "grossValue": 376625.15,
      "redemptionValue": 0.0,
      "pnlGross": -65176.35999999999,
      "pnlChange": 149.1600000000326,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-24",
      "appliedValue": 441801.51,
      "grossValue": 377073.0,
      "redemptionValue": 0.0,
      "pnlGross": -64728.51000000001,
      "pnlChange": 149.3400000000256,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-28",
      "appliedValue": 441801.51,
      "grossValue": 377670.96,
      "redemptionValue": 0.0,
      "pnlGross": -64130.54999999999,
      "pnlChange": 149.5800000000163,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-31",
      "appliedValue": 441801.51,
      "grossValue": 378120.05,
      "redemptionValue": 0.0,
      "pnlGross": -63681.46000000002,
      "pnlChange": 149.7600000000093,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-05",
      "appliedValue": 441801.51,
      "grossValue": 367434.54,
      "redemptionValue": 0.0,
      "pnlGross": -74366.97000000003,
      "pnlChange": 145.51999999996042,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-10",
      "appliedValue": 441801.51,
      "grossValue": 368163.03,
      "redemptionValue": 0.0,
      "pnlGross": -73638.47999999998,
      "pnlChange": 437.2700000000186,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-12",
      "appliedValue": 441801.51,
      "grossValue": 368454.82,
      "redemptionValue": 0.0,
      "pnlGross": -73346.69,
      "pnlChange": 145.9199999999837,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-17",
      "appliedValue": 441801.51,
      "grossValue": 369185.33,
      "redemptionValue": 0.0,
      "pnlGross": -72616.18,
      "pnlChange": 438.4800000000396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-20",
      "appliedValue": 441801.51,
      "grossValue": 369624.33,
      "redemptionValue": 0.0,
      "pnlGross": -72177.18,
      "pnlChange": 146.39000000001397,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-25",
      "appliedValue": 441801.51,
      "grossValue": 370357.16,
      "redemptionValue": 0.0,
      "pnlGross": -71444.35000000003,
      "pnlChange": 146.67999999999302,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-27",
      "appliedValue": 441801.51,
      "grossValue": 370650.7,
      "redemptionValue": 0.0,
      "pnlGross": -71150.81,
      "pnlChange": 146.79999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-01",
      "appliedValue": 441801.51,
      "grossValue": 371385.56,
      "redemptionValue": 0.0,
      "pnlGross": -70415.95000000001,
      "pnlChange": 147.0900000000256,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-04",
      "appliedValue": 441801.51,
      "grossValue": 360396.53,
      "redemptionValue": 0.0,
      "pnlGross": -81404.97999999998,
      "pnlChange": -11283.389999999956,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-10",
      "appliedValue": 441801.51,
      "grossValue": 361254.14,
      "redemptionValue": 0.0,
      "pnlGross": -80547.37,
      "pnlChange": 143.0800000000163,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-14",
      "appliedValue": 441801.51,
      "grossValue": 361827.01,
      "redemptionValue": 0.0,
      "pnlGross": -79974.5,
      "pnlChange": 429.7399999999907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-17",
      "appliedValue": 441801.51,
      "grossValue": 362257.26,
      "redemptionValue": 0.0,
      "pnlGross": -79544.25,
      "pnlChange": 143.47000000003027,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-22",
      "appliedValue": 441801.51,
      "grossValue": 362975.48,
      "redemptionValue": 0.0,
      "pnlGross": -78826.03000000003,
      "pnlChange": 143.7600000000093,
      "statusPoint": "Último dia observado"
    }
  ],
  "RF|C129152": [
    {
      "date": "2024-06-28",
      "appliedValue": 644777.34,
      "grossValue": 645287.47,
      "redemptionValue": 0.0,
      "pnlGross": 510.1300000000047,
      "pnlChange": null,
      "statusPoint": "Entrada/1ª observação"
    },
    {
      "date": "2024-07-04",
      "appliedValue": 644777.34,
      "grossValue": 646802.0,
      "redemptionValue": 0.0,
      "pnlGross": 2024.6600000000328,
      "pnlChange": 253.4300000000512,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-07-09",
      "appliedValue": 644777.34,
      "grossValue": 648070.63,
      "redemptionValue": 0.0,
      "pnlGross": 3293.2900000000373,
      "pnlChange": 253.9200000000419,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-07-15",
      "appliedValue": 644777.34,
      "grossValue": 649596.29,
      "redemptionValue": 0.0,
      "pnlGross": 4818.95000000007,
      "pnlChange": 763.2800000000279,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-07-18",
      "appliedValue": 644777.34,
      "grossValue": 650360.46,
      "redemptionValue": 0.0,
      "pnlGross": 5583.119999999995,
      "pnlChange": 254.8299999999581,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-07-24",
      "appliedValue": 644777.34,
      "grossValue": 633887.14,
      "redemptionValue": 0.0,
      "pnlGross": -10890.199999999952,
      "pnlChange": 248.36999999999531,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-07-29",
      "appliedValue": 644777.34,
      "grossValue": 635130.45,
      "redemptionValue": 0.0,
      "pnlGross": -9646.890000000014,
      "pnlChange": 746.2799999999115,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-08-02",
      "appliedValue": 644777.34,
      "grossValue": 636126.85,
      "redemptionValue": 0.0,
      "pnlGross": -8650.48999999999,
      "pnlChange": 249.25,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-08-07",
      "appliedValue": 644777.34,
      "grossValue": 637374.55,
      "redemptionValue": 0.0,
      "pnlGross": -7402.789999999921,
      "pnlChange": 249.7399999999907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-08-13",
      "appliedValue": 644777.34,
      "grossValue": 638875.02,
      "redemptionValue": 0.0,
      "pnlGross": -5902.319999999949,
      "pnlChange": 250.3200000000652,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-08-16",
      "appliedValue": 644777.34,
      "grossValue": 639626.58,
      "redemptionValue": 0.0,
      "pnlGross": -5150.760000000009,
      "pnlChange": 250.61999999999531,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-08-22",
      "appliedValue": 644777.34,
      "grossValue": 623121.54,
      "redemptionValue": 0.0,
      "pnlGross": -21655.79999999993,
      "pnlChange": 244.1600000000326,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-08-27",
      "appliedValue": 644777.34,
      "grossValue": 624343.78,
      "redemptionValue": 0.0,
      "pnlGross": -20433.55999999994,
      "pnlChange": 244.640000000014,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-09-02",
      "appliedValue": 644777.34,
      "grossValue": 625813.63,
      "redemptionValue": 0.0,
      "pnlGross": -18963.709999999963,
      "pnlChange": 735.359999999986,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-09-05",
      "appliedValue": 644777.34,
      "grossValue": 626549.86,
      "redemptionValue": 0.0,
      "pnlGross": -18227.47999999998,
      "pnlChange": 245.5100000000093,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-09-11",
      "appliedValue": 644777.34,
      "grossValue": 628024.91,
      "redemptionValue": 0.0,
      "pnlGross": -16752.429999999935,
      "pnlChange": 246.0800000000745,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-09-16",
      "appliedValue": 644777.34,
      "grossValue": 629256.77,
      "redemptionValue": 0.0,
      "pnlGross": -15520.569999999949,
      "pnlChange": 739.4100000000326,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-09-20",
      "appliedValue": 644777.34,
      "grossValue": 612253.74,
      "redemptionValue": 0.0,
      "pnlGross": -32523.599999999977,
      "pnlChange": -17743.300000000047,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-09-26",
      "appliedValue": 644777.34,
      "grossValue": 613695.14,
      "redemptionValue": 0.0,
      "pnlGross": -31082.199999999957,
      "pnlChange": 240.4699999999721,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-10-01",
      "appliedValue": 644777.34,
      "grossValue": 614898.89,
      "redemptionValue": 0.0,
      "pnlGross": -29878.449999999957,
      "pnlChange": 240.9400000000605,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-10-07",
      "appliedValue": 644777.34,
      "grossValue": 616346.51,
      "redemptionValue": 0.0,
      "pnlGross": -28430.82999999996,
      "pnlChange": 724.2399999999907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-10-10",
      "appliedValue": 644777.34,
      "grossValue": 617071.6,
      "redemptionValue": 0.0,
      "pnlGross": -27705.73999999999,
      "pnlChange": 241.79999999993012,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-10-16",
      "appliedValue": 644777.34,
      "grossValue": 618524.33,
      "redemptionValue": 0.0,
      "pnlGross": -26253.01000000001,
      "pnlChange": 242.35999999998603,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-10-21",
      "appliedValue": 644777.34,
      "grossValue": 601747.3,
      "redemptionValue": 0.0,
      "pnlGross": -43030.03999999992,
      "pnlChange": -17262.02999999991,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-10-25",
      "appliedValue": 644777.34,
      "grossValue": 602691.37,
      "redemptionValue": 0.0,
      "pnlGross": -42085.96999999997,
      "pnlChange": 236.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-10-30",
      "appliedValue": 644777.34,
      "grossValue": 603873.54,
      "redemptionValue": 0.0,
      "pnlGross": -40903.79999999993,
      "pnlChange": 236.61999999999531,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-11-05",
      "appliedValue": 644777.34,
      "grossValue": 605295.2,
      "redemptionValue": 0.0,
      "pnlGross": -39482.140000000014,
      "pnlChange": 237.1699999999255,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-11-08",
      "appliedValue": 644777.34,
      "grossValue": 606007.29,
      "redemptionValue": 0.0,
      "pnlGross": -38770.04999999993,
      "pnlChange": 237.4600000000792,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-11-14",
      "appliedValue": 644777.34,
      "grossValue": 607433.98,
      "redemptionValue": 0.0,
      "pnlGross": -37343.35999999999,
      "pnlChange": 238.02000000001863,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-11-21",
      "appliedValue": 644777.34,
      "grossValue": 591112.44,
      "redemptionValue": 0.0,
      "pnlGross": -53664.90000000002,
      "pnlChange": -17513.01000000001,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-11-27",
      "appliedValue": 644777.34,
      "grossValue": 592504.06,
      "redemptionValue": 0.0,
      "pnlGross": -52273.27999999991,
      "pnlChange": 232.1600000000326,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-12-02",
      "appliedValue": 644777.34,
      "grossValue": 593666.25,
      "redemptionValue": 0.0,
      "pnlGross": -51111.08999999997,
      "pnlChange": 697.5899999999674,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-12-06",
      "appliedValue": 644777.34,
      "grossValue": 594597.64,
      "redemptionValue": 0.0,
      "pnlGross": -50179.69999999995,
      "pnlChange": 232.9899999999907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-12-11",
      "appliedValue": 644777.34,
      "grossValue": 595763.93,
      "redemptionValue": 0.0,
      "pnlGross": -49013.40999999992,
      "pnlChange": 233.4400000000605,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-12-17",
      "appliedValue": 644777.34,
      "grossValue": 597166.5,
      "redemptionValue": 0.0,
      "pnlGross": -47610.83999999997,
      "pnlChange": 233.9899999999907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-12-20",
      "appliedValue": 644777.34,
      "grossValue": 579878.77,
      "redemptionValue": 0.0,
      "pnlGross": -64898.56999999995,
      "pnlChange": -17755.98999999999,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-12-27",
      "appliedValue": 644777.34,
      "grossValue": 581471.79,
      "redemptionValue": 0.0,
      "pnlGross": -63305.54999999993,
      "pnlChange": 227.84000000008385,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-03",
      "appliedValue": 644777.34,
      "grossValue": 583069.18,
      "redemptionValue": 0.0,
      "pnlGross": -61708.15999999992,
      "pnlChange": 228.47000000008848,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-08",
      "appliedValue": 644777.34,
      "grossValue": 584212.86,
      "redemptionValue": 0.0,
      "pnlGross": -60564.47999999998,
      "pnlChange": 228.9200000000419,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-14",
      "appliedValue": 644777.34,
      "grossValue": 585588.24,
      "redemptionValue": 0.0,
      "pnlGross": -59189.09999999998,
      "pnlChange": 229.45999999996275,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-17",
      "appliedValue": 644777.34,
      "grossValue": 586277.14,
      "redemptionValue": 0.0,
      "pnlGross": -58500.19999999995,
      "pnlChange": 229.72999999998137,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-23",
      "appliedValue": 644777.34,
      "grossValue": 569645.96,
      "redemptionValue": 0.0,
      "pnlGross": -75131.38,
      "pnlChange": 223.20999999996275,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-29",
      "appliedValue": 644777.34,
      "grossValue": 570987.04,
      "redemptionValue": 0.0,
      "pnlGross": -73790.29999999993,
      "pnlChange": 447.36999999999534,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-04",
      "appliedValue": 644777.34,
      "grossValue": 572331.29,
      "redemptionValue": 0.0,
      "pnlGross": -72446.04999999993,
      "pnlChange": 224.2600000000093,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-07",
      "appliedValue": 644777.34,
      "grossValue": 573004.59,
      "redemptionValue": 0.0,
      "pnlGross": -71772.75,
      "pnlChange": 224.52000000001863,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-13",
      "appliedValue": 644777.34,
      "grossValue": 574353.58,
      "redemptionValue": 0.0,
      "pnlGross": -70423.76000000001,
      "pnlChange": 225.04999999993012,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-18",
      "appliedValue": 644777.34,
      "grossValue": 575480.17,
      "redemptionValue": 0.0,
      "pnlGross": -69297.16999999993,
      "pnlChange": 225.5,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-24",
      "appliedValue": 644777.34,
      "grossValue": 558816.51,
      "redemptionValue": 0.0,
      "pnlGross": -85960.82999999996,
      "pnlChange": 656.6300000000047,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-27",
      "appliedValue": 644777.34,
      "grossValue": 559473.92,
      "redemptionValue": 0.0,
      "pnlGross": -85303.41999999993,
      "pnlChange": 219.22000000008848,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-07",
      "appliedValue": 644777.34,
      "grossValue": 561230.79,
      "redemptionValue": 0.0,
      "pnlGross": -83546.54999999993,
      "pnlChange": 219.9100000000326,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-12",
      "appliedValue": 644777.34,
      "grossValue": 562331.63,
      "redemptionValue": 0.0,
      "pnlGross": -82445.70999999996,
      "pnlChange": 220.3399999999674,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-18",
      "appliedValue": 644777.34,
      "grossValue": 563655.49,
      "redemptionValue": 0.0,
      "pnlGross": -81121.84999999998,
      "pnlChange": 220.85999999998603,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-21",
      "appliedValue": 644777.34,
      "grossValue": 546321.29,
      "redemptionValue": 0.0,
      "pnlGross": -98456.04999999992,
      "pnlChange": 214.0700000000652,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-27",
      "appliedValue": 644777.34,
      "grossValue": 547607.46,
      "redemptionValue": 0.0,
      "pnlGross": -97169.88,
      "pnlChange": 214.5699999999488,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-02",
      "appliedValue": 644777.34,
      "grossValue": 548896.66,
      "redemptionValue": 0.0,
      "pnlGross": -95880.67999999992,
      "pnlChange": 215.0700000000652,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-07",
      "appliedValue": 644777.34,
      "grossValue": 549973.31,
      "redemptionValue": 0.0,
      "pnlGross": -94804.02999999993,
      "pnlChange": 646.2400000001071,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-11",
      "appliedValue": 644777.34,
      "grossValue": 550836.16,
      "redemptionValue": 0.0,
      "pnlGross": -93941.17999999992,
      "pnlChange": 215.84000000008385,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-16",
      "appliedValue": 644777.34,
      "grossValue": 551916.61,
      "redemptionValue": 0.0,
      "pnlGross": -92860.72999999998,
      "pnlChange": 216.2600000000093,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-24",
      "appliedValue": 644777.34,
      "grossValue": 535645.39,
      "redemptionValue": 0.0,
      "pnlGross": -109131.94999999995,
      "pnlChange": 209.88000000000463,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-29",
      "appliedValue": 644777.34,
      "grossValue": 536696.05,
      "redemptionValue": 0.0,
      "pnlGross": -108081.28999999992,
      "pnlChange": 210.30000000004657,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-06",
      "appliedValue": 644777.34,
      "grossValue": 538170.44,
      "redemptionValue": 0.0,
      "pnlGross": -106606.90000000002,
      "pnlChange": 210.87999999988824,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-09",
      "appliedValue": 644777.34,
      "grossValue": 538803.56,
      "redemptionValue": 0.0,
      "pnlGross": -105973.77999999993,
      "pnlChange": 211.13000000000463,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-15",
      "appliedValue": 644777.34,
      "grossValue": 540072.03,
      "redemptionValue": 0.0,
      "pnlGross": -104705.30999999994,
      "pnlChange": 211.61999999999531,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-20",
      "appliedValue": 644777.34,
      "grossValue": 523141.12,
      "redemptionValue": 0.0,
      "pnlGross": -121636.21999999996,
      "pnlChange": -17778.219999999972,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-26",
      "appliedValue": 644777.34,
      "grossValue": 524372.72,
      "redemptionValue": 0.0,
      "pnlGross": -120404.62,
      "pnlChange": 616.1599999999744,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-29",
      "appliedValue": 644777.34,
      "grossValue": 524989.61,
      "redemptionValue": 0.0,
      "pnlGross": -119787.72999999998,
      "pnlChange": 205.70999999996275,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-04",
      "appliedValue": 644777.34,
      "grossValue": 526225.56,
      "redemptionValue": 0.0,
      "pnlGross": -118551.77999999993,
      "pnlChange": 206.20000000006985,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-09",
      "appliedValue": 644777.34,
      "grossValue": 527257.74,
      "redemptionValue": 0.0,
      "pnlGross": -117519.59999999998,
      "pnlChange": 619.5500000000466,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-13",
      "appliedValue": 644777.34,
      "grossValue": 528084.94,
      "redemptionValue": 0.0,
      "pnlGross": -116692.40000000002,
      "pnlChange": 206.9199999999255,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-18",
      "appliedValue": 644777.34,
      "grossValue": 529120.77,
      "redemptionValue": 0.0,
      "pnlGross": -115656.56999999996,
      "pnlChange": 207.3300000000745,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-25",
      "appliedValue": 644777.34,
      "grossValue": 512548.81,
      "redemptionValue": 0.0,
      "pnlGross": -132228.52999999997,
      "pnlChange": 200.8400000000256,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-01",
      "appliedValue": 644777.34,
      "grossValue": 522189.91,
      "redemptionValue": 0.0,
      "pnlGross": -122587.43,
      "pnlChange": 204.7999999999884,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-04",
      "appliedValue": 644777.34,
      "grossValue": 522804.79,
      "redemptionValue": 0.0,
      "pnlGross": -121972.55,
      "pnlChange": 205.03999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-10",
      "appliedValue": 644777.34,
      "grossValue": 524036.73,
      "redemptionValue": 0.0,
      "pnlGross": -120740.61,
      "pnlChange": 205.52999999996973,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-15",
      "appliedValue": 644777.34,
      "grossValue": 525065.55,
      "redemptionValue": 0.0,
      "pnlGross": -119711.78999999992,
      "pnlChange": 205.9200000000419,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-21",
      "appliedValue": 644777.34,
      "grossValue": 507447.0,
      "redemptionValue": 0.0,
      "pnlGross": -137330.33999999997,
      "pnlChange": 597.570000000007,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-24",
      "appliedValue": 644777.34,
      "grossValue": 508045.28,
      "redemptionValue": 0.0,
      "pnlGross": -136732.05999999994,
      "pnlChange": 199.5,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-30",
      "appliedValue": 644777.34,
      "grossValue": 509243.96,
      "redemptionValue": 0.0,
      "pnlGross": -135533.37999999995,
      "pnlChange": 199.97000000003027,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-04",
      "appliedValue": 644777.34,
      "grossValue": 510245.02,
      "redemptionValue": 0.0,
      "pnlGross": -134532.31999999995,
      "pnlChange": 600.8699999999953,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-08",
      "appliedValue": 644777.34,
      "grossValue": 511047.28,
      "redemptionValue": 0.0,
      "pnlGross": -133730.05999999994,
      "pnlChange": 200.6800000000512,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-13",
      "appliedValue": 644777.34,
      "grossValue": 512051.88,
      "redemptionValue": 0.0,
      "pnlGross": -132725.45999999996,
      "pnlChange": 201.07000000000696,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-19",
      "appliedValue": 644777.34,
      "grossValue": 513260.01,
      "redemptionValue": 0.0,
      "pnlGross": -131517.32999999996,
      "pnlChange": 201.5499999999884,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-22",
      "appliedValue": 644777.34,
      "grossValue": 513865.15,
      "redemptionValue": 0.0,
      "pnlGross": -130912.18999999994,
      "pnlChange": 201.79000000003725,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-28",
      "appliedValue": 644777.34,
      "grossValue": 496222.34,
      "redemptionValue": 0.0,
      "pnlGross": -148554.99999999994,
      "pnlChange": 195.05999999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-02",
      "appliedValue": 644777.34,
      "grossValue": 497198.74,
      "redemptionValue": 0.0,
      "pnlGross": -147578.59999999998,
      "pnlChange": 195.44000000000236,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-08",
      "appliedValue": 644777.34,
      "grossValue": 498372.96,
      "redemptionValue": 0.0,
      "pnlGross": -146404.37999999995,
      "pnlChange": 587.460000000021,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-11",
      "appliedValue": 644777.34,
      "grossValue": 498961.11,
      "redemptionValue": 0.0,
      "pnlGross": -145816.22999999998,
      "pnlChange": 196.13000000000463,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-17",
      "appliedValue": 644777.34,
      "grossValue": 481320.93,
      "redemptionValue": 0.0,
      "pnlGross": -163456.40999999997,
      "pnlChange": 189.4199999999837,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-22",
      "appliedValue": 644777.34,
      "grossValue": 482269.19,
      "redemptionValue": 0.0,
      "pnlGross": -162508.14999999997,
      "pnlChange": 569.179999999993,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-26",
      "appliedValue": 644777.34,
      "grossValue": 483029.15,
      "redemptionValue": 0.0,
      "pnlGross": -161748.18999999994,
      "pnlChange": 190.10000000003487,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-02",
      "appliedValue": 644777.34,
      "grossValue": 484171.32,
      "redemptionValue": 0.0,
      "pnlGross": -160606.01999999996,
      "pnlChange": 190.5499999999884,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-07",
      "appliedValue": 644777.34,
      "grossValue": 485125.2,
      "redemptionValue": 0.0,
      "pnlGross": -159652.13999999996,
      "pnlChange": 190.92999999999304,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-13",
      "appliedValue": 644777.34,
      "grossValue": 486272.33,
      "redemptionValue": 0.0,
      "pnlGross": -158505.00999999995,
      "pnlChange": 573.9100000000326,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-16",
      "appliedValue": 644777.34,
      "grossValue": 486846.91,
      "redemptionValue": 0.0,
      "pnlGross": -157930.43,
      "pnlChange": 191.59999999997672,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-22",
      "appliedValue": 644777.34,
      "grossValue": 487998.11,
      "redemptionValue": 0.0,
      "pnlGross": -156779.22999999998,
      "pnlChange": 192.0499999999884,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-27",
      "appliedValue": 644777.34,
      "grossValue": 470121.93,
      "redemptionValue": 0.0,
      "pnlGross": -174655.40999999997,
      "pnlChange": -18260.52000000002,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-31",
      "appliedValue": 644777.34,
      "grossValue": 470863.39,
      "redemptionValue": 0.0,
      "pnlGross": -173913.94999999995,
      "pnlChange": 185.4800000000396,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-05",
      "appliedValue": 644777.34,
      "grossValue": 471791.86,
      "redemptionValue": 0.0,
      "pnlGross": -172985.47999999998,
      "pnlChange": 185.8399999999674,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-11",
      "appliedValue": 644777.34,
      "grossValue": 472908.44,
      "redemptionValue": 0.0,
      "pnlGross": -171868.89999999997,
      "pnlChange": 186.28000000002797,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-14",
      "appliedValue": 644777.34,
      "grossValue": 473467.72,
      "redemptionValue": 0.0,
      "pnlGross": -171309.62,
      "pnlChange": 186.5,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-21",
      "appliedValue": 644777.34,
      "grossValue": 455957.61,
      "redemptionValue": 0.0,
      "pnlGross": -188819.73,
      "pnlChange": 359.570000000007,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-26",
      "appliedValue": 644777.34,
      "grossValue": 456857.78,
      "redemptionValue": 0.0,
      "pnlGross": -187919.55999999997,
      "pnlChange": 180.1800000000512,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-02",
      "appliedValue": 644777.34,
      "grossValue": 457940.33,
      "redemptionValue": 0.0,
      "pnlGross": -186837.00999999995,
      "pnlChange": 180.60000000003487,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-05",
      "appliedValue": 644777.34,
      "grossValue": 458482.57,
      "redemptionValue": 0.0,
      "pnlGross": -186294.77,
      "pnlChange": 180.82000000000696,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-11",
      "appliedValue": 644777.34,
      "grossValue": 459568.97,
      "redemptionValue": 0.0,
      "pnlGross": -185208.37,
      "pnlChange": 181.25,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-16",
      "appliedValue": 644777.34,
      "grossValue": 460476.27,
      "redemptionValue": 0.0,
      "pnlGross": -184301.06999999995,
      "pnlChange": 181.60000000003487,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-22",
      "appliedValue": 644777.34,
      "grossValue": 442744.68,
      "redemptionValue": 0.0,
      "pnlGross": -202032.66,
      "pnlChange": 524.2399999999907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-29",
      "appliedValue": 644777.34,
      "grossValue": 443970.31,
      "redemptionValue": 0.0,
      "pnlGross": -200807.03,
      "pnlChange": 525.6900000000023,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-02",
      "appliedValue": 644777.34,
      "grossValue": 444672.19,
      "redemptionValue": 0.0,
      "pnlGross": -200105.15,
      "pnlChange": 351.0800000000163,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-08",
      "appliedValue": 644777.34,
      "grossValue": 445727.1,
      "redemptionValue": 0.0,
      "pnlGross": -199050.24,
      "pnlChange": 175.9899999999907,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-13",
      "appliedValue": 644777.34,
      "grossValue": 446608.1,
      "redemptionValue": 0.0,
      "pnlGross": -198169.24,
      "pnlChange": 176.3399999999674,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-19",
      "appliedValue": 644777.34,
      "grossValue": 432497.25,
      "redemptionValue": 0.0,
      "pnlGross": -212280.09,
      "pnlChange": 524.9199999999837,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-22",
      "appliedValue": 644777.34,
      "grossValue": 433022.8,
      "redemptionValue": 0.0,
      "pnlGross": -211754.54,
      "pnlChange": 175.25,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-28",
      "appliedValue": 644777.34,
      "grossValue": 434075.83,
      "redemptionValue": 0.0,
      "pnlGross": -210701.50999999995,
      "pnlChange": 175.67999999999302,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-02",
      "appliedValue": 644777.34,
      "grossValue": 434955.32,
      "redemptionValue": 0.0,
      "pnlGross": -209822.02,
      "pnlChange": 527.9100000000326,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-06",
      "appliedValue": 644777.34,
      "grossValue": 435660.18,
      "redemptionValue": 0.0,
      "pnlGross": -209117.16,
      "pnlChange": 176.32000000000698,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-11",
      "appliedValue": 644777.34,
      "grossValue": 436542.88,
      "redemptionValue": 0.0,
      "pnlGross": -208234.46,
      "pnlChange": 176.69000000000233,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-19",
      "appliedValue": 644777.34,
      "grossValue": 437958.9,
      "redemptionValue": 0.0,
      "pnlGross": -206818.43999999997,
      "pnlChange": 177.25,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-24",
      "appliedValue": 644777.34,
      "grossValue": 420028.51,
      "redemptionValue": 0.0,
      "pnlGross": -224748.83,
      "pnlChange": 170.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-02",
      "appliedValue": 644777.34,
      "grossValue": 421049.94,
      "redemptionValue": 0.0,
      "pnlGross": -223727.4,
      "pnlChange": 511.030000000028,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-05",
      "appliedValue": 644777.34,
      "grossValue": 421561.58,
      "redemptionValue": 0.0,
      "pnlGross": -223215.75999999995,
      "pnlChange": 170.61000000004424,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-11",
      "appliedValue": 644777.34,
      "grossValue": 422586.74,
      "redemptionValue": 0.0,
      "pnlGross": -222190.6,
      "pnlChange": 171.02999999996973,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-16",
      "appliedValue": 644777.34,
      "grossValue": 423442.95,
      "redemptionValue": 0.0,
      "pnlGross": -221334.39,
      "pnlChange": 513.929999999993,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-20",
      "appliedValue": 644777.34,
      "grossValue": 405337.66,
      "redemptionValue": 0.0,
      "pnlGross": -239439.68,
      "pnlChange": 164.05999999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-26",
      "appliedValue": 644777.34,
      "grossValue": 406323.43,
      "redemptionValue": 0.0,
      "pnlGross": -238453.91,
      "pnlChange": 164.46000000002095,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-31",
      "appliedValue": 644777.34,
      "grossValue": 407146.74,
      "redemptionValue": 0.0,
      "pnlGross": -237630.6,
      "pnlChange": 164.79999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-07",
      "appliedValue": 644777.34,
      "grossValue": 408302.17,
      "redemptionValue": 0.0,
      "pnlGross": -236475.17,
      "pnlChange": 165.2600000000093,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-10",
      "appliedValue": 644777.34,
      "grossValue": 408798.36,
      "redemptionValue": 0.0,
      "pnlGross": -235978.98,
      "pnlChange": 165.45999999996275,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-16",
      "appliedValue": 644777.34,
      "grossValue": 391025.91,
      "redemptionValue": 0.0,
      "pnlGross": -253751.43,
      "pnlChange": 158.29999999998836,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-22",
      "appliedValue": 644777.34,
      "grossValue": 391977.03,
      "redemptionValue": 0.0,
      "pnlGross": -252800.30999999997,
      "pnlChange": 317.30000000004657,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-28",
      "appliedValue": 644777.34,
      "grossValue": 392930.47,
      "redemptionValue": 0.0,
      "pnlGross": -251846.87,
      "pnlChange": 159.06999999994878,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-04",
      "appliedValue": 644777.34,
      "grossValue": 393886.22,
      "redemptionValue": 0.0,
      "pnlGross": -250891.12,
      "pnlChange": 637.429999999993,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-08",
      "appliedValue": 644777.34,
      "grossValue": 394524.69,
      "redemptionValue": 0.0,
      "pnlGross": -250252.65,
      "pnlChange": 159.72000000003027,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-13",
      "appliedValue": 644777.34,
      "grossValue": 395324.22,
      "redemptionValue": 0.0,
      "pnlGross": -249453.12,
      "pnlChange": 160.03999999997905,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-19",
      "appliedValue": 644777.34,
      "grossValue": 377495.43,
      "redemptionValue": 0.0,
      "pnlGross": -267281.91,
      "pnlChange": 152.84999999997672,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-22",
      "appliedValue": 644777.34,
      "grossValue": 377954.35,
      "redemptionValue": 0.0,
      "pnlGross": -266822.99,
      "pnlChange": 153.02999999996973,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-28",
      "appliedValue": 644777.34,
      "grossValue": 378873.86,
      "redemptionValue": 0.0,
      "pnlGross": -265903.48,
      "pnlChange": 153.4099999999744,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-02",
      "appliedValue": 644777.34,
      "grossValue": 379641.83,
      "redemptionValue": 0.0,
      "pnlGross": -265135.50999999995,
      "pnlChange": 153.72000000003027,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-09",
      "appliedValue": 644777.34,
      "grossValue": 392229.45,
      "redemptionValue": 0.0,
      "pnlGross": -252547.89,
      "pnlChange": 11664.01000000001,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-12",
      "appliedValue": 644777.34,
      "grossValue": 394464.66,
      "redemptionValue": 0.0,
      "pnlGross": -250312.68,
      "pnlChange": 746.4799999999814,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-18",
      "appliedValue": 644777.34,
      "grossValue": 379380.18,
      "redemptionValue": 0.0,
      "pnlGross": -265397.16,
      "pnlChange": 717.960000000021,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-23",
      "appliedValue": 644777.34,
      "grossValue": 381283.21,
      "redemptionValue": 0.0,
      "pnlGross": -263494.12999999995,
      "pnlChange": 154.40000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-29",
      "appliedValue": 644777.34,
      "grossValue": 382210.97,
      "redemptionValue": 0.0,
      "pnlGross": -262566.37,
      "pnlChange": 464.1599999999744,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-03",
      "appliedValue": 644777.34,
      "grossValue": 382830.73,
      "redemptionValue": 0.0,
      "pnlGross": -261946.61,
      "pnlChange": 155.02999999996973,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-08",
      "appliedValue": 644777.34,
      "grossValue": 383606.84,
      "redemptionValue": 0.0,
      "pnlGross": -261170.49999999997,
      "pnlChange": 155.3400000000256,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-14",
      "appliedValue": 644777.34,
      "grossValue": 364897.35,
      "redemptionValue": 0.0,
      "pnlGross": -279879.99,
      "pnlChange": 147.81999999994878,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-17",
      "appliedValue": 644777.34,
      "grossValue": 365341.16,
      "redemptionValue": 0.0,
      "pnlGross": -279436.18,
      "pnlChange": 148.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-23",
      "appliedValue": 644777.34,
      "grossValue": 366230.42,
      "redemptionValue": 0.0,
      "pnlGross": -278546.92,
      "pnlChange": 148.35999999998603,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-28",
      "appliedValue": 644777.34,
      "grossValue": 366973.11,
      "redemptionValue": 0.0,
      "pnlGross": -277804.23,
      "pnlChange": 148.6599999999744,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-03",
      "appliedValue": 644777.34,
      "grossValue": 367866.34,
      "redemptionValue": 0.0,
      "pnlGross": -276910.99999999994,
      "pnlChange": 446.890000000014,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-06",
      "appliedValue": 644777.34,
      "grossValue": 368313.76,
      "redemptionValue": 0.0,
      "pnlGross": -276463.58,
      "pnlChange": 149.20000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-12",
      "appliedValue": 644777.34,
      "grossValue": 369210.25,
      "redemptionValue": 0.0,
      "pnlGross": -275567.09,
      "pnlChange": 149.55999999999767,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-17",
      "appliedValue": 644777.34,
      "grossValue": 369958.99,
      "redemptionValue": 0.0,
      "pnlGross": -274818.35,
      "pnlChange": 449.4199999999837,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-21",
      "appliedValue": 644777.34,
      "grossValue": 350876.16,
      "redemptionValue": 0.0,
      "pnlGross": -293901.18,
      "pnlChange": 142.13999999995576,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-26",
      "appliedValue": 644777.34,
      "grossValue": 351587.71,
      "redemptionValue": 0.0,
      "pnlGross": -293189.62999999995,
      "pnlChange": 142.4200000000419,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-01",
      "appliedValue": 644777.34,
      "grossValue": 352443.49,
      "redemptionValue": 0.0,
      "pnlGross": -292333.85,
      "pnlChange": 142.77000000001863,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-04",
      "appliedValue": 644777.34,
      "grossValue": 352872.16,
      "redemptionValue": 0.0,
      "pnlGross": -291905.18,
      "pnlChange": 142.94999999995343,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-11",
      "appliedValue": 644777.34,
      "grossValue": 353874.42,
      "redemptionValue": 0.0,
      "pnlGross": -290902.92,
      "pnlChange": 143.35999999998603,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-16",
      "appliedValue": 644777.34,
      "grossValue": 354592.05,
      "redemptionValue": 0.0,
      "pnlGross": -290185.29,
      "pnlChange": 143.64000000001397,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-22",
      "appliedValue": 644777.34,
      "grossValue": 335767.21,
      "redemptionValue": 0.0,
      "pnlGross": -309010.12999999995,
      "pnlChange": 136.03000000002794,
      "statusPoint": "Último dia observado"
    }
  ],
  "RF|B941739": [
    {
      "date": "2023-01-13",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": null,
      "statusPoint": "Entrada/1ª observação"
    },
    {
      "date": "2023-01-23",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-01-31",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-02-07",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-02-15",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-02-27",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-03-07",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-03-15",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-03-22",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-03-30",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-04-10",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-04-18",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-04-27",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-05-05",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-05-15",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-05-23",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-05-31",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-06-09",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-06-16",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-06-27",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-07-05",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-07-13",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-07-21",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-07-31",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-08-07",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-08-15",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-08-23",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-08-31",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-09-11",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-09-18",
      "appliedValue": 194672.44,
      "grossValue": 194672.44,
      "redemptionValue": 0.0,
      "pnlGross": 0.0,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-09-26",
      "appliedValue": 194672.44,
      "grossValue": 211284.49,
      "redemptionValue": 0.0,
      "pnlGross": 16612.04999999999,
      "pnlChange": 64.88999999998487,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-10-04",
      "appliedValue": 194672.44,
      "grossValue": 211803.61,
      "redemptionValue": 0.0,
      "pnlGross": 17131.169999999984,
      "pnlChange": 64.88999999998487,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-10-13",
      "appliedValue": 194672.44,
      "grossValue": 212387.63,
      "redemptionValue": 0.0,
      "pnlGross": 17715.190000000002,
      "pnlChange": 129.77999999999884,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-10-23",
      "appliedValue": 194672.44,
      "grossValue": 213036.54,
      "redemptionValue": 0.0,
      "pnlGross": 18364.10000000001,
      "pnlChange": 194.6700000000128,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-10-30",
      "appliedValue": 194672.44,
      "grossValue": 213490.78,
      "redemptionValue": 0.0,
      "pnlGross": 18818.34,
      "pnlChange": 194.67999999999304,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-11-08",
      "appliedValue": 194672.44,
      "grossValue": 214074.79,
      "redemptionValue": 0.0,
      "pnlGross": 19402.35000000001,
      "pnlChange": 64.89000000001397,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-11-17",
      "appliedValue": 194672.44,
      "grossValue": 214658.81,
      "redemptionValue": 0.0,
      "pnlGross": 19986.369999999995,
      "pnlChange": 64.88999999998487,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-11-27",
      "appliedValue": 194672.44,
      "grossValue": 215307.72,
      "redemptionValue": 0.0,
      "pnlGross": 20635.28,
      "pnlChange": 194.6700000000128,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-12-05",
      "appliedValue": 194672.44,
      "grossValue": 215826.85,
      "redemptionValue": 0.0,
      "pnlGross": 21154.410000000003,
      "pnlChange": 64.89999999999418,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-12-12",
      "appliedValue": 194672.44,
      "grossValue": 216281.08,
      "redemptionValue": 0.0,
      "pnlGross": 21608.639999999985,
      "pnlChange": 64.88999999998487,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-12-20",
      "appliedValue": 194672.44,
      "grossValue": 216800.21,
      "redemptionValue": 0.0,
      "pnlGross": 22127.76999999999,
      "pnlChange": 64.88999999998487,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2023-12-29",
      "appliedValue": 194672.44,
      "grossValue": 217384.22,
      "redemptionValue": 0.0,
      "pnlGross": 22711.78,
      "pnlChange": 64.89000000001397,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-01-09",
      "appliedValue": 194672.44,
      "grossValue": 228386.57,
      "redemptionValue": 0.0,
      "pnlGross": 33714.130000000005,
      "pnlChange": 10353.440000000002,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-01-17",
      "appliedValue": 194672.44,
      "grossValue": 228930.18,
      "redemptionValue": 0.0,
      "pnlGross": 34257.73999999999,
      "pnlChange": 67.94999999998254,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-01-24",
      "appliedValue": 194672.44,
      "grossValue": 229405.85,
      "redemptionValue": 0.0,
      "pnlGross": 34733.41,
      "pnlChange": 67.95000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-02-01",
      "appliedValue": 194672.44,
      "grossValue": 229949.46,
      "redemptionValue": 0.0,
      "pnlGross": 35277.01999999999,
      "pnlChange": 67.94999999998254,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-02-09",
      "appliedValue": 194672.44,
      "grossValue": 230493.08,
      "redemptionValue": 0.0,
      "pnlGross": 35820.639999999985,
      "pnlChange": 67.94999999998254,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-02-21",
      "appliedValue": 194672.44,
      "grossValue": 231308.5,
      "redemptionValue": 0.0,
      "pnlGross": 36636.06,
      "pnlChange": 67.95000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-02-29",
      "appliedValue": 194672.44,
      "grossValue": 231852.12,
      "redemptionValue": 0.0,
      "pnlGross": 37179.67999999999,
      "pnlChange": 67.94999999998254,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-03-07",
      "appliedValue": 194672.44,
      "grossValue": 232327.78,
      "redemptionValue": 0.0,
      "pnlGross": 37655.34,
      "pnlChange": 67.95000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-03-15",
      "appliedValue": 194672.44,
      "grossValue": 232871.4,
      "redemptionValue": 0.0,
      "pnlGross": 38198.95999999999,
      "pnlChange": 67.94999999998254,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-03-25",
      "appliedValue": 194672.44,
      "grossValue": 233550.92,
      "redemptionValue": 0.0,
      "pnlGross": 38878.48000000001,
      "pnlChange": 203.86000000001516,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-04-03",
      "appliedValue": 194672.44,
      "grossValue": 234162.49,
      "redemptionValue": 0.0,
      "pnlGross": 39490.04999999999,
      "pnlChange": 67.95999999999185,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-04-11",
      "appliedValue": 194672.44,
      "grossValue": 234706.1,
      "redemptionValue": 0.0,
      "pnlGross": 40033.66,
      "pnlChange": 67.95000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-04-18",
      "appliedValue": 194672.44,
      "grossValue": 235181.77,
      "redemptionValue": 0.0,
      "pnlGross": 40509.32999999999,
      "pnlChange": 67.95999999999185,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-04-26",
      "appliedValue": 194672.44,
      "grossValue": 235725.38,
      "redemptionValue": 0.0,
      "pnlGross": 41052.94,
      "pnlChange": 67.95000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-05-07",
      "appliedValue": 194672.44,
      "grossValue": 236472.85,
      "redemptionValue": 0.0,
      "pnlGross": 41800.41,
      "pnlChange": 67.95000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-05-15",
      "appliedValue": 194672.44,
      "grossValue": 237016.47,
      "redemptionValue": 0.0,
      "pnlGross": 42344.03,
      "pnlChange": 67.95000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-05-23",
      "appliedValue": 194672.44,
      "grossValue": 237560.08,
      "redemptionValue": 0.0,
      "pnlGross": 42887.63999999999,
      "pnlChange": 67.94999999998254,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-05-31",
      "appliedValue": 194672.44,
      "grossValue": 238103.7,
      "redemptionValue": 0.0,
      "pnlGross": 43431.26000000001,
      "pnlChange": 135.90000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-06-10",
      "appliedValue": 194672.44,
      "grossValue": 238783.22,
      "redemptionValue": 0.0,
      "pnlGross": 44110.78,
      "pnlChange": 203.86000000001516,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-06-18",
      "appliedValue": 194672.44,
      "grossValue": 239326.84,
      "redemptionValue": 0.0,
      "pnlGross": 44654.4,
      "pnlChange": 67.95999999999185,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-06-26",
      "appliedValue": 194672.44,
      "grossValue": 239870.45,
      "redemptionValue": 0.0,
      "pnlGross": 45198.01000000001,
      "pnlChange": 67.95000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-07-04",
      "appliedValue": 194672.44,
      "grossValue": 240414.07,
      "redemptionValue": 0.0,
      "pnlGross": 45741.630000000005,
      "pnlChange": 67.95000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-07-12",
      "appliedValue": 194672.44,
      "grossValue": 240957.68,
      "redemptionValue": 0.0,
      "pnlGross": 46285.23999999999,
      "pnlChange": 67.94999999998254,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-07-19",
      "appliedValue": 194672.44,
      "grossValue": 241433.35,
      "redemptionValue": 0.0,
      "pnlGross": 46760.91,
      "pnlChange": 67.95999999999185,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-07-29",
      "appliedValue": 194672.44,
      "grossValue": 242112.87,
      "redemptionValue": 0.0,
      "pnlGross": 47440.42999999999,
      "pnlChange": 203.85999999998603,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-08-06",
      "appliedValue": 194672.44,
      "grossValue": 242656.48,
      "redemptionValue": 0.0,
      "pnlGross": 47984.04000000001,
      "pnlChange": 67.95000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-08-14",
      "appliedValue": 194672.44,
      "grossValue": 243200.1,
      "redemptionValue": 0.0,
      "pnlGross": 48527.66,
      "pnlChange": 67.95000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-08-22",
      "appliedValue": 194672.44,
      "grossValue": 243743.71,
      "redemptionValue": 0.0,
      "pnlGross": 49071.26999999999,
      "pnlChange": 67.94999999998254,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-08-29",
      "appliedValue": 194672.44,
      "grossValue": 244219.38,
      "redemptionValue": 0.0,
      "pnlGross": 49546.94,
      "pnlChange": 67.95000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-09-06",
      "appliedValue": 194672.44,
      "grossValue": 244695.04,
      "redemptionValue": 0.0,
      "pnlGross": 50022.600000000006,
      "pnlChange": 0.0,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-09-16",
      "appliedValue": 194672.44,
      "grossValue": 245442.51,
      "redemptionValue": 0.0,
      "pnlGross": 50770.07000000001,
      "pnlChange": 203.85000000000585,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-09-24",
      "appliedValue": 194672.44,
      "grossValue": 245986.13,
      "redemptionValue": 0.0,
      "pnlGross": 51313.69,
      "pnlChange": 67.95000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-10-02",
      "appliedValue": 194672.44,
      "grossValue": 246529.74,
      "redemptionValue": 0.0,
      "pnlGross": 51857.29999999999,
      "pnlChange": 67.94999999998254,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-10-09",
      "appliedValue": 194672.44,
      "grossValue": 247005.41,
      "redemptionValue": 0.0,
      "pnlGross": 52332.97,
      "pnlChange": 67.95000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-10-17",
      "appliedValue": 194672.44,
      "grossValue": 247549.02,
      "redemptionValue": 0.0,
      "pnlGross": 52876.57999999999,
      "pnlChange": 67.94999999998254,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-10-25",
      "appliedValue": 194672.44,
      "grossValue": 248092.64,
      "redemptionValue": 0.0,
      "pnlGross": 53420.20000000001,
      "pnlChange": 67.95000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-11-04",
      "appliedValue": 194672.44,
      "grossValue": 248772.16,
      "redemptionValue": 0.0,
      "pnlGross": 54099.72,
      "pnlChange": 203.86000000001516,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-11-12",
      "appliedValue": 194672.44,
      "grossValue": 249315.77,
      "redemptionValue": 0.0,
      "pnlGross": 54643.32999999999,
      "pnlChange": 67.94999999998254,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-11-21",
      "appliedValue": 194672.44,
      "grossValue": 249927.34,
      "redemptionValue": 0.0,
      "pnlGross": 55254.9,
      "pnlChange": 135.89999999999418,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-11-29",
      "appliedValue": 194672.44,
      "grossValue": 250470.96,
      "redemptionValue": 0.0,
      "pnlGross": 55798.51999999999,
      "pnlChange": 67.94999999998254,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-12-09",
      "appliedValue": 194672.44,
      "grossValue": 251150.48,
      "redemptionValue": 0.0,
      "pnlGross": 56478.04000000001,
      "pnlChange": 203.86000000001516,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-12-17",
      "appliedValue": 194672.44,
      "grossValue": 251694.09,
      "redemptionValue": 0.0,
      "pnlGross": 57021.65,
      "pnlChange": 67.94999999998254,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2024-12-26",
      "appliedValue": 194672.44,
      "grossValue": 252305.66,
      "redemptionValue": 0.0,
      "pnlGross": 57633.22,
      "pnlChange": 135.89999999999418,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-03",
      "appliedValue": 194672.44,
      "grossValue": 252849.28,
      "redemptionValue": 0.0,
      "pnlGross": 58176.84,
      "pnlChange": 67.95000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-13",
      "appliedValue": 194672.44,
      "grossValue": 265458.45,
      "redemptionValue": 0.0,
      "pnlGross": 70786.01000000001,
      "pnlChange": 213.45000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-21",
      "appliedValue": 194672.44,
      "grossValue": 266027.64,
      "redemptionValue": 0.0,
      "pnlGross": 71355.20000000001,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-01-30",
      "appliedValue": 194672.44,
      "grossValue": 266667.99,
      "redemptionValue": 0.0,
      "pnlGross": 71995.54999999999,
      "pnlChange": 71.14999999996508,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-07",
      "appliedValue": 194672.44,
      "grossValue": 267237.18,
      "redemptionValue": 0.0,
      "pnlGross": 72564.73999999999,
      "pnlChange": 71.14999999996508,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-14",
      "appliedValue": 194672.44,
      "grossValue": 267735.23,
      "redemptionValue": 0.0,
      "pnlGross": 73062.78999999998,
      "pnlChange": 71.14999999996508,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-02-24",
      "appliedValue": 194672.44,
      "grossValue": 268446.72,
      "redemptionValue": 0.0,
      "pnlGross": 73774.27999999997,
      "pnlChange": 213.44999999995343,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-06",
      "appliedValue": 194672.44,
      "grossValue": 269158.22,
      "redemptionValue": 0.0,
      "pnlGross": 74485.77999999997,
      "pnlChange": 71.14999999996508,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-14",
      "appliedValue": 194672.44,
      "grossValue": 269727.41,
      "redemptionValue": 0.0,
      "pnlGross": 75054.96999999997,
      "pnlChange": 71.14999999996508,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-24",
      "appliedValue": 194672.44,
      "grossValue": 270438.91,
      "redemptionValue": 0.0,
      "pnlGross": 75766.46999999997,
      "pnlChange": 213.44999999995343,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-03-31",
      "appliedValue": 194672.44,
      "grossValue": 270936.95,
      "redemptionValue": 0.0,
      "pnlGross": 76264.51000000001,
      "pnlChange": 213.45000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-08",
      "appliedValue": 194672.44,
      "grossValue": 271506.15,
      "redemptionValue": 0.0,
      "pnlGross": 76833.71000000002,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-16",
      "appliedValue": 194672.44,
      "grossValue": 272075.34,
      "redemptionValue": 0.0,
      "pnlGross": 77402.90000000002,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-04-28",
      "appliedValue": 194672.44,
      "grossValue": 272929.13,
      "redemptionValue": 0.0,
      "pnlGross": 78256.69,
      "pnlChange": 213.44000000000236,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-07",
      "appliedValue": 194672.44,
      "grossValue": 273569.48,
      "redemptionValue": 0.0,
      "pnlGross": 78897.03999999998,
      "pnlChange": 71.14999999996508,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-15",
      "appliedValue": 194672.44,
      "grossValue": 274138.67,
      "redemptionValue": 0.0,
      "pnlGross": 79466.22999999998,
      "pnlChange": 71.13999999995576,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-22",
      "appliedValue": 194672.44,
      "grossValue": 274636.72,
      "redemptionValue": 0.0,
      "pnlGross": 79964.27999999997,
      "pnlChange": 71.14999999996508,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-05-30",
      "appliedValue": 194672.44,
      "grossValue": 275205.92,
      "redemptionValue": 0.0,
      "pnlGross": 80533.47999999998,
      "pnlChange": 71.14999999996508,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-09",
      "appliedValue": 194672.44,
      "grossValue": 275917.41,
      "redemptionValue": 0.0,
      "pnlGross": 81244.96999999997,
      "pnlChange": 213.44999999995343,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-17",
      "appliedValue": 194672.44,
      "grossValue": 276486.6,
      "redemptionValue": 0.0,
      "pnlGross": 81814.15999999997,
      "pnlChange": 71.13999999995576,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-06-26",
      "appliedValue": 194672.44,
      "grossValue": 277126.95,
      "redemptionValue": 0.0,
      "pnlGross": 82454.51000000001,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-03",
      "appliedValue": 194672.44,
      "grossValue": 277625.0,
      "redemptionValue": 0.0,
      "pnlGross": 82952.56,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-11",
      "appliedValue": 194672.44,
      "grossValue": 278194.19,
      "redemptionValue": 0.0,
      "pnlGross": 83521.75,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-21",
      "appliedValue": 194672.44,
      "grossValue": 278905.68,
      "redemptionValue": 0.0,
      "pnlGross": 84233.23999999999,
      "pnlChange": 213.44000000000236,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-07-29",
      "appliedValue": 194672.44,
      "grossValue": 279474.88,
      "redemptionValue": 0.0,
      "pnlGross": 84802.44,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-06",
      "appliedValue": 194672.44,
      "grossValue": 280044.08,
      "redemptionValue": 0.0,
      "pnlGross": 85371.64000000001,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-13",
      "appliedValue": 194672.44,
      "grossValue": 280542.12,
      "redemptionValue": 0.0,
      "pnlGross": 85869.68,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-21",
      "appliedValue": 194672.44,
      "grossValue": 281111.32,
      "redemptionValue": 0.0,
      "pnlGross": 86438.88,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-08-29",
      "appliedValue": 194672.44,
      "grossValue": 281680.51,
      "redemptionValue": 0.0,
      "pnlGross": 87008.07,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-08",
      "appliedValue": 194672.44,
      "grossValue": 282392.01,
      "redemptionValue": 0.0,
      "pnlGross": 87719.57,
      "pnlChange": 213.45000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-16",
      "appliedValue": 194672.44,
      "grossValue": 282961.2,
      "redemptionValue": 0.0,
      "pnlGross": 88288.76000000001,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-09-23",
      "appliedValue": 194672.44,
      "grossValue": 283459.25,
      "redemptionValue": 0.0,
      "pnlGross": 88786.81,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-01",
      "appliedValue": 194672.44,
      "grossValue": 284028.44,
      "redemptionValue": 0.0,
      "pnlGross": 89356.0,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-09",
      "appliedValue": 194672.44,
      "grossValue": 284597.64,
      "redemptionValue": 0.0,
      "pnlGross": 89925.20000000001,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-17",
      "appliedValue": 194672.44,
      "grossValue": 285166.83,
      "redemptionValue": 0.0,
      "pnlGross": 90494.39,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-10-27",
      "appliedValue": 194672.44,
      "grossValue": 285878.33,
      "redemptionValue": 0.0,
      "pnlGross": 91205.89,
      "pnlChange": 213.45000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-03",
      "appliedValue": 194672.44,
      "grossValue": 286376.37,
      "redemptionValue": 0.0,
      "pnlGross": 91703.93,
      "pnlChange": 213.45000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-11",
      "appliedValue": 194672.44,
      "grossValue": 286945.57,
      "redemptionValue": 0.0,
      "pnlGross": 92273.13,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-19",
      "appliedValue": 194672.44,
      "grossValue": 287514.76,
      "redemptionValue": 0.0,
      "pnlGross": 92842.32,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-11-28",
      "appliedValue": 194672.44,
      "grossValue": 288155.11,
      "redemptionValue": 0.0,
      "pnlGross": 93482.66999999998,
      "pnlChange": 71.14999999996508,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-08",
      "appliedValue": 194672.44,
      "grossValue": 288866.6,
      "redemptionValue": 0.0,
      "pnlGross": 94194.15999999996,
      "pnlChange": 213.44999999995343,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-15",
      "appliedValue": 194672.44,
      "grossValue": 289364.65,
      "redemptionValue": 0.0,
      "pnlGross": 94692.21000000002,
      "pnlChange": 213.45000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2025-12-23",
      "appliedValue": 194672.44,
      "grossValue": 289933.84,
      "redemptionValue": 0.0,
      "pnlGross": 95261.40000000002,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-02",
      "appliedValue": 194672.44,
      "grossValue": 290645.34,
      "redemptionValue": 0.0,
      "pnlGross": 95972.90000000002,
      "pnlChange": 142.30000000004657,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-12",
      "appliedValue": 194672.44,
      "grossValue": 291356.83,
      "redemptionValue": 0.0,
      "pnlGross": 96684.39,
      "pnlChange": 213.45000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-20",
      "appliedValue": 194672.44,
      "grossValue": 291926.03,
      "redemptionValue": 0.0,
      "pnlGross": 97253.59000000004,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-01-27",
      "appliedValue": 194672.44,
      "grossValue": 292424.07,
      "redemptionValue": 0.0,
      "pnlGross": 97751.63,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-04",
      "appliedValue": 194672.44,
      "grossValue": 292993.27,
      "redemptionValue": 0.0,
      "pnlGross": 98320.83000000002,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-12",
      "appliedValue": 194672.44,
      "grossValue": 293562.46,
      "redemptionValue": 0.0,
      "pnlGross": 98890.02000000002,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-02-24",
      "appliedValue": 194672.44,
      "grossValue": 294416.26,
      "redemptionValue": 0.0,
      "pnlGross": 99743.82,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-04",
      "appliedValue": 194672.44,
      "grossValue": 294985.45,
      "redemptionValue": 0.0,
      "pnlGross": 100313.01,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-11",
      "appliedValue": 194672.44,
      "grossValue": 295483.5,
      "redemptionValue": 0.0,
      "pnlGross": 100811.06,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-19",
      "appliedValue": 194672.44,
      "grossValue": 296052.69,
      "redemptionValue": 0.0,
      "pnlGross": 101380.25,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-03-27",
      "appliedValue": 194672.44,
      "grossValue": 296621.89,
      "redemptionValue": 0.0,
      "pnlGross": 101949.45,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-07",
      "appliedValue": 194672.44,
      "grossValue": 297404.53,
      "redemptionValue": 0.0,
      "pnlGross": 102732.09000000004,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-15",
      "appliedValue": 194672.44,
      "grossValue": 297973.73,
      "redemptionValue": 0.0,
      "pnlGross": 103301.28999999998,
      "pnlChange": 71.14999999996508,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-04-24",
      "appliedValue": 194672.44,
      "grossValue": 298614.07,
      "redemptionValue": 0.0,
      "pnlGross": 103941.63,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-04",
      "appliedValue": 194672.44,
      "grossValue": 299325.57,
      "redemptionValue": 0.0,
      "pnlGross": 104653.13,
      "pnlChange": 284.6000000000349,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-12",
      "appliedValue": 194672.44,
      "grossValue": 299894.76,
      "redemptionValue": 0.0,
      "pnlGross": 105222.32,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-20",
      "appliedValue": 194672.44,
      "grossValue": 300463.96,
      "redemptionValue": 0.0,
      "pnlGross": 105791.52000000002,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-05-28",
      "appliedValue": 194672.44,
      "grossValue": 301033.15,
      "redemptionValue": 0.0,
      "pnlGross": 106360.71000000002,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-08",
      "appliedValue": 194672.44,
      "grossValue": 301815.79,
      "redemptionValue": 0.0,
      "pnlGross": 107143.34999999998,
      "pnlChange": 213.44000000000236,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-15",
      "appliedValue": 194672.44,
      "grossValue": 302313.84,
      "redemptionValue": 0.0,
      "pnlGross": 107641.40000000002,
      "pnlChange": 213.45000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-06-23",
      "appliedValue": 194672.44,
      "grossValue": 302883.04,
      "redemptionValue": 0.0,
      "pnlGross": 108210.59999999998,
      "pnlChange": 71.14999999996508,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-01",
      "appliedValue": 194672.44,
      "grossValue": 303452.23,
      "redemptionValue": 0.0,
      "pnlGross": 108779.78999999998,
      "pnlChange": 71.14999999996508,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-09",
      "appliedValue": 194672.44,
      "grossValue": 304021.43,
      "redemptionValue": 0.0,
      "pnlGross": 109348.99,
      "pnlChange": 71.14999999996508,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-17",
      "appliedValue": 194672.44,
      "grossValue": 304590.62,
      "redemptionValue": 0.0,
      "pnlGross": 109918.18,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-07-24",
      "appliedValue": 194672.44,
      "grossValue": 305088.67,
      "redemptionValue": 0.0,
      "pnlGross": 110416.22999999998,
      "pnlChange": 71.14999999996508,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-03",
      "appliedValue": 194672.44,
      "grossValue": 305800.16,
      "redemptionValue": 0.0,
      "pnlGross": 111127.71999999996,
      "pnlChange": 213.44999999995343,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-11",
      "appliedValue": 194672.44,
      "grossValue": 306369.36,
      "redemptionValue": 0.0,
      "pnlGross": 111696.91999999998,
      "pnlChange": 71.14999999996508,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-19",
      "appliedValue": 194672.44,
      "grossValue": 306938.55,
      "redemptionValue": 0.0,
      "pnlGross": 112266.11,
      "pnlChange": 71.14999999996508,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-08-27",
      "appliedValue": 194672.44,
      "grossValue": 307507.75,
      "redemptionValue": 0.0,
      "pnlGross": 112835.31,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-03",
      "appliedValue": 194672.44,
      "grossValue": 308005.79,
      "redemptionValue": 0.0,
      "pnlGross": 113333.34999999998,
      "pnlChange": 71.14999999996508,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-14",
      "appliedValue": 194672.44,
      "grossValue": 308788.44,
      "redemptionValue": 0.0,
      "pnlGross": 114116.0,
      "pnlChange": 213.45000000001164,
      "statusPoint": "Em carteira"
    },
    {
      "date": "2026-09-22",
      "appliedValue": 194672.44,
      "grossValue": 309357.63,
      "redemptionValue": 0.0,
      "pnlGross": 114685.19,
      "pnlChange": 71.15000000002328,
      "statusPoint": "Último dia observado"
    }
  ]
};
let selectedId = "RF|C285318";
const BRL = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", minimumFractionDigits: 2, maximumFractionDigits: 2 });
const COMPACT = new Intl.NumberFormat("pt-BR", { style: "currency", currency: "BRL", notation: "compact", maximumFractionDigits: 1 });
const DATE = new Intl.DateTimeFormat("pt-BR");
const $ = <T extends HTMLElement>(id: string) => document.getElementById(id) as T;
const money = (v?: number | null) => v == null ? "—" : BRL.format(v);
const formatDate = (v?: string | null) => v ? DATE.format(new Date(v + "T00:00:00")) : "—";
const tone = (v?: number | null) => v == null || v === 0 ? "" : v > 0 ? "positive" : "negative";
const esc = (value: unknown) => String(value ?? "").replace(/[&<>"']/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;"}[c] || c));
const label = (a: AssetSummary) => a.issuerOrFund || a.paper || a.subtype || a.assetClass;

function filteredAssets(): AssetSummary[] {
  const q = $("search") as HTMLInputElement;
  const query = q.value.trim().toLowerCase();
  const cls = ($("classFilter") as HTMLSelectElement).value;
  const status = ($("statusFilter") as HTMLSelectElement).value;
  return ASSETS.filter(a => {
    const text = `${a.code} ${a.issuerOrFund ?? ""} ${a.paper ?? ""} ${a.subtype ?? ""}`.toLowerCase();
    const clsOk = cls === "Todos" || a.assetClass === cls;
    const statusOk = status === "Todos" || (status === "Em carteira" ? a.status.startsWith("Em carteira") : !a.status.startsWith("Em carteira"));
    return text.includes(query) && clsOk && statusOk;
  });
}

function renderPortfolioKpis() {
  const open = ASSETS.filter(a => a.status.startsWith("Em carteira"));
  const gross = open.reduce((s,a)=>s+(a.grossValue ?? 0),0);
  const pnl = open.reduce((s,a)=>s+(a.pnlGross ?? 0),0);
  $("portfolioGross").textContent = money(gross);
  $("portfolioPnl").textContent = money(pnl); $("portfolioPnl").className = `kpi-value ${tone(pnl)}`;
  $("openCount").textContent = open.length.toLocaleString("pt-BR");
  $("closedCount").textContent = (ASSETS.length-open.length).toLocaleString("pt-BR");
}

function renderPositions() {
  const rows = filteredAssets();
  $("assetCount").textContent = `${rows.length} ativos na visualização`;
  $("positionsBody").innerHTML = rows.map(a => `
    <tr data-id="${esc(a.assetId)}" class="${a.assetId===selectedId?'selected-row':''}">
      <td><strong>${esc(a.code)}</strong><span>${esc(label(a))}${a.paper ? ` · ${esc(a.paper)}` : ""}</span></td>
      <td><span class="tag">${esc(a.assetClass)}</span></td>
      <td>${money(a.appliedValue)}</td><td>${money(a.grossValue)}</td>
      <td class="${tone(a.pnlGross)}"><strong>${money(a.pnlGross)}</strong></td>
      <td>${formatDate(a.lastSeen)}</td><td><button class="open-button">Abrir</button></td>
    </tr>`).join("");
  document.querySelectorAll<HTMLTableRowElement>("#positionsBody tr").forEach(row => row.onclick = () => selectAsset(row.dataset.id!));
}

function selectAsset(id: string) { selectedId=id; renderPositions(); renderDetail(); }

function renderDetail() {
  const a = ASSETS.find(x=>x.assetId===selectedId) || ASSETS[0];
  const h = HISTORY[a.assetId] || [];
  $("assetCode").textContent = a.code;
  $("assetName").textContent = `${label(a)}${a.paper ? ` · ${a.paper}` : ""}`;
  $("assetStatus").textContent = a.status.startsWith("Em carteira") ? "Em carteira" : "Encerrado";
  $("assetPnl").textContent = money(a.pnlGross); $("assetPnl").className = `kpi-value ${tone(a.pnlGross)}`;
  $("assetGross").textContent = money(a.grossValue); $("assetApplied").textContent = money(a.appliedValue); $("assetObs").textContent = a.observations.toLocaleString("pt-BR");
  $("chartCurrent").textContent = money(a.pnlGross); $("chartCurrent").className = tone(a.pnlGross);
  $("firstSeen").textContent = formatDate(a.firstSeen); $("lastSeen").textContent = formatDate(a.lastSeen);
  $("pnlMax").textContent = money(a.pnlMax); $("pnlMax").className = tone(a.pnlMax);
  $("pnlMin").textContent = money(a.pnlMin); $("pnlMin").className = tone(a.pnlMin);
  $("redemption").textContent = money(a.redemptionValue); $("qualityNote").textContent = a.qualityNote || "Sem observações adicionais.";
  renderChart(h); renderHistory(h);
}

function renderChart(data: HistoryPoint[]) {
  const pts = data.filter(x=>x.pnlGross!=null);
  const svg=$("pnlChart") as unknown as SVGSVGElement; svg.innerHTML="";
  if(pts.length<2){ $("chartEmpty").style.display="grid"; return; } $("chartEmpty").style.display="none";
  const W=1000,H=300,L=78,R=18,T=16,B=40;
  const vals=pts.map(p=>p.pnlGross as number); let min=Math.min(0,...vals), max=Math.max(0,...vals); if(min===max){min-=1;max+=1;} const range=max-min; min-=range*.08; max+=range*.08;
  const X=(i:number)=>L+(i/(pts.length-1))*(W-L-R); const Y=(v:number)=>T+((max-v)/(max-min))*(H-T-B);
  const ns="http://www.w3.org/2000/svg";
  const add=(tag:string,attrs:Record<string,string|number>,txt?:string)=>{const el=document.createElementNS(ns,tag); Object.entries(attrs).forEach(([k,v])=>el.setAttribute(k,String(v))); if(txt!=null)el.textContent=txt; svg.appendChild(el); return el;};
  [0,.25,.5,.75,1].forEach(p=>{const v=min+(max-min)*p,y=Y(v);add("line",{x1:L,x2:W-R,y1:y,y2:y,class:"chart-grid"});add("text",{x:L-12,y:y+4,"text-anchor":"end",class:"chart-axis"},COMPACT.format(v));});
  if(min<0&&max>0)add("line",{x1:L,x2:W-R,y1:Y(0),y2:Y(0),class:"chart-zero"});
  add("path",{d:pts.map((p,i)=>`${i?'L':'M'}${X(i).toFixed(2)} ${Y(p.pnlGross as number).toFixed(2)}`).join(" "),class:"chart-line"});
  [0,Math.floor((pts.length-1)/2),pts.length-1].forEach((i,pos)=>add("text",{x:X(i),y:H-11,"text-anchor":pos===0?"start":pos===2?"end":"middle",class:"chart-axis"},formatDate(pts[i].date)));
}

function renderHistory(data: HistoryPoint[]) {
  $("historyCount").textContent = `${data.length} pontos no protótipo`;
  $("historyBody").innerHTML = [...data].reverse().slice(0,28).map(r=>`<tr><td>${formatDate(r.date)}</td><td>${esc(r.statusPoint||"—")}</td><td>${money(r.appliedValue)}</td><td>${money(r.grossValue)}</td><td>${money(r.redemptionValue)}</td><td class="${tone(r.pnlGross)}">${money(r.pnlGross)}</td><td class="${tone(r.pnlChange)}">${money(r.pnlChange)}</td></tr>`).join("");
}

["search","classFilter","statusFilter"].forEach(id => $(id).addEventListener(id==="search"?"input":"change",renderPositions));
renderPortfolioKpis(); renderPositions(); renderDetail();
