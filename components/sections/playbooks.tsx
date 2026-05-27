"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const PLAYBOOKS = [
  {
    category: "Salons & Beauty",
    title: "AI Workflow for Salons",
    description: "Complete automation system for appointment bookings, customer inquiries, and follow-ups.",
    steps: "12 steps",
    time: "2-3 days setup",
  },
  {
    category: "Medical & Clinics",
    title: "AI Lead System for Clinics",
    description: "Patient inquiry handling, appointment scheduling, and reminder automation.",
    steps: "10 steps",
    time: "2 days setup",
  },
  {
    category: "E-commerce",
    title: "WhatsApp Automation for Online Stores",
    description: "Order confirmations, shipping updates, and customer support automation.",
    steps: "14 steps",
    time: "3 days setup",
  },
  {
    category: "Professional Services",
    title: "Customer Follow-Up Systems",
    description: "Automated lead nurturing and client communication workflows.",
    steps: "8 steps",
    time: "1-2 days setup",
  },
  {
    category: "Property Agents",
    title: "AI Operational Setup for Real Estate",
    description: "Property inquiry handling, viewing scheduling, and client follow-ups.",
    steps: "11 steps",
    time: "2 days setup",
  },
  {
    category: "Workshops & Repair",
    title: "Service Booking Automation",
    description: "Appointment management, service reminders, and customer communication.",
    steps: "9 steps",
    time: "1-2 days setup",
  },
];

export default function PlaybooksSection() {
  return (
    <section id="playbooks" className="py-24 md:py-32 border-b border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-foreground mb-4">
            Operational Playbooks
          </h2>
          <p className="text-lg text-muted-foreground">
            Step-by-step automation workflows designed for specific business types.
          </p>
        </div>

        {/* Playbooks grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLAYBOOKS.map((playbook, index) => (
            <motion.a
              key={playbook.title}
              href="#"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group p-6 rounded-lg border border-border bg-card hover:border-foreground/20 transition-all"
            >
              <div className="text-xs text-muted-foreground font-mono mb-3">
                {playbook.category.toUpperCase()}
              </div>
              <h3 className="text-base font-semibold text-foreground mb-2 group-hover:text-foreground/80 transition-colors">
                {playbook.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {playbook.description}
              </p>
              <div className="flex items-center gap-4 text-xs text-muted-foreground font-mono">
                <span>{playbook.steps}</span>
                <span>•</span>
                <span>{playbook.time}</span>
              </div>
              <div className="mt-4 flex items-center gap-2 text-sm text-foreground group-hover:gap-3 transition-all">
                View playbook
                <ArrowRight className="h-4 w-4" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
