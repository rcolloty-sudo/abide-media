import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ink: {
          DEFAULT: "#111827",
          50: "#f9fafb",
          100: "#1e2d3d",
          900: "#0b1320",
        },
        accent: {
          DEFAULT: "#4F7EF7",
          dark: "#3a62c9",
          light: "#7ba4f9",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
