"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

export type LightboxImage = { src: string; alt: string; w: number; h: number };

/**
 * Full-screen viewer for photo grids. Native <dialog>: focus trap, Esc to
 * close and top-layer stacking come from the browser. Arrow keys and the
 * on-screen buttons move between photos of the same grid.
 */
export default function Lightbox({
  images,
  index,
  onChange,
  onClose,
}: {
  images: readonly LightboxImage[];
  index: number | null;
  onChange: (i: number) => void;
  onClose: () => void;
}) {
  const ref = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const d = ref.current;
    if (!d || index === null || d.open) return;
    d.showModal();
    window.__lenis?.stop();
    document.documentElement.style.overflow = "hidden";
  }, [index]);

  useEffect(() => {
    const d = ref.current;
    if (!d) return;
    const onDialogClose = () => {
      window.__lenis?.start();
      document.documentElement.style.overflow = "";
      onClose();
    };
    d.addEventListener("close", onDialogClose);
    return () => d.removeEventListener("close", onDialogClose);
  }, [onClose]);

  const n = images.length;
  const go = (step: number) => index !== null && onChange((index + step + n) % n);
  const img = index !== null ? images[index] : null;

  return (
    <dialog
      ref={ref}
      aria-label="Foto ampliada"
      data-lenis-prevent
      className="fixed inset-0 m-0 h-[100dvh] max-h-none w-screen max-w-none bg-ink-900 p-0 text-paper backdrop:bg-transparent open:flex open:flex-col"
      onClick={(e) => e.target === e.currentTarget && ref.current?.close()}
      onKeyDown={(e) => {
        if (e.key === "ArrowRight") go(1);
        if (e.key === "ArrowLeft") go(-1);
      }}
    >
      <div className="flex items-center justify-between px-4 py-3 md:px-8 md:py-5">
        <span className="font-mono text-[0.8125rem] tracking-[0.14em] text-paper/70">
          {index !== null && `${index + 1} / ${n}`}
        </span>
        <button
          type="button"
          onClick={() => ref.current?.close()}
          className="u-tap u-action inline-flex items-center gap-2 px-2 py-2 text-paper hover:text-clay"
        >
          Fechar <span aria-hidden>✕</span>
        </button>
      </div>

      <div
        className="pointer-events-none relative flex min-h-0 flex-1 items-center justify-center px-4 pb-4 md:px-24 md:pb-10"
      >
        {img && (
          <Image
            key={img.src}
            src={img.src}
            alt={img.alt}
            width={img.w}
            height={img.h}
            sizes="100vw"
            className="pointer-events-auto h-auto max-h-full w-auto max-w-full object-contain"
          />
        )}
      </div>

      {n > 1 && (
        <div className="flex justify-center gap-4 pb-6 md:pointer-events-none md:absolute md:inset-x-6 md:top-1/2 md:justify-between md:pb-0">
          <button
            type="button"
            onClick={() => go(-1)}
            aria-label="Foto anterior"
            className="pointer-events-auto grid h-14 w-14 place-items-center rounded-full border border-paper/30 text-2xl hover:border-paper hover:bg-paper/10"
          >
            ←
          </button>
          <button
            type="button"
            onClick={() => go(1)}
            aria-label="Próxima foto"
            className="pointer-events-auto grid h-14 w-14 place-items-center rounded-full border border-paper/30 text-2xl hover:border-paper hover:bg-paper/10"
          >
            →
          </button>
        </div>
      )}
    </dialog>
  );
}

/** Corner hint on zoomable photos — always visible, so touch users see it too. */
export function ZoomHint() {
  return (
    <span
      aria-hidden
      className="pointer-events-none absolute right-3 top-3 z-[2] grid h-9 w-9 place-items-center rounded-full bg-ink-900/55 text-paper backdrop-blur-sm"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="10.5" cy="10.5" r="6" />
        <path d="M15 15l5 5M10.5 8v5M8 10.5h5" />
      </svg>
    </span>
  );
}
