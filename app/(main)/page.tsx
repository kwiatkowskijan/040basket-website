import HeroSection from "@/components/sections/hero-section";
import AboutEventSection from "@/components/sections/about-event-section";
import RegisterTeamSection from "@/components/sections/register-team-section";
import LastNewsSection from "@/components/sections/last-news-section";
import PartnersSection from "@/components/sections/partners-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutEventSection />
      <RegisterTeamSection />
      <LastNewsSection />
      <PartnersSection />
    </>
  );
}
