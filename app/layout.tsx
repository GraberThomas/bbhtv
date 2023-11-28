import type { Metadata } from 'next'
import './globals.css'
import Menu from '@/app/components/Menu/Menu'
import Footer from '@/app/components/Footer'
import { druk, ibm } from '@/app/ui/fonts/fonts'

export const metadata: Metadata = {
    title: 'BBH',
    description: 'Allow to navigate between playlist and videos of bbh.',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr" className={`${ibm.variable} ${druk.variable}`}>
            <body className={`relative flex min-h-screen flex-col text-white`}>
                <Menu />
                {children}
                <Footer />
            </body>
        </html>
    )
}
