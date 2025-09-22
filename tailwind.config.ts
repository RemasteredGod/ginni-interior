import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
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
        // Custom Ginni Interior colors
        "ginni-gold": {
          50: "#fefdf9",
          100: "#fef9ed",
          200: "#fcf0d3",
          300: "#f9e2a8",
          400: "#f5d074",
          500: "#f0ba4a",
          600: "#e19d2e",
          700: "#c57b25",
          800: "#9f6328",
          900: "#82502d",
          950: "#462a14",
        },
        "ginni-beige": {
          50: "#fefdf9",
          100: "#fefbf3",
          200: "#fcf7e8",
          300: "#f8f0d4",
          400: "#f3e6b8",
          500: "#ecd79a",
          600: "#e0c17a",
          700: "#d1a561",
          800: "#bb8d4f",
          900: "#a17945",
          950: "#5c4326",
        },
        "ginni-grey": {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712",
        },
      },
      borderRadius: {
        lg: "0.5rem",
        md: "0.375rem",
        sm: "0.25rem",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
