import type { Config } from "tailwindcss";

const { fontFamily } = require("tailwindcss/defaultTheme")

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)", ...fontFamily.sans],
      },
      colors: {
        black: {
          DEFAULT: '#000',
          100: '#000319'
        },
        blue: {
          DEFAULT: '#0E7AFE',
        }
      }
    },
  },
  plugins: [],
};
export default config;
