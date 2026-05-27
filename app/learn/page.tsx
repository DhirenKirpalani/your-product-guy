"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FooterNew from "@/components/sections/footer-new";
import {
  Map,
  Users,
  BarChart2,
  Lightbulb,
  Target,
  Layers,
  ArrowRight,
  Clock,
  BookOpen,
  CheckCircle,
} from "lucide-react";

const LEARNING_PATHS = [
  {
    id: "beginner",
    level: "Start Here",
    title: "What is Product Management?",
    description: "Never heard of PM before? Start here. We explain it like you're 5.",
    color: "bg-zinc-100 dark:bg-zinc-800",
    accent: "border-zinc-300 dark:border-zinc-600",
    modules: [
      { title: "What does a Product Manager actually do?", time: "5 min" },
      { title: "Why do products fail? (and how PMs prevent it)", time: "7 min" },
      { title: "Your first week as a PM — what to focus on", time: "8 min" },
    ],
  },
  {
    id: "intermediate",
    level: "Level Up",
    title: "Core PM Skills",
    description: "You know the basics. Now build the skills that make you effective every day.",
    color: "bg-zinc-100 dark:bg-zinc-800",
    accent: "border-zinc-300 dark:border-zinc-600",
    modules: [
      { title: "How to write a product roadmap people follow", time: "10 min" },
      { title: "Talking to users: asking questions that matter", time: "8 min" },
      { title: "Prioritization: deciding what to build next", time: "12 min" },
    ],
  },
  {
    id: "advanced",
    level: "Go Deeper",
    title: "Strategy & Execution",
    description: "Move from doing PM to thinking like a product leader.",
    color: "bg-zinc-100 dark:bg-zinc-800",
    accent: "border-zinc-300 dark:border-zinc-600",
    modules: [
      { title: "Product strategy: building a product worth owning", time: "15 min" },
      { title: "Working with engineers without the friction", time: "10 min" },
      { title: "Metrics that actually tell you if your product is working", time: "12 min" },
    ],
  },
];

const CONCEPTS = [
  {
    icon: Map,
    title: "Roadmap",
    simple: "A plan showing what you'll build and when — like a calendar for your product.",
  },
  {
    icon: Users,
    title: "User Research",
    simple: "Talking to real people to understand what they need before you build anything.",
  },
  {
    icon: Target,
    title: "Prioritization",
    simple: "Deciding which features to build first based on impact vs. effort.",
  },
  {
    icon: BarChart2,
    title: "Metrics",
    simple: "Numbers that tell you if your product is actually solving the problem.",
  },
  {
    icon: Layers,
    title: "MVP",
    simple: "The smallest version of your product that still solves the core problem.",
  },
  {
    icon: Lightbulb,
    title: "Product Strategy",
    simple: "The big picture plan: what you're building, for who, and why it matters.",
  },
];

const FEATURED = {
  title: "How to Write a Product Roadmap That People Actually Follow",
  description:
    "Most roadmaps get ignored. Here's how to write one that your team believes in and your stakeholders actually read.",
  time: "10 min read",
  level: "Core Skills",
  steps: [
    "Define your product goal clearly — what problem are you solving, for exactly who?",
    "Gather all ideas from your team and users into one list",
    "Score each idea: How much impact? How much effort?",
    'Group top items into three buckets: "Now", "Next", "Later"',
    "Present it simply — one page, plain language, no jargon",
    "Review and update it every month, not every year",
  ],
};

const KNOWLEDGE_TOPICS = [
  { label: "Product roadmapping",       sub: "How to write a plan your team actually follows"       },
  { label: "Prioritization frameworks", sub: "Deciding what to build next — and what to ignore"      },
  { label: "Stakeholder management",    sub: "Getting alignment without endless meetings"            },
];

