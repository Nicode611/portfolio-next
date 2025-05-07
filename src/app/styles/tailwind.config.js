/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#e9e9e9',
          100: '#cfd5d8',
          200: '#b1c0c7',
          300: '#94aaba',
          400: '#77959e',
          500: '#5a7f86',
          600: '#42696f',
          700: '#2a5358',
          800: '#123d41',
          900: '#00272a',
        },
        secondary: {
          50: '#1f6785',
          100: '#247290',
          200: '#297d9b',
          300: '#2e88a6',
          400: '#3393b1',
          500: '#389ebc',
          600: '#3da9c7',
          700: '#42b4d2',
          800: '#47bde7',
          900: '#4cb5fb',
        },
      },
    },
  },
  plugins: [],
}
