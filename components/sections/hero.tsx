"use client";

import { motion } from "framer-motion";
import { ArrowRight, BookOpen, Zap } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative flex items-center bg-background overflow-hidden border-b border-border">

      {/* Ambient radial light */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-5%,rgba(120,113,108,0.08)_0%,transparent_70%)] dark:bg-[radial-gradient(ellipse_90%_60%_at_50%_-5%,rgba(255,255,255,0.04)_0%,transparent_70%)] pointer-events-none" />

      {/* Fine grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.035)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.035)_1px,transparent_1px)] dark:bg-[linear-gradient(to_right,rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      {/* Bottom vignette */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28 w-full">

        {/* Overline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="flex items-center gap-3 mb-12"
        >
          <div className="w-8 h-px bg-foreground/20" />
          <span className="text-[10px] font-mono text-muted-foreground/60 tracking-[0.2em] uppercase">
            Operational Intelligence Platform
          </span>
        </motion.div>

        {/* Philosophy headline */}
        <motion.h1
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-[clamp(2.6rem,7vw,6rem)] font-bold tracking-[-0.05em] leading-[0.97] text-foreground mb-10 max-w-4xl"
        >
          Businesses lose customers quietly.
          <br />
          <span className="text-muted-foreground/40">We fix the systems behind that.</span>
        </motion.h1>

        {/* Worldview — two sharp sentences */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.22 }}
          className="max-w-xl mb-12 space-y-3"
        >
          <p className="text-base text-muted-foreground leading-relaxed">
            Modern work becomes chaotic when operational systems are unclear.
            Slow replies, missed follow-ups, and manual coordination aren&apos;t just
            inconveniences — they compound into business failure.
          </p>
          <p className="text-sm text-muted-foreground/60 leading-relaxed">
            Your Product Guy builds automation systems that remove that friction,
            and teaches the product thinking that prevents it from coming back.
          </p>
        </motion.div>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.32 }}
          className="flex flex-col sm:flex-row gap-3"
        >
          <a
            href="/automation"
            className="group inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/85 transition-all"
          >
            <Zap className="h-4 w-4" />
            Book Free Automation Call
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="/learn"
            className="group inline-flex items-center gap-2 px-5 py-2.5 border border-border bg-card text-foreground rounded-lg text-sm font-medium hover:border-foreground/30 transition-all"
          >
            <BookOpen className="h-4 w-4" />
            Explore PM Knowledge
            <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
