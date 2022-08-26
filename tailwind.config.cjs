/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
    theme: {
    extend: {
      fontFamily: {
      'seconday': ['Inter', 'sans-serif'],
      'primary': ['Montserrat', 'sans-serif'],
      }
    }
  },
  plugins: []
}
