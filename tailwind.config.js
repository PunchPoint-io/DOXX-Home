/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lexend', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Poppins', 'Lexend', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        lime: { brand: '#AEDC3C', deep: '#9ccb2a' },
        violet: { brand: '#8812FE', soft: '#9b45ff' },
        ink: '#0E1116',
        grass: '#62B400',
      },
      maxWidth: { wide: '1200px' },
    },
  },
  plugins: [],
}
