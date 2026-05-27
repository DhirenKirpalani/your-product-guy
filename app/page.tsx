"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Zap, BookOpen, Radio, ArrowRight, MessageSquare } from "lucide-react";
import Link from "next/link";
import FooterNew from "@/components/sections/footer-new";

// ─── Data ─────────────────────────────────────────────────────────────────────
const FLOW_STEPS = [
  { label: "Customer inquiry",   sub: "WhatsApp message received",  ts: "0ms"  },
  { label: "System responds",    sub: "Reply sent automatically",   ts: "< 1s" },
  { label: "Booking confirmed",  sub: "Slot reserved",              ts: "1.2s" },
  { label: "Reminder scheduled", sub: "24h before appointment",     ts: "auto" },
  { label: "Follow-up queued",   sub: "Post-visit sequence active", ts: "D+1"  },
];
const AUTOMATION_REVEALS = ["Customer replies", "Appointment bookings", "Follow-up sequences", "Lead organization"];
const LEARN_REVEALS      = ["Product roadmapping", "Prioritization systems", "Stakeholder clarity"];
const SIGNAL_PREVIEW     = "\"Roadmaps change every week after leadership meetings.\"";

// ─── Operational Flow (animated, cycling) ────────────────────────────────────
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
        <span className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.15em] uppercase">Operational System</span>
        <div className="flex items-center gap-1.5">
          <motion.div
            animate={{ opacity: [1, 0.25, 1] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="w-1.5 h-1.5 rounded-full bg-green-500/60"
          />
          <span className="text-[10px] font-mono text-muted-foreground/35">systems active · 24/7</span>
        </div>
      </div>

      <div className="p-4 space-y-0.5">
        {FLOW_STEPS.map((step, i) => (
          <motion.div key={step.label}
            animate={{ backgroundColor: active === i ? "rgba(0,0,0,0.025)" : "transparent" }}
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

// ─── Hero ────────────────────────────────────────────────────────────────────
const SERVICES_QUICK = [
  { icon: Zap,      label: "Business Automation", sub: "WhatsApp systems that run your customer operations", href: "/automation" },
  { icon: BookOpen, label: "PM Knowledge",         sub: "Product management education that's actually useful", href: "/learn"       },
  { icon: Radio,    label: "Workplace Signals",    sub: "Anonymous intelligence from real operational teams",  href: "/signals"    },
];

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
              <span className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.2em] uppercase">Your Product Guy</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.21, 0.47, 0.32, 0.98] }}
              className="text-[clamp(2rem,4.5vw,4rem)] font-bold tracking-[-0.04em] leading-[1.05] text-foreground mb-10"
            >
              Three services.<br />
              <span className="text-muted-foreground/35">One operational platform.</span>
            </motion.h1>

            {/* Services list — direct, scannable */}
            <motion.div initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.18 }}
              className="space-y-4 mb-10">
              {SERVICES_QUICK.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.a key={s.label} href={s.href}
                    initial={{ opacity: 0, x: -8 }} animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.22 + i * 0.07 }}
                    className="group flex items-start gap-3 p-3 -mx-3 rounded-lg hover:bg-secondary/50 transition-colors">
                    <Icon className="h-4 w-4 text-muted-foreground/50 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-sm font-semibold text-foreground group-hover:text-foreground transition-colors">{s.label}</div>
                      <div className="text-xs text-muted-foreground/60">{s.sub}</div>
                    </div>
                    <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/30 mt-0.5 ml-auto flex-shrink-0 group-hover:text-foreground group-hover:translate-x-0.5 transition-all" />
                  </motion.a>
                );
              })}
            </motion.div>

            <motion.a href="/automation"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.45 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/85 transition-all">
              <Zap className="h-4 w-4" />
              Book Free Automation Call
              <ArrowRight className="h-3.5 w-3.5" />
            </motion.a>
          </div>

          <div className="hidden lg:block">
            <OperationalFlow />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Services (asymmetric) ────────────────────────────────────────────────────
