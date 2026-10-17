"use client";

import { motion, useReducedMotion } from "motion/react";

// Fotos reais de carros do Unsplash — IDs verificados
const fotos = [
  {
    id: "1492144534655-ae79c964c9d7",
    label: "Polimento completo",
    ratio: "4/3",
  },
  {
    id: "1606152421802-db97b369848b",
    label: "Vitrificação Carbon 9H",
    ratio: "3/4",
  },
  {
    id: "1525609004556-c46c7d6cf023",
    label: "Detalhamento de rodas",
    ratio: "3/4",
  },
  {
    id: "1580414057-3bcf4c62d3b4",
    label: "Interior premium",
    ratio: "4/3",
  },
  {
    id: "1503736334956-4c8f8e92946d",
    label: "Resultado final",
    ratio: "3/4",
  },
  {
    id: "1580273916550-caf68cd06945",
    label: "Lavagem técnica",
    ratio: "4/3",
  },
];

export default function Galeria() {
  const reduce = useReducedMotion();

  return (
    <section id="galeria" style={{ padding: "112px 0", background: "var(--bg)" }}>
      <div style={{ maxWidth: 1400, margin: "0 auto", padding: "0 24px" }}>

        {/* Header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16, marginBottom: 48 }}
        >
          <h2 style={{
            fontFamily: "var(--font-bebas)",
            fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
            lineHeight: 1,
            letterSpacing: "0.04em",
            color: "#F0F0F0",
            margin: 0,
          }}>
            RESULTADOS<br />
            <span style={{ color: "var(--rosso)" }}>REAIS</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: 14, lineHeight: 1.7, maxWidth: 280, margin: 0 }}>
            Cada trabalho conta uma historia de transformacao. Veja o que a Modena entrega.
          </p>
        </motion.div>

        {/* Grade de fotos */}
        <div className="foto-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: 12,
        }}>
          {fotos.map((foto, i) => (
            <motion.div
              key={foto.id}
              initial={reduce ? false : { opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.75, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              style={{
                position: "relative",
                borderRadius: 16,
                overflow: "hidden",
                aspectRatio: foto.ratio,
                border: "1px solid rgba(255,255,255,0.07)",
              }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={`https://images.unsplash.com/photo-${foto.id}?w=800&q=80&fit=crop&auto=format`}
                alt={foto.label}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  filter: "brightness(0.75) contrast(1.05) saturate(0.9)",
                  display: "block",
                  transition: "transform 0.6s cubic-bezier(0.32,0.72,0,1)",
                }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1.05)"; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.transform = "scale(1)"; }}
              />

              {/* Label */}
              <div style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "32px 20px 18px",
                background: "linear-gradient(to top, rgba(5,5,5,0.85) 0%, transparent 100%)",
                display: "flex",
                alignItems: "center",
                gap: 8,
              }}>
                <div style={{ width: 5, height: 5, borderRadius: "50%", background: "var(--rosso)", flexShrink: 0 }} />
                <span style={{
                  color: "rgba(240,240,240,0.70)",
                  fontSize: 11,
                  letterSpacing: "0.18em",
                  textTransform: "uppercase",
                }}>
                  {foto.label}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* TODO: substituir Unsplash por fotos reais dos trabalhos da Modena */}
      </div>

      {/* Mobile grid override */}
      <style>{`
        @media (max-width: 640px) {
          #galeria .foto-grid { grid-template-columns: 1fr !important; }
        }
        @media (max-width: 900px) and (min-width: 641px) {
          #galeria .foto-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  );
}
