import { epilogue, playfair_display } from "@/app/fonts";
import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playfair: ["var(--font-playfair)", "serif"],
        epilogue: ["var(--font-epilogue)", "sans-serif"],
        "open-sans": ["var(--font-open-sans)", "sans-serif"],
        // playfair: ["Playfair Display"],
        // epilogue: ["Epilogue"],
      },
      colors: {
        // primary: "var(--color-primary)",
        // secondary: "var(--color-secondary)",
        // accent: "var(--color-accent)",
        // background: "var(--color-background)",
        // text: "var(--color-text)",
        bg: "var(--color-bg)",
        "bg-offset": "var(--color-bg-offset)",
        text: "var(--color-text)",
        "text-offset": "var(--color-text-offset)",
        border: "var(--color-border)",
        primary: "var(--color-primary)",
        "primary-offset": "var(--color-primary-offset)",
        secondary: "var(--color-secondary)",
      },
    },
  },
  plugins: [],
};
export default config;
