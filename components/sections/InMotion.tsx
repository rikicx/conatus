"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, useReducedMotion } from "motion/react";
import { placeholder } from "@/lib/utils";
import { galleryImages } from "@/data/site";
import Image from "next/image";

export default function InMotion() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
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
          style={reduce ? undefined : { x: wordX }}
          className="d-hero mt-4 whitespace-nowrap font-display"
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
              style={reduce ? undefined : { y: lanes[i] }}
              className={`media ${span} ${i % 2 ? "col-span-1" : "col-span-1"}`}
              data-cursor="media"
            >
              <Image
                src={placeholder(img.seed, img.w, img.h)}
                alt={img.alt}
                width={img.w}
                height={img.h}
                sizes="(max-width: 768px) 50vw, 33vw"
                className="h-full w-full object-cover"
              />
              <figcaption className="absolute bottom-3 left-3 z-[2] font-mono text-[0.6rem] uppercase tracking-[0.16em] text-paper/70">
                {String(i + 1).padStart(2, "0")}
              </figcaption>
            </motion.figure>
          );
        })}
      </div>

      <div className="u-container mt-20">
        <p className="max-w-[40ch] text-lg text-paper/70">
          Amplitude, apoio, transferência de peso, controle na volta. É isso que
          se observa numa sessão — e é isso que a progressão registra.
        </p>
      </div>
    </section>
  );
}
