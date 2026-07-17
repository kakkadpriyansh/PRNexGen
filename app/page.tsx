import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import HomeHero from "@/components/home/HomeHero"
import HomeStats from "@/components/home/HomeStats"
import HomeServices from "@/components/home/HomeServices"
import HomeTechStack from "@/components/home/HomeTechStack"
import HomeTestimonials from "@/components/home/HomeTestimonials"
import HomeCTA from "@/components/home/HomeCTA"

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HomeHero />
        <HomeStats />
        <HomeServices />
        <HomeTechStack />
        <HomeTestimonials />
        <HomeCTA />
      </main>
      <Footer />
    </>
  )
}
