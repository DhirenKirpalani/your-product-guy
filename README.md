# Your Product Guy

An operational intelligence platform for modern businesses — built around three focused services.

**Automation** · **Knowledge** · **Signals**

---

## Platform

| Service | Path | Description |
|---|---|---|
| Business Automation | `/automation` | WhatsApp systems that handle customer replies, bookings, and follow-ups |
| Knowledge | `/learn` | Product management education — no jargon, practical frameworks |
| Workplace Signals | `/signals` | Anonymous operational insights analyzed through systems thinking |

---

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Fonts**: Geist Sans & Geist Mono
- **Language**: TypeScript
- **Deployment**: Vercel

## Architecture

### Page Routes

| Route | File | Description |
|---|---|---|
| `/` | `app/page.tsx` | Homepage — Hero, Contribute, Footer |
| `/automation` | `app/automation/page.tsx` | Business Automation — cinematic hero, GetStarted |
| `/learn` | `app/learn/page.tsx` | Knowledge — PM concepts, learning paths, articles |
| `/signals` | `app/signals/page.tsx` | Workplace Signals — feed, filter, submit modal |

### Component Tree

```
components/
├── navbar.tsx                  # Sticky nav — active route pill, Contribute anchor, EN/ID
├── language-selector.tsx       # EN / ID language toggle
│
├── sections/                   # Page-level section components
│   ├── footer-new.tsx          # Footer — brand block + 3 module links
│   ├── hero.tsx                # Legacy hero (unused on homepage)
│   ├── automation-simple.tsx   # Legacy automation cards (unused)
│   ├── knowledge-simple.tsx    # Legacy knowledge section (unused)
│   ├── services-strip.tsx      # Legacy services strip (unused)
│   └── [other legacy sections] # about, cta, how-it-works, etc.
│
├── signals/
│   └── signal-card.tsx         # Individual expandable signal card
│
└── ui/                         # shadcn/ui primitives
    ├── badge.tsx
    ├── button.tsx
    ├── card.tsx
    └── input.tsx
```

### Data Flow

- All page data is **co-located inline** — constants defined at the top of each `page.tsx`
- No external data fetching, CMS, or API layer yet
- Signal submissions are client-side only (no persistence yet)
- Language selector state is local to the component

### Key Libraries

| Library | Version | Usage |
|---|---|---|
| Next.js | 15 | App Router, SSR, routing |
| Tailwind CSS | v4 | Utility-first styling |
| Framer Motion | latest | Page animations, `whileInView`, `AnimatePresence` |
| shadcn/ui | latest | Base UI primitives |
| Lucide React | latest | Icons |

---

## Design System

### Visual Language

- **Palette**: Zinc monochrome only — `foreground`, `background`, `muted-foreground`, `border`. No hues.
- **No gradients, no colors, no glassmorphism**
- Typography scale uses `clamp()` for fluid responsive sizing

### Animation Principles

| Property | Value | Usage |
|---|---|---|
| Easing | `[0.16, 1, 0.3, 1]` | Primary spring — all hero entrances |
| Easing | `[0.21, 0.47, 0.32, 0.98]` | Secondary — smaller elements |
| Duration | `0.8–0.9s` | Headlines |
| Duration | `0.5–0.6s` | Supporting content |
| Stagger | `i * 0.07–0.1s` | List/row reveals |
| Trigger | `whileInView` + `once: true` | All below-fold sections |

### Hero Pattern

Every page uses a consistent cinematic hero:
```
min-h-[85–100dvh]  flex items-center
├── Radial atmospheric glow (opacity 0.06)
├── 48px grid overlay (opacity 0.018)
├── Overline — 10px font-mono uppercase tracking-[0.25em]
├── H1 — clamp(3rem, 6.5vw, 6rem) bold tracking-[-0.05em] leading-[0.93]
├── Chapter rows — border-t/b border-border, py-5 each
└── CTA — bg-foreground text-background rounded-lg
```

### Interactive States

- **Active nav**: `bg-foreground text-background` pill
- **Hover nav**: `hover:bg-secondary` pill
- **Row hover**: `hover:pl-2` indent + arrow reveals
- **CTA hover**: `hover:bg-foreground/85` + `group-hover:translate-x-0.5` arrow

---

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Contributing

This platform is open to contributors. We're looking for:

- **Content writers** — PM articles, guides, operational frameworks
- **Signal contributors** — Anonymous workplace patterns and insights
- **Developers** — Platform features and improvements
- **Designers** — UI, visual systems, editorial design

## Deployment

Deployed on Vercel. Push to `main` to deploy.

**Production**: [your-product-guy.vercel.app](https://your-product-guy.vercel.app)

---

© 2026 Your Product Guy. All rights reserved.
