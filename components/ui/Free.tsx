import { Fragment } from "react";

/**
 * Client rule: every mention of the free evaluation is highlighted.
 * Use <Free /> in JSX, or withFree() for copy that comes from data/site.ts.
 */
export function Free({ children = "gratuita" }: { children?: React.ReactNode }) {
  return <strong className="u-free">{children}</strong>;
}

export function withFree(text: string) {
  return text.split(/(gratuit[ao]s?)/i).map((part, i) =>
    i % 2 ? <Free key={i}>{part}</Free> : <Fragment key={i}>{part}</Fragment>
  );
}
