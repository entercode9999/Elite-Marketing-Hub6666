import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { ArrowRight, BarChart3, Search, Target, Megaphone, Zap, Globe, MessageSquare, Briefcase, Mail, PenTool, PenBox, ShoppingCart, Crosshair, TrendingUp } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-[100dvh] flex flex-col bg-background selection:bg-primary selection:text-white">
      <Nav />
      
      <main className="flex-1 pt-20">
        {/* HERO SECTION */}
        <section className="relative pt-24 pb-32 lg:pt-36 lg:pb-40 overflow-hidden">
          <div className="container mx-auto px-4 relative z-10">
            <div className="max-w-4xl">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-semibold mb-6"
              >
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                Full-Service Performance Agency
              </motion.div>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-6xl md:text-8xl font-display font-bold leading-[1.05] tracking-tight mb-8"
              >
                One team.<br/>
                Every channel.<br/>
                <span className="text-primary">Real growth.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl mb-12 leading-relaxed"
              >
                We partner with ambitious founders and CMOs to build category-defining brands. Strategy-first, execution-obsessed, and ruthlessly accountable to revenue.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button size="lg" className="h-14 px-8 text-lg bg-primary hover:bg-primary/90 text-white rounded-md">
                  Explore Capabilities <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button size="lg" variant="outline" className="h-14 px-8 text-lg rounded-md border-border/50">
                  View Case Studies
                </Button>
              </motion.div>
            </div>
          </div>
          
          <div className="absolute right-0 top-0 w-1/2 h-full hidden lg:block opacity-20 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-l from-transparent to-background z-10" />
            <img src="/hero-abstract.png" alt="Abstract architectural detail" className="w-full h-full object-cover" />
          </div>
        </section>

        {/* LOGOS SECTION */}
        <section className="py-12 border-y border-border/40 bg-card/50">
          <div className="container mx-auto px-4 text-center">
            <p className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">Trusted by category leaders</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
              {['Acme Corp', 'Nexus', 'Vertex', 'Stratos', 'Quantum'].map((logo, i) => (
                <div key={i} className="text-2xl font-display font-bold tracking-tighter">{logo}</div>
              ))}
            </div>
          </div>
        </section>

        {/* METRICS / CREDIBILITY SECTION */}
        <section className="py-24 bg-secondary text-secondary-foreground">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-border/20">
              <div className="text-center md:px-8">
                <div className="text-5xl md:text-7xl font-display font-bold text-primary mb-4">$250M+</div>
                <div className="text-lg font-medium text-secondary-foreground/80">Ad Spend Managed</div>
              </div>
              <div className="text-center md:px-8 pt-12 md:pt-0">
                <div className="text-5xl md:text-7xl font-display font-bold text-primary mb-4">15+</div>
                <div className="text-lg font-medium text-secondary-foreground/80">Years in Market</div>
              </div>
              <div className="text-center md:px-8 pt-12 md:pt-0">
                <div className="text-5xl md:text-7xl font-display font-bold text-primary mb-4">3.8x</div>
                <div className="text-lg font-medium text-secondary-foreground/80">Average ROAS Lift</div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO FLAGSHIP SECTION */}
        <section id="seo" className="py-32 relative overflow-hidden bg-primary text-primary-foreground">
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
                  <div className="bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10">
                    <h3 className="font-bold text-lg mb-2">Technical SEO</h3>
                    <p className="text-primary-foreground/70 text-sm">Deep site audits, core web vitals, and crawl budget optimization.</p>
                  </div>
                  <div className="bg-black/20 p-6 rounded-lg backdrop-blur-sm border border-white/10">
                    <h3 className="font-bold text-lg mb-2">Local SEO</h3>
                    <p className="text-primary-foreground/70 text-sm">GBP optimization and citation management for local dominance.</p>
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
        <section id="services" className="py-32 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">Everything under one roof.</h2>
              <p className="text-xl text-muted-foreground">We eliminate the friction of managing multiple specialized vendors. Our teams work together to drive cohesive growth.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Category 1 */}
              <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
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
              <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Zap className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-6">Acquisition</h3>
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
                      <strong className="block text-foreground">Lead Generation</strong>
                      <span className="text-sm text-muted-foreground">Funnel creation, lead magnets, outbound systems</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <div>
                      <strong className="block text-foreground">Reputation & Local</strong>
                      <span className="text-sm text-muted-foreground">Review management, listings, local citations</span>
                    </div>
                  </li>
                </ul>
              </div>

              {/* Category 3 */}
              <div className="bg-card p-8 rounded-xl border border-border shadow-sm">
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
              <div className="bg-card p-8 rounded-xl border border-border shadow-sm lg:col-span-1.5">
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
              <div className="bg-card p-8 rounded-xl border border-border shadow-sm lg:col-span-1.5">
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center mb-6">
                  <Briefcase className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-display font-bold mb-6">Specializations</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <div>
                      <strong className="block text-foreground">eCommerce Marketing</strong>
                      <span className="text-sm text-muted-foreground">Product SEO, CRO, email flows, paid ads</span>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="mt-1 w-1.5 h-1.5 rounded-full bg-primary shrink-0" />
                    <div>
                      <strong className="block text-foreground">Niche/Vertical Marketing</strong>
                      <span className="text-sm text-muted-foreground">SaaS, Real Estate, Dental, Local Services</span>
                    </div>
                  </li>
                </ul>
              </div>

            </div>
          </div>
        </section>

        {/* CASE STUDIES */}
        <section id="work" className="py-32 bg-muted/50 border-t border-border/40">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-end mb-16">
              <div>
                <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">Proven Outcomes</h2>
                <p className="text-xl text-muted-foreground">We measure success in revenue, not just impressions.</p>
              </div>
              <Button variant="outline" className="hidden md:flex">View All Work</Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-card border border-border">
                  <img src="/case-study-saas.png" alt="SaaS Dashboard" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">SaaS</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">SEO & Paid</span>
                </div>
                <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">Scaling enterprise leads by 315% for FinTech platform</h3>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
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
                whileHover={{ y: -10 }}
                className="group cursor-pointer"
              >
                <div className="aspect-[4/3] rounded-xl overflow-hidden mb-6 bg-card border border-border">
                  <img src="/case-study-ecommerce.png" alt="eCommerce Logistics" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="flex gap-4 mb-4">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">eCommerce</span>
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">Email & CRO</span>
                </div>
                <h3 className="text-3xl font-display font-bold mb-4 group-hover:text-primary transition-colors">Driving $2.4M in recovered revenue via advanced CRM</h3>
                <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border">
                  <div>
                    <div className="text-2xl font-bold text-foreground">$2.4M</div>
                    <div className="text-sm text-muted-foreground">New Revenue</div>
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
        <section className="py-32 bg-secondary text-secondary-foreground text-center px-4">
          <div className="container mx-auto max-w-4xl">
            <h2 className="text-5xl md:text-7xl font-display font-bold mb-8">Ready to dominate your category?</h2>
            <p className="text-xl text-secondary-foreground/80 mb-12 max-w-2xl mx-auto">
              Stop settling for fragmented agencies and disjointed strategies. Partner with the team that owns the entire funnel.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="h-16 px-10 text-xl bg-primary hover:bg-primary/90 text-white rounded-md">
                Schedule a Strategy Session
              </Button>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
