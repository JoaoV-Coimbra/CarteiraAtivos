import type { AssetIndexerKind } from "./lib/indexers";

export interface AssetSummary {
  assetId: string;
  assetClass: string;
  code: string;
  subtype?: string | null;
  indexer?: AssetIndexerKind | null;
  issuerOrFund?: string | null;
  paper?: string | null;
  firstSeen: string;
  lastSeen: string;
  observations: number;
  status: string;
  appliedValue?: number | null;
  grossValue?: number | null;
  redemptionValue?: number | null;
  pnlGross?: number | null;
  pnlMin?: number | null;
  pnlMax?: number | null;
  qualityNote?: string | null;
}

export interface HistoryPoint {
  date: string;
  appliedValue?: number | null;
  grossValue?: number | null;
  redemptionValue?: number | null;
  pnlGross?: number | null;
  pnlChange?: number | null;
  statusPoint?: string | null;
}

const PREFIXED_EXAMPLE_INITIAL_VALUE = 100000;
const PREFIXED_EXAMPLE_ANNUAL_RATE = 13;
const PREFIXED_EXAMPLE_DATES = [
  "2025-01-02",
  "2025-02-03",
  "2025-03-03",
  "2025-04-01",
  "2025-05-02",
  "2025-06-02",
  "2025-07-01",
  "2025-08-01",
  "2025-09-01",
  "2025-10-01",
  "2025-11-03",
  "2025-12-01",
  "2026-01-02",
  "2026-02-02",
  "2026-03-02",
  "2026-04-01",
  "2026-05-04",
  "2026-06-01",
  "2026-07-01",
  "2026-08-03",
  "2026-09-01",
  "2026-09-27",
] as const;

function parseIsoDate(value: string) {
  return new Date(`${value}T00:00:00`);
}

function isoDate(date: Date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
}

function businessDaysBetween(startDate: string, endDate: string) {
  const start = parseIsoDate(startDate);
  const end = parseIsoDate(endDate);
  const days: string[] = [];

  for (let cursor = new Date(start); cursor <= end; cursor.setDate(cursor.getDate() + 1)) {
    const day = cursor.getDay();

    if (day !== 0 && day !== 6) {
      days.push(isoDate(cursor));
    }
  }

  return days;
}

let prefixedExamplePreviousPnl = 0;

const PREFIXED_EXAMPLE_HISTORY: HistoryPoint[] = PREFIXED_EXAMPLE_DATES.map((date, index, dates) => {
  const days = businessDaysBetween(dates[0], date).filter((businessDay) => businessDay > dates[0]);
  const factor = (1 + PREFIXED_EXAMPLE_ANNUAL_RATE / 100) ** (days.length / 252);
  const grossValue = Number((PREFIXED_EXAMPLE_INITIAL_VALUE * factor).toFixed(2));
  const pnlGross = Number((grossValue - PREFIXED_EXAMPLE_INITIAL_VALUE).toFixed(2));
  const pnlChange = index === 0 ? 0 : Number((pnlGross - prefixedExamplePreviousPnl).toFixed(2));

  prefixedExamplePreviousPnl = pnlGross;

  return {
    date,
    appliedValue: PREFIXED_EXAMPLE_INITIAL_VALUE,
    grossValue,
    redemptionValue: null,
    pnlGross,
    pnlChange,
    statusPoint: "Prefixado 13% a.a.",
  };
});

export const ASSETS: AssetSummary[] = [
  {
    assetId: "DEMO|PRE13-2025",
    assetClass: "Exemplo",
    code: "PRE13-2025",
    subtype: "Prefixado 13% a.a.",
    indexer: "PREFIXED",
    issuerOrFund: "Emitente Exemplo",
    paper: "Exemplo desde 2025",
    firstSeen: PREFIXED_EXAMPLE_HISTORY[0].date,
    lastSeen: PREFIXED_EXAMPLE_HISTORY[PREFIXED_EXAMPLE_HISTORY.length - 1].date,
    observations: PREFIXED_EXAMPLE_HISTORY.length,
    status: "Em carteira no exemplo",
    appliedValue: PREFIXED_EXAMPLE_INITIAL_VALUE,
    grossValue: PREFIXED_EXAMPLE_HISTORY[PREFIXED_EXAMPLE_HISTORY.length - 1].grossValue,
    redemptionValue: null,
    pnlGross: PREFIXED_EXAMPLE_HISTORY[PREFIXED_EXAMPLE_HISTORY.length - 1].pnlGross,
    pnlMin: Math.min(...PREFIXED_EXAMPLE_HISTORY.map((point) => point.pnlGross ?? 0)),
    pnlMax: Math.max(...PREFIXED_EXAMPLE_HISTORY.map((point) => point.pnlGross ?? 0)),
    qualityNote: "Exemplo demonstrativo de ativo prefixado a 13% a.a. com accrual por dias úteis desde 2025.",
  },
  {
    assetId: "DEMO|EXEMPLO001",
    assetClass: "Exemplo",
    code: "EXEMPLO001",
    subtype: "Modelo público",
    issuerOrFund: "Emitente Exemplo",
    paper: "Planilha modelo",
    firstSeen: "2026-09-01",
    lastSeen: "2026-09-27",
    observations: 2,
    status: "Em carteira no exemplo",
    appliedValue: 100000,
    grossValue: 104250.5,
    redemptionValue: null,
    pnlGross: 4250.5,
    pnlMin: 0,
    pnlMax: 4250.5,
    qualityNote: "Dado demonstrativo. Substitua por importações no cadastro ou mantenha sua base local fora do Git.",
  },
];

export const HISTORY: Record<string, HistoryPoint[]> = {
  "DEMO|PRE13-2025": PREFIXED_EXAMPLE_HISTORY,
  "DEMO|EXEMPLO001": [
    {
      date: "2026-09-01",
      appliedValue: 100000,
      grossValue: 100000,
      redemptionValue: null,
      pnlGross: 0,
      pnlChange: 0,
      statusPoint: "Exemplo",
    },
    {
      date: "2026-09-27",
      appliedValue: 100000,
      grossValue: 104250.5,
      redemptionValue: null,
      pnlGross: 4250.5,
      pnlChange: 4250.5,
      statusPoint: "Exemplo",
    },
  ],
};
