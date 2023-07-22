/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#FFD93D",
        red: {
          100: "#FF78C4",
          200: "#FF0060",
        },
      },
    },
    fontFamily: {
      body: ["Lobster"],
      roboto: ["Roboto"],
    },
  },
  plugins: [],
};
