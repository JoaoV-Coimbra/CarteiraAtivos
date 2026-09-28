import { useEffect, useMemo, useState } from "react";
import {
  BarChart3,
  CalendarDays,
  CircleDollarSign,
  ClipboardList,
  FileSpreadsheet,
  Layers3,
  LineChart,
  Plus,
  Search,
  Settings,
  Trash2,
  TrendingDown,
  TrendingUp,
  Upload,
  WalletCards,
} from "lucide-react";

import { PnlChart } from "./components/PnlChart";
import { ASSETS, HISTORY, type AssetSummary, type HistoryPoint } from "./data";
import { assetLabel, cleanText, formatDate, isOpen, money, tone } from "./lib/format";
import {
  detectDelimiter,
  downloadCsvFile,
  loadRegisteredRows,
  normalizeHeader,
  registeredRowsToCsv,
  saveRegisteredRows,
  splitDelimitedLine,
  type RegisteredAssetRow,
} from "./lib/registeredAssetsCsv";

const navItems = [
  { label: "Vida dos Ativos", icon: LineChart },
  { label: "Lista de Ativos", icon: Layers3 },
  { label: "Cadastro de Ativos", icon: ClipboardList },
  { label: "Historico", icon: CalendarDays },
  { label: "Configuracoes", icon: Settings },
] as const;

type NavLabel = (typeof navItems)[number]["label"];

type AssetFormState = {
  code: string;
  issuer: string;
  appliedValue: string;
  liquidValue: string;
  date: string;
};

type ImportResult = {
  rows: RegisteredAssetRow[];
  errors: string[];
};

const EMPTY_ASSET_FORM: AssetFormState = {
  code: "",
  issuer: "",
  appliedValue: "",
  liquidValue: "",
  date: new Date().toISOString().slice(0, 10),
};

function percent(value: number) {
  return `${value.toLocaleString("pt-BR", { minimumFractionDigits: 1, maximumFractionDigits: 1 })}%`;
}

function searchableText(asset: AssetSummary) {
  return `${asset.code} ${assetLabel(asset)} ${cleanText(asset.paper)} ${cleanText(asset.subtype)} ${cleanText(asset.assetClass)}`.toLowerCase();
}

function filteredAssets(assets: AssetSummary[], query: string, statusFilter: string) {
  const normalized = query.trim().toLowerCase();

  return assets.filter((asset) => {
    const matchesSearch = searchableText(asset).includes(normalized);
    const matchesStatus =
      statusFilter === "Todos" || (statusFilter === "Em carteira" ? isOpen(asset) : !isOpen(asset));

    return matchesSearch && matchesStatus;
  });
}

function sortByPnlImpact(assets: AssetSummary[]) {
  return [...assets].sort((a, b) => Math.abs(b.pnlGross ?? 0) - Math.abs(a.pnlGross ?? 0));
}

function sortByCurrentValue(assets: AssetSummary[]) {
  return [...assets].sort((a, b) => (assetCurrentValue(b) ?? 0) - (assetCurrentValue(a) ?? 0));
}

function assetCurrentValue(asset: AssetSummary) {
  return asset.grossValue ?? asset.redemptionValue ?? null;
}

function assetAppliedValue(asset: AssetSummary) {
  return asset.appliedValue ?? null;
}

