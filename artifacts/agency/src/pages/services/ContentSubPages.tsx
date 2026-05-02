import { SubServicePage, type SubServiceData } from "@/pages/SubServicePage";

const RELATED_CONTENT = [
  { label: "Content Marketing Overview", href: "/content-marketing-service" },
  { label: "Technical SEO", href: "/technical-seo-service" },
  { label: "Local SEO Service", href: "/local-seo-service" },
  { label: "Google Ads Management", href: "/google-ads-management" },
];

/* ── BLOG WRITING ── */
const blogData: SubServiceData = {
  parentLabel: "Content Marketing", parentHref: "/content-marketing-service",
  label: "Blog Writing & Management",
  headline: "Long-form content that ranks and converts —",
  italic: "written by real experts.",
  subhead: "We don't use AI to write your blog posts and call it content marketing. Every article is researched by our team, structured for the target query, written by a specialist writer, and edited for E-E-A-T compliance — because Google's quality rater guidelines now reward demonstrable expertise, not just keyword density.",
  stats: [{ value: "2,000–4,000", label: "Words per article" }, { value: "E-E-A-T", label: "Compliant writing" }, { value: "3–6 mo", label: "Avg time to rank" }],
  deliverables: [
    { title: "Keyword Research & Brief", body: "Every article begins with a keyword brief: target query, search intent analysis, word count target, heading structure, and required internal links." },
    { title: "Expert-Level Research", body: "We research each topic using primary sources, industry data, competitor top-ranking articles, and — for specialised topics — interviews with subject matter experts." },
    { title: "Structured for Intent", body: "Article structure matched to search intent: listicles for 'best X' queries, pillar pages for informational queries, comparison pieces for 'X vs Y' queries." },
    { title: "On-Page Optimisation", body: "Title tag, meta description, H1-H3 hierarchy, image alt text, internal links, and schema markup applied before every article is published." },
  ],
  process: [
    { title: "Keyword Selection", body: "From the content strategy roadmap, we select the target keyword for each article based on difficulty score, search volume, and topical cluster priority." },
    { title: "Research & Write", body: "Research phase (2–3 days), writing (1–2 days), editing and E-E-A-T review (1 day). Articles delivered with source documentation." },
    { title: "Publish & Track", body: "Article published with full on-page optimisation. Added to rank tracking. Performance reviewed at 30, 60, and 90 days with update recommendations." },
  ],
  faq: [
    { q: "Do you use AI to write articles?", a: "We use AI for research assistance and outline generation, but every article is written by a human specialist writer and reviewed by an editor. AI-generated content fails E-E-A-T requirements and Google quality reviews." },
    { q: "How many articles per month?", a: "Most clients start with 4–8 articles/month. For aggressive topical authority building in competitive niches, 12–16/month is recommended. We'll advise based on your competition level." },
  ],
  related: RELATED_CONTENT,
  cta: "Content that ranks requires expertise, not just keywords.",
};

/* ── TOPICAL AUTHORITY ── */
const topicalData: SubServiceData = {
  parentLabel: "Content Marketing", parentHref: "/content-marketing-service",
  label: "Topical Authority Clusters",
  headline: "Build the most comprehensive resource",
  italic: "in your niche.",
  subhead: "Topical authority is how Google decides which sites deserve to rank for competitive queries. A single page rarely beats a site with 40 related pages covering every angle of a topic. We build the cluster architecture that signals to Google you're the definitive resource in your niche.",
  stats: [{ value: "40–80", label: "Pages per cluster" }, { value: "Pillar", label: "+ cluster architecture" }, { value: "+312%", label: "Avg traffic after 12 mo" }],
  deliverables: [
    { title: "Topical Map", body: "A full map of every query in your niche — organised into pillar topics, cluster subtopics, and supporting pages. Usually 40–120 content opportunities." },
    { title: "Pillar Pages", body: "Comprehensive 3,000–5,000-word pillar pages covering the main topic, internally linking to every cluster page and establishing the cluster's authority base." },
    { title: "Cluster Articles", body: "Supporting articles covering every angle of the pillar topic: subtopics, FAQs, comparison pieces, and how-to guides. Each one internally linked back to the pillar." },
    { title: "Internal Link Architecture", body: "A systematic internal linking plan connecting every cluster article to its pillar and to relevant cluster pages — passing authority throughout the cluster." },
  ],
  process: [
    { title: "Cluster Mapping", body: "Full topical map of your niche — every query identified, organised by cluster, and prioritised by revenue potential and competition level." },
    { title: "Build the Pillar", body: "Pillar page published first, establishing the cluster's authority base. This page becomes the hub that all cluster articles link back to." },
    { title: "Fill the Cluster", body: "Cluster articles published on a systematic schedule. Each one internally linked. Cluster growth tracked monthly against authority benchmarks." },
  ],
  faq: [
    { q: "How is a topical authority cluster different from just writing blog posts?", a: "Random blog posts build topical breadth without depth — they don't signal authority to Google. A cluster is a structured network where every piece of content reinforces every other piece. It's the difference between a library and a collection of random books." },
    { q: "How long does it take to see results from a topical cluster?", a: "The first meaningful results typically appear at 4–6 months. Full compound authority — where new articles rank faster because of the established cluster — emerges at 9–18 months." },
  ],
  related: RELATED_CONTENT,
  cta: "Your competitors built their content infrastructure years ago. Start now.",
};

