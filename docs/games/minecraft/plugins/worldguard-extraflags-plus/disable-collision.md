---
sidebar_position: 5
title: disable-collision
description: WorldGuard ExtraFlags Plus disable-collision flag documentation
---

# disable-collision flag

The `disable-collision` flag disables **player-to-player collision** inside a WorldGuard region. Players can walk through each other — useful for spawn areas, hubs, and crowded lobbies.

## Usage

```bash
/rg flag spawn disable-collision true
/rg flag spawn disable-collision false
/rg flag spawn disable-collision clear
```

## How it works

The flag uses **Minecraft's native scoreboard team system** — the only reliable way to control entity-to-entity collision.

### Implementation

1. **Single-player teams** — If a player is alone on their team, the plugin temporarily sets collision to `NEVER`, then restores the original rule on exit.

2. **Multi-member teams** — If the player shares a team with others, a temporary per-player team (`WGC_<hash>`) is created so other members are unaffected. The player is restored to their original team on exit.

3. **No team** — Player is added to a per-player team with collision disabled, then removed on exit.

### TAB integration

When **TAB** is installed, the plugin uses **TAB's API** to set collision rules. TAB integration takes priority over direct team manipulation and prevents TAB from overwriting settings.

Without TAB, the plugin falls back to direct scoreboard team changes.

## Compatibility

| Plugin | Status |
|--------|--------|
| TAB | Fully supported (API integration) |
| Most plugins | Generally compatible |
| CMI, NametagEdit, DeluxeTags, VentureChat, LuckPerms | May conflict — team collision changes |
| Party / guild / PvP plugins | Coordinate team usage |

On startup, the plugin may warn if other team-using plugins are detected. It still functions, but edge-case conflicts are possible.

## Team conflict edge cases

1. **Shared teams** — Only the entering player is moved to a per-player team; teammates stay unchanged.

2. **Other plugins modifying teams** — Stored collision rules are restored on exit, which may overwrite another plugin's changes made while the player was inside the region.

3. **Deleted teams** — If a team is deleted while a player is inside, restoration fails gracefully (player ends with no team).

## Troubleshooting

### Players still collide

1. Verify the flag: `/rg flags <region>` → `disable-collision: true`
2. Confirm the player is inside the region: `/rg info <region>`
3. Check server logs for `[Collision]` or `[Collision Flag]` warnings
4. Reload: `/wgefp reload` or `/wg reload`

### Conflicts with other plugins

1. Identify team-using plugins (TAB, CMI, NametagEdit, party plugins, etc.)
2. Test with other plugins temporarily disabled
3. Re-enable one by one to find the conflict

### Players kicked on entry

1. Check logs for `IllegalStateException` or team-related errors
2. Team names use format `WGC_<hash>` (12 chars, within Minecraft's 16-char limit)
3. Ensure the server scoreboard system is healthy — restart if corrupted

## Technical details

**Per-player team name format:** `WGC_<hash>`

- `WGC_` — 4-character prefix
- `<hash>` — 8-character hex from player UUID `hashCode()`
- **Total:** 12 characters

**Example:** `WGC_a1b2c3d4`

## Related

- [Flag usage](./flag-usage)
- [Flags reference](./flags-reference)
- [Configuration](./configuration)
