/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        charcoal: '#1A1A1A',
        wood: '#1e140f',
        'wood-light': '#2c1e16',
        cream: '#fdfbf7',
        'cream-dark': '#f4e9db',
        gold: '#b8860b',
        'gold-light': '#d4af37',
        steel: '#8a8d91',
        offwhite: '#f5f5f5',
        vintage: {
          100: '#fdfbf7',
          200: '#f4e9db',
          800: '#2c1e16',
          900: '#1e140f',
        }
      },
      fontFamily: {
        heading: ['"Rye"', 'serif'],
        subheading: ['"Playfair Display"', 'serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'wood-pattern': 'url("https://images.unsplash.com/photo-1550684376-efcbd6e3f031?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80")',
        'paper-pattern': 'url("https://www.transparenttextures.com/patterns/aged-paper.png")',
        'brush-stroke': 'url("https://png.pngtree.com/png-vector/20230808/ourmid/pngtree-black-brush-stroke-vector-png-image_6891630.png")'
      }
    },
  },
  plugins: [],
}
