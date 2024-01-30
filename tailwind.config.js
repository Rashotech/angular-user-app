/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      xs: "281px",
      xsmx: "412px",
      xsm: "511px",
      midmax: "900px",
      ...defaultTheme.screens,
      smax: "1440px",
    },
    extend: {
      colors: {
        button: "#1A326E",
        pageColor: "#1A326E",
        icon: "#D8E9F1",
      },
      backgroundImage: {
        poise:
          "url('https://i.ebayimg.com/images/g/QvQAAOSwvixgINGo/s-l1600.jpg')",
      },
    },
    keyframes: {
      shimmer: {
        "100%": { transform: "translateX(100%)" },
      },
      plugins: [],
    },
  },
};
