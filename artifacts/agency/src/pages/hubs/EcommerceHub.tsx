import { ShoppingCart, TrendingUp, Repeat, Layers, BarChart2, Zap, Globe, ArrowUpRight, CreditCard } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
        ))}
        <div className="flex-1 bg-white rounded text-xs text-gray-400 px-3 py-1 ml-2">yourstore.ca</div>
      </div>
      <div className="bg-white p-4">
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[
            { bg: "#f3f4f6", price: "$89" },
            { bg: "#fef3c7", price: "$124" },
            { bg: "#dbeafe", price: "$67" },
          ].map((p, i) => (
            <div key={i} className="rounded-lg overflow-hidden">
              <div className="aspect-square rounded-lg mb-1" style={{ background: p.bg }} />
              <p className="text-[9px] font-bold text-gray-700">{p.price}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[10px] font-bold text-gray-700">Your Cart (3)</p>
            <span className="text-[9px] text-gray-400">Free shipping ✓</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full">
            <div className="h-full bg-[#22c55e] rounded-full" style={{ width: "70%" }} />
          </div>
          <p className="text-[9px] text-gray-400 mt-1">$30 away from free gift</p>
          <div className="mt-2 bg-[#0e0e0e] rounded-lg py-2 text-center">
            <p className="text-[10px] font-bold text-white">Checkout →</p>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute -top-3 -right-3 bg-[#96bf48] rounded-xl px-3 py-2 shadow-xl">
      <p className="text-white font-black text-xs">Shopify</p>
    </div>
    <div className="absolute -bottom-3 -left-3 bg-white rounded-xl px-3 py-2.5 shadow-xl border border-gray-100">
      <p className="text-[9px] text-gray-400">ROAS</p>
      <p className="text-xl font-black text-[#0e0e0e]">7.2x</p>
    </div>
  </div>
);

const ecommerceData: HubData = {
  slug: "ecommerce-development",
  label: "ECOMMERCE DEVELOPMENT",
  breadcrumb: "eCommerce",
  hero: {
    headline: "eCommerce Tailored for Growth.",
    italic: "More revenue per visitor.",
    description:
      "We build and optimise Shopify and WooCommerce stores that convert — not just display products. From custom store design and development to CRO, lifecycle email, and paid media, we manage the full revenue engine for your brand.",
    cta: "Get a Free eCommerce Audit",
    ctaHref: "/contact",
    badges: ["Shopify Partner", "WooCommerce Expert", "Clutch 5★", "Google Shopping Certified"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "7.2x", label: "Avg. client ROAS" },
    { value: "+38%", label: "Avg. AOV increase" },
    { value: "100+", label: "Stores built" },
    { value: "10+", label: "Years of Experience" },
  ],
  intro: {
    eyebrow: "Full-stack eCommerce growth",
    headline: "We engineer the full purchase path — from first click to repeat buyer.",
    body: "Most eCommerce agencies either build stores or run ads. We do both — and we make them work together as a unified growth system. Design and development decisions are made with conversion data in mind from day one, and every marketing channel is tuned to the purchase funnel we've built together.",
    secondBody: "The businesses that scale fastest are the ones that treat their store as a conversion machine, not a product catalogue. Every element of the purchase path — collection architecture, product page design, cart mechanics, checkout flow, and post-purchase sequence — has a measurable impact on revenue. We optimise all of it, continuously, from the day the store goes live.",
    bullets: [
      "Custom Shopify and WooCommerce design and development",
      "CRO programme from launch day — not an afterthought",
      "Google Shopping, Meta Ads, and TikTok Ads under one strategy",
      "Lifecycle email (welcome, abandon, win-back, repeat purchase)",
      "Full attribution: from ad impression to repeat purchase",
    ],
  },
  proofSection: {
    eyebrow: "The eCommerce growth formula",
    headline: "Revenue per visitor is the only metric that compounds in your favour.",
    body: "Scaling ad spend on a store that converts at 1.5% is expensive. Improving conversion to 3% before scaling doubles your return on every dollar of media spend indefinitely. The businesses that win in eCommerce are the ones that treat conversion rate as a strategic asset, not a static variable. We build and run the CRO programme alongside every store we develop.",
    secondBody: "We've taken stores from low-six-figures to eight-figure revenue. The pattern is consistent: the highest-impact work in the first 90 days is always on the purchase path — product pages, cart mechanics, checkout flow — not on increasing ad spend. Once the store converts efficiently, scaling media becomes straightforward. Scaling before the store is optimised is the single most common mistake DTC founders make.",
    bullets: [
      "We audit your full purchase path with heatmaps and session recordings before touching design or code — so every change is grounded in actual user behaviour.",
      "Product page architecture is designed around conversion benchmarks from 100+ stores — hero image treatment, copy hierarchy, review placement, and CTA design.",
      "Cart and checkout optimisation is built into every project scope: progress bars, free shipping thresholds, trust signals, and one-click upsells.",
      "Post-purchase sequences are designed and deployed before launch: review requests, cross-sell recommendations, loyalty programme triggers, and win-back flows.",
      "We report on ROAS, AOV, CVR, and CAC monthly — not just revenue — so you always understand the unit economics of your growth.",
      "Every store launch includes 30 days of post-go-live monitoring: we watch for conversion drops, technical errors, and paid campaign performance in real time.",
    ],
  },
  subServices: [
    {
      tab: "eCommerce Design",
      headline: "Stores designed to convert at every stage of the purchase path.",
      description:
        "Our eCommerce design team creates stores with conversion built in from the first wireframe. Product pages, collection layouts, filtering UX, cart, and checkout — every element is designed against conversion benchmarks from our client data. Custom Figma design systems that your team can extend independently.",
      bullets: [
        "Custom Figma design system for your brand",
        "Product page architecture for maximum AOV",
        "Collection and filtering UX design",
        "Mobile-first, Core Web Vitals optimised",
      ],
      image: "/case-study-ecommerce.png",
      href: "/ecommerce-development",
    },
    {
      tab: "eCommerce Development",
      headline: "Clean, fast, scalable Shopify and WooCommerce builds.",
      description:
        "Custom theme development for Shopify (Liquid) and WooCommerce (PHP/React). No page builders. No bloated plugins. Clean, performant code that loads fast, ranks well, and your team can maintain without a developer on retainer.",
      bullets: [
        "Custom Shopify theme development (Liquid)",
        "Custom WooCommerce builds (PHP/React)",
        "Headless commerce development",
        "Third-party app and API integrations",
      ],
      image: "/industry-ecommerce.png",
      href: "/ecommerce-development",
    },
    {
      tab: "eCommerce CRO",
      headline: "More revenue from the traffic you're already paying for.",
      description:
        "Systematic conversion optimisation for eCommerce. We audit your full purchase path with heatmaps and session recordings, identify the highest-impact drop-off points, and run structured A/B tests to fix them. CRO is a programme, not a project — it runs continuously and compounds with every iteration.",
      bullets: [
        "Full purchase path audit (heatmaps + recordings)",
        "Product page and PDP optimisation",
        "Cart and checkout abandonment reduction",
        "A/B and multivariate testing programme",
      ],
      image: "/case-study-homeservices.png",
      href: "/cro-service",
    },
    {
      tab: "eCommerce Integrations",
      headline: "Connect your store to your full tech stack.",
      description:
        "We handle all integrations — ERP, CRM, inventory management, loyalty programmes, review platforms, and fulfilment systems. Your store becomes the operational hub of your full business, with data flowing cleanly between every system.",
      bullets: [
        "ERP and inventory management integrations",
        "CRM and customer data platform (CDP) setup",
        "Loyalty and referral programme setup",
        "Review platform integrations (Yotpo, Okendo)",
      ],
      image: "/work-1.png",
      href: "/ecommerce-development",
    },
    {
      tab: "eCommerce Migration",
      headline: "Move platforms without losing a sale or a ranking.",
      description:
        "Platform migrations done with zero downtime, zero SEO impact, and zero data loss. We've migrated stores from Magento, WooCommerce, BigCommerce, and custom platforms to Shopify — with full redirect mapping, product and customer data migration, and post-migration monitoring.",
      bullets: [
        "Full URL audit and 301 redirect mapping",
        "Product, customer, and order data migration",
        "Post-migration crawl monitoring for 30 days",
        "Zero downtime deployment strategy",
      ],
      image: "/hero-abstract.png",
      href: "/ecommerce-development",
    },
    {
      tab: "eCommerce Marketing",
      headline: "Drive traffic that converts — not just traffic.",
      description:
        "Google Shopping, Meta Ads, TikTok Ads, and lifecycle email designed specifically for eCommerce. We align every campaign to your margin structure and ROAS targets — not just revenue. Media strategy and creative are built around the purchase path we've engineered together.",
      bullets: [
        "Google Shopping and PMAX campaigns",
        "Meta and TikTok dynamic product ads",
        "Abandoned cart and browse recovery email",
        "Post-purchase and repeat buyer flows",
      ],
      image: "/case-study-ecommerce.png",
      href: "/google-ads-management",
    },
  ],
  features: [
    { icon: <ShoppingCart className="w-5 h-5 text-primary" />, title: "Shopify & WooCommerce", body: "Custom builds on both major platforms. No templates. No page builders. Clean, fast, maintainable code that performs and ranks." },
    { icon: <TrendingUp className="w-5 h-5 text-primary" />, title: "Google Shopping Ads", body: "PMAX, Standard Shopping, and Performance Max campaigns tuned to your margin targets — not just your revenue numbers." },
    { icon: <Repeat className="w-5 h-5 text-primary" />, title: "Lifecycle Email", body: "Welcome, abandon, browse recovery, win-back, and repeat purchase flows — built, deployed, and managed as a retention engine." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "eCommerce CRO", body: "Systematic purchase path optimisation. Product page, cart, checkout — tested and improved continuously from launch day." },
    { icon: <Layers className="w-5 h-5 text-primary" />, title: "Platform Migration", body: "Zero SEO impact migrations from any platform to Shopify or WooCommerce. Full redirect mapping and 30-day post-migration monitoring." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "Paid Social (Meta, TikTok)", body: "Dynamic product ads and prospecting campaigns tuned for your AOV and margin targets. Creative testing built in from day one." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Speed Optimisation", body: "Sub-2 second page loads. Core Web Vitals green across all pages. Every 100ms of load time improvement lifts conversion rate." },
    { icon: <ArrowUpRight className="w-5 h-5 text-primary" />, title: "AOV Optimisation", body: "Bundles, upsells, cross-sells, and post-purchase offers designed to increase your average order value — tested against real data." },
    { icon: <CreditCard className="w-5 h-5 text-primary" />, title: "Checkout Optimisation", body: "Streamlined checkout flows that remove friction, build trust, and recover abandoned carts with automated email sequences." },
  ],
  techStack: [
    {
      platform: "Shopify",
      stat: "DTC & B2C",
      description: "Our preferred platform for DTC and B2C eCommerce. Custom Liquid theme development — no Off-The-Shelf themes. We leverage Shopify's ecosystem (Markets, B2B, Subscriptions) while maintaining lean, performant code that doesn't rely on app bloat.",
    },
    {
      platform: "WooCommerce",
      stat: "WordPress eComm",
      description: "For businesses with existing WordPress estates, complex product structures, or B2B pricing requirements. Custom PHP and React development — no page builders. Full integration with the WordPress content management system and SEO infrastructure.",
    },
    {
      platform: "Klaviyo",
      stat: "Email & SMS",
      description: "Our preferred email marketing platform for eCommerce — best-in-class segmentation, flow automation, predictive analytics, and Shopify/WooCommerce native integration. We set up, manage, and optimise your entire Klaviyo account.",
    },
    {
      platform: "Triple Whale",
      stat: "Attribution",
      description: "Post-iOS 14 attribution for eCommerce. Triple Whale's pixel and attribution modelling gives a more accurate picture of ad-driven revenue than native platform attribution — critical for making sound media budget allocation decisions.",
    },
    {
      platform: "Yotpo / Okendo",
      stat: "Reviews & Loyalty",
      description: "Product review collection, UGC management, and loyalty programme infrastructure. We set up review request flows, loyalty tiers, and referral programmes as part of every eCommerce build.",
    },
    {
      platform: "Gorgias",
      stat: "Customer support",
      description: "Customer support help desk with deep Shopify integration. Gorgias connects support tickets to order data, enabling one-click refunds, reorders, and order edits directly from the support interface. We configure and integrate it as part of every full eCommerce build.",
    },
  ],
  caseStudies: [
    {
      image: "/industry-ecommerce.png",
      client: "Coastal Collective",
      industry: "eCommerce",
      blurb: "Shopify redesign plus a full concurrent CRO programme. Checkout completion improved 31%. Store scaled from low-six-figures to eight-figure revenue in 18 months with the same media budget.",
      metrics: [{ value: "7.2x", label: "Q1 ROAS" }, { value: "+38%", label: "AOV" }],
    },
    {
      image: "/case-study-homeservices.png",
      client: "Hudson Outdoor",
      industry: "Home Goods",
      blurb: "Full eCommerce build on WooCommerce plus Google Shopping, Meta Ads, and lifecycle email as a unified growth system. Every channel designed around the purchase path we built.",
      metrics: [{ value: "7.2x", label: "Blended ROAS" }, { value: "+18%", label: "Conv. rate" }],
    },
    {
      image: "/case-study-ecommerce.png",
      client: "PureStack Labs",
      industry: "Health & Wellness",
      blurb: "WooCommerce to Shopify migration with full URL mapping and zero ranking loss. Post-migration CRO programme lifted conversion rate from 1.8% to 2.9% in the first 60 days.",
      metrics: [{ value: "0%", label: "Traffic loss" }, { value: "+52%", label: "Conversion rate" }],
    },
  ],
  process: [
    {
      label: "Discover",
      headline: "Deep dive into your store performance, customers, and competitive landscape.",
      description: "We audit your existing store data before designing or building anything — conversion rates by device, drop-off points in the funnel, AOV by product category, email flow performance, and paid media structure. We combine analytics data with heatmaps and session recordings to understand exactly where revenue is being lost and why.",
    },
    {
      label: "Strategy",
      headline: "Define the revenue architecture before touching a line of code.",
      description: "We create a full eCommerce growth strategy — store design principles, channel mix, margin targets, ROAS benchmarks, and a 90-day post-launch CRO roadmap. You sign off before we execute. The strategy document becomes the brief for every subsequent phase.",
    },
    {
      label: "Design",
      headline: "Conversion-first store design informed by your brand and your data.",
      description: "Full UI/UX design in Figma — homepage, collection pages, product detail pages, cart, checkout, and all key landing pages — with conversion benchmarks from our client data informing every layout decision. You review and approve all designs before any development begins.",
    },
    {
      label: "Build",
      headline: "Custom development. No page builders. No third-party theme bloat.",
      description: "Clean Shopify Liquid or WooCommerce PHP/React development. Every component is optimised for load speed and conversion. Staging environment with milestone-based reviews throughout. We test Core Web Vitals throughout development — not as a post-build checklist.",
    },
    {
      label: "Launch",
      headline: "Zero-downtime go-live with full analytics and monitoring in place.",
      description: "Staged deployment with DNS management, redirect verification, and post-launch crawl monitoring. Analytics, heatmaps, Klaviyo flows, and A/B testing tools are configured and tested before the store goes live — not after. Day one of the store's life generates usable data.",
    },
    {
      label: "Optimise",
      headline: "Systematic CRO and marketing from launch day — not as a second phase.",
      description: "Google Shopping, Meta Ads, lifecycle email, and A/B testing all running from day one. Monthly reports with ROAS, AOV, CVR, CAC, and a clear forward roadmap. The optimisation programme runs continuously alongside your marketing — because a great store and a great media strategy compound each other.",
    },
  ],
  faqs: [
    {
      question: "Shopify or WooCommerce — which platform is right for my business?",
      answer: "Shopify is the right choice for most DTC brands — simpler to operate, excellent app ecosystem, and Shopify Payments removes payment gateway complexity. WooCommerce is right for businesses with an existing WordPress estate, complex product structures, B2B pricing, or requirements that Shopify's architecture doesn't support natively. We'll give you a direct recommendation after understanding your business during our strategy call.",
    },
    {
      question: "How long does a custom Shopify build take?",
      answer: "A custom Shopify store — design, development, integrations, and testing — takes 8-12 weeks from kick-off to launch. Simple stores with fewer than 50 SKUs and standard functionality can be faster. Complex multi-currency, B2B, or subscription builds with custom integrations run longer. We give you a firm timeline after the discovery and scoping session.",
    },
    {
      question: "Do you handle ongoing marketing as well as the store build?",
      answer: "Yes. Most of our eCommerce clients run Google Shopping, Meta Ads, and lifecycle email with us after launch. We prefer this arrangement because the CRO programme and the media strategy are most effective when run by the same team — learnings from A/B tests improve ad landing pages, and ad audience data informs CRO hypotheses. We can also hand off to your in-house team with full documentation and training.",
    },
    {
      question: "Can you migrate my existing store to Shopify?",
      answer: "Yes. We've migrated stores from Magento, BigCommerce, WooCommerce, and fully custom platforms to Shopify — with full URL mapping, 301 redirect implementation, product and customer data migration, and zero SEO impact. The migration process is included in our discovery scoping and typically adds 2-3 weeks to the overall project timeline.",
    },
    {
      question: "How do you measure and report on ROAS?",
      answer: "We set up proper attribution in GA4 and your ad platforms from day one. We use blended ROAS (total revenue divided by total ad spend) as our primary efficiency metric, alongside channel-specific ROAS for budget allocation decisions. Post-iOS 14, we also use Triple Whale for more accurate attribution modelling. All of this is visible in your Looker Studio dashboard at any time.",
    },
  ],
  hubInsights: [
    {
      image: "/industry-ecommerce.png",
      category: "eCommerce Strategy",
      readTime: "8 min read",
      title: "Why You Should Fix Your Store's Conversion Rate Before Scaling Ad Spend",
      excerpt: "Doubling your ad budget on a 1.5% converting store doubles your spend and doubles your revenue. Improving conversion to 3% before scaling doubles your revenue from every dollar you already spend — permanently. We walk through the purchase path audit process and the specific interventions that consistently move conversion rate in the first 60 days.",
      href: "/blog/conversion-before-scaling",
    },
    {
      image: "/case-study-homeservices.png",
      category: "Shopify Development",
      readTime: "6 min read",
      title: "Why We Never Use Page Builders for Shopify Stores",
      excerpt: "Shopify page builders — PageFly, GemPages, Shogun — are appealing for their speed and visual editing. In practice, they produce bloated code that fails Core Web Vitals, creates maintenance nightmares, and limits what you can build as the store scales. Here's what we build instead and why it performs better at every scale.",
      href: "/blog/shopify-no-page-builders",
    },
    {
      image: "/case-study-ecommerce.png",
      category: "Email Marketing",
      readTime: "5 min read",
      title: "The 6 Klaviyo Flows Every Shopify Store Needs From Day One",
      excerpt: "Most Shopify stores launch with a welcome email and an abandoned cart flow. That's leaving 60% of email revenue on the table. We walk through the six flows that consistently generate the most revenue per subscriber — with the trigger logic, timing, and copy principles that make each one perform.",
      href: "/blog/klaviyo-flows-shopify",
    },
  ],
};

export default function EcommerceHub() {
  return <ServiceHubPage data={ecommerceData} />;
}
