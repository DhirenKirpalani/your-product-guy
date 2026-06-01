"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Zap, ArrowRight, MessageSquare, Clock, RefreshCw, BarChart2, Calendar, CheckCircle } from "lucide-react";
import Link from "next/link";
import FooterNew from "@/components/sections/footer-new";

// ─── Operational Flow (animated, cycling) ────────────────────────────────────
const FLOW_STEPS = [
  { label: "Customer inquiry",    sub: "WhatsApp message received",   ts: "0ms"  },
  { label: "System responds",     sub: "Reply sent automatically",    ts: "< 1s" },
  { label: "Booking confirmed",   sub: "Slot reserved",               ts: "1.2s" },
  { label: "Reminder scheduled",  sub: "24h before appointment",      ts: "auto" },
  { label: "Follow-up queued",    sub: "Post-visit sequence active",  ts: "D+1"  },
];

function OperationalFlow() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setActive(p => (p + 1) % FLOW_STEPS.length), 1800);
    return () => clearInterval(t);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="relative rounded-xl border border-border bg-card overflow-hidden"
      style={{ boxShadow: "0 1px 2px rgba(0,0,0,0.04), 0 8px 28px rgba(0,0,0,0.07), inset 0 1px 0 rgba(255,255,255,0.05)" }}
    >
      <div className="px-5 py-3 border-b border-border bg-secondary/30 flex items-center justify-between">
        <span className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.15em] uppercase">AI Sales System</span>
        <div className="flex items-center gap-1.5">
          <motion.div
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-green-500/60"
          />
          <span className="text-[10px] font-mono text-muted-foreground/35">running · 24/7</span>
        </div>
      </div>

      <div className="p-4 space-y-0.5">
        {FLOW_STEPS.map((step, i) => (
          <motion.div key={step.label}
            animate={{ backgroundColor: active === i ? "rgba(0,0,0,0.025)" : "rgba(0,0,0,0)" }}
            transition={{ duration: 0.35 }}
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg"
          >
            <div className="flex flex-col items-center flex-shrink-0">
              <motion.div
                animate={{ opacity: i < active ? 0.45 : active === i ? 1 : 0.2, scale: active === i ? 1.08 : 1 }}
                transition={{ duration: 0.3 }}
                className="w-5 h-5 rounded-full border border-border flex items-center justify-center text-[9px] font-mono text-foreground/50"
              >
                {i < active ? "✓" : i === active ? "·" : i + 1}
              </motion.div>
              {i < FLOW_STEPS.length - 1 && (
                <motion.div animate={{ opacity: i < active ? 0.3 : 0.1 }} className="w-px h-3.5 bg-foreground mt-0.5" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2">
                <motion.span animate={{ opacity: active === i ? 1 : i < active ? 0.4 : 0.25 }} transition={{ duration: 0.3 }}
                  className="text-sm font-medium tracking-tight text-foreground">
                  {step.label}
                </motion.span>
                <span className="text-[10px] font-mono text-muted-foreground/25 flex-shrink-0">{step.ts}</span>
              </div>
              <div className="text-xs text-muted-foreground/35 font-mono">{step.sub}</div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="px-5 py-2.5 border-t border-border bg-secondary/20 flex items-center justify-between">
        <span className="text-[10px] font-mono text-muted-foreground/30">0 manual steps</span>
        <span className="text-[10px] font-mono text-muted-foreground/25">step {active + 1} / {FLOW_STEPS.length}</span>
      </div>
    </motion.div>
  );
}

// ─── Hero ─────────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <section className="relative bg-background overflow-hidden border-b border-border">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_90%_60%_at_50%_-5%,rgba(120,113,108,0.07)_0%,transparent_70%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.02)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.02)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          <div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-8">
              <div className="w-6 h-px bg-foreground/20" />
              <span className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.2em] uppercase">AI Revenue Recovery</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-[clamp(2rem,4.5vw,4rem)] font-bold tracking-[-0.04em] leading-[1.05] text-foreground mb-6"
            >
              Turn customer inquiries into paying customers automatically.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="text-base text-muted-foreground leading-relaxed mb-10 max-w-md"
            >
              We build AI systems that respond, follow up, and convert your leads — so you stop losing sales to slow replies and missed follow-ups.
            </motion.p>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.35 }}
              className="flex flex-col sm:flex-row gap-3">
              <Link href="/audit"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg text-sm font-semibold hover:bg-foreground/85 transition-all">
                <Zap className="h-4 w-4" />
                Get Free Revenue Audit
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
              <Link href="/automation"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-secondary transition-colors">
                See How It Works
                <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </motion.div>
          </div>

          <div className="hidden lg:block">
            <OperationalFlow />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Problem ──────────────────────────────────────────────────────────────────
const PAIN_POINTS = [
  { icon: Clock,       label: "Slow replies",          body: "Customers message on WhatsApp or Instagram. No one replies for hours. They go to your competitor instead." },
  { icon: RefreshCw,   label: "No follow-up",          body: "A customer shows interest then goes quiet. Without a follow-up system, that sale is gone forever." },
  { icon: MessageSquare, label: "Lost leads",          body: "DMs, WhatsApp chats, Instagram comments — leads slip through every day because there's no system to catch them." },
];

