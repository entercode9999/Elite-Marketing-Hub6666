import { Bot, Zap, Code2, Cpu, Database, Globe, RefreshCw, Lock, BarChart2 } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
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
    body: "The average service business misses 40% of inbound leads because they arrive outside business hours, during busy periods, or via channels not being actively monitored. A custom AI system captures every lead, qualifies it, and either books the appointment or routes it to the right person — instantly, 24/7, without adding a single person to your team.",
    secondBody: "The difference between a generic chatbot and a custom AI system is night and day. Pre-built tools respond to scripts. Our systems are trained on your business — your services, your pricing, your FAQs, your booking logic — and they behave like a knowledgeable team member, not a menu of options. The ROI is visible within the first 30 days.",
    bullets: [
      "Capture and qualify leads 24/7 without adding headcount",
      "Automate repetitive workflows that drain your team's time",
      "Integrate with your existing CRM, booking system, and tools",
      "Custom-built — not a chatbot template or Zapier configuration",
      "Measurable ROI: we track every lead and automation saving",
    ],
  },
  proofSection: {
    eyebrow: "Why custom beats generic",
    headline: "The gap between a configured tool and a custom system is your competitive advantage.",
    body: "Generic AI tools — Tidio, Intercom, ManyChat — are built for the widest possible audience. That means they're optimised for no one in particular. Every business interaction that doesn't fit the pre-built flow falls through. For high-ticket service businesses, one missed lead pays for a custom system ten times over.",
    secondBody: "We've built AI systems for dental groups, law firms, HVAC companies, SaaS platforms, and eCommerce brands. The pattern is consistent: the businesses that invest in custom AI infrastructure early build a compounding advantage over competitors still relying on office hours and manual follow-up. Our systems don't just handle inbound — they actively qualify, nurture, and move leads through the funnel while your team sleeps.",
    bullets: [
      "We train your AI on your actual business logic — services, pricing, objections, and booking rules — not a generic script.",
      "Every lead interaction is logged to your CRM with full context, so your sales team always picks up a warm, qualified conversation.",
      "Handoffs to human agents are graceful — the AI summarises the conversation and routes to the right person with everything they need.",
      "We monitor conversation logs weekly, identify failure points, and retrain the model to handle new scenarios continuously.",
      "Our systems are PIPEDA compliant. Customer data stays in Canada on infrastructure you own.",
      "We guarantee a measurable ROI within 60 days — tracked against your pre-implementation baseline.",
    ],
  },
  subServices: [
    {
      tab: "AI Chatbots",
      headline: "24/7 lead capture and qualification — without a human.",
      description:
        "Purpose-built AI chatbots trained on your business, services, pricing, and FAQs. Not a generic bot with pre-set responses — a conversational system that qualifies leads, books appointments, and routes enquiries intelligently based on your specific business logic. We train the system on your real conversations and update it continuously as your offering evolves.",
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
        "We map your existing workflows, identify the high-volume manual tasks, and build automations that handle them reliably. From lead routing and follow-up sequences to invoice generation and reporting — we automate what costs you time. Every automation is monitored, error-handled, and documented so your team can manage it independently.",
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
        "We integrate AI capabilities — language models, vision models, classification engines — directly into your existing systems. CRM enrichment, email triage, document processing, sentiment analysis. Built with your existing tools in mind, so AI enhances what you have rather than requiring a parallel system.",
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
        "Beyond chatbots and automations — fully custom AI systems that solve specific, complex business problems. Recommendation engines, pricing optimisation, demand forecasting, custom language models fine-tuned on your proprietary data. For businesses that want AI infrastructure as a genuine competitive moat.",
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
        "Custom web and mobile applications built with modern tech. We specialise in data-heavy internal tools, customer portals, and AI-powered applications. Not general-purpose app development — specific tools that solve specific business problems, with AI capabilities natively integrated from day one.",
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
    { icon: <Bot className="w-5 h-5 text-primary" />, title: "AI Chatbot Development", body: "Custom-trained on your business. Not a template. Captures leads, qualifies, books appointments 24/7 with human-level context." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Workflow Automation", body: "Map and automate the high-volume manual tasks draining your team's time — reliably, with monitoring and error handling built in." },
    { icon: <Code2 className="w-5 h-5 text-primary" />, title: "Custom AI Builds", body: "From recommendation engines to fine-tuned language models — fully bespoke AI systems for your exact use case, built to compound." },
    { icon: <Database className="w-5 h-5 text-primary" />, title: "CRM Integration", body: "AI connected directly to your HubSpot, Salesforce, or custom CRM. Full lead context, zero manual data entry, automatic enrichment." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "Multi-Channel Deployment", body: "Deploy your AI across your website, WhatsApp, SMS, and email — one system, every channel, consistent response quality everywhere." },
    { icon: <Cpu className="w-5 h-5 text-primary" />, title: "OpenAI & Anthropic", body: "We build on the latest models — GPT-4o, Claude 3.5 — and update your system automatically as better models are released." },
    { icon: <RefreshCw className="w-5 h-5 text-primary" />, title: "Ongoing Optimisation", body: "Your AI system improves over time. We monitor conversation logs weekly and retrain based on real interaction data." },
    { icon: <Lock className="w-5 h-5 text-primary" />, title: "Privacy & Security", body: "PIPEDA-compliant. Your customer data stays in Canada. SOC2-ready infrastructure on request. No data used to train third-party models." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "Measurable ROI", body: "We track leads captured, appointments booked, and hours saved so you see the direct ROI of every system we build. Reported monthly." },
  ],
  techStack: [
    {
      platform: "OpenAI GPT-4o",
      stat: "LLM Core",
      description: "The most capable general-purpose language model for conversational AI, document processing, and content generation tasks. We stay current with model updates so your system benefits from improvements without downtime.",
    },
    {
      platform: "Anthropic Claude",
      stat: "Long context",
      description: "Superior performance for long-document analysis, nuanced reasoning, and tasks requiring high accuracy on complex business logic. Particularly effective for legal, financial, and compliance-adjacent applications.",
    },
    {
      platform: "n8n / Make",
      stat: "Automation",
      description: "For complex workflow automation, we use n8n (self-hosted, full control) or Make (cloud-based, rapid build). Both integrate with 500+ tools and support custom code nodes for business-specific logic.",
    },
    {
      platform: "HubSpot / Salesforce",
      stat: "CRM",
      description: "Native API integrations with both major CRM platforms. AI-captured leads and conversation data flow directly into your CRM with proper contact, deal, and activity records — zero manual entry required.",
    },
    {
      platform: "Pinecone / Weaviate",
      stat: "Vector DB",
      description: "For AI systems that need to search and retrieve information from large knowledge bases — product catalogues, policy documents, historical conversations — we use vector databases for semantic retrieval at scale.",
    },
    {
      platform: "Custom APIs",
      stat: "Any stack",
      description: "Where off-the-shelf integrations don't exist, we build them. Our team designs and implements custom REST and GraphQL APIs to connect your AI systems with any tool in your technology stack.",
    },
  ],
  caseStudies: [
    {
      image: "/industry-dental.png",
      client: "Apex Dental Group",
      industry: "Dental",
      blurb: "Custom AI chatbot captures after-hours appointment requests across 6 locations. Trained on each location's schedule, services, and pricing. Staff time saved: 18 hours per week.",
      metrics: [{ value: "+240%", label: "After-hours leads" }, { value: "18h/wk", label: "Staff time saved" }],
    },
    {
      image: "/case-study-saas.png",
      client: "Nova FinTech",
      industry: "SaaS",
      blurb: "AI-powered lead qualification and CRM enrichment. Every inbound lead is scored, enriched, and routed before a human touches it. Sales team now focuses exclusively on qualified accounts.",
      metrics: [{ value: "+85%", label: "Qualified pipeline" }, { value: "-60%", label: "Time-to-qualify" }],
    },
    {
      image: "/case-study-home.png",
      client: "Hudson Outdoor",
      industry: "Home Services",
      blurb: "Automated quote workflow and follow-up sequences. Quote requests now get an AI-generated preliminary estimate within 5 minutes. Estimate-to-close cycle reduced from 12 days to 3.",
      metrics: [{ value: "3 days", label: "Close cycle" }, { value: "+45%", label: "Quote acceptance" }],
    },
  ],
  process: [
    {
      label: "Audit",
      headline: "Map your current workflows and identify the highest-ROI automations.",
      description: "We spend time understanding your business before recommending anything. We map every workflow, measure time spent per task, identify where leads are leaking, and produce a prioritised list of AI opportunities ranked by expected ROI. This shapes the entire system design and ensures we build what actually moves the needle.",
    },
    {
      label: "Design",
      headline: "Design the system architecture before writing a line of code.",
      description: "We design the full system — conversation flows, integration points, data models, fallback logic, and escalation paths. You see exactly what we're building and why before we build it. This review stage catches design flaws early, when fixing them is cheap, not after a build is complete.",
    },
    {
      label: "Build",
      headline: "Custom build. No templates. No off-the-shelf configuration.",
      description: "Our team builds the system from scratch — AI model selection and prompting, training data curation, integration development, and comprehensive testing across edge cases. Every component is built to your specifications, with documentation your team can understand and maintain.",
    },
    {
      label: "Integrate",
      headline: "Connect to your existing CRM, calendar, and communication tools.",
      description: "We handle all integrations — your CRM, booking system, email platform, and any other tools in your stack. The goal is zero disruption to your existing operations during integration. We test every integration point in staging before touching your live environment.",
    },
    {
      label: "Optimise",
      headline: "Monitor performance and improve from real conversation data.",
      description: "We monitor your AI system from day one, review conversation logs weekly, flag edge cases where the system underperforms, and continuously retrain to handle new scenarios. Monthly performance reports show leads captured, handled, converted, and handed off — with clear ROI against your investment.",
    },
    {
      label: "Scale",
      headline: "Expand to new channels and use cases as your business grows.",
      description: "Once the core system is proven, we expand it — new channels (WhatsApp, SMS, email), new workflows (quote generation, onboarding, support), new integrations. Your AI infrastructure grows with your business and compounds in value with every addition.",
    },
  ],
  faqs: [
    {
      question: "How is this different from a Tidio or Intercom chatbot?",
      answer: "Those are pre-built tools you configure with scripts and decision trees. We build custom systems trained specifically on your business, products, pricing, and processes. The difference in quality is significant — ours behaves like a knowledgeable team member who knows your business, not a menu of canned responses. The performance difference in lead capture and conversion is measurable from the first week.",
    },
    {
      question: "How long does it take to build a custom AI system?",
      answer: "A standard AI chatbot with CRM integration takes 4-6 weeks from kick-off to go-live. More complex systems — custom language model fine-tuning, multiple integrations, workflow automation stacks, app development — run 8-14 weeks. We give you a firm timeline after our workflow audit. We don't start the clock until we understand exactly what we're building.",
    },
    {
      question: "What happens when the AI doesn't know the answer?",
      answer: "The system is designed to gracefully hand off to a human agent with full context — the entire conversation history, the lead's details, what they asked, and a summary of what they need. There are no dead ends. Every conversation either resolves itself or lands in your team's hands with everything they need to close it.",
    },
    {
      question: "Is my customer data private?",
      answer: "Yes. All customer data is stored in Canada, on infrastructure you own, with access controls you control. We are PIPEDA compliant. We never use your customer data to train third-party models. We can provide SOC2-ready infrastructure for businesses in regulated industries. Data sovereignty documentation is available on request.",
    },
    {
      question: "What do you need from us to get started?",
      answer: "An onboarding session to understand your business and workflows, access to your existing tools (CRM, calendar, website), your FAQs and service documentation, and a few hours from someone on your team to review the system design before we build. We handle everything else.",
    },
  ],
  hubInsights: [
    {
      image: "/case-study-saas.png",
      category: "AI & Automation",
      readTime: "6 min read",
      title: "Why Generic Chatbots Lose Leads and What Custom AI Actually Fixes",
      excerpt: "The average service business loses 38% of inbound leads to slow response times or after-hours gaps. We analysed 60 AI chatbot deployments across dental, legal, HVAC, and SaaS clients and found the same pattern: generic tools capture volume but miss quality. Here's what actually converts.",
      author: "Priya Anand",
      authorRole: "Head of AI Systems",
      href: "/blog/custom-ai-vs-generic-chatbots",
    },
    {
      image: "/case-study-home.png",
      category: "Workflow Automation",
      readTime: "5 min read",
      title: "The 8 Workflows Every Service Business Should Automate First",
      excerpt: "Not all automation is equal. Some workflows deliver 10x returns immediately; others take months to justify. After mapping hundreds of business processes across our client base, we've identified the eight automations that consistently deliver the fastest, most measurable ROI — regardless of industry.",
      author: "James Okafor",
      authorRole: "Automation Lead",
      href: "/blog/workflows-to-automate-first",
    },
    {
      image: "/industry-dental.png",
      category: "AI Strategy",
      readTime: "7 min read",
      title: "How AI Infrastructure Becomes a Compounding Advantage Over 24 Months",
      excerpt: "The businesses winning with AI in 2026 aren't the ones with the fanciest tools — they're the ones who built the right foundation 18 months ago. We look at three client case studies where early AI investment created a compounding lead and efficiency advantage that competitors can't close without significant time investment.",
      author: "Marcus Chen",
      authorRole: "Strategy Director",
      href: "/blog/ai-compounding-advantage",
    },
  ],
};

export default function AIHub() {
  return <ServiceHubPage data={aiData} />;
}
