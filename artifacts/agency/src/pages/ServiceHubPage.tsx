import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ArrowRight, Check, ChevronRight } from "lucide-react";

export interface HubSubService {
  tab: string;
  headline: string;
  description: string;
  bullets: string[];
  image?: string;
  href: string;
}

export interface HubFeature {
  icon: React.ReactNode;
  title: string;
  body: string;
}

export interface HubProcess {
  label: string;
  headline: string;
  description: string;
}

export interface HubCaseStudy {
  image: string;
  client: string;
  industry: string;
  blurb: string;
  metrics: { value: string; label: string }[];
}

export interface HubFaq {
  question: string;
  answer: string;
}

export interface HubData {
  slug: string;
  label: string;
  hero: {
    headline: string;
    italic?: string;
    description: string;
    cta: string;
    ctaHref: string;
    badges: string[];
    visual: React.ReactNode;
  };
  stats: { value: string; label: string }[];
  intro: {
    eyebrow: string;
    headline: string;
    body: string;
    bullets: string[];
    image?: string;
  };
  subServices: HubSubService[];
  features: HubFeature[];
  process: HubProcess[];
  caseStudies: HubCaseStudy[];
  faqs: HubFaq[];
  breadcrumb: string;
}

function ProcessTab({ steps }: { steps: HubProcess[] }) {
  const [active, setActive] = useState(0);
  const current = steps[active];
  return (
    <div>
      {/* Horizontal numbered tabs */}
      <div className="flex flex-wrap gap-0 border border-[#e5e2d9] rounded-xl overflow-hidden mb-8">
        {steps.map((step, i) => (
          <button
            key={step.label}
            onClick={() => setActive(i)}
            className={`flex-1 min-w-[100px] flex flex-col items-center gap-1 py-4 px-3 text-center transition-all border-r border-[#e5e2d9] last:border-0 ${
              active === i ? "bg-[#0e0e0e] text-white" : "bg-white text-gray-500 hover:bg-gray-50"
            }`}
          >
            <span className={`text-xl font-black ${active === i ? "text-primary" : "text-gray-300"}`}>
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="text-xs font-bold">{step.label}</span>
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">Step {active + 1}</span>
            <h3 className="text-2xl font-black text-[#0e0e0e] mb-4">{current.headline}</h3>
            <p className="text-base text-gray-500 leading-relaxed mb-6">{current.description}</p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-xl text-sm group hover:bg-primary/90 transition-colors"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>
          <div className="bg-[#f9f8f5] rounded-2xl p-8 border border-[#e5e2d9]">
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
              <span className="text-2xl font-black text-primary">{String(active + 1).padStart(2, "0")}</span>
            </div>
            <h4 className="font-bold text-[#0e0e0e] mb-3">{current.headline}</h4>
            <p className="text-sm text-gray-500 leading-relaxed">{current.description}</p>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

function SubServiceTabs({ items }: { items: HubSubService[] }) {
  const [active, setActive] = useState(0);
  const current = items[active];
  return (
    <div>
      {/* Horizontal tabs */}
      <div className="border-b border-[#e5e2d9] flex gap-0 mb-10 overflow-x-auto">
        {items.map((item, i) => (
          <button
            key={item.tab}
            onClick={() => setActive(i)}
            className={`shrink-0 px-5 py-3.5 text-sm font-bold transition-all border-b-2 -mb-px ${
              active === i
                ? "border-primary text-[#0e0e0e]"
                : "border-transparent text-gray-400 hover:text-gray-700"
            }`}
          >
            {item.tab}
          </button>
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={active}
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -10 }}
          transition={{ duration: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
        >
          {/* Text side */}
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">{current.tab}</span>
            <h3 className="text-3xl font-black text-[#0e0e0e] mb-4 leading-tight">{current.headline}</h3>
            <p className="text-base text-gray-500 leading-relaxed mb-6">{current.description}</p>
            <div className="space-y-2.5 mb-8">
              {current.bullets.map((b) => (
                <div key={b} className="flex items-start gap-2.5">
                  <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-gray-600">{b}</span>
                </div>
              ))}
            </div>
            <Link
              href={current.href}
              className="inline-flex items-center gap-2 font-bold text-sm text-primary group"
            >
              Learn more about {current.tab}
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Visual side */}
          <div className="rounded-2xl overflow-hidden bg-[#0a0c12] border border-white/5 aspect-[4/3] relative">
            {current.image ? (
              <img src={current.image} alt={current.tab} className="w-full h-full object-cover opacity-80" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-center p-8">
                  <p className="text-3xl font-black text-white mb-2">{current.tab}</p>
                  <p className="text-sm text-white/30">{current.headline}</p>
                </div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            <div className="absolute bottom-5 left-5">
              <p className="text-white font-black text-lg">{current.tab}</p>
              <p className="text-white/60 text-xs mt-0.5">{current.headline}</p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="mt-8 text-center">
        <p className="text-sm text-gray-400 mb-3">Not sure where to start?</p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#0e0e0e] text-white font-bold py-3 px-6 rounded-xl text-sm group hover:bg-black/80 transition-colors"
        >
          Talk to our team <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </a>
      </div>
    </div>
  );
}

function FaqAccordion({ items }: { items: HubFaq[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="space-y-3">
      {items.map((item, i) => (
        <div key={i} className="border border-[#e5e2d9] rounded-xl overflow-hidden">
          <button
            onClick={() => setOpen(open === i ? null : i)}
            className="w-full flex items-center justify-between px-6 py-4 text-left font-bold text-[#0e0e0e] hover:bg-gray-50 transition-colors"
          >
            {item.question}
            <ChevronRight className={`w-4 h-4 text-gray-400 shrink-0 transition-transform ${open === i ? "rotate-90" : ""}`} />
          </button>
          <AnimatePresence>
            {open === i && (
              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "auto" }}
                exit={{ height: 0 }}
                transition={{ duration: 0.2 }}
                className="overflow-hidden"
              >
                <p className="px-6 py-4 pt-0 text-sm text-gray-500 leading-relaxed border-t border-[#e5e2d9]">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export function ServiceHubPage({ data }: { data: HubData }) {
  useEffect(() => { window.scrollTo(0, 0); }, [data.slug]);

  return (
    <div className="min-h-screen flex flex-col bg-white selection:bg-primary selection:text-white">
      <Nav />

      <main className="flex-1 pt-[68px]">
        {/* ── SPLIT HERO (Kinex-style: dark left / white right) ── */}
        <section className="min-h-[500px] grid grid-cols-1 md:grid-cols-2">
          {/* Left: dark */}
          <div className="bg-[#08090d] flex flex-col justify-center px-10 lg:px-16 py-20">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-[10px] font-black uppercase tracking-[0.25em] text-primary mb-5">{data.label}</p>
              <h1 className="text-4xl lg:text-5xl xl:text-6xl font-black text-white leading-[1.04] tracking-tight mb-6">
                {data.hero.headline}
                {data.hero.italic && (
                  <>
                    <br />
                    <span className="text-primary italic font-light">{data.hero.italic}</span>
                  </>
                )}
              </h1>
              <p className="text-base text-white/55 leading-relaxed mb-8 max-w-md">
                {data.hero.description}
              </p>
              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href={data.hero.ctaHref}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 rounded-xl text-sm group shadow-lg shadow-primary/25 transition-all"
                >
                  {data.hero.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
              {/* Badges */}
              <div className="flex flex-wrap gap-3">
                {data.hero.badges.map((badge) => (
                  <span key={badge} className="text-[10px] font-bold text-white/35 border border-white/10 px-3 py-1.5 rounded-full">
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right: light */}
          <div className="bg-[#f2f2ef] flex items-center justify-center px-8 py-16 relative overflow-hidden min-h-[400px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="w-full max-w-[480px]"
            >
              {data.hero.visual}
            </motion.div>
          </div>
        </section>

        {/* ── LOGO MARQUEE ── */}
        <LogoMarquee />

        {/* ── STATS BAR ── */}
        <div className="bg-white border-y border-[#e5e2d9]">
          <div className="max-w-5xl mx-auto px-6 py-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-[#e5e2d9]">
              {data.stats.map((s) => (
                <div key={s.label} className="text-center px-4">
                  <p className="text-3xl font-black text-[#0e0e0e]">{s.value}</p>
                  <p className="text-xs text-gray-400 mt-1 font-medium">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── INTRO SECTION ── */}
        <section className="py-20 md:py-28 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">{data.intro.eyebrow}</span>
                <h2 className="text-4xl font-black text-[#0e0e0e] mb-5 leading-tight">{data.intro.headline}</h2>
                <p className="text-base text-gray-500 leading-relaxed mb-6">{data.intro.body}</p>
                <div className="space-y-3">
                  {data.intro.bullets.map((b) => (
                    <div key={b} className="flex items-start gap-2.5">
                      <Check className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-gray-600">{b}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative rounded-2xl overflow-hidden bg-[#0a0c12] border border-black/5 aspect-[4/3] shadow-2xl">
                {data.intro.image ? (
                  <img src={data.intro.image} alt={data.intro.headline} className="w-full h-full object-cover opacity-75" />
                ) : (
                  <div className="w-full h-full bg-gradient-to-br from-[#0d1525] to-[#08090d] flex items-center justify-center">
                    <div className="grid grid-cols-2 gap-3 p-8 w-full">
                      {data.stats.map((s) => (
                        <div key={s.label} className="bg-white/5 rounded-xl p-4 border border-white/5">
                          <p className="text-2xl font-black text-white">{s.value}</p>
                          <p className="text-[10px] text-white/30 mt-1">{s.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              </div>
            </div>
          </div>
        </section>

        {/* ── WHAT WE COVER (Kinex-style internal tabs) ── */}
        <section className="py-20 md:py-28 bg-[#f9f8f5] border-t border-[#e5e2d9]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-10">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">What we cover</span>
              <h2 className="text-4xl font-black text-[#0e0e0e] leading-tight">
                Every service under one roof.
              </h2>
            </div>
            <SubServiceTabs items={data.subServices} />
          </div>
        </section>

        {/* ── FEATURES GRID ── */}
        {data.features.length > 0 && (
          <section className="py-20 md:py-28 bg-white border-t border-[#e5e2d9]">
            <div className="max-w-6xl mx-auto px-6">
              <div className="mb-12">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">Capabilities</span>
                <h2 className="text-4xl font-black text-[#0e0e0e]">Built for performance at every layer.</h2>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {data.features.map((f) => (
                  <div key={f.title} className="p-6 border border-[#e5e2d9] rounded-2xl hover:border-primary/30 transition-colors group">
                    <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mb-4 group-hover:bg-primary/15 transition-colors">
                      {f.icon}
                    </div>
                    <h3 className="font-bold text-[#0e0e0e] mb-2">{f.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{f.body}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── CASE STUDIES ── */}
        {data.caseStudies.length > 0 && (
          <section className="py-20 md:py-28 bg-[#08090d]">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-end justify-between mb-12">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">Selected Work</span>
                  <h2 className="text-4xl font-black text-white">Proven outcomes.</h2>
                </div>
                <a href="/work" className="text-sm font-semibold text-white/40 hover:text-white transition-colors flex items-center gap-1">
                  All work <ArrowRight className="w-4 h-4" />
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {data.caseStudies.map((cs) => (
                  <div key={cs.client} className="bg-white/5 border border-white/8 rounded-2xl overflow-hidden hover:border-primary/30 transition-all group">
                    <div className="aspect-[16/9] overflow-hidden relative">
                      <img src={cs.image} alt={cs.client} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                      <div className="absolute top-3 left-3 flex gap-2">
                        <span className="px-2 py-0.5 bg-primary text-white text-[10px] font-bold uppercase rounded">{cs.industry}</span>
                      </div>
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold text-white mb-2">{cs.client}</h3>
                      <p className="text-sm text-white/40 mb-4 leading-relaxed">{cs.blurb}</p>
                      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/8">
                        {cs.metrics.map((m) => (
                          <div key={m.label}>
                            <p className="text-xl font-black text-white">{m.value}</p>
                            <p className="text-xs text-white/30">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* ── OUR PROCESS ── */}
        <section className="py-20 md:py-28 bg-white border-t border-[#e5e2d9]">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-12">
              <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">How we work</span>
              <h2 className="text-4xl font-black text-[#0e0e0e]">Our Strategic Process</h2>
            </div>
            <ProcessTab steps={data.process} />
          </div>
        </section>

        {/* ── FAQ ── */}
        {data.faqs.length > 0 && (
          <section className="py-20 md:py-28 bg-[#f9f8f5] border-t border-[#e5e2d9]">
            <div className="max-w-3xl mx-auto px-6">
              <div className="mb-12 text-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">FAQ</span>
                <h2 className="text-4xl font-black text-[#0e0e0e]">Common questions.</h2>
              </div>
              <FaqAccordion items={data.faqs} />
            </div>
          </section>
        )}

        {/* ── CTA ── */}
        <section className="py-20 bg-[#08090d] border-t border-white/5">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-4 block">Ready?</span>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-5 leading-tight">
              Let's build something that
              <br />
              <span className="text-primary italic font-light">compounds over time.</span>
            </h2>
            <p className="text-base text-white/40 mb-8 max-w-md mx-auto leading-relaxed">
              One senior team. Every channel. No hand-offs. Book a free strategy call and we'll audit your current setup and show you exactly what we'd do differently.
            </p>
            <div className="flex flex-wrap gap-3 justify-center">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl text-sm shadow-lg shadow-primary/25 group transition-all"
              >
                Book a Free Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
              <a
                href="/work"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white font-semibold py-4 px-8 rounded-xl text-sm transition-all"
              >
                View Our Work
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
