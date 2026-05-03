# stitch-ui

[![GitHub stars](https://img.shields.io/github/stars/wgd-12138/stitch-ui-skill?style=flat-square)](https://github.com/wgd-12138/stitch-ui-skill/stargazers)
[![GitHub license](https://img.shields.io/github/license/wgd-12138/stitch-ui-skill?style=flat-square)](https://github.com/wgd-12138/stitch-ui-skill/blob/main/LICENSE)
[![Skill](https://img.shields.io/badge/skill-Claude%20%26%20Codex-ff7a45?style=flat-square)](https://github.com/wgd-12138/stitch-ui-skill)

Turn Google Stitch ideas, screenshots, or exported markup into frontend pages that feel polished instead of generic.

`stitch-ui` is a portable skill for Claude and Codex. Its job is simple:

- extract a compact visual brief first
- rebuild the page with a real component library
- force one more visual polish pass before stopping

That extra structure is what helps the result feel less like a default AI template.

## Why people may like it

Most AI-generated frontend pages can run, but they often share the same problems:

- too much generic SaaS styling
- weak typography
- crowded spacing
- random gradients and effects
- exported markup that is hard to maintain

`stitch-ui` pushes the model to lock in:

- mood
- typography direction
- spacing rhythm
- color system
- component character
- what to avoid

before it starts writing code.

## What you get

| Item | What it does |
|---|---|
| `stitch-ui/SKILL.md` | Main workflow and quality rules |
| `stitch-ui/references/prompt-templates.md` | Ready-to-paste prompt templates |
| Preview screenshots | Show the default visual direction |
| Portable folder layout | Easy to drop into Claude or Codex |

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

## 中文说明

这个 skill 适合两种情况：

| 场景 | 用法 |
|---|---|
| 只有产品想法 | 先让 Claude 或 Codex 生成 Google Stitch 提示词，再生成落地页面提示词 |
| 已经有 Stitch 图稿 | 直接按截图或结构重建成真实前端页面 |

它的重点不是让模型“自由发挥审美”，而是先把审美规则收紧，再让代码去服从这些规则。

## License

MIT
