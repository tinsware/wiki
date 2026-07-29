---
sidebar_position: 1
title: Overview
description: WorldGuard ExtraFlags Plus v4.4.2 — 44+ region flags with Folia support
---

# WorldGuard ExtraFlags Plus

**Release 4.4.2** — A WorldGuard extension that adds **44+ region flags** for player behavior, teleportation, commands, items, blocks, and region rules — with **Folia support** and fully customizable messages.

[![GitHub](https://img.shields.io/badge/GitHub-Repository-black?style=for-the-badge&logo=github)](https://github.com/tins-dev/WorldGuardExtraFlagsPlus)
[![License](https://img.shields.io/badge/License-MIT-green?style=for-the-badge)](https://github.com/tins-dev/WorldGuardExtraFlagsPlus/blob/master/LICENSE.txt)

## Highlights

- **Folia ready** — async-safe region handling on Folia servers
- **`disable-completely`** — block MACE, FIREWORK_ROCKET, WIND_CHARGE, TOTEM_OF_UNDYING, TRIDENT, vanilla spears (`SPEAR` or per-tier), with optional **PacketEvents** / **ProtocolLib** for full STAB / Lunge coverage
- **`disable-throw`** — block throwing **EGG**, **SNOWBALL**, **ENDER_PEARL**, **EXPERIENCE_BOTTLE** only (tridents and wind charges stay on `disable-completely`)
- **`console-command-repeat`** — repeat a console command every 1–60 seconds while a player stays in a region (opt-in in config)
- **`lightning-damage`** — lightning visuals without damage (PvP arenas)
- **`entry-min-level` / `entry-max-level`** — XP level or PlaceholderAPI integer entry limits
- **Custom messages** — `messages-wgefp.yml` with cooldown (default 3 seconds)
- **Update checker** — Spigot, GitHub, and Modrinth
- **EssentialsX integration** — `godmode` and `fly` flags also disable EssentialsX god/fly when denied

:::warning Do not run both plugins
If upgrading from **WorldGuardExtraFlags** to **WorldGuard ExtraFlags Plus**:

- Remove the old `WorldGuardExtraFlags.jar`
- Keep only `WorldGuardExtraFlagsPlus.jar`
- Both plugins **cannot** coexist — they will conflict
:::

## Requirements

| Requirement | Version |
|-------------|---------|
| Minecraft | 1.20 – 1.21.11 / 26.2+ |
| WorldGuard | 7.0.15+ |
| Java | 21 (plugin bytecode) |
| Server software | Spigot, Paper, Purpur, **Folia** |

The JAR declares **`api-version: 1.21`** in `plugin.yml` for Paper 1.21.x and forks (e.g. Canvas).

| Optional | Purpose |
|----------|---------|
| [PacketEvents](https://github.com/retrooper/packetevents) | Primary packet hook for `disable-completely` (spear Lunge / STAB) |
| [ProtocolLib](https://github.com/dmulloy2/ProtocolLib) | Fallback packet hook when PacketEvents is absent |
| PlaceholderAPI | Chat prefix/suffix and integer entry limits |
| EssentialsX | Godmode / fly flag integration |
| TAB | `disable-collision` API integration |
| DeluxeCombat | `keep-inventory` combat-log restore |

## Installation

1. Download the latest release from [GitHub Releases](https://github.com/tins-dev/WorldGuardExtraFlagsPlus/releases)
2. Place `WorldGuardExtraFlagsPlus.jar` in your server's `plugins/` folder
3. Ensure **WorldGuard** is installed
4. Restart the server
5. Edit `plugins/WorldGuard/config-wgefp.yml` and `plugins/WorldGuard/messages-wgefp.yml` as needed
6. Reload with `/wgefp reload` or `/wg reload`

## Commands

| Command | Description |
|---------|-------------|
| `/wgefp reload` | Reload `messages-wgefp.yml` (aliases: `/wgefplus`, `/worldguardextraflagsplus`) |

## Permissions

| Permission | Description |
|------------|-------------|
| `worldguardextraflagsplus.reload` | Use `/wgefp reload` |
| `worldguardextraflagsplus.worldedit.bypass` | Bypass `worldedit` deny regions for WorldEdit / FAWE |
| `worldguardextraflagsplus.worldedit.silent-deny` | Suppress chat when WorldEdit is blocked |

## Documentation

- [Flag usage examples](./flag-usage)
- [Flags reference](./flags-reference)
- [Configuration](./configuration)

## Flag overview

**Original ExtraFlags (25):** teleport, command, speed, inventory, chat, effects, worldedit, fly, sounds, portals, and more.

**Plus additions (19):** `disable-completely`, `disable-throw`, entry level limits, villager trade, lightning damage, collision, block/item control, workbenches, inventory craft, player count limit, `hide-players` *(experimental)*, `chambered-enderpearl` *(experimental)*, `console-command-repeat`.

See the [full flags reference](./flags-reference) for every flag, accepted values, and examples.

## Support

- **Changelog:** [GitHub CHANGELOG](https://github.com/tins-dev/WorldGuardExtraFlagsPlus/blob/master/CHANGELOG.md)
- **Discord:** [tinsware Discord](https://discord.gg/TCJAwsdqum)

## Authors

- **ExtraFlags Plus:** [tins](https://github.com/tins-dev)
- **Original ExtraFlags:** [isokissa3](https://joniaromaa.fi)
