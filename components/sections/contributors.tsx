"use client";

import { motion } from "framer-motion";
import { Users, FileText, Workflow, CheckCircle } from "lucide-react";

const CONTRIBUTION_TYPES = [
  {
    icon: FileText,
    title: "Operational Workflows",
    description: "Share practical automation workflows and business systems",
  },
  {
    icon: Workflow,
    title: "AI Playbooks",
    description: "Document step-by-step guides for specific business use cases",
  },
  {
    icon: CheckCircle,
    title: "Prompt Templates",
    description: "Contribute tested prompts for customer service and operations",
  },
  {
    icon: Users,
    title: "Business Examples",
    description: "Write case studies showing real AI implementations",
  },
];

export default function ContributorsSection() {
  return (
    <section id="contributors" className="py-24 md:py-32 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
            Built by Contributors and Operators
          </h2>
          <p className="text-lg text-muted-foreground">
            Anyone can contribute practical workflows, operational knowledge, AI systems, and automation playbooks.
          </p>
        </div>

        {/* Contribution types */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {CONTRIBUTION_TYPES.map((type, index) => {
            const Icon = type.icon;
            return (
              <motion.div
                key={type.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="p-6 rounded-lg border border-border bg-card"
              >
                <Icon className="h-5 w-5 text-foreground mb-4" />
                <h3 className="text-base font-semibold text-foreground mb-2">
                  {type.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {type.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Contribution guidelines */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="p-8 rounded-lg border border-border bg-secondary/30"
        >
          <h3 className="text-xl font-semibold text-foreground mb-4">
            Contribution Guidelines
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Quality Standards</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Clear, actionable explanations</li>
                <li>• Real business examples</li>
                <li>• Tested workflows and prompts</li>
                <li>• Operational focus, not theory</li>
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-semibold text-foreground mb-2">Submission Process</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Use structured templates</li>
                <li>• Include practical examples</li>
                <li>• Provide context and use cases</li>
                <li>• Review and approval within 48 hours</li>
              </ul>
            </div>
          </div>
          <div className="mt-6">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-4 py-2 bg-foreground text-background rounded-lg text-sm font-medium hover:bg-foreground/90 transition-colors"
            >
              Start Contributing
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
