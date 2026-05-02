import { FileText, TrendingUp, Mail, Share2, BarChart2, Zap, Target, BookOpen, Rss } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
        ))}
        <div className="flex-1 bg-white rounded text-xs text-gray-400 px-3 py-1 ml-2">content.outlier.ca</div>
      </div>
      <div className="bg-[#0a0c12] p-4">
        {/* Content cluster visual */}
        <div className="bg-white/5 rounded-xl p-3 mb-3 border border-white/8">
          <p className="text-[9px] text-white/30 uppercase tracking-widest mb-2">Topical Cluster: HVAC Toronto</p>
          <div className="space-y-1.5">
            {[
              { t: "HVAC Toronto — Best Service Companies 2024", pos: "#1", color: "#22c55e" },
              { t: "Air Conditioning Repair Toronto Cost Guide", pos: "#2", color: "#22c55e" },
              { t: "Furnace Replacement Toronto — What to Expect", pos: "#3", color: "#1a56ff" },
            ].map((r) => (
              <div key={r.t} className="flex items-center gap-2">
                <span className="text-[9px] font-black w-5" style={{ color: r.color }}>{r.pos}</span>
                <span className="text-[9px] text-white/50 flex-1 truncate">{r.t}</span>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[{ v: "+312%", l: "Organic traffic" }, { v: "1,100+", l: "Pages ranked" }, { v: "8x", l: "Content ROI" }].map((s) => (
            <div key={s.l} className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
              <p className="text-sm font-black text-primary">{s.v}</p>
              <p className="text-[8px] text-white/30 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100">
      <p className="text-xs font-bold text-gray-900">Content ROI</p>
      <p className="text-2xl font-black text-[#22c55e]">8x</p>
    </div>
    <div className="absolute -top-4 -left-4 bg-[#7c3aed] rounded-xl px-3 py-2 shadow-xl">
      <p className="text-white font-black text-xs">Topical Authority</p>
    </div>
  </div>
);

const contentMarketingData: HubData = {
  slug: "content-marketing-service",
  label: "CONTENT MARKETING",
  breadcrumb: "Content Marketing",
  hero: {
    headline: "Content That Ranks, Converts, and Compounds.",
    italic: "Not just traffic. Revenue.",
    description:
      "Strategy-first content marketing that builds topical authority in your niche. We don't write blog posts for the sake of it. Every piece of content is designed to rank for a high-value query, build trust with the right audience, and drive them toward conversion.",
    cta: "Get a Free Content Audit",
    ctaHref: "/contact",
    badges: ["SEMrush Certified", "Google Partner", "Clutch 5★", "10+ Years"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "+312%", label: "Avg. traffic growth" },
    { value: "1,100+", label: "Pages ranked per client" },
    { value: "8x", label: "Avg. content ROI" },
    { value: "10+", label: "Years of Experience" },
  ],
  intro: {
    eyebrow: "Why content compounds",
    headline: "The brands winning organic in 2025 built their content architecture in 2022.",
    body: "Random blog posts don't build topical authority. We build content clusters — structured networks of pages covering every angle of a topic — that signal to Google you're the definitive resource in your niche. Every piece we publish strengthens the ones before it.",
    bullets: [
      "Topical authority clusters — not standalone blog posts",
      "Every piece mapped to a keyword and conversion goal",
      "Internal linking architecture that passes equity throughout the cluster",
      "Regular pruning of thin content that dilutes authority",
      "Monthly reporting on rankings, traffic, and attributed revenue",
    ],
  },
  subServices: [
    {
      tab: "SEO Content Strategy",
      headline: "Build the content architecture before writing a word.",
      description:
        "We start with a full content gap analysis against your top competitors, identify every high-value topic cluster in your niche, and build a structured editorial roadmap that prioritises by revenue potential and competition level.",
      bullets: [
        "Full content gap analysis vs. top 3 competitors",
        "Topical authority cluster mapping",
        "Keyword-to-content mapping with difficulty scoring",
        "12-month editorial roadmap",
      ],
      image: "/case-study-saas.png",
      href: "/content-marketing-service",
    },
    {
      tab: "SEO Blog Writing",
      headline: "Long-form content that ranks and converts.",
      description:
        "Research-led long-form articles written by our in-house team. Each piece is structured for the target query, optimised for E-E-A-T signals, internally linked to your cluster, and formatted to maximise time-on-page and conversion.",
      bullets: [
        "In-depth research and subject matter interviews",
        "Structured for Featured Snippets and PAA boxes",
        "Internal linking to your service pages",
        "CTA integration and conversion optimisation",
      ],
      image: "/industry-local.png",
      href: "/content-marketing-service",
    },
    {
      tab: "Email Marketing",
      headline: "$42 ROI for every $1 spent — the highest-return channel in your stack.",
      description:
        "Email marketing that goes beyond newsletters. Automated lifecycle sequences, segmented campaigns, and broadcast emails that turn your list into a reliable monthly revenue channel.",
      bullets: [
        "Welcome and onboarding sequences",
        "Segmented broadcast campaigns",
        "Abandoned cart and re-engagement flows",
        "Deliverability monitoring and list hygiene",
      ],
      image: "/case-study-saas.png",
      href: "/email-marketing-service",
    },
    {
      tab: "Social Media Content",
      headline: "Build an audience that trusts you before they're ready to buy.",
      description:
        "Organic social media content strategy and management for LinkedIn, Instagram, and X. We create content that builds genuine authority in your industry — not follower counts that don't convert.",
      bullets: [
        "Platform-specific content strategy",
        "Content calendar and scheduling",
        "Engagement management",
        "Monthly analytics and optimisation",
      ],
      image: "/case-study-home.png",
      href: "/social-media-service",
    },
    {
      tab: "Content Repurposing",
      headline: "One piece of content. Multiple channels.",
      description:
        "Systematic repurposing of your high-performing content across every relevant channel. A long-form blog post becomes a video script, a LinkedIn carousel, an email sequence, and a Twitter thread — all pointing back to your service pages.",
      bullets: [
        "Video script creation from blog content",
        "LinkedIn and Instagram carousel formats",
        "Email nurture sequences from blog posts",
        "Short-form social clips from long-form video",
      ],
      image: "/case-study-saas.png",
      href: "/content-marketing-service",
    },
  ],
  features: [
    { icon: <BookOpen className="w-5 h-5 text-primary" />, title: "Topical Authority Clusters", body: "Structured content clusters that signal to Google you're the definitive resource in your niche." },
    { icon: <TrendingUp className="w-5 h-5 text-primary" />, title: "SEO-First Writing", body: "Every piece researched, structured, and optimised for a specific high-value query before a word is written." },
    { icon: <Mail className="w-5 h-5 text-primary" />, title: "Email Automation", body: "Lifecycle sequences and broadcast campaigns that turn your list into a monthly revenue channel." },
    { icon: <Share2 className="w-5 h-5 text-primary" />, title: "Social Media Management", body: "Platform-specific content that builds genuine authority — not vanity metrics." },
    { icon: <Target className="w-5 h-5 text-primary" />, title: "Conversion Integration", body: "Every piece of content has a primary CTA and is mapped to a stage in your sales funnel." },
    { icon: <Rss className="w-5 h-5 text-primary" />, title: "Content Repurposing", body: "One long-form piece becomes assets across email, social, video, and podcast — systematically." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "Performance Reporting", body: "Monthly reports showing rankings, organic traffic, and content-attributed leads and revenue." },
    { icon: <FileText className="w-5 h-5 text-primary" />, title: "Content Auditing", body: "Quarterly audits to prune thin content, update stale posts, and consolidate duplicate pages." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "AI-Assisted Research", body: "We use AI for research and competitive analysis while ensuring all content is expert-written and E-E-A-T compliant." },
  ],
  caseStudies: [
    {
      image: "/case-study-saas.png",
      client: "Nova FinTech",
      industry: "SaaS",
      blurb: "40-article content cluster around B2B finance topics. Organic traffic 8x'd in 14 months.",
      metrics: [{ value: "+800%", label: "Organic traffic" }, { value: "8x", label: "Content ROI" }],
    },
    {
      image: "/industry-dental.png",
      client: "Apex Dental Group",
      industry: "Dental",
      blurb: "Local content strategy across 6 cities. 1,100+ city-service pages ranking in map pack.",
      metrics: [{ value: "1,100+", label: "Pages ranked" }, { value: "+86%", label: "New patients" }],
    },
    {
      image: "/case-study-home.png",
      client: "Hudson Outdoor",
      industry: "Home Services",
      blurb: "Topical authority content programme built around outdoor living. 312% traffic growth in 12 months.",
      metrics: [{ value: "+312%", label: "Organic traffic" }, { value: "$2.4M", label: "Attributed revenue" }],
    },
  ],
  process: [
    { label: "Audit", headline: "Identify your content gaps and opportunities.", description: "We audit your existing content, run a full competitor gap analysis, and identify every high-value topic cluster your competitors are ranking for that you aren't. This shapes the entire strategy." },
    { label: "Strategy", headline: "Build the content architecture before writing anything.", description: "We create the full topical cluster map, keyword-to-content assignments, and a prioritised 12-month editorial roadmap. You sign off before we write a single word." },
    { label: "Create", headline: "Research-led, expert-written content.", description: "Our in-house writers research every piece using your industry data, competitor analysis, and Google's quality guidelines. Every piece is E-E-A-T compliant and conversion-optimised." },
    { label: "Optimise", headline: "Internal linking, schema, and on-page SEO.", description: "Every piece is internally linked to your cluster, tagged with appropriate schema markup, and optimised for the specific SERP feature we're targeting (Featured Snippet, PAA, etc.)." },
    { label: "Promote", headline: "Distribution across email, social, and outreach.", description: "New content is distributed through your email list, social channels, and relevant outreach to build initial traffic and links that accelerate ranking." },
    { label: "Compound", headline: "Monthly tracking, updating, and pruning.", description: "We track rankings and traffic for every piece monthly, update stale content, prune thin pages, and identify new cluster opportunities as your authority grows." },
  ],
  faqs: [
    { question: "How long before content starts ranking?", answer: "New content typically takes 3–6 months to achieve meaningful rankings. However, content targeting lower-competition queries can rank within 4–8 weeks. After 12 months of consistent publishing, the compounding effect becomes clearly visible in your analytics." },
    { question: "How many articles do you publish per month?", answer: "It depends on your budget and goals. Most clients start with 4–8 articles per month. For aggressive topical authority building, 12–16 per month is ideal. We'll recommend a cadence based on your competition level and keyword targets." },
    { question: "Do you write the content or do I?", answer: "We do. Our in-house team handles everything: research, writing, editing, on-page optimisation, and publishing (if you give us CMS access). You review and approve each piece before it goes live." },
    { question: "How do you measure content ROI?", answer: "We track organic traffic, keyword rankings, time-on-page, and — most importantly — content-attributed leads and conversions via GA4 goal tracking. Monthly reports show the direct link between content and revenue." },
    { question: "Do you handle email and social too?", answer: "Yes. We offer full content distribution as part of our content marketing retainer — email campaigns, social media management, and content repurposing across all relevant formats." },
  ],
};

export default function ContentMarketingHub() {
  return <ServiceHubPage data={contentMarketingData} />;
}
