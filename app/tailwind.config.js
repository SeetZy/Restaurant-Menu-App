/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-img': "url('/img/bg.png')",
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
