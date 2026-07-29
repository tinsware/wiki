---
sidebar_position: 3
title: Flags reference
description: Complete WorldGuard ExtraFlags Plus flag reference
---

# Flags reference

Complete reference for all **44** flags in WorldGuard ExtraFlags Plus **4.4.2**.

Syntax: `/rg flag <region> <flag> <value>` — use `clear` to remove a value.

## Location & teleportation

| Flag | Description | Values | Example |
|------|-------------|--------|---------|
| `teleport-on-entry` | Teleport player on region entry | `world,x,y,z,yaw,pitch` | `/rg flag spawn teleport-on-entry world,0,64,0,0,0` |
| `teleport-on-exit` | Teleport player on region exit | `world,x,y,z,yaw,pitch` | `/rg flag spawn teleport-on-exit world,0,64,0,0,0` |
| `join-location` | Login spawn inside region | `world,x,y,z,yaw,pitch` | `/rg flag spawn join-location world,0,64,0,0,0` |
| `respawn-location` | Death respawn override in region | `world,x,y,z,yaw,pitch` | `/rg flag spawn respawn-location world,0,64,0,0,0` |

:::info Folia
`join-location` is **not available** on Folia. Disable it in config if unused to silence Paper warnings.
:::

## Command execution

| Flag | Description | Values | Example |
|------|-------------|--------|---------|
| `command-on-entry` | Run as player on entry | command string | `/rg flag spawn command-on-entry "say Welcome, %player%!"` |
| `command-on-exit` | Run as player on exit | command string | `/rg flag spawn command-on-exit "say Goodbye!"` |
| `console-command-on-entry` | Run from console on entry | command string | `/rg flag spawn console-command-on-entry "eco give %player% 100"` |
| `console-command-on-exit` | Run from console on exit | command string | `/rg flag spawn console-command-on-exit "eco take %player% 100"` |
| `console-command-repeat` | Repeat console command on interval while inside region | `"<seconds> <command>"` (1–60s) | `/rg flag arena console-command-repeat "20 give %player% diamond 1"` |

`console-command-repeat` is **disabled by default** — enable in `config-wgefp.yml`. Cooldown persists across exits.

## Movement & speed

| Flag | Description | Values | Example |
|------|-------------|--------|---------|
| `walk-speed` | Walk speed in region | `-1.0` to `1.0` | `/rg flag spawn walk-speed 0.5` |
| `fly-speed` | Fly speed in region | `-1.0` to `1.0` | `/rg flag spawn fly-speed 0.3` |
| `fly` | Allow/deny flight | `allow` / `deny` | `/rg flag spawn fly deny` |
| `glide` | Elytra control | `allow` / `deny` / `force` | `/rg flag spawn glide force` |
| `frostwalker` | Frost Walker enchant | `allow` / `deny` | `/rg flag spawn frostwalker deny` |

`fly deny` also disables EssentialsX flight when EssentialsX is installed.

## Protection & survival

| Flag | Description | Values | Example |
|------|-------------|--------|---------|
| `godmode` | Invulnerability in region | `allow` / `deny` | `/rg flag spawn godmode allow` |
| `keep-inventory` | Keep inventory on death | `true` / `false` | `/rg flag spawn keep-inventory true` |
| `keep-exp` | Keep XP on death | `true` / `false` | `/rg flag spawn keep-exp true` |
| `item-durability` | Item durability loss | `allow` / `deny` | `/rg flag spawn item-durability deny` |

`godmode` integrates with EssentialsX. `keep-inventory` can restore inventory on combat-log with DeluxeCombat (see [configuration](./configuration)).

## Chat

| Flag | Description | Values | Example |
|------|-------------|--------|---------|
| `chat-prefix` | Prefix for chat in region | text (PlaceholderAPI) | `/rg flag spawn chat-prefix "&7[Spawn] "` |
| `chat-suffix` | Suffix for chat in region | text (PlaceholderAPI) | `/rg flag spawn chat-suffix " &7[Lv %player_level%]"` |

## Effects

