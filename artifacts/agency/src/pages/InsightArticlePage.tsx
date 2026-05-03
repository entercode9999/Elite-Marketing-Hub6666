import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, Clock, Calendar, User, Star, BookOpen } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

/* ─── Types ────────────────────────────────────────────────────── */
interface ArticleSection {
  heading?: string;
  body?: string;
  list?: string[];
  callout?: { label: string; items: string[] };
  stat?: { value: string; label: string }[];
}

interface Article {
  slug: string;
  title: string;
  excerpt: string;
  tag: string;
  tagColor: string;
  date: string;
  readTime: string;
  author: string;
  authorRole: string;
  authorInitials: string;
  authorBio: string;
  sections: ArticleSection[];
}

/* ─── Article Data ─────────────────────────────────────────────── */
const ARTICLES: Article[] = [
  {
    slug: "local-seo-2025",
    title: "Why Local SEO Still Wins in 2025 — And How Ontario Businesses Can Dominate It",
    excerpt: "Google's local pack is more competitive than ever. But for businesses that understand the signals, there's never been a clearer path to map pack position 1.",
    tag: "Local SEO",
    tagColor: "#1a56ff",
    date: "April 2025",
    readTime: "8 min read",
    author: "Priya Nair",
    authorRole: "Head of SEO",
    authorInitials: "PN",
    authorBio: "Priya leads Outlier's SEO practice and has built organic growth strategies for 80+ Canadian businesses over 12 years. She developed our proprietary topical authority framework.",
    sections: [
      {
        heading: "Why the local pack still matters more than ever",
        body: "Every few months, someone declares that local SEO is dying. Usually, it's right after a Google algorithm update. Then the data comes in, and the story looks different. What we're seeing across our client base in 2025 is consistent: the three-pack drives between 30–45% of all click volume on local commercial queries — and that number hasn't meaningfully declined in three years, despite AI Overviews, despite featured snippets, despite every new SERP feature Google has thrown at it.\n\nFor Ontario businesses, the picture is even clearer. Mobile searches with local intent have grown 18% year-over-year in the GTA and Hamilton markets specifically. 'Near me' queries are up 24% nationally. The intent is there. The question is whether your business shows up when it matters.",
      },
      {
        heading: "The 5 signals Google weights most in 2025",
        body: "After analysing rankings across 80+ client accounts, here's what we've found moves the needle most in the current local algorithm:",
        list: [
          "Google Business Profile completeness and activity — Not just filled in, but actively managed. Posts, Q&A, photo uploads, service menus with descriptions. GBP engagement signals matter.",
          "Review velocity and recency — More reviews is good. Consistent new reviews is better. A business getting 5 reviews a month beats one that got 200 reviews three years ago and stopped.",
          "NAP citation consistency — Your Name, Address, Phone must be identical across every directory, your website, and your GBP. One digit off on a phone number creates a trust signal conflict.",
          "On-page local relevance — Service pages that explicitly mention the city, neighbourhood, and service together — not keyword-stuffed, but contextually woven in with supporting content.",
          "Backlinks with local context — A link from the Toronto Board of Trade matters more than a link from a generic directory. Local backlinks carry disproportionate weight.",
        ],
      },
      {
        stat: [
          { value: "3–4×", label: "More clicks from position 1 vs position 3 in the local pack" },
          { value: "78%", label: "Of local mobile searches result in an offline purchase" },
          { value: "24%", label: "YoY growth in 'near me' queries across Canada" },
        ],
      },
      {
        heading: "Proximity is overrated — here's what beats it",
        body: "One of the most persistent myths in local SEO is that you can't rank outside your immediate neighbourhood. We've disproved this dozens of times. Meridian Dental Group, headquartered in Etobicoke, now ranks #1 for 'dentist Toronto' — a query dominated by practices physically closer to downtown.\n\nWhat beats proximity is authority. A business with comprehensive GBP profiles, consistent citations, 200+ recent reviews, fast-loading location pages with real service detail, and local backlinks will outrank a competitor two blocks closer to the searcher. Proximity is a tiebreaker, not a ceiling.",
      },
      {
        heading: "The review velocity game",
        body: "We run a systematic review generation process for every local SEO client. The mechanics are simple: a post-service email sequence, a follow-up SMS at 48 hours, and a QR code at point of sale. The results are consistent — most clients see 3–8× their previous monthly review volume in the first 90 days.\n\nMore important than volume is recency. Google's algorithm appears to discount reviews older than 12–18 months. A business with 50 reviews in the last year will often outperform one with 300 reviews that stopped accumulating two years ago.",
      },
      {
        callout: {
          label: "Key Takeaways",
          items: [
            "The local pack drives 30–45% of click volume on local queries — it hasn't shrunk despite AI changes",
            "Review velocity matters more than total review count",
            "Proximity is a tiebreaker, not a ceiling — authority beats location",
            "NAP consistency is foundational and often broken in surprising places",
            "GBP engagement (posts, Q&A, photos) is an active ranking signal",
          ],
        },
      },
      {
        heading: "What to do right now",
        body: "Start with a citation audit. Pull your NAP data from your top 15 directories and compare it against your GBP exactly. Fix every discrepancy — even a suite number difference matters. Then implement a review generation system. Then build one location-specific service page per city you want to rank in. In that order. Businesses that try to do everything at once end up doing nothing particularly well.",
      },
    ],
  },
  {
    slug: "ai-overviews-2025",
    title: "Google's AI Overviews: What It Means for Your Organic Traffic (And What to Do About It)",
    excerpt: "AI-generated summaries are changing what organic rankings actually produce. Here's what we're seeing in client data and how to adapt your SEO strategy now.",
    tag: "SEO",
    tagColor: "#7c3aed",
    date: "March 2025",
    readTime: "11 min read",
    author: "Marcus Reid",
    authorRole: "Founder & CEO",
    authorInitials: "MR",
    authorBio: "Marcus founded Outlier in 2013 and has spent 20 years in growth strategy. He writes about the intersection of search, paid media, and business fundamentals.",
    sections: [
      {
        heading: "What actually changed",
        body: "Google's AI Overviews (AIO) — the AI-generated summaries that appear above organic results for many informational queries — have been live in Canada since mid-2024. The initial panic in the SEO community was significant. The reality, as the data has come in, is more nuanced than either camp predicted.\n\nAcross our client portfolio, the impact on organic traffic varies significantly by query type. Informational queries — 'how to', 'what is', 'why does' — have seen the most disruption. Commercial and transactional queries — 'best', 'near me', 'pricing', 'reviews', '[service] in [city]' — have been largely unaffected. This distinction matters enormously for how you adapt.",
      },
      {
        heading: "The traffic data we've seen",
        body: "Looking across 40+ accounts with at least 12 months of post-AIO data, here's what we're seeing:",
        list: [
          "Informational queries: Average CTR decline of 18–26% for positions 1–3",
          "Commercial queries ('best X', '[service] reviews'): Average CTR decline of 4–8%",
          "Transactional queries ('[service] near me', '[service] [city]'): No statistically significant decline",
          "Branded queries: Slight CTR increase (users clicking through to confirm brand legitimacy)",
          "Featured snippet position: Significant CTR decline when AIO appears above it",
        ],
      },
      {
        stat: [
          { value: "18–26%", label: "CTR decline on informational queries" },
          { value: "<5%", label: "Impact on transactional/local queries" },
          { value: "40%", label: "Of AIO citations go to sites already ranking in top 5" },
        ],
      },
      {
        heading: "Which queries are most affected",
        body: "The clearest pattern we see is intent-based. Queries where users are learning (informational) are most disrupted — Google can often answer the question directly. Queries where users are deciding or buying (commercial/transactional) are much more resilient because Google can't replace the need for a specific business to show up.\n\nFor local businesses — dental practices, law firms, contractors, fitness studios — the impact is minimal. Nobody searching 'emergency dentist Toronto' or 'best roofer Mississauga' is satisfied by an AI summary. They want a specific business with reviews, a phone number, and a website.",
      },
      {
        heading: "The optimization strategy shift",
        body: "The strategic response isn't to panic — it's to rebalance. Businesses that built their organic strategy around high-volume informational content need to rethink the ROI of that content. Businesses whose content is primarily commercial or local are largely unaffected.\n\nWhat we're advising clients to focus on: First, ensure your commercial and transactional content is as strong as possible — these pages are more valuable than ever relative to informational content. Second, for informational content you keep, optimise explicitly for AIO citations — use clear structured answers, FAQ sections with direct language, and authoritative sourcing. Getting cited in an AIO is the new position 0. Third, build brand authority so that branded searches increase — when users see your brand in an AIO citation, they may search for you directly next time.",
      },
      {
        callout: {
          label: "What We're Telling Clients",
          items: [
            "Local and transactional queries are your moat — double down on them",
            "Audit your informational content by revenue contribution, not traffic",
            "Structure informational pages to be AIO-citable (clear answers, FAQs, structured data)",
            "Don't stop creating content — shift the mix toward commercial intent",
            "Brand authority is the long-term hedge against any SERP change",
          ],
        },
      },
      {
        heading: "The bottom line",
        body: "AI Overviews are a significant SERP change, not an SEO apocalypse. For most of our clients — local businesses, professional services, ecommerce — the impact on revenue-driving queries has been minimal. The businesses getting hurt are those who built organic strategies almost entirely on informational content for broad audiences. The lesson is the one SEO has always taught: rankings are a means to revenue, not an end in themselves. Optimise for the queries that produce customers.",
      },
    ],
  },
  {
    slug: "true-cost-bad-website",
    title: "The True Cost of a Bad Website: CRO Data from 50 Ontario Businesses",
    excerpt: "We audited 50 Ontario business websites and measured the revenue impact of poor conversion rate optimisation. The numbers are significant — and fixable.",
    tag: "Web & CRO",
    tagColor: "#20c997",
    date: "March 2025",
    readTime: "9 min read",
    author: "Chloe Armstrong",
    authorRole: "Director of Web & CX",
    authorInitials: "CA",
    authorBio: "Chloe leads Outlier's web and CRO practice. She has redesigned 60+ Ontario business websites with a singular focus on conversion performance over aesthetics.",
    sections: [
      {
        heading: "The methodology",
        body: "Over Q3 and Q4 2024, we conducted full CRO audits on 50 Ontario SMB websites across 8 industry verticals: dental, legal, home services, fitness, real estate, restaurant, retail, and professional services. Each audit included heatmap analysis, session recording review, page speed testing, mobile UX scoring, form analytics, and conversion funnel mapping.\n\nThe businesses ranged from $500K to $12M in annual revenue. Most had been running their websites for 2–5 years without a major update. None had ever had a professional CRO audit.",
      },
      {
        stat: [
          { value: "2.8s", label: "Average mobile load time (industry benchmark: under 2s)" },
          { value: "67%", label: "Of contact forms had at least one friction point causing abandonment" },
          { value: "3.1%", label: "Average conversion rate across all 50 sites (top performers: 6–9%)" },
        ],
      },
      {
        heading: "Finding 1: Speed is the invisible conversion killer",
        body: "The single most consistent finding: slow mobile load times. The average across all 50 sites was 2.8 seconds on 4G. For context, Google's research shows that a 1-second delay in mobile load time reduces conversions by up to 20%. At 2.8 seconds, most of these businesses were leaving significant revenue on the table before a single visitor read a headline.\n\nThe fastest-converting sites in our sample loaded in under 1.6 seconds. The correlation between load time and conversion rate was the strongest statistical relationship we found in the entire dataset.",
      },
      {
        heading: "Finding 2: The form abandonment problem",
        body: "67% of the contact forms we audited had at least one significant friction point — fields that weren't necessary, error messages that didn't explain the error, no progress indicator on multi-step forms, or no mobile optimisation on inputs.\n\nThe worst offender: forms requiring a phone number as a mandatory field before most users had decided they wanted to be contacted. In session recordings, this single element caused 23% of form abandonment on average. Making phone number optional — or removing it entirely from the initial form — consistently improved form completion by 15–30% in our tests.",
      },
      {
        heading: "Finding 3: Service pages with no conversion pathway",
        body: "This was the finding that surprised even us. 38 of the 50 websites had at least one primary service page with no clear next step — no CTA, no form, no phone number, no booking link. Users who navigated to these pages from Google had clearly high intent, and then had nowhere to go.\n\nThe pattern: businesses spend money on traffic (SEO, Google Ads) to get users to pages that don't ask for anything. It's the equivalent of a retail store with locked doors.",
      },
      {
        heading: "What a 1% conversion improvement is actually worth",
        body: "Here's the calculation that tends to change how business owners think about their website. Take a business getting 2,000 monthly website visitors, converting at 3%. That's 60 leads per month. If the average lead value is $500 (a conservative number for most service businesses), that's $30,000 in monthly lead value.\n\nMoving from 3% to 4% conversion — one percentage point — produces 80 leads instead of 60. That's $10,000 in additional monthly lead value, from the same traffic. No additional ad spend. No more SEO. Just a better website. For most of the businesses we audited, that improvement is achievable within 60 days of focused CRO work.",
      },
      {
        callout: {
          label: "The Quick Wins (Under 2 Weeks Each)",
          items: [
            "Compress images and implement lazy loading — typically recovers 0.5–1s of load time",
            "Make phone number optional on contact forms",
            "Add a sticky CTA bar on mobile (phone number + 'Book Now')",
            "Add a form or clear CTA to every service page",
            "Add social proof (reviews, client logos) above the fold on the homepage",
          ],
        },
      },
    ],
  },
  {
    slug: "ppc-budget-waste-7-mistakes",
    title: "PPC Budget Waste: The 7 Mistakes Ontario Businesses Make on Google Ads",
    excerpt: "After auditing over 80 Google Ads accounts, these are the seven mistakes we see consistently — and the ones that are costing the most money.",
    tag: "Google Ads",
    tagColor: "#1aa7ec",
    date: "February 2025",
    readTime: "7 min read",
    author: "Jordan Kim",
    authorRole: "Head of Paid Media",
    authorInitials: "JK",
    authorBio: "Jordan manages $4M+ in annual paid media spend across Google, Meta, and programmatic channels. He specialises in audit and account restructuring for underperforming accounts.",
    sections: [
      {
        heading: "Why self-managed accounts bleed money",
        body: "Google Ads is designed to spend your budget. The platform's defaults, recommendations, and automated bidding strategies are calibrated to maximise Google's revenue — not yours. When we audit self-managed accounts (or accounts run by generalist agencies), we consistently find the same structural issues. In our last 80 audits, the average account had 3–4 of these 7 mistakes active simultaneously.",
      },
      {
        heading: "Mistake 1: No conversion tracking",
        body: "The most common mistake, by a significant margin. 41% of the accounts we audited had no meaningful conversion tracking — meaning Google was optimising campaigns based on clicks, not leads or sales. When you don't track conversions, Google's Smart Bidding has nothing to learn from. You're spending money on an algorithm that has no idea what you actually want.",
      },
      {
        heading: "Mistake 2: Broad match on everything",
        body: "Broad match keywords show your ads for searches that Google considers 'related' to your keyword. In practice, this often means irrelevant traffic. A roofing company bidding on 'roof' in broad match will show ads for 'roofing game' and 'how to roof a birdhouse'. We've seen Ontario service businesses spending 40–60% of their budget on irrelevant queries because of unchecked broad match usage.",
      },
      {
        heading: "Mistake 3: No negative keyword list",
        body: "Connected to Mistake 2: the negative keyword list is one of the most powerful tools in Google Ads and one of the most neglected. In a well-managed account, the negative keyword list is reviewed and expanded weekly. In the accounts we audit, the median negative keyword list has fewer than 20 entries — often added years ago and never revisited.",
      },
      {
        stat: [
          { value: "41%", label: "Of audited accounts had no meaningful conversion tracking" },
          { value: "28%", label: "Average wasted spend on irrelevant queries" },
          { value: "3.8×", label: "Average ROAS improvement after 90-day rebuild" },
        ],
      },
      {
        heading: "Mistakes 4–7: The deeper structural issues",
        list: [
          "Mistake 4: Ignoring the search terms report. Your actual search terms report tells you exactly what queries triggered your ads. Most businesses never look at it. It's the single most actionable report in the platform.",
          "Mistake 5: No ad scheduling. Your ads running at 3am on a Sunday are not converting. Every service business has high-intent hours. Match your budget to those hours.",
          "Mistake 6: Sending all traffic to the homepage. Your ad says 'Emergency Plumber Toronto'. The landing page is your homepage with a slideshow of your team. Every click that doesn't immediately see exactly what it searched for costs you money.",
          "Mistake 7: Letting Google's recommendations run unsupervised. Google's automated recommendations exist to increase spend. 'Add more keywords', 'expand to Display', 'increase budget'. Review every recommendation critically before applying it.",
        ],
      },
      {
        callout: {
          label: "The First Things We Fix in Every Audit",
          items: [
            "Implement proper conversion tracking (phone calls, form submissions, key page views)",
            "Pull 90 days of search term data and add all irrelevant queries as negatives",
            "Switch from broad match to phrase and exact match on primary keywords",
            "Build dedicated landing pages for each ad group's core service",
            "Set up ad scheduling based on actual conversion time-of-day data",
          ],
        },
      },
      {
        heading: "The fix timeline",
        body: "A proper Google Ads account rebuild takes 3–4 weeks. The first 30 days after a rebuild are typically flat — the account is learning. By day 45–60, you'll see meaningful improvement. By day 90, most accounts have materially better ROAS with the same or lower spend. Paid media isn't magic — but a structurally sound account is dramatically more efficient than a broken one.",
      },
    ],
  },
  {
    slug: "topical-authority-playbook",
    title: "Content That Compounds: Our Topical Authority Playbook for 2025",
    excerpt: "Most agencies write content to fill a calendar. We build content architectures that compound in authority over time. Here's exactly how the framework works.",
    tag: "Content",
    tagColor: "#f59e0b",
    date: "January 2025",
    readTime: "12 min read",
    author: "Marcus Reid",
    authorRole: "Founder & CEO",
    authorInitials: "MR",
    authorBio: "Marcus founded Outlier in 2013 and has built content strategies for over 80 Canadian businesses. The topical authority framework he developed is now central to every SEO engagement.",
    sections: [
      {
        heading: "The content calendar vs the content architecture",
        body: "Most businesses approach content as a scheduling problem — what do we publish on Tuesday? The content calendar is the dominant mental model. Publish consistently, stay visible, get traffic. The problem is this model produces content that doesn't compound. Each article is its own island. Traffic comes and goes. The brand doesn't build authority over time.\n\nTopical authority is a different model. Instead of publishing across topics randomly, you build comprehensive coverage of a defined topic cluster — establishing your site as the most complete, reliable resource on a subject. Google's algorithm rewards depth and breadth within a topic. A site with 40 pieces of interconnected, high-quality content on dental SEO will outrank a site with one blog post, regardless of domain age.",
      },
      {
        heading: "What topical authority actually means",
        body: "When Google's algorithm crawls your site, it builds a model of what your site is 'about'. A site with scattered content on random topics is hard to classify and rank. A site with deep, interconnected content on a specific topic signals clear expertise. Google increasingly shows this preference in rankings — comprehensive resource sites outperform thin sites even when the thin site has more backlinks on individual pages.\n\nTopical authority also has a compounding effect: as you publish more interconnected content, each new piece is indexed faster and ranks higher than it would have as a standalone article. Your existing content amplifies the new content, and vice versa.",
      },
      {
        heading: "The hub-and-spoke model we use",
        body: "Our topical authority framework uses a hub-and-spoke architecture. A pillar page (the hub) covers a broad topic comprehensively — typically 2,500–4,000 words. Cluster pages (the spokes) cover specific subtopics in detail — typically 800–1,500 words each. Every cluster page links to the pillar. The pillar links to every cluster. Internal linking is the connective tissue.\n\nFor a Toronto dental practice, the pillar might be 'Complete Guide to Dental Services in Toronto'. The clusters: 'Invisalign Toronto: Cost, Process & What to Expect', 'Emergency Dentist Toronto', 'Dental Implants Toronto vs Bridges', 'Teeth Whitening Options Compared'. Each cluster answers a specific user question in depth. The pillar shows the complete picture.",
      },
      {
        stat: [
          { value: "4.2×", label: "Average traffic increase for clients who complete a topical authority build vs isolated articles" },
          { value: "6–9 mo.", label: "Typical timeline to see compound ranking effects" },
          { value: "2,400+", label: "Keywords on page 1 across Outlier client accounts using this framework" },
        ],
      },
      {
        heading: "How to choose your pillar topics",
        body: "The pillar topic should meet three criteria: it has significant search volume, it's directly relevant to your commercial offering, and you can credibly cover it comprehensively. A law firm shouldn't build a pillar on 'Canadian tax law' if they only practice family law — but 'Toronto family law' is a legitimate pillar.\n\nWe typically identify 3–5 pillar topics per client in the first 90 days. Each pillar then gets 8–12 cluster articles, built out over 6–12 months. The goal is breadth and depth, not just volume.",
      },
      {
        callout: {
          label: "How to Start Building Topical Authority",
          items: [
            "Pick 1 pillar topic (your core service) before building multiple clusters",
            "Map all user questions related to that topic — every stage of the buyer journey",
            "Prioritise clusters by search volume AND commercial intent, not just traffic",
            "Write every cluster to answer one question as definitively as possible",
            "Link every cluster to your pillar — and update the pillar to link back",
            "Give it 6 months before evaluating. The compound effect is slow to start and then rapid.",
          ],
        },
      },
      {
        heading: "The timeline and what to expect",
        body: "Topical authority builds are a 9–18 month strategy, not a quick win. In months 1–3, you publish and index. In months 4–6, you start seeing individual cluster pages rank and drive traffic. In months 7–12, the compound effect kicks in — Google recognises your site as a topical authority and starts ranking new content faster. In year 2, organic traffic from the cluster becomes self-sustaining. Every article you publish after that gets indexed faster and ranks higher than it would have without the architecture beneath it.",
      },
    ],
  },
  {
    slug: "meridian-dental-map-pack",
    title: "How We Took Meridian Dental Group to Map Pack Position 1 in Toronto",
    excerpt: "A deep-dive into the 11-month SEO engagement that rebuilt a dental group's entire digital presence — from 140+ crawl errors to dominating every primary keyword.",
    tag: "Case Study",
    tagColor: "#e85d04",
    date: "February 2025",
    readTime: "14 min read",
    author: "Priya Nair",
    authorRole: "Head of SEO",
    authorInitials: "PN",
    authorBio: "Priya led the Meridian Dental engagement from initial audit through to month 11 results. She has run local SEO campaigns for 30+ healthcare practices across Ontario.",
    sections: [
      {
        heading: "Where they started",
        body: "Meridian Dental Group came to us in February 2024 with a specific problem: they'd been operating four Toronto dental clinics since 2011 and ranking nowhere meaningful on Google. Page 3–5 for their most important service keywords. Zero map pack visibility despite four physical locations. Fewer than 5 Google reviews per location, all more than 2 years old.\n\nThey'd worked with two previous agencies. Both produced monthly reports. Neither moved rankings. They came to us after their office manager found our content on local SEO and noticed we actually talked about mechanics — not just outcomes.",
      },
      {
        heading: "The audit findings",
        body: "We spent weeks 1–2 in pure diagnostic mode. What we found:",
        list: [
          "140+ crawl errors — broken internal links, redirect chains, duplicate content across all 4 location pages",
          "Page speed score of 31/100 on mobile — caused by uncompressed images and render-blocking scripts",
          "All 4 Google Business Profiles were unclaimed or partially filled — no service menus, no descriptions, wrong categories",
          "NAP data inconsistent across 23 of the 45 major directories we checked",
          "Zero content strategy — service pages averaging 180 words, no blog, no procedure guides",
          "No review generation system — organic review volume had been less than 1 per month across all locations",
        ],
      },
      {
        stat: [
          { value: "140+", label: "Crawl errors resolved in first 6 weeks" },
          { value: "31→91", label: "Page speed score improvement" },
          { value: "120+", label: "New 5-star reviews generated in first 90 days" },
        ],
      },
      {
        heading: "What we built",
        body: "The engagement ran in four parallel workstreams:\n\n**Technical Foundation (weeks 1–6):** We resolved all 140+ crawl errors, implemented canonical tags across duplicate location pages, rebuilt the site's internal linking architecture, and optimised images and scripts to bring mobile page speed from 31 to 91. Core Web Vitals went from red to green across all pages.\n\n**GBP Rebuild (weeks 2–8):** All four Google Business Profiles were claimed and rebuilt from scratch. Service menus with descriptions, professional photographs, Q&A content, complete categories, and business descriptions optimised for local relevance. We also implemented a systematic review generation programme — a post-appointment email sequence plus 48-hour SMS follow-up. Within 90 days, all four locations had 30+ new reviews each.\n\n**Content Architecture (weeks 4–20):** We built a complete topical authority structure: a pillar page for 'Toronto Dental Services', four location-specific service pages (one per clinic), 24 procedure guides covering every primary dental service, and a monthly blog programme targeting informational dental queries at every stage of the patient journey.\n\n**Citation and Link Building (ongoing):** We audited and corrected NAP data across all 45 directories, built new citations on 20+ local and healthcare-specific directories, and acquired local backlinks from Toronto healthcare associations, dental directories, and local press.",
      },
      {
        heading: "The results at 11 months",
        body: "By month 11, every primary keyword target was on page 1. 'Dentist Toronto', 'emergency dentist Toronto', and 'dental implants Toronto' were all position 1 or 2. All four locations appeared in the map pack for their respective neighbourhood searches. Organic traffic was up 312%. Patient enquiries from organic channels were up 187%.\n\nThe result that mattered most to the client: their front desk went from averaging 12 organic call enquiries per month across all locations to over 80 — all without a single dollar of paid advertising.",
      },
      {
        callout: {
          label: "The Lessons That Apply to Every Local Business",
          items: [
            "Technical issues silently cap how much content and links can move rankings",
            "GBP is not a set-and-forget asset — it requires active management",
            "Review velocity matters more than total review count",
            "Content without architecture produces traffic, not authority",
            "Patient/client outcomes don't improve until you fix the foundation first",
          ],
        },
      },
    ],
  },
  {
    slug: "gta-home-pros-google-ads",
    title: "4.2× ROAS in 90 Days: Inside the GTA Home Pros Google Ads Rebuild",
    excerpt: "A self-managed Google Ads account was burning money with no data, no structure, and no conversion tracking. We rebuilt it from scratch.",
    tag: "Case Study",
    tagColor: "#e85d04",
    date: "January 2025",
    readTime: "10 min read",
    author: "Jordan Kim",
    authorRole: "Head of Paid Media",
    authorInitials: "JK",
    authorBio: "Jordan led the GTA Home Pros paid media engagement. He has rebuilt 50+ underperforming Google Ads accounts and manages over $4M in annual ad spend.",
    sections: [
      {
        heading: "The account we inherited",
        body: "GTA Home Pros — a multi-service home improvement company covering the Greater Toronto Area — had been running Google Ads in-house for 18 months when they came to us. Their monthly budget was $8,000. Their average ROAS was 0.9 — meaning they were spending $8,000 to generate $7,200 in attributed revenue.\n\nWhen we pulled account access on day one, the problems were immediate and significant: no conversion tracking, 2 campaigns with 140+ keywords each in broad match, a negative keyword list with 11 entries (all added in the first month and never updated), all traffic sent to the homepage, no ad scheduling, and ad copy that hadn't been refreshed in 8 months.",
      },
      {
        heading: "The 90-day rebuild plan",
        body: "We scoped a full account rebuild over 12 weeks. The first two weeks were data collection and setup — zero new spend. Installing proper conversion tracking (phone calls, form submissions), pulling 18 months of search term data, and auditing every keyword for relevance.\n\nWeeks 3–4: Account restructure. We reduced from 2 campaigns with 140+ keywords to 8 campaigns with 10–15 tightly-themed keywords each, all in phrase or exact match. We built a 200+ negative keyword list from the search term audit. We set up ad scheduling based on historical conversion data (weekdays 7am–7pm, Saturday 8am–2pm).\n\nWeeks 5–8: Landing pages. We built 6 service-specific landing pages — one for each primary service category. Each page had a single CTA, a form above the fold, phone click-to-call, trust signals (reviews, years in business, service area), and page speed under 2 seconds on mobile.\n\nWeeks 9–12: Optimisation and bidding strategy. With 30 days of clean conversion data, we moved from manual CPC to Target CPA bidding. Budgets shifted from broad awareness to the 3 campaigns showing the lowest cost per lead.",
      },
      {
        stat: [
          { value: "0.9×", label: "ROAS before rebuild" },
          { value: "4.2×", label: "ROAS at 90 days" },
          { value: "-54%", label: "Cost per booked job" },
        ],
      },
      {
        heading: "The results",
        body: "By day 90, the account was generating 4.2× ROAS on the same $8,000 monthly budget. Cost per booked job had dropped from $210 to $97. Volume of booked jobs had more than doubled. The client's operations team was stretched — a problem they hadn't had before.\n\nThe changes that drove the most improvement, in order: conversion tracking (allowed proper optimisation), negative keyword list (eliminated 28% of wasted spend immediately), service-specific landing pages (improved quality score and conversion rate simultaneously), and ad scheduling (stopped spending budget on hours with near-zero conversion rates).",
      },
      {
        callout: {
          label: "What This Account Needed (And Most Self-Managed Accounts Do)",
          items: [
            "Conversion tracking before anything else — you can't optimise what you don't measure",
            "Tightly themed ad groups with phrase/exact match keywords",
            "A negative keyword list built from actual search term data",
            "Landing pages designed for one thing — booking the service advertised",
            "Time to let Smart Bidding learn with clean conversion data (4–6 weeks minimum)",
          ],
        },
      },
    ],
  },
  {
    slug: "citation-audit-framework",
    title: "The Citation Audit Framework We Use for Every New Local SEO Client",
    excerpt: "Inconsistent NAP data across directories is one of the most common — and most damaging — issues we find in local SEO audits. Here's how to fix it systematically.",
    tag: "Local SEO",
    tagColor: "#1a56ff",
    date: "December 2024",
    readTime: "6 min read",
    author: "Priya Nair",
    authorRole: "Head of SEO",
    authorInitials: "PN",
    authorBio: "Priya runs Outlier's local SEO practice and has conducted citation audits for 80+ Ontario businesses. She developed the NAP audit process used across all Outlier engagements.",
    sections: [
      {
        heading: "Why citations matter more than most businesses think",
        body: "A citation is any online mention of your business's Name, Address, and Phone number — collectively called NAP. Citations appear in directories (Google, Yelp, YellowPages), industry-specific listings (Healthgrades for medical, Avvo for legal), local business directories, chamber of commerce websites, and anywhere else your business information appears online.\n\nGoogle uses citation consistency as a trust signal. When your NAP data is consistent across the web, it confirms to Google that you are a real, established business at a specific location. When it's inconsistent — different phone numbers, different suite numbers, different business names — it creates ambiguity that suppresses local rankings. We've seen businesses lose map pack positions for nothing more than a suite number discrepancy across directories.",
      },
      {
        heading: "The most common citation problems we find",
        list: [
          "Old phone numbers — businesses that changed phone numbers years ago and never updated directories",
          "Suite number inconsistencies — '123 Main St' vs '123 Main St Suite 400' across different listings",
          "Business name variations — 'Smith Law' vs 'Smith Law Group' vs 'Smith & Associates Law' on different platforms",
          "Duplicate listings — multiple Google Business Profile listings for the same location, or duplicates on Yelp after a business moved",
          "Closed locations still listed — particularly common for businesses that moved or merged",
          "Wrong categories on key directories — often set incorrectly during initial setup and never revisited",
        ],
      },
      {
        heading: "The audit process",
        body: "Our citation audit runs as follows. First, we establish the canonical NAP — the exact business name, address, and phone number as it appears on the business's website and Google Business Profile. This becomes the source of truth.\n\nSecond, we pull citation data from BrightLocal (which aggregates data from 50+ major directories) and cross-reference against the canonical NAP. Every discrepancy is logged.\n\nThird, we tier the discrepancies by importance. Tier 1: Core directories (Google, Apple Maps, Bing Places, Facebook, Yelp, YellowPages) — fix these first. Tier 2: Industry-specific directories relevant to the client's vertical. Tier 3: Smaller general directories — fix these last.\n\nFourth, we submit corrections directly where platforms allow it, or create new listings where the old ones can't be edited. Duplicate listings are flagged and removed.\n\nFifth, we set a 60-day review cycle — directories sometimes revert changes or re-scrape incorrect data from old sources.",
      },
      {
        stat: [
          { value: "50+", label: "Directories checked in every citation audit" },
          { value: "73%", label: "Of Ontario SMB clients had at least one Tier 1 citation error" },
          { value: "4–8 wks", label: "Typical timeline to see ranking improvements after citation cleanup" },
        ],
      },
      {
        callout: {
          label: "Do Your Own Quick Citation Audit",
          items: [
            "Search '[Your Business Name] + your city' on Google — check every result for NAP accuracy",
            "Check your Apple Maps listing (many businesses never claim this)",
            "Search your old phone number if you've changed numbers — old listings often still show it",
            "Check Bing Places — often overlooked and often wrong",
            "Look for duplicate Google Business Profile listings by searching your business on Google Maps",
          ],
        },
      },
      {
        heading: "How long it takes to see results",
        body: "Citation cleanup is not instant. Google re-crawls directories on different schedules — some weekly, some monthly. The typical timeline for seeing ranking improvements after a thorough citation cleanup is 4–8 weeks. For businesses with severe inconsistency issues, the improvement can be significant. We had one Toronto dental client move from position 11 to position 4 in the map pack within 6 weeks of citation cleanup alone — no content, no link building, just clean NAP data.",
      },
    ],
  },
];

