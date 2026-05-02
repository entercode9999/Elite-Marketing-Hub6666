# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Outlier Marketing Agency Website (`artifacts/agency`)

React + Vite + Tailwind v4 + shadcn/ui + framer-motion + wouter.

### Key Pages
- **`IndustryPage.tsx`** — Shared template for all 24 industry pages. Supports: `longIntro`, `industryStats` (3-stat bar), `tactics` (4 how-we-approach cards), `faq` (accordion), `compliance` (amber notice for regulated industries), plus the standard `services`, `challenges`, `caseStudy`, `otherIndustries` fields.
- **`IndustryPages.tsx`** — Data for all 24 industries with full rich content per industry (3-paragraph longIntro, 3 unique industryStats with context, 4 tactics, 5–6 FAQs, compliance notices for dental/legal/healthcare/real-estate). Each industry has completely unique, vertically-specific content.
- **`CityServicePage.tsx`** — Generates 24 cities × 8 services = **192+ unique rankable pSEO pages** via `/:city/:service` route. Full architecture:
  - **8 service slugs**: `seo-services`, `local-seo`, `google-ads`, `paid-social`, `content-marketing`, `email-marketing`, `digital-marketing`, `web-design`
  - **24+ cities** with full data fields (see below)
  - **12 render sections** per page (see below)
  - **document.title** updated via useEffect for each unique city+service combo
- **`CitiesPage.tsx`** — Grid of all Ontario cities with links
- **`SimplePages.tsx`** — Service landing pages and misc static pages
- **`footer.tsx`** — 5-column dark footer with all real services
- **`nav.tsx`** — Nav with mega-menu dropdowns

### City Data Structure (CITIES record in CityServicePage.tsx)
Each city has:
- `name`, `province`, `pop`, `region` — basic identifiers
- `marketTier` — `"premium"` | `"major"` | `"standard"` | `"emerging"` (drives pricing section and competition level badge)
- `businessCount` — registered businesses (e.g. "180,000+" for Toronto)
- `localStats` — tuple of 2 unique, city-specific facts used in sidebar
- `keyIndustries` — array of 4–5 key industries, displayed as tags
- `marketBlurb` — unique per city, woven into body copy via `cityContextPara` italic blockquote
- `competitionNote` — unique per city, used in market intelligence sidebar card
- `neighborhoodsOrAreas` — comma-separated, displayed as tag cloud
- `economyHighlights` — shown in hero economy card

### marketTier Assignments
- **premium**: toronto
- **major**: mississauga, brampton, markham, vaughan, hamilton, ottawa, london, london-ontario
- **standard**: richmond-hill, oakville, burlington, kitchener, waterloo, barrie, windsor, st-catharines, niagara-falls, cambridge, newmarket, aurora
- **emerging**: guelph, kingston, peterborough, brantford

### Service Data Structure (SERVICES record in CityServicePage.tsx)
Each service has:
- `label`, `shortLabel`, `h1Template`, `taglineTemplate`, `metaDescTemplate`
- `introTemplate` — 6 paragraphs (~900–1,100 words) separated by `\n\n`; `[City]` placeholder replaced at render
- `whyTemplate` — 3 reason cards
- `included` — 6 deliverable cards with title + description
- `process` — 5 step cards (title + description)
- `stats` — 3 KPI metrics shown in hero
- `faqTemplate` — 6–7 FAQ items (accordion)
- `pricingTiers` — Record keyed by marketTier, each with `range` (price string) and `context` (city-tier-specific rationale)
- `timeline` — 3 milestone objects: `{ period, title, desc }`
- `cta`, `ctaSecondary` — CTA button labels
- `relatedServices` — 4 cross-links to other service pages
- `icon` — Lucide icon component

### Page Render Sections (in order)
1. **Hero** — dark bg, grid overlay, cobalt glow; H1, tagline, CTAs, 3 KPI stat cards, city economy card (pop + businessCount)
2. **Market Context + Full Intro** — 5 of 6 intro paragraphs shown; city-unique italic blockquote (cityContextPara); right sidebar: competition level badge (colour-coded by tier), market intelligence card (unique), local stats (2 unique facts), key areas tag cloud, "Our City Promise" card
3. **Local Search Landscape** — 8 dynamically-generated example search queries; key industries tags; extended intro paragraph 5
4. **Why This Service** — 3 reason cards with numbered background watermarks
5. **What's Included** — 6 deliverable cards
6. **Pricing** — tier-based pricing range + city-specific context; 3 pricing factors; free audit dark CTA card; intro paragraph 6; economy snapshot
7. **Process** — 5 step cards on dark background
8. **Timeline** — left explanation (competition context); right: 3 milestone cards with period/title/desc
9. **Local Market Intelligence** — market snapshot (pop, region, businessCount, tier); neighbourhood tag cloud; economy card
10. **Social Proof** — 4 metric cards; 2 testimonials; dark CTA card
11. **FAQ** — accordion (6–7 questions, city-name filled in)
12. **Related Cities** — 8 other cities linking to same service (internal pSEO linking)
13. **Related Services + Ontario Coverage** — 4 cross-service links; cities overview

### Brand
- Primary cobalt: `#1a56ff`
- Dark bg: `#08090d`
- Light bg: `#f9f8f5` / `#f2f2ef`
- Border: `#e5e2d9`
- Logo: `@assets/logo.webp`

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
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
