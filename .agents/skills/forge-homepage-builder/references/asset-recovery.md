# Asset Recovery

The original md export contained many `https://placehold.co/{width}x{height}` URLs and `#D9D9D9` image-fill placeholders. Those are not real Figma assets. The extractor performs a conservative recovery pass against local `images/` assets, scoped Figma MCP crops, and structured DOM/CSS artwork. The generated registry currently has zero `placehold.co` URLs and zero raw `#D9D9D9` backgrounds.

## Implemented Recovery

`scripts/extract-figma-md.mjs` maps known placeholder dimensions to local public assets before generating `src/generated/figmaRegistry.tsx`.

Current recovery includes:

- local avatars, blog images, map/texture assets from `images/`
- Figma MCP crops in `images/figma-crops/landing-page-1/`
- Figma MCP crops in `images/figma-crops/contact-4/`
- Figma MCP crops in `images/figma-crops/bento-3/`
- Figma MCP section crops in `images/figma-crops/blog-*`, `cta-*`, `contact-1`, `content-*`, `header-*`, `navigation-menu-2`, and `pricing-1`
- structured UI artwork via `FigmaGeneratedArtwork` for large `#D9D9D9` image-fill placeholders
- hidden vector artifacts for tiny icon backing boxes, tiny black outline fragments, and white outline vector fragments
- page restoration overlays in `images/figma-restoration/page-1/`
- contact map restoration in `images/figma-restoration/contact/`
- local Satoshi and Onest fonts in `images/fonts/`

Latest Chrome route check, using the user's Chrome extension on 2026-06-17:

| Route | Source | Placeholder Count | Broken Image Count |
|---|---|---:|---:|
| `/` | `page-1.md` | 0 | 0 |
| `/#page-2` | `page-2.md` | 0 | 0 |
| `/#pricing` | `pricing.md` | 0 | 0 |
| `/#contact` | `contact.md` | 0 | 0 |
| `/#article` | `arcitle.md` | 0 | 0 |
| `/#kit` | `sections/*.md` | 0 | 0 |

Latest Chrome `#kit` section family check:

| Family | Variants | Placeholder Count | Broken Image Count | UI Mockup Crop Count | Visible Gray Blocks |
|---|---:|---:|---:|---:|---:|
| Bento | 4 | 0 | 0 | 0 | 0 |
| Blog | 4 | 0 | 0 | 0 | 0 |
| Call To Action | 4 | 0 | 0 | 0 | 0 |
| Contact | 4 | 0 | 0 | 0 | 0 |
| Content | 6 | 0 | 0 | 0 | 0 |
| Faqs | 3 | 0 | 0 | 0 | 0 |
| Feature | 4 | 0 | 0 | 0 | 0 |
| Footer | 3 | 0 | 0 | 0 | 0 |
| Header | 4 | 0 | 0 | 0 | 0 |
| Logo | 4 | 0 | 0 | 0 | 0 |
| Navigation Menu | 4 | 0 | 0 | 0 | 0 |
| Pricing | 3 | 0 | 0 | 0 | 0 |
| Team | 3 | 0 | 0 | 0 | 0 |
| Testimonial | 5 | 0 | 0 | 0 | 0 |

## Scoped Figma Crops

Some placeholder dimensions repeat across unrelated sections. Do not add these to the global dimension fallback unless they are truly interchangeable.

Use `scopedPlaceholderAssets` in `scripts/extract-figma-md.mjs` for source-specific mappings:

- `page-1.md#1`: Landing Page 1 hero/content/CTA/blog crops from `1909:17785`.
- `contact.md#1`: Contact 4 map texture crop from `1926:10575`.
- `sections/bento.md#2`: Bento 3 card crops from `1818:9643`.
- `sections/blog.md#1`, `#2`, `#3`: Blog 1/2/3 card crops from `1818:10005`, `1818:10004`, and `1818:10002`.
- `sections/call to action.md#1`, `#3`, `#4`: CTA crops from `1818:10196`, `1818:10195`, and `1818:10193`.
- `sections/contact.md#1`: Contact 1 map, cloud, and noise assets from `1818:10263`.
- `sections/content.md#1`, `#2`, `#3`: Content visual/card crops from `1849:5547`, `1849:5546`, and `1849:5545`.
- `sections/header.md#1`, `#2`, `#3`: Header visual crops from `1818:9307`, `1818:9305`, and `1818:9306`.
- `sections/navigation menu.md#2`: Navigation Menu 2 image crops from `48:3584`.
- `sections/pricing.md#1`: Pricing overlay crop from `1877:12564`.

`restoreFigmaCropOpacity()` removes stale `opacity: 0.50` from full Figma crops. Keep this behavior for true image crops, because the md placeholder opacity belonged to the missing source layer, not the restored flattened visual.

## Structured Artwork

Do not use screenshot crops to cover UI mockups such as `Project Lazarus`. The md code already contains editable structure for these sections. The extractor now drops known full-card overlay placeholders through `droppedOverlayPlaceholders` and converts large `#D9D9D9` image-fill rectangles into `FigmaGeneratedArtwork`.

This keeps the generated component tree editable while replacing exported gray blocks with DOM/CSS gradients, grid lines, light panels, and glow layers.

## Restoration Layers

The md export drops many SVG/vector paths and leaves solid-color boxes. For page-level visual parity, `src/components/homepage-restoration.tsx` renders Figma-cropped overlay assets:

- `HomepageRestoration` for `page-1.md`
- `ContactRestoration` for `contact.md`

These overlays are pointer-events disabled and sit above the generated md structure. They are recovery patches for lost Figma vectors/assets or md mask/grid export loss, not a replacement for the generated component tree.

## Rules For Future Fixes

1. Do not guess replacements for unresolved dimensions.
2. Use Figma MCP `get_metadata` to identify the exact section node, then `get_screenshot` or `get_design_context` on that node.
3. Prefer Figma MCP asset URLs for true images/vectors; use screenshot crops only for true image/texture assets or page-level restoration, not to cover editable UI mockups.
4. If MCP returns a short-lived asset URL, download it into a stable local `images/` path and add a scoped mapping.
5. Re-run `npm run extract:figma`, then verify in Chrome that every route and every `#kit` section family has `0` `placehold.co` images, `0` broken images, `0` UI mockup crops, `0` visible gray blocks, and `0` tiny outline fragments.
6. Keep root md files unchanged unless the user explicitly wants to change source export text/code.
