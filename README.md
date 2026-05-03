# stitch-ui

English | [简体中文](README.zh-CN.md)

[![GitHub stars](https://img.shields.io/github/stars/wgd-12138/stitch-ui-skill?style=flat-square)](https://github.com/wgd-12138/stitch-ui-skill/stargazers)
[![GitHub license](https://img.shields.io/github/license/wgd-12138/stitch-ui-skill?style=flat-square)](https://github.com/wgd-12138/stitch-ui-skill/blob/main/LICENSE)
[![Skill](https://img.shields.io/badge/skill-Claude%20%26%20Codex-ff7a45?style=flat-square)](https://github.com/wgd-12138/stitch-ui-skill)

Turn Google Stitch ideas, screenshots, or exported markup into frontend pages that feel polished instead of generic.

`stitch-ui` is a portable skill for Claude and Codex. It helps the model:

1. extract a compact visual brief first
2. pick the right component-library strategy
3. rebuild the page in reusable sections
4. do one more visual polish pass before stopping

That extra structure is what helps the result feel less like a default AI template.

## Why this is useful

Most AI-generated frontend pages can run, but they often share the same problems:

- generic SaaS styling
- weak typography
- crowded spacing
- random gradients and effects
- hard-to-maintain exported markup

`stitch-ui` fixes that by forcing the model to lock in:

- mood
- typography direction
- spacing rhythm
- color system
- component character
- what to avoid

before it starts writing code.

## Showcase

The point of this skill is not one specific aesthetic. It is the ability to keep different aesthetics intentional.

<table>
  <tr>
    <td width="50%">
      <strong>Warm editorial landing page</strong><br>
      Marketing / product homepage<br><br>
      <img src="examples/desktop-preview.png" alt="Warm editorial landing page preview">
    </td>
    <td width="50%">
      <strong>Dark analytics dashboard</strong><br>
      High-contrast operations UI<br><br>
      <img src="examples/dark-dashboard.png" alt="Dark analytics dashboard preview">
    </td>
  </tr>
  <tr>
    <td width="50%">
      <strong>Playful creator app</strong><br>
      Mobile-first consumer product<br><br>
      <img src="examples/playful-creator-app.png" alt="Playful creator app preview">
    </td>
    <td width="50%">
      <strong>Enterprise pricing page</strong><br>
      Quiet B2B decision-making surface<br><br>
      <img src="examples/enterprise-pricing.png" alt="Enterprise pricing page preview">
    </td>
  </tr>
</table>

Mobile example from the editorial landing direction:

![Mobile preview](examples/mobile-preview.png)

## What you get

| Item | What it does |
|---|---|
| `stitch-ui/SKILL.md` | Main workflow and quality rules |
| `stitch-ui/references/prompt-templates.md` | Ready-to-paste prompt templates |
| `stitch-ui/agents/openai.yaml` | UI metadata for compatible skill surfaces |
| `examples/` | Multiple screenshots across different scenes and visual systems |

## Install

### Codex

Copy the `stitch-ui` folder into:

```text
~/.codex/skills/
```

Windows:

```text
C:\Users\<you>\.codex\skills\
```

### Claude

Copy the `stitch-ui` folder into:

```text
~/.claude/skills/
```

Windows:

```text
C:\Users\<you>\.claude\skills\
```

## Repository structure

```text
stitch-ui/
├── agents/
│   └── openai.yaml
├── references/
│   └── prompt-templates.md
└── SKILL.md
```

## Best use cases

- landing pages
- product marketing pages
- dashboards
- app homepages
- pricing pages
- feature pages
- redesign and polish passes

## How to use in Codex

```text
Use $stitch-ui to build a landing page for an AI hiring assistant.
Stack: Next.js + Tailwind
Component library: shadcn/ui

Visual direction:
- calm
- premium
- strong whitespace
- warm background
- avoid default tech-blue SaaS style

Requirements:
1. Extract the visual brief first
2. Implement with reusable components
3. Make desktop and mobile both feel intentional
4. Do one visual polish pass after the first implementation
```

## How to use in Claude

```text
Use $stitch-ui.
First generate a Google Stitch prompt for an AI finance dashboard.
Then generate a frontend implementation prompt for React + Tailwind + shadcn/ui.
Keep the style editorial, warm, and minimal.
Avoid generic enterprise dashboard aesthetics.
```

## Included prompt templates

See:

- [stitch-ui/references/prompt-templates.md](stitch-ui/references/prompt-templates.md)

Included:

- Stitch prompt template
- screenshot-to-code template
- exported-code refactor template
- quick visual brief template

## Why it works

This skill is intentionally strict about the order of operations:

1. classify the input
2. extract the visual brief
3. choose the component-library strategy
4. build the page in sections
5. run a visual polish pass

That means the model is not allowed to jump straight into "just make it pretty somehow."

## Want the Chinese version?

See:

- [README.zh-CN.md](README.zh-CN.md)

## License

MIT
