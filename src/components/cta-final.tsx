const WHATSAPP_LINK =
  "https://wa.me/5511914826568?text=Ol%C3%A1%2C%20quero%20conhecer%20o%20MepChat!";
const CADASTRO_LINK = "https://mepchat.agenciamep.com/cadastro";

export function CtaFinal() {
  return (
    <section className="px-6 py-16">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-2xl border border-[#25D366]/20 bg-gradient-to-br from-[#0f172a] to-[#132a1e] p-10 text-center sm:p-14">
          <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
            Pronto pra organizar seu atendimento?
          </h2>
          <p className="mb-8 text-sm text-white/60">
            Comece agora com 5 dias grátis. Sem cartão, sem compromisso.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-[#25D366] px-6 py-3 text-sm font-semibold text-[#0f172a] transition hover:bg-[#1da851]"
            >
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.124.553 4.12 1.519 5.857L.058 23.643l5.932-1.557A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75c-1.97 0-3.837-.53-5.445-1.454l-.39-.232-3.516.922.938-3.426-.254-.404A9.713 9.713 0 012.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z" />
              </svg>
              Falar no WhatsApp
            </a>
            <a
              href={CADASTRO_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-[#25D366]/40 px-6 py-3 text-sm font-medium text-[#25D366] transition hover:bg-[#25D366]/10"
            >
              Criar conta grátis
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
