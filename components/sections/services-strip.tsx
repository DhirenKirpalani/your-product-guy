"use client";

import { motion } from "framer-motion";
import { Zap, BookOpen, Radio, ArrowRight } from "lucide-react";
import Link from "next/link";

const SERVICES = [
  {
    icon: Zap,
    tag: "Systems",
    title: "Business Automation",
    body: "Automated WhatsApp systems that handle replies, bookings, and follow-ups — so your team never drops a lead.",
    cta: "Book Free Setup Call",
    href: "/automation",
  },
  {
    icon: BookOpen,
    tag: "Learn",
    title: "PM Skills",
    body: "Clarity-first product management education. The thinking frameworks modern product teams actually use.",
    cta: "Start Learning",
    href: "/learn",
  },
  {
    icon: Radio,
    tag: "Intelligence",
    title: "Workplace Signals",
    body: "Anonymous operational insights from modern teams — analyzed through systems thinking.",
    cta: "Explore Signals",
    href: "/signals",
  },
];

export default function ServicesStrip() {
  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-border">
          {SERVICES.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07, duration: 0.4 }}
                className="group px-8 py-10 hover:bg-secondary/40 transition-colors duration-200"
              >
                <div className="flex items-center gap-2 mb-5">
                  <Icon className="h-4 w-4 text-muted-foreground" />
                  <span className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.15em] uppercase">{s.tag}</span>
                </div>
                <h3 className="text-base font-semibold text-foreground tracking-tight mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">{s.body}</p>
                <Link
                  href={s.href}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:gap-2.5 transition-all"
                >
                  {s.cta}
                  <ArrowRight className="h-3.5 w-3.5" />
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
