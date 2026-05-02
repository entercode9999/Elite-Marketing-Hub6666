import { useEffect, useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowRight, Check, Target, Pen, Globe, Zap, BarChart2, FileText } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { getService } from "@/data/services";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] },
  }),
};

const ICONS: Record<string, React.ReactNode> = {
  target: <Target className="w-5 h-5" />,
  pen: <Pen className="w-5 h-5" />,
  globe: <Globe className="w-5 h-5" />,
  zap: <Zap className="w-5 h-5" />,
  "bar-chart": <BarChart2 className="w-5 h-5" />,
  file: <FileText className="w-5 h-5" />,
};

interface ServicePageProps {
  slug: string;
}

/* ─── Counter ─────────────────────────────────────────────────────────── */
function StatCounter({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });
  return (
    <div ref={ref} className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}>
      <p className="text-3xl font-black text-[#1a56ff] dark:text-[#4d80ff] tabular-nums">{value}</p>
      <p className="text-xs text-muted-foreground mt-1 font-medium">{label}</p>
    </div>
  );
}

/* ─── Light (Template A) ──────────────────────────────────────────────── */
function LightServicePage({ slug }: ServicePageProps) {
  const svc = getService(slug)!;

  return (
    <div className="min-h-screen bg-[#f5f0e8] dark:bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="pt-28 pb-16 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="mb-6">
            <Breadcrumb
              items={[
                { label: svc.parentHub.name, href: svc.parentHub.url },
                { label: svc.h1 },
              ]}
            />
          </motion.div>

          {/* Inline audit badge */}
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0.5} className="mb-6">
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1a56ff]/10 dark:bg-[#4d80ff]/10 text-[#1a56ff] dark:text-[#4d80ff] text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full border border-[#1a56ff]/20 dark:border-[#4d80ff]/20 hover:bg-[#1a56ff]/20 transition-colors"
            >
              Free audit available
              <ArrowRight className="w-3 h-3" />
            </a>
          </motion.div>

          <div className="max-w-3xl">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-4xl md:text-6xl font-black tracking-tight leading-[1.05] mb-5"
            >
              {svc.h1.split(" ").slice(0, 2).join(" ")}{" "}
              <span className="italic font-light">{svc.h1.split(" ").slice(2).join(" ")}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-base md:text-lg text-muted-foreground leading-relaxed mb-8 max-w-2xl"
            >
              {svc.subheadline}
            </motion.p>

            <motion.a
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2.5}
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1a56ff] hover:bg-[#4d80ff] text-white font-bold py-3 px-7 rounded-lg transition-colors text-sm"
            >
              {svc.heroCta}
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>

          {/* Stats row */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="mt-12 pt-10 border-t border-border grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {svc.heroStats.map((s, i) => (
              <StatCounter key={i} value={s.value} label={s.label} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Body — sticky sidebar + content */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="flex gap-12">
          {/* Sticky sidebar */}
          <aside className="hidden lg:block w-52 shrink-0">
            <div className="sticky top-28 space-y-1">
              {["What we deliver", "Our process", "Who this is for", "Why ours differs", "Pricing", "FAQ"].map(
                (label) => (
                  <a
                    key={label}
                    href={`#${label.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "")}`}
                    className="block text-sm text-muted-foreground hover:text-foreground py-1.5 border-l-2 border-transparent hover:border-[#1a56ff] dark:hover:border-[#4d80ff] pl-3 transition-all"
                  >
                    {label}
                  </a>
                )
              )}
              <div className="pt-6">
                <a
                  href="/contact"
                  className="block text-center text-xs font-bold uppercase tracking-wider bg-[#1a56ff] hover:bg-[#4d80ff] text-white py-2.5 px-4 rounded-lg transition-colors"
                >
                  Free audit →
                </a>
              </div>
            </div>
          </aside>

          {/* Main content */}
          <main className="flex-1 min-w-0 space-y-20">
            {/* Deliverables */}
            <section id="what-we-deliver">
              <SectionLabel>What we deliver</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-8">
                What we deliver — every engagement
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {svc.deliverables.map((d, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i * 0.3}
                    className="p-6 bg-background rounded-xl border border-border"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <span className="text-xs font-black text-[#1a56ff] dark:text-[#4d80ff] tabular-nums w-5 mt-0.5">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <p className="font-bold text-base">{d.title}</p>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed pl-8">{d.body}</p>
                    {d.outcome && (
                      <div className="mt-3 pl-8">
                        <span className="text-xs font-semibold text-[#1a56ff] dark:text-[#4d80ff]">
                          Outcome:{" "}
                        </span>
                        <span className="text-xs text-muted-foreground italic">{d.outcome}</span>
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Process */}
            <section id="our-process">
              <SectionLabel>Our process</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-8">
                The engagement pipeline
              </h2>
              <div className="space-y-0">
                {svc.process.map((step, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i * 0.3}
                    className="flex gap-6 pb-8 relative"
                  >
                    {/* Vertical line */}
                    {i < svc.process.length - 1 && (
                      <div className="absolute left-5 top-10 bottom-0 w-px bg-border" />
                    )}
                    <div className="w-10 h-10 rounded-full border-2 border-[#1a56ff] dark:border-[#4d80ff] flex items-center justify-center shrink-0 bg-background z-10">
                      <span className="text-xs font-black text-[#1a56ff] dark:text-[#4d80ff]">{i + 1}</span>
                    </div>
                    <div className="flex-1 pt-2">
                      <p className="font-bold mb-1">{step.title}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{step.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Who for */}
            <section id="who-this-is-for">
              <SectionLabel>Who this is for</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-8">
                Best results for businesses where
              </h2>
              <div className="space-y-4">
                {svc.whoFor.map((w, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i * 0.3}
                    className="flex gap-4 p-5 rounded-xl border border-border bg-background"
                  >
                    <Check className="w-5 h-5 text-[#1a56ff] dark:text-[#4d80ff] shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-sm mb-1">{w.headline}</p>
                      <p className="text-sm text-muted-foreground leading-relaxed">{w.body}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Proof */}
            <section>
              <motion.div
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-[#0a0c12] rounded-2xl p-8 text-white"
              >
                <p className="text-xs font-bold uppercase tracking-widest text-[#4d80ff] mb-2">
                  {svc.proof.client}
                </p>
                <h3 className="text-2xl md:text-3xl font-black mb-4">{svc.proof.headline}</h3>
                <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-xl">{svc.proof.body}</p>
                <div className="flex items-end gap-3">
                  <span className="text-4xl font-black text-[#4d80ff]">{svc.proof.metric}</span>
                  <span className="text-white/60 text-sm pb-1">{svc.proof.metricLabel}</span>
                </div>
              </motion.div>
            </section>

            {/* Why different */}
            <section id="why-ours-differs">
              <SectionLabel>Why ours differs</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-8">
                Why ours is structured differently
              </h2>
              <div className="grid md:grid-cols-2 gap-6">
                {svc.whyDifferent.map((w, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i * 0.3}
                    className="p-6 rounded-xl border border-border bg-background"
                  >
                    <p className="font-bold text-sm mb-2">{w.title}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{w.body}</p>
                  </motion.div>
                ))}
              </div>
            </section>

            {/* Pricing */}
            <section id="pricing">
              <SectionLabel>Pricing</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4">Pricing</h2>
              {svc.pricing.intro && (
                <p className="text-sm text-muted-foreground mb-6">{svc.pricing.intro}</p>
              )}
              <div className="space-y-3">
                {svc.pricing.tiers.map((tier, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-4 rounded-xl border border-border bg-background"
                  >
                    <p className="text-sm font-medium">{tier.tier}</p>
                    <p className="text-sm font-bold text-[#1a56ff] dark:text-[#4d80ff] tabular-nums">
                      {tier.range}
                    </p>
                  </div>
                ))}
              </div>
              {svc.pricing.note && (
                <p className="text-xs text-muted-foreground mt-4 italic">{svc.pricing.note}</p>
              )}
            </section>

            {/* FAQ */}
            <section id="faq">
              <SectionLabel>FAQ</SectionLabel>
              <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-8">
                Common questions
              </h2>
              <div className="space-y-6">
                {svc.faq.map((item, i) => (
                  <motion.div
                    key={i}
                    variants={fadeUp}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    custom={i * 0.3}
                    className="border-b border-border pb-6"
                  >
                    <p className="font-bold mb-2">{item.q}</p>
                    <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                  </motion.div>
                ))}
              </div>
            </section>
          </main>
        </div>
      </div>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#0a0c12] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-[#4d80ff] mb-4">
            Start here
          </p>
          <h2 className="text-3xl md:text-4xl font-black mb-4">{svc.closing}</h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1a56ff] hover:bg-[#4d80ff] text-white font-bold py-3.5 px-8 rounded-lg transition-colors text-sm mt-6"
          >
            {svc.closingCta}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ─── Dark (Template B) ───────────────────────────────────────────────── */
function DarkServicePage({ slug }: ServicePageProps) {
  const svc = getService(slug)!;

  return (
    <div className="min-h-screen bg-[#0a0c12] text-white">
      <Nav />

      {/* Hero — dark cinematic */}
      <section className="pt-28 pb-0 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_20%_50%,rgba(26,86,255,0.12),transparent_60%)]" />
        <div className="max-w-6xl mx-auto px-6 relative z-10">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="mb-8">
            <Breadcrumb items={[{ label: svc.parentHub.name, href: svc.parentHub.url }, { label: svc.h1 }]} />
          </motion.div>

          <motion.h1
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={1}
            className="text-5xl md:text-7xl font-black tracking-tight leading-[0.95] mb-6 max-w-4xl"
          >
            {svc.h1.split(" ").map((word, wi) =>
              wi === 0 ? (
                <span key={wi} className="text-[#4d80ff]">{word} </span>
              ) : (
                <span key={wi}>{word} </span>
              )
            )}
          </motion.h1>

          <motion.p
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2}
            className="text-base md:text-lg text-white/60 max-w-2xl leading-relaxed mb-10"
          >
            {svc.subheadline}
          </motion.p>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={2.5}
            className="flex flex-wrap gap-4 mb-12"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1a56ff] hover:bg-[#4d80ff] text-white font-bold py-3.5 px-7 rounded-lg transition-colors text-sm"
            >
              {svc.heroCta}
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#what-we-deliver"
              className="inline-flex items-center gap-2 border border-white/20 text-white/70 hover:text-white font-bold py-3.5 px-7 rounded-lg transition-colors text-sm"
            >
              See what's included
            </a>
          </motion.div>

          {/* Stats bar */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            custom={3}
            className="grid grid-cols-3 gap-px bg-white/10 rounded-xl overflow-hidden mb-0"
          >
            {svc.heroStats.map((s, i) => (
              <div key={i} className="bg-[#0a0c12] px-6 py-5 text-center">
                <p className="text-2xl font-black text-[#4d80ff] tabular-nums">{s.value}</p>
                <p className="text-xs text-white/40 mt-1">{s.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Module grid (6-up cards) */}
      {svc.modules && (
        <section id="what-we-deliver" className="py-20 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-10"
            >
              <span className="text-xs font-bold uppercase tracking-widest text-[#4d80ff] mb-3 block">
                What's included
              </span>
              <h2 className="text-3xl md:text-4xl font-black">
                Six modules. One programme. Zero overlap.
              </h2>
            </motion.div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {svc.modules.map((mod, i) => (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  custom={i * 0.2}
                  className="p-6 rounded-xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.06] transition-colors"
                >
                  <div className="w-9 h-9 rounded-lg bg-[#1a56ff]/20 flex items-center justify-center text-[#4d80ff] mb-4">
                    {ICONS[mod.icon] || <Target className="w-5 h-5" />}
                  </div>
                  <p className="font-bold mb-2">{mod.title}</p>
                  <p className="text-sm text-white/50 leading-relaxed">{mod.body}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Deliverables */}
      {!svc.modules && (
        <section id="what-we-deliver" className="py-20 border-t border-white/10">
          <div className="max-w-6xl mx-auto px-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4d80ff] mb-3 block">What we deliver</span>
            <h2 className="text-3xl font-black mb-8">Everything in the engagement</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {svc.deliverables.map((d, i) => (
                <div key={i} className="p-6 rounded-xl border border-white/10 bg-white/[0.03]">
                  <p className="font-bold mb-2">{d.title}</p>
                  <p className="text-sm text-white/50 leading-relaxed">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Process pipeline */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#4d80ff] mb-3 block">Process</span>
            <h2 className="text-3xl md:text-4xl font-black">The pipeline.</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-4">
            {svc.process.map((step, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.15}
                className="relative"
              >
                <div className="text-5xl font-black text-white/5 mb-2 leading-none">{i + 1}</div>
                <p className="font-bold text-sm mb-1 text-white">{step.title}</p>
                <p className="text-xs text-white/40 leading-relaxed">{step.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Proof callout */}
      <section className="py-20 bg-[#1a56ff]/10 border-t border-[#1a56ff]/20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#4d80ff] mb-3">
                {svc.proof.client}
              </p>
              <h2 className="text-3xl md:text-4xl font-black mb-4">{svc.proof.headline}</h2>
              <p className="text-white/60 text-sm leading-relaxed">{svc.proof.body}</p>
            </div>
            <div className="flex flex-col items-start md:items-end gap-3">
              <span className="text-6xl font-black text-[#4d80ff]">{svc.proof.metric}</span>
              <span className="text-white/40 text-sm">{svc.proof.metricLabel}</span>
            </div>
          </div>
        </div>
      </section>

      {/* Why different */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <span className="text-xs font-bold uppercase tracking-widest text-[#4d80ff] mb-3 block">Differentiation</span>
          <h2 className="text-3xl md:text-4xl font-black mb-10">
            What most agencies will never tell you.
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {svc.whyDifferent.map((w, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.2}
                className="flex gap-4"
              >
                <span className="text-xl font-black text-white/10 tabular-nums">{String(i + 1).padStart(2, "0")}</span>
                <div>
                  <p className="font-bold text-sm mb-1">{w.title}</p>
                  <p className="text-sm text-white/50 leading-relaxed">{w.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing + FAQ */}
      <section className="py-20 border-t border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Pricing */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#4d80ff] mb-3 block">Pricing</span>
              <h2 className="text-2xl font-black mb-4">Investment</h2>
              {svc.pricing.intro && (
                <p className="text-sm text-white/50 mb-6">{svc.pricing.intro}</p>
              )}
              <div className="space-y-3">
                {svc.pricing.tiers.map((tier, i) => (
                  <div key={i} className="flex items-start justify-between p-4 rounded-xl border border-white/10 bg-white/[0.03]">
                    <p className="text-sm">{tier.tier}</p>
                    <p className="text-sm font-bold text-[#4d80ff] tabular-nums shrink-0 ml-4">{tier.range}</p>
                  </div>
                ))}
              </div>
              {svc.pricing.note && (
                <p className="text-xs text-white/30 mt-4 italic">{svc.pricing.note}</p>
              )}
            </div>

            {/* FAQ */}
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#4d80ff] mb-3 block">FAQ</span>
              <h2 className="text-2xl font-black mb-8">Common questions</h2>
              <div className="space-y-6">
                {svc.faq.map((item, i) => (
                  <div key={i} className="border-b border-white/10 pb-5">
                    <p className="font-bold text-sm mb-2">{item.q}</p>
                    <p className="text-sm text-white/40 leading-relaxed">{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 border-t border-white/10 bg-gradient-to-b from-transparent to-[#0a0c12]">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-[#4d80ff] mb-4">Start here</p>
          <h2 className="text-3xl md:text-4xl font-black mb-6">{svc.closing}</h2>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#1a56ff] hover:bg-[#4d80ff] text-white font-bold py-3.5 px-8 rounded-lg transition-colors text-sm"
          >
            {svc.closingCta}
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ─── Helper ───────────────────────────────────────────────────────────── */
function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <span className="text-xs font-bold uppercase tracking-widest text-[#1a56ff] dark:text-[#4d80ff] mb-3 block">
      {children}
    </span>
  );
}

/* ─── Router ────────────────────────────────────────────────────────────── */
export default function ServicePage({ slug }: ServicePageProps) {
  const svc = getService(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!svc) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Service page not found.</p>
      </div>
    );
  }

  return svc.variant === "dark" ? (
    <DarkServicePage slug={slug} />
  ) : (
    <LightServicePage slug={slug} />
  );
}
