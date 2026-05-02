import { Monitor, Zap, TrendingUp, Layers, Code2, Eye, Smartphone, BarChart2, RefreshCw } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
        ))}
        <div className="flex-1 bg-white rounded text-xs text-gray-400 px-3 py-1 ml-2">outlier.ca/your-business</div>
      </div>
      <div className="p-5 bg-[#0a0c12]">
        <div className="h-5 bg-primary/30 rounded mb-3 w-3/5" />
        <div className="h-3 bg-white/10 rounded mb-2 w-full" />
        <div className="h-3 bg-white/10 rounded mb-2 w-4/5" />
        <div className="h-3 bg-white/10 rounded mb-5 w-3/4" />
        <div className="flex gap-2 mb-5">
          <div className="h-9 bg-primary rounded-lg w-28 flex items-center justify-center">
            <p className="text-[10px] font-bold text-white">Get a Free Audit →</p>
          </div>
          <div className="h-9 border border-white/20 rounded-lg w-24" />
        </div>
        <div className="grid grid-cols-3 gap-2">
          {["+28% CVR", "< 2s Load", "100 Score"].map((s) => (
            <div key={s} className="bg-white/5 rounded-lg p-2 text-center">
              <p className="text-[9px] font-bold text-white/60">{s}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100">
      <p className="text-xs font-bold text-gray-900">Lighthouse Score</p>
      <p className="text-2xl font-black text-[#22c55e]">100</p>
    </div>
    <div className="absolute -top-4 -left-4 bg-[#0a0c12] rounded-xl p-2 shadow-xl border border-white/10 w-16">
      <div className="aspect-[9/16] bg-gradient-to-b from-primary/20 to-primary/5 rounded-lg flex items-center justify-center">
        <Smartphone className="w-4 h-4 text-white/40" />
      </div>
    </div>
  </div>
);

const webDesignData: HubData = {
  slug: "custom-web-design-service",
  label: "WEB DESIGN & CRO",
  breadcrumb: "Web Design",
  hero: {
    headline: "Websites Engineered to Convert.",
    italic: "Not just impress.",
    description:
      "Custom web design and conversion optimisation for ambitious brands. Every pixel, every interaction, every headline is tied to a conversion goal. We don't do templates. We build revenue machines.",
    cta: "Get a Free Audit",
    ctaHref: "/contact",
    badges: ["Google Partner", "Clutch 5★", "10+ Years", "100 Lighthouse Score"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "10+", label: "Years of Experience" },
    { value: "320+", label: "Websites Delivered" },
    { value: "+28%", label: "Avg. CVR Lift" },
    { value: "100", label: "Avg. Lighthouse Score" },
  ],
  intro: {
    eyebrow: "Why it matters",
    headline: "Transform your website from a brochure into a growth engine.",
    body: "Most agency websites look great in a pitch deck and underperform in the real world. We design every site with a primary conversion goal from day one — not as an afterthought. Every layout decision, headline, and CTA is validated against user behaviour data and industry conversion benchmarks. A website that doesn't convert is an expensive liability. We treat it like the best-performing member of your sales team.",
    secondBody: "The difference between a site that generates leads and one that doesn't is rarely about aesthetics. It's about strategy: how users are guided, what they see first, where friction appears, and whether the value proposition lands in under five seconds. We solve those problems systematically, not intuitively.",
    bullets: [
      "Custom design — no templates, no page builders",
      "Built for Core Web Vitals and Lighthouse 100",
      "Conversion-first: every element has a job",
      "Mobile-first and accessible by default",
      "Handoff to your team with full documentation",
    ],
  },
  proofSection: {
    eyebrow: "The Outlier Difference",
    headline: "Design that earns its place in the P&L.",
    body: "Most web design projects are measured by whether the client likes how it looks at the final presentation. We measure ours differently: by what happens to your conversion rate, your lead volume, and your cost per acquisition in the 90 days after launch. That accountability changes how we work from the first discovery call.",
    secondBody: "We've redesigned over 320 websites across 24 industries. The businesses that see the biggest returns are the ones that let us run a structured CRO programme alongside the new design — because a great design and a testing culture compound each other. Conversion rate lifts of 20–50% in the first quarter are not unusual. They are the expectation we set with every client.",
    bullets: [
      "We start with a full analytics and heatmap audit before we design anything — so every decision has data behind it, not just a senior designer's intuition.",
      "Every project includes a post-launch monitoring period: we watch your Core Web Vitals, crawl for errors, and flag conversion anomalies in real time.",
      "Our design system handoff means your internal team can update components without rebuilding from scratch — no dependency on us for day-to-day changes.",
      "We map your full user journey before a single wireframe is drawn, identifying the three to five pages that account for 80% of your conversion events.",
      "We price fixed-scope. No hourly billing, no change-order culture. You know what you're getting before we start.",
      "Redesigns come with a zero-ranking-loss guarantee. We've completed 40+ migrations without a meaningful drop in organic traffic.",
    ],
  },
  subServices: [
    {
      tab: "Custom Web Design",
      headline: "Bespoke design systems built for your brand.",
      description:
        "From brand identity to full UI/UX design systems. We research your competitors, your customers, and your market before a single frame is drawn. The result is a design that is distinctively yours and provably better than what you had before. We build in Figma with a full component library so your team can extend it independently.",
      bullets: [
        "Full brand audit and competitive positioning",
        "Wireframes and high-fidelity Figma prototypes",
        "Custom component library for your team",
        "A/B testing setup and hypothesis backlog",
      ],
      image: "/work-1.png",
      href: "/custom-web-design-service",
    },
    {
      tab: "CRO",
      headline: "More revenue from the traffic you already have.",
      description:
        "Conversion Rate Optimisation is the highest-ROI investment you can make once your traffic is established. We audit your full funnel using heatmaps, session recordings, and analytics to identify exactly where users are dropping off and why. Then we build and run a systematic testing programme that compounds month over month.",
      bullets: [
        "Full funnel audit with heatmaps + session recordings",
        "Hypothesis-led A/B and multivariate testing",
        "CTA copy and headline experiments",
        "Form and checkout optimisation",
      ],
      image: "/work-2.png",
      href: "/cro-service",
    },
    {
      tab: "Website Redesign",
      headline: "Redesign without losing a single ranking or link.",
      description:
        "A full redesign without a proper SEO migration plan is one of the most common ways businesses destroy years of organic traffic overnight. We've rescued dozens of businesses from bad redesigns. Ours come with a zero-loss guarantee on your current SEO authority — full URL mapping, 301 architecture, and 30-day post-launch crawl monitoring.",
      bullets: [
        "Full URL mapping and redirect architecture",
        "301 redirect implementation and verification",
        "Post-launch crawl monitoring for 30 days",
        "Core Web Vitals benchmarking before and after",
      ],
      image: "/work-3.png",
      href: "/website-redesign-service",
    },
    {
      tab: "Landing Pages",
      headline: "High-converting landing pages for every campaign.",
      description:
        "Purpose-built landing pages for Google Ads, paid social, and email campaigns. Designed to convert a single traffic source into leads or sales. Each page is built around one objective, tested against a control, and iterated based on real data — not gut instinct. Dynamic content adapts to audience segments automatically.",
      bullets: [
        "Single-objective page architecture",
        "Integrated with your ad platform and CRM",
        "Dynamic content for audience segments",
        "Weekly performance reporting",
      ],
      image: "/studio.png",
      href: "/custom-web-design-service",
    },
    {
      tab: "eCommerce Design",
      headline: "Revenue-first eCommerce design.",
      description:
        "Shopify and WooCommerce stores designed to convert browsers into buyers. We design the full purchase path — from product discovery to cart to checkout — with every element validated against eCommerce conversion benchmarks. AOV uplift, cart abandonment reduction, and checkout completion rate improvements are core deliverables, not side effects.",
      bullets: [
        "Product page architecture for maximum conversion",
        "Cart and checkout optimisation",
        "Collection and filter UX design",
        "Post-purchase flow design",
      ],
      image: "/hero-showcase.png",
      href: "/ecommerce-development",
    },
  ],
  features: [
    { icon: <Monitor className="w-5 h-5 text-primary" />, title: "Custom UI/UX Design", body: "No templates. Every interface is designed from research, tailored to your brand and conversion goals. We don't touch page builders." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Core Web Vitals Optimisation", body: "We build to pass Google's performance standards — LCP under 2.5s, zero CLS, FID under 100ms — from the first commit, not as a retrofit." },
    { icon: <TrendingUp className="w-5 h-5 text-primary" />, title: "Conversion Architecture", body: "Every layout decision is tied to a conversion goal. We wire up heatmaps and analytics on day one and let data drive every iteration." },
    { icon: <Smartphone className="w-5 h-5 text-primary" />, title: "Mobile-First Development", body: "Designed mobile-first, then scaled up. Not the other way around. Over 65% of your visitors are on mobile — we design for them first." },
    { icon: <Code2 className="w-5 h-5 text-primary" />, title: "Clean, Documented Code", body: "Full documentation and handoff to your team. No black boxes. No lock-in. Your devs can pick up where we leave off without a week of archaeology." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "A/B Testing Infrastructure", body: "Hypothesis backlog, testing tools configured, and a clear measurement framework from launch. We don't just set it up — we run it with you." },
    { icon: <Layers className="w-5 h-5 text-primary" />, title: "Design System Creation", body: "A component library your team can maintain and extend without coming back to us for every change. Figma + code, fully in sync." },
    { icon: <Eye className="w-5 h-5 text-primary" />, title: "UX Research & Audit", body: "We study your users — heatmaps, session recordings, analytics deep-dives — before designing a single component. No assumption-based design." },
    { icon: <RefreshCw className="w-5 h-5 text-primary" />, title: "Post-Launch Iteration", body: "We monitor your site for 60 days post-launch and deliver a data-driven improvement report. Iteration is included in scope, not billed separately." },
  ],
  techStack: [
    {
      platform: "React / Next.js",
      stat: "Enterprise-grade",
      description: "For high-traffic marketing sites, SaaS platforms, and businesses that need custom functionality. Next.js gives you server-side rendering, edge performance, and the flexibility to build anything — paired with a headless CMS of your choice.",
    },
    {
      platform: "Webflow",
      stat: "No-code CMS",
      description: "The best platform for marketing teams that need to move fast without a developer on call. We build the design system, your team edits content. Webflow's visual editor is the most capable no-code tool available for marketing sites.",
    },
    {
      platform: "Shopify",
      stat: "eCommerce",
      description: "Our preferred platform for DTC and B2C eCommerce brands. Shopify's ecosystem, payment infrastructure, and app library make it the most scalable eCommerce choice for most businesses under $50M in annual revenue.",
    },
    {
      platform: "WordPress",
      stat: "43% of the web",
      description: "The right choice when you need a large content library, complex SEO requirements, or a deep plugin ecosystem. We build custom themes — no off-the-shelf templates, no Elementor, no Divi. Clean PHP and block-editor compatible.",
    },
    {
      platform: "WooCommerce",
      stat: "WordPress eComm",
      description: "For businesses that need deep WordPress integration with eCommerce functionality. Ideal when you have an existing WordPress content estate and want to add a store without migrating platforms. We customise every aspect of the purchase path.",
    },
    {
      platform: "Headless CMS",
      stat: "Contentful / Sanity",
      description: "For enterprise clients who need content managed centrally and delivered across multiple channels — web, mobile, email, and third-party integrations. We architect the content model, build the front end, and train your editorial team.",
    },
  ],
  caseStudies: [
    {
      image: "/work-1.png",
      client: "Nova FinTech",
      industry: "SaaS",
      blurb: "Full redesign of a B2B SaaS platform using Next.js. The new conversion architecture increased demo requests by 160% and pushed site CVR from 1.8% to 4.7% in 90 days post-launch.",
      metrics: [{ value: "+160%", label: "Demo requests" }, { value: "4.7%", label: "Site CVR" }],
    },
    {
      image: "/work-2.png",
      client: "Prime Realty Group",
      industry: "Real Estate",
      blurb: "Complete site redesign with zero SEO authority loss. Full URL mapping and 301 architecture preserved every ranking. Seller appointment bookings up 247% in 6 months.",
      metrics: [{ value: "+247%", label: "Appointments" }, { value: "0%", label: "Ranking loss" }],
    },
    {
      image: "/work-3.png",
      client: "Coastal Collective",
      industry: "eCommerce",
      blurb: "Shopify redesign with a concurrent CRO programme. Checkout completion improved by 31%. ROAS improved from 2.1x to 7.2x within two quarters of the new site going live.",
      metrics: [{ value: "7.2x", label: "ROAS" }, { value: "+38%", label: "AOV" }],
    },
  ],
  process: [
    {
      label: "Discover",
      headline: "Deep-dive into your business, users, and competitive landscape.",
      description: "We run a structured discovery process before anything is designed or built. This includes stakeholder interviews to understand your business objectives, a full analytics audit to identify where your current site is losing money, competitive analysis of your top five digital rivals, and a technical audit of your current infrastructure. We document everything in a discovery report that becomes the foundation for every decision we make. Nothing moves forward until the discovery is signed off.",
    },
    {
      label: "Strategy",
      headline: "Define the conversion architecture before design begins.",
      description: "Strategy is where most agencies skip ahead to mockups. We don't. We map every user journey — organic search visitor, paid media click, email recipient, referral — and define a conversion goal for each entry point. We build a content hierarchy for every key page, write the conversion copywriting brief, and define the A/B testing hypothesis backlog. Your wireframes are driven by data and strategy, not by what looks good to a senior designer on a Monday morning.",
    },
    {
      label: "Design",
      headline: "High-fidelity prototypes reviewed before a line of code is written.",
      description: "We design in Figma with a full component library that maps to the final codebase. You get clickable prototypes for every key user journey, not just static screenshots. Feedback is structured and version-controlled. We run at least one round of user testing on the prototype before handoff to development — catching problems at the cheapest possible point in the process. The final Figma file includes all component variants, responsive states, and an annotated spec for the development team.",
    },
    {
      label: "Build",
      headline: "Performance-first development against the Figma spec.",
      description: "Development happens against the Figma spec on a staging environment with milestone-based client reviews. We test Core Web Vitals throughout development — not just at the end — using Lighthouse CI in our build pipeline. Accessibility is built in from the start: WCAG 2.1 AA compliance is a default, not an add-on. Every component is documented in a Storybook-style reference so your team understands what was built and why.",
    },
    {
      label: "Launch",
      headline: "Staged go-live with zero downtime and full monitoring.",
      description: "We handle DNS, CDN configuration, SSL, and deployment. Launches are staged: a soft launch to a small audience segment to catch edge cases, followed by a full rollout. We set up real-time monitoring for Core Web Vitals, crawl errors, and conversion events before traffic is fully switched over. Every launch includes a 30-day post-launch crawl to catch indexing anomalies early — this is non-negotiable on every project, especially redesigns.",
    },
    {
      label: "Optimise",
      headline: "Data-driven iteration from launch day, not as an afterthought.",
      description: "The launch is not the finish line. We monitor heatmaps, session recordings, and conversion analytics from day one. At 30 days, we run a full funnel review. At 60 days, we deliver a written optimisation report with A/B test results, findings from user behaviour analysis, and a prioritised backlog of recommended changes. The businesses that compound their results fastest are the ones that treat the post-launch period as seriously as the build — we help you build that culture.",
    },
  ],
  faqs: [
    {
      question: "How long does a custom website take to build?",
      answer: "For most projects — a 10 to 15 page marketing site with a design system and standard CMS — we deliver in 8 to 12 weeks from discovery sign-off to launch. Enterprise projects, complex eCommerce builds with custom functionality, or sites requiring extensive integrations run 14 to 20 weeks. We give you a firm timeline after discovery, not before — because timeline promises made before scope is defined are how projects go over budget and over deadline.",
    },
    {
      question: "Do you use templates or page builders like Elementor or Divi?",
      answer: "No. Every site is custom-designed from scratch in Figma and built by our in-house development team. We don't touch Elementor, Divi, Wix, or Squarespace. Page builders produce code bloat that kills Core Web Vitals scores and creates maintenance nightmares for your team. We build clean, documented code that your developers can maintain independently.",
    },
    {
      question: "Will a redesign hurt my SEO rankings?",
      answer: "Not with us. Every redesign project includes a full URL audit, 301 redirect mapping for every changing URL, a crawl of the new site before launch to catch broken internal links, and post-launch crawl monitoring for 30 days. We've completed 40+ redesigns without a meaningful ranking loss. If a client has suffered a ranking hit from a previous agency's bad migration, we've been called in to fix it — we know exactly where those projects go wrong.",
    },
    {
      question: "What does CRO actually include in practice?",
      answer: "A full funnel audit using heatmaps, session recordings, and analytics segmentation to understand where and why users are dropping off. A structured hypothesis backlog with each test prioritised by potential impact and confidence. A/B testing implementation via VWO, Optimizely, or Google Optimize — whichever fits your traffic volume and budget. Monthly reports covering what we tested, what we learned, and what we're running next. CRO is a programme, not a project — it runs continuously and compounds month over month.",
    },
    {
      question: "Do you work with our existing CMS or do we have to migrate?",
      answer: "We work with WordPress, Webflow, Shopify, WooCommerce, and custom React or Next.js builds. If you're on a platform that would limit what we can achieve — an old Wix site, a heavily customised legacy CMS, a page builder site that scores 30 on Lighthouse — we'll advise on migration options as part of discovery and give you a clear cost-benefit case. We don't push migrations because they're more work for us; we recommend them when the business case is clear.",
    },
    {
      question: "What do you hand off at the end of the project?",
      answer: "You receive the final Figma file with all components, variants, and responsive states annotated. The codebase is documented at the component level. If we build in Webflow, we hand off the full Webflow project with a training session for your team. If we build in WordPress or Next.js, we deliver a technical handoff document covering architecture decisions, how to add new content, and how to extend the design system. You own everything. No licence fees, no dependencies on us to make changes.",
    },
    {
      question: "How do you price web design projects?",
      answer: "We price fixed-scope, not hourly. You get a detailed scope document and a fixed price before we start. No change-order culture, no hourly overages. Scope changes that materially alter the project are handled through a transparent change order process — but we write scopes carefully enough that this is rare. Most projects are quoted after a 30-minute discovery call and a review of your existing site and analytics.",
    },
  ],
  hubInsights: [
    {
      image: "/work-1.png",
      category: "Web Design",
      readTime: "7 min read",
      title: "Why Your Website's Conversion Rate Is Probably Half What It Should Be",
      excerpt: "The average B2B website converts at 2.3%. The top quartile converts at 6.1%. The gap is not about budget or design talent — it's about whether conversion architecture is treated as a first principle or a final polish. We analysed 140 client sites before and after redesign and found the same five structural problems over and over.",
      author: "Marcus Chen",
      authorRole: "Head of Design",
      href: "/blog/conversion-rate-web-design",
    },
    {
      image: "/work-2.png",
      category: "CRO",
      readTime: "5 min read",
      title: "The Redesign Mistakes That Kill SEO Authority — And How to Avoid Every One",
      excerpt: "Thousands of businesses wipe out years of organic traffic every time they launch a new website. The culprit is almost always the same: 301 redirects that weren't mapped, URLs that changed without a migration plan, or canonicals that pointed at the staging domain. We've fixed dozens of these situations. Here's the complete checklist we use on every redesign.",
      author: "Sarah Kowalski",
      authorRole: "Senior SEO Strategist",
      href: "/blog/redesign-seo-checklist",
    },
    {
      image: "/work-3.png",
      category: "Performance",
      readTime: "6 min read",
      title: "Core Web Vitals in 2026: What the Scores Actually Mean for Your Business",
      excerpt: "Google's Core Web Vitals update changed how search ranking works. But most of the guidance online treats Web Vitals as a technical checkbox rather than a revenue driver. We looked at 90 client sites and correlated Lighthouse scores with conversion rates. The relationship is stronger than most people think — and it starts long before you hit the performance threshold.",
      author: "James Okafor",
      authorRole: "Lead Developer",
      href: "/blog/core-web-vitals-2026",
    },
  ],
};

export default function WebDesignHub() {
  return <ServiceHubPage data={webDesignData} />;
}
