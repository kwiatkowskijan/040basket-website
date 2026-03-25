import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export default function RegisterTeamSection() {
  return (
    <section className="w-full bg-primary">
      <div className="container mx-auto py-16 flex flex-col items-center justify-center gap-8 text-center px-4">
        <p className="uppercase font-bold tracking-widest text-secondary">
          Rejestracja
        </p>
        <h2 className="text-2xl md:text-5xl text-center mb-8 font-heading uppercase text-white">
          Zgłoś swoją drużynę już teraz <br />
        </h2>
        <p className="text-sm md:text-base text-center max-w-3xl text-gray-300">
          Miejsca są limitowane i obowiązuje kolejność zgłoszeń. Nie przegap
          szansy na udział w najbardziej ekscytującym turnieju streetballowym
          tego lata!
        </p>
        <div className="flex flex-col items-center gap-4 mt-2">
          <Button size="lg" variant="secondary">
            Zapisz swoją drużynę <ArrowRight />
          </Button>
          <p className="text-xs text-gray-400">
            Po kliknięciu zostaniesz przekierowany do formularza
            rejestracyjnego.
          </p>
        </div>
      </div>
    </section>
  );
}
