import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/nav";
import { LogoMarquee } from "@/components/LogoMarquee";

export interface IndustryData {
  industry: string;
  slug: string;
  image: string;
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

export function IndustryPage({ data }: { data: IndustryData }) {
  const pageData = data;

  return (
    <div className="min-h-screen bg-white flex flex-col selection:bg-primary selection:text-white">
      <Nav />

      {/* ── HERO — dark split ── */}
      <section className="grid grid-cols-1 md:grid-cols-2 pt-[16px] md:pt-[24px] min-h-[calc(100vh-68px)]">
        <div className="bg-[#08090d] flex flex-col justify-start px-10 lg:px-16 pt-6 pb-8 lg:pt-8 lg:pb-10 relative overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img src={pageData.image} alt={pageData.industry} className="w-full h-full object-cover opacity-8" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#08090d] via-[#08090d]/90 to-[#08090d]/70" />
          </div>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="relative z-10">
            <nav className="flex items-center gap-1.5 text-xs text-white/25 mb-4 flex-wrap">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <span className="text-white/15">›</span>
              <span className="text-white/40">Industries</span>
              <span className="text-white/15">›</span>
              <span className="text-white/60">{pageData.industry}</span>
            </nav>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-3">{pageData.industry} Marketing</p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.04] tracking-tight mb-4">
              {pageData.headline}
              <br />
              <span className="italic text-primary font-light">{pageData.italic}</span>
            </h1>
            <p className="text-base text-white/55 leading-relaxed mb-6 max-w-md">{pageData.subhead}</p>
            <div className="flex flex-wrap gap-3">
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 rounded-xl text-sm group shadow-lg shadow-primary/25 transition-all">
                Get a free {pageData.industry} audit <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
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
              {pageData.stats.map((s) => (
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
    </div>
  );
}
