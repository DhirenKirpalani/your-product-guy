"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const FOOTER_LINKS = {
  Systems:      { name: "Business Automation", href: "/automation" },
  Knowledge:    { name: "Knowledge",           href: "/learn" },
  Intelligence: { name: "Workplace Signals",   href: "/signals" },
};

export default function FooterNew() {
  const rawPathname = usePathname();
  const pathname = rawPathname.replace(/\/$/, "") || "/";
  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-10">

          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <Image src="/logo.svg" alt="Your Product Guy" width={28} height={28} className="h-7 w-7" unoptimized />
              <span className="text-sm font-semibold text-foreground">Your Product Guy</span>
            </Link>
            <p className="text-xs text-muted-foreground/60 leading-relaxed">
              Operational intelligence for modern businesses.
            </p>
          </div>

          {/* Module columns */}
          {(Object.entries(FOOTER_LINKS) as [string, { name: string; href: string }][]).map(([section, link]) => (
            <div key={section}>
              <h3 className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.15em] uppercase mb-3">
                {section}
              </h3>
              <Link
                href={link.href}
                className={`text-sm transition-colors ${
                  pathname === link.href
                    ? "text-zinc-900 dark:text-white font-semibold underline underline-offset-2"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {link.name}
              </Link>
            </div>
          ))}

          {/* Free Audit */}
          <div>
            <h3 className="text-[10px] font-mono text-muted-foreground/40 tracking-[0.15em] uppercase mb-3">Tools</h3>
            <Link
              href="/audit"
              className={`text-sm transition-colors ${
                pathname === "/audit"
                  ? "text-zinc-900 dark:text-white font-semibold underline underline-offset-2"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              Free Audit
            </Link>
          </div>

        </div>

        {/* Bottom bar */}
        <div className="pt-6 border-t border-border">
          <p className="text-xs text-muted-foreground/40 font-mono">
            © {new Date().getFullYear()} Your Product Guy
          </p>
        </div>

      </div>
    </footer>
  );
}
