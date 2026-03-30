import Header from "./header"
import Hero from "./hero"
import Ticker from "./ticker"
import About from "./about"
import Services from "./services"
import Process from "./process"
import Projects from "./projects"
import Testimonials from "./testimonials"
import Faq from "./faq"
import CallToAction from "./call-to-action"
import Contact from "./contact"
import Footer from "./footer"
import WhatsAppFloat from "@/components/ui/whatsapp-float"

export default function LandingPage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Ticker />
      <About />
      <Services />
      <Ticker />
      <Process />
      <Projects />
      <Testimonials />
      <Faq />
      <CallToAction />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  )
}
