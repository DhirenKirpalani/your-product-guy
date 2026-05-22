"use client";

import Link from "next/link";
import Image from "next/image";
import { NAVIGATION_ITEMS } from "@/lib/constants";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import LanguageSelector from "@/components/language-selector";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;
      let currentSection = "#";

      // Check each section
      const sections = ["services", "how-it-works", "demo", "about"];
      
      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            currentSection = `#${sectionId}`;
            break;
          }
        }
      }

      setActiveSection(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
            {NAVIGATION_ITEMS.map((item) => {
              const isActive = activeSection === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-[13px] whitespace-nowrap font-medium relative pb-1 block"
                  style={{
                    color: isActive ? 'rgb(var(--foreground))' : 'rgb(var(--muted-foreground))',
                    transition: 'color 0.2s ease'
                  }}
                >
                  {item.label}
                  <span 
                    className="absolute bottom-0 left-0 h-[2px] bg-foreground"
                    style={{
                      width: isActive ? '100%' : '0%',
                      transition: 'width 0.3s ease'
                    }}
                  />
                </Link>
              );
            })}
          </div>

          {/* Right Side - Language + CTA */}
          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <LanguageSelector />
            <a
              href="#onboarding"
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
              {NAVIGATION_ITEMS.map((item) => {
                const isActive = activeSection === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`block rounded-lg px-4 py-3 text-base transition-colors min-h-[44px] flex items-center ${
                      isActive
                        ? "bg-secondary text-foreground font-medium"
                        : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                );
              })}
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

