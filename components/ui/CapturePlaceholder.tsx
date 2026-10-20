import { cn } from "@/lib/utils";

/**
 * Stand-in for photo/video that still has to be shot. It doubles as the
 * capture brief: what to film, how, and what consent is needed.
 * Replace each one with the real asset once it exists.
 */
export default function CapturePlaceholder({
  kind,
  title,
  brief,
  className,
}: {
  kind: "foto" | "video";
  title: string;
  brief: string;
  className?: string;
}) {
  return (
    <figure
      data-capture={kind}
      className={cn(
        "flex flex-col justify-between gap-5 border border-dashed border-ink-300 bg-paper-deep p-4 md:p-6",
        className
      )}
    >
      <div className="flex items-center gap-2 text-oxblood md:gap-3">
        {kind === "video" ? (
          <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
            <rect x="3" y="6" width="13" height="12" rx="1.5" />
            <path d="M16 10.5 21 7.5v9l-5-3" />
          </svg>
        ) : (
          <svg aria-hidden viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M4 8h3l1.5-2h7L17 8h3v11H4z" />
            <circle cx="12" cy="13.5" r="3.5" />
          </svg>
        )}
        <span className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] md:text-[0.75rem] md:tracking-[0.14em]">
          {kind === "video" ? "Vídeo a captar" : "Foto a captar"}
        </span>
      </div>
      <figcaption>
        <p className="font-display text-lg leading-snug text-ink-900 md:text-2xl">{title}</p>
        <p className="mt-2 text-sm leading-relaxed text-ink-700">{brief}</p>
      </figcaption>
    </figure>
  );
}
