"use client";

import { useCallback, useRef, useState } from "react";
import { useScroll, useTransform, motion, useReducedMotion } from "motion/react";
import { placeholder } from "@/lib/utils";
import { galleryImages } from "@/data/site";
import Image from "next/image";
import { useMediaQuery } from "@/lib/useMediaQuery";
import Lightbox, { ZoomHint } from "@/components/ui/Lightbox";
import CapturePlaceholder from "@/components/ui/CapturePlaceholder";

const photos = galleryImages.filter((img) => !img.capture);
const zoomImages = photos.map((img) => ({
  src: placeholder(img.seed, img.w, img.h),
  alt: img.alt,
  w: img.w,
  h: img.h,
}));

/* md+: three columns, each a portrait and a landscape in alternating order,
   so the two rows zigzag; columns start at different heights and drift at
   their own speed. Phones: the column wrappers dissolve (display: contents)
   and the same DOM order reads as pairs and full-width landscapes — visual
   order and focus order stay the same. Indexes follow `galleryImages`. */
const columns = [
  { items: [0, 1], offset: "" },
  { items: [2, 3], offset: "md:pt-24" },
  { items: [4, 5], offset: "md:pt-10" },
];

// phone grid (12 cols) per photo, reset to the column flow from md up
const phone = [
  "col-span-5", // portrait, paired with the next one
  "col-span-7 self-end md:self-auto", // landscape, bottoms aligned with the portrait
  "col-span-12", // full width
  "col-span-6 self-start md:self-auto", // portrait pair (self-start: the row is taller by the step below)…
  "col-span-6 mt-10 md:mt-0", // …the second one a step lower
  "col-span-12", // full width
];
const phoneSizes = ["45vw", "60vw", "100vw", "50vw", "50vw", "100vw"];

export default function InMotion() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  // scroll-linked motion is desktop-only: on phones the title would run off
  // the screen and the parallax lanes cost frames for little effect
  const wide = useMediaQuery("(min-width: 768px)");
  const [zoom, setZoom] = useState<number | null>(null);
  const closeZoom = useCallback(() => setZoom(null), []);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // % of each column's height (~900px on desktop)
  const driftA = useTransform(scrollYProgress, [0, 1], ["5%", "-5%"]);
  const driftB = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const driftC = useTransform(scrollYProgress, [0, 1], ["8%", "-8%"]);
  const wordX = useTransform(scrollYProgress, [0, 1], ["8%", "-30%"]);

  const drifts = [driftA, driftB, driftC];

  return (
    <section
      ref={ref}
      className="section-dark relative overflow-hidden py-20 md:py-28"
      aria-labelledby="inmotion-h"
    >
      <div className="u-container">
        <p className="u-label">02 — O corpo trabalhando</p>
        <motion.h2
          id="inmotion-h"
          style={reduce || !wide ? undefined : { x: wordX }}
          className="d-hero mt-4 font-display md:whitespace-nowrap"
        >
          Em movimento
        </motion.h2>
      </div>

      <div className="u-container mt-14 grid grid-cols-12 gap-4 md:mt-24 md:flex md:items-start md:gap-6">
        {columns.map((col, c) => (
          <motion.div
            key={c}
            style={reduce || !wide ? undefined : { y: drifts[c] }}
            className={`contents md:flex md:flex-1 md:flex-col md:gap-6 ${col.offset}`}
          >
            {col.items.map((i) => {
              const img = galleryImages[i];
              if (!img) return null;
              const landscape = img.w > img.h;
              if (img.capture) {
                return (
                  <div key={img.seed} className={phone[i]}>
                    <CapturePlaceholder
                      kind="foto"
                      title={img.capture}
                      brief="Alunos e equipe em treino, com pessoas no quadro. Com autorização de uso de imagem."
                      className={landscape ? "aspect-[4/3]" : "aspect-[3/4]"}
                    />
                  </div>
                );
              }
              const z = photos.indexOf(img);
              return (
                <figure
                  key={img.seed}
                  className={`media ${phone[i]}`}
                  data-cursor="media"
                >
                  <button
                    type="button"
                    onClick={() => setZoom(z)}
                    aria-label={`Ampliar foto: ${img.alt}`}
                    className="block h-full w-full cursor-zoom-in"
                  >
                    <Image
                      src={zoomImages[z].src}
                      alt=""
                      width={img.w}
                      height={img.h}
                      sizes={`(max-width: 767px) ${phoneSizes[i] ?? "100vw"}, 30vw`}
                      className="h-full w-full object-cover"
                    />
                    <ZoomHint />
                  </button>
                  <figcaption className="absolute bottom-3 left-3 z-[2] font-mono text-[0.6rem] uppercase tracking-[0.16em] text-paper/70">
                    {String(i + 1).padStart(2, "0")}
                  </figcaption>
                </figure>
              );
            })}
          </motion.div>
        ))}
      </div>

      <div className="u-container mt-14 md:mt-20">
        <p className="max-w-[40ch] text-lg text-paper/70">
          Amplitude, apoio, transferência de peso, controle na volta. Esses são
          alguns dos fatores observados em uma sessão — e é isso que a
          progressão registra.
        </p>
      </div>

      <Lightbox images={zoomImages} index={zoom} onChange={setZoom} onClose={closeZoom} />
    </section>
  );
}
