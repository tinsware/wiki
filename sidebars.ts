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
      items: [
        {
          type: 'category',
          label: 'HyAnnouncer',
          collapsible: true,
          collapsed: false,
          items: [
            'games/hytale/mods/hyannouncer/index',
            'games/hytale/mods/hyannouncer/gui',
            'games/hytale/mods/hyannouncer/sounds',
            'games/hytale/mods/hyannouncer/commands',
            'games/hytale/mods/hyannouncer/configuration',
            'games/hytale/mods/hyannouncer/placeholders',
            'games/hytale/mods/hyannouncer/color-codes',
            'games/hytale/mods/hyannouncer/examples',
          ],
        },
      ],
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
          ],
        },
      ],
    },
  ],
};

export default sidebars;
