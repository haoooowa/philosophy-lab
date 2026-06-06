import { useState, useEffect } from 'react';
import { ChevronRight } from '../../assets/Icons.jsx';
import styles from './BackToTop.module.css';

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handler = () => setVisible(window.scrollY > 400);
    window.addEventListener('scroll', handler, { passive: true });
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <button
      className={`${styles.btn} ${visible ? styles.visible : ''}`}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      aria-label="返回顶部"
      title="返回顶部"
    >
      <span style={{ display:'block', transform:'rotate(-90deg)' }}><ChevronRight size={18} /></span>
    </button>
  );
}
