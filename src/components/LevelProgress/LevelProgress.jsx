import { usePhilosophy } from '../../context/PhilosophyContext.jsx';
import { LEVELS, STAGES, getStage, getXpProgress } from '../../utils/levels.js';
import { SproutIcon, BookOpenIcon, TelescopeIcon, TempleIcon } from '../../assets/Icons.jsx';
import styles from './LevelProgress.module.css';

export default function LevelProgress() {
  const { xp, level } = usePhilosophy();
  const stage = getStage(level.level);
  const { progress, nextTitle, current, max } = getXpProgress(xp);

  return (
    <div className={styles.wrap} title={`${xp} XP · ${level.stage} · ${level.title}`}>
      {/* Stage dots with colors */}
      <div className={styles.stages}>
        {STAGES.map((s) => {
          const reached = level.level >= s.range[1];
          const current = level.level >= s.range[0] && level.level <= s.range[1];
          const icons = { '🌱': SproutIcon, '📖': BookOpenIcon, '🔭': TelescopeIcon, '🏛️': TempleIcon };
          const Icon = icons[s.icon];
          return (
            <span
              key={s.key}
              className={`${styles.stageDot} ${reached ? styles.stageDone : ''} ${current ? styles.stageCurrent : ''}`}
              style={{ color: current || reached ? s.color : undefined }}
              title={s.label}
            >
              {Icon ? <Icon size={15} /> : s.icon}
            </span>
          );
        })}
        <span className={styles.stageBar}>
          <span className={styles.stageFill} style={{ width: ((level.level - 1) / 9) * 100 + '%' }} />
        </span>
      </div>

      {/* Level info */}
      <div className={styles.info}>
        <span className={styles.badge} style={{ borderColor: stage?.color }}>Lv.{level.level}</span>
        <span className={styles.title}>{level.title}</span>
      </div>

      {/* 4-stage summary */}
      <div className={styles.stageSummary}>
        {STAGES.map((s) => (
          <span key={s.key}
            className={styles.stageTag}
            style={{
              opacity: level.level >= s.range[0] ? 1 : 0.3,
              color: level.level >= s.range[0] ? s.color : undefined,
            }}
          >{s.label}</span>
        ))}
      </div>

      {/* XP bar */}
      {nextTitle !== '已达最高' && (
        <div className={styles.barRow}>
          <span className={styles.xpLabel}>{current}/{max} XP</span>
          <div className={styles.bar}>
            <div className={styles.fill} style={{ width: `${progress}%` }} />
          </div>
        </div>
      )}
    </div>
  );
}
