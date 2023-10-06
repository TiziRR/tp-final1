/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'fondoUno': '#19142a',
        'fondoDos': '#d5213a',
        'fondoTres': '#50172d',
        'fondoCuatro': '#2a2344',
        'fondoCinco': '#3b3648',
        'fondoSeis': '#3a3549',
        'fondoSiete':'#542040'
        },
    },
  },
  plugins: [],
}