import { useState, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';
import { usePhilosophy } from '../../context/PhilosophyContext.jsx';
import LevelProgress from '../../components/LevelProgress/LevelProgress.jsx';
import TagFilter from '../../components/TagFilter/TagFilter.jsx';
import ExperimentGrid from '../../components/ExperimentGrid/ExperimentGrid.jsx';
import { filterExperiments, getExperimentWithSubcategories, CATEGORIES } from '../../utils/helpers.js';
import { SUBCATEGORY_TREE } from '../../data/subcategories.js';
import styles from './Browse.module.css';

export default function Browse() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [search, setSearch] = useState('');
  const { unlockedDifficulty, level } = usePhilosophy();

  const activeCategory = searchParams.get('category') || '全部';
  const activeDifficulty = searchParams.get('difficulty') || '全部';
  const activeSubcategory = searchParams.get('sub') || '';
  const pathParam = searchParams.get('path');
  const pathIds = pathParam ? pathParam.split(',') : null;

  const setCategory = (cat) => {
    // Clear subcategory and difficulty when switching main category
    setSearchParams(cat !== '全部' ? { category: cat } : {});
  };

  const setDifficulty = (diff) => {
    const params = {};
    if (activeCategory !== '全部') params.category = activeCategory;
    if (diff !== '全部') params.difficulty = diff;
    if (activeSubcategory) params.sub = activeSubcategory;
    setSearchParams(params);
  };

  const setSubcategory = (sub) => {
    const params = {};
    if (activeCategory !== '全部') params.category = activeCategory;
    if (activeDifficulty !== '全部') params.difficulty = activeDifficulty;
    if (sub) params.sub = sub;
    setSearchParams(params);
  };

  // Available subcategories for current active category
  const activeSubcategories = activeCategory !== '全部'
    ? SUBCATEGORY_TREE[activeCategory] || []
    : [];


  // Path-based filtering
  const pathTitle = useMemo(() => {
    if (!pathIds) return null;
    const first = pathIds[0];
    const titles = {
      'brain-in-vat': '怀疑论之旅',
      'trolley-problem': '正义的边界',
      'nagel-bat': '意识之谜',
      'buridans-ass': '自由意志',
      'zhuangzi-butterfly': '东方智慧',
      'prisoner-dilemma': '合作与博弈',
      'ship-of-theseus': '自我同一性',
      'white-horse': '语言与意义',
      'state-of-nature': '权力与正义',
      'experience-machine': '生命的意义',
      'falsifiability': '科学与真理',
      'hume-causation': '因果之谜',
    };
    return titles[first] || '学习路径';
  }, [pathIds]);

  const filtered = useMemo(() => {
    let results = filterExperiments({ category: activeCategory, difficulty: activeDifficulty, search });
    results = results.map(getExperimentWithSubcategories);
    if (activeSubcategory) {
      results = results.filter((e) => e.subcategories.includes(activeSubcategory));
    }
    // Path filtering
    if (pathIds) {
      const pathSet = new Set(pathIds);
      results = results.filter((e) => pathSet.has(e.id));
      // Sort in path order
      results.sort((a, b) => pathIds.indexOf(a.id) - pathIds.indexOf(b.id));
    }
    return results.map((exp) => ({
      ...exp,
      locked: exp.difficulty > unlockedDifficulty,
    }));
  }, [activeCategory, activeDifficulty, search, unlockedDifficulty, activeSubcategory, pathIds]);

  const lockedCount = filtered.filter((e) => e.locked).length;
  const unlockedCount = filtered.length - lockedCount;

  return (
    <div className={`container ${styles.browse}`}>
      <header className={styles.header}>
        <h1 className={styles.title}>{pathTitle || '思想实验库'}</h1>
        <p className={styles.subtitle}>
          {pathTitle
            ? `按顺序完成 ${filtered.length} 个实验，系统探索这一主题`
            : '探索跨越两千年的哲学思想实验，从先秦的庄子到当代的普特南'}
        </p>
        {pathTitle && (
          <button onClick={() => setSearchParams({})} className={styles.clearPathBtn}>
            ← 离开路径，浏览全部实验
          </button>
        )}
        <div className={styles.levelRow}>
          <LevelProgress />
        </div>
      </header>

      <div className={styles.filters}>
        <div className={styles.searchBar}>
          <svg className={styles.searchIcon} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="搜索实验标题、作者、关键词..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className={styles.searchInput}
          />
        </div>

        <TagFilter
          activeCategory={activeCategory}
          onCategoryChange={setCategory}
        />

        {activeSubcategories.length > 0 && (
          <div className={styles.subRow}>
            <span className={styles.filterLabel}>细分：</span>
            <button
              onClick={() => setSubcategory('')}
              className={`${styles.subBtn} ${!activeSubcategory ? styles.subBtnActive : ''}`}
            >
              全部
            </button>
            {activeSubcategories.map((sub) => (
              <button
                key={sub.key}
                onClick={() => setSubcategory(sub.key)}
                className={`${styles.subBtn} ${activeSubcategory === sub.key ? styles.subBtnActive : ''}`}
                title={sub.desc}
              >
                {sub.label}
              </button>
            ))}
          </div>
        )}

        <div className={styles.difficultyRow}>
          <span className={styles.filterLabel}>难度：</span>
          {['全部', '入门', '进阶', '挑战'].map((d) => (
            <button
              key={d}
              onClick={() => setDifficulty(d)}
              className={`${styles.diffBtn} ${activeDifficulty === d ? styles.diffBtnActive : ''}`}
            >
              {d}
            </button>
          ))}
        </div>
      </div>

      <div className={styles.resultInfo}>
        <span>共 {filtered.length} 个实验 · 已解锁 {unlockedCount} 个</span>
        {lockedCount > 0 && (
          <span className={styles.lockHint}>🔒 {lockedCount} 个待解锁（需要 {level.title} 等级提升）</span>
        )}
      </div>

      {filtered.length > 0 ? (
        <ExperimentGrid experiments={filtered} searchTerm={search} />
      ) : (
        <div className={styles.empty}>
          <p>未找到匹配的思想实验</p>
          <button onClick={() => { setCategory('全部'); setDifficulty('全部'); setSearch(''); }}>
            清除筛选
          </button>
        </div>
      )}
    </div>
  );
}
