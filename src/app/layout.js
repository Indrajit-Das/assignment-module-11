"use client"
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'
import './globals.css'
import { Inter } from 'next/font/google'
// progress bar next-np-progressbar
import { AppProgressBar as ProgressBar } from 'next-nprogress-bar';
const inter = Inter({ subsets: ['latin'] });

const metadata = {
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
          <ProgressBar
            height="3px"
            color="#fffd00"
            options={{ showSpinner: false }}
            shallowRouting
          />
          <Footer />
        </main>
      </body>
    </html>
  )
}
