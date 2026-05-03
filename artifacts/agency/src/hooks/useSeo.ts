import { useEffect } from "react";

type SeoOptions = {
  title: string;
  description: string;
  canonicalPath?: string;
  schema?: Record<string, unknown> | Record<string, unknown>[];
};

export function useSeo({ title, description, canonicalPath, schema }: SeoOptions) {
  useEffect(() => {
    document.title = title;

    let tag = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    if (!tag) {
      tag = document.createElement("meta");
      tag.setAttribute("name", "description");
      document.head.appendChild(tag);
    }
    tag.setAttribute("content", description);

    const existingCanonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonicalPath) {
      const href = new URL(canonicalPath, window.location.origin).toString();
      if (existingCanonical) {
        existingCanonical.setAttribute("href", href);
      } else {
        const link = document.createElement("link");
        link.rel = "canonical";
        link.href = href;
        document.head.appendChild(link);
      }
    } else if (existingCanonical) {
      existingCanonical.remove();
    }

    const existingSchema = document.querySelector<HTMLScriptElement>('script[data-seo-schema="true"]');
    if (existingSchema) {
      existingSchema.remove();
    }
    if (schema) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo-schema", "true");
      script.textContent = JSON.stringify(
        Array.isArray(schema) ? { "@context": "https://schema.org", "@graph": schema } : schema,
      );
      document.head.appendChild(script);
    }
  }, [title, description, canonicalPath, schema]);
}
