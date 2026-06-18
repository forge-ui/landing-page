// Legacy shim: 真实 section 组件来自 src/generated/figmaRegistry.tsx。
// 这个文件保留仅为避免旧引用断裂；不要再从这里按视觉仿写 Figma 导出模块。
import { useState, type ReactNode } from "react";
import { ArrowRight, Check, ChevronDown, Star } from "lucide-react";
import {
  articles,
  brand,
  contentBlocks,
  faqs,
  featureSets,
  hero,
  logos,
  plans,
  team,
  testimonials,
  type SectionRef,
} from "../data/siteKit";
import {
  Announcement,
  ArrowLink,
  asset,
  AvatarStack,
  BrandMark,
  Button,
  CheckList,
  ContactTiles,
  ProductMockup,
  SectionIntro,
  SourceTag,
} from "./base";

const heroAvatars = ["Avatars/3d_avatar_13-2.png", "Avatars/3d_avatar_21.png", "Avatars/3d_avatar_24-2.png"];

export function renderSection(ref: SectionRef) {
  switch (ref.family) {
    case "header":
      return <HeaderSection key={sectionKey(ref)} refData={ref} />;
    case "logo":
      return <LogoSection key={sectionKey(ref)} refData={ref} />;
    case "feature":
      return <FeatureSection key={sectionKey(ref)} refData={ref} />;
    case "bento":
      return <BentoSection key={sectionKey(ref)} refData={ref} />;
    case "content":
      return <ContentSection key={sectionKey(ref)} refData={ref} />;
    case "pricing":
      return <PricingSection key={sectionKey(ref)} refData={ref} />;
    case "testimonial":
      return <TestimonialSection key={sectionKey(ref)} refData={ref} />;
    case "blog":
      return <BlogSection key={sectionKey(ref)} refData={ref} />;
    case "faqs":
      return <FaqSection key={sectionKey(ref)} refData={ref} />;
    case "cta":
      return <CtaSection key={sectionKey(ref)} refData={ref} />;
    case "footer":
      return <FooterSection key={sectionKey(ref)} refData={ref} />;
    case "contact":
      return <ContactSection key={sectionKey(ref)} refData={ref} />;
    case "team":
      return <TeamSection key={sectionKey(ref)} refData={ref} />;
    case "article":
      return <ArticleSection key={sectionKey(ref)} refData={ref} />;
    default:
      return null;
  }
}

function sectionKey(ref: SectionRef) {
  return `${ref.source}-${ref.line}-${ref.family}-${ref.variant}`;
}

function SectionShell({
  refData,
  children,
  className = "",
}: {
  refData: SectionRef;
  children: ReactNode;
  className?: string;
}) {
  return (
    <section className={`kit-section ${className}`} data-module={refData.family} data-variant={refData.variant}>
      <div className="container">
        <SourceTag variant={refData.variant} source={refData.source} line={refData.line} />
        {children}
      </div>
    </section>
  );
}

function HeaderSection({ refData }: { refData: SectionRef }) {
  const emailVariant = refData.variant === "Header 4";
  return (
    <SectionShell refData={refData} className="hero-module">
      <Announcement text={brand.announcement} action={brand.announcementAction} />
      <nav className="site-nav" aria-label="Demo navigation">
        <a className="brand-lockup" href="#top">
          <BrandMark />
          <span>{brand.name}</span>
        </a>
        <div>
          {brand.nav.map((item) => (
            <a key={item} href="#modules">
              {item}
            </a>
          ))}
        </div>
        <Button href="#pricing">{emailVariant ? "Purchase" : "Purchase now"}</Button>
      </nav>
      <div className={emailVariant ? "hero-grid hero-grid--email" : "hero-grid"}>
        <div className="hero-copy">
          <p className="eyebrow">
            {hero.eyebrow} <span>{emailVariant ? "Beta access" : hero.optional}</span>
          </p>
          <h1>{emailVariant ? hero.alternateTitle : hero.title}</h1>
          <p>{hero.description}</p>
          {emailVariant ? (
            <form className="email-capture" onSubmit={(event) => event.preventDefault()}>
              <input type="email" placeholder={hero.emailPlaceholder} aria-label={hero.emailPlaceholder} />
              <button type="submit">{hero.emailCta}</button>
            </form>
          ) : (
            <div className="hero-actions">
              <Button>{hero.primaryCta}</Button>
              <Button variant="secondary">{hero.secondaryCta}</Button>
            </div>
          )}
          <p className="micro-copy">
            {hero.discountPrefix} <strong>{hero.discount}</strong>
          </p>
        </div>
        <ProductMockup mode={emailVariant ? "board" : "dashboard"} />
      </div>
      {!emailVariant ? (
        <div className="hero-bottom">
          <AvatarStack images={heroAvatars} label="10M+ Used by teams and professionals." />
        </div>
      ) : null}
    </SectionShell>
  );
}

