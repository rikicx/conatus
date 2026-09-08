# Conatus — site institucional

Site da **Clínica Conatus** (fisioterapia, pilates e musculação para 50+ — Vila Mariana, São Paulo).

**Conceito:** _Tendência ao movimento._ Conatus (Spinoza) é o esforço pelo qual todo
corpo persiste em ser o que é. Cruzado com a inércia física — um corpo em movimento
tende a permanecer em movimento — a clínica é o lugar que treina esse impulso.

## Stack

- **Next.js 16** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS v4** (tokens em `app/globals.css`, bloco `@theme`)
- **Motion** (`motion/react`) — parallax e reveals declarativos
- **GSAP + ScrollTrigger** — os 3 momentos de scroll (Abordagem fixada, Serviços horizontais, hero)
- **Lenis** — scroll suave, integrado ao ScrollTrigger em `components/motion/SmoothScroll.tsx`
- Fonte única: **Inter** (`next/font`) — display, corpo e labels

## Rodar

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm run start
```

## Deploy (Vercel)

Projeto Next.js na raiz — a Vercel detecta automaticamente. Sem variáveis de ambiente.
`git push` para o branch conectado ou `vercel`.

## Estrutura

```
app/            layout (fontes, metadata, JSON-LD), page (home), a-abordagem, contato,
                sitemap.ts, robots.ts, opengraph-image.tsx, not-found.tsx
components/
  layout/       Header, MenuOverlay, Footer, Wordmark, FloatingActions (WhatsApp + voltar ao topo)
  motion/       SmoothScroll (Lenis+GSAP), Cursor, Loader, Reveal, SplitText, Counter
  sections/     Hero, Manifesto, Signals, Pull, Approach, Services, InMotion, Team, Space, Voices, Visit
  ui/           CTA, Magnetic, PlacedImage
data/site.ts    TODA a copy e os dados objetivos
lib/utils.ts    cn(), placeholder() → mapa de imagens
```

## Conteúdo — o que é real vs. o que é placeholder

`data/site.ts` separa a camada de conteúdo da visual. **Fatos objetivos** foram tirados
dos canais públicos da Conatus (Instagram @clinica.conatus, perfil do Google) em set/2026:

- Endereço: R. Cel. Diogo, 484 — Jardim da Glória / Vila Mariana, SP, 01545-000
- WhatsApp: (11) 98962-2924 · Instagram: @clinica.conatus
- Serviços: fisioterapia, pilates terapêutico, musculação 50+, nutrição, avaliação inicial
- Google: nota 5,0 · 26 avaliações (exibido como está, datado)
- Abertura neste endereço: novembro de 2025

Narrativa, headlines, microcopy e a estrutura das seções são autorais.
**Não** há profissionais nomeados, CREFITO, certificações, convênios, preços nem
depoimentos inventados. A seção "Vozes" usa só a nota do Google + o vocabulário que a
própria clínica repete (enquadrado como a linguagem da casa, não como depoimento).

### Fotografia — TROCAR ANTES DO LANÇAMENTO

| Origem | Onde | Observação |
|---|---|---|
| **Unsplash** (via `lib/utils.ts` → `placeholder()`) | hero, serviços, "Em movimento", "O espaço", signals | Fotos reais do tema (fisioterapia / força / movimento 50+) em cor natural, tratadas com o filtro `.media`. São stand-ins — substituir pelo ensaio da Conatus mantendo as mesmas chaves (`seed`). |
| **Instagram da Conatus** (`public/team/*.jpg`) | seção "Quem cuida de você" | Retirado de @clinica.conatus: treino no espaço, um integrante da equipe, e a foto da inauguração. Sem nomes/funções atribuídos a rostos. Substituir por ensaio de equipe. |

Para trocar as fotos de banco: editar o mapa `IMAGES` em `lib/utils.ts` (ou apontar
`placeholder()` para `/public`). Para a equipe: substituir os arquivos em `public/team/`.

## Acessibilidade e performance

- `prefers-reduced-motion` respeitado em todo o motion (Lenis, GSAP, reveals, loader, marquee)
- Navegação por teclado, `:focus-visible` on-brand, landmarks e hierarquia de headings
- Contraste AA (grafite `#1e262d` sobre off-white `#f4f6f8`; azul `#316989` para acentos/large text)
- `next/image` (AVIF/WebP, lazy, dimensões reservadas), fonte única com `display: swap`
- Cursor custom e cabeçalho só em ponteiro fino; escondidos no toque
