import type { Metadata } from 'next'
import './globals.css'
import { Header } from '@/sections/header/Header'
import { Footer } from '@/sections/footer/Footer'
import { QuizProvider } from '@/contexts/QuizContext'

export const metadata: Metadata = {
  title: 'MADESHKAF',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <QuizProvider>
          <Header />
          {children}
          <Footer />
        </QuizProvider>
      </body>
    </html>
  )
}
