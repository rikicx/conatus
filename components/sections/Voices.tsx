import Counter from "@/components/motion/Counter";
import { proof } from "@/data/site";

/** Social proof, nothing else: the Google rating. */
export default function Voices() {
  return (
    <section className="section-dark py-20 md:py-28" aria-labelledby="voices-h">
      <div className="u-container">
        <h2 id="voices-h" className="sr-only">
          Avaliação no {proof.ratingSource}
        </h2>
        <div className="flex flex-wrap items-baseline gap-x-8 gap-y-3">
          <Counter
            to={proof.ratingValue}
            decimals={1}
            className="font-display text-[clamp(4.5rem,14vw,10rem)] leading-none"
          />
          <a
            href={proof.ratingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="u-tap font-display text-[clamp(1.4rem,3vw,2.25rem)] leading-tight text-clay underline-offset-8 transition-colors hover:text-paper hover:underline"
          >
            Nota máxima no {proof.ratingSource} ↗
          </a>
        </div>
      </div>
    </section>
  );
}
