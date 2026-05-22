"use client";

import { motion } from "framer-motion";
import { SLIDE_UP_ANIMATION } from "@/lib/constants";
import { CheckCircle2 } from "lucide-react";

const WORKFLOW_STEPS = [
  {
    number: "1",
    title: "Customers message your business",
    description: "Via WhatsApp, just like they do now",
  },
  {
    number: "2",
    title: "System responds instantly",
    description: "Answers questions, provides information, 24/7",
  },
  {
    number: "3",
    title: "Leads organized automatically",
    description: "Contact info and requests saved for you",
  },
  {
    number: "4",
    title: "Follow-ups run automatically",
    description: "Reminders and check-ins happen on schedule",
  },
];

export default function HowItWorksSection() {
  return (
    <section
      id="how-it-works"
      className="py-24 md:py-32 border-t border-border bg-background"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple automation that works in the background while you focus on your business.
          </p>
        </div>

        {/* Workflow Visualization */}
        <motion.div
          variants={SLIDE_UP_ANIMATION}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="relative"
        >
          {/* Desktop - Horizontal Flow */}
          <div className="hidden md:flex justify-between items-center relative">
            {/* Connecting Line */}
            <div className="absolute top-12 left-0 right-0 h-0.5 bg-border -z-10" />

            {/* Steps */}
            {WORKFLOW_STEPS.map((step, index) => (
              <div key={index} className="flex flex-col items-center text-center w-1/5">
                {/* Node */}
                <div className="mb-6 relative">
                  <div className="h-24 w-24 rounded-full border-2 border-border bg-card flex items-center justify-center shadow-sm hover:border-foreground/50 transition-all">
                    <span className="text-2xl font-bold text-foreground">{step.number}</span>
                  </div>
                </div>

                {/* Text */}
                <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                <p className="text-sm text-muted-foreground">{step.description}</p>
              </div>
            ))}
          </div>

          {/* Mobile - Vertical Flow */}
          <div className="md:hidden space-y-6">
            {WORKFLOW_STEPS.map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                {/* Line */}
                {index < WORKFLOW_STEPS.length - 1 && (
                  <div className="absolute left-12 top-20 h-12 w-0.5 bg-border" />
                )}

                {/* Node */}
                <div className="flex-shrink-0">
                  <div className="h-24 w-24 rounded-full border-2 border-border bg-card flex items-center justify-center flex-shrink-0">
                    <span className="text-xl font-bold text-foreground">{step.number}</span>
                  </div>
                </div>

                {/* Text */}
                <div className="pt-2">
                  <h3 className="font-bold text-foreground mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Key Benefit */}
        <div className="mt-16 p-8 rounded-lg border border-border bg-secondary/50">
          <div className="flex items-start gap-3">
            <CheckCircle2 className="h-6 w-6 text-foreground flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-medium text-foreground mb-2">
                Zero Manual Data Entry
              </p>
              <p className="text-sm text-muted-foreground">
                Every customer interaction is automatically captured, organized, and actionable.
                Your team spends time on strategy, not spreadsheets.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
