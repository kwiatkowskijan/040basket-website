import HeroSection from "@/components/sections/hero-section";
import AboutEventSection from "@/components/sections/about-event-section";
import AboutUsSection from "@/components/sections/about-us-section";
import RegisterTeamSection from "@/components/sections/register-team-section";
import AdditionalAttractionsSection from "@/components/sections/additional-attractions-section";
import LastNewsSection from "@/components/sections/last-news-section";
import PartnersSection from "@/components/sections/partners-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutEventSection />
      <AboutUsSection />
      <RegisterTeamSection />
      <AdditionalAttractionsSection />
      <LastNewsSection />
      <PartnersSection />
    </>
  );
}
