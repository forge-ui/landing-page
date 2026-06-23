import { useEffect, useMemo, useRef, useState } from "react";
import {
  rawPageGroups,
  rawSectionFamilies,
  rawSectionGroups,
  type RawSiteGroup,
} from "./generated/siteRegistry";
import { ContactRestoration, HomepageRestoration } from "./components/homepage-restoration";

type PageRoute = "page-1" | "page-2" | "pricing" | "contact" | "article";
type AppRoute = PageRoute | "kit";
type KitCategory = "Pages" | string;

const pageRoutes: Record<PageRoute, string> = {
  "page-1": "content/pages/page-1.md",
  "page-2": "content/pages/page-2.md",
  pricing: "content/pages/pricing.md",
  contact: "content/pages/contact.md",
  article: "content/pages/article.md",
};

const pageRouteBySource = Object.fromEntries(
  Object.entries(pageRoutes).map(([route, source]) => [source, route]),
) as Record<string, PageRoute>;

function App() {
  const [route, setRoute] = useState<AppRoute>(() => readRoute());

  useEffect(() => {
    if (!window.location.hash) {
      window.history.replaceState(null, "", "#kit");
    }
    const syncRoute = () => setRoute(readRoute());
    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  if (route === "kit") {
    return <RawWorkbench />;
  }

  const page = rawPageGroups.find((group) => group.source === pageRoutes[route]) ?? rawPageGroups[0];
  const Page = page.component;

  return (
    <main className="figma-page-host" data-source={page.source}>
      <Page />
      {page.source === "content/pages/page-1.md" || page.source === "content/pages/page-2.md" ? <SiteHeaderDropdowns /> : null}
      {page.source === "content/pages/page-1.md" ? <HomepageRestoration /> : null}
      {page.source === "content/pages/contact.md" ? <ContactRestoration /> : null}
      {page.source === "content/pages/page-1.md" || page.source === "content/pages/page-2.md" ? (
        <PageScrollEffects source={page.source} />
      ) : null}
    </main>
  );
}

function SiteHeaderDropdowns() {
  return (
    <div className="figma-header-dropdown-layer" aria-label="Header dropdown menus">
      <div className="figma-header-dropdown-trigger figma-header-dropdown-trigger--why" tabIndex={0}>
        <HeaderMenuVariantOne />
      </div>
      <div className="figma-header-dropdown-trigger figma-header-dropdown-trigger--features" tabIndex={0}>
        <HeaderMenuVariantTwo />
      </div>
      <div className="figma-header-dropdown-trigger figma-header-dropdown-trigger--resources" tabIndex={0}>
        <HeaderMenuVariantThree />
      </div>
      <div className="figma-header-dropdown-trigger figma-header-dropdown-trigger--language" tabIndex={0}>
        <HeaderMenuLanguage />
      </div>
    </div>
  );
}

function HeaderMenuVariantOne() {
  return (
    <div className="figma-header-dropdown-card figma-native-menu figma-native-menu--one">
      <HeaderMenuLabel variant="variant one" />
      <div className="figma-native-menu-panel">
        <HeaderMenuItem active badge title="Why Majin?" text="Foundational components system ⚙️" icon="gear" />
        <HeaderMenuItem title="What's Included" text="Pages, sections, assets, and prompts 🎁" icon="gift" />
        <HeaderMenuItem title="Pixel Perfect" text="WCAG 2.1+ compliant standards 👀" icon="target" />
        <HeaderSubmenu />
      </div>
    </div>
  );
}

function HeaderMenuVariantTwo() {
  return (
    <div className="figma-header-dropdown-card figma-native-menu figma-native-menu--two">
      <div className="figma-native-menu-column">
        <HeaderMenuLabel variant="variant two" />
        <div className="figma-native-menu-panel">
          <HeaderMenuItem active badge title="Why Majin?" text="Foundational components system ⚙️" icon="gear" />
          <HeaderMenuItem title="What's Included" text="Pages, sections, assets, and prompts 🎁" icon="gift" />
          <HeaderMenuItem badge title="Pixel Perfect" text="WCAG 2.1+ compliant standards 👀" icon="target" />
          <HeaderMenuItem title="Reusable Kit" text="Stable component IDs for Codex 🎉" icon="spark" />
          <HeaderMenuItem title="Art Direction" text="Modern minimalism ✨" icon="palette" />
          <HeaderSubmenu />
        </div>
      </div>
      <div className="figma-native-project-card">
        <div className="figma-native-project-visual">
          <div className="figma-native-project-top" />
          <div className="figma-native-project-eye" />
        </div>
        <strong>Project Lazarus</strong>
        <p>Workspace 3 · Member 11</p>
        <div className="figma-native-progress"><span /></div>
        <button type="button">Get started!</button>
        <small>Modern minimalism web template</small>
      </div>
    </div>
  );
}

function HeaderMenuVariantThree() {
  return (
    <div className="figma-header-dropdown-card figma-native-menu figma-native-menu--three">
      <HeaderMenuLabel variant="variant three" />
      <div className="figma-native-feature-grid">
        <HeaderFeatureTile active badge title="Why Majin?" text="Foundational components system ⚙️" icon="gear" />
        <HeaderFeatureTile title="Art Direction" text="Modern minimalism ✨" icon="palette" />
        <HeaderFeatureTile title="What's Included" text="Pages, sections, assets, and prompts 🎁" icon="gift" />
        <HeaderFeatureTile badge title="Pixel Perfect" text="WCAG 2.1+ compliant standards 👀" icon="target" />
      </div>
      <div className="figma-native-menu-cta">
        <span>
          <strong>Majin UI Collection</strong>
          <small>Brought to you by Lunative Studio</small>
        </span>
        <button type="button">Get started ↗</button>
      </div>
    </div>
  );
}

function HeaderMenuLanguage() {
  const languages = [
    ["🇮🇩", "Bahasa (ID)", true],
    ["🇨🇳", "Chinese (CN)", false],
    ["🇺🇸", "English (EN)", false],
    ["🇷🇺", "Russian (RU)", false],
  ] as const;

  return (
    <div className="figma-header-dropdown-card figma-native-menu figma-native-menu--language">
      <div className="figma-native-language-title">Language</div>
      {languages.map(([flag, label, active]) => (
        <button className={active ? "active" : ""} key={label} type="button">
          <span>{flag}</span>
          <strong>{label}</strong>
          <i />
        </button>
      ))}
    </div>
  );
}

function HeaderMenuLabel({ variant }: { variant: string }) {
  return (
    <div className="figma-native-menu-label">
      <span>Navigation menu</span>
      <b>({variant})</b>
    </div>
  );
}

function HeaderMenuItem({
  active = false,
  badge = false,
  icon,
  text,
  title,
}: {
  active?: boolean;
  badge?: boolean;
  icon: string;
  text: string;
  title: string;
}) {
  return (
    <div className={`figma-native-menu-item${active ? " active" : ""}`}>
      <HeaderMenuIcon icon={icon} />
      <span>
        <strong>
          {title}
          {badge ? <em>New</em> : null}
        </strong>
        <small>{text}</small>
      </span>
    </div>
  );
}

function HeaderFeatureTile({
  active = false,
  badge = false,
  icon,
  text,
  title,
}: {
  active?: boolean;
  badge?: boolean;
  icon: string;
  text: string;
  title: string;
}) {
  return (
    <div className={`figma-native-feature-tile${active ? " active" : ""}`}>
      <HeaderMenuIcon icon={icon} />
      <strong>
        {title}
        {badge ? <em>New</em> : null}
      </strong>
      <p>{text}</p>
    </div>
  );
}

function HeaderMenuIcon({ icon }: { icon: string }) {
  return (
    <i aria-hidden="true" className={`figma-native-menu-icon figma-native-menu-icon--${icon}`} />
  );
}

function HeaderSubmenu() {
  return (
    <div className="figma-native-submenu">
      <small>Submenu label</small>
      <nav>
        <span>Art Direction</span>
        <span>Lifetime Updates <em>New</em></span>
        <span>Pixel Perfect</span>
      </nav>
    </div>
  );
}

function PageScrollEffects({ source }: { source: string }) {
  useEffect(() => {
    const host = document.querySelector<HTMLElement>(`.figma-page-host[data-source="${source}"]`);
    if (!host || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    document.documentElement.classList.add("page-scroll-snap-enabled");
    document.body.classList.add("page-scroll-snap-enabled");

    const sections = Array.from(host.querySelectorAll<HTMLElement>(":scope > div > div"));
    const restorationAssets =
      source === "content/pages/page-1.md"
        ? Array.from(host.querySelectorAll<HTMLElement>(".figma-restoration-asset"))
        : [];
    const targets = [...sections, ...restorationAssets];

    targets.forEach((target, index) => {
      target.classList.add("page-screen-fade");
      target.style.transitionDelay = `${Math.min(index * 18, 140)}ms`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.16 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("page-scroll-snap-enabled");
      document.body.classList.remove("page-scroll-snap-enabled");
      targets.forEach((target) => {
        target.classList.remove("page-screen-fade", "is-visible");
        target.style.transitionDelay = "";
      });
    };
  }, [source]);

  return null;
}

function readRoute(): AppRoute {
  const hash = window.location.hash.replace(/^#\/?/, "");
  if (
    hash === "page-1" ||
    hash === "page-2" ||
    hash === "pricing" ||
    hash === "contact" ||
    hash === "article" ||
    hash === "kit"
  ) {
    return hash;
  }
  return "kit";
}

function RawWorkbench() {
  const [activeFamily, setActiveFamily] = useState<KitCategory>("Pages");
  const detailRef = useRef<HTMLElement | null>(null);
  const activeGroups = useMemo(
    () =>
      activeFamily === "Pages"
        ? rawPageGroups
        : rawSectionGroups.filter((group) => group.family === activeFamily),
    [activeFamily],
  );
  const detailLabel = activeFamily === "Pages" ? "Ready pages" : "Section variants";

  useEffect(() => {
    detailRef.current?.scrollTo({ top: 0 });
  }, [activeFamily]);

  return (
    <div className="raw-workbench">
      <KitSidebar activeFamily={activeFamily} onFamilyChange={setActiveFamily} />
      <main className="raw-detail-scroll" ref={detailRef}>
        <section className="raw-detail-heading">
          <span>Forge Landing Page Kit</span>
          <h1>{activeFamily}</h1>
          <p>
            {activeGroups.length} {detailLabel.toLowerCase()}
          </p>
        </section>
        <section className="raw-variant-stack" aria-live="polite">
          {activeGroups.map((group, index) => (
            <RawPreview
              code={getGroupCode(group)}
              group={group}
              index={index}
              key={group.id}
              total={activeGroups.length}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

function KitSidebar({
  activeFamily,
  onFamilyChange,
}: {
  activeFamily: KitCategory;
  onFamilyChange: (family: KitCategory) => void;
}) {
  const familyCounts = useMemo(() => {
    return rawSectionGroups.reduce<Record<string, number>>((accumulator, group) => {
      accumulator[group.family] = (accumulator[group.family] ?? 0) + 1;
      return accumulator;
    }, {});
  }, []);

  return (
    <aside className="raw-sidebar">
      <div className="raw-sidebar-intro">
        <p>Library</p>
        <h1>Kit</h1>
      </div>
      <nav className="raw-family-nav" aria-label="Section families">
        <button
          className={activeFamily === "Pages" ? "active" : ""}
          type="button"
          onClick={() => onFamilyChange("Pages")}
        >
          <span>Pages</span>
          <b>{rawPageGroups.length}</b>
        </button>
        {rawSectionFamilies.map((family) => (
          <button
            className={family === activeFamily ? "active" : ""}
            key={family}
            type="button"
            onClick={() => onFamilyChange(family)}
          >
            <span>{family}</span>
            <b>{familyCounts[family] ?? 0}</b>
          </button>
        ))}
      </nav>
    </aside>
  );
}

function getGroupCode(group: RawSiteGroup) {
  const pageIndex = rawPageGroups.findIndex((page) => page.id === group.id);
  if (pageIndex >= 0) {
    return `P${String(pageIndex + 1).padStart(3, "0")}`;
  }

  const sectionIndex = rawSectionGroups.findIndex((section) => section.id === group.id);
  return `S${String(sectionIndex + 1).padStart(3, "0")}`;
}

function RawPreview({
  code,
  group,
  index,
  total,
}: {
  code: string;
  group: RawSiteGroup;
  index: number;
  total: number;
}) {
  const Component = group.component;
  const [copied, setCopied] = useState(false);
  const previewRoute = group.sourceKind === "page" ? pageRouteBySource[group.source] : undefined;
  const previewHref = previewRoute ? `${window.location.origin}${window.location.pathname}#${previewRoute}` : undefined;

  const copyCode = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 1200);
  };

  return (
    <article className="raw-preview" id={group.id}>
      <header className="raw-preview-header">
        <div>
          <p>
            {index + 1} / {total}
          </p>
          <h2>
            <span className="raw-preview-code">{code}</span>
            {group.variant}
          </h2>
          <span className="raw-preview-meta">
            {group.family} · {group.source}
          </span>
        </div>
        <div className="raw-preview-actions">
          {previewHref ? (
            <a className="raw-preview-open" href={previewHref} target="_blank" rel="noreferrer">
              新页签预览
            </a>
          ) : null}
          <button className="raw-copy-code" type="button" onClick={copyCode}>
            {copied ? "Copied" : "Copy ID"}
          </button>
        </div>
      </header>
      <div className="raw-render-frame" style={group.frameHeight ? { height: group.frameHeight } : undefined}>
        <Component />
        {group.source === "content/pages/page-1.md" ? <HomepageRestoration /> : null}
        {group.source === "content/pages/contact.md" ? <ContactRestoration /> : null}
      </div>
    </article>
  );
}

export default App;
