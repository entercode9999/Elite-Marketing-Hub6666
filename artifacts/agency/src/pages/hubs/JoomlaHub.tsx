import { Code2, Zap, Shield, Settings, Globe, RefreshCw, BarChart2, Layers, Database } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-[#f7941d] px-4 py-3 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white font-black text-sm">J</span>
        </div>
        <div>
          <p className="text-white font-bold text-xs">Joomla CMS</p>
          <p className="text-white/60 text-[9px]">Custom Development Build</p>
        </div>
      </div>
      <div className="bg-white p-4">
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[{ v: "4.x+", l: "Joomla version" }, { v: "< 1.5s", l: "Load time" }, { v: "100%", l: "Custom templates" }].map((s) => (
            <div key={s.l} className="bg-gray-50 rounded-lg p-2 text-center border border-gray-100">
              <p className="text-sm font-black text-[#f7941d]">{s.v}</p>
              <p className="text-[8px] text-gray-400 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">Custom Components</p>
          {["Custom Joomla template", "Component development", "Plugin development", "Migration to Joomla 4/5"].map((f) => (
            <div key={f} className="flex items-center gap-2 py-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#f7941d]" />
              <span className="text-[9px] text-gray-600">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -bottom-3 -right-3 bg-white rounded-xl px-3 py-2.5 shadow-xl border border-gray-100">
      <p className="text-[9px] text-gray-400">Load time</p>
      <p className="text-xl font-black text-[#22c55e]">&lt;1.5s</p>
    </div>
    <div className="absolute -top-3 -left-3 bg-[#f7941d] rounded-xl px-3 py-2.5 shadow-xl">
      <p className="text-white font-black text-xs">Joomla</p>
    </div>
  </div>
);

const joomlaData: HubData = {
  slug: "joomla-development-service",
  label: "JOOMLA DEVELOPMENT",
  breadcrumb: "Joomla Development",
  hero: {
    headline: "Expert Joomla Development for Complex CMS Requirements.",
    italic: "Custom components. Performant builds.",
    description:
      "Custom Joomla CMS development — bespoke templates, custom component development, plugin builds, and migrations to Joomla 4/5. We build Joomla sites that load fast, are easy to manage, and don't rely on frameworks your team can't understand.",
    cta: "Get a Free Joomla Consultation",
    ctaHref: "/contact",
    badges: ["Joomla 4/5 Certified", "Custom Components", "Performant Builds", "10+ Years"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "Joomla 5", label: "Latest version expertise" },
    { value: "< 1.5s", label: "Avg. load time on our builds" },
    { value: "30+", label: "Joomla projects delivered" },
    { value: "100%", label: "Custom templates — no Gantry" },
  ],
  intro: {
    eyebrow: "Custom Joomla development",
    headline: "Joomla is a powerful CMS that most developers implement poorly. We build it to its full capability.",
    body: "Joomla sits between WordPress (simple, limited) and Drupal (complex, powerful) in the CMS spectrum — offering a flexible component architecture, multiple access control levels, and a multilingual system that's built in rather than bolted on. The platform excels for content-heavy sites, membership portals, and multi-language publishing where WordPress's plugin approach creates maintenance overhead.",
    secondBody: "The common failure mode in Joomla development is relying on page builder frameworks (Gantry, T3) that add performance overhead and create template lock-in. We build custom Joomla templates in clean HTML and CSS with no framework dependencies — resulting in lighter, faster sites your team can maintain and extend without framework-specific knowledge.",
    bullets: [
      "Custom Joomla 4/5 templates — no page builder frameworks",
      "Custom component development for business-specific functionality",
      "Multilingual site architecture using Joomla's native language manager",
      "ACL configuration: granular content access and publishing permissions",
      "Migration from Joomla 1.5/2.5/3.x to Joomla 4/5",
    ],
  },
  proofSection: {
    eyebrow: "Why the right Joomla implementation matters",
    headline: "A well-built Joomla site is powerful, fast, and maintainable. A poorly-built one is slow, fragile, and costs you money every time something needs to change.",
    body: "The gap between a good and bad Joomla implementation is wider than many clients expect. A custom template in clean code loads in under 1.5 seconds. A Gantry or T3 framework template with multiple page builder layers and unnecessary JavaScript loads in 4-6 seconds. The content management experience is equally different — a well-structured Joomla site with clear category architecture is a pleasure to update; a poorly-structured one means calling a developer for every content change.",
    secondBody: "We've rebuilt Joomla sites for organisations that had been paying a developer £200-300 per update because the original build was so poorly structured that nobody else could understand it. Correct Joomla architecture — clear component structure, clean template code, proper ACL configuration, and full handover documentation — is the difference between a site that empowers your team and one that holds it hostage.",
    bullets: [
      "Custom templates in clean HTML5, CSS3, and minimal JavaScript — no framework layers, no render-blocking third-party libraries, no unnecessary build complexity.",
      "Component architecture designed around your content types — Articles, Custom HTML modules, and custom components all organised in a structure your editor team can navigate.",
      "ACL (Access Control List) configuration that matches your editorial workflow — authors can create, editors can review, publishers can approve — without a plugin.",
      "Multilingual architecture using Joomla's native language manager and language associations — the most robust multilingual CMS capability available without extensions.",
      "Custom component development for requirements that Joomla's core doesn't cover — event management, directory listings, booking systems, and membership portals.",
      "Full handover documentation: template structure, component guide, category architecture, and admin walkthrough — so your team can manage the site without calling a developer.",
    ],
  },
  subServices: [
    {
      tab: "Custom Template Development",
      headline: "Bespoke Joomla templates in clean HTML/CSS.",
      description: "Custom Joomla template development with no framework dependencies. Clean HTML5, CSS3, and minimal JavaScript that loads fast, works on all devices, and your team can maintain without framework-specific knowledge.",
      bullets: ["Custom HTML/CSS — no Gantry/T3", "Mobile-first responsive", "Performance-optimised", "Full template documentation"],
      image: "/case-study-saas.png",
      href: "/joomla-development-service",
    },
    {
      tab: "Component Development",
      headline: "Custom Joomla components for complex functionality.",
      description: "Custom MVC Joomla component development for functionality the core doesn't provide — event listings, property directories, booking systems, membership management, and complex content types with custom fields.",
      bullets: ["MVC component architecture", "Custom backend admin views", "Custom frontend display", "Full API integration capability"],
      image: "/case-study-saas.png",
      href: "/joomla-development-service",
    },
    {
      tab: "Joomla Migration",
      headline: "Migrate from Joomla 1.5/2.5/3 to Joomla 4/5.",
      description: "Joomla version migrations — from legacy Joomla 1.5, 2.5, or 3.x to the current Joomla 4 or 5. Extension compatibility audit, content migration, template rebuild, and SEO preservation. A migration that improves your site, not just the version number.",
      bullets: ["Content and database migration", "Extension compatibility audit", "Template rebuild to Joomla 4/5", "SEO preservation and redirect mapping"],
      image: "/case-study-realestate.png",
      href: "/joomla-development-service",
    },
    {
      tab: "Multilingual Sites",
      headline: "Multilingual Joomla with native language management.",
      description: "Multilingual Joomla site architecture using Joomla's native language manager, content associations, and language switcher. No third-party translation plugins — the most maintainable, performant multilingual CMS implementation available.",
      bullets: ["Native Joomla language manager", "Content association architecture", "Language switcher configuration", "SEO hreflang implementation"],
      image: "/case-study-saas.png",
      href: "/joomla-development-service",
    },
    {
      tab: "Joomla Maintenance",
      headline: "Ongoing Joomla updates and security management.",
      description: "Monthly Joomla maintenance: core and extension updates tested in staging, security patch application, performance monitoring, and developer support. Joomla requires regular updates — we manage them so you don't have to think about it.",
      bullets: ["Monthly core updates via staging", "Extension update management", "Security patch application", "Uptime monitoring"],
      image: "/case-study-home.png",
      href: "/joomla-development-service",
    },
  ],
  features: [
    { icon: <Code2 className="w-5 h-5 text-primary" />, title: "Custom Template Development", body: "Bespoke Joomla templates in clean HTML/CSS with no framework dependencies. Fast, maintainable, mobile-first." },
    { icon: <Layers className="w-5 h-5 text-primary" />, title: "Custom Component Development", body: "MVC Joomla components for complex content types and business functionality not covered by core or extensions." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "Multilingual Architecture", body: "Native Joomla multilingual setup — language manager, content associations, and hreflang SEO. No translation plugins needed." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Performance Optimisation", body: "Sub-1.5s load times, Gzip compression, browser caching, and CDN configuration. Joomla can be fast when built correctly." },
    { icon: <Settings className="w-5 h-5 text-primary" />, title: "ACL Configuration", body: "Granular access control configuration matching your editorial workflow — authors, editors, publishers — without plugins." },
    { icon: <RefreshCw className="w-5 h-5 text-primary" />, title: "Version Migration", body: "Legacy Joomla 1.5/2.5/3 migration to Joomla 4/5 with full content migration and SEO preservation." },
    { icon: <Database className="w-5 h-5 text-primary" />, title: "Plugin Development", body: "Custom Joomla plugins for system events, authentication customisation, and third-party integrations." },
    { icon: <Shield className="w-5 h-5 text-primary" />, title: "Security & Maintenance", body: "Monthly core and extension updates through staging, security scanning, and uptime monitoring." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "Analytics Integration", body: "GA4 and Search Console configured and verified. Conversion tracking and event tracking set up at launch." },
  ],
  techStack: [
    { platform: "Joomla 5.x", stat: "CMS", description: "The current Joomla long-term support release with full PHP 8.2 compatibility. All our builds target the current release — no legacy version deployments." },
    { platform: "PHP 8.2", stat: "Server-side", description: "Joomla custom component and plugin development in PHP 8.2 with strict typing and PSR-compliant code structure." },
    { platform: "Joomla Framework", stat: "Extension development", description: "Custom component and plugin development using the Joomla MVC framework — proper model, view, and controller separation with Joomla's service container." },
    { platform: "Joomla Language Manager", stat: "Multilingual", description: "Joomla's native language management system for multilingual sites — no third-party translation plugins required, with content associations and automatic hreflang generation." },
    { platform: "JoomSEF / SH404SEF", stat: "SEO", description: "SEF URL configuration and SEO extension integration for clean, keyword-rich URLs and comprehensive meta management." },
    { platform: "Akeeba Backup", stat: "Backup", description: "Akeeba Backup for scheduled automated backups and one-click restore. Industry standard for Joomla site protection." },
  ],
  caseStudies: [
    { image: "/case-study-saas.png", client: "Global Trade Association", industry: "Membership", blurb: "Custom Joomla 5 membership portal with ACL-gated content, member directory, and event booking. Migrated from Joomla 2.5 with full content preservation.", metrics: [{ value: "100%", label: "Content migrated" }, { value: "+85%", label: "Member portal engagement" }] },
    { image: "/case-study-realestate.png", client: "European Property Group", industry: "Real Estate", blurb: "Multilingual Joomla 4 build in 6 languages using native language manager. Custom property listing component with advanced filtering. Zero third-party translation plugins.", metrics: [{ value: "6", label: "Languages — no plugins" }, { value: "+140%", label: "Organic traffic" }] },
    { image: "/case-study-home.png", client: "Municipal Services Portal", industry: "Government", blurb: "Legacy Joomla 1.5 migration to Joomla 5 for a government portal. Full ACL reconfiguration, 800+ article migration, and WCAG 2.1 AA accessibility compliance.", metrics: [{ value: "800+", label: "Articles migrated" }, { value: "WCAG AA", label: "Accessibility standard" }] },
  ],
  process: [
    { label: "Audit", headline: "Audit your existing Joomla site before planning anything.", description: "Version assessment, extension inventory, template structure review, content architecture, and performance baseline. We understand exactly what we're working with before recommending a path." },
    { label: "Design", headline: "Custom template design in Figma.", description: "Full UI/UX design covering every page template and module position — approved before development begins." },
    { label: "Develop", headline: "Custom template, components, and plugin development.", description: "Template development in clean HTML/CSS, custom component development, and plugin builds — all in a staging environment with weekly review milestones." },
    { label: "Configure", headline: "ACL, multilingual, and SEO configuration.", description: "Access control configuration matching your editorial workflow, language manager setup for multilingual sites, SEF URL configuration, and meta structure." },
    { label: "Migrate", headline: "Content migration and SEO preservation.", description: "For migration projects: full content migration, URL mapping, 301 redirect implementation, and post-migration ranking monitoring." },
    { label: "Launch", headline: "Zero-downtime launch with handover documentation.", description: "Staged DNS cutover, post-launch crawl, and analytics verification. Full handover documentation delivered — template guide, admin walkthrough, and maintenance instructions." },
  ],
  faqs: [
    { question: "Should I use Joomla, WordPress, or Drupal?", answer: "Joomla is the right choice when you need: built-in multilingual support (Joomla's native; WordPress requires plugins), granular ACL for editorial workflows, a more structured content model than WordPress but less developer-intensive than Drupal, or when your team is already familiar with Joomla. We'll give you a direct recommendation after a brief requirements conversation." },
    { question: "Is Joomla still actively maintained?", answer: "Yes. Joomla 5 is the current LTS release with active development and regular security updates. The Joomla project has a large community and is under active maintenance by the Open Source Matters organisation. Joomla 5 uses PHP 8.2 and is a modern, actively supported platform." },
    { question: "Can you migrate our Joomla 1.5 or 2.5 site to Joomla 5?", answer: "Yes. We've migrated from Joomla 1.5, 2.5, and 3.x to Joomla 4/5. The content migration is handled with custom scripts for older versions. Extensions require compatibility assessment — older extensions may need replacement with Joomla 4/5 equivalents or custom development. We give you a full compatibility and migration plan before starting." },
    { question: "Why do you avoid Gantry and T3 frameworks?", answer: "Gantry and T3 add significant performance overhead and create dependency lock-in. Sites built on these frameworks are harder to hand over to new developers, more difficult to optimise for performance, and accumulate framework-specific technical debt. Custom templates in clean HTML/CSS load faster, are simpler to maintain, and don't depend on a third-party framework vendor continuing development." },
    { question: "How long does a custom Joomla build take?", answer: "A standard custom Joomla site — design, template development, and content architecture — takes 6-10 weeks. Builds including custom components run 8-12 weeks. Migration projects run 6-10 weeks depending on content volume and extension complexity. We give you a firm timeline after our discovery session." },
  ],
  hubInsights: [
    { image: "/case-study-saas.png", category: "Joomla Development", readTime: "6 min read", title: "Joomla 5 in 2026: When It's the Right CMS and When It Isn't", excerpt: "Joomla is a capable CMS that's been unfairly overshadowed by WordPress's market share. We explain the scenarios where Joomla's built-in multilingual support, granular ACL, and structured content model make it the better choice — and the scenarios where WordPress or Drupal is a better fit.", author: "James Okafor", authorRole: "CMS Lead", href: "/blog/joomla-5-right-cms-2026" },
    { image: "/case-study-realestate.png", category: "Multilingual", readTime: "5 min read", title: "Joomla Native Multilingual vs. Translation Plugins: Why Built-In Always Wins", excerpt: "Joomla's native language management is the most capable built-in multilingual CMS system available. Content associations, automatic hreflang, and language-specific menus — all without a plugin. We compare the native approach to WPML and similar plugins on architecture, performance, and maintenance.", author: "Priya Anand", authorRole: "Multilingual Specialist", href: "/blog/joomla-native-multilingual" },
    { image: "/case-study-home.png", category: "Joomla Migration", readTime: "7 min read", title: "Migrating from Joomla 3.x to Joomla 5: The Complete Guide", excerpt: "Joomla 3 reached end-of-life and Joomla 5 is a major architecture change. The migration path is not trivial — extensions require compatibility review, templates need rebuilding, and the content migration requires careful mapping. We walk through the complete migration process with the steps we use on every legacy Joomla migration.", author: "Marcus Chen", authorRole: "Migration Lead", href: "/blog/joomla-3-to-5-migration-guide" },
  ],
};

export default function JoomlaHub() {
  return <ServiceHubPage data={joomlaData} />;
}
