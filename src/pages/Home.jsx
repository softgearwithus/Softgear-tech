
import ClientsFeedback from "../components/ClientsFeedback";
import ExpertiseSection from "../components/ExpertiseSection";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import StatsSection from "../components/StatsSection";
import TechnologiesWeUse from "../components/TechnologiesWeUse";

function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ExpertiseSection />
      <TechnologiesWeUse />
      <ClientsFeedback />
      <Footer />
    </>
  );
}

export default Home;
