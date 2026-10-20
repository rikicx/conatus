import Image from "next/image";
import Reveal from "@/components/motion/Reveal";
import { placeholder } from "@/lib/utils";

/**
 * Team photography: real sessions at the clinic (see lib/utils.ts, keys
 * team-1..3). No names or roles are assigned to individual faces — add
 * them only once the team confirms how they want to be presented.
 */
const disciplines = [
  "Fisioterapia especializada",
  "Treino de força 50+",
  "Pilates terapêutico",
  "Nutrição",
];

export default function Team() {
  return (
    <section className="u-container py-20 md:py-28" aria-labelledby="team-h">
      <div className="grid gap-x-10 gap-y-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="u-label">Quem fica ao seu lado</p>
          <h2 id="team-h" className="d-2 mt-6 font-display">
            Uma equipe que <span className="text-oxblood">olha junto</span> para o
            mesmo corpo.
          </h2>
          <p className="mt-8 max-w-[44ch] text-lg leading-relaxed text-ink-700">
            Fisioterapeutas, profissionais de treino e nutrição trabalham sobre o
            mesmo plano — não em salas separadas. É o que torna o acompanhamento
            contínuo, e não uma sequência de consultas soltas.
          </p>
          <p className="mt-4 max-w-[44ch] text-ink-500">
            Um ambiente que quem passa por lá costuma descrever, com as próprias
            palavras, como acolhedor e familiar. A clínica abriu as portas neste
            endereço no fim de 2025.
          </p>

          <ul className="mt-8 flex flex-wrap gap-2">
            {disciplines.map((d) => (
              <li
                key={d}
                className="border border-ink-900/20 px-3 py-1.5 text-[0.8125rem] font-medium uppercase tracking-[0.14em] text-ink-500"
              >
                {d}
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-7">
          <div className="grid grid-cols-12 gap-4 md:gap-5">
            <Reveal className="col-span-12 md:col-span-8">
              <figure className="media aspect-[4/3] w-full" data-cursor="media">
                <Image
                  src={placeholder("team-1", 1200, 1600)}
                  alt="Equipe da Conatus de uniforme acompanhando alunos entre os equipamentos da sala de treino."
                  width={1200}
                  height={1600}
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="h-full w-full object-cover object-[center_45%]"
                />
              </figure>
            </Reveal>

            <Reveal className="col-span-6 md:col-span-4 md:mt-16" delay={80}>
              <figure className="media aspect-[3/4] w-full" data-cursor="media">
                <Image
                  src={placeholder("team-2", 960, 1280)}
                  alt="Profissional da Conatus orienta a postura de um aluno em equipamento de treino."
                  width={960}
                  height={1280}
                  sizes="(max-width: 768px) 50vw, 24vw"
                  className="h-full w-full object-cover"
                />
              </figure>
            </Reveal>

            <Reveal className="col-span-6 md:col-span-7 md:-mt-8" delay={140}>
              <figure className="media aspect-[16/11] w-full" data-cursor="media">
                <Image
                  src={placeholder("team-3", 1600, 1200)}
                  alt="Sala de musculação da Conatus com alunos e profissionais em atividade."
                  width={1600}
                  height={1200}
                  sizes="(max-width: 768px) 50vw, 40vw"
                  className="h-full w-full object-cover"
                />
              </figure>
            </Reveal>

            <div className="col-span-12 md:col-span-5 md:self-end">
              <p className="u-label">A equipe Conatus</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                Registros do dia a dia da equipe na sala de treino, na R. Cel. Diogo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
