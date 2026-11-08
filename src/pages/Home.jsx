import { Link } from 'react-router-dom';
import {
  blogs,
  faqs,
  projects,
  services,
  stats,
  values,
  testimonials,
} from '../data/siteData';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import Partners from '../components/Partners';
import ServiceCard from '../components/ServiceCard';
import ProjectCard from '../components/ProjectCard';
import BlogCard from '../components/BlogCard';
import Counter from '../components/Counter';
import TestimonialSlider from '../components/TestimonialSlider';
import FAQAccordion from '../components/FAQAccordion';
import ContactForm from '../components/ContactForm';
import Icon from '../components/Icon';

export default function Home() {
  return (
    <>
      <section className="home-hero">
        <div className="home-hero__left">
          <div className="home-hero__pattern">
            <img src="/images/shape/pattern-bg.webp" alt="" />
          </div>
          <div className="home-hero__content">
            <span className="eyebrow eyebrow--light" data-hero>
              <Icon name="award" size={16} /> Recognised for Excellence
            </span>
            <h1 className="home-hero__title" data-hero>
              Driving Excellence Through Evolution and <span>Trust.</span>
            </h1>
            <div className="home-hero__desc" data-hero>
              <Link to="/about" className="round-link" aria-label="Learn about Bexon">
                <Icon name="arrowUpRight" />
              </Link>
              <p>
                Representing growth, expansion and modern business solutions —
                built on clarity, expertise and genuine partnership.
              </p>
            </div>
          </div>
          <a href="#choose" className="scroll-cue" aria-label="Scroll to content">
            <span>
              <Icon name="arrowDown" />
            </span>
            Scroll Down
          </a>
        </div>

        <div className="home-hero__right">
          <img
            className="home-hero__image"
            src="/images/hero/hero-img.webp"
            alt="A Bexon consultant working with a client"
          />
          <div className="hero-customer" data-hero>
            <div className="hero-customer__avatars">
              <img src="/images/testimonial/client-1.webp" alt="" />
              <img src="/images/testimonial/client-2.webp" alt="" />
              <img src="/images/testimonial/client-3.webp" alt="" />
              <span>
                <Icon name="plus" />
              </span>
            </div>
            <strong className="hero-customer__number">30K</strong>
            <p>Happy customers worldwide.</p>
          </div>
        </div>
      </section>

      <Partners />

      <section className="section choose-section" id="choose">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Choose the best"
            title={
              <>
                Empowering Business with <span>Expertise.</span>
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

      <section className="section about-section">
        <div className="container">
          <div className="about-grid">
            <div className="about-media" data-reveal>
              <div className="about-media__main">
                <img
                  src="/images/about/about-1.webp"
                  alt="Bexon leadership team"
                  data-parallax="10"
                />
              </div>
              <div className="experience-card">
                <span>Experience</span>
                <strong>13+</strong>
                <p>Decades of experience, endless innovation.</p>
              </div>
            </div>
            <div className="about-content">
              <SectionHeading
                eyebrow="Get to know us"
                title={
                  <>
                    Empowering Businesses with Innovation, Expertise and{' '}
                    <span>Success.</span>
                  </>
                }
              />
              <p className="about-content__text" data-reveal>
                Since 2011 we have partnered with founders, boards and leadership
                teams to turn complex challenges into clear, confident action.
                Our work blends rigorous strategy with the practical craft of
                delivering change.
              </p>
              <div className="about-content__actions" data-reveal>
                <Button to="/about" variant="primary">
                  Learn More
                </Button>
                <a href="tel:10095447818" className="phone-link">
                  <span>
                    <Icon name="phone" />
                  </span>
                  <span>
                    <small>Call anytime</small>
                    +1 (009) 544-7818
                  </span>
                </a>
              </div>
              <div className="about-bottom">
                <div className="review-card" data-reveal>
                  <div className="stars" aria-label="5 out of 5 stars">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Icon name="star" key={star} />
                    ))}
                  </div>
                  <p>
                    “We believe in building lasting relationships through trust,
                    innovation and exceptional service.”
                  </p>
                  <div className="review-card__author">
                    <div>
                      <strong>Esther Howard</strong>
                      <span>Co-Founder</span>
                    </div>
                    <Icon name="quote" className="review-card__quote" />
                  </div>
                </div>
                <a
                  className="video-tile"
                  href="https://www.youtube.com/watch?v=MLpWrANjFbI"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Watch our story"
                  data-reveal
                >
                  <img src="/images/about/about-2.webp" alt="" />
                  <span className="video-tile__play">
                    <Icon name="play" />
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section services-section">
        <div className="services-section__pattern services-section__pattern--one">
          <img src="/images/shape/pattern-2.svg" alt="" />
        </div>
        <div className="services-section__pattern services-section__pattern--two">
          <img src="/images/shape/pattern-3.svg" alt="" />
        </div>
        <div className="container">
          <div className="services-head">
            <SectionHeading
              light
              eyebrow="Our solutions"
              title={
                <>
                  Solutions to Transform Your <span>Business.</span>
                </>
              }
            />
            <p data-reveal>
              Six connected practices, delivered by one accountable team. Start
              with the challenge — we will bring the right mix of expertise.
            </p>
          </div>
        </div>
        <div className="container">
          <div className="services-grid">
            {services.slice(0, 4).map((service) => (
              <ServiceCard service={service} key={service.slug} />
            ))}
          </div>
          <div className="services-more" data-reveal>
            <Button to="/services" variant="outline-light">
              Explore all services
            </Button>
          </div>
        </div>
      </section>

      <section className="section projects-section">
        <div className="container">
          <div className="section-top">
            <SectionHeading
              eyebrow="Proud projects"
              title={
                <>
                  Breaking Boundaries, Building <span>Dreams.</span>
                </>
              }
            />
            <div className="section-top__side" data-reveal>
              <p>
                We work closely with clients to understand their unique needs and
                craft tailored solutions that address the real challenge.
              </p>
              <Button to="/projects" variant="primary">
                More Projects
              </Button>
            </div>
          </div>
          <div className="projects-grid projects-grid--home">
            {projects.slice(0, 4).map((project, index) => (
              <ProjectCard
                project={project}
                key={project.slug}
                featured={index === 0}
              />
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

      <section className="section testimonials-section">
        <div className="container">
          <div className="section-top section-top--center">
            <SectionHeading
              eyebrow="Client feedback"
              title={
                <>
                  Success <span>Stories</span> Fuel our Innovation.
                </>
              }
            />
            <div className="section-top__side" data-reveal>
              <div className="rating-large">
                <strong>4.9</strong>
                <div>
                  <div className="stars">
                    {[0, 1, 2, 3, 4].map((star) => (
                      <Icon name="star" key={star} />
                    ))}
                  </div>
                  <span>Based on 320+ client reviews</span>
                </div>
              </div>
            </div>
          </div>
          <div className="testimonials-layout">
            <div className="testimonials-media" data-reveal>
              <img src={testimonials[0].image} alt="" />
              <div className="testimonials-media__caption">
                <Icon name="quote" />
                <span>
                  Trusted partner
                  <br />
                  since 2011
                </span>
              </div>
            </div>
            <TestimonialSlider />
          </div>
        </div>
      </section>

      <section className="section faq-section">
        <div className="container">
          <div className="faq-grid">
            <div className="faq-media" data-reveal>
              <img src="/images/faq/faq.webp" alt="Bexon team in conversation" />
              <div className="faq-media__title">
                <span>Need help?</span>
                <strong>Start Here...</strong>
              </div>
              <div className="call-card">
                <div>
                  <span>Get started free call</span>
                  <a href="tel:18884521505">1-888-452-1505</a>
                </div>
                <span className="call-card__icon">
                  <Icon name="phone" />
                </span>
              </div>
            </div>
            <div className="faq-content">
              <SectionHeading
                eyebrow="Questions & answers"
                title={
                  <>
                    Everything you need to know before we <span>begin.</span>
                  </>
                }
              />
              <FAQAccordion items={faqs.slice(0, 5)} />
              <div className="faq-content__more" data-reveal>
                <Link to="/faq" className="text-link">
                  See all FAQs <Icon name="arrowRight" size={16} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section contact-section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-map" data-reveal>
              <div className="contact-map__head">
                <SectionHeading
                  eyebrow="Global presence"
                  title={
                    <>
                      We are close, wherever you <span>are.</span>
                    </>
                  }
                />
                <p>
                  Three regional teams, one standard of care. Reach out to the
                  office nearest you.
                </p>
              </div>
              <div className="map-wrap">
                <img src="/images/bg/map.svg" alt="World map" />
                <span className="map-dot map-dot--one" />
                <span className="map-dot map-dot--two" />
                <span className="map-dot map-dot--three" />
                <div className="map-card map-card--one">
                  <span>Head office</span>
                  <p>West Rond, Montana, USA</p>
                </div>
                <div className="map-card map-card--two">
                  <span>Regional office</span>
                  <p>Kassel, Germany</p>
                </div>
                <div className="map-card map-card--three">
                  <span>Regional office</span>
                  <p>Altamira, Brazil</p>
                </div>
              </div>
            </div>
            <div className="contact-panel">
              <SectionHeading
                light
                eyebrow="Get in touch"
                title={
                  <>
                    Drop Us a <span>Line.</span>
                  </>
                }
              />
              <ContactForm dark />
            </div>
          </div>
        </div>
      </section>

      <section className="section blog-section">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Insights & ideas"
            title={
              <>
                The Ultimate <span>Resource.</span>
              </>
            }
          />
          <div className="blog-grid">
            {blogs.slice(0, 3).map((post) => (
              <BlogCard post={post} key={post.slug} />
            ))}
          </div>
          <div className="blog-section__more" data-reveal>
            <Button to="/blog" variant="primary">
              Read all insights
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
