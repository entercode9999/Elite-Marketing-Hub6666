import { Code2, Zap, Database, Globe, Settings, Shield, RefreshCw, BarChart2, Layers } from "lucide-react";
import { ServiceHubPage, type HubData } from "@/pages/ServiceHubPage";

const HeroVisual = () => (
  <div className="relative">
    <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-200">
      <div className="bg-[#f26322] px-4 py-3 flex items-center gap-2.5">
        <Code2 className="w-4 h-4 text-white" />
        <div>
          <p className="text-white font-bold text-xs">Magento 2 Development</p>
          <p className="text-white/60 text-[9px]">Custom Modules · Clean Architecture</p>
        </div>
      </div>
      <div className="bg-[#0a0c12] p-4">
        <div className="bg-white/5 rounded-xl p-3 mb-3 border border-white/8">
          <p className="text-[9px] text-white/30 uppercase tracking-widest mb-2">Custom Extension · Module Architecture</p>
          {["app/code/Outlier/CustomModule/", "├── Block/", "├── Controller/", "├── Model/", "└── registration.php"].map((f, i) => (
            <div key={f} className="flex items-center gap-2 py-0.5">
              <span className={`text-[9px] ${i === 0 ? "text-primary font-bold" : "text-white/40"}`}>{f}</span>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">
          {[{ v: "100%", l: "Unit tested" }, { v: "Zero", l: "Core edits" }, { v: "DI", l: "Architecture" }].map((s) => (
            <div key={s.l} className="bg-white/5 rounded-lg p-2 text-center border border-white/5">
              <p className="text-sm font-black text-primary">{s.v}</p>
              <p className="text-[8px] text-white/30 mt-0.5">{s.l}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <div className="absolute -bottom-4 -right-4 bg-white rounded-xl px-4 py-3 shadow-xl border border-gray-100">
      <p className="text-[10px] text-gray-400">Core edits</p>
      <p className="text-2xl font-black text-[#22c55e]">Zero</p>
    </div>
    <div className="absolute -top-4 -left-4 bg-[#f26322] rounded-xl px-3 py-2.5 shadow-xl">
      <p className="text-white font-black text-xs">Magento 2</p>
    </div>
  </div>
);

const magento2DevData: HubData = {
  slug: "magento-2-development",
  label: "MAGENTO 2 DEVELOPMENT",
  breadcrumb: "Magento 2 Development",
  hero: {
    headline: "Magento 2 Development Built to Magento Standards. Not Around Them.",
    italic: "Custom modules. Zero core edits.",
    description:
      "Custom Magento 2 development — extension development, theme builds, third-party integrations, B2B configuration, and performance tuning. Everything built to Magento's dependency injection architecture with unit test coverage and documentation. No core file modifications — ever.",
    cta: "Get a Free Magento 2 Consultation",
    ctaHref: "/contact",
    badges: ["Magento 2 Certified", "Clean Architecture", "Unit Tested", "10+ Years"],
    visual: <HeroVisual />,
  },
  stats: [
    { value: "Zero", label: "Core file modifications on any project" },
    { value: "100%", label: "Unit test coverage on business logic" },
    { value: "50+", label: "Magento 2 projects delivered" },
    { value: "10+", label: "Years Magento experience" },
  ],
  intro: {
    eyebrow: "Why architecture matters in Magento 2",
    headline: "A Magento 2 module written incorrectly breaks on every platform update. A module written correctly runs for years without intervention.",
    body: "Magento 2 provides a sophisticated extension architecture built on dependency injection, service contracts, and observer patterns. These exist specifically to allow custom functionality to be added and maintained without modifying core files. When developers bypass this architecture — editing core files, using object manager directly, or building modules that depend on internal implementation details — the result is a codebase that breaks on every Magento security patch.",
    secondBody: "We build every custom Magento 2 module to the platform's coding standards: dependency injection, service contract interfaces, event observers, plugins, and UI component architecture. The result is custom functionality that survives Magento upgrades, security patches, and other module updates without conflict. We've inherited enough broken Magento codebases to know precisely what correct architecture prevents.",
    bullets: [
      "Every module uses dependency injection — no ObjectManager calls in business logic",
      "Service contracts for all inter-module communication — decoupled and testable",
      "Unit tests for all business logic — before the PR is reviewed, not after launch",
      "Plugin and observer architecture for core behavior modification — zero core edits",
      "Full Composer package management — every dependency declared, versioned, and auditable",
    ],
  },
  proofSection: {
    eyebrow: "What correct Magento 2 architecture costs you in the short term and saves in the long term",
    headline: "Correct Magento 2 architecture takes 20-30% more development time upfront. It saves 200-400% in ongoing maintenance costs.",
    body: "The temptation in Magento 2 development is to take shortcuts: edit the core file instead of writing a plugin, use ObjectManager instead of dependency injection, skip unit tests because they take time. Each shortcut delivers faster in week one and compounds into maintenance debt that costs 5-10x more to address later — especially when the next Magento security patch breaks the hacked core file.",
    secondBody: "We enforce correct architecture on every project because we also maintain what we build. Inherited Magento codebases built by developers who took shortcuts are 3-4x more expensive to maintain than ones built correctly. That cost hits you — in developer time, in failed security patches, in broken functionality after updates. We build correctly because it's right for your business, not because it's right in principle.",
    bullets: [
      "Dependency injection containers are declared in di.xml — every dependency is explicit, swappable, and testable. No hidden ObjectManager calls that can't be mocked in tests.",
      "Plugin (interceptor) architecture allows modifying core method behavior before, after, or around — without touching core files and without breaking when core is updated.",
      "Service contracts define the public API between modules via PHP interfaces — changes to internal implementation don't break integrations built against the contract.",
      "UI components for all admin grid and form interfaces — Magento's standard approach that works with all core features and doesn't require custom JavaScript overrides.",
      "PHPUnit test suite with integration tests for database interactions and unit tests for business logic — CI runs on every pull request before any code reaches staging.",
      "Module version increments trigger setup scripts — database schema and data changes always go through upgrade scripts, never manual database modifications.",
    ],
  },
  subServices: [
    {
      tab: "Custom Module Development",
      headline: "Bespoke Magento 2 modules built to coding standards.",
      description: "Custom Magento 2 extension development for business requirements that off-the-shelf modules can't meet. All modules use dependency injection, service contracts, and proper plugin/observer architecture. Unit tested, documented, and upgrade-safe.",
      bullets: ["Dependency injection architecture", "Service contract interfaces", "PHPUnit test coverage", "Full technical documentation"],
      image: "/case-study-saas.png",
      href: "/magento-2-development",
    },
    {
      tab: "ERP Integration",
      headline: "Queue-based ERP integration that won't break under load.",
      description: "Bidirectional ERP integration (SAP, NetSuite, Dynamics) via Magento's message queue framework. Asynchronous processing, error handling, retry logic, and monitoring dashboards. Integration that handles production load without synchronous API calls in the request cycle.",
      bullets: ["RabbitMQ / AMQP message queues", "Bidirectional data sync", "Error handling and retry logic", "Integration monitoring dashboard"],
      image: "/case-study-saas.png",
      href: "/magento-2-development",
    },
    {
      tab: "Custom Checkout",
      headline: "Custom Magento 2 checkout steps and payment flows.",
      description: "Custom checkout step development using Magento's KnockoutJS checkout architecture — adding steps, modifying payment flows, implementing custom validation, and integrating third-party payment providers. All built as proper checkout modules.",
      bullets: ["Custom checkout step modules", "Payment gateway integration", "Custom validation logic", "Checkout UX improvements"],
      image: "/case-study-saas.png",
      href: "/magento-2-development",
    },
    {
      tab: "REST / GraphQL API",
      headline: "Custom Magento 2 APIs using service contracts.",
      description: "Custom REST and GraphQL API development extending Magento's web API framework. Service contract definitions, API resource models, and authentication integration. Mobile app backends, headless frontends, and B2B integration endpoints.",
      bullets: ["Custom REST API endpoints", "GraphQL schema extensions", "Service contract definitions", "OAuth and token authentication"],
      image: "/case-study-saas.png",
      href: "/magento-2-development",
    },
    {
      tab: "B2B Commerce",
      headline: "Magento 2 B2B Commerce module implementation and customisation.",
      description: "Adobe Commerce B2B module implementation and custom extension — company account management, shared catalogs, negotiated pricing, purchase order workflows, and quick order forms. Extended with custom modules where the standard feature set doesn't cover your business requirements.",
      bullets: ["B2B module implementation", "Custom company account features", "Negotiated pricing extension", "PO workflow customisation"],
      image: "/case-study-saas.png",
      href: "/magento-2-development",
    },
  ],
  features: [
    { icon: <Code2 className="w-5 h-5 text-primary" />, title: "Custom Module Development", body: "Bespoke Magento 2 modules with dependency injection, service contracts, and unit test coverage. Upgrade-safe and documented." },
    { icon: <Database className="w-5 h-5 text-primary" />, title: "ERP Integration", body: "Queue-based ERP integration (SAP, NetSuite, Dynamics) with asynchronous processing and comprehensive error handling." },
    { icon: <Layers className="w-5 h-5 text-primary" />, title: "Custom Checkout", body: "Custom checkout steps and payment integrations built as proper modules — no core edits, no hackish overrides." },
    { icon: <Globe className="w-5 h-5 text-primary" />, title: "REST / GraphQL APIs", body: "Custom Magento 2 REST and GraphQL APIs via service contracts — for mobile apps, headless frontends, and B2B integrations." },
    { icon: <Zap className="w-5 h-5 text-primary" />, title: "Performance Tuning", body: "Varnish, Redis, Elasticsearch, and query optimisation. Sub-2s page loads regardless of catalogue complexity or traffic volume." },
    { icon: <Settings className="w-5 h-5 text-primary" />, title: "B2B Commerce", body: "Adobe Commerce B2B module implementation and customisation — company accounts, shared catalogs, and purchase order workflows." },
    { icon: <Shield className="w-5 h-5 text-primary" />, title: "Security Architecture", body: "No core file modifications, proper authentication on all APIs, input validation, and security patch compatibility on every module." },
    { icon: <RefreshCw className="w-5 h-5 text-primary" />, title: "Version Upgrades", body: "Magento 2.x to 2.4.x upgrades tested in staging with full regression testing before production deployment." },
    { icon: <BarChart2 className="w-5 h-5 text-primary" />, title: "Code Review & Audits", body: "Inherited codebase audits — architecture review, dependency audit, security scan, and technical debt quantification." },
  ],
  techStack: [
    { platform: "PHP 8.2 / Magento 2.4.x", stat: "Platform", description: "All development on the current Magento 2.4.x release with PHP 8.2. Strict typing, PSR-4 autoloading, and Composer dependency management throughout." },
    { platform: "Magento DI + Plugin API", stat: "Architecture", description: "Dependency injection containers, plugin (interceptor) architecture, and event/observer patterns — the three primary mechanisms for extending Magento 2 without touching core files." },
    { platform: "PHPUnit + MFTF", stat: "Testing", description: "PHPUnit for unit and integration tests, Magento Functional Testing Framework for end-to-end tests. CI runs on every pull request before code reaches staging." },
    { platform: "RabbitMQ", stat: "Message queue", description: "Magento 2's message queue framework with RabbitMQ for asynchronous processing — ERP integrations, email sending, and inventory updates that shouldn't block the request cycle." },
    { platform: "Elasticsearch / OpenSearch", stat: "Search", description: "Elasticsearch as the required Magento 2.4 search engine — configured with custom analysers, synonyms, and relevance tuning for your product taxonomy." },
    { platform: "Git + GitHub Actions", stat: "CI/CD", description: "Full Git version control with GitHub Actions CI — static analysis, unit tests, and code style enforcement running on every pull request. No manual deployments." },
  ],
  caseStudies: [
    { image: "/case-study-saas.png", client: "Industrial Supply Co.", industry: "B2B Commerce", blurb: "Custom Magento 2 B2B module with SAP integration via RabbitMQ message queue. Zero core file modifications across 12 custom modules. 18 months with zero upgrade-related breakage.", metrics: [{ value: "Zero", label: "Core file edits" }, { value: "Zero", label: "Upgrade-related breakage" }] },
    { image: "/industry-ecommerce.png", client: "Coastal Collective", industry: "eCommerce", blurb: "Custom checkout module with loyalty point redemption step and custom shipping logic. Built as proper Magento 2 modules — survived two major version upgrades without modification.", metrics: [{ value: "2", label: "Major upgrades survived" }, { value: "+18%", label: "Checkout completion rate" }] },
    { image: "/case-study-home.png", client: "National Supply Group", industry: "Wholesale", blurb: "Full codebase audit of inherited Magento 2 store. Identified 8 core file modifications causing upgrade failures. Rebuilt all 8 as proper plugins/observers without core edits.", metrics: [{ value: "8", label: "Core edits replaced with proper modules" }, { value: "-70%", label: "Maintenance cost" }] },
  ],
  process: [
    { label: "Spec", headline: "Functional and technical specification before writing code.", description: "Requirements analysis, data model design, integration point specification, and API design. A technical specification document that all development teams work from — reviewed and approved before development begins." },
    { label: "Architecture", headline: "Module architecture designed to Magento standards.", description: "Module structure, dependency injection configuration, service contract design, and database schema planning. Architecture reviewed by a senior Magento developer before implementation begins." },
    { label: "Develop", headline: "TDD: tests written alongside (or before) implementation.", description: "PHPUnit unit tests written alongside implementation. Pull requests include test coverage report. No business logic code merged without passing tests." },
    { label: "Review", headline: "Code review against Magento coding standards.", description: "Every pull request reviewed against Magento coding standards — DI patterns, plugin architecture, no ObjectManager direct usage, and proper service contract usage." },
    { label: "Test", headline: "Integration and functional testing in staging.", description: "Integration tests in a staging environment that mirrors production — Elasticsearch, Redis, and Varnish configured. Functional testing of every user flow before production deployment." },
    { label: "Deploy", headline: "Zero-downtime deployment with migration scripts.", description: "Database setup scripts for schema and data changes, static content deployment, cache warm-up, and post-deployment smoke tests. Never a manual database change in production." },
  ],
  faqs: [
    { question: "Why do you insist on no core file modifications?", answer: "Magento 2's security patches modify core files. If you've edited a core file, the patch either overwrites your changes (breaking your customisation) or fails to apply (leaving you vulnerable). Plugin and observer architecture was designed specifically to allow core behaviour modification without this problem. We never edit core files because it's the correct approach and because it saves you significant maintenance cost." },
    { question: "What is dependency injection in Magento 2?", answer: "Dependency injection is Magento 2's mechanism for providing class dependencies — instead of a class creating its own dependencies with `new`, dependencies are declared in the constructor and provided by Magento's DI container. This makes classes testable (dependencies can be mocked), swappable (you can substitute implementations via di.xml), and the dependency graph is explicit and auditable." },
    { question: "How do you ensure modules survive Magento upgrades?", answer: "Correct module architecture is the primary answer — no core edits, proper DI, service contract interfaces rather than concrete class dependencies. We also include upgrade compatibility testing in our maintenance process: before applying any Magento security patch or version upgrade, we run a test suite that verifies all custom modules function correctly post-upgrade." },
    { question: "Can you audit an existing Magento 2 codebase?", answer: "Yes. We run a codebase audit covering architecture review (core edits, DI compliance, plugin vs. observer usage), test coverage, dependency audit, and security scan. The output is a prioritised list of technical debt items with effort estimates. We can then quote for the remediation work." },
    { question: "Do you build for Magento Open Source and Adobe Commerce?", answer: "Yes. Our development approach is identical on both editions — the difference is that Adobe Commerce provides additional modules (B2B Commerce, Product Recommendations, Page Builder) that we implement and extend. Custom module development to Magento coding standards works on both editions." },
  ],
  hubInsights: [
    { image: "/case-study-saas.png", category: "Magento 2 Architecture", readTime: "8 min read", title: "Magento 2 Module Architecture: The Definitive Guide to Building Upgrade-Safe Extensions", excerpt: "Most Magento 2 modules are built incorrectly — core file edits, direct ObjectManager calls, and missing service contracts that make them brittle and expensive to maintain. We cover the complete module architecture that Magento designed and that makes your extensions survive every upgrade without breakage.", author: "James Okafor", authorRole: "Magento Lead", href: "/blog/magento-2-module-architecture" },
    { image: "/industry-ecommerce.png", category: "Magento 2 Testing", readTime: "6 min read", title: "How to Write PHPUnit Tests for Magento 2 Custom Modules (With Real Examples)", excerpt: "Unit testing custom Magento 2 modules requires understanding the DI container, how to mock dependencies, and which test types (unit, integration, functional) apply to which code. We share the testing patterns we use on every project with working code examples.", author: "Marcus Chen", authorRole: "Senior Developer", href: "/blog/magento-2-phpunit-testing" },
    { image: "/case-study-home.png", category: "ERP Integration", readTime: "7 min read", title: "Building a Reliable Magento 2 to SAP Integration with RabbitMQ", excerpt: "Direct synchronous SAP API calls in the Magento request cycle are how integrations fail under load. Queue-based asynchronous architecture with RabbitMQ is how they stay reliable. We walk through the complete integration architecture we use for Magento 2 ERP integrations.", author: "Priya Anand", authorRole: "Integration Architect", href: "/blog/magento-2-sap-rabbitmq" },
  ],
};

export default function Magento2DevHub() {
  return <ServiceHubPage data={magento2DevData} />;
}
