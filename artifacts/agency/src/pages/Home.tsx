import { motion } from "framer-motion";
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
import { ArrowRight, MapPin, Star, TrendingUp, CheckCircle, ArrowUpRight } from "lucide-react";
import { AllServicesFeature } from "@/components/sections/AllServicesFeature";
import { WhyOutlier } from "@/components/sections/WhyOutlier";
import { HowWeWork } from "@/components/sections/HowWeWork";
import { BlogInsights } from "@/components/sections/BlogInsights";

const ease = [0.22, 1, 0.36, 1] as const;

const caseStudies = [
  {
    image: "/case-study-dental.png",
    name: "Apex Dental Group",
    category: "Dental",
    service: "Programmatic SEO + Local",
    blurb: "Six-location practice ranking #1 across 1,100+ city + service combinations. Booked out 8 weeks.",
    metrics: [{ value: "+86%", label: "New patients" }, { value: "1,100+", label: "Pages ranked" }],
  },
  {
    image: "/case-study-saas.png",
    name: "Nova FinTech",
    category: "SaaS",
    service: "Growth Engine",
    blurb: "Scaling enterprise demo bookings and driving down CPA for a national B2B financial platform.",
    metrics: [{ value: "+315%", label: "Lead volume" }, { value: "-42%", label: "CPA" }],
  },
  {
    image: "/case-study-home.png",
    name: "Hudson Outdoor",
    category: "Home Services",
    service: "Full Funnel",
    blurb: "Regional landscaping firm transformed into a $2.4M revenue machine via CRM + paid social.",
    metrics: [{ value: "$2.4M", label: "Attr. revenue" }, { value: "+18%", label: "Conv. rate" }],
  },
  {
    image: "/case-study-realestate.png",
    name: "Prime Realty Group",
    category: "Real Estate",
    service: "Local SEO",
    blurb: "Boutique brokerage flipped cold-lead dependency to a predictable 60-day seller appointment pipeline.",
    metrics: [{ value: "+247%", label: "Listings YoY" }, { value: "4.2x", label: "ROAS" }],
  },
  {
    image: "/case-study-ecommerce.png",
    name: "Coastal Collective",
    category: "eCommerce",
    service: "Lifecycle + Paid",
    blurb: "Shopify brand scaled from low-six-figures to eight-figure revenue through CRO + lifecycle email.",
    metrics: [{ value: "7.2x", label: "Q1 ROAS" }, { value: "+38%", label: "AOV" }],
  },
  {
    image: "/case-study-homeservices.png",
    name: "Meridian HVAC",
    category: "Home Services",
    service: "Local SEO + Google Ads",
    blurb: "Multi-city HVAC company moved from page 3 to #1 map pack across four Toronto-area markets.",
    metrics: [{ value: "+190%", label: "Service calls" }, { value: "#1", label: "Map pack" }],
  },
];

export default function Home() {
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

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
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
                  <a
                    href="/contact"
                    className="relative overflow-hidden shimmer-button inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-bold py-3.5 px-7 rounded-xl transition-all animate-glow-pulse group text-sm"
                  >
                    Book a Strategy Call
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </a>
                  <a
                    href="#work"
                    className="inline-flex items-center gap-2 border border-white/15 hover:border-white/25 hover:bg-white/4 text-white/80 font-semibold py-3.5 px-7 rounded-xl transition-all text-sm"
                  >
                    View Case Studies
                  </a>
                </motion.div>

                {/* Trust row */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.35 }}
                  className="flex flex-wrap items-center gap-6"
                >
                  {[
                    { icon: Star, label: "4.9 / 5 client rating" },
                    { icon: CheckCircle, label: "No lock-in contracts" },
                    { icon: TrendingUp, label: "Results in 30 days" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-2 text-xs text-white/40">
                      <item.icon className="w-3.5 h-3.5 text-white/30" />
                      {item.label}
                    </div>
                  ))}
                </motion.div>
              </div>

              {/* Hero visual */}
              <motion.div
                initial={{ opacity: 0, x: 32 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.1 }}
                className="hidden lg:block relative"
              >
                <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(26,86,255,0.1)]">
                  <img
                    src="/hero-showcase.png"
                    alt="Marketing dashboards"
                    className="w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#08090d]/80 via-transparent to-transparent" />
                  {/* Floating metric card */}
                  <motion.div
                    animate={{ y: [0, -6, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-6 left-6 bg-[#111318]/90 backdrop-blur-md border border-white/10 rounded-xl p-4 shadow-xl"
                  >
                    <p className="text-xs text-white/40 mb-1">Avg. client result — 12 months</p>
                    <p className="text-3xl font-black text-white">+420%</p>
                    <p className="text-xs text-primary font-semibold">Organic Traffic Growth</p>
                  </motion.div>
                </div>
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

        {/* ── ALL SERVICES ROTATING FEATURE ── */}
        <AllServicesFeature />

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
              <a href="/work" className="shrink-0 inline-flex items-center gap-2 border border-border hover:border-primary/40 text-foreground font-semibold py-2.5 px-5 rounded-lg transition-colors text-sm group">
                View all work
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
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
                  className="group cursor-pointer flex flex-col bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-[0_8px_40px_rgba(26,86,255,0.12)] transition-all duration-300"
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
