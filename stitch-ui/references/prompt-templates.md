# Prompt Templates

Use these templates when the user wants a better-looking frontend page through Google Stitch plus Claude/Codex.

For reference-quality recipes inspired by admired public sites, also read [reference-inspired-prompts.md](reference-inspired-prompts.md).

## 1. Stitch prompt template

Use when the user only has an idea and needs Stitch to generate a stronger visual direction first.

```text
Design a <page type> for <target user>.
Goal: <primary business goal>.

Style:
- mood: <3 adjectives>
- color direction: <background / text / accent>
- typography: <editorial / sharp / playful / enterprise / minimal>
- layout: <hero + features + testimonials + pricing + CTA>
- component feel: <soft cards / crisp borders / floating panels / compact tables>

Constraints:
- keep strong spacing and hierarchy
- avoid the default generic SaaS look
- keep the design coherent and realistic to build with a component library
- desktop first, but mobile-friendly
```

## 2. Screenshot-to-code template

Use when the user has a Stitch screenshot or mockup.

```text
Recreate this Stitch screen in the current project.
Use <framework> + <component library>.

First extract a visual brief:
- page type
- layout structure
- color direction
- typography mood
- component feeling
- one thing to avoid

Then implement it with reusable components.

Requirements:
1. Preserve the same overall visual character.
2. Do not default to a generic AI-generated template.
3. Use design tokens or CSS variables for color, spacing, radius, and shadow.
4. Keep the page responsive on desktop and mobile.
5. After the first pass, do one visual polish pass and tighten spacing, type scale, and CTA emphasis.
```

## 3. Exported-code refactor template

Use when the user has Stitch-exported HTML/CSS or generated frontend code.

```text
Refactor this Google Stitch export into production-friendly <framework> code using <component library>.

Requirements:
1. Keep the visual structure and design intent.
2. Replace repetitive raw markup with reusable sections and components.
3. Remove hard-coded style noise where tokens or shared styles are better.
4. Keep the result easy to maintain inside this repo.
5. Finish with one polish pass so it still feels close to the original design.
```

## 4. Quick visual brief template

Use this tiny brief before coding when the page quality is drifting.

```text
Visual brief:
- page type:
- target user:
- layout:
- color direction:
- typography mood:
- component feeling:
- avoid:
```
