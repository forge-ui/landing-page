import { useEffect, useMemo, useRef, useState } from "react";
import {
  rawPageGroups,
  rawSectionFamilies,
  rawSectionGroups,
  type RawFigmaGroup,
} from "./generated/figmaRegistry";
import { DatasetDemo } from "./components/dataset-demo";
import { ContactRestoration, HomepageRestoration } from "./components/homepage-restoration";

type PageRoute = "page-1" | "page-2" | "pricing" | "contact" | "article";
type AppRoute = PageRoute | "kit" | "dataset-demo";
type KitCategory = "Pages" | string;

const pageRoutes: Record<PageRoute, string> = {
  "page-1": "page-1.md",
  "page-2": "page-2.md",
  pricing: "pricing.md",
  contact: "contact.md",
  article: "arcitle.md",
};

function App() {
  const [route, setRoute] = useState<AppRoute>(() => readRoute());

  useEffect(() => {
    const syncRoute = () => setRoute(readRoute());
    window.addEventListener("hashchange", syncRoute);
    return () => window.removeEventListener("hashchange", syncRoute);
  }, []);

  if (route === "kit") {
    return <RawWorkbench />;
  }

  if (route === "dataset-demo") {
    return <DatasetDemo />;
  }

  const page = rawPageGroups.find((group) => group.source === pageRoutes[route]) ?? rawPageGroups[0];
  const Page = page.component;

  return (
    <main className="figma-page-host" data-source={page.source}>
      <Page />
      {page.source === "page-1.md" ? <HomepageRestoration /> : null}
      {page.source === "contact.md" ? <ContactRestoration /> : null}
      {page.source === "page-1.md" ? <PageOneScrollFade /> : null}
    </main>
  );
}

function PageOneScrollFade() {
  useEffect(() => {
    const host = document.querySelector<HTMLElement>('.figma-page-host[data-source="page-1.md"]');
    if (!host || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const sections = Array.from(host.querySelectorAll<HTMLElement>(":scope > div > div"));
    const restorationAssets = Array.from(host.querySelectorAll<HTMLElement>(".figma-restoration-asset"));
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
            observer.unobserve(entry.target);
          }
        });
      },
      { root: null, rootMargin: "0px 0px -10% 0px", threshold: 0.16 },
    );

    targets.forEach((target) => observer.observe(target));

    return () => {
      observer.disconnect();
      targets.forEach((target) => {
        target.classList.remove("page-screen-fade", "is-visible");
        target.style.transitionDelay = "";
      });
    };
  }, []);

  return null;
}

function readRoute(): AppRoute {
  const hash = window.location.hash.replace(/^#\/?/, "");
  if (
    hash === "page-2" ||
    hash === "pricing" ||
    hash === "contact" ||
    hash === "article" ||
    hash === "kit" ||
    hash === "dataset-demo"
  ) {
    return hash;
  }
  return "page-1";
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
          <span>Forge Homepage Kit</span>
          <h1>{activeFamily}</h1>
          <p>
            {activeGroups.length} {detailLabel.toLowerCase()}
          </p>
        </section>
        <section className="raw-variant-stack" aria-live="polite">
          {activeGroups.map((group, index) => (
            <RawPreview group={group} index={index} key={group.id} total={activeGroups.length} />
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
        <a className="raw-demo-link" href="#dataset-demo">
          <span>Dataset Demo</span>
          <b>new</b>
        </a>
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

function RawPreview({ group, index, total }: { group: RawFigmaGroup; index: number; total: number }) {
  const Component = group.component;

  return (
    <article className="raw-preview" id={group.id}>
      <header className="raw-preview-header">
        <div>
          <p>
            {index + 1} / {total}
          </p>
          <h2>{group.variant}</h2>
        </div>
      </header>
      <div className="raw-render-frame" style={group.frameHeight ? { height: group.frameHeight } : undefined}>
        <Component />
        {group.source === "page-1.md" ? <HomepageRestoration /> : null}
        {group.source === "contact.md" ? <ContactRestoration /> : null}
      </div>
    </article>
  );
}

export default App;
