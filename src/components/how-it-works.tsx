import { AnimateOnScroll } from "./animate-on-scroll";

const steps = [
  {
    number: "01",
    title: "Crie sua conta",
    desc: "Cadastro rápido, sem burocracia. CPF ou CNPJ, sem consulta. Em menos de 2 minutos você está dentro.",
    icon: (
      <svg className="h-8 w-8 text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Conecte o WhatsApp",
    desc: "Escaneie o QR Code com seu celular — igual ao WhatsApp Web. Sem API, sem aprovação, sem espera.",
    icon: (
      <svg className="h-8 w-8 text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 013.75 9.375v-4.5zM3.75 14.625c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5a1.125 1.125 0 01-1.125-1.125v-4.5zM13.5 4.875c0-.621.504-1.125 1.125-1.125h4.5c.621 0 1.125.504 1.125 1.125v4.5c0 .621-.504 1.125-1.125 1.125h-4.5A1.125 1.125 0 0113.5 9.375v-4.5z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 6.75h.75v.75h-.75v-.75zM6.75 16.5h.75v.75h-.75v-.75zM16.5 6.75h.75v.75h-.75v-.75zM13.5 13.5h.75v.75h-.75v-.75zM13.5 19.5h.75v.75h-.75v-.75zM19.5 13.5h.75v.75h-.75v-.75zM19.5 19.5h.75v.75h-.75v-.75zM16.5 16.5h.75v.75h-.75v-.75z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Comece a atender",
    desc: "Adicione sua equipe, configure os setores e pronto. Fazemos o treinamento completo com você.",
    icon: (
      <svg className="h-8 w-8 text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
      </svg>
    ),
  },
];

export function HowItWorks() {
  return (
    <section className="px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <div className="mb-12 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#25D366]">
              Como funciona
            </p>
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
              Comece em menos de 5 minutos
            </h2>
            <p className="mx-auto max-w-lg text-sm leading-relaxed text-white/50">
              Três passos simples e sua equipe já está atendendo pelo MepChat.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="relative grid gap-6 sm:grid-cols-3">
          {/* Connection line */}
          <div className="pointer-events-none absolute left-0 right-0 top-16 hidden h-px bg-gradient-to-r from-transparent via-[#25D366]/20 to-transparent sm:block" />

          {steps.map((step, i) => (
            <AnimateOnScroll key={step.number} delay={i * 150}>
              <div className="relative text-center">
                {/* Number circle */}
                <div className="relative mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-2xl border border-[#25D366]/15 bg-[#25D366]/5">
                  <div className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#25D366] text-xs font-bold text-[#0f172a]">
                    {step.number}
                  </div>
                  {step.icon}
                </div>
                <h3 className="mb-2 text-lg font-bold">{step.title}</h3>
                <p className="mx-auto max-w-xs text-sm leading-relaxed text-white/50">
                  {step.desc}
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
