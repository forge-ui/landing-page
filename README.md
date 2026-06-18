# Forge Landing Page

这是把 Figma 源文件和 Figma 导出的 `md` 源码还原成 React 项目的组件库。每个组件组按用户原始规则处理：一个 JSX 代码片段，加上紧跟在后面的 `// 文案` 和 style 描述，作为同一组 `cssNotes` 元数据保留。

注意：`md` 导出会丢真实图片、SVG/vector 和字体加载信息，不能单独作为视觉保真的唯一来源。Figma MCP 是视觉、变量和资产的真源。

## 技术栈

- Vite + React + TypeScript
- `scripts/extract-figma-md.mjs` 从根目录 `*.md` 和 `sections/*.md` 抽取组件组
- `src/generated/figmaRegistry.tsx` 是自动生成的真实 Figma 组件 registry
- `src/App.tsx` 默认渲染实际官网页；`#kit` 才是 generated 组件库工作台
- `src/components/figma-ui-replacements.tsx` 用 DOM/CSS 和真实图片资产补回 md 导出丢失的 UI mockup、icon/vector 和 image-fill 层
- `src/components/homepage-restoration.tsx` 只用于页面级 overlay 和 Contact map 恢复
- `images/` 作为 Vite `publicDir` 发布原始图片资产
- `.agents/skills/landing-page-builder/references/figma-mcp-source.md` 记录 Figma MCP 节点、变量、资产和视觉基准
- `references/figma-mcp/landing-page-1-1909-17785.png` 是 Figma MCP 导出的 1440x9742 整页视觉基准
- `.agents/skills/landing-page-builder/references/asset-recovery.md` 记录本地资产回填、Figma crop、结构化 artwork 和路由验收结果
- `.agents/skills/landing-page-builder` 是给 Codex 使用的官网改造 skill

## 本地运行

```bash
npm install
npm run extract:figma
npm run dev
npm run build
```

`npm run build` 会先自动执行 `npm run extract:figma`，保证 generated 组件和 `md` 源码同步。

## 页面入口

| URL | 渲染内容 |
|---|---|
| `/` | `page-1.md` 生成的完整官网页 |
| `/#page-2` | `page-2.md` 生成的完整官网页 |
| `/#pricing` | `pricing.md` 生成的价格页 |
| `/#contact` | `contact.md` 生成的联系页 |
| `/#article` | `arcitle.md` 生成的文章页 |
| `/#kit` | `sections/*.md` 生成的组件库和 cssNotes 查看器 |

## 目录说明

| 路径 | 用途 |
|---|---|
| `page-1.md`、`page-2.md`、`pricing.md`、`contact.md`、`arcitle.md` | Figma 导出的完整页面源码 |
| `sections/` | Figma 导出的 section 模块源码 |
| `scripts/extract-figma-md.mjs` | 抽取“代码 + 后置 cssNotes”并生成 React registry |
| `src/generated/figmaRegistry.tsx` | 自动生成的页面组件和 section 组件 |
| `src/App.tsx` | 默认渲染实际页面，`#kit` 渲染组件库 |
| `src/components/figma-ui-replacements.tsx` | Figma 替换层：真实图片、lucide icon、DOM/CSS mockup、image-fill artwork |
| `src/components/homepage-restoration.tsx` | 页面级 Figma overlay 和 Contact map 恢复层 |
| `src/styles.css` | 实际页面 1440px 居中画布、组件库样式 |
| `.agents/skills/landing-page-builder/references/figma-mcp-source.md` | Figma MCP 真源说明和节点索引 |
| `references/figma-mcp/landing-page-1-1909-17785.png` | Figma 原始整页视觉基准 |
| `.agents/skills/landing-page-builder/references/asset-recovery.md` | 本地资产回填、Figma MCP crop、结构化 artwork 和恢复层规则 |
| `images/figma-crops/` | 从 Figma MCP 节点截图裁出的稳定页面/section 资产 |
| `images/figma-restoration/` | 用于页面级 overlay 的恢复层资产 |
| `images/fonts/` | 本地化的 Satoshi 和 Onest 字体 |
| `.agents/skills/landing-page-builder` | Codex 官网拼装和业务改造 skill |

## 改造原则

1. Figma MCP 是视觉、变量和资产的真源；原始 `md` 是可编辑结构来源。
2. 不要按视觉重新手写组件。遇到不匹配时先查 Figma MCP 的 section context 和 screenshot。
3. 每次改动 `md` 后先运行 `npm run extract:figma`。
4. Figma 导出的 `lineHeight: 数字` 必须在抽取时转成 `px`，否则 React 会按倍数行高把页面撑爆。
5. 业务改造优先复制 generated 组件或基于 generated 组件抽参数，不要丢失 `source/startLine/cssNotes`。
6. `cssNotes` 里的 `// 文案` 与 style 是组件元数据，替换业务文案时先查这里。
7. `placehold.co`、`#D9D9D9` image-fill 占位和纯色 icon div 是导出缺陷；真实图片用 Figma MCP/`images/` 回填，UI mockup 用结构化 DOM/CSS 替换。
8. `#kit` 的 section 预览保持 1440px Figma 画布宽度，用来检查模块真实效果。
9. 完成后运行 `npm run typecheck`、`npm run build`，再用 Chrome 插件检查整页和 section 渲染。

## 当前验收

2026-06-17 当前状态：

- `src/generated/figmaRegistry.tsx` 和 `dist/` 均无 `placehold.co`。
- `npm run typecheck` 通过。
- `npm run build` 通过；当前 Node.js `22.2.0` 会触发 Vite 版本提示，生产包仍成功生成。
- Chrome 插件实测 `/`、`/#page-2`、`/#pricing`、`/#contact`、`/#article`、`/#kit` 均为 `0` 个 `placehold.co`、`0` 个断图。
- Chrome 插件逐个切换 `#kit` 的 14 个 section family，全部为 `0` 个 `placehold.co`、`0` 个断图。
- Chrome 插件逐个切换 `#kit` 的 14 个 section family，全部为 `0` 个 UI mockup crop、`0` 个可见大灰块、`0` 个可见小灰块、`0` 个 tiny outline 碎片。
- `Project Lazarus` 和同类 UI mockup 不再用整图截图覆盖；md 结构化 DOM 保留，缺失 image-fill 层由 `FigmaGeneratedArtwork` 渲染。
