import { CalendarDays, Shield, Users } from "lucide-react";

export default function AboutEventSection() {
  return (
    <section className="container mx-auto">
      <div className="w-full py-16 flex flex-col items-center justify-center gap-8 text-center px-4">
        <p className="text-primary uppercase font-bold tracking-widest">
          Idea wydarzenia
        </p>
        <h2 className="text-3xl md:text-5xl text-center mb-8 font-heading uppercase">
          Miejsce gdzie streetball <br />
          spotyka rywalizację
        </h2>
        <p className="text-lg md:text-xl text-center max-w-3xl">
          040Basket gromadzi najlepszych graczy koszykarki 3×3 na dwa
          elektryzujące dni pełne rywalizacji, wspólnoty i kultury. Szybkie
          mecze, muzyka na żywo, food trucki i atmosfera, której nie zapomnisz.
        </p>
    </section>
  );
}
