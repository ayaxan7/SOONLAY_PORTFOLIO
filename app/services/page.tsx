import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { ServicesPageHero } from "@/components/sections/ServicesPageHero"

export const metadata: Metadata = {
  title:
    "Services | Soonlay — Web Apps, Mobile, SaaS & AI Development",
  description:
    "Soonlay builds web applications, mobile apps, SaaS platforms, AI products, and custom systems for startup founders worldwide."
}

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <ServicesPageHero />
      </main>
      <Footer />
    </div>
  )
}

