/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,jsx}',
    './components/**/*.{js,jsx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#F5F0E8',
        gold: '#B89A6A',
        'gold-dim': '#8C7460',
        charcoal: '#1A1A1A',
        'warm-gray': '#7A7A7A',
        'off-white': '#FAF7F2',
        'dark-bg': '#141210',
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.3em',
      },
    },
  },
  plugins: [],
}
