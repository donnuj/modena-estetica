"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";

const WHATSAPP = "https://wa.me/556196688626";
const EASE = [0.16, 1, 0.3, 1] as const;

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      style={{
        position: "relative",
        height: "100dvh",
        minHeight: 600,
        overflow: "hidden",
        background: "#050505",
      }}
    >
      {/* Foto de fundo */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1580273916550-caf68cd06945?w=1800&q=80&fit=crop&auto=format"
        alt=""
        aria-hidden
        loading="eager"
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          objectPosition: "center",
          filter: "brightness(0.30) contrast(1.1) saturate(0.75)",
        }}
      />

      {/* Gradiente diagonal escuro */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(135deg, rgba(5,5,5,0.95) 0%, rgba(5,5,5,0.50) 55%, rgba(5,5,5,0.75) 100%)",
        }}
      />
      {/* Fade para baixo */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "linear-gradient(to top, #050505 0%, transparent 55%)",
        }}
      />

      {/* Brilho rosso no canto inferior esquerdo */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          width: 700,
          height: 400,
          pointerEvents: "none",
          background:
            "radial-gradient(ellipse at bottom left, rgba(204,24,20,0.09) 0%, transparent 60%)",
          filter: "blur(40px)",
        }}
      />

      {/* Conteúdo — ancorado no fundo via flex */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          display: "flex",
          alignItems: "flex-end",
        }}
      >
        <div
          className="hero-content"
          style={{
            width: "100%",
            maxWidth: 1400,
            margin: "0 auto",
            padding: "0 24px 80px",
          }}
        >
          {/* Eyebrow tricolor */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: EASE }}
            style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 28 }}
          >
            <div
              style={{
                display: "flex",
                borderRadius: 3,
                overflow: "hidden",
                gap: 2,
                height: 12,
              }}
            >
              <div style={{ width: 6, background: "var(--verde)" }} />
              <div style={{ width: 6, background: "rgba(255,255,255,0.50)" }} />
              <div style={{ width: 6, background: "var(--rosso)" }} />
            </div>
            <span
              style={{
                color: "var(--text-secondary)",
                fontSize: 11,
                letterSpacing: "0.22em",
                textTransform: "uppercase",
              }}
            >
              Brasília, DF · Estética Automotiva
            </span>
          </motion.div>

          {/* H1 */}
          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.28, ease: EASE }}
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(3.8rem, 10.5vw, 9.5rem)",
              lineHeight: 1,
              letterSpacing: "0.04em",
              color: "#F0F0F0",
              textShadow: "0 2px 60px rgba(0,0,0,0.9)",
              margin: 0,
            }}
          >
            MAIS QUE
            <br />
            <span style={{ color: "var(--rosso)" }}>ESTETICA,</span>
            <br />
            UMA EXPERIENCIA
          </motion.h1>

          {/* Linha vermelha */}
          <motion.div
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.8, delay: 0.6, ease: EASE }}
            style={{
              height: 1,
              maxWidth: 440,
              marginTop: 28,
              marginBottom: 28,
              transformOrigin: "left",
              background: "linear-gradient(to right, var(--rosso), transparent)",
            }}
          />

          {/* Subtexto + CTA */}
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.72, ease: EASE }}
            style={{ display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap" }}
          >
            <p
              style={{
                color: "var(--text-secondary)",
                fontSize: 15,
                lineHeight: 1.7,
                maxWidth: 300,
                margin: 0,
              }}
            >
              Detalhamento automotivo de alto padrão. Técnica, cuidado e resultado
              garantido.
            </p>

            <a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "14px 28px",
                borderRadius: 9999,
                background: "var(--rosso)",
                color: "#fff",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
                transition: "background 0.4s cubic-bezier(0.32,0.72,0,1), box-shadow 0.4s cubic-bezier(0.32,0.72,0,1), transform 0.15s cubic-bezier(0.32,0.72,0,1)",
                whiteSpace: "nowrap",
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
              onMouseDown={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(0.97)";
              }}
              onMouseUp={(e) => {
                (e.currentTarget as HTMLElement).style.transform = "scale(1)";
              }}
            >
              Agendar via WhatsApp
              <span
                style={{
                  width: 24,
                  height: 24,
                  borderRadius: "50%",
                  background: "rgba(255,255,255,0.18)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  flexShrink: 0,
                }}
              >
                <ArrowUpRight size={13} weight="bold" />
              </span>
            </a>
          </motion.div>
        </div>
      </div>

      {/* Responsive padding */}
      <style>{`
        @media (min-width: 768px) {
          .hero-content { padding: 0 56px 100px !important; }
        }
        @media (min-width: 1024px) {
          .hero-content { padding: 0 96px 112px !important; }
        }
      `}</style>
    </section>
  );
}
