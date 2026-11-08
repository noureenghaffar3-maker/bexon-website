import Button from './Button';

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-card" data-reveal>
          <div className="cta-card__content">
            <span className="eyebrow eyebrow--light">Start a conversation</span>
            <h2 className="cta-card__title">Let&apos;s Build Future Together.</h2>
            <p>
              Tell us what you are trying to achieve. We will help you find the
              clearest, most practical way forward.
            </p>
            <Button to="/contact" variant="dark" icon="arrowRight">
              Get Started Now
            </Button>
          </div>
          <div className="cta-card__media">
            <img src="/images/cta/cta-bg.webp" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
