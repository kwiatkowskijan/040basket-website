import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <div className="w-full h-dvh relative">
      <video className="w-full h-full object-cover" autoPlay muted loop>
        <source src="/040_v2.mp4" type="video/mp4" />
      </video>
      <div className="absolute inset-0 bg-black/40"></div>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-4xl md:text-6xl lg:text-9xl text-white mb-4 font-heading ">
          Still Ballin
        </h1>
        <Button variant={"default"} size={"lg"}>
          Dołącz do nas
        </Button>
      </div>
    </div>
  );
}
