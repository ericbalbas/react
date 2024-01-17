/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  daisyui: {
    themes: [],
  },
  plugins: [require("daisyui")],
};

