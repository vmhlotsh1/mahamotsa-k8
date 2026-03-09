import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"

export const metadata: Metadata = {
  title: "Mahamotsa Trading Enterprise",
  description:
    "Delivering unforgettable culinary experiences rooted in love, quality, and customer satisfaction. Professional catering services across Gauteng, South Africa.",
  keywords: [
    "Mahamotsa Trading Enterprise",
    "catering Gauteng",
    "event catering South Africa",
    "wedding catering Gauteng",
    "corporate catering Johannesburg"
  ],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <Suspense fallback={null}>
          {children}
          <Analytics />
        </Suspense>
      </body>
    </html>
  )
}
