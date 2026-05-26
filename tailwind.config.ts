import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary": "#f4d525",
                "primary-glow": "#ffeaa7",
                "background-light": "#f8f8f5",
                "background-dark": "#050505",
                "surface-dark": "#111111",
                "border-gold": "rgba(244, 213, 37, 0.3)",
            },
            fontFamily: {
                "display": ["var(--font-space-grotesk)", "sans-serif"],
                "body": ["var(--font-inter)", "sans-serif"],
            },
            backgroundImage: {
                'metallic-gradient': 'linear-gradient(135deg, #f4d525 0%, #fff8d6 50%, #d4b515 100%)',
                'grid-pattern': 'linear-gradient(to right, #222 1px, transparent 1px), linear-gradient(to bottom, #222 1px, transparent 1px)',
            },
            animation: {
                'pulse-glow': 'pulse-glow 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
                'shine': 'shine 5s linear infinite',
                'float': 'float 6s ease-in-out infinite',
                'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { opacity: '1', boxShadow: '0 0 20px rgba(244, 213, 37, 0.2)' },
                    '50%': { opacity: '.8', boxShadow: '0 0 40px rgba(244, 213, 37, 0.5)' },
                },
                'shine': {
                    'to': { backgroundPosition: '200% center' }
                },
                'float': {
                    '0%, 100%': { transform: 'translateY(0)' },
                    '50%': { transform: 'translateY(-20px)' },
                },
                'fade-in-up': {
                    '0%': { opacity: '0', transform: 'translateY(20px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                }
            }
        },
    },
    plugins: [],
};
export default config;
