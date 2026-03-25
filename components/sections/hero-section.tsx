import { Button } from "@/components/ui/button";
import { Calendar, Handshake, MapPin, Users } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="w-full h-dvh relative">
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src="/040_v2.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/65"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-8 text-center px-4">
        <p className="text-primary uppercase font-bold tracking-widest">
          Turniej koszykówki 3x3
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-9xl text-white mb-4 font-heading ">
          040Basket <br />
          <span className="font-heading text-primary">Tournament 4.0</span>
        </h1>
        <div className="flex items-center gap-6 text-white">
          <div className="flex items-center gap-2">
            <Calendar />
            15-16 lipca 2026
          </div>
          <div className="flex items-center gap-2">
            <MapPin />
            Puszczykowo, 62-040
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Button variant={"default"} size={"lg"}>
            <Users />
            Zapisz swoją drużynę
          </Button>
          <Button variant={"outline"} size={"lg"}>
            <Handshake />
            Zostań partnerem
          </Button>
        </div>
      </div>
    </section>
  );
}
