// Next
import Image from "next/image";
import { Metadata } from "next";

// Components
import PageTitle from "@/components/ui/page-title";
import BackgroundLogo from "@/components/ui/background-logo";
import { ContactForm } from "@/components/contact-form";

export const metadata: Metadata = {
  title: "Kontakt",
};

export default function Contact() {
  return (
    <main>
      <BackgroundLogo />
      <PageTitle />
      <section className="w-full container mx-auto flex flex-row justify-center items-center text-center min-h-100">
        <div className="w-1/2 flex align-top justify-start">
          <div className="w-1/3 flex justify-end border-r-4 border-primary pr-8">
            <Image src="/logo.svg" alt="Logo" width={150} height={75} />
          </div>
          <div className="w-2/3 text-left pl-8">
            <p className="text-xl">
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
        <div className="w-1/2 h-full">
          <div className="w-full bg-primary p-8">
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
}
