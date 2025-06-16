// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // This line is crucial!
    "./src/components/**/*.{js,ts,jsx,tsx}", // Ensure this covers your components
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'], // Add Inter font if you want to use it
      },
    },
  },
  plugins: [],
}