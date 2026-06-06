import { Link } from 'react-router-dom';
import { usePhilosophy } from '../../context/PhilosophyContext.jsx';
import { getPhilosophicalType, getScoresArray } from '../../utils/compass.js';
import { getExperimentById } from '../../utils/helpers.js';
import RadarChart from '../../components/PhilosophyCompass/RadarChart.jsx';
import DataManager from '../../components/DataManager/DataManager.jsx';
import styles from './CompassPage.module.css';

const MIN_INTERACTIONS = 8;

export default function CompassPage() {
  const { state, dispatch, interactionCount } = usePhilosophy();
  const type = getPhilosophicalType(state.compassScores);
  const scoresData = getScoresArray(state.compassScores);

  const handleReset = () => {
    if (window.confirm('确定要重置你的哲学罗盘吗？所有互动记录将被清除。')) {
      dispatch({ type: 'RESET_COMPASS' });
    }
  };

  if (interactionCount === 0) {
    return (
      <div className={`container ${styles.page}`}>
        <div className={styles.emptyState}>
          <span className={styles.emptyIcon}>🧭</span>
          <h1 className={styles.emptyTitle}>你的哲学人格尚未浮现</h1>
          <p className={styles.emptyDesc}>
            完成 {MIN_INTERACTIONS} 个思想实验中的选择后，你将获得一个四字母的哲学人格类型——
            就像 MBTI，但是关于你的道德直觉、认知风格和存在姿态。
          </p>
          <Link to="/browse" className={styles.cta}>
            开始探索思想实验 →
          </Link>
        </div>
      </div>
    );
  }

  if (interactionCount < MIN_INTERACTIONS) {
    const remaining = MIN_INTERACTIONS - interactionCount;
    return (
      <div className={`container ${styles.page}`}>
        <div className={styles.emptyState}>
          <span className={styles.emptyIcon}>🔮</span>
          <h1 className={styles.emptyTitle}>哲学人格正在凝固中…</h1>
          <p className={styles.emptyDesc}>
            你已完成 {interactionCount} 个思想实验，还需要再做 <strong>{remaining}</strong> 个
            才能看清你的哲学人格全貌。就像一杯茶需要时间沉淀——你的立场也需要足够多的考验。
          </p>
          <Link to="/browse" className={styles.cta}>
            继续探索 →
          </Link>
        </div>
      </div>
    );
  }

  if (!type) return null;

  // Axis display config
  const axisConfig = [
    {
      key: 'ethics', label: '道德轴', left: '功利主义', right: '道义论',
      desc: '「结果」更重要 vs 「原则」更重要',
      userScore: Math.round(((type.axes.ethics + 200) / 400) * 100),
    },
    {
      key: 'knowledge', label: '认知轴', left: '理性主义', right: '经验主义',
      desc: '「逻辑推理」 vs 「亲身体验」',
      userScore: Math.round(((type.axes.knowledge + 200) / 400) * 100),
    },
    {
      key: 'reality', label: '实在轴', left: '唯物主义', right: '唯心主义',
      desc: '「物质根基」 vs 「精神优先」',
      userScore: Math.round(((type.axes.reality + 200) / 400) * 100),
    },
    {
      key: 'freedom', label: '自由轴', left: '存在主义', right: '契约论',
      desc: '「自由至上」 vs 「秩序优先」',
      userScore: Math.round(((type.axes.freedom + 200) / 400) * 100),
    },
  ];

  return (
    <div className={`container ${styles.page}`}>
      {/* Hero Type Card */}
      <div className={styles.heroCard}>
        <div className={styles.typeBadge}>
          <span className={styles.typeEmoji}>{type.emoji}</span>
          <div>
            <h1 className={styles.typeCode}>{type.code}</h1>
            <h2 className={styles.typeName}>{type.name}</h2>
          </div>
        </div>
        <p className={styles.typeSubtitle}>{type.subtitle}</p>
        <p className={styles.tagline}>{type.tagline}</p>
      </div>

      {/* 4 Axes Sliders */}
      <section className={styles.axesSection}>
        <h2 className={styles.sectionTitle}>你的四维哲学画像</h2>
        {axisConfig.map((axis) => (
          <div key={axis.key} className={styles.axisRow}>
            <div className={styles.axisLabels}>
              <span className={styles.axisLeft}>{axis.left}</span>
              <span className={styles.axisRight}>{axis.right}</span>
            </div>
            <div className={styles.axisBar}>
              <div className={styles.axisTrack}>
                <div
                  className={styles.axisFill}
                  style={{ width: `${axis.userScore}%` }}
                />
                <div className={styles.axisMid} />
                <span
                  className={styles.axisDot}
                  style={{ left: `${axis.userScore}%` }}
                />
              </div>
            </div>
            <p className={styles.axisDesc}>{axis.desc}</p>
          </div>
        ))}
      </section>

      {/* Strengths & Weaknesses */}
      <section className={styles.swSection}>
        <div className={styles.swCard}>
          <h3>✨ 你的哲学超能力</h3>
          <p>{type.strengths}</p>
        </div>
        <div className={styles.swCard}>
          <h3>💀 你的哲学软肋</h3>
          <p>{type.weaknesses}</p>
        </div>
      </section>

      {/* Traits Tags */}
      <section className={styles.traitsSection}>
        <h3>🏷️ 你的三个标签</h3>
        <div className={styles.traitsRow}>
          {type.traits.map((t, i) => (
            <span key={i} className={styles.traitTag}>{t}</span>
          ))}
        </div>
      </section>

      {/* Philosopher Reincarnation */}
      <section className={styles.philosopherCard}>
        <h3>🧬 你可能是谁的转世</h3>
        <p className={styles.philosopherText}>{type.philosopher}</p>
      </section>

      {/* Quote */}
      <section className={styles.quoteCard}>
        <blockquote>{type.quote}</blockquote>
      </section>

      {/* Compatibility */}
      <section className={styles.compSection}>
        <div className={styles.compCard}>
          <span className={styles.compEmoji}>💚</span>
          <h4>你最合拍的类型</h4>
          <div className={styles.compCodes}>
            {type.compatible.map((c) => (
              <span key={c} className={styles.compCode}>{c}</span>
            ))}
          </div>
          <p>这些类型的思路和你天然互补——和他们辩论会是一种享受。</p>
        </div>
        <div className={styles.compCard}>
          <span className={styles.compEmoji}>⚡</span>
          <h4>可能让你血压升高的类型</h4>
          <div className={styles.compCodes}>
            {type.clash.map((c) => (
              <span key={c} className={styles.compCodeClash}>{c}</span>
            ))}
          </div>
          <p>你们可能争论到天亮——谁也不服谁——但这正是哲学有趣的地方。</p>
        </div>
      </section>

      {/* Vibe */}
      <section className={styles.vibeCard}>
        <span className={styles.vibeEmoji}>🎵</span>
        <h4>你的哲学气场</h4>
        <p>{type.vibe}</p>
      </section>

      {/* Radar Chart */}
      <section className={styles.radarSection}>
        <h2 className={styles.sectionTitle}>十维雷达图</h2>
        <RadarChart />
      </section>

      {/* History */}
      <section className={styles.historySection}>
        <h2>你的哲学足迹</h2>
        <div className={styles.historyGrid}>
          {[...state.interactions].sort((a, b) => b.timestamp - a.timestamp).map((interaction) => {
            const exp = getExperimentById(interaction.experimentId);
            const choice = exp?.content?.interactive?.choices?.find(
              (c) => c.id === interaction.choiceId
            );
            return (
              <Link
                key={interaction.experimentId}
                to={`/experiment/${interaction.experimentId}`}
                className={styles.historyItem}
              >
                <span className={styles.historyExp}>{exp?.title || interaction.experimentId}</span>
                <span className={styles.historyChoice}>{choice?.label || ''}</span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Data Manager */}
      <DataManager />

      {/* Actions */}
      <div className={styles.actions}>
        <button onClick={handleReset} className={styles.resetBtn}>重置罗盘</button>
        <Link to="/browse" className={styles.continueBtn}>继续探索 →</Link>
      </div>
    </div>
  );
}
