import { useEffect, useState } from 'react';
import Icon from './Icon';

export default function BackToTop() {
  const [progress, setProgress] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const value = max > 0 ? Math.min(1, window.scrollY / max) : 0;
      setProgress(value);
      setVisible(window.scrollY > 500);
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <button
      type="button"
      className={`back-to-top${visible ? ' is-visible' : ''}`}
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
    >
      <svg viewBox="0 0 44 44" aria-hidden="true">
        <circle className="back-to-top__track" cx="22" cy="22" r="20" />
        <circle
          className="back-to-top__progress"
          cx="22"
          cy="22"
          r="20"
          style={{ strokeDashoffset: 126 - 126 * progress }}
        />
      </svg>
      <Icon name="arrowDown" size={18} className="back-to-top__icon" />
    </button>
  );
}
