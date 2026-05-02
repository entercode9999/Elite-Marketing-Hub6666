import { ShoppingCart, Zap, Settings, Globe, TrendingUp, RefreshCw, BarChart2, Layers, CreditCard } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-[#96bf48] px-4 py-3 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white font-black text-sm">S</span>
        </div>
        <div>
          <p className="text-white font-bold text-xs">Shopify Partner Build</p>
          <p className="text-white/60 text-[9px]">Custom Theme · No Off-The-Shelf</p>
        </div>
      </div>
      <div className="bg-white p-4">
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[{ bg: "#f3f4f6", price: "$89" }, { bg: "#fef3c7", price: "$124" }, { bg: "#dbeafe", price: "$67" }].map((p, i) => (
            <div key={i} className="rounded-lg overflow-hidden">
              <div className="aspect-square rounded-lg mb-1" style={{ background: p.bg }} />
              <p className="text-[9px] font-bold text-gray-700">{p.price}</p>
            </div>
          ))}
        </div>
        <div className="bg-gray-50 rounded-xl p-3 border border-gray-100">
          <div className="flex justify-between items-center mb-2">
            <p className="text-[10px] font-bold text-gray-700">Conversion Rate</p>
            <span className="text-[9px] font-black text-[#22c55e]">3.8%</span>
          </div>
          <div className="h-1.5 bg-gray-100 rounded-full">
            <div className="h-full bg-[#96bf48] rounded-full" style={{ width: "76%" }} />
          </div>
          <p className="text-[9px] text-gray-400 mt-1">Industry avg: 1.9% → Your store: 3.8%</p>
        </div>
      </div>
    </div>
    <div className="absolute -top-3 -right-3 bg-[#96bf48] rounded-xl px-3 py-2 shadow-xl">
      <p className="text-white font-black text-xs">Shopify Partner</p>
    </div>
    <div className="absolute -bottom-3 -left-3 bg-white rounded-xl px-3 py-2.5 shadow-xl border border-gray-100">
      <p className="text-[9px] text-gray-400">ROAS</p>
      <p className="text-xl font-black text-[#0e0e0e]">7.2x</p>
    </div>
  </div>
);

