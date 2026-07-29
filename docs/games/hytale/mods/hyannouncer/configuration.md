---
sidebar_position: 5
title: Configuration
description: HyAnnouncer JSON configuration files
---

# Configuration


HyAnnouncer uses 7 separate JSON configuration files located in `HyAnnouncer_tins/` directory.

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

#### ROTATION Mode

HyAnnouncer uses ROTATION mode for all announcements:
- **One global interval** - All announcements share the same timing
- **One at a time** - Announcements rotate through the list sequentially or randomly
- **Simple configuration** - Only one time entry needed at the top level
- **No overlap** - Announcements never send at the same time
- **Scheduled actions override** - Announcements in `scheduled-actions.json` are excluded from rotation

```json
{
  "Enabled": true,
  "Interval": 60,
  "RandomOrder": true,
  "Prefix": "&6&l[INFO]&r ",
  "RequirePlayers": false,
  "Announcements": [
    {
      "Id": "welcome",
      "Priority": 0,
      "Enabled": true,
      "Worlds": [],
      "Permission": "",
      "Lines": [
        "&aThere are &e%total_players% &7players online."
      ],
      "Link": "",
      "Sound": ""
    }
  ]
}
```

**Settings:**
- `Enabled` - Enable/disable all scheduled announcements
- `Interval` - Global interval in seconds for all announcements (default: 60)
- `RandomOrder` - `true` for random selection, `false` for sequential rotation
- `Prefix` - Global prefix for all chat announcements (supports color codes, optional)
- `RequirePlayers` - Only send announcements when at least 1 player is online (default: `false`)

**Announcement Entry:**
- `Id` - Unique identifier (required)
- `Enabled` - Enable/disable this specific announcement (default: `true`)
- `Priority` - Affects rotation order when RandomOrder=false (higher = first, default: 0)
- `Worlds` - Array of world names (empty = all worlds)
- `Permission` - Permission node (empty = all players)
- `Lines` - Array of message lines (each array element is a separate line)
- `Link` - Optional clickable URL (e.g., Discord invite)
- `Sound` - Optional sound to play with announcement (default: empty for chat)

### Title Announcements

**File:** `title-announcements.json`

Center-screen title announcements sent automatically at intervals.

Uses **ROTATION** mode (same as Chat Announcements).

```json
{
  "Enabled": true,
  "Interval": 60,
  "RandomOrder": true,
  "RequirePlayers": false,
  "DefaultSubtitle": "&7Welcome to the server!",
  "Announcements": [
    {
      "Id": "event",
      "Priority": 0,
      "Enabled": true,
      "Worlds": [],
      "Permission": "",
      "Lines": [
        "&a&lServer Event!"
      ],
      "Subtitle": "&eJoin us for special activities",
      "ShowSubtitle": true,
      "Animate": false,
      "Sound": "SFX_Rope_Break"
    }
  ]
}
```

**Settings:**
- `Enabled` - Enable/disable all scheduled title announcements
- `Interval` - Global interval in seconds for all announcements (default: 60)
- `RandomOrder` - `true` for random selection, `false` for sequential rotation
- `RequirePlayers` - Only send announcements when at least 1 player is online (default: `false`)
- `DefaultSubtitle` - Default subtitle for all title announcements (optional, supports color codes and placeholders)

**Announcement Entry:**
- `Id` - Unique identifier (required)
- `Enabled` - Enable/disable this specific announcement (default: `true`)
- `Priority` - Affects rotation order when RandomOrder=false (higher = first, default: 0)
- `Worlds` - Array of world names (empty = all worlds)
- `Permission` - Permission node (empty = all players)
- `Lines` - Array of message lines (first line = primary title)
- `Subtitle` - Optional per-announcement subtitle override (empty = use `DefaultSubtitle`, not set = use second line from `Lines` if available)
- `ShowSubtitle` - Whether to show subtitle (default: `true`)
- `Animate` - Whether to animate the title (controls major title effect, default: `false`)
- `Sound` - Optional sound to play with announcement (default: `SFX_Rope_Break` for title)

