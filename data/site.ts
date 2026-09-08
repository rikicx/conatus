/* ============================================================
   CONATUS — Content layer
   Every objective fact below is drawn from Conatus's own public
   channels (Instagram @clinica.conatus, Google Business Profile).
   Verified: setembro/2026.
   Narrative, headlines and microcopy are original.
   Do NOT add professionals, certifications, equipment brands,
   convênios, prices or testimonials that are not publicly confirmed.
   ============================================================ */

export const site = {
  name: "Clínica Conatus",
  shortName: "Conatus",
  concept: "Tendência ao movimento",
  tagline: "Fisioterapia, força e movimento para os 50+.",
  description:
    "Clínica de fisioterapia, pilates e musculação especializada para pessoas 50+ na Vila Mariana, São Paulo. Avaliação, reabilitação e treino de força para preservar autonomia e movimento.",
  url: "https://clinicaconatus.com",
  locale: "pt-BR",
} as const;

export const contact = {
  phoneDisplay: "(11) 98962-2924",
  phoneRaw: "5511989622924",
  whatsapp: "https://wa.me/5511989622924",
  whatsappMessage:
    "https://wa.me/5511989622924?text=Ol%C3%A1%2C%20Conatus.%20Quero%20agendar%20uma%20avalia%C3%A7%C3%A3o.",
  instagram: "https://www.instagram.com/clinica.conatus/",
  instagramHandle: "@clinica.conatus",
  address: {
    street: "R. Cel. Diogo, 484",
    district: "Jardim da Glória — Vila Mariana",
    city: "São Paulo",
    state: "SP",
    zip: "01545-000",
    country: "BR",
    // Approx. centroid for Jardim da Glória / R. Cel. Diogo, Vila Mariana.
    lat: -23.5799,
    lng: -46.6325,
  },
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Cl%C3%ADnica+Conatus+R.+Cel.+Diogo+484+Vila+Mariana",
  mapsEmbed:
    "https://www.google.com/maps?q=R.+Cel.+Diogo,+484+-+Jardim+da+Gloria,+S%C3%A3o+Paulo+-+SP,+01545-000&output=embed",
  // Publicly confirmed: opens Monday at 07:00. Full weekly grid is not
  // published — scheduling is handled directly.
  hoursNote: "Atendimento com horário agendado · abertura às 7h",
  opensAt: "07:00",
} as const;

export const nav = [
  { label: "A abordagem", href: "/a-abordagem" },
  { label: "O que fazemos", href: "/#o-que-fazemos" },
  { label: "O espaço", href: "/#o-espaco" },
  { label: "Contato", href: "/contato" },
] as const;

/* ---- The method: patterns observed across Conatus's own content ----
   (avaliar → entender → mover → fortalecer → acompanhar) */
export const approach = [
  {
    n: "01",
    title: "Avaliação",
    lede: "Antes de qualquer exercício, uma leitura do corpo.",
    body: "Marcha, equilíbrio, força, amplitude, histórico. A avaliação inicial define o ponto de partida — e o que o movimento precisa devolver primeiro.",
  },
  {
    n: "02",
    title: "Leitura",
    lede: "O corpo dá sinais muito antes de uma queda.",
    body: "Passos mais curtos, insegurança ao mudar de direção, fraqueza nas pernas. Cada sinal é informação. Entender vem antes de tratar.",
  },
  {
    n: "03",
    title: "Movimento",
    lede: "Fisioterapia e treino na mesma direção.",
    body: "O plano combina reabilitação e exercício orientado. Nada genérico: cada série é ajustada à sua condição e aos seus limites, movimento a movimento.",
  },
  {
    n: "04",
    title: "Força",
    lede: "Músculo é o que sustenta a independência.",
    body: "Depois dos 60, a perda de massa muscular acelera. O treino de força reconstrói o que o tempo tira — e com a nutrição andando junto, o corpo tem com o que se refazer.",
  },
  {
    n: "05",
    title: "Acompanhamento",
    lede: "Progressão medida, não prometida.",
    body: "Reavaliações periódicas mostram o que mudou. A carga sobe quando o corpo está pronto. O objetivo não é o treino — é seguir fazendo o que você ama, com segurança.",
  },
] as const;

/* ---- Services: all publicly confirmed by Conatus ---- */
export const services = [
  {
    id: "avaliacao",
    index: "S1",
    name: "Avaliação inicial",
    summary: "O ponto de partida.",
    body: "Uma leitura completa de marcha, equilíbrio, força e amplitude. Define o plano e o que tratar primeiro.",
    seed: "avaliacao",
  },
  {
    id: "fisioterapia",
    index: "S2",
    name: "Fisioterapia especializada",
    summary: "Reabilitação com foco em função.",
    body: "Recuperação de lesões, dor e limitações de movimento — com atenção a quem quer voltar a andar, subir escadas e virar sem insegurança.",
    seed: "fisioterapia",
  },
  {
    id: "musculacao",
    index: "S3",
    name: "Musculação 50+",
    summary: "Treino de força orientado.",
    body: "Musculação especializada para a maturidade, acompanhada movimento a movimento por profissionais. Contra a sarcopenia, a favor da autonomia.",
    seed: "musculacao",
  },
  {
    id: "pilates",
    index: "S4",
    name: "Pilates terapêutico",
    summary: "Controle, respiração, amplitude.",
    body: "Turmas em dias fixos, como alternativa e complemento ao treino de força. Trabalha estabilidade, mobilidade e consciência de movimento.",
    seed: "pilates",
  },
  {
    id: "nutricao",
    index: "S5",
    name: "Nutrição",
    summary: "O treino não trabalha sozinho.",
    body: "Sem tijolos não se levanta parede. A equipe de nutrição garante que o corpo receba o que precisa para se refazer e evoluir.",
    seed: "nutricao",
  },
] as const;

/* ---- Signals section (from Conatus's own posts on early warning signs) ---- */
export const signals = [
  "Passos mais curtos ou arrastados",
  "Dificuldade para levantar os pés do chão",
  "Cansaço em pequenas distâncias",
  "Dores nas articulações",
  "Sensação de fraqueza nas pernas",
  "Precisar de apoio para caminhar",
  "Insegurança ao virar ou mudar de direção",
  "Alterações no equilíbrio",
] as const;

/* ---- "Vocabulary of the house" ----
   These are words Conatus repeats across its own public communication —
   presented as the clinic's language, NOT as customer quotes. */
export const vocabulary = [
  "autonomia",
  "movimento",
  "acolhimento",
  "longevidade",
  "equilíbrio",
  "força",
  "independência",
  "sem dor",
] as const;

/* ---- Verifiable social proof ---- */
export const proof = {
  ratingValue: 5.0,
  ratingCount: 26,
  ratingSource: "Google",
  ratingUrl: contact.mapsUrl,
  asOf: "setembro de 2026",
} as const;

export const galleryImages = [
  { seed: "m1", w: 900, h: 1200, alt: "Detalhe de mãos em apoio durante um exercício de força" },
  { seed: "m2", w: 1200, h: 800, alt: "Pessoa em amplitude de movimento sob luz lateral" },
  { seed: "m3", w: 900, h: 1200, alt: "Articulação do joelho em transição de movimento" },
  { seed: "m4", w: 1200, h: 900, alt: "Acompanhamento próximo entre profissional e aluno" },
  { seed: "m5", w: 900, h: 1100, alt: "Pés e base de apoio em exercício de equilíbrio" },
  { seed: "m6", w: 1200, h: 800, alt: "Equipamento de treino em contraluz no espaço da clínica" },
] as const;
