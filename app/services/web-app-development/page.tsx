import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Web App Development | Soonlay",
  description:
    "Custom web application development using Next.js, React, and TypeScript. Soonlay builds production-ready web platforms for startup founders."
}

export default function WebAppDevelopmentPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border/60 bg-gradient-dark pb-16 pt-28 sm:pt-32">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-xs font-mono uppercase tracking-wide text-accent">
              Services / Web App Development
            </p>
            <h1 className="mb-4 font-display text-3xl tracking-tight text-primary sm:text-4xl md:text-5xl">
              Web Application Development
            </h1>
            <p className="max-w-2xl text-sm text-secondary sm:text-base">
              We design and build production-grade web applications tailored to
              your product vision — fast, secure, and ready to scale with your
              users.
            </p>
          </div>
        </section>

        <section className="border-b border-border/60 bg-background py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="space-y-4">
              <h2 className="font-display text-xl text-primary sm:text-2xl">
                What this service includes
              </h2>
              <p className="text-sm text-secondary sm:text-base">
                We handle the entire lifecycle of your web product — from
                architecture and design to implementation, testing, and launch.
                You get a clean, maintainable codebase using Next.js, React, and
                TypeScript.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <DetailBlock
                title="When you need this"
                items={[
                  "You have a SaaS or platform idea and need a production-ready v1.",
                  "Your existing prototype needs to be rebuilt on a solid foundation.",
                  "You want a custom dashboard, admin panel, or internal tool.",
                  "You need a technical team that can think in terms of both UX and architecture."
                ]}
              />
              <DetailBlock
                title="Tech we use"
                items={[
                  "Next.js, React, TypeScript, Tailwind CSS",
                  "Node.js, REST/GraphQL APIs",
                  "PostgreSQL, Prisma, Redis where needed",
                  "Deployed on Vercel, AWS, Railway, or your preferred cloud"
                ]}
              />
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-xl text-primary sm:text-2xl">
                Outcomes you can expect
              </h2>
              <ul className="list-disc space-y-2 pl-5 text-sm text-secondary sm:text-base">
                <li>Clearly scoped MVP or v1, prioritised around your goals.</li>
                <li>Clean, modular codebase that can be extended by any senior developer.</li>
                <li>Responsive UI that feels fast on modern devices.</li>
                <li>Monitoring, logging, and error tracking wired in from day one.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-accent/30 bg-surface/70 p-6 sm:p-7">
              <h3 className="mb-3 font-display text-lg text-primary">
                Ready to build your web product?
              </h3>
              <p className="mb-4 text-sm text-secondary">
                Tell us about your idea and current stage. We&apos;ll respond
                within 24 hours with next steps and a realistic timeline.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-medium text-accent"
              >
                Start a web project →
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

