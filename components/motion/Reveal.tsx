"use client";

import { useEffect, useRef, useState, type ElementType, type ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  children: ReactNode;
  as?: ElementType;
  className?: string;
  /** delay in ms */
  delay?: number;
  /** "mask" = clip-path wipe up · "rise" = translateY + fade */
  variant?: "mask" | "rise";
  once?: boolean;
};

export default function Reveal({
  children,
  as,
  className,
  delay = 0,
  variant = "rise",
  once = true,
}: Props) {
  const Tag = (as || "div") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          if (once) io.disconnect();
        } else if (!once) {
          setInView(false);
        }
      },
      { threshold: 0.18, rootMargin: "0px 0px -8% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [once]);

  return (
    <Tag
      ref={ref}
      className={cn(
        "transition-[transform,opacity,clip-path] duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none",
        variant === "mask"
          ? inView
            ? "[clip-path:inset(0_0_-4%_0)]"
            : "[clip-path:inset(0_0_100%_0)]"
          : inView
            ? "translate-y-0 opacity-100"
            : "translate-y-6 opacity-0",
        className
      )}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
