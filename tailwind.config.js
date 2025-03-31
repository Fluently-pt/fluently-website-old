/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Nunito", "sans-serif"],
      },
      colors: {
        brand: {
          50: "#EEF0FB", // Lightest blue tint
          100: "#DDE0F7", // Very light blue
          200: "#BBC1F3", // Light blue
          300: "#98A5FE", // Logo light blue
          400: "#5B6AB3", // Medium blue
          500: "#293587", // Logo dark blue
          600: "#212B6C", // Darker blue
          700: "#1A2256", // Very dark blue
          800: "#4B4E4E", // Gray text color
          900: "#3A3C3C", // Darker gray
        },
      },
      keyframes: {
        wave1: {
          "0%": { transform: "translate(85px, 0%)" },
          "100%": { transform: "translate(-90px, 0%)" },
        },
        wave2: {
          "0%": { transform: "translate(-90px, 0%)" },
          "100%": { transform: "translate(85px, 0%)" },
        },
        wave3: {
          "0%": { transform: "translate(-90px, 0%)" },
          "100%": { transform: "translate(85px, 0%)" },
        },
        fadeIn: {
          "0%": { opacity: "0", transform: "translateY(10px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-out forwards",
      },
      boxShadow: {
        soft: "0 4px 20px -2px rgba(41, 53, 135, 0.1)",
      },
      height: {
        screen: "100dvh",
      },
      minHeight: {
        screen: "100dvh",
      },
    },
  },
  plugins: [],
};
