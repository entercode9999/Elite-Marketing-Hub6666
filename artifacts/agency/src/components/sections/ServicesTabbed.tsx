import { useState, ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, MapPin, FileText, Monitor, Bot, Settings, TrendingUp, Star, Check } from "lucide-react";

/* ── Helper: compact sub-service visual ── */
function subViz(
  title: string,
  metrics: { l: string; v: string; c?: string }[],
  bars: number[],
  color: string
): ReactNode {
  return (
    <div className="h-full flex flex-col gap-3 justify-center p-5">
      <div className="bg-white rounded-xl shadow-md p-4 border border-gray-100">
        <p className="text-[9px] font-black uppercase tracking-widest text-gray-300 mb-3">{title}</p>
        {metrics.map((m) => (
          <div key={m.l} className="flex items-center justify-between py-2 border-b border-gray-50 last:border-0">
            <span className="text-[11px] text-gray-500">{m.l}</span>
            <span className="text-[11px] font-black" style={{ color: m.c ?? color }}>{m.v}</span>
          </div>
        ))}
      </div>
      <div className="bg-[#0e1220] rounded-lg p-3 border border-white/5">
        <div className="flex items-end gap-0.5 h-10">
          {bars.map((h, i) => (
            <div key={i} className="flex-1 rounded-t transition-all"
              style={{ height: `${h}%`, background: i >= bars.length - 3 ? color : "rgba(255,255,255,0.07)" }} />
          ))}
        </div>
      </div>
    </div>
  );
}

const B  = [12, 20, 18, 28, 25, 38, 45, 55, 60, 70, 85, 100];
const B2 = [8,  15, 12, 22, 20, 32, 40, 48, 55, 65, 80, 100];
const B3 = [20, 30, 25, 40, 38, 50, 55, 68, 72, 80, 90, 100];

