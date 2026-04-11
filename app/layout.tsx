import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"
import Script from "next/script"
import { Suspense } from "react"
import { LanguageProvider } from "@/lib/i18n/context"

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
      <head>
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-9WVLQ77QH0" strategy="afterInteractive" />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9WVLQ77QH0');
          `}
        </Script>
      </head>
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <LanguageProvider>
          <Suspense fallback={null}>{children}</Suspense>
        </LanguageProvider>
        <Analytics />
      </body>
    </html>
  )
}
