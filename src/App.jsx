import './App.css'
import AboutSection from './Components/AboutSection/AboutSection'
import HeroSection from './Components/HeroSection/HeroSection'
import Navbar from './Components/Navbar/Navbar'
import ServiceSection from './Components/ServiceSection/ServiceSection'
import StatsBar from './Components/StatsBar/StatsBar'
import TechnologySection from './Components/TechnologySection/TechnologySection'

function App() {
  return (
    <>
    <header> 
      <Navbar></Navbar>
    </header>
    
    <main>
      <HeroSection></HeroSection>
      <StatsBar></StatsBar>
      <AboutSection></AboutSection>
      <ServiceSection/>
      <TechnologySection/>
    </main>
    </>
  )
}

export default App
