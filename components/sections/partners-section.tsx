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
  {
    name: "Heliosun",
    src: "/logos/heliosun-logo.png",
    alt: "Logo Heliosun",
  },
  {
    name: "MPSystem",
    src: "/logos/mpsystem-logo.png",
    alt: "Logo MPSystem",
  },
  {
    name: "GoldenGroup",
    src: "/logos/goldengroup-logo.png",
    alt: "Logo GoldenGroup",
  },
  {
    name: "OrionExpress",
    src: "/logos/orion-logo.png",
    alt: "Logo OrionExpress",
  },
];

const mediaPatrons: PartnerLogo[] = [];

const partnerGroups: { title: string; logos: PartnerLogo[] }[] = [
  {
    title: "Organizatorzy",
    logos: organizers,
  },
  {
    title: "Partnerzy",
    logos: partners,
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
                    className={`flex items-center justify-center ${
                      group.title === "Organizatorzy"
                        ? "h-20 md:h-24"
                        : "h-14 md:h-16"
                    }`}
                  >
                    <img
                      src={logo.src}
                      alt={logo.alt}
                      className={`w-auto object-contain ${
                        group.title === "Organizatorzy"
                          ? "h-20 md:h-28 max-w-52"
                          : "h-14 md:h-16 max-w-28"
                      }`}
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
