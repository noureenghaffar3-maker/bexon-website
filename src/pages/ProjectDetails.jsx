import { Link, useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Button from '../components/Button';
import Icon from '../components/Icon';
import { projects } from '../data/siteData';
import NotFound from './NotFound';

export default function ProjectDetails() {
  const { slug } = useParams();
  const project = projects.find((item) => item.slug === slug);

  if (!project) return <NotFound />;

  const index = projects.findIndex((item) => item.slug === slug);
  const next = projects[(index + 1) % projects.length];

  return (
    <>
      <PageHeader
        title={project.title}
        current="Project details"
        description={project.summary}
      />

      <section className="section project-detail">
        <div className="container">
          <div className="project-detail__hero" data-reveal>
            <img src={project.image} alt={project.title} />
          </div>

          <div className="project-meta" data-reveal>
            <div>
              <span>Client</span>
              <strong>{project.client}</strong>
            </div>
            <div>
              <span>Year</span>
              <strong>{project.year}</strong>
            </div>
            <div>
              <span>Duration</span>
              <strong>{project.duration}</strong>
            </div>
            <div>
              <span>Category</span>
              <strong>{project.category}</strong>
            </div>
          </div>

          <div className="project-detail__layout">
            <article className="project-detail__main">
              <h2 data-reveal>The challenge</h2>
              <p data-reveal>{project.summary}</p>
              <h2 data-reveal>What we did</h2>
              <p data-reveal>{project.description}</p>

              <div className="project-services" data-reveal>
                {project.services.map((service) => (
                  <span key={service}>
                    <Icon name="check" size={16} /> {service}
                  </span>
                ))}
              </div>

              <div className="project-results" data-reveal>
                {project.results.map((result) => (
                  <div key={result.label}>
                    <strong>{result.value}</strong>
                    <span>{result.label}</span>
                  </div>
                ))}
              </div>

              <blockquote className="project-quote" data-reveal>
                <Icon name="quote" />
                <p>
                  “Bexon brought clarity where we had noise. The team stayed
                  close, challenged us honestly and delivered something our
                  people genuinely use every day.”
                </p>
                <footer>— Programme sponsor, {project.client}</footer>
              </blockquote>
            </article>

            <aside className="project-detail__aside">
              <div className="sidebar-card sidebar-card--contact" data-reveal>
                <span className="eyebrow eyebrow--light">Your project next</span>
                <h3>Have something similar in mind?</h3>
                <p>
                  We would love to hear what you are working on and where you
                  want to get to.
                </p>
                <Button to="/contact" variant="light" icon="arrowRight">
                  Start a conversation
                </Button>
              </div>
              <Link to={`/projects/${next.slug}`} className="next-project" data-reveal>
                <span>Next project</span>
                <h3>{next.title}</h3>
                <span className="next-project__arrow">
                  <Icon name="arrowUpRight" />
                </span>
              </Link>
            </aside>
          </div>

          <div className="project-gallery">
            {project.gallery.map((image, galleryIndex) => (
              <div
                key={image}
                className={`project-gallery__item project-gallery__item--${
                  galleryIndex + 1
                }`}
                data-reveal
              >
                <img src={image} alt={`${project.title} detail`} loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
