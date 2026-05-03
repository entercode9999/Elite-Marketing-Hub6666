import { motion } from "framer-motion";
import { useSeo } from "@/hooks/useSeo";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LogoMarquee } from "@/components/LogoMarquee";
import { Stats } from "@/components/sections/Stats";
import { ServicesTabbed } from "@/components/sections/ServicesTabbed";
import { IndustriesTabbed } from "@/components/sections/IndustriesTabbed";
import { Testimonials } from "@/components/sections/Testimonials";
import { Wins } from "@/components/sections/Wins";
import { Faq } from "@/components/sections/Faq";
import { MegaCta } from "@/components/sections/MegaCta";
import { ArrowRight, MapPin, Star, TrendingUp, CheckCircle, ArrowUpRight, Check, FileText, Target, ShieldCheck } from "lucide-react";
import { Link } from "wouter";
import { HeroServicesPanel } from "@/components/sections/HeroServicesPanel";
import { WhyOutlier } from "@/components/sections/WhyOutlier";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { BlogInsights } from "@/components/sections/BlogInsights";

const ease = [0.22, 1, 0.36, 1] as const;

const caseStudies = [
  {
    slug: "meridian-dental",
    image: "/case-study-dental.png",
    name: "Meridian Dental Group",
    category: "Dental",
    service: "SEO Services",
    blurb: "Six-location practice ranking #1 across every core dental keyword in Toronto. Booked out 8 weeks.",
    metrics: [{ value: "+312%", label: "Organic traffic" }, { value: "4×#1", label: "Map pack positions" }],
  },
  {
    slug: "axiom-law",
    image: "/case-study-saas.png",
    name: "Axiom Law Group",
    category: "Legal",
    service: "Content + Local SEO",
    blurb: "Toronto litigation firm went from invisible to dominant across 60+ high-intent legal search terms.",
    metrics: [{ value: "+410%", label: "Organic leads" }, { value: "91/100", label: "Technical SEO score" }],
  },
  {
    slug: "northview-kitchens",
    image: "/case-study-home.png",
    name: "Northview Kitchens",
    category: "Home Services",
    service: "Google Ads + SEO",
    blurb: "Kitchen renovation company doubled qualified leads in 6 months while cutting cost-per-lead by 38%.",
    metrics: [{ value: "+215%", label: "Qualified leads" }, { value: "-38%", label: "Cost per lead" }],
  },
  {
    slug: "gta-home-pros",
    image: "/case-study-realestate.png",
    name: "GTA Home Pros",
    category: "Home Services",
    service: "Google Ads + Local SEO",
    blurb: "Self-managed Google Ads account was bleeding money. We turned it into their top revenue channel.",
    metrics: [{ value: "4.2×", label: "ROAS" }, { value: "-54%", label: "Cost per booked job" }],
  },
  {
    slug: "purecycle-fitness",
    image: "/case-study-ecommerce.png",
    name: "Purecycle Fitness Studios",
    category: "Fitness",
    service: "Paid Social + Email",
    blurb: "Boutique fitness chain grew membership 180% in 8 months without a single discount or promotion.",
    metrics: [{ value: "+180%", label: "New memberships" }, { value: "3.4×", label: "Meta ad ROAS" }],
  },
  {
    slug: "bluesky-roofing",
    image: "/case-study-homeservices.png",
    name: "Bluesky Roofing",
    category: "Trades",
    service: "Local SEO + Google Ads",
    blurb: "GTA roofing company hit page 1 in 14 cities and cut their cost-per-lead in half within 5 months.",
    metrics: [{ value: "+340%", label: "Organic calls" }, { value: "14", label: "Cities ranked #1" }],
  },
];

