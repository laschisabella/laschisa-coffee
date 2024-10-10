import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        themeTitle: "#a06056",
        themeText: "#706458",
        themeSecondary: "#534b42",
        themeBg: "#f3eee8",
        coffeeBg: "#8c6e62",
      },
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
        karla: ["Karla", "sans-serif"],
        varta: ["Varta", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
