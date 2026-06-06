import { useState, useEffect, useRef } from 'react';
import styles from './StatsBar.module.css';

export default function StatsBar({ distribution, choices, selectedId, totalResponses }) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setAnimated(true), 300);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div className={styles.stats} ref={ref}>
      <p className={styles.statsTitle}>
        累计 {totalResponses.toLocaleString()} 人参与选择
      </p>
      {choices.map((choice) => {
        const pct = distribution[choice.id] || 0;
        const isSelected = choice.id === selectedId;
        return (
          <div key={choice.id} className={styles.barRow}>
            <div className={styles.barLabel}>
              <span className={`${styles.barText} ${isSelected ? styles.barTextSelected : ''}`}>
                {choice.label}
              </span>
              <span className={`${styles.barPct} ${isSelected ? styles.barTextSelected : ''}`}>
                {pct}%
              </span>
            </div>
            <div className={styles.barTrack}>
              <div
                className={`${styles.barFill} ${isSelected ? styles.barFillSelected : ''}`}
                style={{ width: animated ? `${pct}%` : '0%' }}
              />
            </div>
          </div>
        );
      })}
    </div>
  );
}
