import type { Metadata } from 'next'
import { Bodoni_Moda, DM_Sans } from 'next/font/google'
import { Analytics } from '@vercel/analytics/next'
import './globals.css'
import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { LanguageProvider } from '@/lib/language-context'

const bodoni = Bodoni_Moda({
  subsets: ['latin'],
  weight: 'variable',
  style: ['normal', 'italic'],
  variable: '--font-bodoni',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: 'variable',
  style: ['normal', 'italic'],
  variable: '--font-dmsans',
})

export const metadata: Metadata = {
  title: 'AURUM | Luxury Jewellery',
  description: 'Discover exquisite handcrafted jewellery pieces that embody timeless elegance and sophisticated craftsmanship.',
  keywords: ['luxury jewellery', 'fine jewellery', 'gold', 'diamonds', 'rings', 'necklaces', 'bracelets'],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${bodoni.variable} ${dmSans.variable} bg-background`}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <LanguageProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
