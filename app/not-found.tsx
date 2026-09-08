import Link from "next/link";

export default function NotFound() {
  return (
    <section className="u-container flex min-h-[80svh] flex-col justify-center py-32">
      <p className="u-label">Erro 404</p>
      <h1 className="d-hero mt-6 font-display text-ink-900">
        Fora de<br />
        <span className="text-oxblood">amplitude.</span>
      </h1>
      <p className="mt-8 max-w-[40ch] text-lg text-ink-700">
        Essa página não existe — ou saiu do lugar. Volte ao início e siga em
        movimento.
      </p>
      <Link
        href="/"
        className="mt-10 inline-flex w-fit items-center gap-3 bg-ink-900 px-8 py-4 font-mono text-[0.7rem] uppercase tracking-[0.16em] text-paper transition-colors hover:bg-oxblood"
      >
        Voltar ao início ↗
      </Link>
    </section>
  );
}
