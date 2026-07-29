import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

const sidebars: SidebarsConfig = {
  hytaleSidebar: [
    {
      type: 'doc',
      id: 'games/hytale/intro',
      label: 'Welcome',
    },
    {
      type: 'category',
      label: 'Mods',
      collapsible: true,
      collapsed: false,
      items: ['games/hytale/mods/hyannouncer'],
    },
  ],

  minecraftSidebar: [
    {
      type: 'doc',
      id: 'games/minecraft/intro',
      label: 'Welcome',
    },
    {
      type: 'category',
      label: 'Plugins',
      collapsible: true,
      collapsed: false,
      items: ['games/minecraft/plugins/worldguard-extraflags-plus'],
    },
  ],
};

export default sidebars;
