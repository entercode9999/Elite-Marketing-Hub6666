import { useState } from "react";
import { Link } from "wouter";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight, Mail, Phone, MapPin, Star, TrendingUp, Users, Shield,
  Zap, Target, BarChart3, Heart, ChevronDown, Clock, CheckCircle2,
  Award, Globe, BookOpen, Play, Coffee, Lightbulb, Search,
} from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { useSeo } from "@/hooks/useSeo";
import { submitLeadForm } from "@/lib/forms";

/* ─── Shared hero shell ──────────────────────────────────────────── */
function DarkHero({ label, title, sub, children }: { label: string; title: React.ReactNode; sub?: string; children?: React.ReactNode }) {
  return (
    <section className="relative bg-[#08090d] pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:72px_72px]" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}
          className="text-[11px] font-black uppercase tracking-widest text-primary mb-4">{label}</motion.p>
        <motion.h1 initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.07, ease: [0.22, 1, 0.36, 1] }}
          className="text-5xl md:text-6xl font-black text-white leading-[1.05] max-w-4xl mb-4">{title}</motion.h1>
        {sub && <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 }}
          className="text-white/40 text-lg max-w-xl leading-relaxed">{sub}</motion.p>}
        {children}
      </div>
    </section>
  );
}

/* ══════════════════════════════════════════════════════════════════
   ABOUT PAGE
══════════════════════════════════════════════════════════════════ */

const TEAM = [
  {
    name: "Marcus Reid",
    role: "Founder & CEO",
    bio: "Founded Outlier in 2024 to help Ontario service businesses generate more inbound leads through focused local SEO and paid media — built around the idea that smaller, specialized agencies get better results for local operators.",
    initials: "MR",
    accent: "#1a56ff",
    tags: ["Strategy", "Business Dev", "Partnerships"],
  },
  {
    name: "Priya Nair",
    role: "Head of SEO",
    bio: "12 years building organic search strategies for local service businesses across Canada. Priya leads our SEO practice with a focus on local search visibility and technical SEO foundations.",
    initials: "PN",
    accent: "#7c3aed",
    tags: ["Technical SEO", "Content Strategy", "Local SEO"],
  },
  {
    name: "Jordan Kim",
    role: "Head of Paid Media",
    bio: "Extensive experience running Google and Meta campaigns for local service businesses. Jordan's specialty is building lead acquisition systems that improve over time — not just campaigns that run and stop.",
    initials: "JK",
    accent: "#e85d04",
    tags: ["Google Ads", "Meta Ads", "Analytics"],
  },
  {
    name: "Chloe Armstrong",
    role: "Director of Web & CX",
    bio: "Former UX lead at a Vancouver agency, Chloe joined Outlier to build our conversion-focused web practice. She obsesses over the intersection of design, speed, and revenue.",
    initials: "CA",
    accent: "#20c997",
    tags: ["CRO", "UX Design", "Ecommerce"],
  },
];

const VALUES = [
  { icon: Target, title: "Outcomes over activity", desc: "Reports and deliverables are easy. Results that move your business are hard. We optimise for the latter — always." },
  { icon: Shield, title: "Radical transparency", desc: "You see everything. Strategy, data, decisions, and what isn't working. We run no black boxes and no vanity metrics." },
  { icon: Users, title: "Depth over breadth", desc: "We stay selective so we can go deep — not thin. You get senior attention and hands-on execution, not a junior account manager." },
  { icon: BarChart3, title: "Data is the conversation", desc: "Every recommendation is grounded in evidence. We don't guess, and we don't sell on gut feel or industry buzzwords." },
  { icon: Heart, title: "We win when you win", desc: "We don't chase one-time clients. We build long-term partnerships because the work keeps generating leads — and clients stay when it does." },
  { icon: Zap, title: "Speed without shortcuts", desc: "Urgency is baked into how we work. We move fast — but never at the cost of quality, data integrity, or client trust." },
];

const CERTIFICATIONS = [
  { name: "Google Partner", sub: "Premier Level" },
  { name: "Meta Business Partner", sub: "Agency Programme" },
  { name: "Shopify Partner", sub: "Development & Marketing" },
  { name: "HubSpot Partner", sub: "Platinum Tier" },
  { name: "Semrush Agency", sub: "Certified Partner" },
  { name: "Clutch Top Agency", sub: "Toronto — 4.9★" },
];

const MILESTONES = [
  { year: "2024", event: "Founded in Markham. Built specifically for local service businesses from day one." },
  { year: "2016", event: "Expanded into paid media. First Google and Meta acquisition systems launched." },
  { year: "2018", event: "Launched conversion-focused web and CRO practice." },
  { year: "2020", event: "Deepened focus on local SEO and lead generation systems for Ontario markets." },
  { year: "2022", event: "Launched programmatic local SEO practice for multi-location service businesses." },
  { year: "2024", event: "Continued focus on lead generation and conversion systems. Still headquartered in Toronto." },
];

