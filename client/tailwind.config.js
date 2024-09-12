import formsPlugin from '@tailwindcss/forms'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      borderWidth: {
        DEFAULT: '2px',
      },
    },
  },
  plugins: [
    formsPlugin,
  ],
  darkMode: 'selector',
}

