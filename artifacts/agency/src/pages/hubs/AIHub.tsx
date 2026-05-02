import { Bot, Zap, Code2, Cpu, Database, Globe, RefreshCw, Lock, BarChart2 } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    {/* Chat interface */}
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-[#1a56ff] px-4 py-3 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <Bot className="w-4 h-4 text-white" />
        </div>
        <div>
          <p className="text-white font-bold text-xs">Outlier AI Assistant</p>
          <p className="text-white/60 text-[9px]">Online · Always available</p>
        </div>
        <div className="ml-auto w-2 h-2 rounded-full bg-[#22c55e] animate-pulse" />
      </div>
      <div className="p-4 bg-[#0a0c12] space-y-2.5">
        <div className="bg-[#1a1d27] rounded-xl rounded-tl-none px-3 py-2 max-w-[80%]">
          <p className="text-xs text-white/70">Hi! I can help capture leads, answer questions, and book appointments 24/7. What would you like me to do?</p>
        </div>
        <div className="bg-primary/20 border border-primary/30 rounded-xl rounded-tr-none px-3 py-2 max-w-[80%] ml-auto">
          <p className="text-xs text-white/70">Book a dental appointment for Thursday</p>
        </div>
        <div className="bg-[#1a1d27] rounded-xl rounded-tl-none px-3 py-2 max-w-[85%]">
          <p className="text-xs text-white/70">I'll grab your details and confirm Thursday at 2pm with Dr. Patel. Takes 60 seconds →</p>
        </div>
      </div>
    </div>
    {/* Floating stats */}
    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100">
      <p className="text-[10px] text-gray-400">Leads captured</p>
      <p className="text-2xl font-black text-[#0e0e0e]">24/7</p>
    </div>
    <div className="absolute -top-4 -left-4 bg-[#0a0c12] rounded-xl px-3 py-2.5 shadow-xl border border-white/10">
      <p className="text-[9px] text-white/30">Response rate</p>
      <p className="text-lg font-black text-white">+340%</p>
    </div>
  </div>
);