const HOME_SCHEMA = [
  {
    "@type": "LocalBusiness",
    "@id": "https://outliermarketing.ca/#business",
    "name": "Outlier Digital Marketing",
    "url": "https://outliermarketing.ca",
    "logo": "https://outliermarketing.ca/favicon.svg",
    "telephone": "+18005550199",
    "email": "hello@outlier.co",
    "description": "Toronto's strategy-first digital marketing agency. SEO, Google Ads, paid social, web, and content — one senior team, measurable results.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Spadina Ave, Suite 800",
      "addressLocality": "Toronto",
      "addressRegion": "ON",
      "postalCode": "M5V 2T6",
      "addressCountry": "CA",
    },
    "geo": { "@type": "GeoCoordinates", "latitude": 43.6486, "longitude": -79.3966 },
    "areaServed": { "@type": "State", "name": "Ontario", "addressCountry": "CA" },
    "priceRange": "$$",
    "aggregateRating": { "@type": "AggregateRating", "ratingValue": "4.9", "reviewCount": "87" },
    "sameAs": [
      "https://www.linkedin.com/company/outlier-marketing",
      "https://twitter.com/outliermarketing",
      "https://www.instagram.com/outliermarketing",
    ],
  },
  {
    "@type": "WebSite",
    "@id": "https://outliermarketing.ca/#website",
    "url": "https://outliermarketing.ca",
    "name": "Outlier Digital Marketing",
    "description": "Toronto's strategy-first digital marketing agency.",
    "publisher": { "@id": "https://outliermarketing.ca/#business" },
  },
  {
    "@type": "FAQPage",
    "mainEntity": [
      { "@type": "Question", "name": "What services does Outlier offer?", "acceptedAnswer": { "@type": "Answer", "text": "Outlier offers SEO (local, technical, AI), Google Ads management, paid social advertising, content marketing, web design, and conversion rate optimisation for Ontario businesses." } },
      { "@type": "Question", "name": "Where is Outlier located?", "acceptedAnswer": { "@type": "Answer", "text": "Outlier is headquartered at 123 Spadina Ave, Suite 800, Toronto, Ontario. We serve businesses across the GTA and all of Ontario." } },
      { "@type": "Question", "name": "How much does digital marketing cost?", "acceptedAnswer": { "@type": "Answer", "text": "Outlier's Growth plans start at $2,500/month, Scale plans at $5,000/month. Enterprise packages are scoped to your business. Book a free audit to get a recommendation." } },
    ],
  },
];

