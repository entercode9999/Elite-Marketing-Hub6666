import { Link } from "wouter";
import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";

function PageShell({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f9f8f5]">
      <Nav />
      <section className="bg-[#08090d] pt-32 pb-20 border-b border-white/8">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-4">{label}</p>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">{title}</h1>
        </div>
      </section>
      <div className="container mx-auto px-4 max-w-4xl py-20">{children}</div>
      <Footer />
    </div>
  );
}

export function AboutPage() {
  return (
    <PageShell label="About Outlier" title={"We exist to give ambitious brands an unfair advantage."}>
      <div className="prose prose-lg max-w-none">
        <p className="text-gray-600 text-xl leading-relaxed mb-8">
          Outlier is a Toronto-based performance marketing agency. We work with founders, CMOs, and operators at local
          businesses and national brands who are serious about growth — and willing to do the work.
        </p>
        <div className="grid grid-cols-3 gap-8 mb-16">
          {[
            { n: "2013", l: "Founded in Toronto" },
            { n: "200+", l: "Brands grown" },
            { n: "10yr+", l: "Avg. team experience" },
          ].map((s) => (
            <div key={s.l} className="bg-white border border-[#e5e2d9] rounded-2xl p-6">
              <div className="text-4xl font-black text-primary mb-1">{s.n}</div>
              <div className="text-sm text-gray-500">{s.l}</div>
            </div>
          ))}
        </div>
        <h2 className="text-3xl font-black text-[#0e0e0e] mb-4">What "Outlier" means</h2>
        <p className="text-gray-600 leading-relaxed mb-6">
          Most agencies focus on activity — impressions, clicks, reports. We focus on outcomes. An outlier result is one
          that defies the benchmark: ranking 1 in a market everyone said was too competitive, a paid channel that
          actually prints money, organic traffic that keeps compounding year after year.
        </p>
        <p className="text-gray-600 leading-relaxed mb-10">
          We're strategy-first and execution-obsessed. Headquartered at Spadina + King in Toronto, with clients across
          Ontario, Canada, and North America.
        </p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-primary text-white font-bold px-6 py-3 rounded-xl hover:bg-primary/90 transition-colors"
        >
          Work with us <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </PageShell>
  );
}

