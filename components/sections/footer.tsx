"use client";

import Link from "next/link";
import Image from "next/image";
import { Mail, MessageCircle, Share2 } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 md:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-3 sm:mb-4">
              <Image
                src="/logo.svg"
                alt="Your Product Guy"
                width={32}
                height={32}
                className="h-8 w-8 object-contain"
              />
              <span className="font-bold text-foreground">Your Product Guy</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              AI automation systems for Indonesian businesses.
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-bold text-foreground mb-3 sm:mb-4 text-sm">Product</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {["Features", "Pricing", "Demo", "Security"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-foreground mb-3 sm:mb-4 text-sm">Company</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {["About", "Blog", "Careers", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-foreground mb-3 sm:mb-4 text-sm">Legal</h4>
            <ul className="space-y-1.5 sm:space-y-2">
              {["Privacy", "Terms", "Cookie Policy", "Compliance"].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-border pt-6 sm:pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            {/* Copyright */}
            <p className="text-xs sm:text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Your Product Guy. All rights reserved.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 sm:gap-6">
              <a
                href="https://wa.me/62812345678"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="WhatsApp"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="LinkedIn"
              >
                <Share2 className="h-5 w-5" />
              </a>
              <a
                href="mailto:hello@yourproductguy.com"
                className="text-muted-foreground hover:text-foreground transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
