import { SubServicePage, type SubServiceData } from "@/pages/SubServicePage";

const RELATED_AI = [
  { label: "AI & Automation Overview", href: "/ai-chatbot-service" },
  { label: "Web Design & CRO", href: "/custom-web-design-service" },
  { label: "Google Ads Management", href: "/google-ads-management" },
  { label: "Content Marketing", href: "/content-marketing-service" },
];

/* ── AI WORKFLOW AUTOMATION ── */
const workflowData: SubServiceData = {
  parentLabel: "AI & Automation", parentHref: "/ai-chatbot-service",
  label: "AI Workflow Automation",
  headline: "Automate the repetitive work.",
  italic: "Focus your team on what compounds.",
  subhead: "AI workflow automation identifies the highest-volume repetitive tasks in your business and replaces them with intelligent automated systems — connecting your CRM, email, project management tools, and custom data sources into a seamless automated pipeline.",
  stats: [{ value: "60%", label: "Avg time saved on target tasks" }, { value: "200+", label: "Integrations available" }, { value: "< 4 wks", label: "Avg implementation" }],
  deliverables: [
    { title: "Process Mapping & Automation Audit", body: "We document your highest-frequency manual processes and score them by automation potential, volume, and ROI. The top 5 automations are prioritised for implementation." },
    { title: "n8n / Make / Zapier Workflows", body: "Custom automation workflows built on the platform that best fits your stack — n8n for self-hosted, Make for complex logic, Zapier for broad integrations." },
    { title: "CRM + Tool Integrations", body: "Workflows connected to HubSpot, Salesforce, Notion, Slack, Google Workspace, and 200+ other tools. Data flows without manual intervention." },
    { title: "Documentation & Training", body: "Every workflow documented with a visual flowchart and written guide. Your team trained on how to monitor and modify workflows as processes evolve." },
  ],
  process: [
    { title: "Discovery", body: "1–2 day process mapping session with your operations team. Every manual task documented and scored for automation ROI." },
    { title: "Build", body: "Highest-ROI automations built and tested in a staging environment. Logic edge cases handled. Failure notifications configured." },
    { title: "Deploy & Support", body: "Automations deployed to production. 30-day monitoring period with our team. Handoff with full documentation and training session." },
  ],
  faq: [
    { q: "Do I need a technical team to maintain these automations?", a: "No. We build automations that non-technical staff can monitor and adjust using visual interfaces. Complex changes are handled by our team on retainer." },
    { q: "What are the most common automation use cases?", a: "Lead routing and CRM entry, client onboarding sequences, invoice generation, social media scheduling, internal notifications, and report generation. Any task that follows a consistent pattern is automatable." },
  ],
  related: RELATED_AI,
  cta: "If your team does it more than 10 times a week, it should be automated.",
};

/* ── AI INTEGRATION ── */
const integrationData: SubServiceData = {
  parentLabel: "AI & Automation", parentHref: "/ai-chatbot-service",
  label: "AI Integration (CRM, Tools, APIs)",
  headline: "Connect AI to your existing tools —",
  italic: "without rebuilding them.",
  subhead: "You don't need to replace your CRM, your project management tool, or your email platform. We integrate AI capabilities into your existing stack — so your team gets the benefits of AI without a disruptive migration or retraining program.",
  stats: [{ value: "CRM-native", label: "AI integration" }, { value: "< 2 wks", label: "Avg integration timeline" }, { value: "Zero", label: "Downtime deployment" }],
  deliverables: [
    { title: "AI-Enhanced CRM Workflows", body: "AI-powered lead scoring, automatic contact enrichment, sentiment analysis on sales calls, and automated follow-up sequences integrated into HubSpot or Salesforce." },
    { title: "Document Processing AI", body: "Invoice processing, contract review, form data extraction, and document classification — AI models connected to your document management workflow." },
    { title: "Custom API Integrations", body: "OpenAI, Anthropic, Google AI, or custom model APIs integrated into your existing software using RESTful connections that work with your current infrastructure." },
    { title: "AI-Powered Reporting", body: "Automated report generation using AI summarisation — weekly client reports, performance dashboards, and competitive intelligence briefs generated automatically." },
  ],
  process: [
    { title: "Stack Audit", body: "Full audit of your current tool stack, data flows, and pain points. Integration opportunities scored by value and implementation complexity." },
    { title: "Integration Build", body: "API connections built and tested in staging. Edge cases handled. Rate limiting, error handling, and retry logic implemented." },
    { title: "Deploy & Monitor", body: "Zero-downtime deployment. 30-day monitoring with error alerts. Documentation and training for your technical team." },
  ],
  faq: [
    { q: "Which AI providers do you integrate with?", a: "OpenAI (GPT-4, o1), Anthropic (Claude), Google (Gemini), and open-source models (Llama, Mistral) via hosted APIs. We select the model that best fits your use case and cost requirements." },
    { q: "How do you handle data privacy with AI integrations?", a: "We implement data minimisation, never send PII to third-party AI APIs without explicit approval, and prioritise self-hosted models for sensitive data use cases." },
  ],
  related: RELATED_AI,
  cta: "AI should enhance the tools your team already uses — not replace them.",
};

