"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Zap, MessageSquare, Calendar, RefreshCw, BarChart2, Mail, CheckCircle, Clock } from "lucide-react";
import Link from "next/link";
import FooterNew from "@/components/sections/footer-new";

// ─── Questions ────────────────────────────────────────────────────────────────
const QUESTIONS = [
  {
    id: "business",
    q: "What kind of business do you run?",
    hint: "We'll tailor your results to your industry.",
    options: [
      { label: "Salon / Spa / Beauty",         value: "salon",     score: 8 },
      { label: "F&B / Kuliner / Restaurant",   value: "fnb",       score: 7 },
      { label: "Fashion / Clothing / Retail",  value: "fashion",   score: 9 },
      { label: "Jasa / Service Business",      value: "service",   score: 7 },
      { label: "E-commerce / Dropship",        value: "ecommerce", score: 10 },
      { label: "Other",                        value: "other",     score: 5 },
    ],
  },
  {
    id: "contact",
    q: "How do most customers contact you?",
    hint: "Pick the channel that gets the most messages.",
    options: [
      { label: "WhatsApp — almost everything",       value: "whatsapp",  score: 10 },
      { label: "Instagram DM",                       value: "instagram", score: 8  },
      { label: "Phone calls",                        value: "phone",     score: 5  },
      { label: "Walk-in / datang langsung",          value: "walkin",    score: 3  },
      { label: "Mix of everything",                  value: "mix",       score: 7  },
    ],
  },
  {
    id: "volume",
    q: "How many customer messages or inquiries do you get per day?",
    hint: "An honest average is fine.",
    options: [
      { label: "1 – 10 messages",   value: "low",    score: 3  },
      { label: "11 – 30 messages",  value: "medium", score: 6  },
      { label: "31 – 60 messages",  value: "high",   score: 9  },
      { label: "60+ messages",      value: "flood",  score: 10 },
    ],
  },
  {
    id: "reply",
    q: "How long does it usually take to reply to a customer?",
    hint: "Be honest — this is where most hours are lost.",
    options: [
      { label: "Under 5 minutes",                         value: "instant", score: 2  },
      { label: "5 – 30 minutes",                         value: "fast",    score: 5  },
      { label: "30 minutes to 2 hours",                  value: "slow",    score: 8  },
      { label: "More than 2 hours — or sometimes missed", value: "missed",  score: 10 },
    ],
  },
  {
    id: "booking",
    q: "How do you handle bookings or orders?",
    hint: "Pick what's closest to your current setup.",
    options: [
      { label: "Manually via WhatsApp / chat",           value: "manual_wa",    score: 10 },
      { label: "Spreadsheet or notes app",               value: "spreadsheet",  score: 8  },
      { label: "I have a booking/order app already",     value: "app",          score: 2  },
      { label: "I don't take bookings or pre-orders",    value: "none",         score: 1  },
    ],
  },
  {
    id: "followup",
    q: "Do you follow up with customers after they contact or buy?",
    hint: "Follow-ups = repeat sales. Most businesses skip them.",
    options: [
      { label: "Yes — I message everyone manually",     value: "manual",    score: 9 },
      { label: "Sometimes, when I remember",            value: "sometimes", score: 7 },
      { label: "My team does it, inconsistently",       value: "team",      score: 6 },
      { label: "I don't follow up",                     value: "never",     score: 4 },
    ],
  },
  {
    id: "confirmations",
    q: "How do you send order confirmations, reminders, or receipts?",
    hint: "Every manual message is an automation opportunity.",
    options: [
      { label: "I type them manually every time",      value: "manual",    score: 10 },
      { label: "Copy-paste from a saved template",     value: "copypaste", score: 7  },
      { label: "Automatically via an app",             value: "auto",      score: 1  },
      { label: "I don't send them",                    value: "none",      score: 5  },
    ],
  },
  {
    id: "admin",
    q: "How many hours per week do you spend on admin and messaging?",
    hint: "Include WhatsApp replies, bookings, follow-ups, reminders.",
    options: [
      { label: "Less than 3 hours",   value: "low",    score: 2  },
      { label: "3 – 8 hours",         value: "medium", score: 5  },
      { label: "8 – 20 hours",        value: "high",   score: 8  },
      { label: "More than 20 hours",  value: "heavy",  score: 10 },
    ],
  },
];

