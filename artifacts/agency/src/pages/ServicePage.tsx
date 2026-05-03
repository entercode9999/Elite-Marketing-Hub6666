import { useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Nav } from "@/components/nav";
import { LogoMarquee } from "@/components/sections/LogoMarquee";
import { data } from "./serviceData";

export function ServicePage() {
  const pageData = useMemo(() => data, []);

  return (
    <div className="min-h-screen bg-white selection:bg-primary selection:text-white flex flex-col">
      <Nav />

      {/* ══ HERO — dark split (left text / right stats card) ══ */}
      <section className="grid grid-cols-1 md:grid-cols-2 pt-[16px] md:pt-[24px] min-h-[calc(100vh-68px)]">
        {/* Left: dark */}
        <div className="bg-[#08090d] flex flex-col justify-start px-10 lg:px-16 pt-6 pb-8 lg:pt-8 lg:pb-10">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <nav className="flex items-center gap-1.5 text-xs text-white/25 mb-4 flex-wrap">
              {pageData.breadcrumb.map((crumb, i) => (
                <span key={crumb} className="flex items-center gap-1.5">
                  {i > 0 && <span className="text-white/15">›</span>}
                  <span className={i === pageData.breadcrumb.length - 1 ? "text-white/50 font-medium" : ""}>{crumb}</span>
                </span>
              ))}
            </nav>
            <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-3">{pageData.label}</p>
            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.04] tracking-tight mb-4">
              {pageData.headline}
              <br />
              <span className="italic text-primary font-light">{pageData.headlineAccent}</span>
            </h1>
            <p className="text-base text-white/55 leading-relaxed mb-6 max-w-md">{pageData.subhead}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 rounded-xl text-sm group shadow-lg shadow-primary/25 transition-all"
            >
              Get a free audit
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        <div className="bg-[#f2f2ef] flex items-start justify-center px-8 pt-6 pb-8 lg:pt-8 lg:pb-10">
          <motion.div initial={{ opacity: 0, scale: 0.96 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6, delay: 0.1 }} className="w-full max-w-sm">
            <div className="grid grid-cols-2 gap-4">
              {pageData.stats.map((s) => (
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
    </div>
  );
}
