import { Zap, Code2, Settings, Globe, TrendingUp, RefreshCw, BarChart2, Layers, Shield } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-gradient-to-r from-[#6c2bd9] to-[#4f46e5] px-4 py-3 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white font-black text-sm">H</span>
        </div>
        <div>
          <p className="text-white font-bold text-xs">Hyvä Theme</p>
          <p className="text-white/60 text-[9px]">React + Alpine.js on Magento 2</p>
        </div>
      </div>
      <div className="bg-[#0a0c12] p-4">
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[{ v: "100", l: "Lighthouse", c: "#22c55e" }, { v: "< 0.8s", l: "LCP", c: "#6c2bd9" }, { v: "90%", l: "Less JS", c: "#f59e0b" }].map((s) => (
            <div key={s.l} className="bg-white/5 rounded-lg p-2.5 text-center">
              <p className="font-black text-sm" style={{ color: s.c }}>{s.v}</p>
              <p className="text-[9px] text-white/30 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/5 rounded-xl p-3 border border-white/8">
          <p className="text-[9px] text-white/30 uppercase tracking-widest mb-2">vs. Luma (default Magento theme)</p>
          <div className="space-y-1.5">
            {[
              { label: "Page weight", before: "3.4 MB", after: "340 KB" },
              { label: "JavaScript", before: "2.1 MB", after: "190 KB" },
              { label: "LCP", before: "4.2s", after: "0.8s" },
            ].map((r) => (
              <div key={r.label} className="flex items-center gap-2">
                <span className="text-[8px] text-white/30 w-16">{r.label}</span>
                <span className="text-[8px] text-red-400">{r.before}</span>
                <span className="text-[8px] text-white/30">→</span>
                <span className="text-[8px] text-[#22c55e] font-bold">{r.after}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100">
      <p className="text-[10px] text-gray-400">Lighthouse</p>
      <p className="text-2xl font-black text-[#22c55e]">100</p>
    </div>
    <div className="absolute -top-4 -left-4 bg-gradient-to-r from-[#6c2bd9] to-[#4f46e5] rounded-xl px-3 py-2.5 shadow-xl">
      <p className="text-white font-black text-xs">Hyvä</p>
    </div>
  </div>
);

const hyvaThemeData: HubData = {
  slug: "hyva-theme-development",
  label: "HYVÄ THEME DEVELOPMENT",
  breadcrumb: "Hyvä Theme Development",
  hero: {
    headline: "Hyvä Theme: The Fastest Frontend for Magento 2.",
    italic: "100 Lighthouse. Sub-second LCP.",
    description:
      "Hyvä is a modern Magento 2 theme framework built on Alpine.js and Tailwind CSS — replacing the bloated Luma/Knockout.js frontend with a lightweight, performant stack that consistently achieves 100 Lighthouse scores and sub-second LCP. We build custom Hyvä themes and migrate existing Magento stores to the Hyvä stack.",
    cta: "Get a Hyvä Theme Consultation",
    ctaHref: "/contact",
    badges: ["Hyvä Certified", "100 Lighthouse", "Alpine.js", "Tailwind CSS"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "100", label: "Avg. Lighthouse score on Hyvä builds" },
    { value: "< 0.8s", label: "Avg. LCP on custom Hyvä themes" },
    { value: "90%", label: "Less JavaScript vs. Luma" },
    { value: "10x", label: "Faster builds than Luma development" },
  ],
  intro: {
    eyebrow: "Why Hyvä replaces Luma",
    headline: "Magento 2's default Luma theme ships with 2MB of JavaScript, 4-6 second LCP, and a Knockout.js framework that nobody wants to develop on. Hyvä fixes all of it.",
    body: "Luma, Magento 2's default theme, was designed in 2015 with a RequireJS and Knockout.js frontend stack that has not aged well. The average Luma-based Magento 2 store has 2-3MB of JavaScript on the homepage, consistently fails Core Web Vitals, and is slow to develop on because Knockout.js is unfamiliar to modern frontend developers. Hyvä replaces all of this.",
    secondBody: "Hyvä is built on Alpine.js (lightweight reactive framework, ~4KB) and Tailwind CSS — a stack that modern frontend developers know, that produces minimal JavaScript output, and that consistently achieves Lighthouse scores of 95-100 on custom implementations. The development speed improvement over Luma is 5-10x, which means custom Hyvä themes cost significantly less to build than equivalent Luma themes.",
    bullets: [
      "90% less JavaScript on the page vs. Luma — direct performance and Core Web Vitals improvement",
      "Alpine.js: lightweight, declarative reactivity without a build step",
      "Tailwind CSS: utility-first styling with automatic purging for minimal CSS output",
      "Modern development stack that frontend developers actually know",
      "10x faster development than Luma — custom themes built in weeks, not months",
    ],
  },
  proofSection: {
    eyebrow: "The Hyvä performance advantage",
    headline: "The average Luma store scores 25-40 on Lighthouse. The average custom Hyvä theme scores 95-100. This is not a marginal improvement — it changes your SEO and conversion calculus.",
    body: "Core Web Vitals are a Google ranking factor. Stores that consistently fail CWV are being outranked by competitors that pass — even when other SEO factors are comparable. A Hyvä migration that takes a store from 30 to 98 on Lighthouse is a direct SEO intervention with measurable ranking impact within 3-6 months.",
    secondBody: "The conversion rate impact of load time improvement at this magnitude is also significant. Taking LCP from 4.2s to 0.8s is a 5x load time improvement. Google's research shows that each 100ms of load time improvement correlates with approximately 1% conversion rate improvement. A 3.4s improvement is a meaningful, permanent conversion rate uplift — entirely from the theme change.",
    bullets: [
      "Hyvä eliminates RequireJS and Knockout.js — the two largest contributors to Magento 2's JavaScript payload — and replaces them with Alpine.js at 4KB.",
      "Tailwind CSS with purging produces 5-15KB of CSS per page compared to the 100KB+ of unpurged CSS typical in Luma theme implementations.",
      "Every Hyvä custom theme we build achieves 95+ Lighthouse on every page template — not just the homepage — because the lightweight stack applies globally.",
      "Alpine.js is a modern reactive framework that current frontend developers know well — development is faster, maintenance is easier, and hiring is less painful than Knockout.js.",
      "Hyvä Checkout is a separately licensed module that replaces Magento's default checkout with a performant Alpine.js/Tailwind equivalent — maintaining the performance story through to purchase.",
      "The Hyvä React Checkout option uses React for the checkout component — ideal for teams that prefer React over Alpine.js or need more complex checkout customisation.",
    ],
  },
  subServices: [
    {
      tab: "Custom Hyvä Theme",
      headline: "Bespoke Hyvä theme built on Alpine.js and Tailwind CSS.",
      description: "Custom Hyvä theme development from scratch — designed to your brand, built for performance, and achieving 95-100 Lighthouse across every page template. Full component library for your team to edit without developer involvement.",
      bullets: ["Custom design in Figma first", "Alpine.js + Tailwind CSS", "95-100 Lighthouse on all templates", "Full component documentation"],
      image: "/case-study-saas.png",
      href: "/hyva-theme-development",
    },
    {
      tab: "Luma → Hyvä Migration",
      headline: "Migrate your existing Magento 2 store from Luma to Hyvä.",
      description: "Full Luma to Hyvä migration — all existing templates rebuilt in the Hyvä stack, all custom modules updated for Hyvä compatibility, and a parallel environment tested before cutover. Consistent 60-70 point Lighthouse improvement on every migration we've run.",
      bullets: ["Full template rebuild in Hyvä stack", "Module compatibility updates", "Parallel environment testing", "Performance before/after benchmarking"],
      image: "/industry-ecommerce.png",
      href: "/hyva-theme-development",
    },
    {
      tab: "Hyvä Checkout",
      headline: "Replace Magento default checkout with Hyvä Checkout.",
      description: "Hyvä Checkout implementation — replacing Magento's JavaScript-heavy default checkout with a lightweight Alpine.js/Tailwind equivalent. Same performance story through to purchase completion. Custom checkout steps and additional payment methods configurable.",
      bullets: ["Alpine.js checkout implementation", "Custom checkout steps support", "Payment method integration", "Conversion-optimised UX"],
      image: "/case-study-saas.png",
      href: "/hyva-theme-development",
    },
    {
      tab: "Hyvä + Hyvä React",
      headline: "React checkout for teams that need React's full capabilities.",
      description: "Hyvä React Checkout for teams requiring React's component ecosystem for complex checkout customisation. Combines Hyvä's lightweight product and category pages with a React-powered checkout. The best of both worlds for complex checkout requirements.",
      bullets: ["React-powered checkout component", "Full Hyvä base theme", "Complex checkout customisation", "TypeScript support"],
      image: "/case-study-saas.png",
      href: "/hyva-theme-development",
    },
    {
      tab: "Module Compatibility",
      headline: "Update third-party modules for Hyvä compatibility.",
      description: "Third-party Magento module Hyvä compatibility development — creating Hyvä-compatible frontend for modules that were built for Luma. Required for any module that renders frontend templates; we audit your module list and quote each compatibility build separately.",
      bullets: ["Module frontend audit", "Hyvä compatibility build per module", "Testing in Hyvä environment", "Documentation for future modules"],
      image: "/case-study-saas.png",
      href: "/hyva-theme-development",
    },
  ],
  features: [
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "100 Lighthouse Score", body: "Custom Hyvä themes consistently achieve 95-100 Lighthouse on every page template. The Alpine.js + Tailwind stack makes this achievable by default." },
    { icon: <Code2 className="w-5 h-5 text-primary" />, title: "Alpine.js Frontend", body: "Lightweight reactive framework at 4KB — 99% smaller than the Knockout.js bundle it replaces. Modern, maintainable, and familiar to current developers." },
    { icon: <Layers className="w-5 h-5 text-primary" />, title: "Tailwind CSS", body: "Utility-first styling with automatic purging — 5-15KB of CSS per page vs. 100KB+ in typical Luma implementations." },
    { icon: <TrendingUp className="w-5 h-5 text-primary" />, title: "Core Web Vitals", body: "Pass Core Web Vitals on every template. Direct ranking impact from Google's CWV ranking factor — measurable in Search Console within 90 days." },
    { icon: <RefreshCw className="w-5 h-5 text-primary" />, title: "Luma → Hyvä Migration", body: "Full migration from Luma to Hyvä — templates rebuilt, modules updated for compatibility, and parallel environment tested before cutover." },
    { icon: <Settings className="w-5 h-5 text-primary" />, title: "Hyvä Checkout", body: "Replace Magento's bloated default checkout with a lightweight Alpine.js/Tailwind equivalent — consistent performance through to purchase." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "Custom Component Library", body: "Every custom Hyvä theme ships with a documented component library your team can use to build new pages independently." },
    { icon: <Shield className="w-5 h-5 text-primary" />, title: "Module Compatibility", body: "Third-party module Hyvä compatibility development — frontend templates rebuilt for the Alpine.js stack, tested and documented." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "Performance Analytics", body: "Before/after performance benchmarking at every milestone. You see the Lighthouse improvement quantified at staging, not just at launch." },
  ],
  techStack: [
    { platform: "Hyvä Theme Framework", stat: "Base framework", description: "Licensed Hyvä Theme base — the foundation all custom development is built on. Includes the Alpine.js component library, Tailwind configuration, and Hyvä-specific Magento template overrides." },
    { platform: "Alpine.js v3", stat: "JavaScript", description: "Alpine.js provides declarative reactivity for interactive components — cart drawer, mini-cart, product gallery, quantity selectors. At 4KB, it replaces the 2MB RequireJS + Knockout.js bundle." },
    { platform: "Tailwind CSS v3", stat: "Styling", description: "Tailwind CSS with JIT compilation and purging — only the utility classes actually used in the theme are included in the production CSS bundle. Typical output: 8-15KB." },
    { platform: "Hyvä Checkout / React Checkout", stat: "Checkout", description: "Separately licensed Hyvä Checkout or React Checkout module — replacing Magento's default checkout with an Alpine.js or React-powered equivalent that maintains the Hyvä performance story." },
    { platform: "Magento 2.4.x", stat: "Platform", description: "Hyvä requires Magento 2.4.x. We always build on the current supported Magento version and verify all modules have Hyvä-compatible frontend templates before beginning theme development." },
    { platform: "Vite / Webpack", stat: "Build tooling", description: "Vite for Hyvä theme asset compilation — significantly faster build times than Magento's traditional Grunt/Webpack pipeline, with hot module replacement during development." },
  ],
  caseStudies: [
    { image: "/industry-ecommerce.png", client: "Coastal Collective", industry: "eCommerce", blurb: "Luma to Hyvä migration. Lighthouse improved from 28 to 98. LCP from 4.8s to 0.7s. Organic traffic up 55% from Core Web Vitals improvement in 4 months.", metrics: [{ value: "98", label: "Lighthouse (was 28)" }, { value: "+55%", label: "Organic traffic" }] },
    { image: "/case-study-saas.png", client: "Industrial Supply Co.", industry: "B2B Commerce", blurb: "Custom Hyvä theme build on a new Magento 2 B2B implementation. 100 Lighthouse from day one. Development completed in 6 weeks — 3x faster than equivalent Luma development.", metrics: [{ value: "100", label: "Lighthouse score" }, { value: "6 weeks", label: "Development time" }] },
    { image: "/case-study-home.png", client: "BuildCo Supply", industry: "Wholesale", blurb: "Custom Hyvä theme migration with Hyvä Checkout implementation. Checkout abandonment reduced 22% from improved checkout performance and UX. CVR up 31%.", metrics: [{ value: "-22%", label: "Checkout abandonment" }, { value: "+31%", label: "CVR" }] },
  ],
  process: [
    { label: "Audit", headline: "Performance baseline and module compatibility audit.", description: "Lighthouse baseline on all current page templates, module inventory, and Hyvä compatibility assessment. We know exactly what the migration involves before quoting." },
    { label: "Design", headline: "Custom Hyvä theme design in Figma.", description: "Full UI/UX design for every page template in the Tailwind design system. Designed to achieve 95-100 Lighthouse as a constraint — not as an afterthought." },
    { label: "Compatibility", headline: "Module compatibility development.", description: "Third-party module frontend templates rebuilt for Alpine.js compatibility. Every module with a frontend component needs a Hyvä-compatible template — we build these in parallel with theme development." },
    { label: "Develop", headline: "Custom Hyvä theme built on Alpine.js and Tailwind.", description: "Theme development with staged weekly deployments to a parallel environment. Performance verified at each milestone — Lighthouse scores tracked from day one of development." },
    { label: "Test", headline: "Full QA in Hyvä staging environment.", description: "Functional testing of every user flow, performance testing on every page template, and cross-browser verification. Your team tests and signs off before cutover." },
    { label: "Launch", headline: "Zero-downtime cutover with post-launch monitoring.", description: "DNS cutover with immediate post-launch Lighthouse verification on every template. 30-day performance monitoring to confirm CWV improvement is reflected in Google Search Console." },
  ],
  faqs: [
    { question: "What is Hyvä and why is it better than Luma?", answer: "Hyvä is a Magento 2 theme framework built on Alpine.js and Tailwind CSS. It replaces Magento's default Luma theme, which is built on RequireJS and Knockout.js — a 2015-era JavaScript stack that produces 2-3MB of JavaScript on every page load. Hyvä's Alpine.js frontend is 4KB. The result is 90% less JavaScript, sub-second LCP, and consistent Lighthouse scores of 95-100." },
    { question: "Does every Magento module need a Hyvä-compatible version?", answer: "Only modules that render frontend templates (product page widgets, cart components, checkout steps, etc.) need Hyvä compatibility. Admin-only modules, API integrations, and modules that only affect backend functionality don't require any changes. We audit your module list in the first phase and quantify the compatibility work required." },
    { question: "How long does a Luma to Hyvä migration take?", answer: "A standard Luma to Hyvä migration — theme rebuild, module compatibility, and Hyvä Checkout implementation — takes 8-12 weeks. Complex stores with many custom modules requiring compatibility work run 12-16 weeks. Custom Hyvä theme builds on new Magento 2 implementations run 6-8 weeks." },
    { question: "Is Hyvä compatible with Adobe Commerce (Magento Commerce)?", answer: "Yes. Hyvä works on both Magento Open Source and Adobe Commerce. The theme framework is compatible with all Adobe Commerce features including B2B Commerce, Product Recommendations, and Live Search — though some of these features require Hyvä-specific compatibility modules." },
    { question: "What is Hyvä Checkout and is it included?", answer: "Hyvä Checkout is a separately licensed module that replaces Magento's default checkout with an Alpine.js/Tailwind equivalent. It's not included in the Hyvä base theme license. We recommend implementing it as part of any Hyvä project — the default Magento checkout partially negates the performance improvements of the Hyvä theme on the most important conversion page." },
  ],
  hubInsights: [
    { image: "/industry-ecommerce.png", category: "Hyvä Theme", readTime: "7 min read", title: "Hyvä vs. Luma: Why We Recommend Hyvä for Every New Magento 2 Project", excerpt: "Hyvä has become our default recommendation for every new Magento 2 theme project. The performance advantage over Luma is too significant to ignore — and the development speed improvement means custom Hyvä themes often cost less than equivalent Luma builds. We break down the comparison with data from 15 Hyvä projects.", author: "James Okafor", authorRole: "Magento Lead", href: "/blog/hyva-vs-luma-comparison" },
    { image: "/case-study-saas.png", category: "Performance", readTime: "6 min read", title: "How Hyvä Theme Took a Magento 2 Store from 28 to 98 on Lighthouse", excerpt: "The performance difference between Luma and Hyvä is not incremental — it's categorical. We share the full before/after data from a recent Luma to Hyvä migration, including Lighthouse scores by template, Core Web Vitals measurements, and the 55% organic traffic improvement that followed.", author: "Marcus Chen", authorRole: "Performance Lead", href: "/blog/hyva-migration-case-study" },
    { image: "/case-study-home.png", category: "Alpine.js", readTime: "5 min read", title: "Alpine.js for Magento Developers: Why It's Better Than Knockout.js in Every Way", excerpt: "Alpine.js is the frontend JavaScript framework Magento 2 should have chosen from the start. It's smaller, faster, more maintainable, and easier to learn than Knockout.js. We explain what makes Alpine.js better and walk through common Magento frontend patterns rewritten in Alpine.js.", author: "Priya Anand", authorRole: "Frontend Lead", href: "/blog/alpinejs-vs-knockoutjs-magento" },
  ],
};

export default function HyvaThemeHub() {
  return <ServiceHubPage data={hyvaThemeData} />;
}
