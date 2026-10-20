"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Wordmark from "./Wordmark";
import MenuOverlay from "./MenuOverlay";
import { nav, contact } from "@/data/site";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [condensed, setCondensed] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY;
      setScrolled(y > 24);
      setCondensed(y > 220);
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(max > 0 ? Math.min(1, y / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const solid = (scrolled || condensed) && !open;

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-[70] transition-[background-color,backdrop-filter,border-color] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          solid
            ? "border-b border-ink-900/10 bg-paper/85 backdrop-blur-md"
            : "border-b border-transparent bg-transparent"
        }`}
      >
        <div
          className={`u-container flex items-center justify-between transition-[padding] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
            condensed ? "py-2.5 md:py-3" : "py-4 md:py-5"
          }`}
        >
          <Link
            href="/"
            aria-label="Conatus — início"
            className={open ? "text-paper" : "text-ink-900"}
            onClick={() => setOpen(false)}
          >
            <Wordmark compact={condensed && !open} />
          </Link>

          <nav
            className={`hidden items-center lg:flex ${
              condensed ? "gap-6" : "gap-8"
            }`}
            aria-label="Navegação"
          >
            {nav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`group u-action relative whitespace-nowrap transition-colors ${
                  open ? "text-paper/80 hover:text-paper" : "text-ink-700 hover:text-ink-900"
                }`}
              >
                {item.label}
                <span className="absolute -bottom-1 left-0 h-px w-full origin-left scale-x-0 bg-oxblood transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-x-100" />
              </Link>
            ))}
            <a
              href={contact.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className={`u-action whitespace-nowrap border transition-colors duration-300 ${
                condensed ? "px-4 py-2" : "px-5 py-2.5"
              } ${
                open
                  ? "border-paper/30 text-paper hover:bg-paper hover:text-ink-900"
                  : "border-ink-900/25 hover:border-oxblood hover:bg-oxblood hover:text-paper"
              }`}
            >
              {condensed ? "Agendar" : "Agendar avaliação"}
            </a>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="menu-overlay"
            className={`relative z-[80] -mr-2 flex h-11 w-11 items-center justify-center lg:hidden ${
              open ? "text-paper" : "text-ink-900"
            }`}
          >
            <span className="sr-only">{open ? "Fechar menu" : "Abrir menu"}</span>
            <span className="relative block h-3 w-6">
              <span
                className={`absolute left-0 block h-px w-6 bg-current transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open ? "top-1/2 rotate-45" : "top-0"
                }`}
              />
              <span
                className={`absolute bottom-0 left-0 block h-px w-6 bg-current transition-transform duration-[400ms] ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  open ? "bottom-1/2 -rotate-45" : ""
                }`}
              />
            </span>
          </button>
        </div>

        {/* scroll progress — a line that gains amplitude as you move through */}
        <span
          aria-hidden
          className={`absolute inset-x-0 bottom-0 h-px origin-left bg-oxblood transition-[opacity] duration-500 ${
            solid ? "opacity-100" : "opacity-0"
          }`}
          style={{ transform: `scaleX(${progress})` }}
        />
      </header>

      <MenuOverlay open={open} onClose={() => setOpen(false)} />
    </>
  );
}