function Services() {
  const [hovA, setHovA] = useState(false);
  const [hovL, setHovL] = useState(false);
  const [hovS, setHovS] = useState(false);

  return (
    <section className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-5">

          {/* Automation — featured 3/5 */}
          <div className="lg:col-span-3 lg:border-r border-b lg:border-b-0 border-border px-8 py-12 transition-colors duration-200 hover:bg-secondary/30"
            onMouseEnter={() => setHovA(true)} onMouseLeave={() => setHovA(false)}>
            <div className="flex items-center gap-2 mb-6">
              <Zap className="h-4 w-4 text-muted-foreground/50" />
              <span className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.15em] uppercase">Systems</span>
            </div>
            <h3 className="text-xl font-semibold text-foreground tracking-tight mb-3">Business Automation</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-6 max-w-sm">
              Automated WhatsApp systems that handle replies, bookings, and follow-ups — so your team never drops a lead.
            </p>
            <AnimatePresence>
              {hovA && (
                <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 4 }}
                  transition={{ duration: 0.16 }} className="flex flex-wrap gap-2 mb-6">
                  {AUTOMATION_REVEALS.map((item, i) => (
                    <motion.span key={item} initial={{ opacity: 0, x: -6 }} animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="text-[11px] font-mono text-muted-foreground/60 px-2 py-1 rounded border border-border bg-secondary">
                      → {item}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </AnimatePresence>
            <Link href="/automation" className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:gap-3 transition-all">
              Audit your operational friction <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* Right column: Learn + Signals stacked */}
          <div className="lg:col-span-2 flex flex-col divide-y divide-border">

            <div className="px-8 py-10 transition-colors duration-200 hover:bg-secondary/30"
              onMouseEnter={() => setHovL(true)} onMouseLeave={() => setHovL(false)}>
              <div className="flex items-center gap-2 mb-4">
                <BookOpen className="h-4 w-4 text-muted-foreground/50" />
                <span className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.15em] uppercase">Knowledge</span>
              </div>
              <h3 className="text-base font-semibold text-foreground tracking-tight mb-2">PM Skills</h3>
              <AnimatePresence mode="wait">
                {hovL ? (
                  <motion.div key="r" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.15 }} className="flex flex-col gap-1 mb-5">
                    {LEARN_REVEALS.map((item, i) => (
                      <motion.span key={item} initial={{ opacity: 0, x: -4 }} animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }} className="text-xs font-mono text-muted-foreground/50">
                        → {item}
                      </motion.span>
                    ))}
                  </motion.div>
                ) : (
                  <motion.p key="d" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="text-sm text-muted-foreground leading-relaxed mb-5">
                    Clarity-first product management. No jargon.
                  </motion.p>
                )}
              </AnimatePresence>
              <Link href="/learn" className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:gap-3 transition-all">
                Start learning <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

            <div className="px-8 py-10 transition-colors duration-200 hover:bg-secondary/30"
              onMouseEnter={() => setHovS(true)} onMouseLeave={() => setHovS(false)}>
              <div className="flex items-center gap-2 mb-4">
                <Radio className="h-4 w-4 text-muted-foreground/50" />
                <span className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.15em] uppercase">Intelligence</span>
              </div>
              <h3 className="text-base font-semibold text-foreground tracking-tight mb-2">Workplace Signals</h3>
              <AnimatePresence mode="wait">
                {hovS ? (
                  <motion.div key="p" initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }}
                    transition={{ duration: 0.16 }} className="mb-5 p-3 rounded-lg border border-border bg-secondary/50">
                    <div className="text-[10px] font-mono text-muted-foreground/40 mb-1.5">Signal #024 · Prioritization</div>
                    <p className="text-xs text-muted-foreground/60 italic leading-relaxed">{SIGNAL_PREVIEW}</p>
                  </motion.div>
                ) : (
                  <motion.p key="d" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                    className="text-sm text-muted-foreground leading-relaxed mb-5">
                    Anonymous operational insights analyzed through systems thinking.
                  </motion.p>
                )}
              </AnimatePresence>
              <Link href="/signals" className="group inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:gap-3 transition-all">
                Explore signals <ArrowRight className="h-3.5 w-3.5" />
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Signature Moment ────────────────────────────────────────────────────────
function SignatureMoment() {
  return (
    <section className="py-36 md:py-52 border-b border-border bg-background">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.9 }}
          className="text-center"
        >
          <p className="text-[clamp(1.8rem,4.5vw,3.8rem)] font-bold tracking-[-0.04em] leading-[1.1] text-foreground mb-3">
            Most businesses don&apos;t fail loudly.
          </p>
          <p className="text-[clamp(1.8rem,4.5vw,3.8rem)] font-bold tracking-[-0.04em] leading-[1.1] text-muted-foreground/20">
            They fail through accumulated<br />operational friction.
          </p>
          <p className="text-[10px] font-mono text-muted-foreground/25 tracking-[0.2em] uppercase mt-16">
            The systems problem no one talks about
          </p>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Philosophy ───────────────────────────────────────────────────────────────
