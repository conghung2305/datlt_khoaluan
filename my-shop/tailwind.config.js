/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}", // Scan toàn bộ file trong src
    "./node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}" // Scan file của flowbite-react
  ],
  theme: {
    extend: {},
  },
  plugins: [require('flowbite/plugin')],
}
