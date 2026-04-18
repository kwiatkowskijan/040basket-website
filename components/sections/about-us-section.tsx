export default function AboutUsSection() {
  return (
    <section className="container mx-auto">
      <div className="flex flex-col md:flex-row py-16 gap-8">
        <div className="w-full md:w-1/2 flex items-center justify-center px-4">
          <div className="w-full aspect-video bg-muted border-2 border-dashed border-foreground" />
        </div>
        <div className="w-full md:w-1/2 flex flex-col items-end justify-center gap-8 px-4">
          <p className="text-primary uppercase font-bold tracking-widest">
            O nas
          </p>
          <h2 className="text-3xl md:text-5xl text-right font-heading uppercase">
            Historia 040Basket
          </h2>
          <p className="text-right max-w-3xl">
            040Basket to inicjatywa stworzona przez pasjonatów koszykówki,
            którzy chcieli połączyć miłość do streetballu z duchem wspólnoty.
            Od pierwszego turnieju w 2019 roku organizujemy wydarzenia, które
            przyciągają setki graczy i tysiące kibiców.
          </p>
        </div>
      </div>
    </section>
  );
}
