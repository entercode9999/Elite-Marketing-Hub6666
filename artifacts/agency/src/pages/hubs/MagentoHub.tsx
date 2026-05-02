import { Settings, Zap, Database, Globe, Code2, Shield, RefreshCw, BarChart2, Layers } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-[#f26322] px-4 py-3 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white font-black text-sm">M</span>
        </div>
        <div>
          <p className="text-white font-bold text-xs">Magento 2 Build</p>
          <p className="text-white/60 text-[9px]">Custom Extension Development</p>
        </div>
      </div>
      <div className="bg-[#0a0c12] p-4">
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[{ v: "250k+", l: "SKUs handled", c: "#22c55e" }, { v: "99.9%", l: "Uptime", c: "#1a56ff" }, { v: "B2B", l: "Commerce ready", c: "#f59e0b" }].map((s) => (
            <div key={s.l} className="bg-white/5 rounded-lg p-2.5 text-center">
              <p className="font-black text-sm" style={{ color: s.c }}>{s.v}</p>
              <p className="text-[9px] text-white/30 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/5 rounded-xl p-3 border border-white/8">
          <p className="text-[9px] text-white/30 uppercase tracking-widest mb-2">Capabilities</p>
          {["Custom checkout flow", "ERP / SAP integration", "B2B pricing tiers", "Multi-store management"].map((f) => (
            <div key={f} className="flex items-center gap-2 py-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#f26322]" />
              <span className="text-[9px] text-white/50">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100">
      <p className="text-[10px] text-gray-400">SKU capacity</p>
      <p className="text-2xl font-black text-[#f26322]">250k+</p>
    </div>
    <div className="absolute -top-4 -left-4 bg-[#f26322] rounded-xl px-3 py-2.5 shadow-xl">
      <p className="text-white font-black text-xs">Magento 2</p>
    </div>
  </div>
);

const magentoData: HubData = {
  slug: "magento-development",
  label: "MAGENTO DEVELOPMENT",
  breadcrumb: "Magento Development",
  hero: {
    headline: "Magento Development for Complex Commerce at Scale.",
    italic: "Enterprise capability. Precisely implemented.",
    description:
      "Custom Magento 2 development, extension builds, B2B commerce configuration, and ERP integrations for businesses that have outgrown simpler platforms. We build and maintain Magento at the level of complexity your business requires.",
    cta: "Get a Free Magento Consultation",
    ctaHref: "/contact",
    badges: ["Magento 2 Expert", "B2B Commerce", "ERP Integration", "Adobe Partner"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "250k+", label: "SKUs managed per client" },
    { value: "99.9%", label: "Uptime on managed builds" },
    { value: "50+", label: "Magento projects delivered" },
    { value: "10+", label: "Years of Experience" },
  ],
  intro: {
    eyebrow: "Why Magento for complex commerce",
    headline: "When your catalogue, pricing rules, and business logic are too complex for Shopify, Magento is the answer.",
    body: "Shopify is excellent for DTC brands with a standard product catalogue and straightforward pricing. Magento is for businesses that have outgrown that model: complex B2B pricing tiers, 50,000+ SKU catalogues, ERP integrations, custom checkout workflows, and multi-store management across different brands or regions. The platform is as powerful as the implementation is careful.",
    secondBody: "Magento's power is also its risk. A poorly implemented Magento store is slow, hard to maintain, and expensive to extend. A well-implemented one scales to hundreds of thousands of SKUs, handles complex business rules, and integrates seamlessly with your ERP, CRM, and warehouse management systems. The difference is entirely in how it's built.",
    bullets: [
      "Custom Magento 2 theme and extension development",
      "B2B Commerce configuration: customer groups, price lists, quote management",
      "ERP, SAP, and WMS integration via custom modules",
      "Multi-store management for multiple brands or regions",
      "Performance optimisation: Varnish caching, Elasticsearch, Redis",
    ],
  },
  proofSection: {
    eyebrow: "Magento at enterprise scale",
    headline: "The businesses that choose Magento don't choose it for simplicity — they choose it for control. We make that control work.",
    body: "Magento 2 gives you capabilities that no SaaS eCommerce platform can match: multi-store management, B2B commerce, custom checkout pipelines, complex pricing rules, and deep ERP integration. The tradeoff is implementation complexity. Every capability requires configuration that, done wrong, creates performance problems and maintenance overhead.",
    secondBody: "We've inherited Magento implementations from other agencies where a 100,000-SKU catalogue was generating 15-second page loads, checkout was failing 8% of the time, and the codebase had 40+ installed modules with conflicting dependencies. We've rebuilt the same business in 12 weeks to sub-2s page loads, 99.9% checkout success rate, and a clean, documented codebase. Implementation quality is everything in Magento.",
    bullets: [
      "Every Magento project begins with a full environment audit: module inventory, performance profiling, database size analysis, and server configuration review.",
      "Custom extension development follows Magento coding standards with full unit test coverage — no hacks in core files, no workarounds that break on security patches.",
      "ERP integrations use Magento's native integration framework with proper queue management and error handling — not direct database reads that break on schema changes.",
      "B2B Commerce configuration includes customer group management, negotiated price lists, request-for-quote workflows, and custom checkout steps.",
      "Performance tuning includes Varnish full page cache, Redis for session and cache storage, Elasticsearch for catalogue search, and CDN configuration for all static assets.",
      "We provide comprehensive technical documentation: module architecture, data flow diagrams, deployment procedures, and runbooks for common maintenance tasks.",
    ],
  },
  subServices: [
    {
      tab: "Magento 2 Development",
      headline: "Custom Magento 2 builds designed for your business complexity.",
      description: "Full Magento 2 implementations — custom theme development, extension builds, third-party integrations, and performance configuration. Built to Magento coding standards with documentation your next developer can follow.",
      bullets: ["Custom theme (no page builders)", "Extension development", "Third-party API integrations", "Full technical documentation"],
      image: "/case-study-saas.png",
      href: "/magento-development",
    },
    {
      tab: "B2B Commerce",
      headline: "Magento B2B Commerce configured for complex wholesale operations.",
      description: "Magento B2B Commerce module configuration: company accounts, customer group pricing, negotiated price lists, purchase order workflows, quick order forms, and requisition lists. The full B2B feature set, properly configured for your wholesale business.",
      bullets: ["Company account management", "Negotiated price lists", "Purchase order workflows", "Quick order and requisition lists"],
      image: "/case-study-saas.png",
      href: "/magento-development",
    },
    {
      tab: "ERP Integration",
      headline: "Seamless ERP, SAP, and WMS integration.",
      description: "Bidirectional data integration between Magento 2 and your ERP (SAP, NetSuite, Microsoft Dynamics, custom). Order management, inventory synchronisation, customer data, and pricing — all flowing between systems reliably and in real time.",
      bullets: ["SAP, NetSuite, Dynamics integration", "Real-time inventory sync", "Order management bidirectional flow", "Custom message queue architecture"],
      image: "/case-study-saas.png",
      href: "/magento-development",
    },
    {
      tab: "Performance Tuning",
      headline: "From slow Magento to sub-2s page loads.",
      description: "Magento performance optimisation: Varnish full page cache configuration, Redis for session and block cache, Elasticsearch for catalogue search, image and static asset CDN, and database query optimisation. We consistently take underperforming Magento stores to sub-2s page loads.",
      bullets: ["Varnish FPC configuration", "Redis session/cache setup", "Elasticsearch optimisation", "Database query profiling"],
      image: "/case-study-saas.png",
      href: "/magento-development",
    },
    {
      tab: "Magento Support",
      headline: "Ongoing Magento maintenance by engineers who know the platform.",
      description: "Monthly Magento maintenance: security patch application, module updates, performance monitoring, and a dedicated support line staffed by Magento-certified developers. Your store stays current and secure without the risk of unmanaged updates.",
      bullets: ["Security patch application", "Module update management", "Performance monitoring", "Dedicated developer support"],
      image: "/case-study-saas.png",
      href: "/magento-development",
    },
  ],
  features: [
    { icon: <Code2 className="w-5 h-5 text-primary" />, title: "Custom Extension Development", body: "Magento 2 extensions built to coding standards with unit test coverage. No core file modifications. Clean, documented, and upgrade-safe." },
    { icon: <Database className="w-5 h-5 text-primary" />, title: "ERP / WMS Integration", body: "Bidirectional integration with SAP, NetSuite, Dynamics, and custom ERPs. Queue-based architecture for reliability under load." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Performance Optimisation", body: "Varnish, Redis, Elasticsearch, and CDN configuration. Sub-2s page loads on catalogues of any size." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "B2B Commerce", body: "Full Magento B2B feature set: company accounts, price lists, quote management, and purchase order workflows." },
    { icon: <Layers className="w-5 h-5 text-primary" />, title: "Multi-Store Management", body: "Multi-store and multi-website configuration for brands operating across multiple regions or product lines." },
    { icon: <RefreshCw className="w-5 h-5 text-primary" />, title: "Magento Migrations", body: "M1 to M2 migrations, platform-to-Magento migrations, and version upgrades — with zero downtime and full data integrity." },
    { icon: <Shield className="w-5 h-5 text-primary" />, title: "Security & Patching", body: "Regular security patch application, vulnerability scanning, and malware detection. Magento requires active security maintenance." },
    { icon: <Settings className="w-5 h-5 text-primary" />, title: "Infrastructure Management", body: "AWS / GCP Magento hosting with auto-scaling, load balancing, and 99.9% uptime SLA. Managed by engineers who know the platform." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "Analytics & Reporting", body: "Custom Magento reporting, GA4 integration, and business intelligence dashboards for catalogue performance and revenue analysis." },
  ],
  techStack: [
    { platform: "Magento 2 / Adobe Commerce", stat: "Platform", description: "Certified Magento 2 development with the full feature set: B2B Commerce, PWA Studio, Page Builder, and Inventory Management. Applicable for both Community and Adobe Commerce editions." },
    { platform: "PHP 8.2 / Composer", stat: "Backend", description: "Modern PHP with Composer dependency management. All custom extensions follow Magento's module architecture with proper dependency injection, observers, and plugin architecture." },
    { platform: "Elasticsearch / OpenSearch", stat: "Search", description: "Elasticsearch or OpenSearch for Magento catalogue search — dramatically better performance and relevance than MySQL search on large catalogues. Configured with custom analysers for your product taxonomy." },
    { platform: "Varnish / Redis", stat: "Caching", description: "Varnish for full page cache, Redis for session storage and block cache. The combination reduces origin server load by 80-90% and is essential for acceptable performance on high-traffic Magento stores." },
    { platform: "AWS / GCP", stat: "Infrastructure", description: "Managed Magento hosting on AWS (EC2, RDS, ElastiCache, CloudFront) or GCP. Auto-scaling configuration, read replicas for the database, and CDN for all static assets." },
    { platform: "RabbitMQ", stat: "Message queue", description: "RabbitMQ for asynchronous processing of ERP integrations, email sending, and other operations that shouldn't run synchronously in the request cycle." },
  ],
  caseStudies: [
    { image: "/case-study-saas.png", client: "Industrial Supply Co.", industry: "B2B Commerce", blurb: "150,000-SKU B2B Magento 2 build with SAP integration, company account management, and negotiated pricing. Order processing time reduced from 4 days to 2 hours.", metrics: [{ value: "150k", label: "SKUs" }, { value: "2h", label: "Order processing (was 4 days)" }] },
    { image: "/industry-ecommerce.png", client: "Coastal Collective", industry: "eCommerce", blurb: "Magento 2 performance rescue. Page loads improved from 8.2s to 1.7s. Checkout success rate increased from 91% to 99.3% after custom checkout rewrite.", metrics: [{ value: "1.7s", label: "Load time (was 8.2s)" }, { value: "99.3%", label: "Checkout success rate" }] },
    { image: "/case-study-saas.png", client: "Nova FinTech", industry: "SaaS", blurb: "Custom Magento extension for subscription billing and trial management. Integrated with Stripe and CRM. Fully tested and upgrade-safe.", metrics: [{ value: "Zero", label: "Core file modifications" }, { value: "100%", label: "Test coverage" }] },
  ],
  process: [
    { label: "Audit", headline: "Full environment and codebase audit before any development.", description: "Module inventory, performance profiling, database analysis, server configuration review, and security scan. We know exactly what we're working with before making a single change." },
    { label: "Architecture", headline: "Design the extension and integration architecture before coding.", description: "Custom extension architecture, integration data flow design, performance strategy, and infrastructure planning — all documented and reviewed before development begins." },
    { label: "Develop", headline: "Extension development to Magento coding standards.", description: "Custom module development with proper dependency injection, observer patterns, and plugin architecture. Unit tests for all business logic. No core file modifications — ever." },
    { label: "Integrate", headline: "ERP, CRM, and third-party system integration.", description: "Queue-based integration architecture for reliability. Bidirectional data flows with proper error handling, retry logic, and monitoring. Tested in staging against your actual ERP data before production." },
    { label: "Optimise", headline: "Performance tuning: caching, search, and infrastructure.", description: "Varnish, Redis, Elasticsearch, and CDN configured and verified. Load testing before every major launch to confirm performance under your actual traffic patterns." },
    { label: "Support", headline: "Ongoing security patching and maintenance.", description: "Monthly security patch application through a staging environment, performance monitoring, and a dedicated developer support line. Magento requires active maintenance to remain secure and performant." },
  ],
  faqs: [
    { question: "Magento or Shopify Plus — which should we choose?", answer: "Shopify Plus is right for DTC and B2C brands with a standard product catalogue and straightforward pricing. Magento is right when you need complex B2B pricing, 50,000+ SKU catalogues, deep ERP integration, custom checkout workflows, or multi-store management that Shopify's architecture doesn't support. We'll give you a direct recommendation during our discovery call." },
    { question: "What is the difference between Magento Open Source and Adobe Commerce?", answer: "Magento Open Source is the free, community edition. Adobe Commerce (formerly Magento Commerce) adds B2B Commerce, Page Builder, Business Intelligence, and Adobe Experience Cloud integrations. For B2B operations or businesses needing the advanced feature set, Adobe Commerce is worth the licensing cost. We implement both." },
    { question: "How long does a custom Magento 2 implementation take?", answer: "A standard Magento 2 store — theme, extensions, and standard integrations — takes 12-16 weeks. Complex builds with ERP integration, B2B configuration, and custom checkout workflows run 16-24 weeks. We give you a detailed project plan after the discovery and architecture phase." },
    { question: "Can you rescue a poorly-implemented Magento store?", answer: "Yes, and we do it regularly. We start with a full audit — codebase review, performance profiling, security scan — and produce an honest assessment of what it will take. Some stores need targeted fixes; others need a rebuild on a clean foundation. We tell you which before we start." },
    { question: "What ongoing support do you provide?", answer: "Monthly maintenance plans covering security patch application (tested in staging first), module updates, performance monitoring, and developer support. Magento requires active maintenance — security vulnerabilities are released regularly and unpatched stores are actively targeted." },
  ],
  hubInsights: [
    { image: "/case-study-saas.png", category: "Magento Development", readTime: "7 min read", title: "Magento 2 Performance: The Complete Optimisation Stack for Enterprise Stores", excerpt: "A properly configured Magento 2 store on the right infrastructure achieves sub-2s page loads regardless of catalogue size. The components are Varnish, Redis, Elasticsearch, and proper database configuration. We walk through the complete optimisation stack with configuration examples.", author: "James Okafor", authorRole: "Magento Lead", href: "/blog/magento-2-performance-stack" },
    { image: "/industry-ecommerce.png", category: "B2B Commerce", readTime: "6 min read", title: "Magento B2B Commerce: When and How to Implement It", excerpt: "Magento B2B Commerce module unlocks company accounts, negotiated pricing, purchase order workflows, and quick order capabilities. We walk through the implementation decisions, common configuration pitfalls, and the business cases where B2B Commerce pays for itself in the first quarter.", author: "Marcus Chen", authorRole: "Commerce Architect", href: "/blog/magento-b2b-commerce-guide" },
    { image: "/case-study-saas.png", category: "ERP Integration", readTime: "8 min read", title: "How to Build a Reliable Magento 2 to SAP Integration That Won't Break", excerpt: "Magento-ERP integrations are where most enterprise commerce implementations fail. Direct database reads, synchronous API calls in the request cycle, and missing error handling create fragile integrations that break under load. Here is the queue-based architecture we use on every ERP integration project.", author: "Priya Anand", authorRole: "Integration Lead", href: "/blog/magento-sap-integration" },
  ],
};

export default function MagentoHub() {
  return <ServiceHubPage data={magentoData} />;
}
