"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { Check } from "lucide-react";
import { Header } from "@/components/Header";
import { CallCta } from "@/components/CallCta";
import { PILLARS } from "@/lib/clinic-data";

const HEADLINE = "You don't have to\nhave it figured out.";

function useTypewriter(text: string, speed = 38, startDelay = 600) {
  const [displayed, setDisplayed] = useState("");
  const [done, setDone] = useState(false);

  useEffect(() => {
    let i = 0;
    let intervalId: ReturnType<typeof setInterval> | undefined;

    const timeoutId = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          if (intervalId) clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, startDelay);

    return () => {
      clearTimeout(timeoutId);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, startDelay]);

  return { displayed, done };
}

function HeroCover() {
  const prefersReduced = useReducedMotion();

  return (
    <div className="absolute inset-0 z-0 overflow-hidden" aria-hidden="true">
      <motion.div
        className="absolute inset-0"
        animate={prefersReduced ? undefined : { scale: [1, 1.08, 1] }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      >
        <Image
          src="/images/office-cover.jpg"
          alt=""
          fill
          priority
          sizes="(min-width: 1024px) 60vw, 100vw"
          className="object-cover object-[center_60%] lg:object-[center_68%]"
        />
      </motion.div>
      {/* mobile/tablet: text spans full width, so the photo needs a fairly even scrim everywhere */}
      <div className="absolute inset-0 bg-paper/78 lg:hidden" />
      {/* desktop: text sits only on the left, so fade the photo in from the right instead */}
      <div className="absolute inset-0 hidden bg-gradient-to-r from-paper from-[8%] via-paper/45 via-[32%] to-transparent to-[58%] lg:block" />
    </div>
  );
}

function ServicePills() {
  const [selected, setSelected] = useState<string[]>([]);
  const options = PILLARS.map((p) => p.label);

  function toggle(label: string) {
    setSelected((sel) => (sel.includes(label) ? sel.filter((s) => s !== label) : [...sel, label]));
  }

  return (
    <div>
      <h2 className="mb-2 text-2xl font-medium tracking-tight text-ink">What brings you here?</h2>
      <p className="mb-8 text-ink-soft opacity-85">Select all that apply</p>

      <div className="mb-6 flex flex-wrap gap-3">
        {options.map((label) => {
          const active = selected.includes(label);
          return (
            <motion.button
              key={label}
              type="button"
              onClick={() => toggle(label)}
              whileTap={{ scale: 0.96 }}
              className={
                active
                  ? "flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-medium text-white shadow-md shadow-ink/10 transform"
                  : "flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink hover:bg-line/40"
              }
            >
              {label}
              {active && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="flex"
                >
                  <Check className="h-4 w-4" />
                </motion.span>
              )}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        {selected.length === 0 ? (
          <motion.p
            key="empty"
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="text-xs italic text-ink-soft"
          >
            Tap what applies — we&apos;ll tailor the conversation.
          </motion.p>
        ) : (
          <motion.div
            key="filled"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="overflow-hidden rounded-2xl border border-line bg-[#FAFBF9]"
          >
            <div className="flex items-center justify-between gap-4 p-5">
              <p className="text-sm text-ink">Ready to talk about: {selected.join(", ")}</p>
              <CallCta className="whitespace-nowrap text-xs font-semibold uppercase text-forest">
                Let&apos;s talk
              </CallCta>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Hero() {
  const { displayed, done } = useTypewriter(HEADLINE);

  return (
    <div
      id="top"
      className="relative flex flex-col overflow-x-hidden bg-paper font-sans text-ink antialiased selection:bg-sand selection:text-ink lg:min-h-screen"
    >
      <Header />

      <HeroCover />

      <div className="relative z-10 flex w-full flex-col pb-8 lg:min-h-screen lg:pb-0">
        <main className="mx-auto flex w-full max-w-7xl flex-1 flex-col justify-center px-5 py-12 pt-28 sm:px-8 lg:px-6">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-4 font-mono text-xs uppercase tracking-widest text-forest"
          >
            Modern Therapy Meets Ancient Wisdom
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h1 className="mb-8 w-full select-none whitespace-pre-wrap text-4xl font-normal leading-[1.1] tracking-tight text-ink sm:text-5xl md:text-6xl lg:text-[76px]">
              {displayed}
              {!done && <span className="ml-[2px] inline-block h-[1.1em] w-[2px] animate-blink bg-ink align-middle" />}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <p className="mb-14 max-w-2xl text-lg font-normal leading-relaxed text-ink-soft md:text-xl">
              Call, WhatsApp, or just ask a question first — <br />
              we reply the same day.
            </p>
          </motion.div>

          <ServicePills />
        </main>
      </div>
    </div>
  );
}
