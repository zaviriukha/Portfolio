// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./components/**/*.{vue,js,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./app.vue",
    "./plugins/**/*.{js,ts}",
  ],
  theme: {
    container: {
      center: true,
      padding: "15px",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
      },
    },
    extend: {
      fontFamily: {
        mono: ['"Fira Code"', "monospace"],
      },
      colors: {
        primary: "#A3E0FE",
        accent: {
          DEFAULT: "#CA2585",
          hover: "#A349A3",
        },
      },
    },
  },
  plugins: [],
};

export default config;
