"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { motion, AnimatePresence } from "framer-motion";

const PHONE_DISPLAY = "099017 43494";
const PHONE_TEL = "tel:+919901743494";
const WHATSAPP = "https://wa.me/919901743494";

export function CallCta({
  className,
  children,
  onClickCapture,
}: {
  className?: string;
  children: React.ReactNode;
  onClickCapture?: React.MouseEventHandler<HTMLAnchorElement>;
}) {
  const [open, setOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [popoverPos, setPopoverPos] = useState({ top: 0, right: 0 });
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onClickOutside(e: MouseEvent) {
      if (wrapRef.current && !wrapRef.current.contains(e.target as Node)) setOpen(false);
    }
    function onDismiss() {
      setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    window.addEventListener("scroll", onDismiss, true);
    window.addEventListener("resize", onDismiss);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      window.removeEventListener("scroll", onDismiss, true);
      window.removeEventListener("resize", onDismiss);
    };
  }, [open]);

  function handleClick(e: React.MouseEvent) {
    // Any sign of a touchscreen means this could be a phone — let tel: open the dialer directly.
    // Checking multiple signals (not just pointer:coarse) so we don't misdetect a real phone as desktop.
    const canDial =
      window.matchMedia("(pointer: coarse)").matches ||
      navigator.maxTouchPoints > 0 ||
      "ontouchstart" in window;
    if (canDial) return;
    // Mouse-only desktop: tel: usually does nothing visible — show the number + WhatsApp instead.
    e.preventDefault();
    if (!open && wrapRef.current) {
      const rect = wrapRef.current.getBoundingClientRect();
      setPopoverPos({ top: rect.bottom + 12, right: window.innerWidth - rect.right });
    }
    setOpen((v) => !v);
  }

  async function copyNumber() {
    try {
      await navigator.clipboard.writeText(PHONE_DISPLAY);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1600);
    } catch {
      // Clipboard API unavailable — the number is already visible to copy by hand.
    }
  }

  return (
    <div className="relative inline-block" ref={wrapRef}>
      <a href={PHONE_TEL} onClick={handleClick} onClickCapture={onClickCapture} className={className}>
        {children}
      </a>
      {typeof document !== "undefined" &&
        createPortal(
          <AnimatePresence>
            {open && (
              <motion.div
                initial={{ opacity: 0, y: 8, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 8, scale: 0.96 }}
                transition={{ duration: 0.15 }}
                style={{ position: "fixed", top: popoverPos.top, right: popoverPos.right }}
                className="z-[100] w-64 rounded-2xl border border-line bg-white p-4 text-left shadow-[0_20px_40px_-16px_rgba(92,122,103,0.35)]"
              >
                <p className="mb-2 text-xs text-ink-soft">On your phone, this taps straight into the dialer. From here:</p>
                <button
                  type="button"
                  onClick={copyNumber}
                  className="mb-2 flex w-full items-center justify-between rounded-lg border border-line px-3 py-2 text-sm font-semibold text-ink hover:border-sage"
                >
                  {PHONE_DISPLAY}
                  <span className="text-xs text-forest">{copied ? "Copied!" : "Copy"}</span>
                </button>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener"
                  className="flex w-full items-center justify-center rounded-lg bg-sage px-3 py-2 text-sm font-semibold text-white hover:bg-forest"
                >
                  WhatsApp us instead
                </a>
              </motion.div>
            )}
          </AnimatePresence>,
          document.body,
        )}
    </div>
  );
}
