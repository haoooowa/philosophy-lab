import { CATEGORIES } from '../../utils/helpers.js';
import styles from './TagFilter.module.css';

export default function TagFilter({ activeCategory, onCategoryChange }) {
  return (
    <div className={styles.tagRow}>
      {CATEGORIES.map((cat) => (
        <button
          key={cat.key}
          onClick={() => onCategoryChange(cat.key)}
          className={`${styles.tag} ${activeCategory === cat.key ? styles.tagActive : ''}`}
          style={{
            '--cat-color': cat.color,
          }}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
