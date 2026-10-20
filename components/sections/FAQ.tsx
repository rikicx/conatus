import { faq, contact } from "@/data/site";
import { withFree } from "@/components/ui/Free";

/**
 * Native <details>/<summary> — works without JS, fully keyboard and
 * screen-reader operable, and gives a generous tap target. Answers the
 * objections that actually stop someone from messaging: "serve pra mim?",
 * "e se eu tiver prótese/cirurgia?", "vai doer?", "quanto custa?",
 * "tem convênio?", "dá pra chegar até lá?" — instead of leaving them
 * unaddressed until the visitor gives up.
 */
export default function FAQ() {
  return (
    <section className="u-container py-20 md:py-28" aria-labelledby="faq-h">
      <div className="grid gap-10 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="u-label">Antes de chamar</p>
          <h2 id="faq-h" className="d-2 mt-6 max-w-[14ch] font-display">
            Perguntas que costumam vir antes.
          </h2>
          <p className="mt-6 max-w-[38ch] text-ink-700">
            Se a sua ainda não está aqui,{" "}
            <a
              href={contact.whatsappMessage}
              target="_blank"
              rel="noopener noreferrer"
              className="text-oxblood underline decoration-oxblood/40 underline-offset-4 hover:decoration-oxblood"
            >
              pergunte direto no WhatsApp
            </a>
            .
          </p>
        </div>

        <div className="md:col-span-8">
          {faq.map((item, i) => (
            <details
              key={item.q}
              className="group border-t border-ink-900/12 py-2 first:border-t-0 last:border-b last:border-ink-900/12"
            >
              <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-5 [&::-webkit-details-marker]:hidden">
                <span className="flex items-baseline gap-4">
                  <span className="u-label shrink-0 text-ink-300">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-display text-xl leading-snug text-ink-900 md:text-2xl">
                    {item.q}
                  </span>
                </span>
                <span
                  aria-hidden
                  className="relative mt-2 h-4 w-4 shrink-0 text-oxblood"
                >
                  <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-current" />
                  <span className="absolute inset-x-0 top-1/2 h-px -translate-y-1/2 bg-current transition-transform duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] group-open:rotate-90" />
                </span>
              </summary>
              <p className="max-w-[56ch] pb-6 pl-0 text-base leading-relaxed text-ink-700 md:pl-[3.25rem]">
                {withFree(item.a)}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
