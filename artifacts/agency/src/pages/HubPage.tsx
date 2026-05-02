import { useEffect } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { Nav } from "@/components/nav";
import { Footer } from "@/components/footer";
import { Breadcrumb } from "@/components/Breadcrumb";
import { getHub } from "@/data/hubs";

const EASE: [number, number, number, number] = [0.22, 1, 0.36, 1];
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i = 0) => ({ opacity: 1, y: 0, transition: { duration: 0.55, delay: i * 0.07, ease: EASE } }),
};

interface HubPageProps {
  slug: string;
}

export default function HubPage({ slug }: HubPageProps) {
  const hub = getHub(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!hub) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <p className="text-muted-foreground">Hub not found.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />

      {/* Hero — light editorial */}
      <section className="bg-[#f5f0e8] dark:bg-[#111318] pt-28 pb-16 border-b border-border">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div variants={fadeUp} initial="hidden" animate="visible" custom={0} className="mb-6">
            <Breadcrumb items={[{ label: hub.h1 }]} />
          </motion.div>

          <div className="max-w-3xl">
            <motion.h1
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={1}
              className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-[1.05]"
            >
              {hub.h1.split("—")[0].trim()}
              {hub.h1.includes("—") && (
                <>
                  <span className="text-[#1a56ff] dark:text-[#4d80ff]"> —</span>
                  <br />
                  <span className="italic font-light">{hub.h1.split("—")[1].trim()}</span>
                </>
              )}
            </motion.h1>

            <motion.p
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              custom={2}
              className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl"
            >
              {hub.intro}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Nav links */}
      <section className="py-10 border-b border-border bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8">
            {hub.navLinks.map((group, gi) => (
              <div key={gi}>
                <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mb-3">
                  {group.label}
                </p>
                <ul className="space-y-1.5">
                  {(group.byLocation || group.byService || group.related || []).map((link) => (
                    <li key={link.url}>
                      <Link
                        href={link.url}
                        className="flex items-center gap-2 text-sm font-medium hover:text-[#1a56ff] dark:hover:text-[#4d80ff] transition-colors group"
                      >
                        <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transition-opacity shrink-0" />
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#1a56ff] dark:text-[#4d80ff] mb-3 block">
              When this fits
            </span>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">
              Which situation fits yours
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {hub.useCases.map((uc, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.5}
                className="flex gap-4 p-6 rounded-xl border border-border bg-[#f5f0e8]/60 dark:bg-[#1a1e27]/60"
              >
                <div className="w-6 h-6 rounded-full bg-[#1a56ff]/10 dark:bg-[#4d80ff]/20 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-full bg-[#1a56ff] dark:bg-[#4d80ff]" />
                </div>
                <div>
                  <p className="font-bold text-base mb-1">{uc.headline}</p>
                  <p className="text-sm text-muted-foreground leading-relaxed">{uc.body}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main sections */}
      <section className="py-20 bg-[#f5f0e8]/40 dark:bg-[#111318] border-t border-border">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-16">
            {hub.sections.map((section, si) => (
              <motion.div
                key={si}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                <h2 className="text-2xl md:text-3xl font-black tracking-tight mb-4">
                  {section.h2}
                </h2>
                {section.body && (
                  <p className="text-muted-foreground leading-relaxed mb-6 max-w-2xl">
                    {section.body}
                  </p>
                )}
                {section.subsections && (
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {section.subsections.map((sub, ssi) => (
                      <div
                        key={ssi}
                        className="p-6 rounded-xl border border-border bg-background"
                      >
                        <p className="font-bold text-sm text-[#1a56ff] dark:text-[#4d80ff] mb-2 uppercase tracking-wide">
                          {sub.h3}
                        </p>
                        <p className="text-sm text-muted-foreground leading-relaxed">{sub.body}</p>
                      </div>
                    ))}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-background border-t border-border">
        <div className="max-w-3xl mx-auto px-6">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-10"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-[#1a56ff] dark:text-[#4d80ff] mb-3 block">
              FAQ
            </span>
            <h2 className="text-3xl font-black tracking-tight">Common questions</h2>
          </motion.div>

          <div className="space-y-6">
            {hub.faq.map((item, i) => (
              <motion.div
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={i * 0.4}
                className="border-b border-border pb-6"
              >
                <p className="font-bold mb-2">{item.q}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.a}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#0a0c12] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <p className="text-sm font-bold uppercase tracking-widest text-[#4d80ff] mb-4">
              Ready to get started?
            </p>
            <p className="text-base text-white/70 mb-6 max-w-xl mx-auto leading-relaxed">
              {hub.closing}
            </p>
            <a
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#1a56ff] hover:bg-[#4d80ff] text-white font-bold py-3.5 px-8 rounded-lg transition-colors text-sm"
            >
              {hub.closingCta}
              <ArrowRight className="w-4 h-4" />
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
