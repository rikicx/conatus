import { Fragment } from "react";

/**
 * Client rule: every mention of the free evaluation is highlighted.
 * Use <Free /> in JSX, or withFree() for copy that comes from data/site.ts.
 */
export function Free({ children = "gratuita" }: { children?: React.ReactNode }) {
  return <strong className="u-free">{children}</strong>;
}

export function withFree(text: string) {
  // trailing punctuation stays glued to the badge so it never wraps alone
  return text.split(/(gratuit[ao]s?[.,;:!?]?)/i).map((part, i) => {
    if (i % 2 === 0) return <Fragment key={i}>{part}</Fragment>;
    const [, word, punct] = part.match(/^(.*?)([.,;:!?]?)$/)!;
    return (
      <span key={i} className="whitespace-nowrap">
        <Free>{word}</Free>
        {punct}
      </span>
    );
  });
}
