/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{svelte,js,ts,jsx,tsx}",
  ],
  darkMode:"class",
  theme: {
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
}