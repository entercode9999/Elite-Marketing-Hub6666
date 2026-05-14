import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight, CheckCircle2, Star, Shield, Clock, Zap, TrendingUp,
  BarChart3, Search, Users, Phone, Mail, Target, Award, Check, X, MapPin, Calendar,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { useSeo } from "@/hooks/useSeo";
import { submitLeadForm } from "@/lib/forms";

/* ══════════════════════════════════════════════════════════════════
   PRICING PAGE  /pricing
══════════════════════════════════════════════════════════════════ */

const PLANS = [
  {
    name: "Local Visibility Foundation",
    badge: null,
    tagline: "For businesses that want to strengthen visibility in one core local market.",
    price: "1,490",
    pageCount: "10",
    pageLabel: "professionally structured service + location pages",
    color: "#1a56ff",
    cta: "Get started",
    features: [
      "Local SEO audit & strategy",
      "Google Business Profile optimization",
      "Technical SEO cleanup",
      "Core service page optimization",
      "Keyword targeting setup",
      "Internal linking improvements",
      "Analytics & search tracking setup",
      "10 professionally structured service + location pages",
      "Conversion-focused page layouts",
      "Lead-focused call and form paths",
    ],
    outcomes: [
      "Stronger presence in your core city",
      "More relevant pages for Google to rank",
      "Clearer paths from searcher to lead",
    ],
    value: "Ideal for businesses targeting one primary city or service area. This gives Google more relevant pages to rank and gives local buyers clearer paths to call, book, or request a quote.",
  },
  {
    name: "Demand Capture System",
    badge: "Most popular",
    tagline: "Designed for businesses targeting multiple services, cities, and high-intent local searches.",
    price: "2,990",
    pageCount: "25",
    pageLabel: "professionally structured service + location pages",
    color: "#1a56ff",
    cta: "Get started",
    features: [
      "Full local SEO strategy",
      "Multi-city keyword mapping",
      "Technical SEO optimization",
      "Internal linking architecture",
      "Competitor search gap analysis",
      "Google Business optimization",
      "Analytics & conversion tracking",
      "25 professionally structured service + location pages",
      "Conversion-focused landing page structure",
      "Search visibility expansion across multiple service areas",
    ],
    outcomes: [
      "Coverage across more services and cities",
      "More high-intent search entry points",
      "Better lead tracking and conversion structure",
    ],
    value: "Built to capture more searches from people already looking for what you sell. More targeted pages means more chances to appear when buyers search by service, city, and problem.",
  },
  {
    name: "Regional Growth System",
    badge: null,
    tagline: "For businesses expanding visibility across broader regional markets.",
    price: "4,900",
    pageCount: "60",
    pageLabel: "professionally structured service + location pages",
    color: "#0e0e0e",
    cta: "Get started",
    features: [
      "Advanced local SEO architecture",
      "Regional keyword strategy",
      "Deep competitor analysis",
      "Technical SEO optimization",
      "Conversion optimization improvements",
      "Internal linking & topical clustering",
      "Multi-market visibility planning",
      "Analytics & lead tracking setup",
      "60 professionally structured service + location pages",
      "Scalable search expansion framework",
    ],
    outcomes: [
      "Broader regional search coverage",
      "More service + city combinations ranked",
      "A larger organic lead pipeline over time",
    ],
    value: "Designed for businesses that want to own more search territory across a region. This package helps you compete in more cities, rank for more service combinations, and build a larger organic lead pipeline.",
  },
  {
    name: "Full Domination Growth",
    badge: "Maximum coverage",
    tagline: "For aggressive market coverage across many cities, services, and high-value search terms.",
    price: "7,500",
    pageCount: "120",
    pageLabel: "professionally structured service + location pages",
    color: "#0e0e0e",
    cta: "Get started",
    features: [
      "Complete local SEO growth architecture",
      "120 service + location page strategy",
      "Priority city and service keyword mapping",
      "Advanced internal linking and topical clustering",
      "Competitor gap analysis across multiple markets",
      "Conversion-focused page templates",
      "Technical SEO cleanup and crawl improvements",
      "Analytics, call tracking, and lead source visibility",
      "Scalable framework for long-term search expansion",
      "Built for businesses ready to dominate their service area",
    ],
    outcomes: [
      "Maximum search footprint across your market",
      "Reduced reliance on paid ads over time",
      "A scalable framework for local dominance",
    ],
    value: "Best for companies that want maximum market coverage. It creates a large footprint of targeted pages so your business can show up for more buyer searches, reduce reliance on ads, and generate more inbound leads over time.",
  },
];

