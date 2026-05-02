export interface HubLink { label: string; url: string }

export interface HubSection {
  h2: string;
  body: string;
  subsections?: { h3: string; body: string }[];
}

export interface HubContent {
  slug: string;
  meta: { title: string; description: string };
  h1: string;
  intro: string;
  navLinks: {
    byLocation?: HubLink[];
    byService?: HubLink[];
    related?: HubLink[];
    label?: string;
  }[];
  useCases: { headline: string; body: string }[];
  sections: HubSection[];
  faq: { q: string; a: string }[];
  closing: string;
  closingCta: string;
}

export const hubs: Record<string, HubContent> = {
  "local-seo": {
    slug: "local-seo",
    meta: {
      title: "Local SEO | Map Pack Rankings & Local Search for Canadian Businesses",
      description:
        "What local SEO is, how map pack rankings work, and which signals Google uses for local results. The complete overview for Canadian businesses.",
    },
    h1: "Local SEO — The Complete Overview",
    intro:
      "Local SEO is the discipline of ranking in geographically bounded search results — the map pack, local organic listings, and \"near me\" queries. It operates on different signals than standard organic SEO, requires different optimisation work, and produces different types of visibility. A plumber ranking on page one organically for \"plumber Toronto\" and a plumber appearing in the map pack for the same query are achieving different things through different means. Local SEO addresses both — with particular emphasis on the map pack, which captures a disproportionate share of clicks on location-based searches.",
    navLinks: [
      {
        label: "By location",
        byLocation: [
          { label: "Local SEO Toronto", url: "/toronto/local-seo" },
          { label: "Local SEO Mississauga", url: "/mississauga/local-seo" },
          { label: "Local SEO Ottawa", url: "/ottawa/local-seo" },
          { label: "Local SEO Hamilton", url: "/hamilton/local-seo" },
          { label: "Local SEO Brampton", url: "/brampton/local-seo" },
        ],
      },
      {
        label: "Related services",
        related: [
          { label: "SEO Services", url: "/seo-services" },
          { label: "Technical SEO", url: "/technical-seo-service" },
          { label: "Web Design", url: "/custom-web-design-service" },
          { label: "PPC / Google Ads", url: "/ppc-google-ads" },
        ],
      },
    ],
    useCases: [
      {
        headline: "You serve customers in a defined geographic area",
        body: "Any business where the customer's location matters: home services, medical and dental practices, legal services, restaurants, retail, real estate. If \"near me\" is a realistic modifier for how your customers search, local SEO is the appropriate discipline.",
      },
      {
        headline: "You're not appearing in the map pack for your primary service keywords",
        body: "The three-result map pack block at the top of local search results captures a majority of clicks for high-intent local queries. Not appearing there means competitors with weaker services but stronger local signals are winning those enquiries.",
      },
      {
        headline: "Your Google Business Profile is incomplete or unoptimised",
        body: "An incomplete GBP profile actively suppresses local rankings. Service categories, business hours, photos, service areas, review responses, and Q&A sections all contribute to local prominence signals.",
      },
      {
        headline: "Your NAP data is inconsistent across the web",
        body: "If your business name, address, or phone number appears differently across directories, Google's confidence in your location data decreases. Citation consistency is a local ranking signal that many businesses have never audited.",
      },
      {
        headline: "You operate in multiple locations or serve multiple cities",
        body: "Multi-location local SEO requires a distinct strategy: separate GBP profiles per location, location-specific landing pages with unique content, and a link-building approach that builds local authority in each market independently.",
      },
    ],
    sections: [
      {
        h2: "How Local Search Works Differently",
        body: "Standard organic search ranks pages based on relevance, authority, and technical quality — measured primarily through content signals and backlinks. Local search adds three signals that standard organic doesn't weight as heavily:",
        subsections: [
          {
            h3: "Proximity",
            body: "How close the business is to the searcher, or to the location specified in the query. A search for \"dentist Etobicoke\" weights businesses in Etobicoke differently than businesses across town, regardless of their overall domain authority.",
          },
          {
            h3: "Relevance",
            body: "How well the business profile and website match the search intent. A Google Business Profile with complete, accurate service categories, keyword-relevant descriptions, and consistent NAP data across the web signals relevance more clearly than an incomplete one.",
          },
          {
            h3: "Prominence",
            body: "How well-known and credible the business is in its area, as measured by review quantity and quality, citation volume and consistency, backlinks from local sources, and overall online reputation signals.",
          },
        ],
      },
      {
        h2: "The Components of Local SEO",
        body: "",
        subsections: [
          {
            h3: "Google Business Profile Optimisation",
            body: "The GBP is the primary signal source for map pack rankings. Complete and optimised profiles — with accurate service categories, keyword-relevant business descriptions, service areas mapped precisely, regular photo updates, and active review management — outperform incomplete profiles consistently.",
          },
          {
            h3: "Local Citation Building and Audit",
            body: "Citations are mentions of your business NAP across directories, review platforms, and local business listings. Volume and consistency of citations contribute to local prominence. Most established businesses have citation inconsistencies accumulated over years — auditing and correcting them is typically a high-ROI early-stage activity.",
          },
          {
            h3: "Review Generation and Management",
            body: "Google reviews are both a ranking signal and a conversion signal. Businesses with significantly more reviews than competitors in the same category have a measurable map pack advantage. Review velocity — how recently reviews are being received — also contributes to local prominence.",
          },
          {
            h3: "Local Landing Pages",
            body: "For businesses serving multiple cities or neighbourhoods, location-specific landing pages with genuinely unique content — not template pages with city names swapped — contribute to local organic rankings beyond the map pack.",
          },
        ],
      },
      {
        h2: "Local SEO in the Canadian Context",
        body: "Canada's local search environment has specific characteristics that affect strategy:",
        subsections: [
          {
            h3: "Bilingual markets",
            body: "Businesses serving Quebec or bilingual national audiences require French-language GBP profiles, French-language local content, and citation building in French-language directories.",
          },
          {
            h3: "Lower review volumes",
            body: "Canadian markets typically have lower review volumes than comparable US markets, which means the marginal impact of each additional review is higher. Businesses with 50 reviews often significantly outperform competitors with 10 in Canadian local results.",
          },
          {
            h3: "GTA and multi-city complexity",
            body: "The Greater Toronto Area's 25+ distinct municipalities — each with its own local search signals, competition levels, and proximity weighting — create a more complex local SEO landscape than single-city markets.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "What's the difference between local SEO and regular SEO?",
        a: "Standard SEO targets broad, non-geographic search queries and ranks pages based primarily on content relevance and domain authority. Local SEO targets geographically bounded queries — \"service + city\" or \"service near me\" — and ranks business listings based on proximity, relevance, and prominence signals. The two overlap but require different optimisation work. Most Canadian service businesses need both operating simultaneously.",
      },
      {
        q: "How long does it take to rank in the map pack?",
        a: "Map pack rankings typically move faster than standard organic rankings because GBP optimisation and citation work produce visible results within 60–90 days in many markets. Competitive markets — Toronto, Vancouver, Calgary — take longer. The timeline also depends on the starting state: a business with a complete GBP and consistent citations has a shorter path than one starting from an unclaimed profile.",
      },
      {
        q: "Does having more locations help or hurt local SEO?",
        a: "Managed correctly, multiple locations with separate, optimised GBP profiles can dominate map pack results across multiple cities. Managed incorrectly — with incomplete secondary profiles, inconsistent NAP data, or thin location pages — multiple locations can fragment authority and reduce rankings in all markets.",
      },
      {
        q: "Do reviews on other platforms (Yelp, Facebook) affect Google rankings?",
        a: "Directly, they have minimal impact. Google's local ranking algorithm weights Google reviews most heavily. Indirectly, reviews on other platforms contribute to overall prominence signals — a business with strong reviews across multiple platforms tends to also have the engagement patterns that correlate with strong local rankings.",
      },
    ],
    closing:
      "Local SEO is the fastest-moving discipline in the SEO category — GBP optimisation and citation work produce visible map pack movement within 60–90 days in most Canadian markets. City pages contain the market-specific detail.",
    closingCta: "Get a Free Local SEO Audit",
  },

  "seo-services": {
    slug: "seo-services",
    meta: {
      title: "SEO Services | Organic Search Strategy for Canadian Businesses",
      description:
        "What SEO is, how the disciplines within it connect, and which approach fits your situation. The complete category overview for Canadian businesses.",
    },
    h1: "SEO Services — The Complete Category Overview",
    intro:
      "SEO — search engine optimization — is the practice of making a website more visible in organic (non-paid) search results. A business that ranks on page one for the searches its customers are already making gets traffic at a fraction of the cost of paid advertising, with compounding returns over time. A business on page three gets effectively nothing. This page maps the category: what SEO encompasses, how the disciplines within it relate to each other, and where to go for implementation detail.",
    navLinks: [
      {
        label: "By SEO service",
        byService: [
          { label: "Local SEO", url: "/local-seo" },
          { label: "Technical SEO", url: "/technical-seo-service" },
          { label: "On-Page SEO", url: "/on-page-seo-service" },
          { label: "Link Building", url: "/link-building-service" },
        ],
      },
      {
        label: "By location",
        byLocation: [
          { label: "SEO Services Toronto", url: "/toronto/seo-services" },
          { label: "SEO Services Mississauga", url: "/mississauga/seo-services" },
          { label: "SEO Services Ottawa", url: "/ottawa/seo-services" },
        ],
      },
      {
        label: "Related services",
        related: [
          { label: "Web Design", url: "/custom-web-design-service" },
          { label: "PPC / Google Ads", url: "/ppc-google-ads" },
          { label: "CRO", url: "/cro-service" },
        ],
      },
    ],
    useCases: [
      {
        headline: "You have a physical location or serve a specific geographic area",
        body: "The discipline focused on map pack rankings, Google Business Profile optimisation, and geo-specific organic results. The primary lever for service businesses competing in a defined city or region.",
      },
      {
        headline: "Your site has crawling, speed, or indexation problems",
        body: "Core Web Vitals, crawlability, site architecture, canonical issues, structured data. The foundation everything else is built on. Technical problems limit what any content or link strategy can achieve.",
      },
      {
        headline: "Your pages exist but don't rank for their target keywords",
        body: "Keyword mapping, content structure, internal linking, meta optimisation. The discipline of making individual pages as relevant and authoritative as possible for their intended search intent.",
      },
      {
        headline: "Your site has the content but lacks authority",
        body: "Earning links from external sites that signal to Google your content is worth referencing. Domain authority compounds over time — it is not a one-time project.",
      },
    ],
    sections: [
      {
        h2: "What SEO Actually Affects",
        body: "Search engine optimisation is often framed as a ranking exercise. Ranking is the mechanism — these are the business outcomes it drives:",
        subsections: [
          {
            h3: "Organic lead volume without proportional ad spend",
            body: "Every visitor who finds you through Google without a paid click represents marketing cost you didn't incur. In competitive Canadian markets, organic traffic from page-one rankings replaces thousands of dollars in monthly Google Ads spend.",
          },
          {
            h3: "Sustainable traffic that compounds",
            body: "Paid traffic stops the moment spending stops. Organic rankings built on technical foundations, relevant content, and authoritative backlinks continue to generate traffic indefinitely. The compounding nature of SEO is its primary financial advantage over paid channels.",
          },
          {
            h3: "Qualified traffic at higher purchase intent",
            body: "Organic search traffic converts at significantly higher rates than most other digital channels because users are actively searching for what you offer. They arrive with intent, not just awareness.",
          },
        ],
      },
      {
        h2: "The SEO Disciplines and How They Relate",
        body: "SEO is not a single activity. It is a system of disciplines that operate in a specific dependency order:",
        subsections: [
          {
            h3: "Technical SEO — The Foundation",
            body: "If Google can't crawl, index, and render your pages correctly, nothing else works. Technical SEO addresses the infrastructure: site speed, mobile responsiveness, crawl budget, indexation directives, Core Web Vitals, schema markup, canonical structure, and HTTPS.",
          },
          {
            h3: "On-Page SEO — Relevance Signals",
            body: "With a crawlable site, on-page SEO determines whether individual pages rank for their target queries. Keyword mapping, heading structure, content depth, and internal linking all operate at the page level.",
          },
          {
            h3: "Local SEO — Geographic Relevance",
            body: "For businesses serving a defined geography, local SEO adds proximity, GBP optimisation, and citation signals on top of technical and on-page foundations. It's a distinct discipline from national organic SEO.",
          },
          {
            h3: "Link Building — Authority Signals",
            body: "Domain authority — measured primarily through backlinks from other reputable sites — determines the ranking ceiling for all on-page work. Content that deserves to rank but lacks authority will be consistently outranked by less thorough content on more authoritative domains.",
          },
        ],
      },
    ],
    faq: [
      {
        q: "How long does SEO take to produce results?",
        a: "Technical fixes and on-page optimisation produce measurable changes within 4–8 weeks. Content-driven ranking improvements typically take 3–6 months. Link-building effects compound over 6–18 months. Local SEO via GBP optimisation and citations often shows visible map pack movement within 30–90 days.",
      },
      {
        q: "Should I do SEO or Google Ads?",
        a: "Most Canadian businesses in competitive markets need both. Paid search fills the gap immediately while organic authority builds. Organic search provides compounding returns that reduce reliance on paid over time. The channels are complementary, not competing — keyword performance data from paid search directly improves SEO targeting.",
      },
      {
        q: "What's a realistic SEO budget for a Canadian SMB?",
        a: "For a single-location business in a mid-competition market: $1,500–$3,000/month for a comprehensive programme covering technical, on-page, local, and some link work. Higher budgets are needed in competitive verticals (Toronto legal, dentistry, home services) or for multi-location businesses. Below $1,000/month, meaningful results in competitive markets are unlikely.",
      },
    ],
    closing:
      "The right starting point is understanding where your current search visibility gaps are — technical, content, authority, or local. An SEO audit identifies this in a week and produces a prioritised roadmap regardless of whether you proceed with managed work.",
    closingCta: "Get a Free SEO Audit",
  },

  "ppc-google-ads": {
    slug: "ppc-google-ads",
    meta: {
      title: "PPC & Google Ads | Paid Search Management for Canadian Businesses",
      description:
        "What PPC and Google Ads management is, how campaigns are structured, and when paid search makes sense relative to SEO. The complete overview.",
    },
    h1: "PPC & Google Ads — The Complete Overview",
    intro:
      "Pay-per-click advertising — PPC — is the model where businesses pay for search visibility rather than earning it organically. Google Ads is the dominant PPC platform in Canada, placing ads at the top and bottom of search results for queries where advertisers are competing for that position. PPC delivers immediate, controllable visibility. It also stops the moment spending stops. Understanding the cost structure, the campaign architecture, and the relationship between paid and organic search is what separates businesses that use PPC profitably from those that spend without measurable return.",
    navLinks: [
      {
        label: "By campaign type",
        byService: [
          { label: "Google Search Ads", url: "/google-ads-management" },
          { label: "Google Local Service Ads", url: "/local-service-ads" },
          { label: "Paid Social", url: "/paid-social-advertising" },
        ],
      },
      {
        label: "By location",
        byLocation: [
          { label: "Google Ads Toronto", url: "/toronto/google-ads-management" },
          { label: "Google Ads Mississauga", url: "/mississauga/google-ads-management" },
          { label: "Google Ads Ottawa", url: "/ottawa/google-ads-management" },
        ],
      },
      {
        label: "Related services",
        related: [
          { label: "SEO Services", url: "/seo-services" },
          { label: "CRO", url: "/cro-service" },
          { label: "Web Design", url: "/custom-web-design-service" },
        ],
      },
    ],
    useCases: [
      {
        headline: "You need leads immediately while SEO builds",
        body: "Organic rankings take months to develop. PPC puts a business on page one from day one of a campaign. For businesses launching, entering new markets, or recovering from a traffic loss, paid search fills the gap while long-term organic authority accumulates.",
      },
      {
        headline: "Your industry has high commercial-intent search volume and you're not ranking organically",
        body: "Being absent from search results for high-intent queries costs revenue daily. PPC captures that demand immediately, at known cost per lead, while organic work progresses.",
      },
      {
        headline: "You want to test keyword and messaging performance before committing to SEO content",
        body: "PPC data reveals which keywords actually convert for your business, not just which ones have search volume. This informs SEO targeting with empirical performance data rather than estimates.",
      },
      {
        headline: "You have seasonal peaks where lead volume must scale rapidly",
        body: "Organic traffic doesn't scale on demand. PPC budgets do. For businesses with predictable seasonal demand spikes, paid search provides the volume flexibility that organic rankings can't.",
      },
    ],
    sections: [
      {
        h2: "How Google Ads Actually Works",
        body: "",
        subsections: [
          {
            h3: "The Auction Mechanism",
            body: "Every Google search that triggers ads runs an instant auction. Advertisers bid a maximum amount per click, but what they actually pay is determined by a Quality Score that combines bid amount, expected click-through rate, ad relevance, and landing page experience. High Quality Scores lower the cost per click and improve ad position.",
          },
          {
            h3: "Campaign Structure",
            body: "Google Ads campaigns are organised into campaigns, ad groups, ads, and landing pages. Tightly themed ad groups — where every keyword, ad, and landing page are aligned around a single search intent — achieve higher Quality Scores and lower CPCs than loosely organised campaigns.",
          },
          {
            h3: "Conversion Tracking",
            body: "A Google Ads campaign without conversion tracking is spending money without knowing what it's producing. Campaigns optimised toward conversions dramatically outperform campaigns optimised toward clicks or impressions over any meaningful timeframe.",
          },
        ],
      },
      {
        h2: "What Google Ads Costs in Canada",
        body: "Canadian CPCs are generally lower than US equivalents for equivalent keyword categories. The average CPC across industries on Google Search Ads is approximately $4–6 CAD, but this average conceals enormous variation. Legal services and financial services regularly exceed $20–50 per click in Toronto. Home services range from $8–25. Professional services range from $5–15. The relevant figure for most businesses isn't CPC — it's cost per lead and cost per acquisition.",
      },
      {
        h2: "PPC and SEO — How They Work Together",
        body: "PPC and SEO are complementary, not competing, strategies for most Canadian businesses. PPC delivers traffic today. SEO builds traffic that compounds over years. Running both simultaneously means the business isn't dependent on either channel alone. Keyword performance data from paid search reveals which terms actually drive enquiries — directly improving SEO keyword targeting.",
      },
    ],
    faq: [
      {
        q: "What's the minimum budget for Google Ads to be effective in Canada?",
        a: "For most Canadian service businesses in competitive markets, $1,500–$3,000/month in ad spend is the realistic minimum for generating enough data to optimise meaningfully. Campaigns with $300/month budgets in competitive Toronto markets will exhaust their daily budget before the morning is over.",
      },
      {
        q: "How long does it take to see results from Google Ads?",
        a: "Unlike SEO, paid search produces traffic immediately on campaign launch. However, meaningful optimisation requires 60–90 days of data accumulation. The first month of a new campaign typically performs below the eventual optimised state.",
      },
      {
        q: "Should I manage Google Ads myself or use an agency?",
        a: "Poorly managed campaigns commonly waste 30–50% of budget on irrelevant clicks. Managed accounts consistently outperform self-managed accounts in industries where campaign complexity is high. The relevant question is whether the management fee is less than the waste it prevents.",
      },
    ],
    closing:
      "PPC campaigns generate data immediately. The question is whether that data is being used to improve performance or just to justify spend. If you're running Google Ads without conversion tracking configured, that's the first thing to fix.",
    closingCta: "Get a Free Account Audit",
  },
};

export function getHub(slug: string): HubContent | undefined {
  return hubs[slug];
}
