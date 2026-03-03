import type { Metadata } from "next"
import { Navbar } from "@/components/layout/Navbar"
import { Footer } from "@/components/layout/Footer"
import Link from "next/link"

export const metadata: Metadata = {
  title: "AI & LLM Solutions | Soonlay",
  description:
    "AI and LLM product development with OpenAI, Gemini, and Claude. Soonlay builds chatbots, copilots, RAG systems, and intelligent automations."
}

export default function AiSolutionsPage() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <main className="flex-1">
        <section className="border-b border-border/60 bg-gradient-dark pb-16 pt-28 sm:pt-32">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="mb-3 text-xs font-mono uppercase tracking-wide text-accent">
              Services / AI &amp; LLM Solutions
            </p>
            <h1 className="mb-4 font-display text-3xl tracking-tight text-primary sm:text-4xl md:text-5xl">
              AI &amp; LLM Product Development
            </h1>
            <p className="max-w-2xl text-sm text-secondary sm:text-base">
              We help you turn AI from buzzword into working product —
              carefully designed around your data, workflows, and users.
            </p>
          </div>
        </section>

        <section className="border-b border-border/60 bg-background py-14 sm:py-16">
          <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 space-y-10">
            <div className="grid gap-6 md:grid-cols-2">
              <DetailBlock
                title="What we build"
                items={[
                  "Chatbots and assistants for your product or support team.",
                  "Copilots embedded into existing tools or dashboards.",
                  "RAG (Retrieval Augmented Generation) systems over your knowledge base.",
                  "Automations that connect AI with your CRM, ticketing, or internal tools."
                ]}
              />
              <DetailBlock
                title="How we build safely"
                items={[
                  "We design prompts and flows to minimise hallucinations.",
                  "We log and monitor model behaviour from day one.",
                  "We respect data boundaries and PII handling requirements.",
                  "We work with OpenAI, Gemini, and Claude depending on your use case."
                ]}
              />
            </div>

            <div className="space-y-3">
              <h2 className="font-display text-xl text-primary sm:text-2xl">
                When AI actually makes sense
              </h2>
              <ul className="list-disc space-y-2 pl-5 text-sm text-secondary sm:text-base">
                <li>
                  You have high-touch, repetitive workflows that can be guided
                  by AI.
                </li>
                <li>
                  You sit on unstructured data (docs, tickets, chats) that
                  should be searchable and summarised.
                </li>
                <li>
                  Your product can be 10x more useful with a smart assistant
                  layer.
                </li>
                <li>
                  You want a focused, ROI-driven experiment instead of vague
                  “AI transformation”.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-accent/30 bg-surface/70 p-6 sm:p-7">
              <h3 className="mb-3 font-display text-lg text-primary">
                Explore an AI use case with us
              </h3>
              <p className="mb-4 text-sm text-secondary">
                Share your data sources and the problem you want to solve. We
                can usually suggest a concrete AI experiment in a single call.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center text-sm font-medium text-accent"
              >
                Talk about AI for your product →
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

