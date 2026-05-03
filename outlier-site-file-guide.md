# Outlier Website — Key Files Guide

## Pricing

**File:** `artifacts/agency/src/pages/ConversionPages.tsx`

- Growth, Scale, Enterprise plan names, prices, features
- FAQ questions and answers
- Free Audit page deliverables list

---

## Blog / Insights Articles

**File:** `artifacts/agency/src/pages/InsightArticlePage.tsx`

- All 8 article slugs, titles, body content, stat blocks
- Author names, dates, read times

---

## Homepage

**File:** `artifacts/agency/src/pages/Home.tsx`

- Hero headline and subheadline
- Stats strip ($175M+, 1,680+ keywords, etc.)
- Trust badges and logo strip

---

## Services Section (homepage)

**File:** `artifacts/agency/src/components/sections/ServicesTabbed.tsx`

- 6 service categories (Local SEO, Google Ads, etc.)
- Sub-service links and descriptions
- Service headlines and body copy

---

## Why Outlier Section (homepage)

**File:** `artifacts/agency/src/components/sections/WhyOutlier.tsx`

- 6 differentiator items (headings + body text)
- Proof stats (94% retention, 10+ years, etc.)

---

## How We Work Section (homepage)

**File:** `artifacts/agency/src/components/sections/HowWeWork.tsx`

- 5 phase names, durations, headings, descriptions

---

## About Page

**File:** `artifacts/agency/src/pages/SimplePages.tsx`

- Team members (names, roles, bios)
- Company values
- Certifications
- Timeline / milestones
- Stats strip (2013, 200+, 93%, 10yr+, 4.9★)

---

## Testimonials Page

**File:** `artifacts/agency/src/pages/TestimonialsPage.tsx`

- 12 client reviews (name, company, quote, result)
- Platform ratings (Google 4.9, Clutch 4.8, G2 4.7)
- Stats strip (93%, 4.9, 180+, 12 verticals)

---

## Case Studies / Our Work

**File:** `artifacts/agency/src/pages/WorkPage.tsx`

- Case study cards on the Our Work page
- Individual case study detail content

---

## Navigation

**File:** `artifacts/agency/src/components/nav.tsx`

- Nav links and labels
- Mobile menu items

---

## Footer

**File:** `artifacts/agency/src/components/footer.tsx`

- Footer column links (Digital Marketing, Web & Ecommerce, Industries, Company)
- Market city links
- Address, phone number, email
- Social media links

---

## Contact Page

**File:** `artifacts/agency/src/pages/SimplePages.tsx`

- Contact page headline and subtext
- "What happens next" steps

---

## Industries Pages

**File:** `artifacts/agency/src/pages/IndustryPages.tsx`

- Content for each industry vertical (Dental, Legal, Home Services, etc.)

---

## All Routes / Page URLs

**File:** `artifacts/agency/src/App.tsx`

- Every URL route and which component it loads
- Add new pages here

---

## Global Styles & Colours

**File:** `artifacts/agency/src/index.css`

- Brand colours (primary cobalt `#1a56ff`, dark `#08090d`, light `#f9f8f5`)
- Global font and base styles

---

## Quick Reference — Common Edits

| What to change | File | What to search for |
|---|---|---|
| Plan prices | ConversionPages.tsx | `starting: "2,500"` |
| Hero headline | Home.tsx | `One team.` |
| Team member bio | SimplePages.tsx | `authorBio` or team member name |
| Article content | InsightArticlePage.tsx | article `slug` |
| Footer address | footer.tsx | `Spadina Ave` |
| Footer phone | footer.tsx | `1-800-555-0199` |
| Footer email | footer.tsx | `hello@outlier.co` |
| Nav links | nav.tsx | link labels |
| Client reviews | TestimonialsPage.tsx | reviewer name |
