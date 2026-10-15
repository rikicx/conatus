"use client";

import { useEffect, useState } from "react";
import { contact } from "@/data/site";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const id = requestAnimationFrame(() => setMounted(true));
    const onScroll = () => setShowTop(window.scrollY > window.innerHeight * 1.1);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      cancelAnimationFrame(id);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const toTop = () => {
    const lenis = window.__lenis;
    if (lenis) {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      window.scrollTo({ top: 0, behavior: reduce ? "auto" : "smooth" });
    }
  };

  return (
    <div
      className={`fixed right-4 z-40 flex flex-col gap-2 transition-[opacity,transform] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none md:right-6 ${
        mounted ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
      }`}
      style={{ bottom: "calc(1rem + env(safe-area-inset-bottom))" }}
    >
      <button
        type="button"
        onClick={toTop}
        aria-label="Voltar ao topo"
        className={`group relative grid h-12 w-12 place-items-center border border-ink-900/12 bg-bone text-ink-900 shadow-[0_6px_24px_rgba(30,38,45,0.14)] transition-[opacity,transform,background-color,color] duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] hover:bg-ink-900 hover:text-paper motion-reduce:transition-none ${
          showTop
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none translate-y-2 opacity-0"
        }`}
      >
        <svg width="15" height="15" viewBox="0 0 16 16" fill="none" aria-hidden>
          <path
            d="M8 13V3M8 3L3.5 7.5M8 3l4.5 4.5"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <span className="pointer-events-none absolute right-14 whitespace-nowrap bg-ink-900 px-2 py-1 text-[0.6rem] font-medium uppercase tracking-[0.14em] text-paper opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          Topo
        </span>
      </button>

      <a
        href={`tel:+${contact.phoneRaw}`}
        aria-label={`Ligar para a Conatus — ${contact.phoneDisplay}`}
        className="group relative grid h-12 w-12 place-items-center border border-ink-900/12 bg-bone text-ink-900 shadow-[0_6px_24px_rgba(30,38,45,0.14)] transition-colors duration-300 hover:bg-ink-900 hover:text-paper"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
          <path
            d="M4.5 4h4l1.5 5-2.5 1.5a12.5 12.5 0 0 0 6 6L15 14l5 1.5v4a2 2 0 0 1-2.18 2C9.9 20.94 3.06 14.1 2.5 6.18A2 2 0 0 1 4.5 4Z"
            stroke="currentColor"
            strokeWidth="1.6"
            strokeLinejoin="round"
            strokeLinecap="round"
          />
        </svg>
        <span className="pointer-events-none absolute right-14 whitespace-nowrap bg-ink-900 px-2 py-1 text-[0.6rem] font-medium uppercase tracking-[0.14em] text-paper opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          Ligar
        </span>
      </a>

      <a
        href={contact.whatsappMessage}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`Falar com a Conatus no WhatsApp — ${contact.phoneDisplay}`}
        className="group relative grid h-12 w-12 place-items-center border border-whatsapp bg-whatsapp text-white shadow-[0_6px_24px_rgba(30,38,45,0.18)] transition-colors duration-300 hover:border-whatsapp-dark hover:bg-whatsapp-dark"
      >
        <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
          <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.32 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.9-4.45 9.9-9.91 0-2.65-1.03-5.14-2.9-7.01A9.82 9.82 0 0 0 12.04 2Zm0 18.1h-.01a8.23 8.23 0 0 1-4.19-1.15l-.3-.18-3.11.82.83-3.04-.2-.31a8.2 8.2 0 0 1-1.26-4.36c0-4.54 3.7-8.24 8.25-8.24 2.2 0 4.27.86 5.83 2.42a8.19 8.19 0 0 1 2.41 5.83c0 4.55-3.7 8.24-8.24 8.24Zm4.52-6.16c-.25-.12-1.47-.72-1.69-.81-.23-.08-.39-.12-.56.13-.16.25-.64.8-.78.97-.15.16-.29.18-.54.06-.25-.12-1.05-.39-1.99-1.23-.74-.66-1.23-1.47-1.38-1.72-.14-.25-.01-.39.11-.51.11-.11.25-.29.37-.43.13-.15.17-.25.25-.42.08-.16.04-.31-.02-.43-.06-.12-.56-1.34-.76-1.84-.2-.48-.4-.42-.56-.42l-.48-.01c-.16 0-.43.06-.66.31-.23.25-.86.85-.86 2.07 0 1.22.89 2.4 1.01 2.57.12.16 1.75 2.67 4.25 3.74.59.26 1.06.41 1.42.52.6.19 1.14.16 1.57.1.48-.07 1.47-.6 1.68-1.18.21-.58.21-1.07.14-1.18-.06-.11-.22-.17-.47-.29Z" />
        </svg>
        <span className="pointer-events-none absolute right-14 whitespace-nowrap bg-ink-900 px-2 py-1 text-[0.6rem] font-medium uppercase tracking-[0.14em] text-paper opacity-0 transition-opacity duration-200 group-hover:opacity-100">
          WhatsApp
        </span>
      </a>
    </div>
  );
}
