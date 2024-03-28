import type {Config} from "tailwindcss"

const config = {
    darkMode: ["class"],
    content: [
        './pages/**/*.{ts,tsx}',
        './components/**/*.{ts,tsx}',
        './app/**/*.{ts,tsx}',
        './src/**/*.{ts,tsx}',
    ],
    prefix: "",
    theme: {
        container: {
            center: true,
            padding: "2rem",
            screens: {
                "2xl": "1400px",
            },
        },
        extend: {
            colors: {
                surface: "#FAFAFA",
                "text-white": "#EDEDED",
                "surface-dark": "#0F0F0F",
                "selected": "#E5E5E5",
                "selected-dark": "#3A3A3A",
                "surface-dark-hover": "#161616",
                background: "#FAFAFA",
                "background-dark": "#000",
                black: "#000",
                white: "#fff",
                border: "#EAEAEA",
                "border-dark": "#333",
                "border-dark-hover": "#444",
                "border-hover": "#999",
                "muted-foreground": "#666",
                slate: {
                    50: "#F9FAFB",
                    100: "#F3F4F6",
                    200: "#E5E7EB",
                    300: "#D1D5DB",
                    400: "#9CA3AF",
                    500: "#6B7280",
                    600: "#4B5563",
                    700: "#374151",
                    800: "#1F2937",
                    900: "#111827",
                }
            },
            backgroundImage: {
                "blur": "url('/img/blur.png')",
                "blur-dark": "url('/img/blur-dark.png')",
                "blur-roadmaps": "url('/img/blur-roadmaps.png')",
                "blur-dark-roadmaps": "url('/img/blur-dark-roadmaps.png')",
            },
            fontFamily: {
                sans: ['var(--font-geist-sans)'],
                mono: ['var(--font-geist-mono)'],
            },
            keyframes: {
                "accordion-down": {
                    from: {height: "0"},
                    to: {height: "var(--radix-accordion-content-height)"},
                },
                "accordion-up": {
                    from: {height: "var(--radix-accordion-content-height)"},
                    to: {height: "0"},
                },
            },
            animation: {
                "accordion-down": "accordion-down 0.2s ease-out",
                "accordion-up": "accordion-up 0.2s ease-out",
            },
        },
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config