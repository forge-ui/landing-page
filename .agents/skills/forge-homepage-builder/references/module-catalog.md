# Module Catalog

模块目录由 `src/generated/figmaRegistry.tsx` 自动生成，不手写维护。运行时使用：

```ts
import { rawPageGroups, rawSectionGroups, rawSectionFamilies } from "./generated/figmaRegistry";
```

## Group 结构

每个 `RawFigmaGroup` 都包含：

| 字段 | 说明 |
|---|---|
| `component` | 从 md JSX 代码块生成的 React 组件 |
| `source` | 原始 md 文件 |
| `startLine` | JSX 代码块起始行 |
| `notesStartLine` | 后置 cssNotes 起始行 |
| `cssNotes` | 代码后面的 `// 文案` 和 style 描述 |
| `textStyles` | 从 cssNotes 拆出的 `{ text, style }[]` |
| `orphanBefore` | 文件开头没有前置 JSX 的孤立 cssNotes |

## Section Families

`rawSectionFamilies` 目前来自这些文件：

- `Bento`
- `Blog`
- `Call To Action`
- `Contact`
- `Content`
- `Faqs`
- `Feature`
- `Footer`
- `Header`
- `Logo`
- `Navigation Menu`
- `Pricing`
- `Team`
- `Testimonial`

## 使用方式

选择真实组件：

```tsx
const group = rawSectionGroups.find(
  (item) => item.source === "sections/pricing.md" && item.startLine === 679,
);
const Component = group?.component;
```

渲染时保留来源信息：

```tsx
{Component ? <Component /> : null}
<pre>{group?.cssNotes}</pre>
```

## 扩模块规则

1. 修改或补齐原始 `md` 中的代码组。
2. 运行 `npm run extract:figma`。
3. 在 `src/generated/figmaRegistry.tsx` 检查新 group 是否有正确的 `source/startLine/cssNotes`。
4. 业务页面引用 generated component，不手写重复视觉。
