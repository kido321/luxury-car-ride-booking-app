import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '@/components/Navbar';
import 'mapbox-gl/dist/mapbox-gl.css';
import '@mapbox/mapbox-gl-geocoder/dist/mapbox-gl-geocoder.css';
const inter = Inter({ subsets: ['latin'] })
import { Toaster } from "@/components/ui/toaster"


export const metadata: Metadata = {
  title: 'Limo Booking Service',
  description: 'Book your limousine service',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
       <Navbar/>
        {children}
        <Toaster />
      </body>
    </html>
  )
}
