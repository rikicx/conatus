import type { Metadata } from "next";
import Link from "next/link";
import Visit from "@/components/sections/Visit";
import SplitText from "@/components/motion/SplitText";
import { contact, services } from "@/data/site";

export const metadata: Metadata = {
  title: "Contato e localização",
  description:
    "Clínica Conatus — R. Cel. Diogo, 484, Vila Mariana, São Paulo. Agende sua avaliação pelo WhatsApp (11) 98962-2924. Fisioterapia, musculação 50+, pilates e nutrição.",
  alternates: { canonical: "/contato" },
};

export default function ContatoPage() {
  return (
    <>
      <header className="u-container pt-36 pb-10 md:pt-44 md:pb-16">
        <p className="u-label">
          <Link href="/" className="hover:text-oxblood">
            Conatus
          </Link>{" "}
          / Contato
        </p>
        <SplitText
          as="h1"
          className="d-hero mt-8 font-display text-ink-900"
          lines={["Venha", "até a", "Conatus."]}
          stagger={90}
        />
        <p className="mt-10 max-w-[48ch] text-lg leading-relaxed text-ink-700">
          O agendamento é direto, pelo WhatsApp. Conte rapidamente o que está
          acontecendo com o seu corpo — a equipe indica o melhor primeiro passo e
          combina um horário para a avaliação.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          {services.map((s) => (
            <span
              key={s.id}
              className="border border-ink-900/20 px-3 py-1.5 font-mono text-[0.65rem] uppercase tracking-[0.14em] text-ink-500"
            >
              {s.name}
            </span>
          ))}
        </div>
      </header>

      <Visit />

      <section className="section-dark py-20">
        <div className="u-container flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <p className="font-display text-2xl">
            Prefere ligar? {contact.phoneDisplay}
          </p>
          <div className="flex gap-6">
            <a
              href={`tel:+${contact.phoneRaw}`}
              className="u-action text-clay hover:text-paper"
            >
              Ligar ↗
            </a>
            <a
              href={contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="u-action text-clay hover:text-paper"
            >
              {contact.instagramHandle} ↗
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
