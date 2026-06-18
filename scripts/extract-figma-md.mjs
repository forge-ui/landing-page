import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const generatedDir = path.join(root, "src/generated");
const outputFile = path.join(generatedDir, "figmaRegistry.tsx");

const pageSources = [
  { file: "page-1.md", title: "Demo Page 1" },
  { file: "page-2.md", title: "Demo Page 2" },
  { file: "pricing.md", title: "Pricing Page" },
  { file: "contact.md", title: "Contact Page" },
  { file: "arcitle.md", title: "Article Page" },
];

const sectionSources = fs
  .readdirSync(path.join(root, "sections"))
  .filter((file) => file.endsWith(".md"))
  .sort((a, b) => a.localeCompare(b, "en"))
  .map((file) => ({
    file: `sections/${file}`,
    title: titleCase(file.replace(/\.md$/, "")),
  }));

const sources = [
  ...pageSources.map((source) => ({ ...source, kind: "page" })),
  ...sectionSources.map((source) => ({ ...source, kind: "section" })),
];

const placeholderAssets = {
  "24x24": [
    "Blog/Avatars/3d_avatar_21.png",
    "Blog/Avatars/3d_avatar_24.png",
    "Avatars/3d_avatar_24-1.png",
    "Avatars/3d_avatar_21-1.png",
    "Avatars/3d_avatar_8-1.png",
  ],
  "32x32": [
    "Avatars/3d_avatar_13-1.png",
  ],
  "40x40": [
    "Avatars/3d_avatar_1.png",
    "Avatars/3d_avatar_22.png",
    "Avatars/3d_avatar_23.png",
    "Avatars/3d_avatar_8.png",
    "Avatars/3d_avatar_12.png",
    "Avatars/3d_avatar_21-2.png",
    "Avatars/3d_avatar_13.png",
    "Avatars/3d_avatar_10.png",
  ],
  "48x48": [
    "Blog/Avatars/3d_avatar_13.png",
    "Blog/Avatars/3d_avatar_21-1.png",
    "Avatars/3d_avatar_13-3.png",
    "Avatars/3d_avatar_24-3.png",
    "Avatars/3d_avatar_21-3.png",
  ],
  "64x64": [
    "Avatars/3d_avatar_21.png",
    "Avatars/3d_avatar_13-2.png",
    "Avatars/3d_avatar_24-2.png",
  ],
  "270x160": [
    "Noise & Texture-4.png",
  ],
  "384x240": [
    "img.png",
    "img-1.png",
  ],
  "384x396": [
    "Clouds.png",
    "Noise & Texture-1.png",
    "🌎 Map Maker_ Surakarta, Central Java, Indonesia (Pale Dawn).png",
  ],
  "396x320": [
    "img-2.png",
    "Noise & Texture-2.png",
  ],
  "776x252": [
    "Noise & Texture-3.png",
  ],
  "792x400": [
    "Blog/image.png",
  ],
  "996x616": [
    "Noise & Texture.png",
  ],
};

