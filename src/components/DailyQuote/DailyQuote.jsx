import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import experiments from '../../data/experiments.js';
import styles from './DailyQuote.module.css';

const quotes = [];
for (const e of experiments) {
  for (const ch of e.content?.interactive?.choices || []) {
    if (ch.quote) {
      quotes.push({ text: ch.quote.text, attribution: ch.quote.attribution, expId: e.id, expTitle: e.title });
    }
  }
}

export default function DailyQuote() {
  const [idx] = useState(() => Math.floor(Math.random() * quotes.length));
  const q = quotes[idx];

  return (
    <div className={styles.card}>
      <p className={styles.text}>「{q.text}」</p>
      <cite className={styles.attr}>—— {q.attribution}</cite>
      <Link to={`/experiment/${q.expId}`} className={styles.link}>{q.expTitle} →</Link>
    </div>
  );
}
