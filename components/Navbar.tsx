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
      {/* Floating pill nav */}
      <nav className="fixed top-5 left-0 right-0 z-50 flex justify-center px-4">
        <motion.div
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-6 px-4 py-2.5 rounded-full border"
          style={{
            background: scrolled
              ? "rgba(6,8,8,0.92)"
              : "rgba(14,16,16,0.75)",
            borderColor: "rgba(255,255,255,0.10)",
            backdropFilter: "blur(24px) saturate(160%)",
            WebkitBackdropFilter: "blur(24px) saturate(160%)",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.05), 0 8px 32px rgba(0,0,0,0.6)",
            transition: "background 0.4s ease",
          }}
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
            className="font-display text-lg text-white tracking-widest leading-none pr-2 border-r border-white/10"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            MODENA
          </a>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-5">
            {links.map((l) => (
              <button
                key={l.href}
                onClick={() => handleNavClick(l.href)}
                className="text-[11px] uppercase tracking-[0.16em] text-white/50 hover:text-white/90 transition-colors duration-300 cursor-pointer"
              >
                {l.label}
              </button>
            ))}
          </div>

          {/* WhatsApp CTA */}
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full text-[11px] uppercase tracking-[0.14em] font-medium text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] active:scale-[0.97]"
            style={{
              background: "rgba(74,158,255,0.15)",
              border: "1px solid rgba(74,158,255,0.30)",
            }}
            onMouseEnter={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(74,158,255,0.25)";
            }}
            onMouseLeave={(e) => {
              (e.currentTarget as HTMLElement).style.background = "rgba(74,158,255,0.15)";
            }}
          >
            Agendar
          </a>

          {/* Mobile burger */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-8 h-8 flex items-center justify-center text-white/70 hover:text-white transition-colors"
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

      {/* Mobile overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{
              background: "rgba(6,8,8,0.96)",
              backdropFilter: "blur(32px)",
              WebkitBackdropFilter: "blur(32px)",
            }}
          >
            <div className="flex flex-col items-center gap-8">
              {links.map((l, i) => (
                <motion.button
                  key={l.href}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 10, opacity: 0 }}
                  transition={{
                    duration: 0.5,
                    delay: i * 0.07,
                    ease: [0.16, 1, 0.3, 1],
                  }}
                  onClick={() => handleNavClick(l.href)}
                  className="text-3xl uppercase tracking-widest text-white/80 hover:text-white transition-colors"
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
                transition={{ duration: 0.5, delay: links.length * 0.07, ease: [0.16, 1, 0.3, 1] }}
                className="mt-4 px-8 py-3 rounded-full border border-accent/40 text-accent text-[13px] uppercase tracking-[0.18em]"
                style={{ color: "var(--accent)", borderColor: "rgba(74,158,255,0.35)" }}
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
