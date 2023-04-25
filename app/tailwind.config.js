/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'bg-svg': "url('/img/bg.png')",
        'bg-food':"url('/img/food.jpg')"
      },
    },
  },
  plugins: [],
}
