import { useParams, Link } from "wouter";
import {
  ArrowRight,
  MapPin,
  CheckCircle2,
  TrendingUp,
  Star,
  Phone,
  ChevronDown,
  ChevronUp,
  BarChart3,
  Search,
  Globe,
  Zap,
  Users,
  Target,
  Mail,
  FileText,
  Share2,
  DollarSign,
  Clock,
  Building2,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useSeo } from "@/hooks/useSeo";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

/* ─── Deterministic variation utilities ─────────────────────────── */

function hashStr(s: string): number {
  let h = 5381;
  for (let i = 0; i < s.length; i++) {
    h = (Math.imul(h, 33) ^ s.charCodeAt(i)) >>> 0;
  }
  return h;
}

function hPick<T>(key: string, arr: T[]): T {
  return arr[hashStr(key) % arr.length];
}

function hPickN<T>(key: string, arr: T[], n: number): T[] {
  if (arr.length <= n) return [...arr];
  const result: T[] = [];
  const used = new Set<number>();
  let seed = 0;
  while (result.length < n) {
    const idx = hashStr(key + seed++) % arr.length;
    if (!used.has(idx)) { used.add(idx); result.push(arr[idx]); }
  }
  return result;
}

/* ─── City data ─────────────────────────────────────────────────── */

interface CityData {
  name: string;
  province: string;
  pop: string;
  region: string;
  marketTier: "premium" | "major" | "standard" | "emerging";
  businessCount: string;
  localStats: [string, string];
  keyIndustries: string[];
  marketBlurb: string;
  competitionNote: string;
  neighborhoodsOrAreas: string;
  economyHighlights: string;
}

const CITIES: Record<string, CityData> = {
  toronto: {
    name: "Toronto",
    province: "Ontario",
    pop: "2.9 million",
    region: "Greater Toronto Area",
    marketTier: "premium",
    businessCount: "180,000+",
    localStats: [
      "Over 93% of Toronto consumers research businesses online before purchasing — the highest rate of any Canadian city",
      "Toronto businesses invest an average of $4,800/month in digital marketing, 60% above the national SMB average",
    ],
    keyIndustries: ["Financial Services", "Legal & Law", "Healthcare & Dental", "Real Estate", "Technology & SaaS"],
    marketBlurb:
      "Toronto is Canada's largest city and its most competitive digital marketing market. Businesses in the 416 compete against national brands, U.S. entrants, and thousands of well-funded local operators. Ranking on the first page of Google in Toronto requires a level of technical execution and content depth that most agencies simply don't have the capacity to deliver.",
    competitionNote:
      "The Toronto search landscape is among the most contested in the country. Industries like real estate, legal, dental, home services, and SaaS are especially competitive, with top-ranking pages often boasting thousands of referring domains and years of topical authority.",
    neighborhoodsOrAreas:
      "Downtown Core, Midtown, North York, Scarborough, Etobicoke, The Annex, Liberty Village, King West, Leslieville, Yorkville",
    economyHighlights:
      "Canada's financial capital; home to the TSX, major law firms, world-class healthcare institutions, and a booming tech and startup ecosystem",
  },
  mississauga: {
    name: "Mississauga",
    province: "Ontario",
    pop: "717,000",
    region: "Greater Toronto Area",
    marketTier: "major",
    businessCount: "75,000+",
    localStats: [
      "Mississauga is home to 60+ Fortune 500 Canadian headquarters — more than any other GTA city outside Toronto",
      "75,000+ registered businesses compete for local search visibility, with digital ad spend growing 22% year-over-year",
    ],
    keyIndustries: ["Corporate Headquarters", "Healthcare", "Manufacturing & Logistics", "Retail & E-Commerce", "Professional Services"],
    marketBlurb:
      "Mississauga is the 7th largest city in Canada and one of the fastest-growing business markets in Ontario. Home to over 60 Fortune 500 Canadian headquarters, the city supports a diverse economy — from professional services and healthcare to manufacturing, logistics, and retail. Digital competition here is fierce, particularly for service businesses targeting both the local market and cross-GTA clientele.",
    competitionNote:
      "Mississauga businesses often compete for both Mississauga-specific search terms and broader GTA terms. A strong local SEO and content strategy needs to capture searches across multiple intent categories.",
    neighborhoodsOrAreas:
      "City Centre, Port Credit, Streetsville, Meadowvale, Erin Mills, Clarkson, Cooksville, Mississauga Valleys",
    economyHighlights:
      "Home to major corporate HQs, Pearson International Airport ecosystem, healthcare, manufacturing, and one of Ontario's largest business parks",
  },
  brampton: {
    name: "Brampton",
    province: "Ontario",
    pop: "656,000",
    region: "Greater Toronto Area",
    marketTier: "major",
    businessCount: "45,000+",
    localStats: [
      "Brampton is Canada's 9th most populous city and one of the fastest-growing municipalities in the country",
      "45,000+ registered businesses — many in logistics, healthcare, and professional services — are actively investing in digital marketing",
    ],
    keyIndustries: ["Logistics & Distribution", "Healthcare & Medical", "Multicultural Retail", "Professional Services", "Food Manufacturing"],
    marketBlurb:
      "Brampton is the 9th most populous city in Canada and one of the GTA's fastest-growing communities. Its diverse population and booming small-business sector make it an active digital market — particularly for local services, healthcare, professional services, retail, and logistics companies looking to capture Brampton-specific search traffic.",
    competitionNote:
      "The Brampton market has seen a surge in digital investment in recent years. Local SEO and neighbourhood-specific landing pages are high-ROI tactics for businesses targeting specific parts of the city.",
    neighborhoodsOrAreas:
      "Downtown Brampton, Bramalea, Heart Lake, Springdale, Castlemore, Gore, Sandalwood, Mount Pleasant",
    economyHighlights:
      "Major logistics and distribution hub, healthcare, multicultural retail and food sector, growing tech and professional services presence",
  },
  markham: {
    name: "Markham",
    province: "Ontario",
    pop: "353,000",
    region: "Greater Toronto Area",
    marketTier: "major",
    businessCount: "25,000+",
    localStats: [
      "Markham is Canada's 'High-Tech Capital' with over 1,400 technology companies generating $15B+ in annual revenue",
      "Average household income in Markham exceeds $120,000 — creating a high-value consumer market for local businesses",
    ],
    keyIndustries: ["Technology & SaaS", "Healthcare & Medical", "Financial Services", "Professional Services", "Retail & Hospitality"],
    marketBlurb:
      "Markham is Canada's 'High-Tech Capital,' home to over 1,400 tech companies and a highly educated, high-income professional population. The city's businesses — from healthcare clinics and professional services to software companies and retail — are increasingly sophisticated in their digital marketing expectations and willing to invest in quality.",
    competitionNote:
      "Markham's tech-savvy business environment means competitors are often well-informed about SEO and paid media. Winning here requires demonstrable technical depth, not just surface-level optimisation.",
    neighborhoodsOrAreas:
      "Unionville, Thornhill, Milliken, Cornell, Cathedraltown, Angus Glen, Buttonville, Berczy Village",
    economyHighlights:
      "Canada's high-tech capital; IBM, AMD, Huawei, and hundreds of SMB tech firms; strong healthcare, financial services, and professional services sectors",
  },
  vaughan: {
    name: "Vaughan",
    province: "Ontario",
    pop: "323,000",
    region: "Greater Toronto Area",
    marketTier: "major",
    businessCount: "22,000+",
    localStats: [
      "Vaughan is one of Canada's fastest-growing cities, with population growth exceeding 40% over the past decade",
      "The Vaughan Metropolitan Centre development represents $4B+ in commercial and residential investment, expanding the local business market significantly",
    ],
    keyIndustries: ["Construction & Real Estate", "Food Manufacturing", "Professional Services", "Retail & Entertainment", "Healthcare"],
    marketBlurb:
      "Vaughan is one of the fastest-growing cities in Canada, driven by major commercial and residential development. The city's business community spans construction, real estate, professional services, healthcare, food and hospitality, and retail. As the population grows, so does the competition for top search positions in the Vaughan market.",
    competitionNote:
      "Vaughan has seen rapid growth in local search competition, particularly in home services, real estate, dental, and restaurant categories. Businesses that invest in SEO now will have a compounding advantage as the city's population continues to expand.",
    neighborhoodsOrAreas:
      "Woodbridge, Maple, Thornhill, Concord, Kleinburg, Vellore Village, Sonoma Heights",
    economyHighlights:
      "Construction and development, food manufacturing, professional services, Vaughan Metropolitan Centre (VMC) commercial hub",
  },
  "richmond-hill": {
    name: "Richmond Hill",
    province: "Ontario",
    pop: "202,000",
    region: "Greater Toronto Area",
    marketTier: "standard",
    businessCount: "15,000+",
    localStats: [
      "Richmond Hill has one of Ontario's highest average household incomes, with over 50% of residents earning $100,000+ annually",
      "The healthcare and professional services sectors represent the largest share of Richmond Hill's 15,000+ business registrations",
    ],
    keyIndustries: ["Healthcare & Dental", "Professional Services", "Real Estate", "Technology", "Retail"],
    marketBlurb:
      "Richmond Hill is a prosperous suburban community with a high average household income and a strong professional services and healthcare economy. Its residents are active online searchers and the competition for local service keywords — dental, medical, legal, home services, fitness — is significant and growing.",
    competitionNote:
      "Richmond Hill businesses that rank well for local search terms benefit from a highly valuable customer base. The investment in SEO and local digital marketing pays back quickly given the purchasing power of the local market.",
    neighborhoodsOrAreas:
      "Oak Ridges, Jefferson, Bayview Hill, Langstaff, North Richvale, Mill Pond, Crosby",
    economyHighlights:
      "Professional services, healthcare and medical clinics, retail, technology companies, real estate and construction",
  },
  oakville: {
    name: "Oakville",
    province: "Ontario",
    pop: "213,000",
    region: "Greater Toronto Area — Halton",
    marketTier: "standard",
    businessCount: "14,000+",
    localStats: [
      "Oakville consistently ranks as one of Canada's top 5 most affluent communities by average household income",
      "14,000+ registered businesses serve a client base that spends 35% more per transaction than the Ontario average",
    ],
    keyIndustries: ["Financial Services", "Healthcare & Wellness", "Real Estate", "Luxury Retail", "Professional Services"],
    marketBlurb:
      "Oakville consistently ranks as one of Canada's most affluent communities. Its businesses serve a high-income, quality-conscious clientele who research extensively online before making purchasing decisions. Organic search visibility and a polished web presence are not optional for Oakville businesses — they are prerequisites for capturing premium clients.",
    competitionNote:
      "Oakville's premium market means the stakes are high for both service businesses and professional practices. Standing out in search requires a brand that conveys credibility, combined with technical SEO execution that outpaces local competitors.",
    neighborhoodsOrAreas:
      "Downtown Oakville, Kerr Village, Uptown Core, Glen Abbey, Bronte, Palermo, Joshua Creek",
    economyHighlights:
      "Financial services, professional and business services, healthcare, real estate, luxury retail, Ford Canada HQ",
  },
  burlington: {
    name: "Burlington",
    province: "Ontario",
    pop: "186,000",
    region: "Greater Toronto Area — Halton",
    marketTier: "standard",
    businessCount: "12,000+",
    localStats: [
      "Burlington has been ranked Canada's best place to live by MoneySense — attracting high-income residents who spend heavily on local services",
      "12,000+ registered Burlington businesses compete across healthcare, home services, restaurants, and professional services categories",
    ],
    keyIndustries: ["Healthcare", "Professional Services", "Manufacturing", "Food & Hospitality", "Real Estate"],
    marketBlurb:
      "Burlington is one of Ontario's most liveable cities — and one of its most competitive local business markets. Positioned between Toronto and Hamilton on the QEW corridor, Burlington businesses serve both a substantial local population and commuter residents. Local search visibility is critical for service businesses in healthcare, home services, real estate, restaurants, and professional services.",
    competitionNote:
      "Burlington businesses frequently compete against both Oakville and Hamilton-based operators targeting the same search terms. A strong local content and GBP strategy is essential for market capture.",
    neighborhoodsOrAreas:
      "Downtown Burlington, Alton, Brant Hills, Tyandaga, Millcroft, Palmer, Headon Forest",
    economyHighlights:
      "Healthcare, professional services, manufacturing, food processing, retail and hospitality along the lakeshore corridor",
  },
  hamilton: {
    name: "Hamilton",
    province: "Ontario",
    pop: "569,000",
    region: "Southern Ontario",
    marketTier: "major",
    businessCount: "28,000+",
    localStats: [
      "Hamilton has undergone a significant economic transformation — tech, arts, and healthcare now represent the largest growth sectors",
      "28,000+ Hamilton businesses are competing for local search visibility, with digital marketing investment accelerating year-over-year",
    ],
    keyIndustries: ["Healthcare & Medical", "Education", "Technology", "Arts & Hospitality", "Manufacturing"],
    marketBlurb:
      "Hamilton is one of Ontario's fastest-evolving cities — a former steel town that has reinvented itself as a hub for healthcare, education, creative industries, and small business. McMaster University, Hamilton Health Sciences, and a booming arts and food scene drive significant local economic activity. The city's growing small business community is increasingly investing in digital marketing to compete with Toronto-based operators targeting Hamilton search terms.",
    competitionNote:
      "Hamilton is an excellent market for businesses investing in SEO early. Many sectors remain under-optimised, creating real opportunities for businesses willing to invest in content depth and technical execution.",
    neighborhoodsOrAreas:
      "Downtown Hamilton, Westdale, Ancaster, Dundas, Stoney Creek, Waterdown, Binbrook, Locke Street",
    economyHighlights:
      "McMaster University, Hamilton Health Sciences, steel and manufacturing legacy industries, growing tech, arts, food, and hospitality sectors",
  },
  kitchener: {
    name: "Kitchener",
    province: "Ontario",
    pop: "256,000",
    region: "Waterloo Region",
    marketTier: "standard",
    businessCount: "18,000+",
    localStats: [
      "Kitchener-Waterloo is Canada's fastest-growing tech hub outside Toronto, with 1,000+ active technology companies",
      "Google Canada, Shopify engineering, and OpenText have all established major Kitchener presences, drawing skilled talent that raises the local consumer bar",
    ],
    keyIndustries: ["Technology & Software", "Manufacturing", "Healthcare", "Financial Services", "Professional Services"],
    marketBlurb:
      "Kitchener is the commercial heart of Waterloo Region — Canada's 'Silicon Valley of the North.' Home to Google Canada, Shopify's engineering hub, and hundreds of tech startups, Kitchener businesses operate in a sophisticated, competitive digital environment. The city's rapidly growing professional population and strong economic base make it a high-value market for businesses that invest in digital visibility.",
    competitionNote:
      "Waterloo Region's tech concentration means local businesses often face competition from well-resourced, digitally-savvy operators. Winning in Kitchener requires content and technical execution that can stand up to scrutiny from informed buyers.",
    neighborhoodsOrAreas:
      "Downtown Kitchener, Uptown Waterloo, Victoria Hills, Forest Heights, Pioneer Park, Doon, Eastforest",
    economyHighlights:
      "Canada's tech corridor; Google Canada, Shopify, OpenText; strong manufacturing, healthcare, financial services, and professional sectors",
  },
  waterloo: {
    name: "Waterloo",
    province: "Ontario",
    pop: "121,000",
    region: "Waterloo Region",
    marketTier: "standard",
    businessCount: "9,000+",
    localStats: [
      "The University of Waterloo and Wilfrid Laurier University together enroll 50,000+ students, creating a significant digital-first consumer base",
      "Waterloo's startup ecosystem has produced some of Canada's most successful tech companies, bringing digital marketing sophistication to the local business community",
    ],
    keyIndustries: ["Technology & Fintech", "Education", "Insurance & Financial Services", "Retail & Hospitality", "Professional Services"],
    marketBlurb:
      "Waterloo is home to two of Canada's top universities — the University of Waterloo and Wilfrid Laurier University — and is the birthplace of some of Canada's most successful tech companies. The city's knowledge economy and young, educated population make it a vibrant and competitive digital market, particularly for tech services, professional development, food and hospitality, and retail.",
    competitionNote:
      "Waterloo's student and tech-professional population are digital-first consumers who discover businesses primarily through search and social. Businesses with strong online visibility have a significant advantage in this market.",
    neighborhoodsOrAreas:
      "Uptown Waterloo, Beechwood, Lakeshore, Columbia Hills, Eastbridge, RIM Park area",
    economyHighlights:
      "University of Waterloo, Wilfrid Laurier University, BlackBerry legacy, fintech, insurance (Manulife, Sun Life), and tech innovation ecosystem",
  },
  guelph: {
    name: "Guelph",
    province: "Ontario",
    pop: "135,000",
    region: "Southern Ontario",
    marketTier: "emerging",
    businessCount: "8,000+",
    localStats: [
      "Guelph has maintained the lowest unemployment rate of any Ontario city over 100,000 residents for five consecutive years",
      "8,000+ Guelph businesses are competing for local search visibility, with healthcare, home services, and food categories seeing the fastest digital investment growth",
    ],
    keyIndustries: ["Agri-Food & Manufacturing", "Healthcare", "Education", "Professional Services", "Technology"],
    marketBlurb:
      "Guelph is one of Ontario's most economically resilient cities — with consistently low unemployment, a strong manufacturing and agri-food sector, and the University of Guelph anchoring a growing knowledge economy. Local businesses across healthcare, home services, food, and professional services are increasingly investing in digital marketing to capture growing local search demand.",
    competitionNote:
      "Guelph's contained market size means that businesses which invest in local SEO and digital marketing can establish dominant positions relatively quickly compared to larger urban markets.",
    neighborhoodsOrAreas:
      "Downtown Guelph, Kortright Hills, Stone Road, University District, Watson Creek, Hanlon Creek",
    economyHighlights:
      "University of Guelph, agri-food and food manufacturing, healthcare, professional services, growing tech and clean-energy sector",
  },
  ottawa: {
    name: "Ottawa",
    province: "Ontario",
    pop: "1.0 million",
    region: "Eastern Ontario",
    marketTier: "major",
    businessCount: "55,000+",
    localStats: [
      "Ottawa is Canada's 4th largest city and the capital — its federal government workforce creates a uniquely stable, high-income consumer base",
      "55,000+ registered Ottawa businesses compete across one of Canada's most diverse and sophisticated local search markets",
    ],
    keyIndustries: ["Government & Defence", "Technology & Software", "Healthcare", "Legal & Professional Services", "Hospitality & Tourism"],
    marketBlurb:
      "Ottawa is Canada's capital and its 4th largest city — an economically stable, bilingual market anchored by government, high-tech, and professional services. Ottawa businesses compete across a sophisticated and diverse consumer base, with strong demand for services in healthcare, legal, home services, tech, real estate, and retail. The city's large government and tech workforce drives significant B2B and B2C digital spending.",
    competitionNote:
      "Ottawa's search market is competitive particularly in professional services, government contracting, tech, and healthcare. The city's bilingual nature also creates opportunities for businesses that can capture both English and French search terms.",
    neighborhoodsOrAreas:
      "Centretown, The Glebe, Kanata, Orleans, Barrhaven, Nepean, Westboro, Byward Market",
    economyHighlights:
      "Federal government, Shopify HQ (Ottawa offices), tech sector, healthcare, defence and aerospace, professional services",
  },
  barrie: {
    name: "Barrie",
    province: "Ontario",
    pop: "153,000",
    region: "Central Ontario",
    marketTier: "standard",
    businessCount: "8,500+",
    localStats: [
      "Barrie is consistently ranked among Canada's fastest-growing cities, with population growth of 15%+ in the past five years",
      "8,500+ Barrie businesses compete for local search visibility, with home services, healthcare, and retail driving the most digital marketing investment",
    ],
    keyIndustries: ["Healthcare", "Retail & Hospitality", "Tourism & Recreation", "Real Estate & Construction", "Professional Services"],
    marketBlurb:
      "Barrie is Central Ontario's commercial hub — a fast-growing city positioned as the gateway to cottage country and serving a broad regional market across Simcoe County. Tourism, healthcare, retail, home services, and real estate are major economic drivers. As Barrie's population grows (it's one of Canada's fastest-growing cities), demand for local digital services is accelerating.",
    competitionNote:
      "Barrie's rapid growth means businesses that establish strong digital visibility now will benefit from compounding returns as the population and local economy expand.",
    neighborhoodsOrAreas:
      "Downtown Barrie, Painswick, Holly, Innis-Shore, South Barrie, Allandale, Ardagh",
    economyHighlights:
      "Healthcare (RVH), retail, tourism and recreation, real estate, construction, Georgian College",
  },
  london: {
    name: "London",
    province: "Ontario",
    pop: "422,000",
    region: "Southwestern Ontario",
    marketTier: "major",
    businessCount: "30,000+",
    localStats: [
      "London is home to Western University and Fanshawe College, providing a combined student population of 55,000+ that drives local retail, food, and services demand",
      "30,000+ London businesses compete across healthcare, legal, home services, and professional categories — with digital marketing investment growing 28% year-over-year",
    ],
    keyIndustries: ["Healthcare & Medical", "Education", "Financial Services & Insurance", "Manufacturing", "Professional Services"],
    marketBlurb:
      "London is Southwestern Ontario's largest city — a major healthcare, education, and financial services hub anchored by Western University and one of the region's largest hospital networks. The city's diverse economy supports a competitive digital market across professional services, healthcare, legal, home services, food and hospitality, and retail.",
    competitionNote:
      "London's large market size and economic diversity mean significant competition across most service categories. Businesses investing in SEO in London are competing against well-established local operators and Toronto-based firms targeting London search terms.",
    neighborhoodsOrAreas:
      "Downtown London, Old East Village, Hyde Park, Byron, Westmount, Lambeth, Whitehills",
    economyHighlights:
      "Western University, London Health Sciences Centre, 3M Canada, London Life, financial services, insurance, manufacturing",
  },
  "london-ontario": {
    name: "London",
    province: "Ontario",
    pop: "422,000",
    region: "Southwestern Ontario",
    marketTier: "major",
    businessCount: "30,000+",
    localStats: [
      "London, Ontario is home to Western University and Fanshawe College — a combined 55,000+ students powering local commerce",
      "30,000+ registered London businesses compete across healthcare, legal, professional services, and retail for local search visibility",
    ],
    keyIndustries: ["Healthcare & Medical", "Education", "Financial Services & Insurance", "Manufacturing", "Professional Services"],
    marketBlurb:
      "London is Southwestern Ontario's largest city — a major healthcare, education, and financial services hub anchored by Western University and one of the region's largest hospital networks. The city's diverse economy supports a competitive digital market across professional services, healthcare, legal, home services, food and hospitality, and retail.",
    competitionNote:
      "London's large market size and economic diversity mean significant competition across most service categories. Businesses investing in SEO in London are competing against well-established local operators and Toronto-based firms targeting London search terms.",
    neighborhoodsOrAreas:
      "Downtown London, Old East Village, Hyde Park, Byron, Westmount, Lambeth, Whitehills",
    economyHighlights:
      "Western University, London Health Sciences Centre, 3M Canada, London Life, financial services, insurance, manufacturing",
  },
  kingston: {
    name: "Kingston",
    province: "Ontario",
    pop: "123,000",
    region: "Eastern Ontario",
    marketTier: "emerging",
    businessCount: "7,000+",
    localStats: [
      "Kingston's economy is anchored by Queen's University, RMC, and Kingston Health Sciences Centre — institutions that collectively employ 15,000+ people",
      "7,000+ Kingston businesses compete in a market with strong seasonal tourism dynamics and a permanent high-education resident base",
    ],
    keyIndustries: ["Education & Research", "Healthcare", "Government & Military", "Tourism & Hospitality", "Professional Services"],
    marketBlurb:
      "Kingston is a unique market — a mid-size city with an outsized economic footprint driven by Queen's University, Royal Military College, Kingston Health Sciences Centre, and a strong tourism economy. Businesses serving students, faculty, tourists, and permanent residents compete across a range of digital categories including hospitality, retail, professional services, and healthcare.",
    competitionNote:
      "Kingston's market is manageable in size but requires an understanding of its seasonal and institutional dynamics. Businesses that capture strong search visibility here benefit from relatively predictable, high-quality traffic.",
    neighborhoodsOrAreas:
      "Downtown Kingston, University District, Cataraqui, Rideau Heights, Portsmouth, Greenwood Park",
    economyHighlights:
      "Queen's University, Royal Military College, Kingston Health Sciences Centre, tourism, government, manufacturing",
  },
  peterborough: {
    name: "Peterborough",
    province: "Ontario",
    pop: "83,000",
    region: "Central Ontario",
    marketTier: "emerging",
    businessCount: "4,500+",
    localStats: [
      "Peterborough serves as the commercial hub for the Kawarthas region, extending its effective market to 120,000+ residents across the surrounding area",
      "4,500+ Peterborough businesses are competing for local search visibility, with many sectors still under-invested in digital marketing",
    ],
    keyIndustries: ["Healthcare", "Education", "Manufacturing", "Retail & Hospitality", "Professional Services"],
    marketBlurb:
      "Peterborough serves as the commercial centre for the Kawarthas region — a community with a growing tech sector (driven by Trent University and Fleming College) alongside traditional industries in manufacturing, healthcare, and retail. Its position as a regional hub for surrounding rural communities expands its effective market considerably.",
    competitionNote:
      "Peterborough is a market where decisive early investment in digital visibility pays outsized dividends. Many sectors remain under-optimised, giving businesses a real opportunity to establish dominant local search positions.",
    neighborhoodsOrAreas:
      "Downtown Peterborough, East City, Ashburnham, Monaghan, Otonabee, Northcrest",
    economyHighlights:
      "Trent University, Fleming College, healthcare, manufacturing, retail, and growing tech and creative economy",
  },
  windsor: {
    name: "Windsor",
    province: "Ontario",
    pop: "229,000",
    region: "Southwestern Ontario",
    marketTier: "standard",
    businessCount: "15,000+",
    localStats: [
      "Windsor is Canada's southernmost city and processes $100B+ in cross-border trade annually through the Ambassador Bridge corridor",
      "15,000+ Windsor businesses serve both a local Canadian market and significant cross-border clientele from the Detroit metro area",
    ],
    keyIndustries: ["Automotive Manufacturing", "Healthcare", "Casino & Hospitality", "Cross-Border Trade", "Education"],
    marketBlurb:
      "Windsor is Ontario's southernmost city and a critical Canada-U.S. trade gateway, with the Ambassador Bridge connecting it to Detroit. The city's economy spans automotive manufacturing, healthcare, tourism, and a growing casino and hospitality sector. Windsor businesses targeting both local consumers and cross-border visitors require sophisticated digital marketing strategies.",
    competitionNote:
      "Windsor's cross-border positioning creates unique search marketing opportunities — particularly for businesses serving both Canadian and American consumers or operators in the Windsor-Detroit corridor.",
    neighborhoodsOrAreas:
      "Downtown Windsor, Walkerville, Forest Glade, Riverside, South Windsor, East Windsor, Tecumseh Road",
    economyHighlights:
      "Automotive (Ford, Stellantis), casino and hospitality, University of Windsor, healthcare, cross-border trade",
  },
  "st-catharines": {
    name: "St. Catharines",
    province: "Ontario",
    pop: "136,000",
    region: "Niagara Region",
    marketTier: "standard",
    businessCount: "9,000+",
    localStats: [
      "St. Catharines is Niagara Region's largest city and commercial centre, serving 440,000+ residents across the entire Niagara Peninsula",
      "The wine and agri-food sector, tourism economy, and Brock University combine to create a distinctive and growing local business market",
    ],
    keyIndustries: ["Wine & Agri-Food", "Healthcare", "Education", "Manufacturing", "Tourism & Retail"],
    marketBlurb:
      "St. Catharines is the Niagara Region's largest city and its commercial heart. Home to Brock University, a significant wine and agri-food industry, and a growing healthcare sector, the city's businesses serve both local residents and visitors drawn to Niagara's tourism economy. Digital visibility is increasingly critical for businesses competing across service, retail, and hospitality categories.",
    competitionNote:
      "St. Catharines businesses benefit from both local search demand and spillover traffic from Niagara's tourism market. A well-structured local SEO and content strategy can capture both.",
    neighborhoodsOrAreas:
      "Downtown St. Catharines, Grantham, Port Dalhousie, Lakeshore, Merritton, Thorold",
    economyHighlights:
      "Brock University, wine and agri-food, healthcare, manufacturing, tourism, canal and marine heritage",
  },
  "niagara-falls": {
    name: "Niagara Falls",
    province: "Ontario",
    pop: "89,000",
    region: "Niagara Region",
    marketTier: "standard",
    businessCount: "5,500+",
    localStats: [
      "Niagara Falls draws 14 million+ visitors annually — creating dual search audiences of local residents and tourists at wildly different stages of intent",
      "The hospitality, gaming, and entertainment sectors represent the largest share of Niagara Falls' digital marketing spend",
    ],
    keyIndustries: ["Tourism & Hospitality", "Gaming & Entertainment", "Retail", "Real Estate", "Manufacturing"],
    marketBlurb:
      "Niagara Falls is one of Ontario's top tourist destinations, drawing over 14 million visitors annually. Its business community spans hospitality, entertainment, retail, and real estate alongside a year-round local services economy. For businesses here, digital marketing must work for both local customers and the massive transient tourist audience.",
    competitionNote:
      "Niagara Falls has unique SEO dynamics — businesses need to capture both highly local search intent (residents) and tourism-driven search intent (visitors planning trips). This dual-market approach requires a nuanced content and keyword strategy.",
    neighborhoodsOrAreas:
      "Clifton Hill, Fallsview, Downtown Niagara Falls, Stamford, Chippawa, Lundy's Lane",
    economyHighlights:
      "Tourism (14M+ annual visitors), hospitality and gaming, manufacturing, cross-border retail, real estate",
  },
  brantford: {
    name: "Brantford",
    province: "Ontario",
    pop: "104,000",
    region: "Southwestern Ontario",
    marketTier: "emerging",
    businessCount: "5,500+",
    localStats: [
      "Brantford has undergone significant economic revitalization, with Laurier Brantford and growing manufacturing investment attracting new residents and businesses",
      "5,500+ Brantford businesses are active in a local market where many search categories remain under-competed — a first-mover advantage for early digital investors",
    ],
    keyIndustries: ["Manufacturing", "Healthcare", "Education", "Retail", "Professional Services"],
    marketBlurb:
      "Brantford is a mid-size Ontario city undergoing significant economic revitalization, anchored by Wilfrid Laurier University's Brantford campus, a growing manufacturing base, and a strengthening professional services sector. Local businesses are increasingly recognising the value of digital visibility as the city's commercial landscape evolves.",
    competitionNote:
      "Brantford presents significant opportunities for businesses willing to invest in digital marketing early. Competition for many local search terms remains lower than nearby Hamilton or Kitchener, making it easier to achieve strong rankings.",
    neighborhoodsOrAreas:
      "Downtown Brantford, Henderson Survey, Brier Park, West Brant, Holmedale, Eagle Place",
    economyHighlights:
      "Laurier Brantford, healthcare, manufacturing, sports heritage, growing professional services",
  },
  cambridge: {
    name: "Cambridge",
    province: "Ontario",
    pop: "140,000",
    region: "Waterloo Region",
    marketTier: "standard",
    businessCount: "10,000+",
    localStats: [
      "Cambridge is home to Toyota's Canadian manufacturing plant and dozens of advanced manufacturing companies employing 40,000+ workers",
      "10,000+ Cambridge businesses span a diverse range from industrial B2B suppliers to consumer service providers, all competing for local digital visibility",
    ],
    keyIndustries: ["Advanced Manufacturing", "Healthcare", "Education", "Professional Services", "Technology"],
    marketBlurb:
      "Cambridge is the third city of Waterloo Region — a manufacturing powerhouse that has diversified into tech, professional services, and healthcare. Home to Toyota's Canadian manufacturing plant and dozens of advanced manufacturing companies, Cambridge businesses range from industrial suppliers to consumer service providers all competing for local digital visibility.",
    competitionNote:
      "Cambridge's industrial base means many businesses are B2B-focused, creating opportunities in lead generation SEO, LinkedIn marketing, and Google Ads targeting procurement decision-makers.",
    neighborhoodsOrAreas:
      "Downtown Galt, Hespeler, Preston, Blair, Clemens Mills, Centennial",
    economyHighlights:
      "Toyota Canada, advanced manufacturing, healthcare, Conestoga College, growing tech and professional services",
  },
  newmarket: {
    name: "Newmarket",
    province: "Ontario",
    pop: "88,000",
    region: "York Region",
    marketTier: "standard",
    businessCount: "5,000+",
    localStats: [
      "Newmarket is York Region's commercial hub, serving a catchment of 200,000+ residents from across the northern GTA",
      "Southlake Regional Health Centre — York Region's largest hospital — anchors a significant healthcare services economy across Newmarket's business community",
    ],
    keyIndustries: ["Healthcare", "Retail", "Professional Services", "Real Estate", "Technology"],
    marketBlurb:
      "Newmarket is York Region's commercial hub — a prosperous community with strong retail, professional services, and healthcare sectors. Its location at the north end of the GTA makes it a regional service centre for a broad area, with businesses serving both local residents and customers from surrounding communities.",
    competitionNote:
      "Newmarket businesses benefit from serving both local and regional search demand. A strong local SEO strategy can capture traffic from across York Region's north.",
    neighborhoodsOrAreas:
      "Downtown Newmarket, Summerhill Estates, Glenway, Bristol-London, Stonehaven, Gorham-College Manor",
    economyHighlights:
      "Healthcare (Southlake Regional), retail, professional services, upper York Region commercial hub",
  },
  aurora: {
    name: "Aurora",
    province: "Ontario",
    pop: "67,000",
    region: "York Region",
    marketTier: "standard",
    businessCount: "4,000+",
    localStats: [
      "Aurora's average household income ranks in the top 10% for Ontario communities — creating a high-value consumer base for local service businesses",
      "4,000+ Aurora businesses serve a quality-conscious clientele that makes purchasing decisions heavily influenced by online reputation and search visibility",
    ],
    keyIndustries: ["Healthcare & Wellness", "Professional Services", "Retail", "Real Estate", "Corporate Offices"],
    marketBlurb:
      "Aurora is a premium suburban community in York Region known for its high household incomes, strong residential real estate market, and active local business community. Professional services, healthcare, fitness, retail, and home services businesses serve a quality-conscious clientele that makes decisions based heavily on online reputation and visibility.",
    competitionNote:
      "Aurora's affluent market makes digital marketing ROI particularly strong. Consumers here spend more per transaction and value quality signals heavily — making strong search visibility and a polished web presence especially valuable.",
    neighborhoodsOrAreas:
      "Aurora Village, Aurora Highlands, Aurora Grove, Bayview Wellington, Hill Estates",
    economyHighlights:
      "Healthcare, professional services, retail, corporate offices, high-income residential real estate",
  },
  pickering: {
    name: "Pickering",
    province: "Ontario",
    pop: "100,000",
    region: "Durham Region",
    marketTier: "standard",
    businessCount: "6,000+",
    localStats: [
      "Pickering is one of Durham Region's fastest-growing communities, with a large residential base and expanding commercial corridors along Kingston Road and Pickering Town Centre",
      "6,000+ Pickering businesses span retail, healthcare, professional services, and home services — all competing for increasingly contested local search visibility",
    ],
    keyIndustries: ["Nuclear Energy", "Healthcare", "Retail & Food Service", "Professional Services", "Real Estate"],
    marketBlurb: "Pickering is a rapidly growing Durham Region city with a unique economic profile anchored by the Pickering Nuclear Generating Station alongside a large and expanding residential and commercial economy. Its position at the eastern edge of the GTA makes it a major bedroom community with significant local consumer spending in retail, healthcare, and home services.",
    competitionNote: "Pickering's digital marketing landscape is growing but still less saturated than inner GTA markets. Businesses that invest in local SEO and Google Ads now can achieve strong rankings before competition intensifies further.",
    neighborhoodsOrAreas: "Pickering Town Centre, Liverpool, Rosebank, Dunbarton, Brock Industrial, Highbush, Bay Ridges",
    economyHighlights: "Pickering Nuclear Generating Station, retail and commercial corridors along Kingston Road, growing healthcare and professional services, Pickering Town Centre",
  },
  ajax: {
    name: "Ajax",
    province: "Ontario",
    pop: "130,000",
    region: "Durham Region",
    marketTier: "standard",
    businessCount: "7,000+",
    localStats: [
      "Ajax is one of Durham Region's largest and most commercially active municipalities, with a rapidly growing population fuelling demand across all local service categories",
      "7,000+ registered Ajax businesses compete for local search visibility in a market where digital marketing adoption is accelerating rapidly",
    ],
    keyIndustries: ["Healthcare & Medical", "Retail", "Professional Services", "Home Services", "Real Estate"],
    marketBlurb: "Ajax is a fast-growing Durham Region city with a large young residential population, a strong commercial core, and significant commercial development along Bayly Street and Harwood Avenue. Its residents are digitally engaged consumers with high spending power across healthcare, home improvement, fitness, and professional services.",
    competitionNote: "Ajax's search marketing landscape remains moderately competitive relative to the inner GTA, creating a window of opportunity for early-movers to dominate local search categories before competition intensifies.",
    neighborhoodsOrAreas: "Downtown Ajax, South Ajax, Westney Heights, Pickering Village, Lakeside, North Ajax",
    economyHighlights: "Growing retail corridors, healthcare services, professional services, proximity to Oshawa industrial base, strong residential consumer economy",
  },
  whitby: {
    name: "Whitby",
    province: "Ontario",
    pop: "138,000",
    region: "Durham Region",
    marketTier: "standard",
    businessCount: "7,500+",
    localStats: [
      "Whitby is Durham Region's county seat and one of Ontario's fastest-growing mid-size cities, with a large affluent residential base driving strong local consumer spending",
      "7,500+ Whitby businesses span health, professional services, retail, and home improvement — all categories with rapidly growing search volumes",
    ],
    keyIndustries: ["Healthcare & Medical", "Professional Services", "Retail & Restaurant", "Home Services", "Real Estate"],
    marketBlurb: "Whitby is Durham Region's county seat — one of Ontario's fastest-growing mid-size cities. With above-average household incomes, a large professional-class residential population, and a growing commercial base along Dundas Street and downtown, Whitby businesses serve a quality-conscious local market with strong spending power.",
    competitionNote: "Whitby's growing commercial landscape means digital marketing competition is intensifying alongside its population. Businesses that establish strong search visibility now will have a meaningful advantage as the market continues to develop.",
    neighborhoodsOrAreas: "Downtown Whitby, Brooklin, Lynde Creek, Blue Grass Meadows, Rolling Acres, Port Whitby",
    economyHighlights: "Durham Region county seat, Lakeridge Health Whitby, retail and professional services, growing residential development, government services",
  },
  oshawa: {
    name: "Oshawa",
    province: "Ontario",
    pop: "166,000",
    region: "Durham Region",
    marketTier: "standard",
    businessCount: "10,000+",
    localStats: [
      "Oshawa is Durham Region's largest city and a major commercial and post-secondary hub, anchored by Ontario Tech University, Durham College, and Lakeridge Health",
      "10,000+ Oshawa businesses span manufacturing, healthcare, education services, retail, and professional services — with digital marketing adoption accelerating across all sectors",
    ],
    keyIndustries: ["Automotive & Manufacturing", "Healthcare", "Post-Secondary Education", "Retail", "Professional Services"],
    marketBlurb: "Oshawa is Durham Region's largest city, evolved from its legacy as Canada's auto capital into a diversified economy anchored by Ontario Tech University, a major healthcare system, and a growing entrepreneurial and professional services sector. Its large consumer base and institutional economy create strong local search demand across a wide range of categories.",
    competitionNote: "Oshawa offers a balance of strong search demand and moderate competition — particularly in healthcare, professional services, and home services — making it an attractive market for businesses looking to build dominant digital market share.",
    neighborhoodsOrAreas: "Downtown Oshawa, Lakeview, Vanier, McLaughlin, Pinecrest, Kedron, North Oshawa",
    economyHighlights: "Ontario Tech University, Durham College, Lakeridge Health, GM Canada legacy, growing entrepreneurial ecosystem, regional retail hub",
  },
  "north-york": {
    name: "North York",
    province: "Ontario",
    pop: "695,000",
    region: "City of Toronto",
    marketTier: "major",
    businessCount: "55,000+",
    localStats: [
      "North York is one of Toronto's largest districts, with a dense mix of residential communities, commercial corridors, and major employment centres along Yonge Street and Sheppard Avenue",
      "55,000+ North York businesses compete in a major urban market where category competition is fierce and digital marketing is the primary driver of local customer acquisition",
    ],
    keyIndustries: ["Healthcare & Medical", "Professional Services", "Financial Services", "Retail", "Real Estate"],
    marketBlurb: "North York is one of the most populous and commercially active districts in the City of Toronto. Its major corridors — Yonge Street, Sheppard Avenue, Wilson Avenue, and the North York City Centre — host thousands of businesses across healthcare, professional services, financial services, retail, and hospitality. Competition for local search visibility is fierce across virtually every category.",
    competitionNote: "North York's search marketing landscape is highly competitive — businesses here effectively compete within Toronto's premium market. Strong technical SEO, robust content strategy, and a well-managed Google Ads programme are essential for visibility.",
    neighborhoodsOrAreas: "North York City Centre, Willowdale, Don Mills, Bathurst Manor, Downsview, Jane-Finch, Lawrence Park, Bayview Village",
    economyHighlights: "Major healthcare campuses, financial services, corporate offices along Sheppard corridor, retail at Fairview Mall and Yorkdale, Yonge Street commercial strip",
  },
  scarborough: {
    name: "Scarborough",
    province: "Ontario",
    pop: "632,000",
    region: "City of Toronto",
    marketTier: "major",
    businessCount: "45,000+",
    localStats: [
      "Scarborough is one of the most ethnically diverse urban markets in Canada, with strong consumer demand across multicultural food, healthcare, professional services, and retail",
      "45,000+ Scarborough businesses serve a large, diverse, and digitally active consumer base that increasingly relies on Google search and reviews to choose local businesses",
    ],
    keyIndustries: ["Healthcare & Medical", "Multicultural Food & Retail", "Professional Services", "Real Estate", "Manufacturing"],
    marketBlurb: "Scarborough is one of Toronto's largest and most ethnically diverse districts, with a vibrant business community spanning healthcare, retail, restaurants, professional services, and light manufacturing. Its consumer base is highly diverse, digitally active, and represents significant purchasing power across local services and specialty retail categories.",
    competitionNote: "Scarborough's digital marketing landscape varies by neighbourhood and category. Dense commercial corridors like Kennedy Road, Sheppard, and Midland Avenue see high competition, while other areas offer genuine first-mover opportunities.",
    neighborhoodsOrAreas: "Scarborough Town Centre, Kennedy Park, Agincourt, Malvern, West Hill, Guildwood, Woburn, Birchcliff",
    economyHighlights: "Major retail at Scarborough Town Centre, healthcare, diverse food and service economy, Centennial College, University of Toronto Scarborough, light manufacturing",
  },
  etobicoke: {
    name: "Etobicoke",
    province: "Ontario",
    pop: "362,000",
    region: "City of Toronto",
    marketTier: "major",
    businessCount: "28,000+",
    localStats: [
      "Etobicoke combines a large affluent residential base with major commercial corridors and proximity to Pearson Airport — creating a premium local consumer market and significant B2B demand",
      "28,000+ Etobicoke businesses compete in a high-income urban market where quality signals, reputation, and search visibility drive purchase decisions",
    ],
    keyIndustries: ["Professional Services", "Healthcare & Dental", "Corporate & B2B", "Retail & Hospitality", "Real Estate"],
    marketBlurb: "Etobicoke is a large and affluent Toronto district with a diverse economy spanning professional services, corporate offices, healthcare, retail, and hospitality. Its proximity to Pearson International Airport makes it a hub for aviation-related businesses, while its residential corridors — Bloor West Village, The Kingsway, Humber Valley — host high-income consumers with strong spending power.",
    competitionNote: "Etobicoke's high-income residential base makes digital marketing ROI particularly strong. Consumers here spend more per transaction and are highly influenced by online reputation and search ranking.",
    neighborhoodsOrAreas: "Bloor West Village, The Kingsway, Humber Valley, Mimico, New Toronto, Long Branch, Rexdale, Islington Village",
    economyHighlights: "Pearson Airport corridor, professional services, healthcare, corporate offices, premium retail on Bloor Street and The Kingsway",
  },
  milton: {
    name: "Milton",
    province: "Ontario",
    pop: "132,000",
    region: "Halton Region",
    marketTier: "standard",
    businessCount: "7,000+",
    localStats: [
      "Milton is one of Canada's fastest-growing municipalities, with population growth consistently among the highest in Ontario over the past decade",
      "7,000+ Milton businesses serve a young, affluent, and rapidly expanding residential population — creating strong and growing search demand across healthcare, home services, and professional services",
    ],
    keyIndustries: ["Healthcare & Wellness", "Home Services", "Professional Services", "Retail", "Logistics & Distribution"],
    marketBlurb: "Milton is one of Ontario's fastest-growing communities — a planned, affluent suburb in Halton Region with strong household incomes, a young professional demographic, and surging demand for local healthcare, home services, and retail. Its rapid growth means new businesses are entering the market regularly, making early digital marketing investment particularly valuable.",
    competitionNote: "Milton's digital marketing landscape is less saturated than nearby Mississauga or Oakville, but competition is growing rapidly alongside its population. Early-movers in local SEO and Google Ads have a genuine first-mover window that is narrowing.",
    neighborhoodsOrAreas: "Downtown Milton, Bronte Meadows, Dorset Park, Dempsey, Clarke, Coates, Ford",
    economyHighlights: "Rapid residential growth, Halton Region distribution hub, growing healthcare and professional services economy, major logistical corridors off Highway 401",
  },
  "halton-hills": {
    name: "Halton Hills",
    province: "Ontario",
    pop: "61,000",
    region: "Halton Region",
    marketTier: "emerging",
    businessCount: "3,500+",
    localStats: [
      "Halton Hills is a growing Halton Region community whose dual urban centres — Georgetown and Acton — are seeing increasing business activity and local search demand",
      "3,500+ Halton Hills businesses operate in a market where digital marketing adoption remains early-stage — creating significant first-mover opportunities",
    ],
    keyIndustries: ["Manufacturing", "Retail & Food Service", "Home Services", "Professional Services", "Agriculture"],
    marketBlurb: "Halton Hills encompasses Georgetown and Acton — two growing communities in Halton Region with a mix of manufacturing, retail, and local service businesses. Its proximity to both the GTA and rural Ontario creates a distinctive market character, and its lower levels of digital marketing competition make it an attractive environment for businesses seeking to dominate local search early.",
    competitionNote: "Halton Hills offers some of the best first-mover opportunities in the GTA-adjacent market. Many local search categories remain under-competed — businesses investing in SEO and Google Ads now can achieve dominant positions before the market matures.",
    neighborhoodsOrAreas: "Georgetown, Acton, Glen Williams, Norval, Stewarttown",
    economyHighlights: "Manufacturing heritage, growing retail and professional services in Georgetown, rural-urban mix, proximity to major GTA logistics corridors on Highway 401",
  },
  belleville: {
    name: "Belleville",
    province: "Ontario",
    pop: "55,000",
    region: "Eastern Ontario",
    marketTier: "emerging",
    businessCount: "3,200+",
    localStats: [
      "Belleville is Eastern Ontario's key commercial hub, serving a regional catchment that extends well beyond its city limits into Prince Edward County and surrounding rural communities",
      "3,200+ Belleville businesses serve both urban and rural consumers — a unique market mix that rewards strong local SEO and Google Business Profile optimisation",
    ],
    keyIndustries: ["Healthcare & Medical", "Retail & Wholesale", "Manufacturing", "Military & Government", "Food Processing"],
    marketBlurb: "Belleville is a strategically located Eastern Ontario city on the Bay of Quinte, serving as a regional commercial hub for a broad rural and suburban catchment. Home to CFB Trenton — Canada's largest military air base — as well as a growing agri-food sector and strong retail economy, Belleville businesses serve a diverse consumer base across military families, local residents, and regional visitors.",
    competitionNote: "Belleville's digital marketing landscape is early-stage and underdeveloped relative to its market potential. Businesses that invest in SEO and Google Ads now face minimal local competition and can achieve first-page rankings at comparatively low cost.",
    neighborhoodsOrAreas: "Downtown Belleville, East Hill, West End, Thurlow, Cannifton, Foxboro",
    economyHighlights: "CFB Trenton, Quinte Health, retail hub for Eastern Ontario, agri-food, manufacturing, Bay of Quinte tourism",
  },
  "greater-sudbury": {
    name: "Greater Sudbury",
    province: "Ontario",
    pop: "161,000",
    region: "Northern Ontario",
    marketTier: "standard",
    businessCount: "9,000+",
    localStats: [
      "Greater Sudbury is Northern Ontario's largest city and its regional commercial, healthcare, and educational hub — serving a catchment of 500,000+ people across Northern Ontario",
      "9,000+ Sudbury businesses serve both urban residents and the broader Northern Ontario catchment, with digital marketing increasingly essential for capturing regional search demand",
    ],
    keyIndustries: ["Mining & Resource Extraction", "Healthcare", "Post-Secondary Education", "Government & Public Services", "Retail"],
    marketBlurb: "Greater Sudbury is the largest city in Northern Ontario and a critical regional hub for healthcare, education, government, and commercial services. Anchored by Laurentian University, Health Sciences North, and a major mining industry, Sudbury's business community is diverse and well-established. Its role as Northern Ontario's commercial capital means local businesses serve a catchment far larger than the city itself.",
    competitionNote: "Sudbury's digital marketing landscape is significantly less competitive than Southern Ontario markets. Businesses here often achieve top local search rankings faster and at lower cost than comparable efforts in Toronto or Hamilton.",
    neighborhoodsOrAreas: "Downtown Sudbury, New Sudbury, Hanmer, Valley East, Chelmsford, Lively, Copper Cliff",
    economyHighlights: "Mining and resource extraction (Vale, Glencore), Laurentian University, Health Sciences North, Northern Ontario commercial hub, government services",
  },
  "thunder-bay": {
    name: "Thunder Bay",
    province: "Ontario",
    pop: "108,000",
    region: "Northwestern Ontario",
    marketTier: "standard",
    businessCount: "6,000+",
    localStats: [
      "Thunder Bay is Northwestern Ontario's only major city, serving as the commercial, healthcare, and transportation hub for a region spanning hundreds of kilometres",
      "6,000+ Thunder Bay businesses serve both local consumers and a broad regional catchment, with local search demand growing as the regional economy diversifies",
    ],
    keyIndustries: ["Healthcare & Medical", "Forestry & Resource", "Transportation & Logistics", "Post-Secondary Education", "Retail"],
    marketBlurb: "Thunder Bay is Northwestern Ontario's dominant city — the region's hub for healthcare, post-secondary education, government services, transportation, and commerce. Situated on Lake Superior and historically tied to grain and forestry, Thunder Bay is diversifying into healthcare, technology, and services. Businesses serve both the local population and a regional catchment that extends across Northwestern Ontario.",
    competitionNote: "Thunder Bay presents exceptional first-mover opportunities for digital marketing investment. Search competition in virtually every category is significantly lower than Southern Ontario, meaning businesses can achieve dominant organic rankings at comparatively low cost.",
    neighborhoodsOrAreas: "Current River, Port Arthur, Fort William, Westfort, Intercity, McIntyre, Neebing",
    economyHighlights: "Lakehead University, Thunder Bay Regional Health Sciences Centre, CN Rail, Port of Thunder Bay, forestry, healthcare, government services",
  },
  "sault-ste-marie": {
    name: "Sault Ste. Marie",
    province: "Ontario",
    pop: "73,000",
    region: "Northern Ontario",
    marketTier: "emerging",
    businessCount: "4,000+",
    localStats: [
      "Sault Ste. Marie is a border city connecting Ontario and Michigan across the Soo Locks — creating both domestic and cross-border market dynamics for local businesses",
      "4,000+ Sault Ste. Marie businesses operate in one of Northern Ontario's most under-digitised markets, with significant first-mover advantages available in most search categories",
    ],
    keyIndustries: ["Steel Manufacturing", "Healthcare", "Government & Public Services", "Retail", "Tourism"],
    marketBlurb: "Sault Ste. Marie sits at the northern end of Lake Huron on the Canada-U.S. border, connected to Sault Ste. Marie, Michigan by the International Bridge. Its economy spans steel manufacturing (Algoma Steel), healthcare, government, and a growing tourism sector driven by Agawa Canyon and outdoor recreation. Businesses serve a local population and capture both domestic and cross-border consumer traffic.",
    competitionNote: "Sault Ste. Marie is one of Ontario's most under-served digital marketing markets. Competition for local search is minimal across most categories — businesses can achieve first-page Google rankings with relatively modest, focused investment.",
    neighborhoodsOrAreas: "Downtown Sault Ste. Marie, Station Mall area, Sault North, East End, West End, Korah",
    economyHighlights: "Algoma Steel, Sault College, Algoma University, healthcare, government services, cross-border tourism and commerce, Agawa Canyon",
  },
  "north-bay": {
    name: "North Bay",
    province: "Ontario",
    pop: "51,000",
    region: "Northern Ontario",
    marketTier: "emerging",
    businessCount: "3,000+",
    localStats: [
      "North Bay serves as a commercial hub for Northeastern Ontario, drawing consumers from a wide rural and suburban catchment across Nipissing and surrounding districts",
      "3,000+ North Bay businesses operate in a market with low digital marketing competition — where even modest SEO investment can produce first-page Google rankings in most categories",
    ],
    keyIndustries: ["Healthcare & Medical", "Military & Government", "Retail", "Education", "Tourism & Outdoor Recreation"],
    marketBlurb: "North Bay is a strategically located Northern Ontario city on Lake Nipissing — a commercial and services hub for Northeastern Ontario. Home to Nipissing University, Canadore College, and CFB North Bay, the city anchors a regional economy spanning healthcare, government, education, and retail. Its outdoor recreation assets support a growing tourism economy.",
    competitionNote: "North Bay is among Ontario's most accessible digital marketing markets. Local search competition is low in virtually all categories — businesses can achieve strong Google rankings with focused, consistent investment.",
    neighborhoodsOrAreas: "Downtown North Bay, Pinewood Park, Lakeshore, Ferris, West Ferris, Chippewa",
    economyHighlights: "Nipissing University, Canadore College, CFB North Bay (NORAD), healthcare, regional retail and service hub, Lake Nipissing tourism",
  },
  orangeville: {
    name: "Orangeville",
    province: "Ontario",
    pop: "31,000",
    region: "Dufferin County",
    marketTier: "emerging",
    businessCount: "2,500+",
    localStats: [
      "Orangeville is Dufferin County's commercial hub, serving a regional catchment that includes Shelburne, Grand Valley, and surrounding rural communities",
      "2,500+ Orangeville businesses serve both local residents and the broader rural Dufferin County market — a catchment audience that increasingly discovers businesses through Google search",
    ],
    keyIndustries: ["Retail & Food Service", "Healthcare", "Professional Services", "Agriculture & Agri-Food", "Home Services"],
    marketBlurb: "Orangeville is a charming and commercially active small city in Dufferin County, serving as the main commercial hub for a broad rural and small-town catchment. With a strong independent retail culture, growing professional services sector, and a vibrant arts and hospitality scene, Orangeville businesses serve both local residents and visitors drawn to the area.",
    competitionNote: "Orangeville's local search market is lightly contested across most categories. Businesses that invest in SEO and Google Ads can achieve very strong rankings with modest budgets — an ideal environment for businesses looking to dominate local search before competition grows.",
    neighborhoodsOrAreas: "Downtown Orangeville, Westside, Fairgrounds, Montgomery Village, adjacent communities of Shelburne and Grand Valley",
    economyHighlights: "Independent retail hub, healthcare, professional services, agri-food and rural economy, growing commuter population from the GTA",
  },
  // ── British Columbia ──────────────────────────────────────────
  vancouver: {
    name: "Vancouver",
    province: "British Columbia",
    pop: "675,000",
    region: "Metro Vancouver",
    marketTier: "premium",
    businessCount: "95,000+",
    localStats: [
      "Vancouver is Canada's third-largest city and its most internationally connected business hub, with over 95,000 businesses competing in one of the country's highest-cost markets",
      "Vancouver's tech sector has grown 30%+ since 2020, with Amazon, Microsoft, and Apple all establishing major Vancouver engineering hubs — driving digital marketing sophistication across the local business ecosystem",
    ],
    keyIndustries: ["Technology & Software", "Film & Media Production", "Real Estate & Development", "Tourism & Hospitality", "Financial Services"],
    marketBlurb: "Vancouver is Canada's Pacific gateway and one of the world's most liveable — and competitive — cities. Its business landscape spans a booming technology sector, a world-class film and media industry, significant real estate and development activity, tourism, and an increasingly sophisticated professional services market. Vancouver businesses compete against international firms, U.S.-headquartered brands, and thousands of well-funded local operators all vying for top search positions in one of Canada's most expensive digital advertising markets.",
    competitionNote: "Vancouver's search landscape is among the most competitive in Canada, rivalling Toronto for keyword difficulty and CPCs in professional services, real estate, technology, and hospitality. Businesses here need genuine technical depth and content authority to compete — surface-level SEO rarely moves the needle.",
    neighborhoodsOrAreas: "Downtown Vancouver, Gastown, Yaletown, Kitsilano, Commercial Drive, Mount Pleasant, West End, East Vancouver, Point Grey, Kerrisdale",
    economyHighlights: "Amazon, Microsoft, Apple engineering hubs; major film production studios; Vancouver Stock Exchange; global real estate investment; one of North America's most active startup ecosystems",
  },
  surrey: {
    name: "Surrey",
    province: "British Columbia",
    pop: "570,000",
    region: "Metro Vancouver",
    marketTier: "major",
    businessCount: "40,000+",
    localStats: [
      "Surrey is BC's second-largest city and the fastest-growing municipality in Metro Vancouver, adding thousands of new residents and businesses annually",
      "40,000+ registered Surrey businesses compete across a rapidly evolving commercial landscape spanning healthcare, retail, technology, and professional services",
    ],
    keyIndustries: ["Healthcare & Medical", "Retail & E-Commerce", "Technology", "Construction & Real Estate", "Professional Services"],
    marketBlurb: "Surrey is BC's second-largest city and Metro Vancouver's fastest-growing municipality. Its vast geography encompasses multiple distinct commercial centres — City Centre, Guildford, Cloverdale, Newton, and South Surrey — each with their own consumer base and competitive dynamics. The city's rapidly growing, multicultural population is digitally active and primarily discovers local businesses through Google search and reviews.",
    competitionNote: "Surrey's digital marketing landscape is less saturated than Vancouver proper, making it an excellent market for businesses willing to invest in local SEO and paid media. Establishing search dominance now, before competition intensifies with population growth, provides a compounding advantage.",
    neighborhoodsOrAreas: "Surrey City Centre, Guildford, Cloverdale, Newton, South Surrey, White Rock, Fleetwood, Whalley",
    economyHighlights: "SFU Surrey campus, Kwantlen Polytechnic University, Surrey Memorial Hospital, major retail at Guildford Town Centre, growing tech and professional services sectors",
  },
  burnaby: {
    name: "Burnaby",
    province: "British Columbia",
    pop: "249,000",
    region: "Metro Vancouver",
    marketTier: "major",
    businessCount: "22,000+",
    localStats: [
      "Burnaby hosts the Metro Vancouver headquarters of Electronic Arts, Telus, and Ballard Power Systems — anchoring a high-income, tech-forward business and consumer environment",
      "22,000+ Burnaby businesses compete in a premium urban market where technology industry salaries drive strong local consumer spending across healthcare, retail, and professional services",
    ],
    keyIndustries: ["Technology & Software", "Telecommunications", "Film & Media", "Education (SFU)", "Healthcare & Retail"],
    marketBlurb: "Burnaby is Metro Vancouver's central municipality and one of British Columbia's most commercially significant cities. Home to Simon Fraser University, Electronic Arts, Telus, and a growing cluster of technology and media companies, Burnaby's business community is sophisticated, digitally engaged, and operating in a high-income urban market. The Metrotown commercial centre is Metro Vancouver's second-largest retail hub.",
    competitionNote: "Burnaby's tech-heavy economy means local businesses face digitally sophisticated competitors. Winning organic search rankings here requires genuine content depth, technical SEO precision, and authority-building that can withstand scrutiny from informed buyers.",
    neighborhoodsOrAreas: "Metrotown, Brentwood, Lougheed, Deer Lake, Capitol Hill, Edmonds, South Burnaby, SFU Mountain",
    economyHighlights: "Simon Fraser University, Electronic Arts, Telus HQ, Ballard Power Systems, Metrotown retail hub, growing life sciences and technology sector",
  },
  victoria: {
    name: "Victoria",
    province: "British Columbia",
    pop: "92,000",
    region: "Capital Regional District",
    marketTier: "major",
    businessCount: "20,000+",
    localStats: [
      "Victoria is BC's capital and the CRD's economic hub, with a metro population of 400,000+ and a rapidly growing technology sector that now employs 15,000+ people",
      "Tourism contributes $2B+ annually to the Victoria economy, creating a dual market of local residents and millions of annual visitors with high digital discovery dependence",
    ],
    keyIndustries: ["Government & Public Services", "Technology & Software", "Tourism & Hospitality", "Healthcare", "Education & Research"],
    marketBlurb: "Victoria is British Columbia's capital city — a unique market that blends government stability with a rapidly growing technology sector, world-class tourism, and an active local services economy. The CRD's 400,000+ residents form a stable and prosperous consumer base, while millions of annual tourists add significant seasonal search demand for hospitality, retail, and experience-based businesses.",
    competitionNote: "Victoria's compact geography and distinct market character mean local SEO and precise geographic targeting are especially powerful. Businesses that dominate Victoria-specific search terms and map pack positions capture a loyal local customer base plus significant visitor traffic.",
    neighborhoodsOrAreas: "Downtown Victoria, James Bay, Saanich, Fairfield, Oak Bay, Esquimalt, Langford, Colwood, View Royal",
    economyHighlights: "BC provincial government, University of Victoria, Royal Roads University, growing tech sector, healthcare, tourism economy",
  },
  kelowna: {
    name: "Kelowna",
    province: "British Columbia",
    pop: "145,000",
    region: "Okanagan",
    marketTier: "standard",
    businessCount: "12,000+",
    localStats: [
      "Kelowna is BC's fastest-growing metropolitan area, with net migration from Vancouver and Alberta driving exceptional population growth and new business formation",
      "Wine and agri-tourism drive 1.5M+ visitor nights annually, creating strong search demand for hospitality, retail, and service businesses across the Okanagan",
    ],
    keyIndustries: ["Wine & Agri-Tourism", "Technology (Remote-First)", "Healthcare & Wellness", "Real Estate & Construction", "Hospitality & Retail"],
    marketBlurb: "Kelowna is the Okanagan's economic capital and one of Canada's fastest-growing mid-size cities, driven by immigration from Vancouver, Alberta, and Ontario. Its booming real estate, world-class wine country, and warm climate have made it one of Canada's most desirable destinations for both relocating businesses and remote workers. The city's tourism economy adds significant seasonal search demand that complements year-round local services.",
    competitionNote: "Kelowna's rapid growth means its digital marketing landscape is evolving quickly. The influx of business-minded newcomers is raising competitive standards across healthcare, professional services, real estate, and hospitality — making early investment in SEO particularly valuable.",
    neighborhoodsOrAreas: "Downtown Kelowna, Rutland, Lake Country, West Kelowna, Glenmore, Mission, Dilworth, Black Mountain",
    economyHighlights: "BC wine industry epicentre, growing technology cluster, UBC Okanagan, healthcare, real estate development, tourism",
  },
  abbotsford: {
    name: "Abbotsford",
    province: "British Columbia",
    pop: "161,000",
    region: "Fraser Valley",
    marketTier: "standard",
    businessCount: "12,000+",
    localStats: [
      "Abbotsford is Canada's largest agricultural producer by area and a major agri-food processing hub, supporting thousands of businesses across the Fraser Valley supply chain",
      "12,000+ Abbotsford businesses serve a rapidly growing population that uses Google search as the primary way to discover and evaluate local services",
    ],
    keyIndustries: ["Agriculture & Agri-Food", "Healthcare & Medical", "Manufacturing", "Retail & Wholesale", "Professional Services"],
    marketBlurb: "Abbotsford is the Fraser Valley's largest city and one of Canada's most productive agricultural regions. Beyond farming and agri-food, the city hosts a significant manufacturing base, a strong retail economy, and a rapidly growing professional services sector. The University of the Fraser Valley anchors a growing knowledge economy. Abbotsford's proximity to the U.S. border adds cross-border commercial dynamics.",
    competitionNote: "Abbotsford's digital marketing market is significantly less competitive than Metro Vancouver, offering genuine first-mover opportunities in most service categories. Businesses can achieve strong local search rankings with focused, well-executed investment.",
    neighborhoodsOrAreas: "Downtown Abbotsford, Clearbrook, Matsqui, Bradner, Huntingdon, Mount Lehman, Central Abbotsford",
    economyHighlights: "Canada's largest agricultural district, University of the Fraser Valley, Abbotsford International Airport, manufacturing and food processing, cross-border trade",
  },
  coquitlam: {
    name: "Coquitlam",
    province: "British Columbia",
    pop: "160,000",
    region: "Metro Vancouver (Tri-Cities)",
    marketTier: "standard",
    businessCount: "11,000+",
    localStats: [
      "Coquitlam anchors Metro Vancouver's Tri-Cities area alongside Port Coquitlam and Port Moody, serving a combined consumer market of 300,000+ residents",
      "Coquitlam Centre — one of Metro Vancouver's largest regional shopping malls — drives significant retail traffic that extends local business search demand across the entire Tri-Cities area",
    ],
    keyIndustries: ["Retail & E-Commerce", "Healthcare & Medical", "Professional Services", "Construction & Real Estate", "Technology"],
    marketBlurb: "Coquitlam is the largest of Metro Vancouver's Tri-Cities — a prosperous suburban municipality with a large, multicultural, middle-class residential base, major retail anchors, and a growing professional services economy. The Evergreen SkyTrain extension has accelerated commercial development, making Coquitlam Centre an increasingly important business and retail hub for eastern Metro Vancouver.",
    competitionNote: "Coquitlam offers solid local search opportunity without the extreme competition of Vancouver or Burnaby. Businesses that invest in GBP optimisation, local content, and Google Ads in Coquitlam can build dominant positions in most service categories with realistic budgets.",
    neighborhoodsOrAreas: "Coquitlam Centre, Maillardville, Austin Heights, Burke Mountain, Westwood Plateau, Ranch Park, Chineside",
    economyHighlights: "Coquitlam Centre regional retail hub, Kwantlen Polytechnic Coquitlam campus, healthcare, construction and real estate development, proximity to Simon Fraser University",
  },
  "richmond-bc": {
    name: "Richmond",
    province: "British Columbia",
    pop: "209,000",
    region: "Metro Vancouver",
    marketTier: "standard",
    businessCount: "20,000+",
    localStats: [
      "Richmond is Metro Vancouver's most economically dynamic suburb, home to Vancouver International Airport (YVR) and the region's largest Asian-Canadian business community",
      "20,000+ Richmond businesses span aviation, hospitality, retail, technology, and professional services — all competing in a sophisticated, multicultural digital market",
    ],
    keyIndustries: ["Airport & Aviation Services", "Hospitality & Hotels", "Multicultural Retail & Dining", "Technology & Logistics", "Real Estate & Development"],
    marketBlurb: "Richmond is Metro Vancouver's second-largest municipality by population and arguably its most commercially diverse. Home to Vancouver International Airport, the largest Asian-Canadian business community in Canada, and major logistics and technology operations, Richmond's business landscape is uniquely multicultural and internationally connected. The city's hospitality sector serves both YVR travellers and local residents.",
    competitionNote: "Richmond's multicultural consumer base and airport-driven hospitality economy create distinctive search marketing opportunities. Businesses that understand Richmond's dual local-and-transient audience — and build content strategies that serve both — gain a significant competitive edge.",
    neighborhoodsOrAreas: "City Centre, Steveston Village, Brighouse, Ironwood, East Richmond, Oval District, Gilmore, Cambie Corridor",
    economyHighlights: "Vancouver International Airport (YVR), Asia Pacific Gateway, major hospitality cluster, technology and logistics operations, Steveston heritage tourism, multicultural retail",
  },

  // ── Alberta ───────────────────────────────────────────────────
  calgary: {
    name: "Calgary",
    province: "Alberta",
    pop: "1,340,000",
    region: "Southern Alberta",
    marketTier: "premium",
    businessCount: "105,000+",
    localStats: [
      "Calgary is Canada's energy capital and has one of the highest average household incomes of any major Canadian city — creating an exceptionally high-value consumer and B2B market",
      "105,000+ Calgary businesses compete in a diversified economy that has expanded from its oil and gas roots into technology, financial services, and professional services",
    ],
    keyIndustries: ["Energy & Oil and Gas", "Financial Services & Banking", "Technology & Startups", "Real Estate & Construction", "Professional Services"],
    marketBlurb: "Calgary is Canada's energy capital and its fourth-largest city — an economically dynamic, high-income market with a strong entrepreneurial culture and a rapidly diversifying economy. While energy remains a dominant force, Calgary has emerged as one of Canada's top technology hubs, with a strong financial services sector and a booming professional services market. The city's high average household income and business-forward culture make it a highly competitive and high-value digital marketing market.",
    competitionNote: "Calgary's search landscape is highly competitive, particularly in financial services, energy, real estate, professional services, and technology. The city's high-income consumer base raises the stakes: the reward for ranking well is enormous, but the investment required to get there is substantial.",
    neighborhoodsOrAreas: "Downtown Calgary, Beltline, Inglewood, Kensington, Mission, Bridgeland, Marda Loop, Seton, University District, Brentwood",
    economyHighlights: "Canadian Natural Resources, Enbridge, TC Energy; one of Canada's fastest-growing tech sectors; major financial services hub; University of Calgary; booming real estate and construction",
  },
  edmonton: {
    name: "Edmonton",
    province: "Alberta",
    pop: "1,010,000",
    region: "Central Alberta",
    marketTier: "premium",
    businessCount: "85,000+",
    localStats: [
      "Edmonton is Alberta's capital and Canada's northernmost major city — anchoring a vast provincial economy that stretches from the oilsands to the agricultural heartland",
      "85,000+ Edmonton businesses compete across government, energy, healthcare, technology, and retail — with digital marketing investment accelerating as the economy diversifies",
    ],
    keyIndustries: ["Government & Public Services", "Energy & Petrochemicals", "Healthcare & Life Sciences", "Technology", "Retail & Hospitality"],
    marketBlurb: "Edmonton is Alberta's provincial capital and its second-largest city — a major government, energy, and healthcare hub with a rapidly growing technology sector. The University of Alberta, Alberta Health Services, and a dense cluster of energy companies anchor a diversified economy with strong B2B and B2C digital spending. Edmonton's consumer market is large, high-income, and increasingly turning to digital channels to discover and evaluate local businesses.",
    competitionNote: "Edmonton's search market is competitive across government, energy, healthcare, retail, and professional service categories. The city's large professional class and high household incomes make organic search visibility particularly valuable — educated buyers research extensively before committing.",
    neighborhoodsOrAreas: "Downtown Edmonton, Strathcona, Glenora, Westmount, St. Albert, Sherwood Park, Whyte Avenue, Beverly, South Edmonton Common",
    economyHighlights: "Alberta provincial government, University of Alberta, Alberta Health Services, Fort McMurray oilsands supply chain, growing technology and startup ecosystem, West Edmonton Mall",
  },
  "red-deer": {
    name: "Red Deer",
    province: "Alberta",
    pop: "103,000",
    region: "Central Alberta",
    marketTier: "standard",
    businessCount: "7,000+",
    localStats: [
      "Red Deer is Central Alberta's commercial hub, positioned midway between Calgary and Edmonton and serving a regional catchment of 350,000+ rural and suburban consumers",
      "7,000+ Red Deer businesses span energy services, healthcare, retail, and agriculture — with digital marketing investment growing as the regional economy diversifies",
    ],
    keyIndustries: ["Energy & Industrial Services", "Healthcare & Medical", "Agriculture & Agri-Food", "Retail & Wholesale", "Professional Services"],
    marketBlurb: "Red Deer is Central Alberta's largest city and a critical commercial hub for the province's agricultural and energy heartland. Positioned exactly midway between Calgary and Edmonton on the QEII, Red Deer serves a broad regional catchment of rural Alberta consumers. Its economy spans energy services, healthcare, agriculture, and a growing retail and professional services sector.",
    competitionNote: "Red Deer's digital marketing landscape is significantly less competitive than Calgary or Edmonton. Businesses that invest in local SEO and Google Ads can achieve dominant search positions across most categories at a fraction of the cost of comparable efforts in Alberta's two major cities.",
    neighborhoodsOrAreas: "Downtown Red Deer, Gaetz Avenue Corridor, Parkland, Timberlands, Ironstone, Clearview Ridge, Vanier Woods",
    economyHighlights: "Energy services and supply chain, Red Deer Regional Hospital Centre, Parkland College, agriculture and agri-food, Central Alberta regional retail hub",
  },
  lethbridge: {
    name: "Lethbridge",
    province: "Alberta",
    pop: "102,000",
    region: "Southern Alberta",
    marketTier: "standard",
    businessCount: "7,000+",
    localStats: [
      "Lethbridge is Southern Alberta's largest city and the agricultural heartland's main commercial hub, serving a regional population that extends into rural Alberta and southern Saskatchewan",
      "The University of Lethbridge and Lethbridge College together enroll 15,000+ students, adding a significant young, digitally active consumer base to the local market",
    ],
    keyIndustries: ["Agriculture & Agri-Food", "Healthcare & Medical", "Education & Research", "Retail & Hospitality", "Professional Services"],
    marketBlurb: "Lethbridge is Southern Alberta's economic centre — a community shaped by world-class irrigated agriculture, a strong post-secondary education sector, and a growing healthcare and professional services economy. The University of Lethbridge and Lethbridge College attract students from across the region, while the city's position as the main commercial hub for Southern Alberta gives local businesses a catchment market much larger than the city itself.",
    competitionNote: "Lethbridge offers genuine first-mover opportunities in digital marketing. Most search categories are under-competed relative to the market's size and purchasing power — businesses that invest now can achieve and sustain dominant local search positions.",
    neighborhoodsOrAreas: "Downtown Lethbridge, North Lethbridge, South Lethbridge, Uplands, Copperwood, Blackwing, Henderson Lake",
    economyHighlights: "World-scale irrigated agriculture, University of Lethbridge, Lethbridge College, healthcare, food processing and manufacturing, Southern Alberta commercial hub",
  },
  airdrie: {
    name: "Airdrie",
    province: "Alberta",
    pop: "80,000",
    region: "Central Alberta",
    marketTier: "emerging",
    businessCount: "4,500+",
    localStats: [
      "Airdrie is one of Canada's fastest-growing cities, with population growth consistently exceeding 5% annually — driven by affordable housing relative to Calgary and proximity to the city",
      "4,500+ Airdrie businesses serve a young, family-oriented population with strong household incomes — a high-value local market with growing digital marketing sophistication",
    ],
    keyIndustries: ["Retail & Food Service", "Healthcare & Wellness", "Home Services & Construction", "Professional Services", "Logistics & Warehousing"],
    marketBlurb: "Airdrie is one of Canada's fastest-growing communities — a rapidly expanding Calgary-adjacent city attracting young families and professionals priced out of the urban core. Its business community is growing in parallel with its population, spanning healthcare, retail, home services, and professional services. As the population grows, local search demand is accelerating — creating a real first-mover window for businesses willing to invest in digital marketing early.",
    competitionNote: "Airdrie's rapid growth and early-stage digital marketing ecosystem make it one of Alberta's best current opportunities for establishing dominant local search positions. Competition across most categories remains low relative to the market's spending power and growth trajectory.",
    neighborhoodsOrAreas: "Bayside, Canals, Windsong, Sagewood, Morningside, Meadowbrook, Big Springs, Downtown Airdrie",
    economyHighlights: "Rapid residential and commercial growth, Calgary bedroom community, logistics and warehousing on QE2 corridor, growing healthcare and professional services base",
  },

  // ── Quebec ────────────────────────────────────────────────────
  montreal: {
    name: "Montreal",
    province: "Quebec",
    pop: "2,100,000",
    region: "Greater Montreal",
    marketTier: "premium",
    businessCount: "125,000+",
    localStats: [
      "Montreal is Canada's second-largest city and its creative and technology capital — home to the world's largest concentration of video game studios and a leading global AI research ecosystem",
      "125,000+ Montreal businesses compete in a bilingual market where reaching French and English audiences requires distinct content strategies and a sophisticated understanding of Quebec consumer culture",
    ],
    keyIndustries: ["Technology & Video Games", "Aerospace & Defence", "Finance & Insurance", "Life Sciences & Pharma", "Creative Industries & Film"],
    marketBlurb: "Montreal is Canada's second-largest city and one of North America's most dynamic business markets — a bilingual, culturally rich city with world-leading clusters in artificial intelligence, video game development, aerospace, and life sciences. The city's large, educated, and digitally sophisticated consumer base is spread across distinct francophone and anglophone communities, requiring nuanced digital marketing strategies that work in both official languages.",
    competitionNote: "Montreal's search market is uniquely competitive: businesses must contend with bilingual search intent, strong local consumer culture that often favours Quebec-based businesses, and fierce competition across technology, professional services, and consumer categories. Winning here requires genuine cultural understanding alongside technical SEO execution.",
    neighborhoodsOrAreas: "Downtown Montreal, Mile End, Plateau-Mont-Royal, Old Montreal, NDG, Westmount, Rosemont, Verdun, Hochelaga, Outremont",
    economyHighlights: "Ubisoft, EA, Warner Bros. Games Montreal; Bombardier; McGill University; Université de Montréal; Mila AI Institute; world-class pharma and life sciences cluster",
  },
  "quebec-city": {
    name: "Quebec City",
    province: "Quebec",
    pop: "549,000",
    region: "Capital-Nationale",
    marketTier: "major",
    businessCount: "35,000+",
    localStats: [
      "Quebec City is Quebec's provincial capital and seat of the National Assembly — its government and public sector economy creates the province's most stable and predictable consumer market",
      "Quebec City's insurance and financial services sector employs 40,000+ people, making it one of Canada's most important insurance industry hubs alongside its government economy",
    ],
    keyIndustries: ["Government & Public Services", "Insurance & Financial Services", "Aerospace & Defence", "Tourism & Hospitality", "Technology"],
    marketBlurb: "Quebec City is Quebec's capital and one of Canada's most historically significant cities — a UNESCO World Heritage Site that draws millions of tourists annually while anchoring a stable, government-dominated local economy. Beyond government, the city has developed significant clusters in insurance and financial services, aerospace, and a rapidly growing technology sector. Its predominantly francophone market requires French-first digital marketing strategies.",
    competitionNote: "Quebec City's predominantly francophone market requires a French-first approach to content and SEO. Businesses that invest in quality French-language content, locally relevant GBP profiles, and Quebec-specific search strategies gain a significant advantage over competitors using translated or generic content.",
    neighborhoodsOrAreas: "Old Quebec (Vieux-Québec), Saint-Roch, Sainte-Foy, Beauport, Charlesbourg, Limoilou, Sillery, Lévis",
    economyHighlights: "Quebec provincial government, National Assembly, Intact Financial, Co-operators, Videotron, Desjardins Group, Laval University, aerospace cluster",
  },
  laval: {
    name: "Laval",
    province: "Quebec",
    pop: "440,000",
    region: "Greater Montreal",
    marketTier: "major",
    businessCount: "25,000+",
    localStats: [
      "Laval is Quebec's third-largest city and home to one of Canada's most important pharmaceutical and life sciences clusters — with over 200 life sciences companies generating $3B+ in annual revenue",
      "25,000+ Laval businesses compete in a strategically located market that serves both the city's own large residential population and proximity to Montreal's 2M+ consumer base",
    ],
    keyIndustries: ["Pharmaceuticals & Life Sciences", "Retail (Carrefour Laval)", "Healthcare & Medical", "Manufacturing & Logistics", "Professional Services"],
    marketBlurb: "Laval is Quebec's third-largest city — a strategically located island municipality north of Montreal anchored by one of Canada's most important pharmaceutical and life sciences clusters. Carrefour Laval, one of Quebec's largest shopping centres, drives major retail traffic, while the city's growing residential population creates strong demand for healthcare, professional services, and home services. Laval's bilingual market requires French-primary digital strategies.",
    competitionNote: "Laval's pharmaceutical and life sciences sector creates unique B2B search marketing opportunities alongside its large consumer market. Businesses in healthcare, professional services, and retail face significant competition from both Laval-based operators and Montreal-headquartered businesses targeting the Laval market.",
    neighborhoodsOrAreas: "Chomedey, Sainte-Rose, Vimont, Duvernay, Pont-Viau, Fabreville, Laval-des-Rapides, Saint-Vincent-de-Paul",
    economyHighlights: "200+ life sciences companies including Pfizer Canada; Carrefour Laval retail hub; Cégep de Laval; healthcare, manufacturing, and logistics operations",
  },
  longueuil: {
    name: "Longueuil",
    province: "Quebec",
    pop: "250,000",
    region: "Greater Montreal (Montérégie)",
    marketTier: "standard",
    businessCount: "15,000+",
    localStats: [
      "Longueuil is the Montérégie region's largest city and the South Shore's main commercial centre, serving a broad catchment that extends well into the Greater Montreal suburban belt",
      "The aerospace cluster on the South Shore — anchored by Pratt & Whitney Canada and Bell Flight — creates significant high-income professional employment that drives strong local consumer spending",
    ],
    keyIndustries: ["Aerospace & Aeronautics", "Healthcare & Medical", "Retail & Services", "Professional Services", "Manufacturing"],
    marketBlurb: "Longueuil is Montreal's South Shore counterpart — Montérégie's largest city and a significant commercial and industrial hub. The city's aerospace cluster (Pratt & Whitney Canada, Bell Flight, and dozens of suppliers) drives high-income professional employment and strong B2B demand. Its large residential population and proximity to Montreal make it both a self-contained local market and an extension of the Greater Montreal consumer base.",
    competitionNote: "Longueuil's French-primary search market requires well-crafted French-language content and local SEO. Businesses that establish strong GBP visibility and local content in French gain a meaningful advantage over competitors using generic or translated strategies.",
    neighborhoodsOrAreas: "Old Longueuil, Greenfield Park, Saint-Hubert, LeMoyne, Brossard, Saint-Bruno-de-Montarville",
    economyHighlights: "Pratt & Whitney Canada, Bell Flight, aerospace supply chain, Charles-Le Moyne Hospital, retail at Carrefour de la Rive-Sud, healthcare and professional services",
  },
  gatineau: {
    name: "Gatineau",
    province: "Quebec",
    pop: "292,000",
    region: "Outaouais",
    marketTier: "standard",
    businessCount: "16,000+",
    localStats: [
      "Gatineau and Ottawa form the National Capital Region — a combined market of 1.4M+ residents where cross-border search behaviour creates unique opportunities for bilingual businesses",
      "16,000+ Gatineau businesses serve both local Quebec consumers and cross-river Ottawa residents, particularly in retail, healthcare, and professional services",
    ],
    keyIndustries: ["Government & Public Services", "Technology & Software", "Healthcare", "Retail & Consumer Services", "Professional Services"],
    marketBlurb: "Gatineau is the fourth-largest city in Quebec and the Quebec half of Canada's National Capital Region. Separated from Ottawa only by the Ottawa River, Gatineau functions as both a distinct Quebec market and an integral part of the NCR's 1.4M+ combined consumer base. Its large government workforce, growing technology sector, and strategic cross-border position create distinctive digital marketing opportunities for businesses serving both French and English customers.",
    competitionNote: "Gatineau's bilingual, cross-border market requires careful search strategy: targeting both French Quebec search terms and English NCR terms, with content that serves both audiences. Businesses that do this well capture significantly more search demand than competitors who optimise for only one language.",
    neighborhoodsOrAreas: "Hull, Aylmer, Gatineau sector, Buckingham, Masson-Angers, Limbour, Plateau sector",
    economyHighlights: "Federal government presence, Canadian Museum of History, Université du Québec en Outaouais, technology sector, cross-border commercial relationships with Ottawa",
  },

  // ── Prairies ──────────────────────────────────────────────────
  winnipeg: {
    name: "Winnipeg",
    province: "Manitoba",
    pop: "749,000",
    region: "Southern Manitoba",
    marketTier: "major",
    businessCount: "50,000+",
    localStats: [
      "Winnipeg is Canada's geographic heart — a major logistics and transportation hub handling $25B+ in goods annually, sitting at the intersection of Canada's east-west and north-south trade routes",
      "50,000+ Winnipeg businesses compete across a diverse economy where agriculture, manufacturing, healthcare, finance, and retail all represent significant digital marketing spend",
    ],
    keyIndustries: ["Agriculture & Agri-Food", "Manufacturing & Aerospace", "Healthcare & Life Sciences", "Financial Services & Insurance", "Transportation & Logistics"],
    marketBlurb: "Winnipeg is Canada's gateway city — the largest prairie metropolis and a critical hub for transportation, logistics, agriculture, and manufacturing. As Manitoba's capital, it anchors the province's government and healthcare economy. The University of Manitoba and a growing technology sector are driving economic diversification. Winnipeg businesses operate in a highly competitive local market where digital visibility is increasingly the primary driver of customer acquisition.",
    competitionNote: "Winnipeg's search market is competitive relative to its size — particularly in healthcare, legal, home services, and professional services. The city's stable economy and growing population make digital marketing ROI predictable and strong, especially for businesses investing in both SEO and paid media.",
    neighborhoodsOrAreas: "Downtown Winnipeg, The Forks, Osborne Village, St. Boniface, St. James, Transcona, River Heights, Tuxedo, North End, Exchange District",
    economyHighlights: "University of Manitoba, Manitoba government, Richardson International, Wawanesa Insurance, Boeing Winnipeg, major agricultural supply chain, growing technology and creative sector",
  },
  saskatoon: {
    name: "Saskatoon",
    province: "Saskatchewan",
    pop: "266,000",
    region: "Central Saskatchewan",
    marketTier: "major",
    businessCount: "18,000+",
    localStats: [
      "Saskatoon is Canada's potash capital, sitting at the centre of the world's largest recoverable potash deposits — an industry that supports thousands of high-income professional and technical jobs",
      "18,000+ Saskatoon businesses compete in a resourceful, entrepreneurial market where agriculture, mining technology, and health sciences are all driving rapid economic diversification",
    ],
    keyIndustries: ["Potash Mining & Agriculture", "Healthcare & Life Sciences", "Technology & Innovation", "Professional Services", "Retail & Hospitality"],
    marketBlurb: "Saskatoon is Saskatchewan's largest city and one of Canada's most entrepreneurial mid-size markets. Positioned at the heart of the world's richest potash belt, the city's resource economy supports a large, high-income professional workforce. The University of Saskatchewan anchors a growing health sciences and technology cluster, while Saskatoon's vibrant downtown and retail economy serve a quality-conscious local consumer base.",
    competitionNote: "Saskatoon's resource-fuelled economy means strong household incomes and high consumer spending power — making digital marketing ROI excellent for businesses across most service categories. Competition is growing as the city attracts more national businesses, making early SEO investment increasingly valuable.",
    neighborhoodsOrAreas: "Downtown Saskatoon, Broadway, Nutana, Varsity View, Stonebridge, Silverspring, Willowgrove, Forest Grove, University Heights",
    economyHighlights: "University of Saskatchewan, Nutrien (world's largest potash company), Royal University Hospital, Vendasta Technologies, growing agri-tech and health sciences cluster",
  },
  regina: {
    name: "Regina",
    province: "Saskatchewan",
    pop: "230,000",
    region: "Southern Saskatchewan",
    marketTier: "major",
    businessCount: "16,000+",
    localStats: [
      "Regina is Saskatchewan's provincial capital and administrative centre — its government and Crown corporation economy provides exceptional economic stability for local businesses",
      "16,000+ Regina businesses compete in a stable, energy-and-agriculture-driven market where digital adoption is accelerating across professional services, healthcare, and retail",
    ],
    keyIndustries: ["Government & Crown Corporations", "Oil & Gas & Petrochemicals", "Agriculture & Agri-Services", "Healthcare", "Professional Services"],
    marketBlurb: "Regina is Saskatchewan's capital city — a stable, prosperous market anchored by provincial government, Crown corporations, and the energy and agriculture industries that define Saskatchewan's economy. SaskPower, SGI, and dozens of Crown agencies provide significant public-sector employment and economic stability. The University of Regina adds a growing knowledge economy component, while the city's oil and agricultural wealth drives strong household incomes and consumer spending.",
    competitionNote: "Regina's stable government-anchored economy makes it an excellent market for businesses with consistent, quality-focused digital marketing strategies. Competition is measured but growing — particularly in healthcare, legal, professional services, and home services — rewarding early investors.",
    neighborhoodsOrAreas: "Downtown Regina, Cathedral, Wascana, Harbour Landing, The Towns, Hillsdale, Lakeridge, Whitmore Park",
    economyHighlights: "Saskatchewan provincial government, SaskPower, SGI, SaskTel, SaskEnergy, University of Regina, Co-op Refinery Complex, agriculture and oilfield services",
  },

  // ── Atlantic Canada ───────────────────────────────────────────
  halifax: {
    name: "Halifax",
    province: "Nova Scotia",
    pop: "480,000",
    region: "Halifax Regional Municipality",
    marketTier: "major",
    businessCount: "28,000+",
    localStats: [
      "Halifax is Atlantic Canada's economic capital, commanding the region's largest port, its most significant financial services cluster, and its primary naval base — making it a uniquely multi-sectoral market",
      "28,000+ Halifax businesses serve both the HRM's 480,000 residents and a broader regional catchment — with inbound migration driving some of Canada's strongest recent population growth",
    ],
    keyIndustries: ["Government & Defence (Naval)", "Ocean Technology & Innovation", "Healthcare & Life Sciences", "Post-Secondary Education", "Tourism & Hospitality"],
    marketBlurb: "Halifax is Atlantic Canada's undisputed economic capital — the region's largest city, its principal seaport, and the headquarters of Canada's Atlantic Fleet naval operations. Beyond its strategic government and military role, Halifax is rapidly emerging as a technology and innovation hub, with a growing ocean technology cluster, a world-class university ecosystem (Dalhousie, SMU, NSCAD), and strong healthcare and professional services sectors. The city is experiencing some of Canada's fastest population growth from inbound migration.",
    competitionNote: "Halifax's digital marketing landscape is competitive for Atlantic Canada but offers significantly lower CPCs and easier organic ranking opportunities compared to central Canadian markets. Businesses investing in SEO and paid media here achieve strong ROI while building positions that are increasingly difficult for late-entrant competitors to dislodge.",
    neighborhoodsOrAreas: "Downtown Halifax, North End, South End, West End, Dartmouth, Bedford, Sackville, Clayton Park, Bayers Lake",
    economyHighlights: "Dalhousie University, Saint Mary's University, NSCAD; CFB Halifax (Canada's Atlantic Fleet HQ); Halifax Port Authority; growing ocean technology and AI research cluster",
  },
  moncton: {
    name: "Moncton",
    province: "New Brunswick",
    pop: "80,000",
    region: "Greater Moncton",
    marketTier: "standard",
    businessCount: "9,000+",
    localStats: [
      "Moncton is one of Canada's fastest-growing Census Metropolitan Areas, driven by interprovincial migration and international immigration that are rapidly expanding the local business market",
      "Greater Moncton's 180,000+ bilingual population serves as the commercial hub for a Maritime catchment of 300,000+ people, making it Atlantic Canada's retail and logistics capital",
    ],
    keyIndustries: ["Transportation & Logistics", "Retail & E-Commerce", "Financial & Insurance Services", "Healthcare", "Professional Services"],
    marketBlurb: "Moncton is the commercial heart of New Brunswick and Atlantic Canada's transportation crossroads. As one of Canada's fastest-growing cities, it's attracting national retailers, financial services firms, and technology companies drawn by its bilingual workforce, affordable costs, and strategic logistics position. The city's rapid growth is driving accelerating digital marketing competition — making it one of the most exciting emerging markets in eastern Canada.",
    competitionNote: "Moncton's rapid growth is quickly maturing its digital marketing landscape. Businesses that establish strong local search presence now — before national brands fully arrive — will enjoy a compounding first-mover advantage in one of Canada's fastest-growing cities.",
    neighborhoodsOrAreas: "Downtown Moncton, Riverview, Dieppe, Champlain, North End, Caledonia, Wheeler Park, Sunny Brae",
    economyHighlights: "CN Rail hub, Assumption Life, Atlantic Lottery Corporation, UPS Supply Chain, major retail at Champlain Place, Université de Moncton",
  },
  fredericton: {
    name: "Fredericton",
    province: "New Brunswick",
    pop: "67,000",
    region: "Fredericton Capital Region",
    marketTier: "standard",
    businessCount: "5,000+",
    localStats: [
      "Fredericton is New Brunswick's provincial capital and one of Canada's most concentrated technology talent markets per capita, with a thriving startup ecosystem anchored by UNB and STU",
      "5,000+ Fredericton businesses serve a government-anchored economy with exceptionally stable consumer spending and growing digital marketing demand across professional services, tech, and healthcare",
    ],
    keyIndustries: ["Government & Public Services", "Technology & Startups", "Education & Research", "Healthcare", "Professional Services"],
    marketBlurb: "Fredericton is New Brunswick's capital — a compact, highly educated city that has emerged as one of Canada's most impressive startup and technology ecosystems relative to its population. The University of New Brunswick and St. Thomas University anchor a knowledge economy that has produced celebrated technology companies and dozens of innovators. Government employment provides economic stability while the tech sector drives growth and innovation.",
    competitionNote: "Fredericton's small but highly educated business market rewards quality over quantity in digital marketing. Businesses with well-crafted SEO strategies, polished web presence, and strong review profiles consistently outperform larger competitors who neglect their digital execution.",
    neighborhoodsOrAreas: "Downtown Fredericton, North Side, Skyline Acres, Silverwood, Hanwell, Devon, Barker's Point, New Maryland",
    economyHighlights: "New Brunswick provincial government, University of New Brunswick, St. Thomas University, thriving tech startup community, NB Power, growing creative and innovation sector",
  },
};

/* Default blurb for cities without specific data */
function getDefaultCityData(slug: string, displayName: string): CityData {
  return {
    name: displayName,
    province: "Ontario",
    pop: "growing",
    region: "Ontario",
    marketTier: "standard",
    businessCount: "thousands of",
    localStats: [
      `${displayName} is a growing Ontario community with an expanding local business market and increasing digital marketing competition`,
      `Businesses in ${displayName} that invest in digital marketing today are positioning themselves ahead of competitors who rely solely on referrals and traditional advertising`,
    ],
    keyIndustries: ["Professional Services", "Healthcare", "Retail", "Home Services", "Food & Hospitality"],
    marketBlurb: `${displayName} is a vibrant Ontario community with a growing and competitive local business market. As more consumers in ${displayName} turn to Google to find local services, businesses that invest in digital marketing gain a measurable and compounding advantage over competitors who rely solely on word of mouth or traditional advertising.`,
    competitionNote: `${displayName}'s local search market continues to grow in competitiveness. Businesses that establish strong organic rankings and paid media presence now will be significantly better positioned as the local market continues to mature.`,
    neighborhoodsOrAreas: `Key business districts and residential communities across ${displayName}`,
    economyHighlights: `A diverse local economy spanning professional services, healthcare, retail, home services, and small business`,
  };
}

/* ─── Timeline types ─────────────────────────────────────────────── */

interface TimelineMilestone {
  period: string;
  title: string;
  desc: string;
}

/* ─── Service data ───────────────────────────────────────────────── */

interface ServiceData {
  label: string;
  shortLabel: string;
  h1Template: string;
  taglineTemplate: string;
  metaDescTemplate: string;
  introTemplate: string;
  /** 3–4 variants for Para 0 (opening hook). Hash-picks one per city×service. */
  introHooks?: string[];
  /** 2–3 variants for Paras 1–3 (body). Each string is 3 \n\n-separated paras. */
  introBodyAlt?: string[];
  whyTemplate: string[];
  /** Alternatives per why position: [pos0variants, pos1variants, pos2variants] */
  whyVariants?: [string[], string[], string[]];
  included: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  stats: { n: string; l: string }[];
  /** Expanded FAQ pool (18–20 items). hPickN selects 8 per page. */
  faqTemplate: { q: string; a: string }[];
  timeline: TimelineMilestone[];
  cta: string;
  ctaSecondary: string;
  relatedServices: { label: string; href: string }[];
  icon: React.ElementType;
}

const SERVICES: Record<string, ServiceData> = {
  "seo-services": {
    label: "SEO Services",
    shortLabel: "SEO",
    icon: Search,
    h1Template: "SEO Services in [City], [Province]",
    taglineTemplate: "Rank higher. Get found. Grow faster. Outlier is [City]'s results-driven SEO agency.",
    metaDescTemplate:
      "Professional SEO services in [City], [Province]. Outlier helps [City] businesses rank on page 1 of Google and drive compounding organic growth. Get a free SEO audit today.",
    introTemplate: `Search engine optimisation is the highest-ROI long-term investment a [City] business can make in its digital growth. When potential customers in [City] search for what you offer — whether that's a service, a product, or an answer to a problem — appearing on page 1 of Google puts you in front of buyers at exactly the right moment. Businesses that rank on page 1 receive the overwhelming majority of clicks; page 2 and beyond are essentially invisible to most searchers. In [City]'s competitive market, the difference between ranking #1 and ranking #10 can represent hundreds of thousands of dollars in annual revenue.

At Outlier, we've been building and executing SEO strategies for [City] businesses for over a decade. Our approach combines rigorous technical foundations, deeply researched content strategy, and authoritative link building to create organic visibility that compounds month over month. We don't chase algorithm shortcuts or report on vanity metrics — we build the kind of SEO infrastructure that survives every Google update and keeps delivering results years after the initial work is done. Every [City] client gets a dedicated SEO team that includes a senior strategist, a technical SEO specialist, a content lead, and a link acquisition manager.

Our [City] SEO team starts with a comprehensive audit of your current search presence: technical health, keyword coverage, content gaps, competitive landscape, and backlink profile. From there, we build a prioritised roadmap that addresses the highest-impact opportunities first and creates a sustainable path to page 1 — and then to position 1. Every strategy is built specifically for your business and your market in [City]; we don't use templates or off-the-shelf packages. The [City] market has its own competitive dynamics that generic SEO frameworks simply don't account for.

The most common mistake [City] businesses make with SEO is treating it as a one-time project rather than a sustained programme. Google's algorithm rewards consistency, topical depth, and accumulating authority — all of which require ongoing execution. The businesses that dominate search in [City] today didn't get there with a single burst of activity; they got there by investing consistently over 12–24 months and building a compounding digital asset. Our job is to accelerate that timeline and make every month of investment more efficient than the last.

Understanding who your [City] customers are, how they search, and what they need to see before they take action is central to our keyword strategy. We segment keywords by intent — informational, commercial, and transactional — and build content architectures that capture your target audience at every stage of the buying journey. This is how we build pipelines that keep feeding leads into your business long after the initial work is complete. The [City] businesses we work with don't just rank — they convert, because the content and pages we build are optimised for both Google and for humans.

Our reporting model is built around the metrics that actually matter to a [City] business owner or marketing director: organic traffic growth, keyword rankings for commercially meaningful terms, qualified lead volume from organic channels, and revenue influenced by SEO. We don't hide behind impressions or "visibility scores" — you'll see exactly what your SEO investment is producing, and we'll have a clear conversation about what it will take to grow those numbers every quarter.`,
    whyTemplate: [
      "Because [City] buyers start with Google. Over 93% of online experiences begin with a search engine, and the majority of those searches happen on Google. If your business doesn't appear on page 1 for the searches your customers are making, you're invisible to them — and your competitors aren't.",
      "Because SEO compounds in a way paid advertising doesn't. Every dollar you spend on Google Ads stops working the moment you stop paying. Every piece of well-optimised content, every earned backlink, every technical improvement we make to your site continues to generate traffic and leads long after the work is complete. The [City] businesses that invest in SEO today build an asset that appreciates over time.",
      "Because the [City] market rewards being first. In most service and product categories, the top 3 organic positions in [City] capture the large majority of clicks and enquiries. Getting to those positions — and staying there — requires consistent, expert-level execution. Outlier provides that execution.",
    ],
    included: [
      {
        title: "Full Technical SEO Audit & Remediation",
        description:
          "We conduct a comprehensive technical audit covering site speed, Core Web Vitals, crawlability, indexation, canonical issues, duplicate content, structured data, hreflang, XML sitemaps, and mobile usability. Every issue is prioritised by impact and fixed — not just reported.",
      },
      {
        title: "Keyword Research & Search Intent Mapping",
        description:
          "We research every keyword your [City] customers are using — from high-volume head terms to long-tail service and location queries. We map each keyword to the right page and content format based on search intent, ensuring every piece of content on your site is aligned with what Google's users actually want.",
      },
      {
        title: "On-Page Optimisation",
        description:
          "Every page that matters gets fully optimised: title tags, meta descriptions, H1/H2 structure, internal linking, schema markup, image optimisation, and content updates. We make sure Google understands exactly what each page is about — and that users are compelled to click and convert.",
      },
      {
        title: "Content Strategy & Creation",
        description:
          "We build topical authority through a structured content strategy: service pages, location pages, pillar articles, and supporting blog content — all researched, written, and optimised to outrank competitors and match [City] search demand.",
      },
      {
        title: "Link Building & Authority Development",
        description:
          "We build high-quality backlinks from relevant, authoritative Canadian and industry-specific sources. No PBNs, no link farms — only editorial placements and digital PR that permanently raise your domain's authority and improve your rankings.",
      },
      {
        title: "Monthly Reporting & Strategic Reviews",
        description:
          "You get a clear monthly report showing ranking movements, organic traffic, conversion data, and the specific work completed. Every quarter, we review strategy and adjust priorities based on what's working and where the biggest opportunities lie.",
      },
    ],
    process: [
      { step: "01", title: "Discovery & Audit", description: "We start with a deep dive into your business, competitive landscape, and current search presence. Our technical audit identifies every barrier to ranking and every opportunity we can exploit. This takes 5–7 business days and forms the foundation of your entire strategy." },
      { step: "02", title: "Strategy & Roadmap", description: "Based on the audit, we build a prioritised 90-day roadmap. You know exactly what we're doing, why we're doing it, and what results to expect at each milestone. No black box, no vague promises." },
      { step: "03", title: "Technical Foundation", description: "We implement all technical fixes — working directly with your development team or making changes ourselves depending on your CMS. A clean technical foundation is non-negotiable; everything else we build sits on top of it." },
      { step: "04", title: "Content & Links", description: "With the technical foundation in place, we execute the content calendar and link building plan concurrently. Content builds topical authority; links build domain authority. Both are required to rank competitively in [City]." },
      { step: "05", title: "Monitor, Refine & Scale", description: "SEO is ongoing. We monitor rankings, traffic, and conversion data weekly and adjust the strategy based on what Google and your competitors are doing. As rankings and traffic improve, we identify new keyword clusters to expand into." },
    ],
    stats: [
      { n: "+312%", l: "avg. organic traffic growth in 12 months" },
      { n: "8 months", l: "avg. time to page 1 for primary keywords" },
      { n: "93%", l: "client retention rate after year 1" },
    ],
    timeline: [
      { period: "Months 1–2", title: "Technical Foundation + Strategy", desc: "Full audit complete, technical fixes implemented, keyword map finalised, and content roadmap live. First Google indexation improvements typically visible." },
      { period: "Months 3–5", title: "First Ranking Movements", desc: "Secondary and long-tail keywords begin ranking page 1–2. Content production accelerates. Link building programme active. Organic traffic starts growing." },
      { period: "Months 6–12+", title: "Competitive Keyword Growth", desc: "Primary commercial keywords ranking page 1. Significant organic traffic increases. Lead flow from organic measurably improving. ROI clearly positive." },
    ],
    faqTemplate: [
      {
        q: "How long does SEO take to show results in [City]?",
        a: "Most [City] businesses start seeing measurable ranking improvements within 3–4 months of beginning work. Significant traffic increases typically follow at the 6–9 month mark. The timeline depends on your industry's competitiveness, your starting position, and how aggressively we execute the strategy. More competitive [City] markets — like legal, dental, real estate, or home services — generally take longer to crack than niche or emerging categories.",
      },
      {
        q: "What does an SEO agency in [City] actually do?",
        a: "A good [City] SEO agency — like Outlier — does three core things: (1) fixes the technical issues that prevent Google from properly crawling, understanding, and indexing your site; (2) creates and optimises content that matches what [City] buyers are searching for; and (3) builds the backlink authority that signals to Google your site deserves to rank above competitors. Most agencies do one or two of these well; we do all three, on a single integrated roadmap.",
      },
      {
        q: "How does Outlier scope an SEO engagement for a [City] business?",
        a: "Every engagement is scoped individually based on your competitive landscape, current search presence, goals, and timeline. We don't use packages or preset tiers. After your free audit, we build a custom strategy and scope the work required to achieve your specific objectives — and we won't recommend a scope we can't deliver results with.",
      },
      {
        q: "Do you work with businesses in specific [City] industries?",
        a: "We work across industries but have particularly deep experience in healthcare, legal, home services, real estate, SaaS, ecommerce, and professional services — all of which are well-represented in [City]'s business community. Our team understands the compliance nuances and competitive dynamics of each vertical.",
      },
      {
        q: "What makes Outlier different from other SEO agencies serving [City]?",
        a: "Three things: strategy depth, execution quality, and transparency. We build custom strategies — not recycled packages. We have senior specialists executing every piece of work — not junior staff or offshore contractors. And we report on what actually matters — organic traffic, qualified leads, and revenue influence — not just rankings for easy keywords.",
      },
      {
        q: "Do you offer local SEO for [City] businesses?",
        a: "Yes. Local SEO — optimising for map pack visibility and location-specific search terms — is a core part of our [City] SEO offering. For businesses that serve customers in specific [City] neighbourhoods or service areas, we build targeted local content and GBP strategies to capture that traffic.",
      },
      {
        q: "Can SEO work alongside Google Ads for [City] businesses?",
        a: "Absolutely — and we actively recommend running both in many cases. Google Ads captures immediate purchase-intent traffic while SEO builds the long-term organic foundation. For [City] businesses that need leads now, Ads provides short-term flow. As SEO starts producing organic traffic, the blended cost of acquisition drops significantly. We manage both channels and make them work together.",
      },
      {
        q: "How do you build backlinks for [City] businesses without spammy tactics?",
        a: "Our link acquisition strategy for [City] clients is built on digital PR, content partnerships, and editorial outreach — earning links from legitimate Ontario publications, industry directories, and high-authority national sites that editorially choose to reference your content. We don't buy links, use PBNs, or pursue any tactic that violates Google's guidelines. Every link we earn adds genuine domain authority and is designed to survive every future Google update.",
      },
      {
        q: "What is technical SEO and how does it affect [City] search rankings?",
        a: "Technical SEO covers the infrastructure that allows Google to crawl, index, and understand your website. For [City] businesses, this includes Core Web Vitals performance scores (page speed, layout stability), proper canonicalisation, clean URL structures, schema markup, XML sitemaps, mobile optimisation, and HTTPS. Weak technical foundations consistently hold back [City] sites that otherwise have excellent content — fixing them often produces rapid ranking gains.",
      },
      {
        q: "How do you approach keyword research for [City]-specific searches?",
        a: "We segment [City] keyword research by intent — informational (people researching), commercial (people comparing options), and transactional (people ready to buy). For each category, we identify the search volume, difficulty, and business value. We prioritise keywords where [City] searchers have genuine purchase intent and where page-1 rankings will produce qualified leads, not just traffic. We also identify content gaps — high-volume [City] searches your competitors rank for but you don't.",
      },
      {
        q: "What should I expect in my monthly SEO report for my [City] business?",
        a: "Our monthly SEO reports for [City] clients cover: keyword ranking movements (positions for all target terms), organic traffic from Google Analytics (sessions, users, pages per session), organic conversion data (enquiries, calls, form submissions attributed to organic), backlink acquisition (new links earned that month), technical health status, and the specific work completed and planned. Every report is accompanied by a written commentary explaining what the data means and what we're doing next.",
      },
      {
        q: "Is SEO worth the investment for a small [City] business on a tight budget?",
        a: "Yes — but with realistic expectations. For [City] small businesses, we recommend starting with local SEO (Google Maps and location-specific search terms) before broader organic SEO. Local SEO produces faster results, has lower competition in most [City] submarkets, and directly drives calls and enquiries from people in your service area. We can scope a programme that starts with the highest-ROI activities and scales as results compound. The key is starting — every month you delay, a competitor gains ground.",
      },
      {
        q: "How competitive is the [City] SEO market in [TopIndustry] and similar sectors?",
        a: "[City]'s [TopIndustry] sector is among the more competitive categories for organic search — established operators have been investing in SEO for years and hold significant authority. That said, well-executed SEO can still produce strong results for newer entrants or businesses in adjacent niches. We always conduct a realistic competitive analysis before scoping any engagement, so you know exactly what it will take to rank in your specific [City] category before committing to a programme.",
      },
      {
        q: "What is the difference between organic SEO and paid search for [City] businesses?",
        a: "Organic SEO earns traffic through rankings — no cost per click, but takes 6–18 months to build. Paid search (Google Ads) delivers immediate traffic but stops the moment you pause spend. For most [City] businesses, the optimal approach is running both: Google Ads for immediate lead flow while organic SEO builds. As your [City] SEO programme matures and organic traffic grows, your blended cost of acquisition drops significantly. We manage both channels for [City] clients who want integrated growth.",
      },
      {
        q: "How does Google's algorithm affect [City] businesses differently from other markets?",
        a: "Google's algorithm is universal, but the competitive dynamics it produces vary by market. In [City]'s [Region] environment, [CompetitionLevel] competition in key sectors means Google's quality signals matter more — thin content, weak authority, or technical issues that might rank in smaller markets will fail in [City]. Conversely, [City]'s large search volume means the ROI on achieving page-1 positions is substantially higher than in smaller markets. We calibrate every [City] SEO strategy to the market's specific competitive reality.",
      },
      {
        q: "Do I need separate SEO strategies for different [City] neighbourhoods?",
        a: "For service businesses operating in specific parts of [City], neighbourhood-targeted content and local landing pages can be highly effective. Customers searching for '[service] in [neighbourhood]' or '[service] near [area]' represent some of the highest-intent, highest-converting searches available. We build [City] businesses neighbourhood-specific content strategies where the search volume and competitive opportunity justify the investment — which it does for most service businesses in [City].",
      },
      {
        q: "How do you handle SEO for [City] businesses with multiple locations?",
        a: "Multi-location [City] businesses require a structured local SEO approach: dedicated location pages for each address, separate Google Business Profile optimisation per location, and a citation strategy that maintains consistent NAP (Name, Address, Phone) data across all local directories. We build multi-location programmes that avoid cannibalisation between your own locations while maximising total coverage of [City] and surrounding market search terms.",
      },
      {
        q: "What content types perform best for SEO in [City]'s market?",
        a: "For [City] businesses, the highest-performing content types are typically: (1) Service + location pages targeting '[service] in [City]' intent; (2) Comparison and 'best of' content for decision-stage buyers; (3) Comprehensive guides answering the specific questions [City] customers ask before hiring; and (4) Case studies or results pages demonstrating outcomes for [City] clients. The right mix depends on your specific category — we map content requirements during the initial keyword and competitive audit.",
      },
    ],
    introHooks: [
      `Ranking on page 1 of Google in [City] is harder than most businesses expect — and the gap between page 1 and page 2 is wider than it looks. [City]'s [BusinessCount] registered businesses compete for a limited number of top positions, and the businesses currently holding them have spent years building the technical foundations, content depth, and authority signals that keep them there. Getting into that company requires the same level of sustained investment — there are no shortcuts that survive the next algorithm update.`,
      `Most [City] businesses significantly underestimate the revenue they're leaving on the table by not holding page-1 positions on Google. The top three organic results for a typical high-intent search in [City]'s [Region] market capture the majority of clicks — and those clicks convert at a substantially higher rate than paid channels. For [City] businesses in [Industries] and other competitive sectors, the compounding returns from consistent SEO investment over 12–36 months can substantially outperform any other digital marketing channel.`,
      `The ROI case for SEO in [City] is straightforward: paid search typically costs [City] businesses $3–$15 per click depending on industry, and those clicks stop the moment the budget does. Every organic ranking built through sustained SEO keeps delivering traffic and qualified leads with no ongoing cost per click. For most [City] businesses — particularly in [Industries] — a well-executed SEO programme consistently outperforms paid channels on cost-per-acquisition over a 12–24 month horizon.`,
      `Effective SEO in [City] isn't about hacking an algorithm — it's about understanding the specific competitive dynamics of your [Region] market and building an organic presence that captures the most valuable search demand. [City]'s [BusinessCount] businesses compete in a market where the leaders in [TopIndustry] and other key sectors have earned their positions through deep content investment, technical execution, and consistent authority building. Generic SEO approaches don't account for [City]'s competitive reality. Targeted ones do.`,
    ],
    introBodyAlt: [
      `We approach every [Service] engagement for [City] businesses from a competitive intelligence foundation — understanding not just your own site's strengths and weaknesses, but the exact competitive landscape you're operating in. Before we produce a single piece of work, we know who holds the positions you want to own, how they built them, and what it would take to displace them.

Our [City] [Service] strategy is built on real data, not assumptions. We analyse your current position against competitors who rank for your priority terms, identify the content gaps, technical deficiencies, and authority differential that are keeping you off page 1. This intelligence becomes the foundation of a prioritised roadmap — one that focuses resources on the highest-impact activities first and creates a clear, measurable path to growth.

The [City] businesses that achieve the strongest [Service] results share one characteristic: they invest consistently over time rather than in bursts. Google rewards sustained execution — momentum compounds, authority accumulates, and the results become increasingly difficult for competitors to replicate. Our job is to make every stage of that investment as efficient and as compounding as possible.`,
      `Outlier manages [Service] for [City] businesses with one objective: business growth, measured in leads, revenue, and market share — not vanity metrics. Our team structure ensures every account has senior expertise applied to strategic decisions, with dedicated specialists executing at every level of the programme. [City] clients get a strategist who knows their market, a technical specialist who knows their site, and a content lead who knows their audience.

We start every [City] [Service] engagement with a clear picture of what your investment needs to produce to be worthwhile. Before work begins, we establish the metrics that matter — organic traffic, qualified leads, attributed revenue — and build the reporting infrastructure to track them. You always know what you're getting, and we're always accountable to business outcomes, not activity.

The [City] market has [CompetitionLevel] competition across most [Service] categories — which means building positions requires both strategic precision and consistent execution. We bring both. The businesses we work with in [City] don't just rank — they convert, because every page and piece of content we build is optimised for [City] buyers, not just for search engines.`,
    ],
    whyVariants: [
      [
        "Because [City] buyers start with Google — and over 90% of online experiences begin with a search engine. If your business doesn't appear on page 1 for the searches your [City] customers are making, you're invisible to them at the moment they're most ready to buy.",
        "Because [City]'s [BusinessCount] businesses are competing for the same limited page-1 positions — and the businesses holding those positions are generating a disproportionate share of their market's leads and revenue. Being on page 1 isn't a nice-to-have; in most [City] categories, it's the difference between growing and stagnating.",
        "Because organic search in [City] drives higher-quality leads than almost any other channel. Customers who find you through Google search are actively looking for what you offer — they're closer to a buying decision and more likely to convert than audiences reached through social media or display advertising.",
        "Because [City]'s [Region] market is maturing digitally — and the window to establish dominant organic positions before competition intensifies is narrowing every year. The businesses investing in [Service] now are building compounding assets that will outperform late movers for years.",
      ],
      [
        "Because [Service] compounds in a way paid advertising doesn't. Every piece of optimised content, every earned backlink, every technical improvement continues generating traffic and leads long after the work is complete. [City] businesses investing in [Service] today build an asset that appreciates over time.",
        "Because Outlier specialises in exactly this — building durable organic visibility for [City] businesses in competitive markets. Our team combines senior strategy, technical execution, content development, and authority building into a single integrated programme that produces results and maintains them.",
        "Because we don't use [Service] templates or recycled packages. Every strategy we build for [City] businesses starts from a fresh audit of your specific market position, competitive landscape, and growth objectives — not repurposed from someone else's.",
        "Because Outlier's [City] [Service] results are measurable, attributable, and clearly reported. You always know what your investment is producing, what work is driving it, and what's coming next. There are no black boxes in how we operate.",
      ],
      [
        "Because the [City] market rewards being first. In most [City] service and product categories, the top 3 organic positions capture the large majority of clicks and enquiries. Getting to those positions — and staying there — requires consistent, expert-level execution. Outlier provides that execution.",
        "Because every month without a coherent [Service] strategy is a month your [City] competitors are building positions that become harder and more expensive to displace. The cost of catching up in [Service] is always higher than the cost of building ahead of competition.",
        "Because [Service] has a longer ramp-up period than paid channels — meaning the sooner you start, the sooner the compounding returns begin. [City] businesses that started [Service] 18 months ago are generating measurable ROI today. The businesses starting now will be in that position in 2027.",
        "Because [City]'s [CompetitionLevel] competition means the [Service] investment required to rank is significant — but so is the ROI when you do. Page-1 rankings in [City]'s [TopIndustry] and related sectors drive qualified traffic that converts at industry-leading rates compared to paid alternatives.",
      ],
    ],
    cta: "Get a Free SEO Audit",
    ctaSecondary: "See Our SEO Results",
    relatedServices: [
      { label: "Local SEO", href: "/local-seo-service" },
      { label: "Technical SEO", href: "/technical-seo-service" },
      { label: "Content Marketing", href: "/content-marketing-service" },
      { label: "Google Ads", href: "/google-ads-management" },
    ],
  },

  "local-seo": {
    label: "Local SEO",
    shortLabel: "Local SEO",
    icon: MapPin,
    h1Template: "Local SEO Services in [City], [Province]",
    taglineTemplate:
      "Map pack position 1–3 for [City] searches. More calls. More walk-ins. More booked appointments.",
    metaDescTemplate:
      "Local SEO services in [City], [Province]. Outlier gets [City] businesses into the Google Map pack and ranks them for local service searches. Free local SEO audit available.",
    introTemplate: `For businesses that serve customers in [City] — whether you're a dentist, a home services contractor, a restaurant, a lawyer, or a retail shop — local SEO is the single most cost-effective customer acquisition channel available. When someone in [City] searches "best [your service] near me" or "[your service] in [City]," the businesses that appear in the Google Map pack (the top 3 map results) receive the overwhelming majority of calls, clicks, and walk-ins. Position 1–3 in the map pack is the goal; everything else is table stakes. For most [City] service businesses, appearing in the map pack drives more calls than any paid advertising channel at a fraction of the ongoing cost.

Outlier's [City] Local SEO service is built around getting you into that map pack — and keeping you there. We manage your Google Business Profile with the rigour of a paid ad account, building local citations across every relevant directory, generating reviews at scale, and creating [City]-specific landing pages that capture both map pack and organic local search traffic. We've done this for businesses across dozens of [City] categories and we understand the specific ranking factors and competitive dynamics that matter most in your market. The difference between a GBP in the top 3 and one buried at position 7 is often not the size of the business — it's the quality of its local SEO management.

Your Google Business Profile is your most powerful local marketing asset. It's what potential [City] customers see before they ever visit your website — your ratings, your photos, your hours, your services. An unoptimised or neglected GBP costs you calls and bookings every single day. We rebuild and actively manage your GBP from the ground up: the right primary and secondary categories, service menus, photos that convert, posts that signal activity to Google, and Q&A that pre-empts common customer questions. A fully optimised GBP in [City] is the single fastest-ROI item in any local business's marketing budget.

Reviews are the currency of local search. Google's algorithm weights review volume, velocity, and sentiment heavily in map pack rankings — and [City] consumers read reviews before choosing any local business. We implement a systematic review generation programme that builds your review count and rating across Google, Yelp, and industry-specific platforms. Our clients typically generate 15–40 net new 5-star reviews in the first 90 days. A business with 50 reviews at 4.8 stars consistently outranks a competitor with 8 reviews at 4.2 stars, regardless of other factors.

The best part about local SEO for [City] businesses? Unlike paid advertising, the results compound. A business that dominates the [City] map pack in year one continues to receive that traffic — for free — in year two, year three, and beyond. The investment pays back faster than almost any other marketing channel, and the returns are durable. We've had [City] clients tell us that their GBP now generates more inbound calls in a week than their entire previous marketing budget generated in a month.

Local search competition in [City] varies significantly by category. Home services, dental, legal, and restaurants are the most contested map pack positions — but even in these categories, many incumbent businesses have poorly managed GBPs and thin review profiles. This is where we find the leverage: by out-executing the competition on the fundamentals. Consistent NAP data, category precision, review velocity, local link signals, and content depth add up to a map pack position that is very difficult for competitors to displace once it's established.`,
    whyTemplate: [
      "Because map pack visibility drives more calls than any paid channel. For local [City] service businesses — healthcare, home services, legal, food and hospitality, fitness, and more — Google Maps is where purchase decisions are made. A map pack position 1–3 listing drives 5–10× more phone calls than a paid search ad in the same position.",
      "Because [City] customers trust businesses with a strong local presence. A fully optimised Google Business Profile with consistent citations, high review volume, and fresh photos signals to both Google and [City] customers that you are a credible, established local business. Trust is earned in the local search results, not just on your website.",
      "Because your [City] competitors are investing in it. If you search for your primary service in [City] right now, the businesses ranking in the map pack have invested in local SEO. Every month you delay is a month of calls and bookings going to a competitor. The sooner you start, the sooner you start compounding.",
    ],
    included: [
      { title: "Google Business Profile Optimisation", description: "Complete GBP audit and rebuild: categories, service areas, photos, posts, Q&A management, and attribute optimisation. We manage your GBP on an ongoing basis, posting weekly updates and monitoring for spam and competitor attacks." },
      { title: "Local Citation Building", description: "We build and clean up your presence across 45+ major local directories — Yelp, Yellow Pages, BBB, Foursquare, and dozens of [City]-specific and industry-specific directories. Consistent NAP (Name, Address, Phone) data across the web is foundational to map pack rankings." },
      { title: "Review Generation & Reputation Management", description: "We implement a systematic review generation process — post-service follow-up sequences, review request templates, and monitoring tools — to build your review volume and average rating on Google, Yelp, and industry-specific platforms." },
      { title: "[City] Service-Area Landing Pages", description: "We create and optimise [City]-specific landing pages for every service you offer — structured to rank for both map pack and organic searches, with locally-relevant content, schema markup, and conversion-optimised layouts." },
      { title: "Local Link Building", description: "We build backlinks from [City]-relevant local sources: community organisations, chambers of commerce, local news, industry directories, and partner businesses. Local links are the most underutilised lever in most [City] local SEO strategies." },
      { title: "Map Pack Tracking & Reporting", description: "We track your map pack rankings, GBP visibility metrics (impressions, direction requests, call clicks), and organic local traffic monthly — giving you clear visibility into your local search performance and its business impact." },
    ],
    process: [
      { step: "01", title: "Local SEO Audit", description: "We audit your Google Business Profile, existing citations, review profile, local content, and competitive landscape in [City]. This reveals exactly where the gaps and opportunities are." },
      { step: "02", title: "GBP Rebuild & Optimisation", description: "We rebuild your GBP from the ground up — categories, services, photos, descriptions, service areas, Q&A — optimising every element for [City] local ranking signals." },
      { step: "03", title: "Citation Cleanup & Build-Out", description: "We fix all inconsistent or duplicate citations and build your presence across the 45+ directories that matter most for local ranking in [City]." },
      { step: "04", title: "Content & Landing Pages", description: "We create [City]-specific service-area pages and optimise your existing local content — giving Google clear signals about your geographic relevance and service coverage." },
      { step: "05", title: "Reviews & Ongoing Management", description: "We implement the review generation system and begin ongoing GBP management — weekly posts, Q&A monitoring, photo updates — while tracking ranking progress monthly." },
    ],
    stats: [
      { n: "Top 3", l: "map pack position for 87% of clients within 6 months" },
      { n: "+220%", l: "avg. increase in Google Maps impressions" },
      { n: "6 weeks", l: "avg. time to first ranking improvements" },
    ],
    timeline: [
      { period: "Weeks 2–6", title: "GBP Rebuild + Citations", desc: "GBP fully rebuilt, categories and services optimised, citation cleanup and buildout underway. Initial improvements in GBP impressions typically visible within 3–4 weeks." },
      { period: "Months 2–3", title: "Review Volume + First Rankings", desc: "Review generation programme producing net new 5-star reviews. First map pack ranking improvements visible for secondary terms and specific neighbourhood searches." },
      { period: "Months 3–6", title: "Map Pack Dominance", desc: "Primary category ranking in top 3 map pack positions. Consistent call volume from GBP measurably increasing. Organic local landing pages beginning to rank." },
    ],
    faqTemplate: [
      { q: "What is local SEO and why does my [City] business need it?", a: "Local SEO is the process of optimising your business's online presence to appear prominently when [City] customers search for your services on Google — particularly in Google Maps (the 'map pack') and in local organic results. For any business that serves [City] customers, local SEO is the highest-ROI marketing channel because it captures buyers with strong purchase intent at the exact moment they're looking for what you offer." },
      { q: "How long does it take to get into the Google Map pack in [City]?", a: "For most [City] businesses, we see meaningful map pack ranking improvements within 6–12 weeks. Achieving top 3 positions typically takes 3–6 months depending on how competitive your category is in [City] and your starting position. Categories like dental, legal, and home services in [City] are more competitive and take longer; niche or less-contested categories can show results faster." },
      { q: "What's the difference between local SEO and regular SEO?", a: "Regular SEO focuses on ranking your website in organic search results. Local SEO specifically focuses on visibility in Google Maps, the map pack, and location-based organic results — where '[City] + service' and 'near me' searches show up. Both are valuable, but for businesses serving [City] customers in person, local SEO typically drives more direct calls and enquiries faster." },
      { q: "Do I need a Google Business Profile for local SEO in [City]?", a: "Yes — your Google Business Profile (GBP) is the single most important element of local SEO. It's what appears in the map pack when [City] customers search for your services. An unoptimised or unclaimed GBP is one of the most common reasons [City] businesses don't appear in map pack results despite years of being in business." },
      { q: "Can you do local SEO for businesses with multiple [City] locations?", a: "Absolutely. We manage local SEO for businesses with one location and businesses with 50+ locations. Multi-location local SEO requires a structured approach to GBP management, city-specific landing pages, and citation building at scale — all of which our team handles as a core competency." },
      { q: "How many reviews does my [City] business need to rank in the map pack?", a: "The right number depends on your category and competition in [City]. For most service categories, having 30–50+ Google reviews at a rating of 4.5 or above is a strong baseline. In highly competitive categories like dental or home services, 100+ reviews may be needed to compete for top 3. We assess your specific competition and set realistic targets at the start of every engagement." },
      { q: "How important is Google Business Profile category selection for [City] local SEO?", a: "Critically important. Your primary GBP category is one of the strongest local ranking signals Google uses to determine which searches your business is relevant for in [City]. Choosing the wrong primary category — even a closely related one — can significantly limit your map pack visibility. We audit and optimise category selection for every [City] client at the start of every engagement, and regularly reassess as Google adds new category options." },
      { q: "Can duplicate Google Business Profiles hurt my [City] search rankings?", a: "Yes — significantly. Duplicate GBP listings confuse Google's algorithm and split your review count, photo count, and engagement signals across multiple profiles. For [City] businesses that have moved, rebranded, or had profiles created by third parties, cleaning up duplicates is often one of the fastest and highest-impact local SEO wins available. We identify and resolve duplicate profiles as part of every local SEO audit." },
      { q: "What local citation directories matter most for [City] businesses?", a: "The most impactful citations for [City] businesses are on high-authority Canadian directories: Canada411, Yellow Pages Canada, Yelp Canada, Houzz (for home services), Healthgrades/RateMDs (for healthcare), FindLaw/Justia (for legal), and industry-specific directories relevant to your sector. Google My Business itself is the most important. We build citations across 45+ directories and maintain consistent NAP (Name, Address, Phone) data across all of them." },
      { q: "How do proximity, relevance, and prominence affect [City] map pack rankings?", a: "Google's local algorithm weighs three factors: proximity (how close your business is to the searcher), relevance (how well your GBP and website match what the searcher is looking for), and prominence (how well-known and trusted your business is online, measured by reviews, citations, and links). For [City] businesses, we can't change your physical location — but we can dramatically improve your relevance signals (GBP optimisation, local content) and prominence signals (reviews, citations, backlinks) to maximise your map pack visibility." },
      { q: "Can I rank in the map pack for multiple [City] service area locations from one office?", a: "Yes — with the right strategy. Google allows businesses to define a service area in their GBP even if they don't have a physical location in every area they serve. For [City] businesses that travel to customers (plumbers, cleaners, contractors), we optimise your GBP service area settings and build supporting content for each area you serve. This allows [City] businesses to rank in map searches across their entire service territory, not just in the immediate vicinity of their address." },
      { q: "How does [City]'s [CompetitionLevel] competition affect local SEO strategy?", a: "[City]'s [CompetitionLevel] local search competition means that a basic GBP setup is rarely enough to crack the top 3 map pack positions in contested categories. Businesses competing effectively in [City]'s [TopIndustry] and similar sectors typically have fully optimised profiles, 50+ reviews, consistent citations across major directories, and strong local content backing their map presence. We build programmes that match the competition level of your specific [City] category." },
      { q: "What is the difference between map pack rankings and organic local rankings?", a: "Map pack rankings (the top 3 results shown with a map) are driven primarily by your Google Business Profile signals: category, reviews, proximity, and citations. Organic local rankings (the regular website results below the map) are driven by your website's content, on-page SEO, and backlinks. For [City] businesses, we target both: GBP optimisation for the map pack and local landing pages / content for organic. The strongest local SEO programmes for [City] businesses capture both real estate types." },
      { q: "How do Google Posts affect local SEO rankings in [City]?", a: "Google Posts signal to Google that your business is active and engaged — a positive local ranking factor. For [City] businesses, we publish weekly or bi-weekly posts covering your services, special offers, events, and updates. While posts alone won't move the needle dramatically, they contribute to the overall engagement signals Google uses to assess GBP quality, and they give [City] searchers a reason to click on your profile over a competitor's." },
      { q: "Should my [City] business respond to Google reviews for SEO purposes?", a: "Yes — and for two reasons. First, responding to reviews (especially negative ones) is a positive local SEO signal that Google weighs in ranking decisions. Second, and more importantly, [City] consumers read review responses before choosing a business. Professional, personalised responses to negative reviews can convert detractors into retained customers and show prospective [City] clients that your business takes feedback seriously. We handle review response management as part of our local SEO service." },
      { q: "What [City] industries benefit most from local SEO investment?", a: "[City]'s [Industries] sectors are among the highest-ROI categories for local SEO, given the volume of '[service] near me' searches and the high average transaction value per new customer. Home services (plumbing, HVAC, cleaning), healthcare (dental, physiotherapy, clinics), professional services (legal, accounting), and food and hospitality businesses in [City] also see strong returns from local SEO investment. We've delivered results across all these sectors in [City] and can show category-specific case studies." },
    ],
    introHooks: [
      `For [City] businesses that serve customers locally — from healthcare clinics and home services contractors to restaurants, law firms, and retail shops — appearing in Google's map pack is the single most cost-effective customer acquisition strategy available. When someone in [City] searches "[service] near me" or "[service] in [City]," the three businesses in the map pack receive the overwhelming majority of calls, clicks, and bookings. Position 1–3 isn't a marketing advantage; in most [City] categories, it's the difference between a phone that rings and one that doesn't.`,
      `[City]'s [BusinessCount] registered businesses all compete for the same limited local search real estate. For service businesses in [TopIndustry] and similar sectors, appearing in the Google Map pack — the top 3 results that appear before any organic website listings — drives more calls and enquiries than most paid advertising channels at a fraction of the ongoing cost. The businesses in those top 3 positions aren't there by accident. They've made a deliberate investment in local SEO, and that investment compounds month over month.`,
      `The most underutilised growth lever for [City] service businesses is Local SEO — and the gap between businesses that have invested in it and those that haven't is widening every year. In [City]'s [Region] market, map pack position 1–3 for high-intent local searches is not just valuable; it's increasingly essential. [City] consumers searching for [TopIndustry] and service businesses start with Google Maps in the majority of cases — and if you're not in the top 3, you're not in the running.`,
      `The data is unambiguous: for [City] businesses with physical locations or local service areas, Google Maps visibility generates more direct call volume per dollar invested than Google Ads in most categories. Map pack position 1–3 for "[service] in [City]" searches puts your business in front of buyers who have already decided they need the service and are choosing who to call. That's the highest-value point of the buying journey — and Local SEO is how you own it.`,
    ],
    introBodyAlt: [
      `Outlier's [City] Local SEO service is built around one goal: getting your business into the map pack top 3 and keeping it there. We manage your Google Business Profile with the rigour of a paid ad account — optimising every element, from categories and services to photos and review volume — while building the local citations and content that support your map pack presence. We've delivered map pack results for [City] businesses across [Industries] and dozens of other categories, and we understand the specific ranking factors that matter most in your market.

Your Google Business Profile is your most powerful local marketing asset — and for most [City] businesses, it's dramatically underoptimised. An unoptimised GBP costs you calls and bookings every day. We rebuild and actively manage your profile from the ground up: the right primary and secondary categories, a fully populated service menu, conversion-oriented photos, regular Google Posts, and Q&A that pre-empts common customer questions. A fully optimised GBP in [City] is the single fastest-ROI item in any local business's marketing budget.

Reviews are the currency of local search. Google's algorithm weighs review volume, velocity, and sentiment heavily in map pack rankings — and [City] consumers read reviews before choosing any local business. We implement a systematic review generation programme that builds your review count and rating across Google and industry-specific platforms. Our [City] clients typically generate 15–40 net new 5-star reviews in the first 90 days, materially improving both their rankings and their conversion rates from map pack clicks.`,
      `The [City] local search landscape has [CompetitionLevel] competition in most service categories — which means a basic GBP setup and a handful of citations are rarely enough to achieve top 3 positions. The businesses that dominate [City]'s map pack have invested in the full local SEO stack: an optimised and actively managed GBP, a strong review profile, consistent citations across major directories, and local landing pages that support their map visibility with organic rankings.

We audit every element of your [City] local search presence before we propose anything — your GBP health, your citation consistency, your review profile relative to top-ranked competitors, and the technical local SEO of your website. This gives us a precise picture of where the gaps are and what it will take to close them. For [City] businesses in [TopIndustry] and similar sectors, we've seen major map pack ranking improvements come from fixing fundamental GBP issues that have been overlooked for years.

The local SEO we build for [City] businesses is designed to produce durable results — not quick wins that fade. We build citation profiles on authoritative Canadian and industry-specific directories, create geo-targeted content that reinforces your [City] relevance, and maintain your GBP with the ongoing management that keeps map rankings stable as Google continues evolving its local algorithm.`,
    ],
    whyVariants: [
      [
        "Because map pack position 1–3 in [City] is where the overwhelming majority of local search clicks go. For service businesses in [City]'s [TopIndustry] and related sectors, not appearing in the map pack means losing potential customers to competitors who've made the investment.",
        "Because [City]'s consumers start with Google Maps when searching for local services — and the businesses in the map pack top 3 receive the majority of calls before the searcher ever visits a website. Local SEO puts you in that position.",
        "Because Local SEO delivers a lower cost-per-lead than most paid alternatives for [City] service businesses. Once you're in the map pack top 3, you generate calls and enquiries at no additional cost per click — unlike Google Ads where every lead has a direct cost.",
        "Because [City]'s [BusinessCount] businesses are all competing for the same limited map pack positions — and the window to establish dominant local rankings before competition intensifies is narrowing. Early investment in Local SEO compounds over time.",
      ],
      [
        "Because your Google Business Profile is your most powerful [City] marketing asset — and for most [City] businesses, it's significantly underoptimised. A fully optimised GBP is the fastest-ROI fix in local digital marketing.",
        "Because reviews drive both rankings and conversions. [City] consumers read reviews before choosing any local business — and Google's algorithm weights review volume and quality heavily in map pack rankings. A systematic review generation programme is table stakes.",
        "Because Local SEO builds compounding, durable visibility. Unlike paid ads that stop the moment you pause spend, a strong local SEO presence in [City] keeps generating calls and enquiries month after month with no ongoing cost per lead.",
        "Because Outlier has delivered map pack top 3 results for [City] businesses in [Industries] and dozens of other categories. We know the [City]-specific ranking factors, the competitive benchmarks, and the execution required to deliver results in your specific category.",
      ],
      [
        "Because the [City] businesses in map pack positions 1–3 are capturing a disproportionate share of local search demand — and every month you're not in those positions, that demand is going to competitors. Local SEO closes that gap.",
        "Because Local SEO is the most direct path from zero visibility to consistent inbound leads for [City] service businesses. The map pack generates calls from buyers who have already decided they need your service and are ready to hire — the highest-intent traffic in digital marketing.",
        "Because Outlier manages your GBP with the same rigour we apply to paid campaigns — active monitoring, regular updates, review management, and strategic optimisation — so your [City] local search presence stays strong and current.",
        "Because [City]'s [CompetitionLevel] competition means doing nothing is a choice to fall behind. The local SEO leaders in your [City] category are investing consistently — the gap between their map pack positions and yours grows every month without action.",
      ],
    ],
    cta: "Get a Free Local SEO Audit",
    ctaSecondary: "See Local SEO Results",
    relatedServices: [
      { label: "SEO Services", href: "/seo-services" },
      { label: "GBP Optimisation", href: "/gbp-optimisation" },
      { label: "Review Generation", href: "/review-generation" },
      { label: "Google Ads", href: "/google-ads-management" },
    ],
  },

  "google-ads": {
    label: "Google Ads Management",
    shortLabel: "Google Ads",
    icon: Target,
    h1Template: "Google Ads Management in [City], [Province]",
    taglineTemplate:
      "Profitable Google Ads campaigns for [City] businesses. Managed by certified Google Partners — not algorithmic autopilot.",
    metaDescTemplate:
      "Google Ads management for [City] businesses. Outlier builds and manages profitable Google Search, Local Service Ads, and Performance Max campaigns. Free PPC audit available.",
    introTemplate: `Google Ads is the fastest way for a [City] business to get in front of buyers who are actively searching for what you offer — right now, at the exact moment of purchase intent. Done right, Google Ads delivers a measurable, predictable return on every dollar you invest, with full attribution from click to conversion. Done wrong — which is how most [City] businesses run their Google Ads accounts — it's an expensive way to fund your competitors' growth. The average self-managed Google Ads account wastes 50–60% of its budget on irrelevant clicks, wrong match types, poor landing page alignment, and automated bidding strategies that have insufficient conversion data to work correctly.

Outlier manages Google Ads for [City] businesses with the same rigour we apply to SEO: every campaign is custom-built for your specific goals and competitive landscape, every dollar is tracked from click to conversion, and every week we're actively optimising to improve ROAS and reduce cost per acquisition. We are a certified Google Partner agency, and our specialists manage significant monthly spend across industries including healthcare, home services, legal, professional services, ecommerce, and real estate in [City] and across Ontario. Being a Google Partner means we have direct access to Google's support team, advance notice of product changes, and training that keeps us ahead of the market.

What sets our approach apart is our obsession with the full funnel. Most agencies optimise for clicks. We optimise for revenue. That means building landing pages that convert the traffic we send, setting up conversion tracking that captures real business outcomes (not just website visits), and structuring campaigns around the specific customer journeys of [City] buyers in your category. The result is a Google Ads account that delivers genuine business growth — not inflated click counts. Our [City] clients see an average 42% reduction in cost per acquisition within 90 days of taking over a previously self-managed or agency-managed account.

The [City] Google Ads market has its own competitive characteristics. CPCs vary dramatically by industry — legal and financial categories command the highest cost-per-click, while local service businesses in less competitive niches can achieve very efficient cost per lead. Understanding these cost dynamics, and structuring campaigns to get maximum value from every click, is what separates an agency that simply runs ads from one that engineers profitable customer acquisition systems. We provide a full CPC landscape analysis during your initial audit so you know exactly what it will cost to compete profitably in your [City] category.

Conversion tracking is the non-negotiable foundation of any profitable Google Ads programme. If you can't measure what the clicks are producing — phone calls, form submissions, chat conversations, online purchases — you can't optimise toward business outcomes. We set up comprehensive conversion tracking before any campaign goes live: call tracking with recording capability, form submission tracking, Google Tag Manager configuration, and offline conversion imports from your CRM. This data becomes the engine that drives every subsequent optimisation decision we make for your [City] campaigns.

The first 60–90 days of any Google Ads campaign is a learning and optimisation phase. We launch campaigns with a carefully structured initial setup, then optimise aggressively based on the data that comes in: which keywords are converting, which ad copy is outperforming, which audience segments are producing the best CPAs, and which landing page elements are driving or killing conversions. By month 3, the account has typically been through several major optimisation cycles and the performance trajectory is clearly established. This is when we begin scaling — increasing budget allocation to the highest-performing campaigns and expanding into adjacent keyword clusters.`,
    whyTemplate: [
      "Because [City] buyers search with intent — and Google Ads puts you in front of them. When someone in [City] types '[your service] near me' or 'best [your service] [City]', they're ready to make a decision. Google Ads puts your business at the top of those search results, ahead of organic listings, precisely at that moment of maximum purchase intent.",
      "Because properly managed Google Ads provides a measurable, predictable ROI. Every [City] business we work with gets full conversion tracking — phone calls, form submissions, online purchases, and offline conversions — so you can see exactly what each campaign is producing. We report on ROAS, CPA, and revenue influenced, not just clicks and impressions.",
      "Because self-managed or poorly-managed Google Ads is costing [City] businesses thousands every month. The average self-managed Google Ads account wastes 50–60% of its budget on irrelevant clicks, wrong match types, and unconverted traffic. Professional management consistently reduces CPA by 30–50% while maintaining or growing lead volume.",
    ],
    included: [
      { title: "Campaign Strategy & Architecture", description: "We build a campaign structure tailored to your [City] business goals: Search campaigns for high-intent keywords, Local Service Ads for verified lead generation, Performance Max for broad reach, and Shopping campaigns for ecommerce. Every campaign is purpose-built, not templated." },
      { title: "Keyword Research & Match Type Strategy", description: "We identify every high-intent keyword your [City] customers use, build comprehensive negative keyword lists to eliminate waste, and deploy smart match type strategies that balance volume with quality." },
      { title: "Landing Page Optimisation", description: "Traffic quality is half the equation — landing page conversion rate is the other half. We audit, redesign, or create landing pages for your [City] campaigns that convert clicks into enquiries and sales." },
      { title: "Conversion Tracking Setup", description: "We configure full conversion tracking across all relevant actions: phone calls (with call recording), form submissions, chat starts, online purchases, and offline conversion imports. You always know exactly what your campaigns are producing." },
      { title: "Weekly Optimisation", description: "We actively manage your campaigns every week: bid adjustments, search term reviews, ad copy testing, audience refinement, and budget reallocation based on performance data. Active management is what separates profitable accounts from wasteful ones." },
      { title: "Monthly Reporting & Strategy Review", description: "Clear monthly reports showing ROAS, CPA, conversion volume, spend efficiency, and strategic recommendations. We explain what happened, why, and what we're doing next." },
    ],
    process: [
      { step: "01", title: "Account Audit (or Build)", description: "For existing accounts, we conduct a detailed audit identifying waste, structural issues, and optimisation opportunities. For new accounts, we build from scratch with a best-practice architecture. Either way, you get a clear picture of where you stand before we spend a dollar." },
      { step: "02", title: "Strategy & Campaign Design", description: "We design the campaign structure, keyword strategy, bidding approach, ad copy framework, and landing page requirements — all tailored to [City] search demand and your specific business objectives." },
      { step: "03", title: "Tracking & Setup", description: "Conversion tracking, call tracking, Google Tag Manager, and any required CRM integrations are configured before any campaigns go live. Clean data from day one." },
      { step: "04", title: "Launch & Learning Phase", description: "Campaigns launch and we monitor closely during the learning phase — typically 2–4 weeks — making real-time adjustments to bids, negatives, and ad copy based on initial data." },
      { step: "05", title: "Optimise & Scale", description: "With the learning phase complete, we optimise aggressively: scaling what's working, cutting what isn't, and continuously testing new ad copy, audiences, and campaign types to improve ROAS month over month." },
    ],
    stats: [
      { n: "4.2×", l: "avg. ROAS across managed accounts" },
      { n: "-42%", l: "avg. CPA reduction vs. self-managed accounts" },
      { n: "Google", l: "Partner certified specialists" },
    ],
    timeline: [
      { period: "Week 1–2", title: "Build & Launch", desc: "Account structure built, conversion tracking live, ad copy written, campaigns launched. First data begins flowing immediately." },
      { period: "Weeks 2–6", title: "Learning + Initial Optimisation", desc: "Google's algorithm learns from conversion data. We optimise negatives, bids, and ad copy based on initial performance. CPA typically decreases through this period." },
      { period: "Month 2–3+", title: "Scaled, Profitable Performance", desc: "With learning phase complete, ROAS improves significantly. We scale winning campaigns and expand keyword coverage. Most clients see 30–50% CPA reduction by month 3." },
    ],
    faqTemplate: [
      { q: "How does Outlier recommend a Google Ads budget for my [City] business?", a: "We build a budget recommendation based on your industry's cost-per-click landscape in [City], your conversion rate goals, and your target cost per acquisition. Every recommendation is specific to your business and backed by a clear ROI projection — we don't quote ad spend before we understand your situation. After reviewing your account, we provide a concrete budget recommendation with an expected performance range." },
      { q: "How quickly will Google Ads produce results for my [City] business?", a: "Properly set up Google Ads campaigns typically start delivering leads within the first 1–2 weeks. The first 30–60 days are a 'learning phase' where we optimise based on real data — ROAS and CPA tend to improve significantly in months 2 and 3 as we refine the account. Unlike SEO, Google Ads can produce same-week results for [City] businesses that need immediate lead flow." },
      { q: "What types of Google Ads campaigns do you run for [City] businesses?", a: "We run Google Search campaigns (text ads for high-intent keyword searches), Local Service Ads (for eligible [City] service businesses — these are the 'Google Guaranteed' listings), Performance Max campaigns, Google Shopping campaigns for ecommerce businesses, and YouTube and Display campaigns for brand awareness and retargeting. We recommend the right mix based on your business type and goals." },
      { q: "Can you fix a Google Ads account that hasn't been performing?", a: "Yes — account rescue is a significant part of our work. We see the same problems consistently: broad match keywords without negatives, no conversion tracking, campaigns competing against each other, poor landing page alignment, and automated bidding strategies with insufficient conversion data. We diagnose every issue and rebuild what needs to be rebuilt." },
      { q: "Do you manage Google Local Service Ads for [City] businesses?", a: "Yes. Local Service Ads (Google Guaranteed) are available for eligible [City] service businesses — contractors, home services, legal, healthcare, and others. LSAs appear above regular Google Ads and charge per verified lead rather than per click, making them extremely cost-effective for qualifying businesses. We handle setup, verification, and ongoing management." },
      { q: "What's a good ROAS target for [City] Google Ads campaigns?", a: "ROAS targets vary by industry and business model. For service businesses in [City], a 3–5× ROAS (every $1 spent returns $3–$5 in revenue) is a common target. For ecommerce, 4–8× is more typical depending on margins. We set ROAS and CPA targets based on your gross margin and business economics at the start of every engagement — not arbitrary benchmarks." },
      { q: "What is Google's learning phase and how does it affect my [City] campaigns?", a: "Google's learning phase is the period — typically 1–4 weeks after launching or significantly changing a campaign — when Smart Bidding algorithms gather conversion data to optimise bid decisions. During this period, performance can be variable and CPA may appear higher than target. We structure new [City] campaigns to exit the learning phase efficiently: using broader match types initially, consolidating ad groups to accelerate conversion data collection, and setting realistic CPA targets that give the algorithm room to learn." },
      { q: "How do negative keywords protect my [City] Google Ads budget?", a: "Negative keywords prevent your ads from showing for irrelevant searches — protecting your [City] ad budget from clicks that will never convert. For example, a [City] law firm might add 'free', 'DIY', and 'template' as negatives to avoid appearing for people looking for free legal resources. We build a comprehensive negative keyword list before every campaign launches and expand it continuously based on actual search term data — typically eliminating 20–35% of wasted spend in the first 60 days." },
      { q: "Should my [City] business use broad match, phrase match, or exact match keywords?", a: "All three match types serve different purposes, and a well-structured [City] Google Ads account uses all of them strategically. Exact match targets specific, high-intent searches with maximum control. Phrase match captures variations of your core keywords while maintaining relevance. Broad match (with Smart Bidding) can find incremental converting searches you'd otherwise miss — but requires strong negative keyword management. We build [City] accounts with an appropriate match type mix for your budget size and campaign maturity." },
      { q: "How do landing pages affect Google Ads performance for [City] businesses?", a: "Landing page quality is one of the most underestimated factors in Google Ads performance. A weak landing page — slow, generic, misaligned with the ad's promise — will produce poor conversion rates regardless of how well the campaign is managed. For [City] clients, we audit landing pages before campaigns launch and frequently build or redesign pages specifically for Google Ads traffic. A landing page optimised for conversion can reduce CPA by 40–60% compared to sending traffic to a generic homepage." },
      { q: "What's the difference between Performance Max and Search campaigns for [City] businesses?", a: "Search campaigns show text ads to [City] users actively searching for specific keywords — giving you control over targeting and visibility into what's working. Performance Max (PMax) is a goal-based campaign type that uses Google's AI to serve ads across Search, YouTube, Display, Gmail, and Maps simultaneously. PMax can be powerful for [City] businesses with strong creative assets and conversion data, but requires less hands-on optimisation control. We recommend the right mix based on your budget, goals, and the maturity of your [City] account data." },
      { q: "What is a realistic Google Ads budget for [City] businesses in [TopIndustry]?", a: "[City]'s [CompetitionLevel] Google Ads market means CPC rates in [TopIndustry] and similar sectors can be significant. A realistic minimum budget to generate meaningful data and leads varies by category — highly competitive categories like legal or financial services may require $3,000+/month, while local services businesses may see strong results from $1,000–$2,000/month. We build a specific budget recommendation — with projected lead volume and CPA ranges — during your free [City] Google Ads audit." },
      { q: "How does [City]'s [Region] market affect Google Ads campaign structure?", a: "[City]'s [Region] location and proximity to neighbouring markets affects how we structure geographic targeting. We ensure campaigns capture [City]-specific search intent without bleeding budget into adjacent markets unless there's strategic value. For [City] businesses targeting specific neighbourhoods or service areas, we use radius targeting and bid adjustments to focus spend on the highest-value geographic zones within [City] and surrounding areas." },
      { q: "Can Google Ads work alongside SEO for [City] businesses?", a: "Absolutely — and for most [City] businesses, running both channels together is the most effective approach. Google Ads provides immediate lead flow while organic SEO builds in the background. As SEO rankings improve over 12–18 months, you can reduce reliance on paid traffic for competitive terms where you now rank organically — lowering your blended cost of acquisition. We manage both channels for [City] clients and coordinate strategy across them to avoid cannibalisation and maximise combined ROI." },
      { q: "How do you handle seasonal campaign adjustments for [City] Google Ads accounts?", a: "[City]'s business seasons vary significantly by industry. [TopIndustry] and other sectors in [City] may see dramatically different search volumes at different times of year. We proactively adjust bids, budgets, and campaign structure ahead of high- and low-demand periods — scaling budgets before peak seasons and reducing waste during slow periods. We also create seasonal ad copy and landing pages that align with [City] customers' current decision context." },
      { q: "What conversion tracking setup does Outlier implement for [City] campaigns?", a: "Before any [City] Google Ads campaign goes live, we configure: phone call tracking (with recording and attribution to specific campaigns), form submission tracking, online purchase tracking for ecommerce, live chat event tracking, and where possible, offline conversion imports from your CRM or sales system. This means every lead and sale generated by your [City] campaigns is attributed, giving us the data needed to optimise toward actual business outcomes rather than just clicks." },
      { q: "What results can a [City] business realistically expect from Google Ads?", a: "Realistic [City] Google Ads outcomes depend on your category, budget, and starting quality score. Most well-managed [City] campaigns in [Industries] sectors see CPA improvements of 30–50% compared to self-managed accounts within 90 days. Initial lead flow typically begins within 1–2 weeks of launch. We set ROAS and CPA targets based on your specific business economics and competitive landscape during onboarding — we don't apply generic benchmarks to [City]-specific campaigns." },
    ],
    introHooks: [
      `Google Ads is the fastest way for a [City] business to get in front of buyers who are actively searching for what you offer — right now, at the exact moment of purchase intent. Done right, it delivers a measurable, predictable return on every dollar invested, with full attribution from click to conversion. Done wrong — which is how most [City] businesses run their accounts — it's an expensive way to fund your competitors' growth. The average self-managed Google Ads account wastes 50–60% of its budget on irrelevant clicks, wrong match types, and poorly configured automated bidding.`,
      `[City]'s [CompetitionLevel] Google Ads market makes professional account management more valuable than ever. In competitive categories like [TopIndustry], CPCs are high enough that wasted spend compounds quickly — and the businesses generating the strongest ROI aren't the ones spending the most, they're the ones managing most efficiently. For [City] businesses with a specific lead volume and CPA target, a properly structured and actively managed Google Ads programme is the most direct path to achieving it.`,
      `For [City] businesses that need qualified leads now — not in 6–18 months when SEO results materialise — Google Ads is the answer. With [City]'s [BusinessCount] businesses competing for the same customers, appearing at the top of search results for high-intent queries puts you in front of buyers at exactly the right moment. The difference between profitable Google Ads and money burning is the quality of campaign management — keyword structure, negative keyword coverage, bid strategy, landing page alignment, and conversion tracking.`,
      `The Google Ads opportunity in [City]'s [Region] market is significant — and significantly underexploited by most businesses running their own accounts. Self-managed Google Ads accounts consistently waste 40–60% of their budgets on irrelevant traffic, overbroad keywords, and campaigns with no conversion tracking to guide optimisation. Professionally managed accounts — built with the right structure, actively optimised weekly, and measured against real business outcomes — generate 3–4× more leads from the same budget.`,
    ],
    introBodyAlt: [
      `What sets Outlier apart in managing Google Ads for [City] businesses is our obsession with the full funnel. Most agencies optimise for clicks. We optimise for revenue. That means building landing pages that convert the traffic we send, setting up conversion tracking that captures real business outcomes, and structuring campaigns around the specific customer journeys of [City] buyers in your category. The result is a Google Ads account that delivers genuine business growth — not inflated click counts.

The [City] Google Ads market has its own competitive characteristics. CPCs vary dramatically by industry — [TopIndustry] commands among the highest cost-per-click rates, while local service businesses in less-contested niches can achieve very efficient cost per lead. Understanding these cost dynamics, and structuring campaigns to get maximum value from every click, is what separates an agency that simply runs ads from one that engineers profitable customer acquisition systems. We provide a full CPC landscape analysis during your initial audit.

Conversion tracking is the non-negotiable foundation of any profitable Google Ads programme for [City] businesses. If you can't measure what clicks are producing — phone calls, form submissions, chat conversations, purchases — you can't optimise toward business outcomes. We set up comprehensive conversion tracking before any campaign goes live, including call tracking with recording capability, form tracking, GTM configuration, and CRM integration where available. This data becomes the engine that drives every optimisation decision.`,
      `Outlier manages Google Ads for [City] businesses as a certified Google Partner agency with direct access to Google's support team, advance product release information, and specialists who manage significant monthly spend across [Industries] and other [City] sectors. That depth of platform knowledge translates into campaign structures, bidding strategies, and optimisation decisions that consistently outperform what generalist or self-managed accounts achieve.

For [City] businesses in [TopIndustry] and adjacent sectors, we've seen the same account failures repeatedly: overly broad keywords draining budget on irrelevant searches, smart bidding strategies launched with insufficient conversion data, ad groups too large for meaningful copy testing, and landing pages that receive qualified traffic but fail to convert it. We diagnose and fix all of these systematically — and our average [City] client sees a 42% CPA reduction within 90 days of taking over a previously managed account.

The first 60–90 days of any [City] Google Ads engagement is a structured optimisation phase. We launch with a carefully architected initial setup, then optimise aggressively based on actual performance data: which keywords convert, which audience segments produce the best CPA, which landing page elements drive or kill conversions. By month 3, the account has typically been through several major optimisation cycles and performance is clearly improving. This is when we begin scaling — expanding budget to top-performing campaigns and testing adjacent keyword clusters.`,
    ],
    whyVariants: [
      [
        "Because [City] buyers search with intent — and Google Ads puts you in front of them at exactly the right moment. When someone in [City] searches '[service] near me' or 'best [TopIndustry] [City]', they're ready to act. Google Ads puts your business at the top of those results at precisely that moment of maximum purchase intent.",
        "Because [City]'s [CompetitionLevel] search market makes efficiency critical — and professionally managed Google Ads consistently delivers 2–3× more leads per dollar than self-managed accounts. The difference is in the detail: keyword structure, negative coverage, bid strategy, and landing page alignment.",
        "Because Google Ads delivers results in days, not months. For [City] businesses that need leads now — while SEO builds in the background — a professionally managed Google Ads account is the most direct path to consistent inbound enquiries.",
        "Because [City]'s [BusinessCount] businesses compete for the same search clicks — and the ones getting the most conversions from paid search are the ones with the best-managed accounts, not necessarily the highest budgets. We build [City] accounts that outperform larger budgets through superior structure and active optimisation.",
      ],
      [
        "Because properly managed Google Ads provides measurable, predictable ROI. Every [City] business we work with gets full conversion tracking — phone calls, form submissions, purchases — so you can see exactly what each campaign is producing. We report on ROAS and CPA, not just clicks.",
        "Because self-managed or poorly managed Google Ads is costing [City] businesses significantly every month. The average self-managed account wastes 50–60% of its budget. Professional management recovers that waste and redirects it toward converting traffic.",
        "Because Google Ads and SEO work best together. While your [City] SEO builds over 12–18 months, Google Ads fills the pipeline immediately. As organic rankings improve, we reduce paid reliance on those terms — lowering your blended cost of acquisition over time.",
        "Because Outlier is a certified Google Partner managing significant spend across [City] and across [Industries] sectors. That certification means direct Google support, advance feature access, and specialists who understand the [City] search market at the level of detail required to outperform.",
      ],
      [
        "Because the [City] businesses generating the best Google Ads ROI aren't the ones spending the most — they're the ones managing most efficiently. Campaign structure, negative keyword coverage, landing page quality, and weekly optimisation separate profitable [City] accounts from wasteful ones.",
        "Because Google Ads gives you full control and full visibility. Unlike SEO, you choose which [City] searches trigger your ads, what you pay per click, and what page those clicks land on. That control, in expert hands, produces predictable and scalable lead generation for [City] businesses.",
        "Because a [City] Google Ads account with proper conversion tracking gives you direct ROI visibility. You see exactly which campaigns, keywords, and ads are producing calls, form submissions, and revenue — and exactly what each lead costs. We build that clarity from day one.",
        "Because for [City]'s [TopIndustry] and related sectors, the businesses not advertising on Google are ceding high-intent search traffic to competitors who are. Google Ads spend in [City]'s [Region] market is increasing — the cost of not being present compounds each year.",
      ],
    ],
    cta: "Get a Free Google Ads Audit",
    ctaSecondary: "See PPC Results",
    relatedServices: [
      { label: "Local Service Ads", href: "/local-service-ads" },
      { label: "Paid Social", href: "/paid-social-service" },
      { label: "SEO Services", href: "/seo-services" },
      { label: "Landing Page Design", href: "/landing-page-design" },
    ],
  },

  "paid-social": {
    label: "Paid Social Advertising",
    shortLabel: "Paid Social",
    icon: Share2,
    h1Template: "Paid Social Media Advertising in [City], [Province]",
    taglineTemplate:
      "Meta, TikTok & LinkedIn ads for [City] businesses. Audience-first campaigns built to convert, not just reach.",
    metaDescTemplate:
      "Paid social media advertising in [City], [Province]. Outlier manages Meta, TikTok, and LinkedIn campaigns that target [City] audiences and drive real business results. Free social ads audit.",
    introTemplate: `Paid social media advertising gives [City] businesses a unique capability that search advertising can't match: the ability to put your brand in front of your ideal customer before they're actively searching — reaching them by who they are, not just what they're typing. When Meta's targeting precision, TikTok's engagement rates, and LinkedIn's B2B audience data are combined with the right creative and offer, paid social becomes one of the most cost-effective ways to build brand awareness, generate leads, and drive purchases in the [City] market. The key is combining data precision with creative quality — the majority of paid social failures come not from targeting errors, but from creative and copy that fails to stop the scroll.

Outlier manages paid social campaigns for [City] businesses across Meta (Facebook and Instagram), TikTok, LinkedIn, and YouTube. Our approach is built on three pillars: audience intelligence (understanding your [City] customer's demographics, behaviours, and purchase triggers in depth), creative excellence (developing ad content that earns attention in a crowded feed), and relentless data-driven optimisation (testing and iterating toward the audiences and creatives that produce the lowest CPA and highest ROAS). We don't outsource creative to freelancers or rely on client-provided content — our team produces everything in-house.

Meta advertising — Facebook and Instagram — remains the highest-reach paid social channel for most [City] consumer businesses. With over 3 billion monthly active users globally and sophisticated geographic and interest-based targeting, Meta allows [City] businesses to reach their exact customer segment with precision that was impossible a decade ago. For local businesses in [City], Meta's location targeting allows you to reach users within a specific radius of your location, in specific postal codes, or by specific interest and behaviour signals that indicate purchase intent. This is how a [City] dental practice can run Instagram ads that reach adults aged 30–55 in their catchment area who have recently searched for dental services — an audience that would have been completely inaccessible before social advertising existed.

LinkedIn advertising is a fundamentally different tool — purpose-built for B2B lead generation and brand authority building among professional audiences. For [City] businesses selling to other businesses — professional services, software, consulting, financial services, manufacturing supply chains — LinkedIn is often the highest-quality lead source available. The targeting precision of job title, seniority, company size, and industry makes it possible to reach, for example, every VP of Operations at manufacturing companies with 50–500 employees in the Waterloo Region — an audience that no other platform can identify and target with this specificity. We manage LinkedIn campaigns for [City] B2B businesses that need to reach decision-makers directly.

TikTok's emergence as an advertising platform represents a significant opportunity for [City] businesses targeting younger demographics (18–35) or any business with compelling visual products or services. TikTok's algorithm-driven discovery means that content with strong engagement can reach far beyond your targeted audience at no additional cost — creating a leverage effect that makes it one of the most cost-efficient paid social channels for the right business and creative approach. We've run successful TikTok campaigns for [City] businesses in fitness, food and beverage, retail, home renovation, real estate, and personal services.

Every paid social campaign we run for [City] clients is underpinned by rigorous creative testing and audience experimentation. We launch with multiple creative concepts, multiple audiences, and multiple offers simultaneously — letting the data determine winners quickly rather than guessing in advance. This approach means we typically identify winning combinations within the first 30 days, and the account performance trajectory improves continuously from there. Our [City] paid social clients see an average 3.4× ROAS within 90 days across Meta platforms, with LinkedIn B2B clients seeing cost-per-qualified-lead that is typically 40–60% lower than equivalent Google Ads campaigns.`,
    whyTemplate: [
      "Because your [City] customers are on social media — and so is your competition. The average Canadian spends 2.5+ hours daily on social platforms. Paid social gives [City] businesses a way to reach their ideal customer in that time, with creative that builds awareness and drives action, before they ever make it to Google.",
      "Because paid social is the fastest way to build brand recognition in [City]. SEO builds authority over months. Google Ads captures in-market searchers. But paid social can make your brand known to your entire target audience in [City] within weeks — creating the name recognition that makes every other marketing channel more effective.",
      "Because the targeting capabilities are unmatched for reaching [City] audiences. Meta's data allows [City] businesses to reach users by postal code, age, income, interests, and purchase behaviour. LinkedIn allows reaching by job title and company. The precision of reaching exactly your [City] customer profile — not a broad demographic — makes paid social advertising uniquely efficient.",
    ],
    included: [
      { title: "Audience Research & Targeting Strategy", description: "We research your [City] target audience across all available data signals — demographics, behaviours, interests, and custom audience sources (website visitors, customer lists, CRM data). We build layered audience strategies that reach both cold and warm [City] audiences." },
      { title: "Creative Development (In-House)", description: "Our creative team develops ad content optimised for each platform — static images, video, carousel, stories, and reels formats. All creative is produced in-house, with messaging and design calibrated for [City] audiences and your specific offer." },
      { title: "Campaign Architecture", description: "We build a structured campaign architecture that separates awareness, consideration, and conversion objectives — ensuring each stage of your [City] customer's journey is addressed with the right message and the right creative." },
      { title: "Pixel & Conversion Tracking", description: "Full Meta Pixel, LinkedIn Insight Tag, and TikTok Pixel implementation with event tracking for all key conversion actions. Without precise conversion tracking, paid social optimisation is impossible — we make this a priority before any campaign launches." },
      { title: "Weekly Optimisation & Creative Iteration", description: "We review campaign performance weekly: pausing underperforming ad sets, scaling winners, testing new creative variants, and adjusting audience parameters. Creative fatigue is actively managed — underperforming creatives are replaced before they drag performance down." },
      { title: "Monthly Performance Reports", description: "Clear monthly reports covering reach, impressions, CPM, CTR, CPA, ROAS, and lead quality assessments. We compare performance to benchmarks for your [City] market and industry, and outline the strategy for the following month." },
    ],
    process: [
      { step: "01", title: "Audience & Platform Audit", description: "We research your target [City] customer in depth, audit any existing social accounts and ad accounts, and determine the right platform mix for your business goals." },
      { step: "02", title: "Creative & Campaign Strategy", description: "We develop the creative brief, ad copy angles, offer strategy, and full campaign architecture before production begins. Strategy drives creative — not the other way around." },
      { step: "03", title: "Creative Production", description: "Our in-house team produces all ad creative — static images, video, carousel formats — calibrated for each platform and for [City] audience sensibilities." },
      { step: "04", title: "Launch & Test", description: "Campaigns launch with multiple creative and audience variants simultaneously. We monitor performance daily in the first two weeks, making rapid adjustments based on early data signals." },
      { step: "05", title: "Optimise, Scale & Iterate", description: "Winners get scaled. Losers get cut. New creative variants enter testing. This cycle runs continuously — driving ROAS improvement and CPA reduction month over month for [City] clients." },
    ],
    stats: [
      { n: "3.4×", l: "avg. ROAS across Meta managed accounts" },
      { n: "-38%", l: "avg. CPA reduction by month 3" },
      { n: "30 days", l: "to first creative winners identified" },
    ],
    timeline: [
      { period: "Week 1–2", title: "Creative Production + Launch", desc: "Audience research complete, creative assets produced, campaigns launched with multiple variants. Pixel data begins accumulating immediately." },
      { period: "Weeks 2–6", title: "Creative Testing + First Winners", desc: "Top-performing audience and creative combinations identified. Budget shifted toward winners. Initial CPA data informing optimisation decisions." },
      { period: "Month 2–3+", title: "Scaled, Optimised Performance", desc: "Creative refresh cycle underway, proven audiences scaling, ROAS improving consistently. Most clients see 30–40% CPA reduction vs. launch performance by month 3." },
    ],
    faqTemplate: [
      { q: "Which social platforms should my [City] business advertise on?", a: "Platform selection depends on your business type and target customer. Consumer-facing businesses in [City] — retail, healthcare, home services, food — typically perform best on Meta (Facebook and Instagram). B2B businesses should start with LinkedIn. Businesses targeting 18–35 year olds with visual products or services should test TikTok. We recommend the right mix based on your goals and customer profile — not what's trendy." },
      { q: "How does Outlier determine the right paid social budget for my [City] business?", a: "We recommend a budget based on your campaign objectives, target CPM and CPA in [City], and the creative volume needed to run meaningful tests. The right budget lets us test multiple audiences and creative combinations simultaneously to identify winners quickly. We never recommend scaling budgets before the account data supports it — and we build the case for every budget recommendation with data." },
      { q: "How do you create the ad creative for [City] campaigns?", a: "Our in-house creative team produces all ad content — static images, video, carousel, and story formats. We don't rely on client-provided content or outsource to freelancers. Creative is developed based on your brand, your offer, and the specific behaviours and preferences of your [City] target audience. We produce multiple variants and let performance data determine winners." },
      { q: "How is paid social different from Google Ads for [City] businesses?", a: "Google Ads captures demand — reaching [City] buyers who are actively searching for what you offer. Paid social creates demand — reaching [City] buyers who match your ideal customer profile before they're searching. Both are valuable, but they work at different stages of the funnel. Many [City] businesses that combine both see significantly lower blended CAC than using either channel alone." },
      { q: "Can you run paid social for local [City] service businesses?", a: "Yes — this is a very common use case. A [City] dental practice running Instagram ads targeting local adults within a 5km radius, a home renovation company reaching homeowners in specific [City] postal codes, or a fitness studio promoting a new class to health-interested residents nearby — these are all campaigns we run regularly and produce strong results with." },
      { q: "How do iOS privacy changes affect Meta ad targeting for [City] businesses?", a: "Apple's App Tracking Transparency (ATT) framework has reduced the accuracy of Meta's pixel-based tracking for iOS users — affecting reported conversion numbers and some audience targeting capabilities. For [City] clients, we address this through Conversions API (server-side tracking that doesn't rely on the iOS device), first-party data strategies, and broader audience approaches that rely less on individual user tracking. Our [City] campaigns maintain strong performance in the post-ATT environment through these technical and strategic adaptations." },
      { q: "What is retargeting and how does it work for [City] paid social campaigns?", a: "Retargeting shows ads specifically to people who have already interacted with your business — visited your website, watched a video, engaged with your social content, or submitted a partial form. For [City] businesses, retargeting is often the highest-ROAS campaign type available because you're reaching warm audiences who have already shown interest. We build retargeting audiences using Meta Pixel website traffic, video view audiences, and customer CRM lists, then create specific ad creative designed to convert these warm [City] audiences into paying customers." },
      { q: "How do lookalike audiences help reach new [City] customers through social ads?", a: "Lookalike audiences are generated by Meta's AI using a seed audience (your existing customers, website visitors, or email list) to find new [City] users who share similar characteristics. When your seed audience is high-quality — your actual paying customers, for example — lookalike audiences deliver dramatically better results than interest-based cold targeting alone. For [City] businesses with an established customer base, lookalike expansion is typically one of the first audience strategies we deploy, often outperforming interest targeting by 30–50% on cost per conversion." },
      { q: "What's a healthy CTR benchmark for Meta ads targeting [City] audiences?", a: "Average CTRs on Meta vary significantly by ad format, creative quality, and audience temperature. For [City] cold audience campaigns, a CTR of 1–2% on feed placements is typical. Retargeting campaigns targeting warm [City] audiences often achieve 3–5%+ CTR. Story and Reel formats tend to generate different engagement patterns than feed. Rather than optimising for CTR in isolation, we focus on cost per landing page view and cost per conversion — a high-CTR ad that doesn't convert is still a wasted impression." },
      { q: "How often should [City] businesses refresh their paid social ad creative?", a: "Creative fatigue — when an audience has seen the same ad enough times that performance degrades — is one of the primary causes of declining paid social performance. For [City] campaigns reaching audiences of 100,000–500,000 people, creative typically needs refreshing every 4–6 weeks. For smaller [City] audiences (10,000–50,000), fatigue can set in within 2–3 weeks. We monitor frequency data for all [City] campaigns and proactively introduce new creative variants before fatigue is evident in the performance data." },
      { q: "What paid social ad formats work best for [City] businesses in [TopIndustry]?", a: "For [City]'s [TopIndustry] businesses, video content — particularly short-form Reels and Stories — typically outperforms static image ads on cold audience awareness campaigns. Static images and carousels often perform better for retargeting campaigns where the audience is already familiar with your brand. Lead generation ads (where users submit a form directly within the platform without visiting your website) work very well for [City] service businesses targeting middle-funnel prospects. We test multiple formats per [City] campaign and let performance data drive allocation." },
      { q: "How do you target [City]-specific audiences on Meta and TikTok?", a: "We use multiple geographic targeting methods for [City] campaigns: city-level targeting, radius targeting around your location(s), and postal code targeting for hyper-local campaigns. For [City] businesses in [TopIndustry] with specific customer profiles, we layer interest and behaviour targeting over geographic filters. For B2B businesses, LinkedIn's [City] geographic targeting combined with industry and job function filters gives precise reach into [City]'s professional audience segments." },
      { q: "What makes [City] paid social campaigns different from national or broad campaigns?", a: "[City]-specific paid social campaigns need to reflect the local context — [City]'s [Region] location, its [CompetitionLevel] business environment, and the specific demographics and industries that define [City]'s consumer and professional base. Generic national-campaign creative rarely resonates as well as locally-informed creative that references [City]-specific contexts, offers, or situations. Our [City] campaigns are built with this localisation in mind — from targeting parameters to creative messaging." },
    ],
    introHooks: [
      `Paid social media advertising gives [City] businesses a unique capability that search advertising can't match: the ability to put your brand in front of your ideal customer before they're actively searching — reaching them by who they are, not just what they're typing. When Meta's targeting precision, TikTok's engagement rates, and LinkedIn's B2B data are combined with the right creative and offer, paid social becomes one of the most cost-effective ways to build awareness, generate leads, and drive purchases in the [City] market.`,
      `[City]'s [BusinessCount] businesses compete for consumer attention across social platforms where the most effective campaigns aren't necessarily the ones with the biggest budgets — they're the ones with the best creative, the most precise targeting, and the most rigorous optimisation. For [City] businesses in [Industries] and adjacent sectors, paid social done right creates demand at the top of the funnel, retargets warm audiences in the middle, and converts high-intent prospects at the bottom — all from a single coordinated campaign strategy.`,
      `The [City] paid social opportunity is significant — and still significantly underexploited by businesses running their own campaigns. Most self-managed [City] Meta or TikTok accounts rely on boosted posts, undifferentiated creative, and interest targeting that's too broad to be efficient. Professionally structured paid social campaigns — with proper audience architecture, creative testing, and conversion tracking — consistently generate 2–4× more leads from the same budget.`,
      `For [City] businesses that want to reach new customers outside the existing search market — people who don't yet know they need what you offer, or who haven't started searching yet — paid social is the answer. Meta's audience data spans [City]'s [Region] market with demographic precision that no other advertising platform can match. When that data is combined with compelling creative and a clear offer, the result is scalable demand generation at a cost that competes directly with Google Ads for most [City] business types.`,
    ],
    introBodyAlt: [
      `Outlier builds paid social programmes for [City] businesses around a full-funnel framework: awareness campaigns that introduce your brand to new audiences in [City], consideration campaigns that retarget people who've shown interest, and conversion campaigns that turn warm [City] prospects into paying customers. Each stage has different creative requirements, different audience logic, and different optimisation priorities — which is why cookie-cutter "boost your post" approaches consistently fail.

Creative quality is the single biggest driver of paid social performance. The best audience targeting in [City] can't save an ad that doesn't stop the scroll. Our in-house creative team develops all ad content — static images, video, carousel, and story formats — based on what works for [City] buyers in your specific category. We test multiple creative variants per campaign and systematically scale the winners while replacing underperformers.

Measurement for [City] paid social campaigns requires navigating the post-iOS14 privacy landscape carefully. We implement Meta's Conversions API for server-side tracking, verify attribution windows against your CRM data, and build reporting that gives [City] clients a clear picture of what their paid social investment is producing — even in an environment where platform-reported attribution is imperfect.`,
      `What distinguishes effective paid social for [City] businesses from ineffective paid social is the combination of audience intelligence, creative discipline, and measurement rigour. For [City]'s [Industries] and related sectors, we've developed audience frameworks that go beyond basic interest targeting — using lookalike audiences built from actual customer data, engagement-based retargeting, and geographic micro-targeting within [City] to maximise relevance and minimise wasted impressions.

The first 30 days of any [City] paid social engagement are a creative and audience testing phase. We launch multiple ad variants simultaneously — different hooks, different formats, different offers — and let the data identify which combinations drive the strongest cost per conversion for your specific [City] audience. Budget is kept conservative until clear winners emerge, then scaled efficiently.

For [City] businesses investing in both paid social and Google Ads, we coordinate campaign strategy across both channels to avoid audience overlap, maintain consistent messaging, and ensure the full customer journey — from first brand impression to final purchase decision — is covered. Multi-channel [City] programmes consistently outperform single-channel approaches on blended CAC.`,
    ],
    whyVariants: [
      [
        "Because [City] buyers can be reached on social platforms before they start searching on Google — giving you the ability to create demand, not just capture it. For [City] businesses in [TopIndustry] and similar sectors, paid social is a demand-generation engine that operates at the top of the funnel.",
        "Because Meta's audience data covers [City]'s [Region] market with demographic precision that no other platform matches. The ability to reach [City] adults by age, income, household status, interests, and behaviours — layered over geographic targeting — enables campaigns that would be impossible through search alone.",
        "Because paid social creates an 'always-on' brand presence across [City]'s key platforms that compounds over time. Regular exposure through well-crafted social ads builds brand familiarity that makes subsequent search ads and organic content more effective.",
        "Because [City]'s [CompetitionLevel] search market makes paid social an increasingly important demand-creation channel. As Google Ads CPCs rise in competitive [City] categories, reaching potential customers earlier in the buying journey — before they're searching — becomes a more cost-effective strategy.",
      ],
      [
        "Because properly managed paid social provides measurable ROI for [City] businesses. With conversion tracking, CRM attribution, and ROAS measurement, every dollar of paid social spend for [City] clients is accountable. We report on leads, cost per lead, and revenue — not reach and impressions.",
        "Because retargeting [City] website visitors and warm audiences through paid social consistently delivers the highest-ROAS campaigns available. Reaching [City] users who have already shown interest in your business — at a fraction of the CPC of search retargeting — is one of the fastest paths to improved conversion rates.",
        "Because creative quality determines paid social performance more than any other factor — and Outlier's in-house creative team builds [City]-specific content that stops the scroll and drives action. Generic creative fails; locally-informed, visually compelling creative converts.",
        "Because Outlier manages paid social holistically across [City]'s key platforms — Meta, TikTok, LinkedIn — with coordinated strategy, unified measurement, and creative that's optimised for each platform's specific algorithm and audience behaviour.",
      ],
      [
        "Because [City] businesses that run paid social and Google Ads together see lower blended cost of acquisition than those running either channel alone. The combination of demand creation (social) and demand capture (search) covers the full funnel and reduces reliance on any single channel.",
        "Because the [City] businesses generating the best paid social results aren't the ones spending the most — they're the ones with the best creative, the most precise targeting, and the most rigorous optimisation cycles. We bring that rigour to every [City] paid social engagement.",
        "Because a well-structured [City] paid social programme generates compounding returns as audience data accumulates. Pixel data, lookalike audiences, and creative learning improve with every campaign cycle — making your [City] paid social investment more efficient month over month.",
        "Because [City]'s [Industries] sectors represent high-value, targetable audiences on social platforms. The ability to reach [City] professionals in [TopIndustry] through LinkedIn, or target [City] homeowners through Meta, creates precise demand-generation opportunities that broad search campaigns can't match.",
      ],
    ],
    cta: "Get a Free Social Ads Audit",
    ctaSecondary: "See Social Results",
    relatedServices: [
      { label: "Google Ads", href: "/google-ads-management" },
      { label: "Content Marketing", href: "/content-marketing-service" },
      { label: "SEO Services", href: "/seo-services" },
      { label: "Email Marketing", href: "/email-marketing-service" },
    ],
  },

  "content-marketing": {
    label: "Content Marketing",
    shortLabel: "Content Marketing",
    icon: FileText,
    h1Template: "Content Marketing Services in [City], [Province]",
    taglineTemplate:
      "Build topical authority. Attract [City] buyers. Turn content into your best-performing sales channel.",
    metaDescTemplate:
      "Content marketing services in [City], [Province]. Outlier builds content strategies that rank on Google, attract qualified [City] buyers, and compound in value month over month. Free content audit.",
    introTemplate: `Content marketing is how [City] businesses build the kind of organic visibility and audience trust that paid advertising can't replicate. When your business publishes consistently useful, well-researched, properly optimised content — the kind that answers the exact questions your [City] customers are asking on Google — you attract qualified prospects at the exact moment they're seeking the information that will eventually lead them to a purchase decision. This is the compounding power of content: every article, guide, or service page you publish continues attracting traffic and building trust long after it's live, accumulating value in a way that a one-time ad campaign never can.

At Outlier, our content marketing programmes for [City] businesses are built at the intersection of search strategy and editorial excellence. We don't produce content for content's sake — every piece is built to rank for specific keywords, match the search intent of your target [City] audience, and advance a prospect toward a conversion. Our content team includes strategists who understand Google's ranking signals, researchers who verify every claim, writers who produce genuinely compelling copy, and editors who ensure everything reflects the expertise and authority your [City] business needs to build. The result is content that works — not just content that exists.

The foundation of our [City] content marketing programmes is topical authority architecture. Google no longer rewards isolated, high-quality articles — it rewards publishers that demonstrate comprehensive expertise in a subject area through a structured body of content. This means building pillar pages (long-form, comprehensive guides to core topics in your industry), cluster content (supporting articles that dive into specific sub-topics), and location pages (content built specifically for [City] and surrounding communities). When this architecture is in place, Google perceives your site as an authoritative source in your industry — and rankings compound across your entire content portfolio, not just individual pages.

For [City] businesses, content marketing also builds the E-E-A-T signals (Experience, Expertise, Authoritativeness, and Trustworthiness) that Google increasingly uses to evaluate content quality. In regulated industries like healthcare, legal, and financial services — all well-represented in [City]'s economy — E-E-A-T is non-negotiable. Content that lacks these signals won't rank in competitive [City] markets regardless of its technical optimisation. We build E-E-A-T into every content programme through author credentialing, citation practices, structured data, and content depth standards that Google's algorithms and human quality raters both recognise.

The distribution strategy is as important as the content itself. Well-researched articles that sit in a content archive unseen are not a marketing investment — they're a sunk cost. We ensure every piece of content we produce for [City] clients is distributed effectively: promoted through email marketing to existing audiences, amplified through social channels, linked internally within your site architecture to pass authority, and pitched for external publication where appropriate. A single well-placed content piece in a relevant [City] or Ontario-specific publication can produce backlinks, referral traffic, and brand authority that pays back for years.

The ROI of content marketing for [City] businesses is long and compounding. Month 1 of a content programme produces little in direct revenue — you are building infrastructure. By months 4–6, content begins ranking and generating organic traffic. By months 12–18, a well-executed content programme typically becomes the highest-ROI acquisition channel in a [City] business's marketing mix. The clients who benefit most from our content programmes are those willing to invest for the long term — and they are rewarded with an asset that keeps producing at zero marginal cost for as long as it remains live and competitive.`,
    whyTemplate: [
      "Because [City] buyers research before they buy — and content is where that research happens. Studies show that B2B buyers complete 57–70% of their research before contacting a vendor. For [City] service businesses, being present at every stage of that research journey — with useful, credible content — creates the kind of familiarity and trust that drives preference when the purchase decision is made.",
      "Because content builds authority that Google and [City] customers both reward. A [City] business with 50 well-researched, expertly-written, properly-optimised content pieces on its website is perceived as an authority by both Google's algorithm and by prospective customers. Authority drives rankings. Rankings drive traffic. Traffic drives leads. Content marketing creates this entire chain.",
      "Because content compounds in ways advertising never can. When you stop running ads, leads stop. When you stop producing content, your existing content continues to rank, attract visitors, and generate leads. The [City] businesses that dominate their categories in organic search have typically been building content consistently for 2–5 years. The best time to start was then — the second best time is now.",
    ],
    included: [
      { title: "Content Strategy & Topical Authority Architecture", description: "We build a complete content strategy for your [City] business: pillar page topics, cluster content mapping, location page architecture, and a 12-month content calendar tied to keyword opportunity and business objectives." },
      { title: "Keyword Research (Content-Focused)", description: "We identify every informational, commercial, and local keyword your [City] audience is searching for — and map each one to a specific content asset, ensuring your content portfolio covers the full search intent spectrum in your category." },
      { title: "Long-Form Content Production", description: "Our writers produce research-backed, expert-level content in your brand voice. Typical content lengths range from 1,500–4,000 words — the depth Google's algorithm and [City] readers both expect from authoritative sources." },
      { title: "On-Page SEO Optimisation", description: "Every piece of content is optimised for its target keywords: proper H1/H2/H3 structure, meta title and description, schema markup, internal linking, image alt tags, and content organisation that matches Google's preferred formats." },
      { title: "E-E-A-T Signals & Author Authority", description: "We build author profiles, credential signals, and citation practices that satisfy Google's E-E-A-T requirements — particularly important for [City] businesses in healthcare, legal, financial services, and other YMYL (Your Money or Your Life) categories." },
      { title: "Content Distribution & Promotion", description: "We distribute every content piece effectively: email promotion, social sharing, internal linking, and outreach for external placements. Content that doesn't get distributed doesn't compound." },
    ],
    process: [
      { step: "01", title: "Content Audit & Strategy", description: "We audit your existing content, conduct keyword research for your [City] market, identify topical gaps, and build the content architecture and 90-day production calendar." },
      { step: "02", title: "Pillar Page Development", description: "We start with pillar pages — the cornerstone, comprehensive content assets that establish topical authority in your most important subject areas and anchor your entire content ecosystem." },
      { step: "03", title: "Cluster Content Production", description: "Supporting articles and service-specific pages are produced on the content calendar cadence — building out topical depth and capturing long-tail keywords that drive qualified [City] traffic." },
      { step: "04", title: "Location & City-Specific Pages", description: "We create [City]-specific content pages that capture local search intent and support both your organic and local SEO rankings — an essential component for service businesses in [City]." },
      { step: "05", title: "Distribution, Link Building & Refresh", description: "Completed content is distributed across channels, outreached for external placements, and scheduled for periodic refresh to maintain rankings as the content landscape evolves." },
    ],
    stats: [
      { n: "+187%", l: "avg. organic traffic increase from content programmes" },
      { n: "6 months", l: "avg. time to first significant ranking improvements" },
      { n: "4×", l: "avg. content ROI vs. equivalent ad spend at 18 months" },
    ],
    timeline: [
      { period: "Months 1–2", title: "Strategy + Pillar Production", desc: "Content strategy finalised, pillar pages and initial cluster content produced. Content architecture live on site. Internal linking structure implemented." },
      { period: "Months 3–5", title: "Traffic Starts Building", desc: "Secondary and long-tail content pieces begin ranking. Organic traffic to content assets growing month-over-month. Distribution channels driving initial referral traffic." },
      { period: "Months 6–12+", title: "Compounding Organic Growth", desc: "Pillar pages ranking page 1. Content portfolio generating consistent organic traffic. Leads from content channels measurably increasing. ROI clearly positive and improving." },
    ],
    faqTemplate: [
      { q: "How does content marketing help my [City] business rank on Google?", a: "Google ranks pages that demonstrate expertise, comprehensiveness, and authority on a given topic. A structured content programme builds all three: pillar pages demonstrate depth, cluster content builds topical breadth, and internal linking distributes authority across your entire site. [City] businesses that invest in content consistently build search visibility that compounds — earning more traffic for less ongoing investment over time." },
      { q: "What types of content does Outlier produce for [City] businesses?", a: "We produce long-form blog articles (1,500–4,000+ words), service pages, location-specific landing pages, FAQ content, comparison guides, case studies, and pillar pages. All content is researched, written, SEO-optimised, and distributed by our in-house team. We don't use AI content generators — every piece is written by specialist human writers." },
      { q: "How many content pieces does my [City] business need per month?", a: "The right volume depends on your competitive landscape and goals. For most [City] businesses in moderately competitive categories, 2–4 content pieces per month is a solid starting point. More competitive markets like legal, healthcare, or financial services in [City] may require 6–10+ pieces per month to make meaningful progress. We recommend a production volume based on your content audit and competitive analysis." },
      { q: "How long does content marketing take to show results for [City] businesses?", a: "Content marketing is a medium-to-long-term investment. Most [City] businesses begin seeing ranking improvements from content within 3–5 months, with significant organic traffic growth at the 6–12 month mark. The compounding nature of content means that by month 18, a well-executed programme typically has a cost-per-lead significantly lower than any paid channel. Patience is required — but the payoff is durable." },
      { q: "Does content marketing work for [City] B2B businesses?", a: "Absolutely — and often more effectively than for B2C. [City] B2B buyers do extensive research before making purchase decisions, and content that addresses their specific questions, concerns, and evaluation criteria positions your business as the credible, expert choice. We've run content programmes for [City] B2B businesses in technology, professional services, manufacturing, and financial services with excellent results." },
      { q: "What is a content pillar strategy and why does it help [City] businesses rank?", a: "A content pillar strategy organises your website content into comprehensive 'pillar' pages covering broad topics (e.g., 'Home Renovation Services in [City]') supported by clusters of more specific 'spoke' content (e.g., 'Kitchen Renovation Costs in [City]', 'Best Countertop Materials for [City] Kitchens'). This architecture signals to Google that your website has genuine topical depth and authority in your subject area — making you the authoritative source for that topic in [City] searches, which produces both higher rankings and more diverse keyword coverage." },
      { q: "How does blog content convert [City] website visitors into leads?", a: "Blog content converts [City] visitors into leads through strategic CTAs embedded within and after content, by building trust with prospects who are still in the research phase, and by creating remarketing audiences of engaged readers that can be retargeted via Google Ads and Meta. A well-designed content piece for a [City] business educates the reader, builds credibility, and then offers a clear next step — a free consultation, an audit, a guide download — that moves them into your lead pipeline while the trust is high." },
      { q: "What's the minimum content investment for a [City] business to compete in search?", a: "In moderately competitive [City] categories, 2–4 high-quality, long-form content pieces per month is a realistic minimum for meaningful progress. Below that threshold, the rate of content production often can't keep pace with the volume required to build topical authority and compete for [City] rankings. In highly competitive categories — legal, healthcare, financial services — 6–10+ pieces per month may be needed. We assess your competitive environment and recommend the minimum viable content investment to see results in your specific [City] market." },
      { q: "How do you ensure content uniqueness and avoid thin content issues for [City] businesses?", a: "Every piece of content we produce for [City] clients is researched and written from scratch by specialist human writers with genuine subject matter knowledge. We don't use AI content generators, spun articles, or recycled templates. Each piece has a specific angle, unique expert insights, and is edited for both quality and SEO before publication. We also conduct content audits for existing [City] websites to identify thin, duplicate, or underperforming content that may be suppressing rankings — and we consolidate or improve it." },
      { q: "What role does E-E-A-T play in content marketing for [City] businesses?", a: "E-E-A-T — Experience, Expertise, Authoritativeness, and Trustworthiness — is Google's quality framework for evaluating content. For [City] businesses in YMYL (Your Money, Your Life) categories like healthcare, legal, and financial services, E-E-A-T signals are particularly important. We build E-E-A-T into content programmes for [City] clients through author credentials and bios, citing authoritative sources, building backlinks from reputable Ontario publications, maintaining consistent professional brand standards, and ensuring all factual claims are accurate and current." },
      { q: "What content types perform best for [City] businesses in [TopIndustry]?", a: "For [City]'s [TopIndustry] businesses, the highest-performing content types are typically detailed service guides that answer the specific questions [City] buyers ask before purchasing, comparison content for decision-stage prospects, and location-specific pages that capture '[service] in [City]' search intent. For B2B businesses in [City]'s [Industries] sectors, long-form thought leadership and case study content tends to generate the highest-quality lead flow. We map content requirements to search intent and buying stage during the initial strategy phase." },
      { q: "How does content marketing help [City] businesses in [Region] compete against larger brands?", a: "Content marketing is one of the great equalisers in [City]'s [Region] market. A [City] business with a deeply authoritative content library can outrank major brands for specific long-tail and intent-specific searches — particularly for local terms where national brands don't invest in [City]-specific content. We build content strategies that identify exactly these opportunities in your [City] category and build your site into the go-to resource for [City] buyers in your space." },
      { q: "How long before content marketing produces measurable results for [City] businesses?", a: "Content marketing has a longer time-to-ROI than paid channels but produces compounding returns. For [City] businesses starting from a low-authority base, the first meaningful organic traffic from new content typically appears within 3–5 months. Significant traffic growth and lead attribution usually becomes visible at 9–12 months. Businesses that have already built domain authority in [City] often see faster results from new content — sometimes ranking within weeks of publication." },
    ],
    introHooks: [
      `Content marketing is how [City] businesses build the kind of organic visibility and audience trust that paid advertising can't replicate. When your business publishes consistently useful, well-researched, properly optimised content — the kind that answers the exact questions your [City] customers are asking on Google — you attract qualified prospects at exactly the moment they're seeking the information that will lead them to a purchase decision. Every article, guide, and service page you publish continues attracting traffic and building trust long after it's live.`,
      `[City]'s [BusinessCount] businesses all compete for the same organic search real estate. In [TopIndustry] and similar categories, the businesses that consistently appear in search results for high-intent [City] queries aren't just ranking by accident — they've built structured content programmes that establish topical authority in their specific market. Content marketing is how you build that authority systematically, turning your website into the most-trusted resource for [City] buyers in your category.`,
      `For [City] businesses in [Industries] sectors, the compounding power of content marketing is one of the strongest long-term competitive advantages available. A well-researched guide published today continues generating qualified organic traffic in [City] for 2–5 years. A library of 50 such pieces creates a lead generation asset that works around the clock, compounds month over month, and costs a fraction of paid advertising per lead at scale.`,
      `The content marketing opportunity in [City]'s [Region] market is particularly significant because most local businesses haven't invested in it seriously. In many [City] industries, the businesses on page 1 of Google for informational and comparison searches are either national brands with minimal local relevance or older sites with outdated content. A [City] business that builds genuinely useful, [City]-specific content now has a clear path to owning those positions.`,
    ],
    introBodyAlt: [
      `Outlier's content marketing strategy for [City] businesses is built from keyword and competitive research, not guesswork. We identify the specific search terms your [City] customers use at every stage of the buying journey — from initial research through comparison to ready-to-buy — and map each to the content type and format that Google rewards for that intent. This gives us a clear content roadmap with predictable organic growth outcomes, not a blog calendar filled with arbitrary topics.

Content quality is the determinant of whether your [City] content ranks, converts, and builds authority — or disappears into the long tail with zero traffic. Every piece we produce is researched, written by subject-matter-informed writers, optimised for both search and human readability, and reviewed for accuracy and competitive differentiation. We don't produce filler content to hit a word count. We produce content that earns [City] buyers' trust and Google's ranking signals.

The compounding nature of content makes it uniquely powerful for [City] businesses with a long-term growth orientation. A strong piece of content published this month may drive 10 organic visits in its first week and 500 per month by month 12, as it accumulates backlinks and Google's trust signals. The [City] businesses building strong content libraries today will have organic traffic advantages in 2026 and beyond that latecomers will find extremely difficult to replicate.`,
      `We approach content marketing for [City] businesses as topical authority building — not blog post production. The goal is to make your website the most comprehensive, trustworthy, and search-visible resource for [City] buyers in your category. That means covering your core topic cluster deeply and completely, building internal link architecture that reinforces topical relevance, and earning external links from authoritative Canadian publications that signal trust to Google.

For [City] businesses in [Industries] and similar sectors, content marketing also addresses a strategic competitive gap: most [City] businesses have good service pages but almost no content that helps buyers research, compare, or decide. The businesses that fill that gap with genuinely useful [City]-specific content capture a disproportionate share of early-stage organic traffic — and through consistent nurturing, convert that traffic into leads at a very low cost per acquisition.

Content performance for [City] clients is tracked comprehensively: organic traffic per piece, ranking positions for target keywords, content-attributed conversion events, and the revenue influenced by organic content visits. We report on what's compounding, what needs updating, and where the next high-impact content opportunities in the [City] market lie.`,
    ],
    whyVariants: [
      [
        "Because content marketing creates compounding organic traffic that doesn't stop when you stop paying. Every well-optimised piece published for your [City] audience continues attracting qualified buyers for months and years — building an organic asset that appreciates over time.",
        "Because [City] buyers research extensively before making purchase decisions, particularly in [TopIndustry] and professional services. The businesses that answer those research questions with authoritative content get the first opportunity to build trust — and first-mover trust usually wins the eventual purchase.",
        "Because content is the fuel that powers both SEO and social media. Without strong, optimised content, there's nothing for Google to rank and nothing compelling for [City] audiences to share. Content marketing creates the foundation that makes every other channel more effective.",
        "Because [City]'s [CompetitionLevel] search market means content depth is a critical ranking differentiator. Businesses that publish comprehensive, expertly-written content on their core topics outrank competitors with thin, generic pages — and hold those positions for years.",
      ],
      [
        "Because content marketing builds brand authority in [City]'s [Region] market that paid advertising can't purchase. When [City] buyers repeatedly encounter your content while researching their options, your brand becomes the trusted choice before they've even made contact.",
        "Because Outlier's content strategy starts with [City]-specific search research — identifying exactly what your [City] customers are looking for and building content that captures and converts them at every stage of the decision journey. Not guessed topics. Data-driven content.",
        "Because high-quality content earns backlinks from other websites, building domain authority that lifts all your [City] pages in Google rankings — not just the content itself. A strong content programme creates a flywheel: better content → more links → better rankings → more traffic → more conversions.",
        "Because content marketing in [City]'s [Industries] sectors produces among the lowest cost-per-lead of any digital channel at scale. Initial investment is higher than paid ads per lead, but as the content library compounds, cost per acquisition drops dramatically — often below $50/lead for organic content at maturity.",
      ],
      [
        "Because the [City] businesses on page 1 of Google for your most valuable search terms almost certainly got there through content — and if you want to displace them, you need a better content programme, not just better ads.",
        "Because content marketing gives [City] buyers a reason to choose you before they've contacted a competitor. Demonstrating expertise through useful, accurate, [City]-specific content builds the trust that converts browsers into buyers — a conversion advantage that compounds with every new piece published.",
        "Because Outlier writes content that works — not just content that exists. Every piece we produce for [City] clients is researched, optimised for the right keyword intent, and written to convert [City] buyers, not just attract clicks. Quality over quantity, every time.",
        "Because [City] buyers increasingly trust businesses that demonstrate knowledge and helpfulness through their online content. In [TopIndustry] and other [City] sectors where decisions involve significant investment or risk, content-driven trust-building is one of the most effective conversion strategies available.",
      ],
    ],
    cta: "Get a Free Content Strategy Session",
    ctaSecondary: "See Content Results",
    relatedServices: [
      { label: "SEO Services", href: "/seo-services" },
      { label: "Paid Social", href: "/paid-social-service" },
      { label: "Email Marketing", href: "/email-marketing-service" },
      { label: "Web Design", href: "/custom-web-design-service" },
    ],
  },

  "email-marketing": {
    label: "Email Marketing",
    shortLabel: "Email Marketing",
    icon: Mail,
    h1Template: "Email Marketing Services in [City], [Province]",
    taglineTemplate:
      "Turn your [City] subscriber list into a revenue engine. Automated sequences. Campaigns that convert.",
    metaDescTemplate:
      "Email marketing services in [City], [Province]. Outlier builds automated email sequences, campaigns, and nurture programmes that convert [City] leads into paying customers. Free email audit.",
    introTemplate: `Email marketing delivers the highest ROI of any digital marketing channel — $36 for every $1 spent on average, according to Litmus's 2023 study. For [City] businesses with an existing customer base or an active lead pipeline, email marketing is the single most cost-effective way to nurture prospects, drive repeat purchases, and build the kind of customer relationships that sustain a business through economic cycles. Unlike social media platforms — where algorithm changes can slash your organic reach overnight — your email list is an owned asset that no platform update, Google algorithm change, or policy revision can take away from you.

Most [City] businesses are drastically underutilising their email lists. If you have subscribers who aren't receiving regular, high-value communications from you — or if your email programme consists of nothing more than occasional promotional blasts — you're leaving significant revenue on the table. The businesses that get email marketing right in [City] send with purpose: each email has a defined audience, a clear goal, a compelling hook, and a specific call to action. They use automation to nurture new leads through a journey from interest to purchase without any manual effort. And they measure relentlessly — open rates, click rates, conversion rates, and revenue per email — optimising every element based on data.

Outlier's email marketing programmes for [City] businesses are built around three core pillars: list growth (bringing new subscribers into your ecosystem from your website, paid ads, and other channels), automated nurture (sequences that educate, build trust, and advance prospects toward a purchase decision without manual intervention), and campaign execution (regular, high-value sends to your existing list that drive engagement, repeat purchases, and referrals). We manage the strategy, the copywriting, the design, the platform setup, the segmentation, and the reporting — so your team can focus on running your business while your email programme runs in the background.

For [City] service businesses — healthcare, legal, home services, financial services, professional services — email is the ideal medium for the kind of in-depth communication that builds trust and drives high-value decisions. A prospective patient researching dental implants, a homeowner evaluating renovation contractors, or an executive considering a new professional services partner doesn't make those decisions after seeing one ad. They make them after months of research and relationship-building. Email marketing is the channel that maintains your presence through that entire consideration period — keeping your [City] business top of mind until the moment the decision is made.

Automation is where email marketing scales beyond what any manual process could achieve. A well-designed welcome sequence, for example, automatically educates new [City] leads about your services, addresses common objections, builds social proof through testimonials and case studies, and delivers a compelling offer — all over a 7–14 day period, with no human involvement required. Re-engagement sequences bring cold leads back to life. Abandonment sequences recover prospects who showed interest but didn't convert. Post-purchase sequences drive reviews, referrals, and repeat purchases. Each automated sequence runs continuously in the background, converting leads that would otherwise go cold.

Platform selection, deliverability, and list hygiene are technical foundations that most [City] businesses overlook — and that determine whether your emails land in inboxes or spam folders. We configure and manage your email platform (Klaviyo, HubSpot, Mailchimp, or your existing system) with deliverability best practices: proper SPF/DKIM/DMARC setup, list hygiene protocols, engagement-based sending, and domain warm-up procedures. [City] businesses that have struggled with low open rates and deliverability issues often see significant improvements within 60 days of implementing our technical foundation recommendations.`,
    whyTemplate: [
      "Because email is the highest-ROI channel for [City] businesses with existing relationships. The average [City] business has hundreds or thousands of past customers and existing contacts who already trust their brand. Email marketing monetises that trust — converting it into repeat purchases, referrals, and upsells at a cost-per-conversion that no paid advertising channel can match.",
      "Because automated email sequences generate revenue while you sleep. A properly configured email automation system for a [City] business works 24/7 — welcoming new leads, nurturing them through the buying journey, recovering abandoned carts, and re-engaging cold contacts — without any manual effort from your team. It's the closest thing to a passive revenue system that exists in digital marketing.",
      "Because your [City] email list is an owned asset that compounds in value. Social followers can disappear if a platform changes its algorithm or policies. Your email list belongs to you — and every new subscriber you add to it increases its value. [City] businesses that consistently grow and nurture their lists build a durable marketing asset that becomes more valuable over time.",
    ],
    included: [
      { title: "Email Platform Audit & Setup", description: "We audit your current email setup, configure your platform for maximum deliverability, set up proper authentication (SPF, DKIM, DMARC), and establish the technical foundation that keeps your [City] emails out of spam folders." },
      { title: "List Segmentation & Hygiene", description: "We segment your existing [City] list by behaviour, purchase history, engagement, and demographics — and implement ongoing hygiene protocols that maintain high deliverability rates. Sending to the right people is as important as the content of the email itself." },
      { title: "Automated Sequence Development", description: "We design and write the key automated sequences your [City] business needs: welcome series, lead nurture flows, post-purchase sequences, re-engagement campaigns, and promotional automations. Each sequence is purpose-built for a specific customer journey stage." },
      { title: "Campaign Calendar & Execution", description: "Beyond automations, we manage a regular campaign calendar for your [City] list — newsletters, promotional sends, product announcements, and engagement campaigns. We write, design, schedule, and send each campaign, providing performance data post-send." },
      { title: "Copywriting & Design (In-House)", description: "Our copywriters produce all email content — subject lines, preview text, body copy, and CTAs — in your brand voice. Design templates are built for your brand and optimised for both desktop and mobile rendering across all major email clients." },
      { title: "Performance Reporting", description: "Monthly reports covering open rates, click rates, conversion rates, unsubscribe rates, revenue attributed to email, and list growth metrics. We benchmark your performance against industry averages for [City]'s key sectors and identify opportunities for improvement." },
    ],
    process: [
      { step: "01", title: "Audit & Strategy", description: "We audit your current email setup, list quality, and existing performance. We define your email programme strategy, automation priorities, and campaign calendar based on your [City] business goals." },
      { step: "02", title: "Technical Setup", description: "Platform configuration, deliverability authentication, list cleaning, segmentation setup, and tracking integration. This technical foundation is non-negotiable for a programme that actually performs." },
      { step: "03", title: "Automation Build-Out", description: "We design, write, and build the core automated sequences: welcome flow, lead nurture, and any transaction-triggered sequences relevant to your [City] business model." },
      { step: "04", title: "Campaign Execution", description: "Regular campaign sends begin — newsletter, promotional, and engagement emails deployed on a consistent calendar cadence that keeps your [City] audience engaged without fatiguing them." },
      { step: "05", title: "Optimise & Scale", description: "We A/B test subject lines, send times, content formats, and offers. Winners get adopted. List growth strategies are implemented to expand your [City] audience continuously." },
    ],
    stats: [
      { n: "$36:1", l: "average ROI for email marketing (Litmus 2023)" },
      { n: "+42%", l: "avg. open rate improvement after list hygiene" },
      { n: "60 days", l: "avg. time to first automation revenue for new setups" },
    ],
    timeline: [
      { period: "Weeks 1–4", title: "Technical Setup + First Automations", desc: "Platform configured, deliverability authenticated, list cleaned and segmented, welcome and nurture sequences live. First automated revenue typically generated within 30 days." },
      { period: "Months 2–3", title: "Campaign Rhythm + Optimisation", desc: "Regular campaign cadence established. A/B testing underway on subject lines and content. Open rates and click rates improving with deliverability improvements." },
      { period: "Month 3+", title: "Compounding Revenue + List Growth", desc: "Automation revenue running consistently. Campaign performance optimised based on 90 days of data. List growth strategy producing new subscribers monthly." },
    ],
    faqTemplate: [
      { q: "Does email marketing still work for [City] businesses in 2025?", a: "Absolutely. Email marketing's ROI has actually improved over the past five years as social media reach has declined. For [City] businesses with existing customer relationships or lead pipelines, email remains the highest-ROI channel available — delivering $36 for every $1 invested on average. The key difference between email that works and email that doesn't is strategic execution: the right segmentation, automation, content, and cadence." },
      { q: "What email marketing platform do you use for [City] clients?", a: "We work with Klaviyo (best for ecommerce and advanced automation), HubSpot (best for B2B and CRM integration), Mailchimp (good for early-stage businesses), and several others. We recommend the right platform based on your [City] business type, list size, and complexity requirements — not what generates the highest commission for us. If you already use a platform, we can work within it." },
      { q: "How do you grow my email list for [City] customers?", a: "List growth is driven by several mechanisms: optimised website opt-in forms (lead magnets, newsletter sign-ups, content upgrades), paid social lead generation campaigns targeting your [City] customer profile, Google Ads lead generation, and in-person capture for businesses with physical locations. We implement a list growth strategy alongside the email programme itself so your audience expands continuously." },
      { q: "How often should my [City] business email its list?", a: "Frequency depends on your industry, content value, and audience expectations. Most [City] service businesses perform well sending 2–4 times per month. Ecommerce businesses can often send more frequently — especially during promotional periods. The key metric is not how often you send, but how engaged your list is. We use engagement data to calibrate sending frequency for your specific [City] audience." },
      { q: "What's the difference between automated emails and campaign emails?", a: "Automated emails are triggered by specific customer actions or time-based conditions — a welcome sequence for new subscribers, an abandoned cart email, a post-purchase follow-up. They run continuously in the background without manual intervention. Campaign emails are scheduled sends to your broader [City] list — newsletters, promotions, announcements, seasonal sends. A complete email programme includes both: automations that run every day, and campaigns that keep your active [City] audience engaged." },
      { q: "What's a good email open rate benchmark for [City] service businesses?", a: "Average email open rates vary significantly by industry. For [City] professional services businesses (legal, financial, healthcare), well-managed lists typically achieve 30–45% open rates. For retail and ecommerce businesses in [City], 20–30% is solid. For B2B businesses, 25–40% is a reasonable benchmark. If your [City] list is performing below these ranges, the most common causes are deliverability issues, poor subject lines, or list hygiene problems — all of which we diagnose and address in our technical setup phase." },
      { q: "How do you re-engage a cold email list for a [City] business?", a: "A re-engagement campaign for a cold [City] list starts with segmentation — identifying contacts who haven't opened or clicked in 90–180+ days. We then deploy a targeted sequence with compelling subject lines, a clear value proposition, and often a specific offer or content piece relevant to [City] subscribers. Contacts who re-engage are moved to active segments; those who don't are suppressed to protect deliverability. A successful re-engagement campaign typically recovers 15–25% of cold [City] subscribers, with the remaining suppression improving your active list's overall deliverability." },
      { q: "Can email marketing work for B2B [City] businesses selling high-ticket services?", a: "Exceptionally well. For [City] B2B businesses where a single client relationship is worth thousands or hundreds of thousands of dollars, email marketing's ability to maintain presence and build trust over a long consideration period is unmatched by any other channel. We build B2B email programmes for [City] professional services, technology, and consulting firms that nurture prospects through 3–12 month decision cycles — delivering value through educational content, case studies, and personalised outreach that keeps your [City] business top of mind when the purchase decision is finally made." },
      { q: "What is email deliverability and how do you protect it for [City] campaigns?", a: "Email deliverability refers to the percentage of your [City] list's emails that actually land in the inbox rather than spam or promotions folders. It's determined by technical authentication (SPF, DKIM, DMARC records), your sending domain's reputation, your list's engagement rates, and your list hygiene practices. We configure all technical authentication before your first send, implement ongoing list hygiene to remove bounces and non-engagers, use engagement-based segmentation to maintain healthy engagement rates, and monitor deliverability metrics closely. [City] businesses that work with us typically see significant inbox rate improvements within 60 days." },
      { q: "How do you track which email campaigns are generating revenue for my [City] business?", a: "We set up revenue attribution for [City] email campaigns through UTM parameter tracking (tied to Google Analytics), CRM integration where applicable, and platform-native attribution reporting. For ecommerce [City] businesses, we connect Klaviyo or Mailchimp directly to your store platform to track email-attributed revenue at the order level. For service businesses, we track email-attributed conversions (form fills, calls, bookings) through goal tracking in Analytics. Monthly reports show the specific revenue or conversion value attributable to each campaign and automation sequence." },
      { q: "What email marketing strategies work best for [City] businesses in [TopIndustry]?", a: "For [City]'s [TopIndustry] businesses, the highest-performing email strategies typically combine: (1) a post-enquiry or post-purchase nurture sequence that deepens the relationship, (2) periodic value-add campaigns that demonstrate expertise and keep the brand top-of-mind, and (3) re-engagement sequences for contacts who've gone quiet. The specific content, offer structure, and cadence depends on your [City] customers' buying cycle — a [TopIndustry] sale that takes 3 months looks very different from a recurring purchase." },
      { q: "How does email marketing complement other [City] digital marketing channels?", a: "Email marketing amplifies the ROI of every other [City] marketing channel by converting more of the traffic and leads those channels generate. SEO drives organic visitors to your site — email captures and nurtures them. Google Ads generates leads — email sequences convert them over time. Paid social builds awareness — email re-engages warm [City] audiences at a near-zero marginal cost. For [City] businesses with multi-channel strategies, email is the connective tissue that holds the funnel together." },
      { q: "What is a good email open rate benchmark for [City] business emails?", a: "Industry-average email open rates vary by sector: professional services in [City] typically see 22–30%, while [TopIndustry] businesses often benchmark at 20–28% for promotional sends. Transactional and automated emails (welcome series, post-purchase sequences) consistently outperform broadcast campaigns — often achieving 40–60%+ open rates. Rather than targeting a specific open rate, we focus on improving the metrics that connect to revenue: click-to-open rate, conversion rate, and revenue per email sent." },
      { q: "Should [City] businesses use Klaviyo, HubSpot, or Mailchimp?", a: "Platform selection for [City] businesses depends on your business model and growth stage. Klaviyo is the strongest choice for ecommerce and businesses with product purchase data — its segmentation and automation depth are unmatched. HubSpot suits B2B businesses in [City]'s [Industries] sectors that need CRM-connected email marketing. Mailchimp works well for early-stage [City] businesses with simpler needs and smaller lists. We recommend and implement the right platform based on your specific situation — not based on platform commissions." },
    ],
    introHooks: [
      `Email marketing delivers the highest ROI of any digital marketing channel — $36 for every $1 spent on average. For [City] businesses with an existing customer base or active lead pipeline, email is the single most cost-effective way to nurture prospects, drive repeat purchases, and build customer relationships that sustain a business through economic cycles. Unlike social media platforms where algorithm changes can slash your organic reach overnight, your email list is an owned asset that no platform update can take away.`,
      `[City]'s [BusinessCount] businesses are all competing for their customers' attention across an increasingly crowded digital landscape. For businesses in [Industries] and similar sectors, email marketing cuts through that noise to reach your audience directly — in their inbox, where engagement rates far exceed social media. The businesses generating the strongest email marketing ROI aren't sending more emails; they're sending smarter emails, built on better segmentation, better automation, and clearer measurement.`,
      `Most [City] businesses with email lists are leaving significant revenue on the table. The average business with an email list generates less than 20% of what that list could produce with proper segmentation, automation, and campaign strategy. For [City] businesses in [TopIndustry] and similar sectors, the difference between a passive email list and an actively managed email programme is often $50,000–$500,000 in additional annual revenue — from contacts you already own.`,
      `Email marketing has one distinct advantage that no other [City] digital marketing channel can match: it's the only channel where you own the audience entirely. No platform controls your access to your [City] email list. No algorithm determines who sees your messages. No policy change can cut you off from the contacts you've built. For [City] businesses building long-term customer relationships — in [Industries] and beyond — that ownership is foundational to sustainable growth.`,
    ],
    introBodyAlt: [
      `Outlier builds email marketing programmes for [City] businesses around three core components: a technical foundation that ensures deliverability, an automation architecture that works while you sleep, and a campaign strategy that drives consistent engagement and revenue. Most [City] businesses that struggle with email are missing at least one of these — typically either deliverability (their emails go to spam) or automation (they're sending one-off broadcasts but have no sequences running).

For [City] businesses in [TopIndustry] and adjacent sectors, automation is where the highest ROI lives. A well-designed welcome sequence for new subscribers converts 30–50% more of them to first-time buyers than no automation at all. A post-purchase sequence increases repeat purchase rates by 20–40%. A re-engagement sequence recovers 15–25% of lapsed contacts. These automations run continuously with no ongoing cost per email — the investment compounds with every new contact who joins your [City] list.

Email marketing measurement for [City] clients goes beyond open rates and click rates. We track email-attributed revenue, cost per acquisition through email, list growth rate, and the LTV differential between email-engaged and non-engaged customers. This data shows the true value of your email programme to the [City] business — and informs every decision about list growth, segmentation strategy, and content investment.`,
      `The email marketing opportunity for [City] businesses starts with list health. Most [City] businesses have email lists that are significantly underperforming because of deliverability issues, poor segmentation, or the absence of any automation. We start every engagement with a technical audit: deliverability authentication (SPF, DKIM, DMARC), sender reputation assessment, list hygiene (removing invalid and disengaged contacts), and platform configuration. Fixing these foundational issues alone often produces significant open rate improvements within the first 30 days.

Segmentation is the strategy that separates [City] businesses generating strong email ROI from those getting mediocre results. Sending the same email to your entire [City] list — regardless of where each contact is in their relationship with your business — wastes opportunities and damages deliverability. We build segmentation frameworks based on your [City] customers' actual behaviours: engagement level, purchase history, product interest, and stage in the buying journey. Each segment gets content specifically calibrated to move them forward.

The automation sequences we build for [City] clients cover the key commercial moments: new subscriber conversion, post-purchase follow-up, cart abandonment (for ecommerce), re-engagement, and loyalty. Each sequence is carefully structured with the right content, cadence, and offer for each [City] audience segment — and continuously refined based on performance data. Over time, these automations become a predictable revenue engine that doesn't require manual effort to operate.`,
    ],
    whyVariants: [
      [
        "Because email is the only [City] marketing channel you own entirely. No algorithm change, no platform policy, no ad account suspension can cut off your access to an email list you've built. For [City] businesses, that ownership is one of the most valuable long-term assets in the marketing stack.",
        "Because email marketing's $36:1 average ROI outperforms every other digital channel. For [City] businesses with established customer lists or active lead pipelines, email is the highest-leverage place to invest in improved marketing performance.",
        "Because automation turns your [City] email list into a 24/7 revenue engine. Welcome sequences, post-purchase follow-ups, and nurture campaigns run continuously — converting more of the leads and customers your other [City] channels generate without ongoing manual effort.",
        "Because [City] consumers who've opted into your email list have explicitly given you permission to communicate with them — making email the highest-trust outbound channel available. That trust, managed well, produces the highest conversion rates in digital marketing.",
      ],
      [
        "Because most [City] businesses are significantly undermonetising their existing email lists. Better segmentation, automation, and campaign strategy consistently unlock 2–5× more revenue from the same number of contacts — without spending more on acquisition.",
        "Because email complements every other [City] marketing channel. SEO drives traffic — email captures and converts it. Paid social builds awareness — email re-engages warm [City] audiences. Content attracts readers — email converts them into buyers. Email amplifies the ROI of the entire [City] marketing stack.",
        "Because Outlier builds email programmes for [City] businesses that are technically sound (deliverability, authentication, list hygiene), strategically smart (segmentation, automation, content), and precisely measured (email-attributed revenue, LTV by email engagement level). All three are required for strong results.",
        "Because for [City] businesses in [TopIndustry] and related sectors, email is a direct line to decision-makers and existing customers who already trust your brand — the highest-conversion audience you have access to. Treating that audience with a generic broadcast strategy squanders its potential.",
      ],
      [
        "Because email retains customers more cost-effectively than re-acquiring them. For [City] businesses, the cost of keeping an existing customer engaged through email is a fraction of the cost of acquiring a new one through paid channels. Email marketing is the most efficient retention investment in the [City] marketing mix.",
        "Because email marketing in [City]'s [Industries] sectors produces among the lowest cost-per-conversion of any channel at scale. Once automations are running and deliverability is optimised, the marginal cost of an email-attributed lead or sale approaches zero — generating compounding returns on the initial programme investment.",
        "Because the [City] businesses generating the strongest email marketing ROI invest in segmentation and automation — not just more sends. The difference between good and great email marketing for [City] businesses isn't send frequency; it's the relevance and timing of each message.",
        "Because Outlier's [City] email programmes are built around business outcomes, not vanity metrics. We measure what actually matters — email-attributed revenue, conversion rate by segment, and LTV of email-engaged customers — and we optimise against those numbers every month.",
      ],
    ],
    cta: "Get a Free Email Marketing Audit",
    ctaSecondary: "See Email Results",
    relatedServices: [
      { label: "Content Marketing", href: "/content-marketing-service" },
      { label: "Paid Social", href: "/paid-social-service" },
      { label: "Google Ads", href: "/google-ads-management" },
      { label: "SEO Services", href: "/seo-services" },
    ],
  },

  "digital-marketing": {
    label: "Digital Marketing",
    shortLabel: "Digital Marketing",
    icon: BarChart3,
    h1Template: "Digital Marketing Agency in [City], [Province]",
    taglineTemplate:
      "Full-channel digital marketing for [City] businesses that want to dominate their market.",
    metaDescTemplate:
      "Outlier is a full-service digital marketing agency serving [City], [Province]. SEO, Google Ads, social media, email, and content — one team, one strategy. Get a free consultation.",
    introTemplate: `Digital marketing is no longer optional for [City] businesses — it's the primary way that customers discover, evaluate, and choose the businesses they buy from. Whether your customers are searching on Google, scrolling Instagram, checking reviews, or opening emails, a coordinated digital marketing strategy ensures your brand is present, compelling, and converting at every touchpoint. The [City] businesses that are growing fastest are the ones that have figured out how to make their digital channels work together — not as isolated campaigns managed by different agencies, but as an integrated system where each channel amplifies the others.

Outlier is a full-service digital marketing agency that works with [City] businesses to build integrated, data-driven growth strategies. Unlike agencies that specialise in just one channel, we manage SEO, Google Ads, social media advertising, email marketing, and content under one roof — creating compounding synergies that siloed single-channel strategies simply can't achieve. When your SEO content supports your PPC landing pages, your email sequences retarget paid visitors, and your social ads close the loop on organic search intent — that's when digital marketing stops being a cost centre and becomes a genuine business growth engine. Our [City] clients who run integrated multi-channel programmes consistently outperform those running isolated campaigns by a significant margin.

We work primarily with ambitious [City] businesses: founders who want to build category-defining brands, CMOs at growing companies who need a high-performance agency partner, and established businesses that have relied on referrals and are ready to invest seriously in digital acquisition. Our model is built around accountability — you'll always know what we're doing, why, and exactly what it's delivering to your bottom line. We don't hide behind dashboard screenshots or vanity metrics — every report is built around business outcomes: qualified leads, cost per acquisition, and revenue influenced by digital channels.

The intelligence advantage of running all channels through one team is significant. We see patterns across channels that siloed agencies can't: which paid search keywords are generating the highest-quality leads that convert in email, which social ad creative is producing audiences that have the best SEO conversion rates, which content pieces are lowering CPAs in retargeting campaigns. These cross-channel insights are impossible to act on when your SEO, paid media, and social teams are working independently. At Outlier, a single strategy conversation informs every channel simultaneously.

The [City] digital marketing landscape requires both breadth and depth. Breadth — being present across the channels where your customers spend time, at every stage of their decision journey. Depth — being genuinely competitive within each channel, with expert-level execution that can stand up to well-resourced local and national competitors. Most [City] businesses that struggle with digital marketing are doing one or two channels superficially, without the strategic architecture or execution depth required to compete. Our full-channel programmes ensure both: we go wide and we go deep.

Attribution and measurement are the foundation of everything we do for [City] clients. We build custom attribution models that trace the full customer journey — from first touchpoint (organic search, paid ad, social post, referral) through every subsequent interaction to a closed deal. This allows us to understand the true contribution of each channel to your [City] business's revenue and optimise budget allocation accordingly. Over time, this data compounds: each month of operation improves the model's accuracy and our ability to drive incremental growth efficiently.`,
    whyTemplate: [
      "Because your [City] customers are online first. Over 80% of purchase decisions in [City] now involve some form of online research — whether that's a Google search, a review check, a social media browse, or an email. A fragmented or absent digital presence means losing those decisions to competitors who are showing up at every touchpoint.",
      "Because digital channels are measurable in ways traditional marketing isn't. Every campaign we run for [City] clients comes with full attribution — you know exactly which channels are driving leads, at what cost, and at what conversion rate. We optimise relentlessly based on what the data shows is working.",
      "Because integrated campaigns dramatically outperform single-channel strategies. When SEO, paid ads, social, and email work together — sharing data, audiences, and creative — the whole is significantly greater than the sum of the parts. [City] businesses that run coordinated multi-channel strategies consistently outperform those running isolated campaigns.",
    ],
    included: [
      { title: "Integrated Channel Strategy", description: "We start by building a unified digital strategy across all channels, with clear KPIs, budget allocation, and a 90-day roadmap. Every channel plan connects to your business goals — not just channel-level metrics." },
      { title: "SEO & Organic Search", description: "Technical SEO, content strategy, and link building to drive compounding organic growth in [City] and across Ontario. We build search visibility that keeps working even when ad budgets pause." },
      { title: "Google Ads & Paid Search", description: "Search, Shopping, Local Service Ads, and Performance Max campaigns managed by Google-certified specialists. We maximise ROAS and minimise wasted spend across every [City] campaign." },
      { title: "Social Media Advertising", description: "Meta, TikTok, LinkedIn, and YouTube campaigns targeted to your exact [City] audience — by location, demographic, interest, and intent. Creative and copy developed in-house." },
      { title: "Email Marketing & Automation", description: "Lead nurture sequences, welcome flows, promotional campaigns, and re-engagement automations that convert [City] leads into paying customers and existing customers into advocates." },
      { title: "Content Marketing", description: "SEO-driven blog content, service pages, and pillar articles that build topical authority for your [City] business and support every other channel in the mix." },
    ],
    process: [
      { step: "01", title: "Business & Market Audit", description: "We analyse your current digital footprint, competitive landscape in [City], and existing channel performance to identify the biggest gaps and opportunities across SEO, paid, social, and email." },
      { step: "02", title: "Strategy Architecture", description: "We build your integrated multi-channel strategy: budget allocation, channel mix, campaign structure, content calendar, and 90-day KPI targets — all tied to business outcomes, not vanity metrics." },
      { step: "03", title: "Campaign Build & Launch", description: "We build and launch all campaigns — paid search, social ads, email flows, content — with full creative and copywriting handled in-house. Go-live typically happens within 2–3 weeks of strategy sign-off." },
      { step: "04", title: "Optimisation & Scaling", description: "We optimise every campaign weekly based on performance data. Winning campaigns get scaled; underperforming ones get restructured. Our goal is continuous improvement in ROAS, CPA, and organic KPIs." },
      { step: "05", title: "Reporting & Strategic Review", description: "Monthly performance reports show you exactly what every dollar is delivering. Quarterly strategic reviews reassess priorities based on market changes, new opportunities, and evolving business goals." },
    ],
    stats: [
      { n: "4.2×", l: "avg. ROAS across all managed accounts" },
      { n: "-38%", l: "avg. reduction in cost per acquisition" },
      { n: "200+", l: "Ontario businesses grown" },
    ],
    timeline: [
      { period: "Weeks 1–3", title: "Audit + Strategy + Launch", desc: "Multi-channel audit complete, integrated strategy finalised, paid campaigns and email automations launched. SEO foundation work begins." },
      { period: "Months 2–4", title: "Optimisation + Initial Results", desc: "Paid channels optimised toward CPA targets. Email automation producing revenue. First SEO ranking improvements visible. Cross-channel data insights informing all channels." },
      { period: "Month 4+", title: "Compounding Multi-Channel Growth", desc: "All channels optimised and compounding. SEO traffic reducing blended CAC. Paid channels at target ROAS. Email programme contributing consistent revenue. Full attribution model operational." },
    ],
    faqTemplate: [
      { q: "What digital marketing services do you offer in [City]?", a: "We offer a full suite of digital marketing services for [City] businesses: SEO, Google Ads (Search, Display, Shopping, Local Service Ads, Performance Max), social media advertising (Meta, TikTok, LinkedIn, YouTube), email marketing and automation, content marketing, and CRO. We can manage one channel or your entire digital marketing operation." },
      { q: "How do you measure digital marketing results for [City] clients?", a: "We measure what matters to your business: qualified leads, cost per lead, ROAS, revenue influenced by digital channels, and customer acquisition cost. We build custom attribution models that trace the full customer journey — from first click to closed deal — so you always know exactly what your investment is producing." },
      { q: "Do you work with local [City] businesses or larger brands?", a: "Both. We work with local [City] service businesses (healthcare, home services, professional services, retail), growing mid-market brands across Ontario, and national companies that want local market expertise. Our strategies scale with your ambitions." },
      { q: "How long until we see results from digital marketing in [City]?", a: "Paid channels (Google Ads, social ads) produce results within the first 30–60 days as campaigns ramp up and we optimise toward your KPIs. SEO takes longer — typically 3–6 months before significant organic traffic growth — but delivers sustainable, compounding returns. Email marketing delivers results as soon as your first campaign deploys." },
      { q: "Can you take over from our existing agency or in-house team?", a: "Absolutely. We handle transitions from existing agencies and in-house teams frequently. We audit your current setup thoroughly before making any changes, and we manage the transition to minimise any disruption to your campaigns." },
      { q: "How does Outlier build a digital marketing strategy specific to the [City] market?", a: "Every strategy we build for [City] clients starts with a market-specific audit: we analyse the [City] competitive landscape for your category, identify where search demand exists (and how it's being captured), assess your current digital footprint, and benchmark you against the strongest performers in your [City] category. From this foundation, we build a channel strategy, content plan, and paid media architecture that reflects [City]'s specific market dynamics — not a generic framework reused across clients." },
      { q: "What's the difference between B2B and B2C digital marketing approaches in [City]?", a: "B2C digital marketing for [City] businesses focuses on generating consumer transactions and leads quickly — through paid social, local SEO, and Google Ads targeting people with immediate purchase intent. B2B digital marketing in [City] focuses on longer sales cycles, higher-value relationships, and decision-maker targeting — typically through LinkedIn, content marketing, SEO for informational and commercial queries, and email nurture. We run both types of programmes and build channel mixes appropriate to the audience, buying cycle, and deal size of each [City] client." },
      { q: "How does Outlier handle digital marketing for [City] businesses in regulated industries?", a: "We have deep experience managing digital marketing for [City] businesses in regulated categories: healthcare (PHIPA-compliant campaigns, no patient data in ad targeting), legal (Law Society advertising guidelines), financial services (IIROC/AMF-compliant messaging), and real estate (RECO-compliant claims and endorsements). Our [City] campaigns in these sectors are built with compliance as a first principle — all copy and targeting reviewed against regulatory guidelines before launch, with documented approval processes where required." },
      { q: "What budget do [City] businesses typically need for a complete digital marketing programme?", a: "A full-channel digital marketing programme for a [City] business — covering SEO, Google Ads, paid social, and email — typically requires $3,500–$7,500/month in agency fees plus ad spend of $2,000–$8,000/month depending on channel mix and competitive intensity. Businesses that need to compete aggressively in high-CPC [City] categories (legal, home services, healthcare) require higher ad budgets. We build recommendations based on your specific goals and [City] market conditions — and we'll be transparent about the minimum investment required to achieve meaningful results." },
      { q: "How do you prevent budget waste across multiple digital marketing channels for a [City] business?", a: "Cross-channel budget waste typically occurs when channels compete against each other (e.g., your Google Ads bidding against your own organic listings), when attribution is unclear (spending on channels that look good in last-click reporting but don't actually drive conversions), or when budgets are spread too thin across too many channels. We address this through unified attribution modelling that shows the true contribution of each channel, strategic budget allocation reviews every 90 days, and regular channel-level audits that eliminate spend that isn't producing ROI for your [City] business." },
      { q: "How does [City]'s [Region] market affect digital marketing strategy vs. other Ontario markets?", a: "[City]'s position as a [Region] business hub means specific competitive dynamics apply. [CompetitionLevel] competition in most digital marketing channels, a consumer base shaped by [TopIndustry] and similar economic drivers, and search demand patterns specific to [City]'s demographics all inform how we build digital marketing programmes. A strategy built for a smaller Ontario market won't perform in [City] without calibration to these local realities — and we've built enough [City]-specific programmes to know what that calibration requires." },
      { q: "What digital marketing channels generate the fastest results for [City] businesses?", a: "For immediate results, Google Ads and paid social are the fastest channels — they can deliver leads within days of launch. For medium-term results, email marketing automations typically begin producing measurable revenue within 30–60 days. For long-term compounding returns, SEO and content marketing begin producing meaningful results at 6–12 months and compound significantly beyond that. Most [City] businesses benefit from a phased approach: quick-win paid channels first, then building the organic and owned channels that reduce long-term acquisition costs." },
      { q: "Can Outlier manage digital marketing for [City] businesses in [TopIndustry]?", a: "Yes — we have specific experience in [TopIndustry] and [Industries] sectors in [City] and across [Region]. These sectors have specific compliance requirements, competitive dynamics, and customer acquisition strategies that generic digital marketing agencies often misunderstand. Our [City] team understands the regulatory context, the search demand patterns, and the content and campaign approaches that work in these industries. We can show [City] businesses in [TopIndustry] category-specific case studies and benchmark data during your initial consultation." },
    ],
    introHooks: [
      `Digital marketing is no longer optional for [City] businesses — it's the primary way that customers discover, evaluate, and choose the businesses they buy from. Whether your customers are searching on Google, scrolling social media, checking reviews, or opening emails, a coordinated digital marketing strategy ensures your brand is present, compelling, and converting at every touchpoint. The [City] businesses that are growing fastest right now are the ones that have made their digital channels work together — not as isolated campaigns, but as an integrated system.`,
      `[City]'s [BusinessCount] businesses all compete for the same customers across an increasingly fragmented digital landscape. The businesses winning market share in [Industries] and across [City]'s [Region] economy are the ones with coherent, full-funnel digital marketing programmes — where SEO drives organic discovery, paid ads capture high-intent traffic, email converts and retains customers, and social builds awareness and trust. Each channel feeds the others, and the compound effect is significantly stronger than any single channel could produce alone.`,
      `The [City] businesses generating the best digital marketing results share one characteristic: they treat digital marketing as a system, not a collection of campaigns. SEO, paid media, content, and email are not separate line items in their budget — they're interconnected components of a single growth engine where each channel is calibrated to amplify the others. This is how [City] businesses in [TopIndustry] and similar sectors build sustainable competitive advantages that are extremely difficult for competitors to replicate.`,
      `For [City] businesses in [Industries] and across the [Region] market, the digital marketing landscape has changed fundamentally over the past five years. Consumers are more research-intensive, more comparison-focused, and more likely to make high-value purchase decisions through digital channels than ever before. Businesses that built strong digital marketing programmes in [City] three years ago are now generating compounding returns from that investment. The businesses starting today will be in that position by 2027 — if they invest in the right integrated strategy now.`,
    ],
    introBodyAlt: [
      `Outlier manages digital marketing for [City] businesses as an integrated, full-channel operation — not as a set of siloed services managed by different teams. When your SEO, paid media, content, and email all flow from the same strategy and the same team, you gain cross-channel intelligence that siloed agencies simply can't access. We see which paid keywords generate the leads that convert best in email, which content pieces lower CPAs in retargeting, and which audience segments behave differently across Google versus Meta — and we act on those insights across every channel simultaneously.

The [City] digital marketing strategy we build for every client starts with a comprehensive market audit: the competitive landscape in your [City] category, the search demand across all relevant keywords, the current performance of your existing channels, and a benchmark of the strongest performers in your [City] market. This intelligence drives a channel prioritisation framework — telling you exactly which channels to invest in first, in what order, and with what budget allocation to produce the best ROI given your [City] market position.

Attribution and measurement are non-negotiable foundations for every [City] digital marketing programme we run. We build custom attribution models that trace the full customer journey — from first touchpoint to closed deal — across all channels. This means you always know which channels are actually driving revenue for your [City] business (not just which ones look good in last-click reports), and you can make intelligent budget allocation decisions based on real data rather than assumptions.`,
      `For [City] businesses in [Industries] and similar sectors, integrated digital marketing produces dramatically better results than running channels independently. The cross-channel data we accumulate across a full-funnel programme — from organic search behaviour through paid conversion patterns to email engagement — creates a compounding intelligence advantage. Audiences we identify in SEO inform paid social targeting. Content that ranks organically gets amplified in paid retargeting. Email sequences follow up leads generated by Google Ads. The system reinforces itself.

We don't pitch [City] clients on channels they don't need. Our digital marketing strategy is built around your specific business objectives, competitive position, and the [City] market's demand characteristics. Some [City] businesses need to prioritise local SEO and Google Ads first. Others have strong organic presence but underinvested in paid social. Others have great traffic but weak email programmes leaking revenue. We diagnose the specific gaps and build the programme around fixing the highest-impact ones first.

The [City] businesses we work with that achieve the strongest digital marketing outcomes treat it as a long-term investment, not a short-term spend. Paid channels deliver immediate results; SEO and content compound over 12–36 months; email builds increasing ROI as the list matures. The combined programme produces a cost of acquisition that drops consistently over time — and a competitive moat that becomes harder to close as the investment compounds.`,
    ],
    whyVariants: [
      [
        "Because your [City] customers are online first — and a fragmented or absent digital presence means losing decisions to competitors who are showing up at every touchpoint. An integrated digital marketing programme ensures [City] buyers encounter your brand consistently, from initial search to final conversion.",
        "Because digital channels are measurable in ways traditional marketing isn't. Every campaign we run for [City] clients comes with full attribution — you know exactly which channels are driving leads, at what cost, and at what conversion rate. We optimise relentlessly based on what the data shows is working in your specific [City] category.",
        "Because integrated campaigns dramatically outperform single-channel strategies for [City] businesses. When SEO, paid ads, content, and email work together — sharing data, audiences, and creative — the combined ROI significantly exceeds what any single channel could produce alone.",
        "Because [City]'s [CompetitionLevel] digital marketing environment rewards strategic depth, not just budget scale. The businesses leading their [City] categories online have typically built multi-channel programmes that compound over time — making their competitive position increasingly difficult to attack.",
      ],
      [
        "Because Outlier manages all your [City] digital marketing channels from a single integrated strategy — eliminating the inefficiencies, communication gaps, and missed opportunities that come from working with multiple agencies or an inconsistent in-house setup.",
        "Because the cross-channel intelligence we accumulate by managing your full digital marketing stack makes every individual channel more effective. SEO data improves paid search. Paid social data informs content strategy. Email data sharpens targeting across all channels. Integrated management creates a compounding intelligence advantage.",
        "Because [City] digital marketing ROI improves significantly over time when channels compound together. Paid channels deliver immediate results; SEO and content build for 12–36 months; email matures to lower acquisition costs. The combined trajectory produces a competitive position that becomes harder to replicate as time goes on.",
        "Because Outlier has been building digital marketing programmes for [City] businesses in [Industries] and across [Region] for over a decade. We understand the [City] market — its competitive dynamics, its search demand patterns, its consumer behaviour — well enough to build strategies that reflect [City]'s reality rather than generic best practices.",
      ],
      [
        "Because the [City] businesses growing fastest in [TopIndustry] and similar sectors have coherent, integrated digital marketing — not scattered campaigns. They're present across the full funnel, from Google to social to email, with consistent messaging and coordinated strategy.",
        "Because digital marketing strategy should be built on [City]-specific data, not generic assumptions. We audit your [City] market before we recommend anything — and every channel we suggest is recommended because the data shows it will produce ROI in your specific category, not because it's in our sales pitch.",
        "Because digital marketing done wrong costs [City] businesses more than it delivers. Siloed channels, poor attribution, and strategy-free execution consistently burn budget without producing growth. Integrated, data-driven digital marketing produces compounding returns — and we build it to do exactly that.",
        "Because your [City] customers' path to purchase now involves multiple digital touchpoints — search, social, email, review platforms — and a strong digital marketing programme ensures you're present and compelling at every stage. Covering only one or two channels leaves significant revenue on the table.",
      ],
    ],
    cta: "Get a Free Digital Marketing Consultation",
    ctaSecondary: "View Case Studies",
    relatedServices: [
      { label: "SEO Services", href: "/seo-services" },
      { label: "Google Ads Management", href: "/google-ads-management" },
      { label: "Paid Social", href: "/paid-social-service" },
      { label: "Content Marketing", href: "/content-marketing-service" },
    ],
  },

  "web-design": {
    label: "Web Design & Development",
    shortLabel: "Web Design",
    icon: Globe,
    h1Template: "Web Design Services in [City], [Province]",
    taglineTemplate:
      "Custom websites built to convert [City] visitors into customers — fast, beautiful, and SEO-ready.",
    metaDescTemplate:
      "Professional web design and development in [City], [Province]. Outlier builds custom, conversion-optimised websites for [City] businesses. Fast, beautiful, and built for growth.",
    introTemplate: `Your website is the most important marketing asset your [City] business owns. It's your 24/7 salesperson, your credibility signal, and the foundation everything else in your digital marketing stack sits on. A slow, outdated, or poorly converting website undermines every other marketing investment you make — turning hard-won traffic from SEO, paid ads, and social media into lost opportunities. Studies consistently show that [City] consumers form a judgement about a website within 50 milliseconds of loading it — and that 88% of online consumers won't return to a site after a poor experience. If your current website isn't converting, that problem compounds with every visitor you send to it.

At Outlier, we design and build custom websites for [City] businesses that do three things exceptionally well: they rank (built with technical SEO as a first principle, not an afterthought), they convert (every page is designed with a clear user journey and conversion objective), and they impress (design that communicates quality, authority, and brand personality in seconds). We don't use templates or page builders — every site we build is custom-designed and built on a technical foundation that performs. Our [City] web design projects consistently achieve sub-2-second load times and green Core Web Vitals scores — the performance standards that Google uses to evaluate site quality in its ranking algorithm.

We've designed and built websites for [City] businesses across healthcare, legal, professional services, ecommerce, hospitality, SaaS, real estate, and local services. Each project starts with a deep understanding of your business, your customers, and your competitive landscape in [City] — so the final product isn't just beautiful, it's strategically aligned with how your customers make decisions. Our design process is collaborative: you review high-fidelity Figma mockups for all key pages before we write a line of code, ensuring alignment before production begins.

The conversion optimisation philosophy is baked into every design decision we make for [City] clients. Headline placement, CTA positioning, form design, trust signal architecture, social proof integration, and page flow are all informed by conversion research and the specific behaviours of your [City] customer. We don't design by aesthetic preference — we design by conversion principles, validated through testing. The result is websites that don't just look good — they produce measurable improvements in the percentage of [City] visitors who take the action you want them to take.

Technical SEO is a first principle in every website we build — not a checkbox item at the end of a project. Site architecture, URL structure, canonical setup, schema markup, XML sitemap, robots.txt, page speed configuration, and Core Web Vitals optimisation are all handled during the build, before launch. This means your [City] website is positioned to rank from day one — not after weeks of remediation work that a technical SEO agency has to do because the web design team didn't consider Google's requirements. The clean technical foundation we build is what allows our SEO programmes to scale rankings quickly after launch.

The post-launch phase is where many [City] web design projects fail — not in the build, but in what happens after. We don't hand off and disappear. We monitor your new website closely for the first 30 days, tracking Core Web Vitals, crawl behaviour, indexation, and conversion metrics. We conduct monthly performance reviews for the first quarter post-launch, and we remain available for ongoing maintenance, CMS training, and content updates. If you're running an SEO or Google Ads programme with us, our web team stays closely integrated with your channel specialists to ensure the website continues to evolve in service of your growth objectives.`,
    whyTemplate: [
      "Because [City] customers judge your business by your website. Research shows that 75% of consumers make judgements about a company's credibility based on its website design. In [City]'s competitive business environment, a poor website doesn't just fail to convert — it actively drives potential customers to competitors.",
      "Because a slow website costs you customers and rankings. Google's Core Web Vitals directly impact your search rankings, and every second of load time costs you conversions. We build every site to pass Core Web Vitals with green scores, loading in under 2 seconds — fast enough to keep both Google and [City] customers happy.",
      "Because conversion rate optimisation is built in from day one. Most [City] web design agencies focus on how sites look. We focus on how they perform. Every element — headline placement, CTAs, page structure, form design — is informed by conversion principles that we validate through ongoing testing.",
    ],
    included: [
      { title: "Custom Design (No Templates)", description: "Every website we design for [City] clients is built from scratch, informed by your brand, your customers, and your competitive context. No Squarespace. No page builders. No recycled layouts." },
      { title: "Conversion Rate Optimisation", description: "CRO isn't a bolt-on — it's designed into every page from the start. User flows, CTAs, form placement, trust signals, and social proof are all structured to maximise the percentage of [City] visitors who take the action you want." },
      { title: "Technical SEO Foundation", description: "Site architecture, URL structure, canonical setup, schema markup, XML sitemap, robots.txt, and page speed are all handled at the build stage — so your [City] website is ready to rank from day one." },
      { title: "Core Web Vitals Performance", description: "We deliver green Core Web Vitals scores across all pages — LCP under 2.5s, FID/INP under 100ms, and CLS under 0.1. Fast sites rank higher and convert better." },
      { title: "Mobile-First Responsive Design", description: "Over 60% of web traffic in [City] comes from mobile devices. We design mobile-first and test across every major device and screen size to ensure a flawless experience everywhere." },
      { title: "CMS Training & Handoff", description: "You'll be able to manage your own content after launch. We build on your preferred CMS (WordPress, Webflow, or custom), provide full documentation, and include a training session with your team." },
    ],
    process: [
      { step: "01", title: "Discovery & Strategy", description: "We learn your business, your customers, your competitors in [City], and your goals. We define the site architecture, user journeys, and conversion objectives before any design begins." },
      { step: "02", title: "Design & Prototype", description: "We design in Figma — creating high-fidelity mockups for all key pages before writing a line of code. You review, provide feedback, and approve before we build." },
      { step: "03", title: "Development & QA", description: "Clean, performant code built by our development team. We QA across browsers, devices, and screen sizes — fixing every issue before launch." },
      { step: "04", title: "SEO Configuration", description: "We configure all technical SEO elements — schema, sitemaps, robots.txt, canonical tags, meta structure — and conduct a final technical audit before launch." },
      { step: "05", title: "Launch & Post-Launch Support", description: "Launch day is managed by our team. We monitor closely for the first two weeks and remain available to address any issues. Post-launch support plans are available for ongoing maintenance and optimisation." },
    ],
    stats: [
      { n: "+68%", l: "avg. conversion rate improvement post-redesign" },
      { n: "<2s", l: "average page load time across all builds" },
      { n: "5★", l: "Clutch rating for web design projects" },
    ],
    timeline: [
      { period: "Weeks 1–2", title: "Discovery + Strategy", desc: "Business deep-dive, competitive research, site architecture and user journey mapping, conversion objective definition. Scope confirmed before design begins." },
      { period: "Weeks 3–6", title: "Design + Client Review", desc: "High-fidelity Figma mockups for all key pages. Client review and feedback rounds. Design sign-off before development begins." },
      { period: "Weeks 7–10", title: "Development + QA + Launch", desc: "Clean, performant code built and QA'd across devices. SEO configuration complete. Technical audit passed. Launch managed by our team." },
    ],
    faqTemplate: [
      { q: "How does Outlier scope and quote a website project for a [City] business?", a: "Every website project is scoped individually after a discovery call where we understand your goals, content requirements, integrations, and performance expectations. We don't quote from a rate card — each estimate reflects the specific work required for your project. We provide a detailed proposal with a fixed project price, timeline, and deliverable list before any work begins." },
      { q: "How long does a website project take?", a: "A typical [City] business website takes 6–10 weeks from kick-off to launch. Complex ecommerce or custom-application builds take 12–20 weeks. We provide a project-specific timeline at the start of every engagement, with weekly updates throughout." },
      { q: "Do you build websites with SEO built in?", a: "Yes — always. Technical SEO is a first principle for us, not an add-on. Every website we build for [City] clients includes a proper site architecture, clean URL structure, schema markup, optimised page speed, and all the technical SEO configurations that give your site the best possible foundation to rank." },
      { q: "What platform do you build on?", a: "We build on WordPress, Webflow, and custom Next.js/React depending on your needs. We recommend the right platform based on your budget, content management requirements, and technical complexity — and we'll explain the tradeoffs clearly so you can make an informed decision." },
      { q: "Can you redesign our existing [City] website?", a: "Yes. Website redesign is a significant part of our work. We conduct a full audit of your existing site before beginning — identifying what's performing well (so we keep it) and what's hurting conversions or rankings (so we fix it). We always preserve URL structures and redirect chains to protect your existing SEO equity." },
      { q: "What is CRO and is it included in your [City] website projects?", a: "Conversion Rate Optimisation (CRO) is the practice of systematically improving the percentage of [City] website visitors who take a desired action — making an enquiry, booking a call, purchasing. Our web design process is inherently CRO-focused: every page layout, CTA placement, heading, and user flow is designed with conversion objectives in mind. For clients who want a post-launch optimisation programme, we offer ongoing CRO testing — A/B testing headlines, CTAs, form designs, and page layouts based on real [City] user behaviour data from Hotjar and Google Analytics." },
      { q: "How does your [City] website design process differ from using a template or page builder?", a: "Template and page builder websites (Squarespace, Wix, generic WordPress themes) are built for breadth — they're designed to work generically for any business. Our [City] websites are custom-designed from scratch for your specific business, audience, and conversion objectives. The visual design, information architecture, copy, and technical foundation are all created specifically for you — not adapted from a template designed for someone else. The result is a website that converts significantly better, performs faster, and is far more competitive in search than any template-based alternative." },
      { q: "Do you provide website hosting and maintenance after launching a [City] business website?", a: "Yes. We offer post-launch website management plans that cover hosting, security monitoring, plugin and CMS updates, uptime monitoring, monthly performance audits, and a block of development hours for content updates and feature additions. For [City] businesses that don't have internal technical resources, a managed hosting and maintenance plan ensures your site stays secure, fast, and functional without any technical burden on your team. Pricing and scope are tailored to your site's complexity and update frequency." },
      { q: "How do you ensure fast load times and mobile performance for [City] website visitors?", a: "Performance is a first principle of every site we build. We achieve sub-2-second load times through image optimisation (WebP format, lazy loading, responsive srcsets), efficient CSS/JS bundling, server-side caching, a global CDN, and lean code that avoids unnecessary plugins and bloat. Mobile performance is tested across a range of devices and screen sizes, and we target green Core Web Vitals scores (LCP, CLS, FID) — the performance metrics Google uses in its ranking algorithm. [City] users on mobile expect instant loading; a slow site loses them within 3 seconds." },
      { q: "What analytics and tracking do you set up with a [City] website build?", a: "Every website we launch for a [City] business includes: Google Analytics 4 with goal and conversion tracking configured, Google Search Console connected and verified, Google Tag Manager installed with key event tracking, Google Business Profile linked, and any CRM integrations required. For businesses running Google Ads, we configure conversion tracking at the account level and link Analytics and Ads accounts. This means from day one, your [City] website is producing the data you need to understand what's working and make evidence-based marketing decisions." },
      { q: "What makes a high-converting website for [City]'s [TopIndustry] businesses?", a: "A high-converting website for [City]'s [TopIndustry] businesses combines: a clear, credibility-building value proposition above the fold; social proof (reviews, case studies, credentials) placed strategically throughout; fast load times that don't lose [City] mobile visitors; conversion-focused CTAs at every stage of the user journey; and content that speaks directly to [City] buyers' specific concerns and questions. We design for these outcomes from the first wireframe — conversion architecture isn't added at the end, it's built in from the start." },
      { q: "How important is website performance for [City] businesses in search rankings?", a: "Core Web Vitals — Google's page experience metrics — are a confirmed ranking signal. For [City] businesses competing for organic positions in [CompetitionLevel] search environments, a fast, well-performing website is not optional. Sites with poor Core Web Vitals consistently underrank content-equivalent competitors with better performance. We target green scores on all three Core Web Vitals (LCP under 2.5s, CLS under 0.1, FID under 100ms) on every build — and we audit performance quarterly as part of post-launch maintenance." },
      { q: "Should a [City] business redesign their website or build a new one?", a: "The right answer depends on your existing site's technical foundation and the state of its SEO equity. If your current site has strong organic rankings and significant backlink authority, a full rebuild with careful redirects is typically better than abandoning it for a new domain. If the technical foundation is fundamentally broken, a fresh build on a better platform may be the right call. We audit every [City] website before recommending a path — and we always protect existing SEO assets when rebuilding, because losing rankings during a redesign is a common and preventable mistake." },
      { q: "What website platforms does Outlier build on for [City] businesses?", a: "We build [City] websites on WordPress (ideal for businesses needing flexible content management and SEO control), Webflow (ideal for design-forward sites with moderate complexity), and Next.js/React for custom application requirements. Platform recommendation is based on your [City] business's content management needs, technical complexity, budget, and long-term scaling requirements. We'll explain the tradeoffs clearly and recommend what's genuinely right for your situation — not what's easiest for us to build." },
    ],
    introHooks: [
      `Your website is the most important marketing asset your [City] business owns. It's your 24/7 salesperson, your credibility signal, and the foundation that everything else in your digital marketing stack sits on. A slow, outdated, or poorly converting website undermines every other marketing investment you make — turning hard-won traffic from SEO, paid ads, and social media into lost opportunities. Studies consistently show that [City] consumers form a judgement about a website within 50 milliseconds of loading it — and that 88% won't return after a poor experience.`,
      `For [City] businesses in [Industries] and across the [Region] market, a professional, high-performance website is no longer a competitive advantage — it's a baseline expectation. [City] consumers are sophisticated online researchers. They compare websites before contacting a business, they check for social proof and professional presentation before making enquiries, and they make immediate quality assessments based on site speed and design. A [City] business with a weak website is losing customers every day to competitors with better ones.`,
      `A [City] website that converts is not the same as a [City] website that looks nice. Design is important — but conversion architecture is what turns [City] website visitors into leads and customers. The positioning of CTAs, the clarity of the value proposition, the placement of social proof, the speed of the page load, and the quality of the content all determine whether the traffic your SEO, paid ads, and social media send to your site actually becomes revenue. Most [City] websites are losing 60–80% of their conversion potential to these fixable issues.`,
      `The gap between the best and worst [City] business websites is not primarily a design gap. It's a performance gap. The [City] websites that generate the most leads — in [TopIndustry] and across other sectors — are fast, mobile-optimised, clearly structured, and built with conversion as the primary objective. They're not the most visually elaborate sites; they're the most strategically designed ones. Outlier builds [City] websites from this conversion-first perspective — and the measurable results consistently outperform design-led alternatives.`,
    ],
    introBodyAlt: [
      `Outlier's web design process for [City] businesses starts with business objectives, not aesthetic preferences. Before a single wireframe is created, we define your primary conversion goals — what actions do you need [City] visitors to take? — and design the entire site around achieving those actions as efficiently as possible. This conversion-first approach produces websites that consistently outperform template-based alternatives on the metrics that matter: enquiry rate, booking rate, and ultimately revenue.

Technical performance is a non-negotiable part of every [City] website we build. We target sub-2-second load times, green Core Web Vitals scores (which affect [City] search rankings), and flawless performance across all devices and screen sizes. For [City] businesses in [TopIndustry] and similar sectors where mobile users represent 60%+ of website visitors, a mobile-optimised experience isn't optional — it's the primary design consideration.

Every [City] website we build launches with a complete analytics and tracking stack: Google Analytics 4, Search Console, Tag Manager, and full conversion event tracking. This means from day one, you have the data to understand where [City] visitors come from, which pages convert, and which sources produce the highest-quality traffic. That data feeds every subsequent marketing decision — making your [City] website not just a front-end asset but a strategic intelligence platform.`,
      `A [City] website rebuild is one of the highest-leverage investments a business can make — but only if done right. Done wrong, a website redesign can tank [City] search rankings by destroying URL structures, losing backlink equity, or introducing technical issues that prevent Google from properly crawling the new site. We've rebuilt hundreds of [City] websites, and we protect SEO equity as a core part of every project: URL mapping, proper 301 redirects, and a pre-launch technical SEO audit that ensures the new site launches with its full ranking potential intact.

For [City] businesses in [Industries] and similar sectors, credibility signals matter enormously on the web. [City] consumers researching significant purchases or service relationships — hiring a contractor, choosing a healthcare provider, selecting a legal firm — make immediate credibility assessments based on website quality. We design [City] websites that communicate professionalism, expertise, and trustworthiness at every touchpoint: the visual design, the content quality, the placement of reviews and credentials, and the overall impression conveyed within the first few seconds of arrival.

Post-launch, we offer ongoing website management that keeps your [City] site fast, secure, and optimised as content, technology, and your business evolves. Most [City] businesses that invest in a strong initial website build significantly extend its value through proactive maintenance — security updates, performance monitoring, CRO testing, and content additions — rather than letting it degrade until the next full rebuild.`,
    ],
    whyVariants: [
      [
        "Because your [City] website is the conversion endpoint for every other marketing channel. SEO traffic, paid ad clicks, social media visitors, and email link clicks all land on your website — and if it doesn't convert them, every other marketing investment is partially wasted. A high-converting [City] website multiplies the ROI of the entire marketing stack.",
        "Because [City] consumers judge your business by your website before they contact you. In [TopIndustry] and similar sectors, a professional, fast, and credible website is the difference between a potential [City] customer reaching out and choosing a competitor instead. First impressions are made in milliseconds.",
        "Because a slow or poorly performing [City] website costs you rankings as well as conversions. Core Web Vitals are a confirmed Google ranking signal — and [City] sites with poor performance consistently underrank content-equivalent competitors with better technical execution.",
        "Because the gap between a website that converts and one that doesn't is usually fixable — it's not about budget, it's about strategic design. Most [City] business websites are losing 60–80% of their conversion potential to addressable issues: unclear CTAs, slow load times, poor mobile experience, and weak social proof.",
      ],
      [
        "Because Outlier builds [City] websites that are optimised for conversion from the first wireframe — not as an afterthought. Every design decision, from CTA placement to page structure to content hierarchy, is made with your [City] conversion objectives at the centre.",
        "Because technical performance matters for both [City] user experience and Google rankings. We build for green Core Web Vitals scores on every project — sub-2-second load times, stable layouts, responsive mobile performance — ensuring your [City] website is as fast as it is well-designed.",
        "Because a website rebuild done right protects and strengthens your [City] SEO equity. We handle URL mapping, 301 redirects, and technical SEO configuration on every rebuild — so the new site launches with its full ranking potential intact, not degraded.",
        "Because every [City] website we build launches with complete analytics and conversion tracking. From day one, you have the data to understand what's working and what needs optimisation — turning your [City] website into an intelligence asset, not just a marketing front-end.",
      ],
      [
        "Because [City]'s [TopIndustry] businesses and other professional categories compete for [City] clients who research extensively online before making contact. A website that projects expertise, communicates clearly, and provides the information [City] buyers need is a fundamental competitive requirement.",
        "Because a high-performing [City] website is a compounding asset. Unlike paid advertising that stops the moment you pause spend, a well-built, SEO-optimised [City] website continues generating traffic and leads for years — with no ongoing cost per visit.",
        "Because Outlier's web design process starts with your [City] business objectives, not a template. We design around conversion goals specific to your [City] market and customer base — producing a website that works strategically, not just aesthetically.",
        "Because for [City] businesses running SEO or paid media, website conversion rate is the most leveraged optimisation available. A 50% improvement in conversion rate doubles lead volume from the same traffic — with no additional media spend. Web design is the highest-leverage fix in most [City] marketing stacks.",
      ],
    ],
    cta: "Get a Free Website Consultation",
    ctaSecondary: "View Our Portfolio",
    relatedServices: [
      { label: "SEO Services", href: "/seo-services" },
      { label: "CRO", href: "/cro-service" },
      { label: "Google Ads", href: "/google-ads-management" },
      { label: "Content Marketing", href: "/content-marketing-service" },
    ],
  },

  "social-ads": {
    label: "Social Media Advertising",
    shortLabel: "Social Ads",
    icon: Share2,
    h1Template: "Social Media Advertising in [City], [Province]",
    taglineTemplate:
      "Reach your exact [City] audience on Meta, Instagram, TikTok, and LinkedIn. Ads that convert — not just impressions.",
    metaDescTemplate:
      "Social media advertising for [City] businesses. Outlier runs high-performing Meta, Instagram, TikTok, and LinkedIn campaigns that target your exact [City] customer and drive measurable results. Free audit.",
    introTemplate: `Social media advertising has transformed the way [City] businesses reach new customers. Unlike traditional media or even organic social, paid social gives you the ability to put your message directly in front of a precisely defined audience — the exact demographics, interests, behaviours, and geographic locations that match your ideal [City] customer — at exactly the moment you choose. When executed correctly, it is one of the most powerful and scalable customer acquisition channels available to any business competing in [City].

The challenge is that social media advertising has also become significantly more complex. Meta's algorithm, creative requirements, audience behaviour, and attribution models have all evolved dramatically over the past few years. Running social ads effectively in [City] today requires deep platform expertise, a rigorous testing methodology, and a creative operation capable of producing the volume and variety of content that modern social algorithms demand. The [City] businesses that get social advertising right treat it as a system — not a campaign — with audience strategy, creative development, bidding optimisation, and full-funnel architecture all working together.

At Outlier, we manage social media advertising across Meta (Facebook and Instagram), TikTok, LinkedIn, and YouTube for [City] businesses. Our approach is built around business outcomes — not impressions, reach, or engagement. Every campaign we run for a [City] client is structured to drive a specific, measurable result: lead form submissions, phone calls, website conversions, or purchases. We track every dollar of ad spend back to outcomes, and we optimise relentlessly — creative, audience, placement, bid strategy, landing page — until we've found the combination that delivers the strongest cost per acquisition in your category.

Creative is the single biggest lever in social advertising performance, and it's where most [City] businesses and agencies underinvest. In an era of sophisticated ad fatigue, winning social creatives don't look like ads — they look like native content. They stop the scroll. They communicate your value proposition in the first three seconds. They match the visual language of the platform and the expectations of the audience. Outlier's in-house creative team produces all ad creative for our [City] clients — static images, short-form video, carousels, story-format ads — testing systematically to identify the formats and messages that resonate most strongly with your specific audience.

Audience architecture is the strategic foundation of any successful social advertising campaign. We build [City]-specific audience structures that layer geographic targeting (city-level, postal code, neighbourhood, and radius targeting within your service area), demographic targeting (age, income, household type, life stage), interest and behaviour targeting (people in-market for your service, affinity audiences), custom audiences (retargeting your website visitors, CRM lists, video viewers), and lookalike audiences (reaching new [City] prospects who share the characteristics of your best existing customers). This layered approach allows us to reach new audiences cost-efficiently while maintaining relevance at every stage of the funnel.

Full-funnel social advertising is where the real efficiency gains emerge. Most [City] businesses running social ads are only running top-of-funnel awareness campaigns — reaching new audiences but not nurturing them through consideration and decision stages. We build complete social ad funnels: cold audience campaigns to generate awareness at the top, retargeting campaigns to re-engage warm audiences and drive conversions in the middle and lower funnel, and retention campaigns to drive repeat purchases and referrals from existing customers. This full-funnel approach maximises the return from every dollar of social ad spend and makes your [City] campaigns progressively more efficient over time.`,
    whyTemplate: [
      "Because [City]'s target customers are on social media — and social advertising lets you reach them with precision. Whether you're targeting [City] homeowners interested in renovation services, professionals looking for financial advice, or consumers actively researching your category, Meta and LinkedIn's targeting capabilities let you reach them specifically rather than broadcasting to a broad general audience.",
      "Because social advertising converts at scale in a way organic social cannot. Organic reach on social media platforms is minimal for most business accounts — typically 1–5% of followers see any given post. Paid social gives you controlled, measurable reach to exactly the [City] audience you want, at the volume needed to generate a consistent flow of qualified leads every month.",
      "Because creative-driven social advertising is a compounding learning system. Every campaign we run for a [City] client generates data: which creative performs best, which audiences convert at the lowest cost, which offers resonate most strongly. This data informs every subsequent campaign — meaning your [City] social advertising gets more efficient over time, not less.",
    ],
    included: [
      { title: "Audience Strategy & Segmentation", description: "We build a complete [City]-specific audience architecture: cold prospecting audiences, warm retargeting pools, custom CRM audiences, and lookalike expansions. Each layer is targeted to a different stage of the buying journey, ensuring you reach new [City] customers cost-efficiently while converting those already familiar with your brand." },
      { title: "Ad Creative Development (In-House)", description: "Our in-house creative team produces all ad formats your [City] campaigns require: static images, short-form video, carousels, story ads, and lead forms. We develop multiple creative variants per campaign and test systematically to identify top performers. No outsourcing, no stock-photo dependency — all creative is built for your brand." },
      { title: "Campaign Setup & Launch", description: "We build your full campaign architecture in Meta Ads Manager, LinkedIn Campaign Manager, or TikTok Ads — including campaign structure, ad sets, audience layers, bid strategies, conversion tracking, and pixel implementation. We handle every technical element so your [City] campaigns are set up for measurable success from day one." },
      { title: "Conversion Tracking & Attribution", description: "We implement full conversion tracking across your website, landing pages, and CRM — ensuring every lead, call, and purchase from your [City] social campaigns is accurately attributed. We use a combination of pixel events, server-side tracking, and UTM parameters to maintain accuracy in a privacy-first era." },
      { title: "Weekly Optimisation", description: "We optimise your [City] campaigns weekly: refreshing creative to prevent ad fatigue, adjusting audience targeting based on performance data, testing new offers and copy angles, and reallocating budget toward the audience-creative combinations producing the best cost per acquisition." },
      { title: "Monthly Reporting", description: "Monthly reports covering impressions, reach, clicks, CPM, CTR, conversions, cost per lead/acquisition, and ROAS — benchmarked against your [City] market targets. We translate every data point into a clear picture of what your investment is producing and what we'll do next to improve it." },
    ],
    process: [
      { step: "01", title: "Audit & Strategy", description: "We audit your existing social ad performance (if any), analyse your [City] target audience, and build a social advertising strategy: platform selection, funnel architecture, audience strategy, creative approach, and 90-day KPI targets." },
      { step: "02", title: "Creative Development", description: "Our creative team produces the first batch of ad creative for your [City] campaigns — multiple static and video variants across all relevant formats, developed to match the platform's native visual language and your brand positioning." },
      { step: "03", title: "Campaign Build & Launch", description: "We build the full campaign structure, configure audience segments, set up pixel and conversion tracking, and launch your [City] campaigns. Initial campaigns are structured for learning — designed to generate the data needed to optimise quickly." },
      { step: "04", title: "Optimise & Scale", description: "We analyse performance weekly, identify top-performing creative and audience combinations, pause underperformers, and scale what's working. New creative variants are tested continuously to prevent fatigue and maintain performance." },
      { step: "05", title: "Full Funnel Expansion", description: "Once prospecting campaigns are stable, we layer retargeting campaigns to convert warm [City] audiences, and build lookalike expansions to reach new prospects at scale. The full funnel compounds efficiency over time." },
    ],
    stats: [
      { n: "3.8×", l: "average ROAS across managed social ad accounts" },
      { n: "-44%", l: "avg. reduction in cost per lead after first 90 days" },
      { n: "30 days", l: "avg. time to first optimised results" },
    ],
    timeline: [
      { period: "Weeks 1–3", title: "Creative + Setup + Launch", desc: "Strategy finalised, ad creative developed, campaign structure built, tracking configured, and [City] campaigns launched. First data and initial optimisations begin within the first two weeks of live ads." },
      { period: "Month 2", title: "Optimisation + Creative Iteration", desc: "Performance data drives creative refresh, audience refinement, and bid strategy adjustments. Cost per acquisition improving as top-performing audience-creative combinations are identified and scaled." },
      { period: "Month 3+", title: "Scaling + Funnel Expansion", desc: "Top-performing prospecting campaigns scaled. Retargeting and lookalike layers added. Full funnel operational and compounding efficiency — each new creative test generates learning that makes future [City] campaigns more cost-effective." },
    ],
    faqTemplate: [
      { q: "Which social media platforms should my [City] business advertise on?", a: "Platform selection depends on your target audience and business type. For B2C businesses targeting local [City] consumers, Meta (Facebook and Instagram) is typically primary — offering the largest audience, the most sophisticated targeting, and the strongest lead generation tools. TikTok is essential if you're targeting under-35 demographics. LinkedIn is the primary platform for B2B campaigns targeting [City] professionals and business decision-makers. We recommend the right platform mix based on your specific audience and goals." },
      { q: "How much should my [City] business spend on social media advertising?", a: "We recommend a minimum of $1,500–$2,000/month in ad spend for [City] social campaigns to generate meaningful data for optimisation and sufficient lead volume. Higher-competition categories and broader geographic targets require larger budgets. We'll provide a budget recommendation based on your goals, category, and market during our initial strategy session." },
      { q: "How do you measure results from social media advertising in [City]?", a: "We track every conversion event that matters to your [City] business: form submissions, phone calls, landing page visits, purchases, and CRM entries. We use Meta Pixel, LinkedIn Insight Tag, and server-side event tracking to maintain attribution accuracy. Monthly reports show cost per lead, cost per acquisition, ROAS, and a complete revenue attribution picture." },
      { q: "How long does it take for social ads to work for a [City] business?", a: "Most [City] social advertising campaigns enter a learning phase during the first 2–4 weeks as the platform algorithms gather data on who is converting. Initial optimisations typically begin showing improvement in weeks 2–4. By month 2, most well-structured [City] campaigns are producing consistent, predictable lead flow. Full-funnel efficiency — with retargeting and lookalike layers operational — typically develops over 60–90 days." },
      { q: "Do you produce ad creative in-house for [City] clients?", a: "Yes — entirely. Outlier's in-house creative team produces all ad creative for [City] clients: static images, short-form video, carousels, story-format ads, and lead forms. We develop multiple creative variants per campaign and test systematically. You never need to supply creative — although if you have existing brand assets, photography, or video footage, we incorporate them into our creative development process." },
      { q: "How do iOS privacy changes affect social media advertising for [City] businesses?", a: "Apple's App Tracking Transparency framework has reduced the accuracy of pixel-based conversion tracking for iOS users, affecting Meta's ability to optimise toward purchase and lead events that happen on your website. For [City] clients, we address this through Meta's Conversions API (server-side event tracking that doesn't rely on the iOS browser), first-party data strategies, and broader audience targeting that relies less on individual user tracking. Our [City] campaigns maintain strong performance in the post-ATT environment through these technical adaptations." },
      { q: "What is a social media advertising funnel and how do you build one for a [City] business?", a: "A social advertising funnel mirrors the customer journey: top-of-funnel campaigns build awareness among cold [City] audiences who don't yet know you (brand awareness, video views, reach objectives); middle-funnel campaigns target warm audiences who've engaged with your brand (retargeting website visitors, video viewers, social engagers) with educational or comparison content; bottom-of-funnel campaigns target the warmest [City] prospects with direct conversion offers (leads, purchases, calls). Building all three layers ensures every dollar of your [City] social ad budget is working at the stage where it can generate the most value." },
      { q: "How do you use retargeting to convert [City] website visitors through social media ads?", a: "Retargeting works by placing a tracking pixel on your website and then serving ads specifically to [City] users who visited your site but didn't convert. We segment retargeting audiences by behaviour — people who viewed a specific service page, people who spent more than 60 seconds on site, people who started a form but didn't complete it — and serve each segment a tailored ad designed to address whatever prevented them from converting. For most [City] businesses, retargeting campaigns produce the lowest cost per lead of any paid channel." },
      { q: "What creative formats perform best for social ads targeting [City] audiences in 2025?", a: "Short-form video (15–30 seconds) consistently outperforms static images on Meta, TikTok, and Instagram Reels for most [City] consumer categories — particularly for brand awareness and engagement objectives. For conversion-focused campaigns, static images and carousels often outperform video by making the offer and CTA immediately visible without requiring the viewer to watch. For [City] B2B campaigns on LinkedIn, document ads and thought leadership posts tend to generate the highest quality engagement. We test formats systematically for every [City] client rather than assuming one size fits all." },
      { q: "How do you prevent social media ad fatigue for [City] campaigns?", a: "Ad fatigue occurs when your [City] target audience sees the same creative too many times, causing engagement rates to drop and CPMs to rise. We prevent it by monitoring frequency data weekly (if a [City] audience has seen an ad more than 2–3 times on average, we refresh it), maintaining an active creative pipeline so new variants are always ready to rotate in, using creative variety (mixing static, video, and carousel formats), and expanding lookalike audiences to reach fresh prospects when existing audiences become saturated." },
      { q: "What social ad spend budget does a [City] business need to see results?", a: "The minimum effective budget for [City] social ads varies by platform and objective. On Meta, we recommend a minimum of $1,000–$1,500/month for meaningful testing and optimisation — below this level, it's difficult to accumulate enough data to make smart bidding and targeting decisions. LinkedIn campaigns in [City] typically need higher minimum budgets ($1,500–$3,000/month) due to higher CPMs. TikTok can be tested effectively from $1,000/month. We build budget recommendations based on your [City] category's CPM benchmarks and the lead volume required to achieve your acquisition targets." },
      { q: "How does social advertising in [City] differ for B2B vs B2C businesses?", a: "[City]'s [Industries] sectors include both B2B and B2C businesses — and the social ad strategy differs significantly between them. B2C social ads in [City] focus on Meta and TikTok with demographic and interest targeting for consumer-facing offers, typically with shorter consideration cycles. B2B social ads in [City] focus on LinkedIn for [Industries] professional audiences, with longer nurture sequences and content-led approaches that account for multi-stakeholder buying decisions. We build B2C and B2B social programmes with appropriate platform, creative, and funnel architecture for each approach." },
      { q: "What is the best social media platform for [City] businesses in [TopIndustry]?", a: "For [City] businesses in [TopIndustry], platform selection depends on where your target customers spend their time and what kind of buying decision they're making. Consumer-facing [TopIndustry] businesses typically perform best on Meta (Facebook/Instagram) for demand generation and retargeting. Professional or B2B-oriented [TopIndustry] businesses often see stronger results on LinkedIn. We always recommend platform based on [City]-specific audience data and [TopIndustry] benchmarks — not on generic advice — and we're transparent about which platforms we don't recommend for specific [City] business types." },
    ],
    introHooks: [
      `Social media advertising has transformed the way [City] businesses reach new customers. Unlike traditional media or even organic social, paid social gives you the ability to put your message directly in front of a precisely defined audience — the exact demographics, interests, and behaviours that match your ideal [City] customer — at exactly the moment you choose. When executed correctly with the right creative and targeting, it is one of the most powerful and scalable customer acquisition channels available to any business competing in [City].`,
      `For [City] businesses in [Industries] and across the [Region] market, paid social is the demand-generation channel that reaches [City] buyers before they start searching. Google captures intent that already exists; social advertising creates it — building awareness among [City] consumers who match your ideal customer profile but haven't yet discovered your business. The most effective [City] digital marketing stacks combine both: social for demand creation, search for demand capture.`,
      `[City]'s [BusinessCount] businesses all compete for the same consumer attention across Meta, TikTok, LinkedIn, and other social platforms. The difference between [City] social ad campaigns that generate strong ROI and those that waste budget isn't primarily the spending level — it's the creative quality, the audience architecture, and the measurement rigour. Self-managed [City] social campaigns consistently underperform professionally managed ones by 50–200% on cost per lead, primarily because of these execution gaps.`,
      `The social advertising opportunity in [City]'s [Region] market is significant — and for businesses in [TopIndustry] and similar sectors, it's one of the most direct paths to building a sustainable lead pipeline. Meta's audience data covers [City]'s demographics with precision that enables hyper-targeted reach. TikTok's algorithm gives [City] businesses access to engaged younger audiences at competitive CPMs. LinkedIn provides direct access to [City]'s professional and B2B decision-maker base. The right platform, the right creative, and the right offer — that combination consistently produces scalable results.`,
    ],
    introBodyAlt: [
      `Outlier builds social ads programmes for [City] businesses around a full-funnel framework: awareness campaigns that introduce your brand to new [City] audiences, consideration campaigns that retarget warm prospects with more detailed content, and conversion campaigns that drive direct action from the highest-intent [City] audience segments. Each funnel stage requires different creative, different audience logic, and different optimisation strategies — which is why one-dimensional "boost posts" approaches consistently fail.

Creative is the primary performance driver in paid social — more than targeting, more than bidding strategy, more than platform selection. The ad that stops a [City] user's scroll and compels them to engage is the ad that produces strong campaign results. Our in-house creative team develops all ad content — static images, video, carousel, story formats — based on [City]-specific audience intelligence, competitive creative research, and your brand's unique positioning. We test multiple variants simultaneously and systematically scale what works.

For [City] businesses navigating post-iOS14 tracking changes, our paid social programmes use server-side conversion tracking (Meta Conversions API), CRM-integrated attribution, and first-party data strategies that maintain measurement accuracy in a privacy-first environment. [City] clients always have a clear picture of what their social advertising investment is producing — even in an environment where platform-reported attribution is imperfect.`,
      `The [City] businesses generating the strongest social advertising ROI have moved beyond simple interest-based targeting to data-driven audience strategies. We build [City] social ad campaigns around three audience tiers: cold prospecting (lookalike audiences built from actual [City] customer data), warm retargeting (website visitors, video viewers, social engagers), and CRM-based remarketing (previous customers, existing leads). Each tier gets creative and offers calibrated to its relationship with your brand — dramatically improving conversion rates at every funnel stage.

For [City]'s [Industries] businesses, the most effective paid social approach combines platform diversification with coordinated creative. We don't default to "run everything on Meta." We recommend the right mix of platforms based on your [City] target audience's actual behaviour: Meta for consumer-facing [City] businesses, LinkedIn for B2B [City] companies targeting decision-makers, TikTok where younger [City] demographics are the primary target. Multi-platform coordination ensures your [City] brand presence is consistent and reinforcing across every touchpoint.

Measurement for [City] social ads goes beyond CPM, CTR, and platform-reported conversions. We track the full customer journey from social ad impression to eventual [City] client acquisition — integrating social attribution with your CRM and website analytics to build a complete picture of social media's contribution to your [City] revenue. This level of attribution visibility allows intelligent scaling decisions: we increase investment in what's genuinely working and cut what isn't.`,
    ],
    whyVariants: [
      [
        "Because social ads reach [City] buyers before they're searching — creating demand rather than just capturing it. For [City] businesses in [TopIndustry] and similar sectors, reaching potential customers at the awareness stage gives you a positioning advantage that search advertising alone can't achieve.",
        "Because Meta's audience data covers [City]'s [Region] market with demographic precision that enables campaigns no other channel can match. Reaching [City] consumers by age, income, household status, interests, and behaviours — in a specific geographic radius — creates targeting precision that transforms marketing ROI.",
        "Because creative-led social advertising builds [City] brand equity that compounds over time. Repeated, relevant exposure to well-crafted social ads builds brand familiarity among [City] audiences — making all subsequent marketing touchpoints more effective and conversion rates across every channel higher.",
        "Because [City]'s [CompetitionLevel] search market is making social advertising increasingly important as an alternative demand-generation channel. As Google Ads CPCs rise, reaching [City] customers earlier in the buying journey — before they're searching — becomes more cost-effective.",
      ],
      [
        "Because social ad retargeting of [City] website visitors is consistently among the highest-ROAS campaigns available. Reaching [City] users who've already shown interest in your business — at a fraction of the CPC of search retargeting — is the most efficient path to converting warm [City] prospects.",
        "Because Outlier builds [City] social ads around full-funnel strategy — awareness, consideration, and conversion — not just boosted posts. A structured funnel approach consistently delivers 3–5× better cost per acquisition than single-objective campaigns.",
        "Because creative quality is the single biggest driver of social advertising performance — and Outlier's in-house creative team builds [City]-specific content that stops the scroll and drives action. Generic creative fails in competitive [City] social feeds; locally-informed, visually compelling creative converts.",
        "Because social ads and SEO work powerfully together for [City] businesses. Organic audiences retargeted through paid social convert at significantly higher rates than cold traffic — and the brand familiarity built through social advertising makes organic clicks from [City] searchers more likely to convert.",
      ],
      [
        "Because the [City] businesses generating the strongest social ads ROI aren't spending the most — they're executing the best. Creative quality, audience architecture, and conversion tracking separate profitable [City] social campaigns from wasteful ones.",
        "Because paid social gives [City] businesses precise control over who sees their marketing. In [TopIndustry] and similar sectors, reaching the specific [City] audience segments most likely to become customers — rather than broadcasting to everyone — is the foundation of efficient growth.",
        "Because a well-structured [City] social ads programme creates a compounding audience asset. As your [City] pixel data accumulates and your lookalike audiences mature, campaign performance consistently improves — producing better results from the same budget over time.",
        "Because for [City] businesses without strong organic search presence, social advertising is the most direct path to scalable lead generation while SEO builds in the background. Paid social fills the pipeline immediately; SEO reduces long-term acquisition costs. Together, they produce the optimal [City] growth trajectory.",
      ],
    ],
    cta: "Get a Free Social Ads Audit",
    ctaSecondary: "See Social Ads Results",
    relatedServices: [
      { label: "Google Ads", href: "/google-ads-management" },
      { label: "SEO Services", href: "/seo-services" },
      { label: "Digital Marketing", href: "/digital-marketing" },
      { label: "Web Design", href: "/custom-web-design-service" },
    ],
  },
};

/* ─── Utility ────────────────────────────────────────────────────── */

function toTitleCase(str: string) {
  return str
    .split("-")
    .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
    .join(" ");
}

/* ─── FAQ Accordion ──────────────────────────────────────────────── */

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border-b border-[#e5e2d9] last:border-0">
      <button
        className="w-full flex items-start justify-between gap-4 py-5 text-left group"
        onClick={() => setOpen(!open)}
      >
        <span className="font-bold text-[#0e0e0e] text-base leading-snug group-hover:text-primary transition-colors">{q}</span>
        <span className={`w-6 h-6 rounded-full border flex-shrink-0 mt-0.5 flex items-center justify-center transition-all ${open ? "bg-primary border-primary" : "border-[#e5e2d9]"}`}>
          {open ? <ChevronUp className="w-3.5 h-3.5 text-white" /> : <ChevronDown className="w-3.5 h-3.5 text-gray-400" />}
        </span>
      </button>
      {open && <p className="pb-5 text-gray-600 leading-relaxed text-[15px]">{a}</p>}
    </div>
  );
}

/* ─── Stat Card ──────────────────────────────────────────────────── */
function StatCard({ n, l, dark }: { n: string; l: string; dark?: boolean }) {
  return (
    <div className={`rounded-2xl p-6 border ${dark ? "bg-white/4 border-white/8" : "bg-white border-[#e5e2d9]"}`}>
      <div className={`text-3xl font-black mb-1 ${dark ? "text-white" : "text-[#0e0e0e]"}`}>{n}</div>
      <div className={`text-xs font-medium leading-snug ${dark ? "text-white/40" : "text-gray-500"}`}>{l}</div>
    </div>
  );
}

const TIER_LABELS: Record<string, string> = {
  premium: "Premium",
  major: "Major Market",
  standard: "Standard Market",
  emerging: "Emerging Market",
};

const TIER_COMPETITION: Record<string, { label: string; colour: string }> = {
  premium: { label: "Very High Competition", colour: "text-red-600 bg-red-50 border-red-200" },
  major: { label: "High Competition", colour: "text-orange-600 bg-orange-50 border-orange-200" },
  standard: { label: "Moderate Competition", colour: "text-yellow-700 bg-yellow-50 border-yellow-200" },
  emerging: { label: "Lower Competition — First-Mover Advantage", colour: "text-green-700 bg-green-50 border-green-200" },
};

/* ─── Main Page ──────────────────────────────────────────────────── */

export default function CityServicePage() {
  const params = useParams<{ city: string; service: string }>();
  const citySlug = params.city || "toronto";
  const serviceSlug = params.service || "seo-services";

  const rawCityName = CITIES[citySlug]?.name || toTitleCase(citySlug);
  const city = CITIES[citySlug] || getDefaultCityData(citySlug, rawCityName);
  const svc = SERVICES[serviceSlug] || SERVICES["seo-services"];

  const fill = (str: string) => {
    const industries2 = city.keyIndustries.slice(0, 2).join(" & ");
    const topIndustry = city.keyIndustries[0];
    const competitionLevel = ({ premium: "very high", major: "high", standard: "moderate", emerging: "lower" } as const)[city.marketTier];
    return str
      .replace(/\[City\]/g, city.name)
      .replace(/\[Province\]/g, city.province)
      .replace(/\[Industries\]/g, industries2)
      .replace(/\[TopIndustry\]/g, topIndustry)
      .replace(/\[BusinessCount\]/g, city.businessCount)
      .replace(/\[Region\]/g, city.region)
      .replace(/\[Service\]/g, svc.label)
      .replace(/\[ShortService\]/g, svc.shortLabel)
      .replace(/\[CompetitionLevel\]/g, competitionLevel);
  };

  const Icon = svc.icon;

  /* Tier-specific H1 angle suffix — makes each page's H1 factually distinct */
  const TIER_H1_SUFFIX: Record<string, string> = {
    premium:  `— Canada's Most Competitive Market`,
    major:    `— High-Growth ${city.region} Market`,
    standard: `— Establish Dominance Before Competition Grows`,
    emerging: `— First-Mover Advantage in ${city.name}`,
  };
  const tierH1Suffix = TIER_H1_SUFFIX[city.marketTier];

  /* Tier-specific meta description prefix */
  const TIER_META_PREFIX: Record<string, string> = {
    premium:  `Competing in Canada's toughest market? `,
    major:    `Growing fast in ${city.region}? `,
    standard: `Ready to establish dominant digital visibility in ${city.name}? `,
    emerging: `First-mover advantage is still available in ${city.name}. `,
  };
  const tierMetaPrefix = TIER_META_PREFIX[city.marketTier];

  /* Tier-specific timeline note injected into timeline section */
  const TIER_TIMELINE_NOTE: Record<string, string> = {
    premium:  `${city.name}'s premium market means top-3 positions require sustained execution over 12–24 months — but the revenue impact of ranking there is proportionally larger than any other Canadian market.`,
    major:    `As a major market, ${city.name}'s competitive intensity means results compound significantly from month 6 onward — businesses that commit to a 12-month programme consistently outperform those looking for quick wins.`,
    standard: `${city.name}'s standard market competition means strong results are achievable within 6–9 months for most categories. Businesses that start now have a meaningful timing advantage over those that wait.`,
    emerging: `${city.name}'s emerging market status means lower competition and faster ranking timelines than larger Ontario markets. Businesses investing in digital visibility now are establishing positions that will compound as the market grows.`,
  };
  const tierTimelineNote = TIER_TIMELINE_NOTE[city.marketTier];

  /* Tier-aware included section additions (appended to standard deliverables) */
  const TIER_INCLUDED_NOTE: Record<string, string> = {
    premium:  `Given ${city.name}'s premium competitive landscape, we also include competitor gap analysis and a dedicated authority-building programme designed to close the domain authority differential against entrenched market leaders.`,
    major:    `For ${city.name}'s growing market, we include a growth-velocity layer: identifying the emerging keyword clusters and content opportunities that will generate compounding returns as the market matures over the next 12–24 months.`,
    standard: `In ${city.name}'s market, we include a category dominance audit — identifying where you can establish the most defensible positions in local search before competition intensifies.`,
    emerging: `Given ${city.name}'s emerging market status, we include a first-mover strategy layer: claiming the highest-value positions before well-resourced competitors increase their investment in this market.`,
  };
  const tierIncludedNote = TIER_INCLUDED_NOTE[city.marketTier];

  /* Set page title + meta description for SEO */
  useSeo({
    title: `${fill(svc.h1Template)} ${tierH1Suffix} | Outlier`,
    description: `${tierMetaPrefix}${fill(svc.metaDescTemplate)}`,
    canonicalPath: `/${citySlug}/${serviceSlug}`,
  });

  /* Build introParagraphs with deterministic variation per city×service */
  const _baseParagraphs = fill(svc.introTemplate).split("\n\n");
  const _para0 = svc.introHooks?.length
    ? fill(hPick(citySlug + serviceSlug + "h", svc.introHooks))
    : _baseParagraphs[0];
  const _bodyBlock = svc.introBodyAlt?.length
    ? fill(hPick(citySlug + serviceSlug + "b", svc.introBodyAlt)).split("\n\n")
    : [_baseParagraphs[1], _baseParagraphs[2], _baseParagraphs[3]];
  const introParagraphs = [_para0, ..._bodyBlock, _baseParagraphs[4] ?? "", _baseParagraphs[5] ?? ""];

  /* Why points — hash-pick variant per position when pool provided */
  const whyPoints: string[] = svc.whyVariants
    ? svc.whyVariants.map((variants, i) => fill(hPick(citySlug + serviceSlug + "w" + i, variants)))
    : svc.whyTemplate.map((w) => fill(w));

  /* FAQ pool — pick 8 unique items deterministically */
  const pageFaqs = svc.faqTemplate.length > 8
    ? hPickN(citySlug + serviceSlug + "faq", svc.faqTemplate, 8)
    : svc.faqTemplate;
  const cityContextPara = `${city.name}'s business market has its own competitive character: ${city.marketBlurb.replace(/^[A-Z][a-z]+ is /, "").replace(/^[A-Z][a-z]+ has /, "").replace(/^[A-Z][a-z]+ serves /, "")} Understanding this local context is central to every ${svc.shortLabel} strategy we build for ${city.name} businesses — not a recycled template, but a programme shaped by the specific demand patterns, competitive dynamics, and search behaviour of your market.`;

  const neighbourhoodList = city.neighborhoodsOrAreas.split(",").map((n) => n.trim()).filter(Boolean);
  const tierCompetition = TIER_COMPETITION[city.marketTier];

  /* Related cities — same province first, up to 8 */
  const relatedCities = Object.entries(CITIES)
    .filter(([slug]) => slug !== citySlug)
    .sort(([, a], [, b]) => {
      if (a.province === city.province && b.province !== city.province) return -1;
      if (b.province === city.province && a.province !== city.province) return 1;
      return 0;
    })
    .slice(0, 8)
    .map(([slug, data]) => ({ slug, name: data.name, province: data.province }));

  /* All services for this city — used for cross-service internal links */
  const ALL_CITY_SERVICES = [
    { slug: "seo-services", label: "SEO Services" },
    { slug: "local-seo", label: "Local SEO" },
    { slug: "google-ads", label: "Google Ads" },
    { slug: "social-ads", label: "Social Media Ads" },
    { slug: "content-marketing", label: "Content Marketing" },
    { slug: "email-marketing", label: "Email Marketing" },
    { slug: "digital-marketing", label: "Digital Marketing" },
    { slug: "web-design", label: "Web Design" },
  ];
  const otherCityServices = ALL_CITY_SERVICES.filter((s) => s.slug !== serviceSlug);
  const bannerByService: Record<string, { title: string; body: string; primary: string; secondary: string }> = {
    "web-design": {
      title: `Built for ${city.name} brands that need a stronger online presence.`,
      body: "Custom design, fast performance, and a polished site experience that helps your business look credible, modern, and easy to trust.",
      primary: `View all ${city.name} services`,
      secondary: "Get a free audit",
    },
    "seo-services": {
      title: `Built for ${city.name} businesses that want better rankings.`,
      body: "Technical SEO, content, and authority-building tailored to your market — so you show up when local customers search.",
      primary: `View all ${city.name} services`,
      secondary: "Get a free audit",
    },
    "local-seo": {
      title: `Built for ${city.name} businesses that need local visibility.`,
      body: "Map-pack visibility, location pages, and local search strategy designed to bring nearby customers to you.",
      primary: `View all ${city.name} services`,
      secondary: "Get a free audit",
    },
    "google-ads": {
      title: `Built for ${city.name} businesses that want faster leads.`,
      body: "High-intent campaigns, better landing pages, and conversion tracking that turn ad spend into measurable growth.",
      primary: `View all ${city.name} services`,
      secondary: "Get a free audit",
    },
    "social-ads": {
      title: `Built for ${city.name} brands that want demand generation.`,
      body: "Paid social campaigns that build awareness, retarget visitors, and drive qualified traffic from the right audience.",
      primary: `View all ${city.name} services`,
      secondary: "Get a free audit",
    },
    "content-marketing": {
      title: `Built for ${city.name} businesses that want authority.`,
      body: "Thoughtful content strategy and SEO-friendly pages that build trust, rankings, and long-term organic growth.",
      primary: `View all ${city.name} services`,
      secondary: "Get a free audit",
    },
    "email-marketing": {
      title: `Built for ${city.name} businesses that want repeat revenue.`,
      body: "Automations and campaigns that keep your audience engaged and turn existing contacts into more sales.",
      primary: `View all ${city.name} services`,
      secondary: "Get a free audit",
    },
    "digital-marketing": {
      title: `Built for ${city.name} businesses that want integrated growth.`,
      body: "A full-funnel strategy that aligns SEO, ads, content, email, and site experience around one goal.",
      primary: `View all ${city.name} services`,
      secondary: "Get a free audit",
    },
  };
  const banner = bannerByService[serviceSlug] ?? {
    title: `Built for ${city.name} businesses that want stronger marketing results.`,
    body: "A tailored strategy built for your market, your audience, and your growth goals — not a generic template.",
    primary: `View all ${city.name} services`,
    secondary: "Get a free audit",
  };

  /* Example local search queries — generated dynamically */
  const shortKeyword = svc.shortLabel.toLowerCase();
  const exampleSearches = [
    `${shortKeyword} in ${city.name}`,
    `${city.name} ${shortKeyword} agency`,
    `best ${shortKeyword} ${city.name} ${city.province}`,
    `${shortKeyword} services ${city.name}`,
    `${city.name} ${shortKeyword} company`,
    neighbourhoodList[0] ? `${shortKeyword} ${neighbourhoodList[0].toLowerCase()}` : `top ${shortKeyword} ${city.name}`,
    neighbourhoodList[1] ? `${shortKeyword} ${neighbourhoodList[1].toLowerCase()}` : `affordable ${shortKeyword} ${city.name}`,
    `${svc.label.toLowerCase()} ${city.name}`,
  ];

  /* Build structured data */
  const schemaData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "name": "Outlier Digital Marketing",
        "url": "https://outliermarketing.ca",
        "description": fill(svc.metaDescTemplate),
        "areaServed": {
          "@type": "City",
          "name": city.name,
          "containedInPlace": { "@type": "State", "name": city.province, "addressCountry": "CA" },
        },
        "hasOfferCatalog": {
          "@type": "OfferCatalog",
          "name": svc.label,
          "itemListElement": [
            {
              "@type": "Offer",
              "itemOffered": {
                "@type": "Service",
                "name": fill(svc.h1Template),
                "description": fill(svc.metaDescTemplate),
              },
            },
          ],
        },
      },
      {
        "@type": "FAQPage",
        "mainEntity": pageFaqs.map((faq) => ({
          "@type": "Question",
          "name": fill(faq.q),
          "acceptedAnswer": { "@type": "Answer", "text": fill(faq.a) },
        })),
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://outliermarketing.ca/" },
          { "@type": "ListItem", "position": 2, "name": "Cities We Serve", "item": "https://outliermarketing.ca/cities" },
          { "@type": "ListItem", "position": 3, "name": city.name, "item": `https://outliermarketing.ca/${citySlug}/seo-services` },
          { "@type": "ListItem", "position": 4, "name": svc.label, "item": `https://outliermarketing.ca/${citySlug}/${serviceSlug}` },
        ],
      },
    ],
  };

  return (
    <div className="min-h-screen bg-[#f9f8f5]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }} />
      <Nav />

      {/* ═══ HERO ══════════════════════════════════════════════════════ */}
      <section className="relative bg-[#08090d] pt-28 pb-0 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "linear-gradient(#fff 1px,transparent 1px),linear-gradient(90deg,#fff 1px,transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />

        <div className="container mx-auto px-4 max-w-7xl relative z-10">
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-white/20 text-xs mb-8 flex-wrap">
            <Link href="/" className="hover:text-white/40 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/cities" className="hover:text-white/40 transition-colors">Canadian Cities</Link>
            <span>/</span>
            <Link href={`/${citySlug}/seo-services`} className="hover:text-white/40 transition-colors">{city.name}</Link>
            <span>/</span>
            <span className="text-white/35">{svc.label}</span>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start pb-20">
            {/* Left */}
            <div>
              <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 rounded-full px-4 py-1.5 mb-6">
                <MapPin className="w-3.5 h-3.5 text-primary" />
                <span className="text-[11px] font-black uppercase tracking-widest text-primary">
                  {city.name}, {city.province} · {city.region}
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-black text-white leading-[1.04] mb-4">
                {fill(svc.h1Template)}<span className="block text-2xl md:text-3xl text-primary/70 font-bold mt-2 leading-snug">{tierH1Suffix}</span>
              </h1>
              <p className="text-[1.15rem] text-primary font-bold mb-8 leading-snug">
                {fill(svc.taglineTemplate)}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white font-bold px-7 py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-[15px]"
                >
                  {svc.cta} <ArrowRight className="w-4 h-4" />
                </Link>
                <a
                  href="tel:+14165550199"
                  className="inline-flex items-center gap-2 border border-white/15 text-white font-semibold px-6 py-3.5 rounded-xl hover:border-white/30 hover:bg-white/4 transition-all text-[15px]"
                >
                  <Phone className="w-4 h-4" /> Call Us
                </a>
              </div>

              <div className="flex flex-wrap gap-2">
                {["Google Partner", "4.9★ Clutch Rated", "10+ Years in Market", "No Lock-in Contracts"].map((t) => (
                  <span key={t} className="text-[11px] font-bold text-white/35 border border-white/10 rounded-full px-3 py-1">
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Right — stats + city card */}
            <div className="space-y-3">
              {svc.stats.map((s) => (
                <div key={s.l} className="bg-white/4 border border-white/8 rounded-2xl p-5 flex items-center gap-5">
                  <div className="w-11 h-11 rounded-xl bg-primary/15 flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-3xl font-black text-white leading-none">{fill(s.n)}</div>
                    <div className="text-sm text-white/40 mt-0.5">{fill(s.l)}</div>
                  </div>
                </div>
              ))}

              {/* City economy card */}
              <div className="bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <Icon className="w-4 h-4 text-primary" />
                  <p className="text-[10px] font-black uppercase tracking-widest text-primary">{city.name} Economy</p>
                </div>
                <p className="text-white/60 text-sm leading-relaxed">{city.economyHighlights}</p>
                <div className="mt-4 pt-4 border-t border-white/10 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/25 mb-1.5">Population</p>
                    <p className="text-white font-black text-xl">{city.pop}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-white/25 mb-1.5">Businesses</p>
                    <p className="text-white font-black text-xl">{city.businessCount}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="h-12 bg-gradient-to-b from-transparent to-[#f9f8f5]" />
      </section>

      {/* ═══ MARKET CONTEXT + FULL INTRO (unique per city) ══════════════ */}
      <section className="py-20 bg-[#f9f8f5] border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-14 items-start">
            {/* Main text — all intro paragraphs with city context woven in */}
            <div className="lg:col-span-3">
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">
                The {city.name} {svc.shortLabel} Market
              </p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1] mb-7">
                {svc.shortLabel} in {city.name}:<br />
                <span className="text-primary">What sets this market apart.</span>
              </h2>
              <div className="space-y-5 text-gray-600 leading-relaxed text-[15.5px]">
                {/* Para 1 from service intro */}
                <p>{introParagraphs[0]}</p>
                {/* City-unique paragraph — derived from city.marketBlurb */}
                <p className="border-l-4 border-primary/30 pl-5 text-gray-700 italic">{cityContextPara}</p>
                {/* Paras 2–4 from service intro */}
                {introParagraphs[1] && <p>{introParagraphs[1]}</p>}
                {introParagraphs[2] && <p>{introParagraphs[2]}</p>}
                {introParagraphs[3] && <p>{introParagraphs[3]}</p>}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm">
                  Get a Free {city.name} {svc.shortLabel} Audit <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right sidebar — city intelligence */}
            <div className="lg:col-span-2 space-y-4">
              {/* Competition level */}
              <div className={`rounded-2xl p-5 border ${tierCompetition.colour}`}>
                <div className="flex items-center gap-2 mb-2">
                  <BarChart3 className="w-4 h-4" />
                  <p className="text-[10px] font-black uppercase tracking-widest">Competition Level</p>
                </div>
                <p className="font-black text-base mb-1">{tierCompetition.label}</p>
                <p className="text-xs opacity-75">{city.name} · {TIER_LABELS[city.marketTier]}</p>
              </div>

              {/* Competition note — unique per city */}
              <div className="bg-white border border-[#e5e2d9] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                    <TrendingUp className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Market Intelligence</p>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{city.competitionNote}</p>
              </div>

              {/* Local stats — unique per city */}
              <div className="bg-white border border-[#e5e2d9] rounded-2xl p-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">{city.name} Market Facts</p>
                <div className="space-y-3">
                  {city.localStats.map((stat, i) => (
                    <div key={i} className="flex gap-3">
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-[9px] font-black text-primary">{i + 1}</span>
                      </div>
                      <p className="text-xs text-gray-600 leading-relaxed">{stat}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key areas */}
              <div className="bg-white border border-[#e5e2d9] rounded-2xl p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-6 h-6 rounded-lg bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-3.5 h-3.5 text-primary" />
                  </div>
                  <p className="text-[10px] font-black uppercase tracking-widest text-gray-400">Key Areas We Target</p>
                </div>
                <div className="flex flex-wrap gap-1.5">
                  {neighbourhoodList.map((n) => (
                    <span key={n} className="text-xs bg-[#f9f8f5] border border-[#e5e2d9] rounded-full px-2.5 py-1 text-gray-600 font-medium">
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              {/* Outlier promise card */}
              <div className="bg-[#08090d] rounded-2xl p-6">
                <p className="text-white font-bold text-sm mb-2">Our {city.name} Promise</p>
                <p className="text-white/50 text-xs leading-relaxed mb-4">
                  Every strategy we build for {city.name} businesses is researched and written for {city.name} — not a template with your city name pasted in.
                </p>
                <Link href="/contact" className="inline-flex items-center gap-1.5 text-primary text-xs font-bold hover:underline">
                  Talk to a {city.name} specialist <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LOCAL SEARCH LANDSCAPE (pSEO-rich section) ════════════════ */}
      <section className="py-20 bg-white border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Local Search Landscape</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1] mb-6">
                What {city.name} customers<br />are searching for right now
              </h2>
              <p className="text-gray-600 leading-relaxed text-[15.5px] mb-5">
                {city.name}'s {city.businessCount} registered businesses compete for visibility across thousands of local search queries every day. Understanding the specific searches your {city.name} customers make — and structuring your {svc.shortLabel.toLowerCase()} strategy to capture them — is the difference between a programme that produces results and one that spends budget without return.
              </p>
              <p className="text-gray-600 leading-relaxed text-[15.5px] mb-8">
                The {city.name} searches that drive the highest business value for our clients are typically high-intent queries: "[service] in {city.name}," "[service] {city.name} Ontario," and neighbourhood-specific searches that indicate a buyer has already decided they need a service and are now choosing who to hire. Capturing these queries — and converting the clicks — is what our {svc.shortLabel} programmes are specifically built to do.
              </p>

              {/* Key industries */}
              <div className="bg-[#f9f8f5] border border-[#e5e2d9] rounded-2xl p-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">Key {city.name} Industries We Serve</p>
                <div className="flex flex-wrap gap-2">
                  {city.keyIndustries.map((ind) => (
                    <span key={ind} className="text-sm font-bold text-[#0e0e0e] bg-white border border-[#e5e2d9] rounded-full px-3.5 py-1.5">
                      {ind}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <div className="bg-[#f9f8f5] border border-[#e5e2d9] rounded-2xl p-6 mb-5">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">Example {city.name} Search Queries We Target</p>
                <div className="space-y-2">
                  {exampleSearches.map((q, i) => (
                    <div key={i} className="flex items-center gap-3 bg-white border border-[#e5e2d9] rounded-xl px-4 py-3">
                      <Search className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                      <span className="text-sm text-gray-700 font-medium">{q}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Extended content from intro paragraphs 4–5 */}
              {introParagraphs[4] && (
                <div className="bg-white border border-[#e5e2d9] rounded-2xl p-6">
                  <p className="text-sm text-gray-600 leading-relaxed">{introParagraphs[4]}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ WHY THIS SERVICE ══════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f8f5] border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-2xl mb-12">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Why it matters</p>
            <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1]">
              Why {city.name} businesses invest in {svc.shortLabel}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {whyPoints.map((why, i) => (
              <div key={i} className="relative bg-white border border-[#e5e2d9] rounded-2xl p-7 overflow-hidden">
                <div className="absolute top-4 right-5 text-[72px] font-black text-primary/5 leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-gray-700 leading-relaxed text-[15px] relative z-10">{why}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ WHAT'S INCLUDED ═══════════════════════════════════════════ */}
      <section className="py-20 border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div className="max-w-xl">
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">What's included</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1]">
                Every deliverable — for {city.name}
              </h2>
            </div>
            <p className="text-gray-500 text-sm max-w-sm">
              Scoped to your business. But here's what a full {svc.shortLabel.toLowerCase()} programme for a {city.name} business typically covers.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {svc.included.map((item) => (
              <div key={item.title} className="bg-white border border-[#e5e2d9] rounded-2xl p-7 flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <h3 className="font-bold text-[#0e0e0e] leading-snug text-[15px]">{fill(item.title)}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{fill(item.description)}</p>
              </div>
            ))}
            {/* Tier-specific added value card — unique per marketTier */}
            <div className="bg-primary/5 border border-primary/20 rounded-2xl p-7 flex flex-col gap-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <TrendingUp className="w-4 h-4 text-primary" />
                </div>
                <h3 className="font-bold text-[#0e0e0e] leading-snug text-[15px]">{TIER_LABELS[city.marketTier]} Strategy Layer</h3>
              </div>
              <p className="text-sm text-gray-600 leading-relaxed">{tierIncludedNote}</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FREE AUDIT CTA ════════════════════════════════════════════ */}
      <section className="py-20 bg-white border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Your {city.name} Opportunity</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1] mb-6">
                What's the {svc.shortLabel} opportunity<br />in {city.name}?
              </h2>
              <p className="text-gray-600 leading-relaxed text-[15.5px] mb-6">
                {city.name} is a <strong>{TIER_LABELS[city.marketTier]}</strong> for {svc.shortLabel.toLowerCase()} — {tierCompetition.label.toLowerCase()} across most categories. Understanding the specific competitive landscape in {city.name} is central to any engagement we scope.
              </p>
              <p className="text-gray-600 leading-relaxed text-[15.5px] mb-8">
                Every engagement with Outlier starts with a free audit. We assess your current position, analyse the {svc.shortLabel.toLowerCase()} competition in {city.name}, and give you a clear picture of the opportunity before any proposal is made. We scope each engagement individually — and we won't recommend a programme we can't deliver results with.
              </p>
              <div className="space-y-3">
                {[
                  { icon: BarChart3, title: "Market Competitiveness", desc: `${city.name}'s ${tierCompetition.label.toLowerCase()} means every strategy we build is calibrated to the specific work required to outperform entrenched competitors.` },
                  { icon: Target, title: "Custom Scope", desc: `Every engagement is scoped to your goals — we never pad proposals. You pay for what's required to achieve your specific objectives in the ${city.name} market.` },
                  { icon: TrendingUp, title: "ROI First", desc: "We won't recommend a programme we can't make profitable. Every engagement starts with a clear opportunity analysis based on your market, category, and starting position." },
                ].map(({ icon: IcComponent, title, desc }) => (
                  <div key={title} className="flex gap-4 items-start">
                    <div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <IcComponent className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-[#0e0e0e] text-sm mb-1">{title}</p>
                      <p className="text-xs text-gray-500 leading-relaxed">{desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="bg-[#08090d] rounded-2xl p-8">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-4">Free {city.name} {svc.shortLabel} Audit</p>
                <h3 className="text-2xl font-black text-white leading-[1.15] mb-4">
                  Know exactly what your {city.name} {svc.shortLabel.toLowerCase()} opportunity looks like — before you commit to anything.
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  We audit your current position, analyse your competition in {city.name}, and give you a clear picture of the traffic, leads, and growth available from {svc.shortLabel.toLowerCase()}. Then we scope an engagement that makes sense for your specific situation.
                </p>
                <Link href="/contact" className="flex items-center justify-center gap-2 bg-primary text-white font-bold px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-[15px] w-full">
                  Get Free {city.name} Audit <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Last intro paragraph — often the ROI / compounding case */}
              {introParagraphs[5] && (
                <div className="bg-[#f9f8f5] border border-[#e5e2d9] rounded-2xl p-7">
                  <p className="text-sm text-gray-600 leading-relaxed">{introParagraphs[5]}</p>
                </div>
              )}

              {/* Economy snapshot */}
              <div className="bg-white border border-[#e5e2d9] rounded-2xl p-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">{city.name} Economy & Industry</p>
                <p className="text-sm text-gray-600 leading-relaxed mb-4">{city.economyHighlights}</p>
                <div className="grid grid-cols-2 gap-3 text-center">
                  <div className="bg-[#f9f8f5] rounded-xl p-3">
                    <p className="font-black text-[#0e0e0e] text-lg">{city.pop}</p>
                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide mt-0.5">Population</p>
                  </div>
                  <div className="bg-[#f9f8f5] rounded-xl p-3">
                    <p className="font-black text-[#0e0e0e] text-lg">{city.businessCount}</p>
                    <p className="text-[10px] text-gray-400 font-medium uppercase tracking-wide mt-0.5">Businesses</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ PROCESS ═══════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#08090d] border-b border-white/8">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-xl mb-12">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Our process</p>
            <h2 className="text-3xl md:text-4xl font-black text-white leading-[1.1]">
              How we deliver {svc.label} in {city.name}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
            {svc.process.map((step, i) => (
              <div key={i} className="relative bg-white/4 border border-white/8 rounded-2xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-[11px] font-black text-primary bg-primary/15 rounded-full px-2.5 py-0.5">
                    {step.step}
                  </span>
                </div>
                <h3 className="font-bold text-white mb-2 text-[15px] leading-snug">{step.title}</h3>
                <p className="text-xs text-white/40 leading-relaxed">{fill(step.description)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ TIMELINE ══════════════════════════════════════════════════ */}
      <section className="py-20 bg-[#f9f8f5] border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            <div className="lg:col-span-2">
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Timeline</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1] mb-5">
                When will {svc.shortLabel} produce results in {city.name}?
              </h2>
              <p className="text-gray-600 leading-relaxed text-[15px] mb-4">
                Timeline varies by market competition and your starting position. As a <strong>{TIER_LABELS[city.marketTier]}</strong>, {city.name} has {tierCompetition.label.toLowerCase()} — which affects how quickly results materialise.
              </p>
              <p className="text-gray-600 leading-relaxed text-[15px]">
                The milestones below represent typical progression for a {city.name} business starting from scratch. Businesses with existing domain authority or partial optimisation often see faster initial results.
              </p>
              <div className="mt-4 bg-primary/5 border border-primary/20 rounded-xl p-4">
                <p className="text-sm text-gray-700 leading-relaxed">{tierTimelineNote}</p>
              </div>
              <div className="mt-6">
                <Link href="/contact" className="inline-flex items-center gap-2 bg-[#0e0e0e] text-white font-bold px-6 py-3 rounded-xl hover:bg-primary transition-colors text-sm">
                  Get a {city.name}-specific timeline <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-3 grid gap-4">
              {svc.timeline.map((milestone, i) => (
                <div key={i} className="bg-white border border-[#e5e2d9] rounded-2xl p-7 flex gap-6">
                  <div className="text-center flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-2">
                      <Clock className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-[10px] font-black text-primary uppercase tracking-wide">{String(i + 1).padStart(2, "0")}</span>
                  </div>
                  <div>
                    <p className="text-[11px] font-black uppercase tracking-widest text-gray-400 mb-1">{milestone.period}</p>
                    <h3 className="font-black text-[#0e0e0e] text-lg mb-2">{milestone.title}</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">{milestone.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ═══ LOCAL MARKET INTELLIGENCE ═════════════════════════════════ */}
      <section className="py-20 bg-white border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Local intelligence</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1] mb-6">
                The {city.name} {svc.shortLabel} landscape — what we know before we start
              </h2>
              <p className="text-gray-600 leading-relaxed text-[15.5px] mb-6">
                {city.marketBlurb}
              </p>
              <p className="text-gray-600 leading-relaxed text-[15.5px]">
                For {city.name} businesses investing in {svc.shortLabel.toLowerCase()}, this translates directly into strategy: {city.competitionNote.charAt(0).toLowerCase()}{city.competitionNote.slice(1)}
              </p>
            </div>

            <div className="space-y-4">
              <div className="bg-[#f9f8f5] border border-[#e5e2d9] rounded-2xl p-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-4">Market Snapshot — {city.name}</p>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Population</p>
                    <p className="text-xl font-black text-[#0e0e0e]">{city.pop}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Region</p>
                    <p className="text-xl font-black text-[#0e0e0e]">{city.region}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Registered Businesses</p>
                    <p className="text-xl font-black text-[#0e0e0e]">{city.businessCount}</p>
                  </div>
                  <div>
                    <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-1">Market Tier</p>
                    <p className="text-xl font-black text-[#0e0e0e]">{TIER_LABELS[city.marketTier]}</p>
                  </div>
                </div>
              </div>

              <div className="bg-[#f9f8f5] border border-[#e5e2d9] rounded-2xl p-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">{svc.shortLabel} Coverage Areas in {city.name}</p>
                <div className="flex flex-wrap gap-2">
                  {neighbourhoodList.map((n) => (
                    <span key={n} className="text-xs bg-white border border-[#e5e2d9] rounded-full px-3 py-1 text-gray-700 font-medium">
                      {n}
                    </span>
                  ))}
                </div>
              </div>

              <div className="bg-[#08090d] rounded-2xl p-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-primary/60 mb-3">Economy & Industry</p>
                <p className="text-white/60 text-sm leading-relaxed">{city.economyHighlights}</p>
                <div className="mt-4 pt-4 border-t border-white/10">
                  <Link href="/contact" className="inline-flex items-center gap-1.5 text-primary text-xs font-bold hover:underline">
                    Get {city.name}-specific strategy <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ SOCIAL PROOF ══════════════════════════════════════════════ */}
      <section className="py-20 border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-14">
            {[
              { icon: Users, n: "200+", l: "Ontario businesses grown" },
              { icon: TrendingUp, n: "10yr+", l: "Active in the market" },
              { icon: Zap, n: "30 days", l: "To first measurable results" },
              { icon: BarChart3, n: "93%", l: "Client retention after year 1" },
            ].map((s) => (
              <div key={s.l} className="bg-white border border-[#e5e2d9] rounded-2xl p-5 text-center">
                <s.icon className="w-5 h-5 text-primary mx-auto mb-3" />
                <div className="text-2xl font-black text-[#0e0e0e]">{s.n}</div>
                <div className="text-xs text-gray-500 mt-0.5">{s.l}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            <div className="space-y-5">
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-5">What our clients say</p>
              {[
                {
                  quote: `"Outlier's ${svc.shortLabel.toLowerCase()} strategy completely transformed our online visibility in ${city.name}. We went from page 4 to position 1 within 7 months. The team is responsive, data-driven, and genuinely invested in our growth."`,
                  name: "Michael K.", role: `Business Owner, ${city.name}`,
                },
                {
                  quote: `"We'd worked with two agencies before Outlier — neither could explain what they were doing or show measurable results. Outlier's reporting is transparent and the results speak for themselves."`,
                  name: "Sarah L.", role: `Marketing Director, ${city.name}`,
                },
              ].map((t) => (
                <div key={t.name} className="bg-[#f9f8f5] border border-[#e5e2d9] rounded-2xl p-7">
                  <div className="flex mb-4">
                    {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" />)}
                  </div>
                  <p className="text-gray-700 text-[15px] leading-relaxed mb-5 italic">{t.quote}</p>
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-full bg-primary/15 flex items-center justify-center text-primary font-black text-xs">
                      {t.name.split(" ").map((n) => n[0]).join("")}
                    </div>
                    <div>
                      <div className="font-bold text-[#0e0e0e] text-sm">{t.name}</div>
                      <div className="text-gray-400 text-xs">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#08090d] rounded-2xl p-10 flex flex-col justify-between">
              <div>
                <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-4">Ready to win in {city.name}?</p>
                <h3 className="text-3xl font-black text-white leading-[1.1] mb-5">
                  A straight conversation about your {city.name} market.
                </h3>
                <p className="text-white/50 text-[15px] leading-relaxed mb-8">
                  30-minute strategy call. No templates, no sales pitch — just a specific assessment of your {city.name} {svc.shortLabel.toLowerCase()} opportunity and what it would take to capitalise on it.
                </p>
              </div>
              <div className="space-y-3">
                <Link href="/contact" className="flex items-center justify-center gap-2 bg-primary text-white font-bold px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-[15px] w-full">
                  Book Free Strategy Call <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="tel:+14165550199" className="flex items-center justify-center gap-2 border border-white/15 text-white font-semibold px-6 py-3.5 rounded-xl hover:border-white/30 hover:bg-white/4 transition-all text-[15px] w-full">
                  <Phone className="w-4 h-4" /> Call Our Team
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ FAQ ═══════════════════════════════════════════════════════ */}
      <section className="py-20 bg-white border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-1">
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">FAQ</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#0e0e0e] leading-[1.1] mb-4">
                Common questions about {svc.shortLabel} in {city.name}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                Can't find your answer? Speak to one of our {city.name} {svc.shortLabel} specialists.
              </p>
              <Link href="/contact" className="inline-flex items-center gap-2 border border-[#e5e2d9] text-[#0e0e0e] font-bold px-5 py-2.5 rounded-xl text-sm hover:border-primary hover:text-primary transition-colors">
                Ask a Question <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="lg:col-span-2">
              <div className="divide-y divide-[#e5e2d9]">
                {pageFaqs.map((faq) => (
                  <FAQItem key={faq.q} q={fill(faq.q)} a={fill(faq.a)} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ OTHER CITY SERVICES + CTA ══════════════════════════════════ */}
      <section className="py-20 bg-[#f9f8f5] border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">

          {/* Other services for this exact city */}
          <div className="mb-16">
            <div className="max-w-2xl mb-8">
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">{city.name} Services</p>
              <h2 className="text-2xl md:text-3xl font-black text-[#0e0e0e] leading-[1.1]">
                Other services we offer in {city.name}
              </h2>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
              {otherCityServices.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${citySlug}/${s.slug}`}
                  className="bg-white border border-[#e5e2d9] rounded-xl p-4 hover:border-primary/40 hover:shadow-sm transition-all group flex items-center justify-between"
                >
                  <div>
                    <p className="font-bold text-[#0e0e0e] text-sm">{s.label}</p>
                    <p className="text-[11px] text-gray-400 mt-0.5">{city.name}</p>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-primary transition-colors flex-shrink-0" />
                </Link>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ═══ RELATED SERVICES + BOTTOM CTA ════════════════════════════ */}
      <section className="py-20 border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-14">
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Related services</p>
              <h2 className="text-2xl font-black text-[#0e0e0e] mb-6">
                More ways we grow {city.name} businesses
              </h2>
              <div className="grid grid-cols-2 gap-3">
                {svc.relatedServices.map((rs) => (
                  <Link
                    key={rs.href}
                    href={rs.href}
                    className="bg-white border border-[#e5e2d9] rounded-xl p-5 hover:border-primary/40 hover:shadow-sm transition-all group flex items-center justify-between"
                  >
                    <span className="font-bold text-[#0e0e0e] text-sm">{rs.label}</span>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-primary transition-colors flex-shrink-0" />
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-[#09111f] p-8 text-white shadow-[0_20px_60px_rgba(0,0,0,0.22)]">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(37,99,235,0.35),transparent_42%),radial-gradient(circle_at_bottom_left,rgba(59,130,246,0.24),transparent_38%)]" />
                <div className="relative">
                  <p className="text-[11px] font-black uppercase tracking-[0.28em] text-blue-300/90 mb-3">
                    {city.name}, {city.province}
                  </p>
                  <h2 className="text-3xl font-black leading-[1.05] mb-4">
                    {banner.title}
                  </h2>
                  <p className="text-white/70 text-sm leading-relaxed mb-6 max-w-md">
                    {banner.body}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <Link href={`/${citySlug}`} className="inline-flex items-center gap-2 rounded-xl bg-white text-[#09111f] font-bold px-5 py-3 text-sm hover:bg-white/90 transition-colors">
                      {banner.primary} <ArrowRight className="w-4 h-4" />
                    </Link>
                    <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-5 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors">
                      {banner.secondary} <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
