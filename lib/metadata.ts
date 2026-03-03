import type { Metadata } from "next"

export const siteMetadata: Metadata = {
  metadataBase: new URL("https://soonlay.tech"),
  title: {
    default: "Soonlay — Product Development Studio for Founders",
    template: "%s | Soonlay"
  },
  description:
    "Soonlay is a product development studio that builds web apps, mobile apps, SaaS platforms, and AI products for startup founders. From idea to production.",
  keywords: [
    "Soonlay",
    "soonlay.tech",
    "product development studio",
    "startup development",
    "MVP development",
    "SaaS development",
    "web app development",
    "mobile app development",
    "AI product development",
    "Next.js development",
    "React development",
    "software company India",
    "startup tech partner",
    "non-technical founders"
  ],
  authors: [{ name: "Soonlay", url: "https://soonlay.tech" }],
  creator: "Soonlay",
  publisher: "Soonlay",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://soonlay.tech",
    siteName: "Soonlay",
    title: "Soonlay — Product Development Studio for Founders",
    description:
      "We build web apps, mobile apps, SaaS platforms, and AI products for startup founders. From idea to production.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Soonlay — Product Development Studio"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Soonlay — Product Development Studio for Founders",
    description:
      "We build web apps, mobile apps, SaaS platforms, and AI products. From idea to production.",
    images: ["/og-image.png"],
    creator: "@soonlay"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  verification: {
    google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN"
  },
  alternates: {
    canonical: "https://soonlay.tech"
  }
}

