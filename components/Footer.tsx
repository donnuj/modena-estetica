import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

const WHATSAPP = "https://wa.me/556196688626";
const INSTAGRAM = "https://www.instagram.com/modenaesteticaauto/";
const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}>
      {/* Faixa tricolor no rodape */}
      <div className="flex h-[2px]">
        <div className="flex-1" style={{ background: "var(--verde)" }} />
        <div className="flex-1 bg-white/25" />
        <div className="flex-1" style={{ background: "var(--rosso)" }} />
      </div>

      <div className="px-6 md:px-14 lg:px-24 py-10 max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <div className="flex items-center gap-3">
          <div className="flex h-[10px] rounded-[2px] overflow-hidden" style={{ gap: "1px" }}>
            <div className="w-[5px]" style={{ background: "var(--verde)" }} />
            <div className="w-[5px] bg-white/30" />
            <div className="w-[5px]" style={{ background: "var(--rosso)" }} />
          </div>
          <span
            className="text-[16px] tracking-widest"
            style={{ color: "var(--text-secondary)", fontFamily: "var(--font-bebas)" }}
          >
            MODENA ESTETICA AUTOMOTIVA
          </span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-[--text-secondary] hover:text-[--text-primary] transition-colors duration-300"
          >
            <InstagramLogo size={17} weight="light" />
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-[--text-secondary] hover:text-[--text-primary] transition-colors duration-300"
          >
            <WhatsappLogo size={17} weight="light" />
          </a>
          <span className="text-[12px]" style={{ color: "var(--text-secondary)" }}>
            &copy; {year} Modena
          </span>
        </div>
      </div>
    </footer>
  );
}
