"use client";

import { motion } from "framer-motion";
import { Map, Users, BarChart2 } from "lucide-react";

const TOPICS = [
  {
    icon: Map,
    title: "Product Roadmapping",
    description: "How to plan, prioritize, and communicate what gets built and when.",
    articles: 10,
  },
  {
    icon: Users,
    title: "User Research",
    description: "Simple techniques for understanding what users actually need before you build.",
    articles: 14,
  },
  {
    icon: BarChart2,
    title: "Product Strategy",
    description: "Frameworks for making product decisions that align with business goals.",
    articles: 12,
  },
];

export default function KnowledgeSimple() {
  return (
    <section id="knowledge" className="py-24 md:py-32 border-b border-border bg-secondary/20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-6 h-px bg-foreground/20" />
            <span className="text-xs font-mono text-muted-foreground tracking-[0.15em] uppercase">Education</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-foreground mb-5">
            Learn Product Management
            <br />
            <span className="text-muted-foreground/50">Skills That Actually Matter</span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl">
            Practical PM skills — no fluff, no theory overload. Just what modern product teams actually use.
          </p>
        </div>

        {/* Topics */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {TOPICS.map((topic, index) => {
            const Icon = topic.icon;
            return (
              <motion.a
                key={topic.title}
                href="#"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="group p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-all"
              >
                <div className="inline-flex p-3 rounded-lg bg-secondary mb-4">
                  <Icon className="h-6 w-6 text-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {topic.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {topic.description}
                </p>
                <div className="text-sm text-muted-foreground font-mono">
                  {topic.articles} articles
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Example article */}
        <div className="max-w-3xl mx-auto p-8 rounded-lg border border-border bg-card">
          <div className="text-xs text-muted-foreground font-mono mb-3">EXAMPLE ARTICLE</div>
          <h3 className="text-2xl font-semibold text-foreground mb-4">
            How to Write a Product Roadmap That People Actually Follow
          </h3>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              <strong className="text-foreground">Step 1:</strong> Define your product goal — what problem are you solving and for who?
            </p>
            <p>
              <strong className="text-foreground">Step 2:</strong> List all ideas and features, then rank them by impact vs effort
            </p>
            <p>
              <strong className="text-foreground">Step 3:</strong> Group top items into quarters — Now, Next, Later
            </p>
            <p>
              <strong className="text-foreground">Step 4:</strong> Share it with your team and update it every month
            </p>
          </div>
          <div className="mt-6">
            <a href="#" className="text-foreground font-medium hover:underline">
              Read full article →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
