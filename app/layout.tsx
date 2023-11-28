import type { Metadata } from 'next'
import './globals.css'
import Menu from '@/app/components/Menu/Menu'
import Footer from '@/app/components/Footer'
import { ibm_plex_sans_regular } from '@/app/ui/fonts/fonts'

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
        <html lang="en">
            <body
                className={`text-white ${ibm_plex_sans_regular.className} relative flex min-h-screen flex-col`}
            >
                <Menu />
                {children}
                <Footer />
            </body>
        </html>
    )
}
