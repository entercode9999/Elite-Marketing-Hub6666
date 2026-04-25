import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const stagger = {
  visible: { transition: { staggerChildren: 0.1 } }
};

export default function Home() {
  return (
    <div className="bg-background text-foreground min-h-screen selection:bg-primary selection:text-primary-foreground overflow-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 p-6 mix-blend-difference text-white flex justify-between items-center">
        <div className="font-display font-bold text-xl uppercase tracking-tighter">Halcyon&Co.</div>
        <div className="flex gap-8 text-sm font-medium">
          <a href="#work" className="hover:text-primary transition-colors">Work</a>
          <a href="#studio" className="hover:text-primary transition-colors">Studio</a>
          <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-[100dvh] flex flex-col justify-center px-6 md:px-12 pt-32 pb-12 relative">
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="max-w-[1400px] w-full mx-auto"
        >
          <motion.h1 
            variants={fadeIn}
            className="text-[12vw] leading-[0.85] font-display font-bold uppercase tracking-tighter max-w-[15ch]"
          >
            We build <br />
            <span className="text-primary italic font-serif lowercase tracking-normal">weapons</span> <br />
            for challengers.
          </motion.h1>
          
          <motion.div 
            variants={fadeIn}
            className="mt-16 md:mt-24 md:w-1/2 ml-auto"
          >
            <p className="text-xl md:text-2xl leading-relaxed text-muted-foreground font-medium">
              We are an independent creative studio in New York. We craft brand identities, digital experiences, and campaigns that refuse to blend in. Safe is risky. Boring is fatal.
            </p>
            <a href="#contact" className="inline-flex items-center gap-3 mt-8 border-b-2 border-foreground pb-1 text-lg font-bold hover:text-primary hover:border-primary transition-colors uppercase tracking-tight">
              Start a fight <ArrowRight size={20} />
            </a>
          </motion.div>
        </motion.div>
      </section>

      {/* Selected Work */}
      <section id="work" className="py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={fadeIn}
            className="flex justify-between items-end mb-16"
          >
            <h2 className="text-5xl md:text-8xl font-display font-bold uppercase tracking-tighter">Selected <br/> Work</h2>
            <span className="text-muted-foreground font-mono">01 — 04</span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden aspect-[4/5] bg-muted">
                <img src="/work-1.png" alt="Avant-garde fashion campaign" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-display font-bold uppercase tracking-tight group-hover:text-primary transition-colors">Aura Framework</h3>
                  <p className="text-muted-foreground mt-2">Brand Identity & Campaign</p>
                </div>
                <span className="font-mono text-sm text-muted-foreground">2024</span>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group cursor-pointer md:mt-32"
            >
              <div className="overflow-hidden aspect-[4/5] bg-muted">
                <img src="/work-2.png" alt="Surreal 3D motion frame" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-display font-bold uppercase tracking-tight group-hover:text-primary transition-colors">Vesper Dynamics</h3>
                  <p className="text-muted-foreground mt-2">Digital Experience & Motion</p>
                </div>
                <span className="font-mono text-sm text-muted-foreground">2024</span>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group cursor-pointer"
            >
              <div className="overflow-hidden aspect-[16/9] md:aspect-[4/5] bg-muted">
                <img src="/work-3.png" alt="Grunge typography poster" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-display font-bold uppercase tracking-tight group-hover:text-primary transition-colors">The Void Project</h3>
                  <p className="text-muted-foreground mt-2">Editorial & Print</p>
                </div>
                <span className="font-mono text-sm text-muted-foreground">2023</span>
              </div>
            </motion.div>

            <motion.div 
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeIn}
              className="group cursor-pointer md:mt-32"
            >
              <div className="overflow-hidden aspect-[4/5] bg-muted flex items-center justify-center bg-zinc-900">
                <h2 className="text-4xl text-zinc-600 font-display uppercase tracking-tight font-bold">Coming Soon</h2>
              </div>
              <div className="mt-6 flex justify-between items-start">
                <div>
                  <h3 className="text-2xl font-display font-bold uppercase tracking-tight group-hover:text-primary transition-colors">Classified</h3>
                  <p className="text-muted-foreground mt-2">Confidential Client</p>
                </div>
                <span className="font-mono text-sm text-muted-foreground">2025</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Marquee */}
      <section className="py-24 overflow-hidden border-y border-border/50 bg-foreground text-background">
        <div className="flex whitespace-nowrap">
          <motion.div 
            animate={{ x: ["0%", "-50%"] }}
            transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
            className="flex items-center gap-12 text-6xl md:text-8xl font-display font-bold uppercase tracking-tighter"
          >
            <span>Brand Identity</span>
            <span className="text-primary">*</span>
            <span>Digital Experience</span>
            <span className="text-primary">*</span>
            <span>Motion Design</span>
            <span className="text-primary">*</span>
            <span>Campaigns</span>
            <span className="text-primary">*</span>
            <span>Brand Identity</span>
            <span className="text-primary">*</span>
            <span>Digital Experience</span>
            <span className="text-primary">*</span>
            <span>Motion Design</span>
            <span className="text-primary">*</span>
            <span>Campaigns</span>
            <span className="text-primary">*</span>
          </motion.div>
        </div>
      </section>

      {/* The Studio */}
      <section id="studio" className="py-32 px-6 md:px-12 bg-foreground text-background">
        <div className="max-w-[1400px] mx-auto">
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center"
          >
            <div className="md:col-span-5">
              <h2 className="text-5xl md:text-7xl font-display font-bold uppercase tracking-tighter mb-8">The <br/> Studio</h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-medium">
                We are a tight-knit team of designers, strategists, and technologists operating out of a loft in Lower Manhattan. We don't have account managers. You work directly with the people doing the work.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-medium">
                Our process is chaotic, intense, and ruthlessly focused on the outcome. We believe that if you aren't a little scared of the work, we haven't gone far enough.
              </p>
            </div>
            <div className="md:col-span-7">
              <div className="aspect-[16/9] md:aspect-square overflow-hidden bg-muted">
                <img src="/studio.png" alt="Creative studio loft" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Manifesto */}
      <section className="py-32 px-6 md:px-12 bg-primary text-primary-foreground text-center">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-4xl md:text-7xl font-display font-bold uppercase tracking-tighter leading-tight">
            The world doesn't need another polite brand. Make them feel something.
          </h2>
        </motion.div>
      </section>

      {/* Footer / Contact */}
      <footer id="contact" className="py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto flex flex-col items-center text-center">
          <p className="text-xl text-muted-foreground mb-8 font-medium">Ready to break things?</p>
          <a href="mailto:hello@halcyon.co" className="text-[8vw] leading-none font-display font-bold uppercase tracking-tighter hover:text-primary transition-colors">
            hello@halcyon.co
          </a>
          
          <div className="mt-32 w-full flex flex-col md:flex-row justify-between items-center pt-8 border-t border-border/50 text-sm font-mono text-muted-foreground gap-4">
            <p>© {new Date().getFullYear()} Halcyon&Co. All rights reserved.</p>
            <div className="flex gap-6">
              <a href="#" className="hover:text-foreground transition-colors">Instagram</a>
              <a href="#" className="hover:text-foreground transition-colors">Twitter</a>
              <a href="#" className="hover:text-foreground transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}