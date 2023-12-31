/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend:
    {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'dmSans': ['DM Sans', 'sans-serif'],
        'gabarito': ['Gabarito', 'sans-serif'],
        'inter': ['Inter', 'sans-serif']
      },
      animation: {
        'bounce-slow': 'bounce 9s linear infinite',
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}

