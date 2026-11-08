import Icon from './Icon';

export default function TeamCard({ member }) {
  return (
    <article className="team-card" data-reveal>
      <div className="team-card__media">
        <img src={member.image} alt={member.name} loading="lazy" />
        <div className="team-card__socials">
          <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" aria-label={`${member.name} on LinkedIn`}>
            <Icon name="linkedin" />
          </a>
          <a href="https://x.com/" target="_blank" rel="noreferrer" aria-label={`${member.name} on X`}>
            <Icon name="x" />
          </a>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer" aria-label={`${member.name} on Instagram`}>
            <Icon name="instagram" />
          </a>
        </div>
      </div>
      <div className="team-card__body">
        <h3>{member.name}</h3>
        <span>{member.role}</span>
        <p>{member.bio}</p>
      </div>
    </article>
  );
}
