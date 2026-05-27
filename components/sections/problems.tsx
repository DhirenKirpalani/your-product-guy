"use client";

import { motion } from "framer-motion";

const PROBLEMS = [
  {
    title: "Slow WhatsApp replies lose leads",
    description: "Customers move on when responses take hours instead of minutes.",
  },
  {
    title: "Missed follow-ups reduce sales",
    description: "Potential customers forget about your business without timely reminders.",
  },
  {
    title: "Manual admin wastes time",
    description: "Hours spent on repetitive tasks that could be automated.",
  },
  {
    title: "Bookings are disorganized",
    description: "Double bookings and no-shows hurt revenue and reputation.",
  },
  {
    title: "Customer support becomes repetitive",
    description: "Same questions answered manually by overworked staff.",
  },
  {
    title: "Operations become chaotic as businesses grow",
    description: "Manual processes break down when customer volume increases.",
  },
];

export default function ProblemsSection() {
  return (
    <section className="py-24 md:py-32 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
            Most Businesses Still Run on Manual Work
          </h2>
          <p className="text-lg text-muted-foreground">
            Operational inefficiencies that cost time, money, and customers.
          </p>
        </div>

        {/* Problems grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {PROBLEMS.map((problem, index) => (
            <motion.div
              key={problem.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-6 rounded-lg border border-border bg-card hover:bg-secondary/50 transition-colors"
            >
              <h3 className="text-base font-medium text-foreground mb-2">
                {problem.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {problem.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
