import { Zap, Settings, Globe, TrendingUp, RefreshCw, BarChart2, Layers, CreditCard, Code2 } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-[#008060] px-4 py-3 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white font-black text-sm">S+</span>
        </div>
        <div>
          <p className="text-white font-bold text-xs">Shopify Plus</p>
          <p className="text-white/60 text-[9px]">Enterprise Commerce</p>
        </div>
      </div>
      <div className="bg-[#0a0c12] p-4">
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[{ v: "99.99%", l: "Uptime SLA", c: "#22c55e" }, { v: "10k+", l: "Orders/day", c: "#1a56ff" }, { v: "99.99%", l: "Uptime SLA", c: "#f59e0b" }].map((s) => (
            <div key={s.l} className="bg-white/5 rounded-lg p-2.5 text-center">
              <p className="font-black text-sm" style={{ color: s.c }}>{s.v}</p>
              <p className="text-[9px] text-white/30 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/5 rounded-xl p-3 border border-white/8">
          <p className="text-[9px] text-white/30 uppercase tracking-widest mb-2">Plus Exclusives</p>
          {["Checkout extensibility", "B2B with Markets Pro", "Launchpad automation", "Script Editor / Functions"].map((f) => (
            <div key={f} className="flex items-center gap-2 py-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-[#008060]" />
              <span className="text-[9px] text-white/50">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100">
      <p className="text-[10px] text-gray-400">Revenue scale</p>
      <p className="text-2xl font-black text-[#008060]">$10M+</p>
    </div>
    <div className="absolute -top-4 -left-4 bg-[#008060] rounded-xl px-3 py-2.5 shadow-xl">
      <p className="text-white font-black text-xs">Shopify Plus</p>
    </div>
  </div>
);

const shopifyPlusData: HubData = {
  slug: "shopify-plus-development",
  label: "SHOPIFY PLUS DEVELOPMENT",
  breadcrumb: "Shopify Plus",
  hero: {
    headline: "Shopify Plus Development for High-Volume Commerce.",
    italic: "Enterprise scale. Shopify simplicity.",
    description:
      "Shopify Plus implementation, custom checkout development, B2B configuration, and automation for brands scaling past $5M revenue. We unlock every Plus-exclusive capability — Checkout Extensibility, Shopify Functions, B2B with Markets Pro, and Launchpad — and build the custom infrastructure that high-volume brands need.",
    cta: "Get a Free Plus Consultation",
    ctaHref: "/contact",
    badges: ["Shopify Plus Partner", "Checkout Expert", "B2B Commerce", "High-Volume"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "99.99%", label: "Uptime SLA" },
    { value: "99.99%", label: "Shopify Plus uptime SLA" },
    { value: "10k+", label: "Orders/day capacity" },
    { value: "Zero", label: "Downtime during peak sales" },
  ],
  intro: {
    eyebrow: "Why Shopify Plus for enterprise commerce",
    headline: "Shopify Plus is not just Shopify with a higher price tag — it's a fundamentally different platform for high-volume brands.",
    body: "Shopify Plus unlocks capabilities that standard Shopify doesn't provide: custom checkout via Checkout Extensibility, B2B with Markets Pro, Shopify Functions for programmatic logic, Launchpad for automated flash sale management, and unlimited staff accounts. For brands processing thousands of orders per day, these aren't nice-to-haves — they're the difference between a store that scales and one that breaks under load.",
    secondBody: "Most Shopify Plus implementations underutilise the platform. We see brands paying for Plus but using none of the exclusive features — no custom checkout, no Shopify Functions, no B2B configuration. The result is a $2,300/month platform subscription that delivers $29/month value. We implement the full Plus feature set and build the custom infrastructure that makes the upgrade genuinely worth it.",
    bullets: [
      "Custom checkout via Checkout Extensibility — upsells, custom fields, loyalty points",
      "B2B with Markets Pro: wholesale pricing, net terms, and purchase orders",
      "Shopify Functions for programmatic discount and shipping logic",
      "Launchpad for automated flash sale and product launch management",
      "Unlimited storefronts via Shopify Organisations for multi-brand management",
    ],
  },
  proofSection: {
    eyebrow: "The Shopify Plus advantage",
    headline: "Checkout Extensibility alone can increase conversion rate by 2-4% for high-volume brands. That's worth more than the Plus subscription cost in week one.",
    body: "Custom checkout is the most under-used Shopify Plus feature and the highest-impact. Standard Shopify checkout is identical for every store. Plus checkout can include order upsells, loyalty point redemption, custom delivery instructions, gift messaging, custom field collection, and custom payment logic — all built with Checkout Extensibility and Shopify UI Extensions.",
    secondBody: "We've implemented Checkout Extensibility for brands processing 5,000+ orders per day and measured direct AOV improvements of 12-18% from checkout upsells alone. Add loyalty point integration, reduced checkout abandonment from custom trust signals, and B2B net-terms billing — and the Plus subscription cost is recovered in the first month of operation.",
    bullets: [
      "Checkout Extensibility: custom pre-purchase upsells, post-purchase offers, loyalty redemption, and custom field collection — all native to Shopify checkout.",
      "Shopify Functions allow programmatic discount logic, custom shipping rates, and order routing rules that would otherwise require a third-party app.",
      "B2B with Markets Pro provides wholesale storefronts with company-specific pricing, purchase order workflows, and net payment terms — without a separate B2B platform.",
      "Launchpad automates flash sales, limited drops, and product launches — scheduled theme changes, price adjustments, and inventory reveals — reducing operational overhead.",
      "Multi-storefront management through Shopify Organisations gives multi-brand and multi-region operators a single admin for every store, with shared product catalogues where needed.",
      "We implement and document every feature we build — your team understands what was built and why, and can operate it without a developer on retainer.",
    ],
  },
  subServices: [
    {
      tab: "Checkout Extensibility",
      headline: "Custom checkout experiences that increase conversion and AOV.",
      description: "Checkout Extensibility implementation using Shopify UI Extensions — custom checkout blocks for order upsells, loyalty point redemption, gift messaging, custom field collection, and trust signals. All compliant with Shopify's checkout architecture and upgrade-safe.",
      bullets: ["Pre-purchase upsell blocks", "Loyalty point redemption", "Custom field collection", "Post-purchase offer pages"],
      image: "/case-study-ecommerce.png",
      href: "/shopify-plus-development",
    },
    {
      tab: "B2B Commerce",
      headline: "Wholesale and B2B storefronts built on Shopify Plus.",
      description: "B2B with Markets Pro configuration — company accounts, customer-specific pricing, purchase order workflows, net payment terms, and custom B2B checkout flows. Full B2B commerce on the Shopify Plus platform without a separate system.",
      bullets: ["Company account management", "Wholesale price lists", "Purchase order + net terms", "B2B-specific checkout flow"],
      image: "/case-study-limo.png",
      href: "/shopify-plus-development",
    },
    {
      tab: "Shopify Functions",
      headline: "Programmatic logic for discounts, shipping, and order routing.",
      description: "Custom Shopify Functions for business logic that apps can't deliver: programmatic discount rules, custom shipping rate calculation, order routing logic, and payment customisation. Runs natively in Shopify's infrastructure — no third-party app overhead.",
      bullets: ["Custom discount logic", "Shipping rate calculation", "Order routing rules", "Payment customisation"],
      image: "/work-1.png",
      href: "/shopify-plus-development",
    },
    {
      tab: "Multi-Store Management",
      headline: "Manage multiple brands and regions from a single Plus organisation.",
      description: "Shopify Organisations setup for multi-brand and multi-region operators. Shared product catalogues, centralised user management, and unified reporting across every store in your portfolio. Single sign-on for your team across all storefronts.",
      bullets: ["Shopify Organisations setup", "Shared product catalogues", "Cross-store user management", "Unified analytics reporting"],
      image: "/industry-ecommerce.png",
      href: "/shopify-plus-development",
    },
    {
      tab: "Launch Automation",
      headline: "Automate product drops, flash sales, and seasonal campaigns.",
      description: "Launchpad configuration for automated product launches, flash sales, and seasonal promotions. Scheduled theme changes, price adjustments, inventory reveals, and discount activation — all configured in advance and executed automatically at the right moment.",
      bullets: ["Flash sale automation", "Scheduled product drops", "Automatic theme switching", "Inventory reveal scheduling"],
      image: "/hero-showcase.png",
      href: "/shopify-plus-development",
    },
  ],
  features: [
    { icon: <CreditCard className="w-5 h-5 text-primary" />, title: "Checkout Extensibility", body: "Custom checkout blocks for upsells, loyalty redemption, gift messaging, and trust signals — upgrade-safe and conversion-optimised." },
    { icon: <Code2 className="w-5 h-5 text-primary" />, title: "Shopify Functions", body: "Programmatic discount rules, custom shipping logic, and order routing — running natively in Shopify's infrastructure." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "B2B with Markets Pro", body: "Complete B2B commerce: company accounts, wholesale pricing, purchase orders, and net payment terms." },
    { icon: <Layers className="w-5 h-5 text-primary" />, title: "Multi-Store Organisations", body: "Manage multiple brands and regions from a single Shopify Plus organisation with shared catalogues and unified reporting." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Launchpad Automation", body: "Automated flash sales, product drops, and seasonal campaigns — scheduled and executed without manual intervention." },
    { icon: <TrendingUp className="w-5 h-5 text-primary" />, title: "High-Volume Scaling", body: "Infrastructure and architecture configured for 10,000+ orders per day with zero downtime during peak events." },
    { icon: <RefreshCw className="w-5 h-5 text-primary" />, title: "Shopify Flow Automation", body: "Custom Shopify Flow workflows for order management, fraud prevention, inventory alerts, and customer segmentation." },
    { icon: <Settings className="w-5 h-5 text-primary" />, title: "Custom Theme Development", body: "Plus-optimised custom Liquid themes with section groups, dynamic sources, and metafield-driven product content." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "Analytics & Reporting", body: "Shopify Plus analytics, GA4, Triple Whale, and custom Looker Studio dashboards for full GMV and margin visibility." },
  ],
  techStack: [
    { platform: "Shopify Plus / Checkout Extensibility", stat: "Platform", description: "Full Shopify Plus feature set including Checkout Extensibility, Shopify Functions, B2B with Markets Pro, Launchpad, and Organisations. We implement all of them — not just the easy ones." },
    { platform: "Shopify UI Extensions", stat: "Checkout UI", description: "React-based UI Extensions for custom checkout blocks. Upgrade-safe, Shopify-hosted, and compliant with checkout architecture requirements." },
    { platform: "Shopify Functions (Wasm)", stat: "Logic layer", description: "Custom Shopify Functions compiled to WebAssembly for discount logic, shipping rates, payment customisation, and order routing." },
    { platform: "Shopify Hydrogen", stat: "Headless", description: "For brands needing headless storefronts, Hydrogen provides a React framework with full Shopify Plus capabilities and Oxygen hosting." },
    { platform: "Klaviyo / Attentive", stat: "Retention", description: "Advanced lifecycle marketing for Plus brands — segmented email and SMS automation, predictive analytics, and cross-sell/win-back sequences." },
    { platform: "Triple Whale / Northbeam", stat: "Attribution", description: "Multi-touch attribution for high-volume brands where native platform attribution significantly understates ROAS. Essential for accurate budget allocation at scale." },
  ],
  caseStudies: [
    { image: "", client: "Coastal Collective", industry: "eCommerce", blurb: "Shopify Plus migration and Checkout Extensibility implementation. Custom upsell blocks added $14 AOV in the first 30 days post-launch. Checkout conversion rate improved 38%.", metrics: [{ value: "+$14", label: "AOV from checkout upsells" }, { value: "+38%", label: "Checkout conversion" }] },
    { image: "/case-study-limo.png", client: "BuildCo Supply", industry: "B2B Commerce", blurb: "B2B with Markets Pro implementation for a wholesale building supply brand. Company accounts, negotiated pricing, and net-30 terms — replacing a separate B2B system.", metrics: [{ value: "Zero", label: "Separate B2B systems" }, { value: "+60%", label: "Wholesale order volume" }] },
    { image: "/work-1.png", client: "Storm Outerwear", industry: "Fashion", blurb: "Launchpad automation for limited drops and seasonal launches. Launch day operational overhead reduced from 8 hours to 15 minutes. Zero flash sale failures in 24 launches.", metrics: [{ value: "15 min", label: "Launch setup (was 8h)" }, { value: "Zero", label: "Launch failures" }] },
  ],
  process: [
    { label: "Audit", headline: "Audit your current Plus subscription utilisation.", description: "We review which Plus features you're currently using, which you're not, and quantify the revenue impact of the gap. Most Plus brands discover they're underutilising 60%+ of their subscription's value." },
    { label: "Design", headline: "Design the checkout and B2B experience before building.", description: "Complete Figma design for checkout extensions, B2B storefronts, and any custom theme work — reviewed and approved before development begins." },
    { label: "Develop", headline: "Build checkout extensions, Functions, and custom theme.", description: "UI Extension development, Shopify Functions compilation, and custom theme development in parallel — with staged deployment and milestone reviews throughout." },
    { label: "Configure", headline: "Configure B2B, Organisations, Launchpad, and Flow.", description: "Full configuration of all Plus-exclusive modules — company accounts, price lists, automation workflows, and multi-store setup. Everything documented for your team to manage independently." },
    { label: "Test", headline: "Load testing and conversion benchmarking before launch.", description: "Load testing to validate performance under your peak order volume. Conversion benchmarking against pre-launch baselines to measure immediate impact of checkout and UX improvements." },
    { label: "Optimise", headline: "Ongoing checkout optimisation and A/B testing.", description: "Checkout upsells, AOV optimisation, and B2B conversion testing running from launch day. Monthly reporting on the direct revenue contribution of every Plus feature we've implemented." },
  ],
  faqs: [
    { question: "When should a brand upgrade to Shopify Plus?", answer: "The standard upgrade triggers are $1M+ annual revenue or 10+ staff needing store access. The real trigger is when Plus features — Checkout Extensibility, B2B, Shopify Functions, or Launchpad — would materially impact your revenue. We'll model the ROI for your specific situation during our consultation." },
    { question: "What is Checkout Extensibility and why does it matter?", answer: "Checkout Extensibility is a Plus-exclusive API that lets you add custom UI blocks to the Shopify checkout — upsells, loyalty point redemption, gift messaging, custom fields, and trust signals. Unlike the old Script Editor approach, Checkout Extensibility is upgrade-safe and compliant with Shopify's checkout architecture. For high-volume brands, even a 1% conversion improvement from better checkout trust signals pays for years of Plus subscriptions." },
    { question: "Can you migrate us from standard Shopify to Plus without downtime?", answer: "Yes. Shopify Plus upgrades from standard Shopify are handled at the account level — your store remains live throughout. The migration work involves implementing Plus-exclusive features after the plan upgrade, not a store rebuild. We handle the full migration including checkout extensions, B2B configuration, and any custom theme updates." },
    { question: "Do you handle the ongoing Plus subscription management?", answer: "We manage the technical implementation and optimisation of Plus features. For Plus subscription management (billing, plan features), that's handled directly through Shopify. We're your implementation and optimisation partner, not a reseller." },
    { question: "How long does a Plus implementation take?", answer: "A standard Plus implementation — custom checkout extensions, theme updates, and Launchpad configuration — takes 6-10 weeks. B2B with Markets Pro adds 4-6 weeks. Multi-store Organisations setup adds 2-4 weeks depending on the number of stores and catalogue complexity." },
  ],
  hubInsights: [
    { image: "/hero-showcase.png", category: "Shopify Plus", readTime: "8 min read", title: "The Complete Guide to Shopify Plus Checkout Extensibility in 2026", excerpt: "Checkout Extensibility is the most powerful — and most underused — feature of Shopify Plus. Custom upsell blocks, loyalty redemption, gift messaging, and custom validation logic are all available natively in checkout now. We cover every extension point, implementation approach, and conversion impact we've measured.", author: "James Okafor", authorRole: "Shopify Plus Lead", href: "/blog/shopify-plus-checkout-extensibility" },
    { image: "/case-study-ecommerce.png", category: "B2B Commerce", readTime: "6 min read", title: "Shopify Plus B2B vs. a Separate B2B Platform: The True Cost Comparison", excerpt: "Many B2C brands running B2B operations maintain a separate B2B system — a Magento installation, an ERP storefront, or a custom-built portal. Shopify Plus B2B with Markets Pro has matured to the point where consolidation is possible for most mid-market B2B operators. Here is the honest feature comparison.", author: "Marcus Chen", authorRole: "Commerce Architect", href: "/blog/shopify-plus-b2b-comparison" },
    { image: "/case-study-limo.png", category: "Shopify Functions", readTime: "5 min read", title: "What Shopify Functions Can Do That No App Can", excerpt: "Shopify Functions run in Shopify's infrastructure — not a third-party server — which means they're faster, more reliable, and more capable than anything achievable with a standard app. We cover the four function types (discounts, shipping, payment, order routing) and walk through implementation examples for each.", author: "Priya Anand", authorRole: "Engineering Lead", href: "/blog/shopify-functions-guide" },
  ],
};

export default function ShopifyPlusHub() {
  return <ServiceHubPage data={shopifyPlusData} />;
}