const PRINCIPLES = [
  { n: "01", title: "Systems over effort",                      body: "Most operational problems aren't caused by lazy teams — they're caused by unclear systems. The fix isn't working harder. It's building better structure." },
  { n: "02", title: "Clarity is a competitive advantage",       body: "The clearest business in any market wins. Clear communication. Clear processes. Clear decisions. Clarity compounds — and so does obscurity." },
  { n: "03", title: "Good products start with honest problems",  body: "Before roadmaps and sprints, someone has to clearly define the problem worth solving. Most teams skip this. That's why most products disappoint." },
];

function Philosophy() {
  return (
    <section className="py-20 md:py-28 bg-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex items-center gap-3 mb-10">
          <div className="w-6 h-px bg-background/20" />
          <span className="text-[10px] font-mono text-background/40 tracking-[0.2em] uppercase">Philosophy</span>
        </div>
        <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-background/90 leading-[1.15] tracking-tight max-w-3xl mb-14">
          Modern work becomes chaotic when systems are unclear.
          <span className="text-background/28"> We build the operational infrastructure that makes businesses function with less friction and more intent.</span>
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-background/10">
          {PRINCIPLES.map((p, i) => (
            <motion.div key={p.n} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }}
              className="bg-foreground p-6 md:p-8">
              <div className="text-[10px] font-mono text-background/25 tracking-[0.2em] mb-4">{p.n}</div>
              <h3 className="text-base font-semibold text-background/80 mb-3 tracking-tight">{p.title}</h3>
              <p className="text-sm text-background/40 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Contribute ──────────────────────────────────────────────────────────────
const ROLES = [
  { label: "Content writer",   sub: "PM articles, guides, operational frameworks"      },
  { label: "Signal contributor", sub: "Share anonymous workplace patterns and insights"  },
  { label: "Developer",        sub: "Help build and improve this platform"              },
  { label: "Designer",         sub: "UI, visual systems, editorial design"              },
];

function Contribute() {
  return (
    <section id="contribute" className="border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-20 md:py-28">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-16 lg:gap-24 items-start">

          <div>
            <motion.div initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="flex items-center gap-3 mb-10">
              <div className="w-6 h-px bg-foreground/15" />
              <span className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.25em] uppercase">Open Contribution</span>
            </motion.div>

            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="text-[clamp(2rem,4.5vw,3.8rem)] font-bold tracking-[-0.04em] leading-[1.0] text-foreground mb-12">
              Help build this.<br />
              <span className="text-muted-foreground/25">We&apos;re open to contributors.</span>
            </motion.h2>

            <div className="border-t border-border">
              {ROLES.map((role, i) => (
                <motion.div key={role.label}
                  initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  className="flex items-center justify-between py-5 border-b border-border group">
                  <div>
                    <div className="text-sm font-semibold text-foreground tracking-tight">{role.label}</div>
                    <div className="text-xs text-muted-foreground/50 font-mono mt-0.5">{role.sub}</div>
                  </div>
                  <span className="text-[10px] font-mono text-muted-foreground/25 tracking-[0.15em] uppercase">Open</span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:w-72 lg:pt-24">
            <p className="text-sm text-muted-foreground/70 leading-relaxed mb-8">
              This platform is being built in public. If you want to contribute
              content, code, or ideas — reach out directly.
            </p>
            <a href="https://wa.me/6287809998198?text=Hi%2C%20I%27d%20like%20to%20contribute%20to%20Your%20Product%20Guy"
              target="_blank" rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-5 py-2.5 border border-foreground/20 rounded-lg text-sm font-medium text-foreground hover:border-foreground/60 hover:bg-secondary/50 transition-all">
              <MessageSquare className="h-4 w-4 text-muted-foreground/50" />
              Get in touch
              <ArrowRight className="h-3.5 w-3.5 text-muted-foreground/40 group-hover:text-foreground group-hover:translate-x-0.5 transition-all" />
            </a>
            <p className="mt-3 text-[10px] text-muted-foreground/30 font-mono">via WhatsApp · usually replies same day</p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Contribute />
      <FooterNew />
    </main>
  );
}

