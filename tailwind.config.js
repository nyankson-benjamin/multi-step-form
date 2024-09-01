/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'xs': '400px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },

    extend: {
      colors: {
        // Define your custom colors here
        primary: '#1E40AF', // A deep blue color
        secondary: '#E11D48', // A red color
        accent: '#10B981', // A green color
        dark: '#111827', // A very dark color
        light: '#F3F4F6', // A light gray color
        customBlue: '#007BFF', // Another custom color
        marineBlue: "hsl(213, 96%, 18%)",
        purplishBlue:"hsl(243, 100%, 62%)"

      },
    },
  },
  plugins: [],
}
