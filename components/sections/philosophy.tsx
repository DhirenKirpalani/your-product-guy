"use client";

import { motion } from "framer-motion";

const PRINCIPLES = [
  {
    number: "01",
    title: "Systems over effort",
    body: "Most operational problems aren't caused by lazy teams. They're caused by unclear systems. The fix isn't working harder — it's building better structure.",
  },
  {
    number: "02",
    title: "Clarity is a competitive advantage",
    body: "The clearest business in any market wins. Clear communication. Clear processes. Clear decisions. Clarity compounds — obscurity compounds too.",
  },
  {
    number: "03",
    title: "Good products start with honest problems",
    body: "Before roadmaps, before sprints, before features — someone has to clearly define the problem worth solving. Most teams skip this. That's why most products disappoint.",
  },
];

export default function PhilosophySection() {
  return (
    <section className="py-20 md:py-28 bg-foreground">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Manifesto header */}
        <div className="flex items-center gap-3 mb-12">
          <div className="w-6 h-px bg-background/20" />
          <span className="text-[10px] font-mono text-background/40 tracking-[0.2em] uppercase">Philosophy</span>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-2xl md:text-3xl lg:text-4xl font-semibold text-background/90 leading-[1.15] tracking-tight max-w-3xl mb-16"
        >
          Modern work becomes chaotic when systems are unclear.
          <span className="text-background/35"> We build the operational infrastructure that makes businesses function with less friction and more intent.</span>
        </motion.p>

        {/* Principles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-background/10">
          {PRINCIPLES.map((p, index) => (
            <motion.div
              key={p.number}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.4 }}
              className="bg-foreground p-6 md:p-8"
            >
              <div className="text-[10px] font-mono text-background/25 tracking-[0.2em] mb-4">{p.number}</div>
              <h3 className="text-base font-semibold text-background/80 mb-3 tracking-tight">{p.title}</h3>
              <p className="text-sm text-background/40 leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
