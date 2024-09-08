/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#0a0a0a",
        secondary: "#e8e8e8",
        tertiary: "#121212",
        "black-100": "#100d25",
        "black-200": "#090325",
        "white-100": "#f3f3f3",
      },
      boxShadow: {
        card: "0px 35px 120px -15px #211e35",
        card_secondary: "rgba(252, 233, 225, 0.08) 0px 0px 40px",
      },
      screens: {
        xs: "450px",
      },
    },
  },
  plugins: [],
};