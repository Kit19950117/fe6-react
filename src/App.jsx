import './CSS/styles-ans.css';
import Navbar from './Components/Navbar';
// import PageLinks from './Components/PageLinks.jsx'
// import SocialLinks from './Components/SocialLinks.jsx'
import Footer from './Components/Footer.jsx';
import Hero from './Components/Hero.jsx';
import About from './Components/About.jsx';
import Services from './Components/Services.jsx';
import Tours from './Components/Tours.jsx';
function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <About />
    <Services />
    <Tours />
      <Footer />
      {/* <PageLinks groupClass="footer-list"/> */}
      {/* <SocialLinks groupClass="footer-icons" listItemClass="nav-icon" /> */}
    </>
  )
}

export default App