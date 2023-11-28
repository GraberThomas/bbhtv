import type { Config } from 'tailwindcss'
import plugin from 'tailwindcss/plugin'

const config: Config = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',
        './app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
        extend: {
            backgroundImage: {
                'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
                'gradient-conic':
                    'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
                'footer-bg': "url('/triskell_bbh_footer.svg')",
                'gradient-back':
                    'linear-gradient(180deg, rgba(0,0,0,0.007423037574404767) 60%, rgba(0,0,0,1) 100%)',
            },
            backgroundColor: {
                'black-83': 'rgba(0,0,0,.83)',
            },
            textColor: {
                'gris-02': '#7E7A7B',
            },
        },
    },
    plugins: [
        plugin(function ({ addComponents }) {
            addComponents({
                '.drunkTitle1': {
                    fontFamily: 'var(--font-druk)',
                    fontSize: '48px',
                    fontWeight: '700',
                    lineHeight: '63px',
                },
                '.drunkTitle2': {
                    fontFamily: 'var(--font-druk)',
                    fontSize: '32px',
                    fontWeight: '700',
                    lineHeight: '42px',
                },
                '.ibmTitle2': {
                    fontFamily: 'var(--font-ibm)',
                    fontSize: '32px',
                    fontWeight: '700',
                    lineHeight: '22px',
                },
                '.ibmTitle3': {
                    fontFamily: 'var(--font-ibm)',
                    fontSize: '24px',
                    fontWeight: '700',
                    lineHeight: '22px',
                },
                '.drunkTitle4': {
                    fontFamily: 'var(--font-druk)',
                    fontSize: '18px',
                    fontWeight: '700',
                    lineHeight: '22px',
                },
                '.ibmTitle4': {
                    fontFamily: 'var(--font-ibm)',
                    fontSize: '18px',
                    fontWeight: '700',
                    lineHeight: '22px',
                },
                '.titleVideoCard': {
                    fontFamily: 'var(--font-ibm)',
                    fontSize: '16px',
                    fontWeight: '700',
                    lineHeight: '22px',
                },
                '.categoryNameCard': {
                    fontFamily: 'var(--font-ibm)',
                    fontSize: '12px',
                    fontWeight: '500',
                    lineHeight: '22px',
                    letterSpacing: '0px',
                    color: '#7E7A7B',
                },
                '.textLgRegular': {
                    fontFamily: 'var(--font-ibm)',
                    fontSize: '18px',
                    fontWeight: '400',
                    lineHeight: '28px',
                    letterSpacing: '0px',
                },
                '.textMdRegular': {
                    fontFamily: 'var(--font-ibm)',
                    fontSize: '16px',
                    fontWeight: '400',
                    lineHeight: '27px',
                    letterSpacing: '0px',
                },
                '.textSmRegular': {
                    fontFamily: 'var(--font-ibm)',
                    fontSize: '14px',
                    fontWeight: '400',
                    lineHeight: '21px',
                    letterSpacing: '0px',
                },
                '.textButtonNav': {
                    fontFamily: 'var(--font-ibm)',
                    fontSize: '14px',
                    fontWeight: '700',
                    lineHeight: '22px',
                    letterSpacing: '0px',
                },
            })
        }),
    ],
}
export default config
