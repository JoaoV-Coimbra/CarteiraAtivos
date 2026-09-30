export type AssetIndexerKind = "CDI" | "IPCA" | "INPC" | "PREFIXED";

export type AssetIndexerFrequency = "daily" | "monthly" | "contractual";

export type AssetIndexerSource = "bcb_sgs" | "b3_taxa_di" | "ibge_sidra" | "contract";

export type AssetIndexerDefinition = {
  kind: AssetIndexerKind;
  label: string;
  source: AssetIndexerSource;
  frequency: AssetIndexerFrequency;
  updatePolicy: "daily_official_rate" | "monthly_official_release" | "asset_contract";
};

export const ASSET_INDEXERS = {
  CDI: {
    kind: "CDI",
    label: "CDI",
    source: "bcb_sgs",
    frequency: "monthly",
    updatePolicy: "monthly_official_release",
  },
  IPCA: {
    kind: "IPCA",
    label: "IPCA",
    source: "ibge_sidra",
    frequency: "monthly",
    updatePolicy: "monthly_official_release",
  },
  INPC: {
    kind: "INPC",
    label: "INPC",
    source: "ibge_sidra",
    frequency: "monthly",
    updatePolicy: "monthly_official_release",
  },
  PREFIXED: {
    kind: "PREFIXED",
    label: "Prefixado",
    source: "contract",
    frequency: "contractual",
    updatePolicy: "asset_contract",
  },
} as const satisfies Record<AssetIndexerKind, AssetIndexerDefinition>;

export type RegisteredAssetIndexerDraft =
  | {
      indexer: "CDI";
      cdiPercent: number;
      annualSpreadPercent?: number;
    }
  | {
      indexer: "IPCA" | "INPC";
      annualSpreadPercent: number;
    }
  | {
      indexer: "PREFIXED";
      annualRatePercent: number;
    };

export const B3_TAXA_DI_FILE_SOURCE = {
  ftpBaseUrl: "ftp://ftp.cetip.com.br/MediaCDI",
  httpBaseUrl: "http://di.cetip.com.br/MediaCDI",
  fileNamePattern: "yyyyMMdd.txt",
  rawRateFormat: "9 digits with 2 implicit decimal places. Example: 000002320 = 23.20%.",
} as const;

export function buildB3TaxaDiFileUrl(date: Date | string, protocol: "ftp" | "http" = "ftp") {
  const baseUrl =
    protocol === "ftp" ? B3_TAXA_DI_FILE_SOURCE.ftpBaseUrl : B3_TAXA_DI_FILE_SOURCE.httpBaseUrl;

  return `${baseUrl}/${toDateKey(date)}.txt`;
}

export function parseB3TaxaDiRawRate(rawRate: string) {
  const digits = rawRate.replace(/\D/g, "");

  if (!digits) {
    return null;
  }

  const whole = digits.slice(0, -2) || "0";
  const cents = digits.slice(-2).padStart(2, "0");
  const rate = Number(`${whole}.${cents}`);

  return Number.isFinite(rate) ? rate : null;
}

export type IbgeMonthlyInflationIndexer = Extract<AssetIndexerKind, "IPCA" | "INPC">;

export const IBGE_MONTHLY_INFLATION_SERIES = {
  IPCA: {
    aggregateId: "1737",
    monthlyVariationVariableId: "63",
    description: "IPCA - variação mensal oficial, Brasil.",
  },
  INPC: {
    aggregateId: "1736",
    monthlyVariationVariableId: "44",
    description: "INPC - variação mensal oficial, Brasil.",
  },
} as const satisfies Record<
  IbgeMonthlyInflationIndexer,
  {
    aggregateId: string;
    monthlyVariationVariableId: string;
    description: string;
  }
>;

export const IBGE_AGGREGATES_API_BASE_URL = "https://servicodados.ibge.gov.br/api/v3/agregados";
export const BCB_SGS_API_BASE_URL = "https://api.bcb.gov.br/dados/serie/bcdata.sgs";
export const BCB_CDI_MONTHLY_SERIES_CODE = "4391";

export type OfficialMonthlyInflationRate = {
  indexer: IbgeMonthlyInflationIndexer;
  period: string;
  isoMonth: string;
  monthlyRatePercent: number;
};

