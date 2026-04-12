"use client";

import { useEffect, useRef, useState } from "react";
import { AnimateOnScroll } from "./animate-on-scroll";

function AnimatedNumber({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const duration = 1500;
          const start = Date.now();
          const animate = () => {
            const elapsed = Date.now() - start;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString("pt-BR")}
      {suffix}
    </span>
  );
}

const stats = [
  { value: 500, suffix: "+", label: "Empresas atendidas" },
  { value: 2000, suffix: "+", label: "Atendentes ativos" },
  { value: 99, suffix: "%", label: "Uptime garantido" },
  { value: 5, suffix: " min", label: "Pra começar a usar" },
];

export function Stats() {
  return (
    <section className="border-y border-[#25D366]/10 bg-gradient-to-r from-[#0f172a] via-[#132a1e] to-[#0f172a] px-6 py-14">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <p className="mb-1 text-3xl font-extrabold text-[#25D366] sm:text-4xl">
                  <AnimatedNumber target={s.value} suffix={s.suffix} />
                </p>
                <p className="text-xs font-medium uppercase tracking-wider text-white/40">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </AnimateOnScroll>
      </div>
    </section>
  );
}
