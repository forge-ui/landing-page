// Legacy shim: 真实模块目录来自 src/generated/figmaRegistry.tsx 的 rawSectionGroups。
// 这个文件保留仅为避免旧引用断裂；不要再从这里维护 Figma 导出模块 catalog。
import type { LucideIcon } from "lucide-react";
import {
  Box,
  Brush,
  Component,
  Gauge,
  Layers,
  Moon,
  Palette,
  RefreshCcw,
  ShieldCheck,
  Sparkles,
  Workflow,
} from "lucide-react";

export type SectionFamily =
  | "header"
  | "logo"
  | "feature"
  | "bento"
  | "content"
  | "pricing"
  | "testimonial"
  | "blog"
  | "faqs"
  | "cta"
  | "footer"
  | "contact"
  | "team"
  | "article";

export type SectionRef = {
  family: SectionFamily;
  variant: string;
  source: string;
  line: number;
};

export type FeatureItem = {
  title: string;
  description: string;
  note?: string;
  badge?: string;
  icon: LucideIcon;
};

export type Plan = {
  name: string;
  audience: string;
  price: string;
  period: string;
  description: string;
  cta: string;
  featured?: boolean;
  features: string[];
};

export type Testimonial = {
  quote: string;
  title?: string;
  name: string;
  role: string;
  site: string;
  avatar: string;
};

export type ArticleCard = {
  category: string;
  title: string;
  description: string;
  readTime: string;
  image: string;
};

export const brand = {
  name: "Majin",
  announcement: "Majin UI Collection will be available in Framer soon!",
  announcementAction: "Learn more",
  nav: ["Features", "Why Majin?", "Resources", "Pricing"],
};

export const hero = {
  eyebrow: "✨ MajinAI 1.0 now available",
  optional: "(Beta Access)",
  title: "Nothing good to self-brainstormed",
  alternateTitle: "Enhance Your Workflow.",
  description:
    "Majin is a premium (SaaS) web template with 25+ sections and global component properties for fast and easy customization.",
  primaryCta: "Purchase now",
  secondaryCta: "Preview",
  emailPlaceholder: "Enter Your Email",
  emailCta: "Get started",
  discountPrefix: "Apply the code 'LUNA10' for a",
  discount: "10% discount!",
};

export const logos = ["ChatSphere", "GlobeTrek", "Swift", "Logix", "Kraft"];

export const featureSets: Record<"compact" | "expanded", FeatureItem[]> = {
  compact: [
    {
      title: "Why Majin?",
      description: "Majin UI Collection is build with a foundation components system.",
      note: "Mix-and match the components easily!",
      icon: Component,
    },
    {
      title: "What's Included",
      description: "You will receive the Majin Figma (.fig) source design file.",
      note: "Simply import the file and you're ready to set!",
      icon: Box,
    },
    {
      title: "Pixel Perfect",
      description: "WCAG 2.1+ compliant standards accessibility for legibility.",
      note: "Each color has a 10+ range of hue!",
      icon: ShieldCheck,
    },
    {
      title: "Free Updates",
      description: "Guaranteed free update including new Component and UI Element.",
      note: "Improvement to the latest Figma features!",
      icon: RefreshCcw,
    },
  ],
  expanded: [
    {
      title: "Why Majin?",
      description: "Build with foundation component system allowing you to customize easily!",
      badge: "New",
      icon: Component,
    },
    {
      title: "What's Included",
      description: "You'll receive the Figma file (.fig) simply import the file and you're ready to set!",
      icon: Box,
    },
    {
      title: "Pixel Perfect",
      description: "WCAG 2.1+ compliant standards accessibility for legibility!",
      badge: "New",
      icon: ShieldCheck,
    },
    {
      title: "Design Fast",
      description: "Simply change the Sections page with a click from the pre-build landing page!",
      icon: Gauge,
    },
    {
      title: "Art Direction",
      description: "Majin UI Collection is perfect for SaaS apps with modern minimalistic aesthetics!",
      badge: "New",
      icon: Brush,
    },
    {
      title: "Free Updates",
      description: "You'll be guaranteed a free lifetime update to the latest Figma features!",
      icon: RefreshCcw,
    },
    {
      title: "Light/Dark Theme",
      description: "Dynamically change the UI appearance to dark/light.",
      icon: Moon,
    },
    {
      title: "Figma Variables",
      description: "Build with Figma variables for consistency design.",
      icon: Palette,
    },
  ],
};

