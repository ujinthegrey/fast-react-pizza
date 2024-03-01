/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: "IBM Plex Mono, monospace"
    },    
    extend: {
      colors: {
        pizza: '#123456',
      },
      height: {
        screen: '100dvh',
      }
    },
  },
  plugins: [],
}

