"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { List, X } from "@phosphor-icons/react";

const WHATSAPP = "https://wa.me/556196688626";

const links = [
  { label: "Servicos", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Resultados", href: "#galeria" },
  { label: "Contato", href: "#contato" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Faixa tricolor no topo absoluto */}
      <div className="fixed top-0 left-0 right-0 z-50 flex h-[3px] pointer-events-none">
        <div className="flex-1" style={{ background: "var(--verde)" }} />
        <div className="flex-1 bg-white/40" />
        <div className="flex-1" style={{ background: "var(--rosso)" }} />
      </div>

      {/* Navbar flutuante */}
      <nav className="fixed top-5 left-0 right-0 z-40 flex justify-center px-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-5 px-4 py-2.5 rounded-full"
          style={{
            background: scrolled
              ? "rgba(3,3,3,0.94)"
              : "rgba(11,11,11,0.78)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(24px) saturate(160%)",
            WebkitBackdropFilter: "blur(24px) saturate(160%)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.04), 0 8px 40px rgba(0,0,0,0.7)",
            transition: "background 0.4s ease",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
            className="flex items-center gap-2 pr-3"
            style={{ borderRight: "1px solid rgba(255,255,255,0.08)" }}
          >
            {/* Mini tricolor antes do logo */}
            <div className="flex h-[10px] rounded-[2px] overflow-hidden" style={{ gap: "1px" }}>
              <div className="w-[5px]" style={{ background: "var(--verde)" }} />
              <div className="w-[5px] bg-white/60" />
              <div className="w-[5px]" style={{ background: "var(--rosso)" }} />
            </div>
            <span
              className="text-[17px] text-white tracking-widest leading-none"
              style={{ fontFamily: "var(--font-bebas)" }}
            >
              MODENA
            </span>
          </a>

          {/* Links desktop */}
          <div className="hidden md:flex items-center gap-5">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNavClick(l.href)}
                className="text-[11px] uppercase tracking-[0.16em] text-white/45 hover:text-white/90 transition-colors duration-300 cursor-pointer"
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* CTA vermelho */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.14em] font-medium text-white transition-all duration-400 active:scale-[0.97]"
            style={{ background: "var(--rosso)" }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "#E01F1B";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "var(--rosso)";
            }}
          >
            Agendar
          </a>

          {/* Burger mobile */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-8 h-8 flex items-center justify-center text-white/60 hover:text-white transition-colors"
            aria-label="Menu"
          >
            <AnimatePresence mode="wait" initial={false}>
              {open ? (
                <motion.span
                  key="x"
                  initial={{ rotate: -45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={18} weight="light" />
                </motion.span>
              ) : (
                <motion.span
                  key="list"
                  initial={{ rotate: 45, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -45, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <List size={18} weight="light" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </motion.div>
      </nav>

      {/* Overlay mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 flex flex-col items-center justify-center"
            style={{
              background: "rgba(3,3,3,0.97)",
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
            }}
          >
            <div className="flex flex-col items-center gap-8">
              {links.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ y: 24, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 12, opacity: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.07, ease: [0.16, 1, 0.3, 1] }}
                  onClick={() => handleNavClick(l.href)}
                  className="text-4xl uppercase tracking-widest text-white/75 hover:text-white transition-colors duration-200"
                  style={{ fontFamily: "var(--font-bebas)" }}
                >
                  {l.label}
                </motion.button>
              ))}
              <motion.a
                href={WHATSAPP}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 10, opacity: 0 }}
                transition={{
                  duration: 0.5,
                  delay: links.length * 0.07,
                  ease: [0.16, 1, 0.3, 1],
                }}
                className="mt-4 px-8 py-3.5 rounded-full text-[12px] uppercase tracking-[0.18em] font-medium text-white"
                style={{ background: "var(--rosso)" }}
                onClick={() => setOpen(false)}
              >
                Agendar via WhatsApp
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
