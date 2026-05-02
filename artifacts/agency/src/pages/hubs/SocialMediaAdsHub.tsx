import { Share2, TrendingUp, Target, BarChart2, Zap, Globe, RefreshCw, Users, Video } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
        ))}
        <div className="flex-1 bg-white rounded text-xs text-gray-400 px-3 py-1 ml-2">ads.outlier.ca</div>
      </div>
      <div className="bg-[#0a0c12] p-4">
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[{ v: "4.2x", l: "ROAS", c: "#22c55e" }, { v: "-38%", l: "CPA", c: "#1a56ff" }, { v: "+315%", l: "Lead vol.", c: "#f59e0b" }].map((s) => (
            <div key={s.l} className="bg-white/5 rounded-lg p-2.5 text-center">
              <p className="font-black text-sm" style={{ color: s.c }}>{s.v}</p>
              <p className="text-[9px] text-white/30 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center gap-2 mb-2">
          {[
            { label: "Meta", color: "#1877f2" },
            { label: "TikTok", color: "#ff0050" },
            { label: "LinkedIn", color: "#0077b5" },
            { label: "X", color: "#000" },
          ].map((p) => (
            <span key={p.label} className="text-[9px] font-bold text-white px-2 py-0.5 rounded" style={{ background: p.color }}>{p.label}</span>
          ))}
        </div>
        <div className="h-16 flex items-end gap-1 bg-white/3 rounded-lg p-2">
          {[40, 55, 45, 70, 60, 80, 75, 90, 85, 100, 95, 110].map((h, i) => (
            <div key={i} className="flex-1 rounded-t" style={{ height: `${h * 0.8}%`, background: i >= 9 ? "#1a56ff" : "rgba(26,86,255,0.2)" }} />
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -top-3 -right-3 bg-[#1877f2] rounded-xl px-3 py-2 shadow-xl">
      <p className="text-white font-black text-xs">Meta Partner</p>
    </div>
    <div className="absolute -bottom-3 -left-3 bg-white rounded-xl px-3 py-2.5 shadow-xl border border-gray-100">
      <p className="text-[9px] text-gray-400">ROAS</p>
      <p className="text-xl font-black text-[#0e0e0e]">4.2x</p>
    </div>
  </div>
);

const socialAdsData: HubData = {
  slug: "social-media-advertising",
  label: "SOCIAL MEDIA ADVERTISING",
  breadcrumb: "Social Media Advertising",
  hero: {
    headline: "Social Media Advertising That Builds Audiences and Drives Revenue.",
    italic: "Not just impressions. Actual results.",
    description:
      "Paid social media advertising on Meta, TikTok, LinkedIn, and X — managed by senior strategists with a focus on measurable revenue outcomes, not vanity metrics. We build campaigns that reach the right audience, tell a compelling story, and convert at a cost your business model can sustain.",
    cta: "Get a Free Paid Social Audit",
    ctaHref: "/contact",
    badges: ["Meta Business Partner", "TikTok Ads Expert", "LinkedIn Partner", "Clutch 5★"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "4.2x", label: "Avg. client ROAS" },
    { value: "-38%", label: "Avg. CPA improvement" },
    { value: "+315%", label: "Avg. lead volume increase" },
    { value: "200+", label: "Paid social campaigns managed" },
  ],
  intro: {
    eyebrow: "Revenue-first paid social",
    headline: "Social media advertising works when it's built around your business model — not the platform's engagement metrics.",
    body: "Paid social that optimises for reach and engagement produces impressive-looking reports and disappointing revenue. Paid social that optimises for cost per lead, cost per acquisition, and return on ad spend produces profitable campaigns — but requires a fundamentally different campaign architecture, audience strategy, and creative approach. We build the second kind.",
    secondBody: "Post-iOS 14, paid social attribution is harder than it was. Brands that don't invest in proper measurement infrastructure — Meta Conversions API, UTM tracking, and a multi-touch attribution model — are making budget decisions based on platform-reported ROAS that significantly overstates actual return. We fix attribution before we optimise for anything else.",
    bullets: [
      "Campaign architecture built around your actual cost per acquisition targets",
      "Meta Conversions API implementation for accurate post-iOS 14 attribution",
      "Creative testing framework: systematic A/B testing of angles, formats, and hooks",
      "Audience strategy: cold prospecting + warm retargeting in the right ratio",
      "No percentage-of-spend fees — flat monthly management rate regardless of budget",
    ],
  },
  proofSection: {
    eyebrow: "The revenue-first paid social approach",
    headline: "The gap between a paid social campaign that 'performs' on paper and one that generates profitable revenue is almost always in the audience strategy and creative architecture.",
    body: "Most paid social accounts we inherit have the same structural problems: too many campaigns cannibalising each other, an audience targeting strategy based on interests rather than intent signals, creative that hasn't been properly tested, and attribution set up to show the best possible numbers rather than the accurate ones. The result is ad spend that looks efficient in the platform dashboard and inefficient in the P&L.",
    secondBody: "We restructure inherited accounts before running any spend — consolidating campaigns, fixing attribution, and establishing creative testing infrastructure. The restructuring alone consistently produces 25-40% efficiency improvement within the first 60 days, with no increase in budget. Then we scale what the restructured account reveals is actually working.",
    bullets: [
      "Meta Conversions API + server-side event matching recovers the 20-40% of conversion events that iOS 14 removed from browser-based tracking.",
      "Campaign architecture follows Meta's recommended structure: Advantage+ Shopping for eCommerce, Advantage+ Audience for lead gen — with proper exclusion logic between prospecting and retargeting.",
      "Creative testing follows a structured framework: we test one variable at a time, with minimum audience sizes that produce statistically significant results before declaring a winner.",
      "Audience strategy combines broad prospecting (Advantage+ or Lookalike), warm retargeting (video viewers, page engagers, site visitors), and CRM match retargeting for a full-funnel approach.",
      "We report on blended ROAS — total revenue divided by total ad spend — not platform-reported ROAS. You always know the true efficiency of your paid social investment.",
      "Creative briefs are produced with your in-house team or UGC creators, informed by our analysis of what's working in your category — so creative is grounded in data, not guesses.",
    ],
  },
  subServices: [
    {
      tab: "Meta Ads (Facebook + Instagram)",
      headline: "Facebook and Instagram advertising built for measurable revenue.",
      description: "Meta Ads management with proper campaign structure, Conversions API implementation, and systematic creative testing. Advantage+ Shopping for eCommerce, lead gen campaigns for service businesses — all built around your actual CPA and ROAS targets.",
      bullets: ["Conversions API + pixel setup", "Advantage+ campaign structures", "Creative testing framework", "Full-funnel audience strategy"],
      image: "/case-study-home.png",
      href: "/social-media-advertising",
    },
    {
      tab: "TikTok Ads",
      headline: "TikTok advertising for brands ready to scale through video.",
      description: "TikTok Ads for growth-stage and scaling brands. In-Feed Ads, TopView, and Spark Ads managed with a creative-first approach — because TikTok is a creative platform and creative quality is the primary performance variable. We partner with UGC creators or work with your in-house team.",
      bullets: ["In-Feed and Spark Ads", "UGC creator briefing and management", "TikTok Pixel + Events API", "Branded hashtag challenge campaigns"],
      image: "/case-study-saas.png",
      href: "/social-media-advertising",
    },
    {
      tab: "LinkedIn Ads",
      headline: "B2B pipeline generation on the highest-intent professional network.",
      description: "LinkedIn advertising for B2B brands running demand generation and lead nurturing campaigns. Sponsored Content, Message Ads, and Dynamic Ads — targeting by job title, company size, industry, and seniority. Built for pipeline, not impressions.",
      bullets: ["Sponsored Content and InMail", "Account-based marketing (ABM)", "Lead Gen Form campaigns", "Company and job title targeting"],
      image: "/case-study-saas.png",
      href: "/social-media-advertising",
    },
    {
      tab: "Paid Social Strategy",
      headline: "Multi-platform social ad strategy under one brief.",
      description: "Full paid social strategy across Meta, TikTok, LinkedIn, and X — with budget allocation, creative direction, audience strategy, and attribution model designed as a unified system. Each platform plays a specific role in the full funnel; we design that system before spending a dollar.",
      bullets: ["Cross-platform budget allocation", "Funnel role by platform", "Unified creative brief", "Attribution model design"],
      image: "/case-study-saas.png",
      href: "/social-media-advertising",
    },
    {
      tab: "Creative Production",
      headline: "Ad creative that stops the scroll and converts the click.",
      description: "Paid social creative strategy and production guidance — UGC briefs, static ad templates, short-form video scripts, and carousel formats. We develop the creative strategy and testing framework; production is done by your team, our network of UGC creators, or a production partner.",
      bullets: ["Creative strategy and testing plan", "UGC brief writing and management", "Video script production", "Static and carousel templates"],
      image: "/case-study-saas.png",
      href: "/social-media-advertising",
    },
  ],
  features: [
    { icon: <Share2 className="w-5 h-5 text-primary" />, title: "Meta Ads (Facebook + Instagram)", body: "Advantage+ campaign structures, Conversions API, and systematic creative testing for measurable revenue outcomes." },
    { icon: <Video className="w-5 h-5 text-primary" />, title: "TikTok Advertising", body: "Creative-first TikTok campaigns with UGC creator management and TikTok Events API for accurate attribution." },
    { icon: <Users className="w-5 h-5 text-primary" />, title: "LinkedIn Ads", body: "B2B pipeline generation with job title, company, and seniority targeting. Sponsored Content, InMail, and Lead Gen Forms." },
    { icon: <Target className="w-5 h-5 text-primary" />, title: "Audience Strategy", body: "Full-funnel audience architecture: cold prospecting, warm retargeting, CRM match, and lookalike audiences in the right ratio." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Creative Testing", body: "Structured A/B testing framework for hooks, formats, and offers — one variable at a time, with statistically significant sample sizes." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "Conversions API", body: "Server-side conversion tracking that recovers the 20-40% of events lost to iOS 14. Accurate attribution before we optimise anything." },
    { icon: <RefreshCw className="w-5 h-5 text-primary" />, title: "UGC Management", body: "UGC creator brief writing, casting, and content management for the authentic social proof formats that perform best in-feed." },
    { icon: <TrendingUp className="w-5 h-5 text-primary" />, title: "ROAS Optimisation", body: "We optimise for blended ROAS — total revenue divided by total ad spend — not platform-reported metrics that overstate return." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "Multi-Touch Attribution", body: "Triple Whale or Northbeam integration for multi-touch attribution across paid social and other channels. Accurate budget decisions." },
  ],
  techStack: [
    { platform: "Meta Business Suite", stat: "Primary platform", description: "Facebook and Instagram ads managed with Advantage+ campaign structures, Conversions API server-side tracking, and custom audience segmentation. We restructure inherited accounts before running any spend." },
    { platform: "TikTok Ads Manager", stat: "Video advertising", description: "TikTok In-Feed, TopView, and Spark Ads with TikTok Pixel + Events API implementation. Creative-first approach with UGC creator management." },
    { platform: "LinkedIn Campaign Manager", stat: "B2B pipeline", description: "LinkedIn Sponsored Content, Message Ads, and Lead Gen Forms with precise targeting by job title, seniority, company size, and industry." },
    { platform: "Triple Whale / Northbeam", stat: "Attribution", description: "Multi-touch attribution beyond native platform reporting. Gives an accurate picture of ROAS across paid social channels and corrects for iOS 14 signal loss." },
    { platform: "Klaviyo / HubSpot", stat: "Conversion layer", description: "Paid social leads and purchasers flow directly into your CRM or email platform — with proper lifecycle sequences activated automatically by acquisition source." },
    { platform: "Looker Studio", stat: "Reporting", description: "Custom Looker Studio dashboards pulling from Meta, TikTok, LinkedIn, and GA4. One view of your full paid social programme — updated daily." },
  ],
  caseStudies: [
    { image: "/case-study-saas.png", client: "Nova FinTech", industry: "SaaS", blurb: "LinkedIn Ads + Meta retargeting for a B2B financial platform. Account restructure eliminated 38% budget waste. Lead volume up 315% in 90 days.", metrics: [{ value: "+315%", label: "Lead volume" }, { value: "-38%", label: "CPA" }] },
    { image: "/case-study-home.png", client: "Hudson Outdoor", industry: "Home Services", blurb: "Full-funnel Meta Ads programme: Advantage+ prospecting + warm retargeting + CRM match. $2.4M attributed revenue from paid social in year one.", metrics: [{ value: "$2.4M", label: "Attributed revenue" }, { value: "4.2x", label: "Blended ROAS" }] },
    { image: "/industry-ecommerce.png", client: "Coastal Collective", industry: "eCommerce", blurb: "Meta + TikTok creative testing programme. Identified 3 winning UGC formats that reduced CPA by 44% across both platforms simultaneously.", metrics: [{ value: "-44%", label: "CPA" }, { value: "7.2x", label: "Q1 ROAS" }] },
  ],
  process: [
    { label: "Audit", headline: "Audit your existing paid social account and attribution setup.", description: "Campaign structure review, audience overlap analysis, creative performance analysis, and attribution accuracy assessment. We identify waste and opportunity before spending a dollar on new campaigns." },
    { label: "Strategy", headline: "Build the full-funnel paid social strategy.", description: "Platform selection, budget allocation by funnel stage, audience architecture, creative brief framework, and attribution model design. Signed off before any campaign is built." },
    { label: "Setup", headline: "Conversions API, pixel, and campaign structure.", description: "Server-side conversion tracking implementation, campaign architecture build, audience creation, and creative deployment. Everything set up correctly before launch — not patched after." },
    { label: "Test", headline: "Systematic creative and audience testing from day one.", description: "Structured A/B testing framework live from launch week. One variable per test, minimum sample sizes enforced, clear decision criteria. Creative learnings feed the next brief." },
    { label: "Optimise", headline: "Weekly optimisation cycle: audiences, bids, and creative.", description: "Weekly audience performance review, bid strategy adjustment, creative fatigue monitoring, and new creative deployment. Every change documented and attributed to a hypothesis." },
    { label: "Scale", headline: "Scale what the data proves is working.", description: "Budget scaling on proven campaigns, expansion to new platforms as performance data warrants, and seasonal campaign planning. Scale follows evidence, never intuition." },
  ],
  faqs: [
    { question: "How do you handle attribution after iOS 14?", answer: "We implement Meta's Conversions API (CAPI) on every account — server-side event matching that recovers the 20-40% of conversion events lost to browser-based tracking. We also use Triple Whale or Northbeam for multi-touch attribution that gives a cross-channel view of true ROAS. Platform-reported ROAS consistently overstates return; we report on blended ROAS from your actual revenue data." },
    { question: "What is the minimum ad budget you work with?", answer: "We require a minimum monthly media budget of $3,000 for Meta Ads (Facebook/Instagram) to generate enough signal for meaningful optimisation. LinkedIn requires $4,000/month minimum due to higher CPCs. TikTok can be effective from $2,000/month. Management fees are flat-rate, never a percentage of spend." },
    { question: "Do you produce the ad creative?", answer: "We develop the creative strategy and testing framework, write creative briefs for UGC creators or your in-house team, and manage UGC creator relationships. For brands without production capability, we connect you with our network of UGC creators. Video production and high-end photography are referred to production partners we trust." },
    { question: "Can you manage multiple platforms simultaneously?", answer: "Yes. Most of our social advertising clients run Meta as the primary platform with TikTok and/or LinkedIn as secondary channels. We manage all platforms under one unified strategy with a single monthly report showing cross-platform performance. Budget is allocated dynamically toward what the data shows is most efficient." },
    { question: "How long before we see results?", answer: "Meta Ads typically show meaningful optimisation within 30-45 days as the algorithm exits the learning phase. TikTok campaigns often ramp faster — 2-3 weeks for initial signal. LinkedIn is slower — 60-90 days to build a meaningful data set for B2B accounts with longer sales cycles. We set realistic expectations for your specific market during our audit." },
  ],
  hubInsights: [
    { image: "/case-study-home.png", category: "Meta Ads", readTime: "7 min read", title: "The Meta Ads Account Structure That Actually Works in 2026", excerpt: "Post-iOS 14 and post-Advantage+ rollout, the Meta Ads account structure that worked in 2020 no longer performs. We analysed 40 accounts we restructured in the past 12 months and found consistent patterns in what was wasting budget and what the winning structure looked like. Here is the framework.", author: "James Okafor", authorRole: "Paid Social Lead", href: "/blog/meta-ads-account-structure-2026" },
    { image: "/case-study-saas.png", category: "Attribution", readTime: "6 min read", title: "Why Your Meta ROAS is Lying to You (And How to Find the Real Number)", excerpt: "Platform-reported ROAS consistently overstates return — sometimes by 2-3x. The combination of view-through attribution, iOS 14 signal loss, and last-click attribution creates a flattering picture that doesn't match your bank account. Here is the attribution setup we use to find the accurate number.", author: "Marcus Chen", authorRole: "Analytics Lead", href: "/blog/meta-roas-accuracy" },
    { image: "/industry-ecommerce.png", category: "Creative Strategy", readTime: "5 min read", title: "The UGC Creative Formula That Reduces CPA by 40% Across Meta and TikTok", excerpt: "UGC outperforms polished brand creative on Meta and TikTok in almost every A/B test we've run. But not all UGC is equal — the hook, the problem framing, the social proof format, and the call to action all have measurable impacts on performance. Here is the creative brief framework we use for every UGC campaign.", author: "Priya Anand", authorRole: "Creative Strategist", href: "/blog/ugc-creative-formula" },
  ],
};

export default function SocialMediaAdsHub() {
  return <ServiceHubPage data={socialAdsData} />;
}
