import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { usePhilosophy } from '../../context/PhilosophyContext.jsx';
import LevelProgress from '../LevelProgress/LevelProgress.jsx';
import ThemeToggle from '../ThemeToggle/ThemeToggle.jsx';
import { FlaskIcon } from '../../assets/Icons.jsx';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { interactionCount, masterMode, toggleMaster } = usePhilosophy();

  // Keyboard shortcut: Ctrl+Shift+U — password-protected master mode toggle
  useEffect(() => {
    const handler = (e) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'U') {
        e.preventDefault();
        if (masterMode) {
          toggleMaster(); // turning off is free
        } else {
          const pw = prompt('请输入管理员密码：');
          if (pw === 'zhexue123') {
            toggleMaster();
          } else if (pw !== null) {
            alert('密码错误');
          }
        }
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [toggleMaster, masterMode]);

  const navItems = [
    { to: '/', label: '首页' },
    { to: '/browse', label: '浏览' },
    { to: '/timeline', label: '时间线' },
    { to: '/paths', label: '学习路径' },
    { to: '/compass', label: '哲学罗盘' },
    { to: '/about', label: '关于' },
  ];

  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.navInner}`}>
        <Link to="/" className={styles.logo}>
          <span className={styles.logoIcon}>{masterMode ? '🔮' : <FlaskIcon size={26} />}</span>
          <span className={styles.logoText}>思想实验室{masterMode ? ' ∞' : ''}</span>
        </Link>

        {interactionCount > 0 && (
          <div className={styles.navLevel}>
            <LevelProgress />
          </div>
        )}

        <ThemeToggle />
        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen((prev) => !prev)}
          aria-label={menuOpen ? '关闭菜单' : '打开菜单'}
        >
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.lineOpen : ''}`} />
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.lineOpen : ''}`} />
          <span className={`${styles.hamburgerLine} ${menuOpen ? styles.lineOpen : ''}`} />
        </button>

        <ul className={`${styles.navLinks} ${menuOpen ? styles.navOpen : ''}`}>
          {navItems.map((item) => (
            <li key={item.to}>
              <NavLink
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  `${styles.navLink} ${isActive ? styles.navLinkActive : ''}`
                }
                onClick={() => setMenuOpen(false)}
              >
                {item.label}
              </NavLink>
            </li>
          ))}
          <li className={styles.mobileToggle}>
            <ThemeToggle />
          </li>
        </ul>
      </div>
    </nav>
  );
}
