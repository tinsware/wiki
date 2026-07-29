---
sidebar_position: 2
title: Flag usage
description: WorldGuard ExtraFlags Plus command examples and flag categories
---

# Flag usage examples

**Plugin release:** 4.4.2

All flags use standard WorldGuard syntax:

```bash
/rg flag <region> <flag> <value>
/rg flag <region> <flag> clear
```

## Item blocking

### `disable-completely`

Blocks **all usage** of listed items: `MACE`, `FIREWORK_ROCKET`, `WIND_CHARGE`, `TOTEM_OF_UNDYING`, `TRIDENT`, `SPEAR` (all vanilla spear tiers), or individual spear materials.

:::note `permit-completely` replaced
Use **`disable-completely`** instead of the old `permit-completely` flag.
:::

Spear **Lunge** (packet **STAB**, including **Lunge** enchant) needs **PacketEvents** or **ProtocolLib** for reliable blocking. Install **PacketEvents** first; **ProtocolLib** is used as a fallback.

```bash
/rg flag spawn disable-completely MACE
/rg flag spawn disable-completely MACE,FIREWORK_ROCKET
/rg flag spawn disable-completely SPEAR
/rg flag spawn disable-completely IRON_SPEAR
/rg flag spawn disable-completely clear
```

### `disable-throw`

Blocks **throwing** only: `EGG`, `SNOWBALL`, `ENDER_PEARL`, `EXPERIENCE_BOTTLE`. Use **`disable-completely`** for tridents and wind charges.

Enable in `config-wgefp.yml` → `all-flags-control.disable-throw` (default: `true`). Customize message **`disable-throw-blocked`** in `messages-wgefp.yml` (`{item}` placeholder).

```bash
/rg flag arena disable-throw EGG,SNOWBALL
/rg flag arena disable-throw ENDER_PEARL
/rg flag arena disable-throw EXPERIENCE_BOTTLE
/rg flag arena disable-throw clear
```

## Entry control

### Level restrictions

Supports raw XP level or PlaceholderAPI placeholders (integer output).

```bash
/rg flag dungeon entry-min-level 20
/rg flag dungeon entry-min-level 40 %battlepass_tier%
/rg flag dungeon entry-max-level 50
```

### Player count

```bash
/rg flag arena player-count-limit 10
```

### Chambered ender pearl *(experimental)*

Mitigates chambered ender pearl bypasses. Behavior may change in future releases.

```bash
/rg flag spawn chambered-enderpearl deny
/rg flag spawn chambered-enderpearl allow
/rg flag spawn chambered-enderpearl clear
```

## Interaction & environment

```bash
/rg flag spawn villager-trade deny
/rg flag arena lightning-damage deny
/rg flag spawn disable-collision true
/rg flag hub hide-players true
```

See [disable-collision](./disable-collision) for collision troubleshooting and TAB integration.

## Block control

```bash
/rg flag spawn allow-block-place STONE,COBBLESTONE,GRASS_BLOCK
/rg flag spawn deny-block-place TNT,LAVA_BUCKET
/rg flag spawn allow-block-break STONE,COBBLESTONE
/rg flag spawn deny-block-break BEDROCK,SPAWNER
```

## Item drops & pickup

Works when WorldGuard allows drops/pickups in the region.

```bash
/rg flag spawn deny-item-drops DIAMOND,EMERALD,NETHERITE_INGOT
/rg flag spawn deny-item-pickup APPLE,REDSTONE,IRON_INGOT
```

## Workbenches & crafting

`permit-workbenches CRAFT` blocks **crafting table (3×3)** only. Use **`inventory-craft`** for **inventory (2×2)** crafting.

```bash
/rg flag spawn permit-workbenches ALL
/rg flag spawn permit-workbenches ALL,ender
/rg flag spawn permit-workbenches craft,anvil,ender
/rg flag spawn permit-workbenches clear
/rg flag spawn inventory-craft deny
```

## Protection & movement

```bash
/rg flag spawn godmode deny
/rg flag spawn fly deny
/rg flag spawn keep-inventory true
/rg flag spawn glide force
```

`godmode deny` and `fly deny` also disable EssentialsX god/fly when EssentialsX is installed.

## Chat formatting

Supports PlaceholderAPI in prefix/suffix.

```bash
/rg flag spawn chat-prefix "&7[%vault_rank%] "
/rg flag spawn chat-suffix " &7[%player_level%]"
```

## Repeating console commands

**Opt-in:** set `all-flags-control.console-command-repeat: true` in `config-wgefp.yml`.

Quote the entire `"<seconds> <command>"` as one string. Interval: **1–60 seconds**. Cooldown persists across region exits — re-entering does **not** reset the timer.

```bash
/rg flag arena console-command-repeat "20 give %player% diamond 1"
/rg flag arena console-command-repeat "5 eco give %player% 10"
/rg flag arena console-command-repeat clear
```

## Teleportation & commands

```bash
/rg flag lobby teleport-on-entry world,0,64,0,0,0
/rg flag lobby console-command-on-entry "eco give %player% 100"
/rg flag lobby command-on-entry "say Welcome, %player%!"
```

## Effects & sounds

```bash
/rg flag spawn blocked-effects BLINDNESS,SLOWNESS
/rg flag spawn give-effects night_vision,strength:1:false
/rg flag spawn play-sounds minecraft:block.note_block.pling
```

`give-effects` accepts `night_vision`, `minecraft:night_vision`, and optional `amplifier:particles` format.

## Flag categories

| Category | Flags |
|----------|-------|
| Location & teleportation | `teleport-on-entry`, `teleport-on-exit`, `join-location`*, `respawn-location` |
| Command execution | `command-on-entry`, `command-on-exit`, `console-command-on-entry`, `console-command-on-exit`, `console-command-repeat` |
| Movement & speed | `walk-speed`, `fly-speed`, `fly`, `glide`, `frostwalker` |
| Protection & survival | `godmode`, `keep-inventory`, `keep-exp`, `item-durability` |
| Chat | `chat-prefix`, `chat-suffix` |
| Effects | `blocked-effects`, `give-effects`, `play-sounds` |
| World interaction | `worldedit`, `nether-portals`, `chunk-unload`, `villager-trade`, `inventory-craft` |
| Block & item control | `allow-block-place`, `deny-block-place`, `allow-block-break`, `deny-block-break`, `deny-item-drops`, `deny-item-pickup`, `disable-completely`, `disable-throw`, `permit-workbenches` |
| Entry control | `entry-min-level`, `entry-max-level`, `player-count-limit` |
| Special | `disable-collision`, `hide-players`*, `lightning-damage`, `chambered-enderpearl`* |

\* `join-location` is not available on Folia. Flags marked * are experimental or require config opt-in.

## Notes

- Use `clear` to remove a flag value
- Some flags require PlaceholderAPI for placeholder-based values
- Toggle individual flags in [configuration](./configuration) → `all-flags-control`
- Full per-flag descriptions: [flags reference](./flags-reference)
