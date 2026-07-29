import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';
import clsx from 'clsx';

import {wikiCategories, type WikiProject} from '@site/src/data/wikiCategories';
import styles from './index.module.css';

function ProjectCard({title, description, link, items}: WikiProject) {
  return (
    <Link to={link} className={styles.projectCard}>
      <div className={styles.projectCardContent}>
        <Heading as="h3" className={styles.projectCardTitle}>
          {title}
        </Heading>
        <p className={styles.projectCardDescription}>{description}</p>
        {items.length > 0 && (
          <ul className={styles.projectCardItems}>
            {items.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        )}
        <span className={styles.projectCardLink}>View documentation</span>
      </div>
    </Link>
  );
}

function WikiSection() {
  return (
    <section className={styles.wikiSection}>
      <div className="container">
        <div className={styles.pageHeader}>
          <p className={styles.pageEyebrow}>tinsware</p>
          <Heading as="h1" className={styles.pageTitle}>
            Documentation
          </Heading>
          <p className={styles.pageSubtitle}>
            All digital creations &amp; entertainments
          </p>
        </div>

        <div className={styles.categoryList}>
          {wikiCategories.map((category) => {
            const projectCount = category.projects.length;
            const isEmpty = projectCount === 0;

            return (
              <section
                key={category.id}
                className={clsx(
                  styles.categoryBlock,
                  isEmpty && styles.categoryBlockEmpty,
                )}>
                <div className={styles.categoryHeader}>
                  <div>
                    <Heading as="h2" className={styles.categoryTitle}>
                      {category.title}
                    </Heading>
                    <p className={styles.categoryDescription}>
                      {category.description}
                    </p>
                  </div>
                  <span className={styles.categoryCount}>
                    {projectCount}{' '}
                    {projectCount === 1 ? 'project' : 'projects'}
                  </span>
                </div>

                {isEmpty ? (
                  <p className={styles.categoryEmptyState}>
                    No projects published yet.
                  </p>
                ) : (
                  <div className={styles.projectGrid}>
                    {category.projects.map((project) => (
                      <ProjectCard key={project.title} {...project} />
                    ))}
                  </div>
                )}
              </section>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Wiki Home"
      description="tinsware documentation — all digital creations & entertainments">
      <main>
        <WikiSection />
      </main>
    </Layout>
  );
}
