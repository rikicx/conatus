"use client";

import { useCallback, useRef, useState } from "react";
import { useScroll, useTransform, motion, useReducedMotion } from "motion/react";
import { placeholder } from "@/lib/utils";
import { galleryImages } from "@/data/site";
import Image from "next/image";
import { useMediaQuery } from "@/lib/useMediaQuery";
import Lightbox, { ZoomHint } from "@/components/ui/Lightbox";

const zoomImages = galleryImages.map((img) => ({
  src: placeholder(img.seed, img.w, img.h),
  alt: img.alt,
  w: img.w,
  h: img.h,
}));

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

  const laneUp = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);
  const laneDown = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const wordX = useTransform(scrollYProgress, [0, 1], ["8%", "-30%"]);

  const lanes = [laneUp, laneDown, laneUp, laneDown, laneUp, laneDown];

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

      <div className="u-container mt-14 grid grid-cols-2 gap-4 md:mt-24 md:grid-cols-12 md:gap-6">
        {galleryImages.map((img, i) => {
          const span =
            [
              "md:col-span-4 md:col-start-1",
              "md:col-span-5 md:col-start-7 md:mt-24",
              "md:col-span-3 md:col-start-2 md:-mt-10",
              "md:col-span-6 md:col-start-6",
              "md:col-span-4 md:col-start-1 md:-mt-16",
              "md:col-span-3 md:col-start-9 md:mt-10",
            ][i] || "md:col-span-4";
          return (
            <motion.figure
              key={img.seed}
              style={reduce || !wide ? undefined : { y: lanes[i] }}
              className={`media ${span} ${i % 2 ? "col-span-1" : "col-span-1"}`}
              data-cursor="media"
            >
              <button
                type="button"
                onClick={() => setZoom(i)}
                aria-label={`Ampliar foto: ${img.alt}`}
                className="block h-full w-full cursor-zoom-in"
              >
                <Image
                  src={zoomImages[i].src}
                  alt=""
                  width={img.w}
                  height={img.h}
                  sizes="(max-width: 768px) 50vw, 33vw"
                  className="h-full w-full object-cover"
                />
                <ZoomHint />
              </button>
              <figcaption className="absolute bottom-3 left-3 z-[2] font-mono text-[0.6rem] uppercase tracking-[0.16em] text-paper/70">
                {String(i + 1).padStart(2, "0")}
              </figcaption>
            </motion.figure>
          );
        })}
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
