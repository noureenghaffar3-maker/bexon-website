import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function PageHeader({ title, current, description }) {
  return (
    <section className="page-header">
      <div
        className="page-header__bg"
        style={{ backgroundImage: "url('/images/bg/pheader-bg.webp')" }}
      />
      <div className="page-header__overlay" />
      <div className="container page-header__inner">
        <div className="page-header__content" data-hero>
          <h1 className="page-header__title">{title}</h1>
          {description && <p className="page-header__desc">{description}</p>}
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">
              <Icon name="building" />
              Home
            </Link>
            <Icon name="chevronRight" size={14} />
            <span>{current || title}</span>
          </nav>
        </div>
      </div>
    </section>
  );
}
