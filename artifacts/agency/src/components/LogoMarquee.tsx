import { motion } from "framer-motion";

const logos = [
  "Apex Dental",
  "Toronto Limo Co",
  "Hudson Outdoor",
  "Cedar Law",
  "Coastal Collective",
  "Elevate Fitness",
  "BlueSky Roofing",
  "Northview Kitchens",
  "Caldwell HVAC",
  "Morrison Barristers",
  "Oak & Vine",
  "Purecycle Fitness",
];

export function LogoMarquee() {
  const row = [...logos, ...logos];
  return (
    <section className="py-10 bg-[#0A0A0C] border-b border-white/10 overflow-hidden">
      <div className="text-center mb-6">
        <div className="text-xs font-semibold tracking-[0.2em] uppercase text-white/40">
          Trusted by Ontario service businesses
        </div>
      </div>
      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#0A0A0C] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#0A0A0C] to-transparent z-10 pointer-events-none" />
        <motion.div
          className="flex gap-12 md:gap-16 whitespace-nowrap"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, ease: "linear", repeat: Infinity }}
        >
          {row.map((logo, i) => (
            <div
              key={i}
              className="text-xl md:text-2xl font-display font-bold tracking-tighter text-white/70 hover:text-white transition-colors"
            >
              {logo}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