function parseMoneyInput(value: string) {
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

function parseDateInput(value: string) {
  const trimmed = value.trim();

  if (/^\d{4}-\d{2}-\d{2}$/.test(trimmed)) {
    return trimmed;
  }

  const match = trimmed.match(/^(\d{1,2})[/-](\d{1,2})[/-](\d{4})$/);

  if (!match) {
    return null;
  }

  const [, day, month, year] = match;
  const iso = `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  const date = new Date(`${iso}T00:00:00`);

  return Number.isNaN(date.getTime()) ? null : iso;
}

function createRegisteredRow(
  values: AssetFormState,
  source: RegisteredAssetRow["source"],
): { row: RegisteredAssetRow | null; error: string | null } {
  const code = values.code.trim().toUpperCase();
  const issuer = values.issuer.trim();
  const appliedValue = parseMoneyInput(values.appliedValue);
  const liquidValue = parseMoneyInput(values.liquidValue);
  const date = parseDateInput(values.date);

  if (!code || !issuer || appliedValue == null || liquidValue == null || !date) {
    return {
      row: null,
      error: "Preencha codigo, emitente, valores validos e data.",
    };
  }

  return {
    row: {
      id: `${code}-${date}-${crypto.randomUUID()}`,
      code,
      issuer,
      appliedValue,
      liquidValue,
      date,
      source,
      createdAt: new Date().toISOString(),
    },
    error: null,
  };
}

function parseAssetSpreadsheet(text: string): ImportResult {
  const lines = text
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 2) {
    return { rows: [], errors: ["A planilha precisa ter cabecalho e pelo menos uma linha de ativo."] };
  }

  const delimiter = detectDelimiter(lines[0]);
  const headers = splitDelimitedLine(lines[0], delimiter).map(normalizeHeader);
  const columnIndex = {
    code: headers.findIndex((header) => ["codigo", "cod", "code"].includes(header)),
    issuer: headers.findIndex((header) => ["emitente", "emissor", "issuer"].includes(header)),
    appliedValue: headers.findIndex((header) => ["valoraplicado", "aplicado", "valorinvestido"].includes(header)),
    liquidValue: headers.findIndex((header) => ["valorliquido", "liquido", "valoratual", "valorbruto"].includes(header)),
    date: headers.findIndex((header) => ["data", "date"].includes(header)),
  };

  const missingColumns = Object.entries(columnIndex)
    .filter(([, index]) => index < 0)
    .map(([column]) => column);

  if (missingColumns.length > 0) {
    return {
      rows: [],
      errors: ["Use as colunas: Codigo, Emitente, Valor Aplicado, Valor Liquido, Data."],
    };
  }

  const rows: RegisteredAssetRow[] = [];
  const errors: string[] = [];

  lines.slice(1).forEach((line, index) => {
    const cells = splitDelimitedLine(line, delimiter);
    const result = createRegisteredRow(
      {
        code: cells[columnIndex.code] || "",
        issuer: cells[columnIndex.issuer] || "",
        appliedValue: cells[columnIndex.appliedValue] || "",
        liquidValue: cells[columnIndex.liquidValue] || "",
        date: cells[columnIndex.date] || "",
      },
      "Planilha",
    );

    if (result.row) {
      rows.push(result.row);
    } else {
      errors.push(`Linha ${index + 2}: ${result.error}`);
    }
  });

  return { rows, errors };
}

function buildRegisteredPortfolio(rows: RegisteredAssetRow[]) {
  const grouped = new Map<string, RegisteredAssetRow[]>();

  rows.forEach((row) => {
    const current = grouped.get(row.code) || [];
    current.push(row);
    grouped.set(row.code, current);
  });

  const assets: AssetSummary[] = [];
  const history: Record<string, HistoryPoint[]> = {};

  grouped.forEach((assetRows, code) => {
    const sortedRows = [...assetRows].sort((a, b) => a.date.localeCompare(b.date));
    const points = sortedRows.map((row, index) => {
      const pnlGross = row.liquidValue - row.appliedValue;
      const previousPnl = index > 0 ? sortedRows[index - 1].liquidValue - sortedRows[index - 1].appliedValue : pnlGross;

      return {
        date: row.date,
        appliedValue: row.appliedValue,
        grossValue: row.liquidValue,
        redemptionValue: null,
        pnlGross,
        pnlChange: index === 0 ? 0 : pnlGross - previousPnl,
        statusPoint: "Cadastrado",
      };
    });
    const latestRow = sortedRows[sortedRows.length - 1];
    const pnls = points.map((point) => point.pnlGross ?? 0);
    const assetId = `CAD|${code}`;

    assets.push({
      assetId,
      assetClass: "Cadastro",
      code,
      subtype: "Ativo cadastrado",
      issuerOrFund: latestRow.issuer,
      paper: "",
      firstSeen: sortedRows[0].date,
      lastSeen: latestRow.date,
      observations: sortedRows.length,
      status: "Em carteira no cadastro",
      appliedValue: latestRow.appliedValue,
      grossValue: latestRow.liquidValue,
      redemptionValue: null,
      pnlGross: latestRow.liquidValue - latestRow.appliedValue,
      pnlMin: Math.min(...pnls),
      pnlMax: Math.max(...pnls),
      qualityNote: "Ativo cadastrado manualmente ou via planilha. P&L calculado como Valor Liquido - Valor Aplicado.",
    });

    history[assetId] = points;
  });

  return { assets, history };
}

function downloadSpreadsheetTemplate() {
  const csv = [
    "Codigo;Emitente;Valor Aplicado;Valor Liquido;Data",
    "C285318;Banco Exemplo;100000,00;104250,50;2026-09-27",
  ].join("\n");

  downloadCsvFile("modelo-cadastro-ativos.csv", csv);
}

function filterHistoryByDate(history: HistoryPoint[], periodMode: string, startDate: string, endDate: string) {
  if (periodMode === "Vida completa") {
    return history;
  }

  return history.filter((point) => {
    const afterStart = startDate ? point.date >= startDate : true;
    const beforeEnd = endDate ? point.date <= endDate : true;
    return afterStart && beforeEnd;
  });
}

function bestPoint(history: HistoryPoint[], direction: "gain" | "loss") {
  const values = history.filter((point) => point.pnlGross != null);

  if (values.length === 0) {
    return null;
  }

  return values.reduce((best, current) => {
    const currentValue = current.pnlGross ?? 0;
    const bestValue = best.pnlGross ?? 0;

    return direction === "gain"
      ? currentValue > bestValue
        ? current
        : best
      : currentValue < bestValue
        ? current
        : best;
  }, values[0]);
}

function largestMove(history: HistoryPoint[], direction: "gain" | "loss") {
  const values = history.filter((point) => point.pnlChange != null);

  if (values.length === 0) {
    return null;
  }

  return values.reduce((best, current) => {
    const currentValue = current.pnlChange ?? 0;
    const bestValue = best.pnlChange ?? 0;

    return direction === "gain"
      ? currentValue > bestValue
        ? current
        : best
      : currentValue < bestValue
        ? current
        : best;
  }, values[0]);
}

function StatCard({
  label,
  value,
  hint,
  icon: Icon,
  className = "",
}: {
  label: string;
  value: string;
  hint: string;
  icon: typeof TrendingUp;
  className?: string;
}) {
  return (
    <article className={`stat-card ${className}`}>
      <div className="stat-icon">
        <Icon size={25} />
      </div>
      <div>
        <span>{label}</span>
        <strong>{value}</strong>
        <small>{hint}</small>
      </div>
    </article>
  );
}

function AssetPicker({
  assets,
  selectedAsset,
  setSelectedId,
  statusFilter,
  setStatusFilter,
  totalAssets,
}: {
  assets: AssetSummary[];
  selectedAsset: AssetSummary;
  setSelectedId: (id: string) => void;
  statusFilter: string;
  setStatusFilter: (status: string) => void;
  totalAssets: number;
}) {
  return (
    <aside className="panel asset-list-panel">
      <div className="panel-header">
        <div>
          <h2>Ativos</h2>
          <p>
            {assets.length.toLocaleString("pt-BR")} de {totalAssets.toLocaleString("pt-BR")} ativos carregados.
          </p>
        </div>
        <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
          <option>Todos</option>
          <option>Em carteira</option>
          <option>Encerrados</option>
        </select>
      </div>

      <div className="asset-list">
        {assets.map((asset) => (
          <button
            className={`asset-list-item ${asset.assetId === selectedAsset.assetId ? "active" : ""}`}
            key={asset.assetId}
            onClick={() => setSelectedId(asset.assetId)}
            type="button"
          >
            <span className="asset-symbol">
              <BarChart3 size={17} />
            </span>
            <span>
              <strong>{asset.code}</strong>
              <small>{assetLabel(asset)}</small>
            </span>
          </button>
        ))}
      </div>
    </aside>
  );
}

function PeriodControl({
  periodMode,
  setPeriodMode,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
}: {
  periodMode: string;
  setPeriodMode: (mode: string) => void;
  startDate: string;
  setStartDate: (date: string) => void;
  endDate: string;
  setEndDate: (date: string) => void;
}) {
  return (
    <div className="period-control">
      <CalendarDays size={18} />
      <select value={periodMode} onChange={(event) => setPeriodMode(event.target.value)}>
        <option>Vida completa</option>
        <option>Intervalo</option>
      </select>
      {periodMode === "Intervalo" ? (
        <div className="date-inputs">
          <input
            aria-label="Data inicial"
            type="date"
            value={startDate}
            onChange={(event) => setStartDate(event.target.value)}
          />
          <span>ate</span>
          <input
            aria-label="Data final"
            type="date"
            value={endDate}
            onChange={(event) => setEndDate(event.target.value)}
          />
        </div>
      ) : null}
    </div>
  );
}

function AssetRegistrationPanel({
  form,
  setForm,
  registeredRows,
  importText,
  setImportText,
  importErrors,
  onSubmit,
  onImport,
  onFileImport,
  onExportRows,
  onRemoveRow,
  onClearRows,
}: {
  form: AssetFormState;
  setForm: (form: AssetFormState) => void;
  registeredRows: RegisteredAssetRow[];
  importText: string;
  setImportText: (text: string) => void;
  importErrors: string[];
  onSubmit: () => void;
  onImport: () => void;
  onFileImport: (file: File) => void;
  onExportRows: () => void;
  onRemoveRow: (id: string) => void;
  onClearRows: () => void;
}) {
  const totalApplied = registeredRows.reduce((sum, row) => sum + row.appliedValue, 0);
  const totalLiquid = registeredRows.reduce((sum, row) => sum + row.liquidValue, 0);
  const uniqueCodes = new Set(registeredRows.map((row) => row.code)).size;

  return (
    <section className="registration-grid">
      <article className="panel registration-panel">
        <div className="panel-header">
          <div>
            <h2>Novo ativo</h2>
            <p>Cadastre um ativo individual para acompanhar valor aplicado, valor liquido e historico.</p>
          </div>
        </div>

        <div className="registration-form">
          <label>
            <span>Codigo</span>
            <input
              value={form.code}
              onChange={(event) => setForm({ ...form, code: event.target.value })}
              placeholder="C285318"
            />
          </label>
          <label>
            <span>Emitente</span>
            <input
              value={form.issuer}
              onChange={(event) => setForm({ ...form, issuer: event.target.value })}
              placeholder="Banco, fundo ou empresa"
            />
          </label>
          <label>
            <span>Valor aplicado</span>
            <input
              inputMode="decimal"
              value={form.appliedValue}
              onChange={(event) => setForm({ ...form, appliedValue: event.target.value })}
              placeholder="100.000,00"
            />
          </label>
          <label>
            <span>Valor liquido</span>
            <input
              inputMode="decimal"
              value={form.liquidValue}
              onChange={(event) => setForm({ ...form, liquidValue: event.target.value })}
              placeholder="103.250,00"
            />
          </label>
          <label>
            <span>Data</span>
            <input
              type="date"
              value={form.date}
              onChange={(event) => setForm({ ...form, date: event.target.value })}
            />
          </label>
          <button className="primary-action" type="button" onClick={onSubmit}>
            <Plus size={18} />
            <span>Cadastrar ativo</span>
          </button>
        </div>
      </article>

      <article className="panel import-panel">
        <div className="panel-header">
          <div>
            <h2>Entrada por planilha</h2>
            <p>Modelo aceito: Codigo, Emitente, Valor Aplicado, Valor Liquido, Data.</p>
          </div>
          <div className="template-actions">
            <button className="secondary-action" type="button" onClick={downloadSpreadsheetTemplate}>
              <FileSpreadsheet size={18} />
              <span>Baixar modelo</span>
            </button>
            <label className="file-import-button">
              <Upload size={18} />
              <span>Importar arquivo</span>
              <input
                accept=".csv,.txt,.tsv"
                type="file"
                onChange={(event) => {
                  const file = event.target.files?.[0];
                  if (file) {
                    onFileImport(file);
                  }
                  event.currentTarget.value = "";
                }}
              />
            </label>
          </div>
        </div>

        <div className="import-body">
          <textarea
            value={importText}
            onChange={(event) => setImportText(event.target.value)}
            placeholder={"Codigo;Emitente;Valor Aplicado;Valor Liquido;Data\nC285318;Banco Exemplo;100000,00;104250,50;2026-09-27"}
          />
          <div className="import-actions">
            <button className="secondary-action" type="button" onClick={onImport}>
              <FileSpreadsheet size={18} />
              <span>Processar planilha</span>
            </button>
            <span>{registeredRows.length.toLocaleString("pt-BR")} linhas cadastradas</span>
          </div>
          {importErrors.length > 0 ? (
            <div className="import-errors">
              {importErrors.slice(0, 4).map((error) => (
                <span key={error}>{error}</span>
              ))}
            </div>
          ) : null}
        </div>
      </article>

      <article className="panel registered-summary-panel">
        <div className="asset-table-summary">
          <StatCard icon={Layers3} label="Ativos cadastrados" value={uniqueCodes.toLocaleString("pt-BR")} hint="Codigos unicos" />
          <StatCard icon={WalletCards} label="Valor aplicado" value={money(totalApplied)} hint="Soma cadastrada" />
          <StatCard icon={CircleDollarSign} label="Valor liquido" value={money(totalLiquid)} hint="Soma cadastrada" />
        </div>
      </article>

      <article className="panel registered-table-panel">
        <div className="panel-header">
          <div>
            <h2>Ativos cadastrados</h2>
            <p>As linhas importadas entram na lista geral, no historico e no grafico do ativo.</p>
          </div>
          <div className="template-actions">
            <button className="secondary-action" type="button" onClick={onExportRows} disabled={registeredRows.length === 0}>
              <FileSpreadsheet size={17} />
              <span>Baixar cadastros CSV</span>
            </button>
            <button className="danger-action" type="button" onClick={onClearRows} disabled={registeredRows.length === 0}>
              <Trash2 size={17} />
              <span>Limpar cadastro</span>
            </button>
          </div>
        </div>

        <div className="table-wrap asset-table-wrap">
          <table>
            <thead>
              <tr>
                <th>Codigo</th>
                <th>Emitente</th>
                <th>Origem</th>
                <th>Valor aplicado</th>
                <th>Valor liquido</th>
                <th>Data</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {[...registeredRows].reverse().map((row) => (
                <tr key={row.id}>
                  <td>
                    <strong>{row.code}</strong>
                  </td>
                  <td>{row.issuer}</td>
                  <td>{row.source}</td>
                  <td>{money(row.appliedValue)}</td>
                  <td>{money(row.liquidValue)}</td>
                  <td>{formatDate(row.date)}</td>
                  <td>
                    <button
                      aria-label={`Remover ${row.code}`}
                      className="icon-action danger"
                      type="button"
                      onClick={() => onRemoveRow(row.id)}
                    >
                      <Trash2 size={16} />
                    </button>
                  </td>
                </tr>
              ))}
              {registeredRows.length === 0 ? (
                <tr>
                  <td colSpan={7}>Nenhum ativo cadastrado ainda.</td>
                </tr>
              ) : null}
            </tbody>
          </table>
        </div>
      </article>
    </section>
  );
}

function App() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("Todos");
  const [selectedId, setSelectedId] = useState("RF|C285318");
  const [activeTab, setActiveTab] = useState<NavLabel>("Vida dos Ativos");
  const [periodMode, setPeriodMode] = useState("Vida completa");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [assetForm, setAssetForm] = useState<AssetFormState>(EMPTY_ASSET_FORM);
  const [registeredRows, setRegisteredRows] = useState<RegisteredAssetRow[]>(loadRegisteredRows);
  const [importText, setImportText] = useState("");
  const [importErrors, setImportErrors] = useState<string[]>([]);

  useEffect(() => {
    saveRegisteredRows(registeredRows);
  }, [registeredRows]);

  const registeredPortfolio = useMemo(() => buildRegisteredPortfolio(registeredRows), [registeredRows]);
  const allAssets = useMemo(
    () => [...registeredPortfolio.assets, ...ASSETS],
    [registeredPortfolio.assets],
  );
  const allHistory = useMemo(
    () => ({ ...HISTORY, ...registeredPortfolio.history }),
    [registeredPortfolio.history],
  );
  const matchingAssets = useMemo(() => filteredAssets(allAssets, search, statusFilter), [allAssets, search, statusFilter]);
  const impactAssets = useMemo(() => sortByPnlImpact(matchingAssets), [matchingAssets]);
  const listedAssets = useMemo(() => sortByCurrentValue(matchingAssets), [matchingAssets]);
  const totalAssets = allAssets.length;
  const selectedAsset = allAssets.find((asset) => asset.assetId === selectedId) || impactAssets[0] || allAssets[0];
  const selectedHistory = allHistory[selectedAsset.assetId] || [];
  const periodHistory = useMemo(
    () => filterHistoryByDate(selectedHistory, periodMode, startDate, endDate),
    [selectedHistory, periodMode, startDate, endDate],
  );
  const latestPoint = periodHistory[periodHistory.length - 1];
  const firstPoint = periodHistory[0];
  const maxGainPoint = bestPoint(periodHistory, "gain");
  const maxLossPoint = bestPoint(periodHistory, "loss");
  const bestMovePoint = largestMove(periodHistory, "gain");
  const worstMovePoint = largestMove(periodHistory, "loss");
  const selectedReturn =
    selectedAsset.appliedValue && selectedAsset.appliedValue > 0
      ? ((selectedAsset.pnlGross ?? 0) / selectedAsset.appliedValue) * 100
      : 0;

  const openCount = allAssets.filter(isOpen).length;
  const totalApplied = listedAssets.reduce((sum, asset) => sum + (assetAppliedValue(asset) ?? 0), 0);
  const totalCurrent = listedAssets.reduce((sum, asset) => sum + (assetCurrentValue(asset) ?? 0), 0);
  const periodStartLabel = formatDate(firstPoint?.date || selectedAsset.firstSeen);
  const periodEndLabel = formatDate(latestPoint?.date || selectedAsset.lastSeen);
  const tabTitle =
    activeTab === "Lista de Ativos"
      ? "Lista de Ativos"
      : activeTab === "Cadastro de Ativos"
        ? "Cadastro de Ativos"
      : activeTab === "Historico"
        ? "Historico do Ativo"
        : activeTab === "Configuracoes"
          ? "Configuracoes"
          : "Vida dos Ativos";
  const tabDescription =
    activeTab === "Lista de Ativos"
      ? "Visao geral dos ativos com valor aplicado e valor atual da carteira."
      : activeTab === "Cadastro de Ativos"
        ? "Cadastre ativos manualmente ou importe uma planilha no modelo definido."
      : activeTab === "Historico"
        ? "Registros diarios do ativo selecionado dentro do periodo escolhido."
        : activeTab === "Configuracoes"
          ? "Preferencias visuais e filtros padrao."
          : "Selecione um ativo para enxergar seu ciclo, seus piores momentos e seus melhores ganhos.";

  const handleManualSubmit = () => {
    const result = createRegisteredRow(assetForm, "Formulario");

    if (!result.row) {
      setImportErrors([result.error || "Nao foi possivel cadastrar o ativo."]);
      return;
    }

    setRegisteredRows((currentRows) => [...currentRows, result.row as RegisteredAssetRow]);
    setAssetForm(EMPTY_ASSET_FORM);
    setImportErrors([]);
    setSelectedId(`CAD|${result.row.code}`);
    setActiveTab("Vida dos Ativos");
  };

  const handleImportRows = (text: string) => {
    const result = parseAssetSpreadsheet(text);

    if (result.rows.length > 0) {
      setRegisteredRows((currentRows) => [...currentRows, ...result.rows]);
      setSelectedId(`CAD|${result.rows[0].code}`);
      setActiveTab("Vida dos Ativos");
      setImportText("");
    }

    setImportErrors(result.errors);
  };

  const handleFileImport = (file: File) => {
    const reader = new FileReader();

    reader.onload = () => handleImportRows(String(reader.result || ""));
    reader.onerror = () => setImportErrors(["Nao foi possivel ler o arquivo selecionado."]);
    reader.readAsText(file);
  };

  return (
    <div className="asset-shell">
      <aside className="sidebar">
        <div className="brand">
          <div className="brand-mark">
            <LineChart size={25} />
          </div>
          <div>
            <strong>Vida dos Ativos</strong>
            <span>Historico. Valor. Carteira.</span>
          </div>
        </div>

        <nav className="nav-list">
          {navItems.map(({ label, icon: Icon }) => (
            <button
              className={`nav-item ${activeTab === label ? "active" : ""}`}
              key={label}
              onClick={() => setActiveTab(label)}
              type="button"
            >
              <Icon size={20} />
              <span>{label}</span>
            </button>
          ))}
        </nav>

      </aside>

      <main className="asset-main">
        <header className="asset-header">
          <div>
            <span className="eyebrow">Carteira</span>
            <h1>{tabTitle}</h1>
            <p>{tabDescription}</p>
          </div>

          <div className="header-actions">
            <label className="search-box">
              <Search size={19} />
              <input
                value={search}
                onChange={(event) => setSearch(event.target.value)}
                placeholder="Buscar ativo, emissor, papel ou classe..."
              />
            </label>

            <PeriodControl
              periodMode={periodMode}
              setPeriodMode={setPeriodMode}
              startDate={startDate}
              setStartDate={setStartDate}
              endDate={endDate}
              setEndDate={setEndDate}
            />
          </div>
        </header>

        {activeTab === "Vida dos Ativos" ? (
          <>
            <section className="focus-grid">
              <AssetPicker
                assets={impactAssets}
                selectedAsset={selectedAsset}
                setSelectedId={setSelectedId}
                statusFilter={statusFilter}
                setStatusFilter={setStatusFilter}
                totalAssets={totalAssets}
              />

              <section className="asset-workspace">
                <div className="selected-asset-hero panel">
                  <div>
                    <span className="eyebrow">Ativo selecionado</span>
                    <h2>{selectedAsset.code}</h2>
                    <p>
                      {assetLabel(selectedAsset)}
                      {selectedAsset.paper ? ` · ${cleanText(selectedAsset.paper)}` : ""}
                    </p>
                  </div>
                  <div className="selected-status">
                    <span className={isOpen(selectedAsset) ? "status open" : "status closed"}>
                      {isOpen(selectedAsset) ? "Em carteira" : "Encerrado"}
                    </span>
                    <strong>{money(assetCurrentValue(selectedAsset))}</strong>
                    <small>Valor atual da carteira</small>
                  </div>
                </div>

                <div className="life-stat-grid">
                  <StatCard
                    icon={WalletCards}
                    label="Valor aplicado"
                    value={money(assetAppliedValue(selectedAsset))}
                    hint={`${selectedAsset.observations.toLocaleString("pt-BR")} observacoes`}
                  />
                  <StatCard
                    icon={CircleDollarSign}
                    label="Valor atual"
                    value={money(assetCurrentValue(selectedAsset))}
                    hint={periodMode === "Vida completa" ? "Vida completa" : "Intervalo selecionado"}
                  />
                  <StatCard
                    className="positive"
                    icon={TrendingUp}
                    label="Maior ganho registrado"
                    value={money(maxGainPoint?.pnlGross)}
                    hint={maxGainPoint ? formatDate(maxGainPoint.date) : "Sem historico"}
                  />
                  <StatCard
                    className="negative"
                    icon={TrendingDown}
                    label="Maior perda registrada"
                    value={money(maxLossPoint?.pnlGross)}
                    hint={maxLossPoint ? formatDate(maxLossPoint.date) : "Sem historico"}
                  />
                </div>

                <article className="panel lifecycle-panel">
                  <div className="panel-header">
                    <div>
                      <h2>Ciclo de vida do P&L</h2>
                      <p>Resultado bruto em reais no periodo selecionado.</p>
                    </div>
                    <div className="date-range">
                      <span>{periodStartLabel}</span>
                      <strong>ate</strong>
                      <span>{periodEndLabel}</span>
                    </div>
                  </div>

                  <PnlChart data={periodHistory} />
                </article>
              </section>

              <aside className="panel loss-gain-panel">
                <div className="panel-header compact">
                  <div>
                    <h2>Raio-x do Ativo</h2>
                    <p>Onde ele ganhou e onde ele perdeu no periodo.</p>
                  </div>
                </div>

                <div className="insight-stack">
                  <div className="insight-card positive-soft">
                    <span>Melhor ponto da vida</span>
                    <strong>{money(maxGainPoint?.pnlGross)}</strong>
                    <small>{maxGainPoint ? formatDate(maxGainPoint.date) : "Sem registro"}</small>
                  </div>

                  <div className="insight-card negative-soft">
                    <span>Pior ponto da vida</span>
                    <strong>{money(maxLossPoint?.pnlGross)}</strong>
                    <small>{maxLossPoint ? formatDate(maxLossPoint.date) : "Sem registro"}</small>
                  </div>

                  <div className="insight-card">
                    <span>Maior melhora diaria</span>
                    <strong className="positive">{money(bestMovePoint?.pnlChange)}</strong>
                    <small>{bestMovePoint ? formatDate(bestMovePoint.date) : "Sem registro"}</small>
                  </div>

                  <div className="insight-card">
                    <span>Maior queda diaria</span>
                    <strong className="negative">{money(worstMovePoint?.pnlChange)}</strong>
                    <small>{worstMovePoint ? formatDate(worstMovePoint.date) : "Sem registro"}</small>
                  </div>
                </div>

                <div className="quality-box">
                  <strong>Leitura dos dados</strong>
                  <p>{cleanText(selectedAsset.qualityNote)}</p>
                </div>
              </aside>
            </section>

            <section className="history-grid">
              <article className="panel history-panel">
                <div className="panel-header">
                  <div>
                    <h2>Linha do tempo do ativo</h2>
                    <p>Ultimos registros diarios do periodo selecionado.</p>
                  </div>
                  <span>{periodHistory.length.toLocaleString("pt-BR")} pontos</span>
                </div>

                <div className="table-wrap">
                  <table>
                    <thead>
                      <tr>
                        <th>Data</th>
                        <th>Status</th>
                        <th>Valor aplicado</th>
                        <th>Valor bruto</th>
                        <th>Resgate</th>
                        <th>P&L bruto</th>
                        <th>Variacao</th>
                      </tr>
                    </thead>
                    <tbody>
                      {[...periodHistory].reverse().slice(0, 36).map((point) => (
                        <tr key={`${point.date}-${point.pnlGross}`}>
                          <td>{formatDate(point.date)}</td>
                          <td>{cleanText(point.statusPoint)}</td>
                          <td>{money(point.appliedValue)}</td>
                          <td>{money(point.grossValue)}</td>
                          <td>{money(point.redemptionValue)}</td>
                          <td className={tone(point.pnlGross)}>{money(point.pnlGross)}</td>
                          <td className={tone(point.pnlChange)}>{money(point.pnlChange)}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </article>

              <aside className="panel portfolio-context">
                <div className="panel-header compact">
                  <div>
                    <h2>Contexto da carteira</h2>
                    <p>Totais com base nos ativos carregados.</p>
                  </div>
                </div>

                <div className="context-row">
                  <span>Ativos em carteira</span>
                  <strong>{openCount.toLocaleString("pt-BR")}</strong>
                </div>
                <div className="context-row">
                  <span>Ativos encerrados</span>
                  <strong>{(allAssets.length - openCount).toLocaleString("pt-BR")}</strong>
                </div>
                <div className="context-row">
                  <span>Valor atual filtrado</span>
                  <strong>{money(totalCurrent)}</strong>
                </div>
              </aside>
            </section>
          </>
        ) : null}

        {activeTab === "Lista de Ativos" ? (
          <section className="assets-table-grid">
            <article className="panel">
              <div className="panel-header">
                <div>
                  <h2>Todos os ativos</h2>
                  <p>
                    {listedAssets.length.toLocaleString("pt-BR")} de {totalAssets.toLocaleString("pt-BR")} ativos
                    carregados.
                  </p>
                </div>
                <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
                  <option>Todos</option>
                  <option>Em carteira</option>
                  <option>Encerrados</option>
                </select>
              </div>

              <div className="asset-table-summary">
                <StatCard icon={WalletCards} label="Valor aplicado" value={money(totalApplied)} hint="Soma dos filtros" />
                <StatCard icon={CircleDollarSign} label="Valor atual" value={money(totalCurrent)} hint="Valor bruto/resgate" />
                <StatCard
                  icon={Layers3}
                  label="Ativos filtrados"
                  value={listedAssets.length.toLocaleString("pt-BR")}
                  hint={`${openCount.toLocaleString("pt-BR")} em carteira`}
                />
              </div>

              <div className="table-wrap asset-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Ativo</th>
                      <th>Classe</th>
                      <th>Emitente/Fundo</th>
                      <th>Status</th>
                      <th>Valor aplicado</th>
                      <th>Valor atual da carteira</th>
                      <th>Ultima posicao</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listedAssets.map((asset) => (
                      <tr key={asset.assetId} onClick={() => setSelectedId(asset.assetId)}>
                        <td>
                          <strong>{asset.code}</strong>
                          <small>{cleanText(asset.paper || asset.subtype)}</small>
                        </td>
                        <td>{cleanText(asset.assetClass)}</td>
                        <td>{assetLabel(asset)}</td>
                        <td>
                          <span className={isOpen(asset) ? "status open" : "status closed"}>
                            {isOpen(asset) ? "Em carteira" : "Encerrado"}
                          </span>
                        </td>
                        <td>{money(assetAppliedValue(asset))}</td>
                        <td>{money(assetCurrentValue(asset))}</td>
                        <td>{formatDate(asset.lastSeen)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          </section>
        ) : null}

        {activeTab === "Cadastro de Ativos" ? (
          <AssetRegistrationPanel
            form={assetForm}
            setForm={setAssetForm}
            registeredRows={registeredRows}
            importText={importText}
            setImportText={setImportText}
            importErrors={importErrors}
            onSubmit={handleManualSubmit}
            onImport={() => handleImportRows(importText)}
            onFileImport={handleFileImport}
            onExportRows={() => downloadCsvFile("cadastro-ativos.csv", registeredRowsToCsv(registeredRows))}
            onRemoveRow={(id) => setRegisteredRows((currentRows) => currentRows.filter((row) => row.id !== id))}
            onClearRows={() => {
              setRegisteredRows([]);
              setImportErrors([]);
            }}
          />
        ) : null}

        {activeTab === "Historico" ? (
          <section className="history-grid single-history">
            <article className="panel history-panel">
              <div className="panel-header">
                <div>
                  <h2>{selectedAsset.code}</h2>
                  <p>
                    {periodHistory.length.toLocaleString("pt-BR")} registros de {periodStartLabel} ate {periodEndLabel}.
                  </p>
                </div>
                <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
                  <option>Todos</option>
                  <option>Em carteira</option>
                  <option>Encerrados</option>
                </select>
              </div>
              <div className="asset-list compact-selector">
                {impactAssets.slice(0, 60).map((asset) => (
                  <button
                    className={`asset-list-item ${asset.assetId === selectedAsset.assetId ? "active" : ""}`}
                    key={asset.assetId}
                    onClick={() => setSelectedId(asset.assetId)}
                    type="button"
                  >
                    <span className="asset-symbol">
                      <BarChart3 size={17} />
                    </span>
                    <span>
                      <strong>{asset.code}</strong>
                      <small>{assetLabel(asset)}</small>
                    </span>
                  </button>
                ))}
              </div>
              <div className="table-wrap asset-table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>Data</th>
                      <th>Status</th>
                      <th>Valor aplicado</th>
                      <th>Valor bruto</th>
                      <th>Resgate</th>
                      <th>P&L bruto</th>
                      <th>Variacao</th>
                    </tr>
                  </thead>
                  <tbody>
                    {[...periodHistory].reverse().map((point) => (
                      <tr key={`${point.date}-${point.pnlGross}`}>
                        <td>{formatDate(point.date)}</td>
                        <td>{cleanText(point.statusPoint)}</td>
                        <td>{money(point.appliedValue)}</td>
                        <td>{money(point.grossValue)}</td>
                        <td>{money(point.redemptionValue)}</td>
                        <td className={tone(point.pnlGross)}>{money(point.pnlGross)}</td>
                        <td className={tone(point.pnlChange)}>{money(point.pnlChange)}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </article>
          </section>
        ) : null}

        {activeTab === "Configuracoes" ? (
          <section className="settings-grid">
            <article className="panel settings-panel">
              <div className="panel-header">
                <div>
                  <h2>Filtros padrao</h2>
                  <p>Ajuste a visao inicial da carteira.</p>
                </div>
              </div>
              <div className="settings-controls">
                <label>
                  <span>Status</span>
                  <select value={statusFilter} onChange={(event) => setStatusFilter(event.target.value)}>
                    <option>Todos</option>
                    <option>Em carteira</option>
                    <option>Encerrados</option>
                  </select>
                </label>
                <label>
                  <span>Periodo</span>
                  <select value={periodMode} onChange={(event) => setPeriodMode(event.target.value)}>
                    <option>Vida completa</option>
                    <option>Intervalo</option>
                  </select>
                </label>
              </div>
            </article>
          </section>
        ) : null}
      </main>
    </div>
  );
}

export default App;
