import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { LogoMarquee } from "@/components/LogoMarquee";
import { StickyCta } from "@/components/StickyCta";
import { Stats } from "@/components/sections/Stats";
import { Industries } from "@/components/sections/Industries";
import { Testimonials } from "@/components/sections/Testimonials";
import { TechStack } from "@/components/sections/TechStack";
import { Engagement } from "@/components/sections/Engagement";
import { Wins } from "@/components/sections/Wins";
import { Faq } from "@/components/sections/Faq";
import { MegaCta } from "@/components/sections/MegaCta";
import {
  ArrowRight,
  Target,
  Zap,
  Globe,
  Briefcase,
  PenTool,
  MapPin,
  Store,
  Building2,
  Star,
} from "lucide-react";

const ease = [0.22, 1, 0.36, 1] as const;
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease } },
};

const caseStudies = [
  {
    image: "/case-study-local.png",
    name: "Toronto Limo Co",
    tags: ["Local Business", "SEO & Ads"],
    blurb: "Dominating high-intent local searches for corporate and luxury travel in the GTA.",
    metrics: [
      { value: "+312%", label: "Bookings" },
      { value: "#1", label: "Map Pack" },
    ],
  },
  {
    image: "/case-study-saas.png",
    name: "Nova FinTech",
    tags: ["SaaS", "Growth Engine"],
    blurb: "Scaling enterprise leads and driving down CPA for a national financial platform.",
    metrics: [
      { value: "315%", label: "Lead Volume" },
      { value: "-42%", label: "CPA" },
    ],
  },
  {
    image: "/case-study-home.png",
    name: "Hudson Outdoor",
    tags: ["Home Services", "Full Funnel"],
    blurb: "Transforming a local landscaping firm into a regional powerhouse via CRM + paid social.",
    metrics: [
      { value: "$2.4M", label: "Attr. Revenue" },
      { value: "+18%", label: "Conv. Rate" },
    ],
  },
  {
    image: "/case-study-dental.png",
    name: "Apex Dental Group",
    tags: ["Dental", "Programmatic SEO"],
    blurb: "Six-location practice now ranking #1 across 1,100+ city + service combinations.",
    metrics: [
      { value: "+86%", label: "New Patients" },
      { value: "1,100", label: "Pages Live" },
    ],
  },
  {
    image: "/case-study-realestate.png",
    name: "Prime Realty Group",
    tags: ["Real Estate", "Local SEO"],
    blurb: "Boutique brokerage flipped from cold leads to a 60-day pipeline of seller appointments.",
    metrics: [
      { value: "+247%", label: "Listings YoY" },
      { value: "4.2x", label: "ROAS" },
    ],
  },
  {
    image: "/case-study-ecommerce.png",
    name: "Coastal Collective",
    tags: ["eCommerce", "Lifecycle + Paid"],
    blurb: "Shopify brand scaled from 6-figure to 8-figure revenue through CRO + lifecycle email.",
    metrics: [
      { value: "7.2x", label: "Q1 ROAS" },
      { value: "+38%", label: "AOV" },
    ],
  },
];

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background selection:bg-primary selection:text-white">
      <Nav />
      <StickyCta />

      <main className="flex-1">
        {/* HERO */}
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0A0A0C] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-60" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:5rem_5rem] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]" />

          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="max-w-2xl">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-white/90 text-sm font-medium mb-8 backdrop-blur-sm"
                >
                  <MapPin className="w-4 h-4 text-primary" />
                  Built in Toronto. Trusted by local + national brands.
                </motion.div>
                <motion.h1
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  className="text-5xl sm:text-6xl md:text-7xl lg:text-[5rem] font-display font-bold leading-[1.05] tracking-tight mb-8"
                >
                  One team.
                  <br />
                  Every channel.
                  <br />
                  <span className="text-primary">Dominant growth.</span>
                </motion.h1>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="text-xl md:text-2xl text-white/70 max-w-xl mb-10 leading-relaxed font-light"
                >
                  We partner with ambitious founders, local business owners, and CMOs to build category-defining brands. Strategy-first, execution-obsessed.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="flex flex-col sm:flex-row gap-4"
                >
                  <Button
                    size="lg"
                    className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white rounded-md shadow-[0_0_40px_rgba(37,99,235,0.3)] border-none group"
                  >
                    Book a Strategy Call
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="h-14 px-8 text-lg rounded-md border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent"
                  >
                    View Case Studies
                  </Button>
                </motion.div>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative lg:h-[600px] hidden md:block"
              >
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                  className="relative w-full h-full"
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent z-10 bottom-0 h-32" />
                  <img
                    src="/hero-showcase.png"
                    alt="Client UI Mockups"
                    className="w-full h-full object-contain object-right drop-shadow-2xl"
                  />
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* LOGO MARQUEE */}
        <LogoMarquee />

        {/* MARKETS BANNER */}
        <div className="bg-primary text-primary-foreground py-3 text-sm font-medium overflow-hidden border-y border-primary-foreground/10">
          <div className="container mx-auto px-4 flex justify-center items-center gap-3 flex-wrap">
            <span className="opacity-80 uppercase tracking-widest text-xs font-bold mr-2">
              Markets We Serve:
            </span>
            {["Toronto", "Mississauga", "Hamilton", "Ottawa", "Vancouver", "Calgary", "NYC", "Miami"].map(
              (city, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span>{city}</span>
                  {i < 7 && <span className="w-1 h-1 rounded-full bg-white/50" />}
                </div>
              ),
            )}
          </div>
        </div>

        {/* ANIMATED STATS */}
        <Stats />

        {/* LOCAL BUSINESS */}
        <section id="local" className="py-24 md:py-32 relative bg-background overflow-hidden">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease }}
                className="order-2 lg:order-1 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-border"
              >
                <img
                  src="/local-business-bg.png"
                  alt="Local business storefront"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded">
                      DENTAL
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded">
                      HOME SERVICES
                    </span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded">
                      REAL ESTATE
                    </span>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">
                    We build local monopolies.
                  </h3>
                  <p className="text-white/80 text-sm">
                    Turning physical locations into digital powerhouses.
                  </p>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 32 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease }}
                className="order-1 lg:order-2"
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                  <Store className="w-4 h-4" />
                  Local Business Growth
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                  Dominate your city.
                  <br />
                  Own your backyard.
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We don't just work with global SaaS brands. We engineer explosive growth for high-value local businesses. Whether you're a luxury limo service, a multi-location dental practice, or a premium landscaper, we build systems that capture local demand and crush the competition.
                </p>
                <div className="space-y-6">
                  {[
                    {
                      icon: MapPin,
                      title: "Hyper-Local SEO & GBP",
                      body: "We optimize your Google Business Profile and local citations to ensure you rank #1 in the Map Pack for high-intent searches.",
                    },
                    {
                      icon: Star,
                      title: "Reputation Engine",
                      body: "Automated review generation and management to build an insurmountable moat of 5-star reviews.",
                    },
                    {
                      icon: Building2,
                      title: "Lead & Call Tracking",
                      body: "We track every call, form fill, and booking back to the exact keyword and ad that drove it. Total ROI transparency.",
                    },
                  ].map((it, i) => (
                    <motion.div
                      key={it.title}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, margin: "-80px" }}
                      transition={{ duration: 0.5, delay: 0.1 + i * 0.08, ease }}
                      className="flex gap-4"
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <it.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-bold mb-1">{it.title}</h4>
                        <p className="text-muted-foreground text-sm">{it.body}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                <div className="mt-10">
                  <Button size="lg" className="group">
                    Explore local growth
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SEO FLAGSHIP */}
        <section
          id="seo"
          className="py-24 md:py-32 relative overflow-hidden bg-primary text-primary-foreground"
        >
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff11_1px,transparent_1px),linear-gradient(to_bottom,#ffffff11_1px,transparent_1px)] bg-[size:4rem_4rem]" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease }}
              >
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">
                  Flagship Practice
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
                  Search dominance.
                  <br />
                  Not just rankings.
                </h2>
                <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                  Our SEO practice is the engine behind some of the fastest-growing companies. We don't just optimize for keywords; we engineer programmatic architectures, dominate local search, and build compounding traffic systems.
                </p>
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ staggerChildren: 0.08 }}
                  className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                >
                  {[
                    {
                      title: "Programmatic SEO",
                      body: "Scalable architecture for millions of indexed pages.",
                    },
                    {
                      title: "Local SEO",
                      body: "GBP optimization and citation management for local dominance. Our secret weapon for practices & fleets.",
                      featured: true,
                    },
                    {
                      title: "Technical SEO",
                      body: "Deep site audits, core web vitals, and crawl budget optimization.",
                    },
                    {
                      title: "Content Strategy",
                      body: "High-intent keyword targeting and link-building velocity.",
                    },
                  ].map((card) => (
                    <motion.div
                      key={card.title}
                      variants={fadeUp}
                      whileHover={{ y: -4 }}
                      className={`bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10 ${
                        card.featured ? "ring-2 ring-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)]" : ""
                      }`}
                    >
                      <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                        {card.featured && <MapPin className="w-4 h-4" />}
                        {card.title}
                      </h3>
                      <p className="text-primary-foreground/70 text-sm">{card.body}</p>
                    </motion.div>
                  ))}
                </motion.div>
                <div className="mt-10">
                  <Button
                    size="lg"
                    className="bg-white text-primary hover:bg-white/90 group"
                  >
                    See SEO case studies
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease }}
                className="relative"
              >
                <div className="aspect-square bg-black/30 rounded-2xl border border-white/10 p-8 backdrop-blur-md relative overflow-hidden flex flex-col justify-end">
                  <div className="absolute top-8 left-8 right-8 flex gap-4 items-end h-64">
                    {[40, 60, 45, 80, 70, 95, 120].map((h, i) => (
                      <motion.div
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1, ease }}
                        className="flex-1 bg-white/80 rounded-t-sm"
                      />
                    ))}
                  </div>
                  <div className="relative z-10 pt-8 border-t border-white/20 mt-8">
                    <div className="text-4xl font-display font-bold">+420%</div>
                    <div className="text-primary-foreground/80 font-medium">
                      Organic Traffic Growth (Avg. 12mo)
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SERVICES ARCHITECTURE */}
        <section id="services" className="py-24 md:py-32 bg-card/40">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="text-center max-w-3xl mx-auto mb-16"
            >
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                Capabilities
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.05] tracking-tight mb-6">
                Everything under one roof.
              </h2>
              <p className="text-xl text-muted-foreground">
                Fourteen categories. One senior team. We eliminate the friction of managing multiple specialized vendors.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ staggerChildren: 0.08 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-background p-8 rounded-xl border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-6">Strategy & Analytics</h3>
                <ul className="space-y-4">
                  {[
                    {
                      strong: "Strategy & Consulting",
                      body: "GTM planning, brand positioning, funnel strategy, pricing.",
                    },
                    {
                      strong: "Analytics & Tracking",
                      body: "GA4 setup, conversion tracking, attribution modeling.",
                    },
                    {
                      strong: "Automation & AI",
                      body: "Lead routing, workflow automation, AI systems.",
                    },
                  ].map((it) => (
                    <li key={it.strong} className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <div>
                        <strong className="block text-foreground">{it.strong}</strong>
                        <span className="text-sm text-muted-foreground">{it.body}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-background p-8 rounded-xl border border-primary/20 shadow-[0_0_20px_rgba(37,99,235,0.05)] hover:shadow-xl transition-all relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10" />
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-6">Acquisition & Local</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <div>
                      <strong className="block text-foreground">Paid Advertising</strong>
                      <span className="text-sm text-muted-foreground">
                        Google, Meta, TikTok, LinkedIn, retargeting.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <div>
                      <strong className="block text-primary">Reputation & Local Growth</strong>
                      <span className="text-sm text-foreground/80 block font-medium mt-0.5">
                        Our flagship local offering.
                      </span>
                      <span className="text-sm text-muted-foreground">
                        Review management, GBP SEO, local citations, hyper-local ads.
                      </span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <div>
                      <strong className="block text-foreground">Lead Generation</strong>
                      <span className="text-sm text-muted-foreground">
                        Funnel creation, lead magnets, outbound systems.
                      </span>
                    </div>
                  </li>
                </ul>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-background p-8 rounded-xl border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <PenTool className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-6">Creative & Content</h3>
                <ul className="space-y-4">
                  {[
                    { strong: "Branding & Creative", body: "Identity, ad creatives, video editing." },
                    { strong: "Content Marketing", body: "Blog writing, website copy, video scripts." },
                    { strong: "Social Media", body: "Account management, influencer outreach." },
                  ].map((it) => (
                    <li key={it.strong} className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <div>
                        <strong className="block text-foreground">{it.strong}</strong>
                        <span className="text-sm text-muted-foreground">{it.body}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-background p-8 rounded-xl border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-6">Experience & Retention</h3>
                <ul className="space-y-4">
                  {[
                    {
                      strong: "Website & Development",
                      body: "Web design, landing pages, CRO, speed optimization.",
                    },
                    {
                      strong: "Email & CRM",
                      body: "Campaigns, automation flows, HubSpot setup.",
                    },
                    {
                      strong: "eCommerce Optimization",
                      body: "Shopify CRO, AOV lifts, lifecycle email + SMS flows.",
                    },
                  ].map((it) => (
                    <li key={it.strong} className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <div>
                        <strong className="block text-foreground">{it.strong}</strong>
                        <span className="text-sm text-muted-foreground">{it.body}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-background p-8 rounded-xl border border-border shadow-sm hover:shadow-xl hover:border-primary/30 transition-all"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-6">Specializations</h3>
                <ul className="space-y-4">
                  {[
                    {
                      strong: "Niche Local Services",
                      body: "Dental, MedSpa, Limo/Black Car, HVAC, Real Estate.",
                    },
                    {
                      strong: "National Brands",
                      body: "B2B SaaS, eCommerce, Enterprise Logistics.",
                    },
                    {
                      strong: "Regulated Verticals",
                      body: "Legal, financial services, healthcare — compliant by default.",
                    },
                  ].map((it) => (
                    <li key={it.strong} className="flex items-start gap-3">
                      <div className="mt-2 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                      <div>
                        <strong className="block text-foreground">{it.strong}</strong>
                        <span className="text-sm text-muted-foreground">{it.body}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </motion.div>

              <motion.div
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="bg-foreground text-background p-8 rounded-xl border border-foreground shadow-xl relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 w-40 h-40 bg-primary/30 rounded-bl-full -z-10 blur-2xl" />
                <div className="w-12 h-12 rounded-lg bg-primary/20 text-primary flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-3">
                  Need it all? Run with our pod.
                </h3>
                <p className="text-background/70 text-sm mb-8 leading-relaxed">
                  Our embedded growth pods bundle strategy, paid, SEO, content, creative and dev under one senior lead. Most clients see meaningful movement inside 30 days.
                </p>
                <Button
                  className="bg-primary hover:bg-primary/90 text-white border-0 group w-full"
                  size="lg"
                >
                  Build my pod
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* INDUSTRIES */}
        <Industries />

        {/* CASE STUDIES — 6 cards */}
        <section id="work" className="py-24 md:py-32 bg-background border-t border-border">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6 }}
              className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6"
            >
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-4">
                  Selected Work
                </div>
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-[1.05] tracking-tight mb-4">
                  Proven Outcomes
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl">
                  From local monopolies to national scale, we measure success in revenue.
                </p>
              </div>
              <Button variant="outline" className="shrink-0 group">
                View All Work
                <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: "-60px" }}
              transition={{ staggerChildren: 0.08 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {caseStudies.map((cs) => (
                <motion.div
                  key={cs.name}
                  variants={fadeUp}
                  whileHover={{ y: -8 }}
                  className="group cursor-pointer flex flex-col h-full"
                >
                  <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-card border border-border relative">
                    <img
                      src={cs.image}
                      alt={cs.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                  <div className="flex gap-3 mb-4 flex-wrap">
                    {cs.tags.map((t, i) => (
                      <span
                        key={t}
                        className={`px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider ${
                          i === 0
                            ? "bg-primary/10 text-primary"
                            : "bg-secondary/10 text-secondary-foreground"
                        }`}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-primary transition-colors">
                    {cs.name}
                  </h3>
                  <p className="text-muted-foreground mb-6 flex-grow">{cs.blurb}</p>
                  <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border mt-auto">
                    {cs.metrics.map((m) => (
                      <div key={m.label}>
                        <div className="text-2xl font-bold text-foreground">{m.value}</div>
                        <div className="text-sm text-muted-foreground">{m.label}</div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* TESTIMONIALS */}
        <Testimonials />

        {/* RECENT WINS */}
        <Wins />

        {/* TECH STACK */}
        <TechStack />

        {/* ENGAGEMENT MODELS */}
        <Engagement />

        {/* FAQ */}
        <Faq />

        {/* PRE-FOOTER MEGA CTA */}
        <MegaCta />
      </main>

      <Footer />
    </div>
  );
}
