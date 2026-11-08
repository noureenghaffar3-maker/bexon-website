import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function ServiceCard({ service }) {
  return (
    <article className="service-card" data-reveal>
      <img
        className="service-card__img"
        src={service.image}
        alt={service.title}
        loading="lazy"
        data-parallax="8"
      />
      <div className="service-card__shade" />
      <span className="service-card__icon">
        <Icon name={service.icon} />
      </span>
      <div className="service-card__content">
        <h3>
          <Link to={`/services/${service.slug}`}>{service.title}</Link>
        </h3>
        <p>{service.summary}</p>
        <Link to={`/services/${service.slug}`} className="text-link text-link--light">
          Learn more <Icon name="arrowRight" size={16} />
        </Link>
      </div>
    </article>
  );
}
