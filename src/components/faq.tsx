"use client";

import { useState } from "react";
import { AnimateOnScroll } from "./animate-on-scroll";

const faqs = [
  {
    q: "Preciso da API oficial do WhatsApp?",
    a: "Não. O MepChat conecta via QR Code, igual ao WhatsApp Web. Basta escanear e pronto.",
  },
  {
    q: "Posso trocar de número sem perder nada?",
    a: "Sim! Basta escanear um novo QR Code. Seus contatos salvos ficam no sistema. Sem custo adicional.",
  },
  {
    q: "Quantos atendentes posso ter?",
    a: "O plano Starter inclui 5 usuários. Pode adicionar mais por R$ 25/mês cada, sem limite.",
  },
  {
    q: "Tem contrato ou fidelidade?",
    a: "Não. Você pode cancelar a qualquer momento sem multa. Sem fidelidade, sem burocracia.",
  },
  {
    q: "Como funciona o teste grátis?",
    a: "Você cria sua conta, conecta o WhatsApp e usa todos os recursos por 5 dias sem pagar nada.",
  },
  {
    q: "Tem suporte?",
    a: "Sim, suporte via WhatsApp em horário comercial. Além disso, fazemos o treinamento completo da sua equipe.",
  },
];

export function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#25D366]">
              Dúvidas frequentes
            </p>
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
              Perguntas frequentes
            </h2>
            <p className="mx-auto max-w-lg text-sm leading-relaxed text-white/50">
              Tire suas dúvidas antes de começar.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mx-auto max-w-2xl">
          {faqs.map((faq, i) => (
            <AnimateOnScroll key={faq.q} delay={i * 60}>
              <div className="mb-3 overflow-hidden rounded-xl border border-white/6 bg-white/[0.02] transition hover:border-white/10">
                <button
                  onClick={() => setOpenIndex(openIndex === i ? null : i)}
                  className="flex w-full items-center justify-between px-6 py-5 text-left"
                >
                  <span className="pr-4 text-sm font-semibold">{faq.q}</span>
                  <div
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border transition ${
                      openIndex === i
                        ? "border-[#25D366]/30 bg-[#25D366]/10"
                        : "border-white/10 bg-white/5"
                    }`}
                  >
                    <svg
                      className={`h-4 w-4 transition ${
                        openIndex === i ? "rotate-180 text-[#25D366]" : "text-white/40"
                      }`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2}
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    openIndex === i ? "max-h-40 pb-5" : "max-h-0"
                  }`}
                >
                  <p className="px-6 text-sm leading-relaxed text-white/55">
                    {faq.a}
                  </p>
                </div>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
