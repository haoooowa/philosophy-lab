import { useEffect, useRef } from 'react';
import { getScoresArray } from '../../utils/compass.js';
import { usePhilosophy } from '../../context/PhilosophyContext.jsx';
import styles from './Compass.module.css';

export default function RadarChart({ compact = false }) {
  const { compassScores, interactionCount } = usePhilosophy();
  const svgRef = useRef(null);

  const scoresData = getScoresArray(compassScores);
  const size = compact ? 220 : 400;
  const center = size / 2;
  const radius = compact ? 80 : 160;
  const levels = 5;

  if (interactionCount === 0) {
    return (
      <div className={`${styles.emptyCompass} ${compact ? styles.emptyCompact : ''}`}>
        <p>完成几个思想实验后，这里将显示你的哲学罗盘</p>
      </div>
    );
  }

  // Calculate point coordinates
  const getPoint = (index, value) => {
    const angle = (index * 36 - 90) * (Math.PI / 180);
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  // Build polygon points string
  const polygonPoints = scoresData
    .map((dim, i) => {
      const pt = getPoint(i, dim.score);
      return `${pt.x},${pt.y}`;
    })
    .join(' ');

  // Build level rings
  const ringPaths = [];
  for (let l = 1; l <= levels; l++) {
    const r = (l / levels) * radius;
    const pts = scoresData.map((_, i) => {
      const angle = (i * 36 - 90) * (Math.PI / 180);
      return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
    });
    ringPaths.push(pts.join(' '));
  }

  return (
    <div className={`${styles.chartWrap} ${compact ? styles.chartCompact : ''}`}>
      <svg
        ref={svgRef}
        viewBox={`0 0 ${size} ${size}`}
        className={styles.svg}
      >
        {/* Level rings */}
        {ringPaths.map((pts, i) => (
          <polygon
            key={`ring-${i}`}
            points={pts}
            fill="none"
            stroke="var(--color-border)"
            strokeWidth="1"
            opacity={0.5}
          />
        ))}

        {/* Axis lines */}
        {scoresData.map((dim, i) => {
          const pt = getPoint(i, 100);
          return (
            <line
              key={`axis-${i}`}
              x1={center}
              y1={center}
              x2={pt.x}
              y2={pt.y}
              stroke="var(--color-border)"
              strokeWidth="1"
              opacity={0.4}
            />
          );
        })}

        {/* Data polygon */}
        <polygon
          points={polygonPoints}
          fill="rgba(201, 169, 110, 0.12)"
          stroke="var(--color-accent-gold)"
          strokeWidth="2"
          className={styles.dataPolygon}
        />

        {/* Data points */}
        {scoresData.map((dim, i) => {
          const pt = getPoint(i, dim.score);
          return (
            <circle
              key={`dot-${i}`}
              cx={pt.x}
              cy={pt.y}
              r="4"
              fill="var(--color-accent-gold)"
              className={styles.dataDot}
            />
          );
        })}

        {/* Labels */}
        {scoresData.map((dim, i) => {
          const pt = getPoint(i, 115);
          return (
            <text
              key={`label-${i}`}
              x={pt.x}
              y={pt.y}
              textAnchor="middle"
              dominantBaseline="middle"
              fill="var(--color-text-secondary)"
              fontFamily="var(--font-ui)"
              fontSize={compact ? "9" : "12"}
              className={styles.label}
            >
              {dim.label}
            </text>
          );
        })}
      </svg>
    </div>
  );
}
