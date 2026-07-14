import Navbar from "../../components/LandingPage/Navbar"
import Hero from "../../components/LandingPage/Hero"
import TrustedBy from "../../components/LandingPage/TrustedBy"
import Features from "../../components/LandingPage/Feature"
import DemoSection from "../../components/LandingPage/DemoSection"
import Pricing from "../../components/LandingPage/Pricing"
import Testimonials from "../../components/LandingPage/Testimonial"
import Portfolio from "../../components/LandingPage/Portfolio"
import About from "../../components/LandingPage/About"
import CTA from "../../components/LandingPage/CTA"
import FAQ from "../../components/LandingPage/FAQ"
import Contact from "../../components/LandingPage/Contact"
import Footer from "../../components/LandingPage/Footer"

const LandingPage = () => {
  return (
    <div className="scroll-smooth sm">
      <Navbar />
      <Hero />
      <TrustedBy />
      <Features />
      <DemoSection />
      <Pricing />
      <Testimonials />
      <Portfolio />
      <About />
      <CTA />
      <FAQ />
      <Contact />
      <Footer />
    </div>
  )
}

export default LandingPage