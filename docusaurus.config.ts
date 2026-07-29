import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'tinsware',
  tagline: 'There Is No Spoon',
  favicon: 'img/favicon.ico',

  // SEO
  customFields: {
    description: 'tinsware wiki - all digital creations & entertainments documentation',
    keywords: 'tins, tinsware, there is no spoon, tinsmc, tinsworkshop, nospoonworkshop, wiki, documentation',
    canonical: 'https://tinsware.github.io/wiki/',
  },

  future: {
    v4: true,
  },

  url: 'https://tinsware.github.io',
  baseUrl: '/wiki',

  organizationName: 'tinsware',
  projectName: 'wiki',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themes: [
    [
      require.resolve('@easyops-cn/docusaurus-search-local'),
      {
        hashed: true,
        language: ['en'],
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
        indexBlog: false,
        docsRouteBasePath: '/docs',
      },
    ],
  ],

  themeConfig: {
    image: 'img/tins-social-card.jpg',
    colorMode: {
      defaultMode: 'dark',
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'TINS',
      logo: {
        alt: 'tinsware logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'custom-wikiHome',
          position: 'left',
        },
        {
          type: 'search',
          position: 'left',
          className: 'navbar-search-center',
        },
        {
          href: 'https://discord.gg/TCJAwsdqum',
          label: 'Discord',
          position: 'right',
        },
        {
          href: 'https://github.com/tinsware',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `© ${new Date().getFullYear()} tinsware · TINS`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'kotlin', 'groovy', 'yaml', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
