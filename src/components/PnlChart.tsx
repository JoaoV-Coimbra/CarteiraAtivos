import { useState } from "react";
import type { HistoryPoint } from "../data";
import { COMPACT_BRL, formatDate, money } from "../lib/format";

interface PnlChartProps {
  data: HistoryPoint[];
}

// React: componente responsavel apenas pelo grafico de P&L.
export function PnlChart({ data }: PnlChartProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  // Mantem somente pontos que possuem P&L para desenhar a linha.
  const points = data.filter((point) => point.pnlGross != null);

  if (points.length < 2) {
    return <div className="empty-chart">Histórico insuficiente para desenhar a curva.</div>;
  }

  // SVG: area fixa do grafico e margens internas para eixos/labels.
  const width = 1000;
  const height = 300;
  const left = 78;
  const right = 18;
  const top = 16;
  const bottom = 40;

  // Escala Y: inclui zero para mostrar quando o P&L cruza positivo/negativo.
  const values = points.map((point) => point.pnlGross as number);
  let min = Math.min(0, ...values);
  let max = Math.max(0, ...values);

  if (min === max) {
    min -= 1;
    max += 1;
  }

  // Respiro visual para a linha nao encostar nas bordas.
  const range = max - min;
  min -= range * 0.08;
  max += range * 0.08;

  // Conversores: transformam indice/valor financeiro em coordenadas SVG.
  const x = (index: number) => left + (index / (points.length - 1)) * (width - left - right);
  const y = (value: number) => top + ((max - value) / (max - min)) * (height - top - bottom);

  // Path SVG: sequencia M/L que desenha a curva do P&L.
  const path = points
    .map((point, index) => `${index ? "L" : "M"}${x(index).toFixed(2)} ${y(point.pnlGross as number).toFixed(2)}`)
    .join(" ");

  // Labels de data: primeira, meio e ultima observacao.
  const labelIndexes = [0, Math.floor((points.length - 1) / 2), points.length - 1];
  const hoveredPoint = hoveredIndex == null ? null : points[hoveredIndex];
  const tooltipX =
    hoveredIndex == null ? 0 : Math.min(Math.max(x(hoveredIndex) + 14, left), width - right - 186);
  const tooltipY =
    hoveredPoint == null || hoveredIndex == null
      ? 0
      : y(hoveredPoint.pnlGross as number) > top + 68
        ? y(hoveredPoint.pnlGross as number) - 62
        : y(hoveredPoint.pnlGross as number) + 18;

  return (
    <svg className="pnl-chart" viewBox={`0 0 ${width} ${height}`} role="img" aria-label="Curva de P&L bruto">
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
          <g transform={`translate(${tooltipX} ${tooltipY})`} className="chart-tooltip">
            <rect width="172" height="48" rx="8" />
            <text x="11" y="19">
              {formatDate(hoveredPoint.date)}
            </text>
            <text x="11" y="36" className={hoveredPoint.pnlGross != null && hoveredPoint.pnlGross < 0 ? "negative" : "positive"}>
              {money(hoveredPoint.pnlGross)}
            </text>
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
          onMouseEnter={() => setHoveredIndex(index)}
          onMouseLeave={() => setHoveredIndex(null)}
          r="8"
          tabIndex={0}
        >
          <title>
            {formatDate(point.date)} - {money(point.pnlGross)}
          </title>
        </circle>
      ))}

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
  );
}
