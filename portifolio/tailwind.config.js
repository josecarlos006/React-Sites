/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          '100': '#1CB698',
          '200': '#1e2326',
          '300': '#252A2E'
        }
      }
    },
  },
  plugins: [],
}