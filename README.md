# stitch-ui

`stitch-ui` is a portable skill for Claude and Codex that helps turn Google Stitch ideas, screenshots, or exported markup into polished frontend pages with a real component library.

It is built to reduce the "generic AI template" look by forcing a better flow:

1. extract a visual brief
2. choose a component strategy
3. implement the page in reusable sections
4. run a visual polish pass before stopping

## Why this exists

Most AI-generated frontend pages can work, but they often feel flat, crowded, or interchangeable.

`stitch-ui` improves that by making the model lock in:

- page mood
- typography direction
- spacing rhythm
- color system
- component character
- what to avoid

before it starts writing code.

## Preview

Desktop:

![Desktop preview](examples/desktop-preview.png)

Mobile:

![Mobile preview](examples/mobile-preview.png)

## Install

### Codex

Copy the `stitch-ui` folder into:

```text
~/.codex/skills/
```

On Windows:

```text
C:\Users\<you>\.codex\skills\
```

### Claude

Copy the `stitch-ui` folder into:

```text
~/.claude/skills/
```

On Windows:

```text
C:\Users\<you>\.claude\skills\
```

## Repository structure

```text
stitch-ui/
├── SKILL.md
└── references/
    └── prompt-templates.md
```

## How to use

### In Codex

```text
Use stitch-ui skill.
Build a landing page for an AI hiring assistant.
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

### In Claude

```text
Use stitch-ui skill.
First generate a Google Stitch prompt for an AI finance dashboard.
Then generate a frontend implementation prompt for React + Tailwind + shadcn/ui.
Keep the style editorial, warm, and minimal.
Avoid generic enterprise dashboard aesthetics.
```

## Best use cases

- landing pages
- product marketing pages
- dashboards
- app homepages
- pricing pages
- feature pages
- UI redesign passes

## What the skill does well

- turns vague design intent into a compact visual brief
- preserves visual character instead of drifting into default AI output
- works with screenshots, ideas, or exported code
- encourages reusable component structure instead of noisy generated markup

## Included prompt templates

See:

- [stitch-ui/references/prompt-templates.md](stitch-ui/references/prompt-templates.md)

Templates included:

- Stitch prompt template
- screenshot-to-code template
- exported-code refactor template
- quick visual brief template

## Chinese quick start

把 `stitch-ui` 目录复制到 Claude 或 Codex 的全局 `skills` 目录里，然后直接这样用：

```text
使用 stitch-ui skill，帮我做一个产品首页。
技术栈：React + Tailwind
组件库：shadcn/ui
风格：克制、温暖、留白大
避免：默认科技蓝模板风
先提炼视觉简报，再写代码，最后做一轮视觉复盘。
```

## License

MIT
