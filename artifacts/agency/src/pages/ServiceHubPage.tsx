import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LogoMarquee } from "@/components/LogoMarquee";
import { ArrowRight, Check, ChevronRight } from "lucide-react";
import { useSeo } from "@/hooks/useSeo";

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

export interface HubTechPlatform {
  platform: string;
  stat?: string;
  description: string;
}

export interface HubInsightArticle {
  image: string;
  category: string;
  readTime: string;
  title: string;
  excerpt: string;
  author: string;
  authorRole: string;
  href: string;
}

export interface HubProofSection {
  eyebrow: string;
  headline: string;
  body: string;
  secondBody?: string;
  bullets?: string[];
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
    secondBody?: string;
    bullets: string[];
    image?: string;
  };
  subServices: HubSubService[];
  features: HubFeature[];
  process: HubProcess[];
  caseStudies: HubCaseStudy[];
  faqs: HubFaq[];
  breadcrumb: string;
  proofSection?: HubProofSection;
  techStack?: HubTechPlatform[];
  hubInsights?: HubInsightArticle[];
}

function ProcessTab({ steps }: { steps: HubProcess[] }) {
  const [active, setActive] = useState(0);
  const current = steps[active];
  return (
    <div>
      {/* Horizontal numbered tabs */}
      <div className="flex flex-wrap gap-0 border border-[#e5e2d9] rounded-2xl overflow-hidden mb-8 bg-white">
        {steps.map((step, i) => (
          <button
            key={step.label}
            onClick={() => setActive(i)}
            className={`flex-1 min-w-[100px] flex flex-col items-center gap-1 py-4 px-3 text-center transition-all border-r border-[#e5e2d9] last:border-0 ${
              active === i ? "bg-[#08090d] text-white" : "bg-white text-gray-500 hover:bg-gray-50"
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
          className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start bg-white border border-[#e5e2d9] rounded-2xl p-6 md:p-8"
        >
          <div>
            <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">Step {active + 1}</span>
            <h3 className="text-2xl font-black text-[#0e0e0e] mb-4">{current.headline}</h3>
            <p className="text-base text-gray-500 leading-relaxed mb-6">{current.description}</p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-primary text-white font-bold py-3 px-6 rounded-xl text-sm group hover:bg-primary/90 transition-colors"
            >
              Book a Free Strategy Call
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
          <div className="bg-[#08090d] rounded-2xl p-8 border border-white/8 flex flex-col justify-between min-h-[260px] relative overflow-hidden">
            {/* Decorative large background number */}
            <span className="absolute -right-3 -top-4 text-[140px] font-black text-white/[0.04] leading-none select-none pointer-events-none">
              {String(active + 1).padStart(2, "0")}
            </span>

            <div className="relative z-10">
              <p className="text-[10px] font-black uppercase tracking-widest text-primary/60 mb-2">
                Phase {active + 1} of {steps.length}
              </p>
              <p className="text-white font-black text-2xl leading-snug">{current.label}</p>
            </div>

            {/* Step progress track */}
            <div className="relative z-10 mt-8">
              <p className="text-[10px] font-bold uppercase tracking-widest text-white/20 mb-3">All phases</p>
              <div className="flex gap-1.5 mb-3">
                {steps.map((step, i) => (
                  <button
                    key={i}
                    onClick={() => setActive(i)}
                    title={step.label}
                    className={`h-1 rounded-full transition-all flex-1 ${
                      i === active ? "bg-primary" : i < active ? "bg-white/25" : "bg-white/8"
                    }`}
                  />
                ))}
              </div>
              <p className="text-white/25 text-xs">
                {active < steps.length - 1
                  ? `Next: ${steps[active + 1].label}`
                  : "Final phase — results compound from here"}
              </p>
            </div>
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
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#0e0e0e] text-white font-bold py-3 px-6 rounded-xl text-sm group hover:bg-black/80 transition-colors"
        >
          Talk to our team <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
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
  const hubSchema: Record<string, unknown>[] = [
    {
      "@type": "BreadcrumbList",
      "itemListElement": [
        { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://outliermarketing.ca/" },
        { "@type": "ListItem", "position": 2, "name": data.breadcrumb, "item": `https://outliermarketing.ca/${data.slug}` },
      ],
    },
    {
      "@type": "Service",
      "name": data.hero.headline,
      "description": data.hero.description.slice(0, 300),
      "provider": { "@type": "LocalBusiness", "@id": "https://outliermarketing.ca/#business", "name": "Outlier Digital Marketing" },
      "areaServed": { "@type": "City", "name": "Toronto", "addressCountry": "CA" },
    },
    ...(data.faqs.length > 0 ? [{
      "@type": "FAQPage",
      "mainEntity": data.faqs.map((f) => ({
        "@type": "Question",
        "name": f.question,
        "acceptedAnswer": { "@type": "Answer", "text": f.answer },
      })),
    }] : []),
  ];

  useSeo({
    title: `${data.hero.headline} | Outlier`,
    description: data.hero.description.slice(0, 160),
    canonicalPath: `/${data.slug}`,
    schema: hubSchema,
  });

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
                <Link
                  href={data.hero.ctaHref}
                  className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-6 rounded-xl text-sm group shadow-lg shadow-primary/25 transition-all"
                >
                  {data.hero.cta}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
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
                <p className="text-base text-gray-500 leading-relaxed mb-4">{data.intro.body}</p>
                {data.intro.secondBody && (
                  <p className="text-base text-gray-500 leading-relaxed mb-6">{data.intro.secondBody}</p>
                )}
                <div className="space-y-3 mt-6">
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

        {/* ── PROOF SECTION (optional) ── */}
        {data.proofSection && (
          <section className="py-20 md:py-28 bg-[#f9f8f5] border-t border-[#e5e2d9]">
            <div className="max-w-6xl mx-auto px-6">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-4 block">{data.proofSection.eyebrow}</span>
                  <h2 className="text-4xl font-black text-[#0e0e0e] leading-tight mb-6">{data.proofSection.headline}</h2>
                  <p className="text-base text-gray-500 leading-relaxed mb-4">{data.proofSection.body}</p>
                  {data.proofSection.secondBody && (
                    <p className="text-base text-gray-500 leading-relaxed">{data.proofSection.secondBody}</p>
                  )}
                </div>
                {data.proofSection.bullets && data.proofSection.bullets.length > 0 && (
                  <div className="grid grid-cols-1 gap-0 border border-[#e5e2d9] rounded-2xl overflow-hidden bg-white">
                    {data.proofSection.bullets.map((b, i) => (
                      <motion.div
                        key={b}
                        initial={{ opacity: 0, x: 16 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 }}
                        className="flex items-start gap-4 px-6 py-4 border-b border-[#e5e2d9] last:border-0"
                      >
                        <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                          <Check className="w-3 h-3 text-primary" />
                        </div>
                        <span className="text-sm text-gray-600 leading-relaxed">{b}</span>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

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

        {/* ── TECH STACK (optional) ── */}
        {data.techStack && data.techStack.length > 0 && (
          <section className="py-20 md:py-28 bg-[#f9f8f5] border-t border-[#e5e2d9]">
            <div className="max-w-6xl mx-auto px-6">
              <div className="mb-12">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">Technology</span>
                <h2 className="text-4xl font-black text-[#0e0e0e] leading-tight">The platforms we build on.</h2>
                <p className="text-base text-gray-500 mt-4 max-w-xl">We're platform-agnostic but opinionated. Every platform recommendation is made after understanding your business model, your team's capability, and your growth plans — not because it's easiest for us.</p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {data.techStack.map((t, i) => (
                  <motion.div
                    key={t.platform}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.06 }}
                    className="bg-white border border-[#e5e2d9] rounded-2xl p-6 hover:border-primary/30 hover:shadow-sm transition-all"
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="font-black text-[#0e0e0e] text-lg">{t.platform}</h3>
                      {t.stat && (
                        <span className="text-xs font-bold text-primary bg-primary/8 rounded-full px-2.5 py-1 shrink-0 ml-2">{t.stat}</span>
                      )}
                    </div>
                    <p className="text-sm text-gray-500 leading-relaxed">{t.description}</p>
                  </motion.div>
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
                <Link href="/our-work" className="text-sm font-semibold text-white/40 hover:text-white transition-colors flex items-center gap-1">
                  All work <ArrowRight className="w-4 h-4" />
                </Link>
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
          <section className="py-20 md:py-28 bg-white border-t border-[#e5e2d9]">
            <div className="max-w-3xl mx-auto px-6">
              <div className="mb-12 text-center">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">FAQ</span>
                <h2 className="text-4xl font-black text-[#0e0e0e]">Answers, before you ask.</h2>
                <p className="text-gray-500 text-[15px] leading-relaxed max-w-xl mx-auto mt-4">The most common questions we hear about services, process, timelines, and fit — answered plainly.</p>
              </div>
              <div className="space-y-3">
                <FaqAccordion items={data.faqs} />
              </div>
            </div>
          </section>
        )}

        {/* ── HUB INSIGHTS (optional) ── */}
        {data.hubInsights && data.hubInsights.length > 0 && (
          <section className="py-20 md:py-28 bg-white border-t border-[#e5e2d9]">
            <div className="max-w-6xl mx-auto px-6">
              <div className="flex items-end justify-between mb-12">
                <div>
                  <span className="text-[10px] font-black uppercase tracking-widest text-primary mb-3 block">Insights</span>
                  <h2 className="text-4xl font-black text-[#0e0e0e] leading-tight">Industry perspectives.</h2>
                  <p className="text-base text-gray-500 mt-3 max-w-md">Practical guides and data-backed insights from our senior team.</p>
                </div>
                <Link href="/contact" className="text-sm font-semibold text-gray-400 hover:text-[#0e0e0e] transition-colors flex items-center gap-1 shrink-0">
                  All articles <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                {data.hubInsights.map((a, i) => (
                  <motion.a
                    key={a.title}
                    href={a.href}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08 }}
                    className="group flex flex-col border border-[#e5e2d9] rounded-2xl overflow-hidden hover:border-primary/30 hover:shadow-md transition-all"
                  >
                    <div className="aspect-[16/9] overflow-hidden bg-[#f2f2ef]">
                      <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] font-black uppercase tracking-widest text-primary">{a.category}</span>
                        <span className="text-[10px] text-gray-300">·</span>
                        <span className="text-[10px] text-gray-400">{a.readTime}</span>
                      </div>
                      <h3 className="font-bold text-[#0e0e0e] text-base leading-snug mb-3 group-hover:text-primary transition-colors">{a.title}</h3>
                      <p className="text-sm text-gray-500 leading-relaxed flex-1">{a.excerpt}</p>
                      <div className="mt-5 pt-4 border-t border-[#e5e2d9] flex items-center gap-3">
                        <div className="w-7 h-7 rounded-full bg-[#0e0e0e] flex items-center justify-center text-white text-[10px] font-black">
                          {a.author.charAt(0)}
                        </div>
                        <div>
                          <p className="text-xs font-bold text-[#0e0e0e]">{a.author}</p>
                          <p className="text-[10px] text-gray-400">{a.authorRole}</p>
                        </div>
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
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
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-4 px-8 rounded-xl text-sm shadow-lg shadow-primary/25 group transition-all"
              >
                Book a Free Audit
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
              <Link
                href="/our-work"
                className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white font-semibold py-4 px-8 rounded-xl text-sm transition-all"
              >
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
