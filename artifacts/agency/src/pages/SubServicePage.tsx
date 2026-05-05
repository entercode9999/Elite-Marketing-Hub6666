import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, ChevronDown, ChevronUp, CheckCircle2 } from "lucide-react";
import { Nav } from "@/components/nav";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Footer } from "@/components/footer";
import { useSeo } from "@/hooks/useSeo";

export interface SubServiceData {
  parentLabel: string;
  parentHref: string;
  label: string;
  headline: string;
  italic: string;
  subhead: string;
  stats: Array<{ value: string; label: string }>;
  deliverables?: Array<{ title: string; body: string }>;
  process?: Array<{ title: string; body: string }>;
  faq?: Array<{ q: string; a: string }>;
  related?: Array<{ label: string; href: string }>;
  cta?: string;
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e5e2d9] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left"
      >
        <span className="font-semibold text-[#0e0e0e] text-[15px] leading-snug">{q}</span>
        {open
          ? <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" />
          : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
      </button>
      {open && <p className="pb-5 text-gray-600 leading-relaxed text-[15px]">{a}</p>}
    </div>
  );
}

export function SubServicePage({ data }: { data: SubServiceData }) {
  const metaDesc = data.subhead.length > 155 ? data.subhead.slice(0, 152) + "..." : data.subhead;
  useSeo({
    title: `${data.label} | ${data.parentLabel} | Outlier`,
    description: metaDesc,
    canonicalPath: window.location.pathname,
  });

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-primary selection:text-white">
      <Nav />

      {/* ── HERO ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 pt-[16px] md:pt-[24px] min-h-[calc(100vh-68px)]">
        <div className="bg-[#08090d] flex flex-col justify-start px-10 lg:px-16 pt-6 pb-8 lg:pt-8 lg:pb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <nav className="flex items-center gap-1.5 text-xs text-white/25 mb-4 flex-wrap">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="text-white/15">›</span>
              <Link href={data.parentHref} className="hover:text-primary transition-colors">{data.parentLabel}</Link>
              <span className="text-white/15">›</span>
              <span className="text-white/50">{data.label}</span>
            </nav>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-3">{data.label}</p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.04] tracking-tight mb-4">
              {data.headline}
              <br />
              <span className="italic text-primary font-light">{data.italic}</span>
            </h1>
            <p className="text-base text-white/55 leading-relaxed mb-6 max-w-md">{data.subhead}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 rounded-xl text-sm group shadow-lg shadow-primary/25 transition-all">
                Get a free audit <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link href={data.parentHref} className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/60 hover:text-white font-semibold py-3.5 px-6 rounded-xl text-sm transition-all">
                {data.parentLabel} overview →
              </Link>
            </div>
          </motion.div>
        </div>

        <div className="bg-[#f2f2ef] flex flex-col items-center justify-start px-8 pt-6 pb-8 lg:pt-8 lg:pb-10 gap-6">
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="w-full max-w-sm">
            <div className="grid grid-cols-3 gap-3 mb-5">
              {data.stats.map((s) => (
                <div key={s.label} className="bg-white rounded-2xl p-4 border border-[#e5e2d9] shadow-sm text-center">
                  <p className="text-2xl font-black text-[#0e0e0e] tabular-nums leading-none">{s.value}</p>
                  <p className="text-[10px] font-bold uppercase tracking-wider text-gray-400 mt-1.5 leading-tight">{s.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <div className="border-t border-[#e5e2d9]">
        <LogoMarquee />
      </div>

      {/* ── DELIVERABLES ── */}
      {data.deliverables && data.deliverables.length > 0 && (
        <section className="py-20 bg-[#f9f8f5] border-b border-[#e5e2d9]">
          <div className="container mx-auto px-4 max-w-7xl">
            <div className="mb-12">
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">What's included</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1]">
                Every deliverable in this engagement
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
              {data.deliverables.map((d) => (
                <div key={d.title} className="bg-white border border-[#e5e2d9] rounded-2xl p-7">
                  <div className="flex items-start gap-3 mb-3">
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                    </div>
                    <h3 className="font-bold text-[#0e0e0e] text-[15px] leading-snug">{d.title}</h3>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed pl-11">{d.body}</p>
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
            <div className="mb-12">
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">How it works</p>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-[1.1]">Our process</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-5">
              {data.process.map((step, i) => (
                <div key={step.title} className="bg-white/4 border border-white/8 rounded-2xl p-7">
                  <div className="w-8 h-8 rounded-full bg-primary/15 flex items-center justify-center mb-4">
                    <span className="text-[11px] font-black text-primary">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <h3 className="font-bold text-white mb-2 text-[15px]">{step.title}</h3>
                  <p className="text-sm text-white/45 leading-relaxed">{step.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ── CTA BANNER ── */}
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
        <section className="py-20 bg-white border-b border-[#e5e2d9]">
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

      {/* ── RELATED PAGES ── */}
      {data.related && data.related.length > 0 && (
        <section className="py-16 bg-[#f9f8f5] border-b border-[#e5e2d9]">
          <div className="container mx-auto px-4 max-w-7xl">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Related services</p>
            <h2 className="text-2xl font-black text-[#0e0e0e] mb-8">More ways we can help</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {data.related.map((r) => (
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