function LogoSection({ refData }: { refData: SectionRef }) {
  const stats = refData.variant === "Logo 3";
  return (
    <SectionShell refData={refData} className="logo-module">
      {stats ? (
        <div className="logo-stats">
          <strong>100%</strong>
          <span>Workflow enhances + better</span>
          <strong>100+</strong>
          <span>Worldwide users and teams</span>
        </div>
      ) : (
        <SectionIntro
          eyebrow="over 10+ companies"
          title="Customer from top-tier companies"
          description="We work with brands, corporations, and startups around the globe."
        />
      )}
      <div className="logo-cloud">
        {logos.map((logo) => (
          <span key={logo}>{logo}</span>
        ))}
      </div>
      {stats ? <p className="logo-note">Join a community of brands, corporations, and startups worldwide.</p> : null}
    </SectionShell>
  );
}

function FeatureSection({ refData }: { refData: SectionRef }) {
  const items = refData.variant === "Feature 4" ? featureSets.expanded : featureSets.compact;
  return (
    <SectionShell refData={refData}>
      <SectionIntro
        eyebrow="majin features"
        title="Enhancing your workflow"
        description="Majin is a premium (SAAS) web template with fast and easy customization."
      />
      <div className={`feature-grid feature-grid--${items.length > 4 ? "expanded" : "compact"}`}>
        {items.map((item) => {
          const Icon = item.icon;
          return (
            <article className="feature-card" key={item.title}>
              <div className="icon-shell">
                <Icon size={22} aria-hidden="true" />
              </div>
              <div className="card-title-row">
                <h3>{item.title}</h3>
                {item.badge ? <span>{item.badge}</span> : null}
              </div>
              <p>{item.description}</p>
              {item.note ? <small>{item.note}</small> : null}
            </article>
          );
        })}
      </div>
    </SectionShell>
  );
}

function BentoSection({ refData }: { refData: SectionRef }) {
  const compact = refData.variant === "Bento 4";
  return (
    <SectionShell refData={refData} className="bento-module">
      <div className="bento-layout">
        <div>
          <SectionIntro
            align="left"
            eyebrow="What's Included"
            title={compact ? "You'll receive the Figma file." : "Nothing good to self-brainstormed"}
            description="Simply import the file and you're ready to set with dashboard, workspace, task, and content modules."
          />
          <Button>
            {compact ? "Preview" : "Purchase now"}
            <ArrowRight size={16} aria-hidden="true" />
          </Button>
        </div>
        <ProductMockup mode={compact ? "storage" : "dashboard"} />
      </div>
    </SectionShell>
  );
}

function ContentSection({ refData }: { refData: SectionRef }) {
  const block = refData.variant === "Content 2" ? contentBlocks[1] : contentBlocks[0];
  const reverse = refData.variant === "Content 2";
  return (
    <SectionShell refData={refData} className="content-module">
      <div className={`content-layout ${reverse ? "content-layout--reverse" : ""}`}>
        <div className="media-frame">
          <img src={asset(block.image)} alt="" />
        </div>
        <div>
          <SectionIntro align="left" eyebrow={block.kicker} title={block.title} description={block.description} />
          <CheckList items={block.bullets} />
        </div>
      </div>
    </SectionShell>
  );
}

