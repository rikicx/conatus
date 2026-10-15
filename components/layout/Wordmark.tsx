import Image from "next/image";
import { cn } from "@/lib/utils";

/**
 * Conatus wordmark — official logo (red sign-shaped triangle, flexing arm
 * and the figure reaching out of the frame) + the name set beside it.
 * Source: public/brand/logo-conatus.png (transparent background).
 */
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
      <Image
        src="/brand/logo-conatus.png"
        alt=""
        width={625}
        height={625}
        sizes="44px"
        priority
        className="h-10 w-10 shrink-0 object-contain md:h-11 md:w-11"
      />

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
