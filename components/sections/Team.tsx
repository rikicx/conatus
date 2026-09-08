import Image from "next/image";
import Reveal from "@/components/motion/Reveal";

/**
 * Team photography: pulled from Conatus's own public Instagram
 * (@clinica.conatus) — the trainer in the room, a team member, and
 * the group at the clinic's opening. No names or roles are assigned
 * to individual faces. Replace with a dedicated team shoot at launch.
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
                className="border border-ink-900/20 px-3 py-1.5 text-[0.65rem] font-medium uppercase tracking-[0.14em] text-ink-500"
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
                  src="/team/space.jpg"
                  alt="Profissional da Conatus com o uniforme da clínica, no espaço de treino"
                  width={512}
                  height={640}
                  sizes="(max-width: 768px) 100vw, 45vw"
                  className="h-full w-full object-cover object-[center_18%]"
                />
              </figure>
            </Reveal>

            <Reveal className="col-span-6 md:col-span-4 md:mt-16" delay={80}>
              <figure className="media aspect-[3/4] w-full" data-cursor="media">
                <Image
                  src="/team/portrait.jpg"
                  alt="Integrante da equipe Conatus com o uniforme da clínica"
                  width={640}
                  height={354}
                  sizes="(max-width: 768px) 50vw, 24vw"
                  className="h-full w-full object-cover object-top"
                />
              </figure>
            </Reveal>

            <Reveal className="col-span-6 md:col-span-7 md:-mt-8" delay={140}>
              <figure className="media aspect-[16/11] w-full" data-cursor="media">
                <Image
                  src="/team/group.jpg"
                  alt="Equipe da Conatus reunida na inauguração da clínica na Vila Mariana"
                  width={640}
                  height={482}
                  sizes="(max-width: 768px) 50vw, 40vw"
                  className="h-full w-full object-cover"
                />
              </figure>
            </Reveal>

            <div className="col-span-12 md:col-span-5 md:self-end">
              <p className="u-label">A equipe Conatus</p>
              <p className="mt-2 text-sm leading-relaxed text-ink-500">
                Registros do dia a dia e da abertura da clínica, na R. Cel. Diogo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
