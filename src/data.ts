export interface AssetSummary {
  assetId: string;
  assetClass: string;
  code: string;
  subtype?: string | null;
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

export const ASSETS: AssetSummary[] = [
  {
    assetId: "DEMO|EXEMPLO001",
    assetClass: "Exemplo",
    code: "EXEMPLO001",
    subtype: "Modelo publico",
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
    qualityNote: "Dado demonstrativo. Substitua por importacoes no cadastro ou mantenha sua base local fora do Git.",
  },
];

export const HISTORY: Record<string, HistoryPoint[]> = {
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
