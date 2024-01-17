import Preloader from '@/src/components/Preloader/Preloader'
import YandexMetrika from '@/src/components/YandexMetrika'
import Script from 'next/script'
import { Suspense } from 'react'

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
