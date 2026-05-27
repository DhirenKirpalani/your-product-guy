"use client";

import { motion } from "framer-motion";
import { MessageSquare, Calendar, TrendingUp, ArrowRight } from "lucide-react";

const SERVICES = [
  {
    icon: MessageSquare,
    title: "Customer Communication",
    description: "Automated WhatsApp systems that respond to customer inquiries instantly — so no lead goes unanswered.",
    outcome: "Faster replies. More leads captured.",
  },
  {
    icon: Calendar,
    title: "Appointment Automation",
    description: "Customers book, confirm, and receive reminders automatically through WhatsApp — without any manual coordination.",
    outcome: "Fewer no-shows. Zero double bookings.",
  },
  {
    icon: TrendingUp,
    title: "Follow-Up Systems",
    description: "Automated sequences that follow up with prospects, recover cold leads, and keep customers engaged over time.",
    outcome: "Higher conversion. Consistent pipeline.",
  },
];

export default function AutomationSimple() {
  return (
    <section id="automation" className="py-24 md:py-32 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-foreground/20" />
            <span className="text-xs font-mono text-muted-foreground tracking-[0.15em] uppercase">Service</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-5">
            Operational Systems Built
            <br />
            <span className="text-muted-foreground/50">for Your Business</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Every customer message answered. Every appointment confirmed. Every follow-up sent. Without anyone doing it manually.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">

          {/* Service cards */}
          <div className="space-y-3">
            {SERVICES.map((service, index) => {
              const Icon = service.icon;
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.08 }}
                  className="p-5 rounded-lg border border-border bg-card hover:border-foreground/20 transition-all duration-200"
                >
                  <div className="flex items-start gap-4">
                    <div className="inline-flex p-2 rounded-md bg-secondary border border-border flex-shrink-0">
                      <Icon className="h-4 w-4 text-foreground" />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-foreground mb-1">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mb-2 leading-relaxed">{service.description}</p>
                      <p className="text-xs text-muted-foreground/70 font-mono">→ {service.outcome}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Outcome metrics */}
            <div className="grid grid-cols-3 gap-3 pt-2">
              {[
                { value: "24/7", label: "Response coverage" },
                { value: "< 1s", label: "Reply time" },
                { value: "0", label: "Missed follow-ups" },
              ].map((m) => (
                <div key={m.label} className="p-4 rounded-lg border border-border bg-secondary/50 text-center">
                  <div className="text-xl font-bold tracking-tight text-foreground mb-0.5">{m.value}</div>
                  <div className="text-xs text-muted-foreground">{m.label}</div>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <a
                href="#onboarding"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
              >
                Book Free Automation Setup Call
                <ArrowRight className="h-4 w-4" />
              </a>
              <p className="mt-3 text-xs text-muted-foreground/60">
                Free consultation · Setup in 2–3 days · No technical knowledge required
              </p>
            </div>
          </div>

          {/* WhatsApp UI Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-lg border border-border bg-card overflow-hidden shadow-sm"
          >
            {/* Phone header */}
            <div className="bg-[#075e54] px-4 py-3 flex items-center gap-3">
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                <span className="text-white text-xs font-semibold">S</span>
              </div>
              <div>
                <div className="text-white text-sm font-medium">Salon Cantik</div>
                <div className="text-white/70 text-xs">online</div>
              </div>
            </div>

            {/* Chat messages */}
            <div className="bg-[#efeae2] p-4 space-y-3 min-h-[280px]">
              {/* Customer */}
              <div className="flex justify-start">
                <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[80%] shadow-sm">
                  <p className="text-sm text-gray-800">Hi, do you have slots tomorrow for a haircut?</p>
                  <p className="text-[10px] text-gray-400 mt-1 text-right">10:31</p>
                </div>
              </div>
              {/* Auto-reply */}
              <div className="flex justify-end">
                <div className="bg-[#d9fdd3] rounded-lg rounded-tr-none px-3 py-2 max-w-[80%] shadow-sm">
                  <p className="text-sm text-gray-800">Hi! Yes, we have slots at 10 AM, 2 PM, and 4 PM tomorrow. Which works for you? 😊</p>
                  <p className="text-[10px] text-gray-400 mt-1 text-right flex items-center justify-end gap-1">10:31 <span className="text-[#53bdeb]">✓✓</span></p>
                </div>
              </div>
              {/* Customer */}
              <div className="flex justify-start">
                <div className="bg-white rounded-lg rounded-tl-none px-3 py-2 max-w-[80%] shadow-sm">
                  <p className="text-sm text-gray-800">2 PM please!</p>
                  <p className="text-[10px] text-gray-400 mt-1 text-right">10:32</p>
                </div>
              </div>
              {/* Auto-reply confirmation */}
              <div className="flex justify-end">
                <div className="bg-[#d9fdd3] rounded-lg rounded-tr-none px-3 py-2 max-w-[80%] shadow-sm">
                  <p className="text-sm text-gray-800">Perfect! Booking confirmed for tomorrow at 2 PM. We'll send a reminder in the morning ✅</p>
                  <p className="text-[10px] text-gray-400 mt-1 text-right flex items-center justify-end gap-1">10:32 <span className="text-[#53bdeb]">✓✓</span></p>
                </div>
              </div>
            </div>

            {/* Status bar */}
            <div className="px-4 py-3 border-t border-border bg-background flex items-center justify-between">
              <span className="text-xs text-muted-foreground font-mono">Automated response · 0ms</span>
              <div className="flex items-center gap-1.5">
                <div className="w-1.5 h-1.5 rounded-full bg-green-500" />
                <span className="text-xs text-muted-foreground">System active</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
