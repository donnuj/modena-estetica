"use client";

import { motion, useReducedMotion } from "motion/react";
import { Drop, ShieldCheck, Sparkle, Wrench, Hexagon } from "@phosphor-icons/react";

const servicos = [
  {
    icon: Drop,
    title: "Lavagem Tecnica",
    desc: "Processo minucioso com produtos premium que removem contaminantes sem agredir a pintura original.",
    cor: "#CC1814",
  },
  {
    icon: Sparkle,
    title: "Polimento",
    desc: "Restauracao e realce do brilho original. Eliminamos arranhoes e oxidacao de forma definitiva.",
    cor: "#009246",
  },
  {
    icon: ShieldCheck,
    title: "Vitrificacao",
    desc: "Revestimento ceramico de alta performance. Protecao duradoura com acabamento espelhado.",
    cor: "#CC1814",
  },
  {
    icon: Wrench,
    title: "Protecao de Chassis",
    desc: "Tratamento anti-ferrugem e blindagem estrutural da parte inferior do veiculo.",
    cor: "#009246",
  },
  {
    icon: Hexagon,
    title: "Carbon 9H",
    desc: "Nano-ceramico grau 9H. Dureza extrema, brilho absoluto. O tratamento mais avancado do mercado.",
    cor: "#CC1814",
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
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              lineHeight: 1,
              letterSpacing: "0.04em",
              color: "#F0F0F0",
              margin: 0,
            }}
          >
            NOSSOS<br />SERVICOS
          </motion.h2>
          <motion.p
            initial={reduce ? false : { opacity: 0, y: 14 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7, maxWidth: 280, margin: 0 }}
          >
            Cada servico e executado com os melhores produtos e tecnicas disponíveis no mercado.
          </motion.p>
        </div>

        {/* Grid 3 colunas */}
        <div id="servicos-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gridTemplateRows: "auto auto",
          gap: 12,
        }}>
          {servicos.map((s, i) => {
            const Icon = s.icon;
            const isSpan2 = i === 0 || i === 4;

            return (
              <motion.div
                key={s.title}
                initial={reduce ? false : { opacity: 0, y: 28 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{ duration: 0.65, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                style={{
                  gridColumn: isSpan2 ? "span 2" : "span 1",
                  position: "relative",
                  borderRadius: 24,
                  padding: 2,
                  background: "rgba(255,255,255,0.05)",
                  border: "1px solid rgba(255,255,255,0.10)",
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
                }}
              >
                {/* Faixa de cor no topo */}
                <div style={{
                  position: "absolute",
                  top: 0,
                  left: 32,
                  right: 32,
                  height: 2,
                  borderRadius: "0 0 4px 4px",
                  background: s.cor,
                }} />

                {/* Inner */}
                <div style={{
                  borderRadius: 22,
                  background: "var(--surface)",
                  padding: "36px 32px",
                  minHeight: 220,
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                  boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                }}>
                  {/* Icone */}
                  <div style={{
                    width: 44,
                    height: 44,
                    borderRadius: 12,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    background: `${s.cor}14`,
                    border: `1px solid ${s.cor}28`,
                  }}>
                    <Icon size={22} weight="light" style={{ color: s.cor }} />
                  </div>

                  {/* Texto */}
                  <div>
                    <h3 style={{
                      fontFamily: "var(--font-bebas)",
                      fontSize: "1.85rem",
                      letterSpacing: "0.04em",
                      color: "#F0F0F0",
                      lineHeight: 1,
                      marginBottom: 10,
                    }}>
                      {s.title}
                    </h3>
                    <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7 }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: override para 1 coluna */}
        <style>{`
          @media (max-width: 767px) {
            #servicos-grid > div {
              grid-column: span 1 !important;
            }
          }
        `}</style>
      </div>
    </section>
  );
}
