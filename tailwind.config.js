/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounceSlow: 'bounce 20s ease-in-out infinite',
        spinSlow: 'spin 4s ease-in-out infinite',
        circleAnimation: 'spin 55s linear infinite',
      },
      screens: {
        xsm: '340px',
        lsm: '550px',
        largesm: '700px',
      },
      fontFamily: {
        montserrat: ['Montserrat', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
        onest: ['Onest', 'sans-serif'],
        robotoMono: ['Roboto Mono', 'monospace'],
        mooli: ['Mooli', 'sans-serif'],
        mavenPro: ['Maven Pro', 'sans-serif'],
        oxanium: ['Oxanium', 'cursive'],
        mPlusp: ['M PLUS 1p'],
        jaldi: ['Jaldi', 'sans-serif'],
        k2d: ['K2D', 'sans-serif']
      }
    },
  },
  plugins: [require('tailwind-scrollbar')],
}