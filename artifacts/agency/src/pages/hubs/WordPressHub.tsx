import { Code2, Zap, Shield, Settings, Globe, RefreshCw, BarChart2, Layers, Search } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-[#21759b] px-4 py-3 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white font-black text-sm">W</span>
        </div>
        <div>
          <p className="text-white font-bold text-xs">WordPress Dashboard</p>
          <p className="text-white/60 text-[9px]">Custom Development Build</p>
        </div>
      </div>
      <div className="bg-[#f0f0f1] p-4 space-y-2.5">
        <div className="grid grid-cols-3 gap-2">
          {[{ v: "100", l: "Lighthouse", c: "#22c55e" }, { v: "< 1.2s", l: "LCP", c: "#1a56ff" }, { v: "0", l: "Plugin bloat", c: "#f59e0b" }].map((s) => (
            <div key={s.l} className="bg-white rounded-lg p-2 text-center border border-gray-100">
              <p className="text-sm font-black" style={{ color: s.c }}>{s.v}</p>
              <p className="text-[8px] text-gray-400 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="bg-white rounded-xl p-3 border border-gray-100">
          <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-2">Custom Theme · No Page Builders</p>
          {["Custom block editor (Gutenberg)", "WooCommerce integration", "Multisite network", "Headless WordPress (REST/GraphQL)"].map((f) => (
            <div key={f} className="flex items-center gap-2 py-1">
              <div className="w-1.5 h-1.5 rounded-full bg-[#21759b]" />
              <span className="text-[9px] text-gray-600">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100">
      <p className="text-[10px] text-gray-400">Page Speed</p>
      <p className="text-2xl font-black text-[#22c55e]">100</p>
    </div>
    <div className="absolute -top-4 -left-4 bg-[#21759b] rounded-xl px-3 py-2.5 shadow-xl">
      <p className="text-white font-black text-xs">WordPress</p>
    </div>
  </div>
);

const wordPressData: HubData = {
  slug: "wordpress-development-service",
  label: "WORDPRESS DEVELOPMENT",
  breadcrumb: "WordPress Development",
  hero: {
    headline: "WordPress Development That Actually Performs.",
    italic: "No bloat. No page builders. No compromise.",
    description:
      "Custom WordPress development built on clean, performant code. We build bespoke themes, custom block editors, complex plugin integrations, and WooCommerce stores that load fast, rank well, and your team can manage without a developer.",
    cta: "Get a Free WordPress Audit",
    ctaHref: "/contact",
    badges: ["WooCommerce Expert", "Gutenberg Specialist", "Clutch 5★", "10+ Years"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "100", label: "Avg. Lighthouse score" },
    { value: "< 1.2s", label: "Avg. LCP after build" },
    { value: "200+", label: "WordPress sites built" },
    { value: "10+", label: "Years of Experience" },
  ],
  intro: {
    eyebrow: "Why custom WordPress wins",
    headline: "Most WordPress sites are slow, bloated, and impossible to maintain. Ours aren't.",
    body: "The average WordPress site installs 20+ plugins and uses a page builder that generates thousands of lines of unnecessary CSS. The result is a site that loads in 4-6 seconds, fails Core Web Vitals, and your team dreads editing. We build the opposite: lean custom themes with clean HTML, minimal plugins, and an editing experience your team will actually use.",
    secondBody: "We've rebuilt WordPress sites for businesses that paid another agency six figures for a site they couldn't maintain, that loaded in 5 seconds, and that had 340+ crawl errors. The root cause is always the same: off-the-shelf tools stitched together by people who don't understand performance. Our approach is bespoke from the first wireframe.",
    bullets: [
      "Custom themes written in PHP — no Elementor, Divi, or WPBakery",
      "Block editor (Gutenberg) builds your team can manage without training",
      "WooCommerce stores optimised for conversion and performance",
      "Plugin audit: we remove everything that isn't earning its place",
      "Core Web Vitals green on every page template, not just the homepage",
    ],
  },
  proofSection: {
    eyebrow: "The custom WordPress advantage",
    headline: "The 300ms difference between a custom build and a page builder site is not trivial — it's compounding.",
    body: "Every 100ms of load time costs 1% of conversions. Page builders add 200-400ms of unnecessary render time on every page load. Custom WordPress builds eliminate this permanently. And because the code is clean and semantic, Google crawls it more efficiently, ranks it faster, and your SEO investment compounds instead of fighting against technical debt.",
    secondBody: "We build every WordPress site with three constraints that most agencies ignore: it has to load in under 2 seconds on mobile, it has to score 95+ on Lighthouse across every template, and your team has to be able to edit it without calling a developer. Those constraints eliminate page builders, bloated themes, and unnecessary plugin dependencies at the design stage — not as an afterthought.",
    bullets: [
      "Every theme is written in PHP with semantic HTML — no CSS framework bloat, no inline styles injected by a page builder, no render-blocking JavaScript.",
      "We audit every plugin before installation: each one must serve a function that cannot be achieved in custom code without significant time investment.",
      "Custom Gutenberg blocks give your team a visual editing experience without any of the performance cost of a third-party page builder.",
      "WooCommerce builds include custom product page architecture, checkout optimisation, and lifecycle email setup as part of the standard scope.",
      "Every WordPress site we build includes a performance baseline document: Lighthouse scores, Core Web Vitals readings, and load time by template, taken at launch.",
      "Post-launch support includes a 30-day monitoring period where we watch for performance regressions, plugin update conflicts, and new technical SEO issues.",
    ],
  },
  subServices: [
    {
      tab: "Custom Theme Development",
      headline: "Bespoke WordPress themes with no template DNA.",
      description: "Custom WordPress theme development built to your exact design. No theme marketplace starting points, no page builder dependencies. Clean PHP, semantic HTML, and minimal JavaScript that loads fast and ranks well. Every theme includes a custom Gutenberg block library your team can use to build new pages.",
      bullets: ["Custom PHP theme from scratch", "Full Gutenberg block library", "Mobile-first, CWV-optimised", "Design system documentation"],
      image: "/case-study-saas.png",
      href: "/wordpress-development-service",
    },
    {
      tab: "WooCommerce Development",
      headline: "High-performance WooCommerce stores that convert.",
      description: "Custom WooCommerce builds designed around conversion. Product page architecture, collection and filtering UX, cart mechanics, and checkout flow — all built to reduce friction and increase average order value. No WooCommerce page builders. Clean, fast, maintainable code.",
      bullets: ["Custom product and shop templates", "Checkout optimisation", "Payment gateway integrations", "Inventory and ERP integration"],
      image: "/industry-ecommerce.png",
      href: "/wordpress-development-service",
    },
    {
      tab: "Plugin Development",
      headline: "Custom WordPress plugins built for your exact requirements.",
      description: "When an off-the-shelf plugin doesn't exist or adds too much overhead, we build it. Custom WordPress plugins for booking systems, membership portals, custom post type management, API integrations, and more — all built to WordPress coding standards.",
      bullets: ["Custom post types and taxonomies", "API integration plugins", "Booking and membership systems", "Admin interface customisation"],
      image: "/case-study-home.png",
      href: "/wordpress-development-service",
    },
    {
      tab: "WordPress Migration",
      headline: "Migrate from any CMS to WordPress without losing a ranking.",
      description: "CMS migrations from Squarespace, Wix, Drupal, Joomla, and legacy custom platforms to WordPress — with full URL mapping, content migration, SEO preservation, and post-migration monitoring. Zero traffic loss when done properly.",
      bullets: ["Full URL audit and 301 mapping", "Content and media migration", "SEO signal preservation", "30-day post-migration monitoring"],
      image: "/case-study-realestate.png",
      href: "/wordpress-development-service",
    },
    {
      tab: "WordPress Maintenance",
      headline: "Ongoing WordPress management so you can focus on your business.",
      description: "Monthly WordPress maintenance: core, theme, and plugin updates tested in staging before deployment, performance monitoring, security scanning, uptime monitoring, and a dedicated support line. Your site stays current, secure, and performant.",
      bullets: ["Monthly core and plugin updates", "Staging environment testing", "Security scanning and malware removal", "24/7 uptime monitoring"],
      image: "/hero-showcase.png",
      href: "/wordpress-development-service",
    },
  ],
  features: [
    { icon: <Code2 className="w-5 h-5 text-primary" />, title: "Custom Theme Development", body: "Bespoke PHP themes with no page builder dependencies. Clean, semantic, performant code built to your exact design." },
    { icon: <Layers className="w-5 h-5 text-primary" />, title: "Gutenberg Block Library", body: "Custom block editor components your team can use to build and edit pages — without writing code or calling a developer." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Performance Optimisation", body: "Sub-2s load times and 95+ Lighthouse scores across every page template. Core Web Vitals green from day one." },
    { icon: <Settings className="w-5 h-5 text-primary" />, title: "Plugin Development", body: "Custom WordPress plugins for the functionality off-the-shelf plugins can't deliver — built to WP coding standards." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "WooCommerce Development", body: "Custom WooCommerce builds with conversion-first product pages, cart optimisation, and payment gateway integrations." },
    { icon: <RefreshCw className="w-5 h-5 text-primary" />, title: "WordPress Migrations", body: "Zero-loss migrations from any CMS to WordPress. Full URL mapping, content migration, and SEO preservation." },
    { icon: <Shield className="w-5 h-5 text-primary" />, title: "Security & Maintenance", body: "Monthly core and plugin updates, security scanning, uptime monitoring, and a staging environment for every change." },
    { icon: <Search className="w-5 h-5 text-primary" />, title: "SEO Architecture", body: "Clean semantic markup, schema implementation, sitemap optimisation, and Yoast/RankMath configuration baked in." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "Analytics Integration", body: "GA4, GTM, and Search Console configured and verified. Conversion tracking set up before launch day." },
  ],
  techStack: [
    { platform: "WordPress Core", stat: "CMS", description: "We stay current with the latest WordPress release and build exclusively on core-compliant architecture — no hacks, no deprecated APIs, no workarounds that break on updates." },
    { platform: "PHP 8.2+", stat: "Server-side", description: "All custom theme and plugin development is written in modern PHP 8.2+ with strict typing, PSR-4 autoloading, and proper namespacing. Code your future developers will understand." },
    { platform: "Gutenberg / Block API", stat: "Editor", description: "Custom block development using React and the WordPress Block API. Every block is registered properly, has a clean editing interface, and produces semantic HTML output." },
    { platform: "WooCommerce", stat: "eCommerce", description: "WooCommerce builds with custom product templates, checkout hooks, payment gateway integrations, and third-party system connections. We extend WooCommerce properly — through hooks and filters, not core file edits." },
    { platform: "WP Engine / Kinsta", stat: "Hosting", description: "We recommend and configure managed WordPress hosting on WP Engine or Kinsta — both optimised for WordPress performance with built-in CDN, staging environments, and automatic backups." },
    { platform: "ACF / Meta Box", stat: "Custom fields", description: "Advanced Custom Fields or Meta Box for structured custom field development. Used to power custom post types, options pages, and relationship fields without abusing the_content()." },
  ],
  caseStudies: [
    { image: "/case-study-saas.png", client: "Nova FinTech", industry: "SaaS", blurb: "Legacy Drupal 7 site migrated to custom WordPress. Lighthouse score went from 38 to 98. Organic traffic up 165% in 6 months.", metrics: [{ value: "98", label: "Lighthouse score" }, { value: "+165%", label: "Organic traffic" }] },
    { image: "/case-study-home.png", client: "Hudson Outdoor", industry: "Home Services", blurb: "Custom WordPress rebuild from a page builder site. Load time dropped from 5.8s to 1.1s. Core Web Vitals went fully green within 30 days.", metrics: [{ value: "1.1s", label: "Load time (was 5.8s)" }, { value: "100%", label: "CWV green" }] },
    { image: "/industry-ecommerce.png", client: "Coastal Collective", industry: "eCommerce", blurb: "WooCommerce rebuild from a Shopify template. Custom product pages and checkout flow increased conversion rate by 52% in the first 60 days.", metrics: [{ value: "+52%", label: "Conversion rate" }, { value: "7.2x", label: "ROAS" }] },
  ],
  process: [
    { label: "Audit", headline: "Audit your existing WordPress site before touching anything.", description: "We crawl your current site, run Lighthouse on every template, audit your plugin list, and benchmark your performance baselines. This tells us exactly what needs to change and what the build needs to achieve." },
    { label: "Design", headline: "Full Figma design system before development begins.", description: "Complete UI/UX design covering every page template, the Gutenberg block library, mobile layouts, and interactive states. You approve the full design before we write a line of code." },
    { label: "Develop", headline: "Custom PHP theme and block library, built clean from scratch.", description: "Theme development on a local environment with Git version control from day one. Weekly staging pushes for your review. Every feature is tested in staging before it reaches production." },
    { label: "Optimise", headline: "Performance optimisation and Core Web Vitals to green.", description: "Image optimisation, script deferral, CSS pruning, caching configuration, and CDN setup. We don't launch until Lighthouse scores are 95+ across every page template." },
    { label: "Launch", headline: "Zero-downtime deployment with full SEO migration.", description: "Staged DNS cutover with redirect verification, post-launch crawl, and 30-day performance monitoring. Analytics, GSC, and conversion tracking verified before go-live." },
    { label: "Maintain", headline: "Ongoing maintenance to keep your site current, secure, and fast.", description: "Monthly core and plugin updates through a staging environment, security scanning, uptime monitoring, and a dedicated support line for your team. Your site stays current without you thinking about it." },
  ],
  faqs: [
    { question: "Why not use Elementor or Divi?", answer: "Page builders generate bloated, render-blocking code that consistently fails Core Web Vitals and ranks poorly. They also create long-term maintenance problems — every page builder update risks breaking your layouts, and migrating away from them later is expensive. Custom development costs more upfront and delivers dramatically better performance, maintenance, and SEO outcomes." },
    { question: "How long does a custom WordPress build take?", answer: "A standard custom WordPress site — design, development, and launch — takes 6-10 weeks. WooCommerce builds run 8-12 weeks. Complex multisite networks or headless WordPress builds run 12-16 weeks. We give you a firm timeline after our discovery session." },
    { question: "Can you migrate my existing WordPress site?", answer: "Yes. We migrate from any CMS to WordPress, and from old WordPress theme frameworks (Genesis, Avada, Divi) to custom themes — with full URL mapping, content migration, and SEO preservation. The migration plan is part of our discovery scoping." },
    { question: "Will my team be able to edit the site?", answer: "Yes. We build a custom Gutenberg block library for every site — a set of page-building components your team can use to create and edit pages without writing code. We include a handover session and documentation for every site we build." },
    { question: "Do you provide ongoing support after launch?", answer: "Yes. Monthly maintenance plans cover core and plugin updates (tested in staging first), security monitoring, uptime alerts, and a dedicated support channel. Most clients retain us for ongoing maintenance after launch." },
  ],
  hubInsights: [
    { image: "/case-study-saas.png", category: "WordPress Performance", readTime: "6 min read", title: "Why Page Builder WordPress Sites Fail Core Web Vitals (And How to Fix It)", excerpt: "Elementor, Divi, and WPBakery are the single biggest cause of WordPress performance failures. We audited 50 WordPress sites and found page builders added an average of 380ms to Time to Interactive. Here's the data and what to do about it.", href: "/blog/wordpress-page-builder-performance" },
    { image: "/case-study-home.png", category: "WordPress Development", readTime: "5 min read", title: "The WordPress Plugin Audit: Which Plugins Are Costing You Rankings", excerpt: "The average WordPress site has 22 active plugins. Our analysis found that 8 of them account for 90% of performance overhead. Here's the audit process we run on every new WordPress client and the plugins that consistently make the cut — and the ones that never do.", href: "/blog/wordpress-plugin-audit" },
    { image: "/industry-ecommerce.png", category: "WooCommerce", readTime: "7 min read", title: "WooCommerce vs Shopify in 2026: When Each Platform Is the Right Choice", excerpt: "Shopify wins for simplicity. WooCommerce wins for control. The decision is rarely that simple — product complexity, team capability, existing infrastructure, and margin structure all factor in. We lay out the complete decision framework we use with every eCommerce client.", href: "/blog/woocommerce-vs-shopify-2026" },
  ],
};

export default function WordPressHub() {
  return <ServiceHubPage data={wordPressData} />;
}
