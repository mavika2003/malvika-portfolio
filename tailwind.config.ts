import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Outfit", "sans-serif"],
        display: ["Fraunces", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      colors: {
        cream: "#fbf6ee",
        paper: "#f1ebe0",
        ink: "#211d1a",
        clay: {
          DEFAULT: "#c1552f",
          50: "#fdf1ea",
          100: "#f8dcc9",
          400: "#d97a4f",
          600: "#c1552f",
          700: "#9c4324",
        },
      },
      keyframes: {
        "float-soft": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(-10px) rotate(2deg)" },
        },
      },
      animation: {
        "float-soft": "float-soft 5s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
