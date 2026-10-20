"use client";

import { useCallback, useRef, useState } from "react";
import { useScroll, useTransform, motion, useReducedMotion } from "motion/react";
import { useMediaQuery } from "@/lib/useMediaQuery";
import Image from "next/image";
import { placeholder } from "@/lib/utils";
import { contact } from "@/data/site";
import Lightbox, { ZoomHint } from "@/components/ui/Lightbox";

const spaceImages = [
  { seed: "space-1", w: 1200, h: 900, alt: "Vista real da sala de musculação da Conatus, com equipamentos pretos e piso amadeirado.", sizes: "(max-width: 768px) 100vw, 55vw" },
  { seed: "space-2", w: 700, h: 900, alt: "Sala de Pilates da Conatus com reformer, equipamentos de madeira e espelhos.", sizes: "(max-width: 768px) 60vw, 28vw" },
  { seed: "space-3", w: 800, h: 1000, alt: "Equipamentos de musculação e corredor central da Conatus.", sizes: "(max-width: 768px) 40vw, 24vw" },
].map((img) => ({ ...img, src: placeholder(img.seed, img.w, img.h) }));

export default function Space() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  // parallax only from md up — on phones it costs frames for little effect
  const wide = useMediaQuery("(min-width: 768px)");
  const [zoom, setZoom] = useState<number | null>(null);
  const closeZoom = useCallback(() => setZoom(null), []);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const bigY = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);
  const smallY = useTransform(scrollYProgress, [0, 1], ["14%", "-14%"]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1.06, 1, 1.06]);

  return (
    <section
      id="o-espaco"
      ref={ref}
      className="relative overflow-hidden bg-paper py-20 md:py-28"
      aria-labelledby="space-h"
    >
      <div className="u-container grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4 md:pt-16">
          <p className="u-label">O endereço</p>
          <h2 id="space-h" className="d-2 mt-6 font-display">
            Uma quadra tranquila da{" "}
            <span className="text-oxblood">Vila Mariana.</span>
          </h2>
          <p className="mt-8 max-w-[40ch] text-lg leading-relaxed text-ink-700">
            Equipamento de treino, sala de pilates e espaço de avaliação no mesmo
            piso. Luz de rua, pé-direito alto, nada de recepção de hospital.
          </p>
          <address className="mt-8 not-italic leading-relaxed text-ink-500">
            {contact.address.street} — {contact.address.district}
            <br />
            {contact.address.city}/{contact.address.state} · {contact.address.zip}
          </address>
          <a
            href={contact.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="u-tap mt-4 inline-flex items-center gap-2 border-b border-ink-900 pb-1 font-mono text-[0.8125rem] uppercase tracking-[0.16em] hover:border-oxblood hover:text-oxblood"
          >
            Ver no mapa ↗
          </a>
        </div>

        <div className="md:col-span-8">
          <div className="grid grid-cols-12 gap-4 md:gap-6">
            <motion.figure
              style={reduce || !wide ? undefined : { y: bigY }}
              className="media col-span-12 aspect-[16/9] md:col-span-8"
              data-cursor="media"
            >
              <motion.div style={reduce || !wide ? undefined : { scale }} className="h-full w-full">
                <button
                  type="button"
                  onClick={() => setZoom(0)}
                  aria-label={`Ampliar foto: ${spaceImages[0].alt}`}
                  className="relative block h-full w-full cursor-zoom-in"
                >
                  <Image
                    src={spaceImages[0].src}
                    alt=""
                    width={spaceImages[0].w}
                    height={spaceImages[0].h}
                    sizes={spaceImages[0].sizes}
                    className="h-full w-full object-cover"
                  />
                  <ZoomHint />
                </button>
              </motion.div>
            </motion.figure>

            <motion.figure
              style={reduce || !wide ? undefined : { y: smallY }}
              className="media col-span-7 aspect-[4/5] md:col-span-4 md:mt-24"
              data-cursor="media"
            >
              <button
                type="button"
                onClick={() => setZoom(1)}
                aria-label={`Ampliar foto: ${spaceImages[1].alt}`}
                className="relative block h-full w-full cursor-zoom-in"
              >
                <Image
                  src={spaceImages[1].src}
                  alt=""
                  width={spaceImages[1].w}
                  height={spaceImages[1].h}
                  sizes={spaceImages[1].sizes}
                  className="h-full w-full object-cover"
                />
                <ZoomHint />
              </button>
            </motion.figure>

            <motion.figure
              style={reduce || !wide ? undefined : { y: bigY }}
              className="media col-span-5 aspect-square md:col-span-5 md:-mt-10"
              data-cursor="media"
            >
              <button
                type="button"
                onClick={() => setZoom(2)}
                aria-label={`Ampliar foto: ${spaceImages[2].alt}`}
                className="relative block h-full w-full cursor-zoom-in"
              >
                <Image
                  src={spaceImages[2].src}
                  alt=""
                  width={spaceImages[2].w}
                  height={spaceImages[2].h}
                  sizes={spaceImages[2].sizes}
                  className="h-full w-full object-cover"
                />
                <ZoomHint />
              </button>
            </motion.figure>
          </div>
        </div>
      </div>

      <Lightbox images={spaceImages} index={zoom} onChange={setZoom} onClose={closeZoom} />
    </section>
  );
}
