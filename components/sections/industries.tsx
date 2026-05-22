"use client";

import { motion } from "framer-motion";
import { INDUSTRIES, STAGGER_CONTAINER, STAGGER_ITEM } from "@/lib/constants";
import { Badge } from "@/components/ui/badge";

export default function IndustriesSection() {
  return (
    <section className="py-24 md:py-32 border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Built for Indonesian SMEs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Proven across service businesses, retail, and operations-heavy industries.
          </p>
        </div>

        {/* Industry Tags */}
        <motion.div
          className="flex flex-wrap gap-4 justify-center"
          variants={STAGGER_CONTAINER}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {INDUSTRIES.map((industry, index) => (
            <motion.div key={index} variants={STAGGER_ITEM}>
              <Badge
                variant="outline"
                className="px-4 py-2 text-sm border-border hover:border-foreground/50 transition-colors cursor-default"
              >
                {industry}
              </Badge>
            </motion.div>
          ))}
        </motion.div>

        {/* Value Proposition */}
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "Same Workflow",
                description: "WhatsApp-first automation works across all industries.",
              },
              {
                title: "Customizable Logic",
                description: "Each system adapts to your specific business process.",
              },
              {
                title: "Proven Results",
                description: "Real businesses, real revenue impact, documented outcomes.",
              },
            ].map((item, index) => (
              <div key={index} className="text-center p-4">
                <p className="font-medium text-foreground mb-2">{item.title}</p>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
