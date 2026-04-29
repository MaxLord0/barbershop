/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'shaver-black': '#111111',
        'shaver-dark': '#1a1a1a',
        'shaver-white': '#fdfdfd',
        'shaver-gray': '#2d2d2d',
        'shaver-lightgray': '#e5e5e5',
        'shaver-gold': '#c19b76',
        'shaver-gold-hover': '#d5ad86',
      },
      fontFamily: {
        heading: ['"Oswald"', 'sans-serif'],
        subheading: ['"Lora"', 'serif'],
        sans: ['"Open Sans"', 'sans-serif'],
      },
      backgroundImage: {
        'grunge-pattern': 'url("https://www.transparenttextures.com/patterns/concrete-wall.png")',
        'noise-pattern': 'url("https://www.transparenttextures.com/patterns/black-scales.png")'
      }
    },
  },
  plugins: [],
}
