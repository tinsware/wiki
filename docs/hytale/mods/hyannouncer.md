---
sidebar_position: 1
title: HyAnnouncer
description: A powerful announcement system for Hytale servers with configurable intervals, multiple display types, world/permission filtering, and comprehensive placeholder support
---

# HyAnnouncer

**HyAnnouncer** is a powerful and flexible announcement system for Hytale servers with configurable intervals, multiple display types, world/permission filtering, clickable links, and comprehensive placeholder support.

[![CurseForge](https://img.shields.io/badge/CurseForge-HyAnnouncer-orange?style=for-the-badge&logo=curseforge)](https://www.curseforge.com/hytale/mods/hyannouncer)

:::warning Early Access Notice
Hytale is currently in early access, and this mod is also in early access. As the game evolves, things may change, break, or require updates. We're actively maintaining and improving the mod. If you encounter any issues or have suggestions, please reach out to us on [Discord](https://discord.gg/TCJAwsdqum) - we'd love to hear from you!
:::

## Features

- **Scheduled Announcements**: Automatically send announcements at configurable intervals
- **Multiple Display Types**: 
  - **Chat Announcements** - Messages in chat
  - **Title Announcements** - Center-screen titles (separate config)
  - **Notification Announcements** - Popup notifications (separate config)
- **Welcome Messages**: Customizable messages when players join (supports CHAT, TITLE, or BOTH) with clickable links
- **Join/Leave Messages**: Broadcast customized messages when players join or leave (supports CHAT, TITLE, or BOTH)
- **Join Scope Options**: Private messages (PLAYER) or server-wide broadcasts (SERVER)
- **Disable Default Join/Leave Messages**: Automatically disable default server join/leave messages
- **Clickable Links**: Add clickable URLs to announcements (Discord, websites, etc.)
- **World & Permission Filtering**: Target specific worlds or player permissions
- **Placeholders**: Dynamic placeholders for player names, world info, server stats, dates, and more
- **Color Codes**: Full Minecraft-style color code support (`&` and `§` symbols)
- **Hex Colors**: Support for `&#RRGGBB` and `{#RRGGBB}` formats
- **Multi-Color Messages**: Properly handles multiple colors in a single message
- **Prefix Support**: Global prefix for all announcements, with per-announcement override
- **Multi-Line Messages**: Each array element in `Lines` is a separate line
- **Priority System**: Order announcements by priority when not using random order
- **Require Players**: Option to only send announcements when players are online
- **Random or Sequential**: Choose announcement order
- **Debug Mode**: Detailed logging for troubleshooting
- **Manual Broadcast**: Trigger specific announcements on-demand with `/ha broadcast <id>`
- **GUI System**: Interactive web-based GUI for managing announcements (`/ha gui`)

## Installation

1. Download the latest version from [CurseForge](https://www.curseforge.com/hytale/mods/hyannouncer)
2. Place the JAR file in your server's `mods` folder
3. Start/restart your server
4. Configuration files will be created in `HyAnnouncer_tins/` directory
5. Edit config files and use `/ha reload` to apply changes

## Quick Start

The mod creates 6 configuration files:

- `config.json` - Debug settings
- `chat-announcements.json` - Scheduled chat announcements
- `title-announcements.json` - Scheduled center-screen title announcements
- `notify-announcements.json` - Scheduled notification popup announcements
- `welcome-message.json` - Welcome messages for joining players
- `join-leave-announcements.json` - Join/leave broadcasts

## GUI System

HyAnnouncer includes an interactive web-based GUI for managing announcements. Access it with `/ha gui`.

The GUI provides:
- **Welcome Messages**: Toggle and configure welcome messages
- **Join/Leave Messages**: Configure join and leave announcements
- **Chat Announcements**: View, start/stop, and enable/disable individual announcements
- **Title Announcements**: View, start/stop, and enable/disable individual announcements
- **Notification Announcements**: View, start/stop, and enable/disable individual announcements
- **Send Messages**: Manually send chat, title, or notification messages
- **Wiki**: View commands and placeholders

### GUI Screenshots

![GUI - Main Index](hyannouncer_images/ha_gui1.png)

![GUI - Announcement Management](hyannouncer_images/ha_gui2.png)

![GUI - Announcement Details](hyannouncer_images/ha_gui3.png)

![GUI - Settings](hyannouncer_images/ha_gui4.png)

## Commands

All commands require OP permissions:

| Command | Description |
|---------|-------------|
| `/ha` or `/hyannouncer` or `/announce` | Main command (shows help) |
| `/ha info` | Show mod information, version, and Discord link |
| `/ha reload` | Reload all configuration files and restart announcements with new settings (no server restart required) |
| `/ha test` | Test all announcements immediately |
| `/ha broadcast <id>` or `/ha bc <id>` | Manually trigger a specific announcement |
| `/ha list` or `/ha ls` or `/ha status` | List all available announcements with details |
| `/ha gui` | Open the interactive GUI for managing announcements |

### Command Examples

#### Main Command Help

![Main Command Help](hyannouncer_images/ha.png)

#### Info Command

**Command:** `/ha info`

Displays mod information including version, active announcements count, and Discord link.

![Info Command](hyannouncer_images/ha_info.png)

#### List Command

**Command:** `/ha list` or `/ha ls` or `/ha status`

Lists all configured announcements with their details.

![List Command - Part 1](hyannouncer_images/ha_list1.png)

![List Command - Part 2](hyannouncer_images/ha_list2.png)

#### Reload Command

**Command:** `/ha reload`

Reloads all configuration files and restarts announcements with new settings.

![Reload Command](hyannouncer_images/ha_reload.png)

#### Test Command

**Command:** `/ha test`

Immediately sends all enabled announcements to all online players.

![Test Command](hyannouncer_images/ha_test.png)

![Test Command - Full Screen](hyannouncer_images/ha_test_(full-screen).png)

#### System Control Commands

**Commands:** `/ha startsys` and `/ha stopsys`

Control announcement systems. When run without arguments, shows the status of all systems.

![System Control Commands](hyannouncer_images/ha_startsys_stopsys_(noarguments).png)

### System Control Commands

| Command | Description |
|---------|-------------|
| `/ha startsys [chat\|title\|notify\|joinleave\|all]` | Start specific announcement systems |
| `/ha stopsys [chat\|title\|notify\|joinleave\|all]` | Stop specific announcement systems |
| `/ha start <id>` | Start a specific announcement by ID |
| `/ha stop <id>` | Stop a specific announcement by ID |

### Manual Send Commands

| Command | Description |
|---------|-------------|
| `/ha send chat <message>` | Send a chat message to all players |
| `/ha send title <message>` | Send a title message to all players |
| `/ha send notification <message>` | Send a notification to all players |
| `/ha sendplayer chat <player> <message>` | Send a chat message to a specific player |
| `/ha sendplayer title <player> <message>` | Send a title message to a specific player |
| `/ha sendplayer notification <player> <message>` | Send a notification to a specific player |

## Configuration

HyAnnouncer uses 6 separate JSON configuration files located in `HyAnnouncer_tins/` directory.

### Main Config

**File:** `config.json`

```json
{
  "Debug": false
}
```

- `Debug` (boolean): Enable detailed logging for troubleshooting. Default: `false`

### Chat Announcements

**File:** `chat-announcements.json`

Scheduled announcements sent automatically at intervals.

```json
{
  "Enabled": true,
  "RandomOrder": true,
  "Prefix": "&6&l[INFO]&r ",
  "RequirePlayers": false,
  "Announcements": [
    {
      "Id": "welcome",
      "Interval": 120,
      "Priority": 0,
      "Enabled": true,
      "Prefix": "",
      "Type": "CHAT",
      "Worlds": [],
      "Permission": "",
      "Lines": [
        "&aThere are &e%total_players% &7players online."
      ],
      "Link": ""
    }
  ]
}
```

**Settings:**
- `Enabled` - Enable/disable all scheduled announcements
- `RandomOrder` - `true` for random order, `false` for sequential
- `Prefix` - Global prefix for all chat announcements (supports color codes, optional)
- `RequirePlayers` - Only send announcements when at least 1 player is online (default: `false`)

**Announcement Entry:**
- `Id` - Unique identifier (required)
- `Interval` - Seconds between announcements (default: 60)
- `Enabled` - Enable/disable this specific announcement (default: `true`)
- `Priority` - Priority/weight for ordering when `RandomOrder` is `false` (higher = first, default: 0)
- `Prefix` - Optional per-announcement prefix override (empty = use global prefix)
- `Type` - `CHAT` (required for chat announcements)
- `Worlds` - Array of world names (empty = all worlds)
- `Permission` - Permission node (empty = all players)
- `Lines` - Array of message lines (each array element is a separate line)
- `Link` - Optional clickable URL (e.g., Discord invite)

### Title Announcements

**File:** `title-announcements.json`

Center-screen title announcements sent automatically at intervals.

```json
{
  "Enabled": true,
  "RandomOrder": true,
  "RequirePlayers": false,
  "DefaultSubtitle": "&7Welcome to the server!",
  "Announcements": [
    {
      "Id": "event",
      "Interval": 300,
      "Priority": 0,
      "Enabled": true,
      "Worlds": [],
      "Permission": "",
      "Lines": [
        "&a&lServer Event!"
      ],
      "Subtitle": "&eJoin us for special activities",
      "ShowSubtitle": true,
      "Animate": false
    }
  ]
}
```

**Settings:**
- `Enabled` - Enable/disable all scheduled title announcements
- `RandomOrder` - `true` for random order, `false` for sequential
- `RequirePlayers` - Only send announcements when at least 1 player is online (default: `false`)
- `DefaultSubtitle` - Default subtitle for all title announcements (optional, supports color codes and placeholders)

**Announcement Entry:**
- `Id` - Unique identifier (required)
- `Interval` - Seconds between announcements (default: 60)
- `Enabled` - Enable/disable this specific announcement (default: `true`)
- `Priority` - Priority/weight for ordering when `RandomOrder` is `false` (higher = first, default: 0)
- `Worlds` - Array of world names (empty = all worlds)
- `Permission` - Permission node (empty = all players)
- `Lines` - Array of message lines (first line = primary title)
- `Subtitle` - Optional per-announcement subtitle override (empty = use `DefaultSubtitle`, not set = use second line from `Lines` if available)
- `ShowSubtitle` - Whether to show subtitle (default: `true`)
- `Animate` - Whether to animate the title (controls major title effect, default: `false`)

**Subtitle Priority:**
1. If `ShowSubtitle` is `false`, no subtitle is shown
2. If `Subtitle` field is set, it is used
3. If `DefaultSubtitle` is set, it is used
4. Otherwise, the second line from `Lines` is used (if available)

### Notification Announcements

**File:** `notify-announcements.json`

Popup notification announcements sent automatically at intervals.

```json
{
  "Enabled": true,
  "RandomOrder": true,
  "RequirePlayers": false,
  "Announcements": [
    {
      "Id": "reminder",
      "Interval": 600,
      "Priority": 0,
      "Enabled": true,
      "Worlds": [],
      "Permission": "",
      "Lines": [
        "&aServer Reminder",
        "&7Don't forget to vote daily!"
      ],
      "Link": "https://example.com/vote",
      "Priority": 0
    }
  ]
}
```

**Settings:**
- `Enabled` - Enable/disable all scheduled notification announcements
- `RandomOrder` - `true` for random order, `false` for sequential
- `RequirePlayers` - Only send announcements when at least 1 player is online (default: `false`)

**Announcement Entry:**
- `Id` - Unique identifier (required)
- `Interval` - Seconds between announcements (default: 60)
- `Enabled` - Enable/disable this specific announcement (default: `true`)
- `Priority` - Priority/weight for ordering when `RandomOrder` is `false` (higher = first, default: 0)
- `Worlds` - Array of world names (empty = all worlds)
- `Permission` - Permission node (empty = all players)
- `Lines` - Array of message lines (first line = header, second line = content)
- `Link` - Optional clickable URL
- `Priority` - Notification priority level (default: 0)

### Welcome Messages

**File:** `welcome-message.json`

Private messages sent to players when they join a world.

```json
{
  "Enabled": true,
  "Worlds": [],
  "Permission": "",
  "Target": "CHAT",
  "Link": "https://hytale.com/",
  "Lines": [
    "&aWelcome &e%player% &ato the server!",
    "&7You are in world: &b%world%"
  ]
}
```

**Settings:**
- `Enabled` - Enable/disable welcome messages
- `Worlds` - Array of world names (empty = all worlds)
- `Permission` - Permission node (empty = all players)
- `Target` - Display type: `CHAT`, `TITLE`, or `BOTH` (default: `CHAT`)
- `Link` - Optional clickable link URL (empty = no link). When set, the entire message becomes clickable
  - Example: `https://discord.gg/your-server`
  - Default: `https://hytale.com/`
- `Lines` - Array of message lines (each array element is a separate line)
  - For TITLE: First line = primary title, second line = subtitle

### Join/Leave Announcements

**File:** `join-leave-announcements.json`

Broadcast messages when players join or leave.

```json
{
  "Enabled": true,
  "JoinEnabled": true,
  "LeaveEnabled": true,
  "JoinTarget": "CHAT",
  "LeaveTarget": "CHAT",
  "JoinScope": "SERVER",
  "JoinMessage": [
    "&a%joiner% &7joined the server! &7(&e%total_players% &7online)"
  ],
  "LeaveMessage": [
    "&c%leaver% &7left the server! &7(&e%total_players% &7online)"
  ]
}
```

**Settings:**
- `Enabled` - Master toggle (when `true`, disables Hytale's default join message)
- `JoinEnabled` - Enable/disable join messages
- `LeaveEnabled` - Enable/disable leave messages
- `JoinTarget` - Display type for join: `CHAT`, `TITLE`, or `BOTH` (default: `CHAT`)
- `LeaveTarget` - Display type for leave: `CHAT`, `TITLE`, or `BOTH` (default: `CHAT`)
- `JoinScope` - `PLAYER` (private to joining player) or `SERVER` (broadcast to all) (default: `SERVER`)
- `JoinMessage` - Array of lines for join broadcasts (each array element is a separate line)
  - For TITLE: First line = primary title, second line = subtitle
  - Use `%joiner%` for the joining player, `%player%` for recipients
- `LeaveMessage` - Array of lines for leave broadcasts (each array element is a separate line)
  - For TITLE: First line = primary title, second line = subtitle
  - Use `%leaver%` for the leaving player, `%player%` for recipients

:::note
When `Enabled` is set to `true`, HyAnnouncer will attempt to disable Hytale's default join/leave messages. However, due to Hytale API limitations, the default leave message may still appear alongside the custom one.
:::

## Placeholders

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

## Color Codes

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

## Examples

### World-Specific Announcement

```json
{
  "Id": "spawn-rules",
  "Interval": 600,
  "Priority": 0,
  "Enabled": true,
  "Prefix": "",
  "Type": "CHAT",
  "Worlds": ["spawn", "lobby"],
  "Permission": "",
  "Lines": ["&e&lSpawn Rules: &7No PvP allowed"],
  "Link": ""
}
```

### Permission-Based Announcement

```json
{
  "Id": "vip-benefits",
  "Interval": 1800,
  "Priority": 0,
  "Enabled": true,
  "Prefix": "",
  "Type": "CHAT",
  "Worlds": [],
  "Permission": "hyannouncer.vip",
  "Lines": ["&6&lVIP: &eYou have access to special areas!"],
  "Link": ""
}
```

### Discord Link

```json
{
  "Id": "discord",
  "Interval": 600,
  "Priority": 0,
  "Enabled": true,
  "Prefix": "",
  "Type": "CHAT",
  "Worlds": [],
  "Permission": "",
  "Lines": ["&9Join our Discord: &b&n[Click Here]"],
  "Link": "https://discord.gg/your-invite"
}
```

### Multi-Line Block

```json
{
  "Id": "rules",
  "Interval": 600,
  "Priority": 0,
  "Enabled": true,
  "Prefix": "",
  "Type": "CHAT",
  "Worlds": [],
  "Permission": "",
  "Lines": [
    "----",
    "&e&lServer Rules",
    "&7Be respectful",
    "&7No cheating",
    "----"
  ],
  "Link": ""
}
```

### Priority-Based Ordering

When `RandomOrder` is `false`, announcements are sorted by priority (higher priority first):

```json
{
  "Id": "important",
  "Interval": 300,
  "Priority": 10,
  "Enabled": true,
  "Prefix": "",
  "Type": "CHAT",
  "Worlds": [],
  "Permission": "",
  "Lines": ["&c&lIMPORTANT: Server maintenance in 10 minutes!"],
  "Link": ""
},
{
  "Id": "regular",
  "Interval": 300,
  "Priority": 0,
  "Enabled": true,
  "Prefix": "",
  "Type": "CHAT",
  "Worlds": [],
  "Permission": "",
  "Lines": ["Regular announcement"],
  "Link": ""
}
```

### Title Announcement with Subtitle

```json
{
  "Id": "event",
  "Interval": 300,
  "Priority": 0,
  "Enabled": true,
  "Worlds": [],
  "Permission": "",
  "Lines": [
    "&a&lServer Event!",
    "&eJoin us for special activities"
  ],
  "Subtitle": "&eJoin us for special activities",
  "ShowSubtitle": true,
  "Animate": false
}
```

### Welcome Message with Clickable Link

```json
{
  "Enabled": true,
  "Worlds": [],
  "Permission": "",
  "Target": "CHAT",
  "Link": "https://discord.gg/your-server",
  "Lines": [
    "&aWelcome &e%player% &ato the server!",
    "&7Click this message to join our Discord!"
  ]
}
```

## Reloading Configuration

After editing config files, use `/ha reload` to apply changes without restarting the server.

The reload command will:
1. Load all configuration files
2. Stop all current announcement tasks
3. Restart announcements with new settings
4. Display a success message

## Support

- **Discord**: [https://discord.gg/TCJAwsdqum](https://discord.gg/TCJAwsdqum)
- **Wiki**: [https://tinsware.github.io/wiki/](https://tinsware.github.io/wiki/)
- **CurseForge**: [https://www.curseforge.com/hytale/mods/hyannouncer](https://www.curseforge.com/hytale/mods/hyannouncer)

## Version

Current version: **1.1.4**

---

**Author:** tins  
**License:** Check the mod's repository for license information
