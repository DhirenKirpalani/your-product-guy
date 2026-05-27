"use client";

import { motion } from "framer-motion";
import FooterNew from "@/components/sections/footer-new";
import {
  Map,
  Users,
  BarChart2,
  Lightbulb,
  Target,
  Layers,
  Clock,
  MessageSquare,
  Eye,
  Zap,
} from "lucide-react";

// ─── What a PM does — big visual analogy cards ───────────────────────────────
const CONCEPTS = [
  {
    icon: Map,
    word: "Roadmap",
    analogy: "Like Google Maps — but for your product.",
    plain: "You put in where you want to go. It shows the steps. If the road changes, you update the map.",
  },
  {
    icon: Users,
    word: "User Research",
    analogy: "Asking your friends what kind of pizza they want before ordering for everyone.",
    plain: "Instead of guessing, you talk to real people first. You ask questions. You listen. Then you build.",
  },
  {
    icon: Target,
    word: "Prioritization",
    analogy: "Deciding which homework to do first when you have too much.",
    plain: "You can't do everything. So you pick what matters most, do it first, and say no to the rest.",
  },
  {
    icon: BarChart2,
    word: "Metrics",
    analogy: "Your report card — but for your product.",
    plain: "Numbers that tell you if people like what you built. Not just downloads. Whether it actually helps them.",
  },
  {
    icon: Layers,
    word: "MVP",
    analogy: "A skateboard before a car. You need to learn to move first.",
    plain: "Build the smallest thing that works. Get it to real people fast. Learn. Then make it better.",
  },
  {
    icon: Lightbulb,
    word: "Strategy",
    analogy: "Choosing which game to play — before worrying about how to win it.",
    plain: "The big picture: what are you building, for who, and why does it matter more than anything else right now.",
  },
  {
    icon: MessageSquare,
    word: "Stakeholders",
    analogy: "Everyone who has an opinion about what you should build.",
    plain: "Your boss. The sales team. The engineers. The customers. A PM's job is to make sense of all those voices.",
  },
  {
    icon: Eye,
    word: "Discovery",
    analogy: "Tasting the soup before you serve it to guests.",
    plain: "Before you build something big, you test the idea small. You check you're solving a real problem.",
  },
  {
    icon: Zap,
    word: "Execution",
    analogy: "Turning the plan into something real.",
    plain: "Discovery tells you what to build. Execution is actually building it — on time, with the right people.",
  },
];

