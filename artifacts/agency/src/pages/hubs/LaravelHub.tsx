import { Code2, Zap, Shield, Database, Globe, Settings, RefreshCw, BarChart2, Layers } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-[#ff2d20] px-4 py-3 flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
          <span className="text-white font-black text-sm">L</span>
        </div>
        <div>
          <p className="text-white font-bold text-xs">Laravel Application</p>
          <p className="text-white/60 text-[9px]">Eloquent · Queues · APIs</p>
        </div>
      </div>
      <div className="bg-[#0a0c12] p-4">
        <div className="bg-white/5 rounded-xl p-3 mb-3 border border-white/8">
          <p className="text-[9px] text-primary font-bold mb-1">routes/api.php</p>
          {["Route::middleware('auth:sanctum')", "  ->group(function () {", "    Route::apiResource('users', ...);", "    Route::post('orders', ...);", "  });"].map((l) => (
            <p key={l} className="text-[8px] text-white/40 font-mono">{l}</p>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[{ v: "< 50ms", l: "API response" }, { v: "99.9%", l: "Uptime" }, { v: "typed", l: "PHP 8.2" }].map((s) => (
            <div key={s.l} className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
              <p className="text-sm font-black text-primary">{s.v}</p>
              <p className="text-[8px] text-white/30 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100">
      <p className="text-[10px] text-gray-400">API response</p>
      <p className="text-2xl font-black text-[#ff2d20]">&lt;50ms</p>
    </div>
    <div className="absolute -top-4 -left-4 bg-[#ff2d20] rounded-xl px-3 py-2.5 shadow-xl">
      <p className="text-white font-black text-xs">Laravel</p>
    </div>
  </div>
);

const laravelData: HubData = {
  slug: "laravel-web-development",
  label: "LARAVEL WEB DEVELOPMENT",
  breadcrumb: "Laravel Development",
  hero: {
    headline: "Laravel Development for Complex Web Applications and APIs.",
    italic: "Eloquent. Testable. Maintainable.",
    description:
      "Custom Laravel application development — REST APIs, web applications, SaaS platforms, queue-based systems, and third-party integrations. We build on Laravel's full feature set: Eloquent ORM, queues, events, broadcasting, and Sanctum/Passport authentication — with PHPUnit test coverage from day one.",
    cta: "Get a Free Laravel Consultation",
    ctaHref: "/contact",
    badges: ["Laravel 11", "REST API Expert", "PHPUnit Tested", "10+ Years PHP"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "< 50ms", label: "Avg. API response time" },
    { value: "99.9%", label: "Uptime on managed applications" },
    { value: "40+", label: "Laravel applications built" },
    { value: "100%", label: "Business logic unit tested" },
  ],
  intro: {
    eyebrow: "Why Laravel for PHP web development",
    headline: "Laravel is the PHP framework that makes maintainable, testable code the path of least resistance — not the exception.",
    body: "Laravel's developer experience is unmatched in the PHP ecosystem: Eloquent ORM for intuitive database interactions, Artisan CLI for code generation, built-in queue system for background processing, real-time events via Broadcasting, and a first-class testing framework. The result is PHP applications that are faster to build and dramatically easier to maintain than equivalent raw PHP or older framework applications.",
    secondBody: "We've taken over Laravel applications written by developers who used the framework but ignored its conventions — controllers with hundreds of lines of business logic, no tests, direct database queries bypassing Eloquent, and no service layer. We've rebuilt the same applications correctly in half the time and delivered codebases that new developers can onboard to in a day. The difference is architectural discipline, not framework choice.",
    bullets: [
      "Laravel 11 with PHP 8.2 — modern typed PHP with strict mode throughout",
      "Service layer architecture: controllers are thin, business logic lives in services and actions",
      "Eloquent models with proper relationships, scopes, and mutators — no raw SQL in application code",
      "Queue-based background processing for emails, notifications, and heavy operations",
      "PHPUnit feature and unit tests from day one — CI runs tests on every pull request",
    ],
  },
  proofSection: {
    eyebrow: "What correct Laravel architecture delivers",
    headline: "A Laravel application built with a service layer, proper Eloquent usage, and full test coverage costs 60-70% less to maintain than one built without these patterns.",
    body: "The temptation in Laravel development is to put everything in controllers — it works, it's quick, and the framework doesn't stop you. The problem is that fat controllers are untestable, difficult to understand, and expensive to change. Adding a feature in week one takes 2 hours. Adding the same feature in month six takes 2 days because the developer has to understand 400 lines of mixed business logic before changing any of it.",
    secondBody: "Our Laravel architecture uses a clear separation: controllers handle HTTP concerns only, a service layer handles business logic, repository pattern for data access where appropriate, and actions for discrete business operations. Every service is tested with PHPUnit. Every developer who onboards to the codebase after us can understand what a controller action does in 10 lines — because those 10 lines delegate to named, tested services.",
    bullets: [
      "Service layer pattern: every controller action delegates to a named service class. The controller handles request validation and response formatting — nothing else.",
      "Action classes for discrete business operations (CreateOrder, ChargePayment, SendWelcomeEmail) — single-responsibility, individually testable, easy to sequence.",
      "Eloquent models with typed relationships, query scopes for reusable filtering logic, and mutators for attribute transformation — no raw SQL except where query complexity demands it.",
      "Laravel Queues for every operation that doesn't need to be synchronous — emails, notifications, third-party API calls, report generation — keeping response times fast.",
      "Sanctum for SPA authentication, Passport for OAuth2 API authorization — correct authentication architecture for every API client type.",
      "Feature tests for every API endpoint and unit tests for every service class — CI blocks merge if tests fail. Production deployments never have less test coverage than staging.",
    ],
  },
  subServices: [
    {
      tab: "REST API Development",
      headline: "Scalable Laravel REST APIs with full authentication and documentation.",
      description: "Laravel REST API development with proper authentication (Sanctum or Passport), rate limiting, input validation, error handling, and OpenAPI documentation. Built for production load from day one — not refactored after the first outage.",
      bullets: ["Sanctum / Passport authentication", "Rate limiting and throttling", "OpenAPI / Swagger documentation", "Comprehensive error handling"],
      image: "/hero-abstract.png",
      href: "/laravel-web-development",
    },
    {
      tab: "Web Application Development",
      headline: "Full-stack Laravel web applications with Livewire or Inertia.js.",
      description: "Full-stack Laravel web applications using Livewire for server-driven reactivity or Inertia.js with React/Vue for a modern SPA experience. Authentication, authorisation, file uploads, and third-party integrations all handled.",
      bullets: ["Livewire or Inertia.js + React", "Authentication and authorization", "File upload and media handling", "Third-party API integration"],
      image: "/case-study-home.png",
      href: "/laravel-web-development",
    },
    {
      tab: "SaaS Development",
      headline: "Multi-tenant SaaS platforms on Laravel.",
      description: "Multi-tenant SaaS application development on Laravel — tenant isolation (separate databases or shared with tenant_id scoping), subscription billing via Stripe and Cashier, feature flags, and usage metering. Built to scale from 10 to 10,000 tenants.",
      bullets: ["Multi-tenancy architecture", "Stripe Cashier subscription billing", "Feature flags and metering", "Tenant onboarding automation"],
      image: "/case-study-realestate.png",
      href: "/laravel-web-development",
    },
    {
      tab: "Queue & Background Processing",
      headline: "Laravel queue systems for reliable background processing.",
      description: "Laravel Horizon and queue worker configuration for background job processing — email sending, report generation, third-party API calls, webhook processing, and scheduled tasks. Reliable, monitored, and scalable background processing.",
      bullets: ["Laravel Horizon configuration", "Queue worker deployment", "Failed job monitoring", "Scheduled task management"],
      image: "/work-1.png",
      href: "/laravel-web-development",
    },
    {
      tab: "Laravel Maintenance",
      headline: "Ongoing Laravel application maintenance and support.",
      description: "Laravel application maintenance — framework and package updates tested in staging, security patch application, performance monitoring, bug fixes, and developer support. Keeps your application on a supported Laravel version with current security patches.",
      bullets: ["Framework version updates", "Package security patches", "Performance monitoring", "Bug fix SLA support"],
      image: "/industry-realestate.png",
      href: "/laravel-web-development",
    },
  ],
  features: [
    { icon: <Code2 className="w-5 h-5 text-primary" />, title: "Service Layer Architecture", body: "Thin controllers, service classes for business logic, and action classes for discrete operations. Maintainable, testable, and easy to onboard." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "REST API Development", body: "Production-ready APIs with Sanctum/Passport auth, rate limiting, input validation, and OpenAPI documentation." },
    { icon: <Database className="w-5 h-5 text-primary" />, title: "Eloquent ORM", body: "Typed Eloquent models with proper relationships, query scopes, and mutators. No raw SQL in application code." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Queue System", body: "Laravel Horizon for job queue management — background processing keeps response times fast and operations reliable." },
    { icon: <Layers className="w-5 h-5 text-primary" />, title: "SaaS Development", body: "Multi-tenant SaaS platforms with tenant isolation, Stripe Cashier billing, and feature flag infrastructure." },
    { icon: <Shield className="w-5 h-5 text-primary" />, title: "Security First", body: "Sanctum/Passport auth, CSRF protection, input validation, rate limiting, and regular Laravel security patches applied." },
    { icon: <Settings className="w-5 h-5 text-primary" />, title: "Livewire / Inertia.js", body: "Server-driven reactivity with Livewire, or modern SPA experience with Inertia.js + React — built for your team's skill set." },
    { icon: <RefreshCw className="w-5 h-5 text-primary" />, title: "CI/CD Pipeline", body: "GitHub Actions CI running tests, code style enforcement, and static analysis on every pull request. Automated deployments to staging and production." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "PHPUnit Test Coverage", body: "Feature tests for every API endpoint and unit tests for every service class. Business logic is always covered before it reaches production." },
  ],
  techStack: [
    { platform: "Laravel 11 / PHP 8.2", stat: "Framework", description: "Current Laravel LTS release with PHP 8.2 strict typing throughout. All development follows Laravel conventions — Eloquent, queues, events, and Artisan commands." },
    { platform: "Laravel Sanctum / Passport", stat: "Authentication", description: "Sanctum for SPA and mobile app authentication (lightweight token-based), Passport for full OAuth2 server capability for third-party API integrations." },
    { platform: "Laravel Horizon", stat: "Queue management", description: "Horizon provides a beautiful dashboard for monitoring Laravel queue workers — job throughput, failed jobs, and queue size monitoring at a glance." },
    { platform: "MySQL / PostgreSQL", stat: "Database", description: "MySQL for most applications, PostgreSQL for applications requiring JSON queries, full-text search, or specific PostgreSQL features. Eloquent migrations for schema version control." },
    { platform: "Laravel Forge / Envoyer", stat: "Deployment", description: "Forge for server provisioning and management (Nginx, PHP-FPM, queue workers, SSL), Envoyer for zero-downtime deployments with health checks before traffic is switched." },
    { platform: "PHPUnit / Pest", stat: "Testing", description: "PHPUnit for traditional test structure, Pest PHP as a modern alternative with more expressive syntax. Both produce the same reliable test coverage; choice depends on team preference." },
  ],
  caseStudies: [
    { image: "/case-study-saas.png", client: "Nova FinTech", industry: "SaaS", blurb: "Multi-tenant SaaS platform for financial reporting. Laravel with separate database tenancy, Stripe Cashier billing, and a React frontend via Inertia.js. Scaled to 800 tenants in year one.", metrics: [{ value: "800", label: "Tenants year one" }, { value: "< 50ms", label: "API response time" }] },
    { image: "/case-study-home.png", client: "Hudson Outdoor", industry: "Home Services", blurb: "Quote and job management web application replacing a manual process. Laravel API + React frontend. Quote generation time from 3 days to 15 minutes. 99.9% uptime over 18 months.", metrics: [{ value: "15 min", label: "Quote time (was 3 days)" }, { value: "99.9%", label: "Uptime" }] },
    { image: "/case-study-realestate.png", client: "Prime Realty Group", industry: "Real Estate", blurb: "Property management CRM built on Laravel. Custom workflows, automated document generation, and integration with a third-party valuation API. 2,400+ properties managed.", metrics: [{ value: "2,400+", label: "Properties managed" }, { value: "+60%", label: "Agent productivity" }] },
  ],
  process: [
    { label: "Spec", headline: "Requirements analysis and API design before coding.", description: "User story mapping, data model design, API endpoint specification, and service layer architecture. A technical specification document reviewed and approved before development begins." },
    { label: "Architecture", headline: "Service layer and database architecture design.", description: "Controller structure, service class design, Eloquent model relationships, queue job design, and database schema — documented and reviewed before implementation." },
    { label: "Develop", headline: "TDD: tests written alongside business logic.", description: "PHPUnit tests written alongside service and model development. Feature tests for API endpoints, unit tests for service classes. CI enforces test passage before merge." },
    { label: "Review", headline: "Code review for Laravel conventions and architecture compliance.", description: "Every pull request reviewed against Laravel best practices — service layer usage, Eloquent patterns, authentication, and input validation coverage." },
    { label: "Stage", headline: "Staging deployment with full test suite run.", description: "Complete application deployment to staging with production-equivalent data, full test suite run, and manual QA before production deployment sign-off." },
    { label: "Deploy", headline: "Zero-downtime production deployment with Envoyer.", description: "Envoyer zero-downtime deployments — new release deployed alongside the running application, health checks passed, then traffic switched. No downtime windows." },
  ],
  faqs: [
    { question: "Why Laravel over other PHP frameworks?", answer: "Laravel has the most complete standard library of any PHP framework — built-in queue system, scheduled tasks, event broadcasting, file storage, mail, notifications, and testing utilities — all with a consistent, well-documented API. The alternative is assembling the same capabilities from separate packages in Symfony or bare PHP. Laravel's conventions also produce more consistent codebases across different developers, which matters significantly for long-term maintenance." },
    { question: "Laravel or Node.js — which should I choose?", answer: "Laravel is the better choice when: your team has PHP expertise, you need a batteries-included framework with rapid development capability, or the application has complex business logic that benefits from PHP's mature OOP ecosystem. Node.js is better for real-time applications requiring high concurrency, or when your team is stronger in JavaScript. Both are production-proven — we build on both." },
    { question: "Do you write tests for Laravel projects?", answer: "Yes, from day one. PHPUnit feature tests cover every API endpoint — request/response validation, authentication requirements, and error handling. Unit tests cover every service class with business logic. CI runs the full test suite on every pull request and blocks merge if any test fails. Test coverage reports are included in every sprint deliverable." },
    { question: "Can you take over a legacy Laravel project?", answer: "Yes. We run a codebase audit first — architecture review (fat controllers, missing service layer, untested code), security review (authentication, input validation, dependency audit), and technical debt quantification. We produce an honest assessment of what it will take to bring the codebase to a maintainable state, and you decide how much of that remediation to fund." },
    { question: "What ongoing support do you provide?", answer: "Post-launch support plans covering Laravel framework and package updates (tested in staging first), security patch application, performance monitoring, and developer support with SLA-backed response times. Laravel releases are on a predictable schedule — we keep clients on supported versions." },
  ],
  hubInsights: [
    { image: "/hero-abstract.png", category: "Laravel Architecture", readTime: "7 min read", title: "The Laravel Service Layer Pattern: Why Fat Controllers Are Killing Your Codebase", excerpt: "Fat controllers are the most common Laravel anti-pattern — and the most expensive to fix later. We explain the service layer pattern, action classes, and how to structure Laravel applications that remain maintainable at 12 and 24 months post-launch, with code examples from real projects.", href: "/blog/laravel-service-layer-pattern" },
    { image: "/case-study-home.png", category: "Laravel Testing", readTime: "6 min read", title: "How We Test Laravel Applications: Feature Tests, Unit Tests, and CI/CD", excerpt: "A Laravel application without tests is a liability — every change carries unknown risk of regression. We share our testing strategy: feature tests for API endpoints, unit tests for service classes, and the GitHub Actions CI setup that enforces test passage before any code reaches staging.", href: "/blog/laravel-testing-strategy" },
    { image: "/case-study-realestate.png", category: "Laravel SaaS", readTime: "8 min read", title: "Building Multi-Tenant SaaS on Laravel: Separate Databases vs. Shared Schema", excerpt: "Multi-tenancy architecture is one of the most important decisions in SaaS development — separate database per tenant provides the strongest isolation, shared schema with tenant_id is simpler and cheaper. We cover the trade-offs, implementation patterns, and the scenarios where each approach is correct.", href: "/blog/laravel-multi-tenant-saas" },
  ],
};

export default function LaravelHub() {
  return <ServiceHubPage data={laravelData} />;
}
