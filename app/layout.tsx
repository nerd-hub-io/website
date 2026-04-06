import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import { Suspense } from "react"

export const metadata: Metadata = {
  title: "NerdHub - Innovation. Agility. Trust.",
  description:
    "NerdHub est une entreprise innovante spécialisée dans le conseil technologique, le développement logiciel et les solutions SaaS. Expertise en DevOps, Cloud, API Management et Intelligence Artificielle.",
  keywords:
    "DevOps, Cloud Computing, API Management, Intelligence Artificielle, IA, BPM, Orchestrateur, Conseil technologique, Solutions SaaS",
  authors: [{ name: "NerdHub" }],
  creator: "NerdHub",
  publisher: "NerdHub",
  robots: "index, follow",
  openGraph: {
    title: "NerdHub - Innovation. Agility. Trust.",
    description:
      "Expertise en DevOps, Cloud, API Management et Intelligence Artificielle pour votre transformation digitale.",
    url: "https://nerd-hub.io",
    siteName: "NerdHub",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "NerdHub - Innovation. Agility. Trust.",
    description: "Expertise en DevOps, Cloud, API Management et Intelligence Artificielle.",
  },
  viewport: "width=device-width, initial-scale=1",
  generator: "Next.js",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
