import { Link } from 'react-router-dom';
import Icon from './Icon';

export default function BlogCard({ post }) {
  return (
    <article className="blog-card" data-reveal>
      <Link to={`/blog/${post.slug}`} className="blog-card__media">
        <img src={post.image} alt={post.title} loading="lazy" />
        <span className="blog-card__category">{post.category}</span>
      </Link>
      <div className="blog-card__body">
        <div className="blog-card__meta">
          <span>
            <Icon name="calendar" size={14} /> {post.date}
          </span>
          <span>
            <Icon name="clock" size={14} /> {post.readTime}
          </span>
        </div>
        <h3>
          <Link to={`/blog/${post.slug}`}>{post.title}</Link>
        </h3>
        <p>{post.excerpt}</p>
        <div className="blog-card__footer">
          <span className="blog-card__author">By {post.author}</span>
          <Link to={`/blog/${post.slug}`} className="text-link">
            Read more <Icon name="arrowRight" size={16} />
          </Link>
        </div>
      </div>
    </article>
  );
}
