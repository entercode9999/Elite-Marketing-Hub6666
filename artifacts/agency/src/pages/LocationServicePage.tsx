import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, MapPin, TrendingUp, Users } from "lucide-react";
import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { getCity } from "@/data/cities";
import { getService } from "@/data/services";

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
  }),
};

/* Service-specific content that changes per service type */
function getServiceMiddleContent(serviceSlug: string, cityName: string) {
  const content: Record<string, { sectionTitle: string; items: string[]; analysisTitle: string; analysisBody: string }> = {
    "local-seo-service": {
      sectionTitle: `${cityName}'s map pack landscape — what you're actually competing against`,
      items: [
        "Google Business Profile completeness vs. competitors",
        "Review volume delta (you vs. top 3 in pack)",
        "NAP consistency across 40+ directories",
        "Service category optimisation gaps",
        "Local citation count and quality",
        "Geographic keyword coverage",
      ],
      analysisTitle: "Why map pack visibility isn't distributed evenly",
      analysisBody: `The ${cityName} map pack isn't a fair election — it's weighted by proximity, review recency, and GBP completeness. Most businesses losing rankings are losing to competitors with fewer actual customers but better-optimised profiles. That's the most fixable problem in local search.`,
    },
    "google-ads-management": {
      sectionTitle: `${cityName} Google Ads competitive audit — what we look for`,
      items: [
        "Average CPC by keyword category in your market",
        "Competitor ad copy and positioning",
        "Search term report gaps and wasted spend",
        "Quality Score distribution across ad groups",
        "Landing page conversion alignment",
        "Negative keyword coverage",
      ],
      analysisTitle: "Why most Google Ads accounts in Canada waste 30–40% of budget",
      analysisBody: `In ${cityName}'s competitive search landscape, broad match keywords and missing negative keyword lists are the primary budget drains. A structured account audit typically identifies $500–$2,000/month in recoverable wasted spend before any campaign changes are made.`,
    },
    "technical-seo-service": {
      sectionTitle: `Technical SEO audit checklist — what limits ${cityName} businesses`,
      items: [
        "Core Web Vitals: LCP, INP, CLS scores",
        "Mobile usability and responsive failures",
        "Indexation and crawl coverage gaps",
        "Duplicate content and canonical issues",
        "Schema markup implementation",
        "Internal link structure and orphaned pages",
      ],
      analysisTitle: "Technical issues are invisible until rankings plateau",
      analysisBody: `${cityName} businesses often invest in content and link building before addressing technical issues — then wonder why rankings don't move. A full technical audit reveals the constraints that prevent content and authority from translating into rankings.`,
    },
    "content-marketing-service": {
      sectionTitle: `Content gap analysis — what ${cityName} businesses are missing`,
      items: [
        "Topic cluster coverage vs. ranking competitors",
        "Informational content for research-phase queries",
        "Location-specific service page depth",
        "Case study and proof content",
        "FAQ coverage for commercial queries",
        "Internal linking from content to service pages",
      ],
      analysisTitle: "Why most Canadian business content doesn't rank",
      analysisBody: `${cityName} businesses commonly publish content without keyword research, topical structure, or internal linking. The result is pages that exist but don't rank — content that doesn't compound. A content strategy session identifies which topics to target in what order for the fastest path to organic visibility.`,
    },
  };

  return content[serviceSlug] || content["local-seo-service"];
}

const PHASES = [
  {
    phase: "01",
    title: "Audit",
    body: "Full current-state analysis before any work begins. You know exactly what's limiting performance and why.",
  },
  {
    phase: "02",
    title: "Strategy",
    body: "A prioritised roadmap specific to your market, your competition level, and your goal timeline.",
  },
  {
    phase: "03",
    title: "Foundation",
    body: "The technical and structural work that everything else depends on — done correctly once, not repeatedly.",
  },
  {
    phase: "04",
    title: "Compound",
    body: "The ongoing work — content, links, profile maintenance — that builds authority over months, not weeks.",
  },
  {
    phase: "05",
    title: "Report",
    body: "Monthly plain-language reporting that connects the work to the metric you actually care about: leads.",
  },
];

interface LocationServicePageProps {
  citySlug: string;
  serviceSlug: string;
}

