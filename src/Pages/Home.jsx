import HeroPage from '../Pages/HeroPage';
import Aim from '../components/Aim';
import Attractions from '../components/Attractions';
import Contact from '../components/Contact';
import LogoSection from '../components/LogoSection';
//import Hero from './components/Hero';
import Navbar from '../components/Navbar';
import Overview from '../components/Overview';
import Bottom from '../components/Bottom';
// import Top from './components/Top';

function Home() {
  return (
    <div className="App">
      
  {/* <Top/> */}
  <Navbar/>
  <HeroPage/>
  <LogoSection/>
  <Overview/>
  <Aim/>
  <Attractions/>
  <Contact/>
  <Bottom/>
    </div>
  )
}

export default Home;