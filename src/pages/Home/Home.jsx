import { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../../components/Hero/Hero.jsx';
import ExperimentCard from '../../components/ExperimentCard/ExperimentCard.jsx';
import CompassMini from '../../components/PhilosophyCompass/CompassMini.jsx';
import AnimatedSection from '../../components/AnimatedSection/AnimatedSection.jsx';
import DailyQuote from '../../components/DailyQuote/DailyQuote.jsx';
import DailyQuestion from '../../components/DailyQuestion/DailyQuestion.jsx';
import { getRandomFeatured, CATEGORIES } from '../../utils/helpers.js';
import { getSymbolForCategory } from '../../assets/symbols.js';
import { usePhilosophy } from '../../context/PhilosophyContext.jsx';
import styles from './Home.module.css';

export default function Home() {
  const { interactionCount, unlockedDifficulty, level } = usePhilosophy();
  const [featured, setFeatured] = useState(() => {
    // Only select from unlocked experiments for new visitors
    return getRandomFeatured(1);
  });

  const refreshFeatured = () => {
    const available = getRandomFeatured(unlockedDifficulty || 1);
    setFeatured(available);
  };

  // Ensure featured is always unlocked when unlockedDifficulty changes
  if (featured && featured.difficulty > (unlockedDifficulty || 1)) {
    const available = getRandomFeatured(unlockedDifficulty || 1);
    if (available && available.id !== featured.id) {
      setFeatured(available);
    }
  }

  if (!featured) {
    return (
      <div className={styles.loading}>
        <div className={styles.loadingSpinner} />
      </div>
    );
  }

  return (
    <>
      <Hero />
      <div className="container">
        {/* Featured Thought Experiment */}
        <AnimatedSection>
          <section className={styles.featuredSection}>
            <div className={styles.featuredHeader}>
              <h2 className={styles.sectionTitle}>今日思想实验</h2>
              <button onClick={refreshFeatured} className={styles.refreshBtn}>
                换一个 &#x21bb;
              </button>
            </div>
            <ExperimentCard experiment={featured} variant="featured" />
          </section>
        </AnimatedSection>

        {/* Category Showcase */}
        <AnimatedSection>
          <section className={styles.categorySection}>
            <h2 className={styles.sectionTitle}>探索领域</h2>
            <p className={styles.sectionSubtitle}>
              哲学思想实验跨越多个领域，从伦理困境到形而上学的沉思
            </p>
            <div className={styles.categoryGrid}>
              {CATEGORIES.filter((c) => c.key !== '全部').map((cat) => {
                const { Component: CatIcon } = getSymbolForCategory(cat.key);
                return (
                <Link
                  key={cat.key}
                  to={`/browse?category=${cat.key}`}
                  className={styles.categoryCard}
                  style={{ borderColor: cat.color }}
                >
                  {CatIcon && <CatIcon size={28} />}
                  <span className={styles.categoryName}>{cat.label}</span>
                </Link>
                );
              })}
            </div>
          </section>
        </AnimatedSection>

        {/* Daily inspiration */}
        <AnimatedSection>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 'var(--space-md)', marginBottom: 'var(--space-xl)' }}>
            <DailyQuote />
            <DailyQuestion />
          </div>
        </AnimatedSection>

        {/* Learning Paths — now as a dedicated page */}
        <AnimatedSection>
          <section className={styles.compassSection}>
            <div className={styles.featuredHeader}>
              <h2 className={styles.sectionTitle}>思想之旅</h2>
              <Link to="/paths" className={styles.refreshBtn}>查看全部 12 条 →</Link>
            </div>
            <p className={styles.sectionSubtitle}>沿着特定主题的路径，系统探索相关联的思想实验</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))', gap: 'var(--space-sm)' }}>
              {[
                { title: '🔍 怀疑论之旅', desc: '我们能知道任何事吗？', ids: ['brain-in-vat','evil-demon','pyrrho-skepticism','dream-argument'] },
                { title: '⚖️ 正义的边界', desc: '什么才是公平的社会？', ids: ['trolley-problem','veil-of-ignorance','wilt-chamberlain','sen-capability'] },
                { title: '🧠 意识之谜', desc: '物理过程如何产生体验？', ids: ['nagel-bat','marys-room','philosophical-zombies','chinese-room','explanatory-gap'] },
                { title: '🔓 自由意志', desc: '我们真的能选择吗？', ids: ['buridans-ass','frankfurt-cases','van-inwagen-consequence','libet-experiment'] },
                { title: '🏯 东方智慧', desc: '庄周、孔子、佛陀的洞见', ids: ['zhuangzi-butterfly','white-horse','mencius-child-well','mozi-universal-love','buddha-self-no'] },
                { title: '🤝 合作与博弈', desc: '利己与利他如何共存？', ids: ['prisoner-dilemma','stag-hunt','tragedy-of-commons','ultimatum-game','reciprocal-altruism'] },
                { title: '🪞 自我同一性', desc: '什么使我成为我？', ids: ['ship-of-theseus','ship-of-theseus-v2','parfits-fission','narrative-self','animalism-personal-id'] },
                { title: '💬 语言与意义', desc: '词语如何指向世界？', ids: ['white-horse','frege-sense-reference','twin-earth','davidson-radical-interp','gadamer-horizon'] },
                { title: '🏛️ 权力与正义', desc: '谁有权力统治谁？', ids: ['state-of-nature','hobbes-leviathan','panopticon','veil-of-ignorance','arendt-banality-evil'] },
                { title: '🌌 生命的意义', desc: '为什么要活着？', ids: ['experience-machine','nietzsche-eternal-return','epicurus-death','nietzsche-last-man'] },
                { title: '🔬 科学与真理', desc: '科学如何接近真理？', ids: ['falsifiability','kuhn-paradigm','pessimistic-induction','james-pragmatic-truth'] },
                { title: '⛓️ 因果之谜', desc: '什么是原因？', ids: ['hume-causation','lewis-counterfactual-causation','pearl-causal-models','manipulability-causation','anscombe-causation'] },
              ].map((path) => (
                <Link key={path.title} to={`/browse?path=${path.ids.join(',')}`} className={styles.pathCard}>
                  <h3>{path.title}</h3>
                  <p>{path.desc}</p>
                </Link>
              ))}
            </div>
          </section>
        </AnimatedSection>

        {/* Compass Preview */}
        <AnimatedSection>
          <section className={styles.compassSection}>
            <h2 className={styles.sectionTitle}>你的哲学罗盘</h2>
            <p className={styles.sectionSubtitle}>
              {interactionCount >= 8
                ? `你已完成 ${interactionCount} 个思想实验——查看你的完整哲学罗盘`
                : interactionCount > 0
                  ? `你已完成 ${interactionCount} 个，再做 ${8 - interactionCount} 个即可解锁哲学罗盘`
                  : '完成 8 个思想实验后，回来查看你的哲学倾向'}
            </p>
            <CompassMini />
          </section>
        </AnimatedSection>
      </div>
    </>
  );
}
