import { Bot, Search, TrendingUp, Zap, BarChart2, Globe, RefreshCw, FileText, Target } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-[#1a56ff] px-4 py-3 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <Bot className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-white font-bold text-xs">AI SEO Engine</p>
          <p className="text-white/60 text-[9px]">Powered by GPT-4o + Ahrefs</p>
        </div>
      </div>
      <div className="bg-[#0a0c12] p-4">
        <div className="bg-white/5 rounded-xl p-3 mb-3 border border-white/8">
          <p className="text-[9px] text-white/30 uppercase tracking-widest mb-2">Programmatic SEO · Auto-Generated</p>
          {[
            { t: "HVAC Repair Toronto — 24/7 Emergency", pos: "#1" },
            { t: "Air Conditioning Toronto — Cost Guide", pos: "#2" },
            { t: "Furnace Repair Mississauga — Fast Service", pos: "#3" },
          ].map((r) => (
            <div key={r.t} className="flex items-center gap-2 py-0.5">
              <span className="text-[9px] font-black text-[#22c55e] w-5">{r.pos}</span>
              <span className="text-[9px] text-white/50 flex-1 truncate">{r.t}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[{ v: "1,100+", l: "Pages generated" }, { v: "+420%", l: "Organic traffic" }, { v: "< 1hr", l: "Per 100 pages" }].map((s) => (
            <div key={s.l} className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
              <p className="text-sm font-black text-primary">{s.v}</p>
              <p className="text-[8px] text-white/30 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100">
      <p className="text-[10px] text-gray-400">Pages ranked</p>
      <p className="text-2xl font-black text-primary">1,100+</p>
    </div>
    <div className="absolute -top-4 -left-4 bg-[#0a0c12] rounded-xl px-3 py-2.5 shadow-xl border border-white/10">
      <p className="text-[9px] text-white/30">Mode</p>
      <p className="text-lg font-black text-white">AI SEO</p>
    </div>
  </div>
);

const aiSeoData: HubData = {
  slug: "ai-seo-service",
  label: "AI SEO",
  breadcrumb: "AI SEO",
  hero: {
    headline: "AI-Powered SEO That Scales What Human Teams Can't.",
    italic: "Programmatic. Precise. Compound.",
    description:
      "AI SEO combines the strategic intelligence of our senior SEO team with the scale capabilities of modern AI — to generate programmatic content at scale, automate competitive research, identify ranking opportunities faster, and build content architecture that compounds in value month over month.",
    cta: "Get a Free AI SEO Audit",
    ctaHref: "/contact",
    badges: ["GPT-4o Powered", "Programmatic SEO", "Topical Authority", "Google Partner"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "1,100+", label: "Pages ranked per client (programmatic)" },
    { value: "+420%", label: "Avg. organic traffic growth" },
    { value: "< 1hr", label: "To generate 100 optimised pages" },
    { value: "8x", label: "Content output vs. manual only" },
    ],
  intro: {
    eyebrow: "Why AI SEO works",
    headline: "AI doesn't replace strategic SEO. It removes the ceiling on how much of it you can execute.",
    body: "The businesses winning organic search in 2026 are not publishing more content than their competitors — they're publishing smarter content faster, at a scale that human teams alone cannot match. AI SEO combines human strategic direction with AI execution: our SEO team designs the content architecture, keyword clusters, and topical authority strategy; AI executes the research, first-draft generation, and programmatic page builds at 8x the speed of a manual content team.",
    secondBody: "The critical distinction: we use AI as a research and scaling tool, not as a content generator that publishes unedited output. Every piece goes through expert editorial review before it's published. E-E-A-T compliance requires human expertise signals — we build those into every piece. The result is AI-assisted content that ranks because it's genuinely useful, not because it passed a basic quality check.",
    bullets: [
      "Programmatic SEO: generate 1,000+ location and service pages at scale, each unique and optimised",
      "AI-assisted keyword research: surface opportunities your competitors haven't found yet",
      "Automated content briefs: every research hour produces a structured, ready-to-write brief",
      "AI-assisted first drafts reviewed and enriched by our expert editorial team",
      "Schema markup generated automatically for every page type",
    ],
  },
  proofSection: {
    eyebrow: "AI SEO at scale",
    headline: "Programmatic SEO can rank 1,000 pages in the time it takes a manual team to rank 50. The compound effect is extraordinary.",
    body: "For businesses with a large service area, multiple product lines, or a naturally long-tail keyword universe, programmatic SEO is transformative. A dental group with 6 locations and 20 services has 120 unique city-service combinations to rank for. A manual team building those 120 pages takes 6-9 months. Our AI-assisted programmatic process builds and publishes them in 2-3 weeks — each one unique, well-structured, and optimised for its specific target query.",
    secondBody: "The compound effect emerges over the following 6 months as Google indexes and ranks each page. Our most successful programmatic programmes are generating 5,000-10,000 unique monthly visitors from pages that didn't exist 12 months ago. That's the equivalent of running a significant paid media programme — at zero recurring cost per click.",
    bullets: [
      "We design the programmatic template architecture before building anything: URL structure, heading hierarchy, content sections, schema types, and internal linking logic.",
      "AI generates the variable content for each page combination — locations, services, prices, reviews, FAQs — from a structured data source your team maintains.",
      "Human editorial review ensures every page reads naturally, passes a quality threshold, and includes the genuine expertise signals that E-E-A-T evaluation requires.",
      "Internal linking between programmatic pages is generated automatically — every city page links to its service variants, every service page links to related cities.",
      "We monitor indexation rates and search impressions from day one — catching and resolving any crawl or indexation issues before they limit the programme's impact.",
      "Programmatic pages are built on a foundation of strong domain authority — we don't run these programmes on new domains. Technical SEO health and topical authority come first.",
    ],
  },
  subServices: [
    {
      tab: "Programmatic SEO",
      headline: "Generate thousands of optimised, unique pages at scale.",
      description: "Programmatic SEO architecture for businesses with large keyword universes: multi-location service businesses, eCommerce catalogues, SaaS comparison pages, and real estate listings. We design the template, build the data layer, generate the content, and monitor the ranking impact.",
      bullets: ["URL structure and template design", "Data layer and content generation", "Auto-generated internal linking", "Indexation monitoring and QA"],
      image: "/case-study-saas.png",
      href: "/ai-seo-service",
    },
    {
      tab: "AI Content Research",
      headline: "Surface keyword opportunities competitors haven't found yet.",
      description: "AI-powered keyword research that goes beyond standard tooling — entity analysis, semantic clustering, PAA mining, and competitor content gap analysis at scale. Our AI research layer surfaces long-tail opportunities that manual research consistently misses.",
      bullets: ["Semantic keyword clustering", "PAA and entity analysis", "Competitor content gap mining", "Opportunity prioritisation by ROI"],
      image: "/case-study-saas.png",
      href: "/ai-seo-service",
    },
    {
      tab: "AI-Assisted Content",
      headline: "8x your content output without compromising on quality.",
      description: "AI-assisted content production: AI generates research summaries and first drafts from structured briefs, expert editors enrich, fact-check, and add the E-E-A-T signals that make content rank. You get 8x the content output of a pure manual team at a comparable quality level.",
      bullets: ["AI first draft from structured brief", "Expert editorial enrichment", "E-E-A-T compliance review", "Auto-generated schema markup"],
      image: "/industry-local.png",
      href: "/ai-seo-service",
    },
    {
      tab: "Schema Automation",
      headline: "Automated schema markup for every page type in your site.",
      description: "AI-generated schema markup for every content type — LocalBusiness, FAQ, Article, Product, Review, BreadcrumbList, HowTo. Schema generated from your existing page content, validated against Google's guidelines, and deployed via GTM or direct CMS integration.",
      bullets: ["Automated schema generation", "Multiple schema types per page", "Rich results testing and validation", "GTM or CMS deployment"],
      image: "/case-study-saas.png",
      href: "/ai-seo-service",
    },
    {
      tab: "Competitive Intelligence",
      headline: "Continuous AI monitoring of your competitor's SEO movements.",
      description: "Automated competitor monitoring: ranking changes, new content publication, backlink acquisition, and technical SEO changes — all surfaced weekly in your report. Know when a competitor makes a strategic SEO move before it affects your rankings.",
      bullets: ["Automated ranking change alerts", "New competitor content monitoring", "Backlink velocity tracking", "Weekly intelligence reports"],
      image: "/case-study-saas.png",
      href: "/ai-seo-service",
    },
  ],
  features: [
    { icon: <Bot className="w-5 h-5 text-primary" />, title: "Programmatic Page Generation", body: "Generate thousands of unique, optimised pages at scale — location, service, and product combinations — in days rather than months." },
    { icon: <Search className="w-5 h-5 text-primary" />, title: "AI Keyword Research", body: "Semantic clustering, entity analysis, and PAA mining surface opportunities that standard keyword tools consistently miss." },
    { icon: <FileText className="w-5 h-5 text-primary" />, title: "AI-Assisted Content", body: "AI first drafts + expert editorial enrichment = 8x content output at E-E-A-T quality. Every piece reviewed before publication." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Schema Automation", body: "Automated schema markup generation and deployment for every page type. Rich results from day one of publication." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "Internal Linking Automation", body: "AI-generated internal linking across programmatic pages — every new page is immediately integrated into your site's link architecture." },
    { icon: <TrendingUp className="w-5 h-5 text-primary" />, title: "Rank Tracking at Scale", body: "Automated rank tracking for thousands of keywords across every programmatic page — with weekly movement reports." },
    { icon: <Target className="w-5 h-5 text-primary" />, title: "Content Gap Analysis", body: "AI-powered competitor content gap mining identifies every high-value cluster your competitors are ranking for that you aren't." },
    { icon: <RefreshCw className="w-5 h-5 text-primary" />, title: "Content Refresh Automation", body: "AI identifies stale content by traffic decay patterns and generates update recommendations — keeping your rankings without manual monitoring." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "ROI Attribution", body: "Every programmatic page tracked individually — impressions, clicks, rankings, and attributed leads. Full ROI visibility on the programme." },
  ],
  techStack: [
    { platform: "OpenAI GPT-4o", stat: "Content generation", description: "Our primary LLM for content generation, research synthesis, and brief writing. Fine-tuned prompting that produces content matching your brand voice and meeting Google's quality guidelines." },
    { platform: "Ahrefs API", stat: "Research data", description: "Ahrefs data layer for keyword research, competitor analysis, and content gap mining — accessed programmatically to process thousands of keyword opportunities in minutes rather than weeks." },
    { platform: "Python / Pandas", stat: "Data processing", description: "Python-based data pipelines for processing keyword datasets, generating content templates, and automating the programmatic page generation workflow." },
    { platform: "Screaming Frog", stat: "Technical audit", description: "Site crawling and technical SEO auditing — used to monitor programmatic page indexation, identify crawl issues at scale, and track technical health as new pages are published." },
    { platform: "Google Search Console API", stat: "Performance data", description: "GSC data pulled programmatically to monitor indexation rates, search impressions, and click-through rates for every programmatic page — alerting on anomalies automatically." },
    { platform: "Custom Schema Generator", stat: "Structured data", description: "In-house tool that generates valid JSON-LD schema markup for any content type based on page metadata and content analysis. Output validated against Google's Rich Results Test before deployment." },
  ],
  caseStudies: [
    { image: "/industry-dental.png", client: "Apex Dental Group", industry: "Dental", blurb: "Programmatic SEO for a 6-location dental group: 1,100 unique city-service pages generated, reviewed, and published in 3 weeks. 420% organic traffic growth in 12 months.", metrics: [{ value: "1,100+", label: "Pages ranked" }, { value: "+420%", label: "Organic traffic" }] },
    { image: "/case-study-realestate.png", client: "Prime Realty Group", industry: "Real Estate", blurb: "AI-assisted content programme: neighbourhood guides, market reports, and property type pages at scale. Organic traffic became the #1 lead source for the first time in the agency's history.", metrics: [{ value: "+247%", label: "Organic leads" }, { value: "#1", label: "Lead source" }] },
    { image: "/case-study-home.png", client: "Hudson Outdoor", industry: "Home Services", blurb: "Programmatic local landing pages across 40 service areas combined with AI-assisted topical content. 312% organic traffic growth, $2.4M attributed revenue.", metrics: [{ value: "+312%", label: "Organic traffic" }, { value: "$2.4M", label: "Attributed revenue" }] },
  ],
  process: [
    { label: "Audit", headline: "Audit your domain authority and identify programmatic opportunities.", description: "Technical SEO health check, domain authority baseline, and opportunity mapping — identifying where programmatic SEO can have the highest impact given your current authority level and keyword universe." },
    { label: "Architecture", headline: "Design the programmatic template and data structure.", description: "URL structure, page template design, content section mapping, and data layer architecture. Every element of the template is designed before we generate a single page." },
    { label: "Generate", headline: "AI-generate content for every page variation at scale.", description: "Python pipelines process your keyword and location data, GPT-4o generates unique content for each combination, and our editorial team reviews every page against quality and E-E-A-T standards before publication." },
    { label: "Publish", headline: "Deploy and submit pages for indexation.", description: "Bulk publishing via your CMS API, XML sitemap updates, and Google Search Console URL inspection for priority pages. We monitor indexation rates daily in the first month." },
    { label: "Monitor", headline: "Track rankings, impressions, and indexed page count.", description: "Weekly ranking reports for every programmatic keyword, GSC impression and click data by page, and anomaly alerts for indexation drops or ranking losses." },
    { label: "Scale", headline: "Expand to new keyword clusters and page types as rankings compound.", description: "As the initial programme gains authority, we identify the next expansion — new service areas, new content types, new keyword clusters. Programmatic SEO compounds with scale." },
  ],
  faqs: [
    { question: "Is AI-generated content penalised by Google?", answer: "Google does not penalise content for being AI-generated — it penalises low-quality, unhelpful content regardless of how it was produced. Our AI SEO process produces high-quality content through AI assistance and expert editorial review. Every piece demonstrates E-E-A-T signals and provides genuine value. Our programmatic pages consistently rank and drive traffic because they're genuinely useful, not because they tricked a quality filter." },
    { question: "What is programmatic SEO?", answer: "Programmatic SEO is the practice of generating large numbers of optimised pages using templates and structured data, rather than writing each page manually. It's ideal for businesses with many location-service combinations, large product catalogues, or naturally long-tail keyword universes. A dental group with 6 locations and 20 services has 120 unique pages to rank for — programmatic SEO builds all 120 in weeks, not months." },
    { question: "How many pages can you generate with programmatic SEO?", answer: "We've run programmes generating 50,000+ pages for large eCommerce and directory clients. For most local service businesses, 200-2,000 pages covers the full keyword universe. The scale is determined by your keyword universe and domain authority — we recommend against generating more pages than your domain can realistically rank." },
    { question: "Does AI SEO replace traditional SEO?", answer: "No — it augments it. Programmatic SEO and AI-assisted content need a strong technical foundation, solid domain authority, and a coherent topical strategy. We run AI SEO as part of a comprehensive programme that includes technical SEO, link building, and traditional editorial content. AI provides scale; the rest of the SEO programme provides the authority that makes that scale rank." },
    { question: "How quickly do programmatic pages rank?", answer: "Indexation typically takes 2-6 weeks for most domains in good standing. Ranking follows indexation — pages targeting low-competition local queries often rank within 4-8 weeks of indexation. Higher competition queries take 3-6 months. The compound effect of the full programme becomes visible at 9-12 months when hundreds of pages are ranking simultaneously." },
  ],
  hubInsights: [
    { image: "/industry-dental.png", category: "Programmatic SEO", readTime: "8 min read", title: "Programmatic SEO in 2026: The Complete Implementation Guide", excerpt: "Programmatic SEO can generate thousands of ranking pages in weeks — but only when the architecture, data quality, and editorial process are right. We walk through the complete implementation: template design, data layer, content generation pipeline, indexation strategy, and the common mistakes that cause programmatic programmes to under-perform.", author: "Marcus Chen", authorRole: "SEO Director", href: "/blog/programmatic-seo-guide-2026" },
    { image: "/case-study-saas.png", category: "AI Content", readTime: "6 min read", title: "How to Use AI for SEO Content Without Getting Penalised", excerpt: "The distinction between AI content that ranks and AI content that gets filtered is not the technology — it's the editorial process. We share the exact workflow we use: AI research synthesis, structured brief generation, AI first draft, and expert editorial enrichment that adds the E-E-A-T signals Google requires.", author: "Sarah Kowalski", authorRole: "Head of Content", href: "/blog/ai-seo-content-without-penalty" },
    { image: "/case-study-home.png", category: "AI SEO Tools", readTime: "5 min read", title: "The AI SEO Stack We Use on Every Client Campaign in 2026", excerpt: "From keyword research to content generation to rank tracking — every step of our SEO process now has an AI layer. We walk through the specific tools, APIs, and in-house systems we use to run AI SEO programmes for service businesses, eCommerce brands, and SaaS companies.", author: "Priya Anand", authorRole: "AI Systems Lead", href: "/blog/ai-seo-stack-2026" },
  ],
};

export default function AISeoHub() {
  return <ServiceHubPage data={aiSeoData} />;
}
