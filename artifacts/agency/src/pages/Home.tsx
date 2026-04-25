import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ArrowRight, Target, Zap, Globe, Briefcase, PenTool, MapPin, Store, Building2, Star } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background selection:bg-primary selection:text-white">
      <Nav />
      
      <main className="flex-1">
        {/* HERO SECTION - Dark Cinematic Open */}
        <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden bg-[#0A0A0C] text-white">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-60"></div>
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
                  One team.<br/>
                  Every channel.<br/>
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
                  <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white rounded-md shadow-[0_0_40px_rgba(37,99,235,0.3)] border-none">
                    Book a Strategy Call <ArrowRight className="ml-2 h-5 w-5" />
                  </Button>
                  <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-md border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent">
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0C] via-transparent to-transparent z-10 bottom-0 h-32"></div>
                <img 
                  src="/hero-showcase.png" 
                  alt="Client UI Mockups" 
                  className="w-full h-full object-contain object-right drop-shadow-2xl"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* LOGOS SECTION */}
        <section className="py-10 bg-[#0A0A0C] border-b border-white/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60">
              {['Apex Dental', 'Toronto Limo Co', 'Hudson Outdoor', 'Nova SaaS', 'Prime Real Estate', 'Elevate Fitness', 'Oak & Vine', 'Meridian B2B'].map((logo, i) => (
                <div key={i} className="text-xl md:text-2xl font-display font-bold tracking-tighter text-white">{logo}</div>
              ))}
            </div>
          </div>
        </section>

        {/* MARKETS SERVED BANNER */}
        <div className="bg-primary text-primary-foreground py-3 text-sm font-medium overflow-hidden border-y border-primary-foreground/10">
          <div className="container mx-auto px-4 flex justify-center items-center gap-3 flex-wrap">
            <span className="opacity-80 uppercase tracking-widest text-xs font-bold mr-2">Markets We Serve:</span>
            {['Toronto', 'Mississauga', 'Hamilton', 'Ottawa', 'Vancouver', 'Calgary', 'NYC', 'Miami'].map((city, i) => (
              <div key={i} className="flex items-center gap-3">
                <span>{city}</span>
                {i < 7 && <span className="w-1 h-1 rounded-full bg-white/50" />}
              </div>
            ))}
          </div>
        </div>

        {/* METRICS / CREDIBILITY SECTION */}
        <section className="py-20 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-border/20">
              <div className="text-center md:px-8">
                <div className="text-5xl md:text-6xl font-display font-bold text-primary mb-3">$250M+</div>
                <div className="text-base font-medium text-secondary-foreground/80">Ad Spend Managed</div>
              </div>
              <div className="text-center md:px-8 pt-10 md:pt-0">
                <div className="text-5xl md:text-6xl font-display font-bold text-primary mb-3">15+</div>
                <div className="text-base font-medium text-secondary-foreground/80">Years in Market</div>
              </div>
              <div className="text-center md:px-8 pt-10 md:pt-0">
                <div className="text-5xl md:text-6xl font-display font-bold text-primary mb-3">3.8x</div>
                <div className="text-base font-medium text-secondary-foreground/80">Average ROAS Lift</div>
              </div>
            </div>
          </div>
        </section>

        {/* LOCAL BUSINESS MARKETING */}
        <section id="local" className="py-24 relative bg-background">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div className="order-2 lg:order-1 relative rounded-2xl overflow-hidden aspect-[4/3] shadow-2xl border border-border">
                <img src="/local-business-bg.png" alt="Local business storefront" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-primary text-white text-xs font-bold rounded">DENTAL</span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded">HOME SERVICES</span>
                    <span className="px-3 py-1 bg-white/20 backdrop-blur-md text-white text-xs font-bold rounded">REAL ESTATE</span>
                  </div>
                  <h3 className="text-2xl font-display font-bold mb-2">We build local monopolies.</h3>
                  <p className="text-white/80 text-sm">Turning physical locations into digital powerhouses.</p>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6">
                  <Store className="w-4 h-4" />
                  Local Business Growth
                </div>
                <h2 className="text-4xl md:text-5xl font-display font-bold leading-tight mb-6">
                  Dominate your city.<br/>Own your backyard.
                </h2>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  We don't just work with global SaaS brands. We engineer explosive growth for high-value local businesses. Whether you're a luxury limo service, a multi-location dental practice, or a premium landscaper, we build systems that capture local demand and crush the competition.
                </p>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">Hyper-Local SEO & GBP</h4>
                      <p className="text-muted-foreground text-sm">We optimize your Google Business Profile and local citations to ensure you rank #1 in the "Map Pack" for high-intent searches.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Star className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">Reputation Engine</h4>
                      <p className="text-muted-foreground text-sm">Automated review generation and management to build an insurmountable moat of 5-star reviews.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                      <Building2 className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-xl font-bold mb-1">Lead & Call Tracking</h4>
                      <p className="text-muted-foreground text-sm">We track every call, form fill, and booking back to the exact keyword and ad that drove it. Total ROI transparency.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO FLAGSHIP SECTION */}
        <section id="seo" className="py-24 relative overflow-hidden bg-primary text-primary-foreground">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff11_1px,transparent_1px),linear-gradient(to_bottom,#ffffff11_1px,transparent_1px)] bg-[size:4rem_4rem]"></div>
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-sm font-semibold mb-6">
                  Flagship Practice
                </div>
                <h2 className="text-4xl md:text-6xl font-display font-bold leading-tight mb-6">
                  Search dominance.<br/>Not just rankings.
                </h2>
                <p className="text-xl text-primary-foreground/80 mb-8 leading-relaxed">
                  Our SEO practice is the engine behind some of the fastest-growing companies. We don't just optimize for keywords; we engineer programmatic architectures, dominate local search, and build compounding traffic systems.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10">
                    <h3 className="font-bold text-lg mb-2">Programmatic SEO</h3>
                    <p className="text-primary-foreground/70 text-sm">Scalable architecture for millions of indexed pages.</p>
                  </div>
                  <div className="bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10 ring-2 ring-white/30 shadow-[0_0_15px_rgba(255,255,255,0.2)]">
                    <h3 className="font-bold text-lg mb-2 flex items-center gap-2">
                      <MapPin className="w-4 h-4" /> Local SEO
                    </h3>
                    <p className="text-primary-foreground/70 text-sm">GBP optimization and citation management for local dominance. Our secret weapon for practices & fleets.</p>
                  </div>
                  <div className="bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10">
                    <h3 className="font-bold text-lg mb-2">Technical SEO</h3>
                    <p className="text-primary-foreground/70 text-sm">Deep site audits, core web vitals, and crawl budget optimization.</p>
                  </div>
                  <div className="bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10">
                    <h3 className="font-bold text-lg mb-2">Content Strategy</h3>
                    <p className="text-primary-foreground/70 text-sm">High-intent keyword targeting and link-building velocity.</p>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square bg-black/30 rounded-2xl border border-white/10 p-8 backdrop-blur-md relative overflow-hidden flex flex-col justify-end">
                  <div className="absolute top-8 left-8 right-8 flex gap-4 items-end h-64">
                    {[40, 60, 45, 80, 70, 95, 120].map((h, i) => (
                      <motion.div 
                        key={i}
                        initial={{ height: 0 }}
                        whileInView={{ height: `${h}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: i * 0.1 }}
                        className="flex-1 bg-white/80 rounded-t-sm"
                      />
                    ))}
                  </div>
                  <div className="relative z-10 pt-8 border-t border-white/20 mt-8">
                    <div className="text-4xl font-display font-bold">+420%</div>
                    <div className="text-primary-foreground/80 font-medium">Organic Traffic Growth (Avg. 12mo)</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FULL SERVICES ARCHITECTURE */}
        <section id="services" className="py-24 bg-card/50">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Everything under one roof.</h2>
              <p className="text-xl text-muted-foreground">We eliminate the friction of managing multiple specialized vendors. Our teams work together to drive cohesive growth.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Category 1 */}
              <div className="bg-background p-8 rounded-xl border border-border shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-6">Strategy & Analytics</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <div>
                      <strong className="block text-foreground">Strategy & Consulting</strong>
                      <span className="text-sm text-muted-foreground">GTM planning, brand positioning, funnel strategy, pricing</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <div>
                      <strong className="block text-foreground">Analytics & Tracking</strong>
                      <span className="text-sm text-muted-foreground">GA setup, conversion tracking, attribution modeling</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <div>
                      <strong className="block text-foreground">Automation & AI</strong>
                      <span className="text-sm text-muted-foreground">Lead routing, workflow automation, AI systems</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Category 2 */}
              <div className="bg-background p-8 rounded-xl border border-primary/20 shadow-[0_0_20px_rgba(37,99,235,0.05)] relative overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-bl-full -z-10"></div>
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-6">Acquisition & Local</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <div>
                      <strong className="block text-foreground">Paid Advertising</strong>
                      <span className="text-sm text-muted-foreground">Google, Meta, TikTok, LinkedIn, retargeting</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <div>
                      <strong className="block text-primary">Reputation & Local Growth</strong>
                      <span className="text-sm text-muted-foreground block font-medium mt-0.5 text-foreground/80">Our flagship local offering.</span>
                      <span className="text-sm text-muted-foreground">Review management, GBP SEO, local citations, hyper-local ads.</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <div>
                      <strong className="block text-foreground">Lead Generation</strong>
                      <span className="text-sm text-muted-foreground">Funnel creation, lead magnets, outbound systems</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Category 3 */}
              <div className="bg-background p-8 rounded-xl border border-border shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <PenTool className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-6">Creative & Content</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <div>
                      <strong className="block text-foreground">Branding & Creative</strong>
                      <span className="text-sm text-muted-foreground">Identity, ad creatives, video editing</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <div>
                      <strong className="block text-foreground">Content Marketing</strong>
                      <span className="text-sm text-muted-foreground">Blog writing, website copy, video scripts</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <div>
                      <strong className="block text-foreground">Social Media</strong>
                      <span className="text-sm text-muted-foreground">Account management, influencer outreach</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Category 4 */}
              <div className="bg-background p-8 rounded-xl border border-border shadow-sm lg:col-span-1.5">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Globe className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-6">Experience & Retention</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <div>
                      <strong className="block text-foreground">Website & Development</strong>
                      <span className="text-sm text-muted-foreground">Web design, landing pages, CRO, speed optimization</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <div>
                      <strong className="block text-foreground">Email & CRM</strong>
                      <span className="text-sm text-muted-foreground">Campaigns, automation flows, HubSpot setup</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Category 5 */}
              <div className="bg-background p-8 rounded-xl border border-border shadow-sm lg:col-span-1.5">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-6">Specializations</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <div>
                      <strong className="block text-foreground">Niche Local Services</strong>
                      <span className="text-sm text-muted-foreground">Dental, MedSpa, Limo/Black Car, HVAC, Real Estate</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <div>
                      <strong className="block text-foreground">National Brands</strong>
                      <span className="text-sm text-muted-foreground">B2B SaaS, eCommerce, Enterprise Logistics</span>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="work" className="py-24 bg-background border-t border-border">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Proven Outcomes</h2>
                <p className="text-xl text-muted-foreground max-w-2xl">From local monopolies to national scale, we measure success in revenue.</p>
              </div>
              <Button variant="outline" className="shrink-0">View All Work</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              
              <motion.div 
                whileHover={{ y: -8 }}
                className="group cursor-pointer flex flex-col h-full"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-card border border-border relative">
                  <img src="/case-study-local.png" alt="Toronto Limo Co" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex gap-3 mb-4 flex-wrap">
                  <span className="px-2.5 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">Local Business</span>
                  <span className="px-2.5 py-1 rounded bg-secondary/10 text-secondary-foreground text-[10px] font-bold uppercase tracking-wider">SEO & Ads</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">Toronto Limo Co</h3>
                <p className="text-muted-foreground mb-6 flex-grow">Dominating high-intent local searches for corporate and luxury travel in the GTA.</p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border mt-auto">
                  <div>
                    <div className="text-2xl font-bold text-foreground">+312%</div>
                    <div className="text-sm text-muted-foreground">Bookings</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">#1</div>
                    <div className="text-sm text-muted-foreground">Map Pack</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -8 }}
                className="group cursor-pointer flex flex-col h-full"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-card border border-border relative">
                  <img src="/case-study-saas.png" alt="SaaS Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex gap-3 mb-4 flex-wrap">
                  <span className="px-2.5 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">SaaS</span>
                  <span className="px-2.5 py-1 rounded bg-secondary/10 text-secondary-foreground text-[10px] font-bold uppercase tracking-wider">Growth Engine</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">Nova FinTech</h3>
                <p className="text-muted-foreground mb-6 flex-grow">Scaling enterprise leads and driving down CPA for a national financial platform.</p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border mt-auto">
                  <div>
                    <div className="text-2xl font-bold text-foreground">315%</div>
                    <div className="text-sm text-muted-foreground">Lead Volume</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">-42%</div>
                    <div className="text-sm text-muted-foreground">CPA</div>
                  </div>
                </div>
              </motion.div>

              <motion.div 
                whileHover={{ y: -8 }}
                className="group cursor-pointer flex flex-col h-full lg:col-span-1 md:col-span-2"
              >
                <div className="aspect-[4/3] lg:aspect-[4/3] md:aspect-[21/9] rounded-xl overflow-hidden mb-6 bg-card border border-border relative">
                  <img src="/case-study-home.png" alt="Landscaping" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="flex gap-3 mb-4 flex-wrap">
                  <span className="px-2.5 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">Home Services</span>
                  <span className="px-2.5 py-1 rounded bg-secondary/10 text-secondary-foreground text-[10px] font-bold uppercase tracking-wider">Full Funnel</span>
                </div>
                <h3 className="text-2xl font-display font-bold mb-4 group-hover:text-primary transition-colors">Hudson Outdoor</h3>
                <p className="text-muted-foreground mb-6 flex-grow">Transforming a local landscaping firm into a regional powerhouse through CRM and paid social.</p>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border mt-auto">
                  <div>
                    <div className="text-2xl font-bold text-foreground">$2.4M</div>
                    <div className="text-sm text-muted-foreground">Attr. Revenue</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-foreground">+18%</div>
                    <div className="text-sm text-muted-foreground">Conv. Rate</div>
                  </div>
                </div>
              </motion.div>

            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-32 bg-[#0A0A0C] text-white text-center px-4 relative overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent opacity-50"></div>
          <div className="container mx-auto max-w-4xl relative z-10">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">Ready to dominate your category?</h2>
            <p className="text-xl text-white/70 mb-12 max-w-2xl mx-auto font-light">
              Stop settling for fragmented agencies and disjointed strategies. Partner with the team that owns the entire funnel for both local and national brands.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="h-16 px-10 text-xl bg-primary hover:bg-primary/90 text-white rounded-md shadow-[0_0_40px_rgba(37,99,235,0.4)] border-none">
                Get a Free Audit
              </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
