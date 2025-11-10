import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import PastPerformance from './components/PastPerformance'
import Certifications from './components/Certifications'
import AboutUs from './components/AboutUs'
import ContactUs from './components/ContactUs'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Services />
      <PastPerformance />
      <Certifications />
      <AboutUs />
      <ContactUs />
      <Footer />
    </div>
  )
}

export default App

