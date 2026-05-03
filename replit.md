# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Outlier Marketing Agency Website (`artifacts/agency`)

React + Vite + Tailwind v4 + shadcn/ui + framer-motion + wouter. Toronto digital marketing agency pSEO site.

### Brand Design Language
- **Primary cobalt**: `#1a56ff`
- **Dark bg**: `#08090d` — used for hero, stats, whyoutlier, wins, megacta, footer
- **Light bg**: `#f9f8f5` / `#f2f2ef` — testimonials, service pages
- **White bg**: `#ffffff` — HowWeWork, FAQ, BlogInsights
- **Border (dark sections)**: `border-white/6` or `border-white/8`
- **Border (light sections)**: `#e5e2d9`
- **Font sans**: Plus Jakarta Sans (`font-sans`)
- **Font display**: Outfit (`font-display`) — configured in `--app-font-display`
- **Dark sidebar pattern**: `bg-[#0a0c14]`, active row uses `bg-white/[0.06]` + `border-l-[3px] border-l-primary`

### Homepage Section Order & Design Notes
1. **Hero** (`Home.tsx` inline) — dark `#08090d`, grid bg, cobalt glow orbs; 2-col layout: left text/CTAs, right `HeroServicesPanel`
2. **LogoMarquee** (`LogoMarquee.tsx`) — dark `#0A0A0C`, scrolling client name marquee with fade edges
3. **Markets ticker** (`Home.tsx` inline) — `bg-primary/90` blue bar with city list
4. **Stats** (`Stats.tsx`) — dark `#08090d`, 4 animated counter stats with sub-labels; bottom trust strip
5. **ServicesTabbed** (`ServicesTabbed.tsx`) — dark `#0a0c14` left sidebar, 6 services with icon+label+tagline; active state uses colored left bar; pinned CTA; right panel with rich content + data viz
6. **IndustriesTabbed** (`IndustriesTabbed.tsx`) — same dark sidebar pattern; 8 industries; pinned CTA bottom
7. **WhyOutlier** (`WhyOutlier.tsx`) — dark `#08090d`, sticky left header + proof stats card; right: 6 differentiator rows with dividers
8. **Case Studies** (`Home.tsx` inline) — light `bg-background`, 3×2 grid of case study cards with metrics
9. **HowWeWork** (`HowWeWork.tsx`) — white `bg-white`, 5-phase tabbed selector with dark phase panel + light sidebar navigator
10. **Testimonials** (`Testimonials.tsx`) — cream `#f9f8f5`, 2×2 card grid; each card has colored accent bar, service metric, quote, attribution
11. **Wins** (`Wins.tsx`) — dark `#08090d`, sticky left header; right: 6 win rows with date/text/metric columns
12. **FAQ** (`Faq.tsx`) — white `bg-white`, sticky left header + CTA; custom accordion (no shadcn) with animated height
13. **BlogInsights** (`BlogInsights.tsx`) — white `bg-white`, 3-article grid with image+metadata+author
14. **MegaCta** (`MegaCta.tsx`) — dark `#08090d`, grid bg, blue glow orbs, large headline with italic primary accent; 2 CTA buttons + trust checklist
15. **Footer** (`footer.tsx`) — dark `#08090d`, 5-column link grid + social + legal

### Navigation (`nav.tsx`)
4 mega-menu categories: **Services** (8 items), **Industries** (8 items), **Markets** (6 cities), **Company** (6 links). Plus standalone "Our Work" link and "Get a Free Audit" CTA. Mobile drawer with collapsible sections.

### Key Section Components
- **`HeroServicesPanel.tsx`** — 3×2 pill grid of 6 services with animated service detail panel; auto-rotates with progress bar
- **`ServicesTabbed.tsx`** — 6 services: Local SEO, Google Ads, Web Design & CRO, Content Marketing, Technical SEO, AI & Automation. Each has 6 sub-bullets, data viz, colored CTA button
- **`IndustriesTabbed.tsx`** — 8 industries with same dark sidebar pattern
- **`WhyOutlier.tsx`** — 6 differentiators (flat fee, senior team, strategy-first, one team, live dashboards, no lock-in)
- **`HowWeWork.tsx`** — 5-phase engagement process (Discovery, Strategy, Build, Optimise, Compound)

### Key Pages
- **`ServicePage.tsx`** — Template for service pages (hero split, deliverables, process, who-for, case study, differentiators, FAQ, CTA). Contains data for `localSeoData`, `googleAdsData`
- **`IndustryPage.tsx`** — Template for 24 industry pages. Supports: `longIntro`, `industryStats`, `tactics`, `faq`, `compliance`
- **`IndustryPages.tsx`** — Data for all 24 industries with full unique copy per industry
- **`CityServicePage.tsx`** — Generates 24 cities × 8 services = **192+ unique rankable pSEO pages** via `/:city/:service` route
- **`WorkPage.tsx`** — OurWorkPage + CaseStudyPage with full case study data for 5 clients
- **`CitiesPage.tsx`** — Grid of all Ontario cities with links
- **`SimplePages.tsx`** — About, Contact, Insights, Careers, Privacy, Terms, Accessibility
- **`ConversionPages.tsx`** — Pricing, FreeAudit, ThankYou
- **`HubPage.tsx`** + `artifacts/agency/src/pages/hubs/` — Service hub pages (SEO, Ads, Web, Content, AI, etc.)

### City Data Structure (CITIES record in CityServicePage.tsx)
Each city has: `name`, `province`, `pop`, `region`, `marketTier` (`"premium"` | `"major"` | `"standard"` | `"emerging"`), `businessCount`, `localStats`, `keyIndustries`, `marketBlurb`, `competitionNote`, `neighborhoodsOrAreas`, `economyHighlights`

### Service Data Structure (SERVICES record in CityServicePage.tsx)
Each service has: `label`, `shortLabel`, h1/tagline/metaDesc templates, `introTemplate` (6 paragraphs), `whyTemplate`, `included` (6 deliverables), `process` (5 steps), `stats` (3 KPIs), `faqTemplate` (6–7 items), `pricingTiers` by marketTier, `timeline` (3 milestones), `cta`, `relatedServices`, `icon`

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **Frontend**: React + Vite + Tailwind v4 + shadcn/ui + framer-motion + wouter
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.
