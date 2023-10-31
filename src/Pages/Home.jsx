import HeroPage from '../Pages/HeroPage';
import Aim from '../components/Home/Aim';
// import Attractions from '../components/Home/Attractions';
import Contact from '../components/Home/Contact';
// import LogoSection from '../components/LogoSection';
//import Hero from './components/Hero';
import Navbar from '../components/Navbar';
//import Overview from '../components/Home/Overview';
import Bottom from '../components/Home/Bottom';
import ImpDates from '../components/slidingText/ImpDates';
import Aboutus from '../components/Home/Aboutus'
// import Top from './components/Top';

function Home() {
  return (
    <div className="App">
      
  {/* <Top/> */}
  <Navbar/>
  <HeroPage/>
  {/* <LogoSection/> */}
  <Aboutus/>
  {/* <Overview/> */}
  <ImpDates/>
  <Aim/>
  {/* <Attractions/> */}
  <Contact/>
  <Bottom/>
    </div>
  )
}

export default Home;