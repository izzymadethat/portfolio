"use client";

import {
  Briefcase,
  Crown,
  ExternalLink,
  MessageCircle,
  Send,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";

type ContactMode = "hire" | "chess" | "sayhi" | null;

const serviceTypes = [
  "Audio Engineering",
  "Music Production",
  "Software Development",
  "Network Administration",
  "Consulting",
  "Other",
];

const subjects = [
  "Project Inquiry",
  "Collaboration",
  "Job Opportunity",
  "General Question",
  "Other",
];

export function ContactSection() {
  const [mode, setMode] = useState<ContactMode>(null);
  const [subject, setSubject] = useState<string>("");
  const [serviceType, setServiceType] = useState<string>("");

  const showServiceType = mode === "hire" && subject === "Project Inquiry";

  const resetForm = () => {
    setSubject("");
    setServiceType("");
  };

  const handleModeChange = (newMode: ContactMode) => {
    if (mode === newMode) {
      setMode(null);
      resetForm();
    } else {
      setMode(newMode);
      resetForm();
    }
  };

  return (
    <section id="contact" className="relative py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Section header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block text-gold text-sm font-mono tracking-wider uppercase mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Contact Universe
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto text-pretty">
            Choose your mission and let&apos;s connect across the cosmos.
          </p>
        </motion.div>

        {/* Contact Mode Triggers */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Button
            size="lg"
            onClick={() => handleModeChange("hire")}
            className={`
              transition-all duration-300 min-w-35
              ${
                mode === "hire"
                  ? "bg-gold text-primary-foreground shadow-[0_0_30px_oklch(0.78_0.15_85/0.5)]"
                  : "bg-card/60 backdrop-blur-md border border-border text-gold hover:bg-gold/10 hover:border-gold/50"
              }
            `}
          >
            <Briefcase className="mr-2 h-5 w-5" />
            Hire Me
          </Button>

          <Button
            size="lg"
            onClick={() => handleModeChange("chess")}
            className={`
              transition-all duration-300 min-w-35
              ${
                mode === "chess"
                  ? "bg-nebula text-foreground shadow-[0_0_30px_oklch(0.55_0.18_300/0.5)]"
                  : "bg-card/60 backdrop-blur-md border border-border text-nebula hover:bg-nebula/10 hover:border-nebula/50"
              }
            `}
          >
            <Crown className="mr-2 h-5 w-5" />
            Play Chess
          </Button>

          <Button
            size="lg"
            onClick={() => handleModeChange("sayhi")}
            className={`
              transition-all duration-300 min-w-35
              ${
                mode === "sayhi"
                  ? "bg-gold text-primary-foreground shadow-[0_0_30px_oklch(0.78_0.15_85/0.5)]"
                  : "bg-card/60 backdrop-blur-md border border-border text-foreground hover:bg-foreground/10 hover:border-foreground/50"
              }
            `}
          >
            <MessageCircle className="mr-2 h-5 w-5" />
            Say Hi
          </Button>
        </motion.div>

        {/* Dynamic Content Area */}
        <AnimatePresence mode="wait">
          {mode && (
            <motion.div
              key={mode}
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-card/60 backdrop-blur-md rounded-2xl border border-border p-6 md:p-8"
            >
              {/* Hire Me Form */}
              {mode === "hire" && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold text-gold mb-2">
                      Let&apos;s Work Together
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Tell me about your project and how I can help.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="hire-name"
                        className="text-sm font-medium text-foreground"
                      >
                        Name
                      </label>
                      <Input
                        id="hire-name"
                        placeholder="Your name"
                        className="bg-input/50 border-border focus:border-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="hire-email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email
                      </label>
                      <Input
                        id="hire-email"
                        type="email"
                        placeholder="your@email.com"
                        className="bg-input/50 border-border focus:border-gold"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="hire-subject"
                      className="text-sm font-medium text-foreground"
                    >
                      Subject
                    </label>
                    <Select value={subject} onValueChange={setSubject}>
                      <SelectTrigger
                        id="hire-subject"
                        className="bg-input/50 border-border focus:border-gold"
                      >
                        <SelectValue placeholder="Select a subject" />
                      </SelectTrigger>
                      <SelectContent className="bg-card border-border">
                        {subjects.map((subj) => (
                          <SelectItem key={subj} value={subj}>
                            {subj}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Conditional Service Type */}
                  <AnimatePresence>
                    {showServiceType && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="space-y-2"
                      >
                        <label
                          htmlFor="service-type"
                          className="text-sm font-medium text-foreground"
                        >
                          Service Type
                        </label>
                        <Select
                          value={serviceType}
                          onValueChange={setServiceType}
                        >
                          <SelectTrigger
                            id="service-type"
                            className="bg-input/50 border-border focus:border-gold"
                          >
                            <SelectValue placeholder="What type of service?" />
                          </SelectTrigger>
                          <SelectContent className="bg-card border-border">
                            {serviceTypes.map((type) => (
                              <SelectItem key={type} value={type}>
                                {type}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <div className="space-y-2">
                    <label
                      htmlFor="hire-message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <Textarea
                      id="hire-message"
                      placeholder="Tell me about your project..."
                      rows={4}
                      className="bg-input/50 border-border focus:border-gold resize-none"
                    />
                  </div>

                  <Button className="w-full bg-gold text-primary-foreground hover:bg-gold/90 transition-all duration-300 hover:shadow-[0_0_30px_oklch(0.78_0.15_85/0.5)]">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </div>
              )}

              {/* Play Chess Content */}
              {mode === "chess" && (
                <div className="text-center space-y-8">
                  <div>
                    <h3 className="text-2xl font-semibold text-nebula mb-2">
                      Challenge Me to a Game
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      Find me on your favorite chess platform and let&apos;s
                      battle!
                    </p>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6 max-w-md mx-auto">
                    {/* Chess.com */}
                    <motion.div
                      className="bg-card/40 rounded-xl p-6 border border-border hover:border-nebula/50 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-nebula/10 flex items-center justify-center">
                        {/* <span className="text-2xl font-bold text-nebula">
                          C.c
                        </span> */}
                        <img
                          src="https://www.chess.com/bundles/web/images/brand/chesscom_pawn.5dfdea51.png"
                          alt="Chess.com Logo"
                          width={32}
                          height={32}
                          className="object-contain size-full"
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        Chess.com
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        @izzy850
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full border-nebula/50 text-nebula hover:bg-nebula/10 bg-transparent"
                      >
                        <Link
                          href="https://www.chess.com/member/izzy850"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Challenge
                        </Link>
                      </Button>
                    </motion.div>

                    {/* LiChess */}
                    <motion.div
                      className="bg-card/40 rounded-xl p-6 border border-border hover:border-nebula/50 transition-colors duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-16 h-16 mx-auto mb-4 rounded-xl bg-nebula/10 flex items-center justify-center">
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/4/47/Lichess_logo_2019.png?utm_source=commons.wikimedia.org&utm_campaign=index&utm_content=original"
                          alt="LiChess Logo"
                          width={32}
                          height={32}
                          className="object-contain size-full"
                        />
                      </div>
                      <h4 className="text-lg font-semibold text-foreground mb-1">
                        LiChess
                      </h4>
                      <p className="text-muted-foreground text-sm mb-4">
                        @izzy850
                      </p>
                      <Button
                        asChild
                        variant="outline"
                        size="sm"
                        className="w-full border-nebula/50 text-nebula hover:bg-nebula/10 bg-transparent"
                      >
                        <Link
                          href="https://lichess.org/@/izzy850"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <ExternalLink className="mr-2 h-4 w-4" />
                          Challenge
                        </Link>
                      </Button>
                    </motion.div>
                  </div>
                </div>
              )}

              {/* Say Hi Form */}
              {mode === "sayhi" && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-semibold text-foreground mb-2">
                      Just Saying Hello?
                    </h3>
                    <p className="text-muted-foreground text-sm">
                      I&apos;d love to hear from you! Drop me a message.
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label
                        htmlFor="sayhi-name"
                        className="text-sm font-medium text-foreground"
                      >
                        Name
                      </label>
                      <Input
                        id="sayhi-name"
                        placeholder="Your name"
                        className="bg-input/50 border-border focus:border-gold"
                      />
                    </div>
                    <div className="space-y-2">
                      <label
                        htmlFor="sayhi-email"
                        className="text-sm font-medium text-foreground"
                      >
                        Email
                      </label>
                      <Input
                        id="sayhi-email"
                        type="email"
                        placeholder="your@email.com"
                        className="bg-input/50 border-border focus:border-gold"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <label
                      htmlFor="sayhi-message"
                      className="text-sm font-medium text-foreground"
                    >
                      Message
                    </label>
                    <Textarea
                      id="sayhi-message"
                      placeholder="What's on your mind?"
                      rows={4}
                      className="bg-input/50 border-border focus:border-gold resize-none"
                    />
                  </div>

                  <Button className="w-full bg-gold text-primary-foreground hover:bg-gold/90 transition-all duration-300 hover:shadow-[0_0_30px_oklch(0.78_0.15_85/0.5)]">
                    <Send className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Empty state prompt */}
        <AnimatePresence>
          {!mode && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="text-center py-12"
            >
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-card/60 backdrop-blur-md border border-border flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-gold animate-pulse" />
              </div>
              <p className="text-muted-foreground">
                Select a mission above to begin
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
