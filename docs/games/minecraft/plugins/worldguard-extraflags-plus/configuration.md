---
sidebar_position: 4
title: Configuration
description: WorldGuard ExtraFlags Plus config-wgefp.yml and messages-wgefp.yml
---

# Configuration

WorldGuard ExtraFlags Plus stores its files in the **WorldGuard plugin folder**:

```
plugins/WorldGuard/
├── config-wgefp.yml      # Plugin behavior & flag toggles
└── messages-wgefp.yml    # Customizable player messages
```

Reload both with `/wgefp reload` or `/wg reload`.

## config-wgefp.yml

### Master flag control (`all-flags-control`)

Each flag can be enabled or disabled globally. **Disabled flags are not registered** — useful to avoid Paper deprecation warnings for unused flags.

| Setting | Default | Notes |
|---------|---------|-------|
| Most flags | `true` | Standard flags enabled |
| `hide-players` | `false` | Experimental — opt-in |
| `console-command-repeat` | `false` | Opt-in repeating commands |

Key toggles for Plus flags:

```yaml
all-flags-control:
  disable-completely: true
  disable-throw: true
  console-command-repeat: false
  hide-players: false
  chambered-enderpearl: true
  lightning-damage: true
  join-location: true   # set false on Folia or if unused
```

### Permit workbenches (`permit-workbenches`)

| Setting | Default | Description |
|---------|---------|-------------|
| `permit-workbench-block-placement-too` | `false` | Also block placing workbench blocks |
| `permit-all-includes-enderchest` | `false` | `ALL` keyword includes ender chests |

### Godmode (`godmode`)

| Setting | Default | Description |
|---------|---------|-------------|
| `auto-give-godmode-region-left` | `false` | Restore godmode when leaving region |

### Keep inventory (`keep-inventory`)

| Setting | Default | Description |
|---------|---------|-------------|
| `combat-log-restore` | `true` | DeluxeCombat: restore inventory after combat-log in keep-inventory regions |

### Allow block place / break

| Setting | Default | Description |
|---------|---------|-------------|
| `allow-block-place.require-membership` | `false` | Whitelist only applies to region members/owners |
| `allow-block-break.require-membership` | `false` | Same for block break whitelist |

### Logging (`logging`)

| Setting | Default | Description |
|---------|---------|-------------|
| `verbose-startup-logs` | `false` | Detailed startup lines (config paths, collision banner, chunk tickets) |

## messages-wgefp.yml

All player-facing messages are customizable.

- Edit text to match your server style
- Color codes supported (`&c`, `&7`, etc.)
- Set a message to `""` to disable it
- Common placeholders: `{required}`, `{current}`, `{item}`, `{workbench}`
- **`disable-throw-blocked`** uses `{item}`
- **`disable-completely-blocked`** for blocked item usage

### Message cooldown

Default **3 seconds** between repeated denial messages to prevent spam. Configured in the messages file / plugin defaults.

## Update checker

Automatically checks **Spigot**, **GitHub**, and **Modrinth** for new releases on startup.

## Optional integrations

| Plugin | Feature |
|--------|---------|
| PacketEvents | Primary `disable-completely` packet hooks |
| ProtocolLib | Fallback packet hooks |
| PlaceholderAPI | Chat prefix/suffix, entry level placeholders |
| EssentialsX | Godmode / fly flag sync |
| TAB | `disable-collision` via TAB API |
| DeluxeCombat | `keep-inventory` combat-log restore |

## Related

- [Flag usage examples](./flag-usage)
- [Flags reference](./flags-reference)
- [disable-collision flag](./disable-collision)
