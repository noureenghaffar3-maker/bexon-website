import { Link, useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import BlogCard from '../components/BlogCard';
import Button from '../components/Button';
import Icon from '../components/Icon';
import { blogs, company } from '../data/siteData';
import NotFound from './NotFound';

export default function BlogDetails() {
  const { slug } = useParams();
  const post = blogs.find((item) => item.slug === slug);

  if (!post) return <NotFound />;

  const recent = blogs.filter((item) => item.slug !== slug).slice(0, 3);
  const categories = [...new Set(blogs.map((item) => item.category))];

  return (
    <>
      <PageHeader
        title={post.category}
        current="Blog details"
        description={post.excerpt}
      />

      <section className="section blog-detail">
        <div className="container">
          <div className="blog-detail__layout">
            <article className="blog-article">
              <div className="blog-article__meta" data-reveal>
                <span>
                  <Icon name="calendar" size={15} /> {post.date}
                </span>
                <span>
                  <Icon name="clock" size={15} /> {post.readTime}
                </span>
                <span>
                  <Icon name="users" size={15} /> By {post.author}
                </span>
              </div>
              <h1 className="blog-article__title" data-reveal>
                {post.title}
              </h1>
              <div className="blog-article__media" data-reveal>
                <img src={post.image} alt={post.title} />
              </div>
              <div className="blog-article__body">
                {post.body.map((paragraph) => (
                  <p key={paragraph} data-reveal>
                    {paragraph}
                  </p>
                ))}
                <blockquote className="blog-article__quote" data-reveal>
                  <Icon name="quote" />
                  <p>
                    The most effective change leaders are relentlessly clear,
                    genuinely curious and comfortable being challenged.
                  </p>
                </blockquote>
                <h2 data-reveal>Putting it into practice</h2>
                <p data-reveal>
                  Start with one meaningful problem. Give a small team the
                  context, the permission and the support to solve it end to end.
                  Measure what changes for customers, share what you learn and
                  build the next cycle on that evidence.
                </p>
                <ul className="check-list" data-reveal>
                  <li>
                    <Icon name="check" /> Name the outcome before the activity
                  </li>
                  <li>
                    <Icon name="check" /> Keep the feedback loop short
                  </li>
                  <li>
                    <Icon name="check" /> Make the change visible to everyone
                  </li>
                </ul>
              </div>

              <div className="blog-article__footer" data-reveal>
                <div className="blog-tags">
                  <span>{post.category}</span>
                  <span>Leadership</span>
                  <span>Growth</span>
                </div>
                <div className="blog-share">
                  <span>Share</span>
                  <a
                    href="https://www.linkedin.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Share on LinkedIn"
                  >
                    <Icon name="linkedin" />
                  </a>
                  <a
                    href="https://x.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Share on X"
                  >
                    <Icon name="x" />
                  </a>
                  <a
                    href="https://www.facebook.com/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Share on Facebook"
                  >
                    <Icon name="facebook" />
                  </a>
                </div>
              </div>

              <div className="author-card" data-reveal>
                <img src="/images/blog/avatar-1.webp" alt={post.author} />
                <div>
                  <span>Written by</span>
                  <h3>{post.author}</h3>
                  <p>
                    Part of the Bexon strategy team, writing about the practical
                    craft of leading change in complex organisations.
                  </p>
                </div>
              </div>
            </article>

            <aside className="blog-sidebar">
              <div className="sidebar-card" data-reveal>
                <h3>Recent insights</h3>
                <ul className="recent-posts">
                  {recent.map((item) => (
                    <li key={item.slug}>
                      <Link to={`/blog/${item.slug}`}>
                        <img src={item.image} alt="" />
                        <span>
                          <small>{item.date}</small>
                          <strong>{item.title}</strong>
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-card" data-reveal>
                <h3>Categories</h3>
                <ul className="sidebar-categories">
                  {categories.map((category) => (
                    <li key={category}>
                      <Link to="/blog">
                        {category}
                        <Icon name="arrowRight" size={15} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="sidebar-card sidebar-card--contact" data-reveal>
                <span className="eyebrow eyebrow--light">Let&apos;s talk</span>
                <h3>Bring these ideas into your business.</h3>
                <p>
                  Book a free 30-minute conversation with a Bexon partner.
                </p>
                <a href={company.phoneHref} className="sidebar-phone">
                  <span>
                    <Icon name="phone" />
                  </span>
                  {company.phone}
                </a>
                <Button to="/contact" variant="light" icon="arrowRight">
                  Book a call
                </Button>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section related-posts">
        <div className="container">
          <div className="section-top">
            <h2 className="section-title" data-reveal>
              Keep <span>reading.</span>
            </h2>
            <Button to="/blog" variant="outline">
              All insights
            </Button>
          </div>
          <div className="blog-grid">
            {recent.map((item) => (
              <BlogCard post={item} key={item.slug} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
