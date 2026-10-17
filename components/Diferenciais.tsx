"use client";

import { motion, useReducedMotion } from "motion/react";
import { Gauge, Certificate, HandHeart, MagnifyingGlass } from "@phosphor-icons/react";

const EASE = [0.16, 1, 0.3, 1] as const;

const items = [
  {
    icon: MagnifyingGlass,
    title: "Atenção ao detalhe",
    desc: "Cada milímetro do seu veículo recebe cuidado absoluto. Nada passa despercebido no processo.",
    color: "var(--rosso)",
    colorDim: "var(--rosso-dim)",
  },
  {
    icon: Certificate,
    title: "Produtos certificados",
    desc: "Linha Carbon 9H e produtos de alto padrão internacional. Só o melhor toca o seu carro.",
    color: "var(--verde)",
    colorDim: "var(--verde-dim)",
  },
  {
    icon: Gauge,
    title: "Resultado garantido",
    desc: "Trabalhamos até o resultado ser impecável. Entregamos o que prometemos, sem meio-termo.",
    color: "var(--rosso)",
    colorDim: "var(--rosso-dim)",
  },
  {
    icon: HandHeart,
    title: "Atendimento exclusivo",
    desc: "Agenda flexível, comunicação direta no WhatsApp. Tratamos seu carro como se fosse nosso.",
    color: "var(--verde)",
    colorDim: "var(--verde-dim)",
  },
];

export default function Diferenciais() {
  const reduce = useReducedMotion();

  return (
    <section
      id="diferenciais"
      style={{ padding: "112px 0", background: "var(--bg)" }}
    >
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 24px" }}>

        {/* Separador tricolor */}
        <div
          style={{
            display: "flex",
            height: 1,
            marginBottom: 64,
            maxWidth: 200,
            overflow: "hidden",
            borderRadius: 9999,
          }}
        >
          <div style={{ flex: 1, background: "var(--verde)" }} />
          <div style={{ flex: 1, background: "rgba(255,255,255,0.20)" }} />
          <div style={{ flex: 1, background: "var(--rosso)" }} />
        </div>

        {/* Layout principal */}
        <div className="dif-grid">

          {/* Coluna esquerda: header */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: EASE }}
            className="dif-sticky"
          >
            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(2.8rem, 5vw, 5rem)",
                lineHeight: 1,
                letterSpacing: "0.04em",
                color: "#F0F0F0",
                marginBottom: 20,
              }}
            >
              POR QUE A
              <br />
              <span style={{ color: "var(--rosso)" }}>MODENA?</span>
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: 14,
                lineHeight: 1.7,
                maxWidth: 260,
                margin: 0,
              }}
            >
              Estética automotiva não é serviço, é cuidado com um patrimônio
              que você construiu.
            </p>
          </motion.div>

          {/* Coluna direita: grid de cards */}
          <div className="dif-cards">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: EASE }}
                  style={{
                    borderRadius: 20,
                    padding: 2,
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <div
                    style={{
                      borderRadius: 18,
                      background: "var(--surface)",
                      padding: "24px",
                      display: "flex",
                      flexDirection: "column",
                      gap: 16,
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                    }}
                  >
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 10,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        background: item.colorDim,
                        border: `1px solid ${item.color}28`,
                        flexShrink: 0,
                      }}
                    >
                      <Icon size={18} weight="light" style={{ color: item.color }} />
                    </div>
                    <div>
                      <h3
                        style={{
                          fontFamily: "var(--font-bebas)",
                          fontSize: "1.5rem",
                          letterSpacing: "0.04em",
                          color: "#F0F0F0",
                          lineHeight: 1,
                          marginBottom: 8,
                        }}
                      >
                        {item.title}
                      </h3>
                      <p
                        style={{
                          color: "var(--text-secondary)",
                          fontSize: 13,
                          lineHeight: 1.7,
                          margin: 0,
                        }}
                      >
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      <style>{`
        .dif-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
        }
        .dif-sticky { position: static; }
        .dif-cards {
          display: grid;
          grid-template-columns: 1fr;
          gap: 12px;
        }

        @media (min-width: 640px) {
          .dif-cards { grid-template-columns: repeat(2, 1fr); }
        }

        @media (min-width: 1024px) {
          .dif-grid {
            grid-template-columns: 1fr 1.8fr;
            gap: 96px;
            align-items: start;
          }
          .dif-sticky {
            position: sticky;
            top: 112px;
          }
        }
      `}</style>
    </section>
  );
}
