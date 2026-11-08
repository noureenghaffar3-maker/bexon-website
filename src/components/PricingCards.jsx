import { useState } from 'react';
import { pricing } from '../data/siteData';
import Icon from './Icon';
import Button from './Button';

export default function PricingCards() {
  const [annual, setAnnual] = useState(false);

  return (
    <div className="pricing">
      <div className="billing-toggle" role="group" aria-label="Billing period">
        <button
          type="button"
          className={!annual ? 'is-active' : ''}
          onClick={() => setAnnual(false)}
        >
          Monthly
        </button>
        <button
          type="button"
          className={annual ? 'is-active' : ''}
          onClick={() => setAnnual(true)}
        >
          Annual <span>Save 20%</span>
        </button>
      </div>
      <div className="pricing-grid">
        {pricing.map((plan) => (
          <article
            className={`pricing-card${plan.popular ? ' pricing-card--popular' : ''}`}
            key={plan.name}
            data-reveal
          >
            {plan.popular && (
              <span className="pricing-card__badge">Most popular</span>
            )}
            <h3>{plan.name}</h3>
            <p>{plan.tagline}</p>
            <div className="pricing-card__price">
              <span className="pricing-card__currency">$</span>
              <strong>{annual ? plan.annual : plan.monthly}</strong>
              <span className="pricing-card__period">
                /{annual ? 'mo billed yearly' : 'month'}
              </span>
            </div>
            <ul>
              {plan.features.map((feature) => (
                <li key={feature}>
                  <Icon name="check" size={16} />
                  {feature}
                </li>
              ))}
            </ul>
            <Button
              to="/contact"
              variant={plan.popular ? 'dark' : 'outline'}
              icon="arrowRight"
            >
              Choose {plan.name}
            </Button>
          </article>
        ))}
      </div>
    </div>
  );
}
