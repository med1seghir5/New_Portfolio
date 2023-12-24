/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        body: ['Open Sans'],
        Cairo: ['Cairo', 'sans-serif'],
      },
    },

    screens: {
      'tablet': '340px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',

      'laptop': '1024px',
      // => @media (min-width: 1024px) { ... }

      'desktop': '1280px',
      // => @media (min-width: 1280px) { ... }
    },
  },
  plugins: [
  ],
}

