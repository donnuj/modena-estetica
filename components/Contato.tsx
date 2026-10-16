"use client";

import { motion, useReducedMotion } from "motion/react";
import { WhatsappLogo, InstagramLogo, MapPin, Clock } from "@phosphor-icons/react";

const WHATSAPP = "https://wa.me/556196688626";
const INSTAGRAM = "https://www.instagram.com/modenaesteticaauto/";

export default function Contato() {
  const reduce = useReducedMotion();

  return (
    <section id="contato" className="py-28 md:py-40 px-6 md:px-12 lg:px-20 relative overflow-hidden">
      {/* Ambient glow background */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse at center, rgba(74,158,255,0.04) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div className="max-w-[1400px] mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left: CTA */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <h2
              className="font-display leading-none tracking-wider text-white mb-6"
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(3rem, 6vw, 6rem)",
              }}
            >
              SEU VEICULO<br />
              <span style={{ color: "var(--text-secondary)" }}>MERECE</span> O<br />
              MELHOR
            </h2>
            <p
              className="text-[15px] leading-relaxed mb-10 max-w-[380px]"
              style={{ color: "var(--text-secondary)" }}
            >
              Agende agora pelo WhatsApp. Atendimento rapido, sem burocracia.
              Transforme seu veiculo com quem entende de verdade.
            </p>

            {/* Primary CTA */}
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full text-[13px] uppercase tracking-[0.16em] font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]"
              style={{
                background: "rgba(74,158,255,0.12)",
                border: "1px solid rgba(74,158,255,0.30)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(74,158,255,0.22)";
                el.style.borderColor = "rgba(74,158,255,0.55)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLElement;
                el.style.background = "rgba(74,158,255,0.12)";
                el.style.borderColor = "rgba(74,158,255,0.30)";
              }}
            >
              <span
                className="w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                style={{ background: "rgba(74,158,255,0.20)" }}
              >
                <WhatsappLogo size={16} weight="fill" style={{ color: "var(--accent)" }} />
              </span>
              Falar no WhatsApp
            </a>
          </motion.div>

          {/* Right: Info card */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="p-0.5 rounded-[1.5rem]"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <div
              className="rounded-[calc(1.5rem-2px)] p-8 flex flex-col gap-6"
              style={{
                background: "var(--surface)",
                boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
              }}
            >
              <h3
                className="font-display text-3xl text-white tracking-wider"
                style={{ fontFamily: "var(--font-bebas)" }}
              >
                MODENA ESTETICA
              </h3>

              <div className="flex flex-col gap-4">
                <div className="flex items-start gap-3">
                  <MapPin size={18} weight="light" style={{ color: "var(--accent)", marginTop: 2, flexShrink: 0 }} className="shrink-0" />
                  <div>
                    <p className="text-[13px] text-white/80 leading-relaxed">
                      Brasilia, DF
                    </p>
                    <p className="text-[12px]" style={{ color: "var(--text-secondary)" }}>
                      Consulte o endereco pelo WhatsApp
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <Clock size={18} weight="light" style={{ color: "var(--accent)", marginTop: 2 }} className="shrink-0" />
                  <div>
                    <p className="text-[13px] text-white/80">Seg a Sab: 08h - 18h</p>
                    <p className="text-[12px]" style={{ color: "var(--text-secondary)" }}>
                      Agendamento previo necessario
                    </p>
                  </div>
                </div>
              </div>

              {/* Divider */}
              <div
                className="h-px w-full"
                style={{ background: "rgba(255,255,255,0.06)" }}
              />

              {/* Social links */}
              <div className="flex gap-3">
                <a
                  href={INSTAGRAM}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full text-[12px] uppercase tracking-[0.12em] text-white/60 hover:text-white transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <InstagramLogo size={15} weight="light" />
                  Instagram
                </a>
                <a
                  href={WHATSAPP}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2.5 rounded-full text-[12px] uppercase tracking-[0.12em] text-white/60 hover:text-white transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.04)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  <WhatsappLogo size={15} weight="light" />
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
