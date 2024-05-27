/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#007A37',
        'secondary': '#111820',
        'dark_01': '#E2251D'
      },
      fontFamily:{
        'roboto': ['Roboto', 'sans-serif']
      }
    },
  },
  darkMode: "class",
  plugins: [],
}