const scopedPlaceholderAssets = {
  "page-1.md#1": {
    "486x486": [
      "figma-crops/landing-page-1/01-hero-visual-486x486.png",
      "figma-crops/landing-page-1/02-content-right-visual-486x486.png",
      "figma-crops/landing-page-1/03-content-left-visual-486x486.png",
    ],
    "504x384": [
      "figma-crops/landing-page-1/04-cta-visual-504x384.png",
    ],
    "384x328": [
      "figma-crops/landing-page-1/05-blog-card-1-384x328.png",
      "figma-crops/landing-page-1/06-blog-card-2-384x328.png",
      "figma-crops/landing-page-1/07-blog-card-3-384x328.png",
    ],
  },
  "contact.md#1": {
    "478x444": [
      "figma-crops/contact-4/contact-map-layer-478x444.png",
    ],
  },
  "sections/blog.md#1": {
    "384x328": [
      "figma-crops/blog-1/card-1-384x328.png",
      "figma-crops/blog-1/card-1-384x328.png",
      "figma-crops/blog-1/card-2-384x328.png",
      "figma-crops/blog-1/card-2-384x328.png",
      "figma-crops/blog-1/card-3-384x328.png",
      "figma-crops/blog-1/card-3-384x328.png",
    ],
  },
  "sections/blog.md#2": {
    "282x282": [
      "figma-crops/blog-2/card-1-282x282.png",
      "figma-crops/blog-2/card-1-282x282.png",
      "figma-crops/blog-2/card-2-282x282.png",
      "figma-crops/blog-2/card-2-282x282.png",
      "figma-crops/blog-2/card-3-282x282.png",
      "figma-crops/blog-2/card-3-282x282.png",
      "figma-crops/blog-2/card-4-282x282.png",
      "figma-crops/blog-2/card-4-282x282.png",
    ],
  },
  "sections/blog.md#3": {
    "588x312": [
      "figma-crops/blog-3/featured-588x312.png",
      "figma-crops/blog-3/featured-588x312.png",
    ],
    "282x282": [
      "figma-crops/blog-3/card-1-282x282.png",
      "figma-crops/blog-3/card-1-282x282.png",
      "figma-crops/blog-3/card-2-282x282.png",
      "figma-crops/blog-3/card-2-282x282.png",
    ],
  },
  "sections/bento.md#2": {
    "368x320": [
      "figma-crops/bento-3/card-1-368x320.png",
      "figma-crops/bento-3/card-2-368x320.png",
      "figma-crops/bento-3/card-3-368x320.png",
    ],
    "572x320": [
      "figma-crops/bento-3/card-4-572x320.png",
      "figma-crops/bento-3/card-5-572x320.png",
    ],
  },
  "sections/call to action.md#1": {
    "486x320": [
      "figma-crops/cta-1/card-1-486x320.png",
      "figma-crops/cta-1/card-2-486x320.png",
    ],
  },
  "sections/call to action.md#3": {
    "486x320": [
      "figma-crops/cta-3/visual-486x320.png",
    ],
  },
  "sections/call to action.md#4": {
    "504x384": [
      "figma-crops/cta-4/visual-504x384.png",
    ],
  },
  "sections/contact.md#1": {
    "486x444": [
      "figma-crops/contact-1/map-maker-surakarta.png",
      "figma-crops/contact-1/clouds.png",
    ],
    "478x444": [
      "figma-crops/contact-1/noise-texture.png",
    ],
  },
  "sections/contact.md#4": {
    "478x444": [
      "figma-crops/contact-4/contact-map-layer-478x444.png",
    ],
  },
  "sections/content.md#1": {
    "486x486": [
      "figma-crops/content-1/visual-486x486.png",
    ],
  },
  "sections/content.md#2": {
    "486x486": [
      "figma-crops/content-2/visual-486x486.png",
    ],
  },
  "sections/content.md#3": {
    "272x120": [
      "figma-crops/content-3/card-1-272x120.png",
      "figma-crops/content-3/card-2-272x120.png",
      "figma-crops/content-3/card-3-272x120.png",
      "figma-crops/content-3/card-4-272x120.png",
      "figma-crops/content-3/card-5-272x120.png",
      "figma-crops/content-3/card-6-272x120.png",
    ],
  },
  "sections/header.md#1": {
    "486x486": [
      "figma-crops/header-1/hero-486x486.png",
    ],
  },
  "sections/header.md#2": {
    "27x27": [
      "figma-crops/header-2/icon-27x27.png",
      "figma-crops/header-2/transparent-27x27.png",
      "figma-crops/header-2/transparent-27x27.png",
    ],
    "304x181": [
      "figma-crops/header-2/card-304x181.png",
    ],
    "1184x248": [
      "figma-crops/header-2/wide-1184x248.png",
    ],
  },
  "sections/header.md#3": {
    "384x384": [
      "figma-crops/header-3/visual-384x384.png",
    ],
  },
  "sections/navigation menu.md#2": {
    "208x128": [
      "figma-crops/navigation-menu-2/card-image-208x128.png",
    ],
    "203x120": [
      "figma-crops/navigation-menu-2/banner-203x120.png",
    ],
    "18x18": [
      "Avatars/3d_avatar_13.png",
      "Avatars/3d_avatar_21.png",
    ],
  },
  "sections/pricing.md#1": {
    "384x100": [
      "figma-crops/pricing-1/overlay-384x100.png",
    ],
  },
};

