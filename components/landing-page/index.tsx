import Header from "./header"
import Hero from "./hero"
import About from "./about"
import Services from "./services"
import Testimonials from "./testimonials"
import Projects from "./projects"
import Faq from "./faq"
import CallToAction from "./call-to-action"
import Footer from "./footer"
import ContactFormButton from "./contact-form-button"
import StartProject from "./start-project"
import WhatsAppFloat from "../ui/whatsapp-float"
import type { LandingPageProps } from "./types"

// Export individual components for flexible usage
export { Header, Hero, About, Services, Testimonials, Projects, Faq, CallToAction, Footer, ContactFormButton, StartProject }

// Main component that combines all sections
export default function LandingPage({ showHeader = true, showFooter = true }: LandingPageProps) {
  return (
    <main className="min-h-screen bg-white">
      {showHeader && <Header />}
      <Hero />
      <About />
      <Services />
      <Projects />
      <Testimonials />
      <Faq />
      <CallToAction />
      {showFooter && <Footer />}
      <WhatsAppFloat />
    </main>
  )
}