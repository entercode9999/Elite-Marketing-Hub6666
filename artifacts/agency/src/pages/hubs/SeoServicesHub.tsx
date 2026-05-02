import { Search, TrendingUp, Globe, FileText, Link2, MapPin, BarChart2, Zap, RefreshCw } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
        ))}
        <div className="flex-1 bg-white rounded text-xs text-gray-400 px-3 py-1 ml-2">search.google.com</div>
      </div>
      <div className="bg-white p-4">
        <div className="border border-gray-100 rounded-xl p-3 mb-3">
          <p className="text-[9px] text-gray-400 mb-2">Search results for "your business + Toronto"</p>
          {[
            { pos: "#1", title: "Your Business | Toronto's Trusted Choice", url: "yourdomain.ca", highlight: true },
            { pos: "#2", title: "Competitor A — Services in Toronto", url: "competitor.ca", highlight: false },
            { pos: "#3", title: "Competitor B — Book Now", url: "other.ca", highlight: false },
          ].map((r) => (
            <div key={r.pos} className={`flex items-start gap-2 py-1.5 px-2 rounded-lg mb-1 ${r.highlight ? "bg-primary/5 border border-primary/15" : ""}`}>
              <span className={`text-[10px] font-black w-5 shrink-0 ${r.highlight ? "text-primary" : "text-gray-300"}`}>{r.pos}</span>
              <div>
                <p className={`text-[10px] font-bold leading-tight ${r.highlight ? "text-[#1a0dab]" : "text-gray-500"}`}>{r.title}</p>
                <p className={`text-[9px] ${r.highlight ? "text-[#006621]" : "text-gray-300"}`}>{r.url}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[{ v: "+312%", l: "Organic traffic" }, { v: "Pos. 1", l: "Primary keyword" }, { v: "18mo", l: "Compound ROI" }].map((s) => (
            <div key={s.l} className="bg-gray-50 rounded-lg p-2 text-center border border-gray-100">
              <p className="text-sm font-black text-primary">{s.v}</p>
              <p className="text-[8px] text-gray-400 mt-0.5 leading-tight">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100">
      <p className="text-[10px] text-gray-400">Avg. traffic growth</p>
      <p className="text-2xl font-black text-primary">+312%</p>
    </div>
    <div className="absolute -top-4 -left-4 bg-[#0a0c12] rounded-xl px-3 py-2.5 shadow-xl border border-white/10">
      <p className="text-[9px] text-white/30">Certified</p>
      <p className="text-xs font-black text-white">SEMrush Partner</p>
    </div>
  </div>
);

const seoData: HubData = {
  slug: "seo-services",
  label: "SEO SERVICES",
  breadcrumb: "SEO Services",
  hero: {
    headline: "SEO That Compounds. Visibility That Lasts.",
    italic: "Built on strategy, not shortcuts.",
    description:
      "Search engine optimisation is the highest-ROI long-term investment in digital marketing. We build the technical foundation, content architecture, topical authority, and link equity that makes your site impossible to displace — through every algorithm update, every year.",
    cta: "Get a Free SEO Audit",
    ctaHref: "/contact",
    badges: ["SEMrush Certified Partner", "Google Partner", "10+ Years SEO", "200+ Brands Grown"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "+312%", label: "Average organic traffic growth" },
    { value: "18mo", label: "Compound ROI timeline" },
    { value: "200+", label: "Brands grown through SEO" },
    { value: "94%", label: "Client retention rate" },
  ],
  intro: {
    eyebrow: "Why SEO is your most valuable long-term investment",
    headline: "Every dollar you invest in SEO keeps paying back for years. No other channel does that.",
    body: "Paid ads stop the moment you stop paying. SEO compounds. The content you publish today, the authority you build this quarter, the technical foundation you establish this year — these create returns that grow month over month, year over year, without scaling media cost. At 12 months, your organic channel is performing. At 24 months, it's your largest lead source. At 36 months, competitors can't catch up.",
    secondBody: "But SEO done poorly produces nothing. Algorithm chasing, keyword stuffing, link schemes — these work briefly and penalise reliably. We build SEO programmes that are designed to last: technically sound, content-rich, authority-backed. Our playbook has remained consistent through every major Google update because it's built on what Google actually wants: the best possible answer for every search query.",
    bullets: [
      "Technical SEO foundation: site architecture, Core Web Vitals, crawlability, indexation",
      "Content strategy and topical authority clusters across your most valuable keyword universe",
      "On-page optimisation: title tags, headings, schema markup, internal linking",
      "Link building and digital PR: authoritative backlinks that signal domain trust",
      "Local SEO and GBP management for multi-location and service area businesses",
      "Monthly reporting tied to revenue outcomes — not ranking vanity metrics",
    ],
  },
  proofSection: {
    eyebrow: "The compound advantage",
    headline: "Most businesses underestimate SEO's ROI because they give up before the compounding begins.",
    body: "The typical SEO engagement shows meaningful traffic movement at months 4-6, significant growth at 9-12 months, and dominance at 18-24 months. The businesses that reach month 18 are the ones who own their markets organically. The businesses that quit at month 4 go back to paying for every click. The difference isn't the strategy — it's the timeline.",
    secondBody: "Our role is to make the case for that timeline with data. From month one, we track leading indicators: indexation rates, technical health scores, ranking movement for target keywords, and share of voice against competitors. You see the programme working before traffic spikes — and that gives you the confidence to let the compound effect run.",
    bullets: [
      "Technical audit in the first two weeks identifies every crawlability, indexation, and performance issue suppressing your rankings.",
      "Content architecture is designed before a single word is written — keyword clusters, pillar pages, and internal link structure planned as a system.",
      "On-page optimisation is applied to existing pages first — the fastest path to ranking improvement is almost always fixing what you already have.",
      "Link building is conducted through digital PR, guest content, and editorial outreach — never bought links or link farms that risk penalties.",
      "Local SEO and GBP management ensures your business dominates the map pack for every service area and location you operate in.",
      "Monthly reporting shows keyword ranking movement, organic traffic growth, share of voice vs. competitors, and attributed leads and revenue.",
    ],
  },
  subServices: [
    {
      tab: "On-Page SEO",
      headline: "Every page on your site, optimised to rank for what your customers are searching.",
      description: "On-page SEO is the foundational layer: title tags, meta descriptions, heading hierarchy, keyword placement, image alt text, schema markup, and internal linking. We audit every page and optimise systematically — prioritising pages by traffic opportunity and conversion value. On-page work produces the fastest ranking improvements in most programmes.",
      bullets: ["Title tag and meta description optimisation", "Heading hierarchy and keyword placement", "Schema markup implementation (Article, FAQ, Local, Product)", "Internal linking architecture"],
      image: "/case-study-saas.png",
      href: "/seo-services",
    },
    {
      tab: "Content Strategy",
      headline: "Topical authority clusters that dominate every query in your niche.",
      description: "Content strategy built around topical authority: we map your entire keyword universe, cluster it into pillar and supporting page structures, and build a content programme that systematically covers every query in your market. The goal is not individual rankings — it's owning the entire topic so that Google sees your site as the definitive authority.",
      bullets: ["Full keyword universe mapping and clustering", "Pillar page and topic cluster architecture", "Content gap analysis vs. top 3 competitors", "Editorial calendar and production management"],
      image: "/studio.png",
      href: "/content-marketing-service",
    },
    {
      tab: "Link Building",
      headline: "Authoritative backlinks that signal trust and unlock higher rankings.",
      description: "Link building through digital PR, editorial outreach, and strategic content placement. We identify the highest-authority sites in your industry and create content worthy of their editorial standards. Our link building is measured by domain authority, relevance, and topical alignment — not volume. One link from a DA70 industry publication is worth more than 100 low-quality submissions.",
      bullets: ["Digital PR and media outreach", "Guest content on authoritative industry sites", "Broken link building and link reclamation", "Competitor backlink gap analysis"],
      image: "/hero-abstract.png",
      href: "/seo-services",
    },
    {
      tab: "Local SEO",
      headline: "Map pack dominance across every city and service area you operate in.",
      description: "Local SEO for businesses that compete by location: GBP management, local citation building, review velocity management, and city-service landing page architecture. We manage local SEO for businesses with 1 location and with 50 — the playbook scales with you. Map pack position 1-3 drives more calls than any paid channel for local businesses.",
      bullets: ["Google Business Profile setup, audit, and management", "Local citation building across 45+ directories", "Review generation and reputation management", "City × service landing page architecture"],
      image: "/industry-local.png",
      href: "/local-seo-service",
    },
    {
      tab: "SEO Reporting",
      headline: "Reporting that shows the business impact of SEO — not just rankings.",
      description: "Monthly SEO reports that connect organic performance to revenue: traffic by landing page, keyword ranking movement for every target term, share of voice vs. top 3 competitors, attributed leads and calls from organic channels, and a clear explanation of what changed, why, and what we're doing next. No slide decks with green arrows and no context.",
      bullets: ["Keyword ranking dashboard (live, 24/7 access)", "Organic traffic and conversion attribution", "Competitor share of voice tracking", "Monthly strategy review call"],
      image: "/work-2.png",
      href: "/seo-services",
    },
  ],
  features: [
    { icon: <Search className="w-5 h-5 text-primary" />, title: "Full SEO Audit", body: "Comprehensive audit of technical health, on-page optimisation, content quality, backlink profile, and local signals — the complete diagnostic before we prescribe anything." },
    { icon: <FileText className="w-5 h-5 text-primary" />, title: "Topical Authority Content", body: "Content clusters designed to dominate entire topic areas, not just individual keywords. Pillar pages and supporting content mapped to your full keyword universe." },
    { icon: <Link2 className="w-5 h-5 text-primary" />, title: "Link Building & Digital PR", body: "Authoritative backlinks through editorial outreach, digital PR, and strategic content placement — never bought links or schemes that risk penalties." },
    { icon: <MapPin className="w-5 h-5 text-primary" />, title: "Local SEO & GBP", body: "Map pack domination for local businesses: GBP management, citation building, review systems, and city-service landing pages that own every local query." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Core Web Vitals", body: "Page speed, LCP, CLS, and FID optimisation. Google's ranking signals now include performance — we make sure your site passes with green scores across all metrics." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "Technical SEO Foundation", body: "Crawlability, indexation, site architecture, canonical tags, hreflang, and XML sitemaps. The technical foundation that everything else depends on." },
    { icon: <TrendingUp className="w-5 h-5 text-primary" />, title: "Keyword Research", body: "Full keyword universe mapping: primary, secondary, and long-tail terms clustered by intent and prioritised by revenue opportunity. Strategy before execution." },
    { icon: <RefreshCw className="w-5 h-5 text-primary" />, title: "Content Refresh Programmes", body: "Systematic refresh of existing content by traffic decay patterns. Keeping your rankings doesn't require publishing new content — it requires maintaining what's working." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "SEO Attribution", body: "Organic leads and calls attributed to their source pages and keywords. You always know exactly which SEO work is driving revenue and which needs adjustment." },
  ],
  techStack: [
    { platform: "Ahrefs", stat: "Primary SEO tool", description: "Our core platform for keyword research, competitor analysis, content gap identification, backlink auditing, and rank tracking. Used daily across every active SEO programme." },
    { platform: "SEMrush", stat: "Certified Agency Partner", description: "SEMrush for technical audits, position tracking, and content marketing workflows. Our SEMrush Agency Partner certification reflects our investment in the platform and our team's expertise." },
    { platform: "Google Search Console", stat: "Performance data", description: "GSC is the ground truth for organic performance: impressions, clicks, average position, indexation status, and Core Web Vitals. Pulled weekly into our reporting dashboards." },
    { platform: "Screaming Frog", stat: "Technical crawler", description: "Site crawling for technical SEO audits: broken links, duplicate content, missing tags, redirect chains, and crawl depth issues. Full crawl on every new engagement and quarterly thereafter." },
    { platform: "PageSpeed Insights / GTmetrix", stat: "Performance auditing", description: "Core Web Vitals measurement and performance profiling. Used to identify and prioritise page speed improvements that improve both rankings and user experience." },
    { platform: "Looker Studio", stat: "Reporting dashboards", description: "Custom dashboards pulling from GSC, GA4, Ahrefs, and your CRM. Every client gets a live SEO performance dashboard showing traffic, rankings, and attributed leads in one view." },
  ],
  caseStudies: [
    { image: "/industry-legal.png", client: "Kotak Law", industry: "Legal Services", blurb: "Practice area SEO for a Toronto immigration and personal injury firm. 47 keywords moved to positions 1-3 within 12 months. Organic now accounts for 62% of all new client inquiries — up from 18% when we started.", metrics: [{ value: "47", label: "Keywords in top 3" }, { value: "+244%", label: "Organic leads" }] },
    { image: "/case-study-homeservices.png", client: "Hudson Outdoor", industry: "Home Services", blurb: "Multi-location HVAC and outdoor services company. City × service page architecture built across 6 service areas. Organic traffic replaced Google Ads as the primary lead channel in month 14.", metrics: [{ value: "+312%", label: "Organic traffic" }, { value: "Month 14", label: "Became #1 channel" }] },
    { image: "/industry-dental.png", client: "Apex Dental Group", industry: "Dental", blurb: "6-location dental practice dominating local SEO across Greater Toronto. 1,100+ city-service combinations ranked in the top 5. New patient inquiries up 86% — entirely from organic and map pack.", metrics: [{ value: "1,100+", label: "Top-5 rankings" }, { value: "+86%", label: "New patients" }] },
  ],
  process: [
    { label: "Audit", headline: "Technical, content, and backlink audit — the complete diagnostic.", description: "We audit your site's technical health (crawlability, indexation, Core Web Vitals), on-page optimisation (title tags, content quality, internal linking), content coverage (keyword gaps vs. competitors), and backlink profile (authority, relevance, toxic links). The audit is the strategy — everything that follows comes from what we find here." },
    { label: "Strategy", headline: "Keyword universe, content architecture, and prioritised roadmap.", description: "Full keyword mapping of your target universe, clustered by intent and priority. Content architecture: which pages to create, which to optimise, and how they link together. A prioritised 12-month roadmap with projected impact by quarter. You sign off before we execute anything." },
    { label: "Technical", headline: "Fix the foundation before building on top of it.", description: "Technical issues fixed first: crawl errors resolved, indexation problems corrected, Core Web Vitals improved, site architecture cleaned up, schema markup implemented. A technically healthy site is the prerequisite for everything else — content and links perform better on a solid foundation." },
    { label: "Content", headline: "Systematic content production against the keyword architecture.", description: "Content created on a rolling schedule against the approved content architecture. Pillar pages first, then supporting cluster content. Every piece has a keyword target, a search intent, and a position in the internal link structure. Quality and E-E-A-T signals built into every piece before publication." },
    { label: "Links", headline: "Authority building through digital PR and editorial outreach.", description: "Ongoing link acquisition through media outreach, guest content placement, and digital PR. Campaigns designed around the topics where your audience and authoritative publications intersect. All links are editorially placed — never purchased or schemed." },
    { label: "Compound", headline: "Monitor, refresh, and expand as rankings compound.", description: "Monthly reporting on keyword rankings, organic traffic, share of voice, and attributed leads. Stale content refreshed by traffic decay patterns. New keyword clusters added as authority grows. The programme is designed to compound — not plateau." },
  ],
  faqs: [
    { question: "How long does SEO take to show results?", answer: "Meaningful ranking movement typically begins at 3-4 months for on-page work on well-indexed sites. Significant traffic growth appears at 6-9 months. Full compounding effect — where organic becomes your largest lead channel — typically happens at 12-18 months. We track leading indicators from day one (technical health, indexation, ranking movement) so you see the programme working before traffic spikes. We give you realistic projections by channel and keyword cluster during strategy sign-off." },
    { question: "What's the difference between your SEO service and Technical SEO?", answer: "Our general SEO service is the complete package: technical foundation, content strategy, on-page optimisation, link building, local SEO, and reporting. Technical SEO is a specialised service focused specifically on the technical health of your website — site architecture, crawlability, Core Web Vitals, JavaScript rendering, international SEO configuration, and advanced structured data. Most clients need full-service SEO. Technical SEO as a standalone is typically for businesses with an in-house content and marketing team that needs the technical layer handled separately." },
    { question: "Do you guarantee rankings?", answer: "No ethical SEO agency can guarantee specific rankings — Google's algorithms are not controllable. What we guarantee is the quality of our work: a technically sound site, a content strategy built on real keyword research, links acquired through legitimate means, and monthly reporting showing exactly what's happening. Our track record — 94% client retention and consistent traffic growth across 200+ brands — is the evidence we point to, not promises we make at the start of an engagement." },
    { question: "Can SEO work alongside paid search (Google Ads)?", answer: "SEO and paid search are highly complementary. Paid search gives you immediate visibility and conversion data while SEO builds. SEO keyword data improves paid targeting and landing page relevance. CRO learnings from paid landing pages improve SEO page performance. When we run both channels, we share data and insight across them — which consistently produces better performance on each than running them separately." },
    { question: "What industries do you specialise in for SEO?", answer: "We have deep SEO playbooks for local service businesses (legal, dental, healthcare, home services, real estate), eCommerce (Shopify, Magento, WooCommerce), B2B SaaS, and professional services. These are the verticals where we have the most case study depth and proven methodologies. We also work with businesses outside these categories — but we'll tell you honestly in the discovery call if a vertical is outside our core expertise." },
  ],
  hubInsights: [
    { image: "/work-1.png", category: "SEO Strategy", readTime: "8 min read", title: "The 18-Month SEO Roadmap: What to Expect at Every Stage", excerpt: "SEO is the most misunderstood channel in digital marketing — mostly because the timeline is counterintuitive. We share the realistic 18-month roadmap we give every new SEO client: what happens in months 1-3, why months 4-6 look slow before they don't, and why clients who reach month 18 own their market.", author: "Marcus Chen", authorRole: "SEO Director", href: "/blog/seo-18-month-roadmap" },
    { image: "/case-study-local.png", category: "Content Strategy", readTime: "6 min read", title: "Topical Authority: The SEO Strategy That Beats Domain Authority", excerpt: "Domain authority is a proxy metric. Topical authority is what actually drives rankings in 2026. We explain the difference, why Google's entity-based algorithms reward depth over breadth, and the exact content architecture we use to build topical authority in any niche — with examples from clients who went from page 3 to position 1.", author: "Sarah Kowalski", authorRole: "Head of Content", href: "/blog/topical-authority-seo-strategy" },
    { image: "/hero-abstract.png", category: "Link Building", readTime: "5 min read", title: "Why We Don't Buy Links — And What We Do Instead", excerpt: "Bought links still work — until they don't. Google's spam policies have become increasingly effective at identifying and penalising unnatural link profiles. We explain our digital PR and editorial outreach methodology: how we build the kind of links that improve rankings and survive algorithm updates, with real examples from campaigns we've run.", author: "James Okafor", authorRole: "Link Strategy Lead", href: "/blog/link-building-without-buying" },
  ],
};

export default function SeoServicesHub() {
  return <ServiceHubPage data={seoData} />;
}
