"use client";

import { useCallback, useRef, useState } from "react";
import { useScroll, useTransform, motion, useReducedMotion } from "motion/react";
import { useMediaQuery } from "@/lib/useMediaQuery";
import { contact } from "@/data/site";
import Image from "next/image";
import { placeholder } from "@/lib/utils";
import CapturePlaceholder from "@/components/ui/CapturePlaceholder";
import Lightbox, { ZoomHint } from "@/components/ui/Lightbox";

/** A slot without `photo` renders as a capture placeholder (photo still to be shot). */
type Slot = {
  title: string;
  brief?: string;
  photo?: { seed: string; w: number; h: number; alt: string };
  sizes: string;
  className: string;
};

const spaceSlots: Slot[] = [
  {
    title: "Sala de musculação",
    photo: { seed: "space-1", w: 1200, h: 675, alt: "Sala de musculação da Conatus em uso, com alunos 50+ treinando nos aparelhos." },
    sizes: "(max-width: 768px) 100vw, 55vw",
    className: "col-span-12 aspect-[16/9] md:col-span-8",
  },
  {
    title: "Pilates",
    photo: { seed: "space-2", w: 700, h: 900, alt: "Sala de Pilates da Conatus com reformer, equipamentos de madeira e espelhos." },
    sizes: "(max-width: 768px) 50vw, 28vw",
    className: "col-span-6 aspect-[4/5] md:col-span-4 md:mt-24",
  },
  {
    title: "Equipe e alunos",
    photo: { seed: "space-3", w: 960, h: 720, alt: "Equipe da Conatus acompanhando de perto alunos 50+ nos aparelhos de musculação." },
    sizes: "(max-width: 768px) 50vw, 35vw",
    className: "col-span-6 aspect-[4/3] md:col-span-5 md:-mt-10",
  },
];

const zoomImages = spaceSlots.flatMap((s) =>
  s.photo ? [{ src: placeholder(s.photo.seed, s.photo.w, s.photo.h), alt: s.photo.alt, w: s.photo.w, h: s.photo.h }] : []
);

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
            {spaceSlots.map((slot, i) => (
              <motion.div
                key={slot.title}
                style={reduce || !wide ? undefined : { y: i === 1 ? smallY : bigY }}
                className={slot.className}
              >
                {slot.photo ? (
                  <figure className="media h-full w-full" data-cursor="media">
                    <button
                      type="button"
                      onClick={() => setZoom(zoomImages.findIndex((z) => z.alt === slot.photo!.alt))}
                      aria-label={`Ampliar foto: ${slot.photo.alt}`}
                      className="relative block h-full w-full cursor-zoom-in"
                    >
                      <Image
                        src={placeholder(slot.photo.seed, slot.photo.w, slot.photo.h)}
                        alt=""
                        width={slot.photo.w}
                        height={slot.photo.h}
                        sizes={slot.sizes}
                        className="h-full w-full object-cover"
                      />
                      <ZoomHint />
                    </button>
                  </figure>
                ) : (
                  <CapturePlaceholder kind="foto" title={slot.title} brief={slot.brief ?? ""} className="h-full" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      <Lightbox images={zoomImages} index={zoom} onChange={setZoom} onClose={closeZoom} />
    </section>
  );
}