const SERVICES = [
  {
    id: "local-seo",
    icon: MapPin,
    label: "Local SEO",
    tagline: "Map pack. GBP. Every nearby search.",
    color: "#1a56ff",
    headline: "Dominate your local market — map pack, GBP, every nearby search.",
    description:
      "We build the citation infrastructure, review velocity, and neighbourhood-level content that keeps you at #1 in the map pack — not just during a campaign, but permanently.",
    subServices: [
      { label: "Google Business Profile Optimisation", href: "/gbp-optimisation",
        visual: subViz("GBP Performance", [{ l: "Profile views", v: "+4.2x" }, { l: "Q&A responses", v: "100%" }, { l: "Photo views", v: "+680%" }, { l: "Direction requests", v: "+215%" }], B, "#1a56ff") },
      { label: "Citation Audit & Build", href: "/citation-audit",
        visual: subViz("NAP Consistency", [{ l: "Directories audited", v: "80+" }, { l: "Inconsistencies fixed", v: "47" }, { l: "New citations built", v: "35" }, { l: "Consistency score", v: "100%", c: "#22c55e" }], B2, "#1a56ff") },
      { label: "Review Generation System", href: "/review-generation",
        visual: subViz("Review Velocity", [{ l: "New reviews / mo", v: "+18 avg" }, { l: "Rating maintained", v: "4.9★" }, { l: "Response time", v: "< 2 hrs" }, { l: "Conversion lift", v: "+28%" }], B3, "#f59e0b") },
      { label: "Local Landing Pages", href: "/local-landing-pages",
        visual: subViz("Local Pages Ranking", [{ l: "Pages live", v: "40+" }, { l: "Page 1 positions", v: "82%" }, { l: "Avg rank", v: "2.4" }, { l: "Lead-gen CVR", v: "6.8%" }], B, "#1a56ff") },
      { label: "Local Link Building", href: "/local-link-building",
        visual: subViz("Link Profile", [{ l: "Local links built", v: "55+" }, { l: "Avg DA", v: "42" }, { l: "Local relevance", v: "High" }, { l: "Toxic links removed", v: "12" }], B2, "#1a56ff") },
      { label: "Monthly Pack Reporting", href: "/local-seo-reporting",
        visual: subViz("Rank Movement", [{ l: "Keywords tracked", v: "150+" }, { l: "Top 3 positions", v: "68%" }, { l: "MoM improvement", v: "+12 kws" }, { l: "Competitor gap", v: "-2.1" }], B3, "#1a56ff") },
    ],
    href: "/local-seo-service",
    visual: (
      <div className="h-full flex flex-col gap-3 justify-center p-5">
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
        <div className="grid grid-cols-3 gap-2">
          {[{ v: "+312%", l: "Lead growth" }, { v: "14 wks", l: "Avg. to pack" }, { v: "+58", l: "Avg. reviews" }].map((s) => (
            <div key={s.l} className="bg-[#0e1220] rounded-lg p-3 text-center border border-white/5">
              <p className="text-base font-black text-white">{s.v}</p>
              <p className="text-[9px] text-white/30 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
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
    tagline: "Google Ads, LSA, Paid Social. Flat fees.",
    color: "#ea4335",
    headline: "Revenue from every click — Google Ads, Local Service Ads, Paid Social.",
    description:
      "Performance-first campaigns with flat-fee management. No percentage-of-spend pricing. Your account is run by a senior strategist — not passed to a junior team after onboarding.",
    subServices: [
      { label: "Google Search Campaigns", href: "/google-search-campaigns",
        visual: subViz("Search Campaign", [{ l: "Quality Score avg", v: "8.4/10", c: "#22c55e" }, { l: "CTR", v: "9.2%" }, { l: "Conv. rate", v: "12.4%" }, { l: "ROAS", v: "4.8x", c: "#22c55e" }], B, "#ea4335") },
      { label: "Local Service Ads (Google Guaranteed)", href: "/local-service-ads",
        visual: subViz("LSA Performance", [{ l: "Cost per lead", v: "$18–42" }, { l: "Lead close rate", v: "38%" }, { l: "Google Guaranteed", v: "Active ✓" }, { l: "Weekly leads", v: "22 avg" }], B2, "#ea4335") },
      { label: "Performance Max Campaigns", href: "/performance-max",
        visual: subViz("PMax Channels", [{ l: "Search", v: "Active ✓" }, { l: "Display", v: "Active ✓" }, { l: "YouTube", v: "Active ✓" }, { l: "Blended ROAS", v: "3.9x", c: "#22c55e" }], B3, "#ea4335") },
      { label: "Paid Social — Meta & TikTok", href: "/paid-social-service",
        visual: subViz("Social Ad Metrics", [{ l: "Blended ROAS", v: "3.8x" }, { l: "CPM range", v: "$6–12" }, { l: "Creative formats", v: "3+ tested" }, { l: "Frequency", v: "2.4" }], B, "#ea4335") },
      { label: "Display & Retargeting", href: "/display-retargeting",
        visual: subViz("Retargeting Funnel", [{ l: "Audience size", v: "18k+" }, { l: "CTR vs. cold", v: "+340%" }, { l: "CVR lift", v: "+82%" }, { l: "Frequency cap", v: "3/wk" }], B2, "#ea4335") },
      { label: "YouTube Pre-Roll Ads", href: "/youtube-ads-service",
        visual: subViz("YouTube Campaign", [{ l: "View-through rate", v: "38%" }, { l: "CPV", v: "$0.04" }, { l: "Reach", v: "85k/mo" }, { l: "Brand lift", v: "+24%" }], B3, "#ea4335") },
    ],
    href: "/google-ads-management",
    visual: (
      <div className="h-full flex flex-col gap-3 justify-center p-5">
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
          <div className="h-14 flex items-end gap-1 pt-2 border-t border-gray-100">
            {[30, 45, 35, 60, 50, 80, 70, 95, 85, 100].map((h, i) => (
              <div key={i} className="flex-1 rounded-t" style={{ height: `${h}%`, background: i >= 7 ? "#ea4335" : "#fde8e6" }} />
            ))}
          </div>
        </div>
        <div className="bg-[#0e1220] rounded-lg p-3 border border-white/5">
          <p className="text-[9px] text-white/25 uppercase tracking-widest mb-2">No % of spend fees · Ever</p>
          {["Google Ads · active", "Local Service Ads · active", "Meta Ads · active"].map((r) => (
            <div key={r} className="flex items-center gap-2 py-1">
              <Check className="w-3 h-3 text-green-400" />
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
    tagline: "Custom builds. Conversion-engineered.",
    color: "#059669",
    headline: "Websites engineered to convert — not just impress.",
    description:
      "Custom web design built around your funnel. Every decision is tied to a conversion goal. We don't do template sites. Each project is researched, architected, and built by our in-house team.",
    subServices: [
      { label: "Custom Web Design", href: "/custom-web-design-service",
        visual: subViz("Web Build Metrics", [{ l: "Lighthouse score", v: "98/100", c: "#22c55e" }, { l: "Load time", v: "1.4s" }, { l: "Mobile pass", v: "100%" }, { l: "CVR at launch", v: "+28%" }], B, "#059669") },
      { label: "Conversion Rate Optimisation", href: "/cro-service",
        visual: subViz("CRO Results", [{ l: "CVR before", v: "1.8%" }, { l: "CVR after", v: "4.2%", c: "#22c55e" }, { l: "Tests run", v: "12" }, { l: "Revenue lift", v: "+133%" }], B2, "#059669") },
      { label: "Website Redesign (no SEO loss)", href: "/website-redesign-service",
        visual: subViz("Redesign Safety", [{ l: "Redirects mapped", v: "100%" }, { l: "Ranking drop", v: "0 pages" }, { l: "Traffic delta", v: "+22%" }, { l: "Post-launch CVR", v: "+31%" }], B3, "#059669") },
      { label: "Landing Page Design", href: "/landing-page-design",
        visual: subViz("Landing Page Perf.", [{ l: "Avg CVR", v: "8.4%" }, { l: "Load time", v: "< 1.8s" }, { l: "A/B variants", v: "3" }, { l: "CPA improvement", v: "-42%" }], B, "#059669") },
      { label: "eCommerce Development", href: "/ecommerce-development",
        visual: subViz("eComm Metrics", [{ l: "AOV lift", v: "+38%" }, { l: "Cart abandon fix", v: "-22%" }, { l: "Page speed", v: "96/100" }, { l: "Q1 ROAS", v: "7.2x" }], B2, "#059669") },
      { label: "UI/UX Design & Prototyping", href: "/ui-ux-design",
        visual: subViz("UX Outcomes", [{ l: "Prototype rounds", v: "3" }, { l: "User test sessions", v: "12" }, { l: "Task completion", v: "+55%" }, { l: "SUS score", v: "88/100" }], B3, "#059669") },
    ],
    href: "/custom-web-design-service",
    visual: (
      <div className="h-full flex flex-col gap-3 justify-center p-5">
        <div className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100">
          <div className="bg-gray-100 px-3 py-2 flex items-center gap-1.5">
            {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
              <div key={c} className="w-2.5 h-2.5 rounded-full" style={{ background: c }} />
            ))}
            <div className="flex-1 bg-white rounded text-[9px] text-gray-400 px-2 py-0.5 ml-2">yourclientsite.ca</div>
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
          {[{ v: "+28%", l: "Avg CVR lift" }, { v: "< 2s", l: "Load time" }, { v: "98", l: "Lighthouse" }].map((s) => (
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
    tagline: "Topical authority. Traffic that compounds.",
    color: "#7c3aed",
    headline: "Content that ranks, converts, and compounds over time.",
    description:
      "Strategy-first content that builds topical authority in your niche. Not blog posts for the sake of it — structured content clusters designed to rank for every high-value query in your market.",
    subServices: [
      { label: "SEO Content Strategy", href: "/content-marketing-service",
        visual: subViz("Content Strategy", [{ l: "Target keywords", v: "1,200+" }, { l: "Cluster pages planned", v: "80" }, { l: "Competitor gap", v: "340 kws" }, { l: "Traffic potential", v: "28k/mo" }], B, "#7c3aed") },
      { label: "Blog Writing & Management", href: "/blog-writing-service",
        visual: subViz("Blog Performance", [{ l: "Articles published", v: "8/mo" }, { l: "Avg word count", v: "2,400" }, { l: "Ranked top 10", v: "72%" }, { l: "Organic leads", v: "+85/mo" }], B2, "#7c3aed") },
      { label: "Topical Authority Clusters", href: "/topical-authority-service",
        visual: subViz("Cluster Coverage", [{ l: "Pillar pages", v: "6" }, { l: "Cluster articles", v: "62" }, { l: "Internal links", v: "480+" }, { l: "Authority score", v: "+38pts" }], B3, "#7c3aed") },
      { label: "Email Newsletters & Campaigns", href: "/email-marketing-service",
        visual: subViz("Email Metrics", [{ l: "Open rate", v: "34.2%" }, { l: "CTR", v: "8.8%" }, { l: "Revenue / email", v: "$4,200" }, { l: "List growth", v: "+18%/mo" }], B, "#7c3aed") },
      { label: "Social Media Management", href: "/social-media-service",
        visual: subViz("Social Reach", [{ l: "Posts / mo", v: "20" }, { l: "Eng. rate", v: "6.4%" }, { l: "Reach growth", v: "+42%/mo" }, { l: "Lead DMs", v: "12/mo avg" }], B2, "#7c3aed") },
      { label: "Video Script Writing", href: "/video-script-service",
        visual: subViz("Video Content", [{ l: "Scripts / mo", v: "4–8" }, { l: "Avg retention", v: "68%" }, { l: "VTR", v: "38%" }, { l: "Lead CTA CTR", v: "12%" }], B3, "#7c3aed") },
    ],
    href: "/content-marketing-service",
    visual: (
      <div className="h-full flex flex-col gap-3 justify-center p-5">
        <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Content calendar</p>
          <div className="grid grid-cols-7 gap-1 mb-3">
            {["M", "T", "W", "T", "F", "S", "S"].map((d, i) => (
              <div key={i} className="text-center text-[9px] font-bold text-gray-300">{d}</div>
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
          <p className="text-[9px] text-white/25 uppercase tracking-widest mb-2">Organic growth trend</p>
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
    tagline: "Fix what's silently suppressing your rankings.",
    color: "#0891b2",
    headline: "Fix the foundation — then build traffic that lasts.",
    description:
      "We run deep technical audits that uncover crawl issues, Core Web Vitals failures, broken redirect chains, and structural problems that hold back every other SEO investment you're making.",
    subServices: [
      { label: "Full Site Technical Audit", href: "/technical-seo-service",
        visual: subViz("Audit Scorecard", [{ l: "Issues found", v: "142" }, { l: "Critical fixes", v: "28" }, { l: "Pages audited", v: "1,800" }, { l: "Est. traffic impact", v: "+35%" }], B, "#0891b2") },
      { label: "Core Web Vitals Optimisation", href: "/core-web-vitals-service",
        visual: subViz("CWV Scores", [{ l: "LCP before", v: "4.8s" }, { l: "LCP after", v: "1.6s", c: "#22c55e" }, { l: "CLS", v: "0.04", c: "#22c55e" }, { l: "INP", v: "< 200ms", c: "#22c55e" }], B2, "#0891b2") },
      { label: "Crawl Budget Management", href: "/crawl-budget-service",
        visual: subViz("Crawl Efficiency", [{ l: "Crawl waste before", v: "62%" }, { l: "Crawl waste after", v: "8%", c: "#22c55e" }, { l: "Pages indexed", v: "+380" }, { l: "Googlebot freq.", v: "+4x" }], B3, "#0891b2") },
      { label: "Structured Data & Schema", href: "/structured-data-service",
        visual: subViz("Schema Coverage", [{ l: "Schema types added", v: "8" }, { l: "Rich results earned", v: "12 types" }, { l: "CTR lift", v: "+42%" }, { l: "Validation errors", v: "0" }], B, "#0891b2") },
      { label: "Redirect Audit & Fixes", href: "/redirect-audit-service",
        visual: subViz("Redirect Audit", [{ l: "Broken redirects", v: "88 fixed" }, { l: "Redirect chains", v: "24 fixed" }, { l: "301 vs 302", v: "All corrected" }, { l: "Link equity preserved", v: "100%" }], B2, "#0891b2") },
      { label: "International SEO & Hreflang", href: "/international-seo-service",
        visual: subViz("International SEO", [{ l: "Hreflang tags", v: "All correct" }, { l: "Markets targeted", v: "8" }, { l: "Duplicate issues", v: "0" }, { l: "Intl. traffic lift", v: "+68%" }], B3, "#0891b2") },
    ],
    href: "/technical-seo-service",
    visual: (
      <div className="h-full flex flex-col gap-3 justify-center p-5">
        <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100">
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">Site audit results</p>
          {[
            { label: "Crawl errors fixed", before: 142, after: 0, color: "#22c55e", pct: 100 },
            { label: "Core Web Vitals", before: 38, after: 97, color: "#0891b2", pct: 97 },
            { label: "Page speed score", before: 44, after: 96, color: "#1a56ff", pct: 96 },
          ].map((item) => (
            <div key={item.label} className="mb-2.5">
              <div className="flex justify-between text-[10px] mb-1">
                <span className="text-gray-500 font-medium">{item.label}</span>
                <span className="font-bold" style={{ color: item.color }}>{item.before} → {item.after}</span>
              </div>
              <div className="h-1.5 bg-gray-100 rounded-full overflow-hidden">
                <div className="h-full rounded-full" style={{ width: `${item.pct}%`, background: item.color }} />
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
    tagline: "Leads captured. Workflows automated. 24/7.",
    color: "#d97706",
    headline: "AI systems that work while your team sleeps.",
    description:
      "Purpose-built AI chatbots, workflow automation, and custom AI systems that reduce operational overhead and capture leads 24/7. We build bespoke systems — not off-the-shelf tool configurations.",
    subServices: [
      { label: "AI Chatbot Development", href: "/ai-chatbot-service",
        visual: subViz("Chatbot Metrics", [{ l: "Leads captured / mo", v: "180+" }, { l: "Response time", v: "< 3 sec" }, { l: "Qualification rate", v: "42%" }, { l: "After-hours leads", v: "38%" }], B, "#d97706") },
      { label: "AI Workflow Automation", href: "/ai-workflow-service",
        visual: subViz("Automation ROI", [{ l: "Tasks automated", v: "12" }, { l: "Hours saved / wk", v: "22 hrs" }, { l: "Error rate", v: "-97%" }, { l: "Payback period", v: "6 wks" }], B2, "#d97706") },
      { label: "AI Integration (CRM, tools)", href: "/ai-integration-service",
        visual: subViz("Integration Stack", [{ l: "Tools connected", v: "8" }, { l: "Data sync delay", v: "< 1 min" }, { l: "Error rate", v: "0.02%" }, { l: "Downtime", v: "Zero" }], B3, "#d97706") },
      { label: "Custom AI Systems", href: "/custom-ai-service",
        visual: subViz("Custom AI Build", [{ l: "Accuracy vs. GPT-4", v: "+28%", c: "#22c55e" }, { l: "Latency", v: "< 2s" }, { l: "Training data", v: "Your docs" }, { l: "Delivery", v: "90 days" }], B, "#d97706") },
      { label: "Lead Capture AI", href: "/ai-lead-capture-service",
        visual: subViz("Lead Capture AI", [{ l: "Capture rate", v: "+340%" }, { l: "Avg qualify time", v: "< 90 sec" }, { l: "CRM sync", v: "Real-time" }, { l: "Coverage", v: "24/7" }], B3, "#d97706") },
      { label: "AI Prompt Engineering", href: "/ai-prompt-engineering-service",
        visual: subViz("Prompt Systems", [{ l: "Accuracy lift", v: "+31%" }, { l: "Tuned prompts", v: "48" }, { l: "Workflow steps", v: "14" }, { l: "Turnaround", v: "5 days" }], B2, "#d97706") },
    ],
    href: "/ai-chatbot-service",
    visual: (
      <div className="h-full flex flex-col gap-3 justify-center p-5">
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
        <div className="grid grid-cols-3 gap-2">
          {[{ v: "24/7", l: "Lead capture" }, { v: "+340%", l: "Response rate" }, { v: "< 4wk", l: "Avg. delivery" }].map((s) => (
            <div key={s.l} className="bg-[#0e1220] rounded-lg p-3 text-center border border-white/5">
              <p className="text-sm font-black text-white">{s.v}</p>
              <p className="text-[9px] text-white/30 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="bg-[#0e1220] rounded-lg p-3 border border-white/5">
          <p className="text-[9px] text-white/25 uppercase tracking-widest mb-2">Systems we build</p>
          {["Lead qualification chatbots", "CRM & email automation", "Custom GPT-powered tools"].map((r) => (
            <div key={r} className="flex items-center gap-2 py-1">
              <Check className="w-3 h-3 text-amber-400" />
              <span className="text-xs text-white/60">{r}</span>
            </div>
          ))}
        </div>
      </div>
    ),
  },
];

export function ServicesTabbed() {
  const [active, setActive] = useState(0);
  const [hoveredSubVisual, setHoveredSubVisual] = useState<ReactNode | null>(null);
  const current = SERVICES[active];

  const handleTabClick = (i: number) => {
    setActive(i);
    setHoveredSubVisual(null);
  };

  return (
    <section className="py-20 md:py-28 bg-white border-t border-[#e5e2d9]" id="services">
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="mb-12">
          <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary block mb-3">What we do</span>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="text-4xl md:text-5xl font-black leading-tight text-[#0e0e0e]">
              Every service your business needs.
              <br />
              <span className="text-gray-300 italic font-light">One senior team.</span>
            </h2>
            <p className="text-sm text-gray-500 max-w-xs leading-relaxed">
              No vendor juggling. No account manager hand-offs. All six service areas under one roof.
            </p>
          </div>
        </div>

        {/* Main tabbed layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr] gap-0 border border-[#e5e2d9] rounded-2xl overflow-hidden shadow-sm">

          {/* ── LEFT: dark nav rail ── */}
          <div className="bg-[#0a0c14] border-b border-white/5 lg:border-b-0 lg:border-r lg:border-white/5">

            {/* Mobile: horizontal pill strip */}
            <div className="flex overflow-x-auto gap-2 p-3 lg:hidden scrollbar-hide">
              {SERVICES.map((svc, i) => (
                <button
                  key={svc.id}
                  onClick={() => handleTabClick(i)}
                  className="flex items-center gap-2 px-3.5 py-2 rounded-xl whitespace-nowrap shrink-0 text-sm font-semibold transition-all"
                  style={{
                    background: active === i ? `${svc.color}22` : "rgba(255,255,255,0.05)",
                    color: active === i ? svc.color : "rgba(255,255,255,0.40)",
                    border: `1.5px solid ${active === i ? svc.color + "55" : "rgba(255,255,255,0.08)"}`,
                  }}
                >
                  <svc.icon className="w-3.5 h-3.5 shrink-0" />
                  {svc.label}
                </button>
              ))}
            </div>

            {/* Desktop: vertical list */}
            <div className="hidden lg:flex lg:flex-col h-full">
              {/* Top brand mark */}
              <div className="px-6 pt-7 pb-5 border-b border-white/5">
                <p className="text-[9px] font-black uppercase tracking-[0.22em] text-white/25">Services</p>
                <p className="text-xs text-white/40 mt-0.5 leading-snug">Six channels. One team. No hand-offs.</p>
              </div>

              <div className="flex-1">
                {SERVICES.map((svc, i) => (
                  <button
                    key={svc.id}
                    onClick={() => handleTabClick(i)}
                    className="w-full flex items-center gap-4 px-5 py-4 text-left transition-all duration-200 border-b border-white/[0.04] last:border-0 group relative overflow-hidden"
                    style={{
                      background: active === i ? `${svc.color}14` : "transparent",
                    }}
                  >
                    {/* Active left bar */}
                    <div
                      className="absolute left-0 top-0 bottom-0 w-[3px] rounded-r transition-all duration-200"
                      style={{ background: active === i ? svc.color : "transparent" }}
                    />

                    {/* Icon */}
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0 transition-all duration-200"
                      style={{ background: active === i ? `${svc.color}25` : "rgba(255,255,255,0.06)" }}
                    >
                      <svc.icon
                        className="w-5 h-5 transition-colors duration-200"
                        style={{ color: active === i ? svc.color : "rgba(255,255,255,0.30)" }}
                      />
                    </div>

                    {/* Label + tagline */}
                    <div className="min-w-0">
                      <p
                        className="font-bold text-[15px] leading-tight transition-colors duration-200"
                        style={{ color: active === i ? "#fff" : "rgba(255,255,255,0.50)" }}
                      >
                        {svc.label}
                      </p>
                      <p
                        className="text-[11px] leading-snug mt-0.5 transition-colors duration-200 truncate"
                        style={{ color: active === i ? "rgba(255,255,255,0.45)" : "rgba(255,255,255,0.22)" }}
                      >
                        {svc.tagline}
                      </p>
                    </div>

                    {/* Active chevron */}
                    {active === i && (
                      <ArrowRight
                        className="w-3.5 h-3.5 ml-auto shrink-0"
                        style={{ color: svc.color }}
                      />
                    )}
                  </button>
                ))}
              </div>

              {/* Bottom CTA strip */}
              <div className="px-5 py-5 border-t border-white/[0.06]">
                <Link
                  href="/free-audit"
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl text-xs font-bold text-white transition-all hover:opacity-90"
                  style={{ background: "rgba(255,255,255,0.08)", border: "1px solid rgba(255,255,255,0.10)" }}
                >
                  Get a Free Audit
                  <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>

          {/* ── RIGHT: content + visual panel ── */}
          <div className="grid grid-cols-1 md:grid-cols-[1fr_300px]">

            {/* Content */}
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.22 }}
                className="p-8 lg:p-10 flex flex-col"
              >
                {/* Service label */}
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-10 h-10 rounded-xl flex items-center justify-center" style={{ background: `${current.color}15` }}>
                    <current.icon className="w-5 h-5" style={{ color: current.color }} />
                  </div>
                  <span className="text-xs font-bold uppercase tracking-widest" style={{ color: current.color }}>
                    {current.label}
                  </span>
                </div>

                <h3 className="text-[26px] font-black leading-snug mb-3 text-[#0e0e0e]">{current.headline}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-6">{current.description}</p>

                {/* Sub-services list */}
                <p className="text-[9px] font-black uppercase tracking-[0.18em] text-gray-300 mb-3">
                  Hover a service to preview →
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 mb-8">
                  {current.subServices.map((sub) => (
                    <Link
                      key={sub.label}
                      href={sub.href}
                      onMouseEnter={() => setHoveredSubVisual(sub.visual)}
                      onMouseLeave={() => setHoveredSubVisual(null)}
                      className="flex items-center gap-2.5 py-3 border-b border-[#e5e2d9] text-sm text-gray-500 hover:text-[#0e0e0e] transition-colors group"
                    >
                      <ArrowRight className="w-3.5 h-3.5 shrink-0 text-gray-300 group-hover:text-primary group-hover:translate-x-0.5 transition-all" />
                      {sub.label}
                    </Link>
                  ))}
                </div>

                {/* Solid CTA */}
                <div className="mt-auto">
                  <Link
                    href={current.href}
                    className="inline-flex items-center gap-2 font-bold text-sm py-3 px-6 rounded-xl text-white transition-all hover:opacity-90 group"
                    style={{ background: current.color }}
                  >
                    Explore {current.label}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Visual panel — swaps on sub-service hover */}
            <div className="hidden md:block bg-[#f9f8f5] border-l border-[#e5e2d9]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={hoveredSubVisual ? "sub-hover" : current.id + "-visual"}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.18 }}
                  className="h-full"
                >
                  {hoveredSubVisual ?? current.visual}
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-8 flex items-center justify-center gap-4">
          <p className="text-sm text-gray-400">Not sure which service fits your goals?</p>
          <Link
            href="/free-audit"
            className="inline-flex items-center gap-2 border border-[#e5e2d9] hover:border-primary/50 text-[#0e0e0e] font-semibold py-2.5 px-5 rounded-lg transition-colors text-sm group"
          >
            Get a Free Audit →
          </Link>
        </div>
      </div>
    </section>
  );
}
