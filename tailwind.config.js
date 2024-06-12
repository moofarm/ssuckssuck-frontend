/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      boxShadow: {
        shadow: "inset 0px 4px 4px rgba(0, 0, 0, 0.25)",
      },
    },
    colors: {
      "white": "#fff",
      "black": "#000",
      "gray": "#7E7E7E",
      "light-green": "#DBEEDB",
      "green": "#4CAB4A",
      "darkgreen": "#2A4F27",
      "cheek": "#FF9595",
      "red": "#FF3D3D",
    },
    fontFamily: {
      "nps-reg": "NPSfontReg",
      "nps-bold": "NPSfontBold",
      "nps-exbold": "NPSfontExtraBold",
    },
  },
  plugins: [],
};
