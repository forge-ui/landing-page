# Asset Recovery

这个项目的运行时资产统一从本地 `images/` 目录读取。内容源里的占位图、缺失图标和灰色 image-fill 由抽取脚本和结构化替换组件处理。

## 关键文件

| 文件 | 职责 |
|---|---|
| `scripts/extract-content-md.mjs` | 把内容源里的占位图映射到本地资产 |
| 组件替换层 | 图标、Logo、头像、结构化产品图和装饰图形替换层 |
| `src/components/homepage-restoration.tsx` | 页面级补充视觉层 |
| `images/` | 本地图片、头像、Logo、纹理、产品图和恢复资产 |

## 当前规则

1. `placehold.co` 必须在生成时替换为本地资源。
2. `#D9D9D9` 大块 image-fill 优先转换为结构化 DOM/CSS artwork。
3. 小型异常方块、空心图标碎片、无效视觉残片通过脚本隐藏或替换为清晰图标。
4. 同尺寸图片不能全局复用时，使用 `scopedPlaceholderAssets` 按 `sourceFile#groupIndex` 绑定。
5. 页面级 overlay 只用于补充缺失视觉，保留 generated 组件树作为结构来源。

## 验收

每次改资产或抽取脚本后运行：

```bash
npm run extract:content
npm run typecheck
npm run build
```

然后用 Chrome 打开：

- `http://localhost:5173/#kit`
- `http://localhost:5173/#page-1`
- `http://localhost:5173/#page-2`
- `http://localhost:5173/#pricing`
- `http://localhost:5173/#contact`
- `http://localhost:5173/#article`

检查项：

- 断图数量为 0。
- `placehold.co` 数量为 0。
- 可见灰色占位块为 0。
- 异常小方块和模糊图标为 0。
- 产品图和头像清晰。
