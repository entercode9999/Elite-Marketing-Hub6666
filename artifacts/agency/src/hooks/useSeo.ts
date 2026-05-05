import { useEffect } from "react";

type SeoOptions = {
  title: string;
  description: string;
  canonicalPath?: string;
  image?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
};

const DEFAULT_IMAGE = "https://outliermarketing.ca/opengraph.jpg";
const SITE_NAME = "Outlier Digital Marketing";

export function useSeo({ title, description, canonicalPath, image, schema }: SeoOptions) {
  useEffect(() => {
    const og = image ?? DEFAULT_IMAGE;
    const canonical = canonicalPath
      ? new URL(canonicalPath, window.location.origin).toString()
      : window.location.href;

    /* ── <title> ──────────────────────────────────────────────────── */
    document.title = title;

    /* ── Helper: upsert any meta tag ─────────────────────────────── */
    const setMeta = (attr: "name" | "property", key: string, content: string) => {
      let tag = document.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute(attr, key);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    };

    /* ── Standard meta ────────────────────────────────────────────── */
    setMeta("name", "description", description);

    /* ── Open Graph ───────────────────────────────────────────────── */
    setMeta("property", "og:title",       title);
    setMeta("property", "og:description", description);
    setMeta("property", "og:url",         canonical);
    setMeta("property", "og:type",        "website");
    setMeta("property", "og:image",       og);
    setMeta("property", "og:image:width",  "1200");
    setMeta("property", "og:image:height", "630");
    setMeta("property", "og:site_name",   SITE_NAME);
    setMeta("property", "og:locale",      "en_CA");

    /* ── Twitter / X Card ─────────────────────────────────────────── */
    setMeta("name", "twitter:card",        "summary_large_image");
    setMeta("name", "twitter:title",       title);
    setMeta("name", "twitter:description", description);
    setMeta("name", "twitter:image",       og);

    /* ── Canonical ────────────────────────────────────────────────── */
    let canonicalEl = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalPath) {
      if (canonicalEl) {
        canonicalEl.href = canonical;
      } else {
        canonicalEl = document.createElement("link");
        canonicalEl.rel = "canonical";
        canonicalEl.href = canonical;
        document.head.appendChild(canonicalEl);
      }
    } else if (canonicalEl) {
      canonicalEl.remove();
    }

    /* ── JSON-LD schema ───────────────────────────────────────────── */
    const existing = document.querySelector<HTMLScriptElement>('script[data-seo-schema="true"]');
    if (existing) existing.remove();
    if (schema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-schema", "true");
      script.textContent = JSON.stringify(
        Array.isArray(schema)
          ? { "@context": "https://schema.org", "@graph": schema }
          : schema,
      );
      document.head.appendChild(script);
    }
  }, [title, description, canonicalPath, image, schema]);
}
