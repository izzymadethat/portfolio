"use client";

import { Award, Calendar, Clock, GraduationCap } from "lucide-react";
import { motion, type Variants } from "motion/react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const education = [
  {
    institution: "App Academy",
    degree: "Software Engineering Bootcamp",
    date: "December 2024",
    description:
      "Intensive full-stack software engineering program covering modern web technologies, data structures, algorithms, and professional development practices.",
    completed: true,
  },
  {
    institution: "Tallahassee State College",
    degree: "A.S. Network Systems Administration",
    date: "Expected 2027",
    description:
      "Associate of Science degree focusing on network infrastructure, security, and systems administration.",
    completed: false,
  },
];

const certifications = [
  {
    name: "App Academy",
    issuer: "App Academy",
    icon: "AA",
    color: "gold",
    tooltip: "Completed December 2024",
    completed: true,
  },
  {
    name: "Python for Everybody",
    issuer: "Coursera",
    icon: "Py",
    color: "nebula",
    tooltip: "Coursera Specialization",
    completed: true,
  },
  {
    name: "SoloLearn Certifications",
    issuer: "SoloLearn",
    icon: "SL",
    color: "gold",
    tooltip: "Multiple language certifications",
    completed: true,
  },
  {
    name: "AWS Cloud Practitioner",
    issuer: "Amazon Web Services",
    icon: "AWS",
    color: "nebula",
    tooltip: "Expected March 2026",
    completed: false,
  },
  {
    name: "Cisco CCNA",
    issuer: "Cisco",
    icon: "CC",
    color: "gold",
    tooltip: "Expected June 2026",
    completed: false,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

export function EducationSection() {
  return (
    <section id="education" className="relative py-24 px-4">
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
            Credentials
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            Education & Certifications
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Education Timeline */}
          <div>
            <motion.h3
              className="text-xl font-semibold text-gold mb-8 flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <GraduationCap className="w-5 h-5" />
              Education
            </motion.h3>

            <motion.div
              className="relative pl-8 border-l-2 border-gold/30 space-y-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
            >
              {education.map((item) => (
                <motion.div
                  key={item.institution}
                  variants={itemVariants}
                  className="relative"
                >
                  {/* Timeline dot */}
                  <div
                    className={`
                    absolute -left-9.25 top-0 w-3 h-3 rounded-full
                    ${item.completed ? "bg-gold shadow-[0_0_10px_oklch(0.78_0.15_85/0.5)]" : "bg-muted border-2 border-gold/50"}
                  `}
                  />

                  <div className="bg-card/60 backdrop-blur-md rounded-xl p-6 border border-border hover:border-gold/30 transition-colors duration-300">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm mb-2">
                      {item.completed ? (
                        <Calendar className="w-4 h-4" />
                      ) : (
                        <Clock className="w-4 h-4" />
                      )}
                      <span>{item.date}</span>
                      {!item.completed && (
                        <span className="px-2 py-0.5 rounded-full bg-nebula/20 text-nebula text-xs">
                          In Progress
                        </span>
                      )}
                    </div>

                    <h4 className="text-lg font-semibold text-foreground mb-1">
                      {item.institution}
                    </h4>

                    <p className="text-gold text-sm mb-3">{item.degree}</p>

                    <p className="text-muted-foreground text-sm leading-relaxed text-pretty">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Certifications Grid */}
          <div>
            <motion.h3
              className="text-xl font-semibold text-gold mb-8 flex items-center gap-2"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Award className="w-5 h-5" />
              Certifications
            </motion.h3>

            <TooltipProvider>
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 gap-4"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-100px" }}
              >
                {certifications.map((cert) => (
                  <Tooltip key={cert.name}>
                    <TooltipTrigger asChild>
                      <motion.div
                        variants={itemVariants}
                        className={`
                          group relative overflow-hidden rounded-xl p-4
                          bg-card/60 backdrop-blur-md border border-border
                          hover:border-${cert.color}/50 transition-all duration-300
                          cursor-default
                          ${!cert.completed ? "opacity-70" : ""}
                        `}
                        whileHover={{ scale: 1.05 }}
                      >
                        {/* Glow effect */}
                        <div
                          className={`
                          absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300
                          ${cert.color === "gold" ? "bg-gold/5" : "bg-nebula/5"}
                        `}
                        />

                        <div className="relative text-center">
                          {/* Icon badge */}
                          <div
                            className={`
                            mx-auto w-12 h-12 rounded-lg flex items-center justify-center mb-3
                            font-mono font-bold text-sm
                            ${cert.color === "gold" ? "bg-gold/10 text-gold" : "bg-nebula/10 text-nebula"}
                            ${cert.completed ? "" : "grayscale-50"}
                          `}
                          >
                            {cert.icon}
                          </div>

                          <h4 className="text-xs font-medium text-foreground leading-tight line-clamp-2">
                            {cert.name}
                          </h4>

                          {!cert.completed && (
                            <span className="absolute top-1 right-1 w-2 h-2 rounded-full bg-nebula animate-pulse" />
                          )}
                        </div>
                      </motion.div>
                    </TooltipTrigger>
                    <TooltipContent
                      side="top"
                      className="bg-card border-border text-foreground"
                    >
                      <p className="text-sm">{cert.tooltip}</p>
                      <p className="text-xs text-muted-foreground mt-1">
                        {cert.issuer}
                      </p>
                    </TooltipContent>
                  </Tooltip>
                ))}
              </motion.div>
            </TooltipProvider>
          </div>
        </div>
      </div>
    </section>
  );
}
