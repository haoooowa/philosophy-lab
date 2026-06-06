import { Link } from 'react-router-dom';
import HeroComposition from './HeroComposition.jsx';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <HeroComposition />
      <div className={styles.particles}>
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className={styles.particle}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 6}s`,
              animationDuration: `${3 + Math.random() * 5}s`,
            }}
          />
        ))}
      </div>
      <div className={`container ${styles.heroContent}`}>
        <h1 className={styles.title}>
          <span className={styles.titleLine}>探索思想的</span>
          <span className={styles.titleAccent}>边界</span>
        </h1>
        <div className={styles.ornament}>
          <span className={styles.ornamentLine} />
          <span className={styles.ornamentDot} />
          <span className={styles.ornamentLine} />
        </div>
        <p className={styles.subtitle}>
          从庄子梦蝶到电车难题，从柏拉图洞穴到缸中之脑
          <br />
          经典哲学思想实验 · 互动体验之旅
        </p>
        <div className={styles.ctaRow}>
          <Link to="/browse" className={styles.ctaPrimary}>
            开始探索
          </Link>
          <Link to="/compass" className={styles.ctaSecondary}>
            哲学罗盘
          </Link>
        </div>
        <p className={styles.hint}>
          做出你的选择，发现自己的哲学倾向
        </p>
      </div>
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollDot} />
        <span className={styles.scrollDot} />
        <span className={styles.scrollDot} />
      </div>
    </section>
  );
}
