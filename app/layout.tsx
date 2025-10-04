import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Natnael Ayele - Software Developer',
  description: 'Portfolio of Natnael Ayele, a passionate software developer creating innovative solutions and scalable applications.',
  generator: 'v0.dev',
  viewport: 'width=device-width, initial-scale=1',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body suppressHydrationWarning={true}>{children}</body>
    </html>
  )
}
