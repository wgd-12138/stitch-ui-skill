# stitch-ui

English | [简体中文](README.zh-CN.md)

`stitch-ui` is a portable distribution of the `stitch-ui` skill for Claude and Codex.

It helps people turn Google Stitch ideas, screenshots, and exports into frontend pages that feel polished instead of generic.

## What this repository ships

| Package | Purpose | Path |
|---|---|---|
| Claude skill | Install directly into `~/.claude/skills/` | `plugins/stitch-ui/skills/stitch-ui` |
| Codex plugin | Install into a local Codex plugin library | `plugins/stitch-ui` |
| Repo marketplace entry | Lets Codex discover the plugin from this repo | `.agents/plugins/marketplace.json` |

## Quick install

### Claude

```bash
python scripts/install.py claude
```

This copies the skill to:

```text
~/.claude/skills/stitch-ui
```

### Codex

```bash
python scripts/install.py codex
```

This does two things:

1. copies the plugin to `~/plugins/stitch-ui`
2. creates or updates `~/.agents/plugins/marketplace.json`

### Install both

```bash
python scripts/install.py all
```

## Why the packaging is split

Claude and Codex do not use the exact same distribution shape.

| Platform | Recommended format |
|---|---|
| Claude | Skill folder under `~/.claude/skills/` |
| Codex | Plugin folder plus marketplace entry |

This repository includes both forms so users can install from one source.

## Codex plugin package

The Codex-ready package lives here:

```text
plugins/stitch-ui
```

Inside it:

- `.codex-plugin/plugin.json`
- `skills/stitch-ui/`
- `assets/`

If you want to use this repository as a repo-local plugin source, the plugin is already registered in:

```text
.agents/plugins/marketplace.json
```

## Claude package

Claude does not currently use the same Codex plugin marketplace shape here.

For Claude, the installable unit is the skill folder:

```text
plugins/stitch-ui/skills/stitch-ui
```

The install script copies that folder into the user's global Claude skills directory.

## Direct install details

### Codex local install layout

After running:

```bash
python scripts/install.py codex
```

the resulting local layout is:

```text
~/plugins/stitch-ui
~/.agents/plugins/marketplace.json
```

### Claude local install layout

After running:

```bash
python scripts/install.py claude
```

the resulting local layout is:

```text
~/.claude/skills/stitch-ui
```

## What the skill does

The bundled skill teaches a repeatable frontend flow:

1. extract a compact visual brief
2. choose the component-library strategy
3. rebuild the page in reusable sections
4. run a visual polish pass before stopping

It also includes:

- prompt templates
- reference-inspired prompt recipes
- examples of how to borrow from admired public design without blindly copying it

## For maintainers

If you update the skill source in another workspace, copy the latest contents into:

```text
plugins/stitch-ui/skills/stitch-ui
```

before publishing a new version of this repository.

## License

MIT
