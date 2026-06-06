import { useMemo } from 'react';
import { Link } from 'react-router-dom';
import experiments from '../../data/experiments.js';
import styles from './Timeline.module.css';

export default function Timeline() {
  const sorted = useMemo(() => {
    const unique = new Map();
    for (const e of experiments) {
      const key = e.philosopher;
      if (!unique.has(key) || Math.abs(e.year) < Math.abs(unique.get(key).year)) {
        unique.set(key, e);
      }
    }
    return [...unique.values()].sort((a, b) => a.year - b.year);
  }, []);

  const eras = [
    { label: '先秦/古印度', min: -600, max: -200 },
    { label: '古希腊', min: -500, max: 200 },
    { label: '中世纪/伊斯兰', min: 300, max: 1300 },
    { label: '近代', min: 1500, max: 1800 },
    { label: '现代', min: 1800, max: 1950 },
    { label: '当代', min: 1950, max: 2100 },
  ];

  return (
    <div className={`container ${styles.page}`}>
      <header className={styles.header}>
        <h1>哲学时间线</h1>
        <p>跨越 2500 年的思想者——从庄子到当代哲学家</p>
      </header>

      <div className={styles.timeline}>
        <div className={styles.line} />
        {eras.map((era) => {
          const items = sorted.filter((e) => e.year >= era.min && e.year < era.max);
          if (items.length === 0) return null;
          return (
            <div key={era.label} className={styles.era}>
              <h2 className={styles.eraTitle}>{era.label}</h2>
              <div className={styles.items}>
                {items.map((e) => (
                  <Link
                    key={e.id}
                    to={`/experiment/${e.id}`}
                    className={styles.item}
                  >
                    <span className={styles.year}>{e.year < 0 ? '前' + Math.abs(e.year) : e.year}年</span>
                    <span className={styles.name}>{e.philosopher}</span>
                    <span className={styles.exp}>{e.title}</span>
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
