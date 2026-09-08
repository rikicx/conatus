"use client";

import { useEffect, useRef } from "react";

/**
 * Custom cursor: a dot that tracks 1:1 and a ring that lags and morphs.
 * The ring grows over media ([data-cursor="media"]) and links.
 * Hidden on touch / coarse pointers via CSS.
 */
export default function Cursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    if (!fine) return;

    const dot = dotRef.current!;
    const ring = ringRef.current!;
    let mx = window.innerWidth / 2;
    let my = window.innerHeight / 2;
    let rx = mx;
    let ry = my;
    let raf = 0;

    const move = (e: MouseEvent) => {
      mx = e.clientX;
      my = e.clientY;
      dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;

      const el = (e.target as HTMLElement)?.closest?.(
        '[data-cursor="media"], a, button, [role="button"]'
      );
      ring.classList.toggle(
        "is-media",
        !!el && el.getAttribute("data-cursor") === "media"
      );
      ring.classList.toggle(
        "is-link",
        !!el && el.getAttribute("data-cursor") !== "media"
      );
    };

    const loop = () => {
      rx += (mx - rx) * 0.16;
      ry += (my - ry) * 0.16;
      ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%) scale(var(--ring-scale))`;
      raf = requestAnimationFrame(loop);
    };

    const leave = () => {
      dot.style.opacity = "0";
      ring.style.opacity = "0";
    };
    const enter = () => {
      dot.style.opacity = "1";
      ring.style.opacity = "1";
    };

    window.addEventListener("mousemove", move, { passive: true });
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    raf = requestAnimationFrame(loop);

    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" aria-hidden />
      <div ref={ringRef} className="cursor-ring" aria-hidden />
    </>
  );
}
