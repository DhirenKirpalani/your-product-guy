"use client";

import { motion } from "framer-motion";
import { ArrowRight, Zap, BookOpen, Radio } from "lucide-react";
import Link from "next/link";

const PILLARS = [
  {
    icon: Zap,
    tag: "Systems",
    title: "Business Automation",
    description:
      "Automated WhatsApp systems that handle customer replies, appointment bookings, and follow-up sequences. Your operations run — even when you don't.",
    stat: "24/7",
    statLabel: "operational coverage",
    href: "/automation",
    cta: "Book Free Setup Call",
    accent: "bg-foreground text-background",
  },
  {
    icon: BookOpen,
    tag: "Learn",
    title: "PM Skills",
    description:
      "Clarity-first product management education. No jargon. No bloated theory. Just the thinking frameworks that modern product teams actually use.",
    stat: "3",
    statLabel: "structured learning paths",
    href: "/learn",
    cta: "Start Learning",
    accent: "bg-secondary border border-border text-foreground",
  },
  {
    icon: Radio,
    tag: "Intelligence",
    title: "Workplace Signals",
    description:
      "Anonymous operational insights from modern teams — analyzed through systems thinking. Understanding the patterns behind workplace chaos.",
    stat: "24",
    statLabel: "signals catalogued",
    href: "/signals",
    cta: "Explore Signals",
    accent: "bg-secondary border border-border text-foreground",
  },
];

export default function PlatformPillars() {
  return (
    <section className="py-20 md:py-28 border-b border-border bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <div className="flex items-center gap-3 mb-12">
          <div className="w-6 h-px bg-foreground/20" />
          <span className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.2em] uppercase">The Platform</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PILLARS.map((pillar, index) => {
            const Icon = pillar.icon;
            return (
              <motion.div
                key={pillar.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08, duration: 0.4 }}
                className="flex flex-col p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-all duration-200"
              >
                <div className="flex items-center justify-between mb-6">
                  <div className={`inline-flex p-2 rounded-md ${pillar.accent}`}>
                    <Icon className="h-4 w-4" />
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.15em] uppercase">{pillar.tag}</span>
                </div>

                <h3 className="text-lg font-semibold text-foreground tracking-tight mb-2">{pillar.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6 flex-1">{pillar.description}</p>

                <div className="flex items-end justify-between pt-4 border-t border-border">
                  <div>
                    <div className="text-2xl font-bold text-foreground tracking-tight">{pillar.stat}</div>
                    <div className="text-[10px] text-muted-foreground/50 font-mono">{pillar.statLabel}</div>
                  </div>
                  <Link
                    href={pillar.href}
                    className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:gap-2.5 transition-all"
                  >
                    {pillar.cta}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
