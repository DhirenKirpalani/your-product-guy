"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const WORKFLOW_STEPS = [
  {
    number: "01",
    title: "Customer sends message",
    description: "Via WhatsApp, just like they do now",
  },
  {
    number: "02",
    title: "AI responds instantly",
    description: "Answers questions, provides information, 24/7",
  },
  {
    number: "03",
    title: "Leads captured automatically",
    description: "Contact info and requests saved for you",
  },
  {
    number: "04",
    title: "Follow-ups run automatically",
    description: "Reminders and check-ins happen on schedule",
  },
  {
    number: "05",
    title: "Business owner receives organized data",
    description: "All customer information in one dashboard",
  },
];

export default function WorkflowSection() {
  return (
    <section className="py-24 md:py-32 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
            How It Works
          </h2>
          <p className="text-lg text-muted-foreground">
            Simple automation that works in the background while you focus on your business.
          </p>
        </div>

        {/* Horizontal workflow */}
        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-border" />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4">
            {WORKFLOW_STEPS.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative"
              >
                {/* Step number */}
                <div className="relative z-10 inline-flex items-center justify-center w-10 h-10 rounded-full bg-foreground text-background font-mono text-sm font-medium mb-4">
                  {step.number}
                </div>
                
                {/* Arrow connector for mobile */}
                {index < WORKFLOW_STEPS.length - 1 && (
                  <div className="lg:hidden flex justify-center my-4">
                    <ArrowRight className="h-5 w-5 text-muted-foreground rotate-90" />
                  </div>
                )}
                
                {/* Content */}
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