const companyLogoAssets = {
  "1": {
    src: "/figma-restoration/page-1/company-1-chatsphere-186x40.png",
    width: 186,
    height: 40,
  },
  "2": {
    src: "/figma-restoration/page-1/company-2-globetrek-179x40.png",
    width: 179,
    height: 40,
  },
  "3": {
    src: "/figma-restoration/page-1/company-3-swift-106x40.png",
    width: 106,
    height: 40,
  },
  "4": {
    src: "/figma-restoration/page-1/company-4-logix-117x40.png",
    width: 117,
    height: 40,
  },
  "5": {
    src: "/figma-restoration/page-1/company-5-kraft-91x40.png",
    width: 91,
    height: 40,
  },
};

const droppedOverlayPlaceholders = {
  "page-1.md#1": new Set(["486x486", "504x384"]),
  "sections/bento.md#2": new Set(["368x320", "572x320"]),
  "sections/call to action.md#1": new Set(["486x320"]),
  "sections/call to action.md#3": new Set(["486x320"]),
  "sections/call to action.md#4": new Set(["504x384"]),
  "sections/content.md#1": new Set(["486x486"]),
  "sections/content.md#2": new Set(["486x486"]),
  "sections/content.md#3": new Set(["272x120"]),
  "sections/header.md#1": new Set(["486x486"]),
  "sections/header.md#2": new Set(["304x181", "1184x248"]),
  "sections/header.md#3": new Set(["384x384"]),
  "sections/navigation menu.md#2": new Set(["208x128", "203x120"]),
};

const groups = sources.flatMap((source) => extractGroups(source));

fs.mkdirSync(generatedDir, { recursive: true });
fs.writeFileSync(outputFile, renderRegistry(groups));

const orphanCount = groups.filter((group) => group.orphanBefore.length > 0).length;
console.log(`Extracted ${groups.length} Figma md groups into ${path.relative(root, outputFile)}.`);
if (orphanCount > 0) {
  console.log(`Preserved orphan cssNotes before ${orphanCount} groups as orphanBefore metadata.`);
}

function extractGroups(source) {
  const absolute = path.join(root, source.file);
  const text = fs.readFileSync(absolute, "utf8");
  const lines = text.split(/\r?\n/);
  const result = [];
  let pendingOrphan = [];

  for (let index = 0; index < lines.length; ) {
    if (!lines[index].startsWith("<div")) {
      pendingOrphan.push(lines[index]);
      index += 1;
      continue;
    }

    const startLine = index + 1;
    const codeLines = [];
    let depth = 0;

    for (; index < lines.length; index += 1) {
      const line = lines[index];
      codeLines.push(line);
      depth += countOpenDivs(line) - countCloseDivs(line);

      if (depth === 0) {
        index += 1;
        break;
      }
    }

    const notesStartLine = index + 1;
    const noteLines = [];
    while (index < lines.length && !lines[index].startsWith("<div")) {
      noteLines.push(lines[index]);
      index += 1;
    }

    const groupIndex = result.length + 1;
    const code = sanitizeJsx(codeLines.join("\n"), source.file, groupIndex);
    const cssNotes = trimOuterBlankLines(noteLines).join("\n");
    const orphanBefore = trimOuterBlankLines(pendingOrphan).join("\n");
    pendingOrphan = [];

    result.push({
      id: buildGroupId(source, groupIndex),
      componentName: buildComponentName(source, groupIndex),
      source: source.file,
      sourceKind: source.kind,
      sourceTitle: source.title,
      family: source.kind === "page" ? "page" : source.title,
      title: source.kind === "page" ? source.title : `${source.title} ${groupIndex}`,
      variant: source.kind === "page" ? source.title : findVariant(code) ?? `${source.title} ${groupIndex}`,
      startLine,
      notesStartLine,
      frameHeight: inferFrameHeight(code, source.kind),
      cssNotes,
      orphanBefore,
      textStyles: parseTextStyles(cssNotes),
      code,
    });
  }

  return result;
}

