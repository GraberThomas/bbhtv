import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'BBH',
  description: 'Allow to navigate between playlist and videos of bbh.',
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
