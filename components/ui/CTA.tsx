import Link from "next/link";
import Magnetic from "./Magnetic";
import { cn } from "@/lib/utils";

type Variant = "solid" | "line" | "ghost";

const base =
  "group/cta relative inline-flex items-center gap-3 font-mono text-[0.7rem] uppercase tracking-[0.16em] transition-colors duration-300";

const styles: Record<Variant, string> = {
  solid:
    "bg-ink-900 text-paper px-7 py-4 hover:bg-oxblood",
  line: "border border-ink-900/30 px-7 py-4 hover:border-oxblood hover:text-oxblood",
  ghost: "py-2 hover:text-oxblood",
};

export default function CTA({
  href,
  children,
  variant = "solid",
  external = false,
  className,
}: {
  href: string;
  children: React.ReactNode;
  variant?: Variant;
  external?: boolean;
  className?: string;
}) {
  const inner = (
    <span className={cn(base, styles[variant], className)}>
      <span className="relative overflow-hidden">
        <span className="block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/cta:-translate-y-full">
          {children}
        </span>
        <span className="absolute left-0 top-full block transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/cta:-translate-y-full">
          {children}
        </span>
      </span>
      <span
        aria-hidden
        className="inline-block h-[1px] w-8 origin-left scale-x-75 bg-current transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover/cta:scale-x-100"
      />
    </span>
  );

  if (external) {
    return (
      <Magnetic strength={0.25}>
        <a href={href} target="_blank" rel="noopener noreferrer">
          {inner}
        </a>
      </Magnetic>
    );
  }

  return (
    <Magnetic strength={0.25}>
      <Link href={href}>{inner}</Link>
    </Magnetic>
  );
}
