"use client";

import { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import { List, X } from "@phosphor-icons/react";

const WHATSAPP = "https://wa.me/556196688626";
const EASE = [0.16, 1, 0.3, 1] as const;

const links = [
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Resultados", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const reduce = useReducedMotion();

  const scrollTo = (href: string) => {
    setOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Faixa tricolor — topo absoluto da viewport */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          display: "flex",
          zIndex: 110,
          pointerEvents: "none",
        }}
      >
        <div style={{ flex: 1, background: "var(--verde)" }} />
        <div style={{ flex: 1, background: "rgba(255,255,255,0.30)" }} />
        <div style={{ flex: 1, background: "var(--rosso)" }} />
      </div>

      {/* Nav pill flutuante */}
      <motion.header
        initial={reduce ? false : { opacity: 0, y: -16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.1, ease: EASE }}
        style={{
          position: "fixed",
          top: 18,
          left: 0,
          right: 0,
          zIndex: 100,
          display: "flex",
          justifyContent: "center",
          padding: "0 16px",
          pointerEvents: "none",
        }}
      >
        <nav
          style={{
            display: "flex",
            alignItems: "center",
            padding: "8px 8px 8px 20px",
            borderRadius: 9999,
            background: "rgba(6,6,8,0.82)",
            backdropFilter: "blur(20px) saturate(150%)",
            WebkitBackdropFilter: "blur(20px) saturate(150%)",
            border: "1px solid rgba(255,255,255,0.10)",
            boxShadow:
              "0 1px 0 rgba(255,255,255,0.05) inset, 0 8px 32px rgba(0,0,0,0.60)",
            pointerEvents: "auto",
            gap: 4,
          }}
        >
          {/* Wordmark */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 8,
              textDecoration: "none",
              marginRight: 8,
              padding: "4px 8px 4px 0",
              borderRight: "1px solid rgba(255,255,255,0.08)",
              flexShrink: 0,
            }}
          >
            <div
              style={{
                display: "flex",
                borderRadius: 2,
                overflow: "hidden",
                gap: 1.5,
                height: 10,
                flexShrink: 0,
              }}
            >
              <div style={{ width: 5, background: "var(--verde)" }} />
              <div style={{ width: 5, background: "rgba(255,255,255,0.50)" }} />
              <div style={{ width: 5, background: "var(--rosso)" }} />
            </div>
            <span
              style={{
                fontFamily: "var(--font-bebas)",
                fontSize: 16,
                letterSpacing: "0.16em",
                color: "#F0F0F0",
                lineHeight: 1,
                whiteSpace: "nowrap",
              }}
            >
              MODENA
            </span>
          </a>

          {/* Links — visíveis apenas em desktop via CSS */}
          <div className="nav-desktop-links">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => scrollTo(l.href)}
                style={{
                  padding: "7px 14px",
                  borderRadius: 9999,
                  border: "none",
                  background: "transparent",
                  color: "rgba(240,240,240,0.50)",
                  fontSize: 11,
                  letterSpacing: "0.10em",
                  textTransform: "uppercase",
                  cursor: "pointer",
                  transition: "color 0.2s ease, background 0.2s ease",
                  whiteSpace: "nowrap",
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.color = "#F0F0F0";
                  el.style.background = "rgba(255,255,255,0.07)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.color = "rgba(240,240,240,0.50)";
                  el.style.background = "transparent";
                }}
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* CTA — visível apenas em desktop via CSS */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="nav-desktop-cta"
            style={{
              padding: "8px 18px",
              borderRadius: 9999,
              background: "var(--rosso)",
              color: "#fff",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              textDecoration: "none",
              whiteSpace: "nowrap",
              flexShrink: 0,
              transition: "background 0.25s ease, box-shadow 0.25s ease, transform 0.12s ease",
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "#E01F1B";
              el.style.boxShadow = "0 4px 20px rgba(204,24,20,0.40)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLElement;
              el.style.background = "var(--rosso)";
              el.style.boxShadow = "none";
            }}
            onMouseDown={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(0.96)"; }}
            onMouseUp={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
          >
            Agendar
          </a>

          {/* Hamburger — visível apenas em mobile via CSS */}
          <button
            className="nav-mobile-burger"
            onClick={() => setOpen((v) => !v)}
            aria-label="Menu"
            style={{
              width: 38,
              height: 38,
              borderRadius: "50%",
              border: "1px solid rgba(255,255,255,0.10)",
              background: "rgba(255,255,255,0.05)",
              cursor: "pointer",
              flexShrink: 0,
              transition: "background 0.2s ease",
              display: "none", /* sobrescrito pelo CSS abaixo em mobile */
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={reduce ? false : { rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.18, ease: EASE }}
                  style={{ display: "flex" }}
                >
                  <X size={15} color="#F0F0F0" weight="bold" />
                </motion.span>
              ) : (
                <motion.span
                  key="list"
                  initial={reduce ? false : { rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.18, ease: EASE }}
                  style={{ display: "flex" }}
                >
                  <List size={15} color="rgba(240,240,240,0.70)" weight="bold" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </nav>
      </motion.header>

      {/* Overlay mobile — fullscreen */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="mobile-menu"
            initial={reduce ? false : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: EASE }}
            style={{
              position: "fixed",
              inset: 0,
              zIndex: 95,
              background: "rgba(3,3,3,0.97)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: 4,
            }}
            onClick={() => setOpen(false)}
          >
            {links.map((l, i) => (
              <motion.button
                key={l.href}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.4, delay: i * 0.06, ease: EASE }}
                onClick={(e) => { e.stopPropagation(); scrollTo(l.href); }}
                style={{
                  fontFamily: "var(--font-bebas)",
                  fontSize: "clamp(2.5rem, 8vw, 4.5rem)",
                  letterSpacing: "0.06em",
                  color: "rgba(240,240,240,0.70)",
                  background: "none",
                  border: "none",
                  cursor: "pointer",
                  lineHeight: 1.2,
                  padding: "2px 0",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "#F0F0F0"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "rgba(240,240,240,0.70)"; }}
              >
                {l.label}
              </motion.button>
            ))}

            <motion.a
              href={WHATSAPP}
              target="_blank"
              rel="noopener noreferrer"
              initial={reduce ? false : { opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4, delay: links.length * 0.06 + 0.04, ease: EASE }}
              onClick={() => setOpen(false)}
              style={{
                marginTop: 24,
                padding: "14px 36px",
                borderRadius: 9999,
                background: "var(--rosso)",
                color: "#fff",
                fontSize: 12,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                textDecoration: "none",
              }}
            >
              Agendar via WhatsApp
            </motion.a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CSS responsivo — puro, sem depender de Tailwind */}
      <style>{`
        .nav-desktop-links {
          display: flex;
          align-items: center;
          gap: 2px;
        }
        .nav-desktop-cta {
          display: flex;
          margin-left: 6px;
        }
        .nav-mobile-burger {
          display: none !important;
        }

        @media (max-width: 767px) {
          .nav-desktop-links {
            display: none !important;
          }
          .nav-desktop-cta {
            display: none !important;
          }
          .nav-mobile-burger {
            display: flex !important;
          }
        }
      `}</style>
    </>
  );
}
