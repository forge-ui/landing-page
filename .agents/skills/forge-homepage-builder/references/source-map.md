# Source Map

这个项目现在直接从 Figma `md` 导出源码生成 React 组件。抽取单位是：一个顶层 JSX 代码块，加上它后面紧跟的 `// 文案` 和 style 描述。

## 核心文件

| 文件 | 职责 |
|---|---|
| `scripts/extract-figma-md.mjs` | 解析 `md`，生成 React registry |
| `src/generated/figmaRegistry.tsx` | 自动生成的 60 个真实导出组件和 `cssNotes` 元数据 |
| `src/App.tsx` | `/` 渲染实际页面，`#kit` 渲染组件库工作台 |
| `src/styles.css` | 1440px 实际页面居中画布和组件库样式 |

## 原始页面源

| 源文件 | generated 类型 | 说明 |
|---|---|---|
| `page-1.md` | `rawPageGroups` | Demo Page 1 完整页面 |
| `page-2.md` | `rawPageGroups` | Demo Page 2 完整页面 |
| `pricing.md` | `rawPageGroups` | Pricing 完整页面 |
| `contact.md` | `rawPageGroups` | Contact 完整页面 |
| `arcitle.md` | `rawPageGroups` | Article 完整页面 |

## 原始 Section 源

| 源文件 | generated family |
|---|---|
| `sections/header.md` | `Header` |
| `sections/navigation menu.md` | `Navigation Menu` |
| `sections/logo.md` | `Logo` |
| `sections/feature.md` | `Feature` |
| `sections/bento.md` | `Bento` |
| `sections/content.md` | `Content` |
| `sections/pricing.md` | `Pricing` |
| `sections/testimonial.md` | `Testimonial` |
| `sections/blog.md` | `Blog` |
| `sections/faqs.md` | `Faqs` |
| `sections/contact.md` | `Contact` |
| `sections/team.md` | `Team` |
| `sections/call to action.md` | `Call To Action` |
| `sections/footer.md` | `Footer` |

## 查证命令

```bash
npm run extract:figma
rg -n 'source: "sections/pricing.md"|cssNotes|textStyles' src/generated/figmaRegistry.tsx
rg -n '^<div|^// |data-variant=' sections/pricing.md
```

`src/generated/figmaRegistry.tsx` 中每个 group 都保留 `source`、`startLine`、`notesStartLine`、`cssNotes`、`textStyles`。
