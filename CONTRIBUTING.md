# Contributing

Thanks for helping improve `stitch-ui`.

## What to change together

If you change the skill logic, keep these paths aligned:

- `stitch-ui/`
- `plugins/stitch-ui/skills/stitch-ui/`
- `README.md`
- `README.zh-CN.md`

The root skill is the canonical source. The plugin-bundled skill should match it before publishing.

## Before opening a PR

Run:

```bash
node scripts/validate.js
```

Then run at least one install smoke test:

```bash
./install.sh all
```

or on Windows:

```powershell
.\install.ps1 all
```

## Good contributions

- improve prompt quality
- improve install experience
- add better scene examples
- tighten plugin packaging
- improve documentation clarity

## Please avoid

- direct brand copying from public reference sites
- adding examples that only change colors but not layout logic
- changing the plugin package without also checking the root skill
