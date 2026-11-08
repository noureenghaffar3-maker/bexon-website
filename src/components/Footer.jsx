import { useState } from 'react';
import { Link } from 'react-router-dom';
import { company, services } from '../data/siteData';
import Icon from './Icon';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [agreed, setAgreed] = useState(false);
  const [subscribed, setSubscribed] = useState(false);

  const subscribe = (event) => {
    event.preventDefault();
    if (!email || !agreed) return;
    setSubscribed(true);
    setEmail('');
    setAgreed(false);
  };

  return (
    <footer className="site-footer">
      <div className="site-footer__decoration site-footer__decoration--one" />
      <div className="site-footer__decoration site-footer__decoration--two" />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-widget footer-widget--brand" data-reveal>
            <Link to="/" className="footer-logo" aria-label="Bexon home">
              <img src="/images/logos/logo.webp" alt="Bexon" />
            </Link>
            <p>
              Developing personalised customer journeys to increase satisfaction and
              loyalty, and to support the next stage of your growth.
            </p>
            <div className="footer-awards">
              <img src="/images/footer/award-logo-1.webp" alt="Award" />
              <img src="/images/footer/award-logo-2.webp" alt="Award" />
            </div>
          </div>

          <div className="footer-widget" data-reveal>
            <h3 className="footer-widget__title">Services</h3>
            <ul className="footer-links">
              {services.slice(0, 6).map((service) => (
                <li key={service.slug}>
                  <Link to={`/services/${service.slug}`}>{service.short}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="footer-widget" data-reveal>
            <h3 className="footer-widget__title">Resources</h3>
            <ul className="footer-links">
              <li>
                <Link to="/about">About us</Link>
              </li>
              <li>
                <Link to="/team">Team members</Link>
              </li>
              <li>
                <Link to="/projects">Our work</Link>
              </li>
              <li>
                <Link to="/pricing">Pricing</Link>
              </li>
              <li>
                <Link to="/blog">Insights</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="footer-widget footer-widget--newsletter" data-reveal>
            <h3 className="footer-widget__title footer-widget__title--lg">
              Subscribe to Our Newsletter.
            </h3>
            {subscribed ? (
              <p className="newsletter-success">
                <Icon name="circleCheck" /> You&apos;re subscribed. Welcome aboard.
              </p>
            ) : (
              <form className="newsletter-form" onSubmit={subscribe}>
                <div className="newsletter-form__row">
                  <input
                    type="email"
                    value={email}
                    onChange={(event) => setEmail(event.target.value)}
                    placeholder="Enter your email"
                    aria-label="Email address"
                    required
                  />
                  <button type="submit" aria-label="Subscribe">
                    <Icon name="send" />
                  </button>
                </div>
                <label className="newsletter-form__check">
                  <input
                    type="checkbox"
                    checked={agreed}
                    onChange={(event) => setAgreed(event.target.checked)}
                  />
                  <span>
                    Agree to our <Link to="/contact">Terms &amp; Conditions</Link>
                  </span>
                </label>
              </form>
            )}
          </div>
        </div>

        <div className="footer-bottom">
          <ul className="footer-contact">
            <li>
              <a href={company.phoneHref}>
                <span className="footer-contact__icon">
                  <Icon name="phone" />
                </span>
                {company.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${company.email}`}>
                <span className="footer-contact__icon">
                  <Icon name="mail" />
                </span>
                {company.email}
              </a>
            </li>
          </ul>
          <div className="footer-socials">
            {company.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                <Icon name={social.icon} />
              </a>
            ))}
          </div>
          <p className="footer-copy">
            © {new Date().getFullYear()} {company.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
