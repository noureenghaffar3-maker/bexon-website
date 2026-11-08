import Icon from './Icon';

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  light = false,
  className = '',
  children,
}) {
  return (
    <div
      className={`section-heading section-heading--${align}${light ? ' is-light' : ''}${className ? ` ${className}` : ''}`}
      data-reveal
    >
      {eyebrow && (
        <span className="eyebrow">
          <Icon name="sparkles" />
          {eyebrow}
        </span>
      )}
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-desc">{description}</p>}
      {children}
    </div>
  );
}
