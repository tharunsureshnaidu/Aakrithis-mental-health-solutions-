"use client";

import { motion, type Variants } from "framer-motion";
import { TESTIMONIALS } from "@/lib/clinic-data";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="relative mx-auto max-w-6xl overflow-hidden rounded-[32px] bg-forest px-5 py-16 text-white sm:px-8 sm:py-20"
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo-white.png"
        alt=""
        className="pointer-events-none absolute -right-10 -top-10 h-56 w-56 object-contain opacity-10"
      />
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/images/logo-white.png"
        alt=""
        className="pointer-events-none absolute -bottom-14 -left-14 h-64 w-64 rotate-12 object-contain opacity-10"
      />

      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="relative mb-3 font-mono text-xs uppercase tracking-widest text-sage"
      >
        In their words
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="relative max-w-[26ch] font-display text-3xl font-semibold sm:text-4xl"
      >
        4.9 stars, 115 reviews — a few of the stories behind them
      </motion.h2>
      <p className="relative mt-2 text-xs text-white/50">Illustrative quotes for this preview — real reviews go here.</p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="relative mt-10 grid gap-5 sm:grid-cols-2"
      >
        {TESTIMONIALS.map((t) => (
          <motion.figure
            key={t.attribution}
            variants={item}
            className="rounded-2xl bg-white/[0.07] p-7 ring-1 ring-white/10"
          >
            <blockquote className="font-display text-xl italic leading-snug text-white">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-4 font-mono text-xs uppercase tracking-widest text-sage">
              {t.attribution} · {t.program}
            </figcaption>
          </motion.figure>
        ))}
      </motion.div>
    </section>
  );
}
