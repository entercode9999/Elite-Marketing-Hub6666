import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ArrowRight, Check, ChevronRight, Shield, Clock, BarChart2, Zap } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";

export interface IndustryData {
  industry: string;
  slug: string;
  headline: string;
  italic: string;
  subhead: string;
  image: string;
  stats: { value: string; label: string }[];
  services: { title: string; body: string; href: string; color: string }[];
  caseStudy: { label: string; headline: string; body: string; metrics: { value: string; label: string }[] };
  challenges: { title: string; body: string }[];
  otherIndustries: { name: string; href: string }[];
  cta: string;
  tactics?: { title: string; body: string }[];
  industryStats?: { value: string; label: string; context: string }[];
  compliance?: string;
  faq?: { q: string; a: string }[];
  longIntro?: string;
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="group">
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-start justify-between gap-4 py-5 text-left">
        <span className={`text-[15px] font-bold leading-snug transition-colors ${open ? "text-primary" : "text-[#0e0e0e] group-hover:text-primary"}`}>
          {q}
        </span>
        <div className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0 mt-0.5 transition-all" style={{ background: open ? "#1a56ff" : "rgba(0,0,0,0.05)" }}>
          <ChevronRight className={`w-3.5 h-3.5 transition-transform ${open ? "rotate-90 text-white" : "text-gray-500"}`} />
        </div>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div key="content" initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.28, ease: "easeInOut" }} className="overflow-hidden">
            <p className="text-sm text-gray-500 leading-relaxed pb-5 pr-8 max-w-2xl">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function IndustryPage({ data }: { data: IndustryData }) {
  const canonicalPath = `/${data.slug}`;
  const schemaGraph: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://outliermarketing.ca/" },
        { "@type": "ListItem", "position": 2, "name": `${data.industry} Marketing`, "item": `https://outliermarketing.ca${canonicalPath}` },
      ],
    },
    {
      "@type": "Service",
      "name": `${data.industry} Digital Marketing`,
      "description": data.subhead,
      "provider": { "@type": "LocalBusiness", "@id": "https://outliermarketing.ca/#business", "name": "Outlier Digital Marketing" },
      "areaServed": { "@type": "City", "name": "Toronto", "addressCountry": "CA" },
    },
    ...(data.faq && data.faq.length > 0 ? [{
      "@type": "FAQPage",
      "mainEntity": data.faq.map((f) => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a },
      })),
    }] : []),
  ];

  useSeo({
    title: `${data.industry} Marketing Toronto | Outlier`,
    description: data.subhead.slice(0, 160),
    canonicalPath,
    schema: schemaGraph,
  });

  const tactics = data.tactics ?? [
    { title: "Vertical-specific keyword architecture", body: "We don't use generic keyword research templates. Every campaign and content cluster starts from the exact query language your prospective clients use — informed by intent data from your specific vertical." },
    { title: "Industry-calibrated benchmarks", body: "We compare your performance against industry-specific benchmarks, not generic marketing averages. A 3% CVR is mediocre for eCommerce but excellent for high-ticket professional services." },
    { title: "Compliance-aware execution", body: "Every industry has rules around advertising claims, testimonials, and required disclosures. We operate within your industry's specific regulatory framework from day one." },
    { title: "Category authority first", body: "We build your digital presence to own the category, not just rank for it. The businesses that win in your market own the content, the links, and the reputation — not just the ads." },
  ];

  const indStats = data.industryStats ?? [
    { value: "97%", label: "of buyers search online first", context: "before contacting any business in your category" },
    { value: "70%", label: "of clicks go to top 3 results", context: "map pack or organic — which is where we build your presence" },
    { value: "3x", label: "higher conversion from inbound", context: "vs. cold outreach or interruption advertising" },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-primary selection:text-white">
      <Nav />

      {/* ── HERO — dark split ── */}
      <section className="min-h-[480px] grid grid-cols-1 md:grid-cols-2 pt-[68px]">
        {/* Left: dark */}
        <div className="bg-[#08090d] flex flex-col justify-center px-10 lg:px-16 py-20 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={data.image} alt={data.industry} className="w-full h-full object-cover opacity-8" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090d] via-[#08090d]/90 to-[#08090d]/70" />
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative z-10">
            <nav className="flex items-center gap-1.5 text-xs text-white/25 mb-6 flex-wrap">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="text-white/15">›</span>
              <span className="text-white/40">Industries</span>
              <span className="text-white/15">›</span>
              <span className="text-white/60">{data.industry}</span>
            </nav>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-5">{data.industry} Marketing</p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.04] tracking-tight mb-6">
              {data.headline}
              <br />
              <span className="italic text-primary font-light">{data.italic}</span>
            </h1>
            <p className="text-base text-white/55 leading-relaxed mb-8 max-w-md">{data.subhead}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 rounded-xl text-sm group shadow-lg shadow-primary/25 transition-all">
                Get a free {data.industry} audit <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href="#case-study" className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/60 hover:text-white font-semibold py-3.5 px-6 rounded-xl text-sm transition-all">
                See a client result
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right: stats on light bg */}
        <div className="bg-[#f2f2ef] flex flex-col items-center justify-center px-8 py-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full max-w-sm"
          >
            <div className="grid grid-cols-2 gap-3">
              {data.stats.map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-5 border border-[#e5e2d9] shadow-sm text-center">
                  <p className="text-3xl font-black text-[#0e0e0e] tabular-nums leading-none">{s.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-2 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── LOGO MARQUEE ── */}
      <div className="border-t border-[#e5e2d9]">
        <LogoMarquee />
      </div>

      {/* ── INDUSTRY STATS BAR ── */}
      <div className="bg-white border-y border-[#e5e2d9]">
        <div className="max-w-5xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 divide-y sm:divide-y-0 sm:divide-x divide-[#e5e2d9]">
            {indStats.map((s) => (
              <div key={s.label} className="text-center px-4 py-2">
                <p className="text-4xl font-black text-[#0e0e0e] mb-1">{s.value}</p>
                <p className="text-xs font-bold text-primary mb-1">{s.label}</p>
                <p className="text-xs text-gray-400 leading-relaxed">{s.context}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── SERVICES ── */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">What we run for {data.industry}</span>
          <h2 className="text-4xl font-black text-[#0e0e0e] mb-4">Services proven in your vertical.</h2>
          <p className="text-sm text-gray-500 mb-12 max-w-xl leading-relaxed">Every service is configured for {data.industry} specifics — the keyword language, the conversion benchmarks, the regulatory constraints, and the competitive landscape of your market.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Link href={s.href} className="flex flex-col h-full bg-white border border-[#e5e2d9] rounded-2xl p-5 hover:border-primary/40 group transition-all min-h-[140px] shadow-sm">
                  <div className="w-2 h-2 rounded-full mb-3 shrink-0" style={{ background: s.color }} />
                  <p className="font-bold text-sm text-[#0e0e0e] mb-2 group-hover:text-primary transition-colors">{s.title}</p>
                  <p className="text-xs text-gray-500 leading-relaxed flex-1">{s.body}</p>
                  <div className="flex items-center gap-1 text-primary text-xs font-bold mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── HOW WE APPROACH THIS INDUSTRY ── */}
      <section className="py-20 md:py-28 bg-[#f9f8f5] border-t border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">Our vertical playbook</span>
          <h2 className="text-4xl font-black text-[#0e0e0e] mb-12">How we approach {data.industry} differently.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {tactics.map((t, i) => (
              <motion.div key={t.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="flex gap-4 p-6 border border-[#e5e2d9] rounded-2xl bg-white">
                <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-xs font-black text-primary">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <p className="font-bold text-[#0e0e0e] mb-1.5">{t.title}</p>
                  <p className="text-sm text-gray-500 leading-relaxed">{t.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY ── */}
      <section id="case-study" className="py-20 md:py-28 bg-white border-t border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">{data.industry} · Client result</span>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">{data.caseStudy.label}</p>
              <h2 className="text-3xl font-black text-[#0e0e0e] leading-tight mb-5">{data.caseStudy.headline}</h2>
              <p className="text-sm text-gray-500 leading-relaxed mb-8">{data.caseStudy.body}</p>
              <div className="flex flex-wrap gap-4">
                {data.caseStudy.metrics.map((m) => (
                  <div key={m.label} className="bg-white border border-[#e5e2d9] rounded-xl p-4 text-center min-w-[100px] shadow-sm">
                    <p className="text-2xl font-black text-[#0e0e0e] tabular-nums">{m.value}</p>
                    <p className="text-[10px] text-gray-400 mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center gap-2 border border-[#e5e2d9] hover:border-primary/40 text-gray-500 hover:text-primary font-semibold py-3 px-5 rounded-xl text-sm transition-colors">
                  Get a similar result for your business →
                </Link>
              </div>
            </div>
            {/* Growth chart */}
            <div className="bg-[#f9f8f5] border border-[#e5e2d9] rounded-2xl p-6">
              <p className="text-[9px] text-gray-400 uppercase tracking-widest mb-4">Lead / revenue growth — month by month</p>
              <div className="h-40 flex items-end gap-1.5 px-2 mb-4">
                {[8, 14, 12, 20, 18, 28, 25, 40, 52, 68, 82, 100].map((h, i) => (
                  <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.04 }} className="flex-1 rounded-t"
                    style={{ background: i >= 9 ? "#1a56ff" : "#e5e2d9" }} />
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {data.caseStudy.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="text-lg font-black text-[#0e0e0e] tabular-nums">{m.value}</p>
                    <p className="text-[9px] text-gray-400">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── LONG INTRO (if applicable) ── */}
      {data.longIntro && (
        <section className="py-14 bg-white border-t border-[#e5e2d9]">
          <div className="max-w-3xl mx-auto px-6">
            <p className="text-base text-gray-600 leading-[1.85] whitespace-pre-line">{data.longIntro}</p>
          </div>
        </section>
      )}

      {/* ── CHALLENGES ── */}
      <section className="py-20 md:py-28 bg-[#f9f8f5] border-t border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">Industry challenges</span>
          <h2 className="text-4xl font-black text-[#0e0e0e] mb-4">What {data.industry} businesses face in digital.</h2>
          <p className="text-sm text-gray-500 mb-12 max-w-xl leading-relaxed">These aren't generic digital marketing challenges — they're specific to your vertical and why a specialist outperforms a generalist agency every time.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {data.challenges.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="border-l-2 border-primary pl-5 bg-white p-5 rounded-r-xl border border-[#e5e2d9] border-l-0">
                <p className="font-bold text-[#0e0e0e] mb-2">{c.title}</p>
                <p className="text-sm text-gray-500 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      {data.faq && data.faq.length > 0 && (
        <section className="py-20 md:py-28 bg-white border-t border-[#e5e2d9]">
          <div className="max-w-3xl mx-auto px-6">
            <div className="mb-12 text-center">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">FAQ</span>
              <h2 className="text-4xl font-black text-[#0e0e0e]">Common questions.</h2>
            </div>
            <div className="space-y-3">
              {data.faq.map((item) => (
                <FaqItem key={item.q} q={item.q} a={item.a} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── COMPLIANCE (if applicable) ── */}
      {data.compliance && (
        <section className="py-10 border-t border-[#e5e2d9] bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex gap-4 items-start p-5 bg-amber-50 border border-amber-200 rounded-2xl">
              <Shield className="w-5 h-5 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-[#0e0e0e] mb-1">Regulatory awareness</p>
                <p className="text-sm text-gray-500 leading-relaxed">{data.compliance}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── SPECIALIST vs GENERALIST ── */}
      <section className="py-20 md:py-28 bg-white border-t border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">Specialist vs. generalist</span>
          <h2 className="text-4xl font-black text-[#0e0e0e] mb-12">Why a {data.industry} specialist wins.</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-red-50 border border-red-100 rounded-2xl p-6">
              <p className="text-xs font-black uppercase tracking-widest text-red-500 mb-5">Generalist agency</p>
              {[
                `Learns your ${data.industry} business on your budget`,
                "Generic keyword research that misses vertical-specific intent",
                "Unaware of industry regulations and compliant claim limits",
                `No ${data.industry}-specific benchmark data to measure against`,
                "Treats your business the same as a restaurant or software company",
              ].map((item) => (
                <div key={item} className="flex gap-3 py-2.5 border-b border-red-100 last:border-0">
                  <span className="text-red-400 text-xs font-bold shrink-0 mt-0.5">✕</span>
                  <p className="text-xs text-gray-500 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
            <div className="bg-primary/5 border border-primary/15 rounded-2xl p-6">
              <p className="text-xs font-black uppercase tracking-widest text-primary mb-5">Outlier for {data.industry}</p>
              {[
                `Decade-deep playbook for ${data.industry} — no learning curve`,
                `${data.industry}-specific intent mapping from real campaign data`,
                `Fully compliant execution within your industry's regulatory framework`,
                `Benchmark data from dozens of ${data.industry} clients across GTA and nationally`,
                `Strategy calibrated to ${data.industry} unit economics and sales cycles`,
              ].map((item) => (
                <div key={item} className="flex gap-3 py-2.5 border-b border-primary/8 last:border-0">
                  <Check className="w-3.5 h-3.5 text-primary shrink-0 mt-0.5" />
                  <p className="text-xs text-gray-600 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST PILLARS ── */}
      <section className="py-14 bg-[#f9f8f5] border-t border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Clock, title: "30 days", sub: "First results visible" },
              { icon: Shield, title: "No lock-in", sub: "Monthly rolling" },
              { icon: BarChart2, title: "Revenue focus", sub: "Not vanity metrics" },
              { icon: Zap, title: "Senior team", sub: "Always on your account" },
            ].map(({ icon: Icon, title, sub }) => (
              <div key={title} className="text-center p-5 border border-[#e5e2d9] rounded-2xl bg-white shadow-sm">
                <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="font-black text-sm text-[#0e0e0e]">{title}</p>
                <p className="text-[10px] text-gray-400 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER INDUSTRIES ── */}
      <section className="py-14 bg-white border-t border-[#e5e2d9]">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-6 block">Other industries we serve</span>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {data.otherIndustries.map((ind) => (
              <Link key={ind.name} href={ind.href}
                className="flex items-center gap-2 py-3 px-4 rounded-xl border border-[#e5e2d9] bg-white hover:border-primary/40 hover:text-primary transition-colors text-sm font-medium text-gray-500 shadow-sm">
                <Check className="w-3.5 h-3.5 text-primary/40 shrink-0" />
                {ind.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-[#08090d] border-t border-white/5">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-4 block">{data.industry}</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">{data.cta}</h2>
          <p className="text-base text-white/40 mb-8 max-w-md mx-auto leading-relaxed">
            Free audit — your current digital footprint vs. your top 3 competitors in {data.industry}. No commitment.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all text-sm group shadow-lg shadow-primary/25">
            Book your free {data.industry} audit <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
          <div className="flex items-center justify-center gap-6 mt-8">
            {["No lock-in contracts", "Senior team always", "Results in 30 days"].map((t) => (
              <div key={t} className="flex items-center gap-1.5 text-xs text-white/25">
                <Check className="w-3 h-3 text-primary/50" />
                {t}
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
