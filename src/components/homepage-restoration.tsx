import { page1RestorationAssets } from "../generated/page1RestorationAssets";

const vectorOverlayNames = new Set([
  "banner-gift",
  "banner-arrow",
  "banner-close",
  "nav-globe-button",
  "nav-why-chevron",
  "nav-features-chevron",
  "nav-resources-chevron",
  "nav-figma-icon",
  "hero-preview-arrow",
  "discount-tag",
  "scroll-arrow",
  "used-by-icon",
]);

function shouldRenderRestorationAsset(name: string) {
  if (vectorOverlayNames.has(name)) return false;
  return !name.startsWith("auto-vector-");
}

export function HomepageRestoration() {
  return (
    <div aria-hidden="true" className="figma-restoration-layer">
      {page1RestorationAssets.filter((item) => shouldRenderRestorationAsset(item.name)).map((item) => (
        <img
          alt=""
          className="figma-restoration-asset"
          key={item.name}
          src={item.src}
          style={{
            height: item.height,
            left: item.x,
            top: item.y,
            width: item.width,
          }}
        />
      ))}
    </div>
  );
}

export function ContactRestoration() {
  return (
    <div aria-hidden="true" className="figma-restoration-layer">
      <img
        alt=""
        className="figma-restoration-asset"
        src="/figma-restoration/contact/contact-map-card-384x396.png"
        style={{
          height: 396,
          left: 324,
          top: 528,
          width: 384,
        }}
      />
    </div>
  );
}