function Problem() {
  return (
    <section className="py-20 md:py-28 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-foreground/20" />
            <span className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.2em] uppercase">The Problem</span>
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-bold tracking-[-0.04em] leading-[1.1] text-foreground mb-4">
            Most businesses lose 30–60% of potential customers.
          </h2>
          <p className="text-muted-foreground/60 text-muted-foreground leading-relaxed">
            Not because of bad products. Because of slow replies, no follow-up, and leads that fall through the cracks.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-border">
          {PAIN_POINTS.map((p, i) => {
            const Icon = p.icon;
            return (
              <motion.div key={p.label}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.5 }}
                className="bg-background p-8">
                <Icon className="h-5 w-5 text-muted-foreground/40 mb-5" />
                <h3 className="text-base font-semibold text-foreground tracking-tight mb-3">{p.label}</h3>
                <p className="text-sm text-muted-foreground/60 leading-relaxed">{p.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Solution ─────────────────────────────────────────────────────────────────
function Solution() {
  return (
    <section className="py-20 md:py-28 bg-foreground border-b border-border">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-6 h-px bg-background/20" />
          <span className="text-[10px] font-mono text-background/40 tracking-[0.2em] uppercase">The Fix</span>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="text-[clamp(1.8rem,4vw,3.2rem)] font-bold tracking-[-0.04em] leading-[1.1] text-background/90 max-w-3xl mb-6"
        >
          We install AI systems that handle replies, follow-ups, and booking automatically.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }}
          viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
          className="text-background/45 text-base leading-relaxed max-w-xl mb-12"
        >
          Your business keeps converting leads even when you&apos;re asleep. No manual work. No dropped inquiries. No lost sales.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Link href="/audit"
            className="inline-flex items-center gap-2 px-6 py-3 bg-background text-foreground rounded-lg text-sm font-semibold hover:bg-background/90 transition-all">
            Find out what you&apos;re losing
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── What You Get ─────────────────────────────────────────────────────────────
const DELIVERABLES = [
  { icon: MessageSquare, label: "Instant reply system",   body: "Auto-responds to every WhatsApp and Instagram inquiry in under 1 second — 24/7, no exceptions." },
  { icon: RefreshCw,     label: "Follow-up automation",   body: "Sequences that re-engage cold leads and past customers so no sale is left on the table." },
  { icon: Calendar,      label: "Booking flow",           body: "Customers confirm bookings and appointments automatically. No back-and-forth needed." },
  { icon: BarChart2,     label: "Lead tracking",          body: "Every inquiry logged and organized so you always know where each customer is in the process." },
];

function WhatYouGet() {
  return (
    <section className="py-20 md:py-28 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.7 }}
          className="mb-14"
        >
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-foreground/20" />
            <span className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.2em] uppercase">What You Get</span>
          </div>
          <h2 className="text-[clamp(1.8rem,4vw,3.2rem)] font-bold tracking-[-0.04em] leading-[1.1] text-foreground">
            Four systems. One outcome:<br />
            <span className="text-muted-foreground/30">more paying customers.</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {DELIVERABLES.map((d, i) => {
            const Icon = d.icon;
            return (
              <motion.div key={d.label}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.08, duration: 0.5 }}
                className="bg-background p-8 md:p-10">
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg border border-border bg-secondary/50 flex items-center justify-center flex-shrink-0">
                    <Icon className="h-4 w-4 text-foreground/60" />
                  </div>
                  <h3 className="text-base font-semibold text-foreground tracking-tight">{d.label}</h3>
                </div>
                <p className="text-sm text-muted-foreground/60 leading-relaxed">{d.body}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Final CTA ────────────────────────────────────────────────────────────────
function FinalCTA() {
  return (
    <section className="py-24 md:py-36 border-b border-border bg-background">
      <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }} transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-8">
            <div className="w-6 h-px bg-foreground/20" />
            <span className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.2em] uppercase">Free · Takes 3 minutes</span>
            <div className="w-6 h-px bg-foreground/20" />
          </div>
          <h2 className="text-[clamp(2rem,5vw,4rem)] font-bold tracking-[-0.04em] leading-[1.05] text-foreground mb-6">
            Find out how many customers you&apos;re losing right now.
          </h2>
          <p className="text-muted-foreground leading-relaxed max-w-lg mx-auto mb-10">
            Answer 8 questions about your business. We&apos;ll show you exactly where revenue is leaking — and what to do about it.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/audit"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-foreground text-background rounded-lg text-sm font-semibold hover:bg-foreground/85 transition-all">
              <Zap className="h-4 w-4" />
              Get Free Revenue Audit
              <ArrowRight className="h-3.5 w-3.5" />
            </Link>
            <Link href="/automation"
              className="inline-flex items-center justify-center gap-2 px-8 py-3.5 border border-border text-foreground rounded-lg text-sm font-medium hover:bg-secondary transition-colors">
              <CheckCircle className="h-4 w-4 text-muted-foreground/50" />
              View AI Sales System
            </Link>
          </div>
          <p className="text-[10px] font-mono text-muted-foreground/30 mt-6 tracking-[0.1em]">Setup in 2–3 days · No commitment</p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Problem />
      <Solution />
      <WhatYouGet />
      <FinalCTA />
      <FooterNew />
    </main>
  );
}
