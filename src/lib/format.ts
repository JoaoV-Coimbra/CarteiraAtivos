import type { AssetSummary } from "../data";

// Intl: centraliza os formatos brasileiros usados na interface.
const BRL = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  minimumFractionDigits: 2,
  maximumFractionDigits: 2,
});

export const COMPACT_BRL = new Intl.NumberFormat("pt-BR", {
  style: "currency",
  currency: "BRL",
  notation: "compact",
  maximumFractionDigits: 1,
});

const DATE = new Intl.DateTimeFormat("pt-BR");

export const money = (value?: number | null) => (value == null ? "—" : BRL.format(value));

export const formatDate = (value?: string | null) =>
  value ? DATE.format(new Date(`${value}T00:00:00`)) : "—";

export const tone = (value?: number | null) =>
  value == null || value === 0 ? "" : value > 0 ? "positive" : "negative";

export const isOpen = (asset: AssetSummary) => asset.status.startsWith("Em carteira");

// Corrige textos que vieram da base com encoding quebrado.
export const cleanText = (value?: string | null) => {
  if (!value) {
    return "—";
  }

  let text = value;

  for (let index = 0; index < 2; index += 1) {
    try {
      text = decodeURIComponent(escape(text));
    } catch {
      break;
    }
  }

  return text
    .replaceAll("Ã¢â‚¬â€", "—")
    .replaceAll("Ã‚Â·", "·")
    .replaceAll("ÃƒÂº", "ú")
    .replaceAll("ÃƒÅ¡", "Ú")
    .replaceAll("ÃƒÂ©", "é")
    .replaceAll("ÃƒÂ£", "ã")
    .replaceAll("ÃƒÂ§", "ç")
    .replaceAll("ÃƒÂµ", "õ")
    .replaceAll("ÃƒÂ¡", "á")
    .replaceAll("ÃƒÂ³", "ó")
    .replaceAll("ÃƒÂª", "ê")
    .replaceAll("ÃƒÂ­", "í");
};

export const assetLabel = (asset: AssetSummary) =>
  cleanText(asset.issuerOrFund || asset.paper || asset.subtype || asset.assetClass);
