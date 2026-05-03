import { Link, useParams } from "wouter";
import { ArrowRight, TrendingUp, BarChart3, Users, Search, Target, Share2, Mail, Globe, MapPin, CheckCircle2, ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";
import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { useSeo } from "@/hooks/useSeo";

/* ─── Case Study Data ─────────────────────────────────────────────── */

interface CaseStudyData {
  slug: string;
  client: string;
  tagline: string;
  service: string;
  industry: string;
  location: string;
  cardGradient: string;
  accentColor: string;
  heroHeadline: string;
  heroBullets: string[];
  about: string;
  projectDetails: { label: string; value: string }[];
  challenges: { title: string; description: string }[];
  solutionSteps: { title: string; description: string }[];
  results: { stat: string; label: string }[];
  testimonial?: { quote: string; name: string; role: string };
  beforeStats: { label: string; value: string }[];
  keywords: { term: string; before: number; after: number }[];
}

const CASE_STUDIES: CaseStudyData[] = [
  {
    slug: "meridian-dental",
    client: "Meridian Dental Group",
    tagline: "Tripling organic patient enquiries in 11 months",
    service: "SEO Services",
    industry: "Healthcare / Dental",
    location: "Toronto, ON",
    cardGradient: "from-[#0a1628] to-[#1a56ff]",
    accentColor: "#1a56ff",
    heroHeadline: "From page 4 to position 1 — across every core dental keyword in Toronto.",
    heroBullets: [
      "Rebuilt technical SEO foundation and eliminated 140+ crawl errors",
      "Created a comprehensive topical authority architecture for dental services",
      "Dominated the Toronto map pack for all primary dental search terms",
    ],
    about:
      "Meridian Dental Group is a multi-location dental practice with four Toronto clinics serving patients across the city since 2011. Despite 13 years of operation and strong patient satisfaction scores, their website was invisible on Google — ranking on page 3–5 for their most important service keywords and entirely absent from the Google Maps results. They came to Outlier after an unsuccessful engagement with two previous agencies who produced reports but not results.",
    projectDetails: [
      { label: "Services", value: "SEO · Local SEO · Content Marketing" },
      { label: "Industry", value: "Healthcare / Dental" },
      { label: "Location", value: "Toronto, Ontario" },
      { label: "Duration", value: "11 months" },
    ],
    challenges: [
      {
        title: "Zero map pack visibility",
        description: "Despite having four Toronto locations, Meridian didn't appear in a single Google Maps result for any dental search term. Their Google Business Profiles were unclaimed, incomplete, and had fewer than 5 reviews each.",
      },
      {
        title: "Severe technical SEO issues",
        description: "An audit revealed 140+ crawl errors, duplicate content across all four location pages, missing canonical tags, and a site speed score of 31/100 — all of which were actively suppressing rankings regardless of content quality.",
      },
      {
        title: "No content strategy",
        description: "The existing website had thin service pages with fewer than 200 words each and no blog or topical content. Competitors were ranking with comprehensive procedure guides, FAQ content, and location-specific pages that Meridian simply didn't have.",
      },
    ],
    solutionSteps: [
      {
        title: "Technical Foundation Rebuild",
        description: "We resolved all 140+ crawl errors, implemented proper canonical tags, rebuilt the site's internal linking architecture, and improved page speed from 31 to 91/100 through image optimisation, lazy loading, and server configuration. Core Web Vitals went green across all pages.",
      },
      {
        title: "Local SEO & GBP Overhaul",
        description: "All four Google Business Profiles were claimed, rebuilt from scratch, and optimised with the correct service categories, complete service menus, professional photography, and Q&A content. We implemented a systematic review generation programme that produced 120+ new 5-star reviews within 90 days.",
      },
      {
        title: "Topical Authority Content Architecture",
        description: "We built a comprehensive content strategy covering every dental procedure, patient concern, and local search intent relevant to the Toronto market. This included four location-specific service pages, 24 procedure guides, and an ongoing monthly blog programme targeting informational dental queries.",
      },
      {
        title: "Citation Building & Local Link Acquisition",
        description: "We built consistent NAP citations across 45+ directories and acquired local backlinks from Toronto healthcare directories, dental association listings, and community publications — all of which directly elevated map pack rankings.",
      },
    ],
    results: [
      { stat: "+312%", label: "Organic website traffic" },
      { stat: "11 mo.", label: "To achieve primary keyword page 1" },
      { stat: "4 × #1", label: "Map pack positions across locations" },
      { stat: "+187%", label: "New patient enquiries from organic" },
      { stat: "120+", label: "New 5-star reviews in 90 days" },
      { stat: "91/100", label: "Final page speed score (from 31)" },
    ],
    testimonial: {
      quote: "Outlier didn't just improve our rankings — they rebuilt the entire foundation of how we appear online. The difference in patient enquiries from organic search alone has been transformative. For the first time in 13 years, we're the first result when someone searches for a Toronto dentist.",
      name: "Dr. James Meridian",
      role: "Founder, Meridian Dental Group",
    },
    beforeStats: [
      { label: "Page Speed Score", value: "31/100" },
      { label: "Map Pack Positions", value: "0" },
      { label: "Primary Keyword Rankings", value: "Page 3–5" },
      { label: "Monthly Organic Calls", value: "~12/mo" },
    ],
    keywords: [
      { term: "dentist toronto", before: 38, after: 1 },
      { term: "dental clinic toronto", before: 24, after: 2 },
      { term: "emergency dentist toronto", before: 31, after: 1 },
      { term: "invisalign toronto", before: 19, after: 3 },
      { term: "toronto dental implants", before: 42, after: 1 },
      { term: "teeth whitening toronto", before: 17, after: 2 },
    ],
  },
  {
    slug: "gta-home-pros",
    client: "GTA Home Pros",
    tagline: "Turning a wasted ad budget into 4.2× ROAS in 90 days",
    service: "Google Ads + Local SEO",
    industry: "Home Services",
    location: "Mississauga & GTA",
    cardGradient: "from-[#1a1a2e] to-[#e85d04]",
    accentColor: "#e85d04",
    heroHeadline: "A self-managed Google Ads account was burning money. We turned it into the company's top revenue channel.",
    heroBullets: [
      "Rebuilt campaign structure, eliminated 60% wasted spend in the first 30 days",
      "Achieved Google Map Pack position 1 across 6 high-value home service terms",
      "Reduced cost per booked job by 54% while tripling lead volume",
    ],
    about:
      "GTA Home Pros provides HVAC, plumbing, and electrical services across Mississauga, Brampton, and the broader GTA. With 18 technicians and an established customer base, the business had the capacity to grow — but was stuck. Their self-managed Google Ads account was spending significantly each month with little to show for it, and a competitor had recently taken every top map pack position they once held. They needed expert intervention fast.",
    projectDetails: [
      { label: "Services", value: "Google Ads · Local SEO · GBP Management" },
      { label: "Industry", value: "Home Services (HVAC, Plumbing, Electrical)" },
      { label: "Location", value: "Mississauga, Brampton, GTA" },
      { label: "Duration", value: "Ongoing (initial results: 90 days)" },
    ],
    challenges: [
      {
        title: "Catastrophic ad account waste",
        description: "An audit of the self-managed Google Ads account revealed broad match keywords triggering irrelevant searches, no negative keyword list, duplicate campaigns competing against each other, and zero conversion tracking. The account had no data to optimise against and no way to measure what was working.",
      },
      {
        title: "Map pack displacement",
        description: "A competitor had systematically built their local SEO presence over 18 months and displaced GTA Home Pros from every map pack position they once held. Response times had slipped, reviews had plateaued, and GBP optimisation had been neglected.",
      },
      {
        title: "No landing page alignment",
        description: "Paid search traffic was landing on the homepage, which had no service-specific content, no trust signals above the fold, and a contact form that required 8 fields. The conversion rate was below 1% — meaning the majority of expensive clicks produced nothing.",
      },
    ],
    solutionSteps: [
      {
        title: "Google Ads Account Rebuild",
        description: "We rebuilt the account from scratch: proper campaign structure by service type (HVAC, plumbing, electrical), exact and phrase match keywords with a comprehensive negative list, call tracking with recording capability, and Smart Bidding configured with sufficient conversion data. Wasted spend dropped by 60% in the first month while maintaining total lead volume.",
      },
      {
        title: "Landing Page Overhaul",
        description: "We designed and built three service-specific landing pages — one per core service — with trust signals above the fold, 3-field contact forms, customer testimonials, and service area maps. Conversion rate improved from 0.9% to 4.3% across all paid traffic.",
      },
      {
        title: "GBP Restoration & Review Velocity",
        description: "We rebuilt all three Google Business Profiles, implemented a post-service review request sequence, and established a weekly GBP posting schedule. Within 60 days, review count grew from 34 to 89 across all profiles, and map pack positions began recovering.",
      },
      {
        title: "Local SEO Foundation",
        description: "Citation cleanup across 45 directories, local keyword optimisation on all service pages, and a hyperlocal content strategy targeting city-specific service searches across the GTA service area.",
      },
    ],
    results: [
      { stat: "4.2×", label: "ROAS (Google Ads)" },
      { stat: "-54%", label: "Cost per booked job" },
      { stat: "+200%", label: "Monthly lead volume" },
      { stat: "Map #1", label: "6 primary home service terms" },
      { stat: "4.3%", label: "Landing page conversion rate (from 0.9%)" },
      { stat: "90 days", label: "To initial results" },
    ],
    testimonial: {
      quote: "We were spending a lot on Google Ads and getting almost nothing back. Outlier rebuilt everything, and within 90 days we were booked out 3 weeks in advance for the first time ever. The transparency in their reporting alone was a revelation compared to what we'd experienced before.",
      name: "Marco Deluca",
      role: "Owner, GTA Home Pros",
    },
    beforeStats: [
      { label: "Google Ads ROAS", value: "0.8×" },
      { label: "Cost Per Booked Job", value: "$380+" },
      { label: "Monthly Lead Volume", value: "~22/mo" },
      { label: "Landing Page CVR", value: "0.9%" },
    ],
    keywords: [
      { term: "hvac repair mississauga", before: 22, after: 1 },
      { term: "plumber brampton", before: 14, after: 3 },
      { term: "hvac toronto", before: 31, after: 2 },
      { term: "emergency plumber gta", before: 18, after: 1 },
      { term: "electrician mississauga", before: 28, after: 4 },
      { term: "ac repair toronto", before: 24, after: 2 },
    ],
  },
  {
    slug: "axiom-law",
    client: "Axiom Law Professional Corporation",
    tagline: "Page 1 across 40+ legal search terms — from a standing start",
    service: "SEO + Content Marketing",
    industry: "Legal",
    location: "Toronto, ON",
    cardGradient: "from-[#0d0d0d] to-[#2d2d44]",
    accentColor: "#a78bfa",
    heroHeadline: "A new Toronto law firm needed to compete online against practices with decades of digital history. We got them there.",
    heroBullets: [
      "Established page 1 rankings across 40+ high-intent legal search terms within 14 months",
      "Built a 60-article topical authority architecture that became the firm's primary new client source",
      "Achieved first-page rankings for terms previously dominated by Toronto's largest law firms",
    ],
    about:
      "Axiom Law Professional Corporation was founded in 2022 by two senior lawyers leaving Bay Street firm partnerships to build a boutique practice focused on commercial litigation, corporate law, and employment law. Starting with an empty website and no online presence, they needed to build credibility and visibility in one of Canada's most competitive legal search markets from scratch. Traditional legal directories and referral networks alone would not be enough.",
    projectDetails: [
      { label: "Services", value: "SEO · Content Marketing · Technical SEO" },
      { label: "Industry", value: "Legal — Corporate & Commercial" },
      { label: "Location", value: "Toronto, Ontario" },
      { label: "Duration", value: "14 months" },
    ],
    challenges: [
      {
        title: "Zero domain authority on a new website",
        description: "Axiom launched with a brand-new domain and zero backlinks, competing against firms with 10–20 years of link equity and established Google trust. In legal SEO, new entrants typically spend 18–24 months before seeing meaningful organic traction — we needed to accelerate that timeline significantly.",
      },
      {
        title: "YMYL compliance requirements",
        description: "Legal content falls under Google's 'Your Money or Your Life' category, which means Google applies the highest level of E-E-A-T scrutiny. Every piece of content needed to demonstrate genuine legal expertise, proper author credentialing, and verifiable claims — generic content would not be tolerated.",
      },
      {
        title: "Entrenched competitors with massive content libraries",
        description: "The top-ranking Toronto law firms had 200–500 indexed content pages, thousands of backlinks, and years of topical authority signals. Competing for high-intent terms like 'Toronto corporate lawyer' or 'commercial litigation Toronto' required an outflanking strategy targeting winnable long-tail terms first.",
      },
    ],
    solutionSteps: [
      {
        title: "E-E-A-T Architecture & Author Credentialing",
        description: "We built individual author profiles with bar admission credentials, case history summaries, and published legal commentary. Each piece of content was attributed to a named lawyer with linked credentials. We added schema markup for legal services, practice areas, and attorney profiles — all of which improved E-E-A-T signals dramatically.",
      },
      {
        title: "Long-Tail First Keyword Strategy",
        description: "Rather than targeting impossible head terms immediately, we mapped a 180-day keyword progression: starting with specific procedural questions ('how to contest a shareholder agreement in Ontario'), building to mid-competition service terms ('commercial lease dispute Toronto'), and finally targeting head terms as domain authority accumulated.",
      },
      {
        title: "Topical Authority Content Build",
        description: "A 60-article content programme covering every commercial law topic, employment law question, and litigation procedure relevant to the Toronto business market. Each piece was researched by legal specialists, written to YMYL standards, and optimised for the specific search queries Axiom's target clients were making.",
      },
      {
        title: "Digital PR & Legal Publication Placements",
        description: "We secured content placements in six Canadian legal publications and three Toronto business journals, generating high-authority backlinks that compressed the domain authority timeline from 24 months to under 14.",
      },
    ],
    results: [
      { stat: "40+", label: "Page 1 keyword rankings" },
      { stat: "+312%", label: "Organic traffic (12-month period)" },
      { stat: "14 mo.", label: "To competitive keyword rankings" },
      { stat: "18", label: "New clients sourced from organic search" },
      { stat: "60", label: "Content assets produced & ranking" },
      { stat: "6", label: "Legal publication backlink placements" },
    ],
    testimonial: {
      quote: "We were told by multiple people that SEO for a new law firm in Toronto was essentially impossible in any reasonable timeframe. Outlier proved that wrong. We're now ranking ahead of firms that have been in business for 30 years on terms we care about. The quality of the inbound enquiries from organic search is exceptional.",
      name: "Alexandra Chen",
      role: "Partner, Axiom Law Professional Corporation",
    },
    beforeStats: [
      { label: "Page 1 Keyword Rankings", value: "0" },
      { label: "Domain Authority", value: "0 (new domain)" },
      { label: "Monthly Organic Traffic", value: "<200/mo" },
      { label: "Indexed Content Pages", value: "8" },
    ],
    keywords: [
      { term: "toronto corporate lawyer", before: 52, after: 4 },
      { term: "commercial litigation toronto", before: 44, after: 3 },
      { term: "employment lawyer toronto", before: 28, after: 8 },
      { term: "corporate solicitor toronto", before: 61, after: 2 },
      { term: "commercial lease dispute toronto", before: 33, after: 1 },
      { term: "shareholder dispute lawyer toronto", before: 47, after: 2 },
    ],
  },
  {
    slug: "northview-kitchens",
    client: "Northview Kitchens & Bath",
    tagline: "4.8× ROAS and a 14-week booking backlog",
    service: "Google Ads + Paid Social",
    industry: "Home Renovation / Retail",
    location: "Hamilton & Burlington, ON",
    cardGradient: "from-[#0a1a1a] to-[#087f5b]",
    accentColor: "#20c997",
    heroHeadline: "A premium kitchen renovation company needed leads — not impressions. We built a paid media system that delivered both.",
    heroBullets: [
      "Rebuilt Google Ads from a flat CPA to 4.8× ROAS within 60 days",
      "Added Meta advertising targeting Hamilton and Burlington homeowners with renovation intent",
      "Built a 14-week project backlog for the first time in the company's history",
    ],
    about:
      "Northview Kitchens & Bath is a premium kitchen and bathroom renovation company serving Hamilton, Burlington, and surrounding Halton and Hamilton communities. With 22 years of craftsmanship and an exceptional portfolio of completed projects, Northview had no shortage of quality — but their digital marketing had never matched the calibre of their work. Relying primarily on referrals and a poorly-managed Google Ads account, they were turning away leads for the wrong reasons: not enough of them.",
    projectDetails: [
      { label: "Services", value: "Google Ads · Meta Advertising · Landing Page Design" },
      { label: "Industry", value: "Home Renovation / Premium Kitchen & Bath" },
      { label: "Location", value: "Hamilton & Burlington, Ontario" },
      { label: "Duration", value: "Ongoing (initial results: 60 days)" },
    ],
    challenges: [
      {
        title: "Low-quality lead volume and poor qualification",
        description: "The existing Google Ads account was targeting broad, low-intent keywords and sending traffic to the homepage — resulting in high spend, low lead volume, and leads that frequently weren't serious renovation buyers. The sales team was spending significant time qualifying out price-shopping enquiries.",
      },
      {
        title: "No social media advertising presence",
        description: "Northview had zero paid social advertising history despite having a stunning portfolio of completed projects. This was a significant missed opportunity: premium home renovation is an ideal category for Instagram and Facebook advertising, where visual creative can stop the scroll and capture aspirational buyers before they search.",
      },
      {
        title: "No conversion tracking or attribution",
        description: "There was no call tracking, no form submission tracking, and no way to determine which campaigns, keywords, or creatives were producing actual bookings. Budget decisions were being made on gut instinct with no data.",
      },
    ],
    solutionSteps: [
      {
        title: "Google Ads Restructure & Conversion Tracking",
        description: "We rebuilt the account around high-intent, specific kitchen and bathroom renovation keywords, implemented call tracking with recording, and set up CRM offline conversion imports so that actual booked projects flowed back into Google's algorithm. Smart Bidding strategies were configured with proper conversion data for the first time.",
      },
      {
        title: "High-Converting Landing Pages",
        description: "We designed and built separate landing pages for kitchen renovations and bathroom renovations — featuring the Northview portfolio prominently, process transparency, financing information, and a streamlined quote request form. Conversion rate improved from 1.2% to 5.8%.",
      },
      {
        title: "Meta Advertising with Portfolio Creative",
        description: "We produced carousel and video ad formats showcasing Northview's completed projects, targeting homeowners aged 35–65 in Hamilton and Burlington postal codes with household income signals and home ownership indicators. The visual portfolio proved exceptional ad creative — stopping the scroll for the exact audience Northview needed to reach.",
      },
      {
        title: "Blended Retargeting Strategy",
        description: "Visitors from Google Ads and organic traffic were retargeted across Meta, YouTube, and Display with portfolio showcase creative and specific offer messaging. The combined first-touch and retargeting approach compressed the consideration period significantly for high-value renovation leads.",
      },
    ],
    results: [
      { stat: "4.8×", label: "ROAS (Google Ads)" },
      { stat: "3.4×", label: "ROAS (Meta Ads)" },
      { stat: "+280%", label: "Qualified lead volume" },
      { stat: "5.8%", label: "Landing page conversion rate" },
      { stat: "14 weeks", label: "Project backlog (from 3 weeks)" },
      { stat: "60 days", label: "To initial results" },
    ],
    testimonial: {
      quote: "We went from scrambling for leads to turning jobs away because our schedule is full. The quality of the leads coming from both Google and Meta is completely different from what we were getting before — these are serious renovation buyers, not people calling to compare prices. Outlier completely changed our business trajectory.",
      name: "Robert Northfield",
      role: "Owner, Northview Kitchens & Bath",
    },
    beforeStats: [
      { label: "Google Ads ROAS", value: "1.1×" },
      { label: "Landing Page CVR", value: "1.2%" },
      { label: "Project Backlog", value: "3 weeks" },
      { label: "Qualified Leads/Month", value: "~8" },
    ],
    keywords: [
      { term: "kitchen renovation hamilton", before: 18, after: 2 },
      { term: "kitchen remodel burlington", before: 24, after: 1 },
      { term: "bathroom renovation hamilton", before: 31, after: 3 },
      { term: "kitchen contractor burlington", before: 22, after: 1 },
      { term: "custom cabinets hamilton", before: 14, after: 2 },
      { term: "bathroom remodel burlington", before: 28, after: 2 },
    ],
  },
  {
    slug: "purecycle-fitness",
    client: "Purecycle Fitness Studios",
    tagline: "+180% membership growth through paid social and email",
    service: "Paid Social + Email Marketing",
    industry: "Fitness & Wellness",
    location: "Markham & Richmond Hill, ON",
    cardGradient: "from-[#1a0533] to-[#7c3aed]",
    accentColor: "#7c3aed",
    heroHeadline: "A boutique fitness studio chain grew membership 180% in 8 months — without discounting.",
    heroBullets: [
      "Built a Meta advertising funnel that acquired members at a consistent, profitable cost",
      "Resurrected a 3,200-subscriber email list that had been dormant for 18 months",
      "Maintained premium pricing throughout — zero promotional discounting required",
    ],
    about:
      "Purecycle Fitness Studios operates two premium boutique fitness locations in Markham and Richmond Hill, offering cycling, HIIT, and yoga classes at a premium price point. After strong initial growth during their launch period, membership acquisition had plateaued. Their email list was large but dormant, their social media posts were getting organic reach only, and they had no paid advertising history. A new competitor had opened nearby, making growth more urgent.",
    projectDetails: [
      { label: "Services", value: "Meta Advertising · Email Marketing · Automation" },
      { label: "Industry", value: "Boutique Fitness / Wellness" },
      { label: "Location", value: "Markham & Richmond Hill, Ontario" },
      { label: "Duration", value: "8 months" },
    ],
    challenges: [
      {
        title: "Membership acquisition plateau",
        description: "After an initial surge, monthly new member acquisitions had dropped to a level that barely offset churn. The studio relied entirely on word-of-mouth and organic social posts, which had declining reach. There was no systematic acquisition mechanism.",
      },
      {
        title: "Dormant email list",
        description: "Purecycle had collected 3,200+ email addresses over three years — and had not sent a single email in 18 months. The list had significant potential value but needed careful re-engagement to avoid deliverability damage and to rebuild subscriber trust.",
      },
      {
        title: "Premium price resistance in paid acquisition",
        description: "Purecycle's price point was 40–60% above typical gym memberships. Previous ad experiments had attracted price-sensitive leads who converted poorly. The challenge was reaching specifically the audience that would value premium, boutique fitness — not just fitness seekers in general.",
      },
    ],
    solutionSteps: [
      {
        title: "Meta Advertising Funnel Build",
        description: "We built a three-stage Meta funnel: awareness creative showcasing the studio environment and community (video), consideration creative highlighting transformation stories from existing members (carousel), and conversion creative with a specific new member offer (single image). Audiences were built from existing member lookalikes, fitness interest signals, and income/lifestyle indicators in the Markham and Richmond Hill postal codes.",
      },
      {
        title: "Email List Re-Engagement Campaign",
        description: "We ran a carefully managed re-engagement sequence across the dormant list before any promotional sends — allowing subscribers to opt out proactively, cleaning the list of invalid addresses, and warming the sending domain. The re-engagement campaign produced a 38% active rate from a list that had seen zero activity in 18 months.",
      },
      {
        title: "Email Automation Architecture",
        description: "We built a welcome sequence for new leads, a trial-to-member conversion sequence, a win-back series for lapsed members, and a referral programme automation. Each sequence was personalised by class type preference and behavioural triggers. The automated sequences now run continuously with no manual intervention.",
      },
      {
        title: "Community-Driven Creative Strategy",
        description: "Rather than gym equipment or stock fitness imagery, all creative featured real Purecycle members and instructors. This authenticity dramatically improved Meta ad performance and created organic sharing behaviour — members reshared ads featuring themselves or their instructors, significantly extending organic reach.",
      },
    ],
    results: [
      { stat: "+180%", label: "New memberships (8 months)" },
      { stat: "3.4×", label: "Meta advertising ROAS" },
      { stat: "42%", label: "Email open rate (industry avg: 21%)" },
      { stat: "38%", label: "Dormant list re-engagement rate" },
      { stat: "0%", label: "Promotional discounting required" },
      { stat: "8 mo.", label: "To 180% membership growth" },
    ],
    testimonial: {
      quote: "We'd tried running Facebook ads ourselves and got clicks but almost no conversions. Outlier completely changed the approach — the creative strategy, the audience targeting, the email sequences — everything was built around our actual members and our actual community. The results have been remarkable and we haven't needed to discount our memberships once.",
      name: "Priya Sharma",
      role: "Co-Founder, Purecycle Fitness Studios",
    },
    beforeStats: [
      { label: "New Members/Month", value: "~14" },
      { label: "Email List Activity", value: "Dormant (18 mo)" },
      { label: "Paid Advertising Spend", value: "$0" },
      { label: "Member Acquisition Channel", value: "Word of mouth only" },
    ],
    keywords: [
      { term: "boutique fitness markham", before: 18, after: 2 },
      { term: "cycling studio richmond hill", before: 24, after: 1 },
      { term: "fitness classes markham", before: 14, after: 3 },
      { term: "yoga studio richmond hill", before: 22, after: 1 },
      { term: "hiit classes markham", before: 31, after: 2 },
      { term: "spin classes markham", before: 19, after: 1 },
    ],
  },
  {
    slug: "bluesky-roofing",
    client: "BlueSky Roofing & Exteriors",
    tagline: "Map Pack #1 for every primary roofing term in Brampton",
    service: "Local SEO",
    industry: "Construction / Home Services",
    location: "Brampton, ON",
    cardGradient: "from-[#071e3d] to-[#1368aa]",
    accentColor: "#1aa7ec",
    heroHeadline: "A roofing company invisible on Google Maps became the #1 result across Brampton within 5 months.",
    heroBullets: [
      "Achieved Google Map Pack position 1 for all primary roofing search terms in Brampton",
      "+220% increase in Google Business Profile impressions",
      "+85% increase in direct phone calls from Google search",
    ],
    about:
      "BlueSky Roofing & Exteriors has been serving Brampton homeowners since 2009. With 15 years of experience and an impeccable quality record, BlueSky was well-known in the communities they'd served — but completely unknown to homeowners who found roofers by searching on Google. Their competitors had invested heavily in local SEO, occupying the top map pack positions and capturing the majority of inbound calls. BlueSky was losing business to less experienced competitors who simply ranked better.",
    projectDetails: [
      { label: "Services", value: "Local SEO · GBP Management · Review Generation · Citations" },
      { label: "Industry", value: "Roofing & Exteriors" },
      { label: "Location", value: "Brampton, Ontario" },
      { label: "Duration", value: "5 months to map pack #1" },
    ],
    challenges: [
      {
        title: "Unclaimed and incomplete Google Business Profile",
        description: "BlueSky's GBP had been claimed but never properly managed. The profile lacked a service menu, had only 7 photos (mostly poor quality), had not been posted to in over a year, and had just 11 Google reviews at an average of 4.1 stars. Competitors had 80–150 reviews at 4.8+ stars.",
      },
      {
        title: "No consistent NAP data across directories",
        description: "An audit found BlueSky listed in 23 directories with 6 different variations of their business name, 4 different phone numbers, and 3 different address formats. This inconsistency was directly suppressing their local ranking signals.",
      },
      {
        title: "Competitors with years of local SEO investment",
        description: "The top 3 roofing companies in the Brampton map pack had each been actively investing in local SEO for 2–4 years. They had 80–200 reviews, optimised GBPs, and dozens of local citations — a significant head start that required a systematic, accelerated approach to overcome.",
      },
    ],
    solutionSteps: [
      {
        title: "GBP Complete Rebuild",
        description: "We rebuilt the Google Business Profile from the ground up: correct primary and secondary categories (roofing contractor + siding contractor + gutter cleaning), complete service menu with descriptions, 47 professional photos covering crew, completed projects, equipment, and before/after comparisons, and weekly posting schedule targeting seasonal roofing queries.",
      },
      {
        title: "Review Generation Programme",
        description: "We implemented a post-project SMS review request system and trained BlueSky's office team on review generation best practices. Within 90 days, the review count grew from 11 to 73, with an average rating of 4.9 stars — surpassing the review profiles of every competitor in the map pack.",
      },
      {
        title: "Citation Audit & Comprehensive Build-Out",
        description: "We identified and corrected all 6 business name variations, standardised NAP data across every existing listing, removed duplicates, and built new citations in 35 additional directories relevant to the roofing and home services industry. All submissions included photos and expanded business descriptions.",
      },
      {
        title: "Local Content & On-Page Optimisation",
        description: "We optimised every page on the BlueSky website for Brampton-specific roofing searches, added schema markup for local business and services, and created neighbourhood-specific content pages for the 6 major Brampton communities they serve.",
      },
    ],
    results: [
      { stat: "Map #1", label: "All primary roofing terms in Brampton" },
      { stat: "+220%", label: "GBP impressions (6-month period)" },
      { stat: "+85%", label: "Direct phone calls from Google" },
      { stat: "73", label: "Google reviews (from 11 in 90 days)" },
      { stat: "4.9★", label: "Average review rating (from 4.1)" },
      { stat: "5 mo.", label: "To map pack #1" },
    ],
    testimonial: {
      quote: "Before Outlier, we were losing jobs to roofers who weren't half as good as us — just because they showed up on Google Maps and we didn't. Now we're #1 in Brampton and the phone doesn't stop. The review programme they set up has completely changed how homeowners perceive us before they even call.",
      name: "Kevin Bluestein",
      role: "Owner, BlueSky Roofing & Exteriors",
    },
    beforeStats: [
      { label: "Map Pack Position", value: "Not ranked" },
      { label: "Google Reviews", value: "11 (4.1★)" },
      { label: "GBP Impressions/Month", value: "~840" },
      { label: "Monthly Calls from Google", value: "~18/mo" },
    ],
    keywords: [
      { term: "roofing contractor brampton", before: 28, after: 1 },
      { term: "roof repair brampton", before: 19, after: 1 },
      { term: "roofer brampton", before: 34, after: 1 },
      { term: "roof replacement brampton", before: 22, after: 2 },
      { term: "emergency roof repair brampton", before: 41, after: 1 },
      { term: "shingle repair brampton", before: 16, after: 1 },
    ],
  },
];

/* ─── Service icon map ────────────────────────────────────────────── */
const SERVICE_ICONS: Record<string, React.ElementType> = {
  "SEO Services": Search,
  "Google Ads + Local SEO": Target,
  "SEO + Content Marketing": BarChart3,
  "Google Ads + Paid Social": TrendingUp,
  "Paid Social + Email Marketing": Share2,
  "Local SEO": MapPin,
};

/* ─── Our Work Page ───────────────────────────────────────────────── */

export function OurWorkPage() {
  useSeo({
    title: "Our Work | Outlier Toronto Digital Marketing Case Studies",
    description: "Real results from Outlier's client engagements. SEO, paid media, and web projects for Ontario businesses — with full metrics.",
    canonicalPath: "/our-work",
  });
  return (
    <div className="min-h-screen bg-[#f9f8f5]">
      <Nav />

      {/* Hero */}
      <section className="relative bg-[#08090d] pt-32 pb-20 overflow-hidden border-b border-white/8">
        {/* Grid bg */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:72px_72px]" />
        {/* Radial vignette */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(26,86,255,0.10),transparent)]" />
        {/* Animated orbs */}
        <div className="animate-float-orb absolute top-[-60px] right-[-40px] w-[600px] h-[600px] bg-primary/15 rounded-full blur-[130px] opacity-60 pointer-events-none" />
        <div className="animate-float-orb-alt absolute bottom-[-80px] left-[-60px] w-[400px] h-[400px] bg-indigo-500/10 rounded-full blur-[110px] pointer-events-none" />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-[11px] font-black uppercase tracking-widest text-primary mb-4"
          >
            Case Studies
          </motion.p>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl font-black text-white leading-tight max-w-2xl"
            >
              Real results for real Ontario businesses.
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-white/40 text-base max-w-xs leading-relaxed"
            >
              We let the numbers speak. Every engagement below is documented, attributed, and verified.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="py-16 bg-[#f9f8f5]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CASE_STUDIES.map((cs, i) => (
              <motion.div
                key={cs.slug}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ delay: i * 0.08, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -5, transition: { duration: 0.22, ease: "easeOut" } }}
              >
                <Link href={`/our-work/${cs.slug}`} className="group block">
                  <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br ${cs.cardGradient} mb-4 shadow-lg group-hover:shadow-[0_12px_48px_rgba(0,0,0,0.25)] transition-shadow duration-300`}>
                    {/* Geometric accent */}
                    <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.08) 25%, transparent 25%), linear-gradient(225deg, rgba(255,255,255,0.08) 25%, transparent 25%)",
                        backgroundSize: "40px 40px",
                      }}
                    />
                    {/* Glow edge on hover */}
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/25 transition-all duration-300" />
                    {/* Service icon */}
                    <div className="absolute top-6 left-6">
                      <div className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white/18 transition-colors duration-300">
                        {(() => {
                          const Ic = SERVICE_ICONS[cs.service] || TrendingUp;
                          return <Ic className="w-5 h-5 text-white" />;
                        })()}
                      </div>
                    </div>
                    {/* Industry badge */}
                    <div className="absolute top-6 right-6">
                      <span className="text-[10px] font-black uppercase tracking-widest bg-white/15 backdrop-blur-sm text-white px-2.5 py-1 rounded-full border border-white/20">
                        Case Study
                      </span>
                    </div>
                    {/* Key result */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                      <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-1">{cs.service} · {cs.location}</p>
                      <p className="text-white font-black text-xl leading-tight">{cs.client}</p>
                    </div>
                    {/* Hover arrow */}
                    <div className="absolute bottom-6 right-6 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-white group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                  <div className="px-1">
                    <p className="font-black text-[#0e0e0e] text-base mb-1 group-hover:text-primary transition-colors duration-200">{cs.client}</p>
                    <p className="text-gray-500 text-sm">{cs.tagline}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards / trust strip */}
      <section className="py-16 bg-white border-y border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Recognition</p>
              <h2 className="text-3xl font-black text-[#0e0e0e] leading-tight mb-4">
                Recognised for results —<br />not just aesthetics.
              </h2>
              <p className="text-gray-600 text-[15px] leading-relaxed">
                Our work is validated not only by client outcomes but by independent reviews and industry recognition. Over 200 Ontario businesses have trusted Outlier with their digital growth, and we've maintained a 93% client retention rate after year one.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { n: "200+", l: "Ontario businesses grown" },
                { n: "93%", l: "Client retention after year 1" },
                { n: "4.9★", l: "Clutch rating" },
                { n: "10yr+", l: "Active in the market" },
              ].map((s, i) => (
                <motion.div
                  key={s.l}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.07, duration: 0.5 }}
                  whileHover={{ y: -3, transition: { duration: 0.2 } }}
                  className="bg-[#f9f8f5] border border-[#e5e2d9] hover:border-primary/30 hover:shadow-[0_4px_24px_rgba(26,86,255,0.08)] rounded-2xl p-6 text-center transition-all duration-300"
                >
                  <p className="text-3xl font-black text-primary mb-1">{s.n}</p>
                  <p className="text-xs text-gray-500">{s.l}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 bg-[#08090d] overflow-hidden">
        <div className="animate-float-orb absolute top-[-80px] left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-primary/15 rounded-full blur-[120px] opacity-60 pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="container mx-auto px-4 max-w-3xl text-center relative z-10"
        >
          <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-4">Start your case study</p>
          <h2 className="text-4xl font-black text-white leading-tight mb-5">
            Your business could be next.
          </h2>
          <p className="text-white/40 text-[15px] leading-relaxed mb-8 max-w-xl mx-auto">
            Every case study above started with a free strategy call. We assessed the market, identified the opportunity, and built a plan. That's how we start every engagement.
          </p>
          <Link
            href="/contact"
            className="relative overflow-hidden shimmer-button inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors text-[15px] animate-glow-pulse group"
          >
            Book a Free Strategy Call <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

/* ─── Case Study Detail Page ─────────────────────────────────────── */

function CaseStudyPageInner({ cs }: { cs: CaseStudyData }) {
  useSeo({
    title: `${cs.client} Case Study | Outlier Toronto`,
    description: `${cs.tagline} — a digital marketing case study by Outlier for ${cs.location} businesses.`,
    canonicalPath: `/our-work/${cs.slug}`,
  });
  const otherStudies = CASE_STUDIES.filter((c) => c.slug !== cs.slug).slice(0, 3);
  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* ═══ HERO — full dark, accent-branded ══════════════════════ */}
      <section className="relative bg-[#08090d] pt-24 pb-0 overflow-hidden">
        {/* Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:72px_72px]" />
        {/* Accent orbs */}
        <div
          className="animate-float-orb absolute top-[-100px] right-[-80px] w-[700px] h-[700px] rounded-full blur-[150px] opacity-35 pointer-events-none"
          style={{ backgroundColor: cs.accentColor }}
        />
        <div
          className="animate-float-orb-alt absolute bottom-[0px] left-[-100px] w-[500px] h-[500px] rounded-full blur-[130px] opacity-20 pointer-events-none"
          style={{ backgroundColor: cs.accentColor }}
        />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-white/30 text-xs mb-10 pt-4"
          >
            <Link href="/" className="hover:text-white/60 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/our-work" className="hover:text-white/60 transition-colors">Our Work</Link>
            <span>/</span>
            <span className="text-white/60">{cs.client}</span>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-14 items-center pb-16">
            {/* Left */}
            <div>
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.05 }}
                className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border text-xs font-bold mb-6"
                style={{ borderColor: `${cs.accentColor}50`, color: cs.accentColor, backgroundColor: `${cs.accentColor}12` }}
              >
                {cs.service} · {cs.location}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-white leading-[1.06] mb-5"
              >
                {cs.client}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.18 }}
                className="text-lg text-white/55 leading-relaxed mb-8 max-w-lg"
              >
                {cs.heroHeadline}
              </motion.p>

              <motion.ul
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.24 }}
                className="space-y-3 mb-10"
              >
                {cs.heroBullets.map((b) => (
                  <li key={b} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex-shrink-0 mt-0.5 flex items-center justify-center"
                      style={{ backgroundColor: `${cs.accentColor}25` }}
                    >
                      <CheckCircle2 className="w-3.5 h-3.5" style={{ color: cs.accentColor }} />
                    </div>
                    <span className="text-white/65 text-[15px] leading-snug">{b}</span>
                  </li>
                ))}
              </motion.ul>

              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.32 }}
                className="flex flex-wrap gap-3"
              >
                <Link
                  href="/contact"
                  className="relative overflow-hidden shimmer-button inline-flex items-center gap-2 text-white font-bold px-7 py-3.5 rounded-xl hover:opacity-90 transition-opacity text-[15px] group"
                  style={{ backgroundColor: cs.accentColor }}
                >
                  Get Similar Results <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </Link>
                <Link
                  href="/our-work"
                  className="inline-flex items-center gap-2 border border-white/15 hover:border-white/30 text-white/70 font-semibold px-6 py-3.5 rounded-xl transition-all text-[15px]"
                >
                  ← All Work
                </Link>
              </motion.div>
            </div>

            {/* Right — Analytics Dashboard Visual */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block"
            >
              <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${cs.cardGradient} border border-white/10 shadow-[0_0_100px_rgba(0,0,0,0.5)]`}>
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.07) 25%, transparent 25%)", backgroundSize: "44px 44px" }} />

                <div className="p-6">
                  {/* Fake browser chrome top bar */}
                  <div className="bg-black/25 backdrop-blur-sm rounded-xl border border-white/10 overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-3 border-b border-white/8">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/70" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400/70" />
                      <div className="ml-3 flex-1 bg-white/10 rounded h-4 max-w-[180px]" />
                      <div className="text-white/20 text-[10px] font-mono">Analytics</div>
                    </div>

                    {/* Chart area */}
                    <div className="relative p-4 pb-2">
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest">Organic Traffic</p>
                          <p className="text-white font-black text-xl leading-none">{cs.results[0].stat}</p>
                        </div>
                        <div className="flex items-center gap-1.5 bg-green-400/15 border border-green-400/20 rounded-full px-2.5 py-1">
                          <TrendingUp className="w-3 h-3 text-green-400" />
                          <span className="text-green-400 text-[10px] font-black">↑ Up</span>
                        </div>
                      </div>

                      {/* SVG chart */}
                      <div className="relative h-28">
                        <svg viewBox="0 0 400 100" className="w-full h-full" preserveAspectRatio="none">
                          <defs>
                            <linearGradient id={`cg-${cs.slug}`} x1="0" y1="0" x2="0" y2="1">
                              <stop offset="0%" stopColor="white" stopOpacity="0.22" />
                              <stop offset="100%" stopColor="white" stopOpacity="0" />
                            </linearGradient>
                          </defs>
                          {[25, 50, 75].map((y) => (
                            <line key={y} x1="0" y1={y} x2="400" y2={y} stroke="white" strokeOpacity="0.06" strokeWidth="1" />
                          ))}
                          <path d={`M0 92 C30 88, 60 82, 100 75 S160 62, 210 50 S280 28, 330 16 L400 8 L400 100 L0 100 Z`} fill={`url(#cg-${cs.slug})`} />
                          <path d={`M0 92 C30 88, 60 82, 100 75 S160 62, 210 50 S280 28, 330 16 L400 8`} fill="none" stroke="white" strokeWidth="2" strokeOpacity="0.85" strokeLinecap="round" strokeLinejoin="round" />
                          {[[0,92],[100,75],[210,50],[330,16],[400,8]].map(([x,y],i) => (
                            <circle key={i} cx={x} cy={y} r="3.5" fill={cs.accentColor} stroke="white" strokeWidth="1.5" />
                          ))}
                        </svg>
                      </div>

                      {/* X-axis labels */}
                      <div className="flex justify-between px-1 mt-1">
                        {["Jan","Mar","May","Aug","Oct","Dec"].map((m) => (
                          <span key={m} className="text-white/20 text-[8px] font-medium">{m}</span>
                        ))}
                      </div>
                    </div>

                    {/* Stat row */}
                    <div className="grid grid-cols-3 divide-x divide-white/8 border-t border-white/8">
                      {cs.results.slice(0, 3).map((r) => (
                        <div key={r.label} className="p-4 text-center">
                          <p className="text-white font-black text-base leading-none mb-1">{r.stat}</p>
                          <p className="text-white/35 text-[9px] font-medium leading-tight">{r.label}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Floating badge below chart */}
                  <div className="mt-4 flex items-center gap-3">
                    <div className="flex-1 bg-white/8 border border-white/10 rounded-xl p-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ backgroundColor: `${cs.accentColor}30` }}>
                        <BarChart3 className="w-4 h-4" style={{ color: cs.accentColor }} />
                      </div>
                      <div>
                        <p className="text-white/40 text-[9px] font-bold uppercase tracking-widest">Campaign Status</p>
                        <p className="text-white text-xs font-bold">Active · Exceeding targets</p>
                      </div>
                    </div>
                    <div className="bg-white/8 border border-white/10 rounded-xl p-3 text-center">
                      <p className="text-white font-black text-sm">{cs.results[1].stat}</p>
                      <p className="text-white/35 text-[9px]">{cs.results[1].label}</p>
                    </div>
                  </div>
                </div>

                {/* Watermark */}
                <div className="absolute bottom-3 right-5 opacity-10">
                  <p className="text-white font-black text-[10px] uppercase tracking-widest">{cs.client}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ═══ METRICS STRIP ══════════════════════════════════════════ */}
      <section style={{ backgroundColor: cs.accentColor }}>
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-wrap items-stretch divide-x divide-white/20">
            {cs.results.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.06, duration: 0.4 }}
                className="flex-1 min-w-[120px] py-5 px-4 text-center"
              >
                <p className="text-white font-black text-lg leading-none mb-1">{r.stat}</p>
                <p className="text-white/60 text-[9px] font-bold uppercase tracking-widest leading-tight">{r.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ BEFORE vs AFTER ═══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f8f5]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-10">
            <p className="text-[11px] font-black uppercase tracking-widest mb-2" style={{ color: cs.accentColor }}>Diagnostic Snapshot</p>
            <h2 className="text-2xl md:text-3xl font-black text-[#0e0e0e]">Where {cs.client} started — and where they are now</h2>
          </div>
          <div className="rounded-2xl overflow-hidden border border-[#e5e2d9] shadow-sm grid md:grid-cols-2">
            {/* BEFORE */}
            <div className="bg-white p-8 md:p-10 md:border-r border-b md:border-b-0 border-[#e5e2d9]">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full bg-red-50 border border-red-100 flex items-center justify-center flex-shrink-0">
                  <span className="text-red-400 text-xs font-black leading-none">✕</span>
                </div>
                <p className="font-black text-[#0e0e0e] text-[13px] uppercase tracking-widest">Before Outlier</p>
              </div>
              <div className="space-y-0">
                {cs.beforeStats.map((s, i) => (
                  <div key={i} className="flex items-center justify-between py-4 border-b border-[#f0ede6] last:border-0">
                    <p className="text-gray-500 text-sm">{s.label}</p>
                    <p className="font-black text-[#0e0e0e] text-base tabular-nums">{s.value}</p>
                  </div>
                ))}
              </div>
            </div>
            {/* AFTER */}
            <div className="p-8 md:p-10" style={{ backgroundColor: `${cs.accentColor}08` }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${cs.accentColor}20`, border: `1px solid ${cs.accentColor}35` }}>
                  <TrendingUp className="w-4 h-4" style={{ color: cs.accentColor }} />
                </div>
                <p className="font-black text-[#0e0e0e] text-[13px] uppercase tracking-widest">After Outlier</p>
              </div>
              <div className="space-y-0">
                {cs.results.slice(0, 4).map((r, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 14 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.08, duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
                    className="flex items-center justify-between py-4 border-b last:border-0"
                    style={{ borderColor: `${cs.accentColor}18` }}
                  >
                    <p className="text-gray-500 text-sm">{r.label}</p>
                    <p className="font-black text-base tabular-nums" style={{ color: cs.accentColor }}>{r.stat}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ ABOUT + PROJECT DETAILS ════════════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Sidebar */}
            <div className="space-y-5">
              <div className="bg-[#f9f8f5] border border-[#e5e2d9] rounded-2xl p-6 sticky top-24">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-5">Project Details</p>
                <div className="space-y-5">
                  {cs.projectDetails.map((d) => (
                    <div key={d.label} className="border-b border-[#e5e2d9] pb-4 last:border-0 last:pb-0">
                      <p className="text-[9px] font-black uppercase tracking-widest text-gray-400 mb-1">{d.label}</p>
                      <p className="text-[#0e0e0e] font-bold text-sm">{d.value}</p>
                    </div>
                  ))}
                </div>
                <div className="mt-6 rounded-xl p-5 text-white relative overflow-hidden" style={{ backgroundColor: cs.accentColor }}>
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.12)_0%,transparent_60%)]" />
                  <p className="text-[9px] font-black uppercase tracking-widest opacity-60 mb-2 relative">Top Result</p>
                  <p className="font-black text-3xl mb-1 relative">{cs.results[0].stat}</p>
                  <p className="text-sm opacity-70 relative leading-snug">{cs.results[0].label}</p>
                </div>
              </div>
            </div>

            {/* Main */}
            <div className="lg:col-span-2">
              <p className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: cs.accentColor }}>About the Client</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#0e0e0e] leading-[1.1] mb-6">About {cs.client}</h2>
              <p className="text-gray-600 leading-relaxed text-[16px] mb-10">{cs.about}</p>

              {/* Audit findings visual */}
              <div className="rounded-2xl overflow-hidden border border-[#e5e2d9]">
                <div className="flex items-center gap-3 px-5 py-4 bg-[#f9f8f5] border-b border-[#e5e2d9]">
                  <div className="w-2 h-2 rounded-full bg-red-400" />
                  <div className="w-2 h-2 rounded-full bg-yellow-400" />
                  <div className="w-2 h-2 rounded-full bg-green-400" />
                  <span className="ml-2 text-[10px] font-black uppercase tracking-widest text-gray-400">Audit Findings — {cs.client}</span>
                </div>
                <div className="bg-white p-5 space-y-3">
                  {cs.challenges.map((c, i) => (
                    <div key={i} className="flex gap-3 items-start p-3 rounded-xl bg-red-50/60 border border-red-100/80">
                      <div className="w-5 h-5 rounded-full bg-red-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-red-500 text-[9px] font-black">!</span>
                      </div>
                      <div>
                        <p className="text-[12px] font-black text-[#0e0e0e] mb-0.5">{c.title}</p>
                        <p className="text-[11px] text-gray-500 leading-snug line-clamp-2">{c.description.slice(0, 90)}…</p>
                      </div>
                    </div>
                  ))}
                  <div className="flex items-center gap-2 pt-2">
                    <div className="flex-1 h-1 rounded-full bg-[#f0ede6] overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: "100%" }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: cs.accentColor }}
                      />
                    </div>
                    <span className="text-[10px] font-black uppercase tracking-widest" style={{ color: cs.accentColor }}>Issues resolved ✓</span>
                  </div>
                </div>
                <div className="px-5 py-3 bg-[#f9f8f5] border-t border-[#e5e2d9] flex items-center gap-2">
                  <Globe className="w-3.5 h-3.5 text-gray-400" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">{cs.industry} · {cs.location}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CHALLENGES ═════════════════════════════════════════════ */}
      <section className="py-24 bg-[#f9f8f5]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-14 items-start">
            <div className="lg:col-span-2">
              <p className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: cs.accentColor }}>The Situation</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1] mb-5">
                What {cs.client} was up against
              </h2>
              <p className="text-gray-500 text-[15px] leading-relaxed">
                Before engaging Outlier, {cs.client} faced a combination of challenges that were actively suppressing their growth. Here's what we found.
              </p>
            </div>
            <div className="lg:col-span-3 space-y-5">
              {cs.challenges.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white border border-[#e5e2d9] rounded-2xl p-7 relative overflow-hidden group hover:shadow-md transition-shadow duration-300"
                >
                  <div className="absolute top-3 right-5 text-[80px] font-black leading-none select-none opacity-[0.035]" style={{ color: cs.accentColor }}>
                    {String(i + 1).padStart(2, "0")}
                  </div>
                  <div className="flex gap-5 items-start">
                    <div className="w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center font-black text-sm text-white" style={{ backgroundColor: cs.accentColor }}>
                      {String(i + 1).padStart(2, "0")}
                    </div>
                    <div>
                      <h3 className="font-black text-[#0e0e0e] text-[17px] mb-2">{c.title}</h3>
                      <p className="text-gray-600 text-[14.5px] leading-relaxed">{c.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OUR PROCESS — visual timeline ══════════════════════════ */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-xl mb-14">
            <p className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: cs.accentColor }}>Our Approach</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1]">
              How we solved it — step by step
            </h2>
            <p className="text-gray-500 mt-4 text-[15px] leading-relaxed">
              Every engagement is custom-built for the client's specific situation. No templates, no recycled playbooks. Here's exactly what we did for {cs.client}.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            {cs.solutionSteps.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: i * 0.09, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                className="bg-[#f9f8f5] border border-[#e5e2d9] rounded-2xl p-7 hover:border-gray-300 hover:shadow-md transition-all duration-300 relative overflow-hidden group"
              >
                {/* Large step number watermark */}
                <div className="absolute top-4 right-6 text-[72px] font-black leading-none select-none opacity-[0.04] text-[#0e0e0e]">
                  {String(i + 1).padStart(2, "0")}
                </div>
                {/* Step badge */}
                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center font-black text-sm text-white mb-5"
                  style={{ backgroundColor: cs.accentColor }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="font-black text-[#0e0e0e] text-[17px] mb-3">{s.title}</h3>
                <p className="text-gray-600 text-[14.5px] leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>

          <div className="mt-10">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 text-white font-bold px-6 py-3.5 rounded-xl hover:opacity-90 transition-opacity text-sm group"
              style={{ backgroundColor: cs.accentColor }}
            >
              Get a custom strategy like this <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ KEYWORD RANKINGS ══════════════════════════════════════════ */}
      <section className="relative py-24 bg-[#08090d] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div
          className="absolute bottom-0 right-0 w-[600px] h-[400px] rounded-full blur-[160px] opacity-15 pointer-events-none"
          style={{ backgroundColor: cs.accentColor }}
        />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="grid lg:grid-cols-5 gap-14 items-start">
            {/* Left label */}
            <div className="lg:col-span-2">
              <p className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: cs.accentColor }}>Search Position Data</p>
              <h2 className="text-3xl md:text-4xl font-black text-white leading-[1.1] mb-5">
                Keyword rankings — before & after
              </h2>
              <p className="text-white/40 text-[15px] leading-relaxed mb-8">
                Tracked via Google Search Console and Semrush across the full campaign duration. Every position is verified and attributed.
              </p>
              {/* Legend */}
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-white/6 border border-white/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-white/30 text-[10px] font-black">#38</span>
                  </div>
                  <span className="text-white/35 text-sm">Starting position (before Outlier)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg border flex items-center justify-center flex-shrink-0" style={{ backgroundColor: `${cs.accentColor}20`, borderColor: `${cs.accentColor}40` }}>
                    <span className="text-[10px] font-black" style={{ color: cs.accentColor }}>#1</span>
                  </div>
                  <span className="text-white/35 text-sm">Current position (verified)</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-green-500/10 border border-green-500/20 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-3.5 h-3.5 text-green-400" />
                  </div>
                  <span className="text-white/35 text-sm">Positions gained during engagement</span>
                </div>
              </div>
              <p className="text-white/20 text-[11px] mt-8 leading-relaxed">
                Source: Google Search Console · Semrush<br />Positions reflect end-of-campaign data
              </p>
            </div>

            {/* Rankings table */}
            <div className="lg:col-span-3">
              {/* Mock browser chrome */}
              <div className="rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_60px_rgba(0,0,0,0.5)]">
                <div className="flex items-center gap-2 px-4 py-3 bg-white/4 border-b border-white/8">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-400/50" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-400/50" />
                  <div className="ml-3 flex-1 bg-white/8 rounded-md h-5 max-w-[200px] flex items-center px-2.5 gap-1.5">
                    <Search className="w-2.5 h-2.5 text-white/30" />
                    <span className="text-white/25 text-[9px] font-mono">console.google.com/search</span>
                  </div>
                  <span className="text-[9px] font-bold text-white/20 uppercase tracking-widest">Search Console</span>
                </div>
                {/* Column headers */}
                <div className="grid grid-cols-[1fr_72px_72px_56px] gap-2 px-5 py-3 bg-white/3 border-b border-white/6">
                  <p className="text-[9px] font-black uppercase tracking-widest text-white/25">Keyword</p>
                  <p className="text-[9px] font-black uppercase tracking-widest text-white/25 text-center">Before</p>
                  <p className="text-[9px] font-black uppercase tracking-widest text-white/25 text-center">After</p>
                  <p className="text-[9px] font-black uppercase tracking-widest text-white/25 text-center">Δ</p>
                </div>
                {/* Rows */}
                {cs.keywords.map((kw, i) => (
                  <motion.div
                    key={kw.term}
                    initial={{ opacity: 0, y: 8 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.07, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="grid grid-cols-[1fr_72px_72px_56px] gap-2 px-5 py-3.5 border-b border-white/5 last:border-0 items-center hover:bg-white/3 transition-colors"
                  >
                    <p className="text-white/65 text-sm font-medium truncate pr-2">{kw.term}</p>
                    <div className="text-center">
                      <span className="inline-block text-white/25 font-black text-xs bg-white/5 border border-white/8 rounded-md px-2.5 py-1 tabular-nums">
                        #{kw.before}
                      </span>
                    </div>
                    <div className="text-center">
                      <motion.span
                        initial={{ scale: 0.7, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: i * 0.07 + 0.18, duration: 0.35, type: "spring", stiffness: 300 }}
                        className="inline-block font-black text-xs rounded-md px-2.5 py-1 border tabular-nums"
                        style={{ color: cs.accentColor, backgroundColor: `${cs.accentColor}18`, borderColor: `${cs.accentColor}35` }}
                      >
                        #{kw.after}
                      </motion.span>
                    </div>
                    <div className="text-center">
                      <span className="inline-flex items-center gap-0.5 text-green-400 text-xs font-black">
                        <TrendingUp className="w-3 h-3" />
                        {kw.before - kw.after}
                      </span>
                    </div>
                  </motion.div>
                ))}
                {/* Footer bar */}
                <div className="px-5 py-3 bg-white/3 border-t border-white/6 flex items-center justify-between">
                  <span className="text-white/20 text-[10px]">Showing {cs.keywords.length} tracked keywords</span>
                  <span className="text-[10px] font-bold px-2.5 py-1 rounded-full border border-green-500/20 bg-green-500/8 text-green-400">
                    All positions improved ✓
                  </span>
                </div>
              </div>

              {/* Mini performance cards row */}
              <div className="grid grid-cols-3 gap-3 mt-4">
                {[
                  { label: "Avg. rank improvement", value: `+${Math.round(cs.keywords.reduce((acc, k) => acc + (k.before - k.after), 0) / cs.keywords.length)} positions` },
                  { label: "Keywords on page 1", value: `${cs.keywords.filter(k => k.after <= 10).length}/${cs.keywords.length}` },
                  { label: "Top 3 rankings", value: `${cs.keywords.filter(k => k.after <= 3).length} keywords` },
                ].map((stat, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 + i * 0.08, duration: 0.4 }}
                    className="rounded-xl p-4 border border-white/8 bg-white/4 text-center"
                  >
                    <p className="font-black text-sm mb-1" style={{ color: cs.accentColor }}>{stat.value}</p>
                    <p className="text-white/30 text-[10px] leading-snug">{stat.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RESULTS — dark, accent-tinted ══════════════════════════ */}
      <section className="relative py-24 bg-[#08090d] overflow-hidden">
        {/* Accent glow behind */}
        <div
          className="animate-float-orb absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[160px] opacity-18 pointer-events-none"
          style={{ backgroundColor: cs.accentColor }}
        />
        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          <div className="max-w-xl mb-14">
            <p className="text-[11px] font-black uppercase tracking-widest mb-3" style={{ color: cs.accentColor }}>Final Outcomes</p>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-[1.1]">
              The results for {cs.client}
            </h2>
          </div>

          {/* Stat grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-12">
            {cs.results.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
                className="rounded-2xl p-7 text-center border transition-all duration-300"
                style={{ backgroundColor: `${cs.accentColor}10`, borderColor: `${cs.accentColor}25` }}
              >
                <p className="font-black mb-2 leading-none" style={{ color: cs.accentColor, fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)" }}>
                  {r.stat}
                </p>
                <p className="text-white/45 text-xs font-medium leading-snug mt-2">{r.label}</p>
              </motion.div>
            ))}
          </div>

          {/* Performance bar chart */}
          <div className="bg-white/4 border border-white/8 rounded-2xl p-8 mb-10">
            <div className="flex items-center justify-between mb-6">
              <p className="text-white/40 text-[10px] font-black uppercase tracking-widest">Performance Overview</p>
              <span className="text-[10px] font-bold text-white/25 bg-white/5 border border-white/8 px-3 py-1 rounded-full">Full Campaign Duration</span>
            </div>
            <div className="space-y-5">
              {cs.results.slice(0, 4).map((r, i) => (
                <div key={r.label} className="flex items-center gap-4">
                  <p className="text-white/45 text-xs font-medium w-44 flex-shrink-0 leading-tight">{r.label}</p>
                  <div className="flex-1 h-2.5 bg-white/6 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${92 - i * 10}%` }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.12 + 0.3, duration: 1, ease: [0.22, 1, 0.36, 1] }}
                      className="h-full rounded-full"
                      style={{ backgroundColor: cs.accentColor }}
                    />
                  </div>
                  <p className="font-black text-sm w-14 text-right" style={{ color: cs.accentColor }}>{r.stat}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial */}
          {cs.testimonial && (
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-2xl p-10 overflow-hidden border"
              style={{ backgroundColor: `${cs.accentColor}12`, borderColor: `${cs.accentColor}30` }}
            >
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.04)_0%,transparent_60%)]" />
              {/* Large quote mark */}
              <div className="absolute top-6 left-8 text-[120px] leading-none font-black opacity-10 select-none" style={{ color: cs.accentColor }}>"</div>
              <p className="text-white/80 text-lg md:text-xl leading-relaxed italic mb-8 relative max-w-3xl">
                "{cs.testimonial.quote}"
              </p>
              <div className="flex items-center gap-4 relative">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-black text-sm text-white flex-shrink-0" style={{ backgroundColor: cs.accentColor }}>
                  {cs.testimonial.name.split(" ").map((n) => n[0]).join("")}
                </div>
                <div>
                  <p className="text-white font-bold">{cs.testimonial.name}</p>
                  <p className="text-white/45 text-sm">{cs.testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </section>

      {/* ═══ MORE WORK ══════════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f8f5]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-2">More Case Studies</p>
              <h2 className="text-2xl font-black text-[#0e0e0e]">More results from our Ontario clients</h2>
            </div>
            <Link href="/our-work" className="inline-flex items-center gap-2 border border-[#e5e2d9] text-[#0e0e0e] font-bold px-5 py-2.5 rounded-xl text-sm hover:border-primary hover:text-primary transition-colors">
              View All Work <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {otherStudies.map((ocs, i) => (
              <motion.div
                key={ocs.slug}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.5 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <Link href={`/our-work/${ocs.slug}`} className="group block">
                  <div className={`relative rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br ${ocs.cardGradient} mb-4 shadow-md group-hover:shadow-xl transition-shadow duration-300`}>
                    <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(135deg, rgba(255,255,255,0.08) 25%, transparent 25%)", backgroundSize: "40px 40px" }} />
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-white/25 transition-all duration-300" />
                    <span className="absolute top-4 right-4 text-[10px] font-black uppercase tracking-widest bg-white/15 backdrop-blur-sm text-white px-2.5 py-1 rounded-full border border-white/20">Case Study</span>
                    <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/70 via-black/30 to-transparent">
                      <p className="text-white/50 text-[10px] font-black uppercase tracking-widest mb-1">{ocs.service}</p>
                      <p className="text-white font-black text-lg">{ocs.client}</p>
                    </div>
                    <div className="absolute bottom-4 right-4 w-9 h-9 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                      <ArrowRight className="w-4 h-4 text-white" />
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm px-1 group-hover:text-gray-700 transition-colors">{ocs.tagline}</p>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative py-20 bg-[#08090d] overflow-hidden">
        <div className="animate-float-orb absolute top-[-80px] left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-primary/12 rounded-full blur-[130px] pointer-events-none" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="container mx-auto px-4 max-w-3xl text-center relative z-10"
        >
          <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-4">Work with Outlier</p>
          <h2 className="text-3xl font-black text-white mb-5 leading-tight">Ready to build your case study?</h2>
          <p className="text-white/40 text-[15px] leading-relaxed mb-8 max-w-xl mx-auto">
            Book a free strategy call. We'll assess your market, identify your biggest opportunity, and tell you exactly what it would take to achieve results like the ones above.
          </p>
          <Link
            href="/contact"
            className="relative overflow-hidden shimmer-button inline-flex items-center gap-2 bg-primary text-white font-bold px-8 py-4 rounded-xl hover:bg-primary/90 transition-colors text-[15px] animate-glow-pulse group"
          >
            Book Free Strategy Call <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </section>

      <Footer />
    </div>
  );
}

export function CaseStudyPage() {
  const params = useParams<{ slug: string }>();
  const cs = CASE_STUDIES.find((c) => c.slug === params.slug);

  if (!cs) {
    return (
      <div className="min-h-screen bg-[#f9f8f5] flex items-center justify-center">
        <div className="text-center">
          <p className="text-gray-400 mb-4">Case study not found.</p>
          <Link href="/our-work" className="text-primary font-bold hover:underline">← Back to Our Work</Link>
        </div>
      </div>
    );
  }

  return <CaseStudyPageInner cs={cs} />;
}
