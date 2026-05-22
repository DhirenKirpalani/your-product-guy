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
          {/* Main Headline */}
          <motion.h1
            variants={STAGGER_ITEM}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold leading-[1.1] text-foreground mb-6 sm:mb-8 px-2 max-w-4xl mx-auto"
          >
            Automate your business operations with AI
          </motion.h1>

          {/* Subheadline - Outcome Focused */}
          <motion.p
            variants={STAGGER_ITEM}
            className="text-lg sm:text-xl md:text-2xl text-muted-foreground/90 mb-8 sm:mb-12 leading-relaxed px-2 max-w-3xl mx-auto font-normal"
          >
            Build AI-powered systems that handle customer communication, bookings, and sales—so you can focus on growing your business.
          </motion.p>


          {/* CTA Buttons */}
          <motion.div
            variants={STAGGER_ITEM}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center px-4"
          >
            <a
              href="https://wa.me/62812345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-foreground text-background hover:bg-foreground/90 px-5 py-2.5 font-medium transition-all w-full sm:w-auto text-sm"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#demo"
              className="inline-flex items-center justify-center rounded-xl border border-border/60 bg-background hover:bg-secondary/50 text-foreground px-5 py-2.5 font-medium transition-all w-full sm:w-auto text-sm"
            >
              View Demo
            </a>
          </motion.div>

          {/* Trust indicators */}
          <motion.p
            variants={STAGGER_ITEM}
            className="mt-8 text-xs text-muted-foreground/70 px-4"
          >
            Trusted by Indonesian SMEs • No credit card required
          </motion.p>
        </motion.div>

        {/* Dashboard Mockup - Simplified */}
        <motion.div
          variants={SLIDE_UP_ANIMATION}
          initial="initial"
          animate="animate"
          transition={{ delay: 0.4 }}
          className="mt-12 sm:mt-20 md:mt-32 relative"
        >
          <div className="mx-auto max-w-5xl rounded-2xl border border-border/50 bg-card shadow-2xl overflow-hidden">
            {/* Dashboard Header */}
            <div className="bg-secondary/50 border-b border-border/50 px-4 sm:px-6 py-3 flex items-center gap-2">
              <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
              <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
              <div className="h-2 w-2 rounded-full bg-muted-foreground/30" />
              <span className="ml-auto text-[11px] font-medium text-muted-foreground hidden sm:inline tracking-wide">OPERATIONS DASHBOARD</span>
            </div>

            {/* Dashboard Content */}
            <div className="p-4 sm:p-8 md:p-12 bg-card">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 sm:gap-4 mb-6 sm:mb-8">
                {/* Metric Cards */}
                {[
                  { label: "Messages Replied", value: "2,847", status: "↑ 23%" },
                  { label: "Appointments Booked", value: "156", status: "↑ 41%" },
                  { label: "Leads Captured", value: "89", status: "↑ 18%" },
                ].map((metric) => (
                  <div
                    key={metric.label}
                    className="p-4 sm:p-5 rounded-xl bg-secondary/50 border border-border/50 hover:border-border transition-all"
                  >
                    <p className="text-[11px] text-muted-foreground mb-2 font-medium uppercase tracking-wide">{metric.label}</p>
                    <p className="text-2xl sm:text-3xl font-semibold text-foreground mb-1">{metric.value}</p>
                    <p className="text-xs text-green-600 dark:text-green-400 font-medium">{metric.status}</p>
                  </div>
                ))}
              </div>

              {/* WhatsApp Chat Preview */}
              <div className="bg-secondary/30 rounded-xl p-4 sm:p-5 border border-border/50">
                <div className="text-[11px] text-muted-foreground mb-4 font-medium flex items-center gap-2 uppercase tracking-wide">
                  <div className="h-1.5 w-1.5 rounded-full bg-green-500" />
                  Live Chat
                </div>
                <div className="space-y-3 text-sm">
                  <div className="text-left">
                    <div className="inline-block bg-background p-3 rounded-2xl max-w-[85%] sm:max-w-xs border border-border/50">
                      <p className="text-foreground/90">
                        Hi, I'd like to book an appointment this Friday
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="inline-block bg-foreground p-3 rounded-2xl max-w-[85%] sm:max-w-xs">
                      <p className="text-background">
                        Perfect! I've found slots at 2 PM or 4 PM. Which works for you?
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </motion.div>
      </div>
    </section>
  );
}
