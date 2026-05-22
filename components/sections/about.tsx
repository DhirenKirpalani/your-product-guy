"use client";

import { motion } from "framer-motion";
import { SLIDE_UP_ANIMATION } from "@/lib/constants";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="py-24 md:py-32 border-t border-border bg-background"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={SLIDE_UP_ANIMATION}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground">
            About Your Product Guy
          </h2>

          <div className="prose prose-invert max-w-none space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Your Product Guy helps Indonesian businesses modernize operations using AI
              automation systems.
            </p>

            <p className="text-lg text-muted-foreground leading-relaxed">
              We combine product strategy, automation workflows, and full-stack development to
              build practical business systems that improve efficiency and customer operations.
            </p>

            <div className="pt-8 border-t border-border mt-8">
              <p className="text-sm text-muted-foreground mb-4 font-medium">OUR MISSION</p>
              <p className="text-lg text-foreground font-medium">
                Make enterprise-level operational automation accessible to Indonesian SMEs.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pt-8">
              {[
                {
                  label: "Product-Driven",
                  description: "Every system is designed for real business outcomes.",
                },
                {
                  label: "Operationally Focused",
                  description: "Solutions built for businesses, not tech demos.",
                },
                {
                  label: "Indonesia-First",
                  description: "Built specifically for SME workflows and constraints.",
                },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <p className="font-bold text-foreground mb-2">{item.label}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