function countOpenDivs(line) {
  return count(line, /<div\b/g) - count(line, /<div\b[^>]*\/>/g);
}

function countCloseDivs(line) {
  return count(line, /<\/div>/g);
}

function count(value, pattern) {
  return value.match(pattern)?.length ?? 0;
}

function sanitizeJsx(code, sourceFile, groupIndex) {
  const jsx = dropGeneratedArtworkGlowBlocks(
    replaceFigmaFragmentIconGroups(
      replaceFigmaVectorArtifacts(
        replaceFigmaCropImages(
          restoreFigmaCropOpacity(
            replaceCompanyLogoBlocks(
              replaceKnownPlaceholders(dropFigmaOverlayPlaceholders(code, sourceFile, groupIndex), sourceFile, groupIndex),
            ),
          ),
        ),
      ),
    ),
  )
    .replaceAll("data-👁️-", "data-eye-")
    .replaceAll("data-👁-", "data-eye-")
    .replace(/lineHeight:\s*(\d+(?:\.\d+)?)/g, "lineHeight: '$1px'")
    .replace(/style="([^"]+)"/g, (_, style) => `style={{${style}}}`);

  return dropGeneratedArtworkGlowBlocks(jsx);
}

function dropGeneratedArtworkGlowBlocks(code) {
  return code
    .replace(/<div style={{([^}]*)}} \/>/g, (match, style) => {
      if (!isGeneratedArtworkGlow(style)) return match;
      return `<span aria-hidden="true" data-figma-generated-glow="dropped" style={{display: 'none'}} />`;
    })
    .replace(
      /<div style={{([^}]*(?:background:\s*'var\(--(?:bg-brand-primary|color-brand-500)[^']*'[^}]*)filter:\s*'blur\([^']+'\)[^}]*)}} \/>/g,
      `<span aria-hidden="true" data-figma-generated-glow="dropped" style={{display: 'none'}} />`,
    );
}

function dropFigmaOverlayPlaceholders(code, sourceFile, groupIndex) {
  return code.replace(
    /<img style={{([^}]*)}} src="https:\/\/placehold\.co\/(\d+x\d+)" \/>/g,
    (match, style, size) => {
      if (!shouldDropFigmaOverlay(sourceFile, groupIndex, size, style)) {
        return match;
      }

      return `<span aria-hidden="true" data-figma-overlay-placeholder="dropped" style={{display: 'none'}} />`;
    },
  );
}

function shouldDropFigmaOverlay(sourceFile, groupIndex, size, style) {
  const scopedDropSizes = droppedOverlayPlaceholders[`${sourceFile}#${groupIndex}`];
  if (!scopedDropSizes?.has(size)) {
    return false;
  }

  return style.includes("position: 'absolute'") || style.includes("opacity: 0.50") || style.includes("mixBlendMode");
}

function replaceKnownPlaceholders(code, sourceFile, groupIndex) {
  const usage = new Map();
  const scopedAssets = scopedPlaceholderAssets[`${sourceFile}#${groupIndex}`] ?? {};

  return code
    .replace(/https:\/\/placehold\.co\/(\d+x\d+)/g, (match, size) => {
      const scopedOptions = scopedAssets[size];
      const options = scopedOptions?.length ? scopedOptions : placeholderAssets[size];
      if (!options?.length) {
        return match;
      }

      const usageKey = scopedOptions?.length ? `scoped:${size}` : `global:${size}`;
      const current = usage.get(usageKey) ?? 0;
      usage.set(usageKey, current + 1);
      return publicAssetPath(options[current % options.length]);
    });
}

