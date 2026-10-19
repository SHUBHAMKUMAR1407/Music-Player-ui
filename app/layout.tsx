import type React from "react"
import type { Metadata } from "next"
import "./globals.scss"
import "bootstrap/dist/css/bootstrap.min.css"
import { Toaster } from "sonner"

export const metadata: Metadata = {
  title: "Music Player",
  description: "A custom music player application",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body>
        {children}
        <Toaster />
      </body>
    </html>
  )
}



import './globals.css'
