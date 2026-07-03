"use client";

import { motion, type Variants } from "framer-motion";
import { CallCta } from "@/components/CallCta";

const BENEFITS = [
  {
    title: "Book privately",
    body: "Reserve a session by phone or WhatsApp. No waiting room, no reception desk, no explaining why you're here twice.",
  },
  {
    title: "One team, every concern",
    body: "Individual, child, couples and family counseling, plus Academy training — coordinated by one team, not four separate clinics.",
  },
  {
    title: "Counselors who know you",
    body: "You see the same counselor every session. Progress gets tracked across months, not guessed at from a fresh intake form each time.",
  },
  {
    title: "In the heart of Srinagar, Bengaluru",
    body: "A short walk off the main road — easy to get to on a hard day, which is usually when you need it most.",
  },
];

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export function Benefits() {
  return (
    <section id="benefits" className="mx-auto max-w-6xl rounded-[32px] bg-sand px-5 py-16 sm:px-8 sm:py-20">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="mb-3 font-mono text-xs uppercase tracking-widest text-forest"
      >
        Why clients choose Aakrithi&apos;s
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="max-w-[26ch] font-display text-3xl font-semibold sm:text-4xl"
      >
        Everything you need for your mental wellness
      </motion.h2>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        className="mt-10 grid gap-5 sm:grid-cols-2"
      >
        {BENEFITS.map((b) => (
          <motion.div
            key={b.title}
            variants={item}
            whileHover={{ y: -4 }}
            className="rounded-2xl bg-white p-7 shadow-[0_12px_30px_-14px_rgba(92,122,103,0.22)] transition-shadow hover:shadow-[0_18px_36px_-14px_rgba(92,122,103,0.32)]"
          >
            <span className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-full bg-sand">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/images/logo.png" alt="" className="h-6 w-6 object-contain" />
            </span>
            <h3 className="mb-2 font-display text-lg font-semibold">{b.title}</h3>
            <p className="text-[0.95rem] text-ink-soft">{b.body}</p>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="mt-10 flex flex-wrap items-center justify-between gap-6 rounded-2xl bg-ink p-8 text-white sm:p-10"
      >
        <div>
          <h3 className="font-display text-xl font-semibold sm:text-2xl">Ready to talk?</h3>
          <p className="mt-1 text-white/75">Call or message us and we&apos;ll find you a slot that works.</p>
        </div>
        <div className="flex flex-wrap gap-3.5">
          <CallCta className="btn-primary">Call 099017 43494</CallCta>
          <a
            href="https://wa.me/919901743494"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 rounded-full border border-white/50 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-white hover:text-ink"
          >
            WhatsApp us
          </a>
        </div>
      </motion.div>
    </section>
  );
}
