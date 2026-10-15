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
    summary: "O ponto de partida — gratuita.",
    body: "Uma leitura completa de marcha, equilíbrio, força e amplitude. Define o plano e o que tratar primeiro, seja qual for o motivo que trouxe você até aqui.",
    seed: "avaliacao",
    alt: "Profissional da Conatus aferindo a pressão arterial de uma aluna antes do treino.",
    position: "object-[center_6%]",
  },
  {
    id: "fisioterapia",
    index: "S2",
    name: "Fisioterapia especializada",
    summary: "Reabilitação com foco em função.",
    body: "Recuperação de lesões, cirurgias, dor e limitações de movimento — com atenção a quem quer voltar a andar, subir escadas e virar sem insegurança.",
    seed: "fisioterapia",
    alt: "Profissional da Conatus ajusta a postura de um aluno em equipamento de treino.",
    position: "object-[center_22%]",
  },
  {
    id: "musculacao",
    index: "S3",
    name: "Musculação 50+",
    summary: "Treino de força orientado.",
    body: "Musculação especializada para a maturidade, acompanhada movimento a movimento por profissionais. Contra a sarcopenia, a favor da autonomia.",
    seed: "musculacao",
    alt: "Aluna treina no leg press enquanto um profissional de uniforme Conatus acompanha.",
    position: "object-[center_30%]",
  },
  {
    id: "pilates",
    index: "S4",
    name: "Pilates terapêutico",
    summary: "Controle, respiração, amplitude.",
    body: "Turmas em dias fixos, como alternativa e complemento ao treino de força. Trabalha estabilidade, mobilidade e consciência de movimento.",
    seed: "pilates",
    alt: "Aluna em exercício de equilíbrio na cadeira de Pilates, com acompanhamento de uma profissional.",
    position: "object-[center_39%]",
  },
  {
    id: "nutricao",
    index: "S5",
    name: "Nutrição",
    summary: "O treino não trabalha sozinho.",
    body: "Sem tijolos não se levanta parede. A equipe de nutrição garante que o corpo receba o que precisa para se refazer e evoluir.",
    seed: "nutricao",
    alt: "Imagem ilustrativa: equipamento de treino em luz suave.",
    position: undefined,
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

/* ---- Perguntas antes de ligar ----
   Answers to real objections. Where Conatus's own channels confirm a fact
   (avaliação gratuita), it's stated plainly. Where the answer depends on
   the individual case or isn't publicly confirmed (convênio, acesso ao
   espaço, casos pós-cirúrgicos específicos), the answer says so honestly
   and routes to WhatsApp — never invents a yes or a no. */
export const faq = [
  {
    q: "Nunca fiz fisioterapia nem treino. Serve pra mim?",
    a: "Serve — é justamente pra isso que existe a avaliação inicial. Ela lê onde o seu corpo está agora e define o que faz sentido a partir daí, sem exigir histórico ou experiência prévia.",
  },
  {
    q: "Tenho uma cirurgia recente, prótese ou uma lesão. Vocês atendem esse caso?",
    a: "Cada corpo chega de um jeito diferente — cirurgia recente, prótese, uma queda, uma dor que não passa. Conte o que está acontecendo pelo WhatsApp antes de agendar; a equipe orienta se a avaliação é o próximo passo certo e o que levar.",
  },
  {
    q: "Vai doer?",
    a: "A avaliação inicial não é treino — é escuta e leitura do corpo. O ritmo do que vem depois é ajustado ao que você aguenta, não o contrário.",
  },
  {
    q: "Quanto custa a avaliação?",
    a: "A avaliação inicial costuma ser gratuita. Confirme a condição atual ao chamar no WhatsApp.",
  },
  {
    q: "Vocês aceitam convênio ou plano de saúde?",
    a: "Formas de pagamento e convênio são combinados diretamente com a equipe — pergunte pelo WhatsApp antes de agendar.",
  },
  {
    q: "O espaço tem fácil acesso? Elevador, escada, onde estacionar?",
    a: "Se mobilidade for uma preocupação, pergunte pelo WhatsApp antes de vir — a equipe explica o acesso ao espaço.",
  },
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
  { seed: "m1", w: 900, h: 1200, alt: "Profissional de costas, com o logo da Conatus no uniforme, acompanha uma aluna no leg press." },
  { seed: "m2", w: 1200, h: 900, alt: "Sala de musculação da Conatus em funcionamento, com alunos em treino acompanhados pela equipe." },
  { seed: "m3", w: 900, h: 1200, alt: "Aluno treina em equipamento de musculação com orientação de um profissional da Conatus." },
  { seed: "m4", w: 1200, h: 900, alt: "Equipe da Conatus acompanhando alunos 50+ na sala de treino." },
  { seed: "m5", w: 900, h: 1200, alt: "Aluno no leg extension, com um profissional ao lado acompanhando a ficha de treino." },
  { seed: "m6", w: 900, h: 1200, alt: "Aluna treina ombros em equipamento enquanto um profissional acompanha com a ficha de treino." },
] as const;
