"use client";

import { useEffect, useState } from "react";

type Phase = "in" | "out" | "done";

/**
 * Loader as identity, not spinner.
 * A flat line gains amplitude (a gesture of movement), then the
 * word CONATUS resolves out of it. ~1.3s, shown once per session,
 * skipped for reduced-motion and on phones (hidden by CSS before
 * hydration too), where it would only delay the first screen. Server and first client render always
 * agree ("in"); the effect decides what happens next.
 */
export default function Loader() {
  const [phase, setPhase] = useState<Phase>("in");

  useEffect(() => {
    let seen = false;
    let reduce = false;
    try {
      seen = !!sessionStorage.getItem("conatus:entered");
    } catch {
      /* blocked storage */
    }
    try {
      reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    } catch {
      /* no matchMedia */
    }

    const phone = window.matchMedia("(max-width: 767px)").matches;

    if (seen || reduce || phone) {
      const id = requestAnimationFrame(() => setPhase("done"));
      return () => cancelAnimationFrame(id);
    }

    document.documentElement.style.overflow = "hidden";
    const t1 = window.setTimeout(() => setPhase("out"), 1150);
    const t2 = window.setTimeout(() => {
      setPhase("done");
      try {
        sessionStorage.setItem("conatus:entered", "1");
      } catch {
        /* ignore */
      }
      document.documentElement.style.overflow = "";
    }, 1750);
    return () => {
      window.clearTimeout(t1);
      window.clearTimeout(t2);
      document.documentElement.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  return (
    <div
      aria-hidden
      className="fixed inset-0 z-[10001] flex items-center max-md:hidden justify-center bg-paper transition-[clip-path] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
      style={{ clipPath: phase === "out" ? "inset(0 0 100% 0)" : "inset(0 0 0 0)" }}
    >
      <div className="relative w-[min(78vw,720px)]">
        <svg viewBox="0 0 720 120" className="w-full" role="img" aria-label="Conatus">
          <path
            d="M0 60 Q 180 60 360 60 T 720 60"
            fill="none"
            stroke="var(--color-oxblood)"
            strokeWidth="1.5"
            className="loader-line"
          />
        </svg>
        <span
          className="absolute inset-0 flex items-center justify-center font-display text-[clamp(2rem,7vw,3.75rem)] font-semibold tracking-[0.02em] text-ink-900"
          style={{ animation: "loaderWord 1150ms cubic-bezier(0.16,1,0.3,1) forwards" }}
        >
          CONATUS
        </span>
      </div>

      <style>{`
        .loader-line {
          stroke-dasharray: 760;
          stroke-dashoffset: 760;
          animation: loaderLine 1150ms cubic-bezier(0.65,0,0.35,1) forwards;
        }
        @keyframes loaderLine {
          0%   { stroke-dashoffset: 760; d: path("M0 60 Q 180 60 360 60 T 720 60"); }
          55%  { d: path("M0 60 Q 180 6 360 60 T 720 60"); }
          100% { stroke-dashoffset: 0; d: path("M0 60 Q 180 60 360 60 T 720 60"); }
        }
        @keyframes loaderWord {
          0%   { opacity: 0; letter-spacing: 0.5em; filter: blur(6px); clip-path: inset(0 0 100% 0); }
          60%  { opacity: 1; }
          100% { opacity: 1; letter-spacing: 0.02em; filter: blur(0); clip-path: inset(0 0 -10% 0); }
        }
        @media (prefers-reduced-motion: reduce) {
          .loader-line, [style*="loaderWord"] { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
