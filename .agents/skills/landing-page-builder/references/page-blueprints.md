# Page Blueprints

成品页由 `content/pages/*.md` 直接生成到 `rawPageGroups`。下面的行号用于查整页内部有哪些 `data-variant` section；真正渲染整页时用 `rawPageGroups` 中对应完整页面组件。

## Demo Page 1

Source: `content/pages/page-1.md`，generated group: `source === "content/pages/page-1.md"`

1. `Header 1` at `content/pages/page-1.md:2`
2. `Bento 1` at `content/pages/page-1.md:389`
3. `Feature 2` at `content/pages/page-1.md:737`
4. `Testimonial 4` at `content/pages/page-1.md:851`
5. `Content 1` at `content/pages/page-1.md:905`
6. `Content 2` at `content/pages/page-1.md:1175`
7. `Pricing 2` at `content/pages/page-1.md:1343`
8. `CTA 4` at `content/pages/page-1.md:1547`
9. `Testimonial 1` at `content/pages/page-1.md:1831`
10. `Blog 1` at `content/pages/page-1.md:2038`
11. `FAQs 1` at `content/pages/page-1.md:2116`
12. `Footer 1` at `content/pages/page-1.md:2207`

## Demo Page 2

Source: `content/pages/page-2.md`，generated group: `source === "content/pages/page-2.md"`

1. `Header 4` at `content/pages/page-2.md:2`
2. `Logo 3` at `content/pages/page-2.md:426`
3. `Feature 4` at `content/pages/page-2.md:469`
4. `Testimonial 3` at `content/pages/page-2.md:534`
5. `Bento 4` at `content/pages/page-2.md:581`
6. `Pricing 3` at `content/pages/page-2.md:911`
7. `Testimonial 5` at `content/pages/page-2.md:1070`
8. `Blog 4` at `content/pages/page-2.md:1204`
9. `FAQs 3` at `content/pages/page-2.md:1286`
10. `CTA 2` at `content/pages/page-2.md:1368`
11. `Footer 3` at `content/pages/page-2.md:1443`

## Pricing Page

Source: `content/pages/pricing.md`，generated group: `source === "content/pages/pricing.md"`

`Pricing 3` -> `Logo 3` -> `Testimonial 3` -> `FAQs 3` -> `CTA 2` -> `Footer 3`

## Contact Page

Source: `content/pages/contact.md`，generated group: `source === "content/pages/contact.md"`

`Contact 4` -> `FAQs 3` -> `CTA 2` -> `Footer 3`

## Article Page

Source: `content/pages/article.md`，generated group: `source === "content/pages/article.md"`

`Article Detail` -> `Blog 4` -> `FAQs 3` -> `CTA 2` -> `Footer 3`
