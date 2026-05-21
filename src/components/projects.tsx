"use client";

import { ExternalLinkIcon } from "lucide-react";
import { AnimatePresence, motion, type Variants } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { FaGithub } from "react-icons/fa6";
import { Button } from "./ui/button";
import sonexSample from "@/assets/sonex-sample.png";
import youtubeChannel from "@/assets/youtube-channel.png";
import Image from "next/image";

const techIcons: Record<string, { label: string; color: string }> = {
  react: { label: "React", color: "#61DAFB" },
  node: { label: "Node.js", color: "#339933" },
  typescript: { label: "TypeScript", color: "#3178C6" },
  python: { label: "Python", color: "#3776AB" },
  c: { label: "C", color: "#A8B9CC" },
  nextjs: { label: "Next.js", color: "#ffffff" },
  postgres: { label: "PostgreSQL", color: "#4169E1" },
  tailwind: { label: "Tailwind", color: "#06B6D4" },
};

const projects = [
  {
    id: 1,
    title: "Sonex",
    description:
      "A comprehensive audio production platform that streamlines the creative workflow from recording to final mix. Features real-time collaboration, cloud-based project management, and professional-grade audio processing tools.",
    image: sonexSample,
    siteUrl: "https://sonexaudio.com",
    githubUrl: "https://github.com/izzymadethat/SonexAudioSolutions",
    techStack: ["react", "node", "typescript", "postgres"],
    featured: true,
  },
  {
    id: 2,
    title: "Independent Industry Academy",
    description:
      "An educational platform empowering independent artists and creators with industry knowledge. Comprehensive courses on music production, business, and marketing strategies for the modern creative professional.",
    image: youtubeChannel,
    siteUrl: "https://www.youtube.com/@mixedby8i",
    githubUrl: "https://github.com/isaiahvickers/iia",
    techStack: [],
    featured: true,
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
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};

function TechStackOrbit({
  techStack,
  isHovered,
}: {
  techStack: string[];
  isHovered: boolean;
}) {
  return (
    <motion.div
      className="absolute bottom-4 left-4 right-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{
        opacity: isHovered ? 1 : 0,
        y: isHovered ? 0 : 10,
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex items-center gap-2 flex-wrap">
        {techStack.map((tech, index) => {
          const techInfo = techIcons[tech];
          return (
            <motion.div
              key={tech}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: isHovered ? 1 : 0,
                opacity: isHovered ? 1 : 0,
              }}
              transition={{
                duration: 0.3,
                delay: isHovered ? index * 0.05 : 0,
                type: "spring",
                stiffness: 300,
              }}
              className="px-3 py-1.5 rounded-full backdrop-blur-sm border border-border/50 text-xs font-mono flex items-center gap-2 z-10"
            >
              <div
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: techInfo.color }}
              />
              <span className="text-foreground">{techInfo.label}</span>
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
}

function ProjectCard({ project }: { project: (typeof projects)[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      variants={itemVariants}
      className={`
        group relative overflow-hidden rounded-2xl
        bg-card/60 backdrop-blur-md border border-border
        transition-all duration-500
        hover:border-gold/50
        ${project.featured ? "lg:col-span-2" : ""}
      `}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ scale: 1.01 }}
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-gold/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="relative p-6 lg:p-8">
        {/* Project preview area */}

        <div className="relative aspect-video mb-6 rounded-xl overflow-hidden bg-muted/20 border border-border/30">
          {/* Image */}
          <Image
            src={project.image}
            alt={project.title}
            width={1920}
            height={1080}
            className="absolute inset-0 size-full rounded-xl object-cover transition-transform duration-500 group-hover:scale-105"
          />


          {/* Project title overlay */}
          {/* <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-2xl lg:text-3xl font-bold text-gold/60">
              {project.title}
            </span>
          </div> */}

          {/* Hover overlay with links */}
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.6 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="absolute inset-0 bg-background/90 backdrop-blur-sm flex items-center justify-center gap-4"
              >
                <Button
                  asChild
                  size="sm"
                  className="bg-gold text-primary-foreground hover:bg-gold/90"
                >
                  <Link
                    href={project.siteUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLinkIcon className="mr-2 h-4 w-4" />
                    Visit Site
                  </Link>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  size="sm"
                  className="border-gold/50 text-gold hover:bg-gold/10 bg-transparent"
                >
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaGithub className="mr-2 size-4" />
                    GitHub
                  </Link>
                </Button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Tech Stack Orbit */}
          <TechStackOrbit techStack={project.techStack} isHovered={isHovered} />
        </div>

        {/* Project info */}
        <div>
          <h3 className="text-xl lg:text-2xl font-semibold text-gold mb-3">
            {project.title}
          </h3>
          <p className="text-muted-foreground leading-relaxed text-pretty text-sm lg:text-base">
            {project.description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export function ProjectsSection() {
  return (
    <section id="projects" className="relative py-24 px-4">
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
            Featured Work
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">
            My Current Projects
          </h2>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-2 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