/* ── EMAIL MARKETING ── */
const emailData: SubServiceData = {
  parentLabel: "Content Marketing", parentHref: "/content-marketing-service",
  label: "Email Marketing & Automation",
  headline: "$42 ROI for every $1 spent.",
  italic: "The highest-return channel in your stack.",
  subhead: "Email marketing has the highest ROI of any digital marketing channel — when it's done right. Most businesses under-invest in email because their last campaign underperformed. We build the list segmentation, automation sequences, and broadcast strategy that makes email a consistent monthly revenue channel.",
  stats: [{ value: "42:1", label: "Avg email marketing ROI" }, { value: "28%", label: "Avg open rate" }, { value: "Lifecycle", label: "Automation included" }],
  deliverables: [
    { title: "Welcome & Onboarding Sequence", body: "A 5–8 email sequence delivered to every new subscriber. Introduces your brand, establishes trust, and guides new contacts toward their first conversion." },
    { title: "Broadcast Campaign Calendar", body: "Monthly broadcast email calendar — newsletters, promotions, case studies, and seasonal campaigns — designed to maintain engagement and drive consistent revenue." },
    { title: "Re-Engagement Sequences", body: "Automated sequences targeting inactive subscribers before they're removed. Re-engagement campaigns recover 10–20% of dormant contacts on average." },
    { title: "Segmentation Strategy", body: "List segmented by behaviour (opened, clicked, purchased) so each segment receives the most relevant content. Segmented campaigns outperform broadcast by 2–3x." },
  ],
  process: [
    { title: "Audit & Platform Setup", body: "Email platform audit (or setup if new). List cleaning and segmentation. Deliverability configuration: SPF, DKIM, DMARC, and warm-up if needed." },
    { title: "Sequence Build", body: "Welcome sequence, re-engagement sequence, and any transaction-triggered flows built, tested across email clients, and activated." },
    { title: "Broadcast & Optimise", body: "Monthly broadcast campaigns delivered on schedule. A/B testing on subject lines and send times. Monthly report on open rate, CTR, and revenue attributed." },
  ],
  faq: [
    { q: "What email platform do you work with?", a: "We work with Klaviyo, Mailchimp, ActiveCampaign, HubSpot, and ConvertKit. We'll recommend the best platform for your list size and automation requirements." },
    { q: "How do you grow an email list?", a: "We build list-growth strategies integrated with your existing traffic: lead magnets, content upgrades, exit-intent popups, and paid traffic opt-in campaigns. We don't purchase lists — ever." },
  ],
  related: RELATED_CONTENT,
  cta: "Your email list is your most owned marketing asset. Let's build it.",
};

