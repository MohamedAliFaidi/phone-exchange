/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        index: "url('./public/bg.svg)",
      },
    },
  },
  plugins: [],
};
