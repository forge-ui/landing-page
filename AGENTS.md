# Forge Homepage Agent Rules

本仓是 Forge UI 官网模块库项目，源码来自 Figma 导出的页面和 section。处理任务时默认使用 `.agents/skills/forge-homepage-builder`。

## 工作规则

- 始终用简体中文回复。
- 不要删除或移动根目录 Figma 导出文件，除非用户明确要求。
- 不要把 `page-*.md` 或 `sections/*.md` 当运行时代码直接嵌入页面；它们是设计来源和核验参考。
- 基础 UI 组件放在 `src/components/base.tsx`。
- 官网 section 模块放在 `src/components/sections.tsx`，通过 `renderSection()` 按 family/variant 渲染。
- 模块默认内容、variant catalog 放在 `src/data/siteKit.ts`。
- Figma 成品页组合蓝图放在 `src/data/demoPages.ts`。
- `src/App.tsx` 是模块工作台，用于查看 demo 页面和模块库，不是最终业务官网的一次性静态页。
- 视觉 token、响应式、hover/focus 状态集中改 `src/styles.css`。
- 不要在未获用户明确要求时执行 `git commit`、`git push`、分支操作或破坏性清理。
- 完成改动后至少运行 `npm run typecheck` 和 `npm run build`。如果本机 Node 满足 pnpm 要求，也可以运行 `pnpm typecheck` / `pnpm build`。
