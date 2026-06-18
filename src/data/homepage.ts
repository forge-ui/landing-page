// Legacy shim: 真实页面和 section 数据来自 src/generated/figmaRegistry.tsx。
// 这个文件保留仅为避免旧引用断裂；不要再从这里维护官网内容。
export type PricingPlan = {
  name: string;
  audience: string;
  monthly: number | "Custom";
  yearly: number | "Custom";
  description: string;
  cta: string;
  highlighted?: boolean;
  features: string[];
};

export const site = {
  announcement: "Forge UI 0.1.4 is ready for AI-assisted admin builds",
  announcementAction: "Read docs",
  brand: "Forge UI",
  nav: [
    { label: "Features", href: "#features" },
    { label: "Workflow", href: "#workflow" },
    { label: "Pricing", href: "#pricing" },
    { label: "Resources", href: "#resources" },
  ],
  hero: {
    label: "AI-ready React UI Kit",
    title: "Build professional SaaS back offices with one shared system.",
    description:
      "Forge turns repeated admin product work into reusable React components, design tokens, business templates, and agent skills for consistent delivery.",
    primaryCta: "Start with Forge",
    secondaryCta: "Preview components",
    discount: "Open-source core, production-oriented templates, AI-ready rules.",
  },
  stats: [
    { value: "70+", label: "Component primitives" },
    { value: "12", label: "Business page patterns" },
    { value: "1", label: "Shared agent workflow" },
  ],
  logos: ["ChatSphere", "GlobeTrek", "Swift", "Logix", "Kraft"],
};

export const featureCards = [
  {
    title: "Design tokens first",
    description:
      "Colors, radius, density, typography, and surface rules stay centralized instead of drifting page by page.",
    meta: "Stable visual baseline",
  },
  {
    title: "Business templates",
    description:
      "Dashboard, CRUD, settings, files, invoices, teams, and workflow pages can start from proven structures.",
    meta: "Less blank-page work",
  },
  {
    title: "Agent-ready skill",
    description:
      "Codex reads the local Forge skill before changing pages, so it composes sections instead of hand-rolling UI.",
    meta: "Repeatable AI output",
  },
  {
    title: "React production path",
    description:
      "Vite, TypeScript, responsive CSS, and reusable section contracts keep the homepage easy to ship and modify.",
    meta: "Clean implementation",
  },
];

export const workflowCards = [
  {
    title: "Capture the business",
    text: "Define audience, product claim, proof points, conversion target, and section order before touching code.",
  },
  {
    title: "Choose sections",
    text: "Pick from hero, logo strip, feature grid, bento proof, pricing, testimonials, articles, FAQ, contact, and footer.",
  },
  {
    title: "Replace content safely",
    text: "Edit data in one place, keep tokens and spacing intact, then verify desktop and mobile with a real browser.",
  },
];

export const proofPoints = [
  "AppLayout and data-dense component patterns",
  "Tailwind v4 token alignment for Forge consumers",
  "Reusable content model for business-specific websites",
  "Original Figma export retained as source reference",
];

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    audience: "for personal projects",
    monthly: 0,
    yearly: 0,
    description: "Use the core system to prototype a small SaaS surface.",
    cta: "Get started",
    features: [
      "React component primitives",
      "Design token baseline",
      "Starter homepage sections",
      "Local Codex skill reference",
    ],
  },
  {
    name: "Team",
    audience: "for product teams",
    monthly: 29,
    yearly: 24,
    highlighted: true,
    description: "A practical path for teams standardizing admin UI delivery.",
    cta: "Start team trial",
    features: [
      "Everything in Starter",
      "Business template playbooks",
      "Section assembly workflow",
      "Review checklist for agents",
    ],
  },
  {
    name: "Enterprise",
    audience: "for organizations",
    monthly: "Custom",
    yearly: "Custom",
    description: "Adapt Forge to internal design systems and delivery rules.",
    cta: "Contact us",
    features: [
      "Custom page taxonomy",
      "Private component guidance",
      "Agent workflow hardening",
      "Design and code governance",
    ],
  },
];

export const testimonials = [
  {
    quote:
      "Forge gives the agent a real product vocabulary. It stops improvising and starts composing from the same rules our team uses.",
    name: "Jackson Junction",
    role: "Product Engineering Lead",
    avatar: "Avatars/3d_avatar_13-3.png",
  },
  {
    quote:
      "The homepage source is now structured enough that changing positioning no longer means hunting through generated markup.",
    name: "Max Mockup",
    role: "Design Systems",
    avatar: "Avatars/3d_avatar_24-3.png",
  },
  {
    quote:
      "We can keep the Figma flavor, but still ship normal React sections that typecheck and respond cleanly on mobile.",
    name: "Alicia Blaze",
    role: "Frontend Engineer",
    avatar: "Avatars/3d_avatar_21-3.png",
  },
];

export const articles = [
  {
    title: "From Figma export to maintainable homepage system",
    category: "Workflow",
    image: "Blog/image.png",
  },
  {
    title: "How to keep AI-built admin pages visually consistent",
    category: "Agent design",
    image: "img.png",
  },
  {
    title: "A practical checklist for section-based SaaS websites",
    category: "Product",
    image: "img-1.png",
  },
];

export const faqs = [
  {
    question: "Where should I edit business copy?",
    answer:
      "Start with src/data/homepage.ts. It contains the visible copy, pricing, testimonials, articles, navigation, and proof points.",
  },
  {
    question: "Can I keep using the Figma export?",
    answer:
      "Yes. The original Markdown exports and images remain in the repository as references. Treat them as design source, not runtime code.",
  },
  {
    question: "How should Codex modify this project later?",
    answer:
      "Invoke the local forge-homepage-builder skill, pick a section plan, update content first, then change components only when the business structure requires it.",
  },
  {
    question: "Is this tied to a single brand?",
    answer:
      "No. The Forge UI baseline is data-driven, so the project can be re-positioned for another SaaS, platform, or product site.",
  },
];

export const footerGroups = [
  {
    title: "Product",
    links: ["Components", "Templates", "Tokens", "Skill"],
  },
  {
    title: "Resources",
    links: ["Docs", "Examples", "GitHub", "Roadmap"],
  },
  {
    title: "Company",
    links: ["About", "Contact", "Privacy", "Terms"],
  },
];
