"use client";

import { motion, useReducedMotion } from "motion/react";
import { Drop, ShieldCheck, Sparkle, Wrench, Hexagon } from "@phosphor-icons/react";

const servicos = [
  {
    icon: Drop,
    title: "Lavagem Tecnica",
    desc: "Processo detalhado com produtos premium, removendo contaminantes sem agredir a pintura.",
    size: "lg",
    imgSeed: "car-wash-detail-dark",
  },
  {
    icon: Sparkle,
    title: "Polimento",
    desc: "Restauracao e realce do brilho original, eliminando arranhoes e oxidacoes.",
    size: "md",
    imgSeed: "car-polishing-dark",
  },
  {
    icon: ShieldCheck,
    title: "Vitrificacao",
    desc: "Protecao duradoura com revestimento ceramico de alta performance.",
    size: "sm",
    imgSeed: "ceramic-coating-car",
  },
  {
    icon: Wrench,
    title: "Protecao de Chassis",
    desc: "Tratamento anti-ferrugem e protecao estrutural para a parte inferior do veiculo.",
    size: "sm",
    imgSeed: "car-chassis-protection",
  },
  {
    icon: Hexagon,
    title: "Carbon 9H",
    desc: "Revestimento nano-ceramico de grau 9H. Dureza extrema, brilho espelhado.",
    size: "md",
    imgSeed: "carbon-ceramic-car-black",
  },
];

function ServiceCard({
  service,
  index,
}: {
  service: (typeof servicos)[0];
  index: number;
}) {
  const reduce = useReducedMotion();
  const Icon = service.icon;

  return (
    <motion.div
      initial={reduce ? false : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.7,
        delay: index * 0.08,
        ease: [0.16, 1, 0.3, 1],
      }}
      className="group relative overflow-hidden rounded-[1.5rem] flex flex-col justify-end p-0.5"
      style={{
        background: "rgba(255,255,255,0.04)",
        border: "1px solid rgba(255,255,255,0.07)",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.06)",
      }}
    >
      {/* Inner shell */}
      <div
        className="relative w-full h-full rounded-[calc(1.5rem-2px)] overflow-hidden flex flex-col justify-end"
        style={{
          background: "var(--surface)",
          minHeight: service.size === "lg" ? 320 : service.size === "md" ? 260 : 220,
        }}
      >
        {/* Background image */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={`https://picsum.photos/seed/${service.imgSeed}/800/500`}
          alt=""
          aria-hidden
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] group-hover:scale-105"
          style={{ filter: "brightness(0.18) saturate(0.8)" }}
        />

        {/* Gradient overlay */}
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to top, rgba(6,8,8,0.95) 0%, rgba(6,8,8,0.60) 50%, transparent 100%)",
          }}
        />

        {/* Content */}
        <div className="relative z-10 p-6">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
            style={{
              background: "rgba(74,158,255,0.10)",
              border: "1px solid rgba(74,158,255,0.20)",
            }}
          >
            <Icon size={18} weight="light" style={{ color: "var(--accent)" }} />
          </div>
          <h3
            className="font-display text-2xl text-white tracking-wider mb-1.5"
            style={{ fontFamily: "var(--font-bebas)" }}
          >
            {service.title}
          </h3>
          <p className="text-[13px] leading-relaxed" style={{ color: "var(--text-secondary)" }}>
            {service.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
}

export default function Servicos() {
  const reduce = useReducedMotion();

  return (
    <section id="servicos" className="py-28 md:py-36 px-6 md:px-12 lg:px-20">
      <div className="max-w-[1400px] mx-auto">
        {/* Header */}
        <motion.div
          initial={reduce ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14"
        >
          <h2
            className="font-display leading-none tracking-wider text-white"
            style={{
              fontFamily: "var(--font-bebas)",
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
            }}
          >
            NOSSOS SERVICOS
          </h2>
          <p
            className="mt-3 text-[15px] max-w-[420px] leading-relaxed"
            style={{ color: "var(--text-secondary)" }}
          >
            Cada veiculo recebe um tratamento personalizado, com os melhores produtos do mercado.
          </p>
        </motion.div>

        {/* Asymmetric bento grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {/* Large card — spans 2 cols on lg */}
          <div className="lg:col-span-2">
            <ServiceCard service={servicos[0]} index={0} />
          </div>
          {/* Medium card */}
          <ServiceCard service={servicos[1]} index={1} />
          {/* Two small cards */}
          <ServiceCard service={servicos[2]} index={2} />
          <ServiceCard service={servicos[3]} index={3} />
          {/* Medium card — spans 2 cols on lg */}
          <ServiceCard service={servicos[4]} index={4} />
        </div>
      </div>
    </section>
  );
}
