import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Modena | Estética Automotiva - Brasilia",
  description:
    "Mais que estetica, uma experiencia. Detalhamento automotivo de alto padrao em Brasilia. Lavagem tecnica, polimento, vitrificacao e protecao Carbon 9H.",
  keywords: ["estetica automotiva", "polimento", "vitrificacao", "brasilia", "lavagem tecnica", "carbon 9h"],
  openGraph: {
    title: "Modena Estetica Automotiva",
    description: "Mais que estetica, uma experiencia. Alto padrao em Brasilia.",
    type: "website",
    locale: "pt_BR",
  },
};

type LayoutProps<T extends string> = {
  children: React.ReactNode;
  params?: Promise<Record<T, string>>;
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}
