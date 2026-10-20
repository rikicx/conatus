import Link from "next/link";
import Wordmark from "./Wordmark";
import { contact, nav, site } from "@/data/site";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="section-dark relative overflow-hidden">
      <div className="u-container pt-24 pb-[calc(6rem+env(safe-area-inset-bottom))] md:pb-10">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="u-label">Conatus — Vila Mariana</p>
            <p className="mt-6 font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.02]">
              Todo corpo<br />tende a continuar.
            </p>
            <a
              href={contact.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="u-action mt-8 inline-flex min-h-11 items-center gap-3 text-clay transition-colors hover:text-paper"
            >
              Agendar uma avaliação
              <span aria-hidden>↗</span>
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="u-label">Endereço</p>
            <address className="mt-5 not-italic leading-relaxed text-paper/80">
              {contact.address.street}
              <br />
              {contact.address.district}
              <br />
              {contact.address.city} — {contact.address.state}
              <br />
              {contact.address.zip}
            </address>
            <a
              href={contact.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex min-h-11 items-center font-mono text-[0.8125rem] uppercase tracking-[0.16em] text-clay hover:text-paper"
            >
              Ver no mapa ↗
            </a>
          </div>

          <div className="md:col-span-3">
            <p className="u-label">Contato</p>
            <ul className="mt-3 text-paper/80">
              <li>
                <a href={`tel:+${contact.phoneRaw}`} className="inline-flex min-h-11 items-center hover:text-paper">
                  {contact.phoneDisplay}
                </a>
              </li>
              <li>
                <a
                  href={contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center hover:text-paper"
                >
                  {contact.instagramHandle}
                </a>
              </li>
              <li className="pt-2 text-sm text-paper/55">{contact.hoursNote}</li>
            </ul>

            <ul className="mt-6">
              {nav.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="inline-flex min-h-11 items-center font-mono text-[0.8125rem] uppercase tracking-[0.16em] text-paper/70 hover:text-paper"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="u-rule mt-16" />
        <div className="mt-6 flex flex-col items-start justify-between gap-4 text-sm text-paper/60 md:flex-row md:items-center">
          <Wordmark className="text-paper" />
          <p>
            © {year} {site.name}. Fisioterapia · Pilates · Musculação 50+.
          </p>
          <p className="font-mono uppercase tracking-[0.16em]">
            23°34′S 46°38′O
          </p>
        </div>
      </div>
    </footer>
  );
}
