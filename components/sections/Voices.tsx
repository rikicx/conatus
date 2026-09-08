import Counter from "@/components/motion/Counter";
import Reveal from "@/components/motion/Reveal";
import { proof, vocabulary } from "@/data/site";

export default function Voices() {
  const words = [...vocabulary, ...vocabulary];
  return (
    <section className="section-dark py-20 md:py-28" aria-labelledby="voices-h">
      <div className="u-container">
        <div className="grid items-end gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="u-label">O que se repete</p>
            <h2 id="voices-h" className="sr-only">
              Avaliações e vocabulário da Conatus
            </h2>
            <div className="mt-6 flex items-baseline gap-5">
              <Counter
                to={proof.ratingValue}
                decimals={1}
                className="font-display text-[clamp(4.5rem,14vw,10rem)] leading-none"
              />
              <div className="pb-3">
                <p className="font-display text-3xl text-clay">de 5</p>
                <p className="mt-1 text-[0.7rem] font-medium uppercase tracking-[0.14em] text-ink-300">
                  <Counter to={proof.ratingCount} /> avaliações no {proof.ratingSource}
                </p>
              </div>
            </div>
          </div>

          <div className="md:col-span-5 md:pb-4">
            <p className="max-w-[40ch] text-paper/70">
              Nota máxima no Google até {proof.asOf}. Abaixo, não depoimentos
              inventados — as palavras que a própria Conatus repete quando fala do
              que faz.
            </p>
            <a
              href={proof.ratingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block font-mono text-[0.7rem] uppercase tracking-[0.16em] text-clay hover:text-paper"
            >
              Ler no Google ↗
            </a>
          </div>
        </div>
      </div>

      <Reveal className="mt-16 md:mt-24">
        <div className="marquee overflow-hidden border-y border-paper/15 py-6">
          <div className="marquee-track">
            {words.map((w, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-8 whitespace-nowrap px-8 font-display text-[clamp(1.8rem,4vw,3rem)] text-paper/85"
              >
                {w}
                <span aria-hidden className="text-oxblood">/</span>
              </span>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  );
}
