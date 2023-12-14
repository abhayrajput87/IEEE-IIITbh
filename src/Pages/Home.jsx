import Hero from "../components/Home/Hero";
import Aim from "../components/Home/Aim";
import Contact from "../components/Home/Contact";
import Navbar from "../components/shared/Navbar";
import Bottom from "../components/shared/Bottom";
import ImpDates from "../components/slidingText/ImpDates";
import Aboutus from "../components/Home/Aboutus";

function Home() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <ImpDates>Important Dates 19th to 21st December 2024</ImpDates>
      <Aboutus />
      <Aim />
      <Contact />
      <Bottom />
    </div>
  );
}

export default Home;
