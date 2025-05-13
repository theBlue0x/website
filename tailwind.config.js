const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu'],
        mono: [
          'monospace'
        ],
      },
      screens: {
        betterhover: { raw: '(hover: hover)' },
      },
    },
  },
  variants: {
    extend: {
      display: ['dark'],
    },
  },
  darkMode: 'class',
  plugins: [],
};
