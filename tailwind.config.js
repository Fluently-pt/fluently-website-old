/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Nunito', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#F8F9FF',    // Brighter white background
          100: '#FFFFFF',   // Pure white
          200: '#E2E7FF',   // Enhanced light blue
          300: '#6B7DFF',   // Vibrant light purple
          400: '#4E64FF',   // Vibrant medium purple
          500: '#3B4FE3',   // Vibrant primary blue
          600: '#2C3CBF',   // Rich purple-blue
          700: '#232F99',   // Deep purple-blue
          800: '#4B4E4E',   // Gray text color
          900: '#3A3C3C',   // Darker gray
        }
      }
    },
  },
  plugins: [],
};