export default function LearnPage() {
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
            <span className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.25em] uppercase">Knowledge</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 32 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-[clamp(3rem,6.5vw,6rem)] font-bold tracking-[-0.05em] leading-[0.93] text-foreground mb-16 max-w-3xl">
            Product thinking.<br />
            <span className="text-muted-foreground/25">Without the jargon.</span>
          </motion.h1>

          <div className="border-t border-border mb-14 max-w-lg">
            {KNOWLEDGE_TOPICS.map((item, i) => (
              <motion.div key={item.label}
                initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.22 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="flex items-start gap-4 py-5 border-b border-border">
                <BookOpen className="h-5 w-5 text-muted-foreground/40 flex-shrink-0 mt-0.5" />
                <div>
                  <div className="text-base font-semibold text-foreground tracking-tight">{item.label}</div>
                  <div className="text-xs text-muted-foreground/50 font-mono mt-0.5">{item.sub}</div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
            className="flex flex-wrap items-center gap-6 text-xs text-muted-foreground/40 font-mono">
            <div className="flex items-center gap-2"><CheckCircle className="h-3 w-3" /><span>No prior experience needed</span></div>
            <div className="flex items-center gap-2"><Clock className="h-3 w-3" /><span>5–15 min reads</span></div>
            <div className="flex items-center gap-2"><Lightbulb className="h-3 w-3" /><span>Real examples, no fluff</span></div>
          </motion.div>
        </div>
      </section>

      {/* PM Concepts — 5-year-old definitions */}
      <section className="py-20 border-b border-border bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-foreground/20" />
              <span className="text-xs font-mono text-muted-foreground tracking-[0.15em] uppercase">PM Dictionary</span>
            </div>
            <h2 className="text-3xl font-semibold text-foreground mb-2">Key concepts, explained simply</h2>
            <p className="text-muted-foreground/70">If you were 5 years old, here&apos;s how we&apos;d explain PM terms.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {CONCEPTS.map((concept, index) => {
              const Icon = concept.icon;
              return (
                <motion.div
                  key={concept.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="p-5 rounded-lg border border-border bg-card hover:border-foreground/20 transition-all"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="inline-flex p-2 rounded-lg bg-secondary">
                      <Icon className="h-4 w-4 text-foreground" />
                    </div>
                    <span className="font-semibold text-foreground">{concept.title}</span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {concept.simple}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Aspiration statement — full bleed */}
      <section className="py-16 border-b border-border bg-foreground">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <p className="text-2xl md:text-3xl font-semibold text-background/90 tracking-tight leading-snug max-w-3xl">
            Becoming a better product thinker isn&apos;t about knowing more frameworks.
            <span className="text-background/40"> It&apos;s about making clearer decisions, faster.</span>
          </p>
        </div>
      </section>

      {/* Learning Paths */}
      <section className="py-20 border-b border-border bg-background">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-foreground/20" />
              <span className="text-xs font-mono text-muted-foreground tracking-[0.15em] uppercase">Learning Paths</span>
            </div>
            <h2 className="text-3xl font-semibold text-foreground mb-2">Where do you want to start?</h2>
            <p className="text-muted-foreground/70">Pick the path that fits where you are right now.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {LEARNING_PATHS.map((path, index) => (
              <motion.div
                key={path.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className={`rounded-lg border-2 ${path.accent} bg-card p-6 flex flex-col`}
              >
                <div className="text-xs font-medium text-muted-foreground font-mono mb-2">{path.level.toUpperCase()}</div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{path.title}</h3>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{path.description}</p>

                <div className="space-y-3 mt-auto">
                  {path.modules.map((module) => (
                    <div
                      key={module.title}
                      className="flex items-center justify-between gap-4 p-3 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors cursor-pointer group border border-transparent hover:border-border"
                    >
                      <span className="text-sm text-foreground leading-snug">{module.title}</span>
                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-[10px] text-muted-foreground/50 font-mono px-1.5 py-0.5 rounded border border-border bg-background">{module.time}</span>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <button className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:gap-3 transition-all">
                    Start this path <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20 border-b border-border bg-secondary/20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mb-10">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-6 h-px bg-foreground/20" />
              <span className="text-xs font-mono text-muted-foreground tracking-[0.15em] uppercase">Featured Article</span>
            </div>
            <h2 className="text-3xl font-semibold text-foreground">Start reading</h2>
          </div>
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-8 rounded-lg border border-border bg-card"
            >
              {/* Article metadata — seriousness signals */}
              <div className="flex flex-wrap items-center gap-3 mb-6 pb-6 border-b border-border">
                <span className="text-[10px] font-mono text-muted-foreground tracking-[0.12em] uppercase px-2 py-1 rounded border border-border bg-secondary">
                  {FEATURED.level}
                </span>
                <span className="text-[10px] font-mono text-muted-foreground tracking-[0.12em] uppercase px-2 py-1 rounded border border-border bg-secondary">
                  Beginner
                </span>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground/60">
                  <Clock className="h-3 w-3" />
                  <span>{FEATURED.time}</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-muted-foreground/60">
                  <span className="font-mono">Updated May 2025</span>
                </div>
              </div>
              <h3 className="text-2xl font-semibold text-foreground mb-3 tracking-tight">{FEATURED.title}</h3>
              <p className="text-muted-foreground mb-8 leading-relaxed">{FEATURED.description}</p>

              <div className="space-y-4">
                {FEATURED.steps.map((step, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-6 h-6 rounded-full bg-foreground text-background flex items-center justify-center text-xs font-semibold flex-shrink-0 mt-0.5">
                      {index + 1}
                    </div>
                    <p className="text-sm text-foreground leading-relaxed">{step}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 pt-6 border-t border-border">
                <div className="flex items-center gap-2 text-xs text-muted-foreground/50 font-mono">
                  <span>More articles in this series coming soon</span>
                  <span>·</span>
                  <span>Roadmapping · User Research · Prioritization</span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <FooterNew />
    </main>
  );
}
