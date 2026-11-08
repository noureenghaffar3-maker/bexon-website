import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import ContactForm from '../components/ContactForm';
import Icon from '../components/Icon';
import FAQAccordion from '../components/FAQAccordion';
import { company, faqs, offices } from '../data/siteData';

const contactCards = [
  {
    icon: 'phone',
    title: 'Call us',
    text: 'Monday to Friday, 8am – 6pm MT',
    value: company.phone,
    href: company.phoneHref,
  },
  {
    icon: 'mail',
    title: 'Email us',
    text: 'We reply within one business day',
    value: company.email,
    href: `mailto:${company.email}`,
  },
  {
    icon: 'mapPin',
    title: 'Visit us',
    text: '993 Renner Burg, West Rond',
    value: 'Montana, USA',
    href: '#offices',
  },
  {
    icon: 'message',
    title: 'Live chat',
    text: 'Start a conversation with our team',
    value: 'Open chat',
    href: '#contact-form',
  },
];

export default function Contact() {
  return (
    <>
      <PageHeader
        title="Contact Us"
        current="Contact Us"
        description="Tell us what you are working on. We will point you to the right person and the clearest next step."
      />

      <section className="section contact-cards-section">
        <div className="container">
          <div className="contact-cards">
            {contactCards.map((card, index) => (
              <a
                className="contact-info-card"
                href={card.href}
                key={card.title}
                data-reveal
                data-delay={index * 0.06}
              >
                <span className="contact-info-card__icon">
                  <Icon name={card.icon} />
                </span>
                <h3>{card.title}</h3>
                <p>{card.text}</p>
                <strong>{card.value}</strong>
                <span className="contact-info-card__arrow">
                  <Icon name="arrowUpRight" size={18} />
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-main" id="contact-form">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-map" data-reveal>
              <div className="contact-map__head">
                <SectionHeading
                  eyebrow="Find us"
                  title={
                    <>
                      Feel free to get in touch or visit our{' '}
                      <span>location.</span>
                    </>
                  }
                />
                <p>
                  Our headquarters sit in West Rond, Montana, with regional teams
                  in Germany and Brazil.
                </p>
              </div>
              <div className="map-wrap">
                <img src="/images/bg/map.svg" alt="World map" />
                <span className="map-dot map-dot--one" />
                <span className="map-dot map-dot--two" />
                <span className="map-dot map-dot--three" />
                <div className="map-card map-card--one">
                  <span>Head office</span>
                  <p>West Rond, MT, USA</p>
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
              <div className="contact-direct">
                <div>
                  <span>
                    <Icon name="phone" /> Phone
                  </span>
                  <a href={company.phoneHref}>{company.phone}</a>
                </div>
                <div>
                  <span>
                    <Icon name="mail" /> Email
                  </span>
                  <a href={`mailto:${company.email}`}>{company.email}</a>
                </div>
              </div>
            </div>
            <div className="contact-panel">
              <SectionHeading
                light
                eyebrow="Send a message"
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

      <section className="section offices-section" id="offices">
        <div className="container">
          <SectionHeading
            align="center"
            eyebrow="Our offices"
            title={
              <>
                Three places. One standard of <span>care.</span>
              </>
            }
          />
          <div className="offices-grid">
            {offices.map((office, index) => (
              <article className="office-card" key={`${office.city}-${index}`} data-reveal>
                <span className="office-card__index">0{index + 1}</span>
                <h3>{office.city}</h3>
                <p>{office.address}</p>
                <a href={`tel:${office.phone.replace(/[^0-9]/g, '')}`}>
                  <Icon name="phone" size={15} /> {office.phone}
                </a>
                <a href={`mailto:${office.email}`}>
                  <Icon name="mail" size={15} /> {office.email}
                </a>
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
                eyebrow="Before you write"
                title={
                  <>
                    A few quick <span>answers.</span>
                  </>
                }
              />
              <FAQAccordion items={faqs.slice(0, 4)} />
            </div>
            <div className="faq-media faq-media--narrow" data-reveal>
              <img src="/images/faq/faq.webp" alt="Bexon team" />
              <div className="faq-media__title">
                <span>Need help?</span>
                <strong>Start Here...</strong>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