function publicAssetPath(assetPath) {
  return encodeURI(`/${assetPath}`);
}

function restoreFigmaCropOpacity(code) {
  return code.replace(
    /<img style={{([^}]*)}} src="(\/figma-crops\/[^"]+)"/g,
    (_, style, src) => {
      if (shouldKeepFigmaCropOpacity(src)) {
        return `<img style={{${style}}} src="${src}"`;
      }

      const cleanStyle = style
        .replace(/,\s*opacity:\s*0\.50/g, "")
        .replace(/opacity:\s*0\.50,\s*/g, "")
        .replace(/opacity:\s*0\.50/g, "");

      return `<img style={{${cleanStyle}}} src="${src}"`;
    },
  );
}

function shouldKeepFigmaCropOpacity(src) {
  return [
    "/figma-crops/contact-1/noise-texture.png",
  ].includes(src);
}

function replaceFigmaCropImages(code) {
  return code.replace(
    /<img style={{([^}]*)}} src="(\/figma-crops\/[^"]+)" \/>/g,
    (_, style, src) => `<FigmaUiReplacement src="${src}" style={{${style}}} />`,
  );
}

function replaceFigmaVectorArtifacts(code) {
  return code.replace(/<div style={{([^}]*)}} \/>/g, (match, style) => {
    if (isWhiteOutlineVector(style) || isIconBackingPlaceholder(style) || isTinyOutlinedIconFragment(style)) {
      return `<span aria-hidden="true" data-figma-vector-artifact="true" style={{display: 'none'}} />`;
    }

    if (isGeneratedArtworkGlow(style)) {
      return `<span aria-hidden="true" data-figma-generated-glow="dropped" style={{display: 'none'}} />`;
    }

    if (isImageFillPlaceholder(style)) {
      return `<FigmaGeneratedArtwork style={{${stripImageFillPlaceholderBackground(style)}}} />`;
    }

    if (isSolidIconMask(style)) {
      return `<FigmaVectorGlyph style={{${style}}} />`;
    }

    if (isPointerCursorMask(style)) {
      return `<FigmaIconGlyph icon="pointer" style={{${style}}} />`;
    }

    return match;
  });
}

function replaceFigmaFragmentIconGroups(code) {
  const hiddenVectorSpan = `<span aria-hidden="true" data-figma-vector-artifact="true" style={{display: 'none'}} />`;
  const hiddenVectorGroupPattern = String.raw`<div style={{width: 20, height: 20, position: 'relative', overflow: 'hidden'}}>\s*(?:${escapeRegExp(hiddenVectorSpan)}\s*){5}</div>`;

  return code.replace(
    new RegExp(hiddenVectorGroupPattern, "g"),
    `<FigmaIconGlyph icon="figma" style={{width: 20, height: 20, position: 'relative', overflow: 'hidden', color: 'var(--text-brand-on-brand, white)'}} />`,
  );
}

function isWhiteOutlineVector(style) {
  return /outline:\s*'[^']*white[^']*solid'/.test(style);
}

function isIconBackingPlaceholder(style) {
  if (!style.includes("position: 'absolute'")) return false;
  if (!style.includes("background: '#D9D9D9'")) return false;

  const width = readStyleNumber(style, "width");
  const height = readStyleNumber(style, "height");
  if (!width || !height) return false;

  return width <= 24 && height <= 24;
}

function isTinyOutlinedIconFragment(style) {
  if (!style.includes("position: 'absolute'")) return false;
  if (!style.includes("outline: '0.50px var(--color-neutral-1000, black) solid'")) return false;

  const width = readStyleNumber(style, "width");
  const height = readStyleNumber(style, "height");
  if (!width || !height) return false;

  return width <= 6 && height <= 6;
}

