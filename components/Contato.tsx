"use client";

import { motion, useReducedMotion } from "motion/react";
import { WhatsappLogo, InstagramLogo, MapPin, Clock } from "@phosphor-icons/react";

const WHATSAPP = "https://wa.me/556196688626";
const INSTAGRAM = "https://www.instagram.com/modenaesteticaauto/";

export default function Contato() {
  const reduce = useReducedMotion();

  return (
    <section id="contato" className="py-28 md:py-40 px-6 md:px-14 lg:px-24 relative overflow-hidden">
      {/* Glow rosso de fundo */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(204,24,20,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        {/* Faixa tricolor */}
        <div className="flex h-px mb-20 overflow-hidden rounded-full max-w-[200px]">
          <div className="flex-1" style={{ background: "var(--verde)" }} />
          <div className="flex-1 bg-white/20" />
          <div className="flex-1" style={{ background: "var(--rosso)" }} />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Esquerda: CTA */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="leading-none tracking-wider text-white mb-6"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(3rem, 6.5vw, 6.5rem)",
              }}
            >
              SEU VEICULO<br />
              MERECE O<br />
              <span style={{ color: "var(--rosso)" }}>MELHOR</span>
            </h2>
            <p
              className="text-[15px] leading-relaxed mb-10 max-w-[360px]"
              style={{ color: "var(--text-secondary)" }}
            >
              Agende agora pelo WhatsApp. Atendimento direto, sem burocracia.
              Transforme seu veiculo com quem entende de verdade.
            </p>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-[12px] uppercase tracking-[0.18em] font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]"
              style={{ background: "var(--rosso)" }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "#E01F1B";
                el.style.boxShadow = "0 8px 40px rgba(204,24,20,0.45)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "var(--rosso)";
                el.style.boxShadow = "none";
              }}
            >
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                <WhatsappLogo size={16} weight="fill" />
              </span>
              Falar no WhatsApp
            </a>
          </motion.div>

          {/* Direita: card de info */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="p-0.5 rounded-[1.5rem]"
            style={{
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.07)",
            }}
          >
            {/* Faixa tricolor no topo do card */}
            <div className="flex h-[2px] rounded-t-[calc(1.5rem-2px)] overflow-hidden">
              <div className="flex-1" style={{ background: "var(--verde)" }} />
              <div className="flex-1 bg-white/30" />
              <div className="flex-1" style={{ background: "var(--rosso)" }} />
            </div>

            <div
              className="rounded-b-[calc(1.5rem-2px)] p-8 flex flex-col gap-6"
              style={{
                background: "var(--surface)",
                boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.04)",
              }}
            >
              <h3
                className="text-white tracking-wider"
                style={{ fontFamily: "var(--font-bebas)", fontSize: "1.9rem" }}
              >
                MODENA ESTETICA
              </h3>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <MapPin
                    size={17}
                    weight="light"
                    style={{ color: "var(--rosso)", marginTop: 2, flexShrink: 0 }}
                  />
                  <div>
                    <p className="text-[13px] text-white/80">Brasilia, DF</p>
                    <p className="text-[12px]" style={{ color: "var(--text-secondary)" }}>
                      Consulte o endereco pelo WhatsApp
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock
                    size={17}
                    weight="light"
                    style={{ color: "var(--verde)", marginTop: 2, flexShrink: 0 }}
                  />
                  <div>
                    <p className="text-[13px] text-white/80">Seg a Sab — 08h ate 18h</p>
                    <p className="text-[12px]" style={{ color: "var(--text-secondary)" }}>
                      Agendamento previo necessario
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="h-px"
                style={{ background: "rgba(255,255,255,0.05)" }}
              />

              <div className="flex gap-3">
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full text-[11px] uppercase tracking-[0.12em] text-white/50 hover:text-white transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <InstagramLogo size={14} weight="light" />
                  Instagram
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full text-[11px] uppercase tracking-[0.12em] text-white/50 hover:text-white transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.07)",
                  }}
                >
                  <WhatsappLogo size={14} weight="light" />
                  WhatsApp
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
