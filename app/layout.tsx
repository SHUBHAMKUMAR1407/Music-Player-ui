import type React from "react"
import type { Metadata } from "next"
import "./globals.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "Music Player",
  description: "A custom music player application",
  generator: "v0.dev",
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}



import './globals.css'
