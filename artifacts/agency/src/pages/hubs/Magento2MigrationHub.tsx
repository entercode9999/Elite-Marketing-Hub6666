import { RefreshCw, Shield, Database, Zap, BarChart2, Globe, Settings, Code2, Layers } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-[#f26322] px-4 py-3 flex items-center gap-2.5">
        <RefreshCw className="w-4 h-4 text-white" />
        <div>
          <p className="text-white font-bold text-xs">M1 → M2 Migration</p>
          <p className="text-white/60 text-[9px]">Zero data loss · Full feature parity</p>
        </div>
      </div>
      <div className="bg-[#0a0c12] p-4">
        <div className="flex items-center gap-3 mb-3">
          <div className="flex-1 bg-white/5 rounded-lg p-2.5 text-center border border-white/8">
            <p className="text-[10px] font-black text-white/60">Magento 1</p>
            <p className="text-[8px] text-red-400 mt-1">End of Life · Insecure</p>
          </div>
          <RefreshCw className="w-4 h-4 text-[#f26322]" />
          <div className="flex-1 bg-primary/10 rounded-lg p-2.5 text-center border border-primary/20">
            <p className="text-[10px] font-black text-primary">Magento 2</p>
            <p className="text-[8px] text-[#22c55e] mt-1">Supported · Performant</p>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[{ v: "100%", l: "Data migrated" }, { v: "0", l: "Downtime hours" }, { v: "+180%", l: "Performance" }].map((s) => (
            <div key={s.l} className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
              <p className="text-sm font-black text-primary">{s.v}</p>
              <p className="text-[8px] text-white/30 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100">
      <p className="text-[10px] text-gray-400">Downtime</p>
      <p className="text-2xl font-black text-[#22c55e]">Zero</p>
    </div>
  </div>
);

const m2MigrationData: HubData = {
  slug: "magento-2-migration",
  label: "MAGENTO 2 MIGRATION",
  breadcrumb: "Magento 2 Migration",
  hero: {
    headline: "Magento 2 Migration Done Right. Zero Downtime. Zero Data Loss.",
    italic: "From M1, Shopify, or any platform — to M2.",
    description:
      "Magento 1 is end-of-life and actively exploited. Migration to Magento 2 is not optional for M1 stores still in production. We've executed 20+ M1-to-M2 migrations — with complete data integrity, full feature parity or improvement, and zero downtime deployments. We also migrate from Shopify, WooCommerce, and custom platforms to Magento 2.",
    cta: "Get a Free Migration Assessment",
    ctaHref: "/contact",
    badges: ["M1 → M2 Specialist", "Zero Downtime", "Data Integrity", "Full Feature Parity"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "20+", label: "M1→M2 migrations completed" },
    { value: "Zero", label: "Downtime on any migration" },
    { value: "100%", label: "Data integrity on every project" },
    { value: "+180%", label: "Avg. performance improvement" },
  ],
  intro: {
    eyebrow: "Why migrate to Magento 2 now",
    headline: "Magento 1 received its final security patch in June 2020. Every day it runs in production is a day of unmitigated security risk.",
    body: "Magento 1 is actively exploited by automated attack tools that scan for the platform signature and attempt known vulnerabilities. If your M1 store is still live, it has received zero security patches since June 2020 and is significantly more vulnerable than a properly maintained M2 or Shopify installation. The question is not whether to migrate, but how to do it without disrupting a live business.",
    secondBody: "We've run migrations for M1 stores doing $20M+ in annual revenue — businesses for whom any significant downtime during migration would be commercially catastrophic. Our migration approach uses a parallel-running environment, data synchronisation, and a delta migration strategy that keeps the M1 store live until the final DNS cutover — which takes minutes, not hours.",
    bullets: [
      "M1 → M2 migration with complete product, customer, and order data migration",
      "Parallel-run migration strategy: M2 environment built and tested while M1 stays live",
      "Delta migration handles new orders placed during the migration period — no data gaps",
      "Custom extension equivalent audit: every M1 extension evaluated and replaced or rebuilt in M2",
      "Theme redesign included: migration is the right time to upgrade the storefront, not just the backend",
    ],
  },
  proofSection: {
    eyebrow: "What makes a migration succeed",
    headline: "Migration failures are almost always caused by inadequate data migration testing and extension dependency management. We've solved both.",
    body: "Most migration failures share the same root causes: data that was mapped incorrectly and not tested with real transactions, M1 extensions that were replaced with M2 equivalents that behave differently, and a migration plan that required downtime for a live business. Our migration methodology addresses all three systematically.",
    secondBody: "We've taken over migrations from other agencies where the M2 environment was built but critical M1 functionality was missing, the order data had mapping errors that would corrupt the customer order history, and the team had no plan for handling orders placed during the cutover window. Rescuing a failed migration is harder than running a correct one — we build correctly from the start.",
    bullets: [
      "Data migration audit: every entity type (products, categories, customers, orders, CMS pages) is mapped, validated, and tested before cutover.",
      "Extension audit: every M1 extension is catalogued, its business function is documented, and an M2 equivalent or custom replacement is specified before development begins.",
      "Parallel environment: the M2 environment runs alongside M1 in production from week four of the project — tested by your team against real-world scenarios before cutover.",
      "Delta migration: a final data sync captures every order and customer interaction from the M1 store during the migration period — the M2 store launches with a complete transaction history.",
      "SEO preservation: every URL structure change is mapped to a 301 redirect, sitemap is submitted immediately post-launch, and ranking impact is monitored for 90 days.",
      "Post-launch monitoring: 30-day hypercare period with daily performance checks, data integrity validation, and dedicated developer support for your team.",
    ],
  },
  subServices: [
    {
      tab: "M1 → M2 Migration",
      headline: "Magento 1 to Magento 2 migration with full data and feature parity.",
      description: "Complete Magento 1 to Magento 2 migration: product catalogue, customer data, order history, CMS pages, extension replacement, theme redesign, and performance configuration. Parallel-run environment with delta migration for zero-downtime cutover.",
      bullets: ["Full data migration and validation", "Extension audit and replacement", "Theme redesign on M2", "Zero-downtime cutover process"],
      image: "/case-study-saas.png",
      href: "/magento-2-migration",
    },
    {
      tab: "Shopify → Magento 2",
      headline: "Migrate from Shopify to Magento 2 when your business outgrows the platform.",
      description: "Shopify to Magento 2 migration for businesses that need B2B commerce, complex pricing, large catalogue management, or ERP integration that Shopify can't deliver. Complete data migration, custom theme, and full feature rebuild on the Magento 2 platform.",
      bullets: ["Full product and customer migration", "Custom M2 theme development", "B2B Commerce configuration", "SEO preservation and monitoring"],
      image: "/case-study-saas.png",
      href: "/magento-2-migration",
    },
    {
      tab: "Platform → Magento 2",
      headline: "Migrate from any eCommerce platform to Magento 2.",
      description: "Platform migration to Magento 2 from WooCommerce, BigCommerce, custom builds, or any legacy eCommerce platform. Custom data migration scripts, URL mapping, SEO preservation, and post-migration monitoring.",
      bullets: ["Custom data migration scripts", "URL mapping and 301 redirects", "Content and media migration", "Post-launch monitoring programme"],
      image: "/case-study-realestate.png",
      href: "/magento-2-migration",
    },
    {
      tab: "Version Upgrade",
      headline: "Magento 2 version upgrade to the current supported release.",
      description: "Magento 2.x to 2.4.x upgrade with full extension compatibility testing, staging environment upgrade first, and regression testing before production deployment. Keeps your store on a supported version with current security patches.",
      bullets: ["Staging environment upgrade first", "Extension compatibility testing", "Full regression test suite", "Production deployment with rollback plan"],
      image: "/case-study-saas.png",
      href: "/magento-2-migration",
    },
    {
      tab: "SEO Migration",
      headline: "Migrate without losing a single organic ranking.",
      description: "SEO-preserving migration: complete URL audit, 301 redirect mapping for every changed URL, canonical configuration, sitemap resubmission, and 90-day ranking monitoring. We've run migrations with zero measurable organic traffic loss.",
      bullets: ["Complete URL audit and mapping", "301 redirect implementation", "Post-migration ranking monitoring", "Google Search Console management"],
      image: "/case-study-saas.png",
      href: "/magento-2-migration",
    },
  ],
  features: [
    { icon: <RefreshCw className="w-5 h-5 text-primary" />, title: "M1 → M2 Migration", body: "Complete Magento 1 to Magento 2 migration with full data integrity, feature parity, and zero downtime cutover." },
    { icon: <Database className="w-5 h-5 text-primary" />, title: "Data Migration", body: "Products, customers, orders, CMS pages — every entity migrated, mapped, and validated before the cutover window." },
    { icon: <Code2 className="w-5 h-5 text-primary" />, title: "Extension Migration", body: "M1 extension audit: every business function catalogued and rebuilt or replaced with a tested M2 equivalent." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Performance Improvement", body: "Every migration includes performance configuration — Varnish, Redis, Elasticsearch — that delivers 2x+ the performance of the legacy platform." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "SEO Preservation", body: "Complete URL mapping, 301 redirects, and 90-day ranking monitoring. Zero organic traffic loss on every migration we've run." },
    { icon: <Layers className="w-5 h-5 text-primary" />, title: "Theme Redesign", body: "Migration is the right time to redesign the storefront. We build custom M2 themes as part of every migration project." },
    { icon: <Shield className="w-5 h-5 text-primary" />, title: "Security Baseline", body: "Post-migration security baseline: M2 security patches current, PCI compliance review, and vulnerability scan before launch." },
    { icon: <Settings className="w-5 h-5 text-primary" />, title: "Parallel Environment", body: "M2 environment built and tested while M1 stays live. Your team signs off on the M2 build before a single customer sees it." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "30-Day Hypercare", body: "Post-launch monitoring period: daily performance checks, data integrity validation, and dedicated developer support." },
  ],
  techStack: [
    { platform: "Magento Data Migration Tool", stat: "Data migration", description: "Adobe's official data migration tool augmented with custom migration scripts for entity types and data structures the standard tool doesn't handle — particularly for stores with complex custom attributes or non-standard data models." },
    { platform: "Magento 2.4.x", stat: "Target platform", description: "Migration target is always the current Magento 2.4.x release — the only supported version receiving security patches. We don't migrate to older 2.x releases." },
    { platform: "PHP 8.2 / Elasticsearch", stat: "Backend + Search", description: "Current PHP 8.2 and Elasticsearch or OpenSearch configured as part of every M2 environment. Magento 2.4.x requires Elasticsearch — it cannot run MySQL full-text search at this version." },
    { platform: "Git + CI/CD", stat: "Version control", description: "Full Git version control from day one of the migration build. All code changes tracked, reviewed, and deployed through a CI/CD pipeline — never manual deployments." },
    { platform: "New Relic / Blackfire", stat: "Performance profiling", description: "New Relic APM for production monitoring and Blackfire.io for development performance profiling — ensuring the migrated store performs better than the legacy environment from day one." },
    { platform: "Screaming Frog", stat: "URL auditing", description: "Pre-migration URL crawl and post-migration redirect verification using Screaming Frog. Every redirect is tested, every canonical is verified, and every indexable URL is confirmed accessible post-launch." },
  ],
  caseStudies: [
    { image: "/industry-ecommerce.png", client: "Coastal Collective", industry: "eCommerce", blurb: "M1 to M2 migration for a store running $3.2M annual revenue. Complete in 14 weeks, zero downtime, 100% data integrity. Performance improved 220% on Lighthouse.", metrics: [{ value: "Zero", label: "Downtime" }, { value: "+220%", label: "Performance" }] },
    { image: "/case-study-saas.png", client: "National Supply Group", industry: "B2B Commerce", blurb: "Shopify to Magento 2 migration for a wholesale supplier with 40,000 SKUs and B2B pricing requirements Shopify couldn't meet. Custom B2B theme and SAP integration.", metrics: [{ value: "40k", label: "SKUs migrated" }, { value: "+78%", label: "B2B orders" }] },
    { image: "/case-study-home.png", client: "BuildCo Supply", industry: "Wholesale", blurb: "Legacy custom eCommerce to Magento 2. Custom data migration scripts, zero ranking loss from full URL mapping, and a 30-day post-launch monitoring programme.", metrics: [{ value: "0%", label: "Organic traffic loss" }, { value: "+188%", label: "Performance score" }] },
  ],
  process: [
    { label: "Audit", headline: "Complete audit of the source platform before planning a migration.", description: "URL crawl, data entity audit, extension inventory, performance baseline, and SEO audit. We know exactly what we're migrating before we plan how to migrate it." },
    { label: "Plan", headline: "Migration plan covering data, extensions, URLs, and cutover process.", description: "Data migration mapping, extension replacement specification, URL redirect plan, and cutover runbook. Every step documented and reviewed before any development begins." },
    { label: "Build", headline: "M2 environment, custom theme, and extension replacements.", description: "M2 infrastructure provisioning, custom theme development, extension installation and configuration, and initial data migration in a staging environment." },
    { label: "Migrate", headline: "Full data migration and team acceptance testing.", description: "Complete data migration to staging, cross-referenced against the source for integrity. Your team tests the full M2 environment against real-world scenarios before we proceed." },
    { label: "Cutover", headline: "Zero-downtime production cutover with delta migration.", description: "Final delta data sync captures activity during the migration period, DNS cutover executed with a rollback plan ready, and post-cutover verification confirming all systems operating correctly." },
    { label: "Monitor", headline: "30-day hypercare with daily performance and data checks.", description: "Daily Lighthouse checks, GSC ranking monitoring, data integrity spot-checks, and a dedicated developer on call for your team during the post-launch period." },
  ],
  faqs: [
    { question: "How long does an M1 to M2 migration take?", answer: "A standard M1 to M2 migration takes 12-16 weeks from kick-off to production launch. Complex stores with many custom extensions, large catalogues (100,000+ SKUs), or ERP integrations take 16-24 weeks. The migration plan produced in week one gives you a firm timeline and weekly milestones." },
    { question: "Will we lose any organic rankings from the migration?", answer: "Not if the migration is planned correctly. We conduct a complete URL audit before the migration, map every URL change to a 301 redirect, implement redirects before launching, and monitor rankings for 90 days post-launch. We have run migrations with zero measurable organic traffic loss." },
    { question: "Can we redesign the storefront as part of the migration?", answer: "Yes — and we recommend it. Migration is the right time to redesign because you're already rebuilding the template layer. Running a migration without a theme redesign means launching on M2 but carrying forward a dated UX. We include custom M2 theme development in every migration project as a standard option." },
    { question: "What happens to our Magento 1 extensions?", answer: "We conduct an extension audit in the first phase — inventorying every M1 extension, documenting its business function, and identifying the M2 equivalent or planning a custom rebuild. Most M1 extensions have M2 equivalents; a few require custom development. The extension audit is part of the project scoping and is included in your migration plan." },
    { question: "Is there any downtime during migration?", answer: "Our migration methodology produces zero downtime. The M2 environment is built and fully tested while the M1 store runs in production. The final cutover is a DNS change that takes 10-15 minutes, with the M1 store remaining accessible as a rollback target for 24 hours post-cutover." },
  ],
  hubInsights: [
    { image: "/industry-ecommerce.png", category: "Magento Migration", readTime: "8 min read", title: "The M1 to M2 Migration Playbook: How to Migrate $5M+ eCommerce Stores Without Downtime", excerpt: "Magento 1 end-of-life migrations are complex for high-revenue stores because the cost of errors is significant. We've run 20+ migrations and refined a methodology that produces zero downtime, 100% data integrity, and measurable performance improvements on every project. Here is the complete playbook.", author: "James Okafor", authorRole: "Migration Lead", href: "/blog/m1-m2-migration-playbook" },
    { image: "/case-study-saas.png", category: "Magento 2", readTime: "6 min read", title: "Why Magento 1 Stores Are Still Being Hacked in 2026 (And What to Do About It)", excerpt: "Six years after Magento 1's end-of-life, tens of thousands of M1 stores are still running in production — many with credit card skimming malware already installed. We break down the actual attack vectors, the realistic timeline from installation to discovery, and the migration options for business owners who've delayed.", author: "Marcus Chen", authorRole: "Security Lead", href: "/blog/magento-1-security-2026" },
    { image: "/case-study-home.png", category: "Migration SEO", readTime: "5 min read", title: "How to Migrate to Magento 2 Without Losing a Single Organic Ranking", excerpt: "Platform migrations are one of the highest-risk events in the SEO lifecycle of a website. The window for getting URL redirects wrong is narrow and the consequences can last months. We walk through the complete SEO migration checklist we use on every project — from pre-migration crawl to 90-day post-launch monitoring.", author: "Priya Anand", authorRole: "SEO Migration Lead", href: "/blog/magento-2-migration-seo-checklist" },
  ],
};

export default function Magento2MigrationHub() {
  return <ServiceHubPage data={m2MigrationData} />;
}
