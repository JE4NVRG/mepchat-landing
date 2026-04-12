# MepChat Landing Page — Spec

## Objetivo
Landing page de conversao para o MepChat (plataforma de atendimento multi-atendente via WhatsApp). Dominio: `mepchat.je4ndev.com`.

## Publico-alvo
Qualquer empresa/comercio que tenha mais de uma pessoa atendendo no mesmo WhatsApp — do MEI ao empresario com varias redes.

## Stack
- Next.js 14+ (App Router)
- Tailwind CSS
- TypeScript
- Deploy: Vercel

## Identidade Visual
- **Fundo:** Dark (#0f172a, #1e293b, #0f0f12)
- **Cor primaria:** Verde WhatsApp (#25D366)
- **Texto:** Branco com opacidades (100%, 85%, 65%, 55%, 40%)
- **Cards/borders:** rgba(255,255,255,0.06-0.08) e rgba(37,211,102,0.1-0.2)
- **Logo:** Texto "MepChat" — "Mep" em verde, "Chat" em branco
- **Font:** System font stack (-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif)

## CTAs
1. **WhatsApp (principal):** Link para `https://wa.me/5511914826568?text=Ola, quero conhecer o MepChat!`
2. **Teste gratis (secundario):** Link para `https://mepchat.agenciamep.com/cadastro`

## Estrutura de Secoes

### 1. Navbar
- Logo "MepChat" a esquerda
- Links: Funcionalidades, Precos, FAQ, Teste Gratis (verde)
- Sticky no topo com blur/transparencia
- Mobile: hamburger menu

### 2. Hero
- Badge: "Teste 5 dias gratis"
- H1: "Saiba quem esta atendendo seus clientes no WhatsApp"
- Subtitulo explicativo
- 2 CTAs: "Falar no WhatsApp" (verde solido) + "Criar conta gratis" (outline verde)
- Barra de features: Controle | QR Code | Acesso (separados por dividers)
- Glow verde sutil no canto superior direito

### 3. Problema
- Label: "O problema"
- H2: "Voce sabe quem esta atendendo seus clientes agora?"
- 3 cards vermelhos:
  - Sem controle de quem atendeu
  - Conversas se perdem
  - Trocar de numero e dor de cabeca

### 4. Solucao
- Label: "A solucao"
- H2: "MepChat resolve tudo isso"
- 3 cards verdes:
  - Saiba exatamente quem atendeu
  - Transfira chats entre setores
  - Troque de numero em 10 segundos

### 5. Funcionalidades
- Label: "Funcionalidades"
- H2: "Tudo que voce precisa pra organizar o atendimento"
- Grid 2x4 (desktop) / 1 coluna (mobile):
  - Multi-atendentes
  - Conexao QR Code
  - Departamentos
  - Niveis de acesso
  - Kanban
  - Relatorios
  - Fluxo de Bot
  - Respostas rapidas

### 6. Preco
- Label: "Investimento"
- H2: "Plano unico, simples e justo"
- Card central do plano Starter R$ 249/mes:
  - 5 usuarios (admin + 4 atendentes)
  - 1 conexao WhatsApp (QR Code)
  - Kanban incluso
  - Departamentos e setores
  - Fluxo de Bot
  - Relatorios e dashboard
  - Treinamento completo
  - Suporte em horario comercial
- CTA: "Testar 5 dias gratis"
- Lista de adicionais:
  - Usuario extra: R$ 25/mes
  - Conexao QR extra: R$ 200/mes
  - Disparos de mensagem: R$ 129/mes
  - Chat Interno: R$ 89/mes
  - Calendario eventos: R$ 139/mes
  - API do Sistema: R$ 129/mes
  - Gestao de grupos: R$ 99/mes
  - Discador de chamadas: R$ 49/mes

### 7. FAQ
- 6 perguntas com accordion:
  1. Preciso da API oficial do WhatsApp? — Nao, conecta via QR Code
  2. Posso trocar de numero sem perder nada? — Sim, sem custo
  3. Quantos atendentes posso ter? — 5 inclusos, extras R$ 25/mes
  4. Tem contrato ou fidelidade? — Nao, cancela quando quiser
  5. Como funciona o teste gratis? — 5 dias completos sem pagar
  6. Tem suporte? — Sim, WhatsApp em horario comercial + treinamento

### 8. CTA Final
- Card com gradiente verde sutil
- H2: "Pronto pra organizar seu atendimento?"
- Subtitulo: "Comece agora com 5 dias gratis. Sem cartao, sem compromisso."
- 2 CTAs: WhatsApp + Criar conta gratis

### 9. Footer
- Logo MepChat
- Copyright 2026 — Agencia MEP
- Dominio

## SEO
- **Title:** "MepChat — Atendimento WhatsApp com Multiplos Atendentes"
- **Description:** "Plataforma de atendimento via WhatsApp com multiplos atendentes. Saiba quem atendeu cada cliente, transfira chats entre setores e troque de numero via QR Code. Teste 5 dias gratis."
- **Keywords:** atendimento whatsapp, multiplos atendentes, whatsapp para empresas, multi atendimento whatsapp, plataforma atendimento whatsapp, whatsapp varios atendentes
- **OG Image:** Gerar imagem com titulo + logo
- **Schema.org:** SoftwareApplication + FAQPage
- **Canonical:** https://mepchat.je4ndev.com
- **Sitemap.xml** e **robots.txt**
- **Alt text** em todas as imagens/icones
- **Headings hierarquicos:** H1 unico no hero, H2 por secao

## Performance
- Core Web Vitals otimizados
- Imagens otimizadas com next/image (quando houver)
- Font system stack (sem download de fontes)
- Minimo de JS no client

## Responsividade
- Mobile-first
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Navbar com hamburger menu no mobile
- Grid de features: 1 coluna mobile, 2 colunas desktop
- Secao de preco: full width mobile