export function ContactPage() {
  return (
    <div className="min-h-screen bg-[#f9f8f5]">
      <Nav />
      <section className="bg-[#08090d] pt-32 pb-20 border-b border-white/8">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-4">Contact</p>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight mb-4">Let's talk growth.</h1>
          <p className="text-white/40 text-lg">No obligations. Just a straight conversation about your business.</p>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-20">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <h2 className="text-3xl font-black text-[#0e0e0e] mb-6">Get in touch</h2>
            <div className="space-y-5 mb-10">
              {[
                { icon: Phone, label: "Phone", val: "1-800-555-0199", href: "tel:+18005550199" },
                { icon: Mail, label: "Email", val: "hello@outlier.co", href: "mailto:hello@outlier.co" },
                { icon: MapPin, label: "Office", val: "123 Spadina Ave, Suite 800, Toronto, ON M5V 2T6", href: "#" },
              ].map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-start gap-4 bg-white border border-[#e5e2d9] rounded-xl p-5 hover:border-primary/40 transition-all"
                >
                  <c.icon className="w-5 h-5 text-primary mt-0.5" />
                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1">{c.label}</div>
                    <div className="font-medium text-[#0e0e0e]">{c.val}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="bg-white border border-[#e5e2d9] rounded-2xl p-8">
            <h3 className="text-xl font-black text-[#0e0e0e] mb-6">Send us a message</h3>
            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">First name</label>
                  <input type="text" className="w-full border border-[#e5e2d9] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="Jane" />
                </div>
                <div>
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">Last name</label>
                  <input type="text" className="w-full border border-[#e5e2d9] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="Smith" />
                </div>
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">Email</label>
                <input type="email" className="w-full border border-[#e5e2d9] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="jane@company.com" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">Company / Website</label>
                <input type="text" className="w-full border border-[#e5e2d9] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary" placeholder="acme.ca" />
              </div>
              <div>
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-1.5 block">What can we help with?</label>
                <textarea rows={4} className="w-full border border-[#e5e2d9] rounded-lg px-3 py-2.5 text-sm focus:outline-none focus:border-primary resize-none" placeholder="Tell us about your business and goals..." />
              </div>
              <button
                type="submit"
                className="w-full bg-primary text-white font-bold py-3 rounded-xl hover:bg-primary/90 transition-colors flex items-center justify-center gap-2"
              >
                Send Message <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export function CaseStudiesPage() {
  const studies = [
    { industry: "Home Services", result: "+420% organic traffic", period: "12 months", slug: "homeservices" },
    { industry: "Luxury Limo", result: "4.8× ROAS on Google Ads", period: "6 months", slug: "limo" },
    { industry: "SaaS / Tech", result: "+312% qualified leads", period: "8 months", slug: "saas" },
    { industry: "Dental Group", result: "Map pack position 1 in 5 cities", period: "4 months", slug: "dental" },
    { industry: "Real Estate", result: "+180% property inquiry volume", period: "10 months", slug: "realestate" },
    { industry: "Ecommerce", result: "3.9× return on ad spend", period: "12 months", slug: "ecommerce" },
  ];

  return (
    <div className="min-h-screen bg-[#f9f8f5]">
      <Nav />
      <section className="bg-[#08090d] pt-32 pb-20 border-b border-white/8">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-4">Case Studies</p>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Real clients.<br /><span className="text-primary italic">Real results.</span>
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {studies.map((s) => (
            <div key={s.slug} className="bg-white border border-[#e5e2d9] rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all">
              <p className="text-[10px] font-black uppercase tracking-widest text-primary mb-3">{s.industry}</p>
              <div className="text-3xl font-black text-[#0e0e0e] mb-2">{s.result}</div>
              <p className="text-sm text-gray-400">in {s.period}</p>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export function InsightsPage() {
  const posts = [
    { title: "Why Local SEO Still Wins in 2025 (And How to Dominate It)", tag: "Local SEO", date: "Apr 2025" },
    { title: "Google's AI Overviews: What It Means for Your Organic Traffic", tag: "AI SEO", date: "Mar 2025" },
    { title: "The True Cost of a Bad Website: CRO Data from 50 Ontario Businesses", tag: "Web Design", date: "Mar 2025" },
    { title: "How We Took a Toronto Dental Group to Map Pack Position 1 in 5 Cities", tag: "Case Study", date: "Feb 2025" },
    { title: "PPC Budget Waste: The 7 Mistakes Ontario Businesses Make on Google Ads", tag: "PPC", date: "Feb 2025" },
    { title: "Content That Compounds: Our Topical Authority Playbook", tag: "Content", date: "Jan 2025" },
  ];

  return (
    <div className="min-h-screen bg-[#f9f8f5]">
      <Nav />
      <section className="bg-[#08090d] pt-32 pb-20 border-b border-white/8">
        <div className="container mx-auto px-4 max-w-7xl">
          <p className="text-[11px] font-black uppercase tracking-widest text-primary mb-4">Insights</p>
          <h1 className="text-5xl md:text-6xl font-black text-white leading-tight">
            Strategy. Tactics. Results.
          </h1>
        </div>
      </section>

      <div className="container mx-auto px-4 max-w-7xl py-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((p) => (
            <div key={p.title} className="bg-white border border-[#e5e2d9] rounded-2xl p-6 hover:border-primary/40 hover:shadow-md transition-all cursor-pointer">
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black uppercase tracking-widest text-primary bg-primary/8 px-2 py-1 rounded-full">{p.tag}</span>
                <span className="text-xs text-gray-400">{p.date}</span>
              </div>
              <h3 className="font-bold text-[#0e0e0e] leading-snug">{p.title}</h3>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export function CareersPage() {
  return (
    <PageShell label="Careers" title="Work at Outlier.">
      <p className="text-gray-600 text-xl leading-relaxed mb-10">
        We're a small, focused team. We hire slowly, invest deeply in the people we bring on, and move fast on the
        things that matter. If you're exceptional at what you do and want to work on interesting problems with ambitious
        clients — we want to hear from you.
      </p>
      <div className="space-y-4 mb-12">
        {[
          { role: "Senior SEO Strategist", type: "Full-time · Toronto / Remote" },
          { role: "Paid Media Manager", type: "Full-time · Toronto / Remote" },
          { role: "Content Strategist", type: "Full-time · Remote (Canada)" },
          { role: "Web Designer (Conversion-Focused)", type: "Contract / Full-time · Remote" },
        ].map((j) => (
          <div key={j.role} className="bg-white border border-[#e5e2d9] rounded-xl p-5 flex items-center justify-between hover:border-primary/40 transition-all cursor-pointer">
            <div>
              <div className="font-bold text-[#0e0e0e]">{j.role}</div>
              <div className="text-sm text-gray-400">{j.type}</div>
            </div>
            <ArrowRight className="w-4 h-4 text-gray-300" />
          </div>
        ))}
      </div>
      <p className="text-gray-500 text-sm">
        Don't see the right role? Send your portfolio and a note to{" "}
        <a href="mailto:careers@outlier.co" className="text-primary font-bold">careers@outlier.co</a>
      </p>
    </PageShell>
  );
}

export function PrivacyPage() {
  return (
    <PageShell label="Legal" title="Privacy Policy">
      <div className="prose prose-gray max-w-none text-gray-600 space-y-6">
        <p className="text-sm text-gray-400">Last updated: January 1, 2025</p>
        <p>Outlier Marketing Group Inc. ("Outlier", "we", "us") is committed to protecting your personal information. This Privacy Policy describes how we collect, use, and disclose information about you when you visit our website or engage our services.</p>
        <h2 className="text-xl font-black text-[#0e0e0e]">Information We Collect</h2>
        <p>We collect information you provide directly (name, email, phone, company), usage data from our website (via cookies and analytics), and information from third-party integrations you authorise.</p>
        <h2 className="text-xl font-black text-[#0e0e0e]">How We Use Your Information</h2>
        <p>We use collected information to provide our services, communicate with you, improve our offerings, and comply with legal obligations. We do not sell your personal information to third parties.</p>
        <h2 className="text-xl font-black text-[#0e0e0e]">Cookies</h2>
        <p>Our website uses cookies to improve your experience, measure performance, and support marketing. You may disable cookies in your browser settings, though some features may not function properly.</p>
        <h2 className="text-xl font-black text-[#0e0e0e]">Contact</h2>
        <p>For privacy-related inquiries, contact us at <a href="mailto:privacy@outlier.co" className="text-primary">privacy@outlier.co</a> or at 123 Spadina Ave, Suite 800, Toronto, ON M5V 2T6.</p>
      </div>
    </PageShell>
  );
}

export function TermsPage() {
  return (
    <PageShell label="Legal" title="Terms of Service">
      <div className="prose prose-gray max-w-none text-gray-600 space-y-6">
        <p className="text-sm text-gray-400">Last updated: January 1, 2025</p>
        <p>These Terms of Service govern your use of the Outlier Marketing Group website and services. By accessing our site or engaging our services, you agree to these terms.</p>
        <h2 className="text-xl font-black text-[#0e0e0e]">Services</h2>
        <p>Outlier provides digital marketing services including SEO, paid media, web design, and related services. Specific deliverables, timelines, and fees are outlined in individual service agreements.</p>
        <h2 className="text-xl font-black text-[#0e0e0e]">Intellectual Property</h2>
        <p>All content on this website is the property of Outlier Marketing Group Inc. Client deliverables become client property upon full payment as specified in the relevant agreement.</p>
        <h2 className="text-xl font-black text-[#0e0e0e]">Limitation of Liability</h2>
        <p>Outlier's liability is limited to the fees paid in the preceding 90 days. We are not responsible for indirect, incidental, or consequential damages.</p>
        <h2 className="text-xl font-black text-[#0e0e0e]">Governing Law</h2>
        <p>These terms are governed by the laws of the Province of Ontario, Canada. Disputes shall be resolved in Ontario courts.</p>
        <h2 className="text-xl font-black text-[#0e0e0e]">Contact</h2>
        <p>For questions about these terms, contact <a href="mailto:legal@outlier.co" className="text-primary">legal@outlier.co</a>.</p>
      </div>
    </PageShell>
  );
}

export function AccessibilityPage() {
  return (
    <PageShell label="Accessibility" title="Accessibility Statement">
      <div className="prose prose-gray max-w-none text-gray-600 space-y-6">
        <p>Outlier Marketing Group is committed to making our website accessible to everyone, including people with disabilities. We strive to conform to WCAG 2.1 Level AA standards.</p>
        <h2 className="text-xl font-black text-[#0e0e0e]">Our Commitment</h2>
        <p>We continuously audit our site for accessibility barriers and work to remediate issues promptly. Our team is trained in accessible design and development practices.</p>
        <h2 className="text-xl font-black text-[#0e0e0e]">Features</h2>
        <ul className="list-disc pl-5 space-y-2">
          <li>Keyboard-navigable interface</li>
          <li>Screen reader compatible markup</li>
          <li>Sufficient colour contrast ratios</li>
          <li>Descriptive alt text on images</li>
          <li>Resizable text without loss of functionality</li>
        </ul>
        <h2 className="text-xl font-black text-[#0e0e0e]">Feedback</h2>
        <p>If you encounter an accessibility barrier, please contact us at <a href="mailto:accessibility@outlier.co" className="text-primary">accessibility@outlier.co</a> or call 1-800-555-0199. We aim to respond within 2 business days.</p>
      </div>
    </PageShell>
  );
}
