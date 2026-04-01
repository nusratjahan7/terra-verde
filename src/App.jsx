import './App.css'
import AboutSection from './Components/AboutSection/AboutSection'
import HeroSection from './Components/HeroSection/HeroSection'
import Navbar from './Components/Navbar/Navbar'
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
    </main>
    </>
  )
}

export default App
