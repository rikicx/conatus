export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

/**
 * Conatus's own photography (real sessions at R. Cel. Diogo, 484), optimized
 * to WebP in /public/images/conatus. A few slots (part of the space
 * section) still use temporary stock / earlier local images until
 * dedicated photos exist. Keys are slot names; swap a file here and every
 * place that uses the slot updates.
 */
const IMAGES: Record<string, string> = {
  // hero / narrative
  hero: "/images/conatus/treino-50mais-ombros-acompanhamento.webp",
  "abordagem-hero": "/images/conatus/equipe-conatus-sala-de-treino.webp",
  menu: "/images/conatus/uniforme-conatus-leg-press.webp",
  signals: "/images/conatus/equipe-conatus-aluna-caminhando.webp",

  // services
  avaliacao: "/images/conatus/avaliacao-pressao-arterial.webp",
  fisioterapia: "/images/conatus/orientacao-postura-ombros.webp",
  musculacao: "/images/conatus/leg-press-acompanhamento.webp",
  pilates: "/images/conatus/pilates-cadeira-50mais.webp",
  nutricao: "/images/conatus/nutricionista-jaqueline-bernardini.webp",

  // in motion (gallery)
  m1: "/images/conatus/uniforme-conatus-leg-press.webp",
  m2: "/images/conatus/sala-de-musculacao-em-treino.webp",
  m3: "/images/conatus/treino-guiado-equipamento.webp",
  m4: "/images/conatus/equipe-conatus-sala-de-treino.webp",
  m5: "/images/conatus/leg-extension-acompanhamento.webp",
  m6: "/images/conatus/treino-50mais-ombros-02.webp",

  // team
  "team-1": "/images/conatus/equipe-conatus-aluna-caminhando.webp",
  "team-2": "/images/conatus/orientacao-postura-ombros.webp",
  "team-3": "/images/conatus/sala-de-musculacao-em-treino.webp",

  // space
  "space-1": "/images/conatus/estrutura-musculacao-01.webp",
  "space-2": "/images/conatus/estrutura-pilates-01.webp",
  "space-3": "/images/conatus/estrutura-musculacao-02.webp",
};

const FALLBACK = "photo-1571902943202-507ec2618e8f";

export function placeholder(seed: string, w: number, h: number): string {
  const id = IMAGES[seed] ?? FALLBACK;
  if (id.startsWith("/")) return id;
  const cw = Math.min(w, 1600);
  const ch = Math.round((cw / w) * h);
  return `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${cw}&h=${ch}&q=70`;
}
