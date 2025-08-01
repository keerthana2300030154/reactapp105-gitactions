import { useEffect, useState } from 'react';
import './style.css';

const THEME_KEY = 'site-theme';

function App() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem(THEME_KEY);
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_KEY, theme);
  }, [theme]);

  const toggle = () => setTheme(t => (t === 'dark' ? 'light' : 'dark'));

  const isDark = theme === 'dark';
  const emoji = isDark ? '🌞' : '🌙'; // Sun for light, moon for dark

  return (
    <div>
      <nav>
        <h1 className="nav-title">Welcome to My React Project - S105</h1>
        <button
          className="theme-toggle"
          onClick={toggle}
          aria-label="Toggle dark/light mode"
        >
          <span>{emoji}</span>
          {isDark ? 'Light Mode' : 'Dark Mode'}
        </button>
      </nav>

      <main>
        <h1>CI/CD and Cloud DevOps Course</h1>
        <p>This is a simple homepage deployed on GitHub Actions using Vite.</p>
        <h1>Done with Git Pages & Git Actions</h1>
      </main>
    </div>
  );
}

export default App;

