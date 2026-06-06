import { useTheme } from '../../context/ThemeContext.jsx';
import styles from './ThemeToggle.module.css';

export default function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      className={styles.toggle}
      aria-label={theme === 'dark' ? '切换到亮色主题' : '切换到暗色主题'}
      title={theme === 'dark' ? '亮色模式' : '暗色模式'}
    >
      <span className={`${styles.icon} ${theme === 'dark' ? styles.show : ''}`}>☀️</span>
      <span className={`${styles.icon} ${theme === 'light' ? styles.show : ''}`}>🌙</span>
    </button>
  );
}
