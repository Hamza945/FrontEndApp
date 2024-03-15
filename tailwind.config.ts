import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic": "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        "moniepoint-orange": "#FE4A23",
        "moniepoint-yellow": "#FFD027",
        "moniepoint-grey": "#F0F0F0",
        "moniepoint-grey-100": "#999999",
        "moniepoint-grey-200": "#CCCCCC",
        "moniepoint-black": "#0D0D0D",
        "moniepoint-purple": "#8A5CFF",
        "moniepoint-green": "#48C884",
      },
      borderRadius: {
        "4xl": "3.125rem",
      },
    },
  },
  plugins: [],
};
export default config;
