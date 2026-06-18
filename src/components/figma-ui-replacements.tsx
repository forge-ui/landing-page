import type { CSSProperties } from "react";
import {
  Aperture,
  AppWindow,
  ArrowUpRight,
  Check,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  CircleDot,
  Eye,
  Figma,
  FileText,
  Folder,
  Gift,
  Globe2,
  Grid2X2,
  MessageCircle,
  Palette,
  Settings2,
  Sparkles,
  Tag,
  UsersRound,
  X,
} from "lucide-react";

type ReplacementProps = {
  src: string;
  style?: CSSProperties;
};

type VectorGlyphProps = {
  style?: CSSProperties;
};

type IconGlyphProps = {
  icon?: string;
  style?: CSSProperties;
};

type GeneratedArtworkProps = {
  style?: CSSProperties;
};

type FlagGlyphProps = {
  flag: string;
  style?: CSSProperties;
};

type CompanyLogoProps = {
  id: string;
};

const transparentAssets = [
  "/figma-crops/header-2/transparent-27x27.png",
];

const pointerAssets = {
  blue: "/figma-restoration/page-1/cursor-blue-24x24.svg",
  orange: "/figma-restoration/page-1/cursor-orange-24x24.svg",
  green: "/figma-restoration/page-1/cursor-green-24x24.svg",
  red: "/figma-restoration/page-1/cursor-red-24x24.svg",
  brand: "/figma-restoration/page-1/cursor-brand-24x24.svg",
} as const;

export function FigmaUiReplacement({ src, style }: ReplacementProps) {
  if (transparentAssets.includes(src)) {
    return <span aria-hidden="true" style={style} />;
  }

  return <img alt="" src={src} style={{ display: "block", objectFit: "fill", ...style }} />;
}

export function FigmaVectorGlyph({ style }: VectorGlyphProps) {
  const { background, ...rest } = style ?? {};
  const color = typeof background === "string" ? background : "var(--text-neutral-secondary, #36393F)";

  return <FigmaIconGlyph icon={inferVectorIcon(style)} style={{ ...rest, color }} />;
}

export function FigmaIconGlyph({ icon = "dot", style }: IconGlyphProps) {
  const { background, ...rest } = style ?? {};
  const color = typeof background === "string" ? background : style?.color;

  if (icon === "pointer") {
    const pointerAsset = pointerAssetForBackground(background);

    return (
      <span
        aria-hidden="true"
        className="figma-vector-glyph figma-icon-pointer"
        style={{ ...rest, backgroundImage: `url("${pointerAsset}")` }}
      />
    );
  }

  const Icon = iconGlyphForName(icon);

  return (
    <span aria-hidden="true" className={`figma-vector-glyph figma-icon-${icon}`} style={{ ...rest, color }}>
      <Icon />
    </span>
  );
}

export function FigmaGeneratedArtwork({ style }: GeneratedArtworkProps) {
  const width = readSize(style?.width);
  const height = readSize(style?.height);

  if (width && height && (width >= 900 || height >= 560)) {
    return <span aria-hidden="true" data-figma-generated-artwork="hidden" style={{ ...style, display: "none" }} />;
  }

  return (
    <div aria-hidden="true" className="figma-generated-artwork figma-lazarus-banner-art" style={style}>
      <div className="figma-lazarus-banner-glow" />
      <div className="figma-lazarus-circuit figma-lazarus-circuit-a" />
      <div className="figma-lazarus-circuit figma-lazarus-circuit-b" />
      <div className="figma-lazarus-circuit figma-lazarus-circuit-c" />
      <div className="figma-lazarus-banner-noise" />
    </div>
  );
}

export function FigmaDecorativeShape({ style }: GeneratedArtworkProps) {
  return (
    <div aria-hidden="true" className="figma-decorative-shape figma-testimonial-orbit" style={style}>
      <span />
      <i />
    </div>
  );
}

export function FigmaFlagGlyph({ flag, style }: FlagGlyphProps) {
  const size = readSize(style?.width) ?? 20;
  const label = flagGlyphs[flag as keyof typeof flagGlyphs] ?? flagGlyphs.english;

  return (
    <span
      aria-hidden="true"
      className="figma-flag-glyph"
      style={{
        ...style,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        background: "transparent",
        borderRadius: 999,
        fontSize: Math.max(14, size),
        lineHeight: 1,
      }}
    >
      {label}
    </span>
  );
}

