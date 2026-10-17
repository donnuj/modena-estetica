"use client";

import { motion, useReducedMotion } from "motion/react";
import { WhatsappLogo, InstagramLogo, MapPin, Clock } from "@phosphor-icons/react";

const WHATSAPP = "https://wa.me/556196688626";
const INSTAGRAM = "https://www.instagram.com/modenaesteticaauto/";
const EASE = [0.16, 1, 0.3, 1] as const;

export default function Contato() {
  const reduce = useReducedMotion();

  return (
    <section
      id="contato"
      style={{ padding: "112px 0", background: "var(--bg)", position: "relative", overflow: "hidden" }}
    >
      {/* Glow rosso */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "33%",
          transform: "translate(-50%, -50%)",
          width: 700,
          height: 400,
          pointerEvents: "none",
          background: "radial-gradient(ellipse at center, rgba(204,24,20,0.05) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />

      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>

        {/* Separador tricolor */}
        <div
          style={{
            display: "flex",
            height: 1,
            marginBottom: 80,
            maxWidth: 200,
            overflow: "hidden",
            borderRadius: 9999,
          }}
        >
          <div style={{ flex: 1, background: "var(--verde)" }} />
          <div style={{ flex: 1, background: "rgba(255,255,255,0.20)" }} />
          <div style={{ flex: 1, background: "var(--rosso)" }} />
        </div>

        {/* Grid 2 colunas */}
        <div className="ctt-grid">

          {/* Esquerda: CTA */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: EASE }}
          >
            <h2
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: "clamp(3rem, 6.5vw, 6.5rem)",
                lineHeight: 1,
                letterSpacing: "0.04em",
                color: "#F0F0F0",
                marginBottom: 24,
              }}
            >
              SEU VEÍCULO
              <br />
              MERECE O
              <br />
              <span style={{ color: "var(--rosso)" }}>MELHOR</span>
            </h2>
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: 15,
                lineHeight: 1.7,
                maxWidth: 360,
                marginBottom: 40,
              }}
            >
              Agende agora pelo WhatsApp. Atendimento direto, sem burocracia.
              Transforme seu veículo com quem entende de verdade.
            </p>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 12,
                padding: "14px 32px",
                borderRadius: 9999,
                background: "var(--rosso)",
                color: "#fff",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background 0.4s cubic-bezier(0.32,0.72,0,1), box-shadow 0.4s cubic-bezier(0.32,0.72,0,1), transform 0.12s ease",
              }}
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
              onMouseDown={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(0.97)"; }}
              onMouseUp={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
            >
              <span
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.15)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <WhatsappLogo size={16} weight="fill" />
              </span>
              Falar no WhatsApp
            </a>
          </motion.div>

          {/* Direita: card de informações */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, delay: 0.15, ease: EASE }}
            style={{
              borderRadius: 24,
              padding: 2,
              background: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Faixa tricolor no topo */}
            <div style={{ display: "flex", height: 2, borderRadius: "22px 22px 0 0", overflow: "hidden" }}>
              <div style={{ flex: 1, background: "var(--verde)" }} />
              <div style={{ flex: 1, background: "rgba(255,255,255,0.30)" }} />
              <div style={{ flex: 1, background: "var(--rosso)" }} />
            </div>

            <div
              style={{
                borderRadius: "0 0 22px 22px",
                background: "var(--surface)",
                padding: 32,
                display: "flex",
                flexDirection: "column",
                gap: 24,
                boxShadow: "inset 0 -1px 0 rgba(255,255,255,0.03)",
              }}
            >
              <h3
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "1.9rem",
                  letterSpacing: "0.04em",
                  color: "#F0F0F0",
                  lineHeight: 1,
                  margin: 0,
                }}
              >
                MODENA ESTÉTICA
              </h3>

              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <MapPin size={16} weight="light" style={{ color: "var(--rosso)", marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: 13, color: "rgba(240,240,240,0.80)", margin: "0 0 2px" }}>Brasília, DF</p>
                    <p style={{ fontSize: 12, color: "var(--text-secondary)", margin: 0 }}>
                      Consulte o endereço pelo WhatsApp
                    </p>
                  </div>
                </div>

                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <Clock size={16} weight="light" style={{ color: "var(--verde)", marginTop: 2, flexShrink: 0 }} />
                  <div>
                    <p style={{ fontSize: 13, color: "rgba(240,240,240,0.80)", margin: "0 0 2px" }}>
                      Seg a Sab — 08h às 18h
                    </p>
                    <p style={{ fontSize: 12, color: "var(--text-secondary)", margin: 0 }}>
                      Agendamento prévio necessário
                    </p>
                  </div>
                </div>
              </div>

              <div style={{ height: 1, background: "rgba(255,255,255,0.06)" }} />

              <div style={{ display: "flex", gap: 10 }}>
                {[
                  { href: INSTAGRAM, icon: InstagramLogo, label: "Instagram" },
                  { href: WHATSAPP, icon: WhatsappLogo, label: "WhatsApp" },
                ].map(({ href, icon: Icon, label }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 8,
                      padding: "10px 16px",
                      borderRadius: 9999,
                      fontSize: 11,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "rgba(240,240,240,0.50)",
                      textDecoration: "none",
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.07)",
                      transition: "color 0.25s ease, background 0.25s ease",
                    }}
                    onMouseEnter={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "#F0F0F0";
                      el.style.background = "rgba(255,255,255,0.08)";
                    }}
                    onMouseLeave={(e) => {
                      const el = e.currentTarget as HTMLElement;
                      el.style.color = "rgba(240,240,240,0.50)";
                      el.style.background = "rgba(255,255,255,0.04)";
                    }}
                  >
                    <Icon size={13} weight="light" />
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        .ctt-grid {
          display: grid;
          grid-template-columns: 1fr;
          gap: 48px;
          align-items: center;
        }

        @media (min-width: 1024px) {
          .ctt-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 80px;
          }
        }
      `}</style>
    </section>
  );
}
