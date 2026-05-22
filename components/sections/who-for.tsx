"use client";

import { motion } from "framer-motion";
import { STAGGER_CONTAINER, STAGGER_ITEM } from "@/lib/constants";
import {
  Stethoscope,
  Scissors,
  Home,
  Wrench,
  ShoppingBag,
  Briefcase,
} from "lucide-react";

const BUSINESS_TYPES = [
  { icon: Stethoscope, label: "Clinics & Medical" },
  { icon: Scissors, label: "Salons & Beauty" },
  { icon: Home, label: "Property Agents" },
  { icon: Wrench, label: "Workshops & Repair" },
  { icon: ShoppingBag, label: "E-commerce Sellers" },
  { icon: Briefcase, label: "Professional Services" },
];

export default function WhoForSection() {
  return (
    <section className="py-16 sm:py-24 md:py-32 border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-4">
            Built for Businesses Managing Operations Through WhatsApp
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            If you're handling customer inquiries, bookings, and follow-ups manually—this is for you.
          </p>
        </div>

        <motion.div
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6"
          variants={STAGGER_CONTAINER}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
        >
          {BUSINESS_TYPES.map((business, index) => {
            const Icon = business.icon;
            return (
              <motion.div
                key={business.label}
                variants={STAGGER_ITEM}
                className="flex flex-col items-center text-center p-4 sm:p-6 rounded-xl border border-border bg-card hover:bg-secondary/50 transition-colors"
              >
                <div className="mb-3 p-3 rounded-lg bg-secondary">
                  <Icon className="h-6 w-6 text-foreground" />
                </div>
                <p className="text-sm font-medium text-foreground">{business.label}</p>
              </motion.div>
            );
          })}
        </motion.div>

        <div className="mt-12 text-center">
          <p className="text-muted-foreground">
            And many other businesses tired of losing customers to slow manual processes.
          </p>
        </div>
      </div>
    </section>
  );
}
