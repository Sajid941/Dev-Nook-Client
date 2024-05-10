/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "dark-primary": '#0A0E14',
        "primary-color": '#118ab2'
      },
      backgroundImage: {
        'wave': "url('./src/assets/wave-haikei (1).svg')",
        'wave-2': "url('./src/assets/wave-haikei (3).svg')",
        'circle': "url('./src/assets/circle-scatter-haikei (1).svg')",
        'circle-2': "url('./src/assets/circle-scatter-haikei.svg')",
      }

    },


  },
  plugins: [require('daisyui'),],
}