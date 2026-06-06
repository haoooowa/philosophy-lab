import { useState } from 'react';
import { usePhilosophy } from '../../context/PhilosophyContext.jsx';
import StatsBar from '../StatsBar/StatsBar.jsx';
import styles from './ChoiceScenario.module.css';

export default function ChoiceScenario({ interactive, experimentId, stats }) {
  const { dispatch, getExperimentInteraction } = usePhilosophy();
  const existingInteraction = getExperimentInteraction(experimentId);
  const [selectedId, setSelectedId] = useState(existingInteraction?.choiceId || null);
  const [showResult, setShowResult] = useState(!!existingInteraction);

  const handleChoice = (choice) => {
    if (selectedId || existingInteraction) return; // Already chose
    setSelectedId(choice.id);
    setShowResult(true);
    dispatch({
      type: 'ADD_INTERACTION',
      payload: {
        experimentId,
        choiceId: choice.id,
        schools: choice.consequence.schools,
      },
    });
  };

  const handleChangeChoice = () => {
    dispatch({ type: 'REMOVE_INTERACTION', payload: experimentId });
    setSelectedId(null);
    setShowResult(false);
  };

  const selectedChoice = interactive.choices.find(
    (c) => c.id === (selectedId || existingInteraction?.choiceId)
  );

  const isSlider = interactive.type === 'slider';

  return (
    <section className={styles.scenario}>
      <h3 className={styles.prompt}>{interactive.prompt}</h3>

      {!showResult ? (
        <div className={`${styles.choices} ${isSlider ? styles.sliderLayout : ''}`}>
          {interactive.choices.map((choice) => (
            <button
              key={choice.id}
              className={`${styles.choiceBtn} ${selectedId === choice.id ? styles.choiceSelected : ''}`}
              onClick={() => handleChoice(choice)}
            >
              <span className={styles.choiceLabel}>{choice.label}</span>
            </button>
          ))}
        </div>
      ) : (
        <div className={styles.result}>
          <div className={styles.resultHeader}>
            <h4 className={styles.resultTitle}>
              {selectedChoice?.consequence.title}
            </h4>
          </div>

          <p className={styles.resultDesc}>
            {selectedChoice?.consequence.description}
          </p>

          {/* School badges */}
          <div className={styles.schools}>
            {selectedChoice?.consequence.schools
              .filter((s) => s.weight > 0)
              .map((school) => (
                <span
                  key={school.name}
                  className={styles.schoolBadge}
                >
                  {school.name}
                </span>
              ))}
          </div>

          {/* Stats bar */}
          {stats && (
            <StatsBar
              distribution={stats.distribution}
              choices={interactive.choices}
              selectedId={selectedId || existingInteraction?.choiceId}
              totalResponses={stats.totalResponses}
            />
          )}

          {/* Analysis & Quote */}
          {selectedChoice?.analysis && (
            <div className={styles.analysis}>
              <p>{selectedChoice.analysis}</p>
              {selectedChoice.quote && (
                <blockquote className={styles.quote}>
                  <p>「{selectedChoice.quote.text}」</p>
                  <cite>—— {selectedChoice.quote.attribution}</cite>
                </blockquote>
              )}
            </div>
          )}

          <button onClick={handleChangeChoice} className={styles.changeBtn}>
            重新选择
          </button>
        </div>
      )}
    </section>
  );
}
