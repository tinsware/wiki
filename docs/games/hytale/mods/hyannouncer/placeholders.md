---
sidebar_position: 6
title: Placeholders
description: HyAnnouncer message placeholders
---

# Placeholders


Placeholders are replaced with actual values when messages are sent.

### Basic Placeholders

| Placeholder | Description | Example Output |
|-------------|-------------|----------------|
| `%player%` | Player's display name (recipient) | `Steve` |
| `%joiner%` | Joining player's name (for join messages) | `Alex` |
| `%leaver%` | Leaving player's name (for leave messages) | `Alex` |
| `%world%` | Current world name | `default` |
| `%total_players%` | Total players online (all worlds) | `5` |
| `%online%` | Alias for `%total_players%` (shorter) | `5` |
| `%world_online_players%` | Players in current world | `3` |
| `%time_in_world%` | World time (HH:mm format) | `14:30` |
| `%server_name%` | Server name | `My Server` |
| `%max_players%` | Maximum players allowed | `100` |
| `%date%` | Current date (yyyy-MM-dd) | `2026-01-15` |
| `%time%` | Current time (HH:mm:ss) | `14:30:45` |

### Advanced Placeholders

| Placeholder | Description | Example Output |
|-------------|-------------|----------------|
| `%datetime%` | Full date and time (yyyy-MM-dd HH:mm:ss) | `2026-01-15 14:30:45` |
| `%day%` | Day of week name (uppercase) | `MONDAY` |
| `%timezone%` | Timezone ID | `America/New_York` |
| `%server_uptime%` | Server uptime (formatted) | `2d 5h 30m 15s` |
| `%random_int:min:max%` | Random integer between min and max | `%random_int:1:100%` → `42` |
| `%random_choice:a\|b\|c%` | Random choice from options | `%random_choice:Hello\|Hi\|Hey%` → `Hi` |

:::tip
- `%player%` = recipient player (works in welcome messages and join/leave announcements)
- `%joiner%` = the player who joined (only works in join messages)
- `%leaver%` = the player who left (only works in leave messages)
- `%world_online_players%` = players in the current world (not total across all worlds)
- `%online%` is a shorter alias for `%total_players%`
:::

### Advanced Placeholder Examples

#### Random Placeholders

- **`%random_int:min:max%`** - Generates a random integer between `min` and `max` (inclusive)
  - Example: `%random_int:1:100%` → `42`
  - Example: `%random_int:0:10%` → `7`
  - If min > max, they are automatically swapped

- **`%random_choice:option1|option2|option3%`** - Randomly selects one option from pipe-separated choices
  - Example: `%random_choice:Hello|Hi|Hey%` → `Hi`
  - Example: `%random_choice:Good|Bad|Neutral%` → `Good`
  - Use `\|` to include a literal pipe character in an option

#### Time & Date Placeholders

- **`%datetime%`** - Full date and time in `yyyy-MM-dd HH:mm:ss` format
  - Example: `2026-01-15 14:30:45`

- **`%day%`** - Current day of week in uppercase
  - Example: `MONDAY`, `TUESDAY`, `WEDNESDAY`, etc.

- **`%timezone%`** - System timezone ID
  - Example: `America/New_York`, `Europe/London`, `UTC`

- **`%server_uptime%`** - Server uptime formatted as "Xd Xh Xm Xs"
  - Example: `2d 5h 30m 15s`
  - Example: `0d 0h 5m 30s` (for short uptimes)
  - Only shows non-zero components (e.g., `5m 30s` if no days/hours)
