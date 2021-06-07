module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false,
  theme: {
    colors: {
      primary: '#009688',
      paper: '#102231',
      white: '#FFFFFF',
    },
    fontFamily: {
      primary: ['Nunito Sans', 'sans-serif'],
      heading: ['Open Sans', 'sans-serif'],
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
