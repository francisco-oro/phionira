import { cn } from '@/lib/utils'
import './globals.css'
import type { Metadata } from 'next'
import { Lexend } from 'next/font/google'
import Navbar from '@/components/Navbar'
import { ThemeProvider } from '@/components/Providers'

const lexend = Lexend({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Phionira: Cursos de ingreso para exámenes de admisión a Universidad y Preparatoria ',
  description: 'Programas de preparación para la admisión al nivel superior en escuelas mexicanas. Cursos de preparación disponibles en Español e Inglés',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={cn(lexend.className, "antialiased min-h-screen p-16")}>
        <ThemeProvider>
          <Navbar></Navbar>
          {children}
        </ThemeProvider>
        </body>
    </html>
  )
}
