"use client";

import { motion } from "framer-motion";
import { Bookmark, Share2 } from "lucide-react";
import { useState } from "react";

export type Signal = {
  id: number;
  categories: string[];
  signal: string;
  analysis: string;
  impact: string;
  system: string;
  teamSize: string;
  createdAt: string;
};

export default function SignalCard({ signal, index }: { signal: Signal; index: number }) {
  const [saved, setSaved] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = () => {
    navigator.clipboard.writeText(`Signal #${String(signal.id).padStart(3, "0")}: "${signal.signal}" — yourproductguy.com/signals`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      className="group border border-border bg-card rounded-lg overflow-hidden hover:border-foreground/20 transition-all duration-200"
    >
      {/* Card header */}
      <div className="px-6 pt-5 pb-4 border-b border-border flex items-center justify-between">
        <div className="flex items-center gap-4">
          <span className="text-xs font-mono text-muted-foreground/50 tracking-[0.12em]">
            SIGNAL #{String(signal.id).padStart(3, "0")}
          </span>
          <div className="flex items-center gap-1.5 flex-wrap">
            {signal.categories.map((cat) => (
              <span
                key={cat}
                className="text-[10px] font-mono tracking-[0.1em] uppercase px-2 py-0.5 rounded border border-border bg-secondary text-muted-foreground"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
        <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button
            onClick={() => setSaved(!saved)}
            className={`p-1.5 rounded-md border border-border transition-colors ${saved ? "bg-foreground text-background" : "bg-secondary hover:bg-muted"}`}
            title="Save signal"
          >
            <Bookmark className="h-3.5 w-3.5" />
          </button>
          <button
            onClick={handleShare}
            className="p-1.5 rounded-md border border-border bg-secondary hover:bg-muted transition-colors"
            title="Copy link"
          >
            <Share2 className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>

      <div className="px-6 py-5 space-y-5">
        {/* The signal */}
        <blockquote className="text-base font-medium text-foreground leading-snug tracking-tight border-l-2 border-foreground/20 pl-4">
          &ldquo;{signal.signal}&rdquo;
        </blockquote>

        {/* Analysis */}
        <div>
          <div className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.15em] uppercase mb-2">Analysis</div>
          <p className="text-sm text-muted-foreground leading-relaxed">{signal.analysis}</p>
        </div>

        <div className="w-full h-px bg-border" />

        {/* Impact */}
        <div>
          <div className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.15em] uppercase mb-2">Operational Impact</div>
          <p className="text-sm text-muted-foreground leading-relaxed">{signal.impact}</p>
        </div>

        {/* Suggested system */}
        <div className="p-4 rounded-lg bg-secondary/50 border border-border">
          <div className="text-[10px] font-mono text-muted-foreground/50 tracking-[0.15em] uppercase mb-2">Suggested System</div>
          <p className="text-sm text-foreground leading-relaxed">{signal.system}</p>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-1">
          <span className="text-[10px] text-muted-foreground/40 font-mono">{signal.teamSize} team · {signal.createdAt}</span>
          {copied && <span className="text-[10px] text-muted-foreground/60 font-mono">Link copied</span>}
        </div>
      </div>
    </motion.article>
  );
}
