# Forge Landing Page Kit

Figma-first landing page kit for assembling polished product websites with Codex.

This repository turns the Majin UI Figma export into a traceable React project: finished pages, reusable section variants, local assets, and a Codex skill that can pick components by ID and adapt them for a new business without visually rewriting the design from scratch.

## What You Get

- 5 finished page exports: home, alternate home, pricing, contact, and article.
- 55 section variants grouped by category in `/#kit`.
- Stable component IDs such as `P001` and `S024` for prompt-based assembly.
- Figma-exported JSX plus preserved `cssNotes` metadata for text/style traceability.
- Local restoration assets for avatars, logos, artwork, icons, image fills, and missing vector fragments.
- `.agents/skills/landing-page-builder`, a Codex skill for business-specific homepage composition.

## Preview

Run the dev server and open the kit:

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:5173/#kit
```

Useful routes:

| Route | Purpose |
|---|---|
| `/#kit` | Component and page index. Start here. |
| `/#page-1` | Restored primary landing page. |
| `/#page-2` | Alternate landing page. |
| `/#pricing` | Pricing page. |
| `/#contact` | Contact page. |
| `/#article` | Article page. |

## Use With Codex

Use `/#kit` as the visual catalog. Every page and section has a copyable ID:

- `P001`, `P002`, ... for full pages.
- `S001`, `S002`, ... for section variants.

Example prompt:

```text
Use P001 as the base. Replace the hero copy for a data quality platform.
Use S018 for features, S041 for pricing, and S053 for testimonials.
Keep the Majin visual system, but adapt the content and CTAs to the new product.
```

For agent work, load the local skill:

```text
.agents/skills/landing-page-builder
```

The skill tells Codex how to:

- choose from real Figma-derived pages and sections;
- preserve `source`, `startLine`, `notesStartLine`, and `cssNotes`;
- recover missing assets from Figma MCP or local `images/`;
- avoid screenshot-based rewrites;
- validate the rendered page in Chrome.

## Project Structure

```text
.
├── page-1.md / page-2.md       # Figma-exported finished pages
├── pricing.md / contact.md     # Figma-exported standalone pages
├── arcitle.md                  # Figma-exported article page
├── sections/                   # Figma-exported section groups
├── scripts/extract-figma-md.mjs # md -> React registry generator
├── src/generated/figmaRegistry.tsx
├── src/components/figma-ui-replacements.tsx
├── src/components/homepage-restoration.tsx
├── src/App.tsx                 # routes, kit workbench, page rendering
├── src/styles.css              # visual fixes, kit UI, restoration rules
├── images/                     # Vite public assets
├── references/figma-mcp/       # Figma visual baselines
└── .agents/skills/landing-page-builder
```

## Development

```bash
npm run extract:figma
npm run typecheck
npm run build
```

`npm run build` runs `extract:figma` first, so generated components stay in sync with the Figma md exports.

Current note: Vite prints a Node version warning on Node `22.2.0`; the build still completes. Use Node `20.19+` or `22.12+` to remove the warning.

## How The Figma Export Works

The source md files contain repeated groups:

1. a JSX-like code block;
2. followed by `// text` and style notes.

`scripts/extract-figma-md.mjs` treats each code block plus its following notes as one component group and writes the result to `src/generated/figmaRegistry.tsx`.

Do not edit `src/generated/figmaRegistry.tsx` by hand. Change the source md or the extractor, then rerun:

```bash
npm run extract:figma
```

## Restoration Rules

Figma md export is incomplete by itself. It can lose image fills, SVG/vector layers, font loading, and some icon masks. This project restores those gaps through:

- `src/components/figma-ui-replacements.tsx` for structured replacements such as logos, flags, glyphs, UI mockups, and generated artwork;
- `src/components/homepage-restoration.tsx` for page-level overlays that should not replace the generated component tree;
- `images/figma-crops/` and `images/figma-restoration/` for stable local assets;
- `references/figma-mcp/landing-page-1-1909-17785.png` as the page-level visual baseline.

When something looks wrong, use Figma MCP and the original md source first. Do not approximate the design from screenshots.

## Maintainer Checklist

Before committing UI changes:

1. Run `npm run typecheck`.
2. Run `npm run build`.
3. Open the app in Chrome.
4. Check `/#page-1`, `/#page-2`, `/#pricing`, `/#contact`, `/#article`, and `/#kit`.
5. In `/#kit`, switch through every category and confirm there are no broken images, placeholder blocks, or abnormal square icon fragments.

## Prior Art

This README follows the same high-level pattern used by popular UI libraries:

- shadcn/ui: customizable source-first components and documentation-first entry point.
- Magic UI: copy/adapt components for product experiences.
- Headless UI and Chakra UI: clear value proposition, installation, documentation, and contribution paths.

This project is different in one important way: Figma MCP and the md export are the source of truth. The React project is a recoverable, traceable implementation layer for Codex-assisted landing page assembly.
