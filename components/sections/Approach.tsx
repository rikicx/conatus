"use client";

import { useEffect, useRef, useState } from "react";
import { approach } from "@/data/site";
import { withFree } from "@/components/ui/Free";
import CapturePlaceholder from "@/components/ui/CapturePlaceholder";

export default function Approach() {
  const [active, setActive] = useState(0);
  const panelsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            const i = Number((e.target as HTMLElement).dataset.index);
            setActive(i);
          }
        });
      },
      { threshold: 0.55, rootMargin: "-20% 0px -20% 0px" }
    );
    panelsRef.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <section
      id="a-abordagem"
      className="u-container py-20 md:py-28"
      aria-labelledby="approach-h"
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-6 md:mb-16">
        <h2 id="approach-h" className="d-2 max-w-[14ch] font-display">
          A abordagem, <span className="text-oxblood">em cinco tempos.</span>
        </h2>
        <p className="u-label hidden max-w-[24ch] text-right md:block">
          Avaliar · Ler · Mover · Fortalecer · Acompanhar
        </p>
      </div>

      <div className="grid md:grid-cols-12 md:gap-12">
        {/* Sticky index — desktop only; on phones it can't stick, so each step
            carries its own number and title instead */}
        <div className="hidden md:col-span-4 md:block">
          <div className="md:sticky md:top-28">
            <div className="relative h-[7rem] overflow-hidden">
              {approach.map((step, i) => (
                <div
                  key={step.n}
                  className="absolute inset-0 flex items-start transition-[transform,opacity] duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none"
                  style={{
                    transform: `translateY(${(i - active) * 100}%)`,
                    opacity: i === active ? 1 : 0,
                  }}
                  aria-hidden={i !== active}
                >
                  <span className="font-display text-[clamp(4rem,10vw,7rem)] leading-none text-ink-900">
                    {step.n}
                  </span>
                </div>
              ))}
            </div>

            <p className="mt-4 font-display text-2xl text-oxblood">
              {approach[active].title}
            </p>

            {/* progress rail */}
            <ul className="mt-8 space-y-3" aria-hidden>
              {approach.map((step, i) => (
                <li key={step.n} className="flex items-center gap-4">
                  <span className="relative block h-px w-16 overflow-hidden bg-ink-900/15">
                    <span
                      className="absolute inset-0 origin-left bg-oxblood transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
                      style={{ transform: `scaleX(${i <= active ? 1 : 0})` }}
                    />
                  </span>
                  <span
                    className={`font-mono text-[0.8125rem] uppercase tracking-[0.14em] transition-colors duration-300 ${
                      i === active ? "text-ink-900" : "text-ink-300"
                    }`}
                  >
                    {step.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Scrolling panels */}
        <div className="min-w-0 md:col-span-8">
          {approach.map((step, i) => (
            <div
              key={step.n}
              data-index={i}
              ref={(el) => {
                panelsRef.current[i] = el;
              }}
              className="flex flex-col justify-center border-t border-ink-900/10 py-8 first:border-t-0 first:pt-0 md:min-h-[54vh] md:py-10 md:first:pt-10"
            >
              <p className="mb-4 flex items-baseline gap-3 md:hidden">
                <span className="u-label">{step.n}</span>
                <span className="font-display text-lg text-oxblood">{step.title}</span>
              </p>
              <p className="d-3 max-w-[24ch] font-display text-ink-900">
                {step.lede}
                {step.highlight && (
                  <>
                    {" "}
                    <span className="text-oxblood">{step.highlight}</span>
                  </>
                )}
              </p>
              <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink-700">
                {withFree(step.body)}
              </p>
              {step.capture && (
                <div
                  className={`mt-8 grid gap-4 ${
                    step.capture.length > 1 ? "grid-cols-2" : "max-w-sm"
                  }`}
                >
                  {step.capture.map((c) => (
                    <CapturePlaceholder
                      key={c.title}
                      {...c}
                      className={c.kind === "video" ? "aspect-[4/5]" : "aspect-[3/4]"}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
