# Authoring Rules

## 从业务需求写官网

1. 先在 `/#kit` 选择最接近的页面或区块编号。
2. 完整 SaaS 首页优先看 `P001`、`P002`。
3. 单独页面优先看价格页、联系页、文章页。
4. 需要拆模块时，从 `rawSectionGroups` 选择真实 section component。
5. 改业务文案前先看 `group.cssNotes` 和 `group.textStyles`，它们对应代码后面的 CSS/文案块。
6. 抽 props 或业务数据时，从 generated component 复制到业务组件；保留文件顶部注释说明来源 `source:startLine`。
7. 图片优先从 `images/` 选择；新增素材也放 `images/`。

## 文本替换审计

业务改造必须覆盖以下位置：

- 导航菜单
- 顶部公告
- Hero 标题、副标题、CTA
- 产品图内标签和数字
- Logo cloud 或客户证明
- 功能卡片
- 内容区标题和 bullets
- 价格方案
- 客户评价
- FAQ
- CTA 表单
- Footer 链接、版权、联系方式

完成后运行关键词扫描，确保旧品牌名、旧产品名、旧 CTA、旧邮箱、旧价格、旧 FAQ 没有残留。

## 何时改内容源

`src/generated/siteRegistry.tsx` 由脚本生成。以下情况改 `content/**/*.md` 或抽取脚本：

- 内容源漏了代码组；
- `style="..."` 或非法 data 属性需要脚本兼容；
- 需要新增 generated 元数据字段；
- 用户明确要求把某个 generated 组件抽成可传 props 的业务组件。

## 宽度和响应式

1. 正式业务页面使用自适应容器，优先跟随 `--container` 和 `--page-gutter`。
2. 大屏页面不能显得过窄；常规内容上限建议 1280-1320px。
3. 移动端必须避免横向滚动和文字溢出。
4. `#kit` 的原始组件预览允许保留横向滚动，用于检查原始组件完整性。

## 质量检查

- `npm run extract:content`
- `npm run typecheck`
- `npm run build`
- 用用户 Chrome 插件打开关键路由；
- `#kit` 分类切换正常；
- `cssNotes` details 能展开；
- console 没有 React/Vite runtime error；
- 正式业务页面在 1440、1920、移动宽度下都要检查。
