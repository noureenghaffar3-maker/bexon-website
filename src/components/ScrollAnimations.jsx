import { useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function ScrollAnimations() {
  const { pathname, search } = useLocation();

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
    const reduceMotion = window.matchMedia(
      '(prefers-reduced-motion: reduce)',
    ).matches;

    if (reduceMotion) {
      gsap.set('[data-reveal], [data-hero]', { clearProps: 'all' });
      return undefined;
    }

    const ctx = gsap.context(() => {
      const heroItems = gsap.utils.toArray('[data-hero]');
      if (heroItems.length) {
        gsap.fromTo(
          heroItems,
          { y: 46, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 1,
            stagger: 0.1,
            ease: 'power3.out',
            delay: 0.15,
          },
        );
      }

      gsap.utils.toArray('[data-reveal]').forEach((el) => {
        gsap.fromTo(
          el,
          { y: 44, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.9,
            ease: 'power3.out',
            delay: Number(el.dataset.delay || 0),
            scrollTrigger: {
              trigger: el,
              start: 'top 90%',
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray('[data-parallax]').forEach((el) => {
        const amount = Number(el.dataset.parallax || 12);
        gsap.fromTo(
          el,
          { yPercent: -amount / 2 },
          {
            yPercent: amount / 2,
            ease: 'none',
            scrollTrigger: {
              trigger: el.parentElement || el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        );
      });
    });

    const refresh = window.setTimeout(() => ScrollTrigger.refresh(), 350);

    return () => {
      window.clearTimeout(refresh);
      ctx.revert();
    };
  }, [pathname, search]);

  return null;
}
