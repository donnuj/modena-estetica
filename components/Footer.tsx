"use client";

import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react";

const WHATSAPP = "https://wa.me/556196688626";
const INSTAGRAM = "https://www.instagram.com/modenaesteticaauto/";
const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}>
      {/* Faixa tricolor */}
      <div style={{ display: "flex", height: 2 }}>
        <div style={{ flex: 1, background: "var(--verde)" }} />
        <div style={{ flex: 1, background: "rgba(255,255,255,0.25)" }} />
        <div style={{ flex: 1, background: "var(--rosso)" }} />
      </div>

      <div
        style={{
          maxWidth: 1400,
          margin: "0 auto",
          padding: "28px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 20,
        }}
      >
        {/* Wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
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
            <div style={{ width: 5, background: "rgba(255,255,255,0.35)" }} />
            <div style={{ width: 5, background: "var(--rosso)" }} />
          </div>
          <span
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: 15,
              letterSpacing: "0.18em",
              color: "var(--text-secondary)",
              lineHeight: 1,
              whiteSpace: "nowrap",
            }}
          >
            MODENA ESTÉTICA AUTOMOTIVA
          </span>
        </div>

        {/* Links e copyright */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            style={{
              color: "var(--text-secondary)",
              transition: "color 0.25s ease",
              display: "flex",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}
          >
            <InstagramLogo size={17} weight="light" />
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            style={{
              color: "var(--text-secondary)",
              transition: "color 0.25s ease",
              display: "flex",
            }}
            onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-primary)"; }}
            onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.color = "var(--text-secondary)"; }}
          >
            <WhatsappLogo size={17} weight="light" />
          </a>
          <span
            style={{
              fontSize: 12,
              color: "var(--text-secondary)",
              paddingLeft: 16,
              borderLeft: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            © {year} Modena
          </span>
        </div>
      </div>
    </footer>
  );
}
