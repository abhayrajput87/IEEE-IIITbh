import Hero from "../components/Home/Hero";
import Aim from "../components/Home/Aim";
import Contact from "../components/Home/Contact";
import Bottom from "../components/shared/Bottom";
import Aboutus from "../components/Home/Aboutus";
import LogoSection from "../components/Home/LogoSection";
import ConferenceBox from "../components/Home/ConferenceBox";

function Home() {
  return (
    <div className="App">
      <Hero />
      <ConferenceBox />
      <LogoSection />
      <Aboutus />
      <Aim />
      <Contact />
      <Bottom />
    </div>
  );
}

export default Home;
