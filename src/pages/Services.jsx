import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import Button from '../components/Button';
import Icon from '../components/Icon';
import FAQAccordion from '../components/FAQAccordion';
import { faqs, processSteps, services } from '../data/siteData';

export default function Services() {
  return (
    <>
      <PageHeader
        title="Services"
        current="Services"
        description="Six connected practices. One accountable team. Start with the challenge and we will shape the right engagement."
      />

      <section className="section services-intro">
        <div className="container">
          <div className="section-top">
            <SectionHeading
              eyebrow="What we do"
              title={
                <>
                  Solutions to transform your <span>business.</span>
                </>
              }
            />
            <div className="section-top__side" data-reveal>
              <p>
                We do not sell fixed products. We assemble the right mix of
                strategy, design, technology and people expertise around your
                goal — and stay accountable for the outcome.
              </p>
              <Button to="/contact" variant="primary">
                Start a conversation
              </Button>
            </div>
          </div>
          <div className="services-grid services-grid--tall">
            {services.map((service) => (
              <ServiceCard service={service} key={service.slug} />
            ))}
          </div>
        </div>
      </section>

      <section className="section capabilities-section">
        <div className="container">
          <div className="capabilities-grid">
            <div>
              <SectionHeading
                eyebrow="How we deliver"
                title={
                  <>
                    Senior people, close to the <span>work.</span>
                  </>
                }
              />
              <p className="capabilities-grid__text" data-reveal>
                Every engagement is led by a partner who stays involved from
                first conversation to final handover. We bring specialists in
                when they add value, never to pad a team.
              </p>
              <ul className="check-list" data-reveal>
                <li>
                  <Icon name="check" /> Clear scope and measurable outcomes
                </li>
                <li>
                  <Icon name="check" /> Weekly working sessions, no surprises
                </li>
                <li>
                  <Icon name="check" /> Capability transfer built into every phase
                </li>
                <li>
                  <Icon name="check" /> Honest advice, even when it is uncomfortable
                </li>
              </ul>
              <div className="capabilities-grid__actions" data-reveal>
                <Button to="/pricing" variant="outline">
                  View pricing
                </Button>
                <Link to="/projects" className="text-link">
                  See our work <Icon name="arrowRight" size={16} />
                </Link>
              </div>
            </div>
            <div className="capabilities-media" data-reveal>
              <img src="/images/service/service-details.webp" alt="Bexon workshop" />
              <div className="capabilities-media__card">
                <strong>94%</strong>
                <span>of clients return for a second engagement</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section process-section process-section--soft">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="The process"
            title={
              <>
                Four steps. No black <span>boxes.</span>
              </>
            }
          />
          <div className="process-grid">
            {processSteps.map((step) => (
              <article className="process-card" key={step.number} data-reveal>
                <span className="process-card__number">{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section faq-section faq-section--soft">
        <div className="container">
          <div className="faq-grid">
            <div className="faq-content">
              <SectionHeading
                eyebrow="Good to know"
                title={
                  <>
                    Questions we hear before <span>we begin.</span>
                  </>
                }
              />
              <FAQAccordion items={faqs.slice(0, 4)} />
            </div>
            <div className="faq-media faq-media--narrow" data-reveal>
              <img src="/images/faq/faq.webp" alt="Bexon advisor" />
              <div className="call-card">
                <div>
                  <span>Not sure where to start?</span>
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
    </>
  );
}