const TAG_COLORS: Record<string, string> = {
  "Local SEO": "#1a56ff",
  "SEO": "#7c3aed",
  "Web & CRO": "#20c997",
  "Case Study": "#e85d04",
  "Google Ads": "#1aa7ec",
  "Content": "#f59e0b",
};

const RELATED = [
  { slug: "local-seo-2025", title: "Why Local SEO Still Wins in 2025", tag: "Local SEO" },
  { slug: "ppc-budget-waste-7-mistakes", title: "The 7 PPC Budget Mistakes Ontario Businesses Make", tag: "Google Ads" },
  { slug: "topical-authority-playbook", title: "Content That Compounds: The Topical Authority Playbook", tag: "Content" },
  { slug: "true-cost-bad-website", title: "The True Cost of a Bad Website", tag: "Web & CRO" },
  { slug: "meridian-dental-map-pack", title: "How We Hit Map Pack #1 for Meridian Dental", tag: "Case Study" },
  { slug: "ai-overviews-2025", title: "Google's AI Overviews: What to Do About It", tag: "SEO" },
];

/* ─── Article Page ──────────────────────────────────────────────── */
export function InsightArticlePage() {
  const { slug } = useParams<{ slug: string }>();
  const article = ARTICLES.find((a) => a.slug === slug);

  if (!article) {
    return (
      <div className="min-h-screen bg-[#f9f8f5]">
        <Nav />
        <div className="container mx-auto px-4 max-w-3xl py-32 text-center">
          <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-4">Article not found</p>
          <h1 className="text-4xl font-black text-[#0e0e0e] mb-6">This article doesn't exist.</h1>
          <Link href="/insights" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm">
            <ArrowLeft className="w-4 h-4" /> Back to Insights
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  const related = RELATED.filter((r) => r.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen bg-white">
      <Nav />

      {/* Hero */}
      <section className="relative bg-[#08090d] pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff04_1px,transparent_1px),linear-gradient(to_bottom,#ffffff04_1px,transparent_1px)] bg-[size:72px_72px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[500px] rounded-full blur-[150px] pointer-events-none"
          style={{ backgroundColor: `${article.tagColor}18` }} />
        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <Link href="/insights" className="inline-flex items-center gap-2 text-white/40 hover:text-white/70 text-sm font-medium mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" /> All Insights
            </Link>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}>
            <span
              className="inline-block text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-full border mb-5"
              style={{ color: article.tagColor, backgroundColor: `${article.tagColor}18`, borderColor: `${article.tagColor}35` }}
            >
              {article.tag}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-white leading-[1.1] mb-6 max-w-3xl">{article.title}</h1>
            <p className="text-white/45 text-[16px] leading-relaxed mb-8 max-w-2xl">{article.excerpt}</p>
            <div className="flex flex-wrap items-center gap-5 text-white/40 text-sm">
              <div className="flex items-center gap-2">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center font-black text-white text-[11px]"
                  style={{ backgroundColor: article.tagColor }}
                >
                  {article.authorInitials}
                </div>
                <span className="font-medium text-white/70">{article.author}</span>
                <span className="text-white/25">·</span>
                <span>{article.authorRole}</span>
              </div>
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> {article.date}
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> {article.readTime}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Accent bar */}
      <div className="h-1 w-full" style={{ backgroundColor: article.tagColor }} />

      {/* Article body */}
      <article className="py-16">
        <div className="container mx-auto px-4 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="space-y-10"
          >
            {article.sections.map((section, i) => (
              <div key={i}>
                {section.heading && (
                  <h2 className="text-2xl font-black text-[#0e0e0e] leading-snug mb-4">{section.heading}</h2>
                )}
                {section.body && (
                  <div className="space-y-4">
                    {section.body.split("\n\n").map((para, pi) => (
                      <p key={pi} className="text-gray-600 text-[16px] leading-[1.8]"
                        dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, "<strong class='text-[#0e0e0e] font-bold'>$1</strong>") }}
                      />
                    ))}
                  </div>
                )}
                {section.list && (
                  <ul className="space-y-3 mt-4">
                    {section.list.map((item, li) => (
                      <li key={li} className="flex items-start gap-3">
                        <div
                          className="w-1.5 h-1.5 rounded-full mt-2.5 flex-shrink-0"
                          style={{ backgroundColor: article.tagColor }}
                        />
                        <p className="text-gray-600 text-[15px] leading-relaxed">{item}</p>
                      </li>
                    ))}
                  </ul>
                )}
                {section.stat && (
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 my-6">
                    {section.stat.map((s, si) => (
                      <div
                        key={si}
                        className="rounded-2xl p-5 text-center border"
                        style={{ backgroundColor: `${article.tagColor}08`, borderColor: `${article.tagColor}20` }}
                      >
                        <p className="text-3xl font-black mb-1" style={{ color: article.tagColor }}>{s.value}</p>
                        <p className="text-gray-500 text-[11px] leading-snug">{s.label}</p>
                      </div>
                    ))}
                  </div>
                )}
                {section.callout && (
                  <div className="bg-[#08090d] rounded-2xl p-7 my-6">
                    <p className="text-[10px] font-black uppercase tracking-widest mb-4" style={{ color: article.tagColor }}>
                      {section.callout.label}
                    </p>
                    <ul className="space-y-3">
                      {section.callout.items.map((item, ci) => (
                        <li key={ci} className="flex items-start gap-3">
                          <div className="w-5 h-5 rounded-md flex items-center justify-center flex-shrink-0 mt-0.5"
                            style={{ backgroundColor: `${article.tagColor}20` }}>
                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: article.tagColor }} />
                          </div>
                          <p className="text-white/70 text-[14px] leading-relaxed">{item}</p>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </motion.div>

          {/* Author bio */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-16 border-t border-[#e5e2d9] pt-10"
          >
            <div className="flex items-start gap-5 bg-[#f9f8f5] border border-[#e5e2d9] rounded-2xl p-6">
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center font-black text-white text-lg flex-shrink-0"
                style={{ backgroundColor: article.tagColor }}
              >
                {article.authorInitials}
              </div>
              <div>
                <p className="font-black text-[#0e0e0e] text-[16px] mb-0.5">{article.author}</p>
                <p className="text-[11px] font-bold uppercase tracking-widest mb-3" style={{ color: article.tagColor }}>{article.authorRole}</p>
                <p className="text-gray-500 text-[14px] leading-relaxed">{article.authorBio}</p>
              </div>
            </div>
          </motion.div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 relative bg-primary rounded-2xl p-8 overflow-hidden text-center"
          >
            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.08)_0%,transparent_60%)]" />
            <div className="relative">
              <p className="text-white font-black text-xl mb-2">Want us to apply this to your business?</p>
              <p className="text-white/60 text-sm mb-5">Book a free audit — we'll assess your specific situation and show you the highest-leverage opportunities.</p>
              <Link href="/free-audit" className="inline-flex items-center gap-2 bg-white text-primary font-bold px-6 py-3 rounded-xl hover:bg-white/90 transition-colors text-sm group">
                Get a Free Audit <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </Link>
            </div>
          </motion.div>
        </div>
      </article>

      {/* Related articles */}
      <section className="py-16 bg-[#f9f8f5] border-t border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-4xl">
          <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-6">More From Insights</p>
          <div className="grid md:grid-cols-3 gap-5">
            {related.map((r, i) => (
              <motion.div
                key={r.slug}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
              >
                <Link
                  href={`/insights/${r.slug}`}
                  className="flex flex-col h-full bg-white border border-[#e5e2d9] rounded-xl p-5 hover:border-primary/30 hover:shadow-sm transition-all group"
                >
                  <span
                    className="text-[10px] font-black uppercase tracking-widest mb-3 block"
                    style={{ color: TAG_COLORS[r.tag] ?? "#1a56ff" }}
                  >
                    {r.tag}
                  </span>
                  <p className="font-bold text-[#0e0e0e] text-sm leading-snug group-hover:text-primary transition-colors flex-1">{r.title}</p>
                  <div className="flex items-center gap-1 mt-4 text-primary font-bold text-xs">
                    Read <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <Link href="/insights" className="inline-flex items-center gap-2 border border-[#e5e2d9] text-[#0e0e0e] font-bold px-5 py-2.5 rounded-xl hover:border-primary/30 text-sm transition-colors">
              <BookOpen className="w-4 h-4" /> View all articles
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
