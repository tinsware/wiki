import type {ReactNode} from 'react';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HeroSection() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={styles.hero}>
      <div className={styles.heroBackground}>
        <div className={styles.gridOverlay}></div>
      </div>
      <div className={styles.heroContent}>
        <Heading as="h1" className={styles.heroTitle}>
          {siteConfig.title}
        </Heading>
        <p className={styles.heroTagline}>{siteConfig.tagline}</p>
        <p className={styles.heroDescription}>
          Documentation for our gaming mods and plugins.
        </p>
      </div>
    </header>
  );
}

type WikiCardProps = {
  title: string;
  description: string;
  emoji: string;
  link: string;
  items: string[];
};

function WikiCard({title, description, emoji, link, items}: WikiCardProps) {
  return (
    <Link to={link} className={styles.wikiCard}>
      <div className={styles.wikiCardEmoji}>{emoji}</div>
      <div className={styles.wikiCardContent}>
        <Heading as="h2" className={styles.wikiCardTitle}>{title}</Heading>
        <p className={styles.wikiCardDescription}>{description}</p>
        <ul className={styles.wikiCardItems}>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
        <span className={styles.wikiCardLink}>Browse Documentation →</span>
      </div>
    </Link>
  );
}

function WikiSection() {
  return (
    <section className={styles.wikiSection}>
      <div className="container">
        <div className={styles.sectionHeader}>
          <Heading as="h2" className={styles.sectionTitle}>Documentation</Heading>
          <p className={styles.sectionSubtitle}>
            Select a game to browse available mods and plugins
          </p>
        </div>
        <div className={styles.wikiGrid}>
          <WikiCard
            title="Hytale"
            description="Mods for the upcoming Hytale game"
            emoji="⚔️"
            link="/docs/hytale/intro"
            items={['HyAnnouncer']}
          />
          <WikiCard
            title="Minecraft"
            description="Plugins for Minecraft servers"
            emoji="⛏️"
            link="/docs/minecraft/intro"
            items={['WorldGuard ExtraFlags Plus']}
          />
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className={styles.aboutSection}>
      <div className="container">
        <div className={styles.aboutContent}>
          <Heading as="h2" className={styles.sectionTitle}>About TINS</Heading>
          <p className={styles.aboutText}>
            <strong>TINS — There Is No Spoon.</strong> We develop mods and plugins 
            for various games. This wiki contains documentation, installation guides, 
            and configuration references for all our projects.
          </p>
          <div className={styles.aboutLinks}>
            <Link to="https://github.com/tins-dev" className={styles.aboutLink}>
              GitHub →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function Home(): ReactNode {
  return (
    <Layout
      title="Wiki"
      description="TINS - There Is No Spoon. Documentation for gaming mods and plugins.">
      <HeroSection />
      <main>
        <WikiSection />
        <AboutSection />
      </main>
    </Layout>
  );
}
