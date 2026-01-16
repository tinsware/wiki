import type {SidebarsConfig} from '@docusaurus/plugin-content-docs';

/**
 * TINS Wiki Sidebars Configuration
 */
const sidebars: SidebarsConfig = {
  // Hytale Sidebar
  hytaleSidebar: [
    {
      type: 'doc',
      id: 'hytale/intro',
      label: 'Welcome',
    },
    {
      type: 'category',
      label: 'Mods',
      collapsible: true,
      collapsed: false,
      items: [
        'hytale/mods/hyannouncer',
      ],
    },
  ],

  // Minecraft Sidebar
  minecraftSidebar: [
    {
      type: 'doc',
      id: 'minecraft/intro',
      label: 'Welcome',
    },
    {
      type: 'category',
      label: 'Plugins',
      collapsible: true,
      collapsed: false,
      items: [
        'minecraft/plugins/worldguard-extraflags-plus',
      ],
    },
  ],
};

export default sidebars;
