"use client";

import { motion } from "motion/react";
import Link from "next/dist/client/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative z-10 border-t border-border/30 bg-background/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-4 md:flex-row"
        >
          <div className="flex items-center gap-2">
            <div className="size-32 h-auto rounded-full">
              <Image
                src="/logo.png"
                alt="Logo"
                width={792}
                height={396}
                className="rounded-full size-full"
              />
            </div>
            <span className="text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">
              Sound, Code, and Connectivity
            </span>
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Isaiah Vickers. All rights
            reserved.
            <br /> 
            <Link
              href="https://github.com/izzymadethat/portfolio"
              target="_blank"
              rel="noopener noreferrer"
              className="underline text-xs text-muted-foreground transition-colors hover:text-gold"
            >
              View and Follow my Updates to this Portfolio on GitHub
            </Link>
          </p>

          <div className="flex items-center gap-4">
            <a
              href="#hero"
              className="text-sm text-muted-foreground transition-colors hover:text-gold"
            >
              Back to Top
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
