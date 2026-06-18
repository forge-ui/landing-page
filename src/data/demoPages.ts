// Legacy shim: 真实整页组件来自 src/generated/figmaRegistry.tsx 的 rawPageGroups。
// 这个文件保留仅为避免旧引用断裂；不要再从这里维护页面蓝图。
import type { SectionRef } from "./siteKit";

export type DemoPage = {
  id: string;
  name: string;
  source: string;
  description: string;
  sections: SectionRef[];
};

export const demoPages: DemoPage[] = [
  {
    id: "page-1",
    name: "Demo Page 1",
    source: "page-1.md",
    description: "对应 Figma 导出的第一套完整官网组合。",
    sections: [
      { family: "header", variant: "Header 1", source: "page-1.md", line: 2 },
      { family: "bento", variant: "Bento 1", source: "page-1.md", line: 389 },
      { family: "feature", variant: "Feature 2", source: "page-1.md", line: 737 },
      { family: "testimonial", variant: "Testimonial 4", source: "page-1.md", line: 851 },
      { family: "content", variant: "Content 1", source: "page-1.md", line: 905 },
      { family: "content", variant: "Content 2", source: "page-1.md", line: 1175 },
      { family: "pricing", variant: "Pricing 2", source: "page-1.md", line: 1343 },
      { family: "cta", variant: "CTA 4", source: "page-1.md", line: 1547 },
      { family: "testimonial", variant: "Testimonial 1", source: "page-1.md", line: 1831 },
      { family: "blog", variant: "Blog 1", source: "page-1.md", line: 2038 },
      { family: "faqs", variant: "FAQs 1", source: "page-1.md", line: 2116 },
      { family: "footer", variant: "Footer 1", source: "page-1.md", line: 2207 },
    ],
  },
  {
    id: "page-2",
    name: "Demo Page 2",
    source: "page-2.md",
    description: "对应 Figma 导出的第二套完整官网组合。",
    sections: [
      { family: "header", variant: "Header 4", source: "page-2.md", line: 2 },
      { family: "logo", variant: "Logo 3", source: "page-2.md", line: 426 },
      { family: "feature", variant: "Feature 4", source: "page-2.md", line: 469 },
      { family: "testimonial", variant: "Testimonial 3", source: "page-2.md", line: 534 },
      { family: "bento", variant: "Bento 4", source: "page-2.md", line: 581 },
      { family: "pricing", variant: "Pricing 3", source: "page-2.md", line: 911 },
      { family: "testimonial", variant: "Testimonial 5", source: "page-2.md", line: 1070 },
      { family: "blog", variant: "Blog 4", source: "page-2.md", line: 1204 },
      { family: "faqs", variant: "FAQs 3", source: "page-2.md", line: 1286 },
      { family: "cta", variant: "CTA 2", source: "page-2.md", line: 1368 },
      { family: "footer", variant: "Footer 3", source: "page-2.md", line: 1443 },
    ],
  },
  {
    id: "pricing",
    name: "Pricing Page",
    source: "pricing.md",
    description: "价格页组合，复用 pricing、logo、testimonial、FAQ、CTA、footer 模块。",
    sections: [
      { family: "pricing", variant: "Pricing 3", source: "pricing.md", line: 55 },
      { family: "logo", variant: "Logo 3", source: "pricing.md", line: 214 },
      { family: "testimonial", variant: "Testimonial 3", source: "pricing.md", line: 443 },
      { family: "faqs", variant: "FAQs 3", source: "pricing.md", line: 490 },
      { family: "cta", variant: "CTA 2", source: "pricing.md", line: 572 },
      { family: "footer", variant: "Footer 3", source: "pricing.md", line: 647 },
    ],
  },
  {
    id: "contact",
    name: "Contact Page",
    source: "contact.md",
    description: "联系页组合，复用 contact、FAQ、CTA、footer 模块。",
    sections: [
      { family: "contact", variant: "Contact 4", source: "contact.md", line: 55 },
      { family: "faqs", variant: "FAQs 3", source: "contact.md", line: 186 },
      { family: "cta", variant: "CTA 2", source: "contact.md", line: 268 },
      { family: "footer", variant: "Footer 3", source: "contact.md", line: 343 },
    ],
  },
  {
    id: "article",
    name: "Article Page",
    source: "arcitle.md",
    description: "文章详情页组合，包含文章正文头部和导出的 Blog/FAQ/CTA/Footer。",
    sections: [
      { family: "article", variant: "Article Detail", source: "arcitle.md", line: 1 },
      { family: "blog", variant: "Blog 4", source: "arcitle.md", line: 284 },
      { family: "faqs", variant: "FAQs 3", source: "arcitle.md", line: 365 },
      { family: "cta", variant: "CTA 2", source: "arcitle.md", line: 447 },
      { family: "footer", variant: "Footer 3", source: "arcitle.md", line: 522 },
    ],
  },
];
