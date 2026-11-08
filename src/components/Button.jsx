import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  icon = 'arrowRight',
  className = '',
  type = 'button',
  onClick,
  ...rest
}) {
  const classes = `btn btn--${variant}${className ? ` ${className}` : ''}`;
  const content = (
    <>
      <span className="btn__text">{children}</span>
      {icon && (
        <span className="btn__icon">
          <Icon name={icon} />
        </span>
      )}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick} {...rest}>
        {content}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} onClick={onClick} {...rest}>
        {content}
      </a>
    );
  }

  return (
    <button type={type} className={classes} onClick={onClick} {...rest}>
      {content}
    </button>
  );
}
