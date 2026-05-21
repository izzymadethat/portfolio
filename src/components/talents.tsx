"use client";

import { Code2, Crown, Headphones, Music, Network } from "lucide-react";
import { motion } from "motion/react";

const talents = [
  {
    title: "Audio Engineer",
    description:
      "Crafting immersive soundscapes and pristine mixes that bring creative visions to life.",
    icon: Headphones,
    color: "gold",
    size: "large",
  },
  {
    title: "Musician",
    description:
      "Creating original compositions and performing across multiple genres and instruments.",
    icon: Music,
    color: "nebula",
    size: "medium",
  },
  {
    title: "Software Developer",
    description:
      "Building elegant, scalable applications with modern technologies and clean architecture.",
    icon: Code2,
    color: "gold",
    size: "medium",
  },
  {
    title: "Networking Admin",
    description:
      "Designing and maintaining robust network infrastructures that power seamless connectivity.",
    icon: Network,
    color: "nebula",
    size: "small",
  },
  {
    title: "Chess Player",
    description:
      "Strategic thinker and competitive player, always seeking the next brilliant move.",
    icon: Crown,
    color: "gold",
    size: "small",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};
export function TalentsSection() {
  return (
    <section id="talents" className="relative py-24 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-gold text-sm font-mono tracking-wider uppercase mb-4">
            What I Do
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            My Skills
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {talents.map((talent, index) => {
            const Icon = talent.icon;
            const isLarge = talent.size === "large";
            const isMedium = talent.size === "medium";

            return (
              <motion.div
                key={talent.title}
                variants={itemVariants}
                className={`
                  group relative overflow-hidden rounded-2xl
                  bg-card/60 backdrop-blur-md border border-border
                  transition-all duration-500 cursor-default
                  hover:border-${talent.color}/50
                  ${isLarge ? "lg:col-span-2 lg:row-span-2" : ""}
                  ${isMedium && index === 1 ? "lg:row-span-2" : ""}
                `}
                whileHover={{ scale: 1.02 }}
              >
                {/* Glow effect on hover */}
                <div
                  className={`
                    absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500
                    ${talent.color === "gold" ? "bg-gold/5" : "bg-nebula/5"}
                  `}
                />

                {/* Pulse ring on hover */}
                <div
                  className={`
                    absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100
                    transition-opacity duration-300
                    ${talent.color === "gold" ? "shadow-[inset_0_0_60px_oklch(0.78_0.15_85_/_0.1)]" : "shadow-[inset_0_0_60px_oklch(0.55_0.18_300_/_0.1)]"}
                  `}
                />

                <div
                  className={`
                  relative p-6 lg:p-8 h-full flex flex-col
                  ${isLarge ? "min-h-[320px] lg:min-h-[400px]" : "min-h-[200px]"}
                `}
                >
                  {/* Icon */}
                  <motion.div
                    className={`
                      w-14 h-14 rounded-xl flex items-center justify-center mb-6
                      transition-all duration-300
                      ${talent.color === "gold" ? "bg-gold/10 text-gold group-hover:bg-gold/20 group-hover:shadow-[0_0_30px_oklch(0.78_0.15_85_/_0.3)]" : "bg-nebula/10 text-nebula group-hover:bg-nebula/20 group-hover:shadow-[0_0_30px_oklch(0.55_0.18_300_/_0.3)]"}
                    `}
                    whileHover={{ rotate: [0, -10, 10, 0] }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="w-7 h-7" />
                  </motion.div>

                  {/* Content */}
                  <h3
                    className={`
                    text-xl lg:text-2xl font-semibold mb-3
                    ${talent.color === "gold" ? "text-gold" : "text-nebula"}
                  `}
                  >
                    {talent.title}
                  </h3>

                  <p
                    className={`
                    text-muted-foreground leading-relaxed text-pretty
                    ${isLarge ? "text-base lg:text-lg" : "text-sm lg:text-base"}
                  `}
                  >
                    {talent.description}
                  </p>

                  {/* Decorative corner accent */}
                  <div
                    className={`
                      absolute bottom-0 right-0 w-32 h-32 opacity-10
                      ${talent.color === "gold" ? "bg-gradient-radial from-gold to-transparent" : "bg-gradient-radial from-nebula to-transparent"}
                    `}
                    style={{
                      background: `radial-gradient(circle at bottom right, ${talent.color === "gold" ? "oklch(0.78 0.15 85 / 0.2)" : "oklch(0.55 0.18 300 / 0.2)"}, transparent 70%)`,
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