function PricingSection({ refData }: { refData: SectionRef }) {
  const twoCards = refData.variant === "Pricing 2";
  return (
    <SectionShell refData={refData} className="pricing-module" >
      <SectionIntro
        eyebrow="simple pricing plan"
        title="One tool for your workflow"
        description="Transparent pricing plan with free for teams to try."
      />
      <div className="billing-toggle" aria-label="Billing tabs">
        <span>Monthly</span>
        <strong>Yearly</strong>
      </div>
      <div className={`pricing-grid pricing-grid--${twoCards ? "two" : "three"}`}>
        {plans.slice(0, twoCards ? 2 : 3).map((plan) => (
          <article className={`pricing-card ${plan.featured ? "pricing-card--featured" : ""}`} key={plan.name}>
            {plan.featured ? <span className="popular">Most Popular</span> : null}
            <p>{plan.audience}</p>
            <h3>{plan.name}</h3>
            <div className="price">
              <strong>{plan.price}</strong>
              <span>{plan.period}</span>
            </div>
            <small>{plan.description}</small>
            <Button variant={plan.featured ? "primary" : "secondary"}>{plan.cta}</Button>
            <CheckList items={plan.features} />
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function TestimonialSection({ refData }: { refData: SectionRef }) {
  const spotlight = refData.variant === "Testimonial 3" || refData.variant === "Testimonial 4";
  const inline = refData.variant === "Testimonial 5";
  if (spotlight) {
    const item = testimonials[0];
    return (
      <SectionShell refData={refData} className="testimonial-module">
        <article className="testimonial-spotlight">
          <Star size={24} aria-hidden="true" />
          <p>"It adapts amazingly as a team makes it a dream work simply a magical experience for a collaborative work."</p>
          <AvatarStack images={[item.avatar]} label={`${item.name} · ${item.role}`} />
        </article>
      </SectionShell>
    );
  }
  return (
    <SectionShell refData={refData} className="testimonial-module">
      {!inline ? (
        <SectionIntro
          eyebrow="testimonial"
          title="Here's what people says"
          description="Meet our talented team developers to designers."
        />
      ) : null}
      <div className={inline ? "testimonial-row" : "testimonial-grid"}>
        {testimonials.map((item) => (
          <article className="testimonial-card" key={item.name}>
            <strong>{item.title}</strong>
            <p>{item.quote}</p>
            <AvatarStack images={[item.avatar]} label={`${item.name} · ${item.role}`} />
            <small>{item.site}</small>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function BlogSection({ refData }: { refData: SectionRef }) {
  return (
    <SectionShell refData={refData}>
      <div className="split-heading">
        <SectionIntro
          align="left"
          eyebrow="LATEST ARTICLES"
          title="Stay inform with the latest"
          description={refData.variant === "Blog 4" ? "Majin is a premium (B2B/SAAS) web template." : undefined}
        />
        <ArrowLink>View all blog</ArrowLink>
      </div>
      <div className={`blog-grid ${refData.variant === "Blog 4" ? "blog-grid--editorial" : ""}`}>
        {articles.map((article) => (
          <article className="blog-card" key={article.title}>
            <img src={asset(article.image)} alt="" />
            <div>
              <span>{article.category}</span>
              <h3>{article.title}</h3>
              <p>{article.description}</p>
              <ArrowLink>Read more</ArrowLink>
              <small>{article.readTime}</small>
            </div>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function FaqSection({ refData }: { refData: SectionRef }) {
  const [open, setOpen] = useState(0);
  return (
    <SectionShell refData={refData} className="faq-module">
      <div className="faq-layout">
        <div>
          <SectionIntro
            align="left"
            eyebrow={refData.variant === "FAQs 3" ? "common questions" : "FAQs"}
            title="Frequently asked questions"
            description="Majin is a premium (SAAS) web template with fast and easy customization."
          />
          <ContactTiles />
        </div>
        <div className="faq-list">
          {faqs.map((item, index) => (
            <article className={`faq-item ${open === index ? "open" : ""}`} key={`${item.question}-${index}`}>
              <button type="button" onClick={() => setOpen(open === index ? -1 : index)}>
                <span>{item.question}</span>
                <ChevronDown size={18} aria-hidden="true" />
              </button>
              {open === index ? <p>{item.answer}</p> : null}
            </article>
          ))}
          <div className="faq-help">
            <span>Need more help?</span>
            <ArrowLink>contact us</ArrowLink>
          </div>
        </div>
      </div>
    </SectionShell>
  );
}

function CtaSection({ refData }: { refData: SectionRef }) {
  return (
    <SectionShell refData={refData} className="cta-module">
      <div className="cta-box">
        <div>
          <p>get started</p>
          <h2>Enhance your workflow, today.</h2>
          <AvatarStack images={heroAvatars} />
        </div>
        <form className="email-capture" onSubmit={(event) => event.preventDefault()}>
          <input type="email" placeholder="Enter Your Email" aria-label="Enter Your Email" />
          <button type="submit">Get started</button>
        </form>
      </div>
    </SectionShell>
  );
}

function FooterSection({ refData }: { refData: SectionRef }) {
  const expanded = refData.variant === "Footer 3";
  const groups = [
    ["Workflow", "Overview", "For Personal", "For Business"],
    ["Company", "About us", "Meet the Team", "Careers", "Press"],
    ["Resources", "Blog", "Community", "Documentation", "Support", "Tutorials"],
    ["Features", "Collaboration", "Flexibility", "Insights", "Productivity", "Visibility"],
  ];
  return (
    <SectionShell refData={refData} className="footer-module">
      {expanded ? <CtaSection refData={{ ...refData, family: "cta", variant: "CTA nested" }} /> : null}
      <footer className="footer-grid">
        <div>
          <BrandMark />
          <h3>{brand.name}</h3>
          <p>Stay in-context and well-connected in one workspace.</p>
          <small>Universe, Galaxies 16018, Milky Way.</small>
        </div>
        {groups.map(([title, ...links]) => (
          <div className="footer-column" key={title}>
            <strong>{title}</strong>
            {links.map((link) => (
              <a href="#modules" key={link}>
                {link}
              </a>
            ))}
          </div>
        ))}
      </footer>
      <div className="footer-bottom">
        <span>©2024 – Majin.co. All Rights Reserved.</span>
        <span>Term and Conditions · Privacy Policy</span>
      </div>
    </SectionShell>
  );
}

function ContactSection({ refData }: { refData: SectionRef }) {
  return (
    <SectionShell refData={refData} className="contact-module">
      <div className="contact-layout">
        <div>
          <SectionIntro
            align="left"
            eyebrow="customer support"
            title="Have any question? drop a message"
            description="Majin is a premium (B2B/SAAS) web template."
          />
          <ContactTiles />
        </div>
        <form className="contact-form" onSubmit={(event) => event.preventDefault()}>
          <label>
            Name <span>*</span>
            <input placeholder="Your Full name" />
          </label>
          <label>
            Email <span>*</span>
            <input placeholder="Your Email Address" type="email" />
          </label>
          <label>
            Message <span>*</span>
            <textarea placeholder="Your message..." />
          </label>
          <button type="submit">Send message</button>
        </form>
      </div>
    </SectionShell>
  );
}

function TeamSection({ refData }: { refData: SectionRef }) {
  return (
    <SectionShell refData={refData}>
      <SectionIntro eyebrow="meet the team" title="Meet behind the Majin" description="Meet our talented team developers to designers." />
      <div className="team-grid">
        {team.map(([name, role, bio, image]) => (
          <article className="team-card" key={name}>
            <img src={asset(image)} alt="" />
            <h3>{name}</h3>
            <span>{role}</span>
            <p>{bio}</p>
            <small>personal-site.com</small>
          </article>
        ))}
      </div>
    </SectionShell>
  );
}

function ArticleSection({ refData }: { refData: SectionRef }) {
  return (
    <SectionShell refData={refData} className="article-module">
      <article className="article-detail">
        <div className="article-hero">
          <span>new article · majin board</span>
          <h1>Manage projects, focus on what's important, and organize work.</h1>
          <p>Helps you manage projects one place for seamless collaboration.</p>
          <AvatarStack images={["Avatars/3d_avatar_13-3.png"]} label="Noah Nexus · Friday, 17 August · 8 min read" />
        </div>
        <img src={asset("Blog/image.png")} alt="" />
        <div className="article-body">
          <h2>Streamline your projects</h2>
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          <h2>Prioritize effectively</h2>
          <p>
            Integer consequat ex id tortor molestie accumsan. Quisque egestas, mi sed porta auctor, turpis sapien
            dignissim purus, et volutpat urna lorem blandit lectus.
          </p>
        </div>
      </article>
    </SectionShell>
  );
}
