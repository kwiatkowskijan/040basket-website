// Next
import Image from "next/image";
import { Metadata } from "next";

// Components
import PageTitle from "@/components/sections/page-title";
import BackgroundLogo from "@/components/sections/background-logo";
import { ContactForm } from "@/components/features/contact-form";

export const metadata: Metadata = {
  title: "Kontakt",
};

export default function Contact() {
  return (
    <main>
      <BackgroundLogo />
      <PageTitle />
      <section className="w-full container mx-auto min-h-100">
        <div className="w-full flex flex-col px-2 md:flex-row justify-center items-center gap-16">
          <div className="w-full md:w-1/2 flex align-top justify-start">
            <div className="w-1/3 flex justify-end border-r-4 border-primary pr-8">
              <Image src="/logo.svg" alt="Logo" width={200} height={100} />
            </div>
            <div className="w-full md:w-2/3 text-left pl-8">
              <p className="text-md md:text-2xl">
                Stowarzyszenie 040Basket
                <br />
                ul. Przykładowa 12
                <br />
                00-000 Miasto
                <br />
                email: kontakt@040basket.pl
                <br />
                tel: +48 123 456 789
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 h-full">
            <div className="bg-primary p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
