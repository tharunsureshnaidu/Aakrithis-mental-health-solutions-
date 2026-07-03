"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
      className="mx-auto mt-4 grid max-w-6xl gap-8 border-t border-line px-5 py-12 text-sm text-ink-soft sm:grid-cols-[1.4fr_1fr_1fr] sm:px-8"
    >
      <div>
        <div className="mb-2 flex items-center gap-2">
          <Image src="/images/logo.png" alt="" width={248} height={213} className="h-8 w-auto" />
          <p className="font-display text-lg text-ink">Aakrithi&apos;s Mental Health Solutions &amp; Academy</p>
        </div>
        <p>
          Akshaya, #962, 9th Cross, Aakrithis Counseling n Academy,
          <br />
          13th Main Rd, Srinagar, Bengaluru, Karnataka 560050
        </p>
        <p className="mt-2 text-xs text-ink-soft/70">
          Plus code: WHW3+9F Bengaluru, Karnataka
          <br />
          LGBTQ+ friendly · Identifies as women-owned
        </p>
      </div>
      <div className="space-y-2">
        <p>
          <a href="tel:+919901743494" className="hover:text-forest">
            099017 43494
          </a>
        </p>
        <p>
          <a href="https://wa.me/919901743494" target="_blank" rel="noopener" className="hover:text-forest">
            WhatsApp
          </a>
        </p>
        <p>
          <a
            href="https://www.google.com/maps/search/?api=1&query=Aakrithis+Mental+Health+Solutions+%26+Academy+Srinagar+Bengaluru"
            target="_blank"
            rel="noopener"
            className="hover:text-forest"
          >
            Get directions →
          </a>
        </p>
        <p>★ 4.9 (115 reviews on Google)</p>
      </div>
      <div className="space-y-2">
        {/* ponytail: only Friday hours are confirmed from the listing — fill in the rest once given */}
        <p>Fri: Opens 11:30 AM</p>
        <p className="text-xs text-ink-soft/70">Full weekly hours coming soon</p>
      </div>
      <p className="col-span-full mt-2 font-mono text-xs text-line">
        Prototype for client review — not the live site.
      </p>
    </motion.footer>
  );
}
