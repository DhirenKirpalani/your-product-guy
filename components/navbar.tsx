"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import LanguageSelector from "@/components/language-selector";

const NAVIGATION = [
  { name: "Automation", href: "/automation" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const rawPathname = usePathname();
  const pathname = rawPathname.replace(/\/$/, "") || "/";

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/70">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.svg"
              alt="Your Product Guy"
              width={32}
              height={32}
              className="h-8 w-8"
              unoptimized
            />
            <span className="text-sm font-semibold text-foreground">
              Your Product Guy
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {NAVIGATION.map((item) => {
              const active = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.name}
                  href={item.href}
                  className={`text-sm font-medium transition-all px-3 py-1.5 rounded-md ${
                    active
                      ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}
            <div className="w-px h-4 bg-border mx-2" />
            <Link
              href="/audit"
              className={`text-sm font-medium transition-all px-3 py-1.5 rounded-md border ${
                pathname === "/audit"
                  ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 border-transparent"
                  : "border-border text-foreground hover:bg-secondary"
              }`}
            >
              Free Revenue Audit
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <LanguageSelector />

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 text-foreground"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden py-4 border-t border-border">
            <div className="flex flex-col gap-4">
              {NAVIGATION.map((item) => {
                const active = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-sm font-medium transition-all px-3 py-1.5 rounded-md ${
                      active
                        ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900"
                        : "text-muted-foreground hover:text-foreground hover:bg-secondary"
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
              <Link
                href="/audit"
                onClick={() => setIsOpen(false)}
                className={`text-sm font-medium transition-all px-3 py-1.5 rounded-md border w-fit ${
                  pathname === "/audit"
                    ? "bg-zinc-900 text-white dark:bg-white dark:text-zinc-900 border-transparent"
                    : "border-border text-foreground hover:bg-secondary"
                }`}
              >
                Free Revenue Audit
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
