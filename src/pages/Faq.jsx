import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import FAQAccordion from '../components/FAQAccordion';
import Button from '../components/Button';
import Icon from '../components/Icon';
import { company, faqs } from '../data/siteData';

const topics = [
  { icon: 'briefcase', title: 'Working with us', text: 'Scope, timelines and how engagements run.' },
  { icon: 'strategy', title: 'Strategy & growth', text: 'Market entry, positioning and operating models.' },
  { icon: 'users', title: 'People & change', text: 'Capability, culture and leading through change.' },
  { icon: 'shield', title: 'Privacy & terms', text: 'How we handle your data and confidentiality.' },
];

export default function Faq() {
  return (
    <>
      <PageHeader
        title="FAQ"
        current="FAQ"
        description="Clear answers to the questions we hear most often. If yours is not here, we are one message away."
      />

      <section className="section faq-page">
        <div className="container">
          <div className="faq-page__grid">
            <div className="faq-page__main">
              <SectionHeading
                eyebrow="Need help? Start here"
                title={
                  <>
                    Everything you need to know, in one <span>place.</span>
                  </>
                }
              />
              <FAQAccordion items={faqs} />
            </div>

            <aside className="faq-page__aside">
              <div className="sidebar-card" data-reveal>
                <h3>Browse by topic</h3>
                <ul className="topic-list">
                  {topics.map((topic) => (
                    <li key={topic.title}>
                      <span>
                        <Icon name={topic.icon} />
                      </span>
                      <div>
                        <strong>{topic.title}</strong>
                        <p>{topic.text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-card sidebar-card--contact" data-reveal>
                <span className="eyebrow eyebrow--light">Still curious?</span>
                <h3>Ask us anything.</h3>
                <p>
                  A real person will get back to you within one business day.
                </p>
                <a href={company.phoneHref} className="sidebar-phone">
                  <span>
                    <Icon name="phone" />
                  </span>
                  {company.phone}
                </a>
                <Button to="/contact" variant="light" icon="arrowRight">
                  Contact us
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
