import Hero from "../components/Home/Hero";
import Aim from "../components/Home/Aim";
import Contact from "../components/Home/Contact";
import Navbar from "../components/shared/Navbar";
import Bottom from "../components/shared/Bottom";
import ImpDates from "../components/slidingText/ImpDates";
import Aboutus from "../components/Home/Aboutus";
import Important from "../components/Home/Important";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Important />
      <Aboutus />
      <ImpDates />
      <Aim />
      <Contact />
      <Bottom />
    </div>
  );
}

export default Home;
