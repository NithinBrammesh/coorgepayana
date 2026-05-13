
import './App.css'
import CallToAction from './components/Calltoaction'
import Footer from './components/Footer'
import HeroBanner from './components/HeroBanner'
import PopularDestinations from './components/PopularDestinations'
import ServiceFeatures from './components/ServiceFeatures'
import Services from './components/Services'
import Testimonials from './components/Testimonials'

function App() {


  return (
    <>
    <HeroBanner/>
    <PopularDestinations/>
    <Services/>
    <ServiceFeatures/>
    <Testimonials/>
    {/* <CallToAction/> */}
    <Footer/>
    </>
  )
}

export default App
