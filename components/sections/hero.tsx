"use client";

import { motion } from "framer-motion";
import {
  FADE_IN_ANIMATION,
  SLIDE_UP_ANIMATION,
  STAGGER_CONTAINER,
  STAGGER_ITEM,
} from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-32 pb-20 sm:pt-40 sm:pb-24 md:pt-48 md:pb-32">
      {/* Subtle gradient background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 via-background to-background" />
      <div className="absolute inset-0 grid-pattern opacity-40" />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-3xl text-center"
          variants={STAGGER_CONTAINER}
          initial="initial"
          animate="animate"
        >
          {/* Problem Statement */}
          <motion.p
            variants={STAGGER_ITEM}
            className="text-base sm:text-lg text-muted-foreground mb-4 px-2"
          >
            Still managing customer inquiries manually on WhatsApp?
          </motion.p>

          {/* Main Headline */}
          <motion.h1
            variants={STAGGER_ITEM}
            className="text-4xl sm:text-5xl md:text-6xl font-semibold leading-[1.1] text-foreground mb-6 sm:mb-8 px-2 max-w-4xl mx-auto"
          >
            We help Indonesian businesses automate replies, follow-ups, and daily operations
          </motion.h1>

          {/* Subheadline - Outcome Focused */}
          <motion.p
            variants={STAGGER_ITEM}
            className="text-lg sm:text-xl text-muted-foreground/90 mb-8 sm:mb-12 leading-relaxed px-2 max-w-3xl mx-auto"
          >
            Too many businesses lose customers because replies are slow, follow-ups are forgotten, and operations depend entirely on manual work. We fix that.
          </motion.p>


          {/* CTA Buttons */}
          <motion.div
            variants={STAGGER_ITEM}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <a
              href="#onboarding"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground text-background hover:bg-foreground/90 px-6 py-3 font-medium transition-all w-full sm:w-auto text-sm"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#how-it-works"
              className="inline-flex items-center justify-center rounded-xl border border-border/60 bg-background hover:bg-secondary/50 text-foreground px-6 py-3 font-medium transition-all w-full sm:w-auto text-sm"
            >
              See How It Works
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.p
            variants={STAGGER_ITEM}
            className="mt-8 text-sm text-muted-foreground/70 px-4"
          >
            Free 30-minute consultation • No credit card required
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