const flagGlyphs = {
  palestine: "🇵🇸",
  indonesia: "🇮🇩",
  china: "🇨🇳",
  english: "🇺🇸",
  russian: "🇷🇺",
} as const;

const companyLogos = {
  "1": { width: 186, label: "ChatSphere", labelX: 44, icon: "chat" },
  "2": { width: 179, label: "globetrek", labelX: 46, icon: "globe" },
  "3": { width: 106, label: "swift", labelX: 42, icon: "swift" },
  "4": { width: 117, label: "Logix", labelX: 44, icon: "logix" },
  "5": { width: 91, label: "KRAFT", labelX: 0, icon: "kraft" },
} as const;

export function FigmaCompanyLogo({ id }: CompanyLogoProps) {
  const logo = companyLogos[id as keyof typeof companyLogos] ?? companyLogos["1"];
  const textStyle = {
    fill: "#6B7280",
    fontFamily: '"Satoshi", "Onest", Inter, ui-sans-serif, system-ui, sans-serif',
    fontSize: logo.icon === "kraft" ? 31 : logo.icon === "globe" ? 27 : 24,
    fontWeight: logo.icon === "kraft" ? 900 : 800,
    letterSpacing: logo.icon === "kraft" ? -0.8 : 0,
  };

  return (
    <svg
      aria-hidden="true"
      data-company-logo={id}
      fill="none"
      height="40"
      viewBox={`0 0 ${logo.width} 40`}
      width={logo.width}
      xmlns="http://www.w3.org/2000/svg"
    >
      <CompanyLogoMark icon={logo.icon} />
      <text dominantBaseline="middle" style={textStyle} x={logo.labelX} y="20">
        {logo.label}
      </text>
    </svg>
  );
}

function CompanyLogoMark({ icon }: { icon: string }) {
  if (icon === "kraft") return null;

  if (icon === "chat") {
    return (
      <g stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
        <circle cx="20" cy="20" r="15" />
        <path d="M13.5 18.5c1.8 2 3.8 2 5.6 0M21.5 18.5c1.8 2 3.8 2 5.6 0M14.5 25.5c3.8 3.1 7.8 3.1 11.6 0" />
      </g>
    );
  }

  if (icon === "globe") {
    return (
      <g stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
        <path d="M7 24h26M10 29h20M13 34h14" />
        <path d="M13 20a8 8 0 0 1 16 0" />
        <path d="M20 8v5M11.5 11.5l3.5 3.5M28.5 11.5 25 15M5 18h5M30 18h5" />
      </g>
    );
  }

  if (icon === "swift") {
    return (
      <g stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3">
        <path d="M6 14h20c4.5 0 5 6 1 7.5" />
        <path d="M4 22h18c4.5 0 5 6 1 7.5" />
        <path d="M14 7h12c4.5 0 5 6 1 7.5" />
      </g>
    );
  }

  return (
    <g stroke="#6B7280" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.6">
      <path d="M20 9 31 20 20 31 9 20 20 9Z" />
      <path d="M20 2v4M20 34v4M2 20h4M34 20h4M7.2 7.2l2.9 2.9M29.9 29.9l2.9 2.9M32.8 7.2l-2.9 2.9M10.1 29.9l-2.9 2.9" />
    </g>
  );
}

function ProjectLazarusVisual({ style }: { style?: CSSProperties }) {
  return (
    <div aria-hidden="true" className="figma-ui-visual figma-project-visual" style={style}>
      <div className="figma-ui-noise" />
      <div className="figma-frosted-mask" />
      <div className="figma-lazarus-card">
        <div className="figma-mini-banner figma-mini-banner-purple">
          <div className="figma-circuit-lines" />
          <div className="figma-eye-bubble">
            <Eye size={30} strokeWidth={2.5} />
          </div>
        </div>
        <h3>Project Lazarus</h3>
        <div className="figma-card-meta">
          <span>
            <Grid2X2 size={13} />
            Workspace 3
          </span>
          <span>
            <UsersRound size={13} />
            Member 11
          </span>
        </div>
        <div className="figma-progress-label">56%</div>
        <div className="figma-progress-track">
          <span />
        </div>
        <div className="figma-card-actions">
          <div className="figma-avatar-stack">
            <img alt="" src="/Avatars/3d_avatar_13.png" />
            <img alt="" src="/Avatars/3d_avatar_21.png" />
            <b>+9</b>
          </div>
          <div className="figma-action-pills">
            <span>
              <FileText size={13} />
              24
            </span>
            <span>
              <MessageCircle size={13} />
              128
            </span>
          </div>
        </div>
        <div className="figma-workspace-button">Workspace</div>
      </div>

      <div className="figma-floating-note figma-floating-note-top">
        <Folder size={22} />
        <span>
          <strong>What's Included</strong>
          <small>You'll receive the Figma file (.fig)</small>
        </span>
      </div>
      <div className="figma-caption figma-caption-blue">
        <FigmaPointerAsset tone="blue" />
        <b>Alicia</b>
      </div>
      <div className="figma-caption figma-caption-orange">
        <FigmaPointerAsset tone="orange" />
        <b>Ava</b>
      </div>
      <div className="figma-profile-chip">
        <img alt="" src="/Avatars/3d_avatar_8.png" />
        <span>Ethan E.</span>
        <small>
          <Sparkles size={12} fill="currentColor" />
          16
        </small>
      </div>
    </div>
  );
}

