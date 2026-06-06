import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

export default function NotFound() {
  return (
    <div className={`container ${styles.page}`}>
      <span className={styles.icon}>🔮</span>
      <h1 className={styles.title}>404</h1>
      <p className={styles.desc}>
        你似乎到达了一个不存在的思想实验。
        <br />
        也许它还在某位哲学家的脑海中。
      </p>
      <div className={styles.actions}>
        <Link to="/" className={styles.link}>
          返回首页
        </Link>
        <Link to="/browse" className={styles.linkSecondary}>
          浏览实验
        </Link>
      </div>
    </div>
  );
}