/* ── CUSTOM AI SYSTEMS ── */
const customAiData: SubServiceData = {
  parentLabel: "AI & Automation", parentHref: "/ai-chatbot-service",
  label: "Custom AI Systems",
  headline: "Bespoke AI systems built around",
  italic: "your specific business logic.",
  subhead: "Off-the-shelf AI tools apply generic intelligence to your specific problem. Custom AI systems apply intelligence trained on your data, your processes, and your domain — producing results that generic tools simply can't match.",
  stats: [{ value: "100%", label: "Custom to your use case" }, { value: "LLM-agnostic", label: "Best model for the job" }, { value: "90 days", label: "Avg delivery timeline" }],
  deliverables: [
    { title: "Retrieval-Augmented Generation (RAG)", body: "AI systems that answer questions using your specific knowledge base — documentation, product catalogs, policy documents — rather than generic training data." },
    { title: "Fine-Tuned Models", body: "LLMs fine-tuned on your specific data for tasks like tone-matching, industry classification, or response generation that needs to reflect your brand voice precisely." },
    { title: "AI Agents", body: "Multi-step AI agents that can make decisions, call APIs, and complete multi-step tasks autonomously — with guardrails that keep them within defined boundaries." },
    { title: "Vector Database Implementation", body: "Pinecone, Weaviate, or PostgreSQL pgvector implementation for semantic search and retrieval — the infrastructure that powers accurate AI responses on your data." },
  ],
  process: [
    { title: "Requirements & Design", body: "Use case definition, data audit, model selection, architecture design, and success criteria established before any development begins." },
    { title: "Build & Test", body: "System built in sprints with weekly progress demos. Tested against real data with precision and recall metrics measured against success criteria." },
    { title: "Deploy & Iterate", body: "Production deployment with monitoring dashboards. Post-launch iteration based on real usage data. Monthly review with model updates as needed." },
  ],
  faq: [
    { q: "How is a custom AI system different from using ChatGPT?", a: "ChatGPT answers based on its training data. A custom AI system answers using your specific knowledge base, your data, and your business logic — it knows your products, policies, and processes. The difference in accuracy is dramatic." },
    { q: "How much does a custom AI system cost?", a: "Project-based pricing starting at $12,000 for a focused RAG implementation. Complex multi-agent systems with fine-tuning range $25,000–$80,000+. We scope every project before committing to a number." },
  ],
  related: RELATED_AI,
  cta: "Generic AI gives generic results. Custom AI solves your actual problem.",
};

