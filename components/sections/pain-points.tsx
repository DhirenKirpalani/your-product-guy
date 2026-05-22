"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { PAIN_POINTS, STAGGER_CONTAINER, STAGGER_ITEM } from "@/lib/constants";
import { AlertCircle } from "lucide-react";

export default function PainPointsSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-3 sm:mb-4">
            Your Business Is Losing Time and Customers
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            Without operational automation, you're competing with one hand tied behind your back.
          </p>
        </div>

        {/* Pain Points Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6"
          variants={STAGGER_CONTAINER}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {PAIN_POINTS.map((point, index) => (
            <motion.div key={index} variants={STAGGER_ITEM}>
              <Card className="p-4 sm:p-6 hover:border-foreground/50 transition-all hover:shadow-md h-full">
                <div className="flex gap-3 sm:gap-4 items-start">
                  <div className="mt-1 flex-shrink-0">
                    <AlertCircle className="h-5 w-5 text-muted-foreground" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-bold text-foreground text-base sm:text-lg mb-2">{point.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {point.description}
                    </p>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Impact Summary */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
          <p className="text-foreground text-center font-medium text-sm sm:text-base">
            Indonesian SMEs lose an average of{" "}
            <span className="font-bold text-primary">15-20 hours per week</span> to manual operational tasks.
            <br className="hidden sm:block" />
            <span className="sm:hidden"> </span>
            That's <span className="font-bold text-primary">40% of productive business time</span>.
          </p>
        </div>
      </div>
    </section>
  );
}
