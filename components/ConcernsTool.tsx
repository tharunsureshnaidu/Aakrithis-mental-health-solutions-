"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { CONCERN_GROUPS, CONCERNS } from "@/lib/clinic-data";

export function ConcernsTool() {
  const [group, setGroup] = useState("adult");
  const list = CONCERNS[group];

  return (
    <section id="concerns-tool" className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5 }}
        className="mb-3 font-mono text-xs uppercase tracking-widest text-forest"
      >
        Find support
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.05 }}
        className="font-display text-3xl font-semibold sm:text-4xl"
      >
        Not sure where to start?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        className="mt-3 max-w-[60ch] text-ink-soft"
      >
        Pick who needs support, and we&apos;ll show you where people usually start. Every plan is
        tailored in your first session.
      </motion.p>

      <div className="mt-8 flex flex-wrap gap-2.5">
        {CONCERN_GROUPS.map((g) => {
          const isActive = g.key === group;
          return (
            <button
              key={g.key}
              onClick={() => setGroup(g.key)}
              className={`relative rounded-full border px-4 py-2.5 text-sm font-medium transition-colors ${
                isActive ? "border-sage text-white" : "border-line text-ink hover:border-sage"
              }`}
            >
              {isActive && (
                <motion.span
                  layoutId="group-pill"
                  className="absolute inset-0 rounded-full bg-sage"
                  transition={{ type: "spring", stiffness: 500, damping: 32 }}
                />
              )}
              <span className="relative z-10">{g.label}</span>
            </button>
          );
        })}
      </div>

      <ul className="mt-8 grid max-w-xl gap-3">
        <AnimatePresence mode="popLayout">
          {list.map((c, i) => (
            <motion.li
              key={group + c}
              layout
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.25, delay: i * 0.04 }}
              className="flex items-center gap-3 rounded-[10px] border border-line bg-white px-4 py-3.5"
            >
              <span className="h-2.5 w-2.5 flex-shrink-0 rounded-full bg-sage" />
              {c}
            </motion.li>
          ))}
        </AnimatePresence>
      </ul>
    </section>
  );
}
