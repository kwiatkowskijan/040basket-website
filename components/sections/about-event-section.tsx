import { CalendarDays, Shield, Users } from "lucide-react";

const stats = [
  {
    icon: Users,
    value: "20+",
    label: "Drużyn",
  },
  {
    icon: Shield,
    value: "4.",
    label: "Edycja",
  },
  {
    icon: CalendarDays,
    value: "2",
    label: "Dni",
  },
];

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
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-3xl mt-4">
          {stats.map(({ icon: Icon, value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center gap-3 border rounded-2xl p-8 transition-colors hover:border-primary"
            >
              <Icon className="size-8 text-primary" />
              <p className="text-4xl font-heading">{value}</p>
              <p className="text-muted-foreground uppercase tracking-widest text-sm font-bold">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
