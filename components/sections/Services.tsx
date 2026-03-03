"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import { SectionHeading } from "@/components/ui/SectionHeading"
import { cn } from "@/lib/utils"
import {
  Globe2,
  Smartphone,
  Cloud,
  Bot,
  Rocket,
  Workflow
} from "lucide-react"

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
  }
}

const staggerContainer = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12
    }
  }
}

const cardVariant = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
  }
}

const services = [
  {
    title: "Web Applications",
    href: "/services/web-app-development",
    icon: Globe2,
    description:
      "Full-stack web apps built with Next.js, TypeScript, and clean architecture — ready for scale.",
    tag: "Product interfaces · Admin · Dashboards"
  },
  {
    title: "MVP Development",
    href: "/services/mvp-development",
    icon: Rocket,
    description:
      "Launch in weeks, not months. Lean MVPs built to validate your idea with real users and investors.",
    tag: "Validation · Speed · Focus"
  },
  {
    title: "AI & LLM Products",
    href: "/services/ai-solutions",
    icon: Bot,
    description:
      "LLM-powered products using OpenAI, Gemini, and Claude — chatbots, copilots, automations, and RAG search.",
    tag: "OpenAI · Gemini · RAG"
  },
  {
    title: "SaaS Platforms",
    href: "/services/saas-platforms",
    icon: Cloud,
    description:
      "Multi-tenant SaaS with subscriptions, roles, analytics, and secure infrastructure from day one.",
    tag: "Subscriptions · Multi-tenant · B2B"
  },
  {
    title: "Mobile Apps",
    href: "/services/mobile-app-development",
    icon: Smartphone,
    description:
      "Cross-platform mobile apps using React Native with smooth UX and production-ready pipelines.",
    tag: "iOS · Android · React Native"
  },
  {
    title: "Custom Systems",
    href: "/services/custom-systems",
    icon: Workflow,
    description:
      "Internal tools, automation, and custom backends that streamline your operations and workflows.",
    tag: "Automation · Internal tools"
  }
]

export function ServicesSection() {
  return (
    <section className="border-t border-border/60 bg-background py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="mb-10 md:mb-12"
        >
          <SectionHeading
            badge="What we build"
            heading="Product development across the full stack."
            subheading="From the first line of code to production rollout, we cover every layer of your product."
            align="left"
          />
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
        >
          {services.map((service) => (
            <motion.div key={service.title} variants={cardVariant}>
              <Link
                href={service.href}
                className={cn(
                  "card-surface card-hover-glow flex h-full flex-col justify-between bg-surface/70 p-6 md:p-7"
                )}
              >
                <div>
                  <div className="mb-5 flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-accent/10 text-accent">
                      <service.icon className="h-5 w-5" />
                    </div>
                    <h3 className="font-display text-lg text-primary">
                      {service.title}
                    </h3>
                  </div>
                  <p className="mb-4 text-sm text-secondary">
                    {service.description}
                  </p>
                </div>
                <div className="mt-2 flex items-center justify-between text-xs">
                  <span className="font-mono text-muted">{service.tag}</span>
                  <span className="text-accent">
                    Learn more{" "}
                    <span aria-hidden className="inline-block">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

