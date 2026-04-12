import { AnimateOnScroll } from "./animate-on-scroll";

const solutions = [
  {
    title: "Saiba exatamente quem atendeu",
    desc: "Cada atendente tem seu login. Histórico completo com nome de quem respondeu.",
  },
  {
    title: "Transfira chats entre setores",
    desc: "Vendas, suporte, financeiro \u2014 encaminhe o chat sem perder o histórico.",
  },
  {
    title: "Troque de número em 10 segundos",
    desc: "Basta escanear um novo QR Code. Sem custo, sem reconfigurar nada.",
  },
];

const icons = [
  <svg key="1" className="h-6 w-6 text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>,
  <svg key="2" className="h-6 w-6 text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" /></svg>,
  <svg key="3" className="h-6 w-6 text-[#25D366]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" /></svg>,
];

export function Solution() {
  return (
    <section className="px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <div className="mb-10 max-w-xl">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#25D366]">
              A solução
            </p>
            <h2 className="mb-3 text-2xl font-bold leading-tight sm:text-3xl">
              MepChat resolve tudo isso
            </h2>
            <p className="text-sm leading-relaxed text-white/50">
              Conecte seu WhatsApp em segundos via QR Code e tenha controle total.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-4 sm:grid-cols-3">
          {solutions.map((s, i) => (
            <AnimateOnScroll key={s.title} delay={i * 100}>
              <div className="h-full rounded-2xl border border-[#25D366]/10 bg-[#25D366]/5 p-6 transition hover:border-[#25D366]/25">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#25D366]/10">
                  {icons[i]}
                </div>
                <h4 className="mb-2 text-sm font-bold">{s.title}</h4>
                <p className="text-xs leading-relaxed text-white/50">{s.desc}</p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
