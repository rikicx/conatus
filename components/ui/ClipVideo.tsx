"use client";

import { useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

/**
 * Short silent clip (a few seconds cut from the original, no audio).
 * The poster shows straight away; the video only downloads and plays
 * while it is on screen, and pauses when it leaves. With "reduce motion"
 * it stays on the poster with native controls, so playing is a choice.
 */
export default function ClipVideo({
  src,
  poster,
  stage,
  date,
  label,
  alt,
  className,
}: {
  src: string;
  poster: string;
  /** "Antes" / "Depois" — the headline of the badge */
  stage?: string;
  date?: string;
  label: string;
  alt: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement>(null);
  const [reduce, setReduce] = useState(false);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    const rm = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setReduce(rm);
    if (rm) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) v.play().catch(() => {});
        else v.pause();
      },
      { threshold: 0.35 }
    );
    io.observe(v);
    return () => io.disconnect();
  }, []);

  return (
    <figure className={cn("relative overflow-hidden bg-paper-deep", className)}>
      <video
        ref={ref}
        src={src}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        controls={reduce}
        aria-label={alt}
        width={478}
        height={850}
        className="h-full w-full object-cover"
      />
      <figcaption className="pointer-events-none absolute left-3 top-3 bg-ink-900/80 px-3 py-2 text-paper">
        {stage && <span className="block font-display text-lg font-semibold leading-tight">{stage}</span>}
        <span className="block font-mono text-[0.6875rem] uppercase tracking-[0.14em] text-paper/80">
          {[date, label].filter(Boolean).join(" · ")}
        </span>
      </figcaption>
    </figure>
  );
}
