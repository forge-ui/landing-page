---
name: business-homepage-builder
description: Build, adapt, or assemble business/product official websites and landing pages from product briefs, existing page/component libraries, Figma exports, or reference sites. Use when the user provides a new business/product description and wants Codex to analyze positioning, choose sections, reuse available assets/components, implement a homepage/demo page, and verify it in a browser.
---

# Business Homepage Builder

## Core Rule

Build from the user's product/business reality and the local project's available components/assets. Do not invent a generic marketing page when source code, Figma exports, existing demo pages, screenshots, or a reference implementation exists.

After any frontend visual change, open the actual page in the browser and inspect it before reporting completion.

## Workflow

1. **Understand the brief**
   - Extract product category, target users, core value proposition, primary conversion action, trust signals, and required pages/sections.
   - If the brief is incomplete, make conservative assumptions and continue; ask only when a missing answer blocks implementation.
   - Preserve the user's business terms unless they are clearly placeholder copy.

2. **Inventory existing materials**
   - Inspect the current project first: routes, reusable components, page demos, generated Figma registry, local assets, fonts, and CSS conventions.
   - If the user references another local project or prior implementation, read that implementation and port its structure/assets instead of re-designing from scratch.
   - If Figma URLs or exports are available, use them as source-of-truth for layout, spacing, and asset selection.

3. **Plan the page**
   - Define the section order before editing: navigation, hero, trust/logo strip, product capability blocks, proof, pricing/FAQ, CTA, footer.
   - Prefer sections already present in the project or Figma export. Adapt copy and data; avoid new abstractions unless they remove real duplication.
   - For an existing reference homepage, preserve its layout grammar: header type, hero alignment, section widths, CTA treatment, and footer structure.

4. **Implement pragmatically**
   - Use the host project's existing framework and styling approach.
   - Reuse real assets. Do not use screenshots as icons or fake blurred placeholders when SVG/vector/local assets are available.
   - If key visuals are missing, use GPT Image 2/image generation to create high-fidelity product-relevant bitmap assets. Generate only concrete assets the page needs, then save and wire them as local files. Avoid vague decorative blobs, generic stock-like scenes, or low-resolution screenshots.
   - Keep page routes explicit and easy to open, e.g. `#product-demo` or an existing router path.
   - Do not modify unrelated base URL or routing behavior unless the user explicitly asks.

5. **Add restrained motion when useful**
   - Use motion to improve hierarchy and polish, not to show off.
   - Prefer calm, expensive-feeling motion:
     - hero copy/image fade-up on first render;
     - section reveal with `whileInView`/in-view triggers;
     - subtle stagger for logo strips, feature cards, and testimonials;
     - light scroll-linked progress or very small parallax on product visuals;
     - FAQ/menu open-close with opacity/height/layout transitions;
     - button hover/tap micro-interactions under 1.04 scale.
   - Avoid drag demos, spinning objects, cursor toys, aggressive parallax, marquee walls, typewriter/scramble text, or repeated autoplay motion unless the business explicitly calls for it.
   - Keep transitions short and soft: roughly 0.2s for micro-interactions, 0.45-0.8s for section reveals, low travel distance, opacity + transform only.
   - Respect accessibility: reduced-motion users should get opacity-only or no transform/parallax motion.
   - Keep bundle cost in mind. For Motion for React, prefer `LazyMotion`/`m` and `domAnimation` when the project can support it; do not add Motion just for one trivial CSS transition.

6. **Browser verification is mandatory**
   - Start or reuse the local dev server.
   - Open the target route in the user's Google Chrome when available.
   - Force refresh after code changes.
   - Verify at minimum:
     - correct route and visible page identity;
     - header/menu matches the intended source style;
     - no broken images;
     - no visible placeholder/fallback/generated artwork;
     - no obvious overlap, clipped text, or huge unintended color blocks;
     - animation is subtle, non-janky, and not distracting;
     - primary CTA and navigation targets are present.
   - Capture or inspect at top of page and at least one lower section before final response.

7. **Report**
   - Give the exact URL.
   - State what source/reference was reused.
   - State browser verification result, including broken image/placeholder status.
   - Mention build/typecheck warnings honestly.

## Acceptance Bar

The output should feel like a credible first version of that specific business website, not a generic SaaS template. It should be ready for the next Codex turn to modify by business intent: changing product positioning, adding sections, swapping assets, or reordering modules.