| Flag | Description | Values | Example |
|------|-------------|--------|---------|
| `blocked-effects` | Block potion effects | effect names | `/rg flag spawn blocked-effects BLINDNESS,SLOWNESS` |
| `give-effects` | Apply effects while inside | `effect:amp:particles` | `/rg flag spawn give-effects night_vision,strength:1:false` |
| `play-sounds` | Play sounds in region | sound data | `/rg flag spawn play-sounds minecraft:block.note_block.pling` |

## World interaction

| Flag | Description | Values | Example |
|------|-------------|--------|---------|
| `worldedit` | WorldEdit / FAWE in region | `allow` / `deny` | `/rg flag spawn worldedit deny` |
| `nether-portals` | Nether portal use/creation | `allow` / `deny` | `/rg flag spawn nether-portals deny` |
| `chunk-unload` | Prevent chunk unload | `allow` / `deny` | `/rg flag spawn chunk-unload deny` |
| `villager-trade` | Villager trading | `allow` / `deny` | `/rg flag spawn villager-trade deny` |
| `inventory-craft` | Inventory 2×2 crafting | `allow` / `deny` | `/rg flag spawn inventory-craft deny` |

Bypass WorldEdit deny with permission `worldguardextraflagsplus.worldedit.bypass`.

## Block & item control

| Flag | Description | Values | Example |
|------|-------------|--------|---------|
| `allow-block-place` | Whitelist placeable blocks | materials | `/rg flag spawn allow-block-place OAK_PLANKS,STONE` |
| `deny-block-place` | Blacklist placeable blocks | materials | `/rg flag spawn deny-block-place TNT,LAVA` |
| `allow-block-break` | Whitelist breakable blocks | materials | `/rg flag spawn allow-block-break GLASS` |
| `deny-block-break` | Blacklist breakable blocks | materials | `/rg flag spawn deny-block-break DIAMOND_BLOCK` |
| `deny-item-drops` | Block dropping items | materials | `/rg flag spawn deny-item-drops DIAMOND` |
| `deny-item-pickup` | Block picking up items | materials | `/rg flag spawn deny-item-pickup DIAMOND` |
| `disable-completely` | Block item usage entirely | `MACE`, `SPEAR`, `TRIDENT`, etc. | `/rg flag spawn disable-completely MACE,SPEAR` |
| `disable-throw` | Block throwing throwables | `EGG`, `SNOWBALL`, `ENDER_PEARL`, `EXPERIENCE_BOTTLE` | `/rg flag spawn disable-throw EGG,SNOWBALL` |
| `permit-workbenches` | Block workbench types | `ALL`, `CRAFT`, `ANVIL`, etc. | `/rg flag spawn permit-workbenches ALL` |

`allow-block-place` / `allow-block-break` support optional member-only mode in config.

## Entry control

| Flag | Description | Values | Example |
|------|-------------|--------|---------|
| `entry-min-level` | Minimum XP level or PAPI value | number / placeholder | `/rg flag dungeon entry-min-level 20` |
| `entry-max-level` | Maximum XP level or PAPI value | number / placeholder | `/rg flag dungeon entry-max-level 50` |
| `player-count-limit` | Max players in region | integer | `/rg flag arena player-count-limit 10` |

## Special features

| Flag | Description | Values | Example |
|------|-------------|--------|---------|
| `disable-collision` | Disable player collision | `true` / `false` | `/rg flag spawn disable-collision true` |
| `hide-players` | Hide players from each other *(experimental)* | `true` / `false` | `/rg flag hub hide-players true` |
| `chambered-enderpearl` | Chambered pearl mitigation *(experimental)* | `allow` / `deny` | `/rg flag spawn chambered-enderpearl deny` |
| `lightning-damage` | Lightning damage (visuals remain) | `allow` / `deny` | `/rg flag arena lightning-damage deny` |

See [disable-collision](./disable-collision) for team/TAB details.

## In-game flag help

The plugin exposes flag metadata for external tools (e.g. WG-GUI). Use `/wgefp` commands where available on your server build.
