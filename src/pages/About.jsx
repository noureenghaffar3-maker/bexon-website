import { Link } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import Icon from '../components/Icon';
import Counter from '../components/Counter';
import TeamCard from '../components/TeamCard';
import TestimonialSlider from '../components/TestimonialSlider';
import { processSteps, stats, team, values } from '../data/siteData';

export default function About() {
  return (
    <>
      <PageHeader
        title="About Us"
        current="About Us"
        description="A partner for leaders who want clear thinking, practical delivery and change that lasts."
      />

      <section className="section about-intro">
        <div className="container">
          <div className="about-intro__grid">
            <div className="about-intro__media" data-reveal>
              <img
                src="/images/about/about-5.webp"
                alt="Bexon team collaborating"
              />
              <div className="about-intro__badge">
                <span>Since</span>
                <strong>2011</strong>
                <p>Independent. Experienced. Accountable.</p>
              </div>
            </div>
            <div className="about-intro__content">
              <SectionHeading
                eyebrow="Who we are"
                title={
                  <>
                    Driving Innovation and Excellence for{' '}
                    <span>Sustainable Success.</span>
                  </>
                }
              />
              <p data-reveal>
                Bexon is an independent corporate advisory firm. We help
                ambitious organisations grow with confidence — translating
                complex challenges into clear choices, and clear choices into
                work that actually gets done.
              </p>
              <p data-reveal>
                Our team combines strategists, designers, technologists and
                operators. We stay small enough to care deeply and experienced
                enough to take on the hardest problems.
              </p>
              <ul className="check-list" data-reveal>
                <li>
                  <Icon name="check" /> Independent, senior-led teams
                </li>
                <li>
                  <Icon name="check" /> Evidence-based, commercially grounded
                </li>
                <li>
                  <Icon name="check" /> Built to transfer capability, not dependency
                </li>
              </ul>
              <div className="about-intro__actions" data-reveal>
                <Button to="/contact" variant="primary">
                  Work with us
                </Button>
                <Link to="/team" className="text-link">
                  Meet the team <Icon name="arrowRight" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section values-section">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="What guides us"
            title={
              <>
                Principles that shape every <span>engagement.</span>
              </>
            }
          />
          <div className="choose-grid">
            {values.map((value, index) => (
              <article
                className="choose-card"
                key={value.title}
                data-reveal
                data-delay={index * 0.08}
              >
                <div className="choose-card__icon">
                  <Icon name={value.icon} />
                </div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
                <span className="choose-card__index">0{index + 1}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section process-section">
        <div className="container">
          <div className="section-top">
            <SectionHeading
              eyebrow="How we work"
              title={
                <>
                  A simple rhythm that keeps momentum and{' '}
                  <span>builds trust.</span>
                </>
              }
            />
            <div className="section-top__side" data-reveal>
              <p>
                No black boxes. No endless decks. We work in short cycles with
                transparent decisions and clear owners at every stage.
              </p>
              <Button to="/services" variant="outline">
                Our services
              </Button>
            </div>
          </div>
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

      <section className="stats-section">
        <div className="container">
          <div className="stats-bar">
            {stats.map((stat) => (
              <Counter
                key={stat.label}
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals || 0}
                label={stat.label}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section team-preview">
        <div className="container">
          <div className="section-top">
            <SectionHeading
              eyebrow="Our people"
              title={
                <>
                  The people behind <span>Bexon.</span>
                </>
              }
            />
            <div className="section-top__side" data-reveal>
              <p>
                Senior practitioners who stay close to the work — and to you.
              </p>
              <Button to="/team" variant="primary">
                Meet everyone
              </Button>
            </div>
          </div>
          <div className="team-grid team-grid--preview">
            {team.slice(0, 4).map((member) => (
              <TeamCard member={member} key={member.name} />
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials-section testimonials-section--soft">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Client feedback"
            title={
              <>
                Hear from our <span>customers.</span>
              </>
            }
          />
          <div className="testimonials-layout">
            <div className="testimonials-media" data-reveal>
              <img src="/images/testimonial/testimonial-img.webp" alt="" />
              <div className="testimonials-media__caption">
                <Icon name="quote" />
                <span>
                  4.9 average
                  <br />
                  client rating
                </span>
              </div>
            </div>
            <TestimonialSlider />
          </div>
        </div>
      </section>
    </>
  );
}
