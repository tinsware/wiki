---
sidebar_position: 1
title: Overview
description: HyAnnouncer overview, features, and installation
---

# HyAnnouncer

**HyAnnouncer** is a powerful and flexible announcement system for Hytale servers with configurable intervals, multiple display types, world/permission filtering, clickable links, and comprehensive placeholder support.

[![CurseForge](https://img.shields.io/badge/CurseForge-HyAnnouncer-orange?style=for-the-badge&logo=curseforge)](https://www.curseforge.com/hytale/mods/hyannouncer)

:::warning Early Access Notice
Hytale is currently in early access, and this mod is also in early access. As the game evolves, things may change, break, or require updates. We're actively maintaining and improving the mod. If you encounter any issues or have suggestions, please reach out to us on [Discord](https://discord.gg/TCJAwsdqum) - we'd love to hear from you!
:::

## Features

- **Scheduled Announcements**: Automatically send announcements at configurable intervals
- **Cron-Based Scheduling**: Schedule announcements using cron expressions (e.g., `0 12 * * *` for daily at noon)
- **Simple Mode Scheduling**: Use duration strings (e.g., `10s`, `5m`, `1h`, `2d`) for easy interval-based scheduling
- **Sound System**: Play sounds with announcements (default sounds for title/notification, optional for chat)
- **Advanced Lag Protection**: Smart gap protection prevents announcement bursts during server lag
- **Announcement Modes**: 
  - **ROTATION Mode** - One global interval, rotate through announcements one at a time (recommended)
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
- **Prefix Support**: Global prefix for all announcements
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
4. Configuration files will be created in `tins_HyAnnouncer/` directory
5. Edit config files and use `/ha reload` to apply changes

## Quick Start

The mod creates 7 configuration files:

- `config.json` - Debug settings
- `chat-announcements.json` - Scheduled chat announcements
- `title-announcements.json` - Scheduled center-screen title announcements
- `notify-announcements.json` - Scheduled notification popup announcements
- `welcome-message.json` - Welcome messages for joining players
- `join-leave-announcements.json` - Join/leave broadcasts
- `scheduled-actions.json` - Cron-based and duration-based scheduled actions

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

Current version: **1.1.5**

---

**Author:** tins  
**License:** Check the mod's repository for license information

## Documentation

- [GUI](./gui)
- [Sounds](./sounds)
- [Commands](./commands)
- [Configuration](./configuration)
- [Placeholders](./placeholders)
- [Color codes](./color-codes)
- [Examples](./examples)

