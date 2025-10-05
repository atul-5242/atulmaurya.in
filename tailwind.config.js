/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#2563eb',
          dark: '#3b82f6',
        },
        background: {
          light: '#ffffff',
          dark: '#000000',
        },
        text: {
          light: '#1f2937',
          dark: '#f9fafb',
        },
      },
    },
  },
  plugins: [],
}
