import { AnimateOnScroll } from "./animate-on-scroll";

const CADASTRO_LINK = "https://mepchat.agenciamep.com/cadastro";

const includes = [
  "5 usuários (admin + 4 atendentes)",
  "1 conexão WhatsApp (QR Code)",
  "Kanban incluso",
  "Departamentos e setores",
  "Fluxo de Bot",
  "Relatórios e dashboard",
  "Treinamento completo",
  "Suporte em horário comercial",
];

const addons = [
  { name: "Usuário extra", price: "R$ 25/mês" },
  { name: "Conexão QR extra", price: "R$ 200/mês" },
  { name: "Disparos de mensagem", price: "R$ 129/mês" },
  { name: "Chat Interno", price: "R$ 89/mês" },
  { name: "Calendário eventos", price: "R$ 139/mês" },
  { name: "API do Sistema", price: "R$ 129/mês" },
  { name: "Gestão de grupos", price: "R$ 99/mês" },
  { name: "Discador de chamadas", price: "R$ 49/mês" },
];

export function Pricing() {
  return (
    <section id="precos" className="px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#25D366]">
              Investimento
            </p>
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
              Plano único, simples e justo
            </h2>
            <p className="mx-auto max-w-lg text-sm leading-relaxed text-white/50">
              Sem surpresas. Um plano completo com tudo que você precisa pra começar.
            </p>
          </div>
        </AnimateOnScroll>

        <div className="mx-auto grid max-w-3xl gap-8 lg:grid-cols-2">
          {/* Pricing card */}
          <AnimateOnScroll>
            <div className="rounded-2xl border border-[#25D366]/20 bg-gradient-to-br from-[#25D366]/8 to-[#25D366]/[0.02] p-8">
              <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-[#25D366]">
                Starter
              </p>
              <p className="mb-1 text-5xl font-extrabold">
                R$ 249<span className="text-lg font-normal text-white/40">/mês</span>
              </p>
              <p className="mb-4 text-xs text-white/35">Cancele quando quiser</p>

              {/* Badges sem fidelidade */}
              <div className="mb-6 flex flex-wrap gap-2">
                <span className="rounded-full border border-amber-400/20 bg-amber-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-amber-400">
                  Sem fidelidade
                </span>
                <span className="rounded-full border border-sky-400/20 bg-sky-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-sky-400">
                  Sem contrato
                </span>
                <span className="rounded-full border border-purple-400/20 bg-purple-400/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-purple-400">
                  CPF e CNPJ
                </span>
              </div>

              <ul className="mb-8 space-y-3">
                {includes.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-white/80">
                    <span className="mt-0.5 text-[#25D366]">&#10003;</span>
                    {item}
                  </li>
                ))}
              </ul>

              <a
                href={CADASTRO_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="animate-pulse-glow block w-full rounded-xl bg-[#25D366] py-4 text-center text-sm font-bold text-[#0f172a] transition hover:bg-[#1da851]"
              >
                Testar 5 dias grátis
              </a>
            </div>
          </AnimateOnScroll>

          {/* Addons */}
          <AnimateOnScroll delay={150}>
            <div>
              <h3 className="mb-4 text-base font-bold">
                Precisa de mais? Adicione sob demanda:
              </h3>
              <div className="rounded-2xl border border-white/6 bg-white/[0.02] p-5">
                {addons.map((a, i) => (
                  <div
                    key={a.name}
                    className={`flex items-center justify-between py-3 text-sm ${i < addons.length - 1 ? "border-b border-white/5" : ""}`}
                  >
                    <span className="text-white/70">{a.name}</span>
                    <span className="font-semibold text-[#25D366]">{a.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </AnimateOnScroll>
        </div>
      </div>
    </section>
  );
}