function DashboardArtwork({ src, style }: ReplacementProps) {
  const tone = pickTone(src);

  return (
    <div aria-hidden="true" className={`figma-ui-visual figma-dashboard-art figma-tone-${tone}`} style={style}>
      <div className="figma-ui-noise" />
      <div className="figma-dashboard-window">
        <div className="figma-window-controls">
          <i />
          <i />
          <i />
        </div>
        <MiniBrowserArtwork src={src} />
      </div>
      <div className="figma-dashboard-card">
        <IconBadge icon={tone} />
        <strong>{dashboardTitle(tone)}</strong>
        <span>{dashboardCaption(tone)}</span>
      </div>
    </div>
  );
}

function MiniBrowserArtwork({ src, style }: ReplacementProps) {
  const tone = pickTone(src);
  const Icon = iconForTone(tone);

  return (
    <div aria-hidden="true" className={`figma-mini-art figma-tone-${tone}`} style={style}>
      <div className="figma-mini-window">
        <div className="figma-window-controls">
          <i />
          <i />
          <i />
        </div>
        <div className="figma-mini-screen">
          <div className="figma-circuit-lines" />
          <div className="figma-mini-icon">
            <Icon size={26} strokeWidth={2.4} />
          </div>
        </div>
      </div>
    </div>
  );
}

function GradientOverlay({ style }: { style?: CSSProperties }) {
  return (
    <div aria-hidden="true" className="figma-gradient-overlay" style={style}>
      <span />
    </div>
  );
}

function WorkflowStrip({ style }: { style?: CSSProperties }) {
  return (
    <div aria-hidden="true" className="figma-workflow-strip" style={style}>
      {["Design", "Build", "Ship", "Iterate"].map((label, index) => (
        <span key={label}>
          <IconBadge icon={index % 2 === 0 ? "brand" : "blue"} />
          {label}
        </span>
      ))}
    </div>
  );
}

function IconBadge({ icon, style }: { icon: string; style?: CSSProperties }) {
  const Icon = iconForTone(icon);

  return (
    <span aria-hidden="true" className={`figma-icon-badge figma-tone-${icon}`} style={style}>
      <Icon size="62%" strokeWidth={2.5} />
    </span>
  );
}

function pickTone(src = "") {
  if (src.includes("card-2") || src.includes("content-2") || src.includes("blue")) return "blue";
  if (src.includes("card-3") || src.includes("green")) return "green";
  if (src.includes("card-4") || src.includes("yellow")) return "yellow";
  if (src.includes("card-5") || src.includes("orange")) return "orange";
  if (src.includes("card-6") || src.includes("red")) return "red";
  return "brand";
}

function iconForTone(tone: string) {
  switch (tone) {
    case "blue":
      return Folder;
    case "green":
      return Aperture;
    case "yellow":
      return AppWindow;
    case "orange":
      return Palette;
    case "red":
      return Sparkles;
    case "aperture":
      return Aperture;
    default:
      return Settings2;
  }
}

function iconGlyphForName(icon: string) {
  switch (icon) {
    case "arrow-up-right":
      return ArrowUpRight;
    case "check":
      return Check;
    case "chevron-down":
      return ChevronDown;
    case "chevron-left":
      return ChevronLeft;
    case "chevron-right":
      return ChevronRight;
    case "figma":
      return Figma;
    case "gift":
      return Gift;
    case "globe":
      return Globe2;
    case "grid":
      return Grid2X2;
    case "majin-mark":
      return MajinMarkIcon;
    case "tag":
      return Tag;
    case "users":
      return UsersRound;
    case "x":
      return X;
    default:
      return CircleDot;
  }
}