// ─── Lessons ──────────────────────────────────────────────────────────────────
const LESSONS = [
  {
    num: "01",
    tag: "Roadmapping",
    time: "5 min",
    title: "Your roadmap is a compass, not a contract.",
    plain: "Most roadmaps fail because teams treat them like promises. They're not. A roadmap is your best guess about the future, written down so everyone can see it.",
    points: [
      { icon: "→", text: "Start with the goal. What problem are you solving, and for who?" },
      { icon: "→", text: "Group things into three buckets: Now. Next. Later. That's it." },
      { icon: "→", text: "One page. Plain words. If it takes a presentation to explain it, simplify it." },
      { icon: "→", text: "Update it every month. A roadmap nobody touches is just a lie with a date on it." },
    ],
  },
  {
    num: "02",
    tag: "Prioritization",
    time: "5 min",
    title: "Why you keep building the wrong things.",
    plain: "You're not bad at prioritization. The system is broken. When the loudest person in the room wins, no framework helps — because the fight is about politics, not priorities.",
    points: [
      { icon: "→", text: "Frameworks don't make decisions. They surface arguments. Be ready to have them." },
      { icon: "→", text: "Ask: what happens if we don't build this? If the answer is 'nothing much' — don't build it." },
      { icon: "→", text: "Score by real data, not confidence. Who owns the estimates? Are they challenged?" },
      { icon: "→", text: "The best framework is the one your team actually uses. Boring consistency beats clever precision." },
    ],
  },
  {
    num: "03",
    tag: "Stakeholders",
    time: "4 min",
    title: "How to say no without burning bridges.",
    plain: "Saying no is the most important PM skill. Most people avoid it. The ones who do it badly lose relationships. Here's the version that works.",
    points: [
      { icon: "→", text: "Never say no to the request. Say no to the solution. Stay curious about the problem." },
      { icon: "→", text: "Ask: 'what outcome are you trying to get?' The answer usually changes everything." },
      { icon: "→", text: "Show the trade-off. 'If we build this, here's what we can't build.' Make it visible." },
      { icon: "→", text: "'Not now' with a real placeholder beats 'no forever.' Give people a when." },
    ],
  },
  {
    num: "04",
    tag: "Career",
    time: "6 min",
    title: "Your first 30 days as a PM. Don't ship anything.",
    plain: "New PMs want to prove themselves by building things fast. That's the wrong move. The best thing you can do in your first month is listen.",
    points: [
      { icon: "→", text: "Zero opinions. 100 questions. Listen before you pitch anything." },
      { icon: "→", text: "Map the real power structure — who actually decides things, not who has the title." },
      { icon: "→", text: "Find the one number everyone in the room cares about. That's your real north star." },
      { icon: "→", text: "Read every support ticket from the last 3 months. It's the fastest user research you can do." },
    ],
  },
  {
    num: "05",
    tag: "Strategy",
    time: "6 min",
    title: "Build first, understand later is backwards.",
    plain: "Teams skip discovery because it feels slow. Then they spend 3 months building the wrong thing and wonder why users don't care.",
    points: [
      { icon: "→", text: "Discovery is insurance. Every hour of it protects weeks of wasted delivery." },
      { icon: "→", text: "High uncertainty = more discovery. Low uncertainty = ship faster. Match the amount to the risk." },
      { icon: "→", text: "The output of discovery is not a spec. It's a confident decision about what NOT to build." },
      { icon: "→", text: "Run discovery 2 sprints ahead of delivery. Not in the same sprint — that's just guessing with steps." },
    ],
  },
  {
    num: "06",
    tag: "Metrics",
    time: "5 min",
    title: "Your numbers are lying to you.",
    plain: "Downloads went up. Sessions went up. Revenue stayed flat. If your metrics improve but the product isn't working, you're measuring the wrong things.",
    points: [
      { icon: "→", text: "A real metric changes when user behaviour changes. If it doesn't, it's reporting, not signal." },
      { icon: "→", text: "Retention tells you if you solved the problem. Acquisition tells you if you marketed it. Don't mix them up." },
      { icon: "→", text: "Every metric breaks something else when you optimise it. Find the shadow metric first." },
      { icon: "→", text: "The best product metric is one your engineer, designer, and CEO can all say from memory." },
    ],
  },
];

