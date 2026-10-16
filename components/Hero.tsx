"use client";

import { useRef, useEffect } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "motion/react";
import { ArrowUpRight } from "@phosphor-icons/react";

const WHATSAPP = "https://wa.me/556196688626";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();

  const { scrollY } = useScroll();
  const imageY = useTransform(scrollY, [0, 600], [0, 80]);
  const textY = useTransform(scrollY, [0, 600], [0, -40]);
  const opacity = useTransform(scrollY, [0, 400], [1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative min-h-[100dvh] flex flex-col overflow-hidden"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{ y: reduce ? 0 : imageY }}
      >
        {/* Car photo — replace with real Modena photo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="https://picsum.photos/seed/black-luxury-car-detail/1600/900"
          alt="Veiculo tratado pela Modena Estetica Automotiva"
          className="w-full h-full object-cover object-center scale-[1.08]"
          style={{ filter: "brightness(0.28) contrast(1.1)" }}
          loading="eager"
        />
        {/* Gradient overlay: bottom fade to black */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(6,8,8,0.30) 0%, rgba(6,8,8,0.50) 50%, rgba(6,8,8,0.92) 80%, #060808 100%)",
          }}
        />
        {/* Left vignette */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to right, rgba(6,8,8,0.8) 0%, transparent 55%)",
          }}
        />
      </motion.div>

      {/* Ambient glow */}
      <div
        className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full pointer-events-none z-[1]"
        style={{
          background: "radial-gradient(ellipse at center, rgba(74,158,255,0.04) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Content */}
      <motion.div
        className="relative z-10 flex flex-col justify-end flex-1 px-6 md:px-12 lg:px-20 pb-16 md:pb-24 max-w-[1400px] mx-auto w-full"
        style={{ y: reduce ? 0 : textY, opacity: reduce ? 1 : opacity }}
      >
        {/* Eyebrow */}
        <motion.span
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="inline-flex items-center gap-2 mb-6 w-fit px-3 py-1.5 rounded-full text-[10px] uppercase tracking-[0.22em] font-medium text-white/50"
          style={{
            border: "1px solid rgba(255,255,255,0.10)",
            background: "rgba(255,255,255,0.03)",
          }}
        >
          <span
            className="w-1 h-1 rounded-full"
            style={{ background: "var(--accent)" }}
          />
          Brasilia, DF
        </motion.span>

        {/* Main headline */}
        <motion.h1
          initial={reduce ? false : { opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="font-display leading-none tracking-wider text-white mb-6"
          style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(3.5rem, 11vw, 9rem)",
            textShadow: "0 2px 40px rgba(0,0,0,0.8)",
          }}
        >
          MAIS QUE<br />
          <span style={{ color: "var(--text-secondary)" }}>ESTETICA,</span> UMA<br />
          EXPERIENCIA
        </motion.h1>

        {/* Subtext + CTA row */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-6"
        >
          <p
            className="text-[15px] leading-relaxed max-w-[340px]"
            style={{ color: "var(--text-secondary)" }}
          >
            Detalhamento automotivo de alto padrao. Seu veiculo merece o melhor tratamento.
          </p>

          {/* CTA */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 px-6 py-3.5 rounded-full text-[12px] uppercase tracking-[0.16em] font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97] shrink-0"
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
            Agendar via WhatsApp
            <span
              className="w-6 h-6 rounded-full flex items-center justify-center transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              style={{ background: "rgba(74,158,255,0.20)" }}
            >
              <ArrowUpRight size={12} weight="bold" />
            </span>
          </a>
        </motion.div>
      </motion.div>

      {/* Bottom fade line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px"
        style={{ background: "linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)" }}
      />
    </section>
  );
}
