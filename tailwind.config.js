/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        alabaster: '#F3EEE6',
        'midnight-ink': '#163F46',
        'deep-maroon': '#7F0303',
        'muted-tan': '#C9A982',
        'soft-blue': '#A9C6D0',
      },
      fontFamily: {
        serif: ['Georgia', 'serif'],
        sans: ['system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
