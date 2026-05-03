# Reference-Inspired Prompt Recipes

Use this file when the user wants pages that feel closer to the public benchmark set by widely admired modern sites.

These recipes are not for copying exact layouts or brand assets.

Use them to borrow:

- layout logic
- pacing
- typography attitude
- component restraint
- information hierarchy

Avoid:

- copying logos
- copying trademarked illustrations
- recreating a page section pixel-for-pixel
- lifting branded color systems without adjustment

## 1. Stripe-inspired premium homepage

Reference cues:

- [Stripe](https://stripe.com/)
- use enterprise trust, large narrative type, proof-heavy modular sections

### What to study

- big headline with calm authority
- clean product modularity
- proof blocks with real numbers
- premium but not noisy visual rhythm

### Stitch prompt

```text
Design a premium fintech product homepage for growth-stage SaaS teams.

Reference cues:
- enterprise confidence similar to modern payments infrastructure brands
- large editorial typography
- layered product storytelling
- strong business proof with metrics and logos

Style:
- mood: premium, calm, precise
- color direction: warm white background, deep navy text, restrained violet or indigo accents
- typography: editorial headline with clean sans-serif body
- layout: oversized hero, proof strip, modular feature panels, customer stories, pricing CTA
- component feel: refined cards, thin dividers, subtle shadows, polished data snippets

Constraints:
- avoid generic blue SaaS template blocks
- avoid excessive gradients
- keep the page highly buildable with a component library
```

### Codex / Claude implementation prompt

```text
Use $stitch-ui to build a premium fintech homepage.

Reference cues:
- draw from the calm authority and modular storytelling seen on Stripe
- do not copy brand marks, exact sections, or their exact color palette

Stack: Next.js + Tailwind
Component library: shadcn/ui

Visual brief:
- page type: premium SaaS homepage
- layout: large hero, metrics strip, modular product sections, trust stories, closing CTA
- color direction: warm white, deep navy, restrained indigo accent
- typography mood: editorial but controlled
- component feeling: refined, enterprise-grade, not flashy
- avoid: startup-template blue gradients and crowded cards

Requirements:
1. Preserve a high-end enterprise feel
2. Use reusable sections
3. Add believable metrics and product proof
4. Keep the page elegant on desktop and mobile
5. Do one polish pass focused on spacing and headline rhythm
```

## 2. Linear-inspired dark product surface

Reference cues:

- [Linear](https://linear.app/)
- use sharp contrast, product density, and system clarity

### What to study

- dark UI with disciplined contrast
- strong product framing
- compact information blocks
- crisp operational tone

### Stitch prompt

```text
Design a dark product operations dashboard for a fast-moving software team.

Reference cues:
- the disciplined product density and sharp dark surfaces seen on modern product development tools
- clean navigation
- product-first focus instead of marketing-page composition

Style:
- mood: focused, fast, sharp
- color direction: deep graphite background, soft white text, cold blue-violet highlights
- typography: compact, technical, modern
- layout: nav rail, dashboard hero panel, metrics, recent activity, command actions
- component feel: precise cards, crisp lines, minimal decoration

Constraints:
- avoid consumer-app softness
- avoid playful gradients
- keep everything highly structured
```

### Codex / Claude implementation prompt

```text
Use $stitch-ui to build a dark product dashboard.

Reference cues:
- draw from the density and contrast discipline seen on Linear
- do not copy their exact product UI or brand-specific details

Stack: React + Tailwind
Component library: shadcn/ui

Visual brief:
- page type: product dashboard
- layout: sidebar + primary control surface + metrics and activity panels
- color direction: graphite, off-white, blue-violet accent
- typography mood: sharp and technical
- component feeling: compact, purposeful, system-like
- avoid: homepage-style whitespace and marketing blocks

Requirements:
1. Make the page feel like a working product
2. Keep data panels tight and legible
3. Use consistent spacing, borders, and elevation rules
4. Preserve desktop clarity
5. Do a polish pass on contrast and density
```

## 3. Framer-inspired expressive builder page

Reference cues:

- [Framer](https://www.framer.com/)
- use creative energy, layered presentation, and controlled expressiveness

### What to study

- expressive hero composition
- layered visual depth
- design-tool confidence
- polished creative motion language, even in static form

### Stitch prompt

```text
Design an expressive homepage for a visual website builder aimed at designers.

Reference cues:
- the layered energy and creative confidence of leading website-builder homepages
- strong visual hierarchy
- a design-tool product personality

Style:
- mood: expressive, inventive, polished
- color direction: near-white base, saturated accent gradients, dark anchors for contrast
- typography: bold and contemporary
- layout: expressive hero, layered mockups, feature rhythm, visual case-study strip, CTA
- component feel: floating panels, dynamic grouping, deliberate gradients

Constraints:
- keep the layout buildable
- avoid chaotic neon overload
- maintain design-system consistency
```

### Codex / Claude implementation prompt

```text
Use $stitch-ui to build an expressive builder homepage.

Reference cues:
- draw from the energy and layered composition found on Framer
- do not reproduce their exact hero, product shots, or brand language

Stack: Next.js + Tailwind
Component library: shadcn/ui

Visual brief:
- page type: design-tool homepage
- layout: large hero with layered product preview, staggered content rhythm, strong CTA ending
- color direction: light base with saturated accent gradients
- typography mood: bold, contemporary, design-forward
- component feeling: floating, polished, premium
- avoid: flat corporate SaaS blocks

Requirements:
1. Make the composition feel dynamic
2. Keep gradients restrained and intentional
3. Use reusable sections, not one-off chaos
4. Preserve strong mobile layout decisions
5. Do a polish pass on overlap, spacing, and visual rhythm
```

## 4. Notion-inspired knowledge workspace

Reference cues:

- [Notion](https://www.notion.com/)
- use calm tools-first hierarchy and documentation-friendly structure

### What to study

- text-first clarity
- neutral surfaces
- practical multipane layouts
- tool feeling over marketing feeling

### Stitch prompt

```text
Design a documentation workspace for a product knowledge system.

Reference cues:
- the calm, utility-first organization of modern knowledge tools
- split-pane clarity
- text readability over visual spectacle

Style:
- mood: clear, calm, useful
- color direction: soft neutral background, charcoal text, one restrained blue accent
- typography: highly readable with editorial hierarchy
- layout: left nav, central doc area, right reference panel
- component feel: practical cards, low-noise dividers, compact controls

Constraints:
- avoid marketing hero language
- avoid excessive decoration
- keep the interface credible as a working tool
```

### Codex / Claude implementation prompt

```text
Use $stitch-ui to build a docs workspace.

Reference cues:
- draw from the calm structure and readability of Notion
- do not mimic exact blocks, icons, or branding

Stack: React + Tailwind
Component library: shadcn/ui

Visual brief:
- page type: knowledge workspace
- layout: left nav, primary article panel, right reference rail
- color direction: neutral background, charcoal text, restrained blue accent
- typography mood: readable, editorial, quiet
- component feeling: practical, low-noise, workspace-oriented
- avoid: hero-driven landing-page composition

Requirements:
1. Make the page feel usable, not promotional
2. Preserve long-form readability
3. Use split-pane hierarchy clearly
4. Keep components simple and consistent
5. Do a polish pass on text rhythm and pane balance
```

## 5. Award-site experimental microsite

Reference cues:

- [Awwwards winning websites](https://www.awwwards.com/websites/)
- use surprise and composition variety without losing buildability

### What to study

- stronger art direction
- less obvious grid usage
- striking contrast or editorial scale
- scene-specific composition choices

### Stitch prompt

```text
Design a campaign microsite for a new AI product launch.

Reference cues:
- the art direction confidence seen in award-winning websites
- surprising but coherent composition
- editorial scale and dramatic rhythm

Style:
- mood: cinematic, modern, deliberate
- color direction: high-contrast darks with one strong luminous accent
- typography: oversized and graphic
- layout: asymmetrical hero, dramatic transitions, statement panels, story beats
- component feel: bold surfaces, large spacing jumps, immersive framing

Constraints:
- keep the design logically buildable in frontend code
- avoid random experimental noise
- keep one clear visual concept through the whole page
```

### Codex / Claude implementation prompt

```text
Use $stitch-ui to build an experimental campaign microsite.

Reference cues:
- draw from the composition confidence of Awwwards-recognized sites
- do not imitate a specific site or copy artwork

Stack: Next.js + Tailwind
Component library: custom sections with shadcn/ui where appropriate

Visual brief:
- page type: launch microsite
- layout: asymmetrical hero, dramatic feature rhythm, cinematic CTA ending
- color direction: dark base with one luminous accent
- typography mood: oversized, graphic, bold
- component feeling: immersive but controlled
- avoid: generic startup page sections repeated top to bottom

Requirements:
1. Make the page feel like a campaign
2. Keep one strong visual thesis across sections
3. Use hierarchy and composition, not random effects
4. Preserve enough structure to implement cleanly
5. Do a polish pass on pacing and section transitions
```
