"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { preload } from "react-dom";

const SRC = "/video/conatus-hero.mp4";
// 400px wide, ~290KB (vs ~800KB): plenty for the band it fills on phones
const SRC_MOBILE = "/video/conatus-hero-mobile.mp4";
const POSTER = "/video/conatus-hero-poster.webp";

/**
 * Hero background video: muted, looping, inline — decorative (aria-hidden).
 * - shows the poster instantly (and is preloaded, since it is the LCP element)
 * - the video itself only starts loading after hydration, so it never
 *   competes with the poster; on Data Saver or a 2G/3G connection it never
 *   loads and the poster stays
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
    const conn = (
      navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } }
    ).connection;
    if (conn?.saveData || /(^|-)(2g|3g)$/.test(conn?.effectiveType ?? "")) return;
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
      muted
      loop
      playsInline
      preload="none"
      disablePictureInPicture
      aria-hidden
      tabIndex={-1}
    >
      <source src={SRC_MOBILE} type="video/mp4" media="(max-width: 1023px)" />
      <source src={SRC} type="video/mp4" />
    </video>
  );
}
