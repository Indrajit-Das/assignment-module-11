import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Blog project for assignment-11',
  description: 'Developed by Indrajit Das',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main>
          <Navigation />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  )
}
