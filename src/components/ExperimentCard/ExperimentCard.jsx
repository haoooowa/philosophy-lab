import { Link } from 'react-router-dom';
import { DIFFICULTY_LABELS } from '../../utils/helpers.js';
import { getSymbolForCategory } from '../../assets/symbols.js';
import { LockIcon } from '../../assets/Icons.jsx';
import styles from './ExperimentCard.module.css';

function highlight(text, query) {
  if (!query || !text) return text;
  const idx = text.toLowerCase().indexOf(query.toLowerCase());
  if (idx === -1) return text;
  return (
    <>{text.slice(0, idx)}<mark style={{background:'rgba(212,184,122,0.25)',color:'inherit',borderRadius:2,padding:'0 2px'}}>{text.slice(idx, idx + query.length)}</mark>{text.slice(idx + query.length)}</>
  );
}

export default function ExperimentCard({ experiment, variant = 'standard', searchTerm }) {
  if (!experiment) return null;

  const {
    id,
    title,
    philosopher,
    era,
    difficulty,
    categories,
    summary,
    coverGradient,
    readingTime,
  } = experiment;

  const diffLabel = DIFFICULTY_LABELS[difficulty] || '';
  const diffDots = Array.from({ length: difficulty }, (_, i) => i);
  const primaryCat = categories?.[0];
  const { Component: CatIcon } = getSymbolForCategory(primaryCat);

  const locked = experiment.locked;

  return (
    <Link
      to={locked ? '#' : `/experiment/${id}`}
      onClick={locked ? (e) => e.preventDefault() : undefined}
      className={`${styles.card} ${variant === 'featured' ? styles.cardFeatured : ''} ${variant === 'compact' ? styles.cardCompact : ''} ${locked ? styles.cardLocked : ''}`}
      title={locked ? '完成更多实验以解锁此内容' : undefined}
    >
      <div
        className={styles.cover}
        style={{ background: coverGradient }}
      >
        <div className={styles.coverOverlay} />
        {locked && (
          <span className={styles.lockOverlay}>
            <span className={styles.lockIcon}><LockIcon size={22} /></span>
            <span className={styles.lockText}>
              {experiment.difficulty === 2 ? 'Lv.3 问道期解锁' : experiment.difficulty === 3 ? 'Lv.6 通幽期解锁' : 'Lv.1 启蒙期解锁'}
            </span>
          </span>
        )}
        {CatIcon && (
          <span className={styles.coverIcon}>
            <CatIcon size={variant === 'featured' ? 64 : 48} />
          </span>
        )}
        <span className={styles.coverTitle}>{title}</span>
      </div>

      <div className={styles.body}>
        <div className={styles.metaRow}>
          <span className={styles.eraBadge}>{era}</span>
          <span className={styles.readingTime}>{readingTime} 分钟阅读</span>
        </div>

        <h3 className={styles.title}>{highlight(title, searchTerm)}</h3>
        <p className={styles.philosopher}>{highlight(philosopher, searchTerm)}</p>

        {variant !== 'compact' && (
          <p className={styles.summary}>{highlight(summary, searchTerm)}</p>
        )}

        <div className={styles.footer}>
          <div className={styles.tags}>
            {categories.map((cat) => (
              <span
                key={cat}
                className={styles.tag}
                style={{
                  '--tag-color': `var(--color-tag-${
                    cat === '伦理学' ? 'ethics' :
                    cat === '形而上学' ? 'metaphysics' :
                    cat === '认识论' ? 'epistemology' :
                    cat === '心灵哲学' ? 'mind' :
                    cat === '逻辑学' ? 'logic' :
                    cat === '语言哲学' ? 'epistemology' : 'politics'
                  })`,
                }}
              >
                {cat}
              </span>
            ))}
            {experiment.subcategories && experiment.subcategories.length > 0 && experiment.subcategories.map((sub) => (
              <span key={sub} className={styles.subtag}>{sub}</span>
            ))}
          </div>
          <div className={styles.difficulty} title={`难度：${diffLabel}`}>
            {diffDots.map((i) => (
              <span key={i} className={styles.difficultyDot} />
            ))}
            {Array.from({ length: 3 - difficulty }, (_, i) => (
              <span key={`empty-${i}`} className={`${styles.difficultyDot} ${styles.dotEmpty}`} />
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}
