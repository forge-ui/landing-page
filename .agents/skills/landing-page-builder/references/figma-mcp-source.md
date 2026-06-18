# Figma MCP Source

This project has two Figma-derived sources:

1. `*.md` and `sections/*.md`: editable JSX/CSS-note export, but lossy for assets.
2. Figma MCP: authoritative source for visual parity, screenshots, variables, and asset URLs.

Use Figma MCP whenever the user asks why the page does not match Figma, asks to restore visual fidelity, or asks to add/replace image/icon assets.

## Primary Figma Frame

- File: `Majin ✦ UI`
- URL: `https://www.figma.com/design/3MG7QpDykk6tJ2V7gMCL6V/Majin-%E2%9C%A6-UI?node-id=1909-17785&m=dev`
- `fileKey`: `3MG7QpDykk6tJ2V7gMCL6V`
- Root frame: `1909:17785`
- Frame name: `Landing Page 1`
- Size: `1440 x 9742`

## Section Node Map

| Node ID | Name | X | Y | W | H |
|---|---:|---:|---:|---:|---:|
| `1909:17786` | Header | 0 | 0 | 1440 | 900 |
| `1909:17787` | Bento | 0 | 900 | 1440 | 900 |
| `1909:17788` | Feature | 0 | 1800 | 1440 | 772 |
| `1909:17789` | Testimonial | 0 | 2572 | 1440 | 592 |
| `1909:17790` | Content | 0 | 3164 | 1440 | 744 |
| `1909:17791` | Content | 0 | 3908 | 1440 | 726 |
| `1909:17792` | Pricing | 0 | 4634 | 1440 | 936 |
| `1909:17793` | Call To Action | 0 | 5570 | 1440 | 672 |
| `1909:17794` | Testimonial | 0 | 6242 | 1440 | 868 |
| `1909:17795` | Blog | 0 | 7110 | 1440 | 900 |
| `1909:17796` | FAQs | 0 | 8010 | 1440 | 904 |
| `1909:17797` | Footer | 0 | 8914 | 1440 | 828 |

## Additional Section Sources

The generated section kit also uses Figma MCP screenshots/context from the broader `Web Sections` page:

| Node ID | Local Group |
|---|---|
| `1818:10005` | Blog 1 |
| `1818:10004` | Blog 2 |
| `1818:10002` | Blog 3 |
| `1818:10196` | Call To Action 1 |
| `1818:10195` | Call To Action 3 |
| `1818:10193` | Call To Action 4 |
| `1818:10263` | Contact 1 |
| `1926:10575` | Contact 4 |
| `1849:5547` | Content 1 |
| `1849:5546` | Content 2 |
| `1849:5545` | Content 3 |
| `1818:9307` | Header 1 |
| `1818:9305` | Header 2 |
| `1818:9306` | Header 3 |
| `48:3584` | Navigation Menu 2 |
| `1877:12564` | Pricing 1 |

## Visual Baseline

The full-resolution Figma MCP screenshot is stored at:

- `references/figma-mcp/landing-page-1-1909-17785.png`

Use it as the visual reference when comparing local Chrome output.

## MCP Findings

- `get_design_context` on root `1909:17785` is too large and returns sparse section metadata. Fetch individual section IDs instead.
- `get_screenshot` on root returns a pixel reference. A `maxDimension` of `12000` preserves the full `1440 x 9742` page.
- `get_variable_defs` returns real tokens and typography, including `Satoshi`, `Onest`, colors, gaps, radii, and shadows.
- `get_design_context` on `1909:17786` returns real asset URLs for logo marks, avatars, noise texture, divider images, and vector icons. This proves the md export lost real assets by replacing them with `placehold.co` and solid divs.
- `get_design_context` on `1818:10263` returns true Contact 1 map assets (`Map Maker`, `Clouds`, and `Noise Texture`), which are stored under `images/figma-crops/contact-1/`.
- Some md exports flatten masked vectors into long runs of div fragments. Tiny backing boxes and outline fragments are hidden by the extractor, while large `#D9D9D9` image-fill placeholders are converted into structured DOM/CSS artwork through `FigmaGeneratedArtwork`.
- In the current environment, `use_figma` is blocked by Figma seat permissions: it reports that MCP edit tools require a Full seat. Do not rely on `use_figma` until the account/seat is upgraded. Use read tools instead: `get_design_context`, `get_screenshot`, `get_variable_defs`, and `get_metadata`.

## Required Fidelity Workflow

1. Parse the target Figma URL into `fileKey` and `nodeId`.
2. Run `get_design_context` on the exact node.
3. If the response is sparse/truncated, use the section node map or `get_metadata`, then call `get_design_context` on smaller section nodes.
4. Run `get_screenshot` for the target node and save/update the baseline if the design changed.
5. Run `get_variable_defs` for tokens and typography.
6. Only then update local components or the extractor.

## Source Priority

Use this order when sources disagree:

1. Figma MCP screenshot and section node context.
2. Figma MCP variable definitions.
3. Original `md` code and following `cssNotes`.
4. `src/generated/figmaRegistry.tsx`, regenerated from `md`.

The `md` export is useful for structure, text, and grouping, but it is not authoritative for visual assets.
