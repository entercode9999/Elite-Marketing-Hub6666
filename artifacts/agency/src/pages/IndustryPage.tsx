import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronDown, ChevronUp, AlertCircle } from "lucide-react";
import { Nav } from "@/components/nav";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Footer } from "@/components/footer";

export interface IndustryData {
  industry: string;
  slug: string;
  image: string;
  headline: string;
  italic: string;
  subhead: string;
  stats: Array<{ value: string; label: string }>;
  longIntro: string;
  industryStats: Array<{ value: string; label: string; context: string }>;
  services: Array<{ title: string; body: string; href: string; color: string }>;
  tactics: Array<{ title: string; body: string }>;
  caseStudy: { label: string; headline: string; body: string; metrics: Array<{ value: string; label: string }> };
  challenges: Array<{ title: string; body: string }>;
  faq: Array<{ q: string; a: string }>;
  compliance?: string;
  otherIndustries: Array<{ name: string; href: string }>;
  cta: string;
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

export function IndustryPage({ data }: { data: IndustryData }) {
  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-primary selection:text-white">
      <Nav />

      {/* ── HERO ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 pt-[16px] md:pt-[24px] min-h-[calc(100vh-68px)]">
        <div className="bg-[#08090d] flex flex-col justify-start px-10 lg:px-16 pt-6 pb-8 lg:pt-8 lg:pb-10 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={data.image} alt={data.industry} className="w-full h-full object-cover opacity-8" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090d] via-[#08090d]/90 to-[#08090d]/70" />
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative z-10">
            <nav className="flex items-center gap-1.5 text-xs text-white/25 mb-4 flex-wrap">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="text-white/15">›</span>
              <span className="text-white/40">Industries</span>
              <span className="text-white/15">›</span>
              <span className="text-white/60">{data.industry}</span>
            </nav>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-3">{data.industry} Marketing</p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.04] tracking-tight mb-4">
              {data.headline}
              <br />
              <span className="italic text-primary font-light">{data.italic}</span>
            </h1>
            <p className="text-base text-white/55 leading-relaxed mb-6 max-w-md">{data.subhead}</p>
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

        <div className="bg-[#f2f2ef] flex flex-col items-center justify-start px-8 pt-6 pb-8 lg:pt-8 lg:pb-10">
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="w-full max-w-sm">
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

      <div className="border-t border-[#e5e2d9]">
        <LogoMarquee />
      </div>

      {/* ── LONG INTRO ── */}
      <section className="py-20 border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">The {data.industry} market</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1] mb-6">
                Why {data.industry} marketing is different
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed text-[15.5px]">
                {data.longIntro.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm">
                  Talk to a {data.industry} specialist <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              {data.industryStats.map((stat) => (
                <div key={stat.label} className="bg-[#f9f8f5] border border-[#e5e2d9] rounded-2xl p-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-4xl font-black text-primary">{stat.value}</span>
                    <span className="text-sm font-bold text-[#0e0e0e]">{stat.label}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{stat.context}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-20 bg-[#f9f8f5] border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">What we do</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1] mb-10">
            Marketing services for {data.industry}
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.services.map((svc) => (
              <Link key={svc.href} href={svc.href} className="bg-white border border-[#e5e2d9] rounded-2xl p-7 hover:border-primary/40 hover:shadow-md transition-all group flex flex-col">
                <div className="w-10 h-10 rounded-xl mb-4 flex-shrink-0" style={{ backgroundColor: svc.color + "20" }}>
                  <div className="w-full h-full rounded-xl flex items-center justify-center">
                    <div className="w-4 h-4 rounded-full" style={{ backgroundColor: svc.color }} />
                  </div>
                </div>
                <h3 className="font-bold text-[#0e0e0e] mb-2 text-[15px]">{svc.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed flex-1">{svc.body}</p>
                <div className="mt-4 flex items-center gap-1.5 text-primary text-xs font-bold">
                  Learn more <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TACTICS ── */}
      <section className="py-20 border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">How we win</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1] mb-10">
            The tactics that move the needle for {data.industry}
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {data.tactics.map((t, i) => (
              <div key={t.title} className="flex gap-5">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-[11px] font-black text-primary">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#0e0e0e] mb-2 text-[15px]">{t.title}</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY ── */}
      <section id="case-study" className="py-20 bg-[#08090d] border-b border-white/8">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Client result</p>
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold text-white/30 uppercase tracking-widest mb-4">{data.caseStudy.label}</p>
              <h2 className="text-2xl md:text-3xl font-black text-white leading-[1.15] mb-5">{data.caseStudy.headline}</h2>
              <p className="text-white/55 leading-relaxed mb-8">{data.caseStudy.body}</p>
              <Link href="/our-work" className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white font-semibold px-6 py-3 rounded-xl text-sm transition-all">
                See all case studies <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="grid grid-cols-3 gap-4">
              {data.caseStudy.metrics.map((m) => (
                <div key={m.label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                  <p className="text-3xl font-black text-primary mb-1">{m.value}</p>
                  <p className="text-[11px] font-bold text-white/40 uppercase tracking-wide leading-tight">{m.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CHALLENGES ── */}
      <section className="py-20 bg-[#f9f8f5] border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Common challenges</p>
          <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1] mb-10">
            What makes {data.industry} marketing complex
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {data.challenges.map((c) => (
              <div key={c.title} className="bg-white border border-[#e5e2d9] rounded-2xl p-7">
                <h3 className="font-bold text-[#0e0e0e] mb-3 text-[15px]">{c.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── COMPLIANCE ── */}
      {data.compliance && (
        <section className="py-10 bg-amber-50 border-b border-amber-200">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="flex gap-4 items-start">
              <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-black uppercase tracking-widest text-amber-700 mb-1">Compliance note</p>
                <p className="text-sm text-amber-800 leading-relaxed">{data.compliance}</p>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ── CTA ── */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xl md:text-2xl font-black text-white mb-6 leading-snug">{data.cta}</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors text-[15px]">
            Get a free {data.industry} audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">FAQ</p>
          <h2 className="text-2xl md:text-3xl font-black text-[#0e0e0e] mb-10">
            Common questions about {data.industry} marketing
          </h2>
          <div className="divide-y divide-[#e5e2d9]">
            {data.faq.map((item) => (
              <FAQItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      {/* ── OTHER INDUSTRIES ── */}
      {data.otherIndustries && data.otherIndustries.length > 0 && (
        <section className="py-16 bg-[#f9f8f5] border-b border-[#e5e2d9]">
          <div className="container mx-auto px-4 max-w-7xl">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Other industries</p>
            <h2 className="text-2xl font-black text-[#0e0e0e] mb-8">We also specialise in</h2>
            <div className="flex flex-wrap gap-3">
              {data.otherIndustries.map((ind) => (
                <Link key={ind.href} href={ind.href} className="bg-white border border-[#e5e2d9] rounded-xl px-4 py-2.5 text-sm font-semibold text-[#0e0e0e] hover:border-primary/40 hover:text-primary transition-all">
                  {ind.name}
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