const aiData: HubData = {
  slug: "ai-chatbot-service",
  label: "AI & AUTOMATION",
  breadcrumb: "AI & Automation",
  hero: {
    headline: "AI Systems That Work While You Sleep.",
    italic: "Bespoke. Not off-the-shelf.",
    description:
      "Custom AI chatbots, workflow automation, and AI integrations built for your business. We don't configure generic tools — we build purpose-specific systems that capture leads, reduce overhead, and scale your operations without scaling your headcount.",
    cta: "Book a Free AI Audit",
    ctaHref: "/contact",
    badges: ["Custom AI Builds", "OpenAI & Anthropic", "CRM Integration", "Toronto-Based"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "24/7", label: "Lead capture" },
    { value: "+340%", label: "Avg. response rate" },
    { value: "60%", label: "Avg. overhead reduction" },
    { value: "< 6 wks", label: "Typical build time" },
  ],
  intro: {
    eyebrow: "Why AI works for service businesses",
    headline: "Stop leaving leads on the table after business hours.",
    body: "The average service business misses 40% of inbound leads because they arrive outside business hours, during busy periods, or via channels not being actively monitored. A custom AI system captures every lead, qualifies it, and either books the appointment or routes it to the right person — instantly, 24/7.",
    bullets: [
      "Capture and qualify leads 24/7 without adding headcount",
      "Automate repetitive workflows that drain your team's time",
      "Integrate with your existing CRM, booking system, and tools",
      "Custom-built — not a chatbot template or Zapier configuration",
      "Measurable ROI: we track every lead and automation saving",
    ],
  },
  subServices: [
    {
      tab: "AI Chatbots",
      headline: "24/7 lead capture and qualification — without a human.",
      description:
        "Purpose-built AI chatbots trained on your business, services, pricing, and FAQs. Not a generic bot with pre-set responses — a conversational system that qualifies leads, books appointments, and routes enquiries intelligently based on your specific business logic.",
      bullets: [
        "Trained on your services, pricing, and FAQs",
        "Lead qualification and booking flow",
        "CRM and calendar integration",
        "Handoff to human agent with full context",
      ],
      image: "/case-study-saas.png",
      href: "/ai-chatbot-service",
    },
    {
      tab: "Workflow Automation",
      headline: "Eliminate the manual work your team shouldn't be doing.",
      description:
        "We map your existing workflows, identify the high-volume manual tasks, and build automations that handle them reliably. From lead routing and follow-up sequences to invoice generation and reporting — we automate what costs you time.",
      bullets: [
        "Full workflow mapping and time audit",
        "Custom automation build (not Zapier templates)",
        "Integration with your existing tools",
        "Monitoring and error handling included",
      ],
      image: "/case-study-home.png",
      href: "/ai-workflow-service",
    },
    {
      tab: "AI Integration",
      headline: "Connect AI capabilities to your existing stack.",
      description:
        "We integrate AI capabilities — language models, vision models, classification engines — directly into your existing systems. CRM enrichment, email triage, document processing, sentiment analysis. Built with your existing tools in mind.",
      bullets: [
        "CRM enrichment and lead scoring",
        "Email triage and intelligent routing",
        "Document processing and data extraction",
        "Custom API integrations with any system",
      ],
      image: "/case-study-saas.png",
      href: "/ai-integration-service",
    },
    {
      tab: "Custom AI Systems",
      headline: "Fully bespoke AI systems built for your exact use case.",
      description:
        "Beyond chatbots and automations — fully custom AI systems that solve specific, complex business problems. Recommendation engines, pricing optimisation, demand forecasting, custom language models fine-tuned on your data.",
      bullets: [
        "Custom model fine-tuning on your data",
        "Recommendation and personalisation engines",
        "Predictive analytics and forecasting",
        "AI-powered internal tools and dashboards",
      ],
      image: "/case-study-saas.png",
      href: "/custom-ai-service",
    },
    {
      tab: "App Development",
      headline: "Build the app your business actually needs.",
      description:
        "Custom web and mobile applications built with modern tech. We specialise in data-heavy internal tools, customer portals, and AI-powered applications. Not general-purpose app development — specific tools that solve specific business problems.",
      bullets: [
        "React/Next.js web applications",
        "React Native mobile apps (iOS + Android)",
        "AI-powered features natively integrated",
        "API design and backend development",
      ],
      image: "/case-study-saas.png",
      href: "/app-development-service",
    },
  ],
  features: [
    { icon: <Bot className="w-5 h-5 text-primary" />, title: "AI Chatbot Development", body: "Custom-trained on your business. Not a template. Captures leads, qualifies, books appointments 24/7." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Workflow Automation", body: "Map and automate the high-volume manual tasks draining your team's time — reliably and without templates." },
    { icon: <Code2 className="w-5 h-5 text-primary" />, title: "Custom AI Builds", body: "From recommendation engines to fine-tuned language models — fully bespoke AI systems for your exact use case." },
    { icon: <Database className="w-5 h-5 text-primary" />, title: "CRM Integration", body: "AI connected directly to your HubSpot, Salesforce, or custom CRM. Full lead context, zero manual data entry." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "Multi-Channel Deployment", body: "Deploy your AI across your website, WhatsApp, SMS, and email — one system, every channel." },
    { icon: <Cpu className="w-5 h-5 text-primary" />, title: "OpenAI & Anthropic", body: "We build on the latest models — GPT-4o, Claude 3.5 — and update your system as better models are released." },
    { icon: <RefreshCw className="w-5 h-5 text-primary" />, title: "Ongoing Optimisation", body: "Your AI system improves over time. We monitor performance and retrain based on real conversation data." },
    { icon: <Lock className="w-5 h-5 text-primary" />, title: "Privacy & Security", body: "PIPEDA-compliant. Your customer data stays in Canada. SOC2-ready infrastructure on request." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "Measurable ROI", body: "We track leads captured, appointments booked, and hours saved so you see the direct ROI of every system we build." },
  ],
  caseStudies: [
    {
      image: "/industry-dental.png",
      client: "Apex Dental Group",
      industry: "Dental",
      blurb: "AI chatbot captures after-hours appointment requests across 6 locations. Staff time saved: 18 hours/week.",
      metrics: [{ value: "+240%", label: "After-hours leads" }, { value: "18h/wk", label: "Staff time saved" }],
    },
    {
      image: "/case-study-saas.png",
      client: "Nova FinTech",
      industry: "SaaS",
      blurb: "AI-powered lead qualification and CRM enrichment. Sales team focuses only on qualified accounts.",
      metrics: [{ value: "+85%", label: "Qualified pipeline" }, { value: "-60%", label: "Time-to-qualify" }],
    },
    {
      image: "/case-study-home.png",
      client: "Hudson Outdoor",
      industry: "Home Services",
      blurb: "Automated quote workflow and follow-up sequences. Estimate-to-close cycle reduced from 12 days to 3.",
      metrics: [{ value: "3 days", label: "Close cycle" }, { value: "+45%", label: "Quote acceptance" }],
    },
  ],
  process: [
    { label: "Audit", headline: "Map your current workflows and identify the highest-ROI automations.", description: "We spend time understanding your business before recommending anything. We map every workflow, measure time spent, and identify exactly where AI will deliver the fastest and largest return." },
    { label: "Design", headline: "Design the system architecture before writing a line of code.", description: "We design the full system — conversation flows, integration points, data models — and walk you through it. You see exactly what we're building and why before we build it." },
    { label: "Build", headline: "Custom build. No templates. No off-the-shelf tools.", description: "Our team builds the system from scratch — AI model selection, training data curation, integration development, and testing. Everything is built to your specifications." },
    { label: "Integrate", headline: "Connect to your existing CRM, calendar, and tools.", description: "We handle all the integrations — your CRM, booking system, email platform, and any other tools in your stack. Zero disruption to your existing operations during integration." },
    { label: "Optimise", headline: "Monitor performance and improve from real conversation data.", description: "We monitor your AI system from day one, flag edge cases, and continuously improve based on real conversation data. Monthly performance reports show leads captured, handled, and handed off." },
    { label: "Scale", headline: "Expand to new channels and use cases as your business grows.", description: "Once the core system is proven, we expand it — new channels (WhatsApp, SMS), new workflows, new integrations. Your AI system grows with your business." },
  ],
  faqs: [
    { question: "How is this different from a Tidio or Intercom chatbot?", answer: "Those are pre-built tools you configure. We build custom systems trained specifically on your business, products, pricing, and processes. The difference in quality and capability is significant — ours behaves like a knowledgeable team member, not a script." },
    { question: "How long does it take to build?", answer: "A standard AI chatbot with CRM integration takes 4-6 weeks from kick-off to go-live. More complex systems (custom models, multiple integrations, app development) run 8-14 weeks. We'll give you a firm timeline after our audit." },
    { question: "What happens when the AI doesn't know the answer?", answer: "The system is designed to gracefully hand off to a human agent with full context — the conversation history, the lead's details, and a summary of what they need. No dead ends." },
    { question: "Is my customer data private?", answer: "Yes. All customer data is stored in Canada, on servers you own, with access controls you control. We're PIPEDA compliant and can provide SOC2-ready infrastructure on request." },
    { question: "What do you need from me to get started?", answer: "An onboarding meeting, access to your existing tools (CRM, calendar, website), and your FAQs/service documentation. We handle everything from there." },
  ],
};

export default function AIHub() {
  return <ServiceHubPage data={aiData} />;
}
