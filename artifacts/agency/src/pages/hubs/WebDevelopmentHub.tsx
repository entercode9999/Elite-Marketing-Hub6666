import { Code2, Zap, Globe, Database, Layers, RefreshCw, Shield, BarChart2, Settings } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-gray-100 px-4 py-3 flex items-center gap-2">
        {["#ff5f57", "#febc2e", "#28c840"].map((c) => (
          <div key={c} className="w-3 h-3 rounded-full" style={{ background: c }} />
        ))}
        <div className="flex-1 bg-white rounded text-xs text-gray-400 px-3 py-1 ml-2">app.outlier.ca</div>
      </div>
      <div className="bg-[#0a0c12] p-4">
        <div className="bg-white/5 rounded-xl p-3 mb-3 border border-white/8">
          <p className="text-[9px] text-white/30 uppercase tracking-widest mb-2">Tech Stack</p>
          <div className="flex flex-wrap gap-1.5">
            {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Redis"].map((t) => (
              <span key={t} className="text-[9px] font-bold text-primary border border-primary/30 px-2 py-0.5 rounded bg-primary/10">{t}</span>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[{ v: "< 1s", l: "TTFB" }, { v: "99.9%", l: "Uptime" }, { v: "A+", l: "Security" }].map((s) => (
            <div key={s.l} className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
              <p className="text-sm font-black text-primary">{s.v}</p>
              <p className="text-[8px] text-white/30 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100">
      <p className="text-[10px] text-gray-400">Uptime SLA</p>
      <p className="text-2xl font-black text-[#22c55e]">99.9%</p>
    </div>
    <div className="absolute -top-4 -left-4 bg-[#0a0c12] rounded-xl px-3 py-2.5 shadow-xl border border-white/10">
      <p className="text-[9px] text-white/30">Stack</p>
      <p className="text-lg font-black text-white">React</p>
    </div>
  </div>
);

const webDevData: HubData = {
  slug: "website-development-service",
  label: "WEBSITE DEVELOPMENT",
  breadcrumb: "Website Development",
  hero: {
    headline: "Website Development Built for Performance and Scale.",
    italic: "Clean code. No technical debt.",
    description:
      "Custom website and web application development using modern technology stacks. From React and Next.js frontend builds to Node.js APIs and PostgreSQL backends — we build fast, secure, scalable systems your team can maintain and your business can grow on.",
    cta: "Get a Free Technical Consultation",
    ctaHref: "/contact",
    badges: ["React / Next.js", "Node.js", "TypeScript", "10+ Years"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "< 1s", label: "Avg. TTFB on delivery" },
    { value: "99.9%", label: "Infrastructure uptime SLA" },
    { value: "150+", label: "Web apps delivered" },
    { value: "A+", label: "Avg. security rating" },
  ],
  intro: {
    eyebrow: "Modern web development",
    headline: "The difference between a website and a web system is the foundation it's built on.",
    body: "Most web development projects fail not because the initial build is bad, but because the foundation can't support what the business needs in year two. We build on technology stacks that scale — React, Next.js, TypeScript, Node.js — with architecture decisions made for maintainability, not just delivery speed.",
    secondBody: "We've taken over codebases where the original developer made every short-term convenience choice available — hardcoded values, no TypeScript, no tests, a single massive file — and the cost to add a single feature is three weeks of archaeological work. We build differently: documented, typed, modular systems that your next developer can onboard to in hours, not months.",
    bullets: [
      "React and Next.js for performant, SEO-friendly frontend builds",
      "TypeScript throughout — no runtime type errors in production",
      "Node.js APIs with proper authentication, rate limiting, and error handling",
      "PostgreSQL databases with proper schema design and migration history",
      "CI/CD pipelines from day one — no manual deployments",
    ],
  },
  proofSection: {
    eyebrow: "Why architecture decisions made in week one matter in year two",
    headline: "Technical debt is not a metaphor. It compounds like financial debt, and the interest rate accelerates.",
    body: "A website built with the wrong foundation costs 2-3x more to maintain in year two than it cost to build in year one. Every feature request becomes a negotiation with the existing architecture. Every update risks breaking something else. We've rebuilt websites for businesses that paid $80,000 for a site they couldn't update without $5,000 change requests — because the foundation was wrong.",
    secondBody: "Our development process starts with an architecture review that identifies the decisions that will matter most in two years. Stack selection, data modelling, authentication, deployment infrastructure, monitoring — these are made deliberately, documented, and shared with your team before we write a line of application code. The result is a system that costs less to operate over time, not more.",
    bullets: [
      "Every project begins with an architecture document — stack decisions, data models, API design, and infrastructure choices — reviewed and approved before development starts.",
      "TypeScript is non-negotiable on every project. Runtime type errors in production are preventable. We prevent them at the compiler level.",
      "All APIs are designed with authentication, rate limiting, input validation, and error handling from day one — not added reactively after a security incident.",
      "Database schemas are versioned with migration files from the first commit. No undocumented schema changes, no manual database alterations in production.",
      "CI/CD pipelines are set up before the first feature is deployed. Code goes through automated tests and linting before it reaches production every single time.",
      "Comprehensive handover documentation — architecture overview, environment setup guide, deployment process, and data model documentation — is delivered at launch.",
    ],
  },
  subServices: [
    {
      tab: "React / Next.js Development",
      headline: "Modern frontend development with full SEO and performance.",
      description: "React and Next.js applications built with TypeScript, proper component architecture, and server-side rendering where it matters for SEO. Whether it's a content site, a customer portal, or a data-heavy dashboard — performant, maintainable, and properly typed.",
      bullets: ["React 18 with server components", "Next.js App Router + SSR/SSG", "TypeScript throughout", "Accessibility (WCAG 2.1 AA)"],
      image: "/case-study-saas.png",
      href: "/website-development-service",
    },
    {
      tab: "Node.js API Development",
      headline: "Scalable backend APIs built for real-world load.",
      description: "Node.js REST and GraphQL APIs with proper authentication (JWT, OAuth), rate limiting, input validation, and error handling. Built to handle production traffic from day one — not refactored after the first outage.",
      bullets: ["REST and GraphQL API design", "JWT / OAuth 2.0 authentication", "Rate limiting and input validation", "Comprehensive API documentation"],
      image: "/case-study-saas.png",
      href: "/website-development-service",
    },
    {
      tab: "Database Design",
      headline: "Data architecture that supports your business logic.",
      description: "PostgreSQL database design with proper normalisation, indexing strategy, and query optimisation. Schema design that reflects your actual business domain — not a generic template adapted poorly to your needs.",
      bullets: ["PostgreSQL schema design", "Migration-based version control", "Query performance optimisation", "Backup and disaster recovery"],
      image: "/case-study-saas.png",
      href: "/website-development-service",
    },
    {
      tab: "Web Application Development",
      headline: "Full-stack web applications built to scale.",
      description: "Complete full-stack application development: React frontend, Node.js backend, PostgreSQL database, authentication, file storage, and third-party integrations. Customer portals, internal tools, booking systems, and SaaS products.",
      bullets: ["Full-stack React + Node.js builds", "Authentication and user management", "Third-party API integrations", "Real-time features (WebSockets)"],
      image: "/case-study-saas.png",
      href: "/website-development-service",
    },
    {
      tab: "Infrastructure & DevOps",
      headline: "Cloud infrastructure built for reliability and scale.",
      description: "AWS, GCP, and Vercel infrastructure setup with proper CI/CD pipelines, monitoring, logging, and alerting. Containerised with Docker, deployed with GitHub Actions. 99.9% uptime SLAs on the infrastructure we manage.",
      bullets: ["AWS / GCP / Vercel setup", "Docker containerisation", "CI/CD with GitHub Actions", "Monitoring and alerting (Datadog/Sentry)"],
      image: "/case-study-saas.png",
      href: "/website-development-service",
    },
  ],
  features: [
    { icon: <Code2 className="w-5 h-5 text-primary" />, title: "React / Next.js", body: "Modern frontend development with TypeScript, server components, and full SEO optimisation built in from day one." },
    { icon: <Database className="w-5 h-5 text-primary" />, title: "Database Architecture", body: "PostgreSQL schema design with proper normalisation, indexing, and migration-based version control from the first commit." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Performance Engineering", body: "Sub-1s TTFB, Core Web Vitals green across every template, CDN configuration, and image optimisation baked in." },
    { icon: <Shield className="w-5 h-5 text-primary" />, title: "Security First", body: "Authentication, rate limiting, input validation, CSRF protection, and security headers configured on every project." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "API Development", body: "REST and GraphQL APIs designed for real-world load — with authentication, rate limiting, and comprehensive documentation." },
    { icon: <Layers className="w-5 h-5 text-primary" />, title: "Full-Stack Applications", body: "Complete web application development: frontend, backend, database, auth, file storage, and third-party integrations." },
    { icon: <RefreshCw className="w-5 h-5 text-primary" />, title: "CI/CD Pipelines", body: "Automated deployment pipelines from day one. Code goes through tests and linting before it reaches production every time." },
    { icon: <Settings className="w-5 h-5 text-primary" />, title: "Infrastructure & DevOps", body: "Cloud infrastructure on AWS, GCP, or Vercel with monitoring, alerting, and 99.9% uptime SLAs." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "Analytics & Monitoring", body: "GA4, Sentry error tracking, Datadog APM, and custom dashboards. You always know what your application is doing." },
  ],
  techStack: [
    { platform: "React / Next.js", stat: "Frontend", description: "Our primary frontend stack for all web development. Next.js App Router with TypeScript, server components, and full SEO configuration. The right tool for content sites, web apps, and everything in between." },
    { platform: "Node.js / Express", stat: "Backend", description: "Node.js with Express or Fastify for API development. TypeScript throughout, proper middleware stack (auth, rate limiting, validation), and structured error handling." },
    { platform: "PostgreSQL", stat: "Database", description: "Our default relational database for structured business data. Proper schema design, Prisma ORM for type-safe queries, and migration-based schema versioning from project start." },
    { platform: "Vercel / AWS", stat: "Hosting", description: "Vercel for Next.js deployments (automatic preview environments on every PR), AWS for more complex infrastructure requirements. Both configured with proper CDN, caching, and monitoring." },
    { platform: "GitHub Actions", stat: "CI/CD", description: "Automated CI/CD pipelines running tests, TypeScript compilation, and linting on every pull request before merge. Production deployments are always automated, never manual." },
    { platform: "Sentry / Datadog", stat: "Observability", description: "Sentry for frontend and backend error tracking, Datadog for APM and infrastructure monitoring. You have full visibility into your application's health from day one." },
  ],
  caseStudies: [
    { image: "/case-study-saas.png", client: "Nova FinTech", industry: "SaaS", blurb: "Full-stack Next.js application with Node.js API and PostgreSQL. Customer portal built for 10,000+ concurrent users with 99.9% uptime over 18 months.", metrics: [{ value: "99.9%", label: "Uptime" }, { value: "< 800ms", label: "API response time" }] },
    { image: "/case-study-home.png", client: "Hudson Outdoor", industry: "Home Services", blurb: "Custom booking and quote management web application. Replaced a manual quoting process — estimate time dropped from 3 days to 15 minutes.", metrics: [{ value: "15 min", label: "Quote time (was 3 days)" }, { value: "+45%", label: "Quote acceptance" }] },
    { image: "/case-study-realestate.png", client: "Prime Realty Group", industry: "Real Estate", blurb: "Custom property listing platform built with Next.js and a PostgreSQL database. 2,400+ property pages with dynamic rendering and real-time availability.", metrics: [{ value: "2,400+", label: "Property pages" }, { value: "+88%", label: "Organic traffic" }] },
  ],
  process: [
    { label: "Discovery", headline: "Understand your requirements before designing a solution.", description: "We run a structured discovery session to map your exact requirements — user flows, data models, integration points, and performance expectations. The output is a technical specification document that becomes the contract for the build." },
    { label: "Architecture", headline: "Design the system architecture before writing application code.", description: "Stack selection, database schema design, API design, authentication model, and infrastructure planning — all documented and reviewed before we write a line of application code. Architecture decisions made here determine your maintenance costs for years." },
    { label: "Development", headline: "Iterative development with staging deployments and weekly reviews.", description: "Two-week sprints with working software deployed to staging at the end of each sprint. Every feature is reviewed before the next sprint begins. TypeScript, tests, and code review throughout." },
    { label: "Testing", headline: "Automated testing and security review before production.", description: "Unit tests for business logic, integration tests for API endpoints, and end-to-end tests for critical user flows. Security review covering authentication, input validation, and dependency audit before production deployment." },
    { label: "Launch", headline: "Zero-downtime deployment with full monitoring in place.", description: "Production deployment with database migrations, environment configuration, CDN setup, monitoring, and alerting all configured before go-live. Load testing to verify performance under expected traffic before public launch." },
    { label: "Support", headline: "Ongoing support and feature development post-launch.", description: "Dedicated support plan with SLAs for bug fixes and security patches. We're available for ongoing feature development and scaling work — with full context of the system we built." },
  ],
  faqs: [
    { question: "What technology stack do you use?", answer: "Our primary stack is React/Next.js (TypeScript) for frontend, Node.js with Express for APIs, and PostgreSQL for databases — deployed on Vercel or AWS. We use this stack because it scales well, has excellent developer tooling, and produces maintainable codebases. For specific project requirements, we'll use the right tool — we're not dogmatic about stack choices." },
    { question: "How long does a custom web development project take?", answer: "A standard content website or simple web app takes 6-10 weeks. Complex web applications with custom authentication, integrations, and data-heavy features run 12-20 weeks. We give you a firm timeline and weekly sprint plan after the discovery and architecture phase." },
    { question: "Do you write tests?", answer: "Yes. Unit tests for business logic, integration tests for API endpoints, and end-to-end tests for critical user flows are part of the standard development process — not an optional add-on. Code coverage reports are included in sprint deliverables." },
    { question: "What documentation do you provide?", answer: "Architecture overview, API documentation (OpenAPI/Swagger spec), database schema documentation, environment setup guide, and deployment process documentation — all delivered at launch. Your next developer should be able to onboard in a single day." },
    { question: "Can you take over an existing codebase?", answer: "Yes. We run a codebase audit first — architecture review, dependency audit, test coverage, and security scan — and give you an honest assessment of what it will take to bring the codebase to a maintainable state. We've inherited everything from legacy PHP to abandoned React projects." },
  ],
  hubInsights: [
    { image: "/case-study-saas.png", category: "Web Development", readTime: "8 min read", title: "Why We Use Next.js for Every New Web Project in 2026", excerpt: "The App Router, server components, and built-in optimisation make Next.js the clear choice for web development in 2026. We lay out the architecture decisions, performance benefits, and the scenarios where you might still choose something else.", author: "James Okafor", authorRole: "Lead Developer", href: "/blog/nextjs-2026" },
    { image: "/case-study-home.png", category: "Architecture", readTime: "6 min read", title: "The Architecture Decision Checklist We Run Before Every Build", excerpt: "Stack selection, data modelling, authentication design, and infrastructure choices — made well, they compound in your favour for years. Made poorly, they create compounding technical debt. Here is the complete decision framework we work through at the start of every project.", author: "Marcus Chen", authorRole: "Engineering Lead", href: "/blog/architecture-decision-checklist" },
    { image: "/case-study-realestate.png", category: "Performance", readTime: "5 min read", title: "How to Achieve Sub-Second TTFB on Every Page of Your Web Application", excerpt: "Time to First Byte is the foundational performance metric that determines how fast your site feels — and how well it ranks. We walk through the complete optimisation stack: server response time, edge caching, CDN configuration, and database query optimisation.", author: "Priya Anand", authorRole: "Performance Engineer", href: "/blog/sub-second-ttfb" },
  ],
};

export default function WebDevelopmentHub() {
  return <ServiceHubPage data={webDevData} />;
}
