import { useState } from "react";
import { motion } from "framer-motion";
import { Link, useParams } from "wouter";
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Search, TrendingUp } from "lucide-react";
import { Nav } from "@/components/nav";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Footer } from "@/components/footer";
import { useSeo } from "@/hooks/useSeo";
import { serviceIndustryPages } from "@/data/serviceIndustry";

export interface ServiceIndustryPageData {
  meta: { title: string; description: string };
  city: { slug: string; name: string; province: string; abbrev: string };
  service: { slug: string; label: string; shortLabel: string };
  industry: { slug: string; label: string };
  hero: {
    headline: string;
    italic: string;
    tagline: string;
    stats: Array<{ value: string; label: string }>;
  };
  intro: string[];
  industryStats: Array<{ value: string; label: string; context: string }>;
  keywords: string[];
  whyPoints: Array<{ title: string; body: string }>;
  deliverables: Array<{ title: string; description: string }>;
  process: Array<{ step: string; title: string; description: string }>;
  whyOrganic: { headline: string; body: string[] };
  caseStudy: {
    label: string;
    headline: string;
    body: string;
    metrics: Array<{ value: string; label: string }>;
  };
  timeline: Array<{ period: string; title: string; desc: string }>;
  faqs: Array<{ q: string; a: string }>;
  cta: string;
  relatedPages: Array<{ label: string; href: string }>;
}

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e5e2d9] last:border-0">
      <button onClick={() => setOpen(!open)} className="w-full flex items-center justify-between gap-4 py-5 text-left">
        <span className="font-semibold text-[#0e0e0e] text-[15px] leading-snug">{q}</span>
        {open ? <ChevronUp className="w-4 h-4 text-primary flex-shrink-0" /> : <ChevronDown className="w-4 h-4 text-gray-400 flex-shrink-0" />}
      </button>
      {open && <p className="pb-5 text-gray-600 leading-relaxed text-[15px]">{a}</p>}
    </div>
  );
}

