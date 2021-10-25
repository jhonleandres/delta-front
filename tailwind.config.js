const { colors } = require('tailwindcss/defaultTheme')
module.exports = {
  purge: [
    './src/pages/**/*.{ts,jsx,tsx}',
    './src/components/**/*.{ts,jsx,tsx}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    colors: {
      ...colors,
      custom: {
        dark: '#3F8EB5',
        light: '#7CB8D5',
        primary: '#F3F3F3',
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  },
}
