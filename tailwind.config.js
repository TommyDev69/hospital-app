/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'xs': '480px', // custom small screen
        'sm': '640px', // Tailwind's default small screen
        'md': '768px', // Tailwind's default medium screen
        'lg': '1024px', // Tailwind's default large screen
        'xl': '1280px', // Tailwind's default extra large screen
        '2xl': '1536px', // Tailwind's default 2x large screen
        // Custom breakpoints
        'tablet': '600px',
        'laptop': '1200px',
        'desktop': '1600px',
      },
    },
  },
  plugins: [],
}