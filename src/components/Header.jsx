import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import { company, navLinks, services } from '../data/siteData';
import Icon from './Icon';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [pagesOpen, setPagesOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setSearchOpen(false);
    setPagesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const submitSearch = (event) => {
    event.preventDefault();
    const value = query.trim();
    navigate(value ? `/blog?search=${encodeURIComponent(value)}` : '/blog');
    setQuery('');
    setSearchOpen(false);
  };

  return (
    <>
      <header className={`site-header${scrolled ? ' is-stuck' : ''}`}>
        <div className="site-header__inner">
          <Link to="/" className="brand" aria-label="Bexon home">
            <img src="/images/logos/logo.webp" alt="Bexon" />
          </Link>

          <nav className="main-nav" aria-label="Primary navigation">
            <ul>
              {navLinks.map((link) => {
                if (link.label === 'Pages') {
                  return (
                    <li
                      key={link.label}
                      className="has-dropdown"
                      onMouseEnter={() => setPagesOpen(true)}
                      onMouseLeave={() => setPagesOpen(false)}
                    >
                      <button
                        type="button"
                        className="nav-link nav-link--button"
                        aria-expanded={pagesOpen}
                        onClick={() => setPagesOpen((open) => !open)}
                      >
                        {link.label}
                        <Icon name="chevronDown" size={14} />
                      </button>
                      <ul className={`dropdown${pagesOpen ? ' is-open' : ''}`}>
                        {link.children.map((child) => (
                          <li key={child.to}>
                            <NavLink to={child.to}>{child.label}</NavLink>
                          </li>
                        ))}
                      </ul>
                    </li>
                  );
                }
                if (link.label === 'Services') {
                  return (
                    <li key={link.label} className="has-dropdown has-mega">
                      <NavLink
                        to={link.to}
                        className={({ isActive }) =>
                          `nav-link${isActive ? ' is-active' : ''}`
                        }
                      >
                        {link.label}
                        <Icon name="chevronDown" size={14} />
                      </NavLink>
                      <div className="mega-menu">
                        <div className="mega-menu__head">
                          <span className="eyebrow">
                            <Icon name="sparkles" /> What we do
                          </span>
                          <p>Six connected practices, one accountable team.</p>
                        </div>
                        <ul className="mega-menu__grid">
                          {services.map((service) => (
                            <li key={service.slug}>
                              <Link to={`/services/${service.slug}`}>
                                <span className="mega-menu__icon">
                                  <Icon name={service.icon} />
                                </span>
                                <span>
                                  <strong>{service.short}</strong>
                                  <small>{service.timeline}</small>
                                </span>
                                <Icon name="arrowUpRight" size={16} />
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </li>
                  );
                }
                return (
                  <li key={link.label}>
                    <NavLink
                      to={link.to}
                      end={link.to === '/'}
                      className={({ isActive }) =>
                        `nav-link${isActive ? ' is-active' : ''}`
                      }
                    >
                      {link.label}
                    </NavLink>
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="header-actions">
            <button
              type="button"
              className="icon-button"
              aria-label="Search"
              onClick={() => setSearchOpen(true)}
            >
              <Icon name="search" />
            </button>
            <Link to="/contact" className="btn btn--primary header-cta">
              <span className="btn__text">Let&apos;s Talk</span>
              <span className="btn__icon">
                <Icon name="arrowRight" />
              </span>
            </Link>
            <button
              type="button"
              className="hamburger"
              aria-label="Open menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen(true)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </div>
      </header>

      <div className={`search-overlay${searchOpen ? ' is-open' : ''}`}>
        <button
          type="button"
          className="search-overlay__backdrop"
          aria-label="Close search"
          onClick={() => setSearchOpen(false)}
        />
        <div className="search-overlay__panel">
          <button
            type="button"
            className="icon-button search-overlay__close"
            aria-label="Close search"
            onClick={() => setSearchOpen(false)}
          >
            <Icon name="close" />
          </button>
          <span className="eyebrow">
            <Icon name="search" /> Search Bexon
          </span>
          <h3>What are you looking for?</h3>
          <form onSubmit={submitSearch}>
            <input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Search insights, services, projects…"
              aria-label="Search"
              autoFocus={searchOpen}
            />
            <button type="submit" aria-label="Submit search">
              <Icon name="arrowRight" />
            </button>
          </form>
        </div>
      </div>

      <div className={`mobile-drawer${menuOpen ? ' is-open' : ''}`}>
        <button
          type="button"
          className="mobile-drawer__backdrop"
          aria-label="Close menu"
          onClick={() => setMenuOpen(false)}
        />
        <div className="mobile-drawer__panel">
          <div className="mobile-drawer__top">
            <Link to="/" onClick={() => setMenuOpen(false)}>
              <img src="/images/logos/logo-2.webp" alt="Bexon" />
            </Link>
            <button
              type="button"
              className="icon-button mobile-drawer__close"
              aria-label="Close menu"
              onClick={() => setMenuOpen(false)}
            >
              <Icon name="close" />
            </button>
          </div>
          <nav className="mobile-nav" aria-label="Mobile navigation">
            <ul>
              <li>
                <NavLink to="/" end onClick={() => setMenuOpen(false)}>
                  Home <Icon name="arrowUpRight" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" onClick={() => setMenuOpen(false)}>
                  About Us <Icon name="arrowUpRight" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/services" onClick={() => setMenuOpen(false)}>
                  Services <Icon name="arrowUpRight" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/projects" onClick={() => setMenuOpen(false)}>
                  Portfolio <Icon name="arrowUpRight" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/team" onClick={() => setMenuOpen(false)}>
                  Our Team <Icon name="arrowUpRight" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/pricing" onClick={() => setMenuOpen(false)}>
                  Pricing <Icon name="arrowUpRight" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/blog" onClick={() => setMenuOpen(false)}>
                  Blog <Icon name="arrowUpRight" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/faq" onClick={() => setMenuOpen(false)}>
                  FAQ <Icon name="arrowUpRight" />
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" onClick={() => setMenuOpen(false)}>
                  Contact <Icon name="arrowUpRight" />
                </NavLink>
              </li>
            </ul>
          </nav>
          <div className="mobile-drawer__info">
            <div>
              <span>Phone</span>
              <a href={company.phoneHref}>{company.phone}</a>
            </div>
            <div>
              <span>Email</span>
              <a href={`mailto:${company.email}`}>{company.email}</a>
            </div>
            <div>
              <span>Location</span>
              <p>{company.address}</p>
            </div>
          </div>
          <div className="mobile-drawer__socials">
            {company.socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={social.label}
              >
                <Icon name={social.icon} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