export type OfficialMonthlyCdiRate = {
  indexer: "CDI";
  period: string;
  isoMonth: string;
  monthlyRatePercent: number;
};

type BcbSgsApiResponse = Array<{
  data: string;
  valor: string;
}>;

type IbgeAggregateApiResponse = Array<{
  resultados?: Array<{
    series?: Array<{
      serie?: Record<string, string>;
    }>;
  }>;
}>;

export function buildIbgeMonthlyInflationUrl(
  indexer: IbgeMonthlyInflationIndexer,
  periods: string = "-12",
) {
  const series = IBGE_MONTHLY_INFLATION_SERIES[indexer];
  const params = new URLSearchParams({ localidades: "N1[all]" });

  return `${IBGE_AGGREGATES_API_BASE_URL}/${series.aggregateId}/periodos/${periods}/variaveis/${series.monthlyVariationVariableId}?${params}`;
}

export async function fetchIbgeMonthlyInflation(
  indexer: IbgeMonthlyInflationIndexer,
  periods: string = "-12",
  fetcher: typeof fetch = fetch,
) {
  const response = await fetcher(buildIbgeMonthlyInflationUrl(indexer, periods));

  if (!response.ok) {
    throw new Error(`IBGE inflation request failed with status ${response.status}.`);
  }

  return parseIbgeMonthlyInflationResponse(indexer, await response.json());
}

export function buildBcbMonthlyCdiUrl(lastValues: number = 600) {
  return `${BCB_SGS_API_BASE_URL}.${BCB_CDI_MONTHLY_SERIES_CODE}/dados/ultimos/${lastValues}?formato=json`;
}

export async function fetchBcbMonthlyCdi(lastValues: number = 600, fetcher: typeof fetch = fetch) {
  const response = await fetcher(buildBcbMonthlyCdiUrl(lastValues));

  if (!response.ok) {
    throw new Error(`BCB CDI request failed with status ${response.status}.`);
  }

  return parseBcbMonthlyCdiResponse(await response.json());
}

export function parseBcbMonthlyCdiResponse(payload: unknown): OfficialMonthlyCdiRate[] {
  const rows = Array.isArray(payload) ? (payload as BcbSgsApiResponse) : [];

  return rows
    .map((row) => ({
      indexer: "CDI" as const,
      period: row.data,
      isoMonth: bcbDateToIsoMonth(row.data),
      monthlyRatePercent: parseSidraNumber(row.valor),
    }))
    .filter((row) => row.isoMonth && Number.isFinite(row.monthlyRatePercent));
}

export function parseIbgeMonthlyInflationResponse(
  indexer: IbgeMonthlyInflationIndexer,
  payload: unknown,
): OfficialMonthlyInflationRate[] {
  const [variable] = Array.isArray(payload) ? (payload as IbgeAggregateApiResponse) : [];
  const [result] = variable?.resultados || [];
  const [series] = result?.series || [];
  const rows = series?.serie || {};

  return Object.entries(rows)
    .map(([period, rawValue]) => ({
      indexer,
      period,
      isoMonth: sidraPeriodToIsoMonth(period),
      monthlyRatePercent: parseSidraNumber(rawValue),
    }))
    .filter((row) => Number.isFinite(row.monthlyRatePercent));
}

function parseSidraNumber(value: string) {
  const normalized = value.includes(",") ? value.replace(/\./g, "").replace(",", ".") : value;
  const parsed = Number(normalized);

  return Number.isFinite(parsed) ? parsed : Number.NaN;
}

function sidraPeriodToIsoMonth(period: string) {
  return /^\d{6}$/.test(period) ? `${period.slice(0, 4)}-${period.slice(4, 6)}` : period;
}

function bcbDateToIsoMonth(value: string) {
  const match = value.match(/^(\d{2})\/(\d{2})\/(\d{4})$/);

  return match ? `${match[3]}-${match[2]}` : "";
}

function toDateKey(date: Date | string) {
  if (typeof date === "string") {
    const compact = date.replace(/\D/g, "");

    if (compact.length === 8) {
      return compact;
    }

    throw new Error("B3 Taxa DI date must be yyyyMMdd or yyyy-MM-dd.");
  }

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}${month}${day}`;
}
