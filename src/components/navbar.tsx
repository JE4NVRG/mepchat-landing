"use client";

import { useState } from "react";

const WHATSAPP_LINK =
  "https://wa.me/5511914826568?text=Ol%C3%A1%2C%20quero%20conhecer%20o%20MepChat!";
const CADASTRO_LINK = "https://mepchat.agenciamep.com/cadastro";

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/5 bg-[#0f172a]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#" className="text-xl font-bold tracking-wide">
          <span className="text-[#25D366]">Mep</span>Chat
        </a>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          <a href="#funcionalidades" className="text-sm text-white/60 transition hover:text-white">
            Funcionalidades
          </a>
          <a href="#precos" className="text-sm text-white/60 transition hover:text-white">
            Preços
          </a>
          <a href="#faq" className="text-sm text-white/60 transition hover:text-white">
            FAQ
          </a>
          <a
            href={CADASTRO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-lg border border-[#25D366]/40 px-4 py-2 text-sm font-medium text-[#25D366] transition hover:bg-[#25D366]/10"
          >
            Teste Grátis
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-1.5 md:hidden"
          aria-label="Menu"
        >
          <span className={`h-0.5 w-6 bg-white transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 bg-white transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-white/5 px-6 pb-4 md:hidden">
          <a href="#funcionalidades" onClick={() => setOpen(false)} className="block py-3 text-sm text-white/60">
            Funcionalidades
          </a>
          <a href="#precos" onClick={() => setOpen(false)} className="block py-3 text-sm text-white/60">
            Preços
          </a>
          <a href="#faq" onClick={() => setOpen(false)} className="block py-3 text-sm text-white/60">
            FAQ
          </a>
          <a
            href={CADASTRO_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 block rounded-lg border border-[#25D366]/40 px-4 py-2 text-center text-sm font-medium text-[#25D366]"
          >
            Teste Grátis
          </a>
        </div>
      )}
    </nav>
  );
}
