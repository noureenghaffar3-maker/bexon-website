import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function ProjectCard({ project, featured = false }) {
  return (
    <article
      className={`project-card${featured ? ' project-card--featured' : ''}`}
      data-reveal
    >
      <Link to={`/projects/${project.slug}`} className="project-card__media">
        <img src={project.image} alt={project.title} loading="lazy" />
        <span className="project-card__badge">{project.category}</span>
        <span className="project-card__arrow">
          <Icon name="arrowUpRight" />
        </span>
      </Link>
      <div className="project-card__body">
        <span className="project-card__meta">
          {project.year} · {project.client}
        </span>
        <h3>
          <Link to={`/projects/${project.slug}`}>{project.title}</Link>
        </h3>
        <Link to={`/projects/${project.slug}`} className="text-link">
          View project <Icon name="arrowRight" size={16} />
        </Link>
      </div>
    </article>
  );
}
