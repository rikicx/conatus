"use client";

import { useEffect, useRef, useState } from "react";
import { approach } from "@/data/site";

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
      <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
        <h2 id="approach-h" className="d-2 max-w-[14ch] font-display">
          A abordagem, <span className="text-oxblood">em cinco tempos.</span>
        </h2>
        <p className="u-label max-w-[24ch] text-right">
          Avaliar · Ler · Mover · Fortalecer · Acompanhar
        </p>
      </div>

      <div className="grid gap-12 md:grid-cols-12">
        {/* Sticky index */}
        <div className="md:col-span-4">
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
        <div className="md:col-span-8">
          {approach.map((step, i) => (
            <div
              key={step.n}
              data-index={i}
              ref={(el) => {
                panelsRef.current[i] = el;
              }}
              className="flex min-h-[48vh] flex-col justify-center border-t border-ink-900/10 py-10 first:border-t-0 md:min-h-[54vh]"
            >
              <span className="u-label mb-6 md:hidden">{step.n}</span>
              <p className="d-3 max-w-[20ch] font-display text-ink-900">
                {step.lede}
              </p>
              <p className="mt-6 max-w-[52ch] text-lg leading-relaxed text-ink-700">
                {step.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