function PageContent({ data }: { data: ServiceIndustryPageData }) {
  useSeo({
    title: data.meta.title,
    description: data.meta.description,
    canonicalPath: `/${data.city.slug}/${data.service.slug}/${data.industry.slug}`,
  });

  return (
    <div className="min-h-screen bg-[#f9f8f5]">
      <Nav />

      {/* ── HERO ── */}
      <section className="relative bg-[#08090d] pt-28 pb-0 overflow-hidden">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/20 text-xs mb-8 flex-wrap">
            <Link href="/" className="hover:text-white/40 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/cities" className="hover:text-white/40 transition-colors">Cities</Link>
            <span>/</span>
            <Link href={`/${data.city.slug}/${data.service.slug}`} className="hover:text-white/40 transition-colors">{data.service.label} in {data.city.name}</Link>
            <span>/</span>
            <span className="text-white/35">{data.industry.label}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start pb-20">
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                <TrendingUp className="w-3.5 h-3.5 text-primary" />
                <span className="text-[11px] font-black uppercase tracking-widest text-primary">
                  {data.service.shortLabel} for {data.industry.label} · {data.city.name}, {data.city.abbrev}
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.04] mb-3">
                {data.hero.headline}
              </h1>
              <p className="text-2xl text-primary/80 font-bold italic mb-6 leading-snug">{data.hero.italic}</p>
              <p className="text-[1.05rem] text-white/55 leading-relaxed mb-8 max-w-xl">{data.hero.tagline}</p>
              <div className="flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-7 py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-[15px]">
                  Get a Free Audit <ArrowRight className="w-4 h-4" />
                </Link>
                <Link href={`/${data.city.slug}/${data.service.slug}`} className="inline-flex items-center gap-2 border border-white/15 text-white/70 font-semibold px-6 py-3.5 rounded-xl hover:border-white/30 hover:text-white transition-all text-[15px]">
                  {data.service.label} Overview →
                </Link>
              </div>
            </div>

            <div className="space-y-3">
              {data.hero.stats.map((s) => (
                <div key={s.label} className="bg-white/4 border border-white/8 rounded-2xl p-5 flex items-center gap-5">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white leading-none">{s.value}</div>
                    <div className="text-sm text-white/40 mt-0.5">{s.label}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="h-12 bg-gradient-to-b from-transparent to-[#f9f8f5]" />
      </section>

      <div className="border-b border-[#e5e2d9]">
        <LogoMarquee />
      </div>

      {/* ── INTRO + INDUSTRY STATS ── */}
      <section className="py-20 bg-[#f9f8f5] border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-14 items-start">
            <div className="lg:col-span-3">
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">
                {data.service.shortLabel} for {data.industry.label} in {data.city.name}
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1] mb-7">
                Why {data.industry.label} in {data.city.name}<br />
                <span className="text-primary">need a different approach.</span>
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed text-[15.5px]">
                {data.intro.map((para, i) => <p key={i}>{para}</p>)}
              </div>
              <div className="mt-8">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm">
                  Get a Free {data.city.name} {data.industry.label} Audit <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-2 space-y-4">
              {data.industryStats.map((stat) => (
                <div key={stat.label} className="bg-white border border-[#e5e2d9] rounded-2xl p-6">
                  <div className="flex items-baseline gap-3 mb-2">
                    <span className="text-4xl font-black text-primary">{stat.value}</span>
                    <span className="text-sm font-bold text-[#0e0e0e] leading-snug">{stat.label}</span>
                  </div>
                  <p className="text-sm text-gray-500 leading-relaxed">{stat.context}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TARGET KEYWORDS ── */}
      <section className="py-16 bg-white border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-10 items-start">
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Search targeting</p>
              <h2 className="text-2xl font-black text-[#0e0e0e] leading-[1.1] mb-4">
                Queries this programme is built to rank for
              </h2>
              <p className="text-sm text-gray-500 leading-relaxed">
                High-intent searches from {data.industry.label.toLowerCase()} in {data.city.name} and the surrounding {data.city.name} area.
              </p>
            </div>
            <div className="lg:col-span-2">
              <div className="flex flex-wrap gap-2">
                {data.keywords.map((kw) => (
                  <div key={kw} className="flex items-center gap-1.5 bg-[#f9f8f5] border border-[#e5e2d9] rounded-lg px-3 py-2">
                    <Search className="w-3 h-3 text-primary flex-shrink-0" />
                    <span className="text-sm text-gray-700 font-medium">{kw}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── WHY THIS SERVICE FOR THIS INDUSTRY ── */}
      <section className="py-20 bg-[#f9f8f5] border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-2xl mb-12">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Why it works</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1]">
              Why {data.industry.label} invest in {data.service.shortLabel}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {data.whyPoints.map((pt, i) => (
              <div key={pt.title} className="relative bg-white border border-[#e5e2d9] rounded-2xl p-7 overflow-hidden">
                <div className="absolute top-4 right-5 text-[72px] font-black text-primary/5 leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-bold text-[#0e0e0e] mb-3 text-[15px] relative z-10">{pt.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed relative z-10">{pt.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DELIVERABLES ── */}
      <section className="py-20 border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">What's included</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1]">
                Every deliverable — built for {data.industry.label}
              </h2>
            </div>
            <p className="text-gray-500 text-sm max-w-sm">
              Scoped to your practice. Here is what a full {data.service.shortLabel} programme for {data.city.name} {data.industry.label.toLowerCase()} typically covers.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {data.deliverables.map((d) => (
              <div key={d.title} className="bg-white border border-[#e5e2d9] rounded-2xl p-7 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-bold text-[#0e0e0e] leading-snug text-[15px]">{d.title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{d.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PROCESS ── */}
      <section className="py-20 bg-[#08090d] border-b border-white/8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-xl mb-12">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Our process</p>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-[1.1]">
              How we deliver {data.service.shortLabel} for {data.industry.label} in {data.city.name}
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {data.process.map((step) => (
              <div key={step.step} className="relative bg-white/4 border border-white/8 rounded-2xl p-6">
                <span className="text-[11px] font-black text-primary bg-primary/15 rounded-full px-2.5 py-0.5 mb-4 inline-block">{step.step}</span>
                <h3 className="font-bold text-white mb-2 text-[15px] leading-snug">{step.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY ORGANIC OVER PAID ── */}
      <section className="py-20 bg-white border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">The long-term case</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1] mb-6">
                {data.whyOrganic.headline}
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed text-[15.5px]">
                {data.whyOrganic.body.map((para, i) => <p key={i}>{para}</p>)}
              </div>
            </div>
            <div className="space-y-4">
              {/* Case study */}
              <div id="case-study" className="bg-[#08090d] rounded-2xl p-8">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary/60 mb-3">{data.caseStudy.label}</p>
                <h3 className="text-xl font-black text-white leading-[1.15] mb-4">{data.caseStudy.headline}</h3>
                <p className="text-white/55 text-sm leading-relaxed mb-6">{data.caseStudy.body}</p>
                <div className="grid grid-cols-3 gap-3">
                  {data.caseStudy.metrics.map((m) => (
                    <div key={m.label} className="bg-white/5 border border-white/10 rounded-xl p-4 text-center">
                      <p className="text-2xl font-black text-primary mb-1">{m.value}</p>
                      <p className="text-[10px] font-bold text-white/40 uppercase tracking-wide leading-tight">{m.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TIMELINE ── */}
      <section className="py-20 bg-[#f9f8f5] border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Timeline</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1] mb-5">
                When does {data.service.shortLabel} produce results for {data.industry.label} in {data.city.name}?
              </h2>
              <p className="text-gray-600 leading-relaxed text-[15px] mb-6">
                Lower-competition neighbourhood and treatment-specific terms often rank within 8–12 weeks. Primary terms build from month 3 onward. Here is what a realistic programme looks like.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0e0e0e] text-white font-bold px-6 py-3 rounded-xl hover:bg-primary transition-colors text-sm">
                Get a {data.city.name}-specific timeline <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-3 grid gap-4">
              {data.timeline.map((milestone, i) => (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-white border border-[#e5e2d9] rounded-2xl p-7 flex gap-6">
                  <div className="text-center flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <span className="text-[11px] font-black text-primary">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-1">{milestone.period}</p>
                    <h3 className="font-black text-[#0e0e0e] text-lg mb-2">{milestone.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{milestone.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-20 bg-white border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">FAQ</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#0e0e0e] leading-[1.1] mb-4">
                Common questions about {data.service.shortLabel} for {data.industry.label} in {data.city.name}
              </h2>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-[#e5e2d9] text-[#0e0e0e] font-bold px-5 py-2.5 rounded-xl text-sm hover:border-primary hover:text-primary transition-colors">
                Ask a Question <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="lg:col-span-2">
              <div className="divide-y divide-[#e5e2d9]">
                {data.faqs.map((faq) => (
                  <FAQItem key={faq.q} q={faq.q} a={faq.a} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-16 bg-primary">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <p className="text-xl md:text-2xl font-black text-white mb-6 leading-snug">{data.cta}</p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-8 py-4 rounded-xl hover:bg-white/90 transition-colors text-[15px]">
            Get a Free Audit <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* ── RELATED PAGES ── */}
      {data.relatedPages.length > 0 && (
        <section className="py-16 bg-[#f9f8f5] border-b border-[#e5e2d9]">
          <div className="container mx-auto px-4 max-w-7xl">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Related services</p>
            <h2 className="text-2xl font-black text-[#0e0e0e] mb-8">More ways Outlier grows {data.city.name} businesses</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {data.relatedPages.map((r) => (
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

export default function ServiceIndustryPage() {
  const params = useParams<{ city: string; service: string; industry: string }>();
  const key = `${params.city}-${params.service}-${params.industry}`;
  const data = serviceIndustryPages[key];

  if (!data) {
    return (
      <div className="min-h-screen bg-[#f9f8f5] flex items-center justify-center">
        <Nav />
        <div className="text-center">
          <p className="text-gray-400 mb-4">Page not found</p>
          <Link href="/cities" className="text-primary font-bold">Browse all cities →</Link>
        </div>
      </div>
    );
  }

  return <PageContent data={data} />;
}