/* ── SOCIAL MEDIA ── */
const socialData: SubServiceData = {
  parentLabel: "Content Marketing", parentHref: "/content-marketing-service",
  label: "Social Media Management",
  headline: "Organic social that builds the audience",
  italic: "that converts.",
  subhead: "Organic social doesn't generate leads the same day — but it builds the trust and familiarity that makes every other marketing channel more effective. We manage your social presence as a brand-building engine, not a posting schedule.",
  stats: [{ value: "3–5x", label: "Posts per week" }, { value: "3", label: "Platforms avg" }, { value: "Monthly", label: "Strategy + analytics" }],
  deliverables: [
    { title: "Platform-Specific Strategy", body: "Different content works on LinkedIn, Instagram, TikTok, and X. We build separate content strategies for each platform rather than cross-posting the same content everywhere." },
    { title: "Content Calendar & Scheduling", body: "30-day content calendar built and approved each month. Content scheduled using a platform management tool. No last-minute posting." },
    { title: "Community Management", body: "Comments replied to, DMs responded to, and brand mentions monitored — within business hours. Community engagement is part of the algorithm, not an afterthought." },
    { title: "Monthly Analytics Report", body: "Reach, impressions, engagement rate, follower growth, and link clicks — with the top-performing content identified and used to inform next month's strategy." },
  ],
  process: [
    { title: "Audit & Strategy", body: "Existing profile audit, competitor analysis, audience persona definition, and platform selection. Content pillars defined and approved before scheduling begins." },
    { title: "Create & Schedule", body: "Monthly content batch created 2 weeks in advance. Each piece reviewed and approved before scheduling. Batching prevents last-minute scramble." },
    { title: "Monitor & Report", body: "Daily community management. Weekly performance check. Monthly analytics report and strategy update for next month." },
  ],
  faq: [
    { q: "Which social platforms should I be on?", a: "It depends on where your customers spend time. B2B: LinkedIn. B2C products: Instagram + TikTok. Local services: Facebook + Instagram. We recommend starting with 2 platforms done well rather than 5 done poorly." },
    { q: "Do you produce graphics and video content?", a: "Yes — we produce static graphics and short-form video content in our standard retainer. For higher-production video content, we work with your video production team or brief an external partner." },
  ],
  related: RELATED_CONTENT,
  cta: "Social media that builds trust — not just follower counts.",
};

/* ── VIDEO SCRIPT WRITING ── */
const videoScriptData: SubServiceData = {
  parentLabel: "Content Marketing", parentHref: "/content-marketing-service",
  label: "Video Script Writing",
  headline: "Scripts written for watch time, authority,",
  italic: "and conversion.",
  subhead: "A poorly structured script wastes production budget. We write video scripts with a clear hook-to-CTA architecture that holds attention, delivers the core message efficiently, and ends with a conversion action — for YouTube, LinkedIn, TikTok, and website hero videos.",
  stats: [{ value: "Hook-to-CTA", label: "Script structure" }, { value: "SEO-mapped", label: "YouTube titles" }, { value: "YT + Reels", label: "+ Website formats" }],
  deliverables: [
    { title: "YouTube Long-Form Scripts", body: "Scripts for 5–15 minute educational or case study videos. Structured with a hook (first 30 seconds), main content, pattern interrupts every 2 minutes, and CTA." },
    { title: "Short-Form Scripts (60–90s)", body: "Scripts for YouTube Shorts, Instagram Reels, and TikTok. Hook-focused — designed to stop the scroll and retain attention in the first 3 seconds." },
    { title: "Website Video Scripts", body: "Hero video, explainer, and testimonial scripts for your website. Focused on the single most important conversion message for that page." },
    { title: "SEO-Optimised Titles & Descriptions", body: "YouTube video titles, descriptions, and tags written using keyword research — so the content works as a search asset, not just a social post." },
  ],
  process: [
    { title: "Brief & Research", body: "Topic, target audience, key message, and CTA defined. Competitor video research to identify what's ranking and what's missing." },
    { title: "Script + Revisions", body: "First draft delivered with notes on visual suggestions and on-screen text. Up to 2 revision rounds before final approval." },
    { title: "SEO Metadata", body: "Title, description, tags, and chapter timestamps written for YouTube. Thumbnail brief provided for your design team." },
  ],
  faq: [
    { q: "Do you produce the video or just write the script?", a: "We write the script only. Video production is handled by your team or a production partner. We provide the brief, and can connect you with recommended production partners if needed." },
    { q: "How long does script writing take?", a: "A single 5–10 minute YouTube script typically takes 3–5 business days from brief to final draft. Short-form scripts (60–90 seconds) are 1–2 business days." },
  ],
  related: RELATED_CONTENT,
  cta: "A great video starts with a script that respects the viewer's time.",
};

export function BlogWritingPage() { return <SubServicePage data={blogData} />; }
export function TopicalAuthorityPage() { return <SubServicePage data={topicalData} />; }
export function EmailMarketingPage() { return <SubServicePage data={emailData} />; }
export function SocialMediaPage() { return <SubServicePage data={socialData} />; }
export function VideoScriptPage() { return <SubServicePage data={videoScriptData} />; }
