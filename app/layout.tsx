import type { Metadata } from 'next'
import './globals.css'
import Menu from '@/app/components/Menu'
import Footer from '@/app/components/Footer'
import { druk, ibm } from '@/app/ui/fonts/fonts'
import LiveContextProvider from '@/app/components/contexts/LiveContext'

export const metadata: Metadata = {
    title: 'BBH',
    description: 'Allow to navigate between playlist and videos of bbh.',
    icons: '/logo_bbh.svg',
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="fr" className={`${ibm.variable} ${druk.variable}`}>
            <body className={`relative flex min-h-screen flex-col text-white`}>
                <LiveContextProvider>
                    <Menu />
                    {children}
                    <Footer />
                </LiveContextProvider>
            </body>
        </html>
    )
}
