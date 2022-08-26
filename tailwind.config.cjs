/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        seconday: ['Inter', 'sans-serif'],
        primary: ['Montserrat', 'sans-serif']
      },
      colors: {
        devYellow: {
          50: '#fefde8',
          100: '#fffec2',
          200: '#fffa87',
          300: '#fff043',
          // 400 is the default
          400: '#ffe226',
          500: '#efc603',
          600: '#ce9a00',
          700: '#a46e04',
          800: '#88550b',
          900: '#734610'
        },
        devPink: {
          50: '#fef1f7',
          100: '#fee5f1',
          200: '#ffcbe6',
          300: '#ffa1cf',
          400: '#ff67ad',
          500: '#fa3a8c',
          // 600 is the default
          600: '#ec2872',
          700: '#cc0a4e',
          800: '#a90b40',
          900: '#8c0f39'
        },
        devBlue: {
          50: '#effaff',
          100: '#dbf3fe',
          200: '#bfebfe',
          300: '#93e0fd',
          400: '#61ccf9',
          500: '#3cb1f5',
          // 600 is the default
          600: '#2f9aeb',
          700: '#1e7dd7',
          800: '#1f65ae',
          900: '#1e568a'
        }
      }
    }
  },
  plugins: []
}
