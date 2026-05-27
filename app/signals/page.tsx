"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowRight, Radio } from "lucide-react";
import SignalCard, { Signal } from "@/components/signals/signal-card";
import FooterNew from "@/components/sections/footer-new";

const CATEGORIES = ["All", "PM", "Communication", "Leadership", "Engineering", "Prioritization", "Meetings", "Execution", "Hiring"];

const SIGNALS: Signal[] = [
  {
    id: 24,
    categories: ["PM", "Prioritization"],
    signal: "Every feature becomes urgent after leadership meetings.",
    analysis: "This typically indicates a prioritization framework disconnect. When stakeholders bypass roadmap processes to introduce ad-hoc urgency, it creates cascading priority resets that erode team trust and execution quality.",
    impact: "Engineering context switches compound. Roadmap credibility declines. PMs lose alignment authority and teams begin treating all work as equally urgent — which means nothing is.",
    system: "Introduce quarterly planning cycles with explicit priority locks. Require written stakeholder alignment before any mid-cycle scope changes. Make the cost of priority shifts visible.",
    teamSize: "11–50",
    createdAt: "May 2025",
  },
  {
    id: 23,
    categories: ["Communication", "Meetings"],
    signal: "We schedule meetings to discuss what we already decided in Slack.",
    analysis: "Indicates unclear decision-making protocols. When async communication tools coexist with sync meeting culture without defined boundaries, teams create redundant decision loops — validating in meetings what was already resolved.",
    impact: "Time waste compounds across roles. Decision fatigue increases. High performers disengage from async channels, sensing decisions don't count until confirmed in meetings.",
    system: "Define explicit decision tiers — what resolves async vs. requires synchronous discussion. Use structured decision documents with clear owners and expiry.",
    teamSize: "11–50",
    createdAt: "May 2025",
  },
  {
    id: 22,
    categories: ["Leadership", "Execution"],
    signal: "Strategy changes every quarter but KPIs stay the same.",
    analysis: "Classic misalignment between strategic direction and performance measurement infrastructure. Organizations that update goals without updating measurement frameworks force teams to optimize for outcomes that no longer reflect current intent.",
    impact: "Teams optimize for wrong outcomes. High performers become frustrated. Measurement loses credibility and eventually becomes performative reporting rather than useful signal.",
    system: "Tie KPI review cycles explicitly to strategic planning. Treat metric changes as first-class strategic decisions. Publish the rationale for measurement changes visibly.",
    teamSize: "51–200",
    createdAt: "Apr 2025",
  },
  {
    id: 21,
    categories: ["PM", "Engineering"],
    signal: "Specifications are written after engineering has already started building.",
    analysis: "Indicates process inversion — delivery pressure forces teams into execution before clarity is established. Often caused by deadline-first planning culture where discovery phases are seen as delays rather than risk reduction.",
    impact: "Rework cycles increase. Engineers build on unstable assumptions. Product quality degrades as scope gets negotiated during delivery rather than before it.",
    system: "Establish a clear two-phase model: discovery before delivery. Protect design and spec time as a non-negotiable part of the delivery estimate.",
    teamSize: "11–50",
    createdAt: "Apr 2025",
  },
  {
    id: 20,
    categories: ["Meetings", "Execution"],
    signal: "Every decision requires a meeting. Every meeting requires a follow-up meeting.",
    analysis: "Organizational decision-making bottleneck caused by unclear ownership and authority boundaries. When decision rights aren't explicit, every choice escalates until it finds someone willing to commit — which is usually the next meeting.",
    impact: "Execution velocity drops sharply. Teams spend more time coordinating than delivering. Leaders become bottlenecks. Junior staff disengage from decision processes entirely.",
    system: "Map decisions to explicit owners using a DACI or RACI framework. Define which decisions are delegated vs escalated. Make decision ownership visible in project documentation.",
    teamSize: "51–200",
    createdAt: "Mar 2025",
  },
  {
    id: 19,
    categories: ["Communication", "Leadership"],
    signal: "Leadership announces vision. Teams announce they have no idea what that means for their work.",
    analysis: "Strategy-to-execution translation failure. When organizational vision is communicated abstractly without operational specificity, individual contributors cannot derive clear task-level implications — leading to misaligned execution under confident-sounding language.",
    impact: "Teams work hard in different directions. Strategic coherence is lost at the team level. Morale degrades as effort doesn't feel connected to meaning.",
    system: "Require every strategic announcement to include a 'what this means for your team' breakdown. Create explicit translation layers between company strategy and team-level planning.",
    teamSize: "200+",
    createdAt: "Mar 2025",
  },
  {
    id: 18,
    categories: ["Hiring", "Operations"],
    signal: "We hire people for a role, then immediately ask them to do something else.",
    analysis: "Role definition instability — usually caused by reactive hiring that responds to immediate pain rather than strategic capacity planning. Roles are scoped for the problem of the moment, not the organizational need over time.",
    impact: "New hire confusion and disengagement within first 90 days. High early attrition. Managers frustrated by misaligned expectations. Talent investment wasted.",
    system: "Establish a role definition protocol before opening any hire. Define what success looks like at 30/60/90 days. Resist scope creep on roles during probation periods.",
    teamSize: "11–50",
    createdAt: "Feb 2025",
  },
];

