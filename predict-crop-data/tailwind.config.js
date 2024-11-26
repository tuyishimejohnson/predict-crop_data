/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        noto: ["PT Serif", "serif"],
      },

      brightness: {
        25: ".25",
      },
    },
  },
  plugins: [],
};
