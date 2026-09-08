"use client";

import { useEffect, useRef, useState, type ElementType } from "react";
import { cn } from "@/lib/utils";

/**
 * Line-by-line reveal. Each line sits in an overflow-hidden mask and
 * rises into place on scroll — like a limb moving through its range.
 * Pass text as an array of lines (you control the breaks editorially).
 */
export default function SplitText({
  lines,
  as,
  className,
  lineClassName,
  stagger = 90,
  ...rest
}: {
  lines: string[];
  as?: ElementType;
  className?: string;
  lineClassName?: string;
  stagger?: number;
} & React.HTMLAttributes<HTMLElement>) {
  const Tag = (as || "p") as ElementType;
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag ref={ref} className={className} {...rest}>
      {lines.map((line, i) => (
        <span key={i} className="block overflow-hidden">
          <span
            className={cn(
              "block will-change-transform transition-transform duration-[900ms] ease-[cubic-bezier(0.16,1,0.3,1)] motion-reduce:transition-none motion-reduce:translate-y-0",
              inView ? "translate-y-0" : "translate-y-[110%]",
              lineClassName
            )}
            style={{ transitionDelay: `${inView ? i * stagger : 0}ms` }}
          >
            {line}
          </span>
        </span>
      ))}
    </Tag>
  );
}
