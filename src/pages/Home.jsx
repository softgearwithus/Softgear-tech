
import ClientsFeedback from "../components/ClientsFeedback";
import ExpertiseSection from "../components/ExpertiseSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import LogoMarquee from "../components/logo";
import StatsSection from "../components/StatsSection";
import TechnologiesWeUse from "../components/TechnologiesWeUse";

function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ExpertiseSection />
      <TechnologiesWeUse />
      <LogoMarquee/>
      <ClientsFeedback />
      <Footer />
    </>
  );
}

export default Home;
