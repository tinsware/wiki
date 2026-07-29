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
      items: [
        {
          type: 'category',
          label: 'WorldGuard ExtraFlags Plus',
          collapsible: true,
          collapsed: false,
          items: [
            'games/minecraft/plugins/worldguard-extraflags-plus/index',
            'games/minecraft/plugins/worldguard-extraflags-plus/flag-usage',
            'games/minecraft/plugins/worldguard-extraflags-plus/flags-reference',
            'games/minecraft/plugins/worldguard-extraflags-plus/configuration',
            'games/minecraft/plugins/worldguard-extraflags-plus/disable-collision',
          ],
        },
      ],
    },
  ],
};

export default sidebars;
