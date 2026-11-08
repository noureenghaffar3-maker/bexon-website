import { Link } from 'react-router-dom';
import Button from '../components/Button';
import Icon from '../components/Icon';

export default function NotFound() {
  return (
    <section className="not-found">
      <div className="not-found__pattern">
        <img src="/images/shape/pattern-2.svg" alt="" />
      </div>
      <div className="container not-found__inner">
        <span className="eyebrow eyebrow--light" data-hero>
          <Icon name="sparkles" /> Page not found
        </span>
        <h1 data-hero>404</h1>
        <h2 data-hero>This page took a different route.</h2>
        <p data-hero>
          The page you are looking for has moved, been renamed, or never existed.
          Let&apos;s get you back to solid ground.
        </p>
        <div className="not-found__actions" data-hero>
          <Button to="/" variant="primary" icon="arrowRight">
            Back to home
          </Button>
          <Link to="/contact" className="text-link text-link--light">
            Contact us <Icon name="arrowRight" size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
