# Forge Landing Page Kit Agent Rules

本仓是 Forge UI 官网页面与组件套件。处理官网拼装、业务改造、页面预览或组件维护任务时，默认读取并使用 `.agents/skills/landing-page-builder`。

## 工作规则

- 始终用简体中文回复。
- 默认入口是 `http://localhost:5173/#kit`；页面预览路由是 `#page-1`、`#page-2`、`#pricing`、`#contact`、`#article`。
- 页面与组件源码统一放在 `content/pages/*.md` 和 `content/sections/*.md`。
- `scripts/extract-content-md.mjs` 负责从内容源生成 `src/generated/siteRegistry.tsx`；不要手写修改 generated registry。
- `src/App.tsx` 负责文档站壳子、组件索引、页面路由和页面预览。
- `src/components/*replacements.tsx` 与 `src/components/homepage-restoration.tsx` 是当前运行时视觉修复层；修改前先确认依赖关系。
- `images/` 是 Vite `publicDir`，用于本地图片、头像、Logo、字体和页面资产；删除资产前必须确认没有运行时引用。
- 视觉 token、响应式、hover/focus、组件索引和页面修复样式集中改 `src/styles.css`。
- 不要在未获用户明确要求时执行 `git commit`、`git push`、建分支或破坏性清理。
- 前端视觉相关改动完成后，必须运行 `npm run typecheck`、`npm run build`，并用用户本机 Google Chrome 打开真实页面检查。
