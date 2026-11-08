import { useMemo, useState } from 'react';
import PageHeader from '../components/PageHeader';
import SectionHeading from '../components/SectionHeading';
import ProjectCard from '../components/ProjectCard';
import Button from '../components/Button';
import { categoryFilters, projects } from '../data/siteData';

export default function Projects() {
  const [filter, setFilter] = useState('All');

  const filtered = useMemo(
    () =>
      filter === 'All'
        ? projects
        : projects.filter((project) => project.category === filter),
    [filter],
  );

  return (
    <>
      <PageHeader
        title="Portfolio"
        current="Portfolio"
        description="A selection of the outcomes we have helped create with clients across industries and continents."
      />

      <section className="section projects-page">
        <div className="container">
          <div className="section-top">
            <SectionHeading
              eyebrow="Selected work"
              title={
                <>
                  Breaking boundaries, building <span>dreams.</span>
                </>
              }
            />
            <div className="section-top__side" data-reveal>
              <p>
                Every project starts with a real challenge. These are the ones we
                are proud to talk about — and the results our clients are proud
                to share.
              </p>
            </div>
          </div>

          <div className="filter-bar" data-reveal>
            {categoryFilters.map((category) => (
              <button
                key={category}
                type="button"
                className={filter === category ? 'is-active' : ''}
                onClick={() => setFilter(category)}
              >
                {category}
                <span>
                  {category === 'All'
                    ? projects.length
                    : projects.filter((project) => project.category === category)
                        .length}
                </span>
              </button>
            ))}
          </div>

          <div className="projects-grid projects-grid--page">
            {filtered.map((project, index) => (
              <ProjectCard
                project={project}
                key={project.slug}
                featured={index === 0}
              />
            ))}
          </div>

          <div className="projects-page__foot" data-reveal>
            <p>Have a challenge that belongs here?</p>
            <Button to="/contact" variant="primary">
              Start a project
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
