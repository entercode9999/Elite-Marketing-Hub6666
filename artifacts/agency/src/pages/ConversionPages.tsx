import { motion } from "framer-motion";
import { Link } from "wouter";
import {
  ArrowRight, CheckCircle2, Star, Shield, Clock, Zap, TrendingUp,
  BarChart3, Search, Users, Phone, Mail, Target, Award, Check, X,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { useSeo } from "@/hooks/useSeo";

/* ══════════════════════════════════════════════════════════════════
   PRICING PAGE  /pricing
══════════════════════════════════════════════════════════════════ */

const PLANS = [
  {
    name: "Growth",
    badge: null,
    tagline: "For local service businesses ready to build a consistent lead flow.",
    starting: "2,500",
    period: "/ month",
    note: "Typical engagement: $2,500 – $4,500/mo",
    color: "#1a56ff",
    cta: "Start with a free audit",
    features: [
      "1 primary service channel (SEO or Paid)",
      "Dedicated senior strategist",
      "Monthly strategy calls",
      "Live Looker Studio dashboard",
      "Weekly written updates",
      "Keyword + competitor tracking",
      "Google Business Profile management",
      "Quarterly performance reviews",
    ],
    notIncluded: [
      "Multi-channel management",
      "Content production (add-on available)",
      "Web design / CRO",
    ],
  },
  {
    name: "Scale",
    badge: "Most popular",
    tagline: "For multi-location service businesses building systematic lead generation.",
    starting: "5,000",
    period: "/ month",
    note: "Typical engagement: $5,000 – $9,000/mo",
    color: "#1a56ff",
    cta: "Start with a free audit",
    features: [
      "2–3 integrated service channels",
      "Senior strategist + channel specialists",
      "Bi-weekly strategy calls",
      "Live Looker Studio dashboard",
      "Weekly written updates",
      "Full content production included",
      "CRO & landing page optimisation",
      "Google + Meta ad management",
      "Local SEO across multiple locations",
      "Monthly deep-dive reporting",
    ],
    notIncluded: [
      "Custom web development",
      "Large-scale ecommerce development",
    ],
  },
  {
    name: "Custom",
    badge: "Custom",
    tagline: "For multi-location service businesses ready to scale lead generation across markets.",
    starting: null,
    period: null,
    note: "Scoped to your business",
    color: "#0e0e0e",
    cta: "Request a custom proposal",
    features: [
      "Multi-channel lead generation management",
      "Dedicated account team (3+ specialists)",
      "Weekly calls + on-demand access",
      "Custom reporting & attribution modelling",
      "Programmatic SEO builds (pSEO)",
      "Ecommerce development & CRO",
      "Multi-market & multi-language SEO",
      "Executive business reviews (quarterly)",
      "Custom AI & automation integration",
      "White-glove onboarding",
    ],
    notIncluded: [],
  },
];

const PRICING_FAQ = [
  {
    q: "Are there setup or onboarding fees?",
    a: "No. All our plans include onboarding, the initial audit and strategy document, and dashboard setup — at no additional cost. We front-load the work because it's the foundation everything else depends on.",
  },
  {
    q: "Do you require a long-term contract?",
    a: "Initial projects are 6 months (to give strategies time to produce results), then month-to-month. We've kept exits easy deliberately — clients stay because the lead generation keeps working.",
  },
  {
    q: "Does the price include ad spend?",
    a: "No. Our fee is for strategy, management, and execution. Your ad budget is billed directly through Google/Meta and goes 100% to media — not our margin.",
  },
  {
    q: "Can I start with one channel and add more?",
    a: "Yes, and many clients do. We often start with the highest-leverage channel for your business and expand as you see results. Growing from one channel to two is straightforward.",
  },
  {
    q: "What if I'm not sure which plan fits?",
    a: "The free audit call resolves that. We assess your market, your goals, and your current baseline — then tell you exactly what level of engagement makes sense. No pressure, no upsell.",
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
      className={`relative flex flex-col rounded-2xl border overflow-hidden transition-shadow hover:shadow-xl ${
        isPop
          ? "border-primary ring-2 ring-primary/20 bg-white"
          : "border-[#e5e2d9] bg-white"
      }`}
    >
      {plan.badge && (
        <div className={`py-2 text-center text-[10px] font-black uppercase tracking-widest ${
          isPop ? "bg-primary text-white" : "bg-[#08090d] text-white"
        }`}>
          {plan.badge}
        </div>
      )}

      <div className="p-7 flex flex-col flex-1">
        <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-1">{plan.name}</p>
        <p className="text-gray-500 text-sm leading-snug mb-6 min-h-[40px]">{plan.tagline}</p>

        <div className="mb-1">
          {plan.starting ? (
            <div className="flex items-end gap-1">
              <span className="text-gray-400 text-sm font-medium mb-2">Starting from</span>
            </div>
          ) : null}
          <div className="flex items-baseline gap-1">
            {plan.starting ? (
              <>
                <span className="text-gray-500 text-xl font-bold">$</span>
                <span className="text-5xl font-black text-[#0e0e0e] leading-none">{plan.starting}</span>
                <span className="text-gray-400 text-sm font-medium">{plan.period}</span>
              </>
            ) : (
              <span className="text-4xl font-black text-[#0e0e0e] leading-none">Custom</span>
            )}
          </div>
          <p className="text-gray-400 text-[11px] mt-1">{plan.note}</p>
        </div>

        <div className="mt-6 mb-6">
          <Link
            href={plan.starting ? "/contact" : "/contact"}
            className={`w-full flex items-center justify-center gap-2 font-bold py-3.5 rounded-xl text-sm transition-colors group ${
              isPop
                ? "bg-primary text-white hover:bg-primary/90"
                : "bg-[#0e0e0e] text-white hover:bg-black"
            }`}
          >
            {plan.cta} <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        <div className="border-t border-[#e5e2d9] pt-6 flex-1">
          <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">What's included</p>
          <ul className="space-y-3 mb-6">
            {plan.features.map((f) => (
              <li key={f} className="flex items-start gap-2.5 text-sm text-[#0e0e0e]">
                <Check className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                {f}
              </li>
            ))}
          </ul>
          {plan.notIncluded.length > 0 && (
            <>
              <p className="text-[10px] font-black uppercase tracking-widest text-gray-300 mb-3">Not included</p>
              <ul className="space-y-2">
                {plan.notIncluded.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-gray-400">
                    <X className="w-4 h-4 text-gray-300 flex-shrink-0 mt-0.5" />
                    {f}
                  </li>
                ))}
              </ul>
            </>
          )}
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
    title: "Digital Marketing Pricing Toronto | Outlier",
    description: "See straightforward Toronto digital marketing pricing for SEO, Google Ads, and growth campaigns from Outlier.",
    canonicalPath: "/pricing",
  });
  return (
    <div className="min-h-screen bg-[#f9f8f5]">
      <Nav />

      {/* Hero */}
      <section className="relative bg-[#08090d] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-primary/10 rounded-full blur-[150px] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10 text-center">
          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
            className="text-[11px] font-black uppercase tracking-widest text-primary mb-4">Transparent Pricing</motion.p>
          <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl font-black text-white leading-[1.05] max-w-3xl mx-auto mb-5">
            Straightforward pricing.<br /><span className="text-primary italic">No percentage of spend.</span>
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
            className="text-white/40 text-lg max-w-xl mx-auto leading-relaxed mb-8">
            We charge a flat strategic fee — not a cut of your ad budget. Your media spend goes 100% to media.
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap gap-6 justify-center">
            {[
              { icon: Shield, text: "No percentage-of-spend fees" },
              { icon: Clock, text: "6-month initial, then month-to-month" },
              { icon: Star, text: "93% client retention rate" },
            ].map((b) => (
              <div key={b.text} className="flex items-center gap-2 text-white/50 text-sm">
                <b.icon className="w-4 h-4 text-primary" />
                {b.text}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Plans */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-6 mb-12">
            {PLANS.map((plan, i) => (
              <PlanCard key={plan.name} plan={plan} index={i} />
            ))}
          </div>

          {/* All plans note */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-[#08090d] rounded-2xl p-8 text-center"
          >
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Every Plan Includes</p>
            <div className="flex flex-wrap gap-x-8 gap-y-3 justify-center">
              {[
                "Free initial audit & strategy doc",
                "Senior team from day one",
                "Live Looker Studio dashboard",
                "No setup fees",
                "Weekly written updates",
                "No lock-in after initial term",
              ].map((item) => (
                <div key={item} className="flex items-center gap-2 text-white/60 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Add-ons */}
      <section className="py-16 bg-white border-y border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-xl mb-10">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Optional Add-Ons</p>
            <h2 className="text-2xl md:text-3xl font-black text-[#0e0e0e] leading-[1.1]">Extend any plan with additional services</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { service: "Content Production", desc: "Monthly blog posts, landing pages, and pillar content. From $800/mo.", icon: BarChart3 },
              { service: "Web Design & Development", desc: "New site builds, landing pages, and full redesigns. Custom scoped.", icon: Zap },
              { service: "Programmatic SEO Build", desc: "1,000+ city/service page builds with dynamic data templating. From $5,000.", icon: Search },
              { service: "Additional Locations", desc: "Local SEO for additional business locations. From $400/location/mo.", icon: Target },
              { service: "Paid Social Management", desc: "Meta, LinkedIn, TikTok campaigns. From $1,500/mo + spend.", icon: Users },
              { service: "AI & Automation", desc: "CRM automation, lead capture AI, workflow integration. Custom scoped.", icon: TrendingUp },
            ].map((a, i) => (
              <motion.div
                key={a.service}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.45 }}
                className="bg-[#f9f8f5] border border-[#e5e2d9] rounded-xl p-5 hover:border-primary/25 transition-all"
              >
                <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center mb-4">
                  <a.icon className="w-4 h-4 text-primary" />
                </div>
                <p className="font-black text-[#0e0e0e] text-[15px] mb-1.5">{a.service}</p>
                <p className="text-gray-500 text-[13px] leading-relaxed">{a.desc}</p>
              </motion.div>
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
  useSeo({
    title: "Free Digital Marketing Audit | Outlier Toronto",
    description: "Request a free growth audit from Outlier. A senior strategist reviews your website, ad accounts, and competitive landscape — then walks you through a custom roadmap.",
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
                <a href="tel:+18005550199" className="flex items-center gap-2 text-primary font-bold text-sm hover:text-primary/80 transition-colors">
                  <Phone className="w-4 h-4" /> 1-800-555-0199
                </a>
                <a href="mailto:hello@outlier.co" className="flex items-center gap-2 text-primary font-bold text-sm hover:text-primary/80 transition-colors mt-2">
                  <Mail className="w-4 h-4" /> hello@outlier.co
                </a>
              </div>
            </div>

            {/* Audit form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-[#e5e2d9] rounded-2xl p-8 shadow-sm">
                <h3 className="text-xl font-black text-[#0e0e0e] mb-2">Request your free audit</h3>
                <p className="text-gray-400 text-sm mb-7">We'll review your submission and reach out within 1 business day to schedule the call.</p>
                <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">First name *</label>
                      <input type="text" className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" placeholder="Jane" required />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Last name *</label>
                      <input type="text" className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" placeholder="Smith" required />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Business website *</label>
                    <input type="url" className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" placeholder="https://yoursite.ca" required />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Work email *</label>
                    <input type="email" className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" placeholder="jane@company.com" required />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Phone</label>
                    <input type="tel" className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" placeholder="+1 (416) 000-0000" />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">What are you looking to improve? *</label>
                    <select className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-white" defaultValue="" required>
                      <option value="" disabled>Select area of focus…</option>
                      {AUDIT_SERVICES.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Anything specific you want us to look at?</label>
                    <textarea rows={3} className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none" placeholder="e.g. Our Google Ads spend isn't converting, or we've dropped rankings recently…" />
                  </div>
                  <button type="submit" className="w-full bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group text-[15px]">
                    Request Free Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <p className="text-center text-gray-400 text-[11px]">No spam. No automated responses. A senior strategist reviews every submission.</p>
                </form>
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