const PRICING_FAQ = [
  {
    q: "What are 'professionally structured service + location pages'?",
    a: "These are custom-built, SEO-optimised pages that target specific combinations of your services and the cities or neighbourhoods you serve. For example: 'HVAC repair Markham' or 'family lawyer Vaughan'. Each page is built to capture high-intent local search traffic and convert visitors into leads.",
  },
  {
    q: "Why does page count matter?",
    a: "Every page creates another targeted entry point for buyers searching by service, location, or problem. A business with pages for more services and more cities can appear in more searches than a site with only a homepage and a few generic service pages.",
  },
  {
    q: "How quickly will I see results?",
    a: "Most clients see Google Business Profile improvements and early ranking movement within 30–60 days of launch. Organic page rankings typically build over 3–6 months as Google indexes and evaluates the new content.",
  },
  {
    q: "Do these pages actually rank — or are they just 'AI content'?",
    a: "These are professionally structured pages built around real keyword research specific to your market. They include proper on-page SEO, internal linking, and conversion-focused layouts. Not generic AI filler.",
  },
  {
    q: "Which plan is right for my business?",
    a: "The free strategy call resolves this. We look at your service area, competition, and goals — then recommend the right starting point. No pressure, no upsell.",
  },
];

function PlanCard({ plan, index }: { plan: typeof PLANS[0]; index: number }) {
  const isPop = plan.badge === "Most popular";
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
      className={`relative flex h-full flex-col rounded-2xl border overflow-hidden transition-shadow hover:shadow-xl ${
        isPop
          ? "border-primary ring-2 ring-primary/20 bg-white"
          : "border-[#e5e2d9] bg-white"
      }`}
    >
      <div className={`min-h-8 py-2 text-center text-[10px] font-black uppercase tracking-widest ${plan.badge ? "bg-primary text-white" : "bg-transparent text-transparent"}`}>
        {plan.badge || "Standard"}
      </div>

      <div className="p-7 flex flex-col flex-1">
        {/* Plan name */}
        <p className={`text-[11px] font-black uppercase tracking-widest mb-1 ${isPop ? "text-primary" : "text-gray-400"}`}>{plan.name}</p>
        <p className="text-gray-500 text-sm leading-snug mb-5 min-h-[54px]">{plan.tagline}</p>

        {/* Price */}
        <div className="mb-5">
          <div className="flex items-baseline gap-1 mb-1">
            <span className="text-gray-400 text-lg font-bold">$</span>
            <span className="text-5xl font-black text-[#0e0e0e] leading-none">{plan.price}</span>
          </div>
          <p className="text-gray-400 text-xs">One-time setup investment</p>
        </div>

        {/* Page count highlight */}
        <div className={`rounded-xl p-4 mb-5 border ${isPop ? "bg-primary/5 border-primary/20" : "bg-[#f9f8f5] border-[#e5e2d9]"}`}>
          <div className="flex items-center gap-3">
            <div className={`text-4xl font-black leading-none ${isPop ? "text-primary" : "text-[#0e0e0e]"}`}>{plan.pageCount}</div>
            <p className="text-xs text-gray-500 leading-snug">{plan.pageLabel}</p>
          </div>
        </div>

        {/* CTA */}
        <div className="mb-6">
          <Link
            href="/contact"
            className={`w-full flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl text-sm transition-colors group ${
              isPop
                ? "bg-primary text-white hover:bg-primary/90"
                : "bg-[#0e0e0e] text-white hover:bg-black"
            }`}
          >
            {plan.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Features */}
        <div className="border-t border-[#e5e2d9] pt-5 flex flex-1 flex-col">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">What's included</p>
          <ul className="space-y-2.5 mb-5">
            {plan.features.map((f) => (
              <li key={f} className={`flex items-start gap-2.5 text-sm ${f.includes("professionally structured") ? "font-bold text-[#0e0e0e]" : "text-[#0e0e0e]"}`}>
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
          <div className={`rounded-xl border p-4 ${isPop ? "bg-primary/5 border-primary/20" : "bg-[#f9f8f5] border-[#e5e2d9]"}`}>
            <div className="flex items-center gap-2 mb-3">
              <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${isPop ? "bg-primary text-white" : "bg-white border border-[#e5e2d9] text-primary"}`}>
                <TrendingUp className="w-4 h-4" />
              </div>
              <p className="text-[10px] font-black uppercase tracking-widest text-[#0e0e0e]">Value delivered</p>
            </div>
            <ul className="space-y-2 mb-3">
              {plan.outcomes.map((outcome) => (
                <li key={outcome} className="flex items-start gap-2 text-xs font-semibold text-[#0e0e0e] leading-snug">
                  <CheckCircle2 className="w-3.5 h-3.5 text-primary flex-shrink-0 mt-0.5" />
                  {outcome}
                </li>
              ))}
            </ul>
            <p className="border-t border-[#e5e2d9] pt-3 text-xs text-gray-500 leading-relaxed">{plan.value}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function PricingFaqItem({ q, a, index }: { q: string; a: string; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.07, duration: 0.45 }}
      className="bg-white border border-[#e5e2d9] rounded-2xl p-6"
    >
      <p className="font-black text-[#0e0e0e] text-[15px] mb-3">{q}</p>
      <p className="text-gray-500 text-[14px] leading-relaxed">{a}</p>
    </motion.div>
  );
}

export function PricingPage() {
  useSeo({
    title: "Local SEO Pricing | Outlier — Markham, Ontario",
    description: "Transparent local SEO pricing for Ontario service businesses. Professionally structured service and location pages that expand your search visibility footprint.",
    canonicalPath: "/pricing",
  });
  return (
    <div className="min-h-screen bg-[#f9f8f5]">
      <Nav />

      {/* Hero */}
      <section className="relative bg-[#08090d] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-4xl relative z-10 text-center">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="text-[11px] font-black uppercase tracking-widest text-primary mb-4">Transparent Pricing</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-6xl font-black text-white leading-[1.05] mb-5">
            Turn more local searches into leads.<br /><span className="text-primary italic">More pages. More markets.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
            className="text-white/50 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-8">
            Each package builds professionally structured service and location pages that give your business more chances to appear when buyers search for your services in the cities you serve.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap gap-4 md:gap-6 justify-center">
            {[
              { icon: Shield, text: "No monthly retainer required" },
              { icon: Clock, text: "Results typically visible in 30–90 days" },
              { icon: Star, text: "4.9★ Clutch rating" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2 text-white/50 text-sm">
                <b.icon className="w-4 h-4 text-primary" />
                {b.text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Why page count matters */}
      <section className="py-12 bg-white border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid md:grid-cols-3 gap-4">
            {[
              {
                Icon: MapPin,
                color: "#1a56ff",
                title: "More cities covered",
                desc: "Each location page targets a specific city or neighbourhood where your customers search.",
                stat: "10–120",
                statLabel: "local pages per package",
              },
              {
                Icon: Search,
                color: "#7c3aed",
                title: "More services ranked",
                desc: "Each service page captures buyers searching for that specific service in your area.",
                stat: "High-intent",
                statLabel: "local search traffic",
              },
              {
                Icon: TrendingUp,
                color: "#20c997",
                title: "More inbound leads",
                desc: "More targeted pages = more entry points for local searches to reach your business.",
                stat: "30–90 days",
                statLabel: "to first ranking movement",
              },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-6 rounded-2xl bg-[#f9f8f5] border border-[#e5e2d9] hover:border-primary/20 hover:shadow-sm transition-all">
                <div className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: `${item.color}15` }}>
                  <item.Icon className="w-5 h-5" style={{ color: item.color }} />
                </div>
                <div>
                  <p className="font-black text-[#0e0e0e] text-[15px] mb-1">{item.title}</p>
                  <p className="text-gray-500 text-sm leading-relaxed mb-3">{item.desc}</p>
                  <div className="flex items-baseline gap-1.5">
                    <span className="font-black text-sm" style={{ color: item.color }}>{item.stat}</span>
                    <span className="text-gray-400 text-[11px]">{item.statLabel}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Setup Packages</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] mb-3">Choose your visibility footprint</h2>
            <p className="text-gray-500 text-base max-w-2xl mx-auto">One-time investment. Professionally structured pages built to help your business rank for more service and city searches, capture higher-intent buyers, and turn search visibility into inbound leads.</p>
          </div>
          <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-6 mb-10">
            {PLANS.map((plan, i) => (
              <PlanCard key={plan.name} plan={plan} index={i} />
            ))}
          </div>

        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-[#f9f8f5]">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="max-w-xl mb-10">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Pricing Questions</p>
            <h2 className="text-2xl md:text-3xl font-black text-[#0e0e0e] leading-[1.1]">Common questions about how we price</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-4">
            {PRICING_FAQ.map((item, i) => (
              <PricingFaqItem key={item.q} q={item.q} a={item.a} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-primary overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:72px_72px]" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 max-w-3xl text-center relative z-10"
        >
          <h2 className="text-4xl font-black text-white leading-tight mb-4">Not sure which plan fits?</h2>
          <p className="text-white/70 text-[15px] leading-relaxed mb-8 max-w-xl mx-auto">
            The free audit call takes 30 minutes. We review your market, your current baseline, and tell you exactly what level of engagement makes sense — no pitch, no pressure.
          </p>
          <Link href="/free-audit" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors text-[15px] group">
            Get a Free Audit <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <p className="text-white/40 text-[12px] mt-4">No obligation. A senior strategist personally reviews your submission.</p>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   FREE AUDIT PAGE  /free-audit
══════════════════════════════════════════════════════════════════ */

const AUDIT_DELIVERABLES = [
  {
    icon: Search,
    title: "Technical SEO audit",
    desc: "We crawl your site for errors, speed issues, indexation problems, and any technical barriers suppressing your rankings.",
  },
  {
    icon: Target,
    title: "Competitor gap analysis",
    desc: "We map your top 3 organic and paid competitors — showing exactly where they're outranking you and why.",
  },
  {
    icon: BarChart3,
    title: "Keyword opportunity report",
    desc: "The highest-value keywords in your market you're not currently ranking for — ranked by traffic and commercial intent.",
  },
  {
    icon: TrendingUp,
    title: "Paid media efficiency review",
    desc: "If you're running Google or Meta ads, we assess your account structure, wasted spend, and ROAS benchmarks.",
  },
  {
    icon: Users,
    title: "Google Business Profile review",
    desc: "Map pack visibility, review velocity, GBP completeness score, and category optimisation recommendations.",
  },
  {
    icon: Zap,
    title: "Custom growth roadmap",
    desc: "A prioritised list of the 5–7 highest-leverage actions to take in the next 90 days based on your specific situation.",
  },
];

const AUDIT_SERVICES = [
  "Local SEO & Map Pack",
  "Google Ads / PPC",
  "Meta & Social Advertising",
  "SEO & Content Strategy",
  "Website CRO & Design",
  "Ecommerce Growth",
  "Full-funnel strategy",
  "Not sure yet",
];

export function FreeAuditPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  async function handleAuditSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setFormError("");
    try {
      await submitLeadForm(event.currentTarget, "Free audit");
      setSubmitted(true);
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Unable to send your audit request right now.");
    } finally {
      setSubmitting(false);
    }
  }
  useSeo({
    title: "Free Local SEO Audit | Outlier — Markham, Ontario",
    description: "Request a free growth audit from Outlier. A senior strategist reviews your website and local search visibility — then walks you through exactly what to do.",
    canonicalPath: "/free-audit",
  });
  return (
    <div className="min-h-screen bg-[#f9f8f5]">
      <Nav />

      {/* Hero */}
      <section className="relative bg-[#08090d] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/12 rounded-full blur-[140px] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
                className="text-[11px] font-black uppercase tracking-widest text-primary mb-4">Free Growth Audit</motion.p>
              <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="text-5xl md:text-6xl font-black text-white leading-[1.05] mb-5">
                Find out exactly<br />what's holding<br /><span className="text-primary italic">your growth back.</span>
              </motion.h1>
              <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
                className="text-white/40 text-[16px] leading-relaxed mb-8 max-w-lg">
                A senior strategist reviews your website, ad accounts, and competitive landscape — then walks you through a custom growth roadmap. No generic advice. No pitch deck.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
                className="flex flex-wrap gap-4">
                {[
                  { icon: Clock, text: "30-minute call" },
                  { icon: Shield, text: "No obligation" },
                  { icon: Award, text: "Senior strategist only" },
                ].map((b) => (
                  <div key={b.text} className="flex items-center gap-2 text-white/50 text-sm">
                    <b.icon className="w-4 h-4 text-primary" />
                    {b.text}
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Deliverables preview */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 lg:mt-0"
            >
              <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">What you receive</p>
                <div className="space-y-3">
                  {AUDIT_DELIVERABLES.slice(0, 4).map((d, i) => (
                    <motion.div
                      key={d.title}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.08, duration: 0.4 }}
                      className="flex items-start gap-3 bg-white/5 border border-white/8 rounded-xl p-3.5"
                    >
                      <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <d.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <p className="text-white font-bold text-[13px]">{d.title}</p>
                        <p className="text-white/40 text-[11px] mt-0.5 leading-snug">{d.desc.slice(0, 60)}…</p>
                      </div>
                    </motion.div>
                  ))}
                  <p className="text-white/30 text-[11px] text-center pt-1">+ 2 more deliverables</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* What's in the audit */}
      <section className="py-20 bg-white border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-xl mb-12">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">The Audit</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1]">Six deliverables in every free audit</h2>
            <p className="text-gray-500 mt-4 text-[15px] leading-relaxed">We do this before the call, so you get the strategy on the call — not a discovery session where we ask you questions for 30 minutes.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {AUDIT_DELIVERABLES.map((d, i) => (
              <motion.div
                key={d.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5 }}
                className="bg-[#f9f8f5] border border-[#e5e2d9] rounded-2xl p-6 hover:border-primary/25 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mb-4">
                  <d.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="font-black text-[#0e0e0e] text-[16px] mb-2">{d.title}</p>
                <p className="text-gray-500 text-[13.5px] leading-relaxed">{d.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Form + trust */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-14">

            {/* Trust side */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Why It's Free</p>
                <h3 className="text-xl font-black text-[#0e0e0e] mb-4">We do the work upfront because it's the right way to start a relationship.</h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  Most agencies save strategy for after you sign. We invert that. You get the diagnosis and the roadmap first — then you decide if we're the right team to execute it. If we're not a fit, you still leave with something useful.
                </p>
              </div>

              {/* Social proof */}
              <div className="bg-[#08090d] rounded-2xl p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-primary text-primary" />)}
                </div>
                <p className="text-white font-medium text-[13px] leading-relaxed italic mb-4">
                  "The free audit alone gave us more actionable insight than 6 months of reports from our previous agency. We signed within a week."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center font-black text-primary text-xs">MH</div>
                  <div>
                    <p className="text-white text-sm font-bold">Marcus Holland</p>
                    <p className="text-white/40 text-[11px]">Founder, Toronto Limo Co</p>
                  </div>
                </div>
              </div>

              {/* Process */}
              <div className="space-y-3">
                {[
                  { step: "01", title: "Submit this form", desc: "Takes 2 minutes." },
                  { step: "02", title: "We prepare your audit", desc: "Senior strategist does a desk audit of your digital presence before the call." },
                  { step: "03", title: "30-minute strategy call", desc: "We walk through findings, answer questions, and you leave with a clear roadmap." },
                ].map((s, i) => (
                  <div key={s.step} className="flex gap-4">
                    <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center font-black text-white text-[10px] flex-shrink-0 mt-0.5">{s.step}</div>
                    <div>
                      <p className="font-bold text-[#0e0e0e] text-sm">{s.title}</p>
                      <p className="text-gray-400 text-[12px]">{s.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Contact alternative */}
              <div className="bg-[#f9f8f5] border border-[#e5e2d9] rounded-xl p-5">
                <p className="font-bold text-[#0e0e0e] text-sm mb-3">Prefer to call directly?</p>
                <a href="tel:+12898189102" className="flex items-center gap-2 text-primary font-bold text-sm hover:text-primary/80 transition-colors">
                  <Phone className="w-4 h-4" /> +1 (289) 818-9102
                </a>
                <a href="mailto:contact@outlierdigital.ca" className="flex items-center gap-2 text-primary font-bold text-sm hover:text-primary/80 transition-colors mt-2">
                  <Mail className="w-4 h-4" /> contact@outlierdigital.ca
                </a>
              </div>
            </div>

            {/* Audit form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-[#e5e2d9] rounded-2xl p-8 shadow-sm">
                {submitted ? (
                  <div className="py-14 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-2xl font-black text-[#0e0e0e] mb-3">Audit request received!</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto mb-2">We'll review your site and reach out within 1 business day — usually the same day — to schedule your free strategy call.</p>
                    <p className="text-gray-400 text-xs">Questions? Email <a href="mailto:contact@outlierdigital.ca" className="text-primary font-semibold">contact@outlierdigital.ca</a></p>
                  </div>
                ) : (
                  <>
                <h3 className="text-xl font-black text-[#0e0e0e] mb-2">Request your free audit</h3>
                <p className="text-gray-400 text-sm mb-7">We'll review your submission and reach out within 1 business day to schedule the call.</p>
                <form className="space-y-5" onSubmit={handleAuditSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">First name *</label>
                      <input name="firstName" type="text" className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" placeholder="Jane" required />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Last name *</label>
                      <input name="lastName" type="text" className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" placeholder="Smith" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Business website *</label>
                    <input name="website" type="text" inputMode="url" className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" placeholder="yoursite.ca" required />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Work email *</label>
                    <input name="email" type="email" className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" placeholder="jane@company.com" required />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Phone</label>
                    <input name="phone" type="tel" className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" placeholder="+1 (416) 000-0000" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">What are you looking to improve? *</label>
                    <select name="service" className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-white" defaultValue="" required>
                      <option value="" disabled>Select area of focus…</option>
                      {AUDIT_SERVICES.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Anything specific you want us to look at?</label>
                    <textarea name="message" rows={3} className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none" placeholder="e.g. Our Google Ads spend isn't converting, or we've dropped rankings recently…" />
                  </div>
                  {formError && <p className="text-sm text-red-600">{formError}</p>}
                  <button type="submit" disabled={submitting} className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group text-[15px]">
                    {submitting ? "Sending..." : "Request Free Audit"} <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <p className="text-center text-gray-400 text-[11px]">No spam. No automated responses. A senior strategist reviews every submission.</p>
                </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   BOOK CALL PAGE  /book-call
══════════════════════════════════════════════════════════════════ */

const CALL_TIMES = [
  "9:00 AM ET",
  "10:30 AM ET",
  "12:00 PM ET",
  "1:30 PM ET",
  "3:00 PM ET",
  "4:30 PM ET",
];

export function BookCallPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  const today = new Date().toISOString().slice(0, 10);

  async function handleBookingSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setFormError("");
    try {
      await submitLeadForm(event.currentTarget, "Strategy call booking");
      setSubmitted(true);
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Unable to book your call right now.");
    } finally {
      setSubmitting(false);
    }
  }

  useSeo({
    title: "Book a Strategy Call | Outlier Digital",
    description: "Schedule a 30-minute strategy call with Outlier Digital to review your lead flow, website, SEO, and paid media opportunities.",
    canonicalPath: "/book-call",
  });

  return (
    <div className="min-h-screen bg-[#f9f8f5]">
      <Nav />
      <section className="relative bg-[#08090d] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="container mx-auto px-4 max-w-6xl relative z-10">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-4">30-minute strategy call</p>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.05] mb-5">
                Pick a time.<br /><span className="text-primary italic">Bring the real numbers.</span>
              </h1>
              <p className="text-white/45 text-[16px] leading-relaxed mb-8 max-w-lg">
                We will review your current lead flow, website, rankings, ads, and conversion path. You will leave with the highest-leverage next steps, whether you hire us or not.
              </p>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  { icon: Clock, title: "30 minutes", body: "Focused and useful" },
                  { icon: Users, title: "Senior strategist", body: "No junior handoff" },
                  { icon: Shield, title: "No pressure", body: "Straight diagnosis" },
                ].map((item) => (
                  <div key={item.title} className="bg-white/5 border border-white/10 rounded-xl p-4">
                    <item.icon className="w-5 h-5 text-primary mb-3" />
                    <p className="text-white font-bold text-sm">{item.title}</p>
                    <p className="text-white/35 text-xs mt-1">{item.body}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-[#e5e2d9] p-7 md:p-8 shadow-xl">
              {submitted ? (
                <div className="py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                    <CheckCircle2 className="w-8 h-8 text-primary" />
                  </div>
                  <h2 className="text-2xl font-black text-[#0e0e0e] mb-3">Call request received.</h2>
                  <p className="text-gray-500 text-sm leading-relaxed max-w-sm mx-auto">
                    We will confirm the calendar invite by email. If that slot is taken, we will send the closest available alternatives.
                  </p>
                </div>
              ) : (
                <form className="space-y-5" onSubmit={handleBookingSubmit}>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-2">Calendar</p>
                    <h2 className="text-2xl font-black text-[#0e0e0e]">Book a strategy call</h2>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Preferred date *</label>
                      <input name="preferredDate" type="date" min={today} className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" required />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Preferred time *</label>
                      <select name="preferredTime" className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-white" defaultValue="" required>
                        <option value="" disabled>Select time</option>
                        {CALL_TIMES.map((time) => <option key={time}>{time}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">First name *</label>
                      <input name="firstName" type="text" className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" required />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Last name *</label>
                      <input name="lastName" type="text" className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" required />
                    </div>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Work email *</label>
                      <input name="email" type="email" className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" required />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Phone</label>
                      <input name="phone" type="tel" className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Company / website *</label>
                    <input name="company" type="text" className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" placeholder="company.ca" required />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">What should we review?</label>
                    <textarea name="message" rows={4} className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none" placeholder="Lead flow, SEO, paid ads, website conversion, local rankings, or anything urgent." />
                  </div>
                  {formError && <p className="text-sm text-red-600">{formError}</p>}
                  <button type="submit" disabled={submitting} className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 text-[15px]">
                    <Calendar className="w-4 h-4" />
                    {submitting ? "Sending request..." : "Request Calendar Invite"}
                  </button>
                  <p className="text-center text-gray-400 text-[11px]">We confirm manually so the invite has the right strategist and context.</p>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   THANK YOU PAGE  /thank-you
══════════════════════════════════════════════════════════════════ */

export function ThankYouPage() {
  useSeo({
    title: "Thank You | Outlier Marketing Group",
    description: "Your submission has been received. A senior Outlier strategist will review it and be in touch within 1 business day.",
    canonicalPath: "/thank-you",
  });
  return (
    <div className="min-h-screen bg-[#08090d] flex flex-col">
      <Nav />
      <main className="flex-1 flex items-center justify-center px-4 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center max-w-xl"
        >
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="w-20 h-20 rounded-full bg-primary/15 border border-primary/30 flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle2 className="w-10 h-10 text-primary" />
          </motion.div>

          <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-4">Submission received</p>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.1] mb-5">
            We've got it.<br /><span className="text-primary italic">We'll be in touch.</span>
          </h1>
          <p className="text-white/40 text-[15px] leading-relaxed mb-10 max-w-md mx-auto">
            A senior team member will review your submission and reach out within 1 business day — usually the same day. No automated response, a real human.
          </p>

          {/* What happens next */}
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 mb-10 text-left">
            <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-4 text-center">What happens next</p>
            <div className="space-y-4">
              {[
                { step: "01", title: "We review your submission", desc: "A senior strategist personally reviews your information and does a quick desk audit." },
                { step: "02", title: "You receive a calendar invite", desc: "We'll send a Calendly link to schedule a convenient 30-minute call." },
                { step: "03", title: "Strategy call — no pitch", desc: "We walk through what we found and discuss your growth priorities. Straight conversation." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center font-black text-white text-[10px] flex-shrink-0 mt-0.5">{s.step}</div>
                  <div>
                    <p className="font-bold text-white text-sm">{s.title}</p>
                    <p className="text-white/40 text-[12px] mt-0.5">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-sm">
              Back to Home <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/insights" className="inline-flex items-center gap-2 border border-white/15 text-white/70 font-bold px-6 py-3.5 rounded-xl hover:border-white/30 hover:text-white transition-all text-sm">
              Read our Insights
            </Link>
          </div>
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
