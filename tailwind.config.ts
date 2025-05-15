// tailwind.config.ts
import type { Config } from 'tailwindcss'

const config: Config = {
    content: [
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './app.vue',
        './plugins/**/*.{js,ts}'
    ],
    theme: {
        container:{
            center: true,
            padding: '15px',
            screens: {
                sm: '640px',
                md: '768px',
                lg: '1024px',
                xl: '1200px',
            }
        },
        extend: {
            fontFamily: {
                mono: ['"Fira Code"', 'monospace']
            },
            colors: {
                primary: '#1c1c22',
                accent: {
                    DEFAULT: '#00ff99',
                    hover: '#00e187'
                }
            }
        }
    },
    plugins: []
}

export default config
