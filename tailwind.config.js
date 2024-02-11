/** @type {import('tailwindcss').Config} */

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  darkMode: 'class',
  // eslint-disable-next-line no-undef
  plugins: [
    // eslint-disable-next-line no-undef
    require('daisyui'),
    ({ addComponents }) => {
      addComponents({
        '.cp-v': {
          clipPath: 'polygon(50% 35%, 0 0, 100% 0)',
        },
      })
    },
  ],
  daisyui: {
    base: false,
  },
}
