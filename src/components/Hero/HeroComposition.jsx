import styles from './HeroComposition.module.css';

export default function HeroComposition() {
  return (
    <div className={styles.composition} aria-hidden="true">
      <svg viewBox="0 0 1200 800" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <radialGradient id="hg" cx="50%" cy="45%" r="50%">
            <stop offset="0%" stopColor="var(--color-accent-gold)" stopOpacity="0.05" />
            <stop offset="60%" stopColor="var(--color-accent-gold)" stopOpacity="0.01" />
            <stop offset="100%" stopColor="var(--color-accent-gold)" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="600" cy="360" r="420" fill="url(#hg)" />
        {[360, 280, 200, 120].map((r, i) => (
          <circle key={i} cx="600" cy="380" r={r}
            fill="none" stroke="var(--color-accent-gold)"
            strokeWidth="0.5" opacity={0.04 - i * 0.008} />
        ))}
      </svg>
    </div>
  );
}
