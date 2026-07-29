---
sidebar_position: 3
title: WorldGuard ExtraFlags Plus
description: Extension for WorldGuard with 37+ extra flags and Folia support
---

# WorldGuard ExtraFlags Plus

**WorldGuard ExtraFlags Plus** is a Bukkit plugin extension that provides 37+ extra flags for WorldGuard, with full Folia support.

[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/tins-dev/WorldGuardExtraFlagsPlus)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](https://github.com/tins-dev/WorldGuardExtraFlagsPlus/blob/master/LICENSE.txt)

## Features

- ✅ **Folia Support** – Full compatibility with Folia servers
- ✅ **37+ Extra Flags** – Extensive flag collection for region customization
- ✅ **PlaceholderAPI Support** – Number returns and chat integration
- ✅ **Configurable Messages** – Customize all plugin messages
- ✅ **Update Checker** – Automatic updates from Spigot, GitHub, and Modrinth
- ✅ **EssentialsX Integration** – Godmode & Fly flag enhancement

## New Flags

### Item Control
| Flag | Description |
|------|-------------|
| `disable-completely` | Blocks all usage of specified items (MACE, FIREWORK_ROCKET, WIND_CHARGE, TOTEM_OF_UNDYING, TRIDENT) |
| `deny-item-drops` | Restrict specific items from being dropped |
| `deny-item-pickup` | Restrict specific items from being picked up |

### Player Restrictions
| Flag | Description |
|------|-------------|
| `entry-min-level` | Restrict region entry based on minimum player XP level or PlaceholderAPI values |
| `entry-max-level` | Restrict region entry based on maximum player XP level or PlaceholderAPI values |
| `player-count-limit` | Limit maximum number of players in a region |
| `disable-collision` | Disable player collision in regions |

### Block Control
| Flag | Description |
|------|-------------|
| `allow-block-place` | Fine-grained block placement control |
| `deny-block-place` | Deny specific block placement |
| `allow-block-break` | Fine-grained block breaking control |
| `deny-block-break` | Deny specific block breaking |

### Interaction Control
| Flag | Description |
|------|-------------|
| `villager-trade` | Control villager trading in regions |
| `permit-workbenches` | Block workbench usage (anvil, crafting table, ender chest, etc.) |
| `inventory-craft` | Block inventory crafting (2x2 grid) in regions |

## Requirements

| Requirement | Version |
|-------------|---------|
| Minecraft Server | 1.17+ |
| WorldGuard | 7.0+ |
| Java | 17+ |
| Server Software | Spigot/Paper/Folia |

## Installation

:::warning Migration Notice
If upgrading from `WorldGuardExtraFlags` to `WorldGuardExtraFlagsPlus`:
- **Remove** the old `WorldGuardExtraFlags.jar` plugin file
- **Only keep** `WorldGuardExtraFlagsPlus.jar` on your server
- Both plugins cannot coexist - they will conflict with each other
:::

1. Download the latest release from [GitHub Releases](https://github.com/tins-dev/WorldGuardExtraFlagsPlus/releases)
2. Place the JAR file in your server's `plugins` folder
3. Restart your server
4. Configure messages in `plugins/WorldGuard/messages-wgefp.yml`

## Configuration

### Message Customization

All plugin messages can be customized via `messages-wgefp.yml` in the WorldGuard folder.

### Message Cooldown

The plugin includes a message cooldown system to prevent spam. Default cooldown is 3 seconds.

## Usage Examples

### Disable Specific Items in a Region

```
/rg flag <region> disable-completely MACE,WIND_CHARGE,TOTEM_OF_UNDYING
```

### Set Player Level Restrictions

```
/rg flag <region> entry-min-level 10
/rg flag <region> entry-max-level 50
```

### Limit Players in a Region

```
/rg flag <region> player-count-limit 20
```

### Block Specific Item Drops

```
/rg flag <region> deny-item-drops DIAMOND,EMERALD
```

### Disable Player Collision

```
/rg flag <region> disable-collision true
```

## PlaceholderAPI Integration

The plugin supports PlaceholderAPI for:
- Chat prefix/suffix placeholders
- Level-based entry restrictions using custom placeholders

## Compatibility

### Supported Plugins
- ✅ WorldGuard 7.0+
- ✅ EssentialsX (godmode/fly integration)
- ✅ PlaceholderAPI
- ✅ TAB Plugin (collision API integration)

### Server Software
- ✅ Spigot
- ✅ Paper
- ✅ Purpur
- ✅ Folia