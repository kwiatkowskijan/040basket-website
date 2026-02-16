import Image from "next/image";
import HeroSection from "@/components/ui/hero-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="container mx-auto py-16">
        <h2 className="text-3xl font-heading text-center mb-8">Witamy na stronie 040Basket!</h2>
        <p className="text-lg text-center text-gray-700">
          Jesteśmy pasjonatami koszykówki, którzy chcą dzielić się swoją miłością do tego sportu z innymi. Na naszej stronie znajdziesz informacje o naszych turniejach 3x3, treningach oraz aktualnościach związanych z naszym klubem. Dołącz do nas i razem rozwijajmy naszą koszykarską społeczność!
        </p>
      </div>
    </main>
  );
}
