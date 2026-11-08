import { useMemo, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import BlogCard from '../components/BlogCard';
import Button from '../components/Button';
import Icon from '../components/Icon';
import { blogs } from '../data/siteData';

export default function Blog() {
  const [params] = useSearchParams();
  const search = (params.get('search') || '').trim().toLowerCase();
  const [category, setCategory] = useState('All');

  const categories = useMemo(
    () => ['All', ...new Set(blogs.map((post) => post.category))],
    [],
  );

  const filtered = useMemo(() => {
    return blogs.filter((post) => {
      const matchesCategory = category === 'All' || post.category === category;
      const haystack = `${post.title} ${post.excerpt} ${post.category} ${post.author}`.toLowerCase();
      const matchesSearch = !search || haystack.includes(search);
      return matchesCategory && matchesSearch;
    });
  }, [category, search]);

  const featured = blogs[0];

  return (
    <>
      <PageHeader
        title="Read Blog"
        current="Blog"
        description="Practical thinking on strategy, leadership, technology and change — written by the people doing the work."
      />

      <section className="section blog-page">
        <div className="container">
          {search ? (
            <div className="search-summary" data-reveal>
              <span className="eyebrow">
                <Icon name="search" /> Search results
              </span>
              <h2>
                {filtered.length} result{filtered.length === 1 ? '' : 's'} for “
                {params.get('search')}”
              </h2>
              <Link to="/blog" className="text-link">
                Clear search <Icon name="arrowRight" size={16} />
              </Link>
            </div>
          ) : (
            <>
              <div className="section-top">
                <SectionHeading
                  eyebrow="Featured insight"
                  title={
                    <>
                      Ideas worth <span>acting on.</span>
                    </>
                  }
                />
                <div className="section-top__side" data-reveal>
                  <p>
                    We write about the things we see in the field: what works,
                    what doesn&apos;t, and what leaders are wrestling with right
                    now.
                  </p>
                </div>
              </div>

              <article className="featured-post" data-reveal>
                <Link
                  to={`/blog/${featured.slug}`}
                  className="featured-post__media"
                >
                  <img src={featured.image} alt={featured.title} />
                  <span className="featured-post__tag">{featured.category}</span>
                </Link>
                <div className="featured-post__body">
                  <div className="blog-card__meta">
                    <span>
                      <Icon name="calendar" size={14} /> {featured.date}
                    </span>
                    <span>
                      <Icon name="clock" size={14} /> {featured.readTime}
                    </span>
                    <span>By {featured.author}</span>
                  </div>
                  <h2>
                    <Link to={`/blog/${featured.slug}`}>{featured.title}</Link>
                  </h2>
                  <p>{featured.excerpt}</p>
                  <Button to={`/blog/${featured.slug}`} variant="primary">
                    Read article
                  </Button>
                </div>
              </article>
            </>
          )}

          <div className="filter-bar" data-reveal>
            {categories.map((item) => (
              <button
                key={item}
                type="button"
                className={category === item ? 'is-active' : ''}
                onClick={() => setCategory(item)}
              >
                {item}
              </button>
            ))}
          </div>

          {filtered.length === 0 ? (
            <div className="empty-state" data-reveal>
              <h3>No articles matched your search.</h3>
              <p>Try a different term or browse all insights.</p>
              <Button to="/blog" variant="outline">
                View all posts
              </Button>
            </div>
          ) : (
            <div className="blog-grid blog-grid--page">
              {filtered.map((post) => (
                <BlogCard post={post} key={post.slug} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}
