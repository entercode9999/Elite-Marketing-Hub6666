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
        {/* Audit results */}
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
      "Technical SEO is the infrastructure that every other SEO investment runs on. A broken foundation means every piece of content you publish, every link you earn, and every dollar you spend on optimization is working at 40% efficiency. We fix that.",
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
    body: "Most businesses invest in content and link building before fixing their technical foundation — and then wonder why results plateau. Crawl errors, JavaScript rendering issues, broken redirect chains, and Core Web Vitals failures silently limit the impact of everything else you're spending on SEO. We fix the foundation first, then build on top of it.",
    bullets: [
      "Full technical audit before any content or link investment",
      "Core Web Vitals optimisation (LCP, CLS, FID) to green across all pages",
      "Crawl budget management for large sites (10,000+ pages)",
      "Structured data and schema implementation for all relevant content types",
      "Redirect audit and chain elimination for clean signal flow",
    ],
  },
  subServices: [
    {
      tab: "Technical Audit",
      headline: "Find every issue holding back your organic performance.",
      description:
        "A comprehensive technical audit of your entire site — crawl coverage, indexation, redirect chains, Core Web Vitals, JavaScript rendering, structured data, internal linking, and more. Delivered as a prioritised action list with clear fix instructions for your development team or ours.",
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
        "LCP, CLS, and FID/INP optimisation at the page template level. We identify the specific code-level issues causing poor performance scores and work with your development team (or ours) to fix them — prioritised by traffic volume and business impact.",
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
        "Crawl budget management for large sites, XML sitemap optimisation, robots.txt audit, noindex/nofollow strategy, and canonicalisation architecture. We ensure Google is spending its crawl budget on your highest-value pages.",
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
      headline: "Schema markup that wins rich snippets.",
      description:
        "Implementation of schema markup across all relevant content types — LocalBusiness, Article, FAQ, HowTo, Product, Review, BreadcrumbList. Structured data that earns rich snippets, improves click-through rates, and helps Google better understand your content.",
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
      headline: "Eliminate redirect chains that bleed your link equity.",
      description:
        "Every redirect chain and loop costs you PageRank. We audit every redirect on your site, identify chains and loops, map the correct final destination for each URL, and implement clean 301s that preserve full link equity.",
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
    { icon: <Settings className="w-5 h-5 text-primary" />, title: "Full Technical Audit", body: "Crawl analysis, indexation review, redirect chains, and structured data — delivered as a prioritised fix list." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Core Web Vitals", body: "LCP, CLS, and INP optimisation at the code level. Green scores across every page template." },
    { icon: <Search className="w-5 h-5 text-primary" />, title: "Crawl & Indexation", body: "Crawl budget management, sitemap optimisation, and canonicalisation strategy for sites of any size." },
    { icon: <Code2 className="w-5 h-5 text-primary" />, title: "JavaScript SEO", body: "Rendering analysis comparing what users see vs. what Googlebot sees. SSR and SSG recommendations." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "International SEO", body: "Hreflang implementation, ccTLD strategy, and geo-targeting configuration for multi-language sites." },
    { icon: <RefreshCw className="w-5 h-5 text-primary" />, title: "Redirect Management", body: "Full redirect chain audit and elimination. Clean 301s that preserve every point of your accumulated link equity." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "Structured Data", body: "Schema markup across all relevant types — LocalBusiness, FAQ, Article, Product, Review, and more." },
    { icon: <Shield className="w-5 h-5 text-primary" />, title: "Security & HTTPS", body: "HTTPS migration, mixed content resolution, and security header configuration for full SSL compliance." },
    { icon: <TrendingUp className="w-5 h-5 text-primary" />, title: "Log File Analysis", body: "Server log analysis to understand exactly how Googlebot is crawling your site and where budget is being wasted." },
  ],
  caseStudies: [
    {
      image: "/case-study-saas.png",
      client: "Nova FinTech",
      industry: "SaaS",
      blurb: "Full technical audit revealed 340+ crawl errors and 28 redirect chains. Fixed in 6 weeks. Organic traffic +165%.",
      metrics: [{ value: "+165%", label: "Organic traffic" }, { value: "340+", label: "Issues fixed" }],
    },
    {
      image: "/case-study-realestate.png",
      client: "Prime Realty Group",
      industry: "Real Estate",
      blurb: "Core Web Vitals overhaul on 2,400-page property site. LCP improved from 6.8s to 1.4s. Rankings lifted across all key queries.",
      metrics: [{ value: "1.4s", label: "LCP (was 6.8s)" }, { value: "+88%", label: "Rankings" }],
    },
    {
      image: "/industry-ecommerce.png",
      client: "Coastal Collective",
      industry: "eCommerce",
      blurb: "Post-redesign technical SEO rescue. Recovered from 60% traffic drop caused by missing redirects.",
      metrics: [{ value: "100%", label: "Traffic recovered" }, { value: "< 30 days", label: "Recovery time" }],
    },
  ],
  process: [
    { label: "Crawl", headline: "Crawl your entire site and map every technical issue.", description: "We use Screaming Frog and custom scripts to crawl your complete site — identifying crawl errors, redirect chains, duplicate content, missing metadata, and every other technical issue affecting your performance." },
    { label: "Prioritise", headline: "Rank issues by revenue impact, not just severity.", description: "Not all technical issues are equal. We prioritise the fix list by their likely impact on rankings and traffic — so your development resources go to the highest-ROI fixes first." },
    { label: "Fix", headline: "Implement fixes ourselves or work with your dev team.", description: "We either implement fixes directly (for CMS-accessible issues) or provide your development team with precise, actionable implementation instructions for each item." },
    { label: "Verify", headline: "Verify every fix with a post-implementation crawl.", description: "After each fix sprint, we re-crawl the affected pages to verify the fix is implemented correctly and hasn't introduced new issues." },
    { label: "Monitor", headline: "Monthly monitoring for new issues before they compound.", description: "Technical SEO issues compound over time if unmonitored. We run monthly crawls and set up GSC alerts to catch new issues before they affect your rankings." },
    { label: "Optimise", headline: "Ongoing optimisation as your site grows.", description: "As you publish new content, add pages, or make site changes, we maintain the technical infrastructure that supports your organic growth — continuously, not just at audit time." },
  ],
  faqs: [
    { question: "Do I need a technical SEO audit?", answer: "If your site has more than 50 pages, has undergone a redesign in the last 3 years, or has seen unexplained traffic drops, yes. Technical SEO issues are often invisible to site owners but clearly visible to Googlebot." },
    { question: "How long does a technical audit take?", answer: "For most sites (under 10,000 pages), we deliver a complete technical audit with prioritised fix list within 10 business days. Large enterprise sites (100,000+ pages) take 3–4 weeks." },
    { question: "Can you fix the issues, or just identify them?", answer: "Both. For CMS-level issues (meta tags, redirects, schema), we can implement fixes directly. For code-level issues, we provide detailed implementation instructions and work alongside your development team to verify fixes." },
    { question: "How quickly will I see results from technical fixes?", answer: "Simple fixes (redirects, canonicals, meta tags) can show ranking impact within 2–4 weeks of implementation as Google recrawls and reindexes. Core Web Vitals improvements can show ranking impact within 1–2 months." },
    { question: "Do you work with enterprise-scale sites?", answer: "Yes. We've worked on sites with 500,000+ pages. Enterprise technical SEO involves crawl budget management, log file analysis, and faceted navigation strategy — we handle all of it." },
  ],
};

export default function TechnicalSeoHub() {
  return <ServiceHubPage data={technicalSeoData} />;
}
