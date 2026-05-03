---
name: stitch-ui
description: Turn Google Stitch concepts, screenshots, or exported markup into polished frontend pages with a real component library. Use when the user wants a beautiful landing page, dashboard, marketing site, product page, or app UI and direct model-generated UI looks generic, awkward, or visually flat. Especially useful when working in Codex or Claude with React, Next.js, Vue, Tailwind, shadcn/ui, MUI, Ant Design, or similar component systems.
---

# Google Stitch Frontend

Use Google Stitch as the visual draft source and use the codebase component library as the implementation source.

Do not let the model freehand the entire design when the goal is visual quality. Extract the visual system first, then rebuild it with real components.

## Workflow

1. Classify the input.
2. Extract a compact visual brief.
3. Choose the component-library strategy.
4. Build the page in reusable sections.
5. Run a visual polish pass before stopping.

## Step 1: Classify the input

Choose one path before editing:

- `Screenshot path`: The user has a Stitch screenshot, mockup, or pasted image.
- `Exported code path`: The user has Stitch HTML/CSS or generated frontend code.
- `Idea-only path`: The user only has a product idea and wants prompts that produce a better Stitch draft first.

If the user only has an idea, read [references/prompt-templates.md](references/prompt-templates.md) and generate:

- one Stitch prompt
- one Codex/Claude implementation prompt
- one short visual brief

If the user explicitly wants a page that feels closer to admired public design benchmarks, also read [references/reference-inspired-prompts.md](references/reference-inspired-prompts.md) and select the closest reference family before drafting prompts.

## Step 2: Extract the visual brief

Before writing code, summarize the page in 6 lines or fewer:

- page type
- target user
- layout structure
- color direction
- typography mood
- component feeling

Also identify:

- one primary accent color
- one background style
- one spacing rule
- one card/button style rule
- one thing to avoid

Example:

```text
Page type: AI product landing page
Target user: indie developers
Layout: centered hero, 3-up features, testimonial strip, compact pricing
Color: warm white background, charcoal text, muted orange accent
Typography: editorial, calm, premium
Components: soft cards, rounded buttons, thin borders
Avoid: default blue SaaS look and crowded sections
```

## Step 3: Choose the component-library strategy

Prefer the existing library already used in the repo.

If the repo does not already constrain the choice, use:

- `shadcn/ui + Tailwind` for custom marketing pages and polished modern UIs
- `MUI` for structured enterprise products
- `Ant Design` for admin-heavy internal tools

Rules:

- Keep the visual language from Stitch.
- Do not copy raw exported markup blindly.
- Do not keep giant generated class blobs if the code becomes hard to maintain.
- Convert repeated structures into sections and reusable components.

## Step 4: Build the page

Implement in this order:

1. layout shell
2. hero
3. repeated content sections
4. CTA/footer
5. responsive behavior
6. motion and polish

Required standards:

- Use design tokens or CSS variables for colors, spacing, radius, and shadows.
- Reuse the component library for buttons, cards, inputs, tabs, dialogs, and badges.
- Preserve strong spacing and hierarchy. Empty space is part of the design.
- Prefer 1-2 accent colors. Do not keep adding colors to make the page look "fancy".
- If the design is minimal, stay minimal. Do not add random gradients or glassmorphism.
- If the design is expressive, make the expression deliberate across the whole page.

## Step 5: Visual polish pass

Before stopping, review the result against the Stitch input and fix the obvious misses:

- Is the page too dense?
- Did the typography become too plain?
- Did the accent color drift?
- Did cards/buttons lose their character?
- Did mobile spacing collapse?
- Did the model quietly revert to a generic template?

If the answer to any of these is yes, revise once more before calling the page done.

## Implementation rules

- Start from the repo's existing stack and patterns unless the user asks to change them.
- Keep edits small and readable.
- Use semantic section/component names such as `Hero`, `FeatureGrid`, `Pricing`, `Testimonials`, and `Footer`.
- If Stitch exported code exists, treat it as reference material, not as production-quality architecture.
- When the generated UI feels generic, improve the visual brief instead of piling on random effects.

## Prompting pattern

When you need to drive Codex or Claude from this skill, use this structure:

```text
Recreate this Google Stitch concept in the current project.
Stack: <repo stack>
Component library: <library>

Visual brief:
- <page type>
- <layout>
- <color direction>
- <typography mood>
- <component feeling>
- Avoid: <thing to avoid>

Requirements:
1. Preserve the overall visual character instead of defaulting to a generic template.
2. Implement with reusable components and existing project conventions.
3. Make desktop and mobile both look intentional.
4. Use tokens for color, spacing, radius, and shadow.
5. Do one polish pass after the first implementation.
```

For ready-to-paste prompts, read [references/prompt-templates.md](references/prompt-templates.md).

For higher-end public-reference recipes, also read [references/reference-inspired-prompts.md](references/reference-inspired-prompts.md). Use those as inspiration maps, not copy targets.
