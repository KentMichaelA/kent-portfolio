/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          850: '#1e293b', // Deep background
          900: '#0f172a', // Darker background
        },
        cyan: {
          400: '#22d3ee', // Futuristic accent
          500: '#06b6d4',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Enterprise standard font
      }
    },
  },
  plugins: [],
}