**Subtitle Priority:**
1. If `ShowSubtitle` is `false`, no subtitle is shown
2. If `Subtitle` field is set, it is used
3. If `DefaultSubtitle` is set, it is used
4. Otherwise, the second line from `Lines` is used (if available)

### Notification Announcements

**File:** `notify-announcements.json`

Popup notification announcements sent automatically at intervals.

Uses **ROTATION** mode (same as Chat Announcements).

```json
{
  "Enabled": true,
  "Interval": 60,
  "RandomOrder": true,
  "RequirePlayers": false,
  "Announcements": [
    {
      "Id": "reminder",
      "Priority": 0,
      "Enabled": true,
      "Worlds": [],
      "Permission": "",
      "Lines": [
        "&aServer Reminder",
        "&7Don't forget to vote daily!"
      ],
      "Link": "https://example.com/vote",
      "Sound": "SFX_Rope_Break"
    }
  ]
}
```

**Settings:**
- `Enabled` - Enable/disable all scheduled notification announcements
- `Interval` - Global interval in seconds for all announcements (default: 60)
- `RandomOrder` - `true` for random selection, `false` for sequential rotation
- `RequirePlayers` - Only send announcements when at least 1 player is online (default: `false`)

**Announcement Entry:**
- `Id` - Unique identifier (required)
- `Enabled` - Enable/disable this specific announcement (default: `true`)
- `Priority` - Affects rotation order when RandomOrder=false (higher = first, default: 0)
- `Worlds` - Array of world names (empty = all worlds)
- `Permission` - Permission node (empty = all players)
- `Lines` - Array of message lines (first line = header, second line = content)
- `Link` - Optional clickable URL
- `Sound` - Optional sound to play with announcement (default: `SFX_Rope_Break` for notification)

### Scheduled Actions

**File:** `scheduled-actions.json`

Cron-based and duration-based scheduled actions that trigger announcements at specific times. Announcements listed in scheduled-actions are automatically excluded from regular rotation.

```json
{
  "Enabled": true,
  "UseUtc": false,
  "Actions": [
    {
      "Id": "scheduled_title1",
      "Type": "title",
      "Schedule": "5m",
      "Enabled": true,
      "Sound": "SFX_Rope_Break"
    },
    {
      "Id": "scheduled_daily_title",
      "Type": "title",
      "Schedule": "0 12 * * *",
      "Enabled": true,
      "Sound": "SFX_Rope_Break"
    }
  ]
}
```

**Settings:**
- `Enabled` - Enable/disable all scheduled actions (default: `true`)
- `UseUtc` - Use UTC time instead of server local time (default: `false`)

**Action Entry:**
- `Id` - Announcement ID from chat/title/notification configs (required)
- `Type` - Announcement type: `"chat"`, `"title"`, or `"notification"` (required)
- `Schedule` - Schedule expression:
  - **Cron mode**: 5-field cron expression (e.g., `"0 12 * * *"` for daily at noon)
  - **Simple mode**: Duration string (e.g., `"10s"`, `"5m"`, `"1h"`, `"2d"`)
- `Enabled` - Enable/disable this specific action (default: `true`)
- `Sound` - Optional sound to play (overrides announcement's sound if set)

**Schedule Formats:**

**Cron Expression** (5 fields: minute hour day month weekday):
- `"0 12 * * *"` - Every day at 12:00 (noon)
- `"*/30 * * * *"` - Every 30 minutes
- `"0 0 * * 0"` - Every Sunday at midnight
- `"0 9,17 * * *"` - Every day at 9:00 and 17:00

**Simple Mode** (duration strings):
- `"10s"` - Every 10 seconds
- `"5m"` - Every 5 minutes
- `"1h"` - Every hour
- `"2d"` - Every 2 days

:::tip
When an announcement ID is listed in scheduled-actions and enabled, it will be excluded from regular rotation. The announcement will only trigger at its scheduled times. If the action is disabled in scheduled-actions, the announcement will return to regular rotation.
:::

:::warning
If a scheduled action references an announcement ID that doesn't exist, it will be marked as invalid and won't run. Check the GUI or `/ha info` for warnings about invalid actions.
:::

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
