import experiments from '../data/experiments.js';
import references from '../data/references.js';
import subcategoryMap from '../data/subcategories.js';

export function getExperimentById(id) {
  return experiments.find((e) => e.id === id) || null;
}

// Get experiment with subcategories merged in
export function getExperimentWithSubcategories(experiment) {
  const subs = subcategoryMap[experiment.id] || [];
  return { ...experiment, subcategories: subs };
}

// Merge experiment data with academic references
const DUPLICATE_REF_MAP = {
  'violinist-abortion': 'thomsons-violinist',
  'brain-in-a-vat-2': 'brain-in-vat',
  'singer-child-buggy': 'drowning-child',
  'problem-of-evil-animals': 'problem-of-evil',
  'searle-ai': 'chinese-room',
  'ship-of-theseus-v2': 'ship-of-theseus',
};

export function getExperimentWithReferences(id) {
  const experiment = getExperimentById(id);
  if (!experiment) return null;
  // Look up references — check direct match first, then duplicate map
  const refId = DUPLICATE_REF_MAP[id] || id;
  const refs = references[refId];
  if (refs) {
    return { ...experiment, content: { ...experiment.content, references: refs } };
  }
  return experiment;
}

export function getRelatedExperiments(relatedIds) {
  if (!relatedIds || relatedIds.length === 0) return [];
  return relatedIds
    .map((id) => getExperimentById(id))
    .filter(Boolean);
}

export function filterExperiments({ category, difficulty, search }) {
  let results = [...experiments];

  if (category && category !== '全部') {
    results = results.filter((e) => e.categories.includes(category));
  }

  if (difficulty && difficulty !== '全部') {
    const diffMap = { '入门': 1, '进阶': 2, '挑战': 3 };
    const targetDiff = diffMap[difficulty];
    if (targetDiff) {
      results = results.filter((e) => e.difficulty === targetDiff);
    }
  }

  if (search && search.trim()) {
    const query = search.trim().toLowerCase();
    results = results.filter(
      (e) =>
        e.title.toLowerCase().includes(query) ||
        e.philosopher.toLowerCase().includes(query) ||
        e.summary.toLowerCase().includes(query)
    );
  }

  return results;
}

// Get prev/next experiments for navigation
export function getPrevNextExperiments(id) {
  const idx = experiments.findIndex((e) => e.id === id);
  if (idx === -1) return { prev: null, next: null };
  return {
    prev: idx > 0 ? { id: experiments[idx - 1].id, title: experiments[idx - 1].title } : null,
    next: idx < experiments.length - 1 ? { id: experiments[idx + 1].id, title: experiments[idx + 1].title } : null,
  };
}

export function getRandomFeatured() {
  const featured = experiments.filter((e) => e.featured);
  if (featured.length === 0) return experiments[0];
  return featured[Math.floor(Math.random() * featured.length)];
}

export const CATEGORIES = [
  { key: '全部', label: '全部', color: 'var(--color-text-secondary)' },
  { key: '伦理学', label: '伦理学', color: 'var(--color-tag-ethics)' },
  { key: '形而上学', label: '形而上学', color: 'var(--color-tag-metaphysics)' },
  { key: '认识论', label: '认识论', color: 'var(--color-tag-epistemology)' },
  { key: '心灵哲学', label: '心灵哲学', color: 'var(--color-tag-mind)' },
  { key: '逻辑学', label: '逻辑学', color: 'var(--color-tag-logic)' },
  { key: '政治哲学', label: '政治哲学', color: 'var(--color-tag-politics)' },
  { key: '语言哲学', label: '语言哲学', color: 'var(--color-tag-epistemology)' },
];

// Generate a search URL for a reference
export function getReferenceSearchUrl(author, title) {
  const query = encodeURIComponent(`${author} "${title}"`);
  return `https://scholar.google.com/scholar?q=${query}`;
}

export const DIFFICULTY_LABELS = { 1: '入门', 2: '进阶', 3: '挑战' };
export const ERA_LABELS = {
  '先秦': '先秦',
  '古希腊': '古希腊',
  '古印度': '古印度',
  '近代': '近代',
  '现代': '现代',
  '当代': '当代',
};
