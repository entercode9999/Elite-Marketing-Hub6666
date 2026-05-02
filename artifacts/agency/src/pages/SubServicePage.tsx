import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ArrowRight, Check, ChevronRight } from "lucide-react";

export interface SubServiceData {
  parentLabel: string;
  parentHref: string;
  label: string;
  headline: string;
  italic: string;
  subhead: string;
  stats: { value: string; label: string }[];
  deliverables: { title: string; body: string }[];
  process: { title: string; body: string }[];
  faq: { q: string; a: string }[];
  related: { label: string; href: string }[];
  cta: string;
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
          <motion.p
            initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.2 }}
            className="overflow-hidden text-sm text-white/45 pb-5 leading-relaxed pr-8"
          >{a}</motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}

export function SubServicePage({ data }: { data: SubServiceData }) {
  return (
    <div className="min-h-screen bg-[#08090d] text-white">
      <Nav />

      {/* HERO */}
      <section className="pt-28 pb-16 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <nav className="flex items-center gap-1.5 text-xs text-white/25 mb-6 flex-wrap">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span className="text-white/15">›</span>
            <Link href={data.parentHref} className="hover:text-primary transition-colors">{data.parentLabel}</Link>
            <span className="text-white/15">›</span>
            <span className="text-white/50">{data.label}</span>
          </nav>
          <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-4">{data.label}</p>
          <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-[1.04] mb-4 max-w-2xl">
            {data.headline}
            <span className="italic text-primary"> {data.italic}</span>
          </h1>
          <p className="text-base text-white/50 mb-10 max-w-xl leading-relaxed">{data.subhead}</p>
          <div className="flex flex-wrap gap-8 mb-10">
            {data.stats.map((s) => (
              <div key={s.label}>
                <p className="text-3xl font-black text-white tabular-nums leading-none">{s.value}</p>
                <p className="text-xs text-white/35 mt-1 font-medium">{s.label}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-3">
            <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3.5 px-6 rounded-xl text-sm hover:bg-primary/90 transition-colors group shadow-lg shadow-primary/20">
              Get a free audit <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link href={data.parentHref} className="inline-flex items-center gap-2 border border-white/12 text-white/55 hover:text-white hover:border-white/25 font-semibold py-3.5 px-6 rounded-xl text-sm transition-colors">
              View full {data.parentLabel} →
            </Link>
          </div>
        </div>
      </section>

      {/* DELIVERABLES */}
      <section className="py-16 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/25 mb-8">What we deliver</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
            {data.deliverables.map((d, i) => (
              <motion.div key={d.title} initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.07 }} className="flex gap-3">
                <div className="w-5 h-5 rounded-full border-2 border-primary flex items-center justify-center shrink-0 mt-0.5">
                  <Check className="w-2.5 h-2.5 text-primary" />
                </div>
                <div>
                  <p className="font-bold text-sm text-white mb-1">{d.title}</p>
                  <p className="text-sm text-white/45 leading-relaxed">{d.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESS */}
      <section className="py-16 bg-white/2 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/25 mb-8">Our approach</p>
          <div className="space-y-0">
            {data.process.map((step, i) => (
              <motion.div key={step.title} initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="flex gap-5 items-start py-5 border-b border-white/5 last:border-0">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                  <span className="text-[11px] font-black text-primary">{String(i + 1).padStart(2, "0")}</span>
                </div>
                <div className="flex-1 grid grid-cols-1 sm:grid-cols-[160px_1fr] gap-1 sm:gap-6">
                  <p className="font-bold text-sm text-white">{step.title}</p>
                  <p className="text-sm text-white/45 leading-relaxed">{step.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ + RELATED */}
      <section className="py-16 border-b border-white/5">
        <div className="max-w-5xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12">
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/25 mb-6">Common questions</p>
            <div className="bg-white/2 border border-white/8 rounded-2xl px-6">
              {data.faq.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
            </div>
          </div>
          <div>
            <p className="text-[10px] font-black uppercase tracking-[0.18em] text-white/25 mb-6">Related services</p>
            <div className="space-y-2">
              {data.related.map((r) => (
                <Link key={r.label} href={r.href}
                  className="flex items-center justify-between gap-3 p-3.5 rounded-xl border border-white/8 hover:border-primary/40 hover:text-primary transition-colors text-sm font-medium text-white/50 group">
                  {r.label}
                  <ArrowRight className="w-3.5 h-3.5 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-24 bg-[#08090d]">
        <div className="max-w-xl mx-auto px-6 text-center">
          <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-4 block">Ready?</span>
          <h2 className="text-3xl md:text-4xl font-black leading-tight mb-4">{data.cta}</h2>
          <p className="text-white/40 text-sm mb-8">One free diagnostic. No commitment. See exactly where you stand.</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl transition-all text-sm group shadow-[0_0_50px_rgba(26,86,255,0.22)]">
            Book your free audit <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
