/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#eceefb",
        primary: "#833AB4",
        secondary: "#FFD93D",
        darkText: "#510020",
        dark: "#18191a",
        primaryDark: "#3a3b3c",
      },
    },
  },
  plugins: [],
};
