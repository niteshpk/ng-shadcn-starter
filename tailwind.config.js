/** @type {import('tailwindcss').Config} */
module.exports = {
   darkMode: 'class', // <--- important
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        background: '#ffffff',
        foreground: '#000000',
        darkbg: '#000000',
        darkfg: '#ffffff',
      },
    },
  },
  plugins: [],
}