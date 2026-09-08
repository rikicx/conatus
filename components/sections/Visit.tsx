import { contact } from "@/data/site";

export default function Visit() {
  return (
    <section id="visita" className="u-container py-20 md:py-28" aria-labelledby="visit-h">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-5">
          <p className="u-label">Vai começar?</p>
          <h2 id="visit-h" className="d-1 mt-6 font-display">
            Comece pela <span className="text-oxblood">avaliação.</span>
          </h2>
          <p className="mt-8 max-w-[42ch] text-lg leading-relaxed text-ink-700">
            É a porta de entrada. A partir dela, se define o que faz sentido para
            o seu corpo agora — fisioterapia, treino, pilates, ou a combinação.
          </p>

          <div className="mt-10 space-y-6">
            <div>
              <p className="u-label">WhatsApp</p>
              <a
                href={contact.whatsappMessage}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-1 block font-display text-2xl hover:text-oxblood"
              >
                {contact.phoneDisplay}
              </a>
            </div>
            <div>
              <p className="u-label">Endereço</p>
              <address className="mt-1 not-italic leading-relaxed text-ink-700">
                {contact.address.street} — {contact.address.district}
                <br />
                {contact.address.city}/{contact.address.state} · {contact.address.zip}
              </address>
            </div>
            <div>
              <p className="u-label">Horário</p>
              <p className="mt-1 text-ink-700">{contact.hoursNote}</p>
            </div>
          </div>

          <a
            href={contact.whatsappMessage}
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-10 inline-flex items-center gap-3 bg-ink-900 px-8 py-4 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-paper transition-colors duration-300 hover:bg-oxblood"
          >
            Falar com a Conatus
            <span aria-hidden className="transition-transform duration-[400ms] group-hover:translate-x-1">
              ↗
            </span>
          </a>
        </div>

        <div className="md:col-span-7">
          <div className="aspect-[4/3] w-full overflow-hidden border border-ink-900/12 bg-paper-deep md:aspect-[16/11]">
            <iframe
              title="Mapa — Conatus, R. Cel. Diogo 484, Vila Mariana"
              src={contact.mapsEmbed}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="h-full w-full grayscale-[0.35] contrast-[1.04]"
            />
          </div>
          <div className="mt-3 flex items-center justify-between">
            <p className="u-label">Jardim da Glória — Vila Mariana</p>
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[0.7rem] uppercase tracking-[0.16em] text-ink-500 hover:text-oxblood"
            >
              Abrir no Google Maps ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
