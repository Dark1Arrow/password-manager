/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes:{
        move:{
          '0%': {scale:0 },
          '100%': { scale:100 },
        }
      }
    },
  },
  plugins: [],
}