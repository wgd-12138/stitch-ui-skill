# stitch-ui

English | [简体中文](README.zh-CN.md)

[![GitHub stars](https://img.shields.io/github/stars/wgd-12138/stitch-ui-skill?style=flat-square)](https://github.com/wgd-12138/stitch-ui-skill/stargazers)
[![GitHub license](https://img.shields.io/github/license/wgd-12138/stitch-ui-skill?style=flat-square)](https://github.com/wgd-12138/stitch-ui-skill/blob/main/LICENSE)
[![Skill](https://img.shields.io/badge/skill-Claude%20%26%20Codex-ff7a45?style=flat-square)](https://github.com/wgd-12138/stitch-ui-skill)
[![Portable](https://img.shields.io/badge/install-copy%20folder-blue?style=flat-square)](https://github.com/wgd-12138/stitch-ui-skill)

An AI skill for Claude and Codex that turns Google Stitch ideas, screenshots, or exported markup into frontend pages that feel intentional instead of generic.

## What makes this different

Most AI-generated pages fail in the same way:

- one repeated SaaS template
- weak typography
- crowded spacing
- decorative effects without a system
- exported markup that is hard to maintain

`stitch-ui` fixes that by forcing the model to decide the visual system first:

1. extract a compact visual brief
2. choose the component-library strategy
3. rebuild the page in reusable sections
4. run a visual polish pass before stopping

That extra reasoning step is what gives the output more range.

## What's new in the showcase

- Scene-first homepage instead of a flat image wall
- Five distinct examples with different layout logic
- Mobile, dashboard, marketing, pricing, and docs workspace coverage
- English and Chinese landing pages
- Reference-inspired prompt recipes based on admired public design benchmarks

## Scene system at a glance

| Scene | Layout archetype | Device emphasis | Visual direction | What it proves |
|---|---|---|---|---|
| Warm editorial landing page | Hero-first marketing layout | Desktop + mobile | warm, spacious, premium | strong homepage storytelling |
| Dark analytics dashboard | Dense control surface | Desktop | high-contrast, data-first | dashboards do not need landing-page structure |
| Playful creator app | stacked app feed | Mobile-first | bright, soft, energetic | consumer mobile rhythm |
| Enterprise pricing page | comparison grid | Desktop | quiet, structured, B2B | calm decision-page design |
| Docs workspace | three-pane knowledge tool | Desktop | text-first, editorial, practical | research and documentation UIs |

## Showcase by scene

### 1. Warm editorial landing page

Best for product homepages and marketing sites.

- large type
- wide whitespace
- hero-led composition
- quiet warm palette

![Warm editorial landing page](examples/desktop-preview.png)

### 2. Dark analytics dashboard

Best for operations tools and command-center UIs.

- tighter density
- data-first card system
- contrast-led navigation
- high-signal information layout

![Dark analytics dashboard](examples/dark-dashboard.png)

### 3. Playful creator app

Best for mobile-first consumer products.

- app-like stacking
- brighter gradients
- softer geometry
- higher energy tone

![Playful creator app](examples/playful-creator-app.png)

### 4. Enterprise pricing page

Best for B2B decision pages.

- cleaner comparison structure
- quieter accent system
- trust-first tone
- lower visual noise

![Enterprise pricing page](examples/enterprise-pricing.png)

### 5. Docs workspace

Best for documentation, knowledge bases, and research tools.

- split navigation
- text-first content area
- reference side panel
- workspace-style composition

![Docs workspace](examples/docs-workspace.png)

### Mobile editorial view

The same warm editorial direction also works on small screens.

![Mobile preview](examples/mobile-preview.png)

## Reference-informed prompt recipes

If you want the examples to feel closer to widely admired modern product pages, study these reference families:

| Reference family | What to borrow | Recipe |
|---|---|---|
| Stripe-style premium homepage | enterprise trust, large narrative type, modular proof sections | [Open recipe](stitch-ui/references/reference-inspired-prompts.md#1-stripe-inspired-premium-homepage) |
| Linear-style dark product surface | sharp contrast, product density, data-first composition | [Open recipe](stitch-ui/references/reference-inspired-prompts.md#2-linear-inspired-dark-product-surface) |
| Framer-style expressive builder page | layered composition, creative energy, dynamic hero structure | [Open recipe](stitch-ui/references/reference-inspired-prompts.md#3-framer-inspired-expressive-builder-page) |
| Notion-style knowledge workspace | calm hierarchy, text-first usability, split-pane logic | [Open recipe](stitch-ui/references/reference-inspired-prompts.md#4-notion-inspired-knowledge-workspace) |
| Award-site experimental microsite | stronger art direction, asymmetry, composition confidence | [Open recipe](stitch-ui/references/reference-inspired-prompts.md#5-award-site-experimental-microsite) |

These recipes include:

- what to study
- a Stitch prompt
- a Codex / Claude implementation prompt
- what to avoid so you do not drift into copycat work

## What you get

| Item | What it does |
|---|---|
| `stitch-ui/SKILL.md` | Main workflow and quality rules |
| `stitch-ui/references/prompt-templates.md` | Ready-to-paste prompt templates |
| `stitch-ui/agents/openai.yaml` | UI metadata for compatible skill surfaces |
| `examples/` | Scene-based screenshots with different layout types |

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
- [stitch-ui/references/reference-inspired-prompts.md](stitch-ui/references/reference-inspired-prompts.md)

Included:

- Stitch prompt template
- screenshot-to-code template
- exported-code refactor template
- quick visual brief template
- reference-informed prompt recipes for premium homepage, dashboard, builder, docs, and microsite scenes

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
