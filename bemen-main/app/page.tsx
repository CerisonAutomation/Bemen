import Hero from "@/components/home/hero"
import Services from "@/components/home/services"
import About from "@/components/home/about"
import CallToAction from "@/components/home/call-to-action"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <About />
      <CallToAction />
      <Footer />
    </>
  )
}
