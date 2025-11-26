/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // ... (Your font families)
      fontFamily: {
        Galacticagrid: "Galactica grid",
        androidAssassin: "Android Assassin",
        starCruiser: "Starcruiser",
        RobotoCondensed: "Roboto Condensed",
        lobster: "Lobster",
        galindo: "Galindo",
      }, // 1. Animation Utility Definition

      animation: {
        tilt: "tilt 10s infinite linear",
        moving: "moving 2s linear infinite",
        "background-move": "background-move 6s linear infinite", // Correct
      }, // 2. Keyframe Definitions (THIS IS THE CRITICAL BLOCK)

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
        // 🔥 This block was misplaced, now it's inside keyframes
        "background-move": {
          "0%, 100%": { "background-position": "0% 50%" },
          "50%": { "background-position": "100% 50%" },
        },
      }, // End of keyframes block
    },
  },
  plugins: [],
};
