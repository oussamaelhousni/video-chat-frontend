/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        ubuntu: "Ubuntu, sans-serif",
      },
      colors: {
        primary: "#0097e6",
        secondary: "#2f3640",
        "secondary-dark": "#000",
      },
    },
  },
  plugins: [],
};
