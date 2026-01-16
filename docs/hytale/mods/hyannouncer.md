---
sidebar_position: 1
title: HyAnnouncer
description: Announcement and broadcast system for Hytale servers
---

# HyAnnouncer

**HyAnnouncer** is a powerful announcement and broadcast system for Hytale servers, allowing server administrators to communicate effectively with players.

[![CurseForge](https://img.shields.io/badge/CurseForge-HyAnnouncer-orange?style=for-the-badge&logo=curseforge)](https://www.curseforge.com/hytale/mods/hyannouncer)

## Features

- 📢 **Automated Announcements** – Schedule periodic server-wide announcements
- 🎨 **Rich Text Formatting** – Support for colors, bold, italic, and custom fonts
- ⏰ **Timed Broadcasts** – Set up announcements at specific intervals
- 🎯 **Targeted Messages** – Send announcements to specific player groups
- 📝 **Custom Templates** – Create reusable announcement templates
- 🔔 **Sound Effects** – Optional sound notifications with announcements

## Installation

1. Download HyAnnouncer from [CurseForge](https://www.curseforge.com/hytale/mods/hyannouncer)
2. Place the mod file in your Hytale server's `mods` folder
3. Restart your server
4. Configure the mod in the config file

## Configuration

```yaml title="config/hyannouncer.yml"
# HyAnnouncer Configuration

# Enable/disable the mod
enabled: true

# Default announcement settings
announcements:
  # Announcement interval (in seconds)
  interval: 300
  
  # Enable random order
  random: false
  
  # Announcement prefix
  prefix: "&6[Server] &r"

# Scheduled announcements
messages:
  - "&aWelcome to our server! Enjoy your stay!"
  - "&eJoin our Discord: discord.gg/example"
  - "&bCheck out /help for available commands!"

# Sound settings
sound:
  enabled: true
  type: "notification"
  volume: 1.0
```

## Commands

| Command | Description | Permission |
|---------|-------------|------------|
| `/announce <message>` | Send an immediate announcement | `hyannouncer.announce` |
| `/announce reload` | Reload configuration | `hyannouncer.admin` |
| `/announce add <message>` | Add a new scheduled message | `hyannouncer.admin` |
| `/announce remove <id>` | Remove a scheduled message | `hyannouncer.admin` |
| `/announce list` | List all scheduled messages | `hyannouncer.admin` |

## Permissions

| Permission | Description | Default |
|------------|-------------|---------|
| `hyannouncer.announce` | Send announcements | op |
| `hyannouncer.admin` | Admin commands | op |
| `hyannouncer.bypass` | Bypass announcement cooldowns | op |

## Placeholders

HyAnnouncer supports the following placeholders:

| Placeholder | Description |
|-------------|-------------|
| `{player}` | Player name |
| `{online}` | Online player count |
| `{max}` | Maximum player slots |
| `{time}` | Current server time |
| `{date}` | Current date |

## Example Usage

### Welcome Message
```yaml
messages:
  - "&6Welcome, {player}! &7There are &a{online}&7/&a{max} &7players online."
```

### Periodic Reminders
```yaml
announcements:
  interval: 600  # Every 10 minutes
  messages:
    - "&eRemember to vote for our server!"
    - "&bNeed help? Ask a staff member!"
```

## Support

- **CurseForge:** [HyAnnouncer Page](https://www.curseforge.com/hytale/mods/hyannouncer)
- **Discord:** [Join our server](https://discord.gg/tins)
- **Issues:** Report bugs on our GitHub
