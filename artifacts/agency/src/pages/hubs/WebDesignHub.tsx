import { Monitor, Zap, TrendingUp, Layers, Code2, Eye, Smartphone, BarChart2, RefreshCw } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    {/* Browser mockup */}
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
    {/* Floating badge */}
    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100">
      <p className="text-xs font-bold text-gray-900">Lighthouse Score</p>
      <p className="text-2xl font-black text-[#22c55e]">100</p>
    </div>
    {/* Floating phone */}
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
    body: "Most agency websites look great in a pitch deck and underperform in the real world. We design every site with a primary conversion goal from day one — not as an afterthought. Every layout decision, headline, and CTA is validated against user behaviour data and industry conversion benchmarks.",
    bullets: [
      "Custom design — no templates, no page builders",
      "Built for Core Web Vitals and Lighthouse 100",
      "Conversion-first: every element has a job",
      "Mobile-first and accessible by default",
      "Handoff to your team with full documentation",
    ],
  },
  subServices: [
    {
      tab: "Custom Web Design",
      headline: "Bespoke design systems built for your brand.",
      description:
        "From brand identity to full UI/UX design systems. We research your competitors, your customers, and your market before a single frame is drawn. The result is a design that is distinctively yours and provably better than what you had before.",
      bullets: [
        "Full brand audit and competitive positioning",
        "Wireframes and high-fidelity Figma prototypes",
        "Custom component library for your team",
        "A/B testing setup and hypothesis backlog",
      ],
      image: "/hero-showcase.png",
      href: "/custom-web-design-service",
    },
    {
      tab: "CRO",
      headline: "More revenue from the traffic you already have.",
      description:
        "Conversion Rate Optimisation is the highest-ROI investment you can make once your traffic is established. We audit your full funnel, identify drop-off points, and deploy a systematic testing programme that compounds month over month.",
      bullets: [
        "Full funnel audit with heatmaps + session recordings",
        "Hypothesis-led A/B and multivariate testing",
        "CTA copy and headline experiments",
        "Form and checkout optimisation",
      ],
      image: "/case-study-saas.png",
      href: "/cro-service",
    },
    {
      tab: "Website Redesign",
      headline: "Redesign without losing a single ranking or link.",
      description:
        "A full redesign without a proper SEO migration plan is one of the most common ways businesses destroy years of organic traffic overnight. We've rescued dozens of businesses from bad redesigns. Ours come with a zero-loss guarantee on your current SEO authority.",
      bullets: [
        "Full URL mapping and redirect architecture",
        "301 redirect implementation and verification",
        "Post-launch crawl monitoring for 30 days",
        "Core Web Vitals benchmarking before and after",
      ],
      image: "/case-study-realestate.png",
      href: "/website-redesign-service",
    },
    {
      tab: "Landing Pages",
      headline: "High-converting landing pages for every campaign.",
      description:
        "Purpose-built landing pages for Google Ads, paid social, and email campaigns. Designed to convert a single traffic source into leads or sales. Each page is tested against a control and iterated based on real data.",
      bullets: [
        "Single-objective page architecture",
        "Integrated with your ad platform and CRM",
        "Dynamic content for audience segments",
        "Weekly performance reporting",
      ],
      image: "/case-study-home.png",
      href: "/custom-web-design-service",
    },
    {
      tab: "eCommerce Design",
      headline: "Revenue-first eCommerce design.",
      description:
        "Shopify and WooCommerce stores designed to convert. We design the full purchase path — from product discovery to cart to checkout — with every element validated against eCommerce conversion benchmarks.",
      bullets: [
        "Product page architecture for maximum conversion",
        "Cart and checkout optimisation",
        "Collection and filter UX design",
        "Post-purchase flow design",
      ],
      image: "/industry-ecommerce.png",
      href: "/ecommerce-development",
    },
  ],
  features: [
    { icon: <Monitor className="w-5 h-5 text-primary" />, title: "Custom UI/UX Design", body: "No templates. Every interface is designed from research, tailored to your brand and conversion goals." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Core Web Vitals Optimisation", body: "We build to pass Google's performance standards — LCP, CLS, FID — from the first commit." },
    { icon: <TrendingUp className="w-5 h-5 text-primary" />, title: "Conversion Architecture", body: "Every layout decision is tied to a conversion goal. We wire up heatmaps and analytics from day one." },
    { icon: <Smartphone className="w-5 h-5 text-primary" />, title: "Mobile-First Development", body: "Designed mobile-first, then scaled up. Not the other way around." },
    { icon: <Code2 className="w-5 h-5 text-primary" />, title: "Clean, Documented Code", body: "Full documentation and handoff to your team. No black boxes. No lock-in." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "A/B Testing Infrastructure", body: "Hypothesis backlog, testing tools configured, and a clear measurement framework from launch." },
    { icon: <Layers className="w-5 h-5 text-primary" />, title: "Design System Creation", body: "A component library your team can maintain and extend without coming back to us for every change." },
    { icon: <Eye className="w-5 h-5 text-primary" />, title: "UX Research & Audit", body: "We study your users — heatmaps, session recordings, interviews — before designing a single component." },
    { icon: <RefreshCw className="w-5 h-5 text-primary" />, title: "Post-Launch Iteration", body: "We monitor your site for 60 days post-launch and make data-driven improvements included in scope." },
  ],
  caseStudies: [
    {
      image: "/case-study-saas.png",
      client: "Nova FinTech",
      industry: "SaaS",
      blurb: "Full redesign of a B2B SaaS platform. Conversion rate increased from 1.8% to 4.7% in 90 days following launch.",
      metrics: [{ value: "+160%", label: "Demo requests" }, { value: "4.7%", label: "Site CVR" }],
    },
    {
      image: "/case-study-realestate.png",
      client: "Prime Realty Group",
      industry: "Real Estate",
      blurb: "Complete site redesign with zero SEO authority loss. Seller appointment bookings up 247% in 6 months.",
      metrics: [{ value: "+247%", label: "Appointments" }, { value: "0%", label: "Ranking loss" }],
    },
    {
      image: "/industry-ecommerce.png",
      client: "Coastal Collective",
      industry: "eCommerce",
      blurb: "Shopify redesign with CRO programme. ROAS improved from 2.1x to 7.2x within two quarters.",
      metrics: [{ value: "7.2x", label: "ROAS" }, { value: "+38%", label: "AOV" }],
    },
  ],
  process: [
    { label: "Discover", headline: "Deep-dive into your business, users, and market.", description: "We run a structured discovery process — stakeholder interviews, user research, competitor analysis, and technical audit. This shapes every decision we make from day one." },
    { label: "Strategy", headline: "Define the conversion architecture before design begins.", description: "We map your user journeys, define conversion goals for each page, and create a content hierarchy. No wireframes until this is signed off." },
    { label: "Design", headline: "High-fidelity prototypes, not rough mockups.", description: "We design in Figma with a full component library. You get clickable prototypes for review and iteration before a line of code is written." },
    { label: "Build", headline: "Clean, performant, documented code.", description: "We develop against the Figma spec with a staging environment for your review at each milestone. Core Web Vitals are tested throughout." },
    { label: "Launch", headline: "Staged go-live with full monitoring.", description: "We handle the DNS, deployment, and post-launch monitoring. Zero-downtime launches. 30-day post-launch crawl monitoring included." },
    { label: "Optimise", headline: "Data-driven iteration from launch day forward.", description: "Heatmaps, session recordings, and A/B tests run from day one. We deliver a 60-day optimisation report with findings and recommended next actions." },
  ],
  faqs: [
    { question: "How long does a custom website take?", answer: "For most projects — a 10-15 page marketing site — we deliver in 8-12 weeks. Enterprise projects or complex eCommerce builds with custom functionality run 14-20 weeks. We'll give you a firm timeline after discovery." },
    { question: "Do you use templates or page builders?", answer: "No. Every site is custom-designed from scratch in Figma and built by our in-house development team. No Elementor, no Divi, no off-the-shelf themes." },
    { question: "Will my redesign hurt my SEO rankings?", answer: "Not with us. Every redesign includes a full URL audit, 301 redirect map, and post-launch crawl monitoring. We've completed 40+ redesigns with zero meaningful ranking loss." },
    { question: "What's included in CRO?", answer: "A full funnel audit (heatmaps, session recordings, analytics), a hypothesis backlog with prioritised tests, A/B testing implementation via your preferred tool, and monthly reports on what we tested and what we learned." },
    { question: "Do you work with our existing CMS?", answer: "We work with WordPress, Webflow, Shopify, and custom React/Next.js builds. If you're on an unsupported platform, we'll advise on migration options as part of discovery." },
  ],
};

export default function WebDesignHub() {
  return <ServiceHubPage data={webDesignData} />;
}
