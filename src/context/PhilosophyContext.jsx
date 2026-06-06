import { createContext, useContext, useReducer, useEffect, useMemo, useState, useCallback } from 'react';
import { calculateCompass } from '../utils/compass.js';
import schoolEnrichment from '../data/school-enrichment.js';
import experiments from '../data/experiments.js';
import { XP_PER_DIFFICULTY, getLevel, getUnlockedDifficulty } from '../utils/levels.js';

const PhilosophyContext = createContext(null);

const STORAGE_KEY = 'philosophy-lab-interactions';

function loadFromStorage() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? JSON.parse(raw) : [];
  } catch {
    return [];
  }
}

function saveToStorage(interactions) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(interactions));
  } catch {
    // localStorage full or unavailable
  }
}

// Merge enrichment data with the original schools from the experiment choice
function enrichSchools(experimentId, choiceId, originalSchools) {
  const extra = schoolEnrichment[experimentId]?.[choiceId];
  if (!extra || extra.length === 0) return originalSchools;
  // Combine original + extra schools — extra schools are complementary dimensions
  return [...originalSchools, ...extra];
}

function reducer(state, action) {
  switch (action.type) {
    case 'ADD_INTERACTION': {
      const { experimentId, choiceId, schools } = action.payload;
      const enrichedSchools = enrichSchools(experimentId, choiceId, schools);
      // Replace existing interaction for the same experiment
      const filtered = state.interactions.filter(
        (i) => i.experimentId !== experimentId
      );
      const newInteractions = [
        ...filtered,
        { experimentId, choiceId, schools: enrichedSchools, timestamp: Date.now() },
      ];
      const compassScores = calculateCompass(newInteractions);
      return { ...state, interactions: newInteractions, compassScores };
    }
    case 'REMOVE_INTERACTION': {
      const filtered = state.interactions.filter(
        (i) => i.experimentId !== action.payload
      );
      const compassScores = calculateCompass(filtered);
      return { ...state, interactions: filtered, compassScores };
    }
    case 'RESET_COMPASS':
      return { interactions: [], compassScores: {} };
    case 'IMPORT_DATA': {
      const interactions = action.payload;
      const compassScores = calculateCompass(interactions);
      return { ...state, interactions, compassScores };
    }
    case 'LOAD_FROM_STORAGE': {
      const interactions = action.payload;
      const compassScores = calculateCompass(interactions);
      return { ...state, interactions, compassScores };
    }
    default:
      return state;
  }
}

const initialState = {
  interactions: [],
  compassScores: {},
};

export function PhilosophyProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  // Hydrate from localStorage on mount
  useEffect(() => {
    const stored = loadFromStorage();
    if (stored.length > 0) {
      dispatch({ type: 'LOAD_FROM_STORAGE', payload: stored });
    }
  }, []);

  // Persist to localStorage on change
  useEffect(() => {
    saveToStorage(state.interactions);
  }, [state.interactions]);

  function getExperimentInteraction(experimentId) {
    return state.interactions.find((i) => i.experimentId === experimentId);
  }

  // Derive XP and level from completed unique experiments
  const { xp, level, unlockedDifficulty } = useMemo(() => {
    const uniqueIds = [...new Set(state.interactions.map((i) => i.experimentId))];
    let totalXp = 0;
    for (const id of uniqueIds) {
      const exp = experiments.find((e) => e.id === id);
      if (exp) totalXp += XP_PER_DIFFICULTY[exp.difficulty] || 10;
    }
    const lvl = getLevel(totalXp);
    return { xp: totalXp, level: lvl, unlockedDifficulty: lvl.unlockDiff };
  }, [state.interactions]);

  // Master key: unlock all experiments regardless of level
  const MASTER_KEY = 'philosophy-lab-master';
  const [masterMode, setMasterMode] = useState(() => {
    try { return localStorage.getItem(MASTER_KEY) === '1'; } catch { return false; }
  });
  const toggleMaster = useCallback(() => {
    setMasterMode((prev) => {
      const next = !prev;
      try { localStorage.setItem(MASTER_KEY, next ? '1' : '0'); } catch {}
      return next;
    });
  }, []);

  const effectiveUnlockedDifficulty = masterMode ? 3 : unlockedDifficulty;

  const completedIds = useMemo(
    () => new Set(state.interactions.map((i) => i.experimentId)),
    [state.interactions]
  );

  const value = {
    state,
    dispatch,
    getExperimentInteraction,
    compassScores: state.compassScores,
    interactionCount: state.interactions.length,
    xp,
    level,
    unlockedDifficulty: effectiveUnlockedDifficulty,
    masterMode,
    toggleMaster,
    completedIds,
  };

  return (
    <PhilosophyContext.Provider value={value}>
      {children}
    </PhilosophyContext.Provider>
  );
}

export function usePhilosophy() {
  const ctx = useContext(PhilosophyContext);
  if (!ctx) {
    throw new Error('usePhilosophy must be used within PhilosophyProvider');
  }
  return ctx;
}