export const contentBlocks = [
  {
    kicker: "WORKS LIKE MAGIC",
    title: "Save you hours of designing from scratch.",
    description:
      "Majin is a premium (SaaS) web template with 25+ sections and global component properties for fast and easy customization.",
    bullets: ["Components", "Foundational system", "Design Fast", "Global component system"],
    image: "source/ [Upscaled].png",
  },
  {
    kicker: "WORKS LIKE MAGIC",
    title: "Simply import the file and you're ready to set.",
    description:
      "Save time and hassle-free the amount of the repetitive process with pre-build sections and global component properties.",
    bullets: ["Save time and hassle-free", "Design Faster + Manage Better", "Enhance Your Workflow"],
    image: "Noise & Texture.png",
  },
];

export const plans: Plan[] = [
  {
    name: "Personal",
    audience: "for personal",
    price: "$8",
    period: "/month, billed annually.",
    description: "Free-trial for 7 days",
    cta: "Get started",
    features: [
      "Lifetime update and improvements",
      "Figma design source file included",
      "W3 standard (AAA) for legibility",
      "Modern minimalism",
    ],
  },
  {
    name: "Teams",
    audience: "for teams",
    price: "$16",
    period: "/month, billed annually.",
    description: "Free-trial for 7 days",
    cta: "Get started",
    featured: true,
    features: [
      "Everything in Personal, plus:",
      "Lifetime update and improvements",
      "Figma design source file included",
      "W3 standard (AAA) for legibility",
      "Modern minimalism",
    ],
  },
  {
    name: "Enterprise",
    audience: "for enterprise",
    price: "Custom",
    period: "Available for custom pricing",
    description: "Perfect for organizations",
    cta: "Contact us",
    features: [
      "Everything in Personal +",
      "Dynamically dark/light themes",
      "Build with Figma variables",
      "Pause and cancel at anytime",
    ],
  },
];

export const testimonials: Testimonial[] = [
  {
    title: "Works like magic.",
    quote: "Majin works like magic, a true game-changer for seamless collaboration.",
    name: "Jackson Junction",
    role: "Founder",
    site: "website.com",
    avatar: "Avatars/3d_avatar_13-3.png",
  },
  {
    title: "Dream-work.",
    quote: "It adapts amazingly as a team makes it a super dream-work.",
    name: "Ava Aesthetics",
    role: "Product Manager",
    site: "website.com",
    avatar: "Avatars/3d_avatar_21-3.png",
  },
  {
    title: "Super detailed.",
    quote: "Beautifully present every works in a every metric-details.",
    name: "Ethan Element",
    role: "UI Designer",
    site: "website.com",
    avatar: "Avatars/3d_avatar_24-3.png",
  },
  {
    title: "Magical.",
    quote: "Simply a magical experience for any collaborative work.",
    name: "Noah Nexus",
    role: "Visual Designer",
    site: "website.com",
    avatar: "Avatars/3d_avatar_13-2.png",
  },
];

export const articles: ArticleCard[] = [
  {
    category: "Insight",
    title: "Planning ahead for the team to reach your goal faster",
    description:
      "You'll get a guaranteed free lifetime update and we will keep updating and improving to the latest Figma features.",
    readTime: "5 min read",
    image: "img.png",
  },
  {
    category: "News & Updates",
    title: "The ultimate collaborative tips to achieve teamwork",
    description:
      "You'll get a guaranteed free lifetime update and we will keep updating and improving to the latest Figma features.",
    readTime: "8 min read",
    image: "img-1.png",
  },
  {
    category: "Tips & Tricks",
    title: "Moodboard to dream-board with not much effort",
    description:
      "You'll get a guaranteed free lifetime update and we will keep updating and improving to the latest Figma features.",
    readTime: "3 min read",
    image: "Blog/image.png",
  },
];

