/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/*.{js, ts, jsx, tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'dark-main': '#0e0e10',
        'dark-alt': '#1a1a1c',
        'warm-white': '#ececec',
        'gray-border': '#272b30',
        'gray-text': '#a5a5a5',
        'accent': '#9f0bb1'
      }
    },
  },
  plugins: [],
}

