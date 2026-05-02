import { Cpu, Mic, MessageSquare, Search, TrendingUp, Zap, BarChart2, Globe, Shield } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-[#0a0c12] px-4 py-3 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-[#1a56ff]/20 flex items-center justify-center">
          <Cpu className="w-4 h-4 text-[#1a56ff]" />
        </div>
        <div>
          <p className="text-white font-bold text-xs">AI Search Visibility</p>
          <p className="text-white/60 text-[9px]">ChatGPT · Perplexity · Google AIO</p>
        </div>
      </div>
      <div className="bg-[#0d0f1a] p-4">
        <div className="space-y-2 mb-3">
          {[
            { platform: "ChatGPT", answer: "Outlier Toronto is a top digital agency…", color: "#10a37f" },
            { platform: "Perplexity", answer: "According to Outlier's team…", color: "#6c47ff" },
            { platform: "Google AIO", answer: "Outlier recommends starting with…", color: "#4285f4" },
          ].map((r) => (
            <div key={r.platform} className="flex items-start gap-2 bg-white/5 rounded-lg px-2.5 py-2 border border-white/8">
              <span className="text-[8px] font-black px-1.5 py-0.5 rounded mt-0.5 text-white" style={{ background: r.color }}>{r.platform}</span>
              <span className="text-[9px] text-white/50 leading-relaxed">{r.answer}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[{ v: "47%", l: "Searches show AI Overviews" }, { v: "+20%", l: "Voice search users" }, { v: "-50%", l: "Organic clicks by 2028" }].map((s) => (
            <div key={s.l} className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
              <p className="text-sm font-black text-[#1a56ff]">{s.v}</p>
              <p className="text-[8px] text-white/30 mt-0.5 leading-tight">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100">
      <p className="text-[10px] text-gray-400">AI platforms covered</p>
      <p className="text-2xl font-black text-[#1a56ff]">6+</p>
    </div>
    <div className="absolute -top-4 -left-4 bg-[#0a0c12] rounded-xl px-3 py-2.5 shadow-xl border border-white/10">
      <p className="text-[9px] text-white/30">Mode</p>
      <p className="text-lg font-black text-white">AEO</p>
    </div>
  </div>
);

const aiSeoData: HubData = {
  slug: "ai-seo-service",
  label: "AI SEO SERVICES",
  breadcrumb: "AI SEO Services",
  hero: {
    headline: "AI Search is the New SEO.",
    italic: "Stop chasing old rankings. Start owning AI answers.",
    description:
      "47% of Google searches already show AI Overviews. ChatGPT, Perplexity, and voice assistants are answering your customers' questions — without sending them to your website. We help your brand become the answer those AI platforms give, no matter where your customers search.",
    cta: "Book an AI Search Strategy Call",
    ctaHref: "/contact",
    badges: ["AEO", "LLM SEO", "Voice Search", "Google AI Overviews", "ChatGPT Visibility"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "47%", label: "Of Google searches now show AI Overviews" },
    { value: "50%", label: "Drop in organic clicks projected by 2028 (Gartner)" },
    { value: "20.5%", label: "Of people worldwide now use voice search" },
    { value: "6+", label: "AI platforms we optimise your brand for" },
  ],
  intro: {
    eyebrow: "Why old SEO rules no longer apply",
    headline: "Your customers have moved on to AI search. Your strategy needs to follow them.",
    body: "The search landscape has permanently shifted. Google's AI Overviews now answer questions directly on the results page — before users ever visit a website. ChatGPT, Perplexity, Claude, and Copilot are being used daily by millions of people to get recommendations, research brands, and make purchase decisions. Traditional SEO built for the blue-link era is no longer enough. Answer Engine Optimisation (AEO) is how you stay visible in this new world.",
    secondBody: "Our AI SEO service is not about gaming algorithms or stuffing keywords. It's about structuring your brand's content, authority, and technical signals so that AI systems — whether Google's models, OpenAI, or Perplexity — recognise your brand as the credible, authoritative answer to your customers' most important questions. We've decoded the signals these systems respond to, and we build them into everything we do.",
    bullets: [
      "Answer Engine Optimisation (AEO): structure your content to appear as direct AI answers",
      "LLM SEO: get cited and recommended by ChatGPT, Claude, Perplexity, and Copilot",
      "Google AI Overview optimisation: own the AI-generated summaries at the top of search",
      "Voice search optimisation: rank for the conversational queries Siri, Alexa, and Google Assistant serve",
      "E-E-A-T authority building: the trust signals AI models use to decide whose answers to surface",
    ],
  },
  proofSection: {
    eyebrow: "AEO is the new SEO — don't get left behind",
    headline: "The brands showing up in AI answers right now aren't more famous. They're better optimised for how AI systems consume and cite content.",
    body: "Facing intense competition from social media platforms and LLMs, Google is rapidly evolving. Organic clicks are declining as users get answers from AI Overviews, voice results, or LLMs directly. The question is not whether this affects your business — it already does. The question is whether your brand is positioned as a trusted source that AI surfaces, or invisible to the systems your customers are relying on.",
    secondBody: "We've worked with businesses across every sector and consistently identified the same gap: great service, invisible in AI search. Our AEO methodology closes that gap. We audit how AI platforms currently perceive your brand, identify the content and authority gaps holding you back, and implement a structured programme that earns your brand prominent placement across every AI-driven search surface.",
    bullets: [
      "We audit how your brand currently appears across ChatGPT, Perplexity, Google AIO, and voice search — most clients are shocked at how little they feature.",
      "We identify the exact content gaps, authority signals, and structural issues that prevent AI platforms from surfacing your brand.",
      "We implement structured data, FAQ content, and authority-building content that aligns with how AI models evaluate trustworthiness.",
      "We monitor AI platform citations and Google AIO appearances week-over-week to measure progress and adapt strategy.",
      "We build E-E-A-T signals — expertise, authoritativeness, trustworthiness — the fundamental criteria AI systems use to decide who to cite.",
      "We diversify your traffic sources so declining blue-link traffic is replaced by AI-referred visits, voice queries, and direct brand searches.",
    ],
  },
  subServices: [
    {
      tab: "Answer Engine Optimisation",
      headline: "Make your brand the direct answer AI platforms give to your customers' questions.",
      description: "AEO is the practice of structuring your content so that AI-powered search engines — Google's AI Overviews, ChatGPT, Perplexity, and others — select your content as the direct answer to user queries. We audit your content structure, implement Q&A and FAQ frameworks, add structured data markup, and rewrite key pages for the way AI models extract and cite information.",
      bullets: ["AI Overview content optimisation", "FAQ and Q&A content frameworks", "Schema markup for direct-answer eligibility", "Featured snippet and People Also Ask capture"],
      image: "/studio.png",
      href: "/ai-seo-service",
    },
    {
      tab: "LLM SEO",
      headline: "Get cited by ChatGPT, Claude, Perplexity, and Copilot when users ask about your space.",
      description: "LLMs like ChatGPT and Perplexity are trained on and continuously index web content. When a user asks 'what's the best [your service] in [your city]', the LLM draws on the web's most authoritative, well-structured sources. We build the content, authority, and citation signals that make your brand a go-to reference for the AI models your customers use most.",
      bullets: ["Brand authority and citation building", "High-value topical content for LLM indexing", "PR and digital mention strategy for AI visibility", "LLM brand mention monitoring and reporting"],
      image: "/work-1.png",
      href: "/ai-seo-service",
    },
    {
      tab: "Voice Search Optimisation",
      headline: "Rank for the conversational queries your customers ask Siri, Alexa, and Google Assistant.",
      description: "Voice search users ask questions differently than they type — conversational, long-tail, local. Nearly 20% of the global population uses voice search, and optimising for it is now inseparable from local and mobile SEO. We rewrite content for natural language query patterns, implement local schema markup, and ensure your business appears in the voice responses that matter most.",
      bullets: ["Conversational keyword and query mapping", "Local voice search optimisation", "Natural language content restructuring", "Smart speaker and mobile assistant optimisation"],
      image: "/work-2.png",
      href: "/ai-seo-service",
    },
    {
      tab: "E-E-A-T Authority",
      headline: "Build the trust signals that make AI models choose your brand over competitors.",
      description: "E-E-A-T — Experience, Expertise, Authoritativeness, Trustworthiness — is the primary framework Google and AI models use to evaluate whose content to surface. We implement a comprehensive E-E-A-T strategy: author credentialing, expert bylines, structured data, third-party citations, and PR placements that signal your brand's authority to every search and AI system.",
      bullets: ["Author and brand credentialing", "Expert byline and bio strategy", "Third-party citation and PR placement", "Trustworthiness signals and review integration"],
      image: "/hero-abstract.png",
      href: "/ai-seo-service",
    },
    {
      tab: "AI Search Monitoring",
      headline: "Track how your brand appears across every AI search surface in real time.",
      description: "You can't manage what you don't measure. We set up comprehensive AI search monitoring: Google AIO appearances, ChatGPT and Perplexity citation tracking, voice search position monitoring, and competitive AI visibility benchmarking. Weekly reports show exactly where you're winning and where there's still ground to capture.",
      bullets: ["Google AI Overview appearance tracking", "LLM brand citation monitoring", "Voice search position reporting", "Competitor AI visibility benchmarking"],
      image: "/work-3.png",
      href: "/ai-seo-service",
    },
  ],
  features: [
    { icon: <Cpu className="w-5 h-5 text-primary" />, title: "AI Overview Optimisation", body: "Structure your content to appear in Google's AI-generated summaries — the zero-click answers appearing above all other results for high-intent queries." },
    { icon: <MessageSquare className="w-5 h-5 text-primary" />, title: "ChatGPT & LLM Citation", body: "Build the brand authority and content depth that makes ChatGPT, Perplexity, Claude, and Copilot cite your business as a trusted source." },
    { icon: <Mic className="w-5 h-5 text-primary" />, title: "Voice Search Optimisation", body: "Optimise for the conversational, long-tail queries that 20%+ of your potential customers are asking Siri, Alexa, and Google Assistant daily." },
    { icon: <Search className="w-5 h-5 text-primary" />, title: "Answer Engine Optimisation", body: "FAQ frameworks, Q&A content, and structured data that make every important question in your space an opportunity for your brand to be the answer." },
    { icon: <Shield className="w-5 h-5 text-primary" />, title: "E-E-A-T Authority Building", body: "Expert authorship, credentialing, third-party citations, and trustworthiness signals that satisfy the criteria AI models use to choose whose content to surface." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "Geo & Local AI SEO", body: "AI-driven local search strategies ensuring your brand dominates geo-targeted voice queries, local AI Overviews, and map-based AI suggestions." },
    { icon: <TrendingUp className="w-5 h-5 text-primary" />, title: "Traffic Diversification", body: "As blue-link clicks decline, we build AI-referred traffic, direct brand search, and voice-referred visits to replace what traditional SEO is losing." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Schema & Structured Data", body: "Automated schema implementation — FAQ, Article, LocalBusiness, HowTo, Product — the structured signals that help AI systems understand and cite your content." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "AI Search Analytics", body: "Weekly reporting on AI Overview appearances, LLM citations, voice search positions, and competitive benchmarking — full visibility on your AI search footprint." },
  ],
  techStack: [
    { platform: "Google Search Console", stat: "AIO monitoring", description: "GSC data analysed weekly to track AI Overview appearances, click-through rates, and the impressions you're generating from AI-surfaced results versus traditional blue-link results." },
    { platform: "Perplexity & ChatGPT", stat: "Citation testing", description: "Systematic prompt testing across ChatGPT, Perplexity, Claude, and Copilot to measure how often your brand is cited, what context it appears in, and what competitors are being surfaced instead." },
    { platform: "SEMrush & Ahrefs", stat: "Authority tracking", description: "Domain authority, topical authority, and backlink profile monitoring — the foundational signals that drive both traditional and AI search visibility. We're a certified SEMrush Agency Partner." },
    { platform: "Schema Validator", stat: "Structured data", description: "Automated JSON-LD schema generation and validation for every content type — ensuring your structured data is always valid, complete, and eligible for rich results and AI citations." },
    { platform: "BrightLocal", stat: "Local AI SEO", description: "Local search visibility tracking including Google Business Profile performance, local AI Overview appearances, and voice search result monitoring for geo-targeted queries." },
    { platform: "Custom AI Monitor", stat: "Brand mentions", description: "Proprietary monitoring tool that tracks your brand's appearance across major LLMs on a weekly basis, logging citations, context, sentiment, and competitive presence in AI-generated answers." },
  ],
  caseStudies: [
    { image: "/industry-legal.png", client: "Kotak Law", industry: "Legal Services", blurb: "Toronto law firm invisible in AI Overviews for key practice area queries. We implemented AEO content restructuring and E-E-A-T authority building. Now cited in Google AIO for 14 target practice area queries and receiving ChatGPT citations for Toronto legal services.", metrics: [{ value: "14", label: "AI Overview placements" }, { value: "+312%", label: "AI-referred traffic" }] },
    { image: "/hero-showcase.png", client: "Pure Water Systems", industry: "Home Services", blurb: "Water purification company competing in a voice-search-heavy local market. Voice search optimisation and local AEO programme delivered first-position voice responses for 22 high-intent local queries across Toronto and the GTA.", metrics: [{ value: "22", label: "Voice search #1 positions" }, { value: "+185%", label: "Local organic leads" }] },
    { image: "/case-study-dental.png", client: "Greentak Energy", industry: "Green Tech", blurb: "Clean energy brand missing from AI conversations entirely. LLM SEO programme, authoritative content publication, and digital PR campaign. Now cited in Perplexity and ChatGPT responses for Canadian clean energy queries within 4 months.", metrics: [{ value: "4 mo", label: "To first LLM citations" }, { value: "+267%", label: "Brand search volume" }] },
  ],
  process: [
    { label: "AI Audit", headline: "Map your brand's current visibility across every AI search surface.", description: "Comprehensive audit of how your brand appears (or doesn't) in Google AI Overviews, ChatGPT, Perplexity, Claude, and voice search. We test 50+ high-value queries and deliver a full competitor comparison — you'll see exactly where you stand and what's blocking your AI visibility." },
    { label: "Gap Analysis", headline: "Identify the content, authority, and structural gaps holding you back.", description: "Using our AI visibility audit findings, we map the specific gaps: missing FAQ content, weak E-E-A-T signals, schema gaps, authority deficits, and content that isn't structured for AI extraction. This becomes the prioritised work list for the programme." },
    { label: "Content", headline: "Build AEO-optimised content that AI systems recognise as the authoritative answer.", description: "We rewrite, restructure, and publish content designed for AI citation: FAQ frameworks, direct-answer content sections, expert bylines, and topical authority hubs. Every piece is structured with the schema and signals that help AI systems identify and surface your content." },
    { label: "Authority", headline: "Build the off-site citations and authority signals that make AI trust your brand.", description: "E-E-A-T is not built on your own site alone. We run a parallel authority programme: digital PR for third-party citations, structured review management, expert positioning content, and brand mention acquisition across the authoritative sources that AI models index." },
    { label: "Technical", headline: "Implement schema markup, structured data, and technical signals at scale.", description: "Automated schema implementation across all page types, Core Web Vitals optimisation (speed is a trust signal for AI), mobile-first technical health, and structured data validation — the technical foundation that enables AI visibility." },
    { label: "Monitor", headline: "Track AI citations, voice positions, and AIO appearances week over week.", description: "Weekly reporting on every AI search surface: Google AIO appearances, LLM citations (ChatGPT, Perplexity, Claude), voice search positions, and branded search volume. We adapt the programme based on what's performing and where new opportunities emerge." },
  ],
  faqs: [
    { question: "What is AEO (Answer Engine Optimisation)?", answer: "Answer Engine Optimisation is the practice of structuring your website's content so that AI-powered search engines — including Google's AI Overviews, ChatGPT, Perplexity, and voice assistants — select your content as the direct answer to user queries. While traditional SEO focuses on ranking in blue-link results, AEO focuses on being surfaced as the answer itself, before users ever see a ranked list of websites. As AI Overview adoption grows (now at 47% of Google searches), AEO is increasingly essential for maintaining search visibility." },
    { question: "How do you get a brand to show up in ChatGPT or Perplexity answers?", answer: "LLMs like ChatGPT and Perplexity index and cite authoritative web content when generating answers. The key factors are: domain authority (Google's assessment of your site's credibility), topical depth (comprehensive coverage of your area of expertise), E-E-A-T signals (expertise, authoritativeness, and trustworthiness signals), and third-party citations (other authoritative sites referencing your brand). Our LLM SEO programme builds all four simultaneously through content strategy, digital PR, and authority development." },
    { question: "How is AI SEO different from traditional SEO?", answer: "Traditional SEO is primarily about ranking in position 1-10 of blue-link results for target keywords. AI SEO is about being cited, summarised, or surfaced directly by AI systems — appearing in Google's AI Overview at the top of the page, being recommended by ChatGPT when users ask for advice in your category, or being the answer a voice assistant reads aloud. Both require technical health and quality content, but AI SEO additionally requires structured data implementation, FAQ content frameworks, E-E-A-T signals, and the kind of authoritative topical depth that AI models recognise as trustworthy." },
    { question: "How quickly can you improve AI search visibility?", answer: "Google AI Overview appearances can often be achieved within 4-8 weeks of implementing AEO content restructuring and schema markup on well-optimised pages. LLM citations (ChatGPT, Perplexity) typically take longer — 3-6 months — because they're driven by accumulated authority signals and third-party citations that take time to build. Voice search positions for local queries can improve within 4-6 weeks on strong local domains. We track and report progress weekly from day one so you can see the programme working." },
    { question: "Do you work with businesses already doing traditional SEO?", answer: "Yes — most clients come to us with an existing SEO programme. AI SEO is not a replacement for traditional SEO; it's an extension of it. The technical foundation (site speed, Core Web Vitals, domain authority) and content quality are the same. We audit what's in place, identify what needs to change for AI visibility, and layer the AEO, LLM SEO, and E-E-A-T components on top of your existing programme. Clients often see improvements in traditional rankings at the same time as AI visibility grows, because the authority-building work benefits both." },
  ],
  hubInsights: [
    { image: "/work-2.png", category: "AI Search", readTime: "8 min read", title: "AEO vs SEO: What's Changed and What It Means for Your Business in 2026", excerpt: "Google's AI Overviews now appear on 47% of searches. ChatGPT and Perplexity are answering questions your customers used to Google. Traditional SEO is not dead — but it's no longer sufficient. We explain exactly what's changed, which strategies still work, and what you need to add to your programme to stay visible as AI search becomes the default.", author: "Marcus Chen", authorRole: "SEO Director", href: "/blog/aeo-vs-seo-2026" },
    { image: "/case-study-homeservices.png", category: "LLM SEO", readTime: "6 min read", title: "How to Get Your Brand Cited by ChatGPT and Perplexity: The Complete Guide", excerpt: "Most businesses have no idea how their brand appears in ChatGPT or Perplexity answers — or whether it appears at all. We share the exact framework we use to audit LLM brand visibility, identify the content and authority gaps, and build a programme that gets local and regional businesses cited in AI answers within 3-6 months.", author: "Sarah Kowalski", authorRole: "Head of Content", href: "/blog/get-brand-cited-chatgpt-perplexity" },
    { image: "/industry-local.png", category: "Voice Search", readTime: "5 min read", title: "Voice Search Optimisation in 2026: Why It's Not Optional for Local Businesses", excerpt: "153.5 million people in the US use voice assistants daily. Millennials and Gen Z are more likely to use voice search than older generations — and they're asking about local businesses, making purchase decisions, and comparing service providers entirely by voice. We lay out the optimisation framework that gets local businesses into voice-delivered answers.", author: "Priya Anand", authorRole: "Local SEO Lead", href: "/blog/voice-search-optimisation-local-2026" },
  ],
};

export default function AISeoHub() {
  return <ServiceHubPage data={aiSeoData} />;
}
