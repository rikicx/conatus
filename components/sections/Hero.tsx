"use client";

import { useRef } from "react";
import Link from "next/link";
import { useScroll, useTransform, motion, useReducedMotion } from "motion/react";
import HeroVideo from "@/components/motion/HeroVideo";
import { contact } from "@/data/site";
import { useMediaQuery } from "@/lib/useMediaQuery";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  // the scroll fade/drift only runs side by side with the video (lg+); on phones the
  // text sits below the video and would already be fading when the CTA scrolls in
  const wide = useMediaQuery("(min-width: 1024px)");
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "-16%"]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative min-h-[100svh] w-full overflow-hidden bg-paper"
      aria-label="Conatus — tendência ao movimento"
    >
      <div className="u-container grid min-h-[100svh] items-center gap-y-6 pb-16 lg:gap-y-8 lg:grid-cols-12 lg:gap-x-8 lg:pt-24 lg:pb-24">
        {/* Text */}
        <motion.div
          style={reduce || !wide ? undefined : { y: textY, opacity: fade }}
          className="relative z-10 lg:col-span-6"
        >
          <p className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.1em] text-ink-700 md:text-base">
            <span className="inline-block h-px w-10 shrink-0 bg-oxblood" />
            Musculação e fisioterapia para os 50+
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

          <p className="mt-5 max-w-[46ch] lg:mt-7 text-lg leading-relaxed text-ink-700">
            Musculação orientada e fisioterapia especializada para quem
            passou dos 50 — devolvendo força, amplitude e confiança de
            movimento, na Vila Mariana.
          </p>

          <div className="mt-7 flex flex-wrap lg:mt-9 items-center gap-x-8 gap-y-4">
            <a
              href={contact.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="group u-action inline-flex items-center gap-3 bg-ink-900 px-7 py-4 text-paper transition-colors duration-300 hover:bg-oxblood"
            >
              Agendar avaliação
              <span aria-hidden className="transition-transform duration-[400ms] group-hover:translate-x-1">→</span>
            </a>
            <Link
              href="/#o-que-fazemos"
              className="u-tap u-action text-ink-700 underline decoration-ink-300 underline-offset-8 transition-colors hover:text-oxblood hover:decoration-oxblood"
            >
              O que fazemos
            </Link>
          </div>

          <p className="mt-5 text-sm text-ink-500">Avaliação inicial gratuita.</p>
        </motion.div>

        {/* Media — half and half. The video is the hero's background: a full-bleed band
            on top on phones, the right half of the screen on desktop (it is positioned
            against the section, since this wrapper is static from lg up). */}
        <div className="relative order-first -mx-[var(--gutter)] h-[40svh] lg:static lg:order-none lg:mx-0 lg:h-0 lg:col-span-5 lg:col-start-8">
          <div
            aria-hidden
            className="absolute inset-0 z-0 overflow-hidden bg-paper-deep lg:inset-auto lg:right-0 lg:top-0 lg:h-full lg:w-1/2"
          >
            {/* B — brand tone: the video goes monochrome in the site's blue-graphite */}
            <HeroVideo
              reduce={!!reduce}
              className="h-full w-full object-cover grayscale contrast-[.95] brightness-[1.05]"
            />
            <div className="absolute inset-0 bg-[#316989] opacity-80 mix-blend-color" />
            <div className="absolute inset-0 bg-paper/15" />
            {/* G — a soft curve instead of a straight seam: on the left edge from lg up,
                on the bottom edge when the video is a band above the text */}
            <svg
              viewBox="0 0 60 500"
              preserveAspectRatio="none"
              aria-hidden
              className="absolute inset-y-0 left-0 hidden h-full w-24 lg:block"
            >
              <path d="M0 0H34C8 110 52 215 22 320C8 380 30 450 24 500H0Z" className="fill-paper" />
            </svg>
            <svg
              viewBox="0 0 500 40"
              preserveAspectRatio="none"
              aria-hidden
              className="absolute inset-x-0 bottom-0 h-10 w-full lg:hidden"
            >
              <path d="M0 40V22C90 -2 170 38 250 20C330 2 410 30 500 14V40Z" className="fill-paper" />
            </svg>
            {/* darkens the bottom-right corner so the "Role" cue stays legible over any frame */}
            <div className="pointer-events-none absolute inset-0 hidden lg:block [background:radial-gradient(ellipse_75%_55%_at_100%_100%,rgba(30,38,45,.82),rgba(30,38,45,.45)_45%,transparent_100%)]" />
            {/* keeps the header text above 4.5:1 over any frame of the video */}
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-paper/95 via-paper/75 to-transparent" />
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-5 z-20 hidden lg:block">
        <div className="u-container flex items-end justify-between">
          <span className="u-label">Vila Mariana — São Paulo</span>
          <span className="u-label hidden items-center gap-2 !text-paper lg:mr-16 lg:flex">
            Role
            <span className="relative block h-8 w-px overflow-hidden bg-paper/50">
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
