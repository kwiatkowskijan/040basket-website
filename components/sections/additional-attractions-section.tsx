const attractions = [
  {
    title: "Slam Dunk Contest",
    description:
      "Zawody wsadów, w których uczestnicy prezentują swoje najlepsze wsady, rywalizując o tytuł mistrza slam dunków.",
  },
  {
    title: "3pt Contest",
    description:
      "Konkurs rzutów za 3 punkty, w którym uczestnicy rywalizują o tytuł najlepszego strzelca zza linii 3 punktów.",
  },
  {
    title: "DJ set i muzyka na żywo",
    description:
      "Muzyka grana na żywo przez cały dzień buduje atmosferę turnieju i utrzymuje energię między meczami.",
  },
  {
    title: "NBA2K",
    description:
      "Strefa gier wideo, gdzie uczestnicy mogą rywalizować w popularnej grze koszykarskiej NBA2K, sprawdzając swoje umiejętności wirtualne.",
  },
  {
    title: "Grafitti i strefa artystyczna",
    description:
      "Miejsce, gdzie lokalni artyści tworzą graffiti na żywo, dodając artystyczny klimat do turnieju.",
  },
  {
    title: "Strefa gastro",
    description:
      "Różnorodne foodtrucki oferujące szeroki wybór jedzenia i napojów, aby uczestnicy mogli się posilić między meczami.",
  },
  {
    title: "040Store",
    description:
      "Sklep z oficjalnymi produktami turnieju, gdzie uczestnicy mogą zakupić pamiątki i gadżety związane z wydarzeniem.",
  },
  {
    title: "Pokaz freestyle by Pszczelarz",
    description:
      "Pokaz freestyle, w którym utalentowany zawodnik Pszczelarz prezentuje swoje umiejętności w trikach.",
  },
];

export default function AdditionalAttractionsSection() {
  return (
    <section className="w-full">
      <div className="container mx-auto flex flex-col gap-10 px-4 py-16 lg:px-0">
        <div className="mx-auto flex max-w-3xl flex-col items-center gap-4 text-center">
          <p className="font-bold uppercase tracking-widest text-primary">
            Dodatkowe atrakcje
          </p>
          <h2 className="text-center text-3xl uppercase md:text-5xl">
            Więcej niż sam turniej
          </h2>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">
          {attractions.map(({ title, description }) => (
            <article
              key={title}
              className="flex h-full flex-col gap-5 border border-primary/15 bg-background p-8 shadow-sm transition-transform duration-200 hover:-translate-y-1 hover:border-primary/40"
            >
              <div className="flex flex-1 flex-col gap-3">
                <h3 className="text-2xl uppercase">{title}</h3>
                <p className="text-sm leading-6 text-muted-foreground md:text-base">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
