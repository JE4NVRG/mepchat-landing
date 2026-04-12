import type { Metadata } from "next";
import { JsonLd } from "@/components/json-ld";
import "./globals.css";

export const metadata: Metadata = {
  title: "MepChat — Atendimento WhatsApp com Múltiplos Atendentes",
  description:
    "Plataforma de atendimento via WhatsApp com múltiplos atendentes. Saiba quem atendeu cada cliente, transfira chats entre setores e troque de número via QR Code. Teste 5 dias grátis.",
  keywords: [
    "atendimento whatsapp",
    "múltiplos atendentes",
    "whatsapp para empresas",
    "multi atendimento whatsapp",
    "plataforma atendimento whatsapp",
    "whatsapp vários atendentes",
    "sistema atendimento whatsapp",
  ],
  metadataBase: new URL("https://mepchat.je4ndev.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "MepChat — Atendimento WhatsApp com Múltiplos Atendentes",
    description:
      "Saiba quem atendeu cada cliente, transfira chats entre setores e troque de número via QR Code. Teste 5 dias grátis.",
    url: "https://mepchat.je4ndev.com",
    siteName: "MepChat",
    locale: "pt_BR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "MepChat — Atendimento WhatsApp com Múltiplos Atendentes",
    description:
      "Múltiplos atendentes no mesmo WhatsApp com controle total. Teste 5 dias grátis.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="antialiased">
      <body>
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
