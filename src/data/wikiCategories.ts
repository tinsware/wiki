export type WikiProject = {
  title: string;
  description: string;
  link: string;
};

export type WikiCategory = {
  id: string;
  title: string;
  description: string;
  projects: WikiProject[];
};

export const wikiCategories: WikiCategory[] = [
  {
    id: 'games',
    title: 'Games',
    description: 'Mods and plugins for game platforms',
    projects: [
      {
        title: 'Minecraft',
        description: 'Plugins and extensions for Minecraft servers',
        link: '/docs/games/minecraft/intro',
      },
      {
        title: 'Hytale',
        description: 'Server mods and tools for Hytale',
        link: '/docs/games/hytale/intro',
      },
    ],
  },
  {
    id: 'tools',
    title: 'Tools',
    description: 'Utilities and developer tooling',
    projects: [],
  },
  {
    id: 'libraries',
    title: 'Libraries',
    description: 'Shared libraries and SDKs',
    projects: [],
  },
];