export default function Home() {
  useSeo({
    title: "Toronto Digital Marketing Agency | Outlier",
    description: "Outlier is Toronto's strategy-first digital marketing agency. SEO, Google Ads, paid social, and content — one team, every channel, dominant growth.",
    canonicalPath: "/",
    schema: HOME_SCHEMA,
  });

  return (
    <div className="min-h-[100dvh] flex flex-col bg-background selection:bg-primary selection:text-white">
      <Nav />

      <main className="flex-1">
        {/* ── HERO ── */}
        <section className="relative pt-36 pb-28 lg:pt-44 lg:pb-40 overflow-hidden bg-[#08090d] text-white">
          {/* Grid bg */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:72px_72px]" />
          {/* Radial vignette for depth */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(26,86,255,0.12),transparent)]" />
          {/* Animated glow orbs */}
          <div className="animate-float-orb absolute top-[-80px] right-[-60px] w-[700px] h-[700px] bg-primary/18 rounded-full blur-[130px] opacity-60 pointer-events-none" />
          <div className="animate-float-orb-alt absolute bottom-[-100px] left-[-80px] w-[500px] h-[500px] bg-indigo-500/12 rounded-full blur-[110px] pointer-events-none" />
          <div className="animate-float-orb absolute top-[30%] left-[40%] w-[300px] h-[300px] bg-blue-600/8 rounded-full blur-[90px] pointer-events-none" />
          {/* Bottom fade into next section */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-[#08090d] pointer-events-none" />

          <div className="max-w-7xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/8 border border-white/12 text-white/80 text-xs font-medium mb-8"
                >
                  <MapPin className="w-3.5 h-3.5 text-primary" />
                  Built in Toronto — trusted by ambitious local + national brands
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.08 }}
                  className="text-5xl sm:text-6xl lg:text-7xl font-black leading-[1.04] tracking-tight mb-7"
                >
                  One team.
                  <br />
                  Every channel.
                  <br />
                  <span className="text-primary italic">Dominant growth.</span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.16 }}
                  className="text-lg text-white/55 max-w-lg mb-10 leading-relaxed"
                >
                  We partner with ambitious founders, local business owners, and CMOs to build category-defining brands. Strategy-first, execution-obsessed.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.22 }}
                  className="flex flex-wrap gap-3 mb-12"
                >
                  <Link
                    href="/free-audit"
                    className="relative overflow-hidden shimmer-button inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-7 rounded-xl transition-all animate-glow-pulse group text-sm"
                  >
                    Get a Free Audit
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                  <a
                    href="#work"
                    className="inline-flex items-center gap-2 border border-white/15 hover:border-white/25 hover:bg-white/4 text-white/80 font-semibold py-3.5 px-7 rounded-xl transition-all text-sm"
                  >
                    View Case Studies
                  </a>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-2xl"
                >
                  {[
                    { icon: Check, title: "Strategy + delivery", body: "One senior team owns the whole engagement from planning to execution." },
                    { icon: ShieldCheck, title: "Clear scope", body: "Transparent reporting, defined deliverables, and no messy handoffs." },
                    { icon: Target, title: "Built for revenue", body: "Every channel, page, and campaign is tied to a conversion outcome." },
                  ].map((item) => (
                    <div key={item.title} className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 backdrop-blur-sm">
                      <item.icon className="w-5 h-5 text-primary mb-3" />
                      <h3 className="text-sm font-black text-white mb-1">{item.title}</h3>
                      <p className="text-xs leading-relaxed text-white/55">{item.body}</p>
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Hero visual — compact services panel */}
              <motion.div
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="hidden lg:block relative"
              >
                <HeroServicesPanel />
              </motion.div>
            </div>
          </div>
        </section>

        {/* ── LOGO MARQUEE ── */}
        <LogoMarquee />

        {/* ── MARKETS TICKER ── */}
        <div className="bg-primary/90 py-2.5 text-white text-xs font-bold overflow-hidden">
          <div className="container mx-auto px-6 flex items-center gap-4 flex-wrap justify-center">
            <span className="uppercase tracking-widest text-white/60 text-[10px]">Markets:</span>
            {["Toronto", "Mississauga", "Brampton", "Oakville", "Hamilton", "Ottawa", "Vancouver", "Calgary", "NYC", "Miami"].map((city, i, arr) => (
              <div key={city} className="flex items-center gap-4">
                <span>{city}</span>
                {i < arr.length - 1 && <span className="w-1 h-1 rounded-full bg-white/30" />}
              </div>
            ))}
          </div>
        </div>

        {/* ── STATS ── */}
        <Stats />

        {/* ── SERVICES TABBED (Kinex-style) ── */}
        <ServicesTabbed />

        {/* ── INDUSTRIES TABBED (Kinex-style) ── */}
        <IndustriesTabbed />

        {/* ── WHY OUTLIER ── */}
        <WhyOutlier />

        {/* ── CASE STUDIES ── */}
        <section id="work" className="py-24 md:py-32 bg-background border-t border-border">
          <div className="max-w-6xl mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row justify-between items-end mb-14 gap-6"
            >
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-primary mb-3 block">Selected Work</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight leading-[1.05]">
                  Proven outcomes.
                </h2>
                <p className="text-muted-foreground mt-3 max-w-md text-base">
                  From local monopolies to national scale — we measure success in revenue, not rankings.
                </p>
              </div>
              <Link href="/our-work" className="shrink-0 inline-flex items-center gap-2 border border-border hover:border-primary/40 text-foreground font-semibold py-2.5 px-5 rounded-lg transition-colors text-sm group">
                View all work
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caseStudies.map((cs, i) => (
                <motion.div
                  key={cs.name}
                  initial={{ opacity: 0, y: 32 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -4, transition: { duration: 0.25, ease: "easeOut" } }}
                >
                  <Link
                    href={`/our-work/${cs.slug}`}
                    className="group flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-[0_8px_40px_rgba(26,86,255,0.12)] transition-all duration-300"
                  >
                    <div className="aspect-[16/9] overflow-hidden relative">
                      <img
                        src={cs.image}
                        alt={cs.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-2.5 py-1 rounded bg-primary text-white text-[10px] font-bold uppercase tracking-wider">{cs.category}</span>
                        <span className="px-2.5 py-1 rounded bg-black/50 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider">{cs.service}</span>
                      </div>
                      <div className="absolute bottom-4 right-4 w-8 h-8 rounded-full bg-white/15 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                        <ArrowUpRight className="w-4 h-4 text-white" />
                      </div>
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <h3 className="text-lg font-bold mb-2 group-hover:text-primary transition-colors">{cs.name}</h3>
                      <p className="text-sm text-muted-foreground mb-5 flex-1 leading-relaxed">{cs.blurb}</p>
                      <div className="grid grid-cols-2 gap-3 pt-4 border-t border-border">
                        {cs.metrics.map((m) => (
                          <div key={m.label}>
                            <p className="text-xl font-black text-foreground">{m.value}</p>
                            <p className="text-xs text-muted-foreground">{m.label}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── HOW WE WORK ── */}
        <HowWeWork />

        {/* ── TESTIMONIALS ── */}
        <Testimonials />

        {/* ── WINS TICKER ── */}
        <Wins />

        {/* ── FAQ ── */}
        <Faq />

        {/* ── BLOG / INSIGHTS ── */}
        <BlogInsights />

        {/* ── MEGA CTA ── */}
        <MegaCta />
      </main>

      <Footer />
    </div>
  );
}
