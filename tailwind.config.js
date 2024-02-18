/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    screens: {
      sm: "450px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        DarkBlue: "#2b3945",
        VeryDarkBlue: "#202c37",
        LightModeText: "#111517",
        DarkGray: "#858585",
        VeryLightGray: "#fafafa",
        whiteText: "#ffffff",
        Bluehover: "#066bc0",
      },
      gridTemplateColumns: {
        "auto-fit": "repeat(auto-fit, minmax(5rem, 18.5rem))",
      },

      boxShadow: {
        concreto: " 1px 1px 7px 0px rgba(0, 0, 0, 0.75)",
      },
    },
  },
  plugins: [],
};
