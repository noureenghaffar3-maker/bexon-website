import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import PricingCards from '../components/PricingCards';
import Button from '../components/Button';
import Icon from '../components/Icon';
import FAQAccordion from '../components/FAQAccordion';
import TestimonialSlider from '../components/TestimonialSlider';
import { faqs } from '../data/siteData';

export default function Pricing() {
  return (
    <>
      <PageHeader
        title="Pricing"
        current="Pricing"
        description="Simple, transparent plans for teams that want senior support without a big-firm retainer."
      />

      <section className="section pricing-section">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Plans & pricing"
            title={
              <>
                Our Pricing <span>Plan.</span>
              </>
            }
            description="Start where you are. Every plan includes a named senior lead, clear outcomes and a shared workspace. No lock-in, no surprises."
          />
          <PricingCards />
          <p className="pricing-note" data-reveal>
            Need something bespoke? We scope fixed-fee projects from $4,800.{' '}
            <a href="/contact">Talk to us</a>.
          </p>
        </div>
      </section>

      <section className="section pricing-includes">
        <div className="container">
          <div className="pricing-includes__grid">
            <div>
              <SectionHeading
                eyebrow="Always included"
                title={
                  <>
                    The things we will never charge extra <span>for.</span>
                  </>
                }
              />
              <ul className="check-list" data-reveal>
                <li>
                  <Icon name="check" /> A named senior lead on every engagement
                </li>
                <li>
                  <Icon name="check" /> A shared workspace with live milestones
                </li>
                <li>
                  <Icon name="check" /> Weekly working sessions and written summaries
                </li>
                <li>
                  <Icon name="check" /> Honest advice, including when to stop
                </li>
                <li>
                  <Icon name="check" /> Capability transfer and documentation
                </li>
              </ul>
            </div>
            <div className="pricing-testimonial" data-reveal>
              <span className="eyebrow eyebrow--light">Client perspective</span>
              <TestimonialSlider />
            </div>
          </div>
        </div>
      </section>

      <section className="section faq-section faq-section--soft">
        <div className="container">
          <div className="faq-grid">
            <div className="faq-content">
              <SectionHeading
                eyebrow="Pricing questions"
                title={
                  <>
                    Straight answers, before you <span>commit.</span>
                  </>
                }
              />
              <FAQAccordion items={faqs.slice(2)} />
            </div>
            <div className="faq-media faq-media--narrow" data-reveal>
              <img src="/images/faq/faq.webp" alt="Bexon advisor" />
              <div className="call-card">
                <div>
                  <span>Still deciding?</span>
                  <a href="tel:18884521505">Book a free call</a>
                </div>
                <span className="call-card__icon">
                  <Icon name="phone" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pricing-cta">
        <div className="container">
          <div className="pricing-cta__card" data-reveal>
            <div>
              <h2>Not sure which plan fits?</h2>
              <p>
                Tell us about the challenge and we will recommend the lightest
                possible engagement.
              </p>
            </div>
            <Button to="/contact" variant="dark" icon="arrowRight">
              Ask us
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
