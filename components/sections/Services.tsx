"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { services } from "@/data/site";
import PlacedImage from "@/components/ui/PlacedImage";
import { withFree } from "@/components/ui/Free";

gsap.registerPlugin(ScrollTrigger);

export default function Services() {
  const root = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add(
        "(min-width: 768px) and (prefers-reduced-motion: no-preference)",
        () => {
          const t = track.current!;
          const distance = () => t.scrollWidth - window.innerWidth;

          const tween = gsap.to(t, {
            x: () => -distance(),
            ease: "none",
            scrollTrigger: {
              trigger: root.current,
              start: "top top",
              end: () => `+=${distance() + window.innerHeight}`,
              scrub: 0.6,
              pin: true,
              anticipatePin: 1,
              invalidateOnRefresh: true,
            },
          });

          gsap.utils.toArray<HTMLElement>(".svc-img").forEach((img) => {
            gsap.fromTo(
              img,
              { xPercent: -6 },
              {
                xPercent: 6,
                ease: "none",
                scrollTrigger: {
                  trigger: img,
                  containerAnimation: tween,
                  start: "left right",
                  end: "right left",
                  scrub: true,
                },
              }
            );
          });
        }
      );
    }, root);
    return () => ctx.revert();
  }, []);

  return (
    <section
      id="o-que-fazemos"
      ref={root}
      className="relative overflow-hidden bg-paper-deep py-24 md:h-[100svh] md:py-0"
      aria-labelledby="services-h"
    >
      <div className="u-container absolute inset-x-0 top-0 z-10 flex items-baseline justify-between pt-10 md:pt-12">
        <h2 id="services-h" className="d-2 max-w-[16ch] font-display">
          O que fazemos <span className="text-oxblood">com o corpo.</span>
        </h2>
        <p className="u-label hidden md:block">
          {services.length} frentes · role →
        </p>
      </div>

      <div
        ref={track}
        className="flex flex-col gap-6 px-[var(--gutter)] md:h-full md:flex-row md:items-center md:gap-0 md:pl-[var(--gutter)] md:pr-[30vw] md:pt-10"
      >
        {services.map((s, i) => (
          <article
            key={s.id}
            className="group relative flex shrink-0 flex-col justify-between border border-ink-900/12 bg-bone p-6 md:mr-8 md:h-[64vh] md:w-[33vw] md:p-9"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium tracking-[0.16em] text-oxblood">
                {s.index}
              </span>
              <span className="text-sm text-ink-500">
                {String(i + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
              </span>
            </div>

            {/* md+: the photo takes whatever height the copy leaves free */}
            <div className="my-5 aspect-square w-full overflow-hidden md:my-3 md:aspect-auto md:min-h-0 md:flex-1">
              <div className="svc-img h-full w-[112%] -translate-x-[6%]">
                <PlacedImage
                  seed={s.seed}
                  w={900}
                  h={680}
                  alt={s.alt}
                  imageClassName={s.position}
                  className="h-full w-full"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </div>

            <div>
              <h3 className="font-display text-[clamp(1.5rem,2.4vw,2rem)] leading-tight">
                {s.name}
              </h3>
              <p className="mt-1 text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-oxblood">
                {withFree(s.summary)}
              </p>
              <p className="mt-4 max-w-[42ch] text-base leading-relaxed md:text-sm text-ink-700">
                {s.body}
              </p>
            </div>
          </article>
        ))}

        <div className="flex shrink-0 flex-col justify-center md:w-[26vw]">
          <p className="font-display text-3xl leading-tight">
            Não sabe por onde começar?
          </p>
          <Link
            href="/contato"
            className="u-tap u-action mt-5 inline-flex w-fit items-center gap-3 border-b border-ink-900 pb-1 transition-colors hover:border-oxblood hover:text-oxblood"
          >
            Começa pela avaliação →
          </Link>
        </div>
      </div>
    </section>
  );
}
