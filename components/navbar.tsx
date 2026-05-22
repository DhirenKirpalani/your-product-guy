"use client";

import Link from "next/link";
import Image from "next/image";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between w-full">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <Image
              src="/logo.svg"
              alt="Your Product Guy"
              width={32}
              height={32}
              className="h-8 w-8 object-contain"
              priority
            />
            <span className="text-sm sm:text-base font-semibold text-foreground whitespace-nowrap tracking-tight">
              Your Product Guy
            </span>
          </Link>

          {/* Desktop Navigation - Centered */}
          <div className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
            {NAVIGATION_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="text-[13px] text-muted-foreground transition-all hover:text-foreground whitespace-nowrap font-medium"
              >
                {item.label}
              </Link>
            ))}
          </div>

          {/* Right Side - CTA */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <a
              href="https://wa.me/62812345678"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center justify-center rounded-lg bg-foreground text-background hover:bg-foreground/90 px-3.5 py-1.5 text-[13px] font-medium transition-all"
            >
              Get Started
            </a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden inline-flex items-center justify-center rounded-lg border border-border p-2 text-foreground hover:bg-secondary transition-colors min-w-[40px] min-h-[40px]"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden border-t border-border bg-background">
            <div className="space-y-1 px-4 py-4">
              {NAVIGATION_ITEMS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block rounded-lg px-4 py-3 text-base text-muted-foreground transition-colors hover:bg-secondary hover:text-foreground min-h-[44px] flex items-center"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href="https://wa.me/62812345678"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full rounded-lg bg-foreground text-background hover:bg-foreground/90 px-4 py-3 text-base font-medium transition-all text-center mt-2 min-h-[44px] flex items-center justify-center"
                onClick={() => setIsOpen(false)}
              >
                Start Now
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}

