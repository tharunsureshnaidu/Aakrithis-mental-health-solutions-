"use client";

import Image from "next/image";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { CallCta } from "@/components/CallCta";

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07, delayChildren: 0.05 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 12 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: [0.22, 1, 0.36, 1] } },
};

export function Founder() {
  const prefersReduced = useReducedMotion();

  return (
    <section className="mx-auto grid max-w-6xl gap-10 px-5 py-16 sm:px-8 sm:py-20 md:grid-cols-[0.9fr_1.1fr] md:items-center">
      <motion.div
        initial={prefersReduced ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-sand shadow-[0_24px_60px_-24px_rgba(43,61,44,0.35)] md:order-1"
      >
        <Image
          src="/images/founder.png"
          alt="Aakrithi, founder of Aakrithi's Mental Health Solutions & Academy"
          fill
          sizes="(min-width: 768px) 45vw, 100vw"
          className="relative z-10 object-cover object-top"
        />

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.4, delay: 0.15 }}
          className="absolute bottom-4 left-4 z-20 flex items-center gap-2 rounded-full bg-white/90 px-4 py-2 text-xs font-semibold text-ink shadow-[0_8px_20px_-8px_rgba(0,0,0,0.3)]"
        >
          <span className="h-2 w-2 flex-shrink-0 rounded-full bg-sage" />
          Aakrithi, Founder Director
        </motion.div>
      </motion.div>

      <motion.div
        variants={container}
        initial={prefersReduced ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="md:order-2"
      >
        <motion.p variants={item} className="mb-3 font-mono text-xs uppercase tracking-widest text-forest">
          Meet the founder director
        </motion.p>
        <motion.p
          variants={item}
          className="font-display text-2xl italic leading-snug tracking-tight text-ink sm:text-3xl"
        >
          &ldquo;Healing isn&apos;t a straight line, and it was never supposed to be. My job is to
          walk it with you, not ahead of you.&rdquo;
        </motion.p>
        <motion.p variants={item} className="mt-4 max-w-[46ch] text-ink-soft">
          Aakrithi is a senior psychotherapist with 27 years of experience practicing Indian
          traditional psychotherapy — modern therapy methods grounded in an older, more familiar
          way of understanding the mind. That same approach now runs through every session her
          team holds, and every counselor the Academy trains.
        </motion.p>
        <motion.p variants={item} className="mt-3 font-mono text-xs uppercase tracking-widest text-ink-soft">
          Senior Psychotherapist · 27 Years of Practice
        </motion.p>
        <motion.div variants={item} className="mt-7 flex flex-wrap gap-3.5">
          <CallCta className="btn-primary">Call to book</CallCta>
          <a href="#pillars" className="btn-ghost">
            Explore our programs
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