const shopifyData: HubData = {
  slug: "shopify-development",
  label: "SHOPIFY DEVELOPMENT",
  breadcrumb: "Shopify Development",
  hero: {
    headline: "Shopify Development That Converts, Not Just Displays.",
    italic: "Custom-built. Not templated.",
    description:
      "Custom Shopify theme development, app integrations, and store optimisation for DTC brands that want to outperform their category. We build on Liquid and React — no page builders, no off-the-shelf themes, no compromises on speed or conversion.",
    cta: "Get a Free Shopify Audit",
    ctaHref: "/contact",
    badges: ["Shopify Partner", "Liquid Expert", "Clutch 5★", "100+ Stores Built"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "3.8%", label: "Avg. conversion rate (vs 1.9% industry)" },
    { value: "+38%", label: "Avg. AOV increase" },
    { value: "100+", label: "Shopify stores built" },
    { value: "7.2x", label: "Avg. ROAS" },
  ],
  intro: {
    eyebrow: "Custom Shopify development",
    headline: "Your Shopify theme is either your best salesperson or your worst — there is no middle ground.",
    body: "Most Shopify stores are built on themes from the Theme Store, customised just enough to look different from the template. The problem: those themes are built for the widest possible audience, optimised for no one in particular, and bloated with features you don't use that slow down every page. Your conversion rate pays the price.",
    secondBody: "We build custom Shopify themes in Liquid from scratch — designed around your specific products, your customer journey, and your conversion benchmarks. The result is a store that loads faster, guides customers more effectively, and converts at nearly double the industry average. Every element is there because it earns its place.",
    bullets: [
      "Custom Liquid theme — no theme marketplace starting point",
      "Product page architecture designed around your highest-margin products",
      "Cart and checkout mechanics optimised for your AOV targets",
      "Shopify Markets and multi-currency configuration",
      "Full app stack audit: we remove everything that isn't converting",
    ],
  },
  proofSection: {
    eyebrow: "The custom Shopify advantage",
    headline: "A 2% conversion rate improvement on $1M revenue is $20,000 per month — permanently.",
    body: "Conversion rate is a multiplier on everything else you do in eCommerce. A 1% CVR improvement doubles the revenue from every paid click you buy. A 2% improvement makes every marketing channel dramatically more profitable. The most reliable path to conversion rate improvement is the store design — not the product, not the price, not the ad creative.",
    secondBody: "We've rebuilt stores from popular Shopify themes and measured the conversion impact directly. Average improvement: 40-60% in the first 90 days, driven entirely by design and UX changes. Product page layout, image handling, social proof placement, mobile navigation, and cart mechanics all contribute. Custom development is the only way to optimise all of these simultaneously.",
    bullets: [
      "We benchmark your current conversion rate by device, traffic source, and product before building anything — so post-launch improvements are precisely attributable.",
      "Product page architecture is designed around your specific product types and the purchase decision your customer makes — not a generic template.",
      "Mobile-first development with thumb-zone navigation, swipe gestures, and mobile-specific checkout flows — because 70%+ of your traffic is on mobile.",
      "Cart mechanics include free shipping thresholds, progress bars, upsell suggestions, and one-click checkout — all designed to increase AOV without annoying the customer.",
      "Every store launch includes Klaviyo abandoned cart, browse abandonment, and welcome flows configured and tested — because email converts what the store doesn't.",
      "Post-launch CRO programme runs A/B tests on the highest-traffic page templates from week one — continuous improvement, not a static build.",
    ],
  },
  subServices: [
    {
      tab: "Custom Theme Development",
      headline: "Shopify themes built from scratch in Liquid.",
      description: "Custom Shopify theme development using Liquid, JavaScript, and CSS. No theme framework starting points — a completely bespoke build designed for your products and your customer. Section-based architecture for your team to edit without developer involvement.",
      bullets: ["Custom Liquid theme from scratch", "Section and block architecture", "Mobile-first, Core Web Vitals optimised", "Handover documentation included"],
      image: "/case-study-ecommerce.png",
      href: "/shopify-development",
    },
    {
      tab: "Shopify CRO",
      headline: "Systematic conversion optimisation from launch day.",
      description: "Structured CRO programme for existing and new Shopify stores. Heatmap and session recording analysis, A/B testing on product pages, cart, and checkout, and monthly reporting on CVR, AOV, and revenue per visitor. CRO is a programme, not a one-time project.",
      bullets: ["Heatmap + session recording analysis", "A/B testing programme", "Product page and PDP optimisation", "Checkout friction reduction"],
      image: "/industry-ecommerce.png",
      href: "/shopify-development",
    },
    {
      tab: "Shopify App Development",
      headline: "Custom Shopify apps for functionality the App Store doesn't offer.",
      description: "Custom Shopify apps built with the Shopify App Framework — embedded admin apps, storefront extensions, checkout extensions, and post-purchase flows. When the App Store doesn't have exactly what you need, we build it.",
      bullets: ["Embedded admin app development", "Checkout UI extensions", "Storefront API integrations", "Post-purchase page customisation"],
      image: "/work-3.png",
      href: "/shopify-development",
    },
    {
      tab: "Shopify Migration",
      headline: "Migrate to Shopify without losing traffic or rankings.",
      description: "Platform migrations from WooCommerce, Magento, BigCommerce, and custom platforms to Shopify — with full URL mapping, product and customer data migration, SEO preservation, and post-migration monitoring. Zero-downtime deployment.",
      bullets: ["Full 301 redirect mapping", "Product, customer, order migration", "SEO signal preservation", "30-day post-launch monitoring"],
      image: "/case-study-homeservices.png",
      href: "/shopify-development",
    },
    {
      tab: "Store Optimisation",
      headline: "Speed, performance, and app stack optimisation.",
      description: "Shopify performance audit and optimisation — image optimisation, script deferral, app bloat elimination, and CDN configuration. We consistently take Shopify stores from 40-60 Lighthouse scores to 90+, with direct conversion rate improvements to show for it.",
      bullets: ["Lighthouse score improvement", "App stack audit and removal", "Image and media optimisation", "Third-party script management"],
      image: "/industry-fitness.png",
      href: "/shopify-development",
    },
  ],
  features: [
    { icon: <ShoppingCart className="w-5 h-5 text-primary" />, title: "Custom Liquid Themes", body: "Bespoke Shopify themes built in Liquid. No theme marketplace starting points. Designed for your products and your customer journey." },
    { icon: <TrendingUp className="w-5 h-5 text-primary" />, title: "Conversion Rate Optimisation", body: "Systematic CRO from launch day — heatmaps, A/B testing, and monthly iteration to continuously improve revenue per visitor." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Performance Optimisation", body: "90+ Lighthouse scores across every store template. Faster stores convert more — every 100ms of improvement increases CVR by ~1%." },
    { icon: <Settings className="w-5 h-5 text-primary" />, title: "Custom App Development", body: "Custom Shopify apps for functionality the App Store doesn't offer — checkout extensions, admin tools, and storefront integrations." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "Shopify Markets", body: "Multi-currency, multi-language, and multi-region store configuration using Shopify Markets. International expansion without a separate store." },
    { icon: <RefreshCw className="w-5 h-5 text-primary" />, title: "Platform Migrations", body: "Zero-loss migrations from WooCommerce, Magento, or BigCommerce to Shopify. Full redirect mapping and 30-day post-migration monitoring." },
    { icon: <Layers className="w-5 h-5 text-primary" />, title: "App Stack Management", body: "App audit and management — we remove app overhead that isn't earning revenue, reducing script load and improving store performance." },
    { icon: <CreditCard className="w-5 h-5 text-primary" />, title: "Checkout Optimisation", body: "Custom checkout flows, one-page checkout, trust signals, and abandoned checkout recovery sequences built into every store." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "Analytics & Attribution", body: "GA4, Klaviyo, and Triple Whale configured from day one. Full attribution model so you always know your true ROAS and CAC." },
  ],
  techStack: [
    { platform: "Shopify Liquid", stat: "Theme language", description: "All custom theme development in Liquid — Shopify's native templating language. No third-party theme frameworks that add dependencies and performance overhead." },
    { platform: "Shopify Hydrogen", stat: "Headless", description: "For headless Shopify builds, we use Hydrogen (Shopify's React framework) with Oxygen hosting for the fastest possible storefront performance." },
    { platform: "Klaviyo", stat: "Email & SMS", description: "Klaviyo implementation and management: welcome flows, abandoned cart, browse abandonment, post-purchase sequences, and segmented broadcast campaigns." },
    { platform: "Triple Whale", stat: "Attribution", description: "Post-iOS14 attribution for Shopify stores. Triple Whale gives more accurate ROAS measurement than native platform attribution — critical for media budget decisions." },
    { platform: "Yotpo / Okendo", stat: "Reviews", description: "Review platform setup and management for Shopify. Review collection flows, UGC integration, and loyalty programme configuration." },
    { platform: "Gorgias", stat: "Support", description: "Gorgias help desk integration with Shopify — support tickets connected to order data for one-click resolution. Configured as part of every full store build." },
  ],
  caseStudies: [
    { image: "/case-study-limo.png", client: "Coastal Collective", industry: "eCommerce", blurb: "Custom Shopify theme rebuild from a popular theme. CVR improved from 1.6% to 3.8% in 60 days post-launch. Store scaled to eight-figure revenue.", metrics: [{ value: "3.8%", label: "Conversion rate" }, { value: "+38%", label: "AOV" }] },
    { image: "/work-1.png", client: "Hudson Outdoor", industry: "Home Goods", blurb: "WooCommerce to Shopify migration with custom product pages and Klaviyo lifecycle email. Zero traffic loss and 52% conversion rate improvement post-migration.", metrics: [{ value: "0%", label: "Traffic loss" }, { value: "+52%", label: "Conversion rate" }] },
    { image: "/case-study-ecommerce.png", client: "PureStack Labs", industry: "Health & Wellness", blurb: "Shopify store performance audit and rebuild. Lighthouse score improved from 44 to 94. Organic traffic up 78% from improved Core Web Vitals rankings.", metrics: [{ value: "94", label: "Lighthouse score" }, { value: "+78%", label: "Organic traffic" }] },
  ],
  process: [
    { label: "Audit", headline: "Audit your current store performance and conversion funnel.", description: "We analyse your current CVR by device, traffic source, and product. Heatmaps, session recordings, Lighthouse benchmarks, and app stack review — all before we design or build anything." },
    { label: "Design", headline: "Conversion-first store design in Figma.", description: "Full Figma design covering homepage, collection pages, product detail pages, cart, and checkout — with conversion benchmarks from 100+ stores informing every layout decision." },
    { label: "Develop", headline: "Custom Liquid theme built from scratch.", description: "Custom theme development with section and block architecture for independent editing by your team. Staged deployments for your review at each milestone. Performance verified throughout." },
    { label: "Integrate", headline: "Connect your full app and marketing stack.", description: "Klaviyo, review platform, loyalty programme, support desk, and analytics stack integrated and tested before launch. No app left disconnected." },
    { label: "Launch", headline: "Zero-downtime go-live with post-launch monitoring.", description: "DNS cutover with redirect verification, post-launch crawl, and 30-day conversion monitoring. Analytics, heatmaps, and A/B testing configured on day one." },
    { label: "Optimise", headline: "Ongoing CRO and performance programme.", description: "A/B testing, seasonal design updates, and performance monitoring running continuously. Monthly reports on CVR, AOV, and revenue per visitor." },
  ],
  faqs: [
    { question: "Why build a custom theme rather than use a Shopify theme?", answer: "Shopify themes from the Theme Store are built for the widest possible audience — which means they're optimised for no one in particular. They include features you don't use that slow down every page, and their architecture limits what you can customise. A custom theme is built specifically for your products, your customer, and your conversion goals. The performance and CVR difference is consistently measurable." },
    { question: "How long does a custom Shopify theme take?", answer: "Design and development for a custom Shopify theme takes 8-12 weeks from kick-off to launch. Complex stores with many product types, custom app development, or multi-region configuration run 12-16 weeks. We give you a firm timeline after our discovery session." },
    { question: "Can you migrate my store from another platform?", answer: "Yes. We've migrated stores from WooCommerce, Magento, BigCommerce, and custom platforms to Shopify — with full URL mapping, product and customer data migration, and zero SEO impact. The migration plan is part of our standard scoping." },
    { question: "Do you manage the Shopify app stack?", answer: "Yes. We audit your app stack as part of the project scope, remove apps that add performance overhead without sufficient revenue impact, and manage ongoing app evaluation. Our clients typically reduce their monthly Shopify app spend by 30-40% while improving store performance." },
    { question: "What ongoing support do you offer?", answer: "Post-launch support includes a 30-day monitoring period and a choice of monthly maintenance plans covering performance monitoring, CRO testing, design updates, and development support. Most clients retain us for ongoing CRO and marketing work after launch." },
  ],
  hubInsights: [
    { image: "/industry-ecommerce.png", category: "Shopify Development", readTime: "7 min read", title: "Why We Never Use Shopify Theme Store Templates for Client Stores", excerpt: "Dawn, Debut, and every other Shopify theme are built for demos, not for the specific conversion goals of your business. We've benchmarked 40 custom builds against their template predecessors and found consistent CVR improvements of 40-60%. Here's why the template is always a ceiling.", author: "James Okafor", authorRole: "Shopify Lead", href: "/blog/shopify-custom-vs-theme-store" },
    { image: "/work-2.png", category: "eCommerce CRO", readTime: "5 min read", title: "The 8 Shopify Product Page Elements That Consistently Move Conversion Rate", excerpt: "After optimising product pages across 60+ Shopify stores, we've identified the 8 elements that produce measurable CVR improvement every time — regardless of product type or price point. Hero image handling, review placement, mobile layout, and cart mechanics dominate the list.", author: "Priya Anand", authorRole: "CRO Lead", href: "/blog/shopify-product-page-cvr" },
    { image: "/case-study-homeservices.png", category: "Shopify Performance", readTime: "6 min read", title: "How to Take Your Shopify Store from a 45 to a 90+ Lighthouse Score", excerpt: "Most Shopify stores score between 35 and 55 on Lighthouse — primarily because of app bloat, unoptimised images, and render-blocking third-party scripts. We walk through the exact optimisation sequence we use to consistently reach 90+ scores on stores of any complexity.", author: "Marcus Chen", authorRole: "Performance Specialist", href: "/blog/shopify-lighthouse-90-plus" },
  ],
};

export default function ShopifyHub() {
  return <ServiceHubPage data={shopifyData} />;
}
