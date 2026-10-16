"use client";

import { motion, useReducedMotion } from "motion/react";
import { Gauge, Certificate, HandHeart, MagnifyingGlass } from "@phosphor-icons/react";

const items = [
  {
    icon: MagnifyingGlass,
    title: "Atencao ao detalhe",
    desc: "Cada milimetro do seu veiculo recebe cuidado absoluto. Nada passa despercebido no processo.",
    color: "rosso",
  },
  {
    icon: Certificate,
    title: "Produtos certificados",
    desc: "Linha Carbon 9H e produtos de alto padrao internacional. So o melhor toca o seu carro.",
    color: "verde",
  },
  {
    icon: Gauge,
    title: "Resultado garantido",
    desc: "Trabalhamos ate o resultado ser impecavel. Entregamos o que prometemos, sem meio-termo.",
    color: "rosso",
  },
  {
    icon: HandHeart,
    title: "Atendimento exclusivo",
    desc: "Agenda flexivel, comunicacao direta no WhatsApp. Tratamos seu carro como se fosse nosso.",
    color: "verde",
  },
];

export default function Diferenciais() {
  const reduce = useReducedMotion();

  return (
    <section id="diferenciais" className="py-28 md:py-36 px-6 md:px-14 lg:px-24">
      <div className="max-w-[1400px] mx-auto">
        {/* Linha separadora tricolor */}
        <div className="flex h-px mb-16 overflow-hidden rounded-full max-w-[200px]">
          <div className="flex-1" style={{ background: "var(--verde)" }} />
          <div className="flex-1 bg-white/20" />
          <div className="flex-1" style={{ background: "var(--rosso)" }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-16 lg:gap-24 items-start">
          {/* Coluna esquerda: header fixo */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28"
          >
            <h2
              className="leading-none tracking-wider text-white mb-5"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(2.8rem, 5vw, 5rem)",
              }}
            >
              POR QUE A<br />
              <span style={{ color: "var(--rosso)" }}>MODENA?</span>
            </h2>
            <p
              className="text-[14px] leading-relaxed max-w-[260px]"
              style={{ color: "var(--text-secondary)" }}
            >
              Estetica automotiva nao e servico, e cuidado com um patrimonio que voce construiu.
            </p>
          </motion.div>

          {/* Coluna direita: cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {items.map((item, i) => {
              const Icon = item.icon;
              const isRosso = item.color === "rosso";
              const color = isRosso ? "var(--rosso)" : "var(--verde)";
              const colorDim = isRosso ? "var(--rosso-dim)" : "var(--verde-dim)";

              return (
                <motion.div
                  key={item.title}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                  className="group p-0.5 rounded-[1.25rem]"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <div
                    className="rounded-[calc(1.25rem-2px)] p-6 h-full flex flex-col gap-4 transition-colors duration-500 group-hover:bg-[#101010]"
                    style={{
                      background: "var(--surface)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center"
                      style={{
                        background: colorDim,
                        border: `1px solid ${color}28`,
                      }}
                    >
                      <Icon size={20} weight="light" style={{ color }} />
                    </div>
                    <div>
                      <h3
                        className="text-white tracking-wider leading-none mb-2"
                        style={{ fontFamily: "var(--font-bebas)", fontSize: "1.6rem" }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="text-[13px] leading-relaxed"
                        style={{ color: "var(--text-secondary)" }}
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
    </section>
  );
}
