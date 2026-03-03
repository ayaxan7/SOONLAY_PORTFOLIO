import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "Custom Systems & Automation | Soonlay",
  description:
    "Custom backend systems, internal tools, and workflow automation built around how your business actually runs."
}

export default function CustomSystemsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border/60 bg-gradient-dark pb-16 pt-28 sm:pt-32">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-xs font-mono uppercase tracking-wide text-accent">
              Services / Custom Systems
            </p>
            <h1 className="mb-4 font-display text-3xl tracking-tight text-primary sm:text-4xl md:text-5xl">
              Custom Systems &amp; Automation
            </h1>
            <p className="max-w-2xl text-sm text-secondary sm:text-base">
              When off-the-shelf tools don&apos;t fit, we design and build
              systems that follow your workflows instead of forcing you to
              change them.
            </p>
          </div>
        </section>

        <section className="border-b border-border/60 bg-background py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="grid gap-6 md:grid-cols-2">
              <DetailBlock
                title="Examples of custom work"
                items={[
                  "Internal dashboards stitching together data from multiple tools.",
                  "Automated workflows that replace manual spreadsheet operations.",
                  "Custom CRMs or back-office systems tailored to your process.",
                  "Backends powering hardware, IoT, or operational tooling."
                ]}
              />
              <DetailBlock
                title="Our approach"
                items={[
                  "We map your current process before proposing any tech.",
                  "We prioritise reliability and observability over flashy UI.",
                  "We design for operators: clear states, logs, and failure modes.",
                  "We integrate with the tools you already rely on where it makes sense."
                ]}
              />
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-xl text-primary sm:text-2xl">
                When to choose a custom system
              </h2>
              <ul className="list-disc space-y-2 pl-5 text-sm text-secondary sm:text-base">
                <li>
                  You&apos;re juggling work across spreadsheets, email, and
                  half a dozen SaaS tools.
                </li>
                <li>
                  You have a process that gives you an edge and can&apos;t be
                  modelled in generic software.
                </li>
                <li>
                  You want automation but need control and visibility at every
                  step.
                </li>
                <li>
                  You&apos;re hitting the limits of your current cobbled-together
                  stack.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-accent/30 bg-surface/70 p-6 sm:p-7">
              <h3 className="mb-3 font-display text-lg text-primary">
                Have a workflow that needs upgrading?
              </h3>
              <p className="mb-4 text-sm text-secondary">
                Describe how your team works today and where the friction is. We
                can usually see 2–3 automation wins quickly.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-medium text-accent"
              >
                Talk about a custom system →
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

