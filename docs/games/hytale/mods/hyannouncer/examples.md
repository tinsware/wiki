---
sidebar_position: 8
title: Examples
description: HyAnnouncer configuration examples
---

# Examples


### Rotation Mode Example

**Simple rotation mode configuration - one interval, announcements rotate one at a time:**

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
      "Lines": ["&aWelcome to the server!"],
      "Sound": ""
    },
    {
      "Id": "rules",
      "Priority": 0,
      "Enabled": true,
      "Lines": ["&eRemember to follow server rules!"],
      "Sound": ""
    },
    {
      "Id": "tip",
      "Priority": 0,
      "Enabled": true,
      "Lines": ["&bTip: Use &f/help &7to see commands!"],
      "Sound": ""
    }
  ]
}
```

### World-Specific Announcement

```json
{
  "Id": "spawn-rules",
  "Priority": 0,
  "Enabled": true,
  "Worlds": ["spawn", "lobby"],
  "Permission": "",
  "Lines": ["&e&lSpawn Rules: &7No PvP allowed"],
  "Link": "",
  "Sound": ""
}
```

:::note
In ROTATION mode, all announcements use the global `Interval` from the top level. Individual announcements don't have their own intervals.
:::

### Permission-Based Announcement

```json
{
  "Id": "vip-benefits",
  "Priority": 0,
  "Enabled": true,
  "Worlds": [],
  "Permission": "hyannouncer.vip",
  "Lines": ["&6&lVIP: &eYou have access to special areas!"],
  "Link": "",
  "Sound": ""
}
```

### Discord Link

```json
{
  "Id": "discord",
  "Priority": 0,
  "Enabled": true,
  "Worlds": [],
  "Permission": "",
  "Lines": ["&9Join our Discord: &b&n[Click Here]"],
  "Link": "https://discord.gg/your-invite",
  "Sound": ""
}
```

### Multi-Line Block

```json
{
  "Id": "rules",
  "Priority": 0,
  "Enabled": true,
  "Worlds": [],
  "Permission": "",
  "Lines": [
    "----",
    "&e&lServer Rules",
    "&7Be respectful",
    "&7No cheating",
    "----"
  ],
  "Link": "",
  "Sound": ""
}
```

### Priority-Based Ordering

When `RandomOrder` is `false`, announcements are sorted by priority (higher priority first):

```json
{
  "Id": "important",
  "Priority": 10,
  "Enabled": true,
  "Worlds": [],
  "Permission": "",
  "Lines": ["&c&lIMPORTANT: Server maintenance in 10 minutes!"],
  "Link": "",
  "Sound": ""
},
{
  "Id": "regular",
  "Priority": 0,
  "Enabled": true,
  "Worlds": [],
  "Permission": "",
  "Lines": ["Regular announcement"],
  "Link": "",
  "Sound": ""
}
```

### Title Announcement with Subtitle

```json
{
  "Id": "event",
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
  "Animate": false,
  "Sound": "SFX_Rope_Break"
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
