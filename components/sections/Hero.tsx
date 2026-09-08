"use client";

import { useRef } from "react";
import Link from "next/link";
import { useScroll, useTransform, motion, useReducedMotion } from "motion/react";
import PlacedImage from "@/components/ui/PlacedImage";
import { contact } from "@/data/site";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "16%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-16%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-paper"
      aria-label="Conatus — tendência ao movimento"
    >
      <div className="u-container grid min-h-[100svh] items-center gap-y-8 pt-28 pb-16 md:grid-cols-12 md:gap-x-8 md:pt-24 md:pb-24">
        {/* Text */}
        <motion.div
          style={reduce ? undefined : { y: textY, opacity: fade }}
          className="relative z-10 md:col-span-7"
        >
          <p className="u-label mb-6 flex items-center gap-3">
            <span className="inline-block h-px w-10 bg-oxblood" />
            Fisioterapia · Força · Movimento — 50+
          </p>

          <h1 className="d-hero text-ink-900">
            <span className="block overflow-hidden">
              <span className="block animate-[heroline_0.9s_cubic-bezier(0.16,1,0.3,1)_forwards]">
                Todo corpo
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block animate-[heroline_0.9s_cubic-bezier(0.16,1,0.3,1)_0.1s_both]">
                tende a
              </span>
            </span>
            <span className="block overflow-hidden">
              <span className="block animate-[heroline_0.9s_cubic-bezier(0.16,1,0.3,1)_0.2s_both] text-oxblood">
                continuar.
              </span>
            </span>
          </h1>

          <p className="mt-7 max-w-[46ch] text-lg leading-relaxed text-ink-700">
            A clínica que treina esse impulso — devolvendo amplitude, força e
            confiança de movimento a quem passou dos 50, na Vila Mariana.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-x-8 gap-y-4">
            <a
              href={contact.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 bg-ink-900 px-7 py-4 text-[0.7rem] font-medium uppercase tracking-[0.16em] text-paper transition-colors duration-300 hover:bg-oxblood"
            >
              Agendar avaliação
              <span aria-hidden className="transition-transform duration-[400ms] group-hover:translate-x-1">→</span>
            </a>
            <Link
              href="/#o-que-fazemos"
              className="text-[0.7rem] font-medium uppercase tracking-[0.16em] text-ink-700 underline decoration-ink-300 underline-offset-8 transition-colors hover:text-oxblood hover:decoration-oxblood"
            >
              O que fazemos
            </Link>
          </div>
        </motion.div>

        {/* Image */}
        <div className="relative -mx-[var(--gutter)] h-[46vh] md:col-span-5 md:mx-0 md:h-[78vh]">
          <motion.div
            style={reduce ? undefined : { y: imgY, scale: imgScale }}
            className="absolute inset-0"
          >
            <PlacedImage
              seed="hero"
              w={1000}
              h={1300}
              alt="Pessoa em amplitude de movimento — flexão profunda de tronco em sessão de mobilidade"
              className="h-full w-full"
              sizes="(max-width: 768px) 100vw, 42vw"
              priority
            />
          </motion.div>
          <span className="u-label absolute -bottom-6 right-0 hidden md:block">
            01 — Movimento
          </span>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-5 hidden md:block">
        <div className="u-container flex items-end justify-between">
          <span className="u-label">Vila Mariana — São Paulo</span>
          <span className="u-label flex items-center gap-2">
            Role
            <span className="relative block h-8 w-px overflow-hidden bg-ink-300">
              <span className="absolute inset-x-0 top-0 h-3 bg-oxblood animate-[scrollcue_1.8s_ease-in-out_infinite]" />
            </span>
          </span>
        </div>
      </div>

      <style>{`
        @keyframes heroline { from { transform: translateY(110%); } to { transform: translateY(0); } }
        @keyframes scrollcue { 0% { transform: translateY(-100%); } 100% { transform: translateY(320%); } }
        @media (prefers-reduced-motion: reduce) {
          [class*="animate-[heroline"], [class*="animate-[scrollcue"] { animation: none !important; }
        }
      `}</style>
    </section>
  );
}
