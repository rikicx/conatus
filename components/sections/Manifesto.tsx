import SplitText from "@/components/motion/SplitText";
import Reveal from "@/components/motion/Reveal";

export default function Manifesto() {
  return (
    <section className="u-container py-20 md:py-28" aria-labelledby="manifesto-h">
      <div className="grid gap-x-10 gap-y-8 md:grid-cols-12">
        <div className="flex items-start gap-4 md:col-span-4">
          <span className="u-label mt-2 shrink-0">Sobre o nome</span>
        </div>

        <div className="md:col-span-8">
          <SplitText
            as="h2"
            id="manifesto-h"
            className="d-2 font-display text-ink-900"
            lines={[
              "Conatus é o esforço pelo qual",
              "todo corpo persiste em ser o que",
              "é. Um impulso de continuar.",
            ]}
          />
          <div className="mt-10 grid gap-8 md:grid-cols-2">
            <Reveal delay={80}>
              <p className="text-lg leading-relaxed text-ink-700">
                Esse impulso não some com a idade. Ele encontra atrito — perda de
                massa muscular, dor, insegurança para atravessar a rua. O que era
                automático passa a exigir decisão.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="text-lg leading-relaxed text-ink-700">
                A Conatus trabalha desse lado da conta: devolver amplitude, força
                e confiança de movimento a quem passou dos 50. Não para treinar
                por treinar — para seguir fazendo o que já se faz.
              </p>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
