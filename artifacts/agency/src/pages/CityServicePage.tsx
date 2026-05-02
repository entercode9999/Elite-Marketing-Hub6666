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
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

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

/* ─── Pricing & Timeline types ───────────────────────────────────── */

interface PricingTier {
  range: string;
  context: string;
}

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
  whyTemplate: string[];
  included: { title: string; description: string }[];
  process: { step: string; title: string; description: string }[];
  stats: { n: string; l: string }[];
  faqTemplate: { q: string; a: string }[];
  pricingTiers: Record<string, PricingTier>;
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
    h1Template: "SEO Services in [City], Ontario",
    taglineTemplate: "Rank higher. Get found. Grow faster. Outlier is [City]'s results-driven SEO agency.",
    metaDescTemplate:
      "Professional SEO services in [City], Ontario. Outlier helps [City] businesses rank on page 1 of Google and drive compounding organic growth. Get a free SEO audit today.",
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
    pricingTiers: {
      premium: {
        range: "$2,500 – $9,500+/mo",
        context: "Toronto's search landscape is North America-level competitive. Premium budgets allow the content output, link acquisition velocity, and technical depth required to compete on page 1 against national brands and well-funded local operators.",
      },
      major: {
        range: "$1,800 – $6,500/mo",
        context: "Major Ontario markets require consistent, sustained execution to build ranking authority over time. This budget range allows meaningful content production, active link building, and full technical maintenance each month.",
      },
      standard: {
        range: "$1,500 – $4,000/mo",
        context: "Mid-size Ontario markets offer excellent SEO ROI — less competition, more achievable first-page positions, and faster results. A focused budget here often outperforms a larger budget in a tier-1 market.",
      },
      emerging: {
        range: "$1,200 – $2,800/mo",
        context: "Emerging markets provide a genuine first-mover advantage. Businesses that invest in SEO now — before the local market becomes saturated — establish positions that compound in value as the city grows.",
      },
    },
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
        q: "How much does SEO cost for a [City] business?",
        a: "SEO investment for [City] businesses typically ranges from $1,500/month for local-focused strategies to $5,000–$15,000+/month for competitive industries or province-wide ambitions. The right budget depends on your competitive landscape, goals, and timeline. We provide a specific recommendation after your free audit — and we won't recommend a scope we can't deliver results with.",
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
    h1Template: "Local SEO Services in [City], Ontario",
    taglineTemplate:
      "Map pack position 1–3 for [City] searches. More calls. More walk-ins. More booked appointments.",
    metaDescTemplate:
      "Local SEO services in [City], Ontario. Outlier gets [City] businesses into the Google Map pack and ranks them for local service searches. Free local SEO audit available.",
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
    pricingTiers: {
      premium: {
        range: "$2,000 – $5,500/mo",
        context: "Toronto map pack competition is intense across almost every service category. Success requires active GBP management, review velocity programmes, and content production at a scale that matches the competition.",
      },
      major: {
        range: "$1,200 – $3,500/mo",
        context: "Major Ontario cities have well-established local search competition in high-demand categories. A comprehensive GBP management and citation programme at this level produces measurable map pack improvements within 60–90 days.",
      },
      standard: {
        range: "$900 – $2,500/mo",
        context: "Mid-size Ontario markets offer excellent ROI for local SEO investment. Map pack positions in categories like dental, legal, and home services are highly achievable at this investment level.",
      },
      emerging: {
        range: "$700 – $2,000/mo",
        context: "Emerging markets often have underserved map pack positions — making it faster and more affordable to reach and hold a top 3 position than in larger cities.",
      },
    },
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
    h1Template: "Google Ads Management in [City], Ontario",
    taglineTemplate:
      "Profitable Google Ads campaigns for [City] businesses. Managed by certified Google Partners — not algorithmic autopilot.",
    metaDescTemplate:
      "Google Ads management for [City] businesses. Outlier builds and manages profitable Google Search, Local Service Ads, and Performance Max campaigns. Free PPC audit available.",
    introTemplate: `Google Ads is the fastest way for a [City] business to get in front of buyers who are actively searching for what you offer — right now, at the exact moment of purchase intent. Done right, Google Ads delivers a measurable, predictable return on every dollar you invest, with full attribution from click to conversion. Done wrong — which is how most [City] businesses run their Google Ads accounts — it's an expensive way to fund your competitors' growth. The average self-managed Google Ads account wastes 50–60% of its budget on irrelevant clicks, wrong match types, poor landing page alignment, and automated bidding strategies that have insufficient conversion data to work correctly.

Outlier manages Google Ads for [City] businesses with the same rigour we apply to SEO: every campaign is custom-built for your specific goals and competitive landscape, every dollar is tracked from click to conversion, and every week we're actively optimising to improve ROAS and reduce cost per acquisition. We are a certified Google Partner agency, and our specialists manage significant monthly spend across industries including healthcare, home services, legal, professional services, ecommerce, and real estate in [City] and across Ontario. Being a Google Partner means we have direct access to Google's support team, advance notice of product changes, and training that keeps us ahead of the market.

What sets our approach apart is our obsession with the full funnel. Most agencies optimise for clicks. We optimise for revenue. That means building landing pages that convert the traffic we send, setting up conversion tracking that captures real business outcomes (not just website visits), and structuring campaigns around the specific customer journeys of [City] buyers in your category. The result is a Google Ads account that delivers genuine business growth — not inflated click counts. Our [City] clients see an average 42% reduction in cost per acquisition within 90 days of taking over a previously self-managed or agency-managed account.

The [City] Google Ads market has its own competitive characteristics. CPCs vary dramatically by industry — legal and financial keywords in [City] can cost $15–$80 per click, while local service businesses in less competitive categories may pay $2–$8 per click. Understanding these cost dynamics, and structuring campaigns to get maximum value from every click, is what separates an agency that simply runs ads from one that engineers profitable customer acquisition systems. We provide a full CPC landscape analysis during your initial audit so you know exactly what it will cost to compete profitably in your [City] category.

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
    pricingTiers: {
      premium: {
        range: "$2,000 – $5,000/mo management + $3,000 – $30,000+/mo ad spend",
        context: "Toronto CPCs are among the highest in Canada for competitive service categories. Sufficient ad spend is required to generate statistically significant data for optimisation, and management fees reflect the complexity of high-spend account management.",
      },
      major: {
        range: "$1,500 – $3,500/mo management + $2,000 – $20,000/mo ad spend",
        context: "Major Ontario markets have moderate-to-high CPCs. A well-structured account at this budget level can produce strong lead volume in most service categories.",
      },
      standard: {
        range: "$1,000 – $2,500/mo management + $1,500 – $12,000/mo ad spend",
        context: "Mid-size Ontario markets often have lower CPCs, meaning ad spend goes further. This is an excellent investment range for local service businesses looking for predictable lead flow.",
      },
      emerging: {
        range: "$800 – $2,000/mo management + $1,000 – $8,000/mo ad spend",
        context: "Smaller markets have the lowest CPCs, meaning the cost per lead is often very attractive. Google Ads in these markets can be highly profitable with modest ad spend.",
      },
    },
    timeline: [
      { period: "Week 1–2", title: "Build & Launch", desc: "Account structure built, conversion tracking live, ad copy written, campaigns launched. First data begins flowing immediately." },
      { period: "Weeks 2–6", title: "Learning + Initial Optimisation", desc: "Google's algorithm learns from conversion data. We optimise negatives, bids, and ad copy based on initial performance. CPA typically decreases through this period." },
      { period: "Month 2–3+", title: "Scaled, Profitable Performance", desc: "With learning phase complete, ROAS improves significantly. We scale winning campaigns and expand keyword coverage. Most clients see 30–50% CPA reduction by month 3." },
    ],
    faqTemplate: [
      { q: "How much should a [City] business spend on Google Ads?", a: "There's no universal answer — it depends on your industry's cost-per-click in [City], your conversion rate, and your target CPA. A local service business in [City] might start seeing profitable results at $1,500–$3,000/month in ad spend. More competitive categories like legal or home services may require $5,000–$15,000+/month to run meaningful campaigns. We provide a budget recommendation based on your specific goals and industry after reviewing your account." },
      { q: "How quickly will Google Ads produce results for my [City] business?", a: "Properly set up Google Ads campaigns typically start delivering leads within the first 1–2 weeks. The first 30–60 days are a 'learning phase' where we optimise based on real data — ROAS and CPA tend to improve significantly in months 2 and 3 as we refine the account. Unlike SEO, Google Ads can produce same-week results for [City] businesses that need immediate lead flow." },
      { q: "What types of Google Ads campaigns do you run for [City] businesses?", a: "We run Google Search campaigns (text ads for high-intent keyword searches), Local Service Ads (for eligible [City] service businesses — these are the 'Google Guaranteed' listings), Performance Max campaigns, Google Shopping campaigns for ecommerce businesses, and YouTube and Display campaigns for brand awareness and retargeting. We recommend the right mix based on your business type and goals." },
      { q: "Can you fix a Google Ads account that hasn't been performing?", a: "Yes — account rescue is a significant part of our work. We see the same problems consistently: broad match keywords without negatives, no conversion tracking, campaigns competing against each other, poor landing page alignment, and automated bidding strategies with insufficient conversion data. We diagnose every issue and rebuild what needs to be rebuilt." },
      { q: "Do you manage Google Local Service Ads for [City] businesses?", a: "Yes. Local Service Ads (Google Guaranteed) are available for eligible [City] service businesses — contractors, home services, legal, healthcare, and others. LSAs appear above regular Google Ads and charge per verified lead rather than per click, making them extremely cost-effective for qualifying businesses. We handle setup, verification, and ongoing management." },
      { q: "What's a good ROAS target for [City] Google Ads campaigns?", a: "ROAS targets vary by industry and business model. For service businesses in [City], a 3–5× ROAS (every $1 spent returns $3–$5 in revenue) is a common target. For ecommerce, 4–8× is more typical depending on margins. We set ROAS and CPA targets based on your gross margin and business economics at the start of every engagement — not arbitrary benchmarks." },
    ],
    cta: "Get a Free Google Ads Audit",
    ctaSecondary: "See PPC Results",
    relatedServices: [
      { label: "Local Service Ads", href: "/local-service-ads" },
      { label: "Paid Social", href: "/social-media-advertising" },
      { label: "SEO Services", href: "/seo-services" },
      { label: "Landing Page Design", href: "/landing-page-design" },
    ],
  },

  "paid-social": {
    label: "Paid Social Advertising",
    shortLabel: "Paid Social",
    icon: Share2,
    h1Template: "Paid Social Media Advertising in [City], Ontario",
    taglineTemplate:
      "Meta, TikTok & LinkedIn ads for [City] businesses. Audience-first campaigns built to convert, not just reach.",
    metaDescTemplate:
      "Paid social media advertising in [City], Ontario. Outlier manages Meta, TikTok, and LinkedIn campaigns that target [City] audiences and drive real business results. Free social ads audit.",
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
    pricingTiers: {
      premium: {
        range: "$1,800 – $4,500/mo management + $2,000 – $20,000+/mo ad spend",
        context: "Toronto paid social is competitive across most consumer categories. Strong creative output and audience diversity are essential to compete effectively in this market.",
      },
      major: {
        range: "$1,200 – $3,500/mo management + $1,500 – $12,000/mo ad spend",
        context: "Major Ontario markets respond well to well-targeted paid social. Audience segmentation and creative quality are the primary performance levers in these markets.",
      },
      standard: {
        range: "$900 – $2,500/mo management + $1,000 – $8,000/mo ad spend",
        context: "Mid-size Ontario markets offer favourable CPMs and CPCs — your ad spend goes further, and brand awareness can be built more cost-effectively than in Toronto.",
      },
      emerging: {
        range: "$700 – $2,000/mo management + $800 – $5,000/mo ad spend",
        context: "Smaller Ontario markets often have very low CPMs on social platforms, making brand building and lead generation extremely cost-efficient for well-targeted campaigns.",
      },
    },
    timeline: [
      { period: "Week 1–2", title: "Creative Production + Launch", desc: "Audience research complete, creative assets produced, campaigns launched with multiple variants. Pixel data begins accumulating immediately." },
      { period: "Weeks 2–6", title: "Creative Testing + First Winners", desc: "Top-performing audience and creative combinations identified. Budget shifted toward winners. Initial CPA data informing optimisation decisions." },
      { period: "Month 2–3+", title: "Scaled, Optimised Performance", desc: "Creative refresh cycle underway, proven audiences scaling, ROAS improving consistently. Most clients see 30–40% CPA reduction vs. launch performance by month 3." },
    ],
    faqTemplate: [
      { q: "Which social platforms should my [City] business advertise on?", a: "Platform selection depends on your business type and target customer. Consumer-facing businesses in [City] — retail, healthcare, home services, food — typically perform best on Meta (Facebook and Instagram). B2B businesses should start with LinkedIn. Businesses targeting 18–35 year olds with visual products or services should test TikTok. We recommend the right mix based on your goals and customer profile — not what's trendy." },
      { q: "How much should I spend on paid social in [City]?", a: "Most [City] businesses see meaningful results starting at $1,000–$2,000/month in ad spend. This is enough to test multiple audiences and creative combinations and identify what works. Scaling follows once winning combinations are identified — we don't recommend increasing budgets before the account data supports it." },
      { q: "How do you create the ad creative for [City] campaigns?", a: "Our in-house creative team produces all ad content — static images, video, carousel, and story formats. We don't rely on client-provided content or outsource to freelancers. Creative is developed based on your brand, your offer, and the specific behaviours and preferences of your [City] target audience. We produce multiple variants and let performance data determine winners." },
      { q: "How is paid social different from Google Ads for [City] businesses?", a: "Google Ads captures demand — reaching [City] buyers who are actively searching for what you offer. Paid social creates demand — reaching [City] buyers who match your ideal customer profile before they're searching. Both are valuable, but they work at different stages of the funnel. Many [City] businesses that combine both see significantly lower blended CAC than using either channel alone." },
      { q: "Can you run paid social for local [City] service businesses?", a: "Yes — this is a very common use case. A [City] dental practice running Instagram ads targeting local adults within a 5km radius, a home renovation company reaching homeowners in specific [City] postal codes, or a fitness studio promoting a new class to health-interested residents nearby — these are all campaigns we run regularly and produce strong results with." },
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
    h1Template: "Content Marketing Services in [City], Ontario",
    taglineTemplate:
      "Build topical authority. Attract [City] buyers. Turn content into your best-performing sales channel.",
    metaDescTemplate:
      "Content marketing services in [City], Ontario. Outlier builds content strategies that rank on Google, attract qualified [City] buyers, and compound in value month over month. Free content audit.",
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
    pricingTiers: {
      premium: {
        range: "$3,000 – $10,000+/mo",
        context: "Toronto content marketing requires high-volume, high-quality production to compete against well-established content programmes. Investment at this level supports 8–16 content assets per month plus distribution and link acquisition.",
      },
      major: {
        range: "$2,000 – $7,000/mo",
        context: "Major Ontario markets require consistent, quality content production to build topical authority. This range supports 4–10 content assets per month with full SEO optimisation and distribution.",
      },
      standard: {
        range: "$1,500 – $4,500/mo",
        context: "Mid-size Ontario markets often have lower content competition, meaning quality content can rank relatively quickly. This budget level supports 3–6 content assets per month with full optimisation.",
      },
      emerging: {
        range: "$1,200 – $3,000/mo",
        context: "Emerging markets often have significant content gaps — meaning even a modest content programme can establish first-page rankings across multiple keyword clusters relatively quickly.",
      },
    },
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
    ],
    cta: "Get a Free Content Strategy Session",
    ctaSecondary: "See Content Results",
    relatedServices: [
      { label: "SEO Services", href: "/seo-services" },
      { label: "Paid Social", href: "/social-media-advertising" },
      { label: "Email Marketing", href: "/email-marketing-service" },
      { label: "Web Design", href: "/web-design-service" },
    ],
  },

  "email-marketing": {
    label: "Email Marketing",
    shortLabel: "Email Marketing",
    icon: Mail,
    h1Template: "Email Marketing Services in [City], Ontario",
    taglineTemplate:
      "Turn your [City] subscriber list into a revenue engine. Automated sequences. Campaigns that convert.",
    metaDescTemplate:
      "Email marketing services in [City], Ontario. Outlier builds automated email sequences, campaigns, and nurture programmes that convert [City] leads into paying customers. Free email audit.",
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
    pricingTiers: {
      premium: {
        range: "$1,500 – $5,000/mo",
        context: "Toronto businesses with large lists and complex customer journeys benefit from premium email management: advanced segmentation, high-volume campaign sends, and sophisticated automation architecture.",
      },
      major: {
        range: "$1,200 – $3,500/mo",
        context: "Major Ontario market businesses benefit from comprehensive email management including full automation build-out, regular campaign execution, and ongoing optimisation.",
      },
      standard: {
        range: "$900 – $2,500/mo",
        context: "Mid-size Ontario market businesses can achieve excellent email marketing results at this investment level — full automation setup, regular campaigns, and active list growth strategy.",
      },
      emerging: {
        range: "$700 – $1,800/mo",
        context: "Even with a smaller list, a well-executed email programme can produce outsized revenue for [City] businesses. We scale the programme as your list grows.",
      },
    },
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
    ],
    cta: "Get a Free Email Marketing Audit",
    ctaSecondary: "See Email Results",
    relatedServices: [
      { label: "Content Marketing", href: "/content-marketing-service" },
      { label: "Paid Social", href: "/social-media-advertising" },
      { label: "Google Ads", href: "/google-ads-management" },
      { label: "SEO Services", href: "/seo-services" },
    ],
  },

  "digital-marketing": {
    label: "Digital Marketing",
    shortLabel: "Digital Marketing",
    icon: BarChart3,
    h1Template: "Digital Marketing Agency in [City], Ontario",
    taglineTemplate:
      "Full-channel digital marketing for [City] businesses that want to dominate their market.",
    metaDescTemplate:
      "Outlier is a full-service digital marketing agency serving [City], Ontario. SEO, Google Ads, social media, email, and content — one team, one strategy. Get a free consultation.",
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
    pricingTiers: {
      premium: {
        range: "$5,000 – $20,000+/mo",
        context: "Full-channel digital marketing in Toronto requires significant investment to be genuinely competitive across SEO, paid search, paid social, and email simultaneously. Premium programmes include senior specialists across all channels.",
      },
      major: {
        range: "$3,500 – $12,000/mo",
        context: "Major Ontario markets benefit enormously from integrated multi-channel programmes. This investment range supports full execution across 3–5 channels with dedicated channel specialists.",
      },
      standard: {
        range: "$2,500 – $8,000/mo",
        context: "Mid-size Ontario markets allow strong multi-channel execution at this investment level. We prioritise 2–3 highest-ROI channels initially, then expand as performance validates budget increases.",
      },
      emerging: {
        range: "$1,800 – $5,500/mo",
        context: "Emerging markets are where integrated digital programmes often produce the fastest ROI — lower competition across channels and meaningful first-mover advantages for businesses that invest early.",
      },
    },
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
    ],
    cta: "Get a Free Digital Marketing Consultation",
    ctaSecondary: "View Case Studies",
    relatedServices: [
      { label: "SEO Services", href: "/seo-services" },
      { label: "Google Ads Management", href: "/google-ads-management" },
      { label: "Paid Social", href: "/social-media-advertising" },
      { label: "Content Marketing", href: "/content-marketing-service" },
    ],
  },

  "web-design": {
    label: "Web Design & Development",
    shortLabel: "Web Design",
    icon: Globe,
    h1Template: "Web Design Services in [City], Ontario",
    taglineTemplate:
      "Custom websites built to convert [City] visitors into customers — fast, beautiful, and SEO-ready.",
    metaDescTemplate:
      "Professional web design and development in [City], Ontario. Outlier builds custom, conversion-optimised websites for [City] businesses. Fast, beautiful, and built for growth.",
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
    pricingTiers: {
      premium: {
        range: "$12,000 – $75,000+ (project-based)",
        context: "Toronto website projects typically start at $12,000 for professional service or local business sites, scaling to $40,000+ for complex ecommerce or custom-application builds. Premium design and performance standards are expected by Toronto clients.",
      },
      major: {
        range: "$10,000 – $50,000+ (project-based)",
        context: "Major Ontario city website projects follow similar scope to Toronto but often have more budget flexibility. Most professional service websites are $10,000–$20,000; ecommerce or complex builds run $25,000–$50,000+.",
      },
      standard: {
        range: "$8,500 – $35,000+ (project-based)",
        context: "Mid-size Ontario market websites are scoped based on complexity. A professional services or local business website typically runs $8,500–$15,000; larger multi-service sites or ecommerce $15,000–$35,000+.",
      },
      emerging: {
        range: "$8,000 – $25,000+ (project-based)",
        context: "Smaller Ontario market websites still benefit from professional design and technical build quality. Scope is usually leaner — focused on conversion and SEO fundamentals — which keeps costs lower without sacrificing performance.",
      },
    },
    timeline: [
      { period: "Weeks 1–2", title: "Discovery + Strategy", desc: "Business deep-dive, competitive research, site architecture and user journey mapping, conversion objective definition. Scope confirmed before design begins." },
      { period: "Weeks 3–6", title: "Design + Client Review", desc: "High-fidelity Figma mockups for all key pages. Client review and feedback rounds. Design sign-off before development begins." },
      { period: "Weeks 7–10", title: "Development + QA + Launch", desc: "Clean, performant code built and QA'd across devices. SEO configuration complete. Technical audit passed. Launch managed by our team." },
    ],
    faqTemplate: [
      { q: "How much does a website cost for a [City] business?", a: "Website projects for [City] businesses typically range from $8,000–$12,000 for a professional service or local business website to $20,000–$60,000+ for complex ecommerce or enterprise sites. We scope each project individually and provide a detailed estimate after our discovery call. We don't quote until we understand your requirements." },
      { q: "How long does a website project take?", a: "A typical [City] business website takes 6–10 weeks from kick-off to launch. Complex ecommerce or custom-application builds take 12–20 weeks. We provide a project-specific timeline at the start of every engagement, with weekly updates throughout." },
      { q: "Do you build websites with SEO built in?", a: "Yes — always. Technical SEO is a first principle for us, not an add-on. Every website we build for [City] clients includes a proper site architecture, clean URL structure, schema markup, optimised page speed, and all the technical SEO configurations that give your site the best possible foundation to rank." },
      { q: "What platform do you build on?", a: "We build on WordPress, Webflow, and custom Next.js/React depending on your needs. We recommend the right platform based on your budget, content management requirements, and technical complexity — and we'll explain the tradeoffs clearly so you can make an informed decision." },
      { q: "Can you redesign our existing [City] website?", a: "Yes. Website redesign is a significant part of our work. We conduct a full audit of your existing site before beginning — identifying what's performing well (so we keep it) and what's hurting conversions or rankings (so we fix it). We always preserve URL structures and redirect chains to protect your existing SEO equity." },
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

  const fill = (str: string) => str.replace(/\[City\]/g, city.name);

  const Icon = svc.icon;

  /* Set page title for SEO */
  useEffect(() => {
    document.title = `${fill(svc.h1Template)} | Outlier`;
  }, [citySlug, serviceSlug]);

  /* City-unique intro paragraph — derived from city.marketBlurb */
  const introParagraphs = fill(svc.introTemplate).split("\n\n");
  const cityContextPara = `${city.name}'s business market has its own competitive character: ${city.marketBlurb.replace(/^[A-Z][a-z]+ is /, "").replace(/^[A-Z][a-z]+ has /, "").replace(/^[A-Z][a-z]+ serves /, "")} Understanding this local context is central to every ${svc.shortLabel} strategy we build for ${city.name} businesses — not a recycled template, but a programme shaped by the specific demand patterns, competitive dynamics, and search behaviour of your market.`;

  const neighbourhoodList = city.neighborhoodsOrAreas.split(",").map((n) => n.trim()).filter(Boolean);
  const pricing = svc.pricingTiers[city.marketTier] || svc.pricingTiers["standard"];
  const tierCompetition = TIER_COMPETITION[city.marketTier];

  /* Related cities — same service, different cities (up to 8) */
  const relatedCities = Object.entries(CITIES)
    .filter(([slug]) => slug !== citySlug && slug !== "london-ontario")
    .slice(0, 8)
    .map(([slug, data]) => ({ slug, name: data.name }));

  /* Example local search queries — generated dynamically */
  const shortKeyword = svc.shortLabel.toLowerCase();
  const exampleSearches = [
    `${shortKeyword} in ${city.name}`,
    `${city.name} ${shortKeyword} agency`,
    `best ${shortKeyword} ${city.name} Ontario`,
    `${shortKeyword} services ${city.name}`,
    `${city.name} ${shortKeyword} company`,
    neighbourhoodList[0] ? `${shortKeyword} ${neighbourhoodList[0].toLowerCase()}` : `top ${shortKeyword} ${city.name}`,
    neighbourhoodList[1] ? `${shortKeyword} ${neighbourhoodList[1].toLowerCase()}` : `affordable ${shortKeyword} ${city.name}`,
    `${svc.label.toLowerCase()} ${city.name}`,
  ];

  return (
    <div className="min-h-screen bg-[#f9f8f5]">
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
            <Link href="/cities" className="hover:text-white/40 transition-colors">Ontario Cities</Link>
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
                {fill(svc.h1Template)}
              </h1>
              <p className="text-[1.15rem] text-primary font-bold mb-8 leading-snug">
                {fill(svc.taglineTemplate)}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-primary text-white font-bold px-7 py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-[15px]"
                >
                  {svc.cta} <ArrowRight className="w-4 h-4" />
                </a>
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
                <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm">
                  Get a Free {city.name} {svc.shortLabel} Audit <ArrowRight className="w-4 h-4" />
                </a>
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
                <a href="/contact" className="inline-flex items-center gap-1.5 text-primary text-xs font-bold hover:underline">
                  Talk to a {city.name} specialist <ArrowRight className="w-3 h-3" />
                </a>
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
            {svc.whyTemplate.map((why, i) => (
              <div key={i} className="relative bg-white border border-[#e5e2d9] rounded-2xl p-7 overflow-hidden">
                <div className="absolute top-4 right-5 text-[72px] font-black text-primary/5 leading-none select-none">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-primary" />
                </div>
                <p className="text-gray-700 leading-relaxed text-[15px] relative z-10">{fill(why)}</p>
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
          </div>
        </div>
      </section>

      {/* ═══ PRICING (city-tier based) ═════════════════════════════════ */}
      <section className="py-20 bg-white border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-14 items-start">
            <div>
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Investment</p>
              <h2 className="text-3xl md:text-4xl font-black text-[#0e0e0e] leading-[1.1] mb-6">
                What does {svc.shortLabel} cost<br />in {city.name}?
              </h2>
              <p className="text-gray-600 leading-relaxed text-[15.5px] mb-6">
                {city.name} is classified as a <strong>{TIER_LABELS[city.marketTier]}</strong> for {svc.shortLabel.toLowerCase()} investment purposes. Pricing reflects the competitive intensity of the market, the volume of work required to produce results, and the level of expertise needed to compete effectively.
              </p>
              <p className="text-gray-600 leading-relaxed text-[15.5px] mb-8">
                {pricing.context}
              </p>
              <div className="bg-[#f9f8f5] border border-[#e5e2d9] rounded-2xl p-6 mb-6">
                <p className="text-[10px] font-black uppercase tracking-widest text-gray-400 mb-3">Typical {city.name} Investment Range</p>
                <p className="text-2xl font-black text-[#0e0e0e] mb-2">{pricing.range}</p>
                <p className="text-xs text-gray-500">Scoped to your specific situation — we never recommend a budget we can't deliver results with.</p>
              </div>
              <div className="space-y-3">
                {[
                  { icon: BarChart3, title: "Market Competitiveness", desc: `${city.name}'s ${tierCompetition.label.toLowerCase()} means budget requirements reflect the work needed to outperform entrenched competitors.` },
                  { icon: Target, title: "Scope & Deliverables", desc: "Final investment is scoped to your goals — we never pad proposals. You pay for what's required to achieve your specific objectives." },
                  { icon: TrendingUp, title: "ROI First", desc: "We won't recommend a budget we can't make profitable. Every engagement starts with a clear ROI projection based on your market, category, and starting position." },
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
                  Know exactly what your {city.name} {svc.shortLabel.toLowerCase()} opportunity is worth — before you spend a dollar.
                </h3>
                <p className="text-white/50 text-sm leading-relaxed mb-6">
                  We audit your current position, analyse your competition in {city.name}, and give you a clear estimate of the traffic, leads, and revenue available from {svc.shortLabel.toLowerCase()}. Then we scope an investment that makes sense for your situation.
                </p>
                <a href="/contact" className="flex items-center justify-center gap-2 bg-primary text-white font-bold px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-[15px] w-full">
                  Get Free {city.name} Audit <ArrowRight className="w-4 h-4" />
                </a>
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
              <div className="mt-6">
                <a href="/contact" className="inline-flex items-center gap-2 bg-[#0e0e0e] text-white font-bold px-6 py-3 rounded-xl hover:bg-primary transition-colors text-sm">
                  Get a {city.name}-specific timeline <ArrowRight className="w-4 h-4" />
                </a>
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
                  <a href="/contact" className="inline-flex items-center gap-1.5 text-primary text-xs font-bold hover:underline">
                    Get {city.name}-specific strategy <ArrowRight className="w-3 h-3" />
                  </a>
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
                <a href="/contact" className="flex items-center justify-center gap-2 bg-primary text-white font-bold px-6 py-3.5 rounded-xl hover:bg-primary/90 transition-colors text-[15px] w-full">
                  Book Free Strategy Call <ArrowRight className="w-4 h-4" />
                </a>
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
              <a href="/contact" className="inline-flex items-center gap-2 border border-[#e5e2d9] text-[#0e0e0e] font-bold px-5 py-2.5 rounded-xl text-sm hover:border-primary hover:text-primary transition-colors">
                Ask a Question <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            <div className="lg:col-span-2">
              <div className="divide-y divide-[#e5e2d9]">
                {svc.faqTemplate.map((faq) => (
                  <FAQItem key={faq.q} q={fill(faq.q)} a={fill(faq.a)} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ RELATED CITIES (pSEO internal linking) ════════════════════ */}
      <section className="py-20 bg-[#f9f8f5] border-b border-[#e5e2d9]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="max-w-2xl mb-10">
            <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Other Ontario Cities</p>
            <h2 className="text-2xl md:text-3xl font-black text-[#0e0e0e] leading-[1.1]">
              {svc.label} across Ontario — we serve {Object.keys(CITIES).length}+ cities
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
            {relatedCities.map(({ slug, name }) => (
              <Link
                key={slug}
                href={`/${slug}/${serviceSlug}`}
                className="bg-white border border-[#e5e2d9] rounded-xl p-4 hover:border-primary/40 hover:shadow-sm transition-all group flex items-center justify-between"
              >
                <div>
                  <p className="font-bold text-[#0e0e0e] text-sm">{name}</p>
                  <p className="text-[11px] text-gray-400 mt-0.5">{svc.shortLabel}</p>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-primary transition-colors flex-shrink-0" />
              </Link>
            ))}
          </div>
          <Link href="/cities" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline">
            View all Ontario cities we serve <ArrowRight className="w-4 h-4" />
          </Link>
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
              <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-3">Our Ontario coverage</p>
              <h2 className="text-2xl font-black text-[#0e0e0e] mb-6">
                Serving {Object.keys(CITIES).length - 1}+ Ontario cities
              </h2>
              <div className="bg-[#f9f8f5] border border-[#e5e2d9] rounded-2xl p-6 mb-4">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  From Toronto's financial core to suburban Mississauga, Brampton, Markham, Hamilton, Ottawa, and communities across the Golden Horseshoe — every city page we build is researched for that specific market, priced for that specific competition level, and executed by specialists who know the local landscape.
                </p>
                <Link href="/cities" className="inline-flex items-center gap-2 text-primary font-bold text-sm hover:underline">
                  View all Ontario cities <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <a href="/contact" className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors text-sm w-full justify-center">
                {svc.cta} <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