// ─── Workflow identification ───────────────────────────────────────────────────
const WORKFLOW_ICONS: Record<string, React.ElementType> = {
  whatsapp:      MessageSquare,
  booking:       Calendar,
  followup:      RefreshCw,
  confirmation:  CheckCircle,
  broadcast:     Mail,
  reporting:     BarChart2,
};

function identifyWorkflows(answers: Record<string, string>): { id: string; label: string; impact: string }[] {
  const flows = [];

  if (["whatsapp", "instagram", "mix"].includes(answers.contact))
    flows.push({ id: "whatsapp", label: "WhatsApp auto-reply", impact: "Never miss an inquiry again" });

  if (["manual_wa", "spreadsheet"].includes(answers.booking))
    flows.push({ id: "booking", label: "Booking & order automation", impact: "Zero manual confirmations" });

  if (["manual", "sometimes", "team"].includes(answers.followup))
    flows.push({ id: "followup", label: "Follow-up sequences", impact: "Automated repeat-sales messages" });

  if (["manual", "copypaste"].includes(answers.confirmations))
    flows.push({ id: "confirmation", label: "Auto confirmations & reminders", impact: "Customers always in the loop" });

  if (["high", "flood"].includes(answers.volume))
    flows.push({ id: "broadcast", label: "Broadcast campaigns", impact: "Reach all customers in one click" });

  if (["high", "heavy"].includes(answers.admin))
    flows.push({ id: "reporting", label: "Admin & reporting", impact: "Weekly summaries — no manual work" });

  return flows.slice(0, 4);
}

function calcHours(total: number): number {
  if (total >= 66) return Math.floor(Math.random() * 6) + 18; // 18–23
  if (total >= 46) return Math.floor(Math.random() * 5) + 11; // 11–15
  if (total >= 26) return Math.floor(Math.random() * 4) + 5;  // 5–8
  return Math.floor(Math.random() * 2) + 2;                   // 2–3
}

