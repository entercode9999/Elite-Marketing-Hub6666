import { ShoppingCart, TrendingUp, Repeat, Layers, BarChart2, Zap, Globe, ArrowUpRight, CreditCard } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    {/* Store mockup */}
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
        ))}
        <div className="flex-1 bg-white rounded text-xs text-gray-400 px-3 py-1 ml-2">yourstore.ca</div>
      </div>
      <div className="bg-white p-4">
        {/* Product grid */}
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
        {/* Cart preview */}
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
    {/* Platform badges */}
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
    body: "Most eCommerce agencies either build stores or run ads. We do both — and we make them work together as a unified growth system. Design and development decisions are made with conversion data in mind from day one, and every marketing channel is tuned to the purchase funnel we've built.",
    bullets: [
      "Custom Shopify and WooCommerce design and development",
      "CRO programme from launch day — not an afterthought",
      "Google Shopping, Meta Ads, and TikTok Ads under one strategy",
      "Lifecycle email (welcome, abandon, win-back, repeat purchase)",
      "Full attribution: from ad impression to repeat purchase",
    ],
  },
  subServices: [
    {
      tab: "eCommerce Design",
      headline: "Stores designed to convert at every stage of the purchase path.",
      description:
        "Our eCommerce design team creates stores with conversion built in from the first wireframe. Product pages, collection layouts, filtering UX, cart, and checkout — every element is designed against conversion benchmarks from our client data.",
      bullets: [
        "Custom Figma design system for your brand",
        "Product page architecture for maximum AOV",
        "Collection and filtering UX design",
        "Mobile-first, Core Web Vitals optimised",
      ],
      image: "/industry-ecommerce.png",
      href: "/ecommerce-development",
    },
    {
      tab: "eCommerce Development",
      headline: "Clean, fast, scalable Shopify and WooCommerce builds.",
      description:
        "Custom theme development for Shopify (Liquid) and WooCommerce (PHP/React). No page builders. No bloated plugins. Clean, performant code that loads fast, ranks well, and your team can maintain.",
      bullets: [
        "Custom Shopify theme development (Liquid)",
        "Custom WooCommerce builds (PHP/React)",
        "Headless commerce development",
        "Third-party app and API integrations",
      ],
      image: "/case-study-saas.png",
      href: "/ecommerce-development",
    },
    {
      tab: "eCommerce CRO",
      headline: "More revenue from the traffic you're already paying for.",
      description:
        "Systematic conversion optimisation for eCommerce. We audit your full purchase path with heatmaps and session recordings, identify the highest-impact drop-off points, and run structured A/B tests to fix them.",
      bullets: [
        "Full purchase path audit (heatmaps + recordings)",
        "Product page and PDP optimisation",
        "Cart and checkout abandonment reduction",
        "A/B and multivariate testing programme",
      ],
      image: "/case-study-home.png",
      href: "/cro-service",
    },
    {
      tab: "eCommerce Integrations",
      headline: "Connect your store to your full tech stack.",
      description:
        "We handle all integrations — ERP, CRM, inventory management, loyalty programmes, review platforms, and fulfilment systems. Your store becomes the hub of your full business operations.",
      bullets: [
        "ERP and inventory management integrations",
        "CRM and customer data platform (CDP) setup",
        "Loyalty and referral programme setup",
        "Review platform integrations (Yotpo, Okendo)",
      ],
      image: "/case-study-saas.png",
      href: "/ecommerce-development",
    },
    {
      tab: "eCommerce Migration",
      headline: "Move platforms without losing a sale or a ranking.",
      description:
        "Platform migrations done with zero downtime, zero SEO impact, and zero data loss. We've migrated stores from Magento, WooCommerce, BigCommerce, and custom platforms to Shopify — with full redirect mapping and post-migration monitoring.",
      bullets: [
        "Full URL audit and 301 redirect mapping",
        "Product, customer, and order data migration",
        "Post-migration crawl monitoring for 30 days",
        "Zero downtime deployment strategy",
      ],
      image: "/case-study-realestate.png",
      href: "/ecommerce-development",
    },
    {
      tab: "eCommerce Marketing",
      headline: "Drive traffic that converts — not just traffic.",
      description:
        "Google Shopping, Meta Ads, TikTok Ads, and lifecycle email designed specifically for eCommerce. We align every campaign to your margin structure and ROAS targets — not just revenue.",
      bullets: [
        "Google Shopping and PMAX campaigns",
        "Meta and TikTok dynamic product ads",
        "Abandoned cart and browse recovery email",
        "Post-purchase and repeat buyer flows",
      ],
      image: "/industry-ecommerce.png",
      href: "/google-ads-management",
    },
  ],
  features: [
    { icon: <ShoppingCart className="w-5 h-5 text-primary" />, title: "Shopify & WooCommerce", body: "Custom builds on both major platforms. No templates. Clean, fast, maintainable code." },
    { icon: <TrendingUp className="w-5 h-5 text-primary" />, title: "Google Shopping Ads", body: "PMAX, Standard Shopping, and Performance Max campaigns tuned to your margin targets." },
    { icon: <Repeat className="w-5 h-5 text-primary" />, title: "Lifecycle Email", body: "Welcome, abandon, browse recovery, win-back, and repeat purchase flows — built and managed for you." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "eCommerce CRO", body: "Systematic purchase path optimisation. Product page, cart, checkout — tested and improved continuously." },
    { icon: <Layers className="w-5 h-5 text-primary" />, title: "Platform Migration", body: "Zero SEO impact migrations from any platform to Shopify or WooCommerce. Redirect mapping included." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "Paid Social (Meta, TikTok)", body: "Dynamic product ads and prospecting campaigns tuned for your AOV and margin targets." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Speed Optimisation", body: "Sub-2 second page loads. Core Web Vitals green across all pages. Faster stores convert more." },
    { icon: <ArrowUpRight className="w-5 h-5 text-primary" />, title: "AOV Optimisation", body: "Bundles, upsells, cross-sells, and post-purchase offers designed to increase your average order value." },
    { icon: <CreditCard className="w-5 h-5 text-primary" />, title: "Checkout Optimisation", body: "Streamlined checkout flows that remove friction and recover abandoned carts automatically." },
  ],
  caseStudies: [
    {
      image: "/industry-ecommerce.png",
      client: "Coastal Collective",
      industry: "eCommerce",
      blurb: "Shopify redesign + full CRO programme. Store moved from low-six-figures to eight-figure revenue in 18 months.",
      metrics: [{ value: "7.2x", label: "Q1 ROAS" }, { value: "+38%", label: "AOV" }],
    },
    {
      image: "/case-study-home.png",
      client: "Hudson Outdoor",
      industry: "Home Goods",
      blurb: "Full eCommerce build + Google Shopping + Meta Ads + lifecycle email as a unified growth system.",
      metrics: [{ value: "$2.4M", label: "Attributed revenue" }, { value: "+18%", label: "Conv. rate" }],
    },
    {
      image: "/case-study-saas.png",
      client: "PureStack Labs",
      industry: "Health & Wellness",
      blurb: "WooCommerce to Shopify migration with zero ranking loss + post-migration CRO programme.",
      metrics: [{ value: "0%", label: "Traffic loss" }, { value: "+52%", label: "Conversion rate" }],
    },
  ],
  process: [
    { label: "Discover", headline: "Deep dive into your store, customers, and market.", description: "We audit your existing store data — conversion rates by device, drop-off points in the funnel, AOV by product category, and ad account structure — before recommending anything." },
    { label: "Strategy", headline: "Define the revenue architecture before touching code.", description: "We create a full eCommerce growth strategy — from store design principles to channel mix, margin targets, and ROAS benchmarks. You sign off before we execute." },
    { label: "Design", headline: "Conversion-first store design with your brand system.", description: "Full UI/UX design in Figma — store design, product pages, collection layouts, cart, and checkout — with conversion benchmarks built in from the first wireframe." },
    { label: "Build", headline: "Custom development. No page builders. No bloat.", description: "Clean Shopify (Liquid) or WooCommerce (PHP/React) development. Every component optimised for load speed and conversion. Staging environment for your review at each milestone." },
    { label: "Launch", headline: "Zero-downtime go-live with full monitoring.", description: "Staged deployment with DNS management, redirect verification, and post-launch crawl monitoring. Analytics, heatmaps, and A/B testing tools configured before the store goes live." },
    { label: "Optimise", headline: "Systematic CRO and marketing from launch day.", description: "Google Shopping, Meta Ads, lifecycle email, and A/B testing all running from day one. Monthly reports with ROAS, AOV, CVR, and a clear roadmap for the next 90 days." },
  ],
  faqs: [
    { question: "Shopify or WooCommerce — which should I use?", answer: "It depends on your product catalogue, tech stack, and team capabilities. Shopify is simpler to operate and excellent for DTC brands. WooCommerce gives more control for complex products or B2B pricing structures. We'll advise you during our discovery call." },
    { question: "How long does a custom Shopify build take?", answer: "A custom Shopify store takes 8-12 weeks from kick-off to launch. This includes design, development, integrations, and testing. Simple stores can be faster; complex multi-currency or B2B builds run longer." },
    { question: "Do you handle the ongoing marketing as well?", answer: "Yes. Most of our eCommerce clients run Google Shopping, Meta Ads, and lifecycle email with us after launch. We can also hand off to your in-house team with full documentation and training." },
    { question: "Can you migrate my existing store?", answer: "Yes. We've migrated stores from Magento, BigCommerce, WooCommerce, and custom platforms to Shopify — with full redirect mapping and zero SEO impact. The migration is included in our discovery scoping." },
    { question: "How do you measure ROAS?", answer: "We set up proper attribution in GA4 and your ad platforms from day one. We use blended ROAS (total revenue ÷ total ad spend) as our primary metric, alongside channel-specific ROAS for budget allocation decisions." },
  ],
};

export default function EcommerceHub() {
  return <ServiceHubPage data={ecommerceData} />;
}