export default function LocationServicePage({ citySlug, serviceSlug }: LocationServicePageProps) {
  const city = getCity(citySlug);
  const service = getService(serviceSlug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [citySlug, serviceSlug]);

  if (!city || !service) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Page not found.</p>
      </div>
    );
  }

  const middleContent = getServiceMiddleContent(serviceSlug, city.name);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero */}
      <section className="bg-[#f5f0e8] dark:bg-[#111318] pt-28 pb-16 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="mb-6">
            <Breadcrumb
              items={[
                { label: service.h1, href: `/${service.slug}` },
                { label: city.name },
              ]}
            />
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left — headline */}
            <div>
              <motion.h1
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={1}
                className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05] mb-5"
              >
                {service.h1} in{" "}
                <span className="text-[#1a56ff] dark:text-[#4d80ff]">{city.name}</span>{" "}
                — <span className="italic font-light">{city.tagline}</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2}
                className="text-base text-muted-foreground leading-relaxed mb-8"
              >
                {city.marketNote}
              </motion.p>

              <motion.div
                variants={fadeUp}
                initial="hidden"
                animate="visible"
                custom={2.5}
                className="flex flex-wrap gap-3"
              >
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#1a56ff] hover:bg-[#4d80ff] text-white font-bold py-3 px-6 rounded-lg transition-colors text-sm"
                >
                  Get a Free {city.name} Audit
                  <ArrowRight className="w-4 h-4" />
                </a>
                <a
                  href={`/${service.slug}`}
                  className="inline-flex items-center gap-2 border border-border text-muted-foreground hover:text-foreground font-medium py-3 px-6 rounded-lg transition-colors text-sm"
                >
                  View full service →
                </a>
              </motion.div>
            </div>

            {/* Right — map card + stats */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={3}
              className="space-y-4"
            >
              {/* Map card mockup */}
              <div className="rounded-2xl border border-border bg-background overflow-hidden">
                <div className="h-36 bg-gradient-to-br from-[#1a56ff]/10 to-[#4d80ff]/5 flex items-center justify-center relative">
                  <div className="absolute inset-0 grid grid-cols-8 grid-rows-5 opacity-10">
                    {Array.from({ length: 40 }).map((_, i) => (
                      <div key={i} className="border border-border" />
                    ))}
                  </div>
                  <div className="relative z-10 text-center">
                    <MapPin className="w-8 h-8 text-[#1a56ff] dark:text-[#4d80ff] mx-auto mb-2" />
                    <p className="text-sm font-bold">{city.name}, {city.province}</p>
                    <p className="text-xs text-muted-foreground">{city.population} population</p>
                  </div>
                </div>
                <div className="grid grid-cols-3 divide-x divide-border border-t border-border">
                  {city.stats.map((s, i) => (
                    <div key={i} className="p-4 text-center">
                      <p className="text-lg font-black text-[#1a56ff] dark:text-[#4d80ff] tabular-nums">{s.value}</p>
                      <p className="text-xs text-muted-foreground mt-0.5">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Competition badge */}
              <div className="flex items-center gap-3 p-4 rounded-xl border border-border bg-background">
                <TrendingUp className="w-5 h-5 text-amber-500 shrink-0" />
                <div>
                  <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">Market competition</p>
                  <p className="text-sm font-bold capitalize">{city.competitionLevel.replace("-", " ")}</p>
                </div>
                <div className="ml-auto flex gap-1">
                  {Array.from({ length: 3 }).map((_, i) => (
                    <div
                      key={i}
                      className={`w-2 h-5 rounded-full ${
                        i < (city.competitionLevel === "very-high" ? 3 : city.competitionLevel === "high" ? 2 : 1)
                          ? "bg-amber-500"
                          : "bg-border"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Neighbourhood grid */}
      <section className="py-16 border-b border-border bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-8">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1a56ff] dark:text-[#4d80ff] mb-2 block">
              Coverage
            </span>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">
              {city.neighborhoods.length} {city.name} sub-markets,{" "}
              {city.neighborhoods.length} targeting strategies.
            </h2>
            <p className="text-sm text-muted-foreground mt-2 max-w-xl">
              Proximity weighting in {city.name} means a single campaign can't effectively target every neighbourhood. We build around each cluster's actual search behaviour.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
            {city.neighborhoods.map((n, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.05}
                className="flex items-center gap-2 p-3.5 rounded-lg border border-border bg-[#f5f0e8]/60 dark:bg-[#1a1e27]/60"
              >
                <div className="w-1.5 h-1.5 rounded-full bg-[#1a56ff] dark:bg-[#4d80ff] shrink-0" />
                <p className="text-sm font-medium">{n}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service-specific middle section */}
      <section className="py-16 border-b border-border bg-[#f5f0e8]/40 dark:bg-[#111318]">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <span className="text-xs font-bold uppercase tracking-widest text-[#1a56ff] dark:text-[#4d80ff] mb-2 block">
                  Market analysis
                </span>
                <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4">
                  {middleContent.sectionTitle}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {middleContent.analysisBody}
                </p>
                <ul className="space-y-2">
                  {middleContent.items.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#1a56ff] dark:bg-[#4d80ff] mt-2 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* City market data table */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={1}
            >
              <div className="rounded-xl border border-border bg-background overflow-hidden">
                <div className="px-5 py-4 border-b border-border bg-[#1a56ff]/5 dark:bg-[#4d80ff]/10">
                  <p className="text-xs font-bold uppercase tracking-widest text-[#1a56ff] dark:text-[#4d80ff]">
                    {city.name} market snapshot
                  </p>
                </div>
                <div className="divide-y divide-border">
                  {[
                    { label: "City population", value: city.population },
                    { label: "Market competition", value: city.competitionLevel.replace("-", " ") },
                    { label: "Key industries", value: city.industries.slice(0, 3).join(", ") },
                    { label: "Sub-markets covered", value: `${city.neighborhoods.length} neighbourhoods` },
                    { label: "Region", value: city.region === "gta" ? "Greater Toronto Area" : city.province },
                    { label: "Audit turnaround", value: "5–7 business days" },
                  ].map((row, i) => (
                    <div key={i} className="flex items-center justify-between px-5 py-3">
                      <p className="text-xs text-muted-foreground">{row.label}</p>
                      <p className="text-xs font-bold capitalize">{row.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 5-phase process */}
      <section className="py-16 border-b border-border bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1a56ff] dark:text-[#4d80ff] mb-2 block">
              Process
            </span>
            <h2 className="text-2xl md:text-3xl font-black tracking-tight">
              Same five phases. Tuned to {city.name}.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-5 gap-4">
            {PHASES.map((phase, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.15}
                className="relative"
              >
                <div className="text-5xl font-black text-[#1a56ff]/10 dark:text-[#4d80ff]/10 mb-2 leading-none">
                  {phase.phase}
                </div>
                <p className="font-bold text-sm mb-1">{phase.title}</p>
                <p className="text-xs text-muted-foreground leading-relaxed">{phase.body}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Case study / proof — dark */}
      <section className="py-16 bg-[#0a0c12] text-white border-b border-white/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#4d80ff] mb-3">
                {city.caseStudy.client} — {city.caseStudy.industry}
              </p>
              <h2 className="text-3xl md:text-4xl font-black mb-4">
                {city.caseStudy.headline}
              </h2>
              <p className="text-white/60 text-sm leading-relaxed mb-6">
                {city.caseStudy.body}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-white/40">
                <span className="font-mono">{city.caseStudy.before}</span>
                <ArrowRight className="w-4 h-4 text-[#4d80ff]" />
                <span className="font-mono text-white/70">{city.caseStudy.after}</span>
              </div>
            </div>

            <div className="grid grid-cols-3 gap-4">
              {city.caseStudy.metrics.map((m, i) => (
                <div key={i} className="p-5 rounded-xl border border-white/10 bg-white/[0.03] text-center">
                  <p className="text-2xl font-black text-[#4d80ff] tabular-nums">{m.value}</p>
                  <p className="text-xs text-white/40 mt-1 leading-tight">{m.label}</p>
                </div>
              ))}
              <div className="col-span-3 p-4 rounded-xl border border-[#4d80ff]/20 bg-[#4d80ff]/5 text-center">
                <p className="text-sm text-white/60">
                  Timeline: <span className="font-bold text-white">{city.caseStudy.weeks} weeks</span> to achieve results
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby cities */}
      <section className="py-16 border-b border-border bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1a56ff] dark:text-[#4d80ff] mb-2 block">
              Service area
            </span>
            <h2 className="text-xl font-black">Other cities we serve near {city.name}</h2>
          </motion.div>

          <div className="flex flex-wrap gap-3">
            {city.nearbyCities.map((nearCity, i) => {
              const nearSlug = nearCity.toLowerCase().replace(/\s+/g, "-");
              return (
                <Link
                  key={i}
                  href={`/${nearSlug}/${serviceSlug}`}
                  className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-border bg-[#f5f0e8]/60 dark:bg-[#1a1e27]/60 text-sm font-medium hover:border-[#1a56ff]/50 dark:hover:border-[#4d80ff]/50 hover:text-[#1a56ff] dark:hover:text-[#4d80ff] transition-colors"
                >
                  <MapPin className="w-3.5 h-3.5 opacity-50 shrink-0" />
                  {service.h1} — {nearCity}
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Related services */}
      <section className="py-16 border-b border-border bg-[#f5f0e8]/40 dark:bg-[#111318]">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mb-6">
            <span className="text-xs font-bold uppercase tracking-widest text-[#1a56ff] dark:text-[#4d80ff] mb-2 block">
              Related services
            </span>
            <h2 className="text-xl font-black">Other services for {city.name}</h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3">
            {city.relatedServices.map((svc, i) => (
              <Link
                key={i}
                href={`/${citySlug}/${svc.slug}`}
                className="p-4 rounded-xl border border-border bg-background hover:border-[#1a56ff]/40 dark:hover:border-[#4d80ff]/40 transition-colors group"
              >
                <p className="text-sm font-bold group-hover:text-[#1a56ff] dark:group-hover:text-[#4d80ff] transition-colors">
                  {svc.name}
                </p>
                <p className="text-xs text-muted-foreground mt-0.5">{city.name} →</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-20 bg-[#0a0c12] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
            <p className="text-xs font-bold uppercase tracking-widest text-[#4d80ff] mb-4">Free audit</p>
            <h2 className="text-3xl md:text-4xl font-black mb-4">
              See where your {city.name} rankings are leaking.
            </h2>
            <p className="text-white/50 text-sm mb-8 max-w-lg mx-auto">
              A {city.name}-specific {service.h1} audit identifies exactly what's suppressing your visibility — and what it would take to move. Delivered in 5–7 business days.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1a56ff] hover:bg-[#4d80ff] text-white font-bold py-3.5 px-8 rounded-lg transition-colors text-sm"
            >
              Get Your Free {city.name} Audit
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
