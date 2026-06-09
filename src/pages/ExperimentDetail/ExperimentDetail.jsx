import { useEffect, useState, useMemo } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { getExperimentWithReferences, DIFFICULTY_LABELS, getReferenceSearchUrl, getPrevNextExperiments } from '../../utils/helpers.js';
import { usePhilosophy } from '../../context/PhilosophyContext.jsx';
import experiments from '../../data/experiments.js';
import BreadcrumbNav from '../../components/BreadcrumbNav/BreadcrumbNav.jsx';
import ChoiceScenario from '../../components/ChoiceScenario/ChoiceScenario.jsx';
import ExperimentCard from '../../components/ExperimentCard/ExperimentCard.jsx';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection.jsx';
import PhilosopherAvatar from '../../components/PhilosopherAvatar/PhilosopherAvatar.jsx';
import ExperimentIllustration from '../../components/ExperimentIllustration/ExperimentIllustration.jsx';
import styles from './ExperimentDetail.module.css';

export default function ExperimentDetail() {
  const { id } = useParams();
  useEffect(() => { window.scrollTo(0, 0); }, [id]);
  const navigate = useNavigate();
  const { unlockedDifficulty } = usePhilosophy();
  const experiment = getExperimentWithReferences(id);
  const { prev, next } = getPrevNextExperiments(id);

  // Keyboard navigation: ← →
  useEffect(() => {
    const handler = (e) => {
      if (e.key === 'ArrowLeft' && prev) navigate(`/experiment/${prev.id}`);
      if (e.key === 'ArrowRight' && next) navigate(`/experiment/${next.id}`);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [navigate, prev, next]);

  if (!experiment) {
    return (
      <div className={`container ${styles.notFound}`}>
        <h1>未找到该思想实验</h1>
        <p>你寻找的实验可能不存在或已被移除。</p>
        <Link to="/browse">← 返回浏览</Link>
      </div>
    );
  }

  // Block direct access to locked experiments
  if (experiment.difficulty > unlockedDifficulty) {
    return (
      <div className={`container ${styles.notFound}`}>
        <h1>暂未解锁</h1>
        <p>这个思想实验属于更高难度等级，完成更多实验提升等级后即可访问。</p>
        <p style={{color:'var(--color-text-muted)',fontSize:'var(--text-sm)',marginTop:'var(--space-xs)'}}>
          当前可访问难度：{unlockedDifficulty === 1 ? '入门' : unlockedDifficulty === 2 ? '进阶' : '挑战'} ·
          本实验难度：{experiment.difficulty === 1 ? '入门' : experiment.difficulty === 2 ? '进阶' : '挑战'}
        </p>
        <Link to="/browse">← 返回浏览</Link>
      </div>
    );
  }
  const {
    title, philosopher, era, difficulty, categories,
    content, relatedIds, stats, readingTime,
  } = experiment;

  // Random unlocked experiments (excluding current one)
  const randomExperiments = useMemo(() => {
    const pool = experiments.filter(e => e.id !== id && e.difficulty <= unlockedDifficulty);
    const shuffled = [...pool].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 4);
  }, [id, unlockedDifficulty]);
  const diffLabel = DIFFICULTY_LABELS[difficulty];

  const breadcrumbItems = [
    { label: '首页', to: '/' },
    { label: '浏览', to: '/browse' },
    { label: title },
  ];

  return (
    <div className={`container ${styles.detail}`}>
      <BreadcrumbNav items={breadcrumbItems} />

      {/* Prev/Next navigation */}
      <div className={styles.prevNext}>
        {prev ? (
          <Link to={`/experiment/${prev.id}`} className={styles.prevLink}>← {prev.title}</Link>
        ) : <span />}
        {next ? (
          <Link to={`/experiment/${next.id}`} className={styles.nextLink}>→ {next.title}</Link>
        ) : <span />}
      </div>

      {/* Header */}
      <AnimatedSection>
        <header className={styles.header}>
          <PhilosopherAvatar
            philosopher={philosopher}
            categories={categories}
            size={80}
          />
          <div className={styles.headerMeta}>
            <span className={styles.era}>{era}</span>
            <span className={styles.difficulty}>
              {Array.from({ length: difficulty }, (_, i) => (
                <span key={i} className={styles.dot} />
              ))}
              <span className={styles.diffLabel}>{diffLabel}</span>
            </span>
            <span className={styles.readingTime}>{readingTime} 分钟阅读</span>
          </div>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.philosopher}>{philosopher} 提出</p>
          <div className={styles.tags}>
            {categories.map((cat) => (
              <span key={cat} className={styles.tag}>
                {cat}
              </span>
            ))}
          </div>
        </header>
      </AnimatedSection>

      {/* Background */}
      <AnimatedSection>
        <section className={styles.contentSection}>
          <h2>{content.background.title}</h2>
          <div className={styles.prose}>
            {content.background.body.split('\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Description */}
      <AnimatedSection>
        <section className={styles.contentSection}>
          <h2>{content.description.title}</h2>
          <div className={styles.scenario}>
            {content.description.scenario.split('\n').map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </section>
      </AnimatedSection>

      {/* Interactive Section */}
      <AnimatedSection>
        <ChoiceScenario
          interactive={content.interactive}
          experimentId={id}
          stats={stats}
        />
      </AnimatedSection>

      {/* Implications */}
      {content.implications && content.implications.length > 0 && (
        <AnimatedSection>
          <section className={styles.implications}>
            <h2 className={styles.implTitle}>哲学启示</h2>
            <div className={styles.implGrid}>
              {content.implications.map((impl, i) => (
                <div key={i} className={styles.implCard}>
                  <span className={styles.implNum}>{i + 1}</span>
                  <div>
                    <h3 className={styles.implHeading}>{impl.title}</h3>
                    <p>{impl.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </AnimatedSection>
      )}

      {/* References */}
      {content.references && (
        <AnimatedSection>
          <section className={styles.references}>
            <h2 className={styles.refTitle}>参考文献与延伸阅读</h2>
            {[
              { key: 'direct', icon: '📖', label: '直接相关' },
              { key: 'context', icon: '🔗', label: '脉络文献' },
              { key: 'development', icon: '🔬', label: '后续发展' },
              { key: 'similar', icon: '🔍', label: '相近方法' },
            ].map(({ key, icon, label }) => {
              const refs = content.references[key];
              if (!refs || refs.length === 0) return null;
              return (
                <div key={key} className={styles.refGroup}>
                  <h3 className={styles.refGroupTitle}>{icon} {label}</h3>
                  <ul className={styles.refList}>
                    {refs.map((r, i) => (
                      <li key={i} className={styles.refItem}>
                        <a
                          href={getReferenceSearchUrl(r.author, r.title)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={styles.refLink}
                          title={`在 Google Scholar 中搜索：${r.author} — ${r.title}`}
                        >
                          <span className={styles.refAuthor}>{r.author}</span>
                          {r.year && <span className={styles.refYear}>（{r.year}）</span>}
                          <span className={styles.refBookTitle}>《{r.title}》</span>
                        </a>
                        {r.description && <p className={styles.refDesc}>{r.description}</p>}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </section>
        </AnimatedSection>
      )}

      {/* Random Recommendations */}
      {randomExperiments.length > 0 && (
        <AnimatedSection>
          <section className={styles.related}>
            <h2 className={styles.relatedTitle}>推荐探索</h2>
            <div className={styles.relatedGrid}>
              {randomExperiments.map((exp) => (
                <ExperimentCard key={exp.id} experiment={exp} variant="compact" />
              ))}
            </div>
          </section>
        </AnimatedSection>
      )}

      {/* Next CTA */}
      <AnimatedSection>
        <div className={styles.nextCta}>
          <Link to="/browse" className={styles.nextLink}>
            探索更多思想实验 →
          </Link>
        </div>
      </AnimatedSection>
    </div>
  );
}



