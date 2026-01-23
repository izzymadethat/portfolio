"use client";
import { motion } from "motion/react";

export function AboutSection() {
  return (
    <section id="about" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Section label */}
          <motion.span
            className="inline-block text-gold text-sm font-mono tracking-wider uppercase mb-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            About Me
          </motion.span>
          {/* Main heading */}
          <motion.h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            A Multidisciplinary Creator
          </motion.h2>

          {/* About content */}
          <motion.div
            className="space-y-6 text-lg text-muted-foreground leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <p className="text-pretty">
              I&apos;m Isaiah Vickers, a passionate creator who thrives at the
              crossroads of technology and artistry. My journey began with a
              deep love for music and sound engineering, which naturally evolved
              into an obsession with the systems that power our connected world.
            </p>

            <p className="text-pretty">
              As an{" "}
              <span className="text-gold font-medium">Audio Engineer</span> and{" "}
              <span className="text-gold font-medium">Musician</span>, I craft
              sonic experiences that resonate. As a{" "}
              <span className="text-nebula font-medium">
                Software Developer
              </span>
              , I build digital solutions that solve real problems. And as a{" "}
              <span className="text-foreground font-medium">
                Networking Administrator
              </span>
              , I architect the invisible infrastructure that keeps everything
              connected.
            </p>

            <p className="text-pretty">
              When I&apos;m not immersed in code or sound waves, you&apos;ll
              find me strategizing over a chessboard, constantly sharpening my
              mind and exploring the beautiful complexity of the game.
            </p>
          </motion.div>

          {/* Decorative line */}
          <motion.div
            className="mt-12 mx-auto w-24 h-0.5 bg-gradient-to-r from-transparent via-gold to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
          />
        </motion.div>
      </div>
    </section>
  );
}