/* ── APP DEVELOPMENT ── */
const appDevData: SubServiceData = {
  parentLabel: "AI & Automation", parentHref: "/ai-chatbot-service",
  label: "App Development",
  headline: "Web apps and mobile apps built for scale —",
  italic: "and for real users.",
  subhead: "We build production-grade web applications and mobile apps for businesses that need custom software beyond what off-the-shelf tools can provide — client portals, booking systems, SaaS products, and internal tools built with modern tech stacks.",
  stats: [{ value: "iOS + Android", label: "+ Web applications" }, { value: "React Native", label: "Mobile stack" }, { value: "12–16 wks", label: "Avg delivery timeline" }],
  deliverables: [
    { title: "Web Applications (React/Next.js)", body: "Full-stack web applications built with React and Next.js on the frontend, Node.js or Python on the backend, and PostgreSQL or MongoDB for data storage." },
    { title: "Mobile Apps (React Native)", body: "Cross-platform iOS and Android applications built with React Native — one codebase, both platforms, 90% of native performance." },
    { title: "API Development", body: "RESTful and GraphQL API development for your application backend. API documentation, versioning, and rate limiting included." },
    { title: "Database Architecture", body: "Database schema design, indexing strategy, and query optimisation for production performance. We design for scale from the start." },
  ],
  process: [
    { title: "Scoping & Architecture", body: "Requirements documentation, technical architecture design, and project plan with milestones. Fixed-scope or sprint-based delivery based on project clarity." },
    { title: "Build (Sprints)", body: "2-week sprint cycles with working software demos at each sprint review. Continuous feedback loop with your team throughout development." },
    { title: "Deploy & Support", body: "Production deployment on AWS, GCP, or Vercel. CI/CD pipeline setup. 90-day post-launch support included in all project contracts." },
  ],
  faq: [
    { q: "What's the minimum budget for a custom app?", a: "A focused web application (client portal, booking system) starts at approximately $18,000. Full-featured SaaS products with mobile apps start at $45,000+. We provide fixed quotes after a scoping session." },
    { q: "Do you provide ongoing maintenance after launch?", a: "Yes — monthly maintenance retainers are available for bug fixes, dependency updates, and minor feature additions. We recommend all clients retain a maintenance agreement post-launch." },
  ],
  related: RELATED_AI,
  cta: "If your business needs software that doesn't exist yet, we build it.",
};

/* ── AI LEAD CAPTURE ── */
const aiLeadData: SubServiceData = {
  parentLabel: "AI & Automation", parentHref: "/ai-chatbot-service",
  label: "AI Lead Capture",
  headline: "Capture and qualify leads 24/7 —",
  italic: "without a human in the loop.",
  subhead: "An AI lead capture system engages every site visitor at the moment of highest intent, qualifies them with intelligent questions, books discovery calls directly into your calendar, and syncs everything to your CRM — all without a sales rep being available.",
  stats: [{ value: "24/7", label: "Lead engagement coverage" }, { value: "3x", label: "Avg lead volume increase" }, { value: "CRM", label: "Auto-sync included" }],
  deliverables: [
    { title: "Conversational Lead Qualification", body: "AI chatbot trained on your qualifying questions — budget, timeline, service type, location — that routes qualified leads to booking and unqualified leads to nurture sequences." },
    { title: "Calendar Integration & Booking", body: "Qualified leads booked directly into your calendar using Calendly, Cal.com, or HubSpot Meetings integration — no human coordination required." },
    { title: "CRM Auto-Sync", body: "Every lead captured, qualified, and automatically logged to your CRM with their responses, qualification score, and booking status. Zero manual data entry." },
    { title: "Lead Nurture Sequence", body: "Unqualified leads routed to an automated email nurture sequence. Leads that qualify later are flagged for sales follow-up automatically." },
  ],
  process: [
    { title: "Define & Train", body: "Qualification criteria defined, qualifying questions written, and AI model trained on your service descriptions, pricing, and common objections." },
    { title: "Build & Integrate", body: "Chatbot built and embedded. Calendar and CRM integrations configured and tested. Notification rules set for your sales team." },
    { title: "Launch & Optimise", body: "Live on your site with monitoring for the first 14 days. Conversation flow optimised based on real lead interactions. Monthly performance review." },
  ],
  faq: [
    { q: "Will an AI chatbot feel robotic to prospects?", a: "Not when built correctly. We train the AI on your brand voice and your specific service context — it reads as a knowledgeable assistant, not a generic bot. Most users don't realise they're talking to AI." },
    { q: "What happens to leads that book a call?", a: "They receive a confirmation email with the meeting details and a pre-meeting questionnaire. Their CRM record is created with all qualifying information. Your sales rep enters the call fully briefed." },
  ],
  related: RELATED_AI,
  cta: "Every unengaged site visitor who leaves is a lead you didn't capture.",
};

export function AIWorkflowPage() { return <SubServicePage data={workflowData} />; }
export function AIIntegrationPage() { return <SubServicePage data={integrationData} />; }
export function CustomAIPage() { return <SubServicePage data={customAiData} />; }
export function AppDevelopmentPage() { return <SubServicePage data={appDevData} />; }
export function AILeadCapturePage() { return <SubServicePage data={aiLeadData} />; }
