import { cn } from "@/lib/utils";

/** Conatus wordmark — the triangle-in-motion mark rebuilt as clean geometry. */
export default function Wordmark({
  className,
  showText = true,
  compact = false,
}: {
  className?: string;
  showText?: boolean;
  /** collapse the word to just the mark (animated) */
  compact?: boolean;
}) {
  return (
    <span className={cn("inline-flex items-center", className)}>
      <svg
        width="22"
        height="22"
        viewBox="0 0 32 32"
        fill="none"
        aria-hidden
        className="shrink-0 overflow-visible"
      >
        {/* downward triangle — the brand's core shape */}
        <path
          d="M4 6 L28 6 L16 27 Z"
          stroke="currentColor"
          strokeWidth="1.4"
          strokeLinejoin="round"
        />
        {/* a figure mid-stride, abstracted to three strokes */}
        <path
          d="M13 11 L16 15 L14 20 M16 15 L20 17 M13 11 L10 13"
          stroke="var(--color-oxblood)"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>

      {showText && (
        <span
          className={cn(
            "grid transition-[grid-template-columns,opacity] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
            compact ? "grid-cols-[0fr] opacity-0" : "grid-cols-[1fr] opacity-100"
          )}
        >
          <span className="overflow-hidden">
            <span className="block whitespace-nowrap pl-2.5 font-display text-[1.05rem] font-semibold leading-none tracking-[0.08em]">
              CONATUS
            </span>
          </span>
        </span>
      )}
    </span>
  );
}
