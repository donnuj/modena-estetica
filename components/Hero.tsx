"use client";

import { motion, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";

const WHATSAPP = "https://wa.me/556196688626";

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative min-h-[100dvh] flex flex-col overflow-hidden bg-[#050505]">

      {/* Imagem de fundo — carro escuro de luxo */}
      {/* TODO: substituir pela foto real da Modena */}
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="https://images.unsplash.com/photo-1580273916550-caf68cd06945?w=1800&q=80&fit=crop&auto=format"
        alt=""
        aria-hidden
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ filter: "brightness(0.28) contrast(1.1) saturate(0.75)" }}
        loading="eager"
      />

      {/* Gradiente sobre a foto */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(5,5,5,0.92) 0%, rgba(5,5,5,0.55) 50%, rgba(5,5,5,0.80) 100%)",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to top, #050505 0%, transparent 50%)",
        }}
      />

      {/* Glow Rosso no canto */}
      <div
        className="absolute bottom-0 left-0 w-[600px] h-[350px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at bottom left, rgba(204,24,20,0.07) 0%, transparent 65%)",
          filter: "blur(40px)",
        }}
      />

      {/* Conteudo: sempre ao fundo da section */}
      <div className="relative z-10 flex flex-col justify-end flex-1 px-6 md:px-14 lg:px-24 pb-20 md:pb-28 max-w-[1400px] mx-auto w-full">

        {/* Eyebrow com mini tricolor */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-3 mb-7"
        >
          <div className="flex rounded-[3px] overflow-hidden gap-[2px]" style={{ height: 12 }}>
            <div style={{ width: 6, background: "var(--verde)" }} />
            <div style={{ width: 6, background: "rgba(255,255,255,0.50)" }} />
            <div style={{ width: 6, background: "var(--rosso)" }} />
          </div>
          <span style={{ color: "var(--text-secondary)", fontSize: 11, letterSpacing: "0.22em", textTransform: "uppercase" }}>
            Brasilia, DF — Estetica Automotiva
          </span>
        </motion.div>

        {/* H1 principal */}
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.28, ease: [0.16, 1, 0.3, 1] }}
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(4rem, 11vw, 10rem)",
            lineHeight: 1,
            letterSpacing: "0.04em",
            color: "#F0F0F0",
            textShadow: "0 2px 60px rgba(0,0,0,0.9)",
            marginBottom: "0.1em",
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
          transition={{ duration: 0.8, delay: 0.60, ease: [0.16, 1, 0.3, 1] }}
          style={{
            height: 1,
            maxWidth: 420,
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
          transition={{ duration: 0.7, delay: 0.72, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", alignItems: "center", gap: 28, flexWrap: "wrap" }}
        >
          <p style={{ color: "var(--text-secondary)", fontSize: 15, lineHeight: 1.7, maxWidth: 300 }}>
            Detalhamento automotivo de alto padrao. Tecnica, cuidado e resultado garantido.
          </p>

          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group"
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
              transition: "all 0.4s cubic-bezier(0.32,0.72,0,1)",
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
                transition: "transform 0.3s ease",
              }}
            >
              <ArrowUpRight size={13} weight="bold" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
