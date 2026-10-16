import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Servicos from "@/components/Servicos";
import Diferenciais from "@/components/Diferenciais";
import Galeria from "@/components/Galeria";
import Contato from "@/components/Contato";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Servicos />
        <Diferenciais />
        <Galeria />
        <Contato />
      </main>
      <Footer />
    </>
  );
}
