import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "SaaS Platform Development | Soonlay",
  description:
    "Design and development of multi-tenant SaaS platforms with billing, roles, analytics, and secure infrastructure."
}

export default function SaasPlatformsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border/60 bg-gradient-dark pb-16 pt-28 sm:pt-32">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-xs font-mono uppercase tracking-wide text-accent">
              Services / SaaS Platforms
            </p>
            <h1 className="mb-4 font-display text-3xl tracking-tight text-primary sm:text-4xl md:text-5xl">
              SaaS Platform Development
            </h1>
            <p className="max-w-2xl text-sm text-secondary sm:text-base">
              We build SaaS products that are subscription-ready, multi-tenant,
              and designed to handle growth — not just a handful of users.
            </p>
          </div>
        </section>

        <section className="border-b border-border/60 bg-background py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="grid gap-6 md:grid-cols-2">
              <DetailBlock
                title="Typical SaaS features we build"
                items={[
                  "Authentication, organisations / workspaces, and role-based access control.",
                  "Stripe or Paddle subscriptions with trials, upgrades, and invoices.",
                  "Analytics dashboards and reporting for your customers.",
                  "Admin tooling to manage tenants, plans, and support."
                ]}
              />
              <DetailBlock
                title="Architecture considerations"
                items={[
                  "Single-tenant vs multi-tenant data models depending on your risk profile.",
                  "Background jobs for billing, notifications, and heavy processing.",
                  "API-first design so you can open up integrations later.",
                  "Logging, monitoring, and backups as part of the initial build."
                ]}
              />
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-xl text-primary sm:text-2xl">
                When this is the right fit
              </h2>
              <ul className="list-disc space-y-2 pl-5 text-sm text-secondary sm:text-base">
                <li>You&apos;re building a B2B or B2C subscription product.</li>
                <li>
                  You want to charge from day one instead of staying in “beta”
                  forever.
                </li>
                <li>
                  You care about clean permissions, data isolation, and uptime.
                </li>
                <li>
                  You want a team that has shipped SaaS before and knows the
                  traps to avoid.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-accent/30 bg-surface/70 p-6 sm:p-7">
              <h3 className="mb-3 font-display text-lg text-primary">
                Planning a SaaS product?
              </h3>
              <p className="mb-4 text-sm text-secondary">
                Share your market, pricing idea, and core feature set. We&apos;ll
                help you shape a realistic SaaS v1 that can start generating
                revenue.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-medium text-accent"
              >
                Talk about your SaaS →
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

