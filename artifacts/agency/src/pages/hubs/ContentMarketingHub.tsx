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
    headline: "The brands winning organic in 2026 built their content architecture in 2023.",
    body: "Random blog posts don't build topical authority. We build content clusters — structured networks of pages covering every angle of a topic — that signal to Google you're the definitive resource in your niche. Every piece we publish strengthens the ones before it, and the compound effect becomes dramatically visible after 12 months of consistent execution.",
    secondBody: "The businesses that complain content 'doesn't work' almost universally made the same mistakes: they published sporadically, targeted keywords without strategic intent, and measured success by traffic instead of attributed revenue. We fix all three from day one. Every piece has a target query, a conversion goal, and a place in the cluster architecture before a single word is written.",
    bullets: [
      "Topical authority clusters — not standalone blog posts",
      "Every piece mapped to a keyword and conversion goal",
      "Internal linking architecture that passes equity throughout the cluster",
      "Regular pruning of thin content that dilutes authority",
      "Monthly reporting on rankings, traffic, and attributed revenue",
    ],
  },
  proofSection: {
    eyebrow: "Why strategy-first content wins",
    headline: "Content without architecture is just publishing. Content with architecture is compounding equity.",
    body: "Google's quality evaluators look for topical depth. A site that covers one topic comprehensively — with supporting pages, internal links, and authoritative external references — outranks a site that publishes high-volume shallow content every time. We build the architecture first, then fill it in systematically with content that earns positions and keeps them.",
    secondBody: "The businesses that see 8x content ROI aren't publishing more than their competitors — they're publishing smarter. A well-architected cluster of 20 articles can outperform 200 disconnected posts. We've proven this across dental, SaaS, eCommerce, home services, and B2B finance verticals. The methodology works regardless of industry because it's built on how search algorithms actually evaluate authority.",
    bullets: [
      "We build the topical cluster map before writing anything — so every piece has a structural purpose, not just a keyword target.",
      "Every article is internally linked to related cluster pages, passing equity through the network and reinforcing the overall authority signal.",
      "We track not just rankings and traffic but content-attributed leads and revenue — so you see the direct commercial return on every piece.",
      "Content is updated on a rolling schedule: we track decay, refresh stale articles, and prune thin pages that dilute your topical authority.",
      "Our E-E-A-T compliance process means every piece demonstrates experience, expertise, authority, and trust — the four signals Google uses to evaluate quality.",
      "We handle distribution: every new piece goes out through your email list, social channels, and relevant outreach — building initial traffic and link velocity.",
    ],
  },
  subServices: [
    {
      tab: "SEO Content Strategy",
      headline: "Build the content architecture before writing a word.",
      description:
        "We start with a full content gap analysis against your top competitors, identify every high-value topic cluster in your niche, and build a structured editorial roadmap that prioritises by revenue potential and competition level. No guesswork — every decision is grounded in search data and competitor analysis.",
      bullets: [
        "Full content gap analysis vs. top 3 competitors",
        "Topical authority cluster mapping",
        "Keyword-to-content mapping with difficulty scoring",
        "12-month editorial roadmap",
      ],
      image: "/studio.png",
      href: "/content-marketing-service",
    },
    {
      tab: "SEO Blog Writing",
      headline: "Long-form content that ranks and converts.",
      description:
        "Research-led long-form articles written by our in-house team. Each piece is structured for the target query, optimised for E-E-A-T signals, internally linked to your cluster, and formatted to maximise time-on-page and conversion. We don't use AI to write — we use it to research, while expert writers do the actual creation.",
      bullets: [
        "In-depth research and subject matter interviews",
        "Structured for Featured Snippets and PAA boxes",
        "Internal linking to your service pages",
        "CTA integration and conversion optimisation",
      ],
      image: "/case-study-local.png",
      href: "/content-marketing-service",
    },
    {
      tab: "Email Marketing",
      headline: "$42 ROI for every $1 spent — the highest-return channel in your stack.",
      description:
        "Email marketing that goes beyond newsletters. Automated lifecycle sequences, segmented campaigns, and broadcast emails that turn your list into a reliable monthly revenue channel. We manage deliverability, list hygiene, and segmentation to ensure your emails reach inboxes, not spam folders.",
      bullets: [
        "Welcome and onboarding sequences",
        "Segmented broadcast campaigns",
        "Abandoned cart and re-engagement flows",
        "Deliverability monitoring and list hygiene",
      ],
      image: "/work-2.png",
      href: "/email-marketing-service",
    },
    {
      tab: "Social Media Content",
      headline: "Build an audience that trusts you before they're ready to buy.",
      description:
        "Organic social media content strategy and management for LinkedIn, Instagram, and X. We create content that builds genuine authority in your industry — educational, insightful, and distinctively your brand. Follower counts are a vanity metric; we measure social by the leads and traffic it drives.",
      bullets: [
        "Platform-specific content strategy",
        "Content calendar and scheduling",
        "Engagement management",
        "Monthly analytics and optimisation",
      ],
      image: "/work-3.png",
      href: "/social-media-service",
    },
    {
      tab: "Content Repurposing",
      headline: "One piece of content. Multiple channels.",
      description:
        "Systematic repurposing of your high-performing content across every relevant channel. A long-form blog post becomes a video script, a LinkedIn carousel, an email sequence, and a Twitter thread — all pointing back to your service pages. Maximum reach from every research hour invested.",
      bullets: [
        "Video script creation from blog content",
        "LinkedIn and Instagram carousel formats",
        "Email nurture sequences from blog posts",
        "Short-form social clips from long-form video",
      ],
      image: "/hero-abstract.png",
      href: "/content-marketing-service",
    },
  ],
  features: [
    { icon: <BookOpen className="w-5 h-5 text-primary" />, title: "Topical Authority Clusters", body: "Structured content networks that signal to Google you're the definitive resource in your niche — not a random publisher." },
    { icon: <TrendingUp className="w-5 h-5 text-primary" />, title: "SEO-First Writing", body: "Every piece researched, structured, and optimised for a specific high-value query before a word is written. E-E-A-T compliant by default." },
    { icon: <Mail className="w-5 h-5 text-primary" />, title: "Email Automation", body: "Lifecycle sequences and broadcast campaigns that turn your list into a monthly revenue channel averaging $42 per dollar spent." },
    { icon: <Share2 className="w-5 h-5 text-primary" />, title: "Social Media Management", body: "Platform-specific content strategy and management that builds genuine authority — not follower counts that don't convert." },
    { icon: <Target className="w-5 h-5 text-primary" />, title: "Conversion Integration", body: "Every piece of content has a primary CTA and is mapped to a stage in your sales funnel. Traffic that doesn't convert is a wasted investment." },
    { icon: <Rss className="w-5 h-5 text-primary" />, title: "Content Repurposing", body: "One long-form piece becomes assets across email, social, video, and podcast — systematically, with every asset pointing back to your service pages." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "Performance Reporting", body: "Monthly reports showing rankings, organic traffic, and content-attributed leads and revenue. We report on what moves the business, not what makes us look good." },
    { icon: <FileText className="w-5 h-5 text-primary" />, title: "Content Auditing", body: "Quarterly audits to prune thin content, update stale posts, and consolidate duplicate pages — keeping your authority signal clean and strong." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "AI-Assisted Research", body: "We use AI for research and competitive analysis while ensuring all content is expert-written and fully E-E-A-T compliant. No AI-generated walls of text." },
  ],
  techStack: [
    {
      platform: "Ahrefs / SEMrush",
      stat: "Keyword research",
      description: "Our primary keyword research and competitor analysis tools. We use both for different purposes — Ahrefs for backlink analysis and content gap research, SEMrush for keyword tracking, position monitoring, and competitive intelligence.",
    },
    {
      platform: "Surfer SEO",
      stat: "On-page optimisation",
      description: "Used to analyse the top-ranking pages for each target query and inform the content brief — structure, length, semantic coverage, and heading hierarchy. Ensures every piece we write has the on-page signals needed to compete.",
    },
    {
      platform: "Clearscope",
      stat: "Content grading",
      description: "NLP-based content optimisation tool used to ensure every piece covers the semantic topics that Google's quality evaluators expect to see. Every article achieves a minimum 'A' grade before publication.",
    },
    {
      platform: "Klaviyo / Mailchimp",
      stat: "Email marketing",
      description: "Our preferred email platforms depending on your stack — Klaviyo for eCommerce and advanced segmentation, Mailchimp for straightforward broadcast and automation needs. We manage setup, list hygiene, and ongoing deliverability.",
    },
    {
      platform: "GA4 + Looker Studio",
      stat: "Attribution",
      description: "Every content programme runs with proper GA4 goal tracking and a custom Looker Studio dashboard. You can see exactly which articles are driving leads and revenue at any time — not just traffic and rankings.",
    },
    {
      platform: "WordPress / Webflow",
      stat: "CMS publishing",
      description: "We publish directly to your CMS on request — WordPress and Webflow most commonly. Full metadata, internal linking, schema markup, and image optimisation handled as part of every publication.",
    },
  ],
  caseStudies: [
    {
      image: "/studio.png",
      client: "Nova FinTech",
      industry: "SaaS",
      blurb: "40-article content cluster built around B2B finance and compliance topics. Full topical architecture mapped before a single word was written. Organic traffic 8x'd in 14 months with zero paid amplification.",
      metrics: [{ value: "+800%", label: "Organic traffic" }, { value: "8x", label: "Content ROI" }],
    },
    {
      image: "/case-study-local.png",
      client: "Apex Dental Group",
      industry: "Dental",
      blurb: "Local content strategy across 6 cities. Programmatic cluster pages combined with editorial content drove 1,100+ city-service combinations to map pack and organic positions.",
      metrics: [{ value: "1,100+", label: "Pages ranked" }, { value: "+86%", label: "New patients" }],
    },
    {
      image: "/work-2.png",
      client: "Hudson Outdoor",
      industry: "Home Services",
      blurb: "Topical authority content programme built around outdoor living, landscaping, and seasonal guides. 312% traffic growth in 12 months, directly attributed to $2.4M in new revenue via GA4 goal tracking.",
      metrics: [{ value: "+312%", label: "Organic traffic" }, { value: "$2.4M", label: "Attributed revenue" }],
    },
  ],
  process: [
    {
      label: "Audit",
      headline: "Identify your content gaps and opportunities against your top competitors.",
      description: "We audit your existing content estate — what you have, what's ranking, what's decaying, and what's missing. We run a full competitor gap analysis to identify every high-value topic cluster your competitors are ranking for that you aren't. This shapes the entire strategy and prioritises the highest-ROI opportunities first.",
    },
    {
      label: "Strategy",
      headline: "Build the content architecture before writing a single word.",
      description: "We create the full topical cluster map, keyword-to-content assignments for every planned piece, a prioritised 12-month editorial roadmap, and the internal linking architecture. You sign off on the strategy document before we write anything. No surprises in the execution phase — everything is agreed upfront.",
    },
    {
      label: "Create",
      headline: "Research-led, expert-written content that earns rankings and holds them.",
      description: "Our in-house writers research every piece using your industry data, competitor analysis, and Google's quality guidelines. Every piece is E-E-A-T compliant, conversion-optimised, and internally linked before it's handed for review. You approve every piece before it goes live.",
    },
    {
      label: "Optimise",
      headline: "Internal linking, schema markup, and on-page SEO on every piece.",
      description: "Every published piece is internally linked to your cluster architecture, tagged with appropriate schema markup, and optimised for the specific SERP feature we're targeting — Featured Snippet, People Also Ask, or position one. On-page optimisation is a publication requirement, not an optional step.",
    },
    {
      label: "Promote",
      headline: "Distribution through email, social, and outreach to build initial momentum.",
      description: "New content is distributed through your email list, social channels, and relevant community and outreach touchpoints to build initial traffic and links that accelerate ranking. Content that sits and waits for organic discovery ranks slower. We actively promote every piece from day one.",
    },
    {
      label: "Compound",
      headline: "Monthly tracking, updating, and pruning to protect and grow your authority.",
      description: "We track rankings and traffic for every piece monthly, update stale content to maintain positions, prune thin pages that dilute your topical authority signal, and identify new cluster opportunities as your ranking profile grows. Content is a long-term asset that requires active maintenance to compound.",
    },
  ],
  faqs: [
    {
      question: "How long before content starts ranking?",
      answer: "New content targeting lower-competition queries can rank within 4-8 weeks. Content targeting moderate competition typically takes 3-6 months. After 12 months of consistent publishing into a properly architected cluster, the compounding effect becomes clearly visible in your analytics — traffic growth accelerates rather than plateauing. We set realistic expectations for each query we target during strategy sign-off.",
    },
    {
      question: "How many articles do you publish per month?",
      answer: "It depends on your competition level, budget, and goals. Most clients start with 4-8 articles per month to build momentum. For aggressive topical authority building in a competitive niche, 12-16 per month is the target. We recommend a cadence based on your keyword targets and competitor publishing velocity — not an arbitrary number.",
    },
    {
      question: "Do you write the content or do I?",
      answer: "We do. Our in-house team handles research, writing, editing, on-page optimisation, schema, and publishing (with CMS access). You review and approve each piece before it goes live. We use AI for competitive research and brief preparation, but every article is written and edited by experienced human writers.",
    },
    {
      question: "How do you measure content ROI?",
      answer: "We set up GA4 goal tracking and attribution from day one. Monthly reports show organic traffic, keyword rankings, time-on-page, content-attributed leads, and revenue. We specifically report on the direct commercial return from content — not just traffic metrics. This means you can see which articles are driving enquiries and attribute ROI to the content programme.",
    },
    {
      question: "Do you handle email and social distribution too?",
      answer: "Yes. Email campaigns, social media management, and content repurposing across all relevant formats are available as part of our content marketing retainer. Most clients benefit from treating content, email, and social as a unified distribution system — creating content once and amplifying it across every channel your audience uses.",
    },
  ],
  hubInsights: [
    {
      image: "/studio.png",
      category: "Content Strategy",
      readTime: "8 min read",
      title: "Why Topical Authority Beats Keyword Targeting in 2026",
      excerpt: "Google's Helpful Content update fundamentally changed what earns rankings. Individual keyword optimisation still matters, but sites with deep topical coverage consistently outperform sites chasing keywords in isolation. We analysed 50 content programmes and found the architecture difference accounts for 3-4x more traffic than any other variable.",
      author: "Sarah Kowalski",
      authorRole: "Head of Content",
      href: "/blog/topical-authority-2026",
    },
    {
      image: "/case-study-local.png",
      category: "SEO Writing",
      readTime: "5 min read",
      title: "The Content Brief Format That Produces Rankings Every Time",
      excerpt: "Most content briefs are a list of keywords and a word count. That produces average content that ranks occasionally. Our brief format — built over 400+ ranking articles — specifies structure, semantic coverage, SERP feature targeting, internal linking, and conversion architecture before a word is written. Here's the full template.",
      author: "Marcus Chen",
      authorRole: "SEO Director",
      href: "/blog/content-brief-template",
    },
    {
      image: "/work-2.png",
      category: "Email Marketing",
      readTime: "6 min read",
      title: "How to Turn Your Content Programme Into a $42-per-Dollar Email Channel",
      excerpt: "Email averages the highest ROI of any digital marketing channel — but only when list building is treated as a content programme output, not an afterthought. We walk through how to structure content-to-email flows, list segmentation, and automation sequences that convert organic readers into paying customers at scale.",
      author: "Priya Anand",
      authorRole: "Email Marketing Lead",
      href: "/blog/content-to-email-funnel",
    },
  ],
};

export default function ContentMarketingHub() {
  return <ServiceHubPage data={contentMarketingData} />;
}
