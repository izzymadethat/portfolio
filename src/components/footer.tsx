"use client";

import { motion } from "motion/react";

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
            <span className="text-xl font-bold text-gold">IV</span>
            <span className="text-muted-foreground">|</span>
            <span className="text-sm text-muted-foreground">
              Sound, Code, and Connectivity
            </span>
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Isaiah Vickers. All rights
            reserved.
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
