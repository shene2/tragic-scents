/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: '#f8f5f0',
        bone: '#ede8e0',
        ash: '#b8b0a4',
        charcoal: '#2a2520',
        obsidian: '#1a1612',
        rust: '#8c4a2f',
        gold: '#c4a46b',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'serif'],
        sans: ['Jost', 'sans-serif'],
      },
    },
  },
  plugins: [],
}