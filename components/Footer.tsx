import { InstagramLogo, WhatsappLogo } from "@phosphor-icons/react/dist/ssr";

const WHATSAPP = "https://wa.me/556196688626";
const INSTAGRAM = "https://www.instagram.com/modenaesteticaauto/";
const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer
      className="px-6 md:px-12 lg:px-20 py-10"
      style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
    >
      <div className="max-w-[1400px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
        <span
          className="font-display text-lg tracking-widest text-white/40"
          style={{ fontFamily: "var(--font-bebas)" }}
        >
          MODENA ESTETICA AUTOMOTIVA
        </span>

        <div className="flex items-center gap-6">
          <a
            href={INSTAGRAM}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="text-white/30 hover:text-white/70 transition-colors duration-300"
          >
            <InstagramLogo size={18} weight="light" />
          </a>
          <a
            href={WHATSAPP}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="text-white/30 hover:text-white/70 transition-colors duration-300"
          >
            <WhatsappLogo size={18} weight="light" />
          </a>
          <span className="text-[12px]" style={{ color: "var(--text-secondary)" }}>
            &copy; {year} Modena
          </span>
        </div>
      </div>
    </footer>
  );
}
