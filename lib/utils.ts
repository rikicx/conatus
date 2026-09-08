export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * TEMPORARY photography.
 * These are curated stock photographs on the theme of physiotherapy,
 * strength and movement for older adults — placeholders with the right
 * subject and framing so the layout ships production-ready.
 * Swap `IMAGES` for Conatus's own photo shoot before launch:
 * keep the same seed keys and the whole site updates.
 */
const IMAGES: Record<string, string> = {
  // hero / narrative
  hero: "photo-1591258370814-01609b341790", // controlled movement, side light
  "abordagem-hero": "photo-1571019614242-c5c5dee9f50b", // professional guiding a client
  menu: "photo-1596357395217-80de13130e92", // squat, racked studio
  signals: "photo-1487956382158-bb926046304a", // walking — gait

  // services
  avaliacao: "photo-1571019614242-c5c5dee9f50b",
  fisioterapia: "photo-1591258370814-01609b341790",
  musculacao: "photo-1596357395217-80de13130e92", // squat, racked studio
  pilates: "photo-1600881333168-2ef49b341f30", // mobility on the mat
  nutricao: "photo-1620188467120-5042ed1eb5da", // barbell on rack, calm light

  // in motion (gallery)
  m1: "photo-1549060279-7e168fcee0c2", // hands + load — detail
  m2: "photo-1593810450967-f9c42742e326", // deep forward fold — amplitude
  m3: "photo-1596357395217-80de13130e92", // squat, racked studio
  m4: "photo-1571019614242-c5c5dee9f50b", // professional guiding a client
  m5: "photo-1487956382158-bb926046304a", // walking — gait
  m6: "photo-1620188467120-5042ed1eb5da", // barbell on rack, calm light

  // team (activity, not portraits — no identities implied)
  "team-fisio": "photo-1571019614242-c5c5dee9f50b",
  "team-treino": "photo-1596357395217-80de13130e92",
  "team-pilates": "photo-1600881333168-2ef49b341f30",
  "team-nutri": "photo-1549060279-7e168fcee0c2",

  // space
  "space-1": "photo-1571902943202-507ec2618e8f", // calm interior, windows
  "space-2": "photo-1584863231364-2edc166de576", // among the racks
  "space-3": "photo-1620188467120-5042ed1eb5da",
};

const FALLBACK = "photo-1571902943202-507ec2618e8f";

export function placeholder(seed: string, w: number, h: number): string {
  const id = IMAGES[seed] ?? FALLBACK;
  const cw = Math.min(w, 1600);
  const ch = Math.round((cw / w) * h);
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${cw}&h=${ch}&q=70`;
}
