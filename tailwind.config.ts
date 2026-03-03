import type { Config } from "tailwindcss"

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#09090B",
        surface: "#111113",
        "surface-2": "#18181B",
        border: "#27272A",
        "border-bright": "#3F3F46",
        primary: "#FAFAFA",
        secondary: "#A1A1AA",
        muted: "#52525B",
        accent: "#6EE7B7",
        "accent-2": "#38BDF8"
      },
      fontFamily: {
        display: ["var(--font-syne)", "sans-serif"],
        body: ["var(--font-dm-sans)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"]
      },
      backgroundImage: {
        "gradient-accent": "linear-gradient(135deg, #6EE7B7, #38BDF8)",
        "gradient-dark": "linear-gradient(180deg, #09090B 0%, #111113 100%)"
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "pulse-slow": "pulse 4s ease-in-out infinite",
        marquee: "marquee 30s linear infinite"
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" }
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" }
        }
      }
    }
  },
  plugins: []
}

export default config

