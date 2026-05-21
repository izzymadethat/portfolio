"use client";
import {
  ArrowDownCircleIcon,
  ArrowDownIcon,
  DownloadIcon,
  MailIcon,
} from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import { FaGithubAlt, FaLinkedin, FaXTwitter } from "react-icons/fa6";
import { Button } from "./ui/button";
import Image from "next/image";
import headshot from "@/assets/headshot.png";

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center px-4 py-20"
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Animated entrance */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Photo */}
          <motion.div
            className="relative mx-auto mb-8 size-32 md:size-40"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute inset-0 rounded-full bg-linear-to-br from-gold/50 to-nebula/50 blur-xl animate-pulse" />
            <div className="relative size-48 rounded-full border-2 border-gold/30 bg-card backdrop-blur-sm overflow-hidden flex items-center justify-center">
              <Image
                src={headshot}
                alt="Isaiah Vickers"
                width={256}
                height={256}
                className="rounded-full object-cover size-full"
              />
            </div>
          </motion.div>

          {/* Glowing name */}
          <motion.h1
            className="relative text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <span className="relative inline-block">
              <span
                className="absolute inset-0 blur-2xl bg-linear-to-r from-gold via-nebula to-gold opacity-50"
                aria-hidden="true"
              >
                Isaiah Vickers
              </span>
              <span className="relative bg-linear-to-r from-gold via-foreground to-gold bg-clip-text text-transparent">
                Isaiah Vickers
              </span>
            </span>
          </motion.h1>

          {/* Headline */}
          <motion.p
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground max-w-3xl mx-auto mb-10 leading-relaxed text-balance"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            Architect of{" "}
            <span className="text-gold font-medium">Sound</span>,{" "}
            <span className="text-nebula font-medium">Code</span>, and{" "}
            <span className="text-foreground font-medium">Connectivity</span>.
          </motion.p>

          {/* CTA Group */}
          <motion.div
            className="flex flex-wrap items-center justify-center gap-4 mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <Button
              asChild
              size="lg"
              className="bg-gold text-primary-foreground hover:bg-gold/90 transition-all duration-300 hover:shadow-[0_0_30px_oklch(0.78_0.15_85/0.5)]"
            >
              <Link href="#about">
                Learn More
                <ArrowDownCircleIcon className="ml-2 h-4 w-4" />
              </Link>
            </Button>

            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-gold/50 text-gold hover:bg-gold/10 hover:border-gold transition-all duration-300 bg-transparent"
            >
              <Link href="#contact">
                <MailIcon className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>

            <Button
              variant="outline"
              size="lg"
              className="border-nebula/50 text-nebula hover:bg-nebula/10 hover:border-nebula transition-all duration-300 bg-transparent"
            >
              <DownloadIcon className="mr-2 h-4 w-4" />
              Download Resume
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 1 }}
          >
            <Link
              href="https://github.com/izzymadethat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors duration-300"
              aria-label="GitHub"
            >
              <FaGithubAlt className="size-6" />
            </Link>
            <Link
              href="https://linkedin.com/in/isaiah-vickers"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="size-6" />
            </Link>
            <Link
              href="https://x.com/madeby_850izzy"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-gold transition-colors duration-300"
              aria-label="Twitter"
            >
              <FaXTwitter className="size-6" />
            </Link>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, y: [0, 10, 0] }}
            transition={{
              opacity: { delay: 1.2, duration: 0.6 },
              y: { delay: 1.2, duration: 2, repeat: Infinity },
            }}
          >
            <ArrowDownIcon className="size-6 text-muted-foreground" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
