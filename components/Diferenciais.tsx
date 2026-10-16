"use client";

import { motion, useReducedMotion } from "motion/react";
import { Gauge, Certificate, HandHeart, MagnifyingGlass } from "@phosphor-icons/react";

const items = [
  {
    icon: MagnifyingGlass,
    title: "Atencao ao detalhe",
    desc: "Cada milimetro do seu veiculo recebe cuidado absoluto. Nada passa despercebido.",
  },
  {
    icon: Certificate,
    title: "Produtos certificados",
    desc: "Utilizamos apenas produtos premium de alta performance, incluindo a linha Carbon 9H.",
  },
  {
    icon: Gauge,
    title: "Resultado garantido",
    desc: "Trabalhamos ate entregar o resultado que voce merece. Sem compromissos pela metade.",
  },
  {
    icon: HandHeart,
    title: "Atendimento exclusivo",
    desc: "Seu veiculo e tratado com o mesmo respeito que voce teria. Agenda flexivel, comunicacao direta.",
  },
];

export default function Diferenciais() {
  const reduce = useReducedMotion();

  return (
    <section id="diferenciais" className="py-28 md:py-36 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Asymmetric header + grid layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_2fr] gap-12 lg:gap-20 items-start">
          {/* Left: sticky header */}
          <motion.div
            initial={reduce ? false : { opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:sticky lg:top-28"
          >
            <h2
              className="font-display leading-none tracking-wider text-white mb-5"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(2.8rem, 5vw, 5rem)",
              }}
            >
              POR QUE A<br />MODENA?
            </h2>
            <p
              className="text-[15px] leading-relaxed max-w-[280px]"
              style={{ color: "var(--text-secondary)" }}
            >
              Estetica automotiva nao e so lavar um carro. E cuidar de um patrimonio.
            </p>

            {/* Decorative line */}
            <div
              className="mt-8 h-px w-24"
              style={{
                background: "linear-gradient(to right, rgba(74,158,255,0.5), transparent)",
              }}
            />
          </motion.div>

          {/* Right: cards grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {items.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={reduce ? false : { opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{
                    duration: 0.7,
                    delay: i * 0.09,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  className="group p-0.5 rounded-[1.25rem]"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  {/* Inner core */}
                  <div
                    className="rounded-[calc(1.25rem-2px)] p-6 h-full flex flex-col gap-4 transition-colors duration-500 group-hover:bg-[#141818]"
                    style={{
                      background: "var(--surface)",
                      boxShadow: "inset 0 1px 0 rgba(255,255,255,0.05)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
                      style={{
                        background: "rgba(74,158,255,0.08)",
                        border: "1px solid rgba(74,158,255,0.16)",
                      }}
                    >
                      <Icon
                        size={20}
                        weight="light"
                        style={{ color: "var(--accent)" }}
                      />
                    </div>
                    <div>
                      <h3
                        className="font-display text-xl text-white tracking-wider mb-1.5"
                        style={{ fontFamily: "var(--font-bebas)" }}
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
