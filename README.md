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

## Showcase by scene

The skill is useful because it can fit very different product surfaces without collapsing into one repeated layout.

### 1. Warm editorial landing page

Best for product homepages and marketing sites. This example uses a calm warm palette, large type, generous whitespace, and a strong hero-first composition.

![Warm editorial landing page](examples/desktop-preview.png)

### 2. Dark analytics dashboard

Best for operations tools and command-center UIs. The layout shifts into a high-contrast control surface with tighter density and data-first cards.

![Dark analytics dashboard](examples/dark-dashboard.png)

### 3. Playful creator app

Best for mobile-first consumer products. This example uses softer shapes, brighter gradients, and a more energetic, app-like rhythm.

![Playful creator app](examples/playful-creator-app.png)

### 4. Enterprise pricing page

Best for B2B decision pages. It becomes quieter, more structured, and more procurement-friendly, with less visual noise.

![Enterprise pricing page](examples/enterprise-pricing.png)

### 5. Docs workspace

Best for documentation, knowledge bases, and research tools. This one is text-first, split-pane, and much more editorial than the others.

![Docs workspace](examples/docs-workspace.png)

### Mobile editorial view

The same warm editorial direction also works on small screens.

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
- knowledge/workspace UIs
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
