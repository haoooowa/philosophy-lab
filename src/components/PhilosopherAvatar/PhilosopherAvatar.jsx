import { getSymbolForCategory, getPhilosopherInitials } from '../../assets/symbols.js';
import styles from './PhilosopherAvatar.module.css';

export default function PhilosopherAvatar({ philosopher, categories, size = 80 }) {
  const primaryCat = categories?.[0];
  const { Component: CatIcon } = getSymbolForCategory(primaryCat);
  const initials = getPhilosopherInitials(philosopher);
  const fontStyle = { fontSize: Math.round(size * 0.32) };

  return (
    <div className={styles.avatar} style={{ width: size, height: size }}>
      <div className={styles.ring}>
        {CatIcon && <CatIcon size={Math.round(size * 0.18)} />}
      </div>
      <span className={styles.initials} style={fontStyle}>
        {initials}
      </span>
    </div>
  );
}
