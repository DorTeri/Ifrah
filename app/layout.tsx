import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { Toaster } from 'react-hot-toast'


export const metadata: Metadata = {
  title: 'יפרח ייצור מרכבים',
  description: 'יפרח ייצור ארגזי משאיות',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className='relative overflow-hidden'>
          <Toaster position='top-center' reverseOrder={false} />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}
