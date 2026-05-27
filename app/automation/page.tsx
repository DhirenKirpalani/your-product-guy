"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import FooterNew from "@/components/sections/footer-new";
import Link from "next/link";
import { ArrowRight, Clock, CheckCircle, Zap, Calendar, Bell, MessageSquare, Send } from "lucide-react";

const WHAT_WE_AUTOMATE = [
  { icon: MessageSquare, label: "Customer replies",     sub: "Every inquiry answered in under 1 second"                  },
  { icon: Calendar,      label: "Booking confirmation", sub: "Slots reserved without manual coordination"                },
  { icon: Bell,          label: "Follow-up sequences",  sub: "Post-visit reminders and re-engagement sent automatically" },
];

const CALL_STEPS = [
  { icon: Clock,       step: "10 min", label: "We map your current workflow",         body: "How you handle inquiries, bookings, and follow-ups today."        },
  { icon: CheckCircle, step: "10 min", label: "We identify automation opportunities", body: "Exactly which steps can be systematized and what the impact is."  },
  { icon: Zap,         step: "10 min", label: "We show you a working example",        body: "A live demo of what your system could look like from day one."    },
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
          <span className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.25em] uppercase">Business Automation</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-[clamp(3rem,6.5vw,6rem)] font-bold tracking-[-0.05em] leading-[0.93] text-foreground mb-16 max-w-3xl">
          Your operations.<br />
          <span className="text-muted-foreground/25">Running without you.</span>
        </motion.h1>

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

        {/* Audit nudge */}
        <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="mt-10">
          <Link href="/audit"
            className="inline-flex items-center gap-2.5 border border-border rounded-lg px-5 py-3 text-sm text-foreground hover:bg-secondary transition-colors group">
            <Zap className="h-3.5 w-3.5 text-muted-foreground/50" />
            <span>Not sure where to start? Take the free 3-minute audit</span>
            <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </motion.div>
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
              <span className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.25em] uppercase">Get Started</span>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3.5rem)] font-bold tracking-[-0.04em] leading-[1.0] text-foreground mb-6">
              Book a free<br />
              <span className="text-muted-foreground/25">30-minute setup call.</span>
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed mb-10 max-w-sm">
              Leave your details and we&apos;ll reach out to schedule.
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
                <p className="text-xs text-muted-foreground/35 font-mono pt-1">Free · No commitment · Setup in 2–3 days</p>
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
      <GetStarted />
      <FooterNew />
    </main>
  );
}
