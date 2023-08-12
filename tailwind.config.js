/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      height: {
        500: "500px",
        400: "400px",
        600: "600px",
        350: "350px",
      },
      width: {
        400: "400px",
        300: "300px",
      },
    },
  },
  variants: {},
  plugins: [],
};
