import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import { PortfolioSection } from "@/components/sections/Portfolio"

export const metadata: Metadata = {
  title: "Our Work | Soonlay — Product Development Portfolio",
  description:
    "Explore the products, platforms, and systems built by Soonlay for founders and startups worldwide."
}

export default function WorkPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="relative overflow-hidden bg-gradient-dark pb-10 pt-28 sm:pt-32">
          <div className="pointer-events-none absolute inset-0">
            <div className="mesh-gradient" />
          </div>
          <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
            <div className="inline-flex items-center justify-center rounded-full border border-accent/40 bg-surface/70 px-4 py-1 text-xs font-mono uppercase tracking-wide text-accent">
              Work
            </div>
            <h1 className="mt-4 font-display text-3xl tracking-tight text-primary sm:text-4xl md:text-5xl">
              Our Work
            </h1>
            <p className="mt-3 text-sm text-secondary sm:text-base">
              Custom software solutions we&apos;ve built to help founders ship
              products, streamline operations, and unlock new revenue.
            </p>
          </div>
        </section>
        <PortfolioSection showCTA />
      </main>
      <Footer />
    </div>
  )
}

