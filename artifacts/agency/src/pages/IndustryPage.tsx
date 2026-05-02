import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ArrowRight, Check, ChevronRight, Shield, Clock, BarChart2, Zap } from "lucide-react";

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
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-white/8 last:border-0">
      <button onClick={() => setOpen((v) => !v)} className="w-full flex items-center justify-between gap-4 py-5 text-left">
        <span className="font-semibold text-sm text-white/75 pr-4">{q}</span>
        <ChevronRight className={`w-4 h-4 shrink-0 text-white/30 transition-transform ${open ? "rotate-90" : ""}`} />
      </button>
      <AnimatePresence>
        {open && (
          <motion.p initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}
            className="overflow-hidden text-sm text-white/45 pb-5 leading-relaxed pr-8">{a}</motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export function IndustryPage({ data }: { data: IndustryData }) {
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
    <div className="min-h-screen bg-[#08090d] text-white">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative pt-28 pb-0 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={data.image} alt={data.industry} className="w-full h-full object-cover opacity-12" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08090d]/85 via-[#08090d]/65 to-[#08090d]" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:60px_60px]" />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6">
          <nav className="flex items-center gap-1.5 text-xs text-white/25 mb-6 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="text-white/15">›</span>
            <span>Industries</span>
            <span className="text-white/15">›</span>
            <span className="text-white/50">{data.industry}</span>
          </nav>
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-4">{data.industry} Marketing</p>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.03] mb-5 max-w-3xl">
            {data.headline}
            <span className="italic text-primary"> {data.italic}</span>
          </h1>
          <p className="text-base text-white/50 mb-10 max-w-xl leading-relaxed">{data.subhead}</p>
          <div className="flex flex-wrap gap-10 mb-12">
            {data.stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-black text-white tabular-nums leading-none">{s.value}</p>
                <p className="text-xs text-white/35 mt-1.5 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-3 pb-16">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-bold py-4 px-7 rounded-xl text-sm hover:bg-primary/90 transition-colors group shadow-lg shadow-primary/20">
              Get a free {data.industry} audit <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link href="#case-study" className="inline-flex items-center gap-2 border border-white/12 text-white/55 hover:text-white hover:border-white/25 font-semibold py-4 px-7 rounded-xl text-sm transition-colors">
              See a client result
            </Link>
          </div>
        </div>
      </section>

      <LogoMarquee />

      {/* ── INDUSTRY STATS ── */}
      <section className="py-12 bg-primary/5 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            {indStats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="text-4xl font-black text-white mb-1">{s.value}</p>
                <p className="text-xs font-bold text-primary mb-1">{s.label}</p>
                <p className="text-xs text-white/35 leading-relaxed">{s.context}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary mb-3">What we run for {data.industry}</p>
          <h2 className="text-3xl font-black mb-3">Services proven in your vertical.</h2>
          <p className="text-sm text-white/40 mb-10 max-w-xl">Every service is configured for {data.industry} specifics — the keyword language, the conversion benchmarks, the regulatory constraints, and the competitive landscape of your market.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Link href={s.href} className="flex flex-col h-full bg-white/3 border border-white/8 rounded-2xl p-5 hover:border-primary/40 group transition-all min-h-[140px]">
                  <div className="w-2 h-2 rounded-full mb-3 shrink-0" style={{ background: s.color }} />
                  <p className="font-bold text-sm text-white mb-2 group-hover:text-primary transition-colors">{s.title}</p>
                  <p className="text-xs text-white/40 leading-relaxed flex-1">{s.body}</p>
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
      <section className="py-16 bg-white/2 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary mb-3">Our vertical playbook</p>
          <h2 className="text-2xl font-black mb-10">How we approach {data.industry} differently.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {tactics.map((t, i) => (
              <motion.div key={t.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="flex gap-4 p-5 border border-white/8 rounded-2xl">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center shrink-0">
                  <span className="text-xs font-black text-primary">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <p className="font-bold text-sm text-white mb-1.5">{t.title}</p>
                  <p className="text-xs text-white/40 leading-relaxed">{t.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY ── */}
      <section id="case-study" className="py-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary mb-4">{data.industry} · Client result</p>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-white/25 mb-3">{data.caseStudy.label}</p>
              <h2 className="text-3xl font-black leading-tight mb-5">{data.caseStudy.headline}</h2>
              <p className="text-sm text-white/45 leading-relaxed mb-8">{data.caseStudy.body}</p>
              <div className="flex flex-wrap gap-4">
                {data.caseStudy.metrics.map((m) => (
                  <div key={m.label} className="bg-white/5 border border-white/8 rounded-xl p-4 text-center min-w-[100px]">
                    <p className="text-2xl font-black text-white tabular-nums">{m.value}</p>
                    <p className="text-[10px] text-white/35 mt-1">{m.label}</p>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center gap-2 border border-white/12 hover:border-primary/40 text-white/55 hover:text-primary font-semibold py-3 px-5 rounded-xl text-sm transition-colors">
                  Get a similar result for your business →
                </Link>
              </div>
            </div>
            {/* Growth chart */}
            <div className="bg-white/3 border border-white/8 rounded-2xl p-6">
              <p className="text-[9px] text-white/25 uppercase tracking-widest mb-4">Lead / revenue growth — month by month</p>
              <div className="h-40 flex items-end gap-1.5 px-2 mb-4">
                {[8, 14, 12, 20, 18, 28, 25, 40, 52, 68, 82, 100].map((h, i) => (
                  <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.04 }} className="flex-1 rounded-t"
                    style={{ background: i >= 9 ? "#1a56ff" : "rgba(255,255,255,0.07)" }} />
                ))}
              </div>
              <div className="grid grid-cols-3 gap-3">
                {data.caseStudy.metrics.map((m) => (
                  <div key={m.label} className="text-center">
                    <p className="text-lg font-black text-white tabular-nums">{m.value}</p>
                    <p className="text-[9px] text-white/35">{m.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CHALLENGES ── */}
      <section className="py-16 bg-white/2 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary mb-3">Industry challenges</p>
          <h2 className="text-2xl font-black mb-4">What {data.industry} businesses face in digital.</h2>
          <p className="text-sm text-white/40 mb-10 max-w-xl">These aren't generic digital marketing challenges — they're specific to your vertical and why a specialist outperforms a generalist agency every time.</p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {data.challenges.map((c, i) => (
              <motion.div key={c.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                className="border-l-2 border-primary pl-5">
                <p className="font-bold text-sm text-white mb-2">{c.title}</p>
                <p className="text-sm text-white/40 leading-relaxed">{c.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE (if applicable) ── */}
      {data.compliance && (
        <section className="py-10 border-b border-white/5">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex gap-4 items-start p-5 bg-amber-500/5 border border-amber-500/20 rounded-2xl">
              <Shield className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-bold text-white mb-1">Regulatory awareness</p>
                <p className="text-sm text-white/45 leading-relaxed">{data.compliance}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── WHY OUTLIER vs. GENERALIST ── */}
      <section className="py-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/25 mb-3">Specialist vs. generalist</p>
          <h2 className="text-2xl font-black mb-10">Why a {data.industry} specialist wins.</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-red-500/5 border border-red-500/12 rounded-2xl p-6">
              <p className="text-xs font-black uppercase tracking-widest text-red-400 mb-5">Generalist agency</p>
              {[
                `Learns your ${data.industry} business on your budget`,
                "Generic keyword research that misses vertical-specific intent",
                "Unaware of industry regulations and compliant claim limits",
                "No {industry}-specific benchmark data to measure against",
                "Treats your business the same as a restaurant or software company",
              ].map((item) => (
                <div key={item} className="flex gap-3 py-2.5 border-b border-red-500/8 last:border-0">
                  <span className="text-red-400 text-xs font-bold shrink-0 mt-0.5">✕</span>
                  <p className="text-xs text-white/40 leading-relaxed">{item.replace("{industry}", data.industry)}</p>
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
                  <p className="text-xs text-white/60 leading-relaxed">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST + PROCESS QUICK VIEW ── */}
      <section className="py-14 bg-white/2 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { icon: Clock, title: "30 days", sub: "First results visible" },
              { icon: Shield, title: "No lock-in", sub: "Monthly rolling" },
              { icon: BarChart2, title: "Revenue focus", sub: "Not vanity metrics" },
              { icon: Zap, title: "Senior team", sub: "Always on your account" },
            ].map(({ icon: Icon, title, sub }) => (
              <div key={title} className="text-center p-4 border border-white/8 rounded-2xl">
                <Icon className="w-5 h-5 text-primary mx-auto mb-2" />
                <p className="font-black text-sm text-white">{title}</p>
                <p className="text-[10px] text-white/35 mt-0.5">{sub}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER INDUSTRIES ── */}
      <section className="py-14 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/25 mb-6">Other industries we serve</p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {data.otherIndustries.map((ind) => (
              <Link key={ind.name} href={ind.href}
                className="flex items-center gap-2 py-3 px-4 rounded-xl border border-white/8 hover:border-primary/40 hover:text-primary transition-colors text-sm font-medium text-white/40">
                <Check className="w-3.5 h-3.5 text-primary/40 shrink-0" />
                {ind.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(26,86,255,0.12),transparent_70%)]" />
        <div className="max-w-xl mx-auto px-6 text-center relative z-10">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-4 block">{data.industry}</span>
          <h2 className="text-3xl md:text-4xl font-black leading-tight mb-4">{data.cta}</h2>
          <p className="text-white/40 text-sm mb-8 leading-relaxed max-w-md mx-auto">
            Free audit — your current digital footprint vs. your top 3 competitors in {data.industry}. No commitment.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all text-sm group shadow-[0_0_50px_rgba(26,86,255,0.22)]">
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
