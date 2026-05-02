import { Shield, RefreshCw, Zap, BarChart2, Settings, Code2, Database, Globe, Layers } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-[#1a56ff] px-4 py-3 flex items-center gap-2.5">
        <Shield className="w-4 h-4 text-white" />
        <div>
          <p className="text-white font-bold text-xs">Magento 2 Support</p>
          <p className="text-white/60 text-[9px]">Managed Maintenance Plan</p>
        </div>
      </div>
      <div className="bg-[#0a0c12] p-4">
        <div className="grid grid-cols-3 gap-2 mb-3">
          {[{ v: "< 4h", l: "Response SLA", c: "#22c55e" }, { v: "99.9%", l: "Uptime", c: "#1a56ff" }, { v: "Zero", l: "Patch backlog", c: "#f59e0b" }].map((s) => (
            <div key={s.l} className="bg-white/5 rounded-lg p-2.5 text-center">
              <p className="font-black text-sm" style={{ color: s.c }}>{s.v}</p>
              <p className="text-[9px] text-white/30 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
        <div className="bg-white/5 rounded-xl p-3 border border-white/8">
          <p className="text-[9px] text-white/30 uppercase tracking-widest mb-2">Monthly Maintenance Includes</p>
          {["Security patches via staging", "Module update management", "Performance monitoring", "Developer support channel"].map((f) => (
            <div key={f} className="flex items-center gap-2 py-0.5">
              <div className="w-1.5 h-1.5 rounded-full bg-primary" />
              <span className="text-[9px] text-white/50">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100">
      <p className="text-[10px] text-gray-400">Response SLA</p>
      <p className="text-2xl font-black text-primary">&lt; 4h</p>
    </div>
    <div className="absolute -top-4 -left-4 bg-[#1a56ff] rounded-xl px-3 py-2.5 shadow-xl">
      <p className="text-white font-black text-xs">M2 Support</p>
    </div>
  </div>
);

const m2SupportData: HubData = {
  slug: "magento-2-support",
  label: "MAGENTO 2 SUPPORT",
  breadcrumb: "Magento 2 Support & Maintenance",
  hero: {
    headline: "Magento 2 Support and Maintenance by Engineers Who Know the Platform.",
    italic: "Patched. Monitored. Maintained.",
    description:
      "Monthly Magento 2 support and maintenance plans for live stores that need expert care — security patch management, module updates, performance monitoring, bug fixes, and developer support. Run by Magento-certified engineers who understand the platform at code level.",
    cta: "Get a Maintenance Plan Quote",
    ctaHref: "/contact",
    badges: ["Magento Certified", "< 4h Response SLA", "24/7 Monitoring", "10+ Years"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "< 4h", label: "Critical issue response SLA" },
    { value: "99.9%", label: "Uptime on managed stores" },
    { value: "Zero", label: "Patch backlog on managed plans" },
    { value: "30+", label: "Stores on active maintenance" },
  ],
  intro: {
    eyebrow: "Why Magento maintenance matters",
    headline: "Magento 2 requires active maintenance. Security vulnerabilities are released regularly and unpatched stores are actively targeted.",
    body: "Adobe releases Magento 2 security patches on a quarterly schedule. Each patch addresses vulnerabilities that, once disclosed, are immediately incorporated into automated attack tools that scan for unpatched Magento installations. An unpatched Magento 2 store is typically compromised within 30-60 days of a new exploit being published — often with credit card skimming malware that operates silently for months.",
    secondBody: "Beyond security, Magento 2 requires ongoing module management, PHP version compatibility work, and performance monitoring that specialist developers need to do correctly. We provide this as a managed service — your team doesn't need to think about it, and the store stays current, secure, and performant without you tracking the Magento release calendar.",
    bullets: [
      "Security patches applied through staging environment within 5 business days of release",
      "Module update management: tested in staging, deployed to production on a schedule",
      "24/7 uptime monitoring with immediate alerting on any downtime",
      "Monthly performance benchmarking and proactive optimisation",
      "Dedicated developer support channel with < 4h response on critical issues",
    ],
  },
  proofSection: {
    eyebrow: "The cost of unmanaged Magento maintenance",
    headline: "The average cost of a Magento security breach is $40,000-$200,000 in remediation, legal liability, and customer trust damage. Monthly maintenance costs a fraction of that.",
    body: "Magento security incidents follow a predictable pattern: a security advisory is published, exploit code is distributed, automated scanners identify vulnerable stores, and malware is installed within days. The store owner typically doesn't know for weeks or months — until a customer reports fraudulent card charges, a PCI compliance audit flags the infection, or Google marks the site as dangerous.",
    secondBody: "We maintain Magento 2 stores on a proactive schedule that eliminates this risk: patches applied within 5 business days of release, always through a staging environment first, with regression testing to confirm no functional impact before production deployment. Thirty stores on our maintenance programme — zero security incidents in the past 24 months.",
    bullets: [
      "Security patches applied to staging first, tested for 48 hours, then deployed to production — reducing the risk of a patch breaking site functionality.",
      "Monthly module update cycle: we review every available module update, test compatibility in staging, and deploy a coordinated update batch rather than ad-hoc changes.",
      "Performance baseline is run monthly — Lighthouse scores by template, TTFB, and database query analysis. Performance regressions are caught and fixed before they affect conversion rate.",
      "Infrastructure monitoring includes CPU, memory, disk, and MySQL slow query logs — anomalies are investigated before they become outages.",
      "Developer support covers bug fixes, small enhancement requests, and third-party integration troubleshooting — your team has a technical resource without needing to hire one.",
      "Monthly maintenance report summarises every change made, every security patch applied, and current performance metrics — so you have a clear record of your platform's health.",
    ],
  },
  subServices: [
    {
      tab: "Security Patching",
      headline: "Magento 2 security patches applied within 5 business days of release.",
      description: "Monthly security patch management — patches applied to a staging environment, tested for 48 hours, then deployed to production. Full regression testing before every production deployment. Your store is always on the current security patch level.",
      bullets: ["< 5 business days from release", "Staging environment testing first", "Regression testing before production", "Patch deployment documentation"],
      image: "/case-study-local.png",
      href: "/magento-2-support",
    },
    {
      tab: "Module Management",
      headline: "Coordinated module updates tested before production deployment.",
      description: "Monthly module update management: we review every available extension update, test compatibility in staging, resolve any conflicts, and deploy a coordinated update batch. No ad-hoc production changes — every update is planned and tested.",
      bullets: ["Monthly update review cycle", "Staging compatibility testing", "Conflict resolution", "Coordinated production deployment"],
      image: "/studio.png",
      href: "/magento-2-support",
    },
    {
      tab: "Performance Monitoring",
      headline: "Monthly performance benchmarking and proactive optimisation.",
      description: "Monthly performance baseline — Lighthouse scores by page template, Core Web Vitals, TTFB, and database query analysis. Performance regressions caught and resolved before they affect conversion rate. Proactive optimisation rather than reactive fire-fighting.",
      bullets: ["Monthly Lighthouse benchmarking", "TTFB and CWV monitoring", "Database slow query analysis", "Proactive optimisation recommendations"],
      image: "/work-2.png",
      href: "/magento-2-support",
    },
    {
      tab: "Developer Support",
      headline: "Dedicated Magento developer support with < 4h response SLA.",
      description: "Developer support for bug fixes, small enhancement requests, third-party integration troubleshooting, and technical questions. A Magento-certified developer available to your team via a dedicated support channel — without the cost of a full-time hire.",
      bullets: ["< 4h critical response SLA", "Bug fix and enhancement requests", "Third-party integration support", "Technical consultation"],
      image: "/case-study-ecommerce.png",
      href: "/magento-2-support",
    },
    {
      tab: "Infrastructure Management",
      headline: "Server monitoring, backup management, and capacity planning.",
      description: "24/7 infrastructure monitoring — uptime alerts, CPU and memory monitoring, disk space management, and MySQL slow query log analysis. Monthly infrastructure health reports and proactive capacity planning before your store hits a limit.",
      bullets: ["24/7 uptime monitoring", "Server resource monitoring", "Automated daily backups", "Capacity planning and scaling"],
      image: "/industry-local.png",
      href: "/magento-2-support",
    },
  ],
  features: [
    { icon: <Shield className="w-5 h-5 text-primary" />, title: "Security Patch Management", body: "Patches applied within 5 business days, always through staging first. Your store is never more than one patch cycle behind the current release." },
    { icon: <RefreshCw className="w-5 h-5 text-primary" />, title: "Module Update Management", body: "Coordinated monthly module updates — tested in staging, conflicts resolved, and deployed as a single planned batch rather than ad-hoc changes." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Performance Monitoring", body: "Monthly Lighthouse benchmarking across every page template. Performance regressions caught and resolved proactively." },
    { icon: <Settings className="w-5 h-5 text-primary" />, title: "Developer Support", body: "Dedicated Magento developer available to your team via support channel with < 4h response SLA on critical issues." },
    { icon: <Database className="w-5 h-5 text-primary" />, title: "Infrastructure Monitoring", body: "24/7 server monitoring — uptime, CPU, memory, disk, and MySQL slow query alerting. Issues investigated before they cause outages." },
    { icon: <Code2 className="w-5 h-5 text-primary" />, title: "Bug Fix Service", body: "Rapid bug fixes for functionality regressions, display issues, and third-party integration problems — tracked and resolved within your SLA." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "Backup Management", body: "Automated daily backups of database and media — tested quarterly for restore integrity, retained for 30 days minimum." },
    { icon: <Layers className="w-5 h-5 text-primary" />, title: "Staging Environment", body: "Dedicated staging environment mirroring production — all changes tested here before going live. Never a production-only change." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "Monthly Reporting", body: "Monthly maintenance report: every change made, every patch applied, current performance metrics, and upcoming maintenance items." },
  ],
  techStack: [
    { platform: "Magento 2.4.x Security Patches", stat: "Patching", description: "We track Adobe's security release calendar and apply every patch within 5 business days of release — through staging first, then production. Your Magento installation stays on the current security baseline." },
    { platform: "New Relic APM", stat: "Performance monitoring", description: "New Relic application performance monitoring — real user timing, transaction tracing, error rate monitoring, and database query analysis running continuously on every managed store." },
    { platform: "Cloudflare", stat: "CDN and WAF", description: "Cloudflare Web Application Firewall and CDN on every managed store — adding an additional layer of attack protection in front of the Magento application and improving global page load times." },
    { platform: "Backup automation", stat: "Data protection", description: "Automated database and media backups on a daily schedule, retained for 30 days, stored off-server in S3 or equivalent. Restore tested quarterly to confirm backup integrity." },
    { platform: "Nagios / PagerDuty", stat: "Uptime monitoring", description: "24/7 uptime monitoring with PagerDuty alerting — on-call engineers are paged immediately on any downtime event. Average response time from page to engineer engaged: under 8 minutes." },
    { platform: "Blackfire.io", stat: "Performance profiling", description: "Blackfire.io profiling used during monthly performance reviews and when investigating performance regressions — identifying exact bottlenecks in PHP execution, database queries, and I/O operations." },
  ],
  caseStudies: [
    { image: "/case-study-ecommerce.png", client: "Industrial Supply Co.", industry: "B2B Commerce", blurb: "Inherited a Magento 2 store with 3 unpatched critical security vulnerabilities and a malware infection. Clean-up, emergency patching, and enrolled in monthly maintenance. Zero incidents in 18 months since.", metrics: [{ value: "Zero", label: "Security incidents since" }, { value: "< 24h", label: "Emergency response time" }] },
    { image: "/case-study-local.png", client: "Coastal Collective", industry: "eCommerce", blurb: "Magento 2 store maintained for 36 months on our managed plan. 100% patch compliance throughout, 99.9% uptime, and performance improved 15% over 36 months through proactive optimisation.", metrics: [{ value: "100%", label: "Patch compliance" }, { value: "99.9%", label: "Uptime over 36 months" }] },
    { image: "/studio.png", client: "BuildCo Supply", industry: "Wholesale", blurb: "Wholesale Magento 2 store on maintenance plan. Monthly module updates and performance monitoring caught and resolved 3 performance regressions before they affected checkout conversion.", metrics: [{ value: "3", label: "Regressions caught pre-impact" }, { value: "+12%", label: "Performance improvement Y1" }] },
  ],
  process: [
    { label: "Onboard", headline: "Audit and onboard your Magento 2 store to the maintenance programme.", description: "Full technical audit — security patch status, module versions, performance baseline, and infrastructure review. We document the current state of every system before assuming maintenance responsibility." },
    { label: "Stabilise", headline: "Apply any outstanding patches and resolve immediate technical issues.", description: "Catch up on any outstanding security patches, resolve known issues identified in the audit, and establish the staging environment used for all future maintenance work." },
    { label: "Monthly Cycle", headline: "Regular monthly maintenance cycle: patches, updates, and monitoring.", description: "Security patch review, module update batch preparation, staging deployment and testing, production deployment on schedule, and performance benchmark. Runs on the same cadence every month." },
    { label: "Support", headline: "Ongoing developer support for your team.", description: "Dedicated support channel for bug reports, small enhancement requests, and technical questions. Issues triaged by severity with SLA commitments for each tier." },
    { label: "Review", headline: "Monthly report delivered with full transparency.", description: "Monthly maintenance report: every change made, every patch applied, performance metrics, and any recommendations for the following month. You always know exactly what happened to your store." },
    { label: "Optimise", headline: "Proactive performance and infrastructure optimisation.", description: "Beyond maintenance, we identify and action performance improvements identified during monthly benchmarking — caching improvements, query optimisation, and infrastructure adjustments that compound over time." },
  ],
  faqs: [
    { question: "How often does Adobe release Magento 2 security patches?", answer: "Adobe releases security patches on a quarterly schedule, with emergency patches for critical vulnerabilities as needed. In practice, there are typically 4-6 significant security releases per year. We monitor the Adobe security release calendar and initiate patching within 5 business days of every release." },
    { question: "Why do patches need to go through staging first?", answer: "Security patches modify core Magento files. In rare cases, a patch can conflict with a custom extension or theme, causing a functional regression. Testing in staging first identifies these conflicts before they affect a live store. Applying patches directly to production — common with unmanaged stores — is how stores end up with checkout broken after a 'routine' security update." },
    { question: "What happens when a critical security vulnerability is discovered?", answer: "We have an emergency response process for critical vulnerabilities — patch preparation and staging deployment within 24 hours of release, production deployment within 48 hours. Clients are notified when an emergency patch is in progress. For critical vulnerabilities disclosed before a patch is available, we implement WAF rules as a temporary mitigation." },
    { question: "What is included in developer support?", answer: "Bug fixes for functionality regressions, display issues, and broken integrations. Small enhancement requests (under 2 hours of work). Technical consultation for your in-house team. Third-party extension troubleshooting. Each plan has a monthly developer hours allocation — we track usage transparently and notify you before you approach the limit." },
    { question: "Can you take over maintenance from another agency?", answer: "Yes. We run an onboarding audit before assuming maintenance responsibility — documenting the current patch status, module versions, known issues, and any technical debt. The audit gives us a complete picture of what we're inheriting and lets us quote accurately for any stabilisation work needed before starting regular maintenance." },
  ],
  hubInsights: [
    { image: "/work-2.png", category: "Magento Security", readTime: "6 min read", title: "The Magento 2 Security Patch Calendar: What Every Store Owner Needs to Know", excerpt: "Adobe releases Magento 2 security patches quarterly, with emergency patches for critical vulnerabilities as needed. Most store owners don't know their patch status — and many are running stores with known critical vulnerabilities. We explain the patching process, the risks of delay, and how managed maintenance works.", author: "Marcus Chen", authorRole: "Security Lead", href: "/blog/magento-2-security-patch-calendar" },
    { image: "/case-study-ecommerce.png", category: "Magento Maintenance", readTime: "5 min read", title: "Why Magento 2 Module Updates Need a Staging Environment (And Most Stores Don't Have One)", excerpt: "Applying module updates directly to a production Magento 2 store is how checkout ends up broken on a Monday morning. A staging environment that mirrors production is the minimum required infrastructure for safe Magento maintenance. Here is what a proper staging setup looks like and why it matters.", author: "James Okafor", authorRole: "Platform Lead", href: "/blog/magento-2-staging-environment" },
    { image: "/case-study-local.png", category: "Performance", readTime: "7 min read", title: "How to Keep Your Magento 2 Store Performant 24 Months After Launch", excerpt: "Magento 2 stores tend to degrade in performance over time — module accumulation, database growth, and cache configuration changes erode the performance achieved at launch. We share the monthly maintenance practices that keep our managed stores performing better at 24 months than they were at launch.", author: "Priya Anand", authorRole: "Performance Engineer", href: "/blog/magento-2-long-term-performance" },
  ],
};

export default function Magento2SupportHub() {
  return <ServiceHubPage data={m2SupportData} />;
}
