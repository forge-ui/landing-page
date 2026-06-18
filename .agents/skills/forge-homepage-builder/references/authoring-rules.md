# Authoring Rules

## 从业务需求写官网

1. 先选最接近的真实 generated 页面：
   - 完整 SaaS 首页：`rawPageGroups` 中的 `page-2.md`
   - 模块展示更多的营销页：`rawPageGroups` 中的 `page-1.md`
   - 价格页：`pricing.md`
   - 联系页：`contact.md`
   - 内容/文章页：`arcitle.md`
2. 需要拆模块时，从 `rawSectionGroups` 选择真实 section component。
3. 改业务文案前先看 `group.cssNotes` 和 `group.textStyles`，它们对应代码后面的 CSS/文案块。
4. 抽 props 或业务数据时，从 generated component 复制到业务组件；保留文件顶部注释说明来源 `source:startLine`。
5. 图片优先从 `images/` 选择；新增素材也放 `images/`。

## 何时改组件

不要手改 `src/generated/figmaRegistry.tsx`。只在以下情况改 `md` 或抽取脚本：

- 原始导出中漏了代码组；
- `style="..."` 或非法 data 属性没有被脚本兼容；
- 需要新增 generated 元数据字段；
- 用户明确要求把某个 generated 组件抽成可传 props 的业务组件。

不要为了替换几句文案重新设计视觉。

## 质量检查

- `npm run extract:figma`
- `npm run typecheck`
- `npm run build`
- 浏览器检查：
  - 用用户 Chrome 插件打开 `/`、`/#pricing`、`/#kit`；
  - `/` 必须直接是官网页面，不是组件工作台；
  - section family 在 `/#kit` 切换正常；
  - `cssNotes` details 能展开；
  - 1440px Figma 画布居中，标题行高没有被撑爆；
  - console 没有 React/Vite runtime error。
