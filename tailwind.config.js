/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: "Poppins",
    },
    colors: {
      backgroundColor: "lightgray",
      card_background: "#fcfcfc",
      dark_purple: "#000235",
      btn_primary: "#7e7ee3",
      heading_color: "#abd9d9",
      white: "#fff",
    },
  },
  plugins: [],
}

