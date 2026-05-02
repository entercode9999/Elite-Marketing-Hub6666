import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, MapPin, Search, DollarSign, FileText, Monitor, Bot, Settings, TrendingUp, Star, Check, Zap } from "lucide-react";

const SERVICES = [
  {
    id: "local-seo",
    icon: MapPin,
    label: "Local SEO",
    color: "#1a56ff",
    headline: "Dominate your local market — map pack, GBP, every nearby search.",
    description:
      "We build the citation infrastructure, review velocity, and neighbourhood-level content that keeps you at #1 in the map pack — not just during a campaign, but permanently.",
    subServices: [
      { label: "Google Business Profile Optimisation", href: "/local-seo-service#deliver" },
      { label: "Citation Audit & Build", href: "/local-seo-service#deliver" },
      { label: "Review Generation System", href: "/local-seo-service#deliver" },
      { label: "Local Landing Pages", href: "/local-seo-service#deliver" },
      { label: "Local Link Building", href: "/local-seo-service#deliver" },
      { label: "Monthly Pack Reporting", href: "/local-seo-service#deliver" },
    ],
    href: "/local-seo-service",
    visual: (
      <div className="h-full flex flex-col gap-3 justify-center p-4">
        {/* GBP card visual */}
        <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100">
          <div className="flex items-center gap-3 mb-3">
            <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
              <MapPin className="w-5 h-5 text-primary" />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-900">Your Business</p>
              <p className="text-[10px] text-gray-400">Service Business · Open now</p>
            </div>
          </div>
          <div className="flex gap-0.5 mb-2">
            {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-yellow-400 text-yellow-400" />)}
            <span className="text-[10px] text-gray-400 ml-1">4.9 (287 reviews)</span>
          </div>
          <div className="text-[10px] font-bold text-primary border border-primary/20 rounded-md px-2 py-1 text-center bg-primary/5">
            #1 Map Pack Position
          </div>
        </div>
        {/* Stats row */}
        <div className="grid grid-cols-3 gap-2">
          {[
            { v: "+312%", l: "Lead growth" },
            { v: "14 wks", l: "Avg. to pack" },
            { v: "+58", l: "Avg. reviews" },
          ].map((s) => (
            <div key={s.l} className="bg-[#0e1220] rounded-lg p-3 text-center border border-white/5">
              <p className="text-base font-black text-white">{s.v}</p>
              <p className="text-[9px] text-white/30 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
        {/* Pack positions */}
        <div className="bg-[#0e1220] rounded-lg p-3 border border-white/5">
          <p className="text-[9px] text-white/25 uppercase tracking-widest mb-2">Live pack positions</p>
          {["Dental Toronto · #1", "HVAC Mississauga · #2", "Legal Ottawa · #1"].map((r) => (
            <div key={r} className="flex items-center gap-2 py-1">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-xs text-white/60">{r}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "paid-ads",
    icon: TrendingUp,
    label: "Paid Advertising",
    color: "#ea4335",
    headline: "Revenue from every click — Google Ads, Local Service Ads, Paid Social.",
    description:
      "Performance-first campaigns with flat-fee management. No percentage-of-spend pricing. Your account is run by a senior strategist — not passed to a junior team after onboarding.",
    subServices: [
      { label: "Google Search Campaigns", href: "/google-ads-management" },
      { label: "Local Service Ads (Google Guaranteed)", href: "/local-service-ads" },
      { label: "Performance Max Campaigns", href: "/google-ads-management" },
      { label: "Paid Social — Meta & TikTok", href: "/paid-social-service" },
      { label: "Display & Retargeting", href: "/google-ads-management" },
      { label: "YouTube Pre-Roll Ads", href: "/google-ads-management" },
    ],
    href: "/google-ads-management",
    visual: (
      <div className="h-full flex flex-col gap-3 justify-center p-4">
        {/* Ad performance card */}
        <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Campaign Performance</p>
          <div className="grid grid-cols-2 gap-3 mb-3">
            {[{ v: "-38%", l: "CPA vs. prev. agency", c: "#22c55e" }, { v: "4.2x", l: "Blended ROAS", c: "#1a56ff" }].map((s) => (
              <div key={s.l} className="bg-gray-50 rounded-lg p-2.5">
                <p className="text-xl font-black" style={{ color: s.c }}>{s.v}</p>
                <p className="text-[10px] text-gray-400">{s.l}</p>
              </div>
            ))}
          </div>
          <div className="h-16 flex items-end gap-1 pt-2 border-t border-gray-100">
            {[30, 45, 35, 60, 50, 80, 70, 95, 85, 100].map((h, i) => (
              <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i >= 7 ? "#1a56ff" : "#e5e7eb" }} />
            ))}
          </div>
        </div>
        <div className="bg-[#0e1220] rounded-lg p-3 border border-white/5">
          <p className="text-[9px] text-white/25 uppercase tracking-widest mb-2">No % of spend fees · Ever</p>
          {["Google Ads · active", "Local Service Ads · active", "Meta Ads · active"].map((r) => (
            <div key={r} className="flex items-center gap-2 py-1">
              <Check className="w-3 h-3 text-[#22c55e]" />
              <span className="text-xs text-white/60">{r}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "web-cro",
    icon: Monitor,
    label: "Web Design & CRO",
    color: "#059669",
    headline: "Websites engineered to convert — not just impress.",
    description:
      "Custom web design built around your funnel. Every decision is tied to a conversion goal. We don't do template sites. Each project is researched, architected, and built by our in-house team.",
    subServices: [
      { label: "Custom Web Design", href: "/custom-web-design-service" },
      { label: "Conversion Rate Optimisation", href: "/cro-service" },
      { label: "Website Redesign (no SEO loss)", href: "/website-redesign-service" },
      { label: "Landing Page Design", href: "/custom-web-design-service" },
      { label: "eCommerce Development", href: "/ecommerce-development" },
      { label: "UI/UX Design & Prototyping", href: "/custom-web-design-service" },
    ],
    href: "/custom-web-design-service",
    visual: (
      <div className="h-full flex flex-col gap-3 justify-center p-4">
        {/* Browser mockup */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="bg-gray-100 px-3 py-2 flex items-center gap-1.5">
            {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
              <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
            ))}
            <div className="flex-1 bg-white rounded text-[9px] text-gray-400 px-2 py-0.5 ml-2">outlier.ca</div>
          </div>
          <div className="p-3 bg-[#0a0c12]">
            <div className="h-4 bg-primary/30 rounded mb-2 w-2/3" />
            <div className="h-2.5 bg-white/10 rounded mb-1 w-full" />
            <div className="h-2.5 bg-white/10 rounded mb-3 w-4/5" />
            <div className="h-7 bg-primary rounded w-32 flex items-center justify-center">
              <p className="text-[9px] font-bold text-white">Get a Free Audit →</p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[{ v: "+28%", l: "Avg CVR lift" }, { v: "< 2s", l: "Load time" }, { v: "100", l: "Lighthouse score" }].map((s) => (
            <div key={s.l} className="bg-[#0e1220] rounded-lg p-3 text-center border border-white/5">
              <p className="text-sm font-black text-white">{s.v}</p>
              <p className="text-[9px] text-white/30 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "content",
    icon: FileText,
    label: "Content Marketing",
    color: "#7c3aed",
    headline: "Content that ranks, converts, and compounds over time.",
    description:
      "Strategy-first content that builds topical authority in your niche. Not blog posts for the sake of it — structured content clusters designed to rank for every high-value query in your market.",
    subServices: [
      { label: "SEO Content Strategy", href: "/content-marketing-service" },
      { label: "Blog Writing & Management", href: "/content-marketing-service" },
      { label: "Topical Authority Clusters", href: "/content-marketing-service" },
      { label: "Email Newsletters & Campaigns", href: "/email-marketing-service" },
      { label: "Social Media Management", href: "/social-media-service" },
      { label: "Video Script Writing", href: "/content-marketing-service" },
    ],
    href: "/content-marketing-service",
    visual: (
      <div className="h-full flex flex-col gap-3 justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Content calendar</p>
          <div className="grid grid-cols-7 gap-1 mb-3">
            {["M", "T", "W", "T", "F", "S", "S"].map((d) => (
              <div key={d} className="text-center text-[9px] font-bold text-gray-300">{d}</div>
            ))}
            {[...Array(28)].map((_, i) => (
              <div key={i} className={`aspect-square rounded text-[9px] flex items-center justify-center font-medium ${[2, 5, 9, 14, 18, 21, 25].includes(i) ? "bg-purple-100 text-purple-600" : "text-gray-300"}`}>
                {i + 1}
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded bg-purple-400" />
            <span className="text-[10px] text-gray-400">8 posts/month scheduled</span>
          </div>
        </div>
        <div className="bg-[#0e1220] rounded-lg p-3 border border-white/5">
          <p className="text-[9px] text-white/25 uppercase tracking-widest mb-2">Organic growth</p>
          <div className="h-10 flex items-end gap-1">
            {[20, 25, 22, 35, 38, 45, 50, 65, 70, 85, 90, 100].map((h, i) => (
              <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i >= 9 ? "#7c3aed" : "rgba(124,58,237,0.2)" }} />
            ))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "technical-seo",
    icon: Settings,
    label: "Technical SEO",
    color: "#0891b2",
    headline: "Fix the foundation — then build traffic that lasts.",
    description:
      "We run deep technical audits that uncover crawl issues, Core Web Vitals failures, broken redirect chains, and structural problems that hold back every other SEO investment you're making.",
    subServices: [
      { label: "Full Site Technical Audit", href: "/technical-seo-service" },
      { label: "Core Web Vitals Optimisation", href: "/technical-seo-service" },
      { label: "Crawl Budget Management", href: "/technical-seo-service" },
      { label: "Structured Data & Schema", href: "/technical-seo-service" },
      { label: "Redirect Audit & Fixes", href: "/technical-seo-service" },
      { label: "International SEO & Hreflang", href: "/technical-seo-service" },
    ],
    href: "/technical-seo-service",
    visual: (
      <div className="h-full flex flex-col gap-3 justify-center p-4">
        <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Site audit results</p>
          {[
            { label: "Crawl errors", before: 142, after: 0, color: "#ef4444" },
            { label: "Core Web Vitals", before: 38, after: 97, color: "#22c55e" },
            { label: "Page speed score", before: 44, after: 96, color: "#1a56ff" },
          ].map((item) => (
            <div key={item.label} className="mb-2.5">
              <div className="flex justify-between text-[10px] mb-1">
                <span className="text-gray-500 font-medium">{item.label}</span>
                <span className="font-bold" style={{ color: item.color }}>
                  {item.before} → {item.after}
                </span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${item.after}%`, background: item.color }} />
              </div>
            </div>
          ))}
        </div>
        <div className="bg-[#0e1220] rounded-lg p-3 border border-white/5">
          <p className="text-[9px] text-white/25 uppercase tracking-widest mb-2">Fixed in first sprint</p>
          {["Broken redirect chains", "Missing canonical tags", "Schema markup errors"].map((r) => (
            <div key={r} className="flex items-center gap-2 py-1">
              <Check className="w-3 h-3 text-cyan-400" />
              <span className="text-xs text-white/60">{r}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
  {
    id: "ai",
    icon: Bot,
    label: "AI & Automation",
    color: "#d97706",
    headline: "AI systems that work while your team sleeps.",
    description:
      "Purpose-built AI chatbots, workflow automation, and custom AI systems that reduce operational overhead and capture leads 24/7. We build bespoke systems — not off-the-shelf tool configurations.",
    subServices: [
      { label: "AI Chatbot Development", href: "/ai-chatbot-service" },
      { label: "AI Workflow Automation", href: "/ai-workflow-service" },
      { label: "AI Integration (CRM, tools)", href: "/ai-integration-service" },
      { label: "Custom AI Systems", href: "/custom-ai-service" },
      { label: "App Development", href: "/app-development-service" },
      { label: "Lead Capture AI", href: "/ai-chatbot-service" },
    ],
    href: "/ai-chatbot-service",
    visual: (
      <div className="h-full flex flex-col gap-3 justify-center p-4">
        {/* Chat interface visual */}
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="bg-amber-500 px-4 py-2.5 flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
              <Bot className="w-3.5 h-3.5 text-white" />
            </div>
            <span className="text-white font-bold text-xs">Outlier AI Assistant</span>
            <div className="ml-auto w-1.5 h-1.5 rounded-full bg-green-300" />
          </div>
          <div className="p-3 space-y-2">
            <div className="bg-gray-100 rounded-lg rounded-tl-none px-3 py-2 text-[10px] text-gray-700 max-w-[80%]">
              Hi! How can I help your business today?
            </div>
            <div className="bg-amber-500 rounded-lg rounded-tr-none px-3 py-2 text-[10px] text-white max-w-[80%] ml-auto">
              I need more leads for my dental practice
            </div>
            <div className="bg-gray-100 rounded-lg rounded-tl-none px-3 py-2 text-[10px] text-gray-700 max-w-[85%]">
              I can help! Let me grab your details and book a free audit →
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-2">
          {[{ v: "24/7", l: "Lead capture" }, { v: "+340%", l: "Response rate" }].map((s) => (
            <div key={s.l} className="bg-[#0e1220] rounded-lg p-3 text-center border border-white/5">
              <p className="text-lg font-black text-white">{s.v}</p>
              <p className="text-[9px] text-white/30 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export function ServicesTabbed() {
  const [active, setActive] = useState(0);
  const current = SERVICES[active];

  return (
    <section className="py-20 md:py-28 bg-[#08090d] text-white border-t border-white/5" id="services">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-3">What we do</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-black leading-tight">
              Every service your business needs.
              <br />
              <span className="text-white/30 italic font-light">One senior team.</span>
            </h2>
            <p className="text-sm text-white/40 max-w-xs leading-relaxed">
              No vendor juggling. No account manager hand-offs. All six service areas under one roof.
            </p>
          </div>
        </div>

        {/* Main tabbed layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[260px_1fr] gap-0 border border-white/8 rounded-2xl overflow-hidden">
          {/* Left: category tabs */}
          <div className="bg-[#0d0f14] border-r border-white/8">
            {SERVICES.map((svc, i) => (
              <button
                key={svc.id}
                onClick={() => setActive(i)}
                className={`w-full flex items-center gap-3 px-5 py-4 text-left transition-all border-b border-white/5 last:border-0 group ${
                  active === i
                    ? "bg-white/5 border-l-2 border-l-primary"
                    : "hover:bg-white/3 border-l-2 border-l-transparent"
                }`}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all"
                  style={{ background: active === i ? `${svc.color}25` : "rgba(255,255,255,0.05)" }}
                >
                  <svc.icon className="w-4 h-4" style={{ color: active === i ? svc.color : "rgba(255,255,255,0.3)" }} />
                </div>
                <span
                  className={`font-semibold text-sm transition-colors ${
                    active === i ? "text-white" : "text-white/45 group-hover:text-white/70"
                  }`}
                >
                  {svc.label}
                </span>
                {active === i && <div className="ml-auto w-1.5 h-1.5 rounded-full" style={{ background: svc.color }} />}
              </button>
            ))}
          </div>

          {/* Right: content panel */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_280px] min-h-[480px]">
            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.25 }}
                className="p-8 flex flex-col"
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${current.color}20` }}>
                    <current.icon className="w-5 h-5" style={{ color: current.color }} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: current.color }}>
                    {current.label}
                  </span>
                </div>

                <h3 className="text-2xl font-black leading-snug mb-4 max-w-lg">{current.headline}</h3>
                <p className="text-sm text-white/50 leading-relaxed mb-8 max-w-lg">{current.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2 mb-8 flex-1">
                  {current.subServices.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      className="flex items-center gap-2 py-2 border-b border-white/5 text-sm text-white/55 hover:text-white transition-colors group"
                    >
                      <ArrowRight className="w-3.5 h-3.5 shrink-0 text-white/20 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                      {sub.label}
                    </Link>
                  ))}
                </div>

                <Link
                  href={current.href}
                  className="inline-flex items-center gap-2 font-bold text-sm group w-fit"
                  style={{ color: current.color }}
                >
                  Explore {current.label}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* Visual panel */}
            <div className="hidden md:block bg-[#0d0f14] border-l border-white/8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id + "-visual"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="h-full"
                >
                  {current.visual}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <p className="text-sm text-white/30">Not sure which service fits?</p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 border border-white/10 hover:border-primary/50 text-white font-semibold py-2.5 px-5 rounded-lg transition-colors text-sm group"
          >
            Talk to us →
          </a>
        </div>
      </div>
    </section>
  );
}
