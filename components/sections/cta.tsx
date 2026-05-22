"use client";

import { motion } from "framer-motion";
import { SLIDE_UP_ANIMATION, STAGGER_ITEM } from "@/lib/constants";
import { ArrowRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-24 md:py-32 border-t border-border bg-card">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={SLIDE_UP_ANIMATION}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-center space-y-8"
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-foreground">
            Stop Losing Customers to Slow Manual Processes
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Let's talk about how automation can improve your operations. Free consultation, no pressure.
          </p>

          <motion.div variants={STAGGER_ITEM} className="pt-4">
            <a
              href="#onboarding"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-foreground text-background hover:bg-foreground/90 px-6 py-3 font-medium transition-all"
            >
              Book Free Automation Audit
              <ArrowRight className="h-4 w-4" />
            </a>
          </motion.div>

          <p className="text-sm text-muted-foreground">
            ✓ No credit card required &nbsp; • &nbsp; Free consultation &nbsp; • &nbsp; See results in 7 days
          </p>
        </motion.div>
      </div>
    </section>
  );
}
