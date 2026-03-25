import HeroSection from "@/components/sections/hero-section";
import AboutEventSection from "@/components/sections/about-event-section";
import RegisterTeamSection from "@/components/sections/register-team-section";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutEventSection />
      <RegisterTeamSection />
    </main>
  );
}
