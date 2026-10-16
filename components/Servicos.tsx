"use client";

import { motion, useReducedMotion } from "motion/react";
import { Drop, ShieldCheck, Sparkle, Wrench, Hexagon } from "@phosphor-icons/react";

const EASE = [0.16, 1, 0.3, 1] as const;

const servicos = [
  {
    icon: Drop,
    title: "Lavagem Técnica",
    desc: "Processo minucioso com produtos premium que removem contaminantes sem agredir a pintura original.",
    cor: "#CC1814",
    placement: { gridColumn: "1", gridRow: "1" },
  },
  {
    icon: Sparkle,
    title: "Polimento",
    desc: "Restauração e realce do brilho original. Eliminamos arranhões e oxidação de forma definitiva.",
    cor: "#009246",
    placement: { gridColumn: "2", gridRow: "1" },
  },
  {
    icon: ShieldCheck,
    title: "Vitrificação",
    desc: "Revestimento cerâmico de alta performance. Proteção duradoura com acabamento espelhado.",
    cor: "#CC1814",
    placement: { gridColumn: "1", gridRow: "2" },
  },
  {
    icon: Wrench,
    title: "Proteção de Chassis",
    desc: "Tratamento anti-ferrugem e blindagem estrutural da parte inferior do veículo.",
    cor: "#009246",
    placement: { gridColumn: "2", gridRow: "2" },
  },
  {
    icon: Hexagon,
    title: "Carbon 9H",
    desc: "Nano-cerâmico grau 9H. Dureza extrema, brilho absoluto. O tratamento mais avançado do mercado. Proteção de até 5 anos com resistência química e térmica incomparável.",
    cor: "#CC1814",
    placement: { gridColumn: "3", gridRow: "1 / span 2" },
    featured: true,
  },
];

export default function Servicos() {
  const reduce = useReducedMotion();

  return (
    <section id="servicos" style={{ padding: "112px 0", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 24, marginBottom: 56 }}>
          <motion.h2
            initial={reduce ? false : { opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7, ease: EASE }}
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              lineHeight: 1,
              letterSpacing: "0.04em",
              color: "#F0F0F0",
              margin: 0,
            }}
          >
            NOSSOS<br />SERVIÇOS
          </motion.h2>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7, maxWidth: 280, margin: 0 }}
          >
            Cada serviço é executado com os melhores produtos e técnicas disponíveis no mercado.
          </motion.p>
        </div>

        {/* Bento grid — 3 colunas, Carbon 9H ocupa a col 3 em ambas as linhas */}
        <div
          id="servicos-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "auto auto",
            gap: 12,
          }}
        >
          {servicos.map((s, i) => {
            const Icon = s.icon;

            return (
              <motion.div
                key={s.title}
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.12 }}
                transition={{ duration: 0.65, delay: i * 0.07, ease: EASE }}
                style={{
                  ...s.placement,
                  position: "relative",
                  borderRadius: 24,
                  padding: 2,
                  background: s.featured
                    ? `linear-gradient(135deg, ${s.cor}22 0%, rgba(255,255,255,0.05) 100%)`
                    : "rgba(255,255,255,0.04)",
                  border: s.featured
                    ? `1px solid ${s.cor}30`
                    : "1px solid rgba(255,255,255,0.08)",
                  boxShadow: s.featured
                    ? `inset 0 1px 0 rgba(255,255,255,0.08), 0 0 40px ${s.cor}10`
                    : "inset 0 1px 0 rgba(255,255,255,0.05)",
                }}
              >
                {/* Faixa de cor no topo */}
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 32,
                    right: 32,
                    height: 2,
                    borderRadius: "0 0 4px 4px",
                    background: s.cor,
                    opacity: s.featured ? 1 : 0.7,
                  }}
                />

                {/* Inner card */}
                <div
                  style={{
                    borderRadius: 22,
                    background: "var(--surface)",
                    padding: s.featured ? "40px 32px" : "32px 28px",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    gap: 20,
                    boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                    minHeight: s.featured ? 0 : 200,
                  }}
                >
                  {/* Ícone */}
                  <div
                    style={{
                      width: 44,
                      height: 44,
                      borderRadius: 12,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      background: `${s.cor}18`,
                      border: `1px solid ${s.cor}30`,
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={22} weight="light" style={{ color: s.cor }} />
                  </div>

                  {/* Texto */}
                  <div style={{ flex: 1, display: "flex", flexDirection: "column", gap: 10 }}>
                    <h3
                      style={{
                        fontFamily: "var(--font-bebas)",
                        fontSize: s.featured ? "2.2rem" : "1.75rem",
                        letterSpacing: "0.04em",
                        color: "#F0F0F0",
                        lineHeight: 1,
                        margin: 0,
                      }}
                    >
                      {s.title}
                    </h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                      {s.desc}
                    </p>
                  </div>

                  {/* Badge premium no Carbon 9H */}
                  {s.featured && (
                    <div
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        padding: "6px 12px",
                        borderRadius: 6,
                        background: `${s.cor}18`,
                        border: `1px solid ${s.cor}30`,
                        width: "fit-content",
                      }}
                    >
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: s.cor }} />
                      <span style={{ color: s.cor, fontSize: 10, letterSpacing: "0.18em", textTransform: "uppercase", fontWeight: 600 }}>
                        Máxima proteção
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: 1 coluna */}
        <style>{`
          @media (max-width: 767px) {
            #servicos-grid > div {
              grid-column: 1 !important;
              grid-row: auto !important;
            }
          }
          @media (max-width: 900px) and (min-width: 768px) {
            #servicos-grid {
              grid-template-columns: repeat(2, 1fr) !important;
            }
            #servicos-grid > div {
              grid-column: auto !important;
              grid-row: auto !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
