import Image from "next/image";

interface PartnerLogo {
  name: string;
  src: string;
  alt: string;
  className?: string;
}

const organizers: PartnerLogo[] = [
  {
    name: "040Basket",
    src: "/logos/040basket-logo.png",
    alt: "Logo 040Basket",
  },
  {
    name: "Puszczykowo",
    src: "/logos/puszczykowo-logo.png",
    alt: "Logo Puszczykowo",
  },
];

const partners: PartnerLogo[] = [
  {
    name: "Tosmak",
    src: "/logos/tosmak-logo.png",
    alt: "Logo Tosmak",
  },
  {
    name: "StrojeSportowe.pl",
    src: "/logos/strojesportowe-logo.png",
    alt: "Logo StrojeSportowe.pl",
  },
];

const mediaPatrons: PartnerLogo[] = [];

const partnerGroups: { title: string; logos: PartnerLogo[] }[] = [
  {
    title: "Organizatorzy",
    logos: organizers,
  },
  {
    title: "Sponsorzy i Partnerzy",
    logos: partners,
  },
  {
    title: "Patroni medialni",
    logos: mediaPatrons,
  },
];

export default function PartnersSection() {
  return (
    <section className="w-full bg-background">
      <div className="container mx-auto px-4 py-16 lg:px-0">
        <div className="flex flex-col gap-12">
          {partnerGroups.map((group) => (
            <div
              key={group.title}
              className="flex flex-col items-center gap-5 px-6 py-2"
            >
              <h3 className="text-center text-2xl uppercase">{group.title}</h3>

              <div className="flex w-full flex-wrap items-center justify-center gap-x-4 gap-y-3 md:gap-x-5 md:gap-y-6 lg:gap-x-8">
                {group.logos.map((logo) => (
                  <div
                    key={`${group.title}-${logo.name}`}
                    className="flex h-28 items-center justify-center md:h-32"
                  >
                    <Image
                      src={logo.src}
                      alt={logo.alt}
                      width={260}
                      height={130}
                      className={`h-auto max-h-18 w-auto max-w-36 object-contain sm:max-h-20 sm:max-w-40 md:max-h-22 md:max-w-44 ${logo.className ?? ""}`}
                    />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
