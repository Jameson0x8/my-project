/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // You can add custom colors here
        // 'custom-blue': '#1fb6ff',
      },
      fontFamily: {
        // You can add custom font families here
        // sans: ['Graphik', 'sans-serif'],
        // serif: ['Merriweather', 'serif'],
      },
      spacing: {
        // You can add custom spacing here
        // '128': '32rem',
        // '144': '36rem',
      },
      borderRadius: {
        // You can add custom border radius here
        // '4xl': '2rem',
      },
    },
  },
  plugins: [
    // You can add Tailwind CSS plugins here
    // require('@tailwindcss/forms'),
    // require('@tailwindcss/aspect-ratio'),
    // require('@tailwindcss/typography'),
  ],
  darkMode: 'class', // or 'media' if you want to use the system preference
}
