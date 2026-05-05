import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { Nav } from "@/components/nav";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Footer } from "@/components/footer";

export interface ServicePageData {
  breadcrumb: string[];
  label: string;
  headline: string;
  headlineAccent: string;
  subhead: string;
  stats: Array<{ value: string; label: string; sub?: string }>;
  intro?: string;
  deliverables?: Array<{ title: string; body: string }>;
  process?: Array<{ step: string; title: string; body: string }>;
  whyPoints?: Array<{ title: string; body: string }>;
  faq?: Array<{ q: string; a: string }>;
  relatedServices?: Array<{ label: string; href: string }>;
  cta?: string;
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e5e2d9] last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 py-5 text-left">
        <span className="font-semibold text-[#0e0e0e] text-[15px] leading-snug">{q}</span>
        {open
          ? <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" />
          : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
      </button>
      {open && <p className="pb-5 text-gray-600 leading-relaxed text-[15px]">{a}</p>}
    </div>
  );
}

export function ServicePage({ data }: { data: ServicePageData }) {
  return (
    <div className="min-h-screen bg-white selection:bg-primary selection:text-white flex flex-col">
      <Nav />

      {/* ── HERO ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 pt-[16px] md:pt-[24px] min-h-[calc(100vh-68px)]">
        <div className="bg-[#08090d] flex flex-col justify-start px-10 lg:px-16 pt-6 pb-8 lg:pt-8 lg:pb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <nav className="flex items-center gap-1.5 text-xs text-white/25 mb-4 flex-wrap">
              {data.breadcrumb.map((crumb, i) => (
                <span key={crumb} className="flex items-center gap-1.5">
                  {i > 0 && <span className="text-white/15">›</span>}
                  <span className={i === data.breadcrumb.length - 1 ? "text-white/50 font-medium" : ""}>{crumb}</span>
                </span>
              ))}
            </nav>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-3">{data.label}</p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.04] tracking-tight mb-4">
              {data.headline}
              <br />
              <span className="italic text-primary font-light">{data.headlineAccent}</span>
            </h1>
            <p className="text-base text-white/55 leading-relaxed mb-6 max-w-md">{data.subhead}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 rounded-xl text-sm group shadow-lg shadow-primary/25 transition-all">
              Get a free audit <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="bg-[#f2f2ef] flex items-start justify-center px-8 pt-6 pb-8 lg:pt-8 lg:pb-10">
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="w-full max-w-sm">
            <div className="grid grid-cols-2 gap-4">
              {data.stats.map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-5 border border-[#e5e2d9] shadow-sm">
                  <p className="text-3xl font-black text-[#0e0e0e] tabular-nums leading-none">{s.value}</p>
                  <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mt-2">{s.label}</p>
                  {s.sub && <p className="text-[10px] text-gray-300 mt-0.5">{s.sub}</p>}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="border-t border-[#e5e2d9]">
        <LogoMarquee />
      </div>

      {/* ── INTRO ── */}
      {data.intro && (
        <section className="py-20 border-b border-[#e5e2d9]">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="space-y-5 text-gray-600 leading-relaxed text-[16px]">
              {data.intro.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── WHY POINTS ── */}
      {data.whyPoints && data.whyPoints.length > 0 && (
        <section className="py-20 bg-[#f9f8f5] border-b border-[#e5e2d9]">
          <div className="container mx-auto px-4 max-w-7xl">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Why it matters</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1] mb-10">
              Why businesses invest in {data.label}
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {data.whyPoints.map((pt, i) => (
                <div key={pt.title} className="relative bg-white border border-[#e5e2d9] rounded-2xl p-7 overflow-hidden">
                  <div className="absolute top-4 right-5 text-[72px] font-black text-primary/5 leading-none select-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <h3 className="font-bold text-[#0e0e0e] mb-3 text-[15px] relative z-10">{pt.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed relative z-10">{pt.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── DELIVERABLES ── */}
      {data.deliverables && data.deliverables.length > 0 && (
        <section className="py-20 border-b border-[#e5e2d9]">
          <div className="container mx-auto px-4 max-w-7xl">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">What's included</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1] mb-10">
              Every deliverable in a full {data.label} engagement
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {data.deliverables.map((d) => (
                <div key={d.title} className="bg-white border border-[#e5e2d9] rounded-2xl p-7 flex flex-col gap-4">
                  <div className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-bold text-[#0e0e0e] leading-snug text-[15px]">{d.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── PROCESS ── */}
      {data.process && data.process.length > 0 && (
        <section className="py-20 bg-[#08090d] border-b border-white/8">
          <div className="container mx-auto px-4 max-w-7xl">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Our process</p>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-[1.1] mb-10">
              How we deliver {data.label}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {data.process.map((step) => (
                <div key={step.step} className="bg-white/4 border border-white/8 rounded-2xl p-6">
                  <span className="text-[11px] font-black text-primary bg-primary/15 rounded-full px-2.5 py-0.5 mb-4 inline-block">
                    {step.step}
                  </span>
                  <h3 className="font-bold text-white mb-2 text-[15px] leading-snug">{step.title}</h3>
                  <p className="text-xs text-white/40 leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      {data.cta && (
        <section className="py-16 bg-primary">
          <div className="container mx-auto px-4 max-w-4xl text-center">
            <p className="text-xl md:text-2xl font-black text-white mb-6 leading-snug">{data.cta}</p>
            <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors text-[15px]">
              Get a free audit <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      )}

      {/* ── FAQ ── */}
      {data.faq && data.faq.length > 0 && (
        <section className="py-20 border-b border-[#e5e2d9]">
          <div className="container mx-auto px-4 max-w-3xl">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">FAQ</p>
            <h2 className="text-2xl md:text-3xl font-black text-[#0e0e0e] mb-10">Common questions</h2>
            <div className="divide-y divide-[#e5e2d9]">
              {data.faq.map((item) => (
                <FAQItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── RELATED ── */}
      {data.relatedServices && data.relatedServices.length > 0 && (
        <section className="py-16 bg-[#f9f8f5] border-b border-[#e5e2d9]">
          <div className="container mx-auto px-4 max-w-7xl">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Related services</p>
            <h2 className="text-2xl font-black text-[#0e0e0e] mb-8">More ways we grow your business</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {data.relatedServices.map((r) => (
                <Link key={r.href} href={r.href} className="bg-white border border-[#e5e2d9] rounded-xl p-4 hover:border-primary/40 hover:shadow-sm transition-all flex items-center justify-between group">
                  <span className="font-semibold text-[#0e0e0e] text-sm">{r.label}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-primary transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </div>
  );
}

/* ── DATA ───────────────────────────────────────────────────────── */

export const localSeoData: ServicePageData = {
  breadcrumb: ["Home", "Services", "Local SEO"],
  label: "Local SEO",
  headline: "Dominate Google Maps.",
  headlineAccent: "Own your local market.",
  subhead: "Outlier gets local businesses into Google's Map pack top 3 — where the majority of local calls and enquiries come from. More calls, more walk-ins, more booked appointments.",
  stats: [
    { value: "Top 3", label: "Map pack position", sub: "87% of clients within 6 months" },
    { value: "+220%", label: "GBP impressions", sub: "avg. increase" },
    { value: "6 wks", label: "First ranking lift", sub: "typical timeline" },
    { value: "93%", label: "Client retention", sub: "after year 1" },
  ],
  intro: `For businesses that serve customers locally — whether you're a dentist, a home services contractor, a restaurant, a lawyer, or a retail shop — Local SEO is the single most cost-effective customer acquisition channel available. When someone searches "best [your service] near me" or "[your service] in [your city]," the businesses that appear in the Google Map pack receive the overwhelming majority of calls, clicks, and walk-ins.

Position 1–3 in the map pack is the goal. For most local service businesses, appearing there drives more calls than any paid advertising channel at a fraction of the ongoing cost. The businesses in those positions didn't get there by accident — they made a deliberate investment in Local SEO, and that investment compounds month over month.

Outlier's Local SEO service is built around one goal: getting your business into the map pack top 3 and keeping it there. We manage your Google Business Profile with the rigour of a paid ad account, building local citations, generating reviews at scale, and creating city-specific landing pages that capture both map pack and organic local search traffic.`,
  whyPoints: [
    { title: "Map pack top 3 is where the calls are", body: "The three businesses in the map pack receive the overwhelming majority of local search clicks. For most service categories, not appearing there means losing the majority of potential customers before they've even seen your website." },
    { title: "Lower cost-per-lead than paid ads", body: "Once you're in the map pack top 3, you generate calls and enquiries at no ongoing cost per click — unlike Google Ads where every lead has a direct cost. Local SEO builds a compounding asset, not a metered tap." },
    { title: "Reviews drive both rankings and revenue", body: "Google's algorithm weights review volume, velocity, and sentiment heavily in map pack rankings. And 90%+ of consumers read reviews before choosing a local business. A systematic review programme is table stakes." },
  ],
  deliverables: [
    { title: "Google Business Profile Rebuild & Optimisation", body: "Full GBP audit and rebuild: correct primary and secondary categories, complete service menu, conversion-oriented photos, Q&A population, and weekly posting schedule. Your GBP is your most powerful local marketing asset — we manage it like a paid ad account." },
    { title: "Local Citation Audit & Build", body: "We audit your NAP (Name, Address, Phone) data across 45+ Canadian directories, fix every inconsistency, and build new citations in the directories your top map pack competitors are using that you aren't." },
    { title: "Review Generation System", body: "Automated SMS and email request flows triggered after service completion. We typically generate 15–40 net new 5-star reviews in the first 90 days — materially improving both rankings and conversion rates from map pack clicks." },
    { title: "Local Landing Pages", body: "City-specific and neighbourhood-level landing pages targeting every relevant local query in your market. Each page has unique content, LocalBusiness schema, and internal linking to your service pages." },
    { title: "On-Page Local SEO", body: "NAP consistency across your website, LocalBusiness and Service schema markup, locally-optimised title tags and meta descriptions, and internal linking architecture that reinforces your geographic relevance." },
    { title: "Monthly Ranking Reports", body: "Map pack position tracking for all target queries, GBP performance metrics, review velocity vs. competitors, and a clear breakdown of the work completed and planned for next month." },
  ],
  process: [
    { step: "01", title: "Local SEO Audit", body: "Full audit of your GBP, citations, review profile, on-page local signals, and competitive map pack landscape. We identify every gap and opportunity before touching anything." },
    { step: "02", title: "GBP Rebuild", body: "Rebuild your GBP from the ground up — categories, services, photos, descriptions, Q&A — optimising every element for local ranking signals and profile-to-call conversion." },
    { step: "03", title: "Citations & On-Page", body: "Fix all inconsistent citations and build new ones. Implement on-page local SEO across your website. Launch neighbourhood and city landing pages." },
    { step: "04", title: "Review Velocity", body: "Deploy automated review request flows. Begin building consistent review velocity that compounds map pack authority month over month." },
    { step: "05", title: "Monitor & Grow", body: "Monthly rank tracking, GBP management, and strategic reviews. As positions improve, we identify new keyword clusters and service areas to expand into." },
  ],
  cta: "Your competitors are in the map pack. Let's put you above them.",
  faq: [
    { q: "How long does it take to get into the Google Map pack?", a: "For most local businesses, we see meaningful map pack ranking improvements within 6–12 weeks. Achieving top 3 positions typically takes 3–6 months depending on how competitive your category is and your starting position. Categories like dental, legal, and home services are more competitive and take longer; niche or less-contested categories can show results faster." },
    { q: "What's the difference between Local SEO and regular SEO?", a: "Regular SEO focuses on ranking your website in organic search results. Local SEO focuses specifically on visibility in Google Maps, the map pack, and location-based searches — where '[service] near me' and '[service] in [city]' searches show up. For businesses that serve customers in person, Local SEO typically drives more direct calls and enquiries faster than organic SEO." },
    { q: "How important is Google Business Profile?", a: "Your GBP is the single most important element of local SEO. It's what appears in the map pack when customers search for your services. An unoptimised or unclaimed GBP is the most common reason businesses don't appear in map pack results — even those with years of operation and many customers." },
    { q: "How many reviews do I need to rank in the map pack?", a: "It depends on your category and competition. For most service categories, 30–50+ Google reviews at 4.5 or above is a strong baseline. In highly competitive categories like dental or home services, 100+ may be needed to compete for top 3. We assess your specific competition and set realistic targets at the start of every engagement." },
    { q: "Can you do Local SEO for businesses with multiple locations?", a: "Yes — multi-location Local SEO is a core competency. We manage GBP, citations, reviews, and local content across all locations, ensuring consistency while targeting each location's specific neighbourhood market. We've worked with businesses ranging from 2 to 50+ locations." },
    { q: "Do I need a physical address to rank in the map pack?", a: "No. A service-area GBP without a physical address can rank in the map pack. We configure your service radius correctly and build supporting content for each area you serve — allowing you to rank across your entire service territory, not just near a single address." },
  ],
  relatedServices: [
    { label: "GBP Optimisation", href: "/gbp-optimisation" },
    { label: "Review Generation", href: "/review-generation" },
    { label: "Citation Audit", href: "/citation-audit" },
    { label: "Local Landing Pages", href: "/local-landing-pages" },
    { label: "SEO Services", href: "/seo-services" },
    { label: "Google Ads", href: "/google-ads-management" },
  ],
};

export const googleAdsData: ServicePageData = {
  breadcrumb: ["Home", "Services", "Google Ads"],
  label: "Google Ads Management",
  headline: "More leads from Google.",
  headlineAccent: "Less wasted spend.",
  subhead: "Certified Google Partner agency. We lower CPA, maximise ROAS, and track every conversion — so you know exactly what your ad budget is producing.",
  stats: [
    { value: "4.2×", label: "Avg. ROAS", sub: "across managed accounts" },
    { value: "-42%", label: "CPA reduction", sub: "vs. self-managed accounts" },
    { value: "30 days", label: "First optimisation", sub: "cycle complete" },
    { value: "Google", label: "Partner certified", sub: "specialists" },
  ],
  intro: `Google Ads is the fastest way to get in front of buyers who are actively searching for what you offer — right now, at the exact moment of purchase intent. Done right, it delivers a measurable, predictable return on every dollar invested. Done wrong — which is how most businesses run their accounts — it's an expensive way to fund your competitors' growth.

The average self-managed Google Ads account wastes 50–60% of its budget on irrelevant clicks, wrong match types, poor landing page alignment, and automated bidding strategies with insufficient conversion data. Professional account management consistently recovers that waste and redirects it toward converting traffic.

Outlier manages Google Ads as a certified Google Partner agency with specialists who manage significant monthly spend across healthcare, home services, legal, professional services, ecommerce, and technology. Every campaign is custom-built for your specific goals — not templated, not automated without oversight.`,
  whyPoints: [
    { title: "Immediate, measurable results", body: "Unlike SEO which takes months to build, Google Ads delivers leads within days of launch. For businesses that need enquiries now, a professionally managed account is the most direct path to consistent inbound calls and form submissions." },
    { title: "Full attribution from click to conversion", body: "Every lead is tracked — phone calls, form submissions, online purchases. You see exactly which campaigns, keywords, and ads are producing conversions and at what cost. No black boxes, no guessing." },
    { title: "Professional management pays for itself", body: "The average self-managed Google Ads account wastes 50–60% of budget. Professional management recovers that waste — meaning the agency fee is often more than covered by the efficiency gains alone, before any performance improvements." },
  ],
  deliverables: [
    { title: "Campaign Strategy & Architecture", body: "Custom campaign structure built for your goals: Search campaigns for high-intent keywords, Local Service Ads for verified lead generation, Performance Max for broad reach, and Shopping campaigns for ecommerce. Purpose-built, not templated." },
    { title: "Keyword Research & Negative Strategy", body: "Comprehensive keyword research covering every high-intent query your customers use, combined with an aggressive negative keyword list that eliminates irrelevant spend. We typically eliminate 20–35% of wasted budget in the first 60 days." },
    { title: "Conversion Tracking Setup", body: "Full conversion tracking before any campaign goes live: call tracking with recording, form submission tracking, GTM configuration, and CRM offline conversion imports. You always know exactly what your campaigns are producing." },
    { title: "Landing Page Optimisation", body: "Traffic quality is half the equation — landing page conversion rate is the other half. We audit, redesign, or create landing pages for your campaigns that convert clicks into enquiries and sales." },
    { title: "Weekly Optimisation", body: "Active weekly management: bid adjustments, search term reviews, ad copy testing, audience refinement, and budget reallocation based on performance data. Active management is what separates profitable accounts from wasteful ones." },
    { title: "Monthly Reporting & Strategy Review", body: "Clear monthly reports showing ROAS, CPA, conversion volume, and spend efficiency. We explain what happened, why, and what we're doing next — every month." },
  ],
  process: [
    { step: "01", title: "Account Audit", body: "For existing accounts: detailed audit identifying wasted spend, structural issues, and optimisation opportunities. For new accounts: best-practice build from scratch. Either way, you see the full picture before we spend a dollar." },
    { step: "02", title: "Strategy & Design", body: "Campaign structure, keyword strategy, bidding approach, ad copy framework, and landing page requirements — all tailored to your specific business objectives and competitive landscape." },
    { step: "03", title: "Tracking Setup", body: "Conversion tracking, call tracking, GTM, and CRM integrations configured before any campaign launches. Clean, accurate data from day one." },
    { step: "04", title: "Launch & Learn", body: "Campaigns launch with close monitoring during the 2–4 week learning phase. Real-time adjustments to bids, negatives, and ad copy based on initial performance data." },
    { step: "05", title: "Optimise & Scale", body: "With learning complete, we optimise aggressively: scale what's working, cut what isn't, and continuously test new ad copy, audiences, and campaign types to improve ROAS month over month." },
  ],
  cta: "Stop funding your competitors' growth. Let's fix your Google Ads.",
  faq: [
    { q: "How quickly will Google Ads produce results?", a: "Properly set up Google Ads campaigns typically start delivering leads within the first 1–2 weeks. The first 30–60 days are a learning phase where we optimise based on real data — ROAS and CPA tend to improve significantly in months 2 and 3. Unlike SEO, Google Ads can produce same-week results for businesses that need immediate lead flow." },
    { q: "What is a realistic budget for Google Ads?", a: "Budget depends on your industry's CPCs, your target lead volume, and your acceptable cost per acquisition. We build a specific budget recommendation with projected performance ranges after reviewing your situation — we never quote ad spend before we understand your goals and competitive landscape." },
    { q: "Can you fix an account that hasn't been performing?", a: "Yes — account rescue is a significant part of our work. We see the same problems consistently: broad match without negatives, no conversion tracking, poor landing page alignment, and Smart Bidding with insufficient conversion data. We diagnose every issue and rebuild what needs rebuilding." },
    { q: "What's a good ROAS target?", a: "ROAS targets vary by industry and business model. For service businesses, a 3–5× ROAS is a common target. For ecommerce, 4–8× depending on margins. We set ROAS and CPA targets based on your gross margin and business economics — not arbitrary benchmarks — at the start of every engagement." },
    { q: "Do you manage Google Local Service Ads?", a: "Yes. Local Service Ads (Google Guaranteed) are available for eligible service businesses — contractors, home services, legal, healthcare, and others. LSAs appear above regular Google Ads and charge per verified lead rather than per click, making them extremely cost-effective for qualifying businesses. We handle setup, verification, and ongoing management." },
    { q: "Should I run Google Ads and SEO at the same time?", a: "For most businesses, yes. Google Ads provides immediate lead flow while organic SEO builds in the background. As SEO rankings improve over 12–18 months, you can reduce paid reliance on terms where you now rank organically — lowering your blended cost of acquisition over time. We manage both channels and coordinate strategy across them." },
  ],
  relatedServices: [
    { label: "Local Service Ads", href: "/local-service-ads" },
    { label: "Performance Max", href: "/performance-max" },
    { label: "Paid Social", href: "/paid-social-service" },
    { label: "Landing Page Design", href: "/landing-page-design" },
    { label: "SEO Services", href: "/seo-services" },
    { label: "Conversion Rate Optimisation", href: "/cro-service" },
  ],
};
