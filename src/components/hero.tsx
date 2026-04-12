const WHATSAPP_LINK =
  "https://wa.me/5511914826568?text=Ol%C3%A1%2C%20quero%20conhecer%20o%20MepChat!";
const CADASTRO_LINK = "https://mepchat.agenciamep.com/cadastro";

function HeroIllustration() {
  return (
    <div className="animate-float mx-auto mb-10 w-64 sm:w-80">
      <svg viewBox="0 0 320 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Phone */}
        <rect x="120" y="20" width="80" height="140" rx="12" fill="#1e293b" stroke="#25D366" strokeWidth="1.5" />
        <rect x="128" y="36" width="64" height="100" rx="4" fill="#0f172a" />
        <circle cx="160" cy="150" r="4" fill="#25D366" opacity="0.5" />
        {/* Chat bubbles */}
        <rect x="132" y="42" width="40" height="10" rx="5" fill="#25D366" opacity="0.8" />
        <rect x="148" y="58" width="40" height="10" rx="5" fill="#334155" />
        <rect x="132" y="74" width="36" height="10" rx="5" fill="#25D366" opacity="0.6" />
        <rect x="152" y="90" width="36" height="10" rx="5" fill="#334155" />
        {/* Person 1 */}
        <circle cx="50" cy="70" r="20" fill="#1e293b" stroke="#25D366" strokeWidth="1" />
        <circle cx="50" cy="64" r="8" fill="#25D366" opacity="0.3" />
        <path d="M36 82 a14 10 0 0 1 28 0" fill="#25D366" opacity="0.2" />
        <text x="50" y="68" textAnchor="middle" fill="#25D366" fontSize="8" fontWeight="bold">P1</text>
        {/* Person 2 */}
        <circle cx="270" cy="70" r="20" fill="#1e293b" stroke="#25D366" strokeWidth="1" />
        <circle cx="270" cy="64" r="8" fill="#25D366" opacity="0.3" />
        <path d="M256 82 a14 10 0 0 1 28 0" fill="#25D366" opacity="0.2" />
        <text x="270" y="68" textAnchor="middle" fill="#25D366" fontSize="8" fontWeight="bold">P2</text>
        {/* Person 3 */}
        <circle cx="270" cy="140" r="20" fill="#1e293b" stroke="#25D366" strokeWidth="1" />
        <circle cx="270" cy="134" r="8" fill="#25D366" opacity="0.3" />
        <path d="M256 152 a14 10 0 0 1 28 0" fill="#25D366" opacity="0.2" />
        <text x="270" y="138" textAnchor="middle" fill="#25D366" fontSize="8" fontWeight="bold">P3</text>
        {/* Connection lines */}
        <line x1="70" y1="70" x2="120" y2="70" stroke="#25D366" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
        <line x1="200" y1="70" x2="250" y2="70" stroke="#25D366" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
        <line x1="200" y1="110" x2="250" y2="140" stroke="#25D366" strokeWidth="1" strokeDasharray="4 3" opacity="0.4" />
        {/* Arrows */}
        <polygon points="118,67 118,73 112,70" fill="#25D366" opacity="0.5" />
        <polygon points="252,67 252,73 248,70" fill="#25D366" opacity="0.5" />
        {/* QR Code mini */}
        <rect x="40" y="110" width="20" height="20" rx="2" fill="#0f172a" stroke="#25D366" strokeWidth="0.8" />
        <rect x="44" y="114" width="5" height="5" fill="#25D366" opacity="0.6" />
        <rect x="51" y="114" width="5" height="5" fill="#25D366" opacity="0.4" />
        <rect x="44" y="121" width="5" height="5" fill="#25D366" opacity="0.4" />
        <rect x="51" y="121" width="5" height="5" fill="#25D366" opacity="0.6" />
      </svg>
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] px-6 py-14 sm:py-16 lg:py-20">
      {/* Glows */}
      <div className="pointer-events-none absolute -right-32 -top-32 h-96 w-96 rounded-full bg-[radial-gradient(circle,rgba(37,211,102,0.15)_0%,transparent_70%)]" />
      <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-[radial-gradient(circle,rgba(37,211,102,0.08)_0%,transparent_70%)]" />

      <div className="relative mx-auto max-w-4xl text-center">
        {/* Badges */}
        <div className="mb-6 flex flex-wrap justify-center gap-3">
          <span className="inline-block rounded-full border border-[#25D366]/25 bg-[#25D366]/10 px-5 py-1.5 text-xs font-medium uppercase tracking-widest text-[#25D366]">
            Teste 5 dias grátis
          </span>
          <span className="inline-block rounded-full border border-amber-400/25 bg-amber-400/10 px-5 py-1.5 text-xs font-medium uppercase tracking-widest text-amber-400">
            Sem fidelidade
          </span>
        </div>

        <h1 className="mb-6 text-4xl font-extrabold leading-[1.15] sm:text-5xl lg:text-6xl">
          Saiba quem está atendendo{" "}
          <br className="hidden sm:block" />
          seus clientes no{" "}
          <span className="bg-gradient-to-r from-[#25D366] to-[#1da851] bg-clip-text text-transparent">
            WhatsApp
          </span>
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-base leading-relaxed text-white/60 sm:text-lg">
          Múltiplos atendentes no mesmo número, controle total de quem atendeu,
          transferência entre setores e histórico completo. Conecte via QR Code
          em segundos.
        </p>

        <div className="mb-8 flex flex-wrap justify-center gap-4">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="animate-pulse-glow inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-8 py-4 text-base font-bold text-[#0f172a] transition hover:bg-[#1da851]"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.12 1.519 5.857L.058 23.643l5.932-1.557A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.97 0-3.837-.53-5.445-1.454l-.39-.232-3.516.922.938-3.426-.254-.404A9.713 9.713 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
            </svg>
            Falar no WhatsApp
          </a>
          <a
            href={CADASTRO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-xl border border-[#25D366]/40 px-8 py-4 text-base font-semibold text-[#25D366] transition hover:bg-[#25D366]/10"
          >
            Criar conta grátis
          </a>
        </div>

        {/* Illustration */}
        <HeroIllustration />

        {/* Feature bar */}
        <div className="mx-auto max-w-2xl rounded-2xl border border-[#25D366]/15 bg-[#25D366]/5 p-5 backdrop-blur-sm">
          <div className="flex">
            <div className="flex-1 text-center">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-[#25D366]">
                Controle
              </div>
              <div className="mt-1.5 text-sm text-white/80">
                Quem atendeu cada cliente
              </div>
            </div>
            <div className="w-px bg-[#25D366]/20" />
            <div className="flex-1 text-center">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-[#25D366]">
                QR Code
              </div>
              <div className="mt-1.5 text-sm text-white/80">
                Troca de número sem custo
              </div>
            </div>
            <div className="w-px bg-[#25D366]/20" />
            <div className="flex-1 text-center">
              <div className="text-[11px] font-semibold uppercase tracking-widest text-[#25D366]">
                Acesso
              </div>
              <div className="mt-1.5 text-sm text-white/80">
                Níveis admin e atendente
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
