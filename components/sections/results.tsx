"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { RESULTS, STAGGER_CONTAINER, STAGGER_ITEM } from "@/lib/constants";
import { TrendingUp } from "lucide-react";

export default function ResultsSection() {
  return (
    <section className="py-24 md:py-32 border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            What Businesses Gain
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Operational metrics that matter to your business.
          </p>
        </div>

        {/* Results Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={STAGGER_CONTAINER}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {RESULTS.map((result, index) => (
            <motion.div key={index} variants={STAGGER_ITEM}>
              <Card className="p-8 text-center hover:border-foreground/30 transition-all h-full border border-border">
                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <TrendingUp className="h-6 w-6 text-foreground/60" />
                </div>

                {/* Metric */}
                <div className="mb-3">
                  <p className="text-4xl md:text-5xl font-bold text-foreground">
                    {result.metric}
                  </p>
                </div>

                {/* Label */}
                <p className="text-sm text-muted-foreground">{result.label}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Operational Efficiency Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-6">
          {[
            {
              label: "Revenue Impact",
              items: [
                "More qualified leads",
                "Higher conversion rates",
                "Faster payment collection",
              ],
            },
            {
              label: "Operational Efficiency",
              items: [
                "No manual data entry",
                "Automated workflows",
                "Real-time insights",
              ],
            },
          ].map((section, index) => (
            <Card
              key={index}
              className="p-6 border border-border hover:border-foreground/30 transition-all"
            >
              <h4 className="font-bold text-foreground mb-4">{section.label}</h4>
              <ul className="space-y-3">
                {section.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex gap-3 items-start">
                    <span className="inline-block h-1.5 w-1.5 rounded-full bg-foreground mt-1.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
