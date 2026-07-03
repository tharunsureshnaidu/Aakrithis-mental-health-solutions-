"use client";

import { useState } from "react";
import Image from "next/image";
import { CallCta } from "@/components/CallCta";

const NAV_LINKS = [
  { label: "Programs", href: "#pillars" },
  { label: "Reviews", href: "#testimonials" },
  { label: "Find support", href: "#concerns-tool" },
];

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  function closeMenu() {
    setIsMobileMenuOpen(false);
  }

  return (
    <header className="fixed top-0 inset-x-0 z-50 flex flex-row items-center justify-between gap-6 border-b border-line bg-paper px-5 py-3.5 sm:px-8">
      <a href="#top" className="flex items-center gap-2.5 text-ink select-none">
        <Image src="/images/logo.png" alt="" width={248} height={213} className="h-8 w-auto sm:h-9" />
        <span className="font-display text-lg font-medium leading-tight tracking-tight sm:text-xl">
          Aakrithi&apos;s
        </span>
      </a>

      <nav className="hidden items-center gap-8 text-[15px] font-medium text-ink-soft md:flex">
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href} className="transition-colors hover:text-ink">
            {link.label}
          </a>
        ))}
      </nav>

      <div className="hidden md:block">
        <CallCta className="inline-flex items-center justify-center rounded-full bg-sage px-5 py-2.5 text-sm font-semibold text-white shadow-[0_8px_18px_-8px_rgba(92,122,103,0.55)] transition-all hover:-translate-y-0.5 hover:bg-forest">
          Get in touch
        </CallCta>
      </div>

      <button
        type="button"
        onClick={() => setIsMobileMenuOpen((v) => !v)}
        aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
        aria-expanded={isMobileMenuOpen}
        className="relative z-[10] flex h-6 w-6 flex-col items-center justify-center gap-[6px] md:hidden"
      >
        <span
          className={`h-[2px] w-6 bg-ink transition-all duration-300 ${
            isMobileMenuOpen ? "translate-y-[7px] rotate-45" : ""
          }`}
        />
        <span className={`h-[2px] w-6 bg-ink transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""}`} />
        <span
          className={`h-[2px] w-6 bg-ink transition-all duration-300 ${
            isMobileMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
          }`}
        />
      </button>

      <div
        className={`fixed inset-0 z-[9] bg-paper/98 backdrop-blur-sm transition-opacity duration-300 md:hidden ${
          isMobileMenuOpen ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <nav className="flex h-full flex-col items-center justify-center gap-8 text-2xl text-ink">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          <CallCta
            className="mt-2 inline-flex items-center justify-center rounded-full bg-sage px-6 py-3 text-base font-semibold text-white"
            onClickCapture={closeMenu}
          >
            Get in touch
          </CallCta>
        </nav>
      </div>
    </header>
  );
}
