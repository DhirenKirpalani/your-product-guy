"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { SLIDE_UP_ANIMATION, STAGGER_ITEM } from "@/lib/constants";
import { MessageCircle, Zap, Users, BarChart3 } from "lucide-react";

const DEMO_TABS = [
  {
    id: "chat",
    label: "WhatsApp Chat",
    icon: MessageCircle,
    content: (
      <div className="space-y-4">
        <div className="flex justify-start">
          <div className="max-w-xs bg-muted rounded-2xl p-3">
            <p className="text-sm text-foreground">
              Hi, I'd like to book a haircut appointment for tomorrow
            </p>
            <p className="text-xs text-muted-foreground mt-1">10:32 AM</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-xs bg-foreground rounded-2xl p-3">
            <p className="text-sm text-background">
              Great! We have slots at 10 AM, 2 PM, or 4 PM. Which works best? 💇‍♀️
            </p>
            <p className="text-xs text-background/70 mt-1">10:32 AM</p>
          </div>
        </div>
        <div className="flex justify-start">
          <div className="max-w-xs bg-muted rounded-2xl p-3">
            <p className="text-sm text-foreground">2 PM please!</p>
            <p className="text-xs text-muted-foreground mt-1">10:34 AM</p>
          </div>
        </div>
        <div className="flex justify-end">
          <div className="max-w-xs bg-foreground rounded-2xl p-3">
            <p className="text-sm text-background">Perfect! Confirmed for tomorrow at 2 PM. See you then! ✓</p>
            <p className="text-xs text-background/70 mt-1">10:34 AM</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "automation",
    label: "Automation Flow",
    icon: Zap,
    content: (
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <div className="h-8 w-8 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-bold text-background">1</span>
          </div>
          <div>
            <p className="font-medium text-foreground">Message Received</p>
            <p className="text-xs text-muted-foreground">Customer inquiry detected</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="h-6 w-0.5 bg-border" />
        </div>
        <div className="flex items-start gap-3">
          <div className="h-8 w-8 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-bold text-background">2</span>
          </div>
          <div>
            <p className="font-medium text-foreground">AI Processing</p>
            <p className="text-xs text-muted-foreground">Intent identified + availability checked</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="h-6 w-0.5 bg-border" />
        </div>
        <div className="flex items-start gap-3">
          <div className="h-8 w-8 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-bold text-background">3</span>
          </div>
          <div>
            <p className="font-medium text-foreground">Instant Reply</p>
            <p className="text-xs text-muted-foreground">Options presented to customer</p>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="h-6 w-0.5 bg-border" />
        </div>
        <div className="flex items-start gap-3">
          <div className="h-8 w-8 rounded-full bg-foreground flex items-center justify-center flex-shrink-0">
            <span className="text-xs font-bold text-background">4</span>
          </div>
          <div>
            <p className="font-medium text-foreground">Booking Confirmed</p>
            <p className="text-xs text-muted-foreground">Calendar updated + reminder scheduled</p>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: "leads",
    label: "Lead Pipeline",
    icon: Users,
    content: (
      <div className="space-y-3">
        <div className="p-3 rounded-lg bg-secondary border border-border">
          <div className="flex justify-between items-start mb-2">
            <p className="font-medium text-foreground text-sm">New Leads Today</p>
            <span className="text-lg font-bold text-foreground">12</span>
          </div>
          <p className="text-xs text-muted-foreground">↑ 45% from yesterday</p>
        </div>
        <div className="p-3 rounded-lg bg-secondary border border-border">
          <div className="flex justify-between items-start mb-2">
            <p className="font-medium text-foreground text-sm">Booked Appointments</p>
            <span className="text-lg font-bold text-foreground">8</span>
          </div>
          <p className="text-xs text-muted-foreground">67% conversion rate</p>
        </div>
        <div className="p-3 rounded-lg bg-secondary border border-border">
          <div className="flex justify-between items-start mb-2">
            <p className="font-medium text-foreground text-sm">Follow-Up Needed</p>
            <span className="text-lg font-bold text-foreground">4</span>
          </div>
          <p className="text-xs text-muted-foreground">Automated reminders scheduled</p>
        </div>
        <div className="p-3 rounded-lg bg-secondary border border-border">
          <div className="flex justify-between items-start mb-2">
            <p className="font-medium text-foreground text-sm">Qualified Leads</p>
            <span className="text-lg font-bold text-foreground">7</span>
          </div>
          <p className="text-xs text-muted-foreground">Ready for team contact</p>
        </div>
      </div>
    ),
  },
  {
    id: "dashboard",
    label: "Dashboard",
    icon: BarChart3,
    content: (
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="p-4 rounded-lg bg-secondary border border-border text-center">
            <p className="text-xs text-muted-foreground mb-2">Response Time</p>
            <p className="text-2xl font-bold text-foreground">2.3s</p>
            <p className="text-xs text-green-600 mt-1">↑ Avg: 5m</p>
          </div>
          <div className="p-4 rounded-lg bg-secondary border border-border text-center">
            <p className="text-xs text-muted-foreground mb-2">Automation Rate</p>
            <p className="text-2xl font-bold text-foreground">89%</p>
            <p className="text-xs text-green-600 mt-1">↑ 12%</p>
          </div>
        </div>
        <div className="p-4 rounded-lg bg-secondary border border-border">
          <p className="text-xs text-muted-foreground mb-3 font-medium">This Week</p>
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <p className="text-sm text-foreground">Messages Processed</p>
              <p className="font-bold text-foreground">847</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-foreground">Appointments Booked</p>
              <p className="font-bold text-foreground">156</p>
            </div>
            <div className="flex items-center justify-between">
              <p className="text-sm text-foreground">Leads Generated</p>
              <p className="font-bold text-foreground">89</p>
            </div>
          </div>
        </div>
      </div>
    ),
  },
];

export default function LiveDemoSection() {
  const [activeTab, setActiveTab] = useState("chat");
  const activeTabData = DEMO_TABS.find((tab) => tab.id === activeTab);

  return (
    <section
      id="demo"
      className="py-24 md:py-32 border-t border-border bg-card"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center max-w-2xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
            Live AI Workflow Demo
          </h2>
          <p className="text-lg text-muted-foreground">
            See how the system works in real-time with actual workflow logic.
          </p>
        </div>

        {/* Demo Container */}
        <motion.div
          variants={SLIDE_UP_ANIMATION}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="max-w-2xl mx-auto"
        >
          {/* Tabs */}
          <div className="flex gap-2 mb-6 border-b border-border overflow-x-auto">
            {DEMO_TABS.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-4 py-3 text-sm font-medium whitespace-nowrap border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? "border-foreground text-foreground"
                      : "border-transparent text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  {tab.label}
                </button>
              );
            })}
          </div>

          {/* Tab Content */}
          <Card className="p-6 min-h-96 border border-border">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
            >
              {activeTabData?.content}
            </motion.div>
          </Card>
        </motion.div>

        {/* Key Feature Highlight */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          {[
            {
              title: "Instant Responses",
              description: "Replies in milliseconds, not hours.",
            },
            {
              title: "Automatic Lead Capture",
              description: "Every conversation becomes actionable data.",
            },
            {
              title: "Real-Time Dashboard",
              description: "Monitor operations as they happen.",
            },
          ].map((feature, index) => (
            <motion.div key={index} variants={STAGGER_ITEM}>
              <Card className="p-6 border border-border text-center">
                <h4 className="font-bold text-foreground mb-2">{feature.title}</h4>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