const INSIGHTS = [
  { label: "Prioritization", count: 31, pct: 78 },
  { label: "Communication", count: 24, pct: 60 },
  { label: "Leadership", count: 19, pct: 48 },
  { label: "Meetings", count: 17, pct: 43 },
  { label: "Execution", count: 14, pct: 35 },
];

const TEAM_SIZES = ["1–10", "11–50", "51–200", "200+"];
const INDUSTRIES = ["Technology", "E-commerce", "Healthcare", "Finance", "Agency", "Education", "Retail", "Other"];

export default function SignalsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [showModal, setShowModal] = useState(false);
  const [form, setForm] = useState({
    problem: "",
    category: "PM",
    impact: "",
    cause: "",
    teamSize: "11–50",
    industry: "",
    anonymous: true,
  });
  const [submitted, setSubmitted] = useState(false);

  const filtered = activeCategory === "All"
    ? SIGNALS
    : SIGNALS.filter((s) => s.categories.includes(activeCategory));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setShowModal(false);
      setSubmitted(false);
      setForm({ problem: "", category: "PM", impact: "", cause: "", teamSize: "11–50", industry: "", anonymous: true });
    }, 2000);
  };

  return (
    <main className="min-h-screen bg-background">

      {/* Hero — cinematic */}
      <section className="relative border-b border-border bg-background overflow-hidden min-h-[85dvh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_60%_40%,rgba(120,113,108,0.06)_0%,transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.018)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 w-full">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-14">
            <div className="w-6 h-px bg-foreground/15" />
            <span className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.25em] uppercase">Workplace Signals</span>
            <div className="flex items-center gap-1.5 ml-2">
              <motion.div animate={{ opacity: [1, 0.3, 1] }} transition={{ repeat: Infinity, duration: 2.5 }}
                className="w-1 h-1 rounded-full bg-foreground/30" />
              <span className="text-[10px] font-mono text-muted-foreground/30">{SIGNALS.length} signals</span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,6.5vw,6rem)] font-bold tracking-[-0.05em] leading-[0.93] text-foreground mb-10 max-w-3xl">
            Operational intelligence<br />
            <span className="text-muted-foreground/25">from modern teams.</span>
          </motion.h1>

          <motion.p initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-base text-muted-foreground leading-relaxed max-w-lg mb-12">
            Anonymous patterns from real workplaces, analyzed through systems thinking.
            No names. No companies. Just signal.
          </motion.p>

          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row sm:items-center gap-4">
            <button onClick={() => setShowModal(true)}
              className="group inline-flex items-center gap-2.5 px-6 py-3 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/85 transition-all w-fit">
              <Radio className="h-4 w-4" />
              Submit a Signal
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
            <p className="text-[10px] text-muted-foreground/35 font-mono">Anonymous by default · No names, no companies</p>
          </motion.div>
        </div>
      </section>

      {/* Insights strip */}
      <section className="border-b border-border bg-secondary/20 py-8">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="w-5 h-px bg-foreground/20" />
            <span className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.15em] uppercase">Most Common Patterns</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
            {INSIGHTS.map((item) => (
              <div key={item.label} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">{item.label}</span>
                  <span className="text-[10px] font-mono text-muted-foreground/50">{item.count}</span>
                </div>
                <div className="h-1 rounded-full bg-border overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.pct}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.1 }}
                    className="h-full rounded-full bg-foreground/30"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Filter + Feed */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          {/* Category filter */}
          <div className="flex items-center gap-2 flex-wrap mb-10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 text-xs font-mono rounded-lg border transition-all duration-150 ${
                  activeCategory === cat
                    ? "bg-foreground text-background border-foreground"
                    : "bg-background text-muted-foreground border-border hover:border-foreground/30 hover:text-foreground"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Signal feed */}
          <AnimatePresence mode="wait">
            {filtered.length > 0 ? (
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 lg:grid-cols-2 gap-6"
              >
                {filtered.map((signal, i) => (
                  <SignalCard key={signal.id} signal={signal} index={i} />
                ))}
              </motion.div>
            ) : (
              <motion.div
                key="empty"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="py-24 text-center border border-dashed border-border rounded-lg"
              >
                <p className="text-muted-foreground/50 font-mono text-sm mb-2">No signals in this category yet.</p>
                <p className="text-muted-foreground/40 text-xs max-w-sm mx-auto">
                  Modern work is full of hidden operational friction. Be the first to submit a signal.
                </p>
                <button
                  onClick={() => setShowModal(true)}
                  className="mt-6 inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm text-muted-foreground hover:text-foreground hover:border-foreground/30 transition-all"
                >
                  Submit a Signal <ArrowRight className="h-3.5 w-3.5" />
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </section>

      {/* Platform rules note */}
      <section className="py-12 border-t border-b border-border bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-5 h-px bg-foreground/20" />
              <span className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.15em] uppercase">Platform Principles</span>
            </div>
            <p className="text-sm text-muted-foreground/60 leading-relaxed">
              Workplace Signals is structured operational intelligence — not a gossip platform. All signals are anonymous. No company names, no personal identification, no harassment. This is systems thinking for modern teams.
            </p>
          </div>
        </div>
      </section>

      <FooterNew />

      {/* Submit Modal */}
      <AnimatePresence>
        {showModal && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowModal(false)}
              className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-x-4 top-[5%] bottom-[5%] md:inset-x-auto md:left-1/2 md:-translate-x-1/2 md:w-full md:max-w-2xl z-50 bg-card border border-border rounded-xl overflow-hidden flex flex-col"
            >
              {/* Modal header */}
              <div className="px-6 py-4 border-b border-border flex items-center justify-between flex-shrink-0">
                <div>
                  <div className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.15em] uppercase mb-0.5">Submit</div>
                  <h2 className="text-base font-semibold text-foreground tracking-tight">Share a Workplace Signal</h2>
                </div>
                <button onClick={() => setShowModal(false)} className="p-2 rounded-lg border border-border hover:bg-secondary transition-colors">
                  <X className="h-4 w-4" />
                </button>
              </div>

              {/* Modal body */}
              <div className="flex-1 overflow-y-auto px-6 py-6">
                {submitted ? (
                  <div className="flex flex-col items-center justify-center h-full py-16 text-center">
                    <div className="w-10 h-10 rounded-full bg-foreground/10 flex items-center justify-center mb-4">
                      <Radio className="h-5 w-5 text-foreground" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">Signal received.</h3>
                    <p className="text-sm text-muted-foreground max-w-xs">Your signal will be analyzed and published anonymously. Thank you for contributing.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">

                    <div>
                      <label className="block text-xs font-mono text-muted-foreground/60 tracking-[0.12em] uppercase mb-2">
                        What operational problem are you experiencing? *
                      </label>
                      <textarea
                        required
                        rows={3}
                        value={form.problem}
                        onChange={(e) => setForm({ ...form, problem: e.target.value })}
                        placeholder="Describe the friction, pattern, or breakdown you're observing..."
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/30 transition-colors resize-none leading-relaxed"
                      />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-xs font-mono text-muted-foreground/60 tracking-[0.12em] uppercase mb-2">Category *</label>
                        <select
                          value={form.category}
                          onChange={(e) => setForm({ ...form, category: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:border-foreground/30 transition-colors"
                        >
                          {["PM", "Engineering", "Leadership", "Meetings", "Communication", "Prioritization", "Hiring", "Execution"].map((c) => (
                            <option key={c}>{c}</option>
                          ))}
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-mono text-muted-foreground/60 tracking-[0.12em] uppercase mb-2">Team Size</label>
                        <select
                          value={form.teamSize}
                          onChange={(e) => setForm({ ...form, teamSize: e.target.value })}
                          className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:border-foreground/30 transition-colors"
                        >
                          {TEAM_SIZES.map((s) => <option key={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-muted-foreground/60 tracking-[0.12em] uppercase mb-2">
                        What impact does this create? *
                      </label>
                      <textarea
                        required
                        rows={2}
                        value={form.impact}
                        onChange={(e) => setForm({ ...form, impact: e.target.value })}
                        placeholder="How does this affect the team, output, or culture?"
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/30 transition-colors resize-none leading-relaxed"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-muted-foreground/60 tracking-[0.12em] uppercase mb-2">
                        What do you think is causing this? <span className="normal-case text-muted-foreground/30">(optional)</span>
                      </label>
                      <textarea
                        rows={2}
                        value={form.cause}
                        onChange={(e) => setForm({ ...form, cause: e.target.value })}
                        placeholder="Your hypothesis on the root cause..."
                        className="w-full px-4 py-3 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/40 focus:outline-none focus:border-foreground/30 transition-colors resize-none leading-relaxed"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-mono text-muted-foreground/60 tracking-[0.12em] uppercase mb-2">
                        Industry <span className="normal-case text-muted-foreground/30">(optional)</span>
                      </label>
                      <select
                        value={form.industry}
                        onChange={(e) => setForm({ ...form, industry: e.target.value })}
                        className="w-full px-4 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground focus:outline-none focus:border-foreground/30 transition-colors"
                      >
                        <option value="">Select industry</option>
                        {INDUSTRIES.map((i) => <option key={i}>{i}</option>)}
                      </select>
                    </div>

                    {/* Anonymous toggle */}
                    <div className="flex items-center justify-between p-4 rounded-lg border border-border bg-secondary/50">
                      <div>
                        <p className="text-sm font-medium text-foreground">Submit anonymously</p>
                        <p className="text-xs text-muted-foreground/60 mt-0.5">No names, no company, no trace. Always.</p>
                      </div>
                      <button
                        type="button"
                        onClick={() => setForm({ ...form, anonymous: !form.anonymous })}
                        className={`w-10 h-5 rounded-full transition-colors relative ${form.anonymous ? "bg-foreground" : "bg-border"}`}
                      >
                        <div className={`absolute top-0.5 w-4 h-4 rounded-full bg-background transition-all ${form.anonymous ? "left-5" : "left-0.5"}`} />
                      </button>
                    </div>

                    {/* Rules reminder */}
                    <p className="text-[10px] text-muted-foreground/40 leading-relaxed font-mono">
                      No company names · No personal identification · No harassment · No legal accusations. Signals that violate these rules will not be published.
                    </p>

                    <button
                      type="submit"
                      className="w-full py-3 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
                    >
                      Submit Signal
                    </button>
                  </form>
                )}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
