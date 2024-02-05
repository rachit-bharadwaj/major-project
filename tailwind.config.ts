import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./components/**/*.{ts,tsx}",
    "./containers/**/*.{ts,tsx}",
    "./templates/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
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
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          100: "#eeeeee",
          200: "#d7d4d5",
          300: "#a8a8a8",
          400: "#414b55",
          500: "#2b323d",
          600: "#1d2125",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          100: "#76b3f0",
          200: "#0078b6",
          300: "#13416a",
        },
        red: {
          100: "#ffc7c5",
          200: "#ff5455",
          300: "#ff191a",
          400: "#520707",
        },
        green: {
          100: "#b7f39b",
          200: "#42c306",
          300: "#29a61e",
          400: "#12620c",
        },
        yellow: {
          100: "#fedfb1",
          200: "#f8c67e",
          300: "#e49c34",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },

      // media queries
      screens: {
        xs: "20rem", // 320px

        sm: "40rem", // 640px

        md: "48rem", // 768px

        lg: "64rem", // 1024px

        xl: "80rem", // 1280px

        "2xl": "96rem", // 1536px
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("tailwind-scrollbar")({ nocompatible: true }),
  ],
} satisfies Config;

export default config;
