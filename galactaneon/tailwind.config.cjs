/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Galacticagrid: "Galactica grid",
        androidAssassin: "Android Assassin",
        starCruiser: "Starcruiser",
        RobotoCondensed: "Roboto Condensed",
        lobster: "Lobster",
      },
      animation: {
        tilt: "tilt 10s infinite linear",
        moving: "moving 2s linear infinite",
      },
      keyframes: {
        tilt: {
          "0%,50%,100%": {
            transform: "rotate(0deg)",
          },
          "25%": {
            transform: "rotate(1deg)",
          },
          "75%": {
            transform: "rotate(-1deg)",
          },
        },
        moving: {
          "0%": {
            left: "-20px",
          },
          "100%": {
            left: "100%",
          },
        },
      },
    },
  },
  plugins: [],
};
