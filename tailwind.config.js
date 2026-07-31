/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      // The design frame is a fixed 1420px column. At or above that width the
      // layout can use the design's exact, flush-to-frame measurements.
      screens: { frame: '1420px' },
      fontFamily: {
        sans: ['Lexend', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['Lexend', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        lime: { brand: '#AEDC3C', deep: '#9ccb2a' },
        violet: { brand: '#8812FE', soft: '#9b45ff' },
        ink: '#0E1116',
        grass: '#62B400',
        frame: '#ECECF3',
        lav: '#F6F6FB',
      },
      maxWidth: { wide: '1420px' },
    },
  },
  plugins: [],
}
