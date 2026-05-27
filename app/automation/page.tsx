"use client";

import { motion } from "framer-motion";
import FooterNew from "@/components/sections/footer-new";
import { ArrowRight, MessageSquare, Clock, CheckCircle, Zap, Calendar, Bell } from "lucide-react";

const WHAT_WE_AUTOMATE = [
  { icon: MessageSquare, label: "Customer replies",     sub: "Every inquiry answered in under 1 second"                    },
  { icon: Calendar,      label: "Booking confirmation", sub: "Slots reserved without manual coordination"                  },
  { icon: Bell,          label: "Follow-up sequences",  sub: "Post-visit reminders and re-engagement sent automatically"   },
];

const CALL_STEPS = [
  { icon: Clock,       step: "10 min", label: "We map your current workflow",        body: "How you handle inquiries, bookings, and follow-ups today."             },
  { icon: CheckCircle, step: "10 min", label: "We identify automation opportunities", body: "Exactly which steps can be systematized and what the impact is."      },
  { icon: Zap,         step: "10 min", label: "We show you a working example",        body: "A live demo of what your system could look like from day one."        },
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

        <div className="border-t border-border mb-14 max-w-lg">
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

        <motion.a href="#onboarding"
          initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="group inline-flex items-center gap-2.5 px-6 py-3 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/85 transition-all">
          <Zap className="h-4 w-4" />
          Book Free Setup Call
          <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
        </motion.a>
      </div>
    </section>
  );
}

function GetStarted() {
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
            <p className="text-base text-muted-foreground leading-relaxed mb-10 max-w-sm">
              We&apos;ll map your operations, identify what can be automated, and show you a working
              example — built for your business.
            </p>
            <a href="https://wa.me/6287809998198?text=Hi%2C%20I%27d%20like%20to%20book%20a%20free%20automation%20setup%20call"
              target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-6 py-3 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/85 transition-all">
              <MessageSquare className="h-4 w-4" />
              Book via WhatsApp
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </a>
            <p className="mt-4 text-xs text-muted-foreground/35 font-mono">Free · No commitment · Setup in 2–3 days</p>
          </div>

          <div>
            <div className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.2em] uppercase mb-8">
              What happens on the call
            </div>
            <div className="border-t border-border">
              {CALL_STEPS.map((item, i) => {
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
