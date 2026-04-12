const softwareApp = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "MepChat",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  description:
    "Plataforma de atendimento via WhatsApp com multiplos atendentes, controle de quem atendeu, transferencia entre setores e conexao via QR Code.",
  offers: {
    "@type": "Offer",
    price: "249.00",
    priceCurrency: "BRL",
    priceValidUntil: "2026-12-31",
  },
  aggregateRating: undefined,
};

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Preciso da API oficial do WhatsApp?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nao. O MepChat conecta via QR Code, igual ao WhatsApp Web. Basta escanear e pronto.",
      },
    },
    {
      "@type": "Question",
      name: "Posso trocar de numero sem perder nada?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim! Basta escanear um novo QR Code. Seus contatos salvos ficam no sistema. Sem custo adicional.",
      },
    },
    {
      "@type": "Question",
      name: "Quantos atendentes posso ter?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "O plano Starter inclui 5 usuarios. Pode adicionar mais por R$ 25/mes cada, sem limite.",
      },
    },
    {
      "@type": "Question",
      name: "Tem contrato ou fidelidade?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Nao. Voce pode cancelar a qualquer momento sem multa.",
      },
    },
    {
      "@type": "Question",
      name: "Como funciona o teste gratis?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Voce cria sua conta, conecta o WhatsApp e usa todos os recursos por 5 dias sem pagar nada.",
      },
    },
    {
      "@type": "Question",
      name: "Tem suporte?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Sim, suporte via WhatsApp em horario comercial. Alem disso, fazemos o treinamento completo da sua equipe.",
      },
    },
  ],
};

export function JsonLd() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApp) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
