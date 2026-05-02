import { Settings, Zap, Globe, BarChart2, Code2, Search, RefreshCw, Shield, TrendingUp } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
        ))}
        <div className="flex-1 bg-white rounded text-xs text-gray-400 px-3 py-1 ml-2">audit.outlier.ca</div>
      </div>
      <div className="bg-white p-4">
        <p className="text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-3">Site Audit Results</p>
        {[
          { label: "Crawl errors", before: 142, after: 0, color: "#ef4444", ok: "#22c55e" },
          { label: "Core Web Vitals", before: 38, after: 97, color: "#ef4444", ok: "#22c55e" },
          { label: "Page speed", before: 44, after: 96, color: "#f59e0b", ok: "#1a56ff" },
        ].map((item) => (
          <div key={item.label} className="mb-3">
            <div className="flex justify-between text-[9px] mb-1">
              <span className="text-gray-500 font-medium">{item.label}</span>
              <span className="font-bold text-[#22c55e]">{item.before} → {item.after}</span>
            </div>
            <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
              <div className="h-full rounded-full transition-all" style={{ width: `${item.after}%`, background: item.ok }} />
            </div>
          </div>
        ))}
        <div className="mt-3 bg-[#0a0c12] rounded-lg p-3">
          <p className="text-[9px] text-white/30 mb-1.5 uppercase tracking-widest">Lighthouse scores</p>
          <div className="grid grid-cols-4 gap-1">
            {[{ l: "Perf", v: 98 }, { l: "Access", v: 100 }, { l: "SEO", v: 100 }, { l: "Best P.", v: 96 }].map((s) => (
              <div key={s.l} className="text-center">
                <p className="text-base font-black text-white">{s.v}</p>
                <p className="text-[8px] text-white/30">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100">
      <p className="text-xs font-bold text-gray-900">Page Speed</p>
      <p className="text-2xl font-black text-[#22c55e]">98/100</p>
    </div>
    <div className="absolute -top-3 -left-3 bg-[#0891b2] rounded-xl px-3 py-2 shadow-xl">
      <p className="text-white font-black text-xs">Technical SEO</p>
    </div>
  </div>
);

const technicalSeoData: HubData = {
  slug: "technical-seo-service",
  label: "TECHNICAL SEO",
  breadcrumb: "Technical SEO",
  hero: {
    headline: "Fix the Foundation. Then Build Traffic That Lasts.",
    italic: "No rankings without it.",
    description:
      "Technical SEO is the infrastructure that every other SEO investment runs on. A broken foundation means every piece of content you publish, every link you earn, and every dollar you spend on optimisation is working at 40% efficiency. We fix that.",
    cta: "Get a Free Technical Audit",
    ctaHref: "/contact",
    badges: ["Google Partner", "Screaming Frog Certified", "Core Web Vitals Expert", "10+ Years"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "97%", label: "Avg. crawl score after audit" },
    { value: "< 2s", label: "Avg. LCP after optimisation" },
    { value: "+48%", label: "Avg. organic traffic lift" },
    { value: "10+", label: "Years of Experience" },
  ],
  intro: {
    eyebrow: "Why technical SEO comes first",
    headline: "Every other SEO investment is limited by your technical foundation.",
    body: "Most businesses invest in content and link building before fixing their technical foundation — and then wonder why results plateau. Crawl errors, JavaScript rendering issues, broken redirect chains, and Core Web Vitals failures silently limit the impact of everything else you're spending on SEO. We find and fix the foundation first, then build on top of it.",
    secondBody: "Technical SEO issues are often invisible to site owners. You can't see a broken redirect chain in your website editor. You can't feel a slow LCP without running a Lighthouse test. But Googlebot sees all of it — and it affects how efficiently Google indexes your content and how it ranks your pages. The businesses that invest in technical health consistently outperform their competitors at every content investment level.",
    bullets: [
      "Full technical audit before any content or link investment",
      "Core Web Vitals optimisation (LCP, CLS, INP) to green across all pages",
      "Crawl budget management for large sites (10,000+ pages)",
      "Structured data and schema implementation for all relevant content types",
      "Redirect audit and chain elimination for clean signal flow",
    ],
  },
  proofSection: {
    eyebrow: "Why technical health compounds",
    headline: "A clean technical foundation multiplies the return on every other SEO investment.",
    body: "Think of technical SEO as the plumbing in a building. When it works, no one notices. When it doesn't, everything else underperforms. A site with crawl errors, broken redirect chains, and failing Core Web Vitals scores isn't just losing rankings — it's diluting the value of every piece of content it publishes and every backlink it earns.",
    secondBody: "We've inherited technical SEO situations where fixing the foundation — with no new content, no new links — produced a 40-60% lift in organic traffic within 60 days. The content was already there. The links were already there. The foundation was preventing Google from seeing them properly. Technical SEO is often the fastest path to organic growth for established sites because it unlocks value that already exists.",
    bullets: [
      "We crawl your entire site with Screaming Frog plus custom scripts before writing a single recommendation — no guessing, no pattern-matching from similar sites.",
      "Fixes are prioritised by revenue impact: we tell you which issues are costing you the most traffic and fix those first, regardless of how 'severe' they look in an audit report.",
      "For CMS-level fixes (redirects, canonicals, meta tags), we implement directly. For code-level fixes, we provide implementation specs and work alongside your development team to verify.",
      "After every fix sprint, we re-crawl the affected pages to verify fixes are implemented correctly and haven't introduced new issues — before closing the item.",
      "We set up GSC alerts and run monthly crawls to catch new technical issues before they compound — because a clean technical state requires maintenance, not just a one-time audit.",
      "Our Core Web Vitals work produces measurable results: average LCP improvement from 5.2s to 1.8s, with Lighthouse scores consistently reaching 95+ across all key page templates.",
    ],
  },
  subServices: [
    {
      tab: "Technical Audit",
      headline: "Find every issue holding back your organic performance.",
      description:
        "A comprehensive technical audit of your entire site — crawl coverage, indexation, redirect chains, Core Web Vitals, JavaScript rendering, structured data, internal linking, and more. Delivered as a prioritised action list with clear implementation instructions for your development team or ours.",
      bullets: [
        "Full crawl analysis with Screaming Frog + custom scripts",
        "JavaScript rendering audit (Googlebot rendering comparison)",
        "Core Web Vitals analysis by page template",
        "Internal linking audit and equity flow mapping",
      ],
      image: "/case-study-saas.png",
      href: "/technical-seo-service",
    },
    {
      tab: "Core Web Vitals",
      headline: "Green across all three Core Web Vitals metrics.",
      description:
        "LCP, CLS, and INP optimisation at the page template level. We identify the specific code-level issues causing poor performance scores and work with your development team (or ours) to fix them — prioritised by traffic volume and business impact. Every fix is verified with before-and-after Lighthouse scores.",
      bullets: [
        "Page-level CWV analysis and fix prioritisation",
        "Image optimisation and lazy loading implementation",
        "Third-party script audit and deferral",
        "Layout shift identification and CSS fixes",
      ],
      image: "/case-study-home.png",
      href: "/technical-seo-service",
    },
    {
      tab: "Crawl & Indexation",
      headline: "Make sure Google can find and index everything that matters.",
      description:
        "Crawl budget management for large sites, XML sitemap optimisation, robots.txt audit, noindex/nofollow strategy, and canonicalisation architecture. We ensure Google is spending its crawl budget on your highest-value pages — not on thin, duplicate, or irrelevant content.",
      bullets: [
        "Crawl budget analysis and optimisation recommendations",
        "XML sitemap audit and optimisation",
        "Robots.txt review and configuration",
        "Noindex and canonicalisation strategy",
      ],
      image: "/case-study-saas.png",
      href: "/technical-seo-service",
    },
    {
      tab: "Structured Data",
      headline: "Schema markup that wins rich snippets and improves click-through rates.",
      description:
        "Implementation of schema markup across all relevant content types — LocalBusiness, Article, FAQ, HowTo, Product, Review, BreadcrumbList. Structured data that earns rich snippets, improves CTR in search results, and helps Google understand the context and relationships in your content.",
      bullets: [
        "LocalBusiness and Service schema for local SEO",
        "FAQ and HowTo schema for featured snippets",
        "Article and BreadcrumbList for content pages",
        "Product and Review schema for eCommerce",
      ],
      image: "/case-study-saas.png",
      href: "/technical-seo-service",
    },
    {
      tab: "Redirect Audit",
      headline: "Eliminate redirect chains that bleed your accumulated link equity.",
      description:
        "Every redirect chain and loop costs you PageRank. We audit every redirect on your site, identify chains and loops, map the correct final destination for each URL, and implement clean 301s that preserve full link equity. Common on sites that have undergone multiple redesigns or CMS migrations.",
      bullets: [
        "Full redirect chain and loop identification",
        "URL mapping and correct destination assignment",
        "301 redirect implementation and verification",
        "Post-fix crawl monitoring to confirm clean resolution",
      ],
      image: "/case-study-realestate.png",
      href: "/technical-seo-service",
    },
  ],
  features: [
    { icon: <Settings className="w-5 h-5 text-primary" />, title: "Full Technical Audit", body: "Crawl analysis, indexation review, redirect chains, and structured data — delivered as a prioritised fix list with clear implementation specs." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Core Web Vitals", body: "LCP, CLS, and INP optimisation at the code level. Green Lighthouse scores across every page template, verified after every fix sprint." },
    { icon: <Search className="w-5 h-5 text-primary" />, title: "Crawl & Indexation", body: "Crawl budget management, sitemap optimisation, and canonicalisation strategy for sites of any size — from 50 pages to 500,000." },
    { icon: <Code2 className="w-5 h-5 text-primary" />, title: "JavaScript SEO", body: "Rendering analysis comparing what users see vs. what Googlebot sees. SSR and SSG recommendations for JavaScript-heavy sites." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "International SEO", body: "Hreflang implementation, ccTLD strategy, and geo-targeting configuration for multi-language and multi-region sites." },
    { icon: <RefreshCw className="w-5 h-5 text-primary" />, title: "Redirect Management", body: "Full redirect chain audit and elimination. Clean 301s that preserve every point of your accumulated link equity after any migration." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "Structured Data", body: "Schema markup across all relevant types — LocalBusiness, FAQ, Article, Product, Review, and more. Verified with Google Rich Results Test." },
    { icon: <Shield className="w-5 h-5 text-primary" />, title: "Security & HTTPS", body: "HTTPS migration, mixed content resolution, and security header configuration. Full SSL compliance with HSTS implementation." },
    { icon: <TrendingUp className="w-5 h-5 text-primary" />, title: "Log File Analysis", body: "Server log analysis to understand exactly how Googlebot is crawling your site, where budget is wasted, and which pages are being ignored." },
  ],
  techStack: [
    {
      platform: "Screaming Frog",
      stat: "Site crawler",
      description: "Our primary crawl tool for technical audits. We use custom extraction scripts and crawl configurations to identify every issue class — redirects, missing metadata, Core Web Vitals data, structured data errors, and internal link equity flow.",
    },
    {
      platform: "Google Search Console",
      stat: "Google data",
      description: "The authoritative source for how Google is indexing your site. We set up proper GSC configuration, monitor coverage reports, and build custom alerts for new indexation errors, Core Web Vitals failures, and manual actions.",
    },
    {
      platform: "Lighthouse / PageSpeed Insights",
      stat: "Performance",
      description: "We run Lighthouse audits in CI/CD pipelines so performance regressions are caught at the code level before deployment. Every Core Web Vitals fix is verified with before-and-after Lighthouse scores across all key page templates.",
    },
    {
      platform: "Ahrefs",
      stat: "Link analysis",
      description: "Used for backlink auditing, toxic link identification, and tracking how link equity flows through your site architecture. Essential for understanding the true impact of redirect chain elimination and internal linking improvements.",
    },
    {
      platform: "Cloudflare",
      stat: "CDN & caching",
      description: "For sites where server-level performance is a limiting factor, we implement Cloudflare CDN with optimal caching configuration. Often the fastest path to Core Web Vitals improvement for sites on shared hosting or slow server infrastructure.",
    },
    {
      platform: "Google Tag Manager",
      stat: "Tracking",
      description: "Proper GTM implementation ensures analytics and conversion tracking don't interfere with page performance. We audit and optimise tag firing rules to minimise the performance impact of third-party scripts.",
    },
  ],
  caseStudies: [
    {
      image: "/case-study-saas.png",
      client: "Nova FinTech",
      industry: "SaaS",
      blurb: "Full technical audit revealed 340+ crawl errors and 28 redirect chains accumulated across three site migrations. Fixed in 6 weeks. Organic traffic lifted 165% within 90 days of implementation.",
      metrics: [{ value: "+165%", label: "Organic traffic" }, { value: "340+", label: "Issues fixed" }],
    },
    {
      image: "/case-study-realestate.png",
      client: "Prime Realty Group",
      industry: "Real Estate",
      blurb: "Core Web Vitals overhaul on a 2,400-page property site. LCP improved from 6.8s to 1.4s. Page rankings lifted across all key queries within 8 weeks of Lighthouse scores going green.",
      metrics: [{ value: "1.4s", label: "LCP (was 6.8s)" }, { value: "+88%", label: "Rankings" }],
    },
    {
      image: "/industry-ecommerce.png",
      client: "Coastal Collective",
      industry: "eCommerce",
      blurb: "Post-redesign technical SEO rescue. Previous agency's missing redirect map caused a 60% traffic drop on launch. Full redirect mapping and crawl recovery completed in under 30 days.",
      metrics: [{ value: "100%", label: "Traffic recovered" }, { value: "< 30 days", label: "Recovery time" }],
    },
  ],
  process: [
    {
      label: "Crawl",
      headline: "Crawl your entire site and document every technical issue class.",
      description: "We use Screaming Frog and custom scripts to crawl your complete site — identifying crawl errors, redirect chains, duplicate content, missing or broken metadata, JavaScript rendering discrepancies, and every other technical issue class. The crawl output is the ground truth for everything that follows.",
    },
    {
      label: "Prioritise",
      headline: "Rank every issue by revenue impact — not just technical severity.",
      description: "Not all technical issues are equal. A crawl error on an orphaned page matters less than a redirect chain on your ten highest-traffic URLs. We prioritise the fix list by likely impact on rankings and traffic — so your development resources go to the highest-ROI fixes first. You always know which issues we're working on and why.",
    },
    {
      label: "Fix",
      headline: "Implement fixes ourselves or work directly with your development team.",
      description: "For CMS-accessible issues — meta tags, redirects, schema markup, robots.txt — we implement fixes directly. For code-level issues, we provide your development team with precise implementation instructions and expected outcomes for each item. No ambiguity about what needs to change.",
    },
    {
      label: "Verify",
      headline: "Re-crawl every fixed item to confirm correct implementation.",
      description: "After each fix sprint, we re-crawl the affected pages to verify the fix is implemented correctly and hasn't introduced new issues. We don't close an item until we've confirmed it's resolved in a fresh crawl. Quality control is built into every fix sprint, not an afterthought.",
    },
    {
      label: "Monitor",
      headline: "Monthly crawls and GSC alerts to catch new issues before they compound.",
      description: "Technical SEO issues compound over time if unmonitored. New content, site updates, and CMS changes regularly introduce new technical issues. We run monthly crawls and maintain GSC alert configurations to catch problems early — before they affect your organic performance.",
    },
    {
      label: "Optimise",
      headline: "Ongoing technical maintenance as your site grows and changes.",
      description: "As you publish new content, add pages, run promotions, or make site architecture changes, we maintain the technical infrastructure that supports your organic growth. Technical SEO is not a one-time project — it's an ongoing practice that compounds in value with consistent maintenance.",
    },
  ],
  faqs: [
    {
      question: "How do I know if my site has technical SEO issues?",
      answer: "If your site has more than 50 pages, has undergone a redesign or CMS migration in the last three years, or has seen unexplained organic traffic drops, there are almost certainly technical issues present. Most technical SEO problems are invisible to site owners because they don't affect how the site looks or functions for users — only for Googlebot. A free audit is the fastest way to find out what's actually happening.",
    },
    {
      question: "How long does a technical audit take?",
      answer: "For most sites under 10,000 pages, we deliver a complete technical audit with a prioritised fix list within 10 business days of receiving site access. Large enterprise sites with 100,000+ pages take 3-4 weeks. We don't deliver a raw crawl output — we deliver a structured, prioritised document that your team or ours can act on immediately.",
    },
    {
      question: "Can you fix the issues, or just identify them?",
      answer: "Both. For CMS-level issues — meta tags, redirects, robots.txt, XML sitemaps, schema markup — we implement fixes directly if you give us CMS access. For code-level issues — JavaScript rendering, page performance, layout shifts — we provide detailed implementation specifications and work alongside your development team to verify each fix is correctly implemented.",
    },
    {
      question: "How quickly will I see results from technical fixes?",
      answer: "Simple fixes like redirect implementation, canonical tags, and meta data corrections typically show ranking and indexation impact within 2-4 weeks as Google recrawls and reindexes affected pages. Core Web Vitals improvements show ranking impact within 4-8 weeks of scores going green. For sites with severe crawl issues, simply making key pages crawlable can produce dramatic ranking improvements in days.",
    },
    {
      question: "Do you work with large enterprise sites?",
      answer: "Yes. We've worked on sites with 500,000+ pages. Enterprise technical SEO involves crawl budget management, log file analysis, faceted navigation strategy, international SEO architecture, and multi-domain canonicalisation — all of which require different approaches than small-site technical work. We scope enterprise projects separately after a discovery call.",
    },
  ],
  hubInsights: [
    {
      image: "/case-study-saas.png",
      category: "Technical SEO",
      readTime: "7 min read",
      title: "The Technical SEO Audit Process We Run on Every New Client Site",
      excerpt: "Most technical SEO audits are raw crawl outputs with a severity score next to each issue. That's not actionable. Our audit process produces a prioritised fix list ranked by expected traffic impact — so development resources go to the issues costing you the most organic revenue first. Here's the full methodology.",
      author: "James Okafor",
      authorRole: "Technical SEO Lead",
      href: "/blog/technical-seo-audit-process",
    },
    {
      image: "/case-study-realestate.png",
      category: "Core Web Vitals",
      readTime: "6 min read",
      title: "Core Web Vitals Fix Priority: Which Metric Moves Rankings Fastest",
      excerpt: "LCP, CLS, and INP each affect rankings differently — and fixing each one requires different interventions. After optimising Core Web Vitals across 80+ client sites, we have a clear picture of which fixes produce the fastest ranking impact and which ones are important for completeness but slow to show results. Here's what to fix first.",
      author: "Marcus Chen",
      authorRole: "Performance Specialist",
      href: "/blog/core-web-vitals-fix-priority",
    },
    {
      image: "/industry-ecommerce.png",
      category: "Site Migration",
      readTime: "5 min read",
      title: "How to Redesign Your Website Without Destroying Your SEO Rankings",
      excerpt: "A website redesign without a proper technical SEO migration plan is one of the most reliable ways to wipe out years of organic authority. We've completed over 40 migrations without a meaningful ranking loss and rescued dozens of businesses from bad ones. Here's the complete pre-launch checklist we use on every migration.",
      author: "Sarah Kowalski",
      authorRole: "SEO Strategist",
      href: "/blog/redesign-without-losing-seo",
    },
  ],
};

export default function TechnicalSeoHub() {
  return <ServiceHubPage data={technicalSeoData} />;
}
