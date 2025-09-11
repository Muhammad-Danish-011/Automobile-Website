import { ReactNode } from 'react'
import type { Metadata, Viewport } from 'next'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from '@/components/Footer'
import Navbar from '@/components/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Outfit } from 'next/font/google'
import { Poppins } from 'next/font/google'
// import '@/styles/globals.css'
import "./globals.css";


const outfit = Outfit({
  subsets: ['latin'],
  variable: '--font-outfit',
  fallback: ['sans-serif'],
  display: 'swap',
})

const poppins = Poppins({
  weight: ['400', '600'],
  subsets: ['latin'],
  variable: '--font-poppins',
  fallback: ['sans-serif'],
  display: 'swap',
})

export const metadata: Metadata = {
  applicationName: 'DIGILIGHTED ENTERPRISES (DGL)',
  metadataBase: new URL('https://the-valley.community'),
  title: {
    default: 'DIGILIGHTED ENTERPRISES (DGL)',
    template: '%s - DIGILIGHTED ENTERPRISES (DGL)',
  },
  description: `DIGILIGHTED ENTERPRISES (DGL) is a leading platform for buying and selling new and pre-owned cars, offering a comprehensive automotive marketplace experience. We provide expert vehicle inspections, secure transactions, competitive financing options, and exceptional customer service. Our extensive inventory includes everything from luxury vehicles to economical daily drivers, all thoroughly vetted to ensure quality and reliability. With our innovative digital platform and professional team of automotive experts, we make the car buying and selling process seamless, transparent, and enjoyable for all our clients.`,
  icons: {
    icon: '/favicon.ico',
  },
  keywords: [
    'DIGILIGHTED ENTERPRISES',
    'DGL',
    'car marketplace',
    'buy cars',
    'sell cars',
    'new cars',
    'used cars',
    'luxury cars',
    'automotive platform',
    'vehicle inspections',
    'car financing',
    'car dealership',
    'car sales',
  ],
  robots: {
    index: true,
    follow: true,
    'max-image-preview': 'large',
    'max-snippet': 1,
    'max-video-preview': -1,
    googleBot: 'index, follow',
  },
  referrer: 'origin',
  creator: 'DIGILIGHTED ENTERPRISES (DGL)',
  openGraph: {
    title: {
      default: 'DIGILIGHTED ENTERPRISES (DGL)',
      template: '%s - DIGILIGHTED ENTERPRISES (DGL)',
    },
    description: `DIGILIGHTED ENTERPRISES (DGL) is a leading platform for buying and selling new and pre-owned cars, offering a comprehensive automotive marketplace experience.`,
    url: 'https://the-valley.community',
    siteName: 'DIGILIGHTED ENTERPRISES (DGL)',
    locale: 'en_US',
    type: 'website',
    countryName: 'Pakistan',
    images: {
      alt: 'DIGILIGHTED ENTERPRISES (DGL)',
      height: 630,
      width: 1200,
      url: '/opengraph-image.png',
      type: 'image/png',
    },
    emails: 'info@the-valley.community',
  },
  twitter: {
    card: 'summary_large_image',
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: 'default',
    title: 'DIGILIGHTED ENTERPRISES (DGL)',
  },
  verification: {
    google: 'google', // <-- yahan apna real Google site verification code daalna
  },
  category: 'Automotive Marketplace',
}

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${poppins.variable}`}>
      <body >
        <Analytics />
        <SpeedInsights />
        <Navbar />
        <main style={{  paddingTop:'50px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
