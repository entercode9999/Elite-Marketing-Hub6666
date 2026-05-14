import { Settings, Zap, Database, Globe, Code2, Shield, RefreshCw, BarChart2, Layers } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-gradient-to-r from-[#eb1000] to-[#ff6a00] px-4 py-3 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white font-black text-sm">A</span>
        </div>
        <div>
          <p className="text-white font-bold text-xs">Adobe Commerce</p>
          <p className="text-white/60 text-[9px]">Enterprise Implementation</p>
        </div>
      </div>
      <div className="bg-[#0a0c12] p-4">
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[{ v: "500k+", l: "SKUs", c: "#22c55e" }, { v: "B2B+B2C", l: "Commerce models", c: "#eb1000" }, { v: "B2B+B2C", l: "Commerce", c: "#f59e0b" }].map((s) => (
            <div key={s.l} className="bg-white/5 rounded-lg p-2.5 text-center">
              <p className="font-black text-sm" style={{ color: s.c }}>{s.v}</p>
              <p className="text-[9px] text-white/30 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/5 rounded-xl p-3 border border-white/8">
          <p className="text-[9px] text-white/30 uppercase tracking-widest mb-2">Adobe Ecosystem</p>
          {["Adobe Analytics integration", "Adobe Experience Manager", "Real-Time CDP segments", "Adobe Target personalisation"].map((f) => (
            <div key={f} className="flex items-center gap-2 py-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#eb1000]" />
              <span className="text-[9px] text-white/50">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100">
      <p className="text-[10px] text-gray-400">GMV managed</p>
      <p className="text-2xl font-black text-[#eb1000]">$100M+</p>
    </div>
    <div className="absolute -top-4 -left-4 bg-gradient-to-r from-[#eb1000] to-[#ff6a00] rounded-xl px-3 py-2.5 shadow-xl">
      <p className="text-white font-black text-xs">Adobe Commerce</p>
    </div>
  </div>
);

const adobeCommerceData: HubData = {
  slug: "adobe-commerce-development",
  label: "ADOBE COMMERCE DEVELOPMENT",
  breadcrumb: "Adobe Commerce",
  hero: {
    headline: "Adobe Commerce Development for Enterprise-Scale Commerce.",
    italic: "The full platform. Properly implemented.",
    description:
      "Adobe Commerce (formerly Magento Commerce) implementation, custom development, and Adobe Experience Cloud integration for enterprise brands managing complex multi-channel commerce. We implement the full platform — not just the storefront — including B2B Commerce, Adobe Analytics, AEM, and Real-Time CDP.",
    cta: "Get an Adobe Commerce Consultation",
    ctaHref: "/contact",
    badges: ["Adobe Commerce Partner", "AEM Certified", "B2B Commerce", "Enterprise Scale"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "B2B+B2C", label: "Commerce expertise" },
    { value: "500k+", label: "SKUs on single implementations" },
    { value: "B2B+B2C", label: "Unified commerce capability" },
    { value: "10+", label: "Adobe Commerce projects" },
  ],
  intro: {
    eyebrow: "Enterprise commerce on Adobe",
    headline: "Adobe Commerce earns its licensing cost when the full platform is implemented. Most organisations implement 30% of it.",
    body: "Adobe Commerce licensing starts at approximately $22,000 per year for mid-market and scales significantly for enterprise. At that investment, using only the storefront and checkout functionality — without B2B Commerce, Adobe Analytics, Real-Time CDP, or Adobe Target integration — means paying enterprise rates for features you're not using. We implement the full platform.",
    secondBody: "The Adobe Experience Cloud integration is where Adobe Commerce creates separation from Magento Open Source and other platforms: personalised experiences driven by Real-Time CDP segment data, A/B testing via Adobe Target, analytics via Adobe Analytics rather than GA4, and content managed in Adobe Experience Manager. Implemented properly, these capabilities produce measurable revenue impact that justifies the platform cost.",
    bullets: [
      "Full Adobe Commerce feature set: B2B, Page Builder, Product Recommendations, Business Intelligence",
      "Adobe Experience Cloud integration: Analytics, Target, AEM, and Real-Time CDP",
      "B2B Commerce: company accounts, quote management, purchase orders, and shared catalogs",
      "Custom extension development to Magento coding standards — upgrade-safe and documented",
      "Performance infrastructure: Varnish, Redis, Elasticsearch on AWS or Adobe Cloud",
    ],
  },
  proofSection: {
    eyebrow: "The Adobe Commerce advantage",
    headline: "Real-Time CDP + Adobe Target + Adobe Commerce = personalised commerce at enterprise scale. Nothing else delivers this out of one ecosystem.",
    body: "The full Adobe Experience Cloud stack on Adobe Commerce enables a level of personalisation and analytics sophistication that requires multiple disconnected tools to approximate on other platforms. Real-Time CDP builds audience segments from every customer touchpoint — commerce, email, advertising, support — and Adobe Target uses those segments to serve personalised experiences, product recommendations, and pricing in real time.",
    secondBody: "For enterprise brands managing B2B and B2C channels simultaneously, Adobe Commerce's unified commerce architecture is the only platform that handles both without a custom integration layer. B2B shared catalogs, negotiated pricing, and purchase order workflows coexist with a B2C storefront on a single platform, with shared inventory, order management, and customer data.",
    bullets: [
      "Real-Time CDP integration brings every customer touchpoint — online, offline, email, support — into a single audience profile that drives personalisation.",
      "Adobe Target A/B testing and personalisation engine delivers segment-specific experiences without manual intervention — fully automated at enterprise scale.",
      "B2B Commerce module handles company hierarchy, negotiated pricing, and purchase approval workflows that other platforms require a separate system to manage.",
      "Adobe Business Intelligence provides pre-built eCommerce analytics dashboards — cohort analysis, LTV calculation, and product performance — without custom BI infrastructure.",
      "Product Recommendations powered by Adobe Sensei (AI) delivers context-aware recommendations that improve with every transaction.",
      "Adobe Experience Manager integration enables enterprise-grade content management with shared asset libraries across every digital touchpoint.",
    ],
  },
  subServices: [
    {
      tab: "Adobe Commerce Implementation",
      headline: "End-to-end Adobe Commerce implementation from discovery to launch.",
      description: "Full Adobe Commerce implementation: requirements analysis, architecture design, custom theme development, extension development, integration build, and performance configuration. Delivered to enterprise quality standards with full documentation.",
      bullets: ["Discovery and architecture design", "Custom theme development", "Extension and integration development", "Performance and infrastructure setup"],
      image: "/case-study-ecommerce.png",
      href: "/adobe-commerce-development",
    },
    {
      tab: "Adobe Experience Cloud",
      headline: "Connect Adobe Commerce to the full Experience Cloud stack.",
      description: "Adobe Analytics, Adobe Target, Adobe Real-Time CDP, and Adobe Experience Manager integration with Adobe Commerce. The full personalisation and analytics stack — implemented by engineers who understand both the commerce platform and the Experience Cloud.",
      bullets: ["Adobe Analytics data layer", "Adobe Target A/B + personalisation", "Real-Time CDP segments", "AEM content integration"],
      image: "/industry-realestate.png",
      href: "/adobe-commerce-development",
    },
    {
      tab: "B2B Commerce",
      headline: "Enterprise B2B commerce on Adobe Commerce.",
      description: "Adobe Commerce B2B module implementation for enterprise wholesale operations — company hierarchy management, shared catalogs with negotiated pricing, purchase approval workflows, credit limits, and quick order functionality. The most capable B2B commerce platform available.",
      bullets: ["Company hierarchy management", "Shared catalogs and pricing", "Purchase approval workflows", "Credit management and net terms"],
      image: "/work-3.png",
      href: "/adobe-commerce-development",
    },
    {
      tab: "Custom Development",
      headline: "Custom modules and extensions built to Adobe standards.",
      description: "Custom Adobe Commerce extension development for ERP integration, custom checkout flows, third-party system connections, and proprietary business logic. All development follows Magento coding standards with unit tests and is upgrade-safe.",
      bullets: ["ERP / SAP / Dynamics integration", "Custom checkout pipelines", "Third-party API integrations", "Upgrade-safe module architecture"],
      image: "/industry-ecommerce.png",
      href: "/adobe-commerce-development",
    },
    {
      tab: "Performance & Infrastructure",
      headline: "Enterprise performance infrastructure for Adobe Commerce.",
      description: "Adobe Commerce Cloud or AWS infrastructure setup — Varnish full page cache, Redis, Elasticsearch, CDN, and auto-scaling. We consistently achieve sub-2s page loads on catalogues of any size and prepare infrastructure for peak-day traffic.",
      bullets: ["Adobe Commerce Cloud or AWS", "Varnish, Redis, Elasticsearch", "CDN and auto-scaling setup", "Peak load testing and validation"],
      image: "/hero-abstract.png",
      href: "/adobe-commerce-development",
    },
  ],
  features: [
    { icon: <Code2 className="w-5 h-5 text-primary" />, title: "Adobe Commerce Implementation", body: "End-to-end implementation from discovery through launch. Custom theme, custom extensions, and full integration stack." },
    { icon: <Layers className="w-5 h-5 text-primary" />, title: "Experience Cloud Integration", body: "Adobe Analytics, Target, Real-Time CDP, and AEM integration — the full Adobe personalisation and analytics ecosystem." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "B2B Commerce Module", body: "Enterprise B2B: company hierarchy, shared catalogs, negotiated pricing, purchase approvals, and credit management." },
    { icon: <Database className="w-5 h-5 text-primary" />, title: "ERP Integration", body: "SAP, NetSuite, and Dynamics integration via proper module architecture — queue-based, reliable, and upgrade-safe." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Performance at Scale", body: "Varnish, Redis, Elasticsearch, and CDN for sub-2s page loads on catalogues of any size." },
    { icon: <Settings className="w-5 h-5 text-primary" />, title: "Custom Module Development", body: "Bespoke Adobe Commerce extensions to Magento coding standards — tested, documented, and upgrade-safe." },
    { icon: <Shield className="w-5 h-5 text-primary" />, title: "Security & Compliance", body: "PCI DSS compliance review, security patch management, and vulnerability scanning on a regular schedule." },
    { icon: <RefreshCw className="w-5 h-5 text-primary" />, title: "Upgrade Management", body: "Adobe Commerce version upgrades tested in staging with full regression testing before production deployment." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "Adobe Analytics + BI", body: "Adobe Analytics data layer and Business Intelligence dashboards for cohort analysis, LTV, and product performance." },
  ],
  techStack: [
    { platform: "Adobe Commerce 2.4", stat: "Platform", description: "Current Adobe Commerce 2.4.x with PHP 8.2, all security patches current, and the full B2B module. We keep clients on supported versions with regular upgrade cycles." },
    { platform: "Adobe Experience Cloud", stat: "Analytics + Personalisation", description: "Adobe Analytics, Adobe Target, Adobe Real-Time CDP, and Adobe Experience Manager — integrated with Adobe Commerce through Adobe's native connector framework." },
    { platform: "Adobe Commerce Cloud", stat: "Hosting", description: "Adobe's managed hosting platform — pre-configured for Adobe Commerce with environment provisioning, auto-scaling, New Relic APM, and fastly CDN built in." },
    { platform: "Elasticsearch / OpenSearch", stat: "Search", description: "Native Adobe Commerce search integration with Elasticsearch or OpenSearch — required for the Live Search and Product Recommendations features on the Commerce edition." },
    { platform: "Adobe Sensei AI", stat: "AI/ML", description: "Adobe Sensei powers Product Recommendations and Live Search relevance ranking — AI-driven features that improve with every transaction on the platform." },
    { platform: "PHP 8.2 / Composer", stat: "Backend", description: "Adobe Commerce development requires strict adherence to the Magento module architecture — dependency injection, plugins, observers, and proper Composer package management." },
  ],
  caseStudies: [
    { image: "/case-study-ecommerce.png", client: "National Supply Group", industry: "B2B Commerce", blurb: "Adobe Commerce enterprise implementation with B2B Commerce module, SAP integration, and shared catalog management across 8 company accounts. Multi-market B2B ecommerce at scale.", metrics: [{ value: "100", label: "Lighthouse score" }, { value: "8", label: "Company accounts" }] },
    { image: "/industry-ecommerce.png", client: "LuxeBrand", industry: "Luxury Retail", blurb: "Adobe Commerce + Adobe Target + Real-Time CDP personalisation programme. Personalised homepage and product recommendations increased CVR by 34% on the homepage.", metrics: [{ value: "+34%", label: "Homepage CVR" }, { value: "6.1x", label: "ROAS" }] },
    { image: "/case-study-homeservices.png", client: "BuildCo Supply", industry: "Wholesale", blurb: "Migration from Magento 1 to Adobe Commerce with full B2B module and ERP integration. Order processing time reduced from 2 days to real-time with bidirectional SAP sync.", metrics: [{ value: "Real-time", label: "Order sync (was 2 days)" }, { value: "+55%", label: "Wholesale orders" }] },
  ],
  process: [
    { label: "Discovery", headline: "Enterprise requirements analysis and platform architecture design.", description: "Stakeholder workshops, requirements documentation, integration mapping, and infrastructure planning. The output is a complete technical specification that all development teams work from." },
    { label: "Architecture", headline: "Module architecture and integration design before development.", description: "Extension architecture, data flow design, integration contracts, and infrastructure planning. All architecture decisions documented and approved before development begins." },
    { label: "Develop", headline: "Theme, custom modules, and integrations in parallel sprints.", description: "Two-week sprints with staging deployments and weekly reviews. Theme development, module development, and integration build running in parallel with coordinated milestone reviews." },
    { label: "Integrate", headline: "Adobe Experience Cloud and ERP integration.", description: "Adobe Analytics data layer, Adobe Target, Real-Time CDP, and ERP integration built and tested against your actual data. UAT phase with your team before production deployment." },
    { label: "Test", headline: "Full regression testing and peak load validation.", description: "Functional testing across all user flows, performance load testing at 3x expected peak traffic, security scan, and PCI compliance review before production deployment." },
    { label: "Launch", headline: "Staged production deployment with rollback plan.", description: "Blue-green deployment with staged traffic migration, monitoring in place before traffic reaches production, and a tested rollback procedure in case of unexpected issues." },
  ],
  faqs: [
    { question: "What is the difference between Adobe Commerce and Magento Open Source?", answer: "Adobe Commerce (paid, from $22,000/year) adds B2B Commerce, Product Recommendations (Adobe Sensei AI), Live Search, Page Builder, Business Intelligence, and native Adobe Experience Cloud integrations. Magento Open Source is free but lacks these features. The licensing cost of Adobe Commerce is justified when you use the B2B module, the AI-driven recommendations, or the Experience Cloud integration stack." },
    { question: "How long does an Adobe Commerce implementation take?", answer: "Standard Adobe Commerce implementations take 16-24 weeks from discovery to launch. Enterprise implementations with ERP integration, B2B Commerce configuration, and Experience Cloud integration take 24-36 weeks. We provide a detailed project timeline after the requirements analysis phase." },
    { question: "Do you work with Adobe Commerce Cloud?", answer: "Yes. Adobe Commerce Cloud is our preferred hosting platform for Adobe Commerce — it's pre-configured for the platform with auto-scaling, New Relic APM, Fastly CDN, and environment provisioning managed by Adobe. We provision, configure, and manage Adobe Commerce Cloud environments as part of every implementation we deliver." },
    { question: "Can you integrate Adobe Commerce with our existing Adobe Analytics?", answer: "Yes. We implement the Adobe Commerce data layer for Adobe Analytics — page view events, product impression events, cart events, and purchase events — using Adobe's standard data collection framework. If you're running Adobe Launch (Adobe Tag Manager), we deploy the data layer through Launch tags." },
    { question: "What ongoing support do you provide?", answer: "Monthly maintenance plans covering security patch application (tested in staging), module updates, performance monitoring, and a dedicated developer support line. Adobe Commerce has a regular security patch release schedule — unpatched implementations are actively targeted. We keep every client on a patching schedule." },
  ],
  hubInsights: [
    { image: "/case-study-ecommerce.png", category: "Adobe Commerce", readTime: "8 min read", title: "Adobe Commerce vs. Magento Open Source: The Enterprise Decision Framework", excerpt: "Adobe Commerce costs significantly more than Magento Open Source. The question is whether the B2B module, AI recommendations, and Experience Cloud integration justify the cost for your specific business. We've helped 20+ organisations make this decision and have a clear framework for when each platform is the right choice.", href: "/blog/adobe-commerce-vs-magento-open-source" },
    { image: "/industry-realestate.png", category: "Personalisation", readTime: "7 min read", title: "Adobe Target + Real-Time CDP on Adobe Commerce: What Enterprise Personalisation Actually Looks Like", excerpt: "Most Adobe Commerce implementations use Adobe Target for basic A/B testing. The combination of Real-Time CDP segment data driving Adobe Target personalisation rules on an Adobe Commerce storefront is a fundamentally different capability — context-aware, real-time, and fully automated. Here is what it takes to implement it properly.", href: "/blog/adobe-target-rtcdp-commerce" },
    { image: "/work-3.png", category: "B2B Commerce", readTime: "6 min read", title: "Adobe Commerce B2B Module: The Complete Implementation Guide", excerpt: "The Adobe Commerce B2B module is the most capable B2B commerce feature set available on any platform. Company hierarchy management, shared catalogs, negotiated pricing, purchase approval workflows, and credit management — all in one module. Here is the complete implementation guide from requirements through go-live.", href: "/blog/adobe-commerce-b2b-module-guide" },
  ],
};

export default function AdobeCommerceHub() {
  return <ServiceHubPage data={adobeCommerceData} />;
}
