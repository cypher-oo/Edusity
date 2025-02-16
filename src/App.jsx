import About from "./Components/About/About"
import Campus from "./Components/Campus/Campus"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import Programms from "./Components/Programms/Programms"
import Testimonials from "./Components/Testimonials/Testimonials"
import Title from "./Components/Title/Title"
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
      <Title subTitle='Our PROGRAM' title='What We Offer' />
      <Programms/>
      <About/>
      <Title subTitle='Gallery' title='Campus Photo' />
     <Campus/>
     <Title subTitle='TESTIMONIALS' title='What Student Says' />
     <Testimonials/>
     <Title subTitle='Contact Us' title='Get in Touch' />
      <Contact/>
      <Footer/>
      </div>
     
    </div>
  )
}

export default App