export default function LearnPage() {
  return (
    <main className="min-h-screen bg-background">

      {/* Hero */}
      <section className="relative border-b border-border bg-background overflow-hidden min-h-[85dvh] flex items-center">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_60%_40%,rgba(120,113,108,0.06)_0%,transparent_65%)] pointer-events-none" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(0,0,0,0.018)_1px,transparent_1px),linear-gradient(to_bottom,rgba(0,0,0,0.018)_1px,transparent_1px)] bg-[size:48px_48px] pointer-events-none" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8 py-24 w-full">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}
            className="flex items-center gap-3 mb-14">
            <div className="w-6 h-px bg-foreground/15" />
            <span className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.25em] uppercase">Knowledge</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,6.5vw,6rem)] font-bold tracking-[-0.05em] leading-[0.93] text-foreground mb-8 max-w-3xl">
            Product thinking.<br />
            <span className="text-muted-foreground/25">Explained like you&apos;re 5.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-base text-muted-foreground/60 max-w-md leading-relaxed mb-14">
            No frameworks. No jargon. Just clear ideas that help you build better products and make better decisions.
          </motion.p>

          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap gap-4 text-[10px] font-mono text-muted-foreground/35 tracking-[0.15em] uppercase">
            <span className="flex items-center gap-2"><Clock className="h-3 w-3" /> 5–6 min per lesson</span>
            <span className="flex items-center gap-2"><Lightbulb className="h-3 w-3" /> Real examples only</span>
            <span className="flex items-center gap-2"><Layers className="h-3 w-3" /> No prior experience needed</span>
          </motion.div>
        </div>
      </section>

      {/* PM Dictionary — big visual concept cards */}
      <section className="py-24 border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-foreground/20" />
              <span className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.2em] uppercase">PM Dictionary</span>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.04em] leading-tight text-foreground mb-3">
              9 words every PM uses.<br />
              <span className="text-muted-foreground/30">Explained simply.</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CONCEPTS.map((c, i) => {
              const Icon = c.icon;
              return (
                <motion.div key={c.word}
                  initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.05 }}
                  className="group border border-border rounded-xl p-6 bg-background hover:bg-zinc-50 dark:hover:bg-zinc-900/60 transition-colors flex flex-col gap-5">

                  {/* Big icon */}
                  <div className="w-14 h-14 rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-border flex items-center justify-center flex-shrink-0">
                    <Icon className="h-7 w-7 text-foreground/70" />
                  </div>

                  <div>
                    <p className="text-2xl font-bold tracking-tight text-foreground mb-1">{c.word}</p>
                    <p className="text-xs font-mono text-muted-foreground/50 italic leading-snug mb-3">&ldquo;{c.analogy}&rdquo;</p>
                    <p className="text-sm text-muted-foreground/70 leading-relaxed">{c.plain}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Pull quote */}
      <section className="py-16 border-b border-border bg-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-2xl md:text-3xl font-bold text-background/90 tracking-tight leading-snug max-w-2xl">
            Good PM thinking isn&apos;t about knowing more.
            <span className="text-background/35"> It&apos;s about being clearer, faster.</span>
          </p>
        </div>
      </section>

      {/* Lessons */}
      <section className="py-24 border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-6 h-px bg-foreground/20" />
              <span className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.2em] uppercase">Lessons</span>
            </div>
            <h2 className="text-[clamp(2rem,4vw,3rem)] font-bold tracking-[-0.04em] leading-tight text-foreground">
              Short lessons.<br />
              <span className="text-muted-foreground/30">Real things that matter.</span>
            </h2>
          </div>

          <div className="space-y-px border border-border rounded-xl overflow-hidden">
            {LESSONS.map((lesson, i) => (
              <motion.div key={lesson.num}
                initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.06 }}
                className="bg-background hover:bg-zinc-50 dark:hover:bg-zinc-900/50 transition-colors p-8 md:p-10 grid grid-cols-1 md:grid-cols-[auto_1fr] gap-8 md:gap-12">

                {/* Left — big number + meta */}
                <div className="flex md:flex-col gap-4 md:gap-2 items-start md:items-start md:w-28">
                  <span className="text-[4rem] font-black leading-none tracking-tighter text-foreground/08 select-none">
                    {lesson.num}
                  </span>
                  <div className="mt-1 md:mt-0">
                    <span className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.15em] uppercase block">{lesson.tag}</span>
                    <span className="text-[10px] font-mono text-muted-foreground/30 flex items-center gap-1 mt-1">
                      <Clock className="h-2.5 w-2.5" />{lesson.time}
                    </span>
                  </div>
                </div>

                {/* Right — content */}
                <div>
                  <h3 className="text-xl md:text-2xl font-bold tracking-tight text-foreground mb-3 leading-snug">
                    {lesson.title}
                  </h3>
                  <p className="text-base text-muted-foreground/70 leading-relaxed mb-7 max-w-xl">
                    {lesson.plain}
                  </p>
                  <div className="space-y-3">
                    {lesson.points.map((pt, j) => (
                      <div key={j} className="flex items-start gap-3">
                        <span className="text-muted-foreground/30 font-mono mt-[2px] flex-shrink-0 text-sm">{pt.icon}</span>
                        <p className="text-sm text-muted-foreground/65 leading-relaxed">{pt.text}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <FooterNew />
    </main>
  );
}
