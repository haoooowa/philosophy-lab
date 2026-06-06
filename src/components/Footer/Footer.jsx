import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerInner}`}>
        <div className={styles.brand}>
          <span className={styles.logo}>⚗️ 思想实验室</span>
          <p className={styles.tagline}>探索思想的边界，发现自己的哲学倾向</p>
        </div>
        <div className={styles.links}>
          <Link to="/browse">浏览实验</Link>
          <Link to="/compass">哲学罗盘</Link>
          <Link to="/about">关于本站</Link>
        </div>
        <div className={styles.copy}>
          <p>© 2026 思想实验室 · 哲学思想实验互动平台</p>
          <p className={styles.quote}>「我思故我在」—— 笛卡尔</p>
        </div>
      </div>
    </footer>
  );
}
