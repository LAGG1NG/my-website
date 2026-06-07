import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          50: "#faf9f7",
          100: "#f1eee9",
          200: "#ddd7cd",
          500: "#78716c",
          700: "#44403c",
          900: "#1c1917",
          950: "#0c0a09",
        },
      },
      boxShadow: {
        subtle: "0 12px 40px -32px rgb(28 25 23 / 0.45)",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
