import ExperimentCard from '../ExperimentCard/ExperimentCard.jsx';
import styles from './ExperimentGrid.module.css';

export default function ExperimentGrid({ experiments, searchTerm }) {
  if (!experiments || experiments.length === 0) return null;

  return (
    <div className={styles.grid}>
      {experiments.map((exp) => (
        <ExperimentCard key={exp.id} experiment={exp} searchTerm={searchTerm} />
      ))}
    </div>
  );
}
