
import AboutUs from "../components/About";
import ClientsFeedback from "../components/ClientsFeedback";
import ExpertiseSection from "../components/ExpertiseSection";
import FloatingCTA from "../components/FloatingCTA";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import MeetOurTeam from "../components/MeetOurTeam";
import StatsSection from "../components/StatsSection";
import SuccessStories from "../components/SuccessStories";
import TechnologiesWeUse from "../components/TechnologiesWeUse";
import WhyChooseUs from "../components/Whyuse";

function Home() {
  return (
    <>
      <Hero />
      <StatsSection />
      <ExpertiseSection />
      <TechnologiesWeUse />
      <SuccessStories />
      <ClientsFeedback />
      <Footer />
    </>
  );
}

export default Home;
