// Legacy shim: 真实官网组件来自 src/generated/figmaRegistry.tsx。
// 这个文件保留仅为避免旧引用断裂；不要再从这里按视觉仿写 Figma 导出模块。
import type { ReactNode } from "react";
import {
  ArrowRight,
  Check,
  ChevronRight,
  Mail,
  MessageCircle,
  Phone,
  Sparkles,
} from "lucide-react";

export function asset(path: string) {
  return `${import.meta.env.BASE_URL}${path}`;
}

export function BrandMark({ corner = "round" }: { corner?: "round" | "circle" }) {
  return (
    <span className={`brand-mark ${corner === "circle" ? "brand-mark--circle" : ""}`} aria-hidden="true">
      <span />
      <span />
    </span>
  );
}

export function Button({
  children,
  variant = "primary",
  href = "#",
}: {
  children: ReactNode;
  variant?: "primary" | "secondary" | "ghost";
  href?: string;
}) {
  return (
    <a className={`kit-button kit-button--${variant}`} href={href}>
      {children}
    </a>
  );
}

export function SourceTag({ variant, source, line }: { variant: string; source: string; line?: number }) {
  return (
    <span className="source-tag">
      {variant} · {source}
      {line ? `:${line}` : ""}
    </span>
  );
}

export function Announcement({ text, action }: { text: string; action: string }) {
  return (
    <div className="announcement">
      <Sparkles size={16} aria-hidden="true" />
      <span>{text}</span>
      <a href="#modules">
        {action}
        <ArrowRight size={14} aria-hidden="true" />
      </a>
    </div>
  );
}

export function SectionIntro({
  eyebrow,
  title,
  description,
  align = "center",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "center" | "left";
}) {
  return (
    <div className={`section-intro section-intro--${align}`}>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {description ? <span>{description}</span> : null}
    </div>
  );
}

export function AvatarStack({ images, label }: { images: string[]; label?: string }) {
  return (
    <div className="avatar-stack">
      {images.map((image) => (
        <img key={image} src={asset(image)} alt="" />
      ))}
      {label ? <span>{label}</span> : null}
    </div>
  );
}

export function ProductMockup({ mode = "dashboard" }: { mode?: "dashboard" | "board" | "storage" }) {
  return (
    <div className={`product-mockup product-mockup--${mode}`}>
      <div className="mock-window">
        <div className="mock-window__bar">
          <i />
          <i />
          <i />
          <strong>Project Lazarus</strong>
        </div>
        <div className="mock-window__body">
          <div className="project-card">
            <span>Workspace 3</span>
            <h3>Project Lazarus</h3>
            <div className="progress">
              <i />
            </div>
            <AvatarStack
              images={[
                "Avatars/3d_avatar_13-1.png",
                "Avatars/3d_avatar_21-1.png",
                "Avatars/3d_avatar_24-1.png",
              ]}
            />
          </div>
          <div className="metric-card">
            <span>Tasks</span>
            <strong>24</strong>
          </div>
          <div className="metric-card">
            <span>Files</span>
            <strong>16</strong>
          </div>
          <div className="metric-card">
            <span>Hours</span>
            <strong>32</strong>
          </div>
        </div>
      </div>
      <div className="floating-menu">
        <span>Project</span>
        <strong>Status</strong>
        <span>Task name</span>
      </div>
    </div>
  );
}

export function CheckList({ items }: { items: string[] }) {
  return (
    <ul className="check-list">
      {items.map((item) => (
        <li key={item}>
          <Check size={16} aria-hidden="true" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export function ContactTiles() {
  return (
    <div className="contact-tiles">
      <article>
        <MessageCircle size={22} aria-hidden="true" />
        <div>
          <strong>Live Chat</strong>
          <span>Contact with customer services.</span>
        </div>
      </article>
      <article>
        <Phone size={22} aria-hidden="true" />
        <div>
          <strong>Schedule a Call</strong>
          <span>Ready 24/7 office hour only.</span>
        </div>
      </article>
      <article>
        <Mail size={22} aria-hidden="true" />
        <div>
          <strong>Email</strong>
          <span>support@majin.co</span>
        </div>
      </article>
    </div>
  );
}

export function ArrowLink({ children }: { children: ReactNode }) {
  return (
    <a className="arrow-link" href="#modules">
      {children}
      <ChevronRight size={16} aria-hidden="true" />
    </a>
  );
}
