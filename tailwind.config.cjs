/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        seconday: ['Inter', 'sans-serif'],
        primary: ['Montserrat', 'sans-serif']
      }
    }
  },
  plugins: []
}
