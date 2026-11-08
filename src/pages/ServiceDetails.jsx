import { Link, useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import Icon from '../components/Icon';
import { company, processSteps, services } from '../data/siteData';
import NotFound from './NotFound';

export default function ServiceDetails() {
  const { slug } = useParams();
  const service = services.find((item) => item.slug === slug);

  if (!service) return <NotFound />;

  const related = services.filter((item) => item.slug !== slug).slice(0, 3);

  return (
    <>
      <PageHeader
        title={service.short}
        current="Service details"
        description={service.summary}
      />

      <section className="section service-detail">
        <div className="container">
          <div className="detail-layout">
            <article className="detail-main">
              <div className="detail-media" data-reveal>
                <img src={service.image} alt={service.title} />
                <span className="detail-media__icon">
                  <Icon name={service.icon} />
                </span>
              </div>
              <div className="detail-body">
                <SectionHeadingInline service={service} />
                <p data-reveal>{service.description}</p>
                <p data-reveal>
                  We tailor the engagement to your context, but the principles
                  are consistent: understand the system, agree the outcome,
                  move in short cycles and leave your team stronger.
                </p>
                <div className="detail-features" data-reveal>
                  <h3>What&apos;s included</h3>
                  <ul className="check-list check-list--grid">
                    {service.features.map((feature) => (
                      <li key={feature}>
                        <Icon name="check" /> {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="detail-deliverables" data-reveal>
                  <h3>Typical deliverables</h3>
                  <div className="deliverable-tags">
                    {service.deliverables.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                </div>
                <div className="detail-process" data-reveal>
                  <h3>How the engagement runs</h3>
                  <div className="detail-process__grid">
                    {processSteps.map((step) => (
                      <div key={step.number}>
                        <span>{step.number}</span>
                        <strong>{step.title}</strong>
                        <p>{step.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </article>

            <aside className="detail-sidebar">
              <div className="sidebar-card" data-reveal>
                <h3>All services</h3>
                <ul className="sidebar-services">
                  {services.map((item) => (
                    <li key={item.slug}>
                      <Link
                        to={`/services/${item.slug}`}
                        className={item.slug === slug ? 'is-active' : ''}
                      >
                        <Icon name={item.icon} size={18} />
                        {item.short}
                        <Icon name="chevronRight" size={16} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-card sidebar-card--stats" data-reveal>
                <div>
                  <span>Starting from</span>
                  <strong>{service.price}</strong>
                </div>
                <div>
                  <span>Typical timeline</span>
                  <strong>{service.timeline}</strong>
                </div>
              </div>

              <div className="sidebar-card sidebar-card--contact" data-reveal>
                <span className="eyebrow eyebrow--light">Talk to us</span>
                <h3>Need a tailored plan?</h3>
                <p>
                  Tell us what you are trying to achieve. We&apos;ll suggest the
                  shortest path to value.
                </p>
                <a href={company.phoneHref} className="sidebar-phone">
                  <span>
                    <Icon name="phone" />
                  </span>
                  {company.phone}
                </a>
                <Button to="/contact" variant="light" icon="arrowRight">
                  Book a call
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section related-services">
        <div className="container">
          <div className="section-top">
            <h2 className="section-title" data-reveal>
              Other ways we can <span>help.</span>
            </h2>
            <Button to="/services" variant="outline">
              All services
            </Button>
          </div>
          <div className="related-grid">
            {related.map((item) => (
              <Link
                to={`/services/${item.slug}`}
                className="related-card"
                key={item.slug}
                data-reveal
              >
                <span className="related-card__icon">
                  <Icon name={item.icon} />
                </span>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <span className="text-link">
                  Learn more <Icon name="arrowRight" size={16} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function SectionHeadingInline({ service }) {
  return (
    <div className="detail-heading" data-reveal>
      <span className="eyebrow">
        <Icon name={service.icon} /> {service.short}
      </span>
      <h2>{service.title}</h2>
    </div>
  );
}
