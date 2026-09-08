import type { Metadata } from "next";
import Link from "next/link";
import Approach from "@/components/sections/Approach";
import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";
import PlacedImage from "@/components/ui/PlacedImage";
import { contact } from "@/data/site";

export const metadata: Metadata = {
  title: "A abordagem",
  description:
    "Como a Conatus trabalha: avaliação, leitura dos sinais do corpo, fisioterapia e treino na mesma direção, força contra a sarcopenia e acompanhamento com reavaliação. Método para os 50+ na Vila Mariana.",
  alternates: { canonical: "/a-abordagem" },
};

export default function AbordagemPage() {
  return (
    <>
      <header className="u-container pt-36 pb-16 md:pt-44 md:pb-24">
        <p className="u-label">
          <Link href="/" className="hover:text-oxblood">
            Conatus
          </Link>{" "}
          / A abordagem
        </p>
        <SplitText
          as="h1"
          className="d-hero mt-8 font-display text-ink-900"
          lines={["Entender", "vem antes", "de tratar."]}
          stagger={90}
        />
        <div className="mt-12 grid gap-8 md:grid-cols-12">
          <p className="md:col-span-6 md:col-start-7 text-lg leading-relaxed text-ink-700">
            Não existe exercício certo antes de uma leitura do corpo. O que segue
            é a lógica que aparece, de forma consistente, em tudo o que a Conatus
            publica sobre o próprio trabalho — organizada em cinco tempos.
          </p>
        </div>
      </header>

      <div className="u-container">
        <div className="aspect-[16/9] w-full">
          <PlacedImage
            seed="abordagem-hero"
            w={1600}
            h={900}
            alt="Profissional conduzindo avaliação de movimento com um aluno"
            className="h-full w-full"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      <Approach />

      <section className="section-dark py-20 md:py-28">
        <div className="u-container grid gap-10 md:grid-cols-12">
          <h2 className="d-2 font-display md:col-span-5">
            O que <span className="text-clay">não</span> fazemos.
          </h2>
          <ul className="md:col-span-7 md:pl-10">
            {[
              "Treino genérico, igual para todo mundo.",
              "Progressão prometida sem reavaliação que a comprove.",
              "Foco em estética no lugar de função e autonomia.",
              "Tratar o sintoma e ignorar o que o corpo vinha avisando.",
            ].map((t, i) => (
              <li
                key={t}
                className="flex items-baseline gap-5 border-t border-paper/15 py-5 first:border-t-0"
              >
                <span className="font-mono text-xs text-clay">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="font-display text-[clamp(1.3rem,2.6vw,1.9rem)] leading-tight text-paper/85">
                  {t}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="u-container py-20 md:py-28">
        <Reveal>
          <p className="d-2 max-w-[20ch] font-display">
            O objetivo não é o treino. É seguir fazendo o que você ama.
          </p>
          <a
            href={contact.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-3 bg-ink-900 px-8 py-4 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-paper transition-colors duration-300 hover:bg-oxblood"
          >
            Agendar avaliação
            <span aria-hidden className="transition-transform duration-[400ms] group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </Reveal>
      </section>
    </>
  );
}
