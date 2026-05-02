import { Code2, Zap, Shield, Database, Globe, Settings, RefreshCw, BarChart2, Layers } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-[#0678be] px-4 py-3 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white font-black text-sm">D</span>
        </div>
        <div>
          <p className="text-white font-bold text-xs">Drupal CMS</p>
          <p className="text-white/60 text-[9px]">Enterprise Content Architecture</p>
        </div>
      </div>
      <div className="bg-[#0a0c12] p-4">
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[{ v: "D10", l: "Version", c: "#22c55e" }, { v: "API-first", l: "Architecture", c: "#0678be" }, { v: "99.9%", l: "Uptime", c: "#f59e0b" }].map((s) => (
            <div key={s.l} className="bg-white/5 rounded-lg p-2.5 text-center">
              <p className="font-black text-sm" style={{ color: s.c }}>{s.v}</p>
              <p className="text-[9px] text-white/30 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/5 rounded-xl p-3 border border-white/8">
          <p className="text-[9px] text-white/30 uppercase tracking-widest mb-2">Enterprise Capabilities</p>
          {["Custom content types + fields", "Views-based data display", "REST / JSON:API / GraphQL", "Multi-site management"].map((f) => (
            <div key={f} className="flex items-center gap-2 py-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#0678be]" />
              <span className="text-[9px] text-white/50">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100">
      <p className="text-[10px] text-gray-400">Version</p>
      <p className="text-2xl font-black text-[#0678be]">D10</p>
    </div>
    <div className="absolute -top-4 -left-4 bg-[#0678be] rounded-xl px-3 py-2.5 shadow-xl">
      <p className="text-white font-black text-xs">Drupal</p>
    </div>
  </div>
);

const drupalData: HubData = {
  slug: "drupal-development-service",
  label: "DRUPAL DEVELOPMENT",
  breadcrumb: "Drupal Development",
  hero: {
    headline: "Drupal Development for Enterprise Content Architecture.",
    italic: "Complex. Scalable. Secure.",
    description:
      "Custom Drupal 10 development — bespoke content architecture, custom module development, headless Drupal APIs, and migrations from legacy Drupal versions. We build Drupal for the organisations that need its power: government, education, enterprise publishing, and large-scale content operations.",
    cta: "Get a Free Drupal Consultation",
    ctaHref: "/contact",
    badges: ["Drupal 10 Certified", "Headless Drupal", "Enterprise Scale", "10+ Years"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "Drupal 10", label: "Current version expertise" },
    { value: "API-first", label: "Headless architecture capability" },
    { value: "Enterprise", label: "Scale and security standard" },
    { value: "25+", label: "Drupal projects delivered" },
  ],
  intro: {
    eyebrow: "Why Drupal for enterprise content",
    headline: "Drupal is the CMS that large organisations choose when content complexity, security, and access control requirements outgrow WordPress.",
    body: "Drupal's content model is uniquely powerful: custom content types with typed fields, Views for reusable content display logic, paragraphs for component-based page building, and a taxonomy system that handles complex classification requirements. Combined with its granular role and permission system, Drupal handles content operations of a complexity that WordPress and Joomla can't match without significant plugin infrastructure.",
    secondBody: "Drupal powers a significant share of government websites, university platforms, and large publishing operations precisely because of its security track record and content architecture capability. Drupal's security team has a rapid response process, regular security advisories, and a strong community of developers who contribute to its security posture. For organisations with strict security requirements, Drupal is the defensible choice.",
    bullets: [
      "Custom content types with typed fields — structured content modelling for complex information architectures",
      "Views for reusable, filterable, sortable content display — no custom PHP for content queries",
      "Paragraphs module for flexible component-based page building without a page builder",
      "Granular role and permission system for complex editorial and publishing workflows",
      "JSON:API and GraphQL APIs built in — headless Drupal for React/Next.js frontends",
    ],
  },
  proofSection: {
    eyebrow: "Enterprise content architecture with Drupal",
    headline: "When a government department, university, or enterprise publisher needs to manage thousands of content items across complex taxonomies with strict access controls, Drupal is the answer.",
    body: "Drupal's content architecture capabilities are unmatched in the open-source CMS world. The combination of custom content types, typed fields, taxonomy, and Views allows you to model virtually any information architecture — and then display it in any configuration without writing custom PHP. For organisations with 10,000+ content items, multiple content types, and complex content relationships, Drupal's architecture makes long-term maintenance vastly simpler.",
    secondBody: "Drupal's security advisory process is the most mature in open-source CMS. The Drupal Security Team triages reported vulnerabilities, coordinates with module maintainers, and releases advisories with coordinated disclosure — typically before exploit code is publicly available. This is why government and enterprise organisations consistently choose Drupal for sites where security incidents have significant consequences.",
    bullets: [
      "Custom content types with field types matching your actual data model — text, integers, entity references, taxonomies, geolocation, file uploads — all structured and validated.",
      "Views module provides a no-code interface for building content lists, grids, blocks, and feeds with complex filtering and sorting — replacing custom PHP queries across the entire content team.",
      "Paragraphs module allows component-based page building with custom content components, without the performance overhead of traditional page builders.",
      "Role-based access control covers content type permissions, individual field access, and workflow states — editorial review, approval, and publication permissions configured precisely.",
      "JSON:API and GraphQL APIs are available in Drupal core — making Drupal an ideal headless CMS backend for React and Next.js frontends that need structured content at scale.",
      "Drupal's configuration management system version-controls all configuration changes in YAML files — deployments are reproducible and auditable, a requirement for enterprise change management.",
    ],
  },
  subServices: [
    {
      tab: "Custom Drupal Development",
      headline: "Bespoke Drupal content architecture and theme development.",
      description: "Custom Drupal 10 development — content type architecture, custom theme, module configuration, and editorial workflow setup. We design the content model around your actual information architecture, not a generic template.",
      bullets: ["Custom content type architecture", "Custom Drupal theme", "Views and Paragraphs configuration", "Editorial workflow setup"],
      image: "/hero-showcase.png",
      href: "/drupal-development-service",
    },
    {
      tab: "Headless Drupal",
      headline: "Drupal as a headless CMS with React or Next.js frontend.",
      description: "Headless Drupal architecture using Drupal's JSON:API or GraphQL API as the content backend and a React or Next.js frontend for the presentation layer. The content power of Drupal with the frontend performance and flexibility of React.",
      bullets: ["JSON:API or GraphQL setup", "React / Next.js frontend", "Content preview in Drupal admin", "Incremental Static Regeneration"],
      image: "/industry-legal.png",
      href: "/drupal-development-service",
    },
    {
      tab: "Custom Module Development",
      headline: "Custom Drupal modules for bespoke functionality.",
      description: "Custom Drupal 10 module development using Drupal's hook system, services, and plugin architecture. Integrations, custom content processing, third-party API connections, and business-specific workflows not available in contributed modules.",
      bullets: ["Drupal hook and service architecture", "Plugin-based extension", "Third-party API integration", "PHPUnit test coverage"],
      image: "/work-3.png",
      href: "/drupal-development-service",
    },
    {
      tab: "Drupal Migration",
      headline: "Migrate from Drupal 7/8/9 to Drupal 10.",
      description: "Drupal version migrations — from Drupal 7, 8, or 9 to the current Drupal 10. The Migrate module handles most content migrations; custom migration plugins handle complex transformations. Full content integrity validation before cutover.",
      bullets: ["Drupal Migrate module setup", "Custom migration plugins", "Content integrity validation", "Module compatibility updates"],
      image: "/case-study-saas.png",
      href: "/drupal-development-service",
    },
    {
      tab: "Multi-site Management",
      headline: "Drupal multi-site architecture for multiple properties.",
      description: "Drupal multi-site setup for organisations managing multiple websites from a single Drupal installation — shared modules, shared configuration, and site-specific themes. Reduced maintenance overhead with full content and configuration isolation between sites.",
      bullets: ["Multi-site configuration", "Shared and site-specific themes", "Centralised module management", "Site-specific access control"],
      image: "/case-study-realestate.png",
      href: "/drupal-development-service",
    },
  ],
  features: [
    { icon: <Database className="w-5 h-5 text-primary" />, title: "Content Architecture", body: "Custom content types, typed fields, taxonomy, and relationships — data modelled precisely for your information architecture." },
    { icon: <Layers className="w-5 h-5 text-primary" />, title: "Views & Paragraphs", body: "Reusable content display logic via Views, component-based page building via Paragraphs — all without custom PHP or page builders." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "Headless Drupal", body: "JSON:API and GraphQL APIs built in — ideal as a CMS backend for React/Next.js frontends that need structured content at scale." },
    { icon: <Shield className="w-5 h-5 text-primary" />, title: "Enterprise Security", body: "Drupal's security team has the most mature advisory process in open-source CMS. Granular permission system for complex editorial workflows." },
    { icon: <Code2 className="w-5 h-5 text-primary" />, title: "Custom Module Development", body: "Bespoke Drupal modules using hooks, services, and plugin architecture — tested, documented, and upgrade-safe." },
    { icon: <Settings className="w-5 h-5 text-primary" />, title: "Workflow Management", body: "Drupal Workflows module for configurable editorial states — draft, review, approved, published — with role-based transition permissions." },
    { icon: <RefreshCw className="w-5 h-5 text-primary" />, title: "Drupal Migration", body: "D7/D8/D9 to D10 migrations using Drupal's Migrate module with custom plugins for complex content transformations." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Performance Optimisation", body: "Drupal performance stack: Varnish reverse proxy, Redis caching, BigPipe for progressive rendering, and CDN configuration." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "Configuration Management", body: "All configuration exported to YAML, version-controlled in Git, and deployed reproducibly — enterprise change management compliance." },
  ],
  techStack: [
    { platform: "Drupal 10", stat: "CMS", description: "The current Drupal LTS release with PHP 8.2, Symfony 6, and the full modern Drupal ecosystem. All builds target Drupal 10 — no legacy version deployments." },
    { platform: "Drupal JSON:API / GraphQL", stat: "API layer", description: "JSON:API is available in Drupal core. GraphQL via the GraphQL contributed module. Both provide structured access to all Drupal content types for headless frontend implementations." },
    { platform: "Paragraphs + Layout Builder", stat: "Page building", description: "Paragraphs module for component-based content with custom paragraph types. Layout Builder for structured page layout — both performant alternatives to traditional page builders." },
    { platform: "Varnish + Redis", stat: "Caching", description: "Varnish reverse proxy for full-page caching, Redis for persistent cache and session storage. Drupal with proper caching configuration achieves sub-second TTFB on cached pages." },
    { platform: "Acquia / Pantheon", stat: "Hosting", description: "Managed Drupal hosting on Acquia (Drupal's primary managed cloud) or Pantheon — both optimised for Drupal with built-in CDN, staging environments, and automated backups." },
    { platform: "PHP 8.2 / Composer", stat: "Development", description: "All Drupal development with Composer for dependency management, Drush for CLI operations, and PHPUnit for custom module testing." },
  ],
  caseStudies: [
    { image: "/case-study-saas.png", client: "Provincial Government Department", industry: "Government", blurb: "Custom Drupal 10 build for a government information portal with 5,000+ content items across 12 content types. Granular editorial workflow with 4 review stages.", metrics: [{ value: "5,000+", label: "Content items" }, { value: "4", label: "Editorial workflow stages" }] },
    { image: "/hero-showcase.png", client: "National University", industry: "Education", blurb: "Headless Drupal 10 with Next.js frontend for a university website. JSON:API backend serving structured content to a React frontend achieving 98 Lighthouse across 2,000+ programme pages.", metrics: [{ value: "98", label: "Lighthouse score" }, { value: "2,000+", label: "Programme pages" }] },
    { image: "/industry-legal.png", client: "Enterprise Publisher", industry: "Media", blurb: "Drupal 7 to Drupal 10 migration for a publisher with 15,000 articles. Full content migration, new content architecture, and editorial workflow redesign.", metrics: [{ value: "15,000", label: "Articles migrated" }, { value: "Zero", label: "Content loss" }] },
  ],
  process: [
    { label: "Architecture", headline: "Content architecture design before any development.", description: "Content type mapping, field type specification, taxonomy architecture, and editorial workflow design. The information architecture is designed in a structured document and approved before development begins." },
    { label: "Design", headline: "Theme design and component library in Figma.", description: "Custom Drupal theme design covering every content type template, view display, and component variant — reviewed and approved before development." },
    { label: "Develop", headline: "Content types, custom modules, and theme development.", description: "Parallel development: content architecture configuration, custom module development, theme implementation. Staged deployments with weekly review milestones." },
    { label: "Configure", headline: "Workflow, permissions, and editorial interface configuration.", description: "Role and permission configuration, editorial workflow setup, Views and Paragraphs configuration, and admin UI optimisation for your editorial team." },
    { label: "Migrate", headline: "Content migration and data integrity validation.", description: "For migration projects: Migrate module setup, custom plugin development for complex transformations, full content migration to staging, and data integrity validation before cutover." },
    { label: "Launch", headline: "Production deployment with configuration management.", description: "Configuration exported to YAML, deployed via Drush, and verified in production. Post-launch monitoring and a 30-day support period for your editorial team." },
  ],
  faqs: [
    { question: "When should I choose Drupal over WordPress?", answer: "Drupal is the better choice when you need: complex content types with many typed fields, granular access control for large editorial teams, multilingual content at scale without plugins, API-first content delivery for headless architectures, or enterprise-grade security assurance. WordPress is better for simpler sites, smaller teams, or when the plugin ecosystem adequately covers your requirements." },
    { question: "What is headless Drupal?", answer: "Headless Drupal uses Drupal as the content management backend only — content is created in the Drupal admin and served via JSON:API or GraphQL to a separate frontend (React, Next.js, Vue). The frontend is completely custom and not constrained by Drupal's theme system. This architecture provides Drupal's content management power with a frontend that can achieve any performance or design goal." },
    { question: "Can you migrate our Drupal 7 site to Drupal 10?", answer: "Yes. Drupal 7 to Drupal 10 is a significant migration — Drupal 8+ is a complete platform rewrite, not an incremental upgrade. Content migrates using Drupal's Migrate module; custom modules must be rewritten; themes must be rebuilt. We run a full audit first: content inventory, module compatibility assessment, and migration scoping. The output is a project plan and timeline before any work begins." },
    { question: "What is Drupal's security advantage over other CMS platforms?", answer: "The Drupal Security Team has a formalised advisory process: reported vulnerabilities are triaged privately, module maintainers are notified, patches are prepared, and advisories are published with coordinated disclosure — typically before exploit code is publicly available. This process is more mature than WordPress or Joomla's equivalent. For government, education, and enterprise organisations with security compliance requirements, Drupal's security track record is a meaningful differentiator." },
    { question: "How long does a custom Drupal 10 build take?", answer: "A standard Drupal 10 build — content architecture, custom theme, and module configuration — takes 8-14 weeks. Headless Drupal builds with a React/Next.js frontend run 12-18 weeks. Migrations from Drupal 7 run 10-16 weeks depending on content volume and custom module complexity. We give a firm timeline after the architecture phase." },
  ],
  hubInsights: [
    { image: "/work-3.png", category: "Drupal Development", readTime: "7 min read", title: "Drupal 10 in 2026: The CMS for Enterprise Content Architecture", excerpt: "Drupal's market share is smaller than WordPress's, but its footprint in government, education, and enterprise is disproportionately large — because for complex content operations, it's simply better. We explain what Drupal does that other CMS platforms can't and who should seriously consider it.", author: "Marcus Chen", authorRole: "CMS Architect", href: "/blog/drupal-10-enterprise-cms-2026" },
    { image: "/case-study-saas.png", category: "Headless Drupal", readTime: "8 min read", title: "Headless Drupal + Next.js: The Architecture Guide for 2026", excerpt: "Using Drupal as a headless CMS backend — with Next.js as the frontend — combines the best content management experience available in open source with the best frontend performance stack available. We cover the architecture decisions, API configuration, and implementation patterns in detail.", author: "Priya Anand", authorRole: "Frontend Architect", href: "/blog/headless-drupal-nextjs-2026" },
    { image: "/hero-showcase.png", category: "Drupal Migration", readTime: "6 min read", title: "Drupal 7 to Drupal 10 Migration: What It Actually Involves", excerpt: "Drupal 7 to Drupal 10 is not an upgrade — it's a migration. Drupal 8 was a complete platform rewrite, and the path from D7 requires rebuilding modules, rebuilding themes, and migrating content via the Migrate module. We walk through exactly what this involves and how to plan it.", author: "James Okafor", authorRole: "Migration Lead", href: "/blog/drupal-7-to-10-migration" },
  ],
};

export default function DrupalHub() {
  return <ServiceHubPage data={drupalData} />;
}
