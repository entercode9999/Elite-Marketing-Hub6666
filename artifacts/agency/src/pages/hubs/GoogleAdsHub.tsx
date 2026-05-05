import { Target, BarChart2, DollarSign, Zap, RefreshCw, Globe, FileText, Search, TrendingUp } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
        ))}
        <div className="flex-1 bg-white rounded text-xs text-gray-400 px-3 py-1 ml-2">Google Ads — Campaign Overview</div>
      </div>
      <div className="bg-white p-4">
        <div className="border border-gray-100 rounded-xl p-3 mb-3">
          <div className="flex items-center justify-between mb-2">
            <p className="text-[9px] text-gray-400 font-bold uppercase tracking-widest">This Month vs. Last Month</p>
            <span className="text-[8px] bg-green-100 text-green-700 font-bold px-1.5 py-0.5 rounded-full">▲ Improving</span>
          </div>
          {[
            { label: "Conversions", before: "14", after: "31", colour: "text-green-600" },
            { label: "Cost per Lead", before: "$148", after: "$67", colour: "text-green-600" },
            { label: "ROAS", before: "1.8×", after: "4.2×", colour: "text-green-600" },
          ].map((r) => (
            <div key={r.label} className="flex items-center justify-between py-1.5 border-b border-gray-50 last:border-0">
              <span className="text-[10px] text-gray-500 font-medium">{r.label}</span>
              <div className="flex items-center gap-2">
                <span className="text-[9px] text-gray-300 line-through">{r.before}</span>
                <span className={`text-[10px] font-black ${r.colour}`}>{r.after}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[{ v: "-42%", l: "CPA reduction" }, { v: "4.2×", l: "ROAS" }, { v: "30 days", l: "To results" }].map((s) => (
            <div key={s.l} className="bg-gray-50 rounded-lg p-2 text-center border border-gray-100">
              <p className="text-sm font-black text-primary">{s.v}</p>
              <p className="text-[8px] text-gray-400 mt-0.5 leading-tight">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100">
      <p className="text-[10px] text-gray-400">Avg. CPA reduction</p>
      <p className="text-2xl font-black text-primary">-42%</p>
    </div>
    <div className="absolute -top-4 -left-4 bg-[#0a0c12] rounded-xl px-3 py-2.5 shadow-xl border border-white/10">
      <p className="text-[9px] text-white/30">Certified</p>
      <p className="text-xs font-black text-white">Google Partner</p>
    </div>
  </div>
);

const googleAdsHubData: HubData = {
  slug: "google-ads-management",
  label: "GOOGLE ADS",
  breadcrumb: "Google Ads Management",
  hero: {
    headline: "Profitable Google Ads. Measurable ROI.",
    italic: "Every dollar tracked. Every lead attributed.",
    description:
      "The average self-managed Google Ads account wastes 50–60% of its budget on irrelevant clicks, wrong match types, and automated bidding with insufficient data. Outlier is a certified Google Partner agency — we build accounts that convert, manage them weekly, and report on what actually matters: leads, revenue, and ROAS.",
    cta: "Get a Free Google Ads Audit",
    ctaHref: "/contact",
    badges: ["Google Partner Certified", "Full Conversion Tracking", "Weekly Active Management", "200+ Campaigns Managed"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "4.2×", label: "Average ROAS across managed accounts" },
    { value: "-42%", label: "Average CPA reduction vs. self-managed" },
    { value: "30 days", label: "To first meaningful optimisation cycle" },
    { value: "Google", label: "Partner certified specialists" },
  ],
  intro: {
    eyebrow: "Why professional Google Ads management pays for itself",
    headline: "Most Google Ads accounts waste more than they cost to fix.",
    body: "Google Ads is the fastest path to qualified inbound leads — but only when managed correctly. Done poorly, it's an extremely efficient way to fund your competitors' growth. The average self-managed account sends 50–60% of its budget to irrelevant searches, overbroad match types, and landing pages that don't convert. Professional management recovers that waste and redirects it toward the clicks that actually become customers.",
    secondBody: "As a certified Google Partner agency, Outlier manages campaigns across Search, Local Service Ads, Performance Max, Shopping, and YouTube. We specialise in the verticals where the stakes are highest: legal, healthcare, home services, professional services, and ecommerce. Every campaign is built to your specific business economics — not to a generic ROAS template.",
    bullets: [
      "Full conversion tracking: calls, form submissions, purchases, and offline CRM imports",
      "Intent-layered campaign architecture with comprehensive negative keyword coverage",
      "Landing page audit and optimisation aligned to campaign messaging",
      "Weekly bid management, search term review, and ad copy testing",
      "Local Service Ads setup and management for qualifying businesses",
      "Monthly ROAS and CPA reporting tied to real business outcomes",
    ],
  },
  proofSection: {
    eyebrow: "The professional management advantage",
    headline: "A 42% CPA reduction isn't magic — it's the systematic elimination of waste.",
    body: "When we audit a self-managed or underperforming Google Ads account, we find the same problems repeatedly: broad match keywords without negative coverage, Smart Bidding launched with fewer than 30 conversions per month, ad groups too large to test copy, no call tracking, and landing pages sending high-intent traffic to a generic homepage. Each of these issues is individually fixable. Fixed together, the impact is compounding.",
    secondBody: "The 42% average CPA reduction we achieve comes from: eliminating irrelevant search terms (typically 25–35% of spend on day one), restructuring campaigns around intent (so bidding algorithms have meaningful signals), fixing landing page alignment (the single biggest conversion rate killer), and setting up attribution correctly (so we actually know what's converting and can scale it).",
    bullets: [
      "Negative keyword lists built from actual search term data — updated weekly, not quarterly.",
      "Campaign architecture designed around intent layers: awareness, consideration, and ready-to-buy.",
      "Smart Bidding is enabled only after 30+ conversions have been recorded — not at launch.",
      "Landing pages are audited before any spend goes live — we don't send traffic to pages that can't convert.",
      "Every conversion action is tracked: phone calls, form submissions, chats, and offline CRM data.",
      "Budget allocation reviewed monthly — spend follows performance, not gut feel.",
    ],
  },
  subServices: [
    {
      tab: "Search Campaigns",
      headline: "High-intent search campaigns built to capture buyers, not browsers.",
      description: "Search campaigns targeting the exact queries your customers use when they're ready to buy. Tightly structured ad groups, intent-matched landing pages, and comprehensive negative keyword coverage that prevents budget waste. We don't run broad match without constraints — every campaign is controlled, tracked, and optimised for your specific cost-per-acquisition target.",
      bullets: ["Keyword research and intent segmentation", "Ad copy testing (3+ variants per ad group)", "Negative keyword architecture", "Bid strategy selection based on conversion volume"],
      image: "/case-study-saas.png",
      href: "/google-search-campaigns",
    },
    {
      tab: "Local Service Ads",
      headline: "Google Guaranteed leads — pay per verified call, not per click.",
      description: "Local Service Ads are available for qualified local businesses: contractors, home services, legal, healthcare, and others. LSAs appear above regular Google Ads and charge per verified lead — not per click — making them extremely cost-effective for eligible businesses. We handle setup, verification, budget management, and ongoing optimisation.",
      bullets: ["LSA verification and setup", "Lead dispute management", "Budget and bid optimisation", "Integration with broader Google Ads strategy"],
      image: "/case-study-homeservices.png",
      href: "/local-service-ads",
    },
    {
      tab: "Performance Max",
      headline: "AI-powered campaigns across Search, YouTube, Display, Maps, and Gmail.",
      description: "Performance Max campaigns use Google's AI to serve ads across every channel simultaneously — optimising toward your conversion targets. PMax works best for businesses with strong creative assets and sufficient conversion data. We structure PMax campaigns correctly, set appropriate asset groups, and monitor for search term quality that many PMax accounts ignore.",
      bullets: ["Asset group architecture and creative production", "Audience signal configuration", "Search theme optimisation", "Performance monitoring and negative keyword management"],
      image: "/hero-showcase.png",
      href: "/performance-max",
    },
    {
      tab: "Retargeting",
      headline: "Re-engage website visitors who didn't convert the first time.",
      description: "Retargeting campaigns serve ads to people who have already visited your website — at a fraction of the CPC of new audience campaigns. We build audience lists segmented by behaviour (pages viewed, time on site, specific service pages), create retargeting-specific creative, and set bid multipliers that reflect the higher conversion intent of warm audiences.",
      bullets: ["Audience list creation and segmentation", "Retargeting-specific ad creative", "Bid strategy for warm audiences", "Display and YouTube retargeting"],
      image: "/work-2.png",
      href: "/display-retargeting",
    },
    {
      tab: "Conversion Tracking",
      headline: "If you can't measure it, you can't optimise it.",
      description: "Comprehensive conversion tracking is the foundation of every profitable Google Ads account. We set up phone call tracking with recording, form submission events, live chat attribution, online purchase tracking, and offline conversion imports from your CRM. This data is the engine that drives Smart Bidding — without it, you're paying Google to optimise toward nothing meaningful.",
      bullets: ["Call tracking with recording capability", "Form and chat conversion events", "Google Tag Manager configuration", "Offline CRM conversion imports"],
      image: "/work-1.png",
      href: "/google-ads-management",
    },
  ],
  features: [
    { icon: <Target className="w-5 h-5 text-primary" />, title: "Campaign Architecture", body: "Intent-layered campaign structures built around your specific customer journeys — not generic templates. Every campaign has a clear objective, a defined audience, and a conversion target." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "Conversion Tracking", body: "Full attribution setup before any spend goes live: call tracking, form events, chat, purchases, and CRM offline conversions. You always know exactly what your campaigns are producing." },
    { icon: <DollarSign className="w-5 h-5 text-primary" />, title: "Negative Keywords", body: "Comprehensive negative keyword lists built from real search term data. Updated weekly. Typically eliminates 25–35% of wasted spend in the first 60 days of management." },
    { icon: <FileText className="w-5 h-5 text-primary" />, title: "Landing Page Optimisation", body: "Ad traffic is only valuable if the landing page converts it. We audit, redesign, or create landing pages specifically built to convert the intent of each campaign's target query." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Local Service Ads", body: "Google Guaranteed setup and management for qualifying local businesses. Pay per verified lead, not per click — the most cost-efficient paid channel for eligible service businesses." },
    { icon: <Search className="w-5 h-5 text-primary" />, title: "Search Term Reviews", body: "Weekly search term analysis identifies new negative keywords, new positive keyword opportunities, and ad copy improvements. Active management, not set-and-forget." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "Performance Max", body: "AI-powered campaigns across Search, YouTube, Display, Maps, and Gmail — structured correctly with proper asset groups, audience signals, and negative keyword coverage." },
    { icon: <RefreshCw className="w-5 h-5 text-primary" />, title: "Weekly Optimisation", body: "Bids, budgets, ad copy, and audiences reviewed and adjusted every week. Performance is a function of iteration frequency — we act on data before it becomes a problem." },
    { icon: <TrendingUp className="w-5 h-5 text-primary" />, title: "ROAS & CPA Reporting", body: "Monthly reports showing ROAS, CPA, conversion volume, and spend efficiency — with clear explanations of what changed, why, and what we're doing next." },
  ],
  techStack: [
    { platform: "Google Ads", stat: "Primary platform", description: "Expert management across all Google Ads campaign types: Search, Display, Shopping, Performance Max, Local Service Ads, YouTube, and Demand Gen." },
    { platform: "Google Analytics 4", stat: "Attribution", description: "GA4 connected to every account for cross-channel attribution, audience creation, and goal tracking that goes beyond platform-reported conversions." },
    { platform: "Google Tag Manager", stat: "Tracking infrastructure", description: "GTM used for all conversion tracking implementation — call tracking events, form submissions, micro-conversions, and custom audience triggers." },
    { platform: "CallRail", stat: "Call attribution", description: "Dynamic number insertion for call tracking at the keyword and ad level. Call recordings available for quality assessment and landing page optimisation." },
    { platform: "Looker Studio", stat: "Client dashboards", description: "Custom reporting dashboards combining Google Ads, GA4, and CRM data. Every client has a live performance view they can access at any time." },
    { platform: "Optmyzr", stat: "Bid management", description: "Rules-based automation for bid adjustments, budget pacing, and Quality Score monitoring — applied on top of Google's native automation with human oversight." },
  ],
  caseStudies: [
    { image: "/industry-legal.png", client: "Axiom Law PC", industry: "Legal Services", blurb: "Personal injury firm with a bloated, underperforming Google Ads account. We rebuilt with intent-layered campaigns and dedicated practice area landing pages. CPL dropped 52% and qualified lead volume doubled within 60 days of taking over.", metrics: [{ value: "-52%", label: "Cost per lead" }, { value: "+2×", label: "Qualified leads" }] },
    { image: "/case-study-homeservices.png", client: "GTA Home Pros", industry: "Home Services", blurb: "HVAC and plumbing company spending $8k/month on self-managed ads with no conversion tracking. We set up full call and form tracking, restructured campaigns around service categories, and eliminated 38% of wasted spend in 30 days. ROAS improved from 1.4× to 4.8× in 3 months.", metrics: [{ value: "4.8×", label: "ROAS at month 3" }, { value: "-38%", label: "Wasted spend eliminated" }] },
    { image: "/industry-dental.png", client: "Apex Dental Group", industry: "Healthcare", blurb: "6-location dental group running one broad campaign across all locations. We built location-specific campaigns with treatment-level ad groups (implants, Invisalign, emergency) and dedicated landing pages. New patient CPL dropped 44%, implant enquiry volume tripled.", metrics: [{ value: "-44%", label: "Cost per new patient" }, { value: "+3×", label: "Implant enquiries" }] },
  ],
  process: [
    { label: "Audit", headline: "Full account audit — every issue documented before we touch anything.", description: "We audit your current account (or analyse competitor data for new accounts): campaign structure, keyword strategy, negative keyword coverage, match type distribution, bid strategies, conversion tracking, Quality Scores, and landing page alignment. The audit shows exactly where budget is being wasted and what the highest-impact fixes are." },
    { label: "Strategy", headline: "Campaign architecture designed around your conversion economics.", description: "Campaign structure designed around your customer journey: which keywords, which match types, which audience layers, which campaign types, which landing pages. Budget allocation modelled against your target CPA and realistic conversion rates. Sign-off before a dollar is spent." },
    { label: "Tracking", headline: "Full conversion tracking before any campaign launches.", description: "Every conversion action set up and verified before launch: call tracking (with recording), form submission events, chat events, purchase tracking, and CRM offline conversion imports where available. Clean data from day one — not retrofitted after campaigns have been running blind." },
    { label: "Launch", headline: "Controlled launch with close monitoring during the learning phase.", description: "Campaigns launched with conservative bids and controlled budgets during Google's 2–4 week learning phase. We monitor search terms daily and update negatives in real time. Ad copy variants launched simultaneously so data accumulates on multiple options from day one." },
    { label: "Optimise", headline: "Weekly optimisation cycles drive continuous CPA improvement.", description: "Every week: search term review and negative keyword additions, bid adjustments based on performance data, ad copy rotation analysis and new variant creation, audience and device modifier adjustments, and Quality Score monitoring. Performance improves continuously — not just at the monthly reporting date." },
    { label: "Scale", headline: "Scale what works. Eliminate what doesn't. Expand into new opportunity.", description: "With 90 days of clean data, we identify the highest-performing campaigns, audiences, and keywords — and scale budget allocation toward them. Underperforming campaigns are restructured or paused. New keyword clusters and campaign types tested based on what the data shows about your customer's search behaviour." },
  ],
  faqs: [
    { question: "How quickly can I expect results from Google Ads?", answer: "Properly set up Google Ads campaigns typically start delivering leads within the first 1–2 weeks. The first 30–60 days are a structured learning phase where we optimise based on real data — CPA and ROAS tend to improve significantly in months 2 and 3. Unlike SEO, Google Ads can produce same-week results for businesses that need immediate lead flow." },
    { question: "What is a realistic budget for Google Ads?", answer: "Budget depends on your industry's average CPCs, your target lead volume, and your target CPA. We build a specific budget recommendation with projected performance ranges after reviewing your business economics — we never quote ad spend before we understand your goals. In competitive categories like legal or healthcare, $3,000–$8,000/month in ad spend is typical. In less competitive niches, $1,000–$2,500 can produce strong results." },
    { question: "Why does my current Google Ads account perform so poorly?", answer: "The most common causes we diagnose: (1) Broad match keywords without adequate negative keyword coverage, sending budget to irrelevant searches; (2) Smart Bidding launched without sufficient conversion data — the algorithm has nothing to optimise toward; (3) Landing pages misaligned with ad messaging, producing poor Quality Scores and low conversion rates; (4) No conversion tracking, so the account is literally flying blind; (5) Campaigns structured too broadly, preventing meaningful ad copy testing." },
    { question: "What is your Google Partner certification?", answer: "Google Partner certification requires meeting Google's requirements for ad spend thresholds, campaign performance standards, and certification exam completions. It indicates that Outlier meets Google's standards for campaign performance and product knowledge. As a Partner, we have direct access to Google's support team, advance notification of product changes, and early access to beta features." },
    { question: "Should I run Google Ads and SEO simultaneously?", answer: "For most businesses, yes. Google Ads provides immediate lead flow while SEO builds in the background. As organic rankings improve over 12–18 months, you can reduce paid reliance on terms where you now rank organically — systematically lowering your blended cost of acquisition over time. We manage both channels for clients who want integrated growth, sharing data and strategy between them." },
    { question: "Do you manage Google Shopping campaigns for ecommerce?", answer: "Yes. Google Shopping is a significant part of our ecommerce Google Ads work: product feed optimisation, Shopping campaign structure (Standard Shopping vs. Performance Max), bidding strategy by product category and margin, and integration with your broader search and remarketing campaigns. We work with Shopify, WooCommerce, Magento, and custom ecommerce platforms." },
  ],
};

export default function GoogleAdsHub() {
  return <ServiceHubPage data={googleAdsHubData} />;
}
