import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Phone } from "lucide-react";

export function MegaCta() {
  return (
    <section className="relative py-32 md:py-40 bg-primary text-primary-foreground overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff10_1px,transparent_1px),linear-gradient(to_bottom,#ffffff10_1px,transparent_1px)] bg-[size:5rem_5rem]" />
      <div className="absolute top-0 right-0 w-[40rem] h-[40rem] bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[30rem] h-[30rem] bg-white/5 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto text-center"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/15 border border-white/20 text-white text-sm font-semibold mb-8 backdrop-blur-sm">
            Limited onboarding slots — Q3 2026
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-display font-bold leading-[0.95] tracking-tight mb-8">
            Ready to dominate
            <br />
            your market?
          </h2>

          <p className="text-xl md:text-2xl text-white/85 max-w-2xl mx-auto mb-12 leading-relaxed font-light">
            Book a 30-minute strategy call. We'll teardown your funnel live and
            tell you the three highest-leverage moves — whether you hire us or not.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              className="h-16 px-10 text-lg bg-white text-primary hover:bg-white/90 border-none rounded-md group font-semibold"
            >
              <Calendar className="mr-2 h-5 w-5" />
              Book a Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-16 px-10 text-lg rounded-md border-white/30 bg-transparent text-white hover:bg-white/10 hover:text-white font-semibold"
            >
              <Phone className="mr-2 h-5 w-5" />
              Get a Free Audit
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-sm text-white/70">
            <span>No-pressure conversation</span>
            <span className="opacity-50">•</span>
            <span>30-minute commitment</span>
            <span className="opacity-50">•</span>
            <span>Senior strategist on the call</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
