/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        jediBlue: "#2E86AB",
        sithRed: "#C62828",
        rebelOrange: "#FF6F00",
        empireGray: "#212121",
        droidGold: "#FFD700",
        tatooineSand: "#D3B988",
        lightsaberGreen: "#50C878",
        darkSpace: "#0D0D0D",
        galacticWhite: "#F5F5F5",
      }
    }
  },
  plugins: [],
}

