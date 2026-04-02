import './App.css'
import AboutSection from './Components/AboutSection/AboutSection'
import HeroSection from './Components/HeroSection/HeroSection'
import Navbar from './Components/Navbar/Navbar'
import ServiceSection from './Components/ServiceSection/ServiceSection'
import StatsBar from './Components/StatsBar/StatsBar'

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
    </main>
    </>
  )
}

export default App