export const faqs = [
  {
    question: "Question and answer",
    answer:
      "Helps you manage projects, focus on what's important, and organize work for seamless collaboration while stay in-context and well-connected in one workspace.",
  },
  {
    question: "Question and answer",
    answer: "Use the source sections as building blocks, then replace copy and assets per business.",
  },
  {
    question: "Question and answer",
    answer: "The component library keeps modules reusable without copying raw absolute-positioned export code.",
  },
];

export const team = [
  ["Jackson Junction", "Sr. Software Engineer", "I'm a byte-sized jokester.", "Avatars/3d_avatar_13.png"],
  ["Ava Aesthetics", "UX Researcher", "Turns user experience into user ecstasy.", "Avatars/3d_avatar_21-2.png"],
  ["Ethan Element", "Product Designer", "Move one pixel at a time, deliberately.", "Avatars/3d_avatar_24-2.png"],
  ["Mia Module", "Lead Project Manager", "Achieving success one milestone at a time.", "Avatars/3d_avatar_10.png"],
  ["Noah Nexus", "Visual/Digital Designer", "Flooding bunch of elements delightedly.", "Avatars/3d_avatar_12.png"],
  ["Max Mockup", "Head of Design", "Vomiting a lot of visuals aesthetically.", "Avatars/3d_avatar_8.png"],
];

export const moduleCatalog: Record<SectionFamily, { title: string; source: string; variants: string[] }> = {
  header: { title: "Header / Hero", source: "sections/header.md", variants: ["Header 1", "Header 4"] },
  logo: { title: "Logo Cloud", source: "sections/logo.md", variants: ["Logo 1", "Logo 3"] },
  feature: { title: "Feature Grid", source: "sections/feature.md", variants: ["Feature 2", "Feature 4"] },
  bento: { title: "Bento / Product Proof", source: "sections/bento.md", variants: ["Bento 1", "Bento 4"] },
  content: { title: "Content Blocks", source: "sections/content.md", variants: ["Content 1", "Content 2"] },
  pricing: { title: "Pricing", source: "sections/pricing.md", variants: ["Pricing 2", "Pricing 3"] },
  testimonial: {
    title: "Testimonials",
    source: "sections/testimonial.md",
    variants: ["Testimonial 1", "Testimonial 3", "Testimonial 4", "Testimonial 5"],
  },
  blog: { title: "Blog", source: "sections/blog.md", variants: ["Blog 1", "Blog 4"] },
  faqs: { title: "FAQs", source: "sections/faqs.md", variants: ["FAQs 1", "FAQs 3"] },
  cta: { title: "CTA", source: "sections/call to action.md", variants: ["CTA 2", "CTA 4"] },
  footer: { title: "Footer", source: "sections/footer.md", variants: ["Footer 1", "Footer 3"] },
  contact: { title: "Contact", source: "sections/contact.md", variants: ["Contact 4"] },
  team: { title: "Team", source: "sections/team.md", variants: ["Team 1", "Team 2"] },
  article: { title: "Article Detail", source: "arcitle.md", variants: ["Article Detail"] },
};

export const moduleIcons: Record<SectionFamily, LucideIcon> = {
  header: Sparkles,
  logo: Layers,
  feature: Component,
  bento: Workflow,
  content: Box,
  pricing: Gauge,
  testimonial: ShieldCheck,
  blog: Brush,
  faqs: Sparkles,
  cta: RefreshCcw,
  footer: Layers,
  contact: Palette,
  team: Component,
  article: Brush,
};
