import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import TeamCard from '../components/TeamCard';
import Button from '../components/Button';
import Icon from '../components/Icon';
import { team, values } from '../data/siteData';

export default function Team() {
  return (
    <>
      <PageHeader
        title="Team"
        current="Team"
        description="Senior practitioners from strategy, design, technology and operations — united by a bias for practical progress."
      />

      <section className="section team-page">
        <div className="container">
          <div className="section-top">
            <SectionHeading
              eyebrow="Our people"
              title={
                <>
                  People Behind <span>Bexon.</span>
                </>
              }
            />
            <div className="section-top__side" data-reveal>
              <p>
                We keep our teams small and senior. The people you meet in the
                first conversation are the people who do the work — and stay
                accountable for the outcome.
              </p>
              <Button to="/contact" variant="primary">
                Work with us
              </Button>
            </div>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <TeamCard member={member} key={member.name} />
            ))}
          </div>
        </div>
      </section>

      <section className="section team-values">
        <div className="container">
          <div className="team-values__grid">
            <div className="team-values__media" data-reveal>
              <img src="/images/about/about-1.webp" alt="Bexon team" />
              <div className="team-values__badge">
                <Icon name="users" />
                <strong>42</strong>
                <span>specialists across 3 regions</span>
              </div>
            </div>
            <div>
              <SectionHeading
                eyebrow="Culture"
                title={
                  <>
                    Curious by default. Accountable by <span>design.</span>
                  </>
                }
              />
              <p className="team-values__text" data-reveal>
                We are a team of people who like hard problems and honest
                conversations. We bring our whole selves to work, challenge each
                other kindly, and measure success by the difference our clients
                feel.
              </p>
              <div className="team-values__list">
                {values.map((value) => (
                  <div key={value.title} data-reveal>
                    <span>
                      <Icon name={value.icon} />
                    </span>
                    <div>
                      <h3>{value.title}</h3>
                      <p>{value.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section careers-strip-section">
        <div className="container">
          <div className="careers-strip" data-reveal>
            <div>
              <span className="eyebrow eyebrow--light">Careers at Bexon</span>
              <h2>Do your best work with people who care.</h2>
              <p>
                We are always looking for thoughtful practitioners who want to
                make a real difference. Tell us what you are great at.
              </p>
            </div>
            <Button to="/contact" variant="dark" icon="arrowRight">
              Get in touch
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
