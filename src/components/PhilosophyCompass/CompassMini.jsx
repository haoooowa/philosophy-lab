import { Link } from 'react-router-dom';
import { usePhilosophy } from '../../context/PhilosophyContext.jsx';
import { getPhilosophicalType } from '../../utils/compass.js';
import styles from './Compass.module.css';

export default function CompassMini() {
  const { compassScores, interactionCount } = usePhilosophy();
  const type = getPhilosophicalType(compassScores);
  const MIN = 8;

  if (interactionCount === 0) {
    return (
      <div className={styles.emptyCompass}>
        <div className={styles.emptyIcon}>🧭</div>
        <p>完成 {MIN} 个思想实验后，这里将揭示你的哲学人格类型——像 MBTI，但是关于你的道德直觉和存在姿态。</p>
        <Link to="/browse" className={styles.emptyLink}>
          开始探索 →
        </Link>
      </div>
    );
  }

  if (interactionCount < MIN) {
    return (
      <div className={styles.emptyCompass}>
        <div className={styles.emptyIcon}>🔮</div>
        <p>已完成 {interactionCount}/{MIN} 个实验…你的哲学轮廓正在成形。再做 {MIN - interactionCount} 个即可揭晓。</p>
        <Link to="/browse" className={styles.emptyLink}>
          继续探索 →
        </Link>
      </div>
    );
  }

  if (!type) return null;

  return (
    <div className={styles.miniWrap}>
      <div className={styles.miniHero}>
        <span className={styles.miniEmoji}>{type.emoji}</span>
        <div>
          <span className={styles.miniCode}>{type.code}</span>
          <span className={styles.miniName}> — {type.name}</span>
        </div>
        <p className={styles.miniTagline}>{type.tagline}</p>
      </div>
      <Link to="/compass" className={styles.viewFull}>
        查看完整哲学画像 →
      </Link>
    </div>
  );
}
