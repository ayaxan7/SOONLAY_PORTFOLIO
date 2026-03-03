import { Navbar } from "@/components/layout/Navbar"
import { Hero } from "@/components/sections/Hero"
import { ServicesSection } from "@/components/sections/Services"
import { Footer } from "@/components/layout/Footer"

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <ServicesSection />
      </main>
      <Footer />
    </div>
  )
}

