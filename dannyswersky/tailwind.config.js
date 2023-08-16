/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        button: '0 3px 9px 0 rgba(0, 0, 0, 0.09)',
      }
    },
  },
  plugins: [],
}

