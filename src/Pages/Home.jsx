import Hero from "../components/Home/Hero";
import Aim from "../components/Home/Aim";
import Contact from "../components/Home/Contact";
import Navbar from "../components/Navbar";
import Bottom from "../components/Home/Bottom";
import ImpDates from "../components/slidingText/ImpDates";
import Aboutus from "../components/Home/Aboutus";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Aboutus />
      <ImpDates />
      <Aim />
      <Contact />
      <Bottom />
    </div>
  );
}

export default Home;
