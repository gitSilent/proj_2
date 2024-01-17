// @ts-nocheck
import type { Metadata } from 'next'
import Script from 'next/script'
import { Suspense } from 'react'
import Preloader from '../components/Preloader/Preloader'
import YandexMetrika from '../components/YandexMetrika'
import './globals.css'
import "./reset.css"

export const metadata: Metadata = {
  title: 'MishkaWood',
  description: 'Дизайнерские предметы и декор интерьера',
}

export default function RootLayout({ children, }: { children: React.ReactNode }) {

  return (
    <html lang="ru">
      <body>
        <Suspense fallback={<Preloader />}>
          {children}
        </Suspense>

        
        <YandexMetrika />

      </body>
    </html>
  )
}
