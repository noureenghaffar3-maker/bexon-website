import { useEffect, useState } from 'react';

export default function Preloader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const timer = window.setTimeout(() => setHidden(true), 850);
    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div className={`preloader${hidden ? ' is-hidden' : ''}`} aria-hidden="true">
      <div className="preloader__mark">
        <img src="/images/logos/logo-2.webp" alt="" />
      </div>
      <div className="preloader__bar">
        <span />
      </div>
      <p>Loading Bexon</p>
    </div>
  );
}
