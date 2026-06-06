// ═══════════════════════════════════════════
// Level & Progression System v2
// 10 tiers, finer granularity, clearer perks
// ═══════════════════════════════════════════

export const XP_PER_DIFFICULTY = { 1: 10, 2: 25, 3: 45 };

export const STAGES = [
  { key: '启蒙', label: '启蒙期', icon: '🌱', range: [1, 3], color: '#86c990' },
  { key: '问道', label: '问道期', icon: '📖', range: [4, 6], color: '#7eb8d4' },
  { key: '通幽', label: '通幽期', icon: '🔭', range: [7, 9], color: '#a48fd4' },
  { key: '入圣', label: '入圣期', icon: '🏛️', range: [10, 10], color: '#d4b87a' },
];

export const LEVELS = [
  { level: 1, xp: 0, stage: '启蒙', title: '好奇的门外人', unlockDiff: 1,
    desc: '刚刚推开哲学之门。只能访问入门难度——最经典、无需前置知识的思想实验。', perk: '入门实验解锁' },
  { level: 2, xp: 20, stage: '启蒙', title: '初窥门径者', unlockDiff: 1,
    desc: '已完成几个经典实验，哲学直觉正在成形。', perk: '入门实验' },
  { level: 3, xp: 50, stage: '启蒙', title: '思辨学徒', unlockDiff: 2,
    desc: '进阶难度已解锁。形而上学、认识论的大门向你敞开。', perk: '进阶实验解锁' },
  { level: 4, xp: 100, stage: '问道', title: '伦理论辩手', unlockDiff: 2,
    desc: '能够应对复杂的伦理困境和逻辑悖论。', perk: '进阶实验' },
  { level: 5, xp: 170, stage: '问道', title: '辩证沉思者', unlockDiff: 2,
    desc: '心灵哲学、政治哲学都在你的射程之内。', perk: '进阶实验' },
  { level: 6, xp: 260, stage: '问道', title: '体系建构者', unlockDiff: 3,
    desc: '全部 192 个实验已解锁！从古希腊到当代——自由驰骋于整个哲学史版图。', perk: '全部实验解锁' },
  { level: 7, xp: 370, stage: '通幽', title: '跨域综合者', unlockDiff: 3,
    desc: '不同流派在你脑中交汇。你不仅在答题——你在构建自己的哲学体系。', perk: '全部实验' },
  { level: 8, xp: 500, stage: '通幽', title: '形而上漫游者', unlockDiff: 3,
    desc: '你已遍历过大多数思想实验。现在的你能够自如引用不同传统的论据。', perk: '全部实验' },
  { level: 9, xp: 660, stage: '通幽', title: '智慧先知', unlockDiff: 3,
    desc: '融会贯通——你的哲学视野已经触及人类思想的最深处。', perk: '全部实验' },
  { level: 10, xp: 850, stage: '入圣', title: '哲人王', unlockDiff: 3,
    desc: '柏拉图理想中的统治者在你身上具现。你遍历了千年来最深刻的思想实验——依然在追问。', perk: '全成就' },
];

export function getLevel(xp) {
  for (let i = LEVELS.length - 1; i >= 0; i--) {
    if (xp >= LEVELS[i].xp) return LEVELS[i];
  }
  return LEVELS[0];
}

export function getStage(level) {
  return STAGES.find((s) => level >= s.range[0] && level <= s.range[1]);
}

export function getUnlockedDifficulty(xp) {
  return getLevel(xp).unlockDiff;
}

// XP to next level, for progress bar
export function getXpProgress(xp) {
  const current = getLevel(xp);
  const nextIdx = LEVELS.findIndex((l) => l.level === current.level) + 1;
  const next = LEVELS[nextIdx];
  if (!next) return { current: xp, max: xp, progress: 100, nextTitle: '已达最高' };
  return {
    current: xp,
    max: next.xp,
    progress: Math.round(((xp - current.xp) / (next.xp - current.xp)) * 100),
    nextTitle: next.title,
  };
}
