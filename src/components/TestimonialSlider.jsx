import { useEffect, useState } from 'react';
import { testimonials } from '../data/siteData';
import Icon from './Icon';

export default function TestimonialSlider() {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return undefined;
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % testimonials.length);
    }, 7000);
    return () => window.clearInterval(timer);
  }, [paused]);

  const go = (step) => {
    setIndex(
      (current) =>
        (current + step + testimonials.length) % testimonials.length,
    );
  };

  const active = testimonials[index];

  return (
    <div
      className="testimonial-slider"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      data-reveal
    >
      <div className="testimonial-slider__card" key={index}>
        <span className="testimonial-slider__quote">
          <Icon name="quote" />
        </span>
        <blockquote>{active.quote}</blockquote>
        <div className="testimonial-slider__author">
          <img src={active.image} alt={active.name} />
          <div>
            <strong>{active.name}</strong>
            <span>{active.role}</span>
          </div>
        </div>
      </div>
      <div className="testimonial-slider__controls">
        <div className="testimonial-slider__dots">
          {testimonials.map((item, dotIndex) => (
            <button
              key={item.name}
              type="button"
              aria-label={`Show testimonial from ${item.name}`}
              className={dotIndex === index ? 'is-active' : ''}
              onClick={() => setIndex(dotIndex)}
            />
          ))}
        </div>
        <div className="testimonial-slider__arrows">
          <button type="button" aria-label="Previous testimonial" onClick={() => go(-1)}>
            <Icon name="arrowLeft" />
          </button>
          <button type="button" aria-label="Next testimonial" onClick={() => go(1)}>
            <Icon name="arrowRight" />
          </button>
        </div>
      </div>
    </div>
  );
}
