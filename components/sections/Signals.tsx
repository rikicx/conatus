import Reveal from "@/components/motion/Reveal";
import { signals } from "@/data/site";
import PlacedImage from "@/components/ui/PlacedImage";

export default function Signals() {
  return (
    <section className="section-dark py-20 md:py-28" aria-labelledby="signals-h">
      <div className="u-container grid gap-14 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="u-label">01 — Antes do tratamento</p>
          <h2 id="signals-h" className="d-2 mt-6 font-display">
            O corpo avisa <span className="text-clay">muito antes</span> de
            uma queda.
          </h2>
          <p className="mt-8 max-w-[42ch] text-paper/70">
            As mudanças não chegam de uma hora para outra. Elas se instalam aos
            poucos — e cada uma delas é informação. Reconhecê-las cedo é o que
            permite agir enquanto agir ainda é simples.
          </p>
          <div className="mt-10 aspect-[5/4] w-full">
            <PlacedImage
              seed="signals"
              w={1000}
              h={800}
              alt="Aluna caminhando entre os equipamentos da sala de treino, com a equipe da Conatus por perto."
              className="h-full w-full"
              imageClassName="object-[center_52%]"
              sizes="(max-width: 768px) 100vw, 40vw"
            />
          </div>
        </div>

        <ol className="md:col-span-7 md:pl-10">
          {signals.map((s, i) => (
            <li key={s} className="border-t border-paper/15 first:border-t-0">
              <Reveal variant="rise" delay={i * 50}>
                <div className="group flex items-baseline gap-6 py-5 md:py-6">
                  <span className="font-mono text-xs text-clay">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-[clamp(1.4rem,3.4vw,2.4rem)] leading-tight text-paper/85 transition-colors duration-300 group-hover:text-paper">
                    {s}
                  </span>
                </div>
              </Reveal>
            </li>
          ))}
          <li className="border-t border-paper/15 pt-8">
            <p className="max-w-[46ch] text-paper/60">
              Se você reconheceu algum desses sinais — em você ou em alguém da
              família — esse é o momento mais barato de agir.
            </p>
          </li>
        </ol>
      </div>
    </section>
  );
}
