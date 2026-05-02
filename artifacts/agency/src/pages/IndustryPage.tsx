import { motion } from "framer-motion";
import { Link } from "wouter";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ArrowRight, Check } from "lucide-react";
import type { ReactNode } from "react";

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
}

export function IndustryPage({ data }: { data: IndustryData }) {
  return (
    <div className="min-h-screen bg-[#08090d] text-white">
      <Nav />

      {/* HERO */}
      <section className="relative pt-28 pb-0 overflow-hidden">
        {/* Background image with dark overlay */}
        <div className="absolute inset-0 z-0">
          <img src={data.image} alt={data.industry} className="w-full h-full object-cover opacity-15" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#08090d]/80 via-[#08090d]/60 to-[#08090d]" />
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
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.03] mb-4 max-w-3xl">
            {data.headline}
            <span className="italic text-primary"> {data.italic}</span>
          </h1>
          <p className="text-base text-white/50 mb-10 max-w-xl leading-relaxed">{data.subhead}</p>
          {/* Stats */}
          <div className="flex flex-wrap gap-10 mb-12">
            {data.stats.map((s) => (
              <div key={s.label}>
                <p className="text-4xl font-black text-white tabular-nums leading-none">{s.value}</p>
                <p className="text-xs text-white/35 mt-1.5 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-3 pb-16">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-bold py-4 px-7 rounded-xl text-sm hover:bg-primary/90 transition-colors group shadow-lg shadow-primary/20">
              Get a free {data.industry} audit <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link href="#case-study" className="inline-flex items-center gap-2 border border-white/12 text-white/55 hover:text-white hover:border-white/25 font-semibold py-4 px-7 rounded-xl text-sm transition-colors">
              See a result
            </Link>
          </div>
        </div>
      </section>

      <LogoMarquee />

      {/* SERVICES WE RUN FOR THIS INDUSTRY */}
      <section className="py-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary mb-3">What we run for {data.industry}</p>
          <h2 className="text-3xl font-black mb-10">Services proven in your vertical.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {data.services.map((s, i) => (
              <motion.div key={s.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.06 }}>
                <Link href={s.href} className="flex flex-col h-full bg-white/3 border border-white/8 rounded-2xl p-5 hover:border-primary/40 group transition-all">
                  <div className="w-2 h-2 rounded-full mb-3" style={{ background: s.color }} />
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

      {/* CASE STUDY */}
      <section id="case-study" className="py-16 bg-white/2 border-b border-white/5">
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
            </div>
            {/* Growth chart */}
            <div className="h-48 flex items-end gap-1.5 px-2">
              {[10, 18, 14, 26, 22, 36, 30, 48, 56, 70, 85, 100].map((h, i) => (
                <motion.div key={i} initial={{ height: 0 }} whileInView={{ height: `${h}%` }} viewport={{ once: true }}
                  transition={{ duration: 0.7, delay: i * 0.05 }} className="flex-1 rounded-t"
                  style={{ background: i >= 9 ? "#1a56ff" : "rgba(255,255,255,0.07)" }} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CHALLENGES */}
      <section className="py-16 border-b border-white/5">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-primary mb-3">Industry challenges</p>
          <h2 className="text-2xl font-black mb-10">What {data.industry} businesses face in digital.</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {data.challenges.map((c, i) => (
              <div key={c.title} className="border-l-2 border-primary pl-5">
                <p className="font-bold text-sm text-white mb-2">{c.title}</p>
                <p className="text-sm text-white/40 leading-relaxed">{c.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* OTHER INDUSTRIES */}
      <section className="py-16 bg-white/2 border-b border-white/5">
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

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-xl mx-auto px-6 text-center">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-4 block">{data.industry}</span>
          <h2 className="text-3xl md:text-4xl font-black leading-tight mb-4">{data.cta}</h2>
          <p className="text-white/40 text-sm mb-8 leading-relaxed">Free audit — your current digital footprint vs. your top 3 competitors in {data.industry}.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all text-sm group shadow-[0_0_50px_rgba(26,86,255,0.22)]">
            Book your free {data.industry} audit <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
