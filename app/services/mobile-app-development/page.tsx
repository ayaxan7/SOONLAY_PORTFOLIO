import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Mobile App Development | Soonlay",
  description:
    "Cross-platform mobile app development using React Native. Soonlay builds production-ready apps for iOS and Android."
}

export default function MobileAppDevelopmentPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border/60 bg-gradient-dark pb-16 pt-28 sm:pt-32">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-xs font-mono uppercase tracking-wide text-accent">
              Services / Mobile Apps
            </p>
            <h1 className="mb-4 font-display text-3xl tracking-tight text-primary sm:text-4xl md:text-5xl">
              Mobile App Development
            </h1>
            <p className="max-w-2xl text-sm text-secondary sm:text-base">
              We build mobile apps that feel native, using React Native and a
              modern backend — from consumer apps to internal tools.
            </p>
          </div>
        </section>

        <section className="border-b border-border/60 bg-background py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="grid gap-6 md:grid-cols-2">
              <DetailBlock
                title="What we focus on"
                items={[
                  "Smooth onboarding flows, navigation, and in-app journeys.",
                  "Offline-friendly behaviour where it matters.",
                  "Secure auth and backend communication.",
                  "Deployments to TestFlight, App Store, and Play Store."
                ]}
              />
              <DetailBlock
                title="Tech stack"
                items={[
                  "React Native with TypeScript.",
                  "Expo or bare React Native depending on your needs.",
                  "Native modules where performance requires it.",
                  "Backends built with Node.js, GraphQL/REST, and cloud services."
                ]}
              />
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-xl text-primary sm:text-2xl">
                Good fits for mobile builds
              </h2>
              <ul className="list-disc space-y-2 pl-5 text-sm text-secondary sm:text-base">
                <li>Products where mobile is the primary interface.</li>
                <li>
                  Companion apps for an existing web or SaaS product.
                </li>
                <li>
                  Internal tools that need to work in the field, not just at a
                  desk.
                </li>
                <li>
                  Startups that want one shared codebase for iOS and Android.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-accent/30 bg-surface/70 p-6 sm:p-7">
              <h3 className="mb-3 font-display text-lg text-primary">
                Planning a mobile app?
              </h3>
              <p className="mb-4 text-sm text-secondary">
                Tell us who your users are and what they need to do on the go.
                We&apos;ll help shape a focused v1 that can ship to the stores.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-medium text-accent"
              >
                Talk about your mobile app →
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

function DetailBlock({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="rounded-2xl border border-border bg-surface/70 p-5 sm:p-6">
      <h3 className="mb-3 text-sm font-semibold text-primary sm:text-base">
        {title}
      </h3>
      <ul className="space-y-2 text-xs text-secondary sm:text-sm">
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

