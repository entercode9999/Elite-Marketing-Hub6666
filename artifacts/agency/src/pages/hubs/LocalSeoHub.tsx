import { MapPin, Star, Building2, Search, FileText, RefreshCw, BarChart2, Globe, CheckCircle2 } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
        ))}
        <div className="flex-1 bg-white rounded text-xs text-gray-400 px-3 py-1 ml-2">google.com — "dentist near me"</div>
      </div>
      <div className="bg-white p-4">
        {/* Map pack simulation */}
        <div className="border border-blue-100 bg-blue-50/30 rounded-xl p-3 mb-3">
          <p className="text-[8px] font-black uppercase tracking-widest text-blue-500 mb-2">Google Maps — Top 3</p>
          {[
            { pos: "1", name: "Your Practice", rating: "4.9", reviews: "187", highlight: true },
            { pos: "2", name: "Competitor A Dental", rating: "4.2", reviews: "43", highlight: false },
            { pos: "3", name: "Downtown Dental Group", rating: "4.4", reviews: "91", highlight: false },
          ].map((r) => (
            <div key={r.pos} className={`flex items-center gap-2 py-1.5 px-2 rounded-lg mb-1 ${r.highlight ? "bg-primary/5 border border-primary/15" : ""}`}>
              <span className={`text-[10px] font-black w-4 shrink-0 ${r.highlight ? "text-primary" : "text-gray-300"}`}>{r.pos}</span>
              <div className="flex-1">
                <p className={`text-[10px] font-bold ${r.highlight ? "text-[#0e0e0e]" : "text-gray-500"}`}>{r.name}</p>
                <div className="flex items-center gap-1">
                  <span className="text-[9px] text-yellow-500">{"★".repeat(Math.round(parseFloat(r.rating)))}</span>
                  <span className="text-[8px] text-gray-400">{r.rating} ({r.reviews})</span>
                </div>
              </div>
              {r.highlight && <span className="text-[8px] bg-green-100 text-green-700 font-bold px-1.5 py-0.5 rounded-full">Calling</span>}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[{ v: "+220%", l: "Map impressions" }, { v: "Top 3", l: "Pack position" }, { v: "6 wks", l: "First results" }].map((s) => (
            <div key={s.l} className="bg-gray-50 rounded-lg p-2 text-center border border-gray-100">
              <p className="text-sm font-black text-primary">{s.v}</p>
              <p className="text-[8px] text-gray-400 mt-0.5 leading-tight">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100">
      <p className="text-[10px] text-gray-400">Avg. call increase</p>
      <p className="text-2xl font-black text-primary">+186%</p>
    </div>
    <div className="absolute -top-4 -left-4 bg-[#0a0c12] rounded-xl px-3 py-2.5 shadow-xl border border-white/10">
      <p className="text-[9px] text-white/30">Ranking</p>
      <p className="text-xs font-black text-white">Map Pack #1</p>
    </div>
  </div>
);

const localSeoHubData: HubData = {
  slug: "local-seo-service",
  label: "LOCAL SEO",
  breadcrumb: "Local SEO",
  hero: {
    headline: "Map Pack Top 3. More Calls. More Walk-Ins.",
    italic: "Own your local market.",
    description:
      "For businesses that serve local customers, Google's Map pack is where the majority of calls and enquiries come from. Position 1–3 puts you in front of buyers who are ready to hire — right now. We build and manage the local SEO systems that keep you there.",
    cta: "Get a Free Local SEO Audit",
    ctaHref: "/contact",
    badges: ["Google Partner", "45+ Directory Coverage", "10+ Years Local SEO", "200+ Local Businesses Ranked"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "Top 3", label: "Map pack position — 87% of clients within 6 months" },
    { value: "+220%", label: "Average GBP impression increase" },
    { value: "+186%", label: "Average call volume increase" },
    { value: "93%", label: "Client retention after year 1" },
  ],
  intro: {
    eyebrow: "Why local SEO is your highest-ROI marketing channel",
    headline: "The map pack gets the call. Everything below it doesn't.",
    body: "When someone searches 'dentist near me' or 'plumber in Mississauga,' they don't scroll past the three map results. The business in position 1 gets the majority of the calls. Position 4 is essentially invisible. For local service businesses — healthcare, home services, legal, restaurants, retail — this is the most important real estate in digital marketing.",
    secondBody: "Local SEO is not a one-time setup. It's an ongoing programme: Google Business Profile management, review velocity, citation consistency, local landing pages, and competitive monitoring. The businesses consistently in the top 3 are the ones who treat local SEO as infrastructure, not an afterthought.",
    bullets: [
      "Google Business Profile optimisation and active weekly management",
      "Citation audit and build across 45+ Canadian directories",
      "Review generation system: consistent velocity that Google rewards",
      "City-specific and neighbourhood landing pages that capture local intent",
      "On-page local SEO: schema, NAP consistency, local signals",
      "Monthly map pack rank tracking and competitive analysis",
    ],
  },
  proofSection: {
    eyebrow: "The local SEO advantage",
    headline: "Most local businesses are invisible to the majority of potential customers searching for them.",
    body: "Google's map pack algorithm weighs three factors: proximity (how close you are to the searcher), relevance (how well your GBP and website match the search), and prominence (how authoritative and trusted your business appears online). You can't change your location — but you can dramatically improve relevance and prominence through consistent, expert local SEO management.",
    secondBody: "The businesses that dominate local search in any category have higher review counts with better ratings, more consistent citations, actively managed Google Business Profiles, and local landing pages targeting every service and neighbourhood. None of this happens by accident — and none of it maintains itself without active management.",
    bullets: [
      "GBP categories, attributes, and service menus are optimised for every relevant local search.",
      "Citation data is consistent across all 45+ directories — inconsistency actively suppresses rankings.",
      "Review velocity (4–8 new reviews per month) is a ranking signal Google weights heavily.",
      "Neighbourhood-level landing pages outrank generic city pages for localised queries.",
      "Weekly GBP posts signal to Google that the business is active and engaged.",
      "Competitor tracking shows when and how rivals are gaining ground — so we respond proactively.",
    ],
  },
  subServices: [
    {
      tab: "GBP Management",
      headline: "Your Google Business Profile is your most powerful local marketing asset.",
      description: "We manage your GBP like a paid ad account — weekly posts, seasonal attributes, Q&A management, photo strategy, and category optimisation. Most businesses set up their GBP once and never touch it again. That's why most businesses don't rank. We treat it as an active, managed channel that signals relevance and engagement to Google every week.",
      bullets: ["Primary and secondary category optimisation", "Service menu and attribute management", "Weekly Google Posts (7/month)", "Q&A seeding and response management"],
      image: "/industry-local.png",
      href: "/gbp-optimisation",
    },
    {
      tab: "Citation Building",
      headline: "Inconsistent NAP data is actively suppressing your map pack position.",
      description: "Google cross-references your business name, address, and phone number across hundreds of directories to verify legitimacy. Inconsistencies signal unreliability and suppress rankings. We audit your citations across 45+ Canadian directories, fix every inconsistency, and build new listings in the directories your top competitors are using that you aren't.",
      bullets: ["Full citation audit across 45+ directories", "NAP inconsistency correction", "Competitive gap analysis and new citation builds", "Monthly re-audit to catch new inconsistencies"],
      image: "/case-study-local.png",
      href: "/citation-audit",
    },
    {
      tab: "Review Generation",
      headline: "Consistent review velocity is a ranking signal — and a conversion driver.",
      description: "A single review burst is noise. A consistent velocity of 4–8 reviews per month is a signal Google rewards in rankings and prospects trust when choosing. We implement automated post-service request flows — SMS and email — that build your review count and rating systematically. Clients typically generate 15–40 net new 5-star reviews in the first 90 days.",
      bullets: ["Automated post-service review request flows", "Multi-platform coverage (Google, RateMDs, HomeStars, Yelp)", "Review response management (24hr response time)", "Monthly velocity reporting vs. competitors"],
      image: "/hero-showcase.png",
      href: "/review-generation",
    },
    {
      tab: "Local Landing Pages",
      headline: "A page for every city and neighbourhood. Authority in every market.",
      description: "Google's local algorithm rewards geographic specificity. A page targeting 'dental Streetsville' outperforms a general 'dental Toronto' page in Streetsville searches. We build city-specific and neighbourhood-level landing pages structured to rank — with unique content, LocalBusiness schema, and internal linking that passes authority throughout your local content cluster.",
      bullets: ["City-level service pages for every market you serve", "Neighbourhood pages targeting sub-city searches", "LocalBusiness and FAQ schema on every page", "Internal link mesh connecting all local pages"],
      image: "/local-business-bg.png",
      href: "/local-landing-pages",
    },
    {
      tab: "Local Reporting",
      headline: "Rank tracking, GBP metrics, and competitive benchmarking every month.",
      description: "Monthly reports showing map pack position for every tracked query, GBP impressions and call volume, review count and velocity vs. top competitors, and the specific work completed and planned. You always know exactly where you rank, whether you're gaining or losing ground, and what we're doing about it.",
      bullets: ["Map pack rank tracking for all target queries", "GBP performance: impressions, calls, direction requests", "Review velocity vs. top 3 competitors", "Monthly strategy notes and next-step actions"],
      image: "/work-2.png",
      href: "/local-seo-reporting",
    },
  ],
  features: [
    { icon: <MapPin className="w-5 h-5 text-primary" />, title: "GBP Optimisation", body: "Full rebuild and active weekly management of your Google Business Profile — categories, services, photos, posts, and Q&A managed as a live marketing channel." },
    { icon: <Building2 className="w-5 h-5 text-primary" />, title: "Citation Management", body: "NAP consistency audit and correction across 45+ Canadian directories. New listings built in authoritative directories your competitors are using." },
    { icon: <Star className="w-5 h-5 text-primary" />, title: "Review Velocity System", body: "Automated request flows that generate 4–8 new reviews per month consistently — the velocity that Google's algorithm rewards in map pack rankings." },
    { icon: <FileText className="w-5 h-5 text-primary" />, title: "Local Landing Pages", body: "City and neighbourhood-specific pages targeting every local search intent in your market. Unique content, schema markup, and proper internal linking." },
    { icon: <Search className="w-5 h-5 text-primary" />, title: "Keyword & Competitor Research", body: "Full mapping of the local searches your customers use — by service type, city, and neighbourhood — benchmarked against your top map pack competitors." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "On-Page Local SEO", body: "NAP consistency across your website, LocalBusiness schema implementation, locally-optimised title tags, and geo-targeted internal linking architecture." },
    { icon: <RefreshCw className="w-5 h-5 text-primary" />, title: "Ongoing GBP Management", body: "Weekly posts, seasonal attribute updates, Q&A monitoring, and photo strategy. Active management that keeps your GBP's engagement signals strong month over month." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "Map Pack Rank Tracking", body: "Position tracking for every target query, every week. You always know exactly where you rank and whether the programme is producing movement." },
    { icon: <CheckCircle2 className="w-5 h-5 text-primary" />, title: "Multi-Location Management", body: "Local SEO managed at scale for businesses with 2 to 50+ locations — consistent GBP management, citations, and reviews across every location." },
  ],
  caseStudies: [
    { image: "/industry-dental.png", client: "Apex Dental Group", industry: "Healthcare", blurb: "6-location dental group dominating local SEO across Greater Toronto. GBP rebuilt at all locations, 52 citation inconsistencies fixed, review velocity programme generating 12+ reviews/month per location. Top 3 map pack position across all 6 markets within 5 months.", metrics: [{ value: "#1–3", label: "All 6 markets" }, { value: "+312%", label: "New patient enquiries" }] },
    { image: "/case-study-homeservices.png", client: "GTA Home Pros", industry: "Home Services", blurb: "HVAC and plumbing company serving 8 GTA cities. Local landing page architecture targeting every city × service combination, review generation producing 8–12 new reviews per month. Organic map pack now accounts for 68% of all inbound calls.", metrics: [{ value: "+186%", label: "Inbound calls" }, { value: "68%", label: "From organic" }] },
    { image: "/industry-legal.png", client: "Axiom Law PC", industry: "Legal Services", blurb: "Personal injury and immigration firm in Toronto. GBP optimised for 4 practice areas, 78 new citations built, review count grew from 12 to 94 in 6 months. Map pack top 3 for every priority query in the Toronto market.", metrics: [{ value: "+189%", label: "Qualified leads" }, { value: "94", label: "Reviews in 6 months" }] },
  ],
  process: [
    { label: "Audit", headline: "Diagnose before prescribing — a complete local SEO audit first.", description: "Full audit of your GBP health, citation consistency across 45+ directories, review profile vs. competitors, on-page local signals, and your current map pack positions for every target query. The audit identifies exactly what's suppressing your rankings and what the highest-impact fixes are." },
    { label: "GBP Rebuild", headline: "Rebuild your GBP from the ground up.", description: "Full GBP rebuild: correct primary and secondary categories, complete service menu configuration, all relevant attributes enabled, conversion-oriented photo library, Q&A populated with high-intent questions, and description optimised for local keywords. Most GBPs we see are optimised at 30–40% of their potential." },
    { label: "Citations", headline: "Fix inconsistencies and build authority citations.", description: "Every inconsistency in your existing citations corrected and verified. New listings built on the 20–30 highest-authority directories your competitors are using that you aren't. Competitive gap analysis determines prioritisation — we build what moves the needle fastest." },
    { label: "Reviews", headline: "Launch systematic review generation.", description: "Post-service request flow deployed via SMS and email. Messaging and timing tested for your specific customer base. Response system set up so every review receives a response within 24 hours. Most clients hit 15+ net new reviews in the first 30 days." },
    { label: "Content", headline: "Local landing pages targeting every market and service.", description: "City and neighbourhood landing pages built for every service area combination. Unique content, LocalBusiness schema, and internal link structure connecting all pages into a local authority cluster. Pages submitted to Google Search Console and tracked from week one." },
    { label: "Compound", headline: "Monitor, manage, and grow every month.", description: "Monthly map pack rank reports, GBP management (weekly posts, seasonal updates), ongoing review response, and quarterly strategy reviews. The programme compounds — each month of active management builds on the last, making your positions increasingly difficult for competitors to displace." },
  ],
  faqs: [
    { question: "How long does it take to get into the Google Map pack?", answer: "For most local businesses, we see meaningful map pack ranking improvements within 6–12 weeks. Achieving top 3 positions typically takes 3–6 months depending on competitive intensity and your starting position. Categories like dental, legal, and home services are more competitive and take longer; niche or less-contested categories can show results in 4–8 weeks." },
    { question: "What's more important — GBP optimisation or reviews?", answer: "Both are critical, but GBP category selection and optimisation typically produces faster ranking movement, while review velocity produces more durable positions over time. We work on both simultaneously — GBP optimisation for quick wins, review generation as the compounding signal that holds and improves your position long-term." },
    { question: "Do I need a website to rank in the map pack?", answer: "You don't need a website to appear in the map pack, but having one significantly improves your ranking potential and dramatically improves your conversion rate when people click through from the map. A GBP linked to an optimised local website consistently outranks GBPs with weak or missing website links." },
    { question: "Can you do local SEO for multiple locations?", answer: "Yes — multi-location local SEO is a core service. We manage GBP, citations, reviews, and local content across 2-location businesses and 50-location enterprises. Each location gets its own GBP management, citation strategy, and local content targeting its specific geographic market." },
    { question: "How many reviews do I need to rank in the map pack?", answer: "It depends on your category and city. In competitive categories like dental or home services in Toronto, you'll need 50–100+ reviews at 4.5+ to compete for top 3. In smaller markets or less-contested categories, 20–30 reviews can be enough. We benchmark your competition at the start and set a realistic target." },
    { question: "What is the difference between local SEO and organic (regular) SEO?", answer: "Organic SEO focuses on ranking your website in the standard blue-link search results. Local SEO focuses on the map pack — the 3-result map that appears for location-based searches. Both are valuable, but for businesses serving local customers, map pack visibility typically drives more direct calls and enquiries than organic website rankings alone." },
  ],
};

export default function LocalSeoHub() {
  return <ServiceHubPage data={localSeoHubData} />;
}
