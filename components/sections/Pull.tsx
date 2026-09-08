import SplitText from "@/components/motion/SplitText";

/** Full-bleed typographic interlude between sections. */
export default function Pull({
  lines,
  attribution,
}: {
  lines: string[];
  attribution?: string;
}) {
  return (
    <section className="u-container py-14 md:py-20">
      <SplitText
        as="blockquote"
        lines={lines}
        className="d-1 font-display text-ink-900"
        stagger={110}
      />
      {attribution && (
        <p className="u-label mt-8">{attribution}</p>
      )}
    </section>
  );
}
