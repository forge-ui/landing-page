---
name: landing-page-builder
description: Build, inspect, and business-customize official websites from the local Forge Landing Page Kit. Use when Codex needs to choose numbered pages or sections from #kit, compose landing pages, replace business copy/assets, update content/pages or content/sections sources, regenerate the site registry, and verify the result in Chrome.
---

# Forge Landing Page Builder

你在维护一个可运行的官网页面与组件套件。目标是让 Codex 拿到业务说明后，能从 `#kit` 选择编号页面和区块，替换文案、产品信息、CTA、图片与主题，拼出风格统一、可继续维护的官网。

## 必读顺序

1. `README.md`：项目定位、运行方式、路由和编号规则。
2. `src/App.tsx`：`#kit` 索引、页面路由、预览按钮和页面渲染入口。
3. `src/generated/siteRegistry.tsx`：当前运行时页面与 section registry。
4. `content/pages/*.md` 或 `content/sections/*.md`：需要改造的源码组。
5. `scripts/extract-content-md.mjs`：新增源码组、调整抽取或修复占位资产时再读。
6. `references/source-map.md`、`references/authoring-rules.md`、`references/asset-recovery.md`：需要查映射、改造规则或资产规则时再读。

## 项目边界

1. 默认入口是 `/#kit`；根路径没有 hash 时会重定向到 `#kit`。
2. 成品页面路由是 `/#page-1`、`/#page-2`、`/#pricing`、`/#contact`、`/#article`。
3. 页面源码只放在 `content/pages/*.md`；区块源码只放在 `content/sections/*.md`。
4. `src/generated/siteRegistry.tsx` 由脚本生成，不手写修改。
5. `images/` 是运行时 public 资产目录，删资产前必须确认没有页面、组件或脚本引用。
6. 页面级视觉补充层只能补齐缺失视觉，不能替代 generated 组件树。
7. 用户没有明确要求时，不执行 `git commit`、`git push`、建分支或破坏性清理。

## 编号使用

1. 先打开 `http://localhost:5173/#kit`。
2. 用 `P001`、`P002` 选择完整页面。
3. 用 `S001`、`S002` 选择 section 变体。
4. 复制编号后，在 `rawPageGroups` 或 `rawSectionGroups` 里查 `source`、`startLine`、`cssNotes`、`textStyles`。
5. 业务页面组合时优先复用编号对应组件，不凭印象重写相似界面。

## 业务改造强约束

1. 改造前列出业务关键词：品牌名、产品名、目标用户、核心能力、CTA、价格、FAQ、页脚、导航。
2. 替换文案时覆盖导航、公告、Hero、产品图标签、客户证明、功能卡、内容区、价格、评价、FAQ、CTA、页脚。
3. 同时检查 `group.textStyles`、`group.cssNotes`、`content/pages/*.md`、`content/sections/*.md`、手写组件和页面补充层。
4. 改完后扫描旧品牌名、旧 CTA、旧邮箱、旧价格、旧 FAQ 和不属于新业务的行业词。
5. 图片、Logo、头像、图标必须清晰；缺素材时优先用本地 `images/`，确实缺高质量业务图时再生成新图。
6. 正式业务页面必须使用自适应宽度；`#kit` 原始预览允许横向滚动用于核对组件完整性。
7. 动效保持克制，优先使用每屏淡入淡出、轻微位移和基础 hover 状态。

## 修改流程

1. 明确业务目标和需要的页面/section 编号。
2. 查 registry 元数据，定位源码文件与行号。
3. 只换文案时，优先改源码组或抽出业务组件，保持来源注释。
4. 新增或调整源码组后运行 `npm run extract:content`。
5. 改资产规则或占位替换时，读 `references/asset-recovery.md` 并检查 `images/`。
6. 运行 `npm run typecheck` 和 `npm run build`。
7. 用用户本机 Google Chrome 打开 `/#kit` 和被改页面，检查布局、图片、图标、滚动、下拉、响应式和 console。

## 按需引用

- 模块目录：读 `references/module-catalog.md`。
- 成品页结构：读 `references/page-blueprints.md`。
- 业务改造规则：读 `references/authoring-rules.md`。
- 内容源映射：读 `references/source-map.md`。
- 资产回填规则：读 `references/asset-recovery.md`。