export function AboutPage() {
  useSeo({
    title: "About Outlier | Toronto Lead Generation Agency",
    description: "Outlier is a focused Toronto-based lead generation agency helping local service businesses generate more inbound leads through SEO, paid ads, and conversion systems.",
    canonicalPath: "/about",
  });
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      <DarkHero
        label="About Outlier"
        title={<>We help local service businesses<br /><span className="text-primary italic">generate more qualified leads.</span></>}
        sub="A focused Toronto-based agency built around one outcome: measurable lead generation for local service businesses."
      />

      {/* Stats strip */}
      <section className="bg-primary">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 sm:grid-cols-5">
            {[
              { n: "Toronto", l: "Based & operator-led" },
              { n: "Boutique", l: "Focused lead generation team" },
              { n: "Long-term", l: "Client partnerships" },
              { n: "Senior", l: "Execution on every account" },
              { n: "4.9★", l: "Clutch agency rating" },
            ].map((s, i, arr) => (
              <div key={s.l} className={`py-5 px-4 text-center border-white/20 border-r border-b sm:border-b-0 last:border-r-0 sm:last:border-r-0 ${i === arr.length - 1 ? "col-span-2 sm:col-span-1 border-r-0" : ""}`}>
                <p className="text-white font-black text-xl leading-none mb-1">{s.n}</p>
                <p className="text-white/60 text-[9px] font-bold uppercase tracking-widest leading-tight">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Our Story</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1] mb-6">
                Built specifically for local service businesses
              </h2>
              <div className="space-y-4 text-gray-600 text-[16px] leading-relaxed">
                <p>
                  We started as a small team with one focus: helping local service businesses in Ontario generate more inbound leads. Not broad digital marketing for everyone — just SEO, paid ads, and conversion systems for the kinds of businesses that live and die by the phone ringing.
                </p>
                <p>
                  Dental practices, law firms, HVAC companies, renovation contractors, limo services, fitness studios — businesses where one additional qualified lead per day changes the month. That's who we work with and what we've built our systems around.
                </p>
                <p>
                  We stay deliberately small. Every client gets a senior person working directly on their project — not a junior account manager running reports. We don't take on more than we can do well.
                </p>
              </div>
            </div>
            {/* Focus areas visual */}
            <div className="space-y-4">
              {[
                { label: "Lead Generation Systems", desc: "SEO, Google Ads, and paid social built specifically to drive inbound calls and form submissions — not just traffic.", color: "#1a56ff" },
                { label: "Local Search Visibility", desc: "Google Business Profile, map pack rankings, and local citation systems that put you in front of people searching in your area right now.", color: "#20c997" },
                { label: "Conversion Optimization", desc: "Websites and landing pages built to turn visitors into enquiries — every design decision tied to a lead generation outcome.", color: "#e85d04" },
              ].map((item, i) => (
                <motion.div
                  key={item.label}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-4 p-5 bg-[#f9f8f5] border border-[#e5e2d9] rounded-2xl hover:border-primary/20 transition-colors"
                >
                  <div className="w-3 h-3 rounded-full flex-shrink-0 mt-1.5" style={{ background: item.color }} />
                  <div>
                    <p className="font-black text-[#0e0e0e] text-[15px] mb-1">{item.label}</p>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 bg-[#f9f8f5]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-xl mb-14">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">How We Operate</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1]">Six principles we never compromise on</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {VALUES.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="bg-white border border-[#e5e2d9] rounded-2xl p-7 hover:shadow-md hover:border-primary/20 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mb-5 group-hover:bg-primary/14 transition-colors">
                  <v.icon className="w-5 h-5 text-primary" />
                </div>
                <h3 className="font-black text-[#0e0e0e] text-[16px] mb-3">{v.title}</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Office / culture strip */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Visual mock - office card */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="bg-[#08090d] rounded-2xl overflow-hidden aspect-[4/3] relative">
                {/* Grid bg */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px]" />
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/15 rounded-full blur-[100px]" />
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 rounded-2xl bg-primary flex items-center justify-center mx-auto mb-5">
                      <MapPin className="w-8 h-8 text-white" />
                    </div>
                    <p className="text-white font-black text-2xl mb-1">Markham, Ontario</p>
                    <p className="text-white/40 text-sm mb-6">Markham, Ontario · Est. 2024</p>
                    <div className="flex gap-4 justify-center">
                      {[{ icon: Coffee, l: "Coffee first" }, { icon: Lightbulb, l: "Ideas always" }, { icon: Play, l: "Fast execution" }].map((item) => (
                        <div key={item.l} className="text-center">
                          <div className="w-10 h-10 rounded-xl bg-white/8 border border-white/10 flex items-center justify-center mx-auto mb-2">
                            <item.icon className="w-4 h-4 text-white/60" />
                          </div>
                          <p className="text-white/30 text-[10px] font-medium">{item.l}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                {/* Bottom bar */}
                <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
                  <p className="text-white/50 text-xs">Markham, Ontario</p>
                </div>
              </div>
              {/* Floating stat cards */}
              <div className="absolute -bottom-4 -right-4 bg-white border border-[#e5e2d9] rounded-xl p-4 shadow-lg">
                <p className="text-primary font-black text-2xl">4.9★</p>
                <p className="text-gray-500 text-xs">Clutch rating</p>
              </div>
              <div className="absolute -top-4 -left-4 bg-white border border-[#e5e2d9] rounded-xl p-4 shadow-lg">
                <p className="text-primary font-black text-2xl">Senior</p>
                <p className="text-gray-500 text-xs">Team on every account</p>
              </div>
            </motion.div>
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Where We Work</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1] mb-6">
                Toronto-based, focused on local service businesses
              </h2>
              <div className="space-y-4 text-gray-600 text-[15px] leading-relaxed mb-8">
                <p>We're headquartered in Toronto's creative and tech district — close enough to our clients to meet for coffee, senior enough in our operations to serve businesses coast-to-coast.</p>
                <p>Our team works hybrid across Toronto and remote Canada. What doesn't change is the expectation: senior work, measurable results, and full transparency from week one.</p>
              </div>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {[
                  { icon: Users, label: "Focus", value: "Local service businesses" },
                  { icon: Globe, label: "Markets served", value: "Ontario + GTA" },
                  { icon: Clock, label: "Est.", value: "2024" },
                  { icon: Star, label: "Clutch rating", value: "4.9 / 5.0" },
                ].map((item) => (
                  <div key={item.label} className="bg-[#f9f8f5] border border-[#e5e2d9] rounded-xl p-4 flex gap-3 items-start">
                    <item.icon className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">{item.label}</p>
                      <p className="font-bold text-[#0e0e0e] text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-sm group">
                Work with us <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-[#08090d] overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/12 rounded-full blur-[130px] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 max-w-3xl text-center relative z-10"
        >
          <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-4">Work with a focused team</p>
          <h2 className="text-4xl font-black text-white leading-tight mb-5">Ready to generate more qualified leads?</h2>
          <p className="text-white/40 text-[15px] leading-relaxed mb-8 max-w-xl mx-auto">
            Every project starts with a free strategy call. We review your current lead flow, identify where demand is being lost, and tell you exactly what we'd do about it.
          </p>
          <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors text-[15px] group">
            Book a Free Strategy Call <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   CONTACT PAGE
══════════════════════════════════════════════════════════════════ */

const CONTACT_FAQ = [
  {
    q: "How quickly do you respond?",
    a: "Within 1 business day — usually the same day. We don't let enquiries sit. Once we receive your message, a senior team member reviews it and responds personally.",
  },
  {
    q: "Do you require long-term contracts?",
    a: "No. Our setup packages are a one-time investment with no ongoing commitment required. If you want to continue with monthly SEO growth, that's month-to-month — cancel any time. No lock-in, no pressure.",
  },
  {
    q: "How do you measure and report on results?",
    a: "Against KPIs agreed before we start — revenue, leads, ROAS, rankings, traffic. Whatever matters to your business, we build reporting around that. No vanity metrics, no cherry-picked numbers.",
  },
  {
    q: "Do you work with businesses outside Toronto?",
    a: "Yes. While we're headquartered in Toronto, we work with service businesses across Ontario — GTA, Hamilton, Ottawa, and surrounding areas. Most clients work with us fully remote.",
  },
  {
    q: "What's the minimum to get started?",
    a: "Our setup packages start at $1,490 — a one-time investment with no monthly commitment required. We work with local service businesses of all sizes. If you're serious about generating more inbound leads, get in touch and we'll find the right fit.",
  },
  {
    q: "What happens after I submit the form?",
    a: "A senior team member reviews your submission (usually same day), conducts a quick desk audit of your current digital presence, and schedules a 30-minute strategy call. No sales script — just a straight conversation about your goals.",
  },
];

const SERVICES_LIST = [
  "SEO / Organic Growth",
  "Google Ads / PPC",
  "Meta & Social Advertising",
  "Local SEO & Google Business",
  "Website Design & CRO",
  "Ecommerce Development",
  "Content Marketing",
  "Email Marketing",
  "Other / Not sure yet",
];

const BUDGETS = [
  "$1,500 – $3,000 / month",
  "$3,000 – $6,000 / month",
  "$6,000 – $12,000 / month",
  "$12,000+ / month",
  "Not sure yet",
];

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e5e2d9] last:border-0">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 py-5 text-left group"
      >
        <span className="font-bold text-[#0e0e0e] text-[15px] group-hover:text-primary transition-colors">{q}</span>
        <ChevronDown className={`w-5 h-5 text-gray-400 flex-shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`} />
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="text-gray-500 text-[14.5px] leading-relaxed pb-5">{a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [formError, setFormError] = useState("");
  async function handleContactSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitting(true);
    setFormError("");
    try {
      await submitLeadForm(event.currentTarget, "Contact form");
      setSubmitted(true);
    } catch (error) {
      setFormError(error instanceof Error ? error.message : "Unable to send your message right now.");
    } finally {
      setSubmitting(false);
    }
  }
  useSeo({
    title: "Contact Outlier | Local Lead Generation Agency",
    description: "Get in touch with Outlier's team. Tell us about your business and goals — a senior strategist will respond within 1 business day.",
    canonicalPath: "/contact",
  });
  return (
    <div className="min-h-screen bg-[#f9f8f5]">
      <Nav />

      <DarkHero
        label="Contact"
        title={<>Let's talk about<br /><span className="text-primary italic">your growth.</span></>}
        sub="No obligations, no boilerplate pitch. Just a straight conversation about where you are and where you want to be."
      >
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap gap-4 mt-8"
        >
          {[
            { icon: Clock, text: "Respond within 1 business day" },
            { icon: Shield, text: "No spam, ever" },
            { icon: CheckCircle2, text: "No obligation" },
          ].map((b) => (
            <div key={b.text} className="flex items-center gap-2 text-white/50 text-sm">
              <b.icon className="w-4 h-4 text-primary" />
              {b.text}
            </div>
          ))}
        </motion.div>
      </DarkHero>

      {/* What happens next — process */}
      <section className="py-16 bg-white border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-center text-[11px] font-black uppercase tracking-widest text-primary mb-10">What Happens Next</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                step: "01",
                title: "We review your submission",
                desc: "A senior team member (not an SDR) personally reviews your enquiry and does a quick audit of your current digital presence before we speak.",
                icon: Search,
              },
              {
                step: "02",
                title: "We schedule a strategy call",
                desc: "30 minutes. No pitch, no deck. We ask about your business, walk through what we found in the audit, and assess if we're a genuine fit.",
                icon: Clock,
              },
              {
                step: "03",
                title: "You get a custom growth plan",
                desc: "If there's a fit, we produce a tailored strategy document outlining exactly what we'd do, what results look like, and what it costs.",
                icon: TrendingUp,
              },
            ].map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="relative bg-[#f9f8f5] border border-[#e5e2d9] rounded-2xl p-7"
              >
                <div className="absolute top-5 right-6 text-[72px] font-black leading-none text-[#0e0e0e]/[0.03] select-none">{step.step}</div>
                <div className="w-10 h-10 rounded-xl bg-primary/8 flex items-center justify-center mb-5">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-2">Step {step.step}</p>
                <h3 className="font-black text-[#0e0e0e] text-[16px] mb-3">{step.title}</h3>
                <p className="text-gray-500 text-[14px] leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main contact section */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-14">

            {/* Left — contact info + social proof */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h2 className="text-2xl font-black text-[#0e0e0e] mb-6">Reach us directly</h2>
                <div className="space-y-3">
                  {[
                    { icon: Phone, label: "Phone", val: "+1 (289) 818-9102", href: "tel:+12898189102" },
                    { icon: Mail, label: "Email", val: "hello@outlierdigital.ca", href: "mailto:hello@outlierdigital.ca" },
                    { icon: MapPin, label: "Location", val: "Markham, Ontario", href: "#" },
                  ].map((c) => (
                    <a
                      key={c.label}
                      href={c.href}
                      className="flex items-start gap-4 bg-white border border-[#e5e2d9] rounded-xl p-4 hover:border-primary/40 hover:shadow-sm transition-all"
                    >
                      <div className="w-9 h-9 rounded-lg bg-primary/8 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <c.icon className="w-4 h-4 text-primary" />
                      </div>
                      <div>
                        <div className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-0.5">{c.label}</div>
                        <div className="font-medium text-[#0e0e0e] text-sm">{c.val}</div>
                      </div>
                    </a>
                  ))}
                </div>
              </div>

              {/* Trust social proof */}
              <div className="bg-white border border-[#e5e2d9] rounded-2xl p-6">
                <div className="flex gap-1 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => <Star key={i} className="w-4 h-4 fill-primary text-primary" />)}
                </div>
                <p className="text-[#0e0e0e] font-medium text-[14px] leading-relaxed italic mb-4">
                  "Outlier was the only agency that came to the first call having already done homework on our business. That set the tone for everything that followed."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center font-black text-primary text-xs">DR</div>
                  <div>
                    <p className="font-bold text-[#0e0e0e] text-sm">Daniel Reyes</p>
                    <p className="text-gray-400 text-[12px]">CEO, Apex Dental Group</p>
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-[#e5e2d9] flex items-center gap-2">
                  <Award className="w-4 h-4 text-primary" />
                  <span className="text-[11px] text-gray-400 font-medium">4.9★ on Clutch · Ontario service businesses</span>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-[#08090d] rounded-2xl p-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-white/30 mb-4">Office Hours</p>
                <div className="space-y-2">
                  {[
                    { d: "Monday – Friday", t: "9:00 AM – 6:00 PM ET" },
                    { d: "Saturday", t: "By appointment" },
                    { d: "Response time", t: "Within 1 business day" },
                  ].map((h) => (
                    <div key={h.d} className="flex justify-between text-sm">
                      <span className="text-white/40">{h.d}</span>
                      <span className="text-white/70 font-medium">{h.t}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — form */}
            <div className="lg:col-span-3">
              <div className="bg-white border border-[#e5e2d9] rounded-2xl p-8 shadow-sm">
                {submitted ? (
                  <div className="py-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                      <CheckCircle2 className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-black text-[#0e0e0e] mb-3">Message received!</h3>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-xs mx-auto">A senior team member will review your message and respond within 1 business day — usually the same day.</p>
                  </div>
                ) : (
                  <>
                <h3 className="text-xl font-black text-[#0e0e0e] mb-2">Tell us about your business</h3>
                <p className="text-gray-400 text-sm mb-7">We'll review your submission and respond within 1 business day.</p>
                <form className="space-y-5" onSubmit={handleContactSubmit}>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">First name *</label>
                      <input name="firstName" type="text" className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" placeholder="Jane" required />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Last name *</label>
                      <input name="lastName" type="text" className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" placeholder="Smith" required />
                    </div>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Email *</label>
                      <input name="email" type="email" className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" placeholder="jane@company.com" required />
                    </div>
                    <div>
                      <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Phone</label>
                      <input name="phone" type="tel" className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" placeholder="+1 (416) 000-0000" />
                    </div>
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Company / Website *</label>
                    <input name="company" type="text" className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all" placeholder="acme.ca" required />
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">What do you need help with? *</label>
                    <select name="service" className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-white" required defaultValue="">
                      <option value="" disabled>Select a service…</option>
                      {SERVICES_LIST.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Monthly marketing budget</label>
                    <select name="budget" className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all bg-white" defaultValue="">
                      <option value="" disabled>Select a range…</option>
                      {BUDGETS.map((b) => <option key={b}>{b}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1.5 block">Tell us about your goals</label>
                    <textarea name="message" rows={4} className="w-full border border-[#e5e2d9] rounded-xl px-3.5 py-2.5 text-sm focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/10 transition-all resize-none" placeholder="Where are you now, where do you want to be, and what's the timeline?" />
                  </div>
                  {formError && <p className="text-sm text-red-600">{formError}</p>}
                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-primary text-white font-bold py-3.5 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 group"
                  >
                    {submitting ? "Sending..." : "Send Message"} <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </button>
                  <p className="text-center text-gray-400 text-[11px]">No spam. No automated responses. A real person will reply.</p>
                </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-white border-t border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-3xl">
          <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3 text-center">Before You Reach Out</p>
          <h2 className="text-2xl md:text-3xl font-black text-[#0e0e0e] leading-[1.1] mb-10 text-center">Common questions</h2>
          <div className="bg-[#f9f8f5] border border-[#e5e2d9] rounded-2xl px-7">
            {CONTACT_FAQ.map((item) => (
              <FaqItem key={item.q} q={item.q} a={item.a} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   INSIGHTS PAGE
══════════════════════════════════════════════════════════════════ */

const CATEGORIES = ["All", "SEO", "Google Ads", "Content", "Web & CRO", "Local SEO", "Case Study"];

const POSTS = [
  {
    slug: "local-seo-2025",
    title: "Why Local SEO Still Wins in 2025 — And How Ontario Businesses Can Own Their Market",
    excerpt: "Google's local pack is more competitive than ever. But for businesses that understand the signals, there's never been a clearer path to map pack position 1.",
    tag: "Local SEO",
    date: "Apr 2025",
    readTime: "8 min read",
    author: "Priya Nair",
    featured: true,
  },
  {
    slug: "ai-overviews-2025",
    title: "Google's AI Overviews: What It Means for Your Organic Traffic (And What to Do About It)",
    excerpt: "AI-generated summaries are changing what organic rankings actually produce. Here's what we're seeing in client data and how to adapt your SEO strategy now.",
    tag: "SEO",
    date: "Mar 2025",
    readTime: "11 min read",
    author: "Marcus Reid",
    featured: false,
  },
  {
    slug: "true-cost-bad-website",
    title: "The True Cost of a Bad Website: CRO Data from 50 Ontario Businesses",
    excerpt: "We audited 50 Ontario business websites and measured the revenue impact of poor conversion rate optimisation. The numbers are significant — and fixable.",
    tag: "Web & CRO",
    date: "Mar 2025",
    readTime: "9 min read",
    author: "Chloe Armstrong",
    featured: false,
  },
  {
    slug: "meridian-dental-map-pack",
    title: "How We Took Meridian Dental Group to Map Pack Position 1 in Toronto",
    excerpt: "A deep-dive into the 11-month SEO project that rebuilt a dental group's entire digital presence — from 140+ crawl errors to ranking for every primary keyword.",
    tag: "Case Study",
    date: "Feb 2025",
    readTime: "14 min read",
    author: "Priya Nair",
    featured: false,
  },
  {
    slug: "ppc-budget-waste-7-mistakes",
    title: "PPC Budget Waste: The 7 Mistakes Ontario Businesses Make on Google Ads",
    excerpt: "After auditing over 80 Google Ads accounts, these are the seven mistakes we see consistently — and the ones that are costing the most money.",
    tag: "Google Ads",
    date: "Feb 2025",
    readTime: "7 min read",
    author: "Jordan Kim",
    featured: false,
  },
  {
    slug: "topical-authority-playbook",
    title: "Content That Compounds: Our Topical Authority Playbook for 2025",
    excerpt: "Most agencies write content to fill a calendar. We build content architectures that compound in authority over time. Here's exactly how the framework works.",
    tag: "Content",
    date: "Jan 2025",
    readTime: "12 min read",
    author: "Marcus Reid",
    featured: false,
  },
  {
    slug: "gta-home-pros-google-ads",
    title: "4.2× ROAS in 90 Days: Inside the GTA Home Pros Google Ads Rebuild",
    excerpt: "A self-managed Google Ads account was burning money with no data, no structure, and no conversion tracking. We rebuilt it from scratch.",
    tag: "Case Study",
    date: "Jan 2025",
    readTime: "10 min read",
    author: "Jordan Kim",
    featured: false,
  },
  {
    slug: "citation-audit-framework",
    title: "The Citation Audit Framework We Use for Every New Local SEO Client",
    excerpt: "Inconsistent NAP data across directories is one of the most common — and most damaging — issues we find in local SEO audits. Here's how to fix it systematically.",
    tag: "Local SEO",
    date: "Dec 2024",
    readTime: "6 min read",
    author: "Priya Nair",
    featured: false,
  },
];

const TAG_COLORS: Record<string, string> = {
  "Local SEO": "#1a56ff",
  "SEO": "#7c3aed",
  "Web & CRO": "#20c997",
  "Case Study": "#e85d04",
  "Google Ads": "#1aa7ec",
  "Content": "#f59e0b",
};

export function InsightsPage() {
  useSeo({
    title: "Digital Marketing Insights | Outlier Toronto",
    description: "Strategy, tactics and real results from Outlier's work with Ontario service businesses. SEO, Google Ads, content, and CRO insights.",
    canonicalPath: "/insights",
  });
  const [activeCategory, setActiveCategory] = useState("All");
  const [newsletterSubmitted, setNewsletterSubmitted] = useState(false);
  const [newsletterError, setNewsletterError] = useState("");

  const filtered = activeCategory === "All"
    ? POSTS
    : POSTS.filter((p) => p.tag === activeCategory);

  const featured = POSTS.find((p) => p.featured);
  const rest = filtered.filter((p) => !p.featured);

  return (
    <div className="min-h-screen bg-[#f9f8f5]">
      <Nav />

      <DarkHero
        label="Insights"
        title={<>Strategy. Tactics.<br /><span className="text-primary italic">Real results.</span></>}
        sub="What we're learning from working with Ontario service businesses — practical SEO, ads, and conversion insights."
      />

      <section className="py-16">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Featured post */}
          {featured && activeCategory === "All" && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-12"
            >
              <div className="bg-[#08090d] rounded-2xl overflow-hidden grid lg:grid-cols-2 min-h-[320px]">
                {/* Left content */}
                <div className="p-10 flex flex-col justify-between relative">
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(26,86,255,0.12)_0%,transparent_60%)]" />
                  <div className="relative">
                    <div className="flex items-center gap-3 mb-6">
                      <span className="text-[10px] font-black uppercase tracking-widest bg-primary/20 text-primary px-3 py-1.5 rounded-full border border-primary/30">
                        Featured
                      </span>
                      <span className="text-[10px] font-black uppercase tracking-widest text-white/30">{featured.tag}</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-black text-white leading-[1.15] mb-4">{featured.title}</h2>
                    <p className="text-white/50 text-[15px] leading-relaxed">{featured.excerpt}</p>
                  </div>
                  <div className="flex items-center justify-between relative mt-8">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-black text-white text-xs">
                        {featured.author.split(" ").map((n) => n[0]).join("")}
                      </div>
                      <div>
                        <p className="text-white text-sm font-bold">{featured.author}</p>
                        <p className="text-white/30 text-[11px]">{featured.date} · {featured.readTime}</p>
                      </div>
                    </div>
                    <Link href={`/insights/${featured.slug}`} className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:gap-3 transition-all">
                      Read article <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
                {/* Right visual */}
                <div className="relative bg-[#0d1117] flex items-center justify-center p-10">
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:32px_32px]" />
                  <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-primary/12 rounded-full blur-[100px]" />
                  <div className="relative space-y-3 w-full max-w-xs">
                    {["Map Pack Position", "Google Business Profile", "Citation Consistency", "Review Velocity"].map((item, i) => (
                      <motion.div
                        key={item}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.1, duration: 0.4 }}
                        className="flex items-center gap-3 bg-white/5 border border-white/8 rounded-xl p-3"
                      >
                        <div className="w-6 h-6 rounded-md bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-3.5 h-3.5 text-primary" />
                        </div>
                        <p className="text-white/60 text-sm">{item}</p>
                        <div className="ml-auto">
                          <div className="w-12 h-1.5 rounded-full bg-white/8 overflow-hidden">
                            <div className="h-full rounded-full bg-primary" style={{ width: `${[92, 88, 76, 95][i]}%` }} />
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] font-black uppercase tracking-widest px-4 py-2 rounded-full border transition-all ${
                  activeCategory === cat
                    ? "bg-primary text-white border-primary"
                    : "bg-white border-[#e5e2d9] text-gray-500 hover:border-primary/40 hover:text-primary"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Article grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {rest.map((p, i) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              >
                <Link
                  href={`/insights/${p.slug}`}
                  className="bg-white border border-[#e5e2d9] rounded-2xl overflow-hidden hover:shadow-md hover:border-primary/20 transition-all duration-300 group flex flex-col h-full"
                >
                  {/* Color accent bar */}
                  <div className="h-1 w-full" style={{ backgroundColor: TAG_COLORS[p.tag] ?? "#1a56ff" }} />
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between mb-4">
                      <span
                        className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded-full border"
                        style={{
                          color: TAG_COLORS[p.tag] ?? "#1a56ff",
                          backgroundColor: `${TAG_COLORS[p.tag] ?? "#1a56ff"}12`,
                          borderColor: `${TAG_COLORS[p.tag] ?? "#1a56ff"}30`,
                        }}
                      >
                        {p.tag}
                      </span>
                      <span className="text-xs text-gray-400">{p.date}</span>
                    </div>
                    <h3 className="font-black text-[#0e0e0e] text-[16px] leading-snug mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="text-gray-500 text-[13.5px] leading-relaxed mb-5 flex-1">{p.excerpt}</p>
                    <div className="flex items-center justify-between pt-4 border-t border-[#e5e2d9]">
                      <div className="flex items-center gap-2">
                        <div
                          className="w-6 h-6 rounded-full flex items-center justify-center font-black text-white text-[9px]"
                          style={{ backgroundColor: TAG_COLORS[p.tag] ?? "#1a56ff" }}
                        >
                          {p.author.split(" ").map((n) => n[0]).join("")}
                        </div>
                        <div>
                          <p className="text-[11px] font-bold text-[#0e0e0e]">{p.author}</p>
                          <p className="text-[10px] text-gray-400">{p.readTime}</p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Newsletter */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#08090d] rounded-2xl p-10 md:p-14 overflow-hidden text-center"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(26,86,255,0.1)_0%,transparent_60%)]" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />
            <div className="relative">
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Weekly Insights</p>
              <h3 className="text-3xl font-black text-white mb-3">Get the playbook in your inbox</h3>
              <p className="text-white/40 text-[15px] leading-relaxed mb-8 max-w-md mx-auto">
                One email per week. What we're learning from active client campaigns — no filler, no pitch.
              </p>
              <form
                className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
                onSubmit={async (e) => {
                  e.preventDefault();
                  setNewsletterError("");
                  try {
                    await submitLeadForm(e.currentTarget, "Newsletter signup");
                    e.currentTarget.reset();
                    setNewsletterSubmitted(true);
                  } catch (error) {
                    setNewsletterError(error instanceof Error ? error.message : "Unable to subscribe right now.");
                  }
                }}
              >
                <input
                  name="email"
                  type="email"
                  placeholder="your@email.com"
                  required
                  className="flex-1 bg-white/8 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder:text-white/30 focus:outline-none focus:border-primary/60 transition-colors"
                />
                <button
                  type="submit"
                  className="bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm flex items-center gap-2 justify-center whitespace-nowrap"
                >
                  Subscribe <ArrowRight className="w-4 h-4" />
                </button>
              </form>
              {newsletterSubmitted && <p className="text-primary text-[11px] mt-3 font-bold">Thanks, you're on the list.</p>}
              {newsletterError && <p className="text-red-300 text-[11px] mt-3">{newsletterError}</p>}
              <p className="text-white/20 text-[11px] mt-3">No spam. Unsubscribe anytime.</p>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   CAREERS PAGE
══════════════════════════════════════════════════════════════════ */

const OPEN_ROLES = [
  { role: "Senior SEO Strategist", type: "Full-time · Toronto / Remote", dept: "SEO" },
  { role: "Paid Media Manager", type: "Full-time · Toronto / Remote", dept: "Paid Media" },
  { role: "Content Strategist", type: "Full-time · Remote (Canada)", dept: "Content" },
  { role: "Web Designer — Conversion-Focused", type: "Contract / Full-time · Remote", dept: "Web & CX" },
];

const BENEFITS = [
  { icon: TrendingUp, title: "Real career growth", desc: "We promote from within. Most of our senior team started as specialists." },
  { icon: Globe, title: "Remote-first culture", desc: "Work from anywhere in Canada. We care about output, not where you sit." },
  { icon: BookOpen, title: "Learning budget", desc: "$1,500 / year per person for courses, certifications, and conferences." },
  { icon: Heart, title: "Health & dental", desc: "Full extended health, dental, and vision benefits from day one." },
  { icon: Coffee, title: "Team culture", desc: "Monthly team dinners, quarterly offsites, and an actual humans-first culture." },
  { icon: Zap, title: "Interesting work", desc: "We don't manage cookie-cutter accounts. Every client is a real problem to solve." },
];

export function CareersPage() {
  useSeo({
    title: "Careers | Outlier",
    description: "Outlier is a small focused agency. Not currently hiring, but always open to hearing from exceptional specialists in local SEO, paid media, or conversion systems.",
    canonicalPath: "/careers",
  });
  return (
    <div className="min-h-screen bg-[#f9f8f5]">
      <Nav />

      <DarkHero
        label="Careers"
        title={<>We're a small,<br /><span className="text-primary italic">focused team.</span></>}
        sub="We're not currently hiring. If you're exceptional at local SEO, paid media, or conversion systems — reach out."
      />

      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-2xl">
          <p className="text-gray-500 text-[16px] leading-relaxed mb-5">
            Outlier works exclusively with local service businesses in Ontario. We keep the team deliberately small — everyone works directly on client projects from day one.
          </p>
          <p className="text-gray-500 text-[16px] leading-relaxed mb-10">
            We're not actively hiring right now, but we're always open to hearing from specialists who are genuinely good at one thing. If that's you, send a short note and a few examples of your work.
          </p>
          <a
            href="mailto:hello@outlierdigital.ca"
            className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-sm"
          >
            <Mail className="w-4 h-4" />
            hello@outlierdigital.ca
          </a>
        </div>
      </section>

      <Footer />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════════
   LEGAL PAGES (Privacy, Terms, Accessibility)
══════════════════════════════════════════════════════════════════ */

function LegalShell({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f9f8f5]">
      <Nav />
      <DarkHero label={label} title={title} />
      <div className="container mx-auto px-4 max-w-3xl py-20">
        <div className="bg-white border border-[#e5e2d9] rounded-2xl p-8 md:p-12">
          {children}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export function PrivacyPage() {
  useSeo({
    title: "Privacy Policy | Outlier Marketing Group",
    description: "Outlier Marketing Group's privacy policy — how we collect, use, and protect your personal information.",
    canonicalPath: "/privacy",
  });
  return (
    <LegalShell label="Legal" title="Privacy Policy">
      <div className="prose prose-gray max-w-none text-gray-600 space-y-6">
        <p className="text-sm text-gray-400 font-medium">Last updated: January 1, 2025</p>
        <p>Outlier Marketing Group Inc. ("Outlier", "we", "us") is committed to protecting your personal information. This Privacy Policy describes how we collect, use, and disclose information about you when you visit our website or engage our services.</p>
        <h2 className="text-xl font-black text-[#0e0e0e] !mt-8">Information We Collect</h2>
        <p>We collect information you provide directly (name, email, phone, company), usage data from our website (via cookies and analytics), and information from third-party integrations you authorise.</p>
        <h2 className="text-xl font-black text-[#0e0e0e] !mt-8">How We Use Your Information</h2>
        <p>We use collected information to provide our services, communicate with you, improve our offerings, and comply with legal obligations. We do not sell your personal information to third parties.</p>
        <h2 className="text-xl font-black text-[#0e0e0e] !mt-8">Cookies</h2>
        <p>Our website uses cookies to improve your experience, measure performance, and support marketing. You may disable cookies in your browser settings, though some features may not function properly.</p>
        <h2 className="text-xl font-black text-[#0e0e0e] !mt-8">Contact</h2>
        <p>For privacy-related inquiries, contact us at <a href="mailto:hello@outlierdigital.ca" className="text-primary font-medium">hello@outlierdigital.ca</a> or at Markham, Ontario.</p>
      </div>
    </LegalShell>
  );
}

export function TermsPage() {
  useSeo({
    title: "Terms of Service | Outlier Marketing Group",
    description: "Terms of service governing the use of Outlier Marketing Group's website and digital marketing services.",
    canonicalPath: "/terms",
  });
  return (
    <LegalShell label="Legal" title="Terms of Service">
      <div className="prose prose-gray max-w-none text-gray-600 space-y-6">
        <p className="text-sm text-gray-400 font-medium">Last updated: January 1, 2025</p>
        <p>These Terms of Service govern your use of the Outlier Marketing Group website and services. By accessing our site or engaging our services, you agree to these terms.</p>
        <h2 className="text-xl font-black text-[#0e0e0e] !mt-8">Services</h2>
        <p>Outlier provides digital marketing services including SEO, paid media, web design, and related services. Specific deliverables, timelines, and fees are outlined in individual service agreements.</p>
        <h2 className="text-xl font-black text-[#0e0e0e] !mt-8">Intellectual Property</h2>
        <p>All content on this website is the property of Outlier Marketing Group Inc. Client deliverables become client property upon full payment as specified in the relevant agreement.</p>
        <h2 className="text-xl font-black text-[#0e0e0e] !mt-8">Limitation of Liability</h2>
        <p>Outlier's liability is limited to the fees paid in the preceding 90 days. We are not responsible for indirect, incidental, or consequential damages.</p>
        <h2 className="text-xl font-black text-[#0e0e0e] !mt-8">Governing Law</h2>
        <p>These terms are governed by the laws of the Province of Ontario, Canada. Disputes shall be resolved in Ontario courts.</p>
        <h2 className="text-xl font-black text-[#0e0e0e] !mt-8">Contact</h2>
        <p>For questions about these terms, contact <a href="mailto:hello@outlierdigital.ca" className="text-primary font-medium">hello@outlierdigital.ca</a>.</p>
      </div>
    </LegalShell>
  );
}

export function AccessibilityPage() {
  useSeo({
    title: "Accessibility Statement | Outlier Marketing Group",
    description: "Outlier Marketing Group's commitment to WCAG 2.1 Level AA accessibility standards for all users.",
    canonicalPath: "/accessibility",
  });
  return (
    <LegalShell label="Accessibility" title="Accessibility Statement">
      <div className="prose prose-gray max-w-none text-gray-600 space-y-6">
        <p>Outlier Marketing Group is committed to making our website accessible to everyone, including people with disabilities. We strive to conform to WCAG 2.1 Level AA standards.</p>
        <h2 className="text-xl font-black text-[#0e0e0e] !mt-8">Our Commitment</h2>
        <p>We continuously audit our site for accessibility barriers and work to remediate issues promptly. Our team is trained in accessible design and development practices.</p>
        <h2 className="text-xl font-black text-[#0e0e0e] !mt-8">Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Keyboard-navigable interface</li>
          <li>Screen reader compatible markup</li>
          <li>Sufficient colour contrast ratios</li>
          <li>Descriptive alt text on images</li>
          <li>Resizable text without loss of functionality</li>
        </ul>
        <h2 className="text-xl font-black text-[#0e0e0e] !mt-8">Feedback</h2>
        <p>If you encounter an accessibility barrier, please contact us at <a href="mailto:hello@outlierdigital.ca" className="text-primary font-medium">hello@outlierdigital.ca</a> or call +1 (289) 818-9102. We aim to respond within 2 business days.</p>
      </div>
    </LegalShell>
  );
}

const FAQS = [
  {
    q: "What services does Outlier provide?",
    a: "We focus on SEO, paid media, content marketing, web design, CRO, and city/service pSEO pages for Ontario businesses.",
  },
  {
    q: "Do you work with businesses outside Toronto?",
    a: "Yes. We work with service businesses across the GTA and Ontario — Toronto, Mississauga, Hamilton, Ottawa, and surrounding areas.",
  },
  {
    q: "What size business is the best fit?",
    a: "Usually established businesses ready to invest in growth, with a clear service offering and a real market to win in.",
  },
  {
    q: "Do you offer one-off projects?",
    a: "Yes, but most of our best results come from ongoing projects where strategy and execution can build on each other over time.",
  },
  {
    q: "How fast can we get started?",
    a: "Typically within 1 business day for an intro call, then we move into audit and planning right away if it's a fit.",
  },
];

export function FAQPage() {
  useSeo({
    title: "FAQ | Outlier Toronto Digital Marketing Agency",
    description: "Answers to common questions about Outlier's SEO, paid media, web design, and pSEO services.",
    canonicalPath: "/faq",
    schema: {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: FAQS.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  });
  return (
    <div className="min-h-screen bg-[#f9f8f5]">
      <Nav />
      <DarkHero
        label="FAQ"
        title={<>Questions answered.<br /><span className="text-primary italic">Fast.</span></>}
        sub="The most common questions we get from prospective clients."
      />
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-3xl">
          <div className="bg-white border border-[#e5e2d9] rounded-2xl overflow-hidden">
            {FAQS.map((faq) => (
              <FaqItem key={faq.q} q={faq.q} a={faq.a} />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

/* Legacy export for any old import */
export function CaseStudiesPage() {
  return null;
}
