"use client";

import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SERVICES, STAGGER_CONTAINER, STAGGER_ITEM } from "@/lib/constants";
import {
  MessageCircle,
  Headphones,
  TrendingUp,
  Calendar,
  Receipt,
  Share2,
} from "lucide-react";

const ICONS = [MessageCircle, TrendingUp, Calendar, Headphones, Receipt, Share2];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-24 md:py-32 border-t border-border bg-card">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-3 sm:mb-4">
            Stop Losing Customers to Slow Operations
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground">
            We automate the daily tasks that waste your time and cost you money.
          </p>
        </div>

        {/* Services Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={STAGGER_CONTAINER}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {SERVICES.map((service, index) => {
            const Icon = ICONS[index];
            return (
              <motion.div key={index} variants={STAGGER_ITEM}>
                <Card className="p-4 sm:p-6 hover:border-primary/30 transition-all hover:shadow-lg h-full flex flex-col border border-border group">
                  {/* Icon */}
                  <div className="mb-3 sm:mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                    <Icon className="h-5 w-5 text-primary" />
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-base sm:text-lg text-foreground mb-2">{service.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 sm:mb-4 flex-1">
                    {service.description}
                  </p>

                  {/* Outcome */}
                  <div className="pt-3 sm:pt-4 border-t border-border">
                    <p className="text-sm font-medium text-primary">
                      ✓ {service.outcome}
                    </p>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Enterprise Positioning */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-8 rounded-lg border border-primary/20 bg-gradient-to-br from-primary/5 to-primary/10">
          <p className="text-center text-foreground font-semibold text-sm sm:text-base">
            Your Product Guy builds operational AI systems designed for real-world business workflows
            — not experimental AI demos.
          </p>
        </div>
      </div>
    </section>
  );
}
