"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FooterNew from "@/components/sections/footer-new";
import Link from "next/link";
import { ArrowRight, Clock, CheckCircle, Zap, Calendar, Bell, MessageSquare, Send } from "lucide-react";

const WHAT_WE_AUTOMATE = [
  { icon: MessageSquare, label: "Reply in 1 second",          sub: "Every message gets answered instantly. WhatsApp and Instagram. 24/7." },
  { icon: Send,          label: "Auto follow-up",             sub: "We message customers again if they go quiet. Bring them back." },
  { icon: Calendar,      label: "Easy booking",               sub: "Customer books appointment in WhatsApp. No phone calls." },
  { icon: Bell,          label: "See all your leads",         sub: "Every message saved. See who messaged and if they bought." },
];

const CALL_STEPS = [
  { icon: Clock,       step: "10 min", label: "We learn how you work now",      body: "How do you reply to messages? How do customers book?"              },
  { icon: CheckCircle, step: "10 min", label: "We find what to automate",       body: "Which parts can AI do for you? How many sales will you save?"      },
  { icon: Zap,         step: "10 min", label: "We show you how it works",       body: "See a real example. See how it will work for your business."       },
];

function PageHero() {
  return (
    <section className="relative border-b border-border bg-background overflow-hidden min-h-[85dvh] flex items-center">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_60%_40%,rgba(120,113,108,0.06)_0%,transparent_65%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.018)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 w-full">
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
          className="flex items-center gap-3 mb-14">
          <div className="w-6 h-px bg-foreground/15" />
          <span className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.25em] uppercase">Done-for-You</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(2.5rem,5.5vw,5rem)] font-bold tracking-[-0.05em] leading-[1.0] text-foreground mb-8 max-w-3xl">
          We build it for you<br />
          <span className="text-muted-foreground/25">Ready in 2–3 days</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-base text-muted-foreground leading-relaxed max-w-md mb-14">
We reply to every message instantly. On WhatsApp and Instagram. Perfect for salons, restaurants, and online shops.
        </motion.p>

        <div className="border-t border-border max-w-lg">
          {WHAT_WE_AUTOMATE.map((item, i) => {
            const Icon = item.icon;
            return (
              <motion.div key={item.label}
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-center gap-4 py-5 border-b border-border">
                <Icon className="h-5 w-5 text-muted-foreground/40 flex-shrink-0" />
                <div>
                  <div className="text-base font-semibold text-foreground tracking-tight">{item.label}</div>
                  <div className="text-xs text-muted-foreground/50 font-mono mt-0.5">{item.sub}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* CTAs */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10 flex flex-col sm:flex-row gap-3">
          <Link href="#onboarding"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-foreground text-background rounded-lg text-sm font-semibold hover:bg-foreground/85 transition-all">
            Book Setup Call
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
          <Link href="/audit"
            className="inline-flex items-center justify-center gap-2.5 border border-border rounded-lg px-5 py-3 text-sm text-foreground hover:bg-secondary transition-colors group">
            <Zap className="h-3.5 w-3.5 text-muted-foreground/50" />
            <span>Free WhatsApp Audit first</span>
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function Pricing() {
  return (
    <section className="py-20 md:py-24 border-b border-border bg-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-6 h-px bg-background/20" />
          <span className="text-[10px] font-mono text-background/40 tracking-[0.2em] uppercase">Pricing</span>
        </div>
        <div className="max-w-2xl">
          <p className="text-[clamp(1.8rem,4vw,3rem)] font-bold tracking-[-0.04em] leading-[1.1] text-background/90 mb-4">
            $30–$150 setup (early stage)
          </p>
          <p className="text-background/45 text-sm leading-relaxed mb-8 max-w-md">
Pay once. System ready in 2–3 days. No monthly fees. Just works.
          </p>
          <Link href="#onboarding"
            className="inline-flex items-center gap-2 px-6 py-3 bg-background text-foreground rounded-lg text-sm font-semibold hover:bg-background/90 transition-all">
            Book Setup Call
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}

function GetStarted() {
  const [form, setForm] = useState({ name: "", business: "", email: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "sent" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ type: "booking", ...form }),
      });
      setStatus(res.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="onboarding" className="py-20 md:py-28 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          <div>
            <div className="flex items-center gap-3 mb-12">
              <div className="w-6 h-px bg-foreground/15" />
              <span className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.25em] uppercase">Book Setup Call</span>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.04em] leading-[1.0] text-foreground mb-6">
              Get your WhatsApp AI system<br />
              <span className="text-muted-foreground/25">live in 2–3 days.</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10 max-w-sm">
Leave your details. We'll call you. We'll build your system together. Free call.
            </p>

            {status === "sent" ? (
              <div className="flex items-center gap-3 py-4 border-t border-border">
                <CheckCircle className="h-4 w-4 text-foreground/60" />
                <p className="text-sm text-muted-foreground">Request received — we&apos;ll be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <input
                  type="text" required placeholder="Your name"
                  value={form.name} onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                  className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-900 border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/30 transition-colors"
                />
                <input
                  type="text" placeholder="Business name (optional)"
                  value={form.business} onChange={e => setForm(f => ({ ...f, business: e.target.value }))}
                  className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-900 border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/30 transition-colors"
                />
                <input
                  type="email" required placeholder="Your email"
                  value={form.email} onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                  className="w-full px-4 py-3 bg-zinc-100 dark:bg-zinc-900 border border-border rounded-lg text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/30 transition-colors"
                />
                <button type="submit" disabled={status === "loading"}
                  className="group w-full flex items-center justify-center gap-2.5 px-6 py-3 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/85 disabled:opacity-50 transition-all">
                  <Send className="h-4 w-4" />
                  {status === "loading" ? "Sending…" : "Request Setup Call"}
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
                </button>
                {status === "error" && (
                  <p className="text-xs text-muted-foreground/50 font-mono">Something went wrong — please try again.</p>
                )}
                <p className="text-xs text-muted-foreground/35 font-mono pt-1">Free call · No commitment · Setup in 2–3 days</p>
              </form>
            )}
          </div>

          <div>
            <div className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.2em] uppercase mb-8">
              What happens on the call
            </div>
            <div className="border-t border-border">
              {CALL_STEPS.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.label} className="flex gap-5 py-6 border-b border-border">
                    <div className="flex-shrink-0 flex items-start gap-3">
                      <span className="text-[10px] font-mono text-muted-foreground/35 w-12 pt-1">{item.step}</span>
                      <Icon className="h-4 w-4 text-muted-foreground/40 mt-0.5" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-foreground tracking-tight mb-1">{item.label}</div>
                      <p className="text-sm text-muted-foreground/60 leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default function AutomationPage() {
  return (
    <main className="flex flex-col">
      <PageHero />
      <Pricing />
      <GetStarted />
      <FooterNew />
    </main>
  );
}
