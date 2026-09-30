import { useState } from "react";
import type { HistoryPoint } from "../data";
import { COMPACT_BRL, formatDate, money } from "../lib/format";

export type BenchmarkSeries = {
  id: string;
  label: string;
  color: string;
  points: Array<{
    date: string;
    value: number;
  }>;
};

interface PnlChartProps {
  data: HistoryPoint[];
  comparisonSeries?: BenchmarkSeries[];
}

export function PnlChart({ data, comparisonSeries = [] }: PnlChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [selectedComparisonId, setSelectedComparisonId] = useState<string>("none");
  const points = data.filter((point) => point.pnlGross != null);
  const selectedComparison =
    selectedComparisonId === "none"
      ? null
      : comparisonSeries.find((series) => series.id === selectedComparisonId) || comparisonSeries[0] || null;
  const alignedComparisonSeries = comparisonSeries
    .filter((series) => series.id === selectedComparison?.id)
    .map((series) => ({
      ...series,
      points: points.map((point) => {
        const benchmarkPoint = series.points.find((item) => item.date === point.date);

        return {
          date: point.date,
          value: benchmarkPoint?.value ?? Number.NaN,
        };
      }),
    }))
    .filter((series) => series.points.some((point) => Number.isFinite(point.value)));

  if (points.length < 2) {
    return <div className="empty-chart">Histórico insuficiente para desenhar a curva.</div>;
  }

  const width = 1000;
  const height = 300;
  const left = 78;
  const right = 18;
  const top = 16;
  const bottom = 40;
  const values = [
    ...points.map((point) => point.pnlGross as number),
    ...alignedComparisonSeries.flatMap((series) =>
      series.points.map((point) => point.value).filter((value) => Number.isFinite(value)),
    ),
  ];
  let min = Math.min(0, ...values);
  let max = Math.max(0, ...values);

  if (min === max) {
    min -= 1;
    max += 1;
  }

  const range = max - min;
  min -= range * 0.08;
  max += range * 0.08;

  const x = (index: number) => left + (index / (points.length - 1)) * (width - left - right);
  const y = (value: number) => top + ((max - value) / (max - min)) * (height - top - bottom);
  const path = points
    .map((point, index) => `${index ? "L" : "M"}${x(index).toFixed(2)} ${y(point.pnlGross as number).toFixed(2)}`)
    .join(" ");
  const comparisonPaths = alignedComparisonSeries.map((series) => ({
    ...series,
    path: series.points
      .map((point, index) =>
        Number.isFinite(point.value) ? `${index ? "L" : "M"}${x(index).toFixed(2)} ${y(point.value).toFixed(2)}` : "",
      )
      .filter(Boolean)
      .join(" "),
  }));
  const labelIndexes = [0, Math.floor((points.length - 1) / 2), points.length - 1];
  const hoveredPoint = hoveredIndex == null ? null : points[hoveredIndex];
  const hoveredComparisons =
    hoveredIndex == null
      ? []
      : alignedComparisonSeries
          .map((series) => ({ ...series, value: series.points[hoveredIndex]?.value }))
          .filter((series) => Number.isFinite(series.value));
  const tooltipX =
    hoveredIndex == null ? 0 : Math.min(Math.max(x(hoveredIndex) + 14, left), width - right - 216);
  const tooltipHeight = 50 + hoveredComparisons.length * 17;
  const tooltipY =
    hoveredPoint == null || hoveredIndex == null
      ? 0
      : y(hoveredPoint.pnlGross as number) > top + tooltipHeight + 12
        ? y(hoveredPoint.pnlGross as number) - tooltipHeight - 10
        : y(hoveredPoint.pnlGross as number) + 18;
  const setHoverFromClientX = (clientX: number, element: SVGSVGElement) => {
    const rect = element.getBoundingClientRect();
    const relativeX = ((clientX - rect.left) / rect.width) * width;
    const plotWidth = width - left - right;
    const ratio = Math.min(1, Math.max(0, (relativeX - left) / plotWidth));
    const index = Math.round(ratio * (points.length - 1));

    setHoveredIndex(index);
  };

  return (
    <div className="pnl-chart-shell">
      <div className="chart-tabs" aria-label="Comparar com indexador">
        <button
          className={selectedComparisonId === "none" ? "active" : ""}
          type="button"
          onClick={() => setSelectedComparisonId("none")}
        >
          Real
        </button>
        {comparisonSeries.map((series) => (
          <button
            className={selectedComparison?.id === series.id ? "active" : ""}
            key={series.id}
            type="button"
            onClick={() => setSelectedComparisonId(series.id)}
          >
            {series.label}
          </button>
        ))}
      </div>

      <div className="chart-legend" aria-label="Séries do gráfico">
        <span>
          <i style={{ background: "var(--accent-strong)" }} />
          Real
        </span>
        {alignedComparisonSeries.map((series) => (
          <span key={series.id}>
            <i style={{ background: series.color }} />
            {series.label}
          </span>
        ))}
      </div>

      <svg
        className="pnl-chart"
        viewBox={`0 0 ${width} ${height}`}
        role="img"
        aria-label="Curva de P&L bruto"
        onMouseMove={(event) => setHoverFromClientX(event.clientX, event.currentTarget)}
        onMouseLeave={() => setHoveredIndex(null)}
        onTouchMove={(event) => {
          const touch = event.touches[0];

          if (touch) {
            setHoverFromClientX(touch.clientX, event.currentTarget);
          }
        }}
      >
        {[0, 0.25, 0.5, 0.75, 1].map((position) => {
          const value = min + (max - min) * position;
          const currentY = y(value);

          return (
            <g key={position}>
              <line x1={left} x2={width - right} y1={currentY} y2={currentY} className="chart-grid" />
              <text x={left - 12} y={currentY + 4} textAnchor="end" className="chart-axis">
                {COMPACT_BRL.format(value)}
              </text>
            </g>
          );
        })}

        {min < 0 && max > 0 ? <line x1={left} x2={width - right} y1={y(0)} y2={y(0)} className="chart-zero" /> : null}

        {comparisonPaths.map((series) => (
          <path
            d={series.path}
            className="chart-line chart-line-comparison"
            key={series.id}
            style={{ stroke: series.color }}
          />
        ))}

        <path d={path} className="chart-line" />

        {hoveredPoint != null && hoveredIndex != null ? (
          <g className="chart-hover-layer">
            <line
              x1={x(hoveredIndex)}
              x2={x(hoveredIndex)}
              y1={top}
              y2={height - bottom}
              className="chart-hover-line"
            />
            <circle
              cx={x(hoveredIndex)}
              cy={y(hoveredPoint.pnlGross as number)}
              r="5.5"
              className="chart-hover-dot"
            />
            {hoveredComparisons.map((series) => (
              <circle
                cx={x(hoveredIndex)}
                cy={y(series.value)}
                r="5.5"
                className="chart-hover-dot chart-hover-dot-comparison"
                key={series.id}
                style={{ stroke: series.color }}
              />
            ))}
            <g transform={`translate(${tooltipX} ${tooltipY})`} className="chart-tooltip">
              <rect width="204" height={tooltipHeight} rx="8" />
              <text x="11" y="19">
                {formatDate(hoveredPoint.date)}
              </text>
              <text
                x="11"
                y="36"
                className={hoveredPoint.pnlGross != null && hoveredPoint.pnlGross < 0 ? "negative" : "positive"}
              >
                Real: {money(hoveredPoint.pnlGross)}
              </text>
              {hoveredComparisons.map((series, index) => (
                <text x="11" y={53 + index * 17} key={series.id} style={{ fill: series.color }}>
                  {series.label}: {money(series.value)}
                </text>
              ))}
            </g>
          </g>
        ) : null}

        {points.map((point, index) => (
          <circle
            aria-label={`${formatDate(point.date)}: ${money(point.pnlGross)}`}
            className="chart-hit-area"
            cx={x(index)}
            cy={y(point.pnlGross as number)}
            key={`${point.date}-${point.pnlGross}-${index}`}
            onBlur={() => setHoveredIndex(null)}
            onFocus={() => setHoveredIndex(index)}
            r="10"
            tabIndex={0}
          >
            <title>
              {formatDate(point.date)} - {money(point.pnlGross)}
            </title>
          </circle>
        ))}

        <rect
          className="chart-hover-capture"
          x={left}
          y={top}
          width={width - left - right}
          height={height - top - bottom}
        />

        {labelIndexes.map((index, position) => (
          <text
            key={index}
            x={x(index)}
            y={height - 11}
            textAnchor={position === 0 ? "start" : position === 2 ? "end" : "middle"}
            className="chart-axis"
          >
            {formatDate(points[index].date)}
          </text>
        ))}
      </svg>
    </div>
  );
}
