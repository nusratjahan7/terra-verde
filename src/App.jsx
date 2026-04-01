import './App.css'
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
    </main>
    </>
  )
}

export default App
