"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { preload } from "react-dom";

const SRC = "/video/conatus-hero.mp4";
const POSTER = "/video/conatus-hero-poster.webp";

/**
 * Hero background video: muted, looping, inline — decorative (aria-hidden).
 * - shows the poster instantly (and is preloaded, since it is the LCP element)
 * - pauses when scrolled out of view, to save battery and bandwidth
 * - with "reduce motion", it renders the still poster only
 */
export default function HeroVideo({
  reduce = false,
  className,
}: {
  reduce?: boolean;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);

  preload(POSTER, { as: "image", fetchPriority: "high" });

  useEffect(() => {
    const v = ref.current;
    if (!v || reduce) return;
    const io = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) v.play().catch(() => {});
      else v.pause();
    });
    io.observe(v);
    return () => io.disconnect();
  }, [reduce]);

  if (reduce) {
    return (
      <Image
        src={POSTER}
        alt=""
        width={480}
        height={600}
        sizes="(max-width: 1024px) 100vw, 50vw"
        priority
        className={className}
      />
    );
  }

  return (
    <video
      ref={ref}
      className={className}
      poster={POSTER}
      autoPlay
      muted
      loop
      playsInline
      preload="auto"
      disablePictureInPicture
      aria-hidden
      tabIndex={-1}
    >
      <source src={SRC} type="video/mp4" />
    </video>
  );
}
