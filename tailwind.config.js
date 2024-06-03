/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      screens:{
         'custom':'820px',
         'custom2':'900px',
         'popup':'540px'
      },
    },
  },
  plugins: [],
}