function isImageFillPlaceholder(style) {
  if (!style.includes("background: '#D9D9D9'")) return false;

  const width = readStyleNumber(style, "width");
  const height = readStyleNumber(style, "height");
  if (!width || !height) return false;

  return width >= 40 && height >= 40;
}

function isGeneratedArtworkGlow(style) {
  if (!/background:\s*'var\(--(?:bg-brand-primary|color-brand-500)/.test(style)) return false;
  if (!style.includes("filter: 'blur(")) return false;
  if (!style.includes("borderRadius: 9999")) return false;

  const width = readStyleNumber(style, "width");
  const height = readStyleNumber(style, "height");
  if (!width || !height) return false;

  return width >= 80 && height >= 40;
}

function stripImageFillPlaceholderBackground(style) {
  return style
    .replace(/,\s*background:\s*'#D9D9D9'/g, "")
    .replace(/background:\s*'#D9D9D9',\s*/g, "")
    .replace(/background:\s*'#D9D9D9'/g, "");
}

function isSolidIconMask(style) {
  if (!style.includes("position: 'absolute'")) return false;
  if (!style.includes("background: 'var(--text-")) return false;
  if (style.includes("borderRadius") || style.includes("boxShadow") || style.includes("filter")) return false;

  const width = readStyleNumber(style, "width");
  const height = readStyleNumber(style, "height");
  if (!width || !height) return false;

  return width >= 8 && width <= 40 && height >= 6 && height <= 40;
}

function isPointerCursorMask(style) {
  if (!style.includes("position: 'absolute'")) return false;
  if (!/background:\s*'var\(--(?:bg-[a-z]+-primary|color-brand-500)/.test(style)) return false;

  const width = readStyleNumber(style, "width");
  const height = readStyleNumber(style, "height");
  if (!width || !height) return false;

  return width >= 17 && width <= 23 && height >= 20 && height <= 26;
}

function replaceCompanyLogoBlocks(code) {
  let result = "";
  let cursor = 0;

  while (cursor < code.length) {
    const start = code.indexOf("<div data-company-logo=", cursor);
    if (start === -1) {
      result += code.slice(cursor);
      break;
    }

    result += code.slice(cursor, start);
    const id = code.slice(start, start + 64).match(/data-company-logo="(\d+)"/)?.[1];
    const asset = id ? companyLogoAssets[id] : null;
    const end = findMatchingDivEnd(code, start);

    if (!asset || end === -1) {
      result += code.slice(start);
      break;
    }

    result += `<img alt="" data-company-logo="${id}" src="${asset.src}" style={{width: ${asset.width}, height: ${asset.height}, objectFit: 'contain', display: 'block', flexShrink: 0}} />`;
    cursor = end;
  }

  return result;
}

function findMatchingDivEnd(code, start) {
  const tagPattern = /<div\b[^>]*\/>|<div\b[^>]*>|<\/div>/g;
  tagPattern.lastIndex = start;
  let depth = 0;

  for (const match of code.matchAll(tagPattern)) {
    const token = match[0];
    if (token.startsWith("<div") && !token.endsWith("/>")) {
      depth += 1;
      continue;
    }

    if (token === "</div>") {
      depth -= 1;
      if (depth === 0) {
        return match.index + token.length;
      }
    }
  }

  return -1;
}

function readStyleNumber(style, property) {
  const match = style.match(new RegExp(`${property}:\\s*(\\d+(?:\\.\\d+)?)`));
  return match ? Number(match[1]) : null;
}

function escapeRegExp(value) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function findVariant(code) {
  return code.match(/data-variant="([^"]+)"/)?.[1] ?? null;
}

function inferFrameHeight(code, sourceKind) {
  const firstLine = code.split("\n")[0] ?? "";
  const explicitHeight = firstLine.match(/height:\s*(\d+)/)?.[1];
  if (explicitHeight) {
    return Number(explicitHeight);
  }

  if (sourceKind === "page") {
    return null;
  }

  if (firstLine.includes("position: 'relative'") && firstLine.includes("height: '100%'")) {
    return 900;
  }

  return null;
}

function parseTextStyles(cssNotes) {
  if (!cssNotes.trim()) {
    return [];
  }

  return cssNotes
    .split(/\n---\n/g)
    .map((chunk) => {
      const lines = trimOuterBlankLines(chunk.split("\n"));
      const textLine = lines.find((line) => line.trim().startsWith("//"));
      const text = textLine ? textLine.replace(/^\s*\/\/\s?/, "") : "";
      const style = lines.filter((line) => !line.trim().startsWith("//")).join("\n").trim();
      return text || style ? { text, style } : null;
    })
    .filter(Boolean);
}

function trimOuterBlankLines(lines) {
  let start = 0;
  let end = lines.length;
  while (start < end && lines[start].trim() === "") start += 1;
  while (end > start && lines[end - 1].trim() === "") end -= 1;
  return lines.slice(start, end);
}

function renderRegistry(items) {
  const components = items
    .map((group) => {
      return `export function ${group.componentName}() {
  return (
${indent(group.code, 4)}
  );
}`;
    })
    .join("\n\n");

  const registry = items
    .map((group) => {
      return `  {
    id: ${literal(group.id)},
    source: ${literal(group.source)},
    sourceKind: ${literal(group.sourceKind)},
    sourceTitle: ${literal(group.sourceTitle)},
    family: ${literal(group.family)},
    title: ${literal(group.title)},
    variant: ${literal(group.variant)},
    startLine: ${group.startLine},
    notesStartLine: ${group.notesStartLine},
    frameHeight: ${group.frameHeight ?? "null"},
    cssNotes: ${literal(group.cssNotes)},
    orphanBefore: ${literal(group.orphanBefore)},
    textStyles: ${literal(group.textStyles)},
    component: ${group.componentName},
  }`;
    })
    .join(",\n");

  return `/* This file is generated by scripts/extract-figma-md.mjs. */
/* eslint-disable */
// @ts-nocheck

import type { ComponentType } from "react";
import { FigmaGeneratedArtwork, FigmaIconGlyph, FigmaUiReplacement, FigmaVectorGlyph } from "../components/figma-ui-replacements";

export type RawFigmaTextStyle = {
  text: string;
  style: string;
};

export type RawFigmaGroup = {
  id: string;
  source: string;
  sourceKind: "page" | "section";
  sourceTitle: string;
  family: string;
  title: string;
  variant: string;
  startLine: number;
  notesStartLine: number;
  frameHeight: number | null;
  cssNotes: string;
  orphanBefore: string;
  textStyles: RawFigmaTextStyle[];
  component: ComponentType;
};

${components}

export const rawFigmaGroups: RawFigmaGroup[] = [
${registry}
];

export const rawPageGroups = rawFigmaGroups.filter((group) => group.sourceKind === "page");
export const rawSectionGroups = rawFigmaGroups.filter((group) => group.sourceKind === "section");
export const rawSectionFamilies = Array.from(new Set(rawSectionGroups.map((group) => group.family)));
`;
}

function buildGroupId(source, index) {
  return `${slug(source.file.replace(/\.md$/, ""))}-${index}`;
}

function buildComponentName(source, index) {
  return `Raw${pascal(source.file.replace(/\.md$/, ""))}${index}`;
}

function titleCase(value) {
  return value
    .split(/[\s-_]+/g)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join(" ");
}

function slug(value) {
  return value
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

function pascal(value) {
  return value
    .split(/[^a-zA-Z0-9]+/g)
    .filter(Boolean)
    .map((part) => part[0].toUpperCase() + part.slice(1))
    .join("");
}

function indent(value, spaces) {
  const prefix = " ".repeat(spaces);
  return value
    .split("\n")
    .map((line) => `${prefix}${line}`)
    .join("\n");
}

function literal(value) {
  return JSON.stringify(value, null, 2)
    .split("\n")
    .map((line, index) => (index === 0 ? line : `    ${line}`))
    .join("\n");
}
