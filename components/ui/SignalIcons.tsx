import { signals } from "@/data/site";

/**
 * The early warning signs from data/site.ts, each with a simple line icon.
 * Icons are keyed by the sign's text so a reworded sign without a match
 * just renders without an icon instead of showing the wrong one.
 */
const ICONS: Record<string, React.ReactNode> = {
  // two short footprints
  "Passos mais curtos ou arrastados": (
    <>
      <path d="M7 2.5c1.9 0 2.9 2.1 2.7 5-.2 2.5-1.2 4-2.8 4S4.2 10 4.3 7.5C4.5 4.6 5.3 2.5 7 2.5Z" />
      <path d="M5 14.5a2 2 0 0 0 4 0" />
      <path d="M17 7.5c1.9 0 2.9 2.1 2.7 5-.2 2.5-1.2 4-2.8 4s-2.7-1.5-2.6-4c.2-2.9 1-5 2.7-5Z" />
      <path d="M15 19.5a2 2 0 0 0 4 0" />
    </>
  ),
  // shoe on the ground, arrow up
  "Dificuldade para levantar os pés do chão": (
    <>
      <path d="M2 21h20" />
      <path d="M3 18h10.5c2 0 3.5-1 3.5-2.5S15.5 13 13.5 13H9V8H3Z" />
      <path d="M20 11V3m0 0-2.5 2.5M20 3l2.5 2.5" />
    </>
  ),
  // nearly empty battery
  "Cansaço em pequenas distâncias": (
    <>
      <rect x="2" y="7" width="17" height="10" rx="2" />
      <path d="M21.5 10.5v3" />
      <path d="M5.5 10v4" />
    </>
  ),
  // bent leg, knee with pain rays
  "Dores nas articulações": (
    <>
      <path d="M7 2.5 9.5 11 6 21.5" />
      <circle cx="9.5" cy="11" r="2" />
      <path d="M14 8l2.5-1.5M14.5 11h3M14 14l2.5 1.5" />
    </>
  ),
  // legs, arrow down
  "Sensação de fraqueza nas pernas": (
    <>
      <path d="M6 2.5v8L5 21.5h3" />
      <path d="M11 2.5v8l1 11h3" />
      <path d="M19.5 8v10m0 0-2.5-2.5m2.5 2.5 2.5-2.5" />
    </>
  ),
  // walking cane
  "Precisar de apoio para caminhar": (
    <>
      <path d="M7 8a4 4 0 0 1 8 0v13.5" />
      <path d="M12.5 21.5h5" />
    </>
  ),
  // turning arrow with a warning mark
  "Insegurança ao virar ou mudar de direção": (
    <>
      <path d="M4 21.5V13a6 6 0 0 1 6-6h9.5" />
      <path d="m16.5 3.5 3.5 3.5-3.5 3.5" />
      <path d="M15 13.5v3.5M15 20v.01" />
    </>
  ),
  // tilted balance scale
  "Alterações no equilíbrio": (
    <>
      <path d="M12 3.5v18M7.5 21.5h9" />
      <path d="M3.5 9.5 20.5 5.5" />
      <path d="m3.5 9.5-2.5 5h5l-2.5-5ZM20.5 5.5l-2.5 5h5l-2.5-5Z" />
    </>
  ),
};

export default function SignalIcons() {
  return (
    <ul className="mt-8 grid grid-cols-2 gap-3 md:grid-cols-4">
      {signals.map((s) => (
        <li
          key={s}
          className="flex flex-col gap-3 border border-ink-900/12 bg-bone p-4"
        >
          {ICONS[s] && (
            <svg
              aria-hidden
              viewBox="0 0 24 24"
              className="h-9 w-9 text-oxblood"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              {ICONS[s]}
            </svg>
          )}
          <span className="text-sm leading-snug text-ink-900">{s}</span>
        </li>
      ))}
    </ul>
  );
}
