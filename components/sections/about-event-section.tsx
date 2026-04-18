export default function AboutEventSection() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col md:flex-row py-16 gap-8">
        <div className="w-full md:w-1/2 flex flex-col items-start justify-center gap-8 px-4">
          <p className="text-primary uppercase font-bold tracking-widest">
            O wydarzeniu
          </p>
          <h2 className="text-3xl md:text-5xl text-left font-heading uppercase">
            Miejsce gdzie streetball <br />
            spotyka rywalizację
          </h2>
          <p className="text-left max-w-3xl">
            040Basket Tournament 4.0. to czwarta edycja turnieju 3x3, który na
            stałe wpisał się w koszykarski kalendarz regionu. Rywalizacja w
            kategoriach Open i Kids, emocjonujący konkurs wsadów i wyjątkowa
            atmosfera sprawiają, że to coś więcej niż turniej – to prawdziwe
            święto basketu.
          </p>
        </div>
        <div className="w-full md:w-1/2 flex items-center justify-center px-4">
          <div className="w-full aspect-video bg-muted border-2 border-dashed border-foreground" />
        </div>
      </div>
    </section>
  );
}
