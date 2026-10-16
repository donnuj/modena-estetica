"use client";

import { motion, useReducedMotion } from "motion/react";

const fotos = [
  { seed: "polished-black-car-wet-reflections", label: "Polimento completo" },
  { seed: "car-ceramic-coating-shine", label: "Vitrificacao Carbon 9H" },
  { seed: "luxury-car-detail-wheel-chrome", label: "Detalhamento de rodas" },
  { seed: "dark-car-after-wash-studio", label: "Lavagem tecnica" },
  { seed: "car-engine-clean-detail", label: "Higienizacao interna" },
  { seed: "black-suv-polished-evening", label: "Resultado final" },
];

export default function Galeria() {
  const reduce = useReducedMotion();

  return (
    <section id="galeria" className="py-28 md:py-36 overflow-hidden">
      <div className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto mb-14">
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          <h2
            className="font-display leading-none tracking-wider text-white"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
            }}
          >
            RESULTADOS
          </h2>
          <p
            className="mt-3 text-[15px] max-w-[380px] leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Cada trabalho conta uma historia. A Modena entrega transformacao real.
          </p>
        </motion.div>
      </div>

      {/* Masonry-style grid */}
      <div className="px-6 md:px-12 lg:px-20 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {fotos.map((foto, i) => (
            <motion.div
              key={foto.seed}
              initial={reduce ? false : { opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: i * 0.06,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="group relative overflow-hidden rounded-2xl"
              style={{
                aspectRatio: i % 3 === 0 ? "4/3" : "3/4",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://picsum.photos/seed/${foto.seed}/${i % 3 === 0 ? "800/600" : "600/800"}`}
                alt={foto.label}
                className="w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
                style={{ filter: "brightness(0.7) contrast(1.05) saturate(0.9)" }}
              />

              {/* Label on hover */}
              <div
                className="absolute inset-0 flex items-end p-5 transition-opacity duration-400"
                style={{
                  background: "linear-gradient(to top, rgba(6,8,8,0.80) 0%, transparent 60%)",
                  opacity: 0,
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.opacity = "1"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.opacity = "0"; }}
              >
                <span
                  className="text-[12px] uppercase tracking-[0.16em] text-white/70 font-medium"
                >
                  {foto.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* TODO: substituir picsum por fotos reais dos trabalhos da Modena */}
    </section>
  );
}
