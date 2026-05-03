import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Home, Search, Phone } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { useSeo } from "@/hooks/useSeo";

export default function NotFound() {
  useSeo({
    title: "Page Not Found | Outlier",
    description: "The page you requested could not be found on Outlier.",
  });
  return (
    <div className="min-h-screen bg-[#08090d] flex flex-col">
      <Nav />

      <main className="flex-1 flex items-center justify-center px-4 py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-primary/8 rounded-full blur-[140px] pointer-events-none" />

        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative z-10 text-center max-w-2xl"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="text-[160px] md:text-[200px] font-black leading-none text-white/[0.04] select-none mb-0 tracking-tighter"
          >
            404
          </motion.div>

          <div className="-mt-16 md:-mt-20 relative">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-4">Page Not Found</p>
            <h1 className="text-4xl md:text-5xl font-black text-white leading-[1.1] mb-5">
              This page doesn't exist.<br />
              <span className="text-white/30 italic font-light">Your growth strategy should.</span>
            </h1>
            <p className="text-white/40 text-[15px] leading-relaxed mb-10 max-w-md mx-auto">
              The page you're looking for has moved, been deleted, or never existed. Let's get you somewhere useful.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-12">
              <Link
                href="/"
                className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-sm group"
              >
                <Home className="w-4 h-4" /> Back to Home
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 border border-white/15 text-white/70 font-bold px-6 py-3.5 rounded-xl hover:border-white/30 hover:text-white transition-all text-sm group"
              >
                <Phone className="w-4 h-4" /> Talk to us
              </Link>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-lg mx-auto">
              {[
                { label: "Our Work", href: "/our-work", icon: Search },
                { label: "Services", href: "/seo-services", icon: ArrowRight },
                { label: "Insights", href: "/insights", icon: ArrowRight },
              ].map((item) => (
                <Link
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white/50 hover:text-white hover:border-white/25 font-medium text-sm py-2.5 px-4 rounded-xl transition-all"
                >
                  {item.label} <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </main>

      <Footer />
    </div>
  );
}
