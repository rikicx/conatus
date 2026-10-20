"use client";

import { useRef } from "react";
import { useScroll, useTransform, motion, useReducedMotion } from "motion/react";
import Image from "next/image";
import { placeholder } from "@/lib/utils";
import { contact } from "@/data/site";

export default function Space() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
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
              style={reduce ? undefined : { y: bigY }}
              className="media col-span-12 aspect-[16/9] md:col-span-8"
              data-cursor="media"
            >
              <motion.div style={reduce ? undefined : { scale }} className="h-full w-full">
                <Image
                  src={placeholder("space-1", 1200, 900)}
                  alt="Vista real da sala de musculação da Conatus, com equipamentos pretos e piso amadeirado."
                  width={1200}
                  height={900}
                  sizes="(max-width: 768px) 100vw, 55vw"
                  className="h-full w-full object-cover"
                />
              </motion.div>
            </motion.figure>

            <motion.figure
              style={reduce ? undefined : { y: smallY }}
              className="media col-span-7 aspect-[4/5] md:col-span-4 md:mt-24"
              data-cursor="media"
            >
              <Image
                src={placeholder("space-2", 700, 900)}
                alt="Sala de Pilates da Conatus com reformer, equipamentos de madeira e espelhos."
                width={700}
                height={900}
                sizes="(max-width: 768px) 60vw, 28vw"
                className="h-full w-full object-cover"
              />
            </motion.figure>

            <motion.figure
              style={reduce ? undefined : { y: bigY }}
              className="media col-span-5 aspect-square md:col-span-5 md:-mt-10"
              data-cursor="media"
            >
              <Image
                src={placeholder("space-3", 800, 1000)}
                alt="Equipamentos de musculação e corredor central da Conatus."
                width={800}
                height={1000}
                sizes="(max-width: 768px) 40vw, 24vw"
                className="h-full w-full object-cover"
              />
            </motion.figure>
          </div>
        </div>
      </div>
    </section>
  );
}
