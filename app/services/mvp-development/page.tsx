import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "MVP Development | Soonlay",
  description:
    "MVP development for startup founders who need to validate fast. Soonlay ships lean, investor-ready MVPs in weeks."
}

export default function MvpDevelopmentPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border/60 bg-gradient-dark pb-16 pt-28 sm:pt-32">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-xs font-mono uppercase tracking-wide text-accent">
              Services / MVP Development
            </p>
            <h1 className="mb-4 font-display text-3xl tracking-tight text-primary sm:text-4xl md:text-5xl">
              MVP Development
            </h1>
            <p className="max-w-2xl text-sm text-secondary sm:text-base">
              You have the idea. We turn it into a lean, launch-ready product
              that proves there is demand — without overbuilding.
            </p>
          </div>
        </section>

        <section className="border-b border-border/60 bg-background py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="grid gap-6 md:grid-cols-2">
              <DetailBlock
                title="Who this is for"
                items={[
                  "Non-technical founders who need a reliable build partner.",
                  "Teams who validated manually and now need a product.",
                  "Founders preparing for investor demos or accelerators.",
                  "Anyone who wants to avoid wasting months on the wrong features."
                ]}
              />
              <DetailBlock
                title="How we approach MVPs"
                items={[
                  "We start from your core value proposition and user journeys.",
                  "We strip the scope to the smallest version that delivers that value.",
                  "We plan a 4–8 week build with weekly demos and feedback loops.",
                  "We design the architecture so it can grow into v1 and beyond."
                ]}
              />
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-xl text-primary sm:text-2xl">
                What you get at launch
              </h2>
              <ul className="list-disc space-y-2 pl-5 text-sm text-secondary sm:text-base">
                <li>Deployed MVP on your own domain and infrastructure.</li>
                <li>Core analytics in place so you can see what users do.</li>
                <li>Basic documentation and a clear roadmap for v1.</li>
                <li>Technical foundation that doesn&apos;t need to be thrown away.</li>
              </ul>
            </div>

            <div className="rounded-2xl border border-accent/30 bg-surface/70 p-6 sm:p-7">
              <h3 className="mb-3 font-display text-lg text-primary">
                Have an MVP in mind?
              </h3>
              <p className="mb-4 text-sm text-secondary">
                Share your idea, target audience, and deadline. We&apos;ll
                outline a realistic MVP scope and timeline with zero fluff.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-medium text-accent"
              >
                Talk about your MVP →
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

