/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green-dark': '#0D7C66',
        'custom-green-light': '#41B3A2',
        'custom-green-light2': '#E7FBE6',
        'custom-blue-light': '#BDE8CA',
      },
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

