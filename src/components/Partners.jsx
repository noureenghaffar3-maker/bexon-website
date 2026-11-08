import { clients } from '../data/siteData';

export default function Partners() {
  const logos = [...clients, ...clients];
  return (
    <section className="partners" aria-label="Trusted by leading companies">
      <div className="container">
        <p className="partners__intro" data-reveal>
          Join over <strong>1,000+</strong> companies building with{' '}
          <span>Bexon</span> today
        </p>
      </div>
      <div className="marquee" data-reveal>
        <div className="marquee__track">
          {logos.map((logo, index) => (
            <div className="marquee__item" key={`${logo}-${index}`}>
              <img src={logo} alt="" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
