# Source Map

这个项目从本地 `content/**/*.md` 内容源生成 React 组件。抽取单位是：一个顶层 JSX 代码块，加上它后面紧跟的 `// 文案` 和 style 描述。

## 核心文件

| 文件 | 职责 |
|---|---|
| `scripts/extract-content-md.mjs` | 解析 `md`，生成 React registry |
| `src/generated/siteRegistry.tsx` | 自动生成的页面、区块组件和 `cssNotes` 元数据 |
| `src/App.tsx` | 路由、成品页面和 `#kit` 组件索引 |
| `src/styles.css` | 自适应页面容器、组件索引和视觉修复规则 |

## 原始页面源

| 源文件 | generated 类型 | 说明 |
|---|---|---|
| `content/pages/page-1.md` | `rawPageGroups` | Demo Page 1 完整页面 |
| `content/pages/page-2.md` | `rawPageGroups` | Demo Page 2 完整页面 |
| `content/pages/pricing.md` | `rawPageGroups` | Pricing 完整页面 |
| `content/pages/contact.md` | `rawPageGroups` | Contact 完整页面 |
| `content/pages/article.md` | `rawPageGroups` | Article 完整页面 |

## 原始 Section 源

| 源文件 | generated family |
|---|---|
| `content/sections/header.md` | `Header` |
| `content/sections/navigation menu.md` | `Navigation Menu` |
| `content/sections/logo.md` | `Logo` |
| `content/sections/feature.md` | `Feature` |
| `content/sections/bento.md` | `Bento` |
| `content/sections/content.md` | `Content` |
| `content/sections/pricing.md` | `Pricing` |
| `content/sections/testimonial.md` | `Testimonial` |
| `content/sections/blog.md` | `Blog` |
| `content/sections/faqs.md` | `Faqs` |
| `content/sections/contact.md` | `Contact` |
| `content/sections/team.md` | `Team` |
| `content/sections/call to action.md` | `Call To Action` |
| `content/sections/footer.md` | `Footer` |

## 查证命令

```bash
npm run extract:content
rg -n 'source: "content/sections/pricing.md"|cssNotes|textStyles' src/generated/siteRegistry.tsx
rg -n '^<div|^// |data-variant=' content/sections/pricing.md
```

`src/generated/siteRegistry.tsx` 中每个 group 都保留 `source`、`startLine`、`notesStartLine`、`cssNotes`、`textStyles`。
