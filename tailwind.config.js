/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        desktop: "1440px",
      },
      padding: {
        desktop: "120px",
        desktopContent: "220px",
        mobileContent: "48px",
      },
      colors: {
        blue: {
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1E3A8A",
        },
        gray: {
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
        },
        highlight: {
          red: "#fecaca",
          orange: "#e5e7eb",
          yellow: "#fef08a",
          green: "#bbf7d0",
          sky: "#bae6fd",
          blue: "#bfdbfe",
          purple: "#e9d5ff",
          pink: "#fbcfe8",
          gray: "##e4e4e7",
        },
        black: "#060c1b",
        white: "#ffffff",
      },
      fontSize: {
        "heading-1": "96px",
        "heading-2": "60px",
        "heading-3": "48px",
        "heading-4": "32px",
        "heading-5": "24px",
        "heading-6": "20px",
        "body-1": "16px",
        "body-2": "14px",
      },
      fontFamily: {
        "concert-one": ["Concert One", "cursive"],
      },
    },
  },
  plugins: [],
};
