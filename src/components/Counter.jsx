import { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Counter({ value, suffix = '', label, decimals = 0 }) {
  const numberRef = useRef(null);
  const wrapRef = useRef(null);

  useLayoutEffect(() => {
    const el = numberRef.current;
    if (!el) return undefined;
    const target = { value: 0 };
    const ctx = gsap.context(() => {
      gsap.to(target, {
        value,
        duration: 1.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: wrapRef.current,
          start: 'top 88%',
          once: true,
        },
        onUpdate: () => {
          el.textContent = target.value.toFixed(decimals);
        },
      });
    });
    return () => ctx.revert();
  }, [value, decimals]);

  return (
    <div className="stat" ref={wrapRef} data-reveal>
      <div className="stat__value">
        <span ref={numberRef}>0</span>
        <span className="stat__suffix">{suffix}</span>
      </div>
      <span className="stat__label">{label}</span>
    </div>
  );
}
