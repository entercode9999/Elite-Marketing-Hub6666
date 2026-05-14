import { Zap, Code2, Settings, Globe, TrendingUp, Database, BarChart2, Layers, Shield } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-gradient-to-r from-[#6c2bd9] to-[#4f46e5] px-4 py-3 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white font-black text-sm">H+</span>
        </div>
        <div>
          <p className="text-white font-bold text-xs">Hyvä Enterprise</p>
          <p className="text-white/60 text-[9px]">Adobe Commerce + Hyvä</p>
        </div>
      </div>
      <div className="bg-[#0a0c12] p-4">
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[{ v: "100", l: "Lighthouse", c: "#22c55e" }, { v: "B2B+B2C", l: "Commerce models", c: "#6c2bd9" }, { v: "B2B+B2C", l: "Commerce", c: "#f59e0b" }].map((s) => (
            <div key={s.l} className="bg-white/5 rounded-lg p-2.5 text-center">
              <p className="font-black text-sm" style={{ color: s.c }}>{s.v}</p>
              <p className="text-[9px] text-white/30 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/5 rounded-xl p-3 border border-white/8">
          <p className="text-[9px] text-white/30 uppercase tracking-widest mb-2">Enterprise Stack</p>
          {["Adobe Commerce + Hyvä Theme", "Hyvä Checkout + B2B", "PWA / Headless option", "Adobe Experience Cloud"].map((f) => (
            <div key={f} className="flex items-center gap-2 py-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#6c2bd9]" />
              <span className="text-[9px] text-white/50">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100">
      <p className="text-[10px] text-gray-400">Lighthouse</p>
      <p className="text-2xl font-black text-[#22c55e]">100</p>
    </div>
    <div className="absolute -top-4 -left-4 bg-gradient-to-r from-[#6c2bd9] to-[#4f46e5] rounded-xl px-3 py-2.5 shadow-xl">
      <p className="text-white font-black text-xs">Hyvä Enterprise</p>
    </div>
  </div>
);

const hyvaEnterpriseData: HubData = {
  slug: "hyva-enterprise-solutions",
  label: "HYVÄ ENTERPRISE SOLUTIONS",
  breadcrumb: "Hyvä Enterprise",
  hero: {
    headline: "Hyvä Enterprise: Adobe Commerce Performance at Scale.",
    italic: "The fastest enterprise Magento experience.",
    description:
      "Hyvä Enterprise Solutions combines Adobe Commerce's enterprise feature set — B2B Commerce, multi-store, ERP integration, Adobe Experience Cloud — with Hyvä's lightweight frontend stack. The result is an enterprise commerce platform with 100 Lighthouse scores and sub-second LCP that scales to hundreds of millions in GMV.",
    cta: "Get an Enterprise Commerce Consultation",
    ctaHref: "/contact",
    badges: ["Adobe Commerce Partner", "Hyvä Certified", "Enterprise Scale", "B2B + B2C"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "100", label: "Lighthouse on enterprise builds" },
    { value: "100", label: "Lighthouse performance score" },
    { value: "B2B+B2C", label: "Unified enterprise commerce" },
    { value: "< 1s", label: "LCP on all store templates" },
  ],
  intro: {
    eyebrow: "Enterprise commerce without performance compromise",
    headline: "Enterprise commerce platforms have historically traded performance for capability. Hyvä on Adobe Commerce eliminates that trade-off.",
    body: "The traditional criticism of Magento for enterprise is performance. Adobe Commerce installations with 500,000+ SKUs, B2B catalogues, and ERP integrations have typically scored 20-35 on Lighthouse — because the Luma frontend stack was never designed for the complexity those features introduce. Hyvä changes this completely.",
    secondBody: "Hyvä's Alpine.js frontend is structurally faster than Luma on any site — but the performance advantage compounds with complexity. As you add B2B catalogue complexity, multi-store configurations, and custom checkout steps, Hyvä maintains its performance while Luma degrades. Enterprise sites with Hyvä consistently achieve 95-100 Lighthouse; the same sites on Luma typically score 20-40.",
    bullets: [
      "Adobe Commerce B2B + Hyvä: enterprise capability with sub-second performance",
      "Multi-store Hyvä architecture: shared component library across multiple brand storefronts",
      "Hyvä React Checkout for complex B2B checkout customisation requirements",
      "Adobe Experience Cloud integration (Analytics, Target, CDP) with Hyvä compatibility",
      "ERP integration (SAP, NetSuite) with Hyvä-compatible frontend for real-time inventory display",
    ],
  },
  proofSection: {
    eyebrow: "Why enterprise chooses Hyvä",
    headline: "An enterprise commerce platform that fails Core Web Vitals costs you SEO ranking, paid media efficiency, and conversion rate — simultaneously. Hyvä eliminates all three costs.",
    body: "The business case for Hyvä on an enterprise Adobe Commerce platform has three components: SEO rankings (Core Web Vitals are a Google ranking factor), paid media efficiency (faster landing pages convert more paid clicks), and organic conversion rate (faster stores convert better regardless of traffic source). For enterprise brands spending millions on marketing, improving all three simultaneously through a frontend change is a compelling return.",
    secondBody: "We've implemented Hyvä on Adobe Commerce platforms running B2B Commerce with 300,000+ SKUs, multi-store configurations with 8+ storefronts, and ERP integrations with real-time inventory data. The 100 Lighthouse score is achieved on all of them — because Hyvä's architecture is inherently performant at any scale of backend complexity.",
    bullets: [
      "Multi-store Hyvä architecture uses a shared component library — common UI components built once and instantiated with store-specific configuration across all storefronts.",
      "B2B Commerce with Hyvä achieves enterprise performance levels while exposing the full B2B feature set — company accounts, price lists, and purchase approvals — in a fast, clean UI.",
      "Real-time ERP inventory display is implemented using Hyvä's Alpine.js architecture for efficient client-side data updates without page reloads.",
      "Adobe Experience Cloud integration (Analytics, Target, CDP) requires Hyvä-compatible data layer implementation — we maintain compatibility with every Adobe platform update.",
      "The Hyvä React Checkout handles complex B2B checkout requirements — multi-step approval workflows, PO number capture, and custom shipping logic — without compromising checkout performance.",
      "Enterprise documentation package covers architecture decisions, component library, integration data flows, and operational runbooks — required for enterprise maintenance and team onboarding.",
    ],
  },
  subServices: [
    {
      tab: "Adobe Commerce + Hyvä",
      headline: "Full Adobe Commerce implementation on the Hyvä frontend stack.",
      description: "End-to-end Adobe Commerce implementation with a custom Hyvä theme — B2B Commerce, multi-store configuration, ERP integration, and Adobe Experience Cloud — all on a frontend that achieves 100 Lighthouse. The full enterprise feature set with no performance compromise.",
      bullets: ["Full Adobe Commerce feature set", "Custom Hyvä theme", "B2B Commerce configuration", "Adobe Experience Cloud integration"],
      image: "/case-study-realestate.png",
      href: "/hyva-enterprise-solutions",
    },
    {
      tab: "Multi-Store Architecture",
      headline: "Shared Hyvä component library across multiple storefronts.",
      description: "Multi-store Hyvä architecture for brands operating multiple storefronts from a single Adobe Commerce installation. Shared component library, store-specific theming, and unified component maintenance. 100 Lighthouse on every store.",
      bullets: ["Shared component library", "Store-specific theme variants", "Centralised component maintenance", "Cross-store performance parity"],
      image: "/hero-showcase.png",
      href: "/hyva-enterprise-solutions",
    },
    {
      tab: "Hyvä React Checkout",
      headline: "React-powered checkout for complex enterprise B2B requirements.",
      description: "Hyvä React Checkout implementation for enterprise B2B requirements — multi-step approval workflows, purchase order capture, custom shipping logic, and complex payment routing. React's component ecosystem handles complexity that Alpine.js checkout cannot.",
      bullets: ["React-powered B2B checkout", "Purchase order workflow", "Multi-step approval process", "Complex payment routing"],
      image: "/work-1.png",
      href: "/hyva-enterprise-solutions",
    },
    {
      tab: "Existing Store Migration",
      headline: "Migrate your Adobe Commerce store from Luma to Hyvä.",
      description: "Luma to Hyvä migration for live Adobe Commerce installations — all custom templates rebuilt, all extensions updated for Hyvä compatibility, and staged migration with your team's UAT before cutover. Consistent 60-70 Lighthouse point improvement.",
      bullets: ["Full Luma → Hyvä migration", "Custom template rebuild", "Extension compatibility work", "Parallel environment UAT"],
      image: "/industry-ecommerce.png",
      href: "/hyva-enterprise-solutions",
    },
    {
      tab: "Performance Optimisation",
      headline: "Enterprise-scale performance for high-traffic Adobe Commerce.",
      description: "Performance infrastructure for high-traffic Adobe Commerce: Varnish, Redis, Elasticsearch, and auto-scaling combined with Hyvä's lightweight frontend for the fastest possible end-to-end experience. Load testing at 10x expected peak traffic.",
      bullets: ["Varnish + Redis + Elasticsearch", "CDN and auto-scaling", "Load testing at 10x peak traffic", "New Relic APM monitoring"],
      image: "/case-study-ecommerce.png",
      href: "/hyva-enterprise-solutions",
    },
  ],
  features: [
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "100 Lighthouse at Enterprise Scale", body: "Hyvä maintains its 95-100 Lighthouse scores under enterprise complexity — B2B, multi-store, ERP integration — where Luma degrades to 20-40." },
    { icon: <Layers className="w-5 h-5 text-primary" />, title: "Multi-Store Component Library", body: "Shared Hyvä component library across multiple storefronts — built once, deployed with store-specific configuration across your entire brand portfolio." },
    { icon: <Code2 className="w-5 h-5 text-primary" />, title: "Hyvä React Checkout", body: "React-powered checkout for enterprise B2B requirements — purchase order workflows, multi-step approvals, and complex payment logic." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "Adobe Experience Cloud", body: "Adobe Analytics, Target, and CDP integration maintained with full Hyvä compatibility — personalised experiences at enterprise scale." },
    { icon: <Database className="w-5 h-5 text-primary" />, title: "ERP Integration", body: "Real-time ERP inventory and pricing display implemented via Alpine.js — efficient client-side updates without the page-reload pattern." },
    { icon: <TrendingUp className="w-5 h-5 text-primary" />, title: "Core Web Vitals", body: "Pass Core Web Vitals on every page template across every storefront in your organisation — measurable ranking impact from a Google factor." },
    { icon: <Settings className="w-5 h-5 text-primary" />, title: "B2B Commerce on Hyvä", body: "Company accounts, shared catalogues, and purchase order workflows in a frontend that achieves enterprise-grade performance." },
    { icon: <Shield className="w-5 h-5 text-primary" />, title: "Enterprise Infrastructure", body: "Adobe Commerce Cloud or AWS with Varnish, Redis, Elasticsearch, and auto-scaling. Load tested at 10x expected peak before launch." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "Enterprise Documentation", body: "Architecture documentation, component library guide, integration data flows, and operational runbooks delivered at project completion." },
  ],
  techStack: [
    { platform: "Adobe Commerce 2.4 + Hyvä", stat: "Platform + Theme", description: "Adobe Commerce on the latest supported 2.4.x release with Hyvä as the base theme framework. All Adobe Commerce features — B2B, Live Search, Product Recommendations — implemented with Hyvä-compatible frontend components." },
    { platform: "Hyvä React Checkout", stat: "Checkout", description: "React-powered checkout component for enterprise B2B requirements. Handles complex checkout flows — purchase order capture, approval routing, and custom shipping logic — that require React's component model." },
    { platform: "Alpine.js + Tailwind CSS", stat: "Frontend stack", description: "Hyvä's core frontend stack. Alpine.js for interactive components, Tailwind CSS with purging for minimal CSS output. The stack that produces consistent 95-100 Lighthouse scores at any scale of backend complexity." },
    { platform: "Adobe Experience Cloud", stat: "Analytics + Personalisation", description: "Adobe Analytics, Adobe Target, and Real-Time CDP integrated with Adobe Commerce via Adobe's Experience Platform Web SDK — compatible with Hyvä's frontend architecture." },
    { platform: "Adobe Commerce Cloud", stat: "Hosting", description: "Adobe's managed hosting platform — pre-configured for Adobe Commerce with Fastly CDN, auto-scaling, and environment provisioning. Ideal for enterprise Adobe Commerce deployments." },
    { platform: "New Relic APM", stat: "Monitoring", description: "Application performance monitoring with real user monitoring — transaction tracing, error rate monitoring, and infrastructure metrics. Mandatory for enterprise Adobe Commerce operations." },
  ],
  caseStudies: [
    { image: "/case-study-ecommerce.png", client: "National Supply Group", industry: "B2B Commerce", blurb: "Adobe Commerce + Hyvä enterprise build with B2B Commerce, 8-store multi-site, and SAP integration. 100 Lighthouse on every storefront. 100 Lighthouse on all storefronts.", metrics: [{ value: "100", label: "Lighthouse on all 8 stores" }, { value: "8", label: "Multi-site stores" }] },
    { image: "/case-study-realestate.png", client: "LuxeBrand Portfolio", industry: "Luxury Retail", blurb: "Multi-brand Adobe Commerce + Hyvä architecture with shared component library across 4 brand storefronts. Adobe Target personalisation running on all stores with Hyvä compatibility.", metrics: [{ value: "4", label: "Brand storefronts from one platform" }, { value: "+34%", label: "CVR from personalisation" }] },
    { image: "/hero-showcase.png", client: "Industrial Supply Co.", industry: "Wholesale", blurb: "Luma to Hyvä migration on Adobe Commerce with Hyvä React Checkout for B2B PO workflow. Lighthouse improved from 26 to 98. Checkout completion rate up 28%.", metrics: [{ value: "98", label: "Lighthouse (was 26)" }, { value: "+28%", label: "Checkout completion" }] },
  ],
  process: [
    { label: "Discovery", headline: "Enterprise requirements and architecture planning.", description: "Stakeholder workshops, existing platform audit, Hyvä compatibility assessment for all modules, and infrastructure review. Output: complete technical specification for the enterprise implementation." },
    { label: "Architecture", headline: "Multi-store component architecture and integration design.", description: "Shared component library design, store-specific theming strategy, Adobe Experience Cloud integration architecture, and ERP data flow design. Documented and reviewed before any development begins." },
    { label: "Develop", headline: "Hyvä component library and store-specific themes.", description: "Shared component library development, store-specific theming, Hyvä React Checkout build, and module compatibility work — in parallel sprints with regular staging deployments for your review." },
    { label: "Integrate", headline: "Adobe Experience Cloud and ERP integration.", description: "Adobe Analytics data layer, Adobe Target implementation, Real-Time CDP segments, and ERP/SAP integration — tested against your actual data in the staging environment before production." },
    { label: "Test", headline: "Enterprise QA: functional, performance, and load testing.", description: "Full functional testing across every user flow, performance testing at 10x expected peak traffic, and security scan before production deployment. UAT phase with your enterprise team." },
    { label: "Launch", headline: "Staged production deployment with rollback capability.", description: "Blue-green deployment with staged traffic migration. Performance monitoring live before traffic reaches production. Rollback procedure tested and ready for the first 24 hours post-launch." },
  ],
  faqs: [
    { question: "Is Hyvä suitable for Adobe Commerce enterprise deployments?", answer: "Yes — and it's our strong recommendation for any new Adobe Commerce project. Hyvä is fully compatible with Adobe Commerce's B2B module, Product Recommendations, Live Search, and Adobe Experience Cloud integrations. The performance advantages of Hyvä compound with the complexity of enterprise feature sets, where Luma's performance degrades most severely." },
    { question: "How does multi-store Hyvä architecture work?", answer: "Multi-store Hyvä architecture uses a shared component library — Alpine.js and Tailwind CSS components built once with configurable props for store-specific variations. Each storefront uses the shared library with a store-specific Tailwind configuration (brand colours, typography, spacing) and store-specific overrides for templates that differ significantly. Updates to shared components deploy across all stores." },
    { question: "Does Hyvä work with Adobe B2B Commerce?", answer: "Yes. All Adobe Commerce B2B module features — company accounts, shared catalogs, negotiated pricing, purchase orders, and quick orders — work with Hyvä. B2B-specific templates (company dashboard, quote management, requisition lists) are rebuilt in the Hyvä framework as part of the project. For complex B2B checkout requirements, we implement Hyvä React Checkout." },
    { question: "What is the Hyvä React Checkout and when do I need it?", answer: "Hyvä React Checkout replaces the standard Hyvä Checkout (Alpine.js) with a React-powered equivalent — needed when enterprise checkout requirements go beyond what Alpine.js can handle: complex multi-step B2B approval workflows, dynamic purchase order routing, and custom payment logic that requires React's component model." },
    { question: "How long does an enterprise Hyvä implementation take?", answer: "A standard Adobe Commerce + Hyvä enterprise implementation takes 20-28 weeks from discovery to launch. Multi-store implementations with 4+ storefronts and Adobe Experience Cloud integration run 28-36 weeks. We provide a detailed project plan and milestone calendar after the discovery and architecture phase." },
  ],
  hubInsights: [
    { image: "/work-1.png", category: "Hyvä Enterprise", readTime: "9 min read", title: "Adobe Commerce + Hyvä: The Enterprise Commerce Stack for 2026", excerpt: "Adobe Commerce provides enterprise commerce capability. Hyvä provides frontend performance. Together, they eliminate the trade-off that has made enterprise Magento synonymous with poor performance. We share the architecture decisions, implementation approach, and performance results from enterprise builds running this stack.", href: "/blog/adobe-commerce-hyva-enterprise-2026" },
    { image: "/case-study-realestate.png", category: "Multi-Store", readTime: "7 min read", title: "How to Build a Multi-Brand Adobe Commerce Platform with a Shared Hyvä Component Library", excerpt: "Multi-brand commerce platforms built on Adobe Commerce benefit from shared infrastructure but need brand-specific storefronts. Hyvä's Alpine.js + Tailwind stack is ideal for this architecture — shared components with store-specific configuration. We walk through the architecture pattern and the development approach.", href: "/blog/multi-brand-hyva-component-library" },
    { image: "/hero-showcase.png", category: "B2B Commerce", readTime: "6 min read", title: "Hyvä React Checkout for Enterprise B2B: What It Can Do That Alpine.js Checkout Can't", excerpt: "The standard Hyvä Checkout handles most checkout requirements. Enterprise B2B checkout — multi-step purchase approval, dynamic PO routing, and complex payment logic — requires React's component model. We explain when to choose Hyvä React Checkout and walk through the B2B checkout patterns it enables.", href: "/blog/hyva-react-checkout-b2b" },
  ],
};

export default function HyvaEnterpriseHub() {
  return <ServiceHubPage data={hyvaEnterpriseData} />;
}
