/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a1a',
        secondary: '#4b7686',
        accent: '#2596be',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
      screens: {
        'xs': {'min': '1px', 'max': '320px'},
        'sm': {'min': '321px', 'max': '480px'},
        'md': {'min': '481px', 'max': '768px'},
        'lg': {'min': '769px', 'max': '1279px'},
        'xl': {'min': '1280px', 'max': '1536px'},
        'xl1': {'min': '1537px', 'max': '2559px'},
        'xl2': {'min': '2560px'},
      },
    },
  },
  plugins: [],
}

