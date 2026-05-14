import { Code2, Zap, Globe, Database, Layers, RefreshCw, BarChart2, Settings, TrendingUp } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
        ))}
        <div className="flex-1 bg-white rounded text-xs text-gray-400 px-3 py-1 ml-2">store.brand.ca — Next.js</div>
      </div>
      <div className="bg-[#0a0c12] p-4">
        <div className="bg-white/5 rounded-xl p-3 mb-3 border border-white/8">
          <p className="text-[9px] text-white/30 uppercase tracking-widest mb-2">Headless Architecture</p>
          <div className="flex items-center gap-2 mb-2">
            <span className="text-[9px] font-black text-white/50 bg-white/10 px-2 py-0.5 rounded">Next.js Frontend</span>
            <span className="text-[9px] text-white/30">→</span>
            <span className="text-[9px] font-black text-primary bg-primary/10 px-2 py-0.5 rounded">Storefront API</span>
            <span className="text-[9px] text-white/30">→</span>
            <span className="text-[9px] font-black text-white/50 bg-white/10 px-2 py-0.5 rounded">Shopify</span>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[{ v: "< 0.5s", l: "LCP", c: "#22c55e" }, { v: "100", l: "Lighthouse", c: "#1a56ff" }, { v: "Unlimited", l: "Custom UI", c: "#f59e0b" }].map((s) => (
            <div key={s.l} className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
              <p className="text-sm font-black" style={{ color: s.c }}>{s.v}</p>
              <p className="text-[8px] text-white/30 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100">
      <p className="text-[10px] text-gray-400">LCP</p>
      <p className="text-2xl font-black text-[#22c55e]">&lt; 0.5s</p>
    </div>
    <div className="absolute -top-4 -left-4 bg-[#0a0c12] rounded-xl px-3 py-2.5 shadow-xl border border-white/10">
      <p className="text-[9px] text-white/30">Stack</p>
      <p className="text-lg font-black text-white">Headless</p>
    </div>
  </div>
);

const headlessData: HubData = {
  slug: "headless-commerce-service",
  label: "HEADLESS COMMERCE",
  breadcrumb: "Headless Commerce",
  hero: {
    headline: "Headless Commerce. Maximum Performance. Total Control.",
    italic: "Your frontend. Their infrastructure.",
    description:
      "Headless commerce architecture separates your storefront (the frontend you control completely) from your commerce infrastructure (Shopify, Magento, or a composable commerce platform). The result is a store that loads in under 500ms, can be designed without platform constraints, and integrates with your full technology ecosystem.",
    cta: "Get a Headless Architecture Consultation",
    ctaHref: "/contact",
    badges: ["Next.js Expert", "Shopify Hydrogen", "Magento PWA", "Composable Commerce"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "< 0.5s", label: "Typical LCP on headless builds" },
    { value: "100", label: "Lighthouse score achievable" },
    { value: "4x", label: "Faster than templated storefronts" },
    { value: "Zero", label: "Platform UI constraints" },
  ],
  intro: {
    eyebrow: "Why headless commerce",
    headline: "Headless is not a trend — it's the architecture that the fastest commerce experiences in the world are built on.",
    body: "Traditional eCommerce platforms tightly couple the storefront with the commerce backend — you get the theme system they provide and work within its constraints. Headless commerce decouples them: you build the frontend with any technology you choose (React, Next.js, Vue, Nuxt) and connect to the commerce backend via API. The frontend is entirely yours. The commerce infrastructure — product catalogues, cart, checkout, payments — runs on Shopify, Magento, or a headless commerce platform.",
    secondBody: "The performance difference is dramatic. A headless Next.js storefront connected to Shopify consistently achieves LCP under 500ms — compared to 2-4s for a standard Shopify theme. For high-traffic brands where every millisecond of load time correlates to conversion rate, and where SEO performance directly determines revenue, headless is the architecture that earns its implementation cost.",
    bullets: [
      "Next.js frontend with SSG/ISR for sub-500ms page loads at global CDN edges",
      "Full design freedom — no platform template constraints, no Liquid limitations",
      "Connect to multiple backends: Shopify, Magento, Contentful, Algolia, Klaviyo",
      "SEO advantage: static generation means instant page loads and perfect Core Web Vitals",
      "Incremental Static Regeneration (ISR) for product page freshness without full rebuilds",
    ],
  },
  proofSection: {
    eyebrow: "The headless performance advantage",
    headline: "Sub-500ms LCP is not achievable on a server-rendered Shopify theme. It is standard on a well-built Next.js storefront.",
    body: "The performance ceiling of a traditional Shopify theme is approximately 2-2.5s LCP on a well-optimised build. Headless with Next.js and edge CDN delivery typically achieves 300-500ms LCP — a 4-8x improvement. For brands spending $500k+/year on paid media, the conversion rate improvement from that performance difference compounds significantly on every campaign.",
    secondBody: "The design freedom argument is equally compelling. Shopify themes are constrained by Liquid's template system, section architecture, and what the platform exposes through its storefront. A headless frontend is just React — anything you can build on the web, you can build on your storefront. Custom animation, unconventional navigation, immersive product experiences — none of which are possible within a traditional theme.",
    bullets: [
      "Static site generation (SSG) pre-renders every product and collection page at build time — they load from a global CDN edge, not from a server, on every visit.",
      "Incremental Static Regeneration (ISR) keeps product pages fresh without a full site rebuild — a page is regenerated in the background only when it receives a visitor after its revalidation window.",
      "Full composable architecture: swap your commerce backend from Shopify to Magento without changing the frontend. Replace your search provider without changing the UI.",
      "Algolia integration for search brings sub-50ms faceted search to your storefront — impossible to achieve with platform-native search.",
      "Content managed in a headless CMS (Contentful, Sanity) gives your content team the editing experience of a modern platform while the frontend renders it at CDN speed.",
      "We build comprehensive documentation for every headless implementation — architecture diagrams, API integration guides, and deployment procedures — so your team can maintain and extend it.",
    ],
  },
  subServices: [
    {
      tab: "Shopify Headless",
      headline: "Next.js storefront connected to Shopify via Storefront API.",
      description: "Custom Next.js storefront built with React and connected to Shopify's Storefront API. All Shopify commerce capabilities — products, cart, checkout, accounts — delivered through a completely custom frontend with no Liquid or theme constraints.",
      bullets: ["Next.js App Router + React", "Shopify Storefront API", "Shopify Hydrogen/Oxygen option", "Full checkout customisation"],
      image: "/hero-abstract.png",
      href: "/headless-commerce-service",
    },
    {
      tab: "Magento PWA",
      headline: "Progressive Web App storefront for Magento 2.",
      description: "PWA Studio or custom React storefront connected to Magento 2 via GraphQL API. The performance and UX of a modern web application on top of Magento's powerful commerce infrastructure.",
      bullets: ["Magento 2 GraphQL API", "PWA Studio or custom React", "App-like offline experience", "Full Magento feature access"],
      image: "/hero-showcase.png",
      href: "/headless-commerce-service",
    },
    {
      tab: "Composable Commerce",
      headline: "Best-of-breed architecture with multiple specialised systems.",
      description: "True composable commerce architecture: Shopify or Commercetools for commerce, Contentful for content, Algolia for search, Klaviyo for email, and a custom Next.js frontend connecting them all. Best tool for each job — fully integrated.",
      bullets: ["Commerce + CMS + Search + Email", "Next.js composable frontend", "Algolia search integration", "Unified data layer design"],
      image: "/work-2.png",
      href: "/headless-commerce-service",
    },
    {
      tab: "Content Commerce",
      headline: "Rich editorial content and commerce in one headless experience.",
      description: "Headless architecture for brands where content and commerce are equally important — luxury, lifestyle, and high-consideration purchase categories. Contentful or Sanity CMS for rich editorial, Shopify for commerce, combined in a single seamless Next.js experience.",
      bullets: ["Headless CMS integration", "Editorial + product pages", "Storytelling + conversion", "Brand-first UI design"],
      image: "/case-study-saas.png",
      href: "/headless-commerce-service",
    },
    {
      tab: "Migration to Headless",
      headline: "Migrate your existing store to a headless architecture.",
      description: "Migrate from a traditional Shopify theme or Magento monolith to a headless architecture — with phased rollout, traffic migration strategy, and SEO preservation. We handle the transition so your existing traffic and rankings are protected throughout.",
      bullets: ["Phased migration strategy", "SEO preservation", "A/B testing new vs. old frontend", "Zero ranking loss approach"],
      image: "/industry-ecommerce.png",
      href: "/headless-commerce-service",
    },
  ],
  features: [
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Sub-500ms LCP", body: "Static generation at CDN edges delivers page loads that standard server-rendered storefronts cannot achieve. A direct conversion rate advantage." },
    { icon: <Code2 className="w-5 h-5 text-primary" />, title: "Next.js / React Frontend", body: "Complete UI freedom — design and build any storefront experience without platform template constraints." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "Shopify Storefront API", body: "Full Shopify commerce capabilities — products, cart, checkout, accounts — delivered through any frontend you choose." },
    { icon: <Database className="w-5 h-5 text-primary" />, title: "Composable Architecture", body: "Swap any backend layer independently. Change your commerce platform, CMS, or search provider without rebuilding the frontend." },
    { icon: <Settings className="w-5 h-5 text-primary" />, title: "Algolia Search", body: "Sub-50ms faceted search on any catalogue size. Relevance tuning, A/B testing, and analytics dashboards built in." },
    { icon: <Layers className="w-5 h-5 text-primary" />, title: "Headless CMS", body: "Contentful or Sanity for rich editorial content — your team manages content in a modern editing interface, the frontend renders it at CDN speed." },
    { icon: <RefreshCw className="w-5 h-5 text-primary" />, title: "ISR / On-Demand Revalidation", body: "Incremental Static Regeneration keeps product pages fresh without full rebuilds — critical for large catalogues that change frequently." },
    { icon: <TrendingUp className="w-5 h-5 text-primary" />, title: "SEO Performance", body: "Perfect Core Web Vitals, static HTML for every page, and crawlable content for every route. The SEO ceiling for headless is higher than any platform theme." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "Analytics Integration", body: "GA4, Segment, Mixpanel, and custom analytics events — all instrumented properly in the frontend codebase from day one." },
  ],
  techStack: [
    { platform: "Next.js / React", stat: "Frontend", description: "Next.js App Router with React server components for optimal performance. SSG for product pages, ISR for freshness, SSR for personalised content. TypeScript throughout." },
    { platform: "Shopify Storefront API", stat: "Commerce", description: "GraphQL-based Shopify API for all commerce operations — product queries, cart management, checkout, and customer accounts. Compatible with Shopify Plus for advanced checkout." },
    { platform: "Contentful / Sanity", stat: "Headless CMS", description: "Content managed in a modern headless CMS — Contentful for enterprise editorial teams, Sanity for real-time collaborative editing and custom document types." },
    { platform: "Algolia", stat: "Search", description: "InstantSearch for faceted catalogue search. Sub-50ms results, relevance tuning, A/B testing, and analytics dashboards. Dramatically better than any platform-native search." },
    { platform: "Vercel", stat: "Hosting", description: "Next.js applications on Vercel's edge network — automatic preview environments on every PR, ISR revalidation hooks, and edge middleware for personalisation." },
    { platform: "Klaviyo / Segment", stat: "Data layer", description: "Customer event data flowing from the frontend to Klaviyo for lifecycle marketing and Segment for a unified customer data platform across your entire tech stack." },
  ],
  caseStudies: [
    { image: "/hero-abstract.png", client: "Coastal Collective", industry: "eCommerce", blurb: "Shopify theme migrated to headless Next.js. LCP improved from 2.8s to 420ms. Organic traffic up 68% from Core Web Vitals improvement in first 4 months.", metrics: [{ value: "420ms", label: "LCP (was 2.8s)" }, { value: "+68%", label: "Organic traffic" }] },
    { image: "/case-study-ecommerce.png", client: "LuxeBrand", industry: "Luxury Retail", blurb: "Custom Next.js storefront with Contentful CMS and Shopify commerce. Editorial and product pages unified in one immersive experience. CVR improved 44%.", metrics: [{ value: "+44%", label: "Conversion rate" }, { value: "100", label: "Lighthouse score" }] },
    { image: "/hero-showcase.png", client: "Industrial Supply Co.", industry: "B2B Commerce", blurb: "Magento 2 + PWA Studio headless build for a 150k-SKU B2B catalogue. Full-text search via Algolia with faceted filtering across 200+ attributes.", metrics: [{ value: "150k", label: "SKUs with sub-50ms search" }, { value: "+85%", label: "Search-to-purchase rate" }] },
  ],
  process: [
    { label: "Architecture", headline: "Design the composable architecture before any development.", description: "Stack selection (frontend framework, CMS, search, commerce platform), API integration design, data flow mapping, and infrastructure planning. This phase determines your total cost of ownership for years." },
    { label: "Design", headline: "Component library and page design in Figma.", description: "Full Figma design system — every component, every page template, every state — designed and approved before development begins. Headless gives total design freedom; we use all of it." },
    { label: "Frontend Development", headline: "Next.js storefront built in React with TypeScript.", description: "Component library development, page routing, API integration, and ISR configuration. Staged deployments with preview URLs for every branch. Performance verified throughout development." },
    { label: "Commerce Integration", headline: "Shopify or Magento API integration.", description: "Product, collection, cart, checkout, and account pages all connected to your commerce backend. Custom Shopify Functions or Magento extensions where the API doesn't cover your requirements." },
    { label: "CMS Integration", headline: "Content management connected to the frontend.", description: "Headless CMS setup, content model design, and integration with the frontend. Your team can edit content in Contentful or Sanity and see changes reflected in the storefront in under 60 seconds." },
    { label: "Launch", headline: "Phased traffic migration with SEO preservation.", description: "Staged DNS migration with traffic splitting to validate performance before full cutover. Post-launch crawl monitoring and 30-day performance tracking. Rankings preserved through proper redirect and canonical configuration." },
  ],
  faqs: [
    { question: "Is headless commerce right for every brand?", answer: "No. Headless commerce has a higher implementation cost and requires more technical capability to maintain. It's the right choice for brands where maximum performance and design freedom provide a measurable commercial return — typically brands at $5M+ revenue, with significant SEO traffic, or with design requirements that can't be met by a platform theme. For smaller stores, a well-optimised Shopify theme delivers most of the same benefits." },
    { question: "How long does a headless commerce build take?", answer: "A headless Shopify + Next.js build takes 12-16 weeks from kick-off to launch. Composable commerce builds with CMS, search, and multiple backend integrations run 16-24 weeks. The design phase is longer than a standard build because you're designing every element from scratch — which is also what makes the result so distinctive." },
    { question: "Will my team be able to manage content?", answer: "Yes. Content management in a headless setup actually improves for non-technical users — Contentful and Sanity provide much better editing experiences than Shopify's page editor or Liquid template editing. Product content is still managed in your commerce platform (Shopify admin, Magento admin). We provide full training and documentation for your team." },
    { question: "What happens when Shopify releases updates?", answer: "Your Next.js frontend is independent of Shopify theme releases — platform updates don't break your storefront. API changes are the only risk, and Shopify maintains API versioning with deprecation periods. We include API version management in our maintenance plans." },
    { question: "Can you migrate our existing store to headless in phases?", answer: "Yes. We recommend a phased approach for most migrations — start with the highest-traffic pages (homepage, collections, product pages) and migrate progressively. We use traffic splitting to A/B test the new frontend against the existing one before full cutover." },
  ],
  hubInsights: [
    { image: "/case-study-saas.png", category: "Headless Commerce", readTime: "9 min read", title: "Headless Commerce in 2026: When It's Worth the Investment and When It Isn't", excerpt: "Headless commerce has significant advantages — performance, design freedom, composability. It also has real costs — implementation complexity, maintenance overhead, and a steeper technical learning curve. We've built 20+ headless storefronts and have a clear framework for when the investment pays off and when a well-optimised traditional build is the smarter choice.", href: "/blog/headless-commerce-when-worth-it" },
    { image: "/work-2.png", category: "Next.js Performance", readTime: "7 min read", title: "How to Achieve Sub-500ms LCP on a Next.js Commerce Storefront", excerpt: "Sub-500ms LCP requires the right combination of static generation, edge CDN delivery, image optimisation, and font loading strategy. We walk through the complete optimisation stack we use on every headless commerce build, with before/after Lighthouse scores from real projects.", href: "/blog/nextjs-sub-500ms-lcp" },
    { image: "/industry-ecommerce.png", category: "Composable Commerce", readTime: "6 min read", title: "Algolia + Shopify Headless: Building Search That Converts", excerpt: "Platform-native Shopify search handles basic keyword matching. Algolia on a headless storefront delivers faceted search, typo tolerance, personalised ranking, and A/B testing in under 50ms. We walk through the integration architecture and the conversion impact we've measured on stores that made the switch.", href: "/blog/algolia-shopify-headless-search" },
  ],
};

export default function HeadlessCommerceHub() {
  return <ServiceHubPage data={headlessData} />;
}
