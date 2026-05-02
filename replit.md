# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Outlier Marketing Agency Website (`artifacts/agency`)

React + Vite + Tailwind v4 + shadcn/ui + framer-motion + wouter.

### Key Pages
- **`IndustryPage.tsx`** — Shared template for all 24 industry pages. Supports: `longIntro`, `industryStats` (3-stat bar), `tactics` (4 how-we-approach cards), `faq` (accordion), `compliance` (amber notice for regulated industries), plus the standard `services`, `challenges`, `caseStudy`, `otherIndustries` fields.
- **`IndustryPages.tsx`** — Data for all 24 industries with full rich content per industry (3-paragraph longIntro, 3 unique industryStats with context, 4 tactics, 5–6 FAQs, compliance notices for dental/legal/healthcare/real-estate). Each industry has completely unique, vertically-specific content.
- **`CityServicePage.tsx`** — Generates 39 cities × 5 services = 195 unique city+service pages. Render uses `city.marketBlurb` woven into the main body copy (via `cityContextPara`) to create genuinely unique text per city. Sections: premium dark hero (grid overlay + cobalt glow), market context with city-unique italic blockquote, neighbourhood tag cloud, local market intelligence section, process (dark bg), social proof + metrics, 2-column FAQ, related services.
- **`CitiesPage.tsx`** — Grid of all 39 Ontario cities
- **`SimplePages.tsx`** — Service landing pages and misc static pages
- **`footer.tsx`** — 5-column dark footer with all real services
- **`nav.tsx`** — Nav with mega-menu dropdowns

### City Data Structure (CITIES record in CityServicePage.tsx)
Each city has: `name`, `province`, `pop`, `region`, `marketBlurb` (unique per city — used in body copy), `competitionNote` (unique per city — used in sidebar + body), `neighborhoodsOrAreas` (shown as tag cloud), `economyHighlights` (shown in hero card)

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
