import { AnimateOnScroll } from "./animate-on-scroll";

const problems = [
  {
    title: "Sem controle de quem atendeu",
    desc: "Cliente reclama e ninguém sabe quem respondeu. Impossível cobrar responsabilidade.",
    color: "red",
  },
  {
    title: "Conversas se perdem",
    desc: "Um atendente começa, outro continua sem contexto. Cliente repete tudo de novo.",
    color: "red",
  },
  {
    title: "Trocar de número é dor de cabeça",
    desc: "Precisa reconfigurar tudo, perder contatos e avisar todo mundo.",
    color: "red",
  },
];

export function Problem() {
  return (
    <section className="bg-[#0f0f12] px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <div className="mb-10 max-w-xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#25D366]">
              O problema
            </p>
            <h2 className="mb-3 text-2xl font-bold leading-tight sm:text-3xl">
              Você sabe quem está atendendo seus clientes agora?
            </h2>
            <p className="text-sm leading-relaxed text-white/50">
              Se mais de uma pessoa usa o mesmo WhatsApp na sua empresa, você já
              enfrentou isso:
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-4 sm:grid-cols-3">
          {problems.map((p, i) => (
            <AnimateOnScroll key={p.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-red-500/10 bg-red-500/5 p-6 transition hover:border-red-500/20">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/10">
                  <svg className="h-6 w-6 text-red-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z" />
                  </svg>
                </div>
                <h4 className="mb-2 text-sm font-bold">{p.title}</h4>
                <p className="text-xs leading-relaxed text-white/50">{p.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
