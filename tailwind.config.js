/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/**/*.{html,js}',
  ],
  theme: {
    extend: {
      // where to extend 
      colors: {
        primary: '#FF6363',
        secondary: {
          100: '#E2E2D5',
          200: '#888883', //extending tailwind styles
        }
      },
    },
    fontFamily: {
      Nunito: ['Nunito']
    }
  },
  plugins: [],
}


//can be used to extend rules or add extra classes for colours etc. or change current ones