function MajinMarkIcon() {
  return (
    <svg viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="10.5" stroke="currentColor" strokeWidth="3" />
      <path
        d="M16 7.5a8.5 8.5 0 0 1 8.5 8.5"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <circle cx="16" cy="16" r="3" fill="currentColor" />
    </svg>
  );
}

function FigmaPointerAsset({ tone }: { tone: keyof typeof pointerAssets }) {
  return <img alt="" className="figma-pointer-asset" src={pointerAssets[tone]} />;
}

function pointerAssetForBackground(background: CSSProperties["background"]) {
  if (typeof background !== "string") return pointerAssets.brand;
  if (background.includes("bg-blue-primary")) return pointerAssets.blue;
  if (background.includes("bg-orange-primary")) return pointerAssets.orange;
  if (background.includes("bg-green-primary")) return pointerAssets.green;
  if (background.includes("bg-red-primary")) return pointerAssets.red;
  return pointerAssets.brand;
}

function inferVectorIcon(style?: CSSProperties) {
  const width = readSize(style?.width);
  const height = readSize(style?.height);
  const left = readSize(style?.left);
  const top = readSize(style?.top);

  if (closeTo(width, 18.33) && closeTo(height, 15.83)) {
    return "gift";
  }

  if (closeTo(width, 16.67) && closeTo(height, 16.67) && closeTo(left, 1.67) && closeTo(top, 1.67)) {
    return "globe";
  }

  if (closeTo(width, 10.61) && closeTo(height, 10.61) && closeTo(top, 4.7)) {
    return "x";
  }

  if (closeTo(width, 10.61) && closeTo(height, 6.48) && top && top >= 6.4 && top <= 7) {
    return "chevron-down";
  }

  if (closeTo(width, 9.5) && closeTo(height, 9.5) && closeTo(left, 1.25) && closeTo(top, 1.25)) {
    return "grid";
  }

  if (closeTo(width, 10) && closeTo(height, 10) && closeTo(left, 1) && closeTo(top, 1)) {
    return "users";
  }

  if (closeTo(width, 26.67) && closeTo(height, 26.67) && closeTo(left, 2.67) && closeTo(top, 2.67)) {
    return "majin-mark";
  }

  if (closeTo(width, 10.4) && closeTo(height, 10.4) && closeTo(top, 1.05)) {
    return "tag";
  }

  if (width && height && width >= 19 && width <= 21 && height >= 19 && height <= 21 && closeTo(left, 2) && closeTo(top, 2)) {
    return "users";
  }

  if (
    (closeTo(width, 10.02) && closeTo(height, 10.02) && closeTo(left, 4.99)) ||
    (closeTo(width, 15) && closeTo(height, 15) && closeTo(left, 2.5)) ||
    (closeTo(width, 8.01) && closeTo(height, 8.01) && closeTo(left, 3.99))
  ) {
    return "arrow-up-right";
  }

  if (width && height && width >= 9 && width <= 14 && height >= 6 && height <= 10 && width > height) {
    return "check";
  }

  return "dot";
}

function dashboardTitle(tone: string) {
  switch (tone) {
    case "blue":
      return "Source file";
    case "green":
      return "Legibility";
    case "yellow":
      return "Design fast";
    case "orange":
      return "Art direction";
    case "red":
      return "Free updates";
    default:
      return "Components";
  }
}

function dashboardCaption(tone: string) {
  switch (tone) {
    case "blue":
      return "Import and start building from source.";
    case "green":
      return "Contrast-ready interface elements.";
    case "yellow":
      return "Pre-built sections for fast layout.";
    case "orange":
      return "Minimal SaaS visual system.";
    case "red":
      return "Updated to the latest Figma features.";
    default:
      return "Foundation system for customization.";
  }
}

function readSize(value: CSSProperties["width"] | CSSProperties["height"]) {
  if (typeof value === "number") return value;
  if (typeof value === "string") {
    const parsed = Number.parseFloat(value);
    return Number.isFinite(parsed) ? parsed : null;
  }

  return null;
}

function closeTo(value: number | null, expected: number, tolerance = 0.08) {
  return value !== null && Math.abs(value - expected) <= tolerance;
}
