import { Link } from 'react-router-dom';
import styles from './BreadcrumbNav.module.css';

export default function BreadcrumbNav({ items }) {
  return (
    <nav className={styles.breadcrumb} aria-label="面包屑导航">
      {items.map((item, i) => (
        <span key={i} className={styles.crumb}>
          {i > 0 && <span className={styles.separator}>/</span>}
          {item.to ? (
            <Link to={item.to} className={styles.link}>{item.label}</Link>
          ) : (
            <span className={styles.current}>{item.label}</span>
          )}
        </span>
      ))}
    </nav>
  );
}
