import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'TINS',
  tagline: 'There Is No Spoon',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://tinsware.github.io',
  baseUrl: '/',

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
        blog: false, // Blog disabled
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
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
        alt: 'TINS Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'hytaleSidebar',
          position: 'left',
          label: 'Hytale',
        },
        {
          type: 'docSidebar',
          sidebarId: 'minecraftSidebar',
          position: 'left',
          label: 'Minecraft',
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
      /* 
      links: [
        {
          title: 'Documentation',
          items: [
            {
              label: 'Hytale',
              to: '/docs/hytale/intro',
            },
            {
              label: 'Minecraft',
              to: '/docs/minecraft/intro',
            },
          ],
        },
        {
          title: 'Links',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/tinsware',
            },
            {
              label: 'Discord',
              href: 'https://discord.gg/tins',
            },
          ],
        },
      ],
      */
      copyright: `Copyright © ${new Date().getFullYear()} TINS - There Is No Spoon.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['java', 'kotlin', 'groovy', 'yaml', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
