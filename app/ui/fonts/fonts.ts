import localFont from 'next/font/local'

export const druk = localFont({
    src: [
        {
            path: '../../fonts/Druk/druk_text/DrukText-Bold.otf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../fonts/Druk/druk_text/DrukText-BoldItalic.otf',
            weight: '700',
            style: 'italic',
        },
        {
            path: '../../fonts/Druk/druk_text/DrukText-Heavy.otf',
            weight: '900',
            style: 'normal',
        },
        {
            path: '../../fonts/Druk/druk_text/DrukText-HeavyItalic.otf',
            weight: '900',
            style: 'italic',
        },
        {
            path: '../../fonts/Druk/druk_text/DrukText-Medium.otf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../fonts/Druk/druk_text/DrukText-MediumItalic.otf',
            weight: '500',
            style: 'italic',
        },
    ],
    variable: '--font-druk',
})

export const ibm = localFont({
    src: [
        {
            path: '../../fonts/IBM_Plex_Sans/IBMPlexSans-Bold.ttf',
            weight: '700',
            style: 'normal',
        },
        {
            path: '../../fonts/IBM_Plex_Sans/IBMPlexSans-Medium.ttf',
            weight: '500',
            style: 'normal',
        },
        {
            path: '../../fonts/IBM_Plex_Sans/IBMPlexSans-Regular.ttf',
            weight: '400',
            style: 'normal',
        },
    ],
    variable: '--font-ibm',
})
