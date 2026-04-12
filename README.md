# MepChat - Landing Page

Landing page de conversao para o **MepChat**, plataforma de atendimento via WhatsApp com multiplos atendentes.

**Dominio:** [mepchat.je4ndev.com](https://mepchat.je4ndev.com)

## Stack

- **Next.js 16** (App Router)
- **Tailwind CSS v4**
- **TypeScript**
- **Deploy:** Vercel

## Funcionalidades da Landing Page

- Design dark mode com acentos verde WhatsApp (#25D366)
- Navbar sticky com blur e menu mobile responsivo
- Hero com ilustracao SVG animada e CTAs com glow pulsante
- Barra de stats com numeros animados (counter animation)
- Secoes Problema/Solucao com cards coloridos
- Grid de funcionalidades com icones SVG (Heroicons)
- Secao "Como funciona" em 3 passos
- Card de preco com badges (sem fidelidade, sem contrato, CPF/CNPJ)
- Prova social com 6 depoimentos, fotos e avaliacoes com estrelas
- FAQ com accordion animado
- CTA final com gradiente
- Animacoes fade-in ao scrollar (Intersection Observer)
- SEO completo: meta tags, Open Graph, Twitter Cards, Schema.org (FAQPage + SoftwareApplication), sitemap.xml, robots.txt

## Plano Comercial

| Item | Valor |
|------|-------|
| Plano Starter | R$ 249/mes |
| Usuarios inclusos | 5 (admin + 4) |
| Conexao QR Code | 1 |
| Teste gratis | 5 dias |
| Fidelidade | Nenhuma |
| Usuario extra | R$ 25/mes |
| Conexao QR extra | R$ 200/mes |

## Desenvolvimento

```bash
# Instalar dependencias
npm install

# Rodar em desenvolvimento
npm run dev

# Build de producao
npm run build

# Iniciar producao
npm start
```

## Estrutura

```
src/
├── app/
│   ├── globals.css        # Estilos globais + animacoes
│   ├── layout.tsx         # Layout com SEO completo
│   ├── page.tsx           # Pagina principal
│   ├── robots.ts          # robots.txt
│   └── sitemap.ts         # sitemap.xml
└── components/
    ├── animate-on-scroll.tsx  # Componente de animacao
    ├── cta-final.tsx
    ├── faq.tsx
    ├── features.tsx
    ├── footer.tsx
    ├── hero.tsx
    ├── how-it-works.tsx
    ├── json-ld.tsx           # Schema.org structured data
    ├── navbar.tsx
    ├── pricing.tsx
    ├── problem.tsx
    ├── social-proof.tsx
    ├── solution.tsx
    └── stats.tsx
```

## Links

- **WhatsApp:** [wa.me/5511914826568](https://wa.me/5511914826568)
- **Cadastro:** [mepchat.agenciamep.com/cadastro](https://mepchat.agenciamep.com/cadastro)
- **Painel:** [mepchat.agenciamep.com](https://mepchat.agenciamep.com)