function calcLabel(total: number): { text: string; sub: string } {
  if (total >= 60) return { text: "High Potential", sub: "Your business is ready for automation." };
  if (total >= 35) return { text: "Good Potential", sub: "Several workflows can be improved now." };
  return { text: "Some Potential", sub: "A few quick wins available." };
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function AuditPage() {
  const [step, setStep] = useState<"intro" | number | "result">("intro");
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [selected, setSelected] = useState<string | null>(null);

  const currentQ = typeof step === "number" ? QUESTIONS[step] : null;
  const totalScore = Object.entries(answers).reduce((acc, [qid, val]) => {
    const q = QUESTIONS.find((q) => q.id === qid);
    const opt = q?.options.find((o) => o.value === val);
    return acc + (opt?.score ?? 0);
  }, 0);

  function handleSelect(val: string) {
    setSelected(val);
  }

  function handleNext() {
    if (!selected || typeof step !== "number") return;
    const q = QUESTIONS[step];
    setAnswers((prev) => ({ ...prev, [q.id]: selected }));
    setSelected(null);
    if (step + 1 < QUESTIONS.length) setStep(step + 1);
    else setStep("result");
  }

  function handleStart() {
    setStep(0);
    setSelected(null);
    setAnswers({});
  }

  const workflows = step === "result" ? identifyWorkflows(answers) : [];
  const hoursSaved = step === "result" ? calcHours(totalScore) : 0;
  const label = step === "result" ? calcLabel(totalScore) : null;

  return (
    <main className="min-h-screen bg-background">

      {/* Hero header — always visible */}
      <section className="border-b border-border bg-background">
        <div className="mx-auto max-w-3xl px-6 py-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-6 h-px bg-foreground/15" />
            <span className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.25em] uppercase">Free Tool</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold tracking-[-0.04em] text-foreground leading-tight mb-3">
            Automation Audit
          </h1>
          <p className="text-muted-foreground/60 text-sm leading-relaxed max-w-md">
            8 questions. 3 minutes. Find out exactly which parts of your business can run on autopilot — and how many hours per week you could get back.
          </p>
        </div>
      </section>

      {/* Main content area */}
      <div className="mx-auto max-w-3xl px-6 py-16">
        <AnimatePresence mode="wait">

          {/* ── Intro ── */}
          {step === "intro" && (
            <motion.div key="intro"
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }} transition={{ duration: 0.3 }}>

              <div className="border border-border rounded-2xl p-10 bg-white dark:bg-zinc-950 text-center">
                <div className="w-16 h-16 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-border flex items-center justify-center mx-auto mb-8">
                  <Zap className="h-8 w-8 text-foreground/70" />
                </div>
                <h2 className="text-2xl font-bold tracking-tight text-foreground mb-3">
                  Is your business ready to automate?
                </h2>
                <p className="text-sm text-muted-foreground/60 leading-relaxed max-w-sm mx-auto mb-10">
                  Most Indonesian SME owners spend 8–20 hours a week on tasks that can be automated. This audit tells you exactly which ones, and what to do first.
                </p>

                <div className="grid grid-cols-3 gap-4 mb-10 text-center">
                  {[
                    { icon: Clock,    label: "3 minutes",    sub: "to complete" },
                    { icon: CheckCircle, label: "8 questions", sub: "no sign-up" },
                    { icon: Zap,      label: "Free report",  sub: "instantly" },
                  ].map(({ icon: Icon, label, sub }) => (
                    <div key={label} className="p-4 rounded-xl border border-border bg-zinc-50 dark:bg-zinc-900/50">
                      <Icon className="h-4 w-4 text-muted-foreground/50 mx-auto mb-2" />
                      <p className="text-sm font-semibold text-foreground">{label}</p>
                      <p className="text-[10px] font-mono text-muted-foreground/40 mt-0.5">{sub}</p>
                    </div>
                  ))}
                </div>

                <button onClick={handleStart}
                  className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-8 py-3.5 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                  Start the audit <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </motion.div>
          )}

          {/* ── Questions ── */}
          {typeof step === "number" && currentQ && (
            <motion.div key={`q-${step}`}
              initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -24 }} transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}>

              {/* Progress */}
              <div className="flex items-center gap-3 mb-10">
                <div className="flex-1 h-1 bg-border rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-foreground rounded-full"
                    initial={{ width: `${(step / QUESTIONS.length) * 100}%` }}
                    animate={{ width: `${((step + 1) / QUESTIONS.length) * 100}%` }}
                    transition={{ duration: 0.4 }}
                  />
                </div>
                <span className="text-[10px] font-mono text-muted-foreground/40 flex-shrink-0">
                  {step + 1} / {QUESTIONS.length}
                </span>
              </div>

              {/* Question card */}
              <div className="border border-border rounded-2xl bg-white dark:bg-zinc-950 overflow-hidden">
                <div className="px-8 pt-8 pb-6 border-b border-border">
                  <p className="text-[10px] font-mono text-muted-foreground/35 tracking-[0.15em] uppercase mb-3">Question {step + 1}</p>
                  <h2 className="text-xl md:text-2xl font-bold tracking-tight text-foreground leading-snug mb-1">
                    {currentQ.q}
                  </h2>
                  <p className="text-sm text-muted-foreground/50">{currentQ.hint}</p>
                </div>

                <div className="p-6 space-y-2.5">
                  {currentQ.options.map((opt) => (
                    <button key={opt.value} onClick={() => handleSelect(opt.value)}
                      className={`w-full text-left px-5 py-4 rounded-xl border transition-all text-sm font-medium ${
                        selected === opt.value
                          ? "border-foreground bg-zinc-900 dark:bg-white text-white dark:text-zinc-900"
                          : "border-border bg-zinc-50 dark:bg-zinc-900/40 text-foreground hover:border-foreground/30 hover:bg-zinc-100 dark:hover:bg-zinc-900"
                      }`}>
                      {opt.label}
                    </button>
                  ))}
                </div>

                <div className="px-6 pb-6 flex items-center justify-between">
                  <button onClick={() => { setStep(Math.max(0, step - 1)); setSelected(answers[QUESTIONS[step - 1]?.id] ?? null); }}
                    disabled={step === 0}
                    className="text-xs font-mono text-muted-foreground/40 hover:text-muted-foreground disabled:opacity-20 transition-colors">
                    ← back
                  </button>
                  <button onClick={handleNext} disabled={!selected}
                    className="inline-flex items-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-6 py-2.5 rounded-lg text-sm font-semibold disabled:opacity-30 hover:opacity-90 transition-all">
                    {step + 1 === QUESTIONS.length ? "See my results" : "Next"}
                    <ArrowRight className="h-3.5 w-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          )}

          {/* ── Results ── */}
          {step === "result" && label && (
            <motion.div key="result"
              initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}>

              {/* Score header */}
              <div className="border border-border rounded-2xl bg-white dark:bg-zinc-950 overflow-hidden mb-4">
                <div className="bg-zinc-900 dark:bg-white px-8 py-10 text-center">
                  <p className="text-[10px] font-mono text-white/40 dark:text-zinc-900/40 tracking-[0.2em] uppercase mb-4">Your Automation Report</p>
                  <div className="inline-flex items-center gap-2 bg-white/10 dark:bg-zinc-900/10 border border-white/15 dark:border-zinc-900/15 rounded-full px-4 py-1.5 mb-6">
                    <Zap className="h-3 w-3 text-white dark:text-zinc-900" />
                    <span className="text-xs font-mono text-white dark:text-zinc-900 tracking-wide">{label.text}</span>
                  </div>
                  <div className="text-[5rem] font-black tracking-tighter text-white dark:text-zinc-900 leading-none mb-2">
                    {hoursSaved}h
                  </div>
                  <p className="text-white/60 dark:text-zinc-900/60 text-sm">saved per week</p>
                  <p className="text-white/40 dark:text-zinc-900/40 text-xs font-mono mt-1">≈ {hoursSaved * 4} hours per month</p>
                </div>

                <div className="px-8 py-6 border-t border-border">
                  <p className="text-sm text-muted-foreground/60 text-center">{label.sub}</p>
                </div>
              </div>

              {/* Workflows */}
              <div className="border border-border rounded-2xl bg-white dark:bg-zinc-950 overflow-hidden mb-4">
                <div className="px-7 py-6 border-b border-border">
                  <p className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.15em] uppercase mb-1">Automatable workflows identified</p>
                  <h3 className="text-lg font-bold text-foreground tracking-tight">{workflows.length} workflows ready to automate</h3>
                </div>
                <div className="divide-y divide-border">
                  {workflows.map((wf) => {
                    const Icon = WORKFLOW_ICONS[wf.id] ?? Zap;
                    return (
                      <div key={wf.id} className="flex items-center gap-4 px-7 py-5">
                        <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-900 border border-border flex items-center justify-center flex-shrink-0">
                          <Icon className="h-4.5 w-4.5 text-foreground/60" />
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-foreground">{wf.label}</p>
                          <p className="text-xs text-muted-foreground/50 font-mono mt-0.5">{wf.impact}</p>
                        </div>
                        <CheckCircle className="h-4 w-4 text-foreground/20 ml-auto flex-shrink-0" />
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* CTA */}
              <div className="border border-border rounded-2xl bg-white dark:bg-zinc-950 p-8 text-center">
                <h3 className="text-xl font-bold tracking-tight text-foreground mb-2">
                  Ready to reclaim those {hoursSaved} hours?
                </h3>
                <p className="text-sm text-muted-foreground/60 leading-relaxed max-w-sm mx-auto mb-7">
                  We&apos;ll set up your first automation in one session. Free consultation — no obligation.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <Link href="/automation#get-started"
                    className="inline-flex items-center justify-center gap-2 bg-zinc-900 dark:bg-white text-white dark:text-zinc-900 px-7 py-3 rounded-lg text-sm font-semibold hover:opacity-90 transition-opacity">
                    Book a free setup call <ArrowRight className="h-4 w-4" />
                  </Link>
                  <button onClick={handleStart}
                    className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-7 py-3 rounded-lg text-sm font-medium hover:bg-secondary transition-colors">
                    Retake the audit
                  </button>
                </div>
              </div>

            </motion.div>
          )}

        </AnimatePresence>
      </div>

      <FooterNew />
    </main>
  );
}
