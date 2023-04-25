/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-food': "url('/img/food.jpg')",
      },
      colors: {
        navbarfooter: '#533232',
        main: '#704343',
      },
    },
  },
  plugins: [],
}
