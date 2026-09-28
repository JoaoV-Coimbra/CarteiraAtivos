export type RegisteredAssetRow = {
  id: string;
  code: string;
  issuer: string;
  appliedValue: number;
  liquidValue: number;
  date: string;
  source: "Formulario" | "Planilha";
  createdAt: string;
};

const REGISTERED_ASSETS_CSV_STORAGE_KEY = "projeto-arvore.registered-assets.csv";
const LEGACY_REGISTERED_ASSETS_JSON_STORAGE_KEY = "projeto-arvore.registered-assets";

const REGISTERED_ASSETS_HEADERS = [
  "Id",
  "Codigo",
  "Emitente",
  "Valor Aplicado",
  "Valor Liquido",
  "Data",
  "Origem",
  "Criado Em",
] as const;

export function normalizeHeader(value: string) {
  return value
    .trim()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

export function splitDelimitedLine(line: string, delimiter: string) {
  const cells: string[] = [];
  let current = "";
  let quoted = false;

  for (let index = 0; index < line.length; index += 1) {
    const char = line[index];
    const next = line[index + 1];

    if (char === '"' && next === '"') {
      current += '"';
      index += 1;
    } else if (char === '"') {
      quoted = !quoted;
    } else if (char === delimiter && !quoted) {
      cells.push(current.trim());
      current = "";
    } else {
      current += char;
    }
  }

  cells.push(current.trim());
  return cells;
}

export function detectDelimiter(line: string) {
  const candidates = [";", "\t", ","];
  return candidates
    .map((delimiter) => ({ delimiter, count: splitDelimitedLine(line, delimiter).length }))
    .sort((a, b) => b.count - a.count)[0].delimiter;
}

function csvEscape(value: string | number | null | undefined) {
  const text = value == null ? "" : String(value);

  return /[";\n\r]/.test(text) ? `"${text.replaceAll('"', '""')}"` : text;
}

function numberToCsv(value: number) {
  return value.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

function csvNumberToNumber(value: string) {
  const cleaned = value.replace(/\s/g, "").replace("R$", "").replace(/[^\d,.-]/g, "");

  if (!cleaned) {
    return null;
  }

  const commaIndex = cleaned.lastIndexOf(",");
  const dotIndex = cleaned.lastIndexOf(".");
  const normalized =
    commaIndex > dotIndex
      ? cleaned.replace(/\./g, "").replace(",", ".")
      : cleaned.replace(/,/g, "");
  const parsed = Number(normalized);

  return Number.isFinite(parsed) ? parsed : null;
}

export function registeredRowsToCsv(rows: RegisteredAssetRow[]) {
  const lines = [
    REGISTERED_ASSETS_HEADERS.map(csvEscape).join(";"),
    ...rows.map((row) =>
      [
        row.id,
        row.code,
        row.issuer,
        numberToCsv(row.appliedValue),
        numberToCsv(row.liquidValue),
        row.date,
        row.source,
        row.createdAt,
      ]
        .map(csvEscape)
        .join(";"),
    ),
  ];

  return lines.join("\n");
}

export function registeredRowsFromCsv(csv: string) {
  const lines = csv
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 2) {
    return [];
  }

  const delimiter = detectDelimiter(lines[0]);
  const headers = splitDelimitedLine(lines[0], delimiter).map(normalizeHeader);
  const index = {
    id: headers.findIndex((header) => header === "id"),
    code: headers.findIndex((header) => ["codigo", "code"].includes(header)),
    issuer: headers.findIndex((header) => ["emitente", "emissor", "issuer"].includes(header)),
    appliedValue: headers.findIndex((header) => ["valoraplicado", "aplicado", "valorinvestido"].includes(header)),
    liquidValue: headers.findIndex((header) => ["valorliquido", "liquido", "valoratual", "valorbruto"].includes(header)),
    date: headers.findIndex((header) => ["data", "date"].includes(header)),
    source: headers.findIndex((header) => ["origem", "source"].includes(header)),
    createdAt: headers.findIndex((header) => ["criadoem", "createdat"].includes(header)),
  };

  if (index.code < 0 || index.issuer < 0 || index.appliedValue < 0 || index.liquidValue < 0 || index.date < 0) {
    return [];
  }

  return lines.slice(1).flatMap((line) => {
    const cells = splitDelimitedLine(line, delimiter);
    const code = (cells[index.code] || "").trim().toUpperCase();
    const issuer = (cells[index.issuer] || "").trim();
    const appliedValue = csvNumberToNumber(cells[index.appliedValue] || "");
    const liquidValue = csvNumberToNumber(cells[index.liquidValue] || "");
    const date = (cells[index.date] || "").trim();

    if (!code || !issuer || appliedValue == null || liquidValue == null || !date) {
      return [];
    }

    return [
      {
        id: cells[index.id] || `${code}-${date}-${crypto.randomUUID()}`,
        code,
        issuer,
        appliedValue,
        liquidValue,
        date,
        source: cells[index.source] === "Planilha" ? "Planilha" : "Formulario",
        createdAt: cells[index.createdAt] || new Date().toISOString(),
      } satisfies RegisteredAssetRow,
    ];
  });
}

export function loadRegisteredRows() {
  const csv = localStorage.getItem(REGISTERED_ASSETS_CSV_STORAGE_KEY);

  if (csv) {
    return registeredRowsFromCsv(csv);
  }

  try {
    const legacyJson = localStorage.getItem(LEGACY_REGISTERED_ASSETS_JSON_STORAGE_KEY);
    const parsed = legacyJson ? (JSON.parse(legacyJson) as RegisteredAssetRow[]) : [];

    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

export function saveRegisteredRows(rows: RegisteredAssetRow[]) {
  localStorage.setItem(REGISTERED_ASSETS_CSV_STORAGE_KEY, registeredRowsToCsv(rows));
  localStorage.removeItem(LEGACY_REGISTERED_ASSETS_JSON_STORAGE_KEY);
}

export function downloadCsvFile(filename: string, csv: string) {
  const blob = new Blob([`\uFEFF${csv}`], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}
