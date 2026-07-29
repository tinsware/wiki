---
sidebar_position: 7
title: Color codes
description: HyAnnouncer color and formatting codes
---

# Color codes


Use `&` symbol for color codes (Minecraft-style).

### Colors

| Code | Color | Code | Color |
|------|-------|------|-------|
| `&0` | Black | `&8` | Dark Gray |
| `&1` | Dark Blue | `&9` | Blue |
| `&2` | Dark Green | `&a` | Green |
| `&3` | Dark Aqua | `&b` | Aqua |
| `&4` | Dark Red | `&c` | Red |
| `&5` | Dark Purple | `&d` | Light Purple |
| `&6` | Gold | `&e` | Yellow |
| `&7` | Gray | `&f` | White |

### Formatting

| Code | Effect |
|------|--------|
| `&l` | **Bold** |
| `&o` | *Italic* |
| `&r` | Reset (removes all formatting) |

:::note
`&k` (obfuscated), `&m` (strikethrough), and `&n` (underline) are not yet supported by Hytale's Message API.
:::

### Hex Colors

Use `&#RRGGBB` or `{#RRGGBB}` format for custom colors:

- `&#FF0000` or `{#FF0000}` - Red
- `&#00FF00` or `{#00FF00}` - Green
- `&#0000FF` or `{#0000FF}` - Blue
- `&#FFD700` or `{#FFD700}` - Gold

**Example:** `&#FFD700Gold Text` or `{#FFD700}Gold Text`

:::tip
Both formats are supported. The `{#RRGGBB}` format is compatible with EasyAnnounce.
:::
