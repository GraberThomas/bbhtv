import type { Config } from 'tailwindcss'

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
            },
            backgroundColor: {
                'black-83': 'rgba(0,0,0,.83)',
            },
            textColor: {
                'gris-02': '#7E7A7B',
            },
        },
    },
    plugins: [],
}
export default config
