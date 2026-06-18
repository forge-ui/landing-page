---
name: forge-homepage-builder
description: Build and adapt official websites from the forge-homepage Figma source. Use Figma MCP as the visual/asset authority, and use the md export plus generated React registry as the editable structure source. Use when Codex needs to restore, inspect, compose, or business-customize the homepage from the Figma frame, page-1.md, page-2.md, pricing.md, contact.md, arcitle.md, and sections/*.md without visually imitating or rewriting the design from scratch.
---

# Forge Homepage Builder

你在维护一个从 Figma 源文件和 `md` 导出源码还原的官网组件库。目标是让 Codex 基于真实 Figma 节点、真实导出代码和可追溯组件拼装改造官网，而不是按截图或视觉印象重新写一套。

重要事实：`md` 导出是可编辑结构来源，但它会丢真实图片、SVG/vector 和字体加载信息。视觉保真、资产回填和像素对照必须优先使用 Figma MCP。

## 先读这些文件

1. `references/figma-mcp-source.md`：Figma MCP 真源、节点 ID、变量/资产结论、视觉基准。
2. `scripts/extract-figma-md.mjs`：抽取规则。一个顶层 JSX 代码块 + 紧跟在后面的 `// 文案` 和 style 描述是一组。
3. `src/generated/figmaRegistry.tsx`：自动生成的页面组件和 section 组件。这里是当前运行时结构来源。
4. `src/App.tsx`：默认渲染实际官网页；`#kit` 才是 generated section 组件库工作台。
5. `references/source-map.md`：原始文件、generated registry、cssNotes 的映射。
6. `references/asset-recovery.md`：本地图片回填规则、恢复层和 Chrome 验收结果。
7. 需要改具体模块时，再读对应 `page-*.md`、`pricing.md`、`contact.md`、`arcitle.md` 或 `sections/*.md`。

## 铁律

1. 不要按视觉仿写或重写组件；结构改造必须从 Figma MCP、原始 `md` 或 `src/generated/figmaRegistry.tsx` 出发。
2. 不要删除、移动或覆盖原始导出文件：`page-*.md`、`pricing.md`、`contact.md`、`arcitle.md`、`sections/*.md`、`images/`。
3. 不要手改 `src/generated/figmaRegistry.tsx`；改抽取规则或原始 `md` 后运行 `npm run extract:figma`。
4. `cssNotes` 是组件的一部分，里面的 `// 文案` 和 style 描述不能丢。
5. 生成脚本允许做最小 JSX 兼容处理：`data-👁️-*` 转 `data-eye-*`，`style="..."` 转 React style object，`lineHeight: 数字` 转 `px`。
6. 业务改造时保留 `source`、`startLine`、`notesStartLine`、`cssNotes` 的可追溯性。
7. 不要在用户未要求时执行 `git commit`、`git push`、建分支或破坏性清理。
8. 发现 `placehold.co`、`#D9D9D9` image-fill、纯色 icon div、字体 fallback 或视觉不匹配时，不要猜；先用 Figma MCP 拉对应 section 的 `get_design_context`、`get_screenshot`、`get_variable_defs`。
9. 同尺寸占位图不一定是同一张图。重复尺寸必须优先写入 `scopedPlaceholderAssets`，用 `sourceFile#groupIndex` 锁定来源。
10. 对 Figma MCP 整块裁图要移除 md 占位遗留的 `opacity: 0.50`；否则会和残缺 vector 层错误叠加。
11. md 导出丢失 SVG/vector 时，优先在 `src/components/figma-ui-replacements.tsx` 做结构化 DOM/CSS 或真实图片替换；页面级视觉才允许用 `src/components/homepage-restoration.tsx` 这类 pointer-events disabled 恢复层补视觉，并且必须保留 generated 组件树作为结构来源。
12. `#kit` 的 section 预览必须保留 1440px Figma 画布宽度；不要把组件预览压成 1200px 后再判断视觉。

## 拼装工作流

1. 明确业务目标：品牌、目标用户、主 CTA、需要基于哪一个整页或 section 变体。
2. 查 Figma 真源：按 `references/figma-mcp-source.md` 找 root/section node id，并用 Figma MCP 取 context/screenshot/variables。
3. 选择真实组件：从 `rawPageGroups` 选完整页面，或从 `rawSectionGroups` 按 `family/source/variant` 选 section。
4. 查组元数据：查看 `source:startLine` 的 JSX 和 `cssNotes` 中的文案/style。
5. 改造方式：
   - 只换业务文案：优先基于 generated 组件抽出 props 或复制组件到业务组件后替换文本。
   - 组合页面：按选中的 generated section 组件排列，不要凭空写新视觉。
   - 回填资产：优先使用 Figma MCP 返回的真实 asset URL 或本地 `images/` 同源资源，禁止继续使用 `placehold.co`。
   - 恢复缺失视觉：真实图片/纹理用 Figma MCP 资产或稳定本地 `images/` 路径回填；UI mockup 和 `#D9D9D9` image-fill 不要整图截图兜底，优先用 `FigmaUiReplacement` / `FigmaGeneratedArtwork` 这类结构化组件；页面级 overlay 才使用 `images/figma-restoration/`。
   - 新增变体：先把 Figma MCP 对应 section context 与 `md` 中对应代码组补齐，再运行抽取脚本。
6. 验证：运行 `npm run extract:figma`、`npm run typecheck`、`npm run build`，再用 Chrome 插件检查所有路由和 `#kit` 所有 section family 的 `placehold.co = 0`、断图 `= 0`、UI mockup crop `= 0`、可见灰块 `= 0`、tiny outline 碎片 `= 0`，并对照 `references/figma-mcp/landing-page-1-1909-17785.png`。

## 页面入口

- `/`：`page-1.md` 完整页面。
- `/#page-2`：`page-2.md` 完整页面。
- `/#pricing`：`pricing.md` 完整页面。
- `/#contact`：`contact.md` 完整页面。
- `/#article`：`arcitle.md` 完整页面。
- `/#kit`：`sections/*.md` 组件库和 cssNotes 查看器。

## 按需引用

- 模块目录：读 `references/module-catalog.md`
- 成品页组合：读 `references/page-blueprints.md`
- 业务改造规则：读 `references/authoring-rules.md`
- 原始导出映射：读 `references/source-map.md`
- Figma MCP 真源：读 `references/figma-mcp-source.md`
- 资产回填规则：读 `references/asset-recovery.md`
