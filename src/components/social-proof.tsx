"use client";

import Image from "next/image";
import { AnimateOnScroll } from "./animate-on-scroll";

const testimonials = [
  {
    name: "Carla Mendes",
    role: "Dona de clínica estética",
    text: "Antes eu não sabia quem tinha respondido o cliente. Agora tenho controle total, sei quem atendeu e consigo cobrar resultado da minha equipe.",
    rating: 5,
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
  },
  {
    name: "Rafael Oliveira",
    role: "Gerente comercial — Imobiliária",
    text: "Minha equipe de 6 corretores usa o mesmo WhatsApp agora. Transferir o chat pra outro setor sem perder histórico mudou nosso atendimento.",
    rating: 5,
    photo: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Juliana Costa",
    role: "Proprietária de e-commerce",
    text: "O teste grátis me convenceu em 2 dias. A troca de número por QR Code é sensacional, já troquei 3 vezes sem perder nenhum contato.",
    rating: 5,
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
  },
  {
    name: "Marcos Ferreira",
    role: "Dono de oficina mecânica",
    text: "Simples de usar, meus funcionários aprenderam em 10 minutos. O Kanban pra organizar os atendimentos foi um bônus que não esperava.",
    rating: 4,
    photo: "https://randomuser.me/api/portraits/men/75.jpg",
  },
  {
    name: "Patrícia Lima",
    role: "Gestora de academia",
    text: "Sem contrato e sem fidelidade foi o que me fez testar. Resultado: 3 meses usando e não troco por nada. Suporte rápido e treinamento excelente.",
    rating: 5,
    photo: "https://randomuser.me/api/portraits/women/26.jpg",
  },
  {
    name: "Diego Santos",
    role: "Sócio de agência de marketing",
    text: "Gerencio o WhatsApp de 4 clientes diferentes pelo MepChat. Os níveis de acesso permitem que cada equipe veja só o que precisa.",
    rating: 5,
    photo: "https://randomuser.me/api/portraits/men/22.jpg",
  },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`h-4 w-4 ${i < count ? "text-amber-400" : "text-white/10"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function SocialProof() {
  return (
    <section className="bg-[#0f0f12] px-6 py-16 lg:py-20">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <div className="mb-10 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-widest text-[#25D366]">
              Prova social
            </p>
            <h2 className="mb-3 text-2xl font-bold sm:text-3xl">
              Quem usa, recomenda
            </h2>
            <p className="mx-auto max-w-lg text-sm leading-relaxed text-white/50">
              Veja o que nossos clientes dizem sobre o MepChat.
            </p>

            {/* Rating summary */}
            <div className="mt-6 inline-flex items-center gap-3 rounded-full border border-amber-400/20 bg-amber-400/5 px-6 py-2.5">
              <Stars count={5} />
              <span className="text-sm font-bold text-amber-400">4.9</span>
              <span className="text-xs text-white/40">de 5.0</span>
            </div>
          </div>
        </AnimateOnScroll>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <AnimateOnScroll key={t.name} delay={i * 80}>
              <div className="group h-full rounded-2xl border border-white/6 bg-white/[0.02] p-6 transition hover:border-[#25D366]/15 hover:bg-white/[0.04]">
                {/* Header */}
                <div className="mb-4 flex items-center gap-3">
                  <Image
                    src={t.photo}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="h-12 w-12 shrink-0 rounded-full object-cover ring-2 ring-[#25D366]/20"
                  />
                  <div>
                    <p className="text-sm font-bold">{t.name}</p>
                    <p className="text-xs text-white/40">{t.role}</p>
                  </div>
                </div>

                {/* Stars */}
                <div className="mb-3">
                  <Stars count={t.rating} />
                </div>

                {/* Text */}
                <p className="text-sm leading-relaxed text-white/60">
                  &ldquo;{t.text}&rdquo;
                </p>
              </div>
            </AnimateOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
}
