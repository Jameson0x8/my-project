import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'My App Landing Page',
  description: 'Welcome to my app landing page',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}