import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { AboutHero } from "@/components/sections/AboutHero"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <AboutHero />
      </main>
      <Footer />
    </div>
  )